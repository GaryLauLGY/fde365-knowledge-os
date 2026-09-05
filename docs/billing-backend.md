# FDE365 账号与计费集成说明

来源：ozrwayne/kb-suite，提交 b010603c5047bd8c7ef87ea9f34b6e6a888b5f64（2026-09-05 核对）。下方保留上游后台开发说明，原许可与来源声明见根目录 LICENSES.md、KB-SUITE-NOTICE.md。

## 当前交付与限制

本仓库包含插件侧账号 UI 和客户端，不包含可部署的计费服务器。上游同样只有编译后的插件及后台规格，没有服务端代码或管理后台应用。没有迁移其演示账号、演示验证码、假余额或本地扣费逻辑。本轮没有配置 DNS、发送真实验证码、兑换或触发计费。

服务统一固定为 https://api.ipzsk.com/v1。旧 ai.fde365.token 只保留兼容数据，不会自动发往新服务；升级后需在账号设置重新登录。

2026-09-05 对 /pricing、/me/balance 的只读探测未能完成 TLS 连接。这不等同于接口已部署，也不能作为线上计费验收。新版本在后端联调完成前不应推送给自动更新用户。

## FDE 当前运行时的必要补充

- 上游第 8 项仅描述 /chat/completions，当前 FDE Agent 使用 Codex app-server 的 **POST /v1/responses**，服务端必须同时支持 Responses 流式事件、工具调用和用量结算，否则连接测试通过仍不能证明 Agent 可用。
- 价格表必须返回明确 unit（例如每百万输入/输出 tokens），未返回时插件只标注“计价单位尚未说明”，不自行推定单价。
- 查询余额、流水和兑换须验证同一用户的 Bearer 凭证；/auth/refresh 必须旋转凭证并防重放。验证码接口不得返回验证码，需限频、防枚举、限制尝试次数。
- 登录、余额、定价等返回 JSON 对象；发码允许空 200/204。余额缺失显示未知，不补零；刷新失败保留最后一次余额并显示错误。
- 兑换事务必须原子且幂等。客户端对网络错误不自动重试兑换，也不伪造成功。HTTP 401 必须在任何变更之前返回，客户端只允许刷新凭证后重试一次。
- 并发 AI 请求必须预占额度或事务锁定，再按真实用量结算/退回预占；不能仅“读余额→调用→扣款”。流式取消、断线和上游失败也必须有唯一请求 ID、结算账本与防重复扣费。
- 后端运营接口必须与用户接口分离鉴权，人工调账和改价须审计；不得将供应商密钥、用户凭证、兑换码正文写入日志。
- 跨机余额、真实收信、一次性核销、402 拒绝、Responses 完整工具回合、断流结算都需要服务端联调。目前仅客户端模拟响应与隔离安装回归完成后可视为代码测试通过。

## 上游原始规格（参考方案，不是已实现后台）

# 后台开发说明

第一版只做 `https://api.ipzsk.com/v1`。

插件已经按这套接口写好。路径或字段名如果改了，要同步改插件。

用户不用先打开网站注册。第一次邮箱验证成功，后端建号。

AllValue 只负责收款和发兑换码。第一版不对接 AllValue Webhook，不自建收银台。

## 后端管什么

1. 邮箱验证码登录，签发用户 Token。
2. 兑换码核销，给账号加 credits。
3. 查余额、记流水。
4. 中转 AI：用户带 Token 来，后端用采购的上游 Key 调模型，再按价格扣 credits。
5. 后台改模型单价。插件拉 `/v1/pricing`。

插件里不放上游 Key。用户也拿不到上游 Key。

## 计价

插件只显示 credits。

内部可以按「1 USD Credit = 100 credits」倒推套餐和单价，再告诉用户怎么买。不要让插件写死换算。

套餐权益以数据库为准，不根据兑换码文字判断。文档里的参考套餐：

| 商品 | 售价 | 增加额度 | 兑换码池 |
| --- | ---: | ---: | --- |
| 入门包 | 100 元 | 1000 credits | `BASIC_100` |
| 标准包 | 300 元 | 3500 credits | `STANDARD_300` |
| 专业包 | 500 元 | 6500 credits | `PRO_500` |

## 要建的表

**users**
邮箱、当前 credits、创建时间。邮箱唯一。第一次验码成功就插入。

**email_codes**
邮箱、验证码哈希、过期时间、已用。建议 5–10 分钟失效，同一邮箱限流。

**sessions**
user_id、access_token 哈希、refresh_token 哈希、过期时间。

**plans**
套餐代码、增加多少 credits。

**redemption_codes**
兑换码哈希、套餐、状态（未使用 / 已使用 / 已撤销 / 已过期）、有效期、兑换用户、兑换时间。不要存可直接使用的明文。

