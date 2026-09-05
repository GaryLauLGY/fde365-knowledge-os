# FDE365 Knowledge OS 开发文档

## 1. 产品边界

本项目是桌面端 Obsidian 插件，不是 Claudian 的配置层。插件负责四件事：

1. 用FDE365蓝白视觉提供知识驾驶舱；
2. 首次启用时以 create-only 方式初始化六类资产知识库；
3. 把技能的 34 个工作流作为项目能力部署在知识库内，并让面板直接反映其信息架构和合同；
4. 在用户主动发起请求时，通过本地 Codex app-server 运行可读写 Vault 的 FDE365 Agent。

插件本体不改写用户主目录、Shell 配置或系统环境变量。用户版的右侧 Agent 在当前 Vault 的插件目录内自动维护独立 `CODEX_HOME`，仅向自己启动的 `codex app-server` 子进程传入该路径和当前 Vault Token；开发版则原样继承 Obsidian 进程可见的本机 Codex CLI 环境，不注入 Token、不覆盖 `CODEX_HOME`。

## 2. 目录与构建产物

| 路径 | 作用 |
| --- | --- |
| `source.js` | Obsidian 生命周期、初始化服务、Agent 授权界面和固定 AI Provider；不承载业务页面 |
| `fde-agent-runtime.js` | Codex app-server JSON-RPC 连接、会话恢复、工具事件和写入确认 |
| `fde-workspace.js` | 六库运行模型、配置解析、数据服务、通用弹窗和工作台依赖装配 |
| `fde-workspace-view-base.js` | 右侧 Agent、导航、滚动恢复、Markdown 渲染和响应式布局等七页共享视图基类 |
| `fde-workspace-views.js` | 总览、待处理、六类资产、资产网络、内容生产、技能、知识体检七个业务页面 |
| `styles.css` | FDE365 Logo、Obsidian 原生主题变量、响应式工作台样式 |
| `vault-template/` | 知识库模板的唯一编辑源 |
| `vault-template/.fde/config.yaml` | 六库路径和运行行为的事实来源 |
| `vault-template/.agents/skills/` | 34 个项目本地技能及其引用、脚本和模板 |
| `blueprint.json` | 由模板生成并打入插件的初始化蓝图 |
| `assets/fde365-logo.png` | FDE365透明横版 Logo（运行时资源） |
| `assets/fde365-logo-source.svg` | 用户提供的 FDE365原始 SVG |
| `main.js` | esbuild 生成的 Obsidian 运行文件 |
| `main.dev.js` | 开发通道运行文件，仅用于本地打包，不提交 Git |
| `scripts/` | 蓝图生成、测试、发布检查和 ZIP 打包脚本 |

发布包只包含运行所需文件、Logo 和许可，不包含测试 Vault、`data.json`、工作区状态、Token 或源码依赖。

## 3. 首次初始化

Obsidian `layoutReady` 后，`VaultBootstrapService` 读取 `blueprint.json`，在当前 Vault 下创建 `FDE365知识库/`。

- 缺失目录：创建；
- 缺失文件：写入模板；
- 已存在同名文件：跳过并记录冲突；
- 后续修复：仍然只补缺失项，不覆盖、不移动、不删除；
- 初始化状态：只保存在当前 Vault 的插件 `data.json`。

模板业务结构由技能统一提供：通用待处理材料、个人说明书、产品库、客户需求库、素材案例库、方法论库、内容生产。蓝图 v8 包含完整的 34 个项目技能、FDE 版本与能力清单。`7-系统` 是本插件增加的运行目录，只放 AI 运行记录和输出，不计入六类业务资产。

术语升级会在蓝图补缺前执行一次定向迁移：仅重命名插件维护的第一类资产目录与模板文件，并更新 `.fde/config.yaml`、根规则、使用说明及项目技能。若旧、新目录同时存在则停止合并并提示用户；普通笔记不会被扫描或改写。初始化和模板修复仍保持 create-only。

运行时由 `FDEWorkspaceService` 重新读取 `.fde/config.yaml`，解析六类资产路径；路径配置不是只在构建期烘焙进 UI。正式资产统计明确排除 `.agents`、`.fde`、`7-系统` 和目录说明文件。

修改模板后必须重新生成蓝图：

```bash
node scripts/build-blueprint.mjs
```

## 4. AI Provider 与本地 Agent

运行时只注册 `Fde365Provider`用于账号校验与连接测试。右侧对话和 34 个技能统一由 `FdeCodexAgentRuntime` 通过 `codex app-server --stdio` 执行，线上请求使用 FDE365 的 OpenAI Responses 兼容接口。

用户只配置：

- 邮箱验证码登录；
- `claude-fable-5`、`claude-opus-4-8`、`gpt-5.6-sol`、`gpt-5.6-luna` 预置模型或服务端价格表中模型；

