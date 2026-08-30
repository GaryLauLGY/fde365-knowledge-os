# FDE365 Knowledge OS

一个可直接安装的 Obsidian 桌面插件：启用后会在当前 Vault 内初始化“FDE365知识库”，并提供六类资产驾驶舱、原始收集箱、资产网络、内容生产流水线、35 个项目内 FDE Skills 和知识体检。

## 安装

1. 解压发布包，将整个 `fde365-knowledge-os` 目录放到当前 Vault 的 `.obsidian/plugins/`。
2. 在 Obsidian 设置 → 第三方插件中启用“FDE365 Knowledge OS”。
3. 插件会自动补齐 `FDE365知识库/`。蓝图 v3 包含 143 个目录、500 个文件和完整的 35 个 FDE Skills；已有同名文件不会被覆盖。可在命令面板运行“检查并修复知识库模板”。

## 自动更新

- 插件默认每 6 小时从 `fdekb.garylau.ai` 国内更新服务检查一次新版本，启动后也会自动检查。
- 更新文件下载后会先校验固定仓库、插件 ID、版本、文件白名单和 SHA-256，再替换插件运行文件；`data.json`、Token、知识笔记与其他 Vault 数据不在更新范围内。
- 安装完成后重启 Obsidian 即可启用新版本。也可在“设置 → FDE365 Knowledge OS → 插件更新”手动检查。
- 官方发布仓库：<https://github.com/GaryLauLGY/fde365-knowledge-os>
4. 首次启用会出现五步新人指引悬浮窗；最后一步包含购买 Token、填写位置和模型选择教程。可跳过，也可在命令面板或插件设置中选择“重新打开新人指引”。

## AI 配置

插件只连接FDE365 AI 服务，服务地址已经内置且不会在设置页显示：

1. 前往 [api.fde365.ai](https://api.fde365.ai/) 购买或创建 Token。
2. 打开 Obsidian 设置 → FDE365 Knowledge OS → AI 服务，在 **Token** 一栏填写。
3. 从 `claude-fable-5`、`claude-opus-4-8`、`gpt-5.6-sol`、`gpt-5.6-luna` 中选择模型并点击“测试连接”。

Token 仅保存在当前 Vault 的插件 `data.json`，不会写入知识笔记或发布包。首次运行右侧 Agent 时，插件会在当前 Vault 的插件目录内自动创建独立 Codex 配置，并只向该 Agent 子进程临时传入 Token；不会修改 `~/.codex`、本机 Codex App、Shell 或系统环境变量。独立插件更新后无需重新运行安装器。

## 知识库结构

- `0-待处理材料`（录音、文档、聊天、图片等通用收件箱）
- `1-个人说明书`
- `2-产品库`
- `3-客户需求库`
- `4-素材案例库`
- `5-方法论库`
- `6-内容生产`
- `.fde/config.yaml`（六库路径和行为配置的事实来源）
- `.agents/skills`（35 个项目内 FDE Skills）
- `VERSION`、`fde-manifest.json`（FDE Skills 版本与能力清单）
- `7-系统`（插件运行记录、模板、AI 输出；不属于业务资产分类）

## 面板与工作流

- **FDE365 Agent**：右侧统一工作区通过本地 Codex app-server 运行，可读取当前 Vault、运行 FDE Skills，并在用户确认后修改文件；AI 回答使用 Obsidian 原生 Markdown 阅读效果，表格、代码块和双链可直接查看，复制时仍保留原始 Markdown。每个 Vault 使用独立配置，不影响本机 Codex App，插件更新后也无需重跑安装器。
- **总览**：六库真实文件数、来源覆盖率、未知项、内容阶段和近期资产；不把 Skill、系统文件或 README 计入资产。
- **待处理**：支持快速文字记录、拖入和选择本地文件，不提供内置语音录制或语音转写。已有音频可作为普通原始文件上传；插件只收录原文并建立待处理记录，不自动调用 AI。用户点击“用 `/fde-ingest` 处理”后，才按“原文 → 事实 → 推断 → 未知”在右侧对话生成分流预览，不会新增一条“分流预览”材料。生成预览后状态显示“等待确认”，原按钮变成“前往确认”；点击会恢复对应对话并预填“确认执行”，不会自动发送。只有用户明确确认、Agent 完成正式资产写入、来源回链和处理记录，并返回真实写入证据后，原材料才自动标记为已处理并排到列表底部。等待确认和已处理项不会进入批量处理，但可以勾选后批量删除。单项或批量删除都需要再次确认；确认后，收件记录和对应原始文件会一并移入回收站，正式资产、处理记录和 Agent 对话不删除。
- **六类资产**：个人说明书、产品、客户需求、素材案例、方法论和内容生产是唯一正式分类，不再额外发明 AI 主题分类。
- **资产网络**：按 Obsidian 真实链接计算六库之间的连接矩阵；点击“整理关联”后，`/fde-organize` 会先确认关系依据，再把已确认关系写入两端资产的真实 Wikilink，不以 Canvas 预览代替。
- **内容生产**：选题、草稿、待审核、待发布、已发布五阶段；每次推进先确认当前环节完成，已发布即结束。CSV、Excel、TSV 或 JSON 发布数据可单独上传给 `/fde-spread` 分析。
- **FDE Skills**：展示并运行全部 35 个本地 Skill；执行时要求 Provider 先读取对应 `SKILL.md` 合同。
- **知识体检**：检查来源覆盖、未知项、版本、阶段冲突、路径边界和 Skill 部署完整性。

统计与体检全部在本地完成。只有用户主动发起 Agent 请求时，当前任务和所需上下文才会通过 FDE365 服务发送给模型；本地文件工具由 Codex app-server 执行，Token 不会写进会话或笔记。

模板源来自 `ozrwayne/kb-suite`，许可和上游声明见 [LICENSES.md](./LICENSES.md)、[KB-SUITE-LICENSE.txt](./KB-SUITE-LICENSE.txt) 与 [KB-SUITE-NOTICE.md](./KB-SUITE-NOTICE.md)。目前交付按本地自用/内部验证处理；商用分发前需要重新确认上游非商业许可。

开发、构建、Provider 参数和初始化机制见 [DEVELOPMENT.md](./DEVELOPMENT.md)。

开发者可运行 `npm run package:dev` 生成独立的 DEV ZIP。该构建不要求 Vault Token，右侧 Agent 直接使用本机 Codex CLI 的登录、Provider 和默认模型，同时关闭正式版自动更新。