**ledger**
每次 credits 变动一行：用户、类型、数量、兑换码、变化前、变化后、时间。类型至少有 `REDEEM`、`AI_USAGE`、`REFUND`、`ADMIN_ADJUSTMENT`、`EXPIRATION`。

**model_prices**
模型 id、输入单价、输出单价，单位用 credits。后台改这里。

## 插件已经在打的 8 个接口

### 1．发验证码

`POST /v1/auth/email/request`

```json
{ "email": "you@example.com" }
```

后端发信。返回 200 即可。不要在接口里回验证码。

### 2．验码登录

`POST /v1/auth/email/verify`

```json
{ "email": "you@example.com", "code": "123456" }
```

邮箱不存在就建号。返回：

```json
{
  "access_token": "用户Token",
  "refresh_token": "刷新Token",
  "expires_in": 604800,
  "email": "you@example.com"
}
```

### 3．刷新登录

`POST /v1/auth/refresh`

```json
{ "refresh_token": "..." }
```

返回新的 `access_token`、`refresh_token`。

### 4．查余额

`GET /v1/me/balance`
Header：`Authorization: Bearer 用户Token`

```json
{
  "total_credits": 1200,
  "used_credits": 300,
  "remaining_credits": 900,
  "usage_percent": 25
}
```

### 5．使用记录

`GET /v1/me/usage`

```json
{
  "items": [
    {
      "created_at": "2026-09-05T01:00:00Z",
      "type": "AI_USAGE",
      "amount": -12,
      "model": "gpt-5.6-luna",
      "remaining_credits": 888
    }
  ]
}
```

消耗用负数，兑换用正数。

### 6．价格表

`GET /v1/pricing`
可以不登录。

```json
{
  "models": [
    {
      "id": "gpt-5.6-luna",
      "name": "gpt-5.6-luna",
      "input_credits": 1,
      "output_credits": 3
    }
  ]
}
```

### 7．兑换

`POST /v1/me/redeem`

```json
{ "redemption_code": "OB100-K7MP-9WX2-C8Q4" }
```

必须在同一个事务里：锁兑换码、检查未使用、加余额、写流水、标已使用。并发只能成功一次。

```json
{
  "success": true,
  "credits_added": 1000,
  "remaining_credits": 1200
}
```

### 8．调模型

`POST /v1/chat/completions`
请求体按 OpenAI 格式：`model`、`messages`、`temperature`。
Header 带用户 Token，不要带上游 Key。

后端步骤：

1. 验用户 Token。
2. 看余额，不够直接 `402`。
3. 用上游 Key 调采购来的 API。
4. 按 token 用量和 `model_prices` 算 credits。
5. 扣余额，写 `AI_USAGE` 流水。
6. 把模型结果回给插件，最好带上 `remaining_credits`。

余额不够：

```json
{ "error": { "message": "credits 不足，请兑换后再试" } }
```

HTTP 状态用 `402`。登录失效用 `401`。

## 兑换码怎么准备

后端按套餐批量生成，导出后导入 AllValue 对应商品的自动发货库存。

AllValue 每完成一笔支付，发出一个兑换码。用户复制到插件。插件打 `/v1/me/redeem`。

每个兑换码对应：商品、增加额度、有效期、状态、创建时间、兑换时间、兑换用户。

## 运营后台，可以不给用户看

- 按套餐批量生成兑换码并导出。
- 撤销未使用兑换码。
- 改模型单价。
- 按邮箱查余额、流水、兑换记录。
- 人工加减 credits，流水记 `ADMIN_ADJUSTMENT`。
- 兑换码库存：少于 100 个提醒，少于 20 个通知，等于 0 停止自动发货。

## 第一版不要做

- 自建支付页面。
- 支付渠道接入。
- AllValue Webhook。
- 支付完成后自动充值。
- 把上游 API Key 发给用户。
- 让用户直接访问 New API。
- 完整用户网站。

## 建议实现顺序

1. 把 `api.ipzsk.com` 解析到这套服务，只开 HTTPS。
2. 邮箱发码和验码，能签发用户 Token。
3. 余额和兑换。
4. `/v1/pricing`。
5. `/v1/chat/completions` 中转并扣费。
6. 管理后台：生成兑换码、改价格、查用户。

## 和插件的分工

| 谁 | 做什么 |
| --- | --- |
| 插件 | 收集邮箱和兑换码，保存用户 Token，显示 credits |
| 后端 | 发信、验码、建号、核销、记账、扣费、中转模型 |
| AllValue | 收款并发兑换码，第一版不和后端直连 |

## 验收

1. 未登录不能调模型和兑换。
2. 兑换码只能成功一次。
3. 兑换失败不改余额。
4. 并发提交同一个兑换码只能成功一次。
5. 用户换电脑登录后余额还在。
6. 插件代码中没有供应商密钥。
7. credits 不足返回 `402`，插件能显示原因。
8. 后台改价后，插件拉 `/v1/pricing` 能看到新单价。