Token 只保存在当前 Vault 的 `.obsidian/plugins/fde365-knowledge-os/data.json`。该文件必须保持 Git 忽略。隔离配置只声明 `env_key = "FDE365_TOKEN"`，Token 仅在启动 Agent 子进程时临时传入，不写入隔离 `config.toml`，也不会进入 `~/.codex/config.toml`。

Agent 支持两种执行模式：默认的“需要批准”使用 `on-request + read-only`，命令和写入通过插件确认；“YOLO”使用 `never + workspace-write`，仅在当前 Vault 内允许无需逐次批准的自动执行。两种模式都禁止网络和 Vault 外访问，不会改动用户主目录中的 Codex 配置。

Agent 任务不设置固定的整体执行时限。长任务会持续等待 app-server 的完成事件，并且只会在启动握手失败、运行组件退出、返回明确错误或用户主动停止时结束；启动请求仍保留独立的短超时，避免运行组件无法接单时无限等待。

需要批准模式的命令确认框默认只显示有头尾信息的短预览和字符数，避免脚本正文撑满窗口；用户仍可展开查看完整命令后再决定是否允许。

## 5. UI 结构

总览和六个子页面共用一个 `FDEWorkspaceView` / Obsidian 标签，内部切换只更改 `pageKey`；保留各页滚动位置、筛选、勾选和共享 Agent 会话。插件入口通过 `activateWorkspace` 复用已有标签，并锁定并发首次打开，避免生成重复标签。旧视图类型仅作为布局恢复兼容入口注册，仍由同一工作台类承载；不主动关闭用户已有标签。打开真实笔记仍走 Obsidian Markdown 编辑器。

配色、字体、边框和强调色继承 Obsidian 主题变量，不再维护插件独立深浅色开关。窄于 1120px 的标签默认收起 Agent，可用顶部按钮展开；窄于 760px 的标签用页面选择器切换，避免侧栏挤压正文。

UI 只保留当前 `wis-*` 工作台实现。早期未注册的 `akos-*` Dashboard、Inbox、Projects、Agents、Analytics 等并行页面已删除，不允许再把旧视图或旧主题样式放回 `source.js`。新增业务页面应写入 `fde-workspace-views.js`，跨页面共用的 Agent 与布局行为写入 `fde-workspace-view-base.js`，数据读取和状态转换优先写入 `FDEWorkspaceService`，插件生命周期与 Provider 留在 `source.js`。

主视图包含总览、待处理、六类资产、资产网络、内容生产、技能和知识体检。侧栏、Logo、卡片和 AI 面板统一使用FDE365蓝白色系；核心视觉识别是六类资产卡片和贯穿页面的五阶段内容发布闭环。

右侧“FDE365 Agent”是单一、稳定的工作面。它合并了对话、当前模型状态、当前笔记与显式文件上下文、新对话、保存输出、历史记录、六库状态和 34 个技能路由。会话实例保存在插件级内存中，切换中间工作台不会重建 Agent 会话。对话刷新会保存每个页签的滚动锚点：用户停在底部时继续跟随新消息，向上查看历史时保持原位置。中间工作台重绘也会恢复自身滚动位置，勾选或操作待处理材料时不会回弹到顶部。

Agent 的 assistant 消息使用 Obsidian 原生 `MarkdownRenderer`，以当前已选笔记作为双链解析来源；用户输入和错误消息继续按纯文本显示。每次工作台重绘会替换 Markdown 渲染子组件，并在异步渲染完成后恢复滚动位置，避免残留渲染生命周期或因表格、代码块高度变化产生跳动。

右侧工作区的“对话 / FDE / 技能 / 历史”切换栏在 Agent 内容滚动时保持吸顶；执行模式说明可以正常滚出视野，不持续占用对话空间。

所有页面上的技能执行按钮都必须先切换到右侧对话并复用当前会话，运行状态、结果与后续确认始终留在同一条对话中；只有用户点击“新对话”才允许清空当前会话并在下一次发送时创建新 thread。待处理首次处理、批量处理和重新处理同样遵守该规则，不得后台静默创建会话。

首次启用会在初始化完成后打开五步新人指引悬浮窗，介绍收集、六类资产、AI 协作、本地边界以及邮箱登录与兑换额度路径。完成、跳过或关闭后记录当前指引版本，后续启动不再打扰；用户仍可通过命令面板或设置页面重新打开。

