# FDE Skills 新手入门

## 第一次使用

先确认当前目录包含 `.fde/config.yaml`。然后输入：

```text
/fde-start
```

`fde-start` 会先判断知识库是否为空，再把任务交给一个具体 Skill。

- 知识库为空：使用 `/fde-interview`。
- 有录音、聊天记录或旧文档：使用 `/fde-ingest`。
- 已经有六类资产：根据任务进入诊断、选题、写作或审核。

## 34 个 Skill

### 建库和维护

- `/fde-start`：主入口和任务路由。
- `/fde-interview`：采访用户，建立六类资产。
- `/fde-ingest`：处理录音、聊天记录和旧文档。
- `/fde-export`：导出聊天记录，交给导入流程。
- `/fde-library`：搜索、录入和维护知识库。
- `/fde-health`：检查目录、来源、索引和运行状态。
- `/fde-organize`：整理已有资产；“整理关联”会在确认依据后，把跨库关系写入两端真实 Obsidian 双链。
- `/fde-setup`：建立 Agent 工作目录。
- `/fde-update`：检查或更新这一套 `fde-*`。
- `/fde-safety`：检查 Skill 中的可疑行为。

### 生意和行动

- `/fde-diagnose`：诊断生意、产品、定价和客户问题。
- `/fde-benchmark`：研究对标对象。
- `/fde-define`：拆解模糊概念。
- `/fde-goal`：把愿望改成可检查的目标。
- `/fde-question`：把困惑整理成可处理的问题。
- `/fde-decide`：记录和复盘决策。
- `/fde-action`：处理知道要做但没有行动的问题。
- `/fde-focus`：找到当前约束，确定主动作和暂停清单。
- `/fde-learn`：根据反馈继续学习。

### 内容生产

- `/fde-topics`：从六类资产中找选题。
- `/fde-write`：按平台和任务写内容。
- `/fde-review`：内容审核总入口。
- `/fde-hook`：检查短视频开头。
- `/fde-title`：生成小红书标题。
- `/fde-flow`：检查逐字稿衔接。
- `/fde-impact`：检查文稿是否击中受众。
- `/fde-spread`：分析内容的传播原因。
- `/fde-check`：检查空泛表达、无来源事实和表达偏差。
- `/fde-format`：生成微信公众号 HTML。

### 讨论和状态

- `/fde-discuss`：按不同职责讨论一个具体决定。
- `/fde-economy`：从价格、成本、选择、激励和信息检查判断。
- `/fde-save`：保存当前任务状态。
- `/fde-resume`：恢复上次状态。
- `/fde-report`：把多次记录整理成报告。

## 写入规则

- 原始材料保留在 `0-待处理材料/待处理` 或用户指定的收件位置。
- 新增资产要记录来源。
- 不能确定分类时，先放待处理区，不要猜。
- 删除和覆盖前要让用户确认。
- 内容草稿、审核稿和发布稿分开保存。

## 常用流程

```text
采访或导入
→ 六类资产库
→ 选题
→ 写作
→ 审核
→ 发布和复盘
```

遇到不确定的任务，回到 `/fde-start`。
