# FDE365 Knowledge OS

一个可直接安装的 Obsidian 桌面插件：启用后会在当前 Vault 内初始化“FDE365知识库”，并提供六类资产驾驶舱、原始收集箱、资产网络、内容生产流水线、35 个项目内 FDE Skills 和知识体检。

## 安装

1. 解压发布包，将整个 `fde365-knowledge-os` 目录放到当前 Vault 的 `.obsidian/plugins/`。
2. 在 Obsidian 设置 → 第三方插件中启用“FDE365 Knowledge OS”。
3. 插件会自动补齐 `FDE365知识库/`。蓝图 v3 包含 143 个目录、500 个文件和完整的 35 个 FDE Skills；已有同名文件不会被覆盖。可在命令面板运行“检查并修复知识库模板”。

## 自动更新

- 插件默认每 6 小时从 FDE365 官方 GitHub Release 检查一次新版本，启动后也会自动检查。
- 更新文件下载后会先校验固定仓库、插件 ID、版本、文件白名单和 SHA-256，再替换插件运行文件；`data.json`、Token、知识笔记与其他 Vault 数据不在更新范围内。
- 安装完成后重启 Obsidian 即可启用新版本。也可在“设置 → FDE365 Knowledge OS → 插件更新”手动检查。
- 官方发布仓库：<https://github.com/GaryLauLGY/fde365-knowledge-os>
4. 首次启用会出现五步新人指引悬浮窗；最后一步包含购买 Token、填写位置和模型选择教程。可跳过，也可在命令面板或插件设置中选择“重新打开新人指引”。

## AI 配置

插件只连接FDE365 AI 服务，服务地址已经内置且不会在设置页显示：

1. 前往 [api.fde365.ai](https://api.fde365.ai/) 购买或创建 Token。
2. 打开 Obsidian 设置 → FDE365 Knowledge OS → AI 服务，在 **Token** 一栏填写。
3. 从 `claude-fable-5`、`claude-opus-4-8`、`gpt-5.6-sol`、`gpt-5.6-luna` 中选择模型并点击“测试连接”。

Token 仅保存在当前 Vault 的插件 `data.json`，不会写入知识笔记或发布包。插件不会读取或修改系统环境变量和其他 AI 客户端配置。

## 知识库结构

- `0-录音处理`
- `1-老板说明书`
- `2-产品库`
- `3-客户需求库`
- `4-素材案例库`
- `5-方法论库`
- `6-内容生产`
- `.kb/config.yaml`（六库路径和行为配置的事实来源）
- `.agents/skills`（35 个项目内 FDE Skills）
- `VERSION`、`kb-manifest.json`（kb-suite 版本与能力清单）
- `7-系统`（插件运行记录、模板、AI 输出；不属于业务资产分类）

## 面板与工作流

- **FDE365 AI**：右侧统一工作区保留对话、当前笔记、文件上下文、新对话、历史、六库状态和 Skill 路由；点击模型状态可直接打开 Token 与模型设置。
- **总览**：六库真实文件数、来源覆盖率、未知项、内容阶段和近期资产；不把 Skill、系统文件或 README 计入资产。
- **待处理**：原始材料先落盘，再由 `/kb-ingest` 按“原文 → 事实 → 推断 → 未知”整理，保留来源路径。
- **六类资产**：老板说明书、产品、客户需求、素材案例、方法论和内容生产是唯一正式分类，不再额外发明 AI 主题分类。
- **资产网络**：按 Obsidian 真实链接计算六库之间的连接矩阵。
- **内容生产**：选题、草稿、待审核、待发布、已发布、数据复盘六阶段；推进阶段前要求人工确认。
- **FDE Skills**：展示并运行全部 35 个本地 Skill；执行时要求 Provider 先读取对应 `SKILL.md` 合同。
- **知识体检**：检查来源覆盖、未知项、版本、阶段冲突、路径边界和 Skill 部署完整性。

插件上下文严格限制在 `FDE365知识库/` 的六类资产内，不会跨项目扫描 Vault。统计与体检全部在本地完成；只有用户主动发送的请求和选定上下文会交给当前 Provider。

模板源来自 `ozrwayne/kb-suite`，许可和上游声明见 [LICENSES.md](./LICENSES.md)、[KB-SUITE-LICENSE.txt](./KB-SUITE-LICENSE.txt) 与 [KB-SUITE-NOTICE.md](./KB-SUITE-NOTICE.md)。目前交付按本地自用/内部验证处理；商用分发前需要重新确认上游非商业许可。

开发、构建、Provider 参数和初始化机制见 [DEVELOPMENT.md](./DEVELOPMENT.md)。