- 总览读取六库真实文件、来源覆盖、未知项和内容阶段；
- 待处理保留原文，并把整理动作交给 `/材料入库`；
- 待处理只提供快速文字记录和文件导入；内置语音录制、系统听写入口与语音转写 API 均不属于插件运行时；
- 待处理拖入区将原文件 create-only 写入 `原始文件/`，再建立 Markdown 待处理记录；拖入本身不启动技能，只有用户点击后才运行 `/材料入库`；
- `/材料入库` 的分流预览只进入右侧对话和 AI 运行记录，不得在待处理目录生成第二条材料；预览完成后状态停在 `awaiting-confirmation`，行按钮改为“前往确认”。点击后恢复该材料原会话并预填“确认执行”，由用户决定是否发送；等待确认项不进入单项或批量重复处理。只有当前对话收到明确确认、Agent 返回全部步骤完成标记，且 app-server 提供真实文件写入事件时，插件才把原记录标记为 `processed`，保持路径不变并排到列表底部。等待确认和已处理项可以勾选用于删除，但批量处理必须过滤它们。单项与批量删除都必须经过独立确认，只允许把选中收件记录及其 `original_file` 指向的收件箱原始文件移入回收站，不得级联删除正式资产、处理记录或 Agent 对话；
- 六类资产只使用 `.fde/config.yaml` 定义的正式分类；
- 资产网络使用 Obsidian 已解析的真实链接，不生成演示节点；“整理关联”只把有依据且已确认的关系写入两端 Markdown Wikilink，除非用户明确要求，否则不生成 Canvas；
- 内容生产按选题、草稿、待审核、待发布、已发布推进，推进前必须确认当前环节已完成；已发布是终点，发布数据单独上传分析；
- 技能展示 34 个已部署工作流，并将对应 `SKILL.md` 作为执行合同；
- 知识体检检查来源、未知项、版本、阶段冲突、路径边界和技能完整性。

统计全部基于当前 Vault 的本地文件、元数据缓存、链接和任务，不上传遥测。只有用户点击发送时，明确选择的提示词和上下文才会交给当前 Provider。

## 6. 本地开发与验证

推荐 Node.js 20 或更新版本：

```bash
npm ci
npm run build
npm test
npm run check
```

项目使用构建时通道，不向普通用户暴露运行时切换开关：

| 通道 | Agent 配置 | 账号凭证 | 模型 | 自动更新 |
| --- | --- | --- | --- | --- |
| `user` | 当前 Vault 内独立 `CODEX_HOME` | 读取当前 Vault `data.json` | 服务端价格表，未同步时显示预置模型 | 启用 |
| `dev` | 继承本机 Codex CLI 登录和配置 | 不要求、不注入 | 不传 `model`，使用本机默认值 | 固定关闭 |

生成可直接解压进 Vault 的开发包：

```bash
npm run package:dev
```

产物位于 `dev-release/FDE365-Knowledge-OS-Plugin-v<version>-dev.zip`。开发包与用户包保持同一插件 ID，因此不能在同一 Vault 同时启用；解压开发包会替换该 Vault 的用户构建。

完整发布前执行：

```bash
npm run verify
npm run package:release
```

核心验收项：

1. 蓝图目录和模板完整；
2. 二次初始化不覆盖已有文件；
3. 未登录账号明确报错且不回退；
4. 运行时只注册固定FDE365 Provider；
5. 请求地址固定为 `https://api.ipzsk.com/v1/chat/completions`，设置页不显示 Base URL；
6. 发布包不含凭据、`data.json`、工作区或测试 Vault；
7. 固定验证六类资产、五个内容阶段和 34 个唯一技能；
8. 在真实 Obsidian 测试 Vault 中验证启用、导航、升级修复、create-only、Token 设置和模型切换；真实请求需使用专用测试 Token。

## 7. 发布与许可

版本号必须在 `manifest.json`、`package.json` 和 `versions.json` 保持一致。`scripts/package-release.mjs` 会生成带插件目录层级的 ZIP 和 `SHA256SUMS.txt`。

GitHub 自动更新固定读取 `GaryLauLGY/fde365-knowledge-os` 的最新正式 Release。每个 Release 标签必须与 `manifest.json` 版本完全一致，并上传 `main.js`、`manifest.json`、`styles.css`、两份 Logo、`update-manifest.json`、完整插件 ZIP 和 `SHA256SUMS.txt`。更新清单只允许替换五个运行资源，不允许包含 `data.json`。

UI 基线来自 MIT 许可的 Knowledge-OS；知识模板来自 CC BY-NC 4.0 的 `kb-suite`。当前交付仅按个人自用/内部验证处理，商用或收费分发前必须重新确认授权。完整来源和版本见 `LICENSES.md`。

## 账号/计费合并（1.2.0）

fde-account.js 实现固定中转站账号合同；fde-account-settings.js 渲染设置。schemaVersion 5 保存 account 与 billing。旧 Token 不自动迁移到新站；余额与价格只接受服务端结果，不提供演示扣费。后端尚未交付，见 docs/billing-backend.md；完成联调前不要推送自动更新。此轮不发布 DEV 产物。
