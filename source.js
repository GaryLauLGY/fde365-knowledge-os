const {
  ItemView,
  Modal,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
  TFile,
  normalizePath,
  requestUrl,
  requireApiVersion,
  setIcon,
} = require("obsidian");
const KNOWLEDGE_BLUEPRINT = require("./blueprint.json");
const FDEWorkspace = require("./fde-workspace.js");
const GitHubUpdater = require("./github-updater.js");
const { FdeCodexAgentRuntime } = require("./fde-agent-runtime.js");
const Account = require("./fde-account.js");
const { renderAccountSettings } = require("./fde-account-settings.js");

const FDE365_BUILD_CHANNEL = typeof __FDE365_BUILD_CHANNEL__ === "string" ? __FDE365_BUILD_CHANNEL__ : "user";
const IS_DEVELOPER_BUILD = FDE365_BUILD_CHANNEL === "dev";

const DASHBOARD_VIEW_TYPE = "ai-knowledge-os-dashboard";
const INBOX_VIEW_TYPE = "ai-knowledge-os-inbox";
const LIBRARIES_VIEW_TYPE = "ai-knowledge-os-knowledge";
const NETWORK_VIEW_TYPE = "ai-knowledge-os-graph";
const CONTENT_VIEW_TYPE = "ai-knowledge-os-projects";
const SKILLS_VIEW_TYPE = "ai-knowledge-os-agents";
const HEALTH_VIEW_TYPE = "ai-knowledge-os-analytics";
const DEFAULT_ROOT = "FDE365知识库";
const LEGACY_ROOT = String.fromCodePoint(0x661f, 0x9645, 0x7559, 0x767d, 0x77e5, 0x8bc6, 0x5e93);
const TERMINOLOGY_VERSION = 2;
const INBOX_LAYOUT_VERSION = 1;
const KNOWLEDGE_CONTRACT_VERSION = 2;
const LEGACY_OWNER_LABEL = String.fromCodePoint(0x8001, 0x677f);
const LEGACY_OWNER_DIRECTORY = `1-${LEGACY_OWNER_LABEL}说明书`;
const OWNER_DIRECTORY = "1-个人说明书";
let ROOT = DEFAULT_ROOT;
let PROJECT_ROOT;
let AGENT_ROOT;
let AI_OUTPUT_ROOT;

function configureKnowledgeRoot(root = DEFAULT_ROOT) {
  ROOT = String(root || DEFAULT_ROOT);
  PROJECT_ROOT = `${ROOT}/6-内容生产`;
  AGENT_ROOT = `${ROOT}/7-系统/AI协作`;
  AI_OUTPUT_ROOT = `${AGENT_ROOT}/输出`;
  return ROOT;
}

configureKnowledgeRoot();

async function resolveKnowledgeRoot(app) {
  const exists = async (path) => Boolean(
    app.vault.getAbstractFileByPath(path)
    || await app.vault.adapter.exists?.(path).catch?.(() => false),
  );
  if (await exists(DEFAULT_ROOT)) return DEFAULT_ROOT;
  if (await exists(LEGACY_ROOT)) return LEGACY_ROOT;
  return DEFAULT_ROOT;
}

function neutralizeManagedTerminology(value) {
  const text = String(value || "");
  const replacements = [
    [`${LEGACY_OWNER_LABEL}个人资料`, "个人资料"],
    [`${LEGACY_OWNER_LABEL}能懂`, "易于理解"],
    [`当前${LEGACY_OWNER_LABEL}`, "当前个人定位"],
    [`${LEGACY_OWNER_LABEL}说明书`, "个人说明书"],
    [`${LEGACY_OWNER_LABEL}原话`, "本人原话"],
    [`${LEGACY_OWNER_LABEL}表达`, "个人表达"],
    [`${LEGACY_OWNER_LABEL}判断`, "个人判断"],
    [`${LEGACY_OWNER_LABEL}观点`, "个人观点"],
    [`${LEGACY_OWNER_LABEL}个人`, "个人"],
    [LEGACY_OWNER_LABEL, "个人"],
  ];
  return replacements.reduce((result, [from, to]) => result.split(from).join(to), text);
}

function migrateManagedKnowledgeContract(value, kind = "") {
  let text = String(value || "");
  if (kind === "config") {
    text = text
      .replace(/^update_source:\s*https:\/\/github\.com\/GaryLauLGY\/fde365-knowledge-os\s*$/mi, `update_source: ${FDE365_UPDATE_ORIGIN}/plugin/latest.json`)
      .replace(/^(\s*)recordings:\s*0-录音处理\/待处理录音\s*$/mi, "$1pending: 0-待处理材料/待处理")
      .replace(/^(\s*)processed:\s*0-录音处理\/已处理\s*$/mi, "$1processed: 0-待处理材料/已处理记录")
      .replace(/^(\s*(?:state|indexes|logs|versions|reports|quarantine):\s*)\.kb\//gmi, "$1.fde/");
  }
  if (kind === "agents") {
    const legacyRuntimeRoot = `.${String.fromCharCode(107, 98)}`;
    const materialRule = "- 录音、聊天、会议纪要、文档、图片和其他原始材料保留在 `0-待处理材料/待处理`；处理流程不会移动、删除或用摘要覆盖。只有用户在原始材料列表明确确认删除时，才将收件记录和对应原始文件一并移入回收站。";
    text = text
      .replace(`- \`${legacyRuntimeRoot}/config.yaml\` 是六类资产、收件箱和运行目录的路径真源。`, "- `.fde/config.yaml` 是六类资产、收件箱和运行目录的唯一路径真源。")
      .replace("- 原始录音、聊天、会议纪要和旧资料保留在 `0-录音处理/待处理录音`，不得用摘要覆盖。", materialRule)
      .replace("- 录音、聊天、会议纪要、文档、图片和其他原始材料保留在 `0-待处理材料/待处理`，不得移动、删除或用摘要覆盖；处理完成只更新同一条材料记录的状态。", materialRule)
      .replace("- 状态、索引、日志和版本只写入 `.kb`，AI 运行记录写入 `7-系统/AI协作`。", "- 状态、索引、日志和版本只写入 `.fde`，AI 运行记录写入 `7-系统/AI协作`。")
      .replace("- `6-内容生产`：选题、草稿、审核、发布和复盘。", "- `6-内容生产`：选题、草稿、审核和发布；`已发布` 是流程终点，发布数据单独分析。");
    const canonicalRule = "- `.fde/config.yaml` 是六类资产、收件箱和运行目录的唯一路径真源。";
    const legacyRule = `- 旧 \`${legacyRuntimeRoot}/\` 只作历史追溯，不是运行配置或状态真源；任何 Agent 均不得按其中路径执行。`;
    if (text.includes(canonicalRule) && !text.includes(legacyRule)) text = text.replace(canonicalRule, `${canonicalRule}\n${legacyRule}`);
  }
  if (kind === "health") {
    const truthRule = ".fde/config.yaml` 是唯一运行真源。旧 `.kb/` 只作历史追溯：不要读取其中配置来决定路径，也不要仅因它仍存在就报告真源冲突。";
    if (!text.includes(truthRule)) {
      text = text.replace(
        "- AGENTS.md、CLAUDE.md 和已安装 fde-* 清单",
        `- AGENTS.md、CLAUDE.md 和已安装 fde-* 清单\n\n\`${truthRule}`,
      );
    }
    const pendingHeading = "### 待处理口径";
    if (!text.includes(pendingHeading)) {
      const pendingRules = [
        pendingHeading,
        "",
        "- 待处理数量只统计收件箱中的原始材料记录：兼容 `type: inbox` 或没有 `type` 的旧材料，但必须排除 README、`原始文件/`、`附件/`、分流预览、分流记录和处理记录。",
        "- `status` 为 `processed`、`completed`、`closed`、`done`、`已完成`、`已处理` 或 `结案` 的原始材料属于已处理，不得再次计入积压或建议重新入库。",
        "- 同源处理记录或正式资产可以作为终态证据；若原材料状态仍是 pending，报告“状态待对齐”，不要把同一材料同时统计为待处理和已处理。",
        "- 同一材料有多份预览时，旧的 `awaiting-confirmation` 是历史审计记录；已有更新的 `confirmed-noop`、processed 收件记录或完成写入证据时，不把旧预览当成当前冲突，也不改写或删除它。",
        "- 目录中的非隐藏文件总数不是待处理数量。报告时分别给出原始材料、有效待处理、已处理和派生产物数量。",
      ].join("\n");
      text = text.replace(
        "5. 把问题分为阻塞、要处理和提醒，只给出有证据的问题。",
        `5. 把问题分为阻塞、要处理和提醒，只给出有证据的问题。\n\n${pendingRules}`,
      );
    }
    const repairRule = "- 修正规则真源时只更新 FDE365 管理的旧默认路径，不删除 `.kb/`，不覆盖自定义业务路径";
    if (!text.includes(repairRule)) {
      text = text.replace("- 默认不写；确认后只创建缺失空目录或修正明确的路径", `- 默认不写；确认后只创建缺失空目录或修正明确的路径\n${repairRule}`);
    }
  }
  return text;
}

async function listAdapterFiles(adapter, root) {
  if (!adapter || typeof adapter.list !== "function") return [];
  const files = [];
  const pending = [normalizePath(root)];
  while (pending.length) {
    const directory = pending.shift();
    const result = await adapter.list(directory);
    files.push(...(result?.files || []).map((path) => normalizePath(path)));
    pending.push(...(result?.folders || []).map((path) => normalizePath(path)));
  }
  return [...new Set(files)];
}
const FDE365_BASE_URL = "https://api.ipzsk.com/v1";
const FDE365_CHAT_ENDPOINT = `${FDE365_BASE_URL}/chat/completions`;
const FDE365_MODELS = Object.freeze([
  "claude-fable-5",
  "claude-opus-4-8",
  "gpt-5.6-sol",
  "gpt-5.6-luna",
]);
const DEFAULT_FDE365_MODEL = "gpt-5.6-luna";
const ONBOARDING_VERSION = 4;
const FDE365_RELEASE_REPOSITORY = "GaryLauLGY/fde365-knowledge-os";
const FDE365_UPDATE_ORIGIN = "https://fdekb.garylau.ai";
const FDE365_RELEASE_API = `${FDE365_UPDATE_ORIGIN}/plugin/latest.json`;
const UPDATE_CHECK_INTERVAL_MS = 6 * 60 * 60 * 1000;

const ONBOARDING_STEPS = Object.freeze([
  {
    icon: "sparkles",
    eyebrow: "欢迎来到FDE365",
    title: "把零散信息，慢慢变成你的知识资产",
    description: "Knowledge OS 会在当前 Vault 中建立一套本地知识工作台。你可以先收集，再分类、连接和生产内容。",
    highlights: [
      { icon: "inbox", title: "统一收集", text: "灵感、网页和文件先进待处理。" },
      { icon: "library", title: "六类资产", text: "按个人、产品、客户、案例、方法论与内容管理。" },
      { icon: "shield-check", title: "本地优先", text: "初始化只补缺失文件，不覆盖你已有的内容。" },
    ],
  },
  {
    icon: "inbox",
    eyebrow: "第一步 · 收集",
    title: "先放进“待处理”，不用立刻想分类",
    description: "当信息还不完整时，先保留原始材料和来源。等你有时间，再让 FDE Skills 帮你整理。",
    highlights: [
      { icon: "square-pen", title: "快速记录", text: "用命令面板新建待处理笔记。" },
      { icon: "globe", title: "收藏网页", text: "保留链接、正文和来源，方便以后追溯。" },
      { icon: "file-up", title: "原始文件", text: "把访谈、会议和其他原始素材放在同一入口。" },
    ],
  },
  {
    icon: "boxes",
    eyebrow: "第二步 · 沉淀",
    title: "六类资产，是整个系统的骨架",
    description: "整理时保留“事实、推断、未知”的边界，再用真实链接建立资产网络。",
    highlights: [
      { icon: "user-round", title: "经营与产品", text: "个人说明书与产品库保留你的核心判断。" },
      { icon: "target", title: "客户与案例", text: "把真实需求、反馈和有证据的案例连起来。" },
      { icon: "workflow", title: "方法与内容", text: "用经过验证的方法，推动五阶段内容发布闭环。" },
    ],
  },
  {
    icon: "bot",
    eyebrow: "第三步 · 协作",
    title: "让 AI 在你选定的范围内工作",
    description: IS_DEVELOPER_BUILD
      ? "只有你主动发起任务时，本地 Agent 才会读取所需 Vault 内容，并使用本机 Codex CLI 的登录和配置。"
      : "只有你主动发起任务时，本地 Agent 才会读取所需 Vault 内容并通过 FDE365 服务调用模型。登录凭证只保存在当前 Vault。",
    highlights: [
      { icon: "bot", title: "FDE365 Agent", text: "可读取 Vault、运行 Skills，需要写入时向你确认。" },
      { icon: "wand-sparkles", title: "34 个 FDE Skills", text: "从收集、整理、写作到体检，按合同执行。" },
      IS_DEVELOPER_BUILD
        ? { icon: "shield-check", title: "不覆盖本机配置", text: "开发版不注入 Token，不改写 CODEX_HOME 或 Shell 环境变量。" }
        : { icon: "shield-check", title: "凭证本地保存", text: "Token 不会写入知识笔记，也不会包含在插件发布包中。" },
    ],
  },
  {
    icon: "key-round",
    eyebrow: "第四步 · 配置模型",
    title: IS_DEVELOPER_BUILD ? "使用本机 Codex CLI" : "两步连接FDE365 AI",
    description: IS_DEVELOPER_BUILD
      ? "开发版使用本机 Codex CLI 已有的登录、Provider 和默认模型，不需在 Obsidian 内填写 Token。"
      : "先用邮箱登录，再兑换额度并选择模型。服务地址已经内置，无需手动配置。",
    highlights: IS_DEVELOPER_BUILD ? [
      { icon: "terminal", title: "1. 本机登录", text: "先在终端确认 Codex CLI 已经可用并完成登录。" },
      { icon: "settings", title: "2. 原样继承", text: "插件不传入模型或 Provider，使用本机 Codex 默认配置。" },
      { icon: "refresh-cw-off", title: "3. 开发通道", text: "自动更新已关闭，需要新版时重新构建 DEV ZIP。" },
    ] : [
      { icon: "mail", title: "1. 邮箱登录", text: "打开账号与额度，用邮箱验证码登录。", action: "open-token-settings" },
      { icon: "ticket", title: "2. 兑换额度", text: "在账号与额度中输入兑换码，余额以服务端返回为准。", action: "open-token-settings" },
      { icon: "cpu", title: "3. 选择模型", text: "同步服务端价格表并选择模型，然后点击“测试连接”（会产生用量）。" },
    ],
  },
]);

const AGENT_RUN_STATUSES = Object.freeze({
  DRAFT: "draft",
  QUEUED: "queued",
  RUNNING: "running",
  WAITING_REVIEW: "waiting-review",
  SUCCESS: "success",
  FAILED: "failed",
  CANCELLED: "cancelled",
  BLOCKED: "blocked",
});

const AGENT_STATUS_TRANSITIONS = Object.freeze({
  draft: new Set(["queued", "cancelled"]),
  queued: new Set(["running", "blocked", "cancelled"]),
  running: new Set(["waiting-review", "failed", "blocked", "cancelled"]),
  "waiting-review": new Set(["success", "failed", "cancelled"]),
  success: new Set(),
  failed: new Set(["queued"]),
  blocked: new Set(["queued", "cancelled"]),
  cancelled: new Set(["queued"]),
});

const DEFAULT_SETTINGS = {
  schemaVersion: 5,
  account: Account.normalizeAccount(),
  billing: Account.normalizeBilling(),
  terminologyVersion: 0,
  inboxLayoutVersion: 0,
  knowledgeContractVersion: 0,
  userName: "Gary",
  openOnStartup: true,
  immersiveMode: true,
  colorTheme: "light",
  onboardingVersion: 0,
  updates: {
    autoInstall: true,
    lastCheckedAt: "",
    lastError: "",
    pendingVersion: "",
  },
  blueprint: {
    version: 0,
    lastCheckedAt: "",
    lastCreated: 0,
    conflicts: [],
  },
  ai: {
    provider: "fde365",
    assistant: {
      contextScope: "active-note",
      autoSaveOutput: false,
      maxContextChars: 20000,
      executionMode: "approval",
      panelWidth: 336,
    },
    fde365: {
      token: "",
      model: DEFAULT_FDE365_MODEL,
      temperature: 0.3,
      timeoutMs: 120000,
    },
  },
  graphSnapshot: null,
  graphDefaultDepth: 2,
};

function mergeSettings(raw = {}) {
  const legacyApi = raw.ai?.openaiCompatible || {};
  const currentApi = raw.ai?.fde365 || {};
  const token = String(currentApi.token || legacyApi.token || legacyApi.apiKey || "").trim();
  const requestedModel = String(currentApi.model || legacyApi.model || "").trim();
  const models = Account.modelIds(raw, FDE365_MODELS);
  const model = models.includes(requestedModel) ? requestedModel : models.includes(DEFAULT_FDE365_MODEL) ? DEFAULT_FDE365_MODEL : models[0];
  return {
    ...DEFAULT_SETTINGS,
    ...raw,
    schemaVersion: 5,
    account: Account.normalizeAccount(raw.account),
    billing: Account.normalizeBilling(raw.billing),
    terminologyVersion: Math.max(0, Number(raw.terminologyVersion) || 0),
    inboxLayoutVersion: Math.max(0, Number(raw.inboxLayoutVersion) || 0),
    knowledgeContractVersion: Math.max(0, Number(raw.knowledgeContractVersion) || 0),
    blueprint: {
      ...DEFAULT_SETTINGS.blueprint,
      ...(raw.blueprint || {}),
      conflicts: Array.isArray(raw.blueprint?.conflicts) ? raw.blueprint.conflicts : [],
    },
    updates: {
      ...DEFAULT_SETTINGS.updates,
      ...(raw.updates || {}),
      autoInstall: raw.updates?.autoInstall !== false,
    },
    ai: {
      provider: "fde365",
      assistant: {
        ...DEFAULT_SETTINGS.ai.assistant,
        ...(raw.ai?.assistant || {}),
        executionMode: raw.ai?.assistant?.executionMode === "yolo" ? "yolo" : "approval",
        panelWidth: Math.max(280, Math.min(560, Number(raw.ai?.assistant?.panelWidth) || DEFAULT_SETTINGS.ai.assistant.panelWidth)),
      },
      fde365: {
        token,
        model,
        temperature: Number.isFinite(Number(currentApi.temperature ?? legacyApi.temperature))
          ? Number(currentApi.temperature ?? legacyApi.temperature)
          : DEFAULT_SETTINGS.ai.fde365.temperature,
        timeoutMs: Math.max(10000, Number(currentApi.timeoutMs ?? legacyApi.timeoutMs) || DEFAULT_SETTINGS.ai.fde365.timeoutMs),
      },
    },
  };
}

function debounce(fn, wait = 300) {
  let timer;
  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), wait);
  };
}

function formatRelativeTime(timestamp) {
  const delta = Date.now() - timestamp;
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  if (delta < minute) return "刚刚";
  if (delta < hour) return `${Math.floor(delta / minute)} 分钟前`;
  if (delta < day) return `${Math.floor(delta / hour)} 小时前`;
  if (delta < day * 2) return "昨天";
  const date = new Date(timestamp);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function safeName(input) {
  return (input || "未命名")
    .replace(/[\\/:*?"<>|#^\[\]]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 60);
}

function yamlQuote(value) {
  return JSON.stringify(String(value ?? ""));
}

function getMessageText(message) {
  const content = message?.content ?? message?.text ?? message?.message ?? "";
  if (typeof content === "string" && content.trim()) return content.trim();
  if (Array.isArray(content)) {
    const text = content.map((block) => {
      if (typeof block === "string") return block;
      return block?.text ?? block?.content ?? block?.value ?? "";
    }).filter(Boolean).join("\n\n").trim();
    if (text) return text;
  }
  if (content && typeof content === "object") {
    const text = String(content.text || content.value || "").trim();
    if (text) return text;
  }
  if (Array.isArray(message?.contentBlocks)) {
    return message.contentBlocks.map((block) => block?.content ?? block?.text ?? block?.value ?? "").filter(Boolean).join("\n\n").trim();
  }
  return "";
}

function wait(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}

class KnowledgeOSRouter {
  constructor(plugin) {
    this.plugin = plugin;
  }

  async navigate(route, params = {}) {
    switch (route) {
      case "dashboard": return this.plugin.activateView(params);
      case "inbox": return this.plugin.activateInbox(params);
      case "libraries":
      case "knowledge": return this.plugin.activateKnowledge(params);
      case "network":
      case "graph": return this.plugin.activateGraph(params);
      case "content":
      case "projects": return this.plugin.activateProjects(params);
      case "skills":
      case "agents": return this.plugin.activateAgents(params);
      case "health":
      case "analytics": return this.plugin.activateAnalytics(params);
      case "settings": return this.plugin.openSettings(params.section);
      default: throw new Error(`Unknown Knowledge OS route: ${route}`);
    }
  }
}

class KnowledgeOSOnboardingModal extends Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
    this.stepIndex = 0;
    this.finished = false;
  }

  onOpen() {
    this.modalEl.addClass("fde365-onboarding-modal");
    this.render();
  }

  render() {
    const { contentEl } = this;
    const step = ONBOARDING_STEPS[this.stepIndex];
    contentEl.empty();
    contentEl.setAttr("aria-live", "polite");

    const shell = contentEl.createDiv({ cls: "fde365-onboarding-shell" });
    const brand = shell.createDiv({ cls: "fde365-onboarding-brand" });
    const logo = brand.createEl("img", { attr: { src: this.plugin.logoResource(), alt: "" } });
    logo.setAttr("aria-hidden", "true");

    const progress = shell.createDiv({ cls: "fde365-onboarding-progress" });
    progress.createSpan({ text: `${this.stepIndex + 1} / ${ONBOARDING_STEPS.length}` });
    const dots = progress.createDiv({ cls: "fde365-onboarding-dots", attr: { "aria-label": "新人指引进度" } });
    ONBOARDING_STEPS.forEach((_, index) => {
      const dot = dots.createEl("button", {
        cls: index === this.stepIndex ? "is-active" : index < this.stepIndex ? "is-complete" : "",
        attr: { "aria-label": `前往第 ${index + 1} 步`, type: "button" },
      });
      dot.addEventListener("click", () => {
        this.stepIndex = index;
        this.render();
      });
    });

    const hero = shell.createDiv({ cls: "fde365-onboarding-hero" });
    const icon = hero.createDiv({ cls: "fde365-onboarding-hero-icon" });
    setIcon(icon, step.icon);
    const copy = hero.createDiv({ cls: "fde365-onboarding-copy" });
    copy.createDiv({ text: step.eyebrow, cls: "fde365-onboarding-eyebrow" });
    copy.createEl("h2", { text: step.title });
    copy.createEl("p", { text: step.description });

    const cards = shell.createDiv({ cls: "fde365-onboarding-highlights" });
    for (const item of step.highlights) {
      const card = cards.createDiv({ cls: "fde365-onboarding-highlight" });
      const cardIcon = card.createDiv({ cls: "fde365-onboarding-highlight-icon" });
      setIcon(cardIcon, item.icon);
      const cardCopy = card.createDiv();
      cardCopy.createEl("strong", { text: item.title });
      cardCopy.createEl("p", { text: item.text });
      if (item.action === "open-token-settings") {
        const button = cardCopy.createEl("button", {
          text: "打开账号设置",
          cls: "fde365-onboarding-card-action",
          attr: { type: "button" },
        });
        button.addEventListener("click", () => {
          this.finished = true;
          void this.plugin.markOnboardingSeen();
          this.close();
          this.plugin.openSettings("ai");
        });
      }
    }

    const footer = shell.createDiv({ cls: "fde365-onboarding-footer" });
    const quietActions = footer.createDiv({ cls: "fde365-onboarding-quiet-actions" });
    if (this.stepIndex > 0) {
      const previous = quietActions.createEl("button", { text: "上一步", attr: { type: "button" } });
      previous.addEventListener("click", () => {
        this.stepIndex -= 1;
        this.render();
      });
    } else {
      const skip = quietActions.createEl("button", { text: "跳过指引", cls: "fde365-onboarding-skip", attr: { type: "button" } });
      skip.addEventListener("click", () => void this.finish());
    }

    const isLastStep = this.stepIndex === ONBOARDING_STEPS.length - 1;
    const next = footer.createEl("button", {
      text: isLastStep ? "开始使用" : "下一步",
      cls: "mod-cta fde365-onboarding-next",
      attr: { type: "button" },
    });
    next.addEventListener("click", () => {
      if (isLastStep) void this.finish({ activateDashboard: true });
      else {
        this.stepIndex += 1;
        this.render();
      }
    });
    window.setTimeout(() => next.focus(), 0);
  }

  async finish({ activateDashboard = false } = {}) {
    if (this.finished) return;
    this.finished = true;
    await this.plugin.markOnboardingSeen();
    this.close();
    if (activateDashboard && !this.plugin.isUnloading) await this.plugin.activateView();
  }

  onClose() {
    this.contentEl.empty();
    this.plugin.onboardingModal = null;
    if (!this.finished && !this.plugin.isUnloading) void this.plugin.markOnboardingSeen();
  }
}

class AgentTaskStore {
  constructor(plugin) {
    this.plugin = plugin;
    this.app = plugin.app;
  }

  async ensureStructure() {
    await ensureVaultFolder(this.app, AGENT_ROOT);
    await ensureVaultFolder(this.app, `${AGENT_ROOT}/定义`);
    await ensureVaultFolder(this.app, `${AGENT_ROOT}/运行记录`);
    await ensureVaultFolder(this.app, `${AGENT_ROOT}/输出`);
  }

  async createRun(agent, prompt, sources = [], execution = {}) {
    await this.ensureStructure();
    const now = new Date();
    const taskId = `fde365-${now.toISOString().replace(/[-:.TZ]/g, "").slice(0, 14)}-${Math.random().toString(36).slice(2, 7)}`;
    const path = `${AGENT_ROOT}/运行记录/${taskId}-${safeName(agent.name)}.md`;
    const sourcePaths = sources.map((file) => file.path || String(file)).filter(Boolean);
    const provider = String(execution.provider || "unknown");
    const content = `---\ntype: agent-run\ntask_id: ${taskId}\nagent_id: ${agent.id}\nprovider: ${yamlQuote(provider)}\nprovider_version: ${yamlQuote(execution.providerVersion || "")}\nmodel: ${yamlQuote(execution.model || "")}\nstatus: queued\ncreated_at: ${now.toISOString()}\nstarted_at:\nfinished_at:\nconversation_id:\nsource_files: ${JSON.stringify(sourcePaths)}\noutput_file:\nerror:\nreviewed: false\ntask: ${yamlQuote(prompt)}\ntags:\n  - agent/run\n  - agent/${agent.id}\n---\n\n# ${agent.name} · 运行任务\n\n> [!info] Agent 职责\n> ${agent.description}\n\n## 输入来源\n\n${sourcePaths.length ? sourcePaths.map((pathValue) => `- [[${pathValue.replace(/\.md$/, "")}]]`).join("\n") : "- 暂无匹配来源"}\n\n## 任务\n\n${prompt}\n\n## 执行状态\n\n等待 ${execution.label || provider} 执行。\n`;
    const file = await this.app.vault.create(path, content);
    return { taskId, file, agent, prompt, sources: sourcePaths, status: AGENT_RUN_STATUSES.QUEUED };
  }

  async transition(taskOrFile, nextStatus, patch = {}) {
    const file = taskOrFile.file || taskOrFile;
    const cache = this.app.metadataCache.getFileCache(file);
    const current = String(taskOrFile.file ? taskOrFile.status : cache?.frontmatter?.status || AGENT_RUN_STATUSES.DRAFT);
    if (!AGENT_STATUS_TRANSITIONS[current]?.has(nextStatus)) {
      throw new Error(`Invalid agent task transition: ${current} -> ${nextStatus}`);
    }
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
      frontmatter.status = nextStatus;
      Object.entries(patch).forEach(([key, value]) => {
        if (value === undefined) delete frontmatter[key];
        else frontmatter[key] = value;
      });
    });
    if (taskOrFile.file) taskOrFile.status = nextStatus;
    await this.updateRunBody(file, nextStatus, patch);
    await this.waitForFrontmatter(file, "status", nextStatus);
    return taskOrFile;
  }

  async waitForFrontmatter(file, key, expected, timeout = 2500) {
    const started = Date.now();
    while (Date.now() - started < timeout) {
      if (this.app.metadataCache.getFileCache(file)?.frontmatter?.[key] === expected) return true;
      await wait(25);
    }
    return false;
  }

  async updateRunBody(file, status, patch = {}) {
    const labels = {
      draft: "任务仍为草稿。",
      queued: "任务已进入执行队列。",
      running: "AI Provider 正在执行任务。",
      "waiting-review": patch.output_file ? `AI Provider 已生成输出，等待人工验收：[[${String(patch.output_file).replace(/\.md$/, "")}]]` : "AI Provider 已生成输出，等待人工验收。",
      success: "输出已经人工验收，任务执行成功。",
      failed: `任务执行失败：${patch.error || "未知错误"}`,
      blocked: `任务被阻塞：${patch.error || "依赖不可用"}`,
      cancelled: "任务已取消。",
    };
    const content = await this.app.vault.read(file);
    const marker = "## 执行状态\n\n";
    if (!content.includes(marker)) return;
    const start = content.indexOf(marker) + marker.length;
    const nextHeading = content.indexOf("\n## ", start);
    const end = nextHeading >= 0 ? nextHeading : content.length;
    const replacement = `${labels[status] || status}\n`;
    const updated = `${content.slice(0, start)}${replacement}${content.slice(end)}`;
    if (updated !== content) await this.app.vault.modify(file, updated);
  }

  async saveOutput(task, result) {
    const path = `${AGENT_ROOT}/输出/${task.taskId}-${safeName(task.agent.name)}.md`;
    const content = `---\ntype: agent-output\ntask_id: ${task.taskId}\nagent_id: ${task.agent.id}\nprovider: ${yamlQuote(result.provider || "unknown")}\nprovider_version: ${yamlQuote(result.providerVersion || "unknown")}\nmodel: ${yamlQuote(result.model || "")}\nconversation_id: ${yamlQuote(result.conversationId || "")}\ncreated_at: ${new Date().toISOString()}\nreviewed: false\ntags:\n  - agent/output\n  - agent/${task.agent.id}\n---\n\n# ${task.agent.name} · 输出\n\n## 任务\n\n${task.prompt}\n\n## 来源\n\n${task.sources.length ? task.sources.map((source) => `- [[${source.replace(/\.md$/, "")}]]`).join("\n") : "- 无显式来源"}\n\n## AI 输出\n\n${result.content}\n\n## 人工验收\n\n- [ ] 核对事实与引用\n- [ ] 确认结论可以使用\n- [ ] 返回 FDE365 右侧栏“历史”核对运行记录\n`;
    return this.app.vault.create(path, content);
  }

}

class AIProviderError extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.name = "AIProviderError";
    this.code = code;
    this.details = details;
  }
}

function buildOpenAIMessages(request) {
  const messages = (Array.isArray(request?.messages) ? request.messages : [])
    .filter((message) => message?.content)
    .map((message) => ({ role: message.role || "user", content: String(message.content) }));
  const context = Array.isArray(request?.context) ? request.context : [];
  if (context.length) {
    messages.splice(Math.max(0, messages.length - 1), 0, {
      role: "system",
      content: `以下是用户明确允许发送的本地知识上下文。回答时区分上下文事实、推断与建议，并在使用时标明来源路径。\n\n${context.map((item) => `### ${item.title || item.path || "未命名来源"}\n来源：${item.path || "未标注"}\n${item.excerpt || ""}`).join("\n\n")}`,
    });
  }
  return messages;
}

function mapHttpProviderError(status, payload) {
  const remoteMessage = String(payload?.error?.message || payload?.message || "").trim();
  if (status === 401 || status === 403) return new AIProviderError("AUTH_FAILED", "登录已失效，请重新登录");
  if (status === 402) return new AIProviderError("INSUFFICIENT_CREDITS", "credits 不足，请兑换后再试");
  if (status === 404) return new AIProviderError("MODEL_NOT_FOUND", remoteMessage || "所选模型不存在");
  if (status === 429) return new AIProviderError("RATE_LIMITED", "API 请求受到限流，请稍后重试");
  return new AIProviderError("NETWORK_ERROR", remoteMessage || `API 返回 HTTP ${status}`);
}

class Fde365Provider {
  constructor(plugin) {
    this.plugin = plugin;
    this.id = "fde365";
    this.label = "FDE365 API";
    this.cancelledRequests = new Set();
    this.cancelHandlers = new Map();
  }

  get settings() {
    return this.plugin.settings.ai.fde365;
  }

  detect() {
    const token = this.plugin.accountClient?.isLoggedIn() || false;
    const model = String(this.settings.model || "").trim();
    const configured = Boolean(token && Account.modelIds(this.plugin.settings, FDE365_MODELS).includes(model));
    return {
      available: true,
      configured,
      compatible: configured,
      version: "chat-completions",
      model,
      endpoint: FDE365_CHAT_ENDPOINT,
      error: configured ? null : "请先登录账号并选择可用模型",
    };
  }

  cancel(requestId) {
    this.cancelledRequests.add(requestId);
    this.cancelHandlers.get(requestId)?.();
  }

  async testConnection() {
    return this.complete({
      requestId: `test-${Date.now()}`,
      mode: "chat",
      messages: [{ role: "user", content: "只回复 OK" }],
      context: [],
    });
  }

  async complete(request) {
    const capability = this.detect();
    if (!capability.configured) throw new AIProviderError("PROVIDER_NOT_CONFIGURED", capability.error);
    if (this.cancelledRequests.has(request.requestId)) {
      this.cancelledRequests.delete(request.requestId);
      throw new AIProviderError("CANCELLED", "任务已取消");
    }
    const accessToken = await this.plugin.accountClient.getAccessToken();
    const timeoutMs = Math.max(10000, Number(this.settings.timeoutMs) || 120000);
    let timer = null;
    const timeout = new Promise((_, reject) => {
      timer = window.setTimeout(() => reject(new AIProviderError("TIMEOUT", `API 请求超过 ${Math.round(timeoutMs / 1000)} 秒`)), timeoutMs);
    });
    const cancelled = new Promise((_, reject) => {
      this.cancelHandlers.set(request.requestId, () => reject(new AIProviderError("CANCELLED", "任务已取消")));
    });
    let response;
    try {
      response = await Promise.race([
        requestUrl({
          url: FDE365_CHAT_ENDPOINT,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            model: capability.model,
            messages: buildOpenAIMessages(request),
            temperature: Math.min(2, Math.max(0, Number(this.settings.temperature) || 0)),
            stream: false,
          }),
          throw: false,
        }),
        timeout,
        cancelled,
      ]);
    } catch (error) {
      if (error instanceof AIProviderError) throw error;
      throw new AIProviderError("NETWORK_ERROR", error instanceof Error ? error.message : String(error));
    } finally {
      if (timer !== null) window.clearTimeout(timer);
      this.cancelHandlers.delete(request.requestId);
      this.cancelledRequests.delete(request.requestId);
    }
    const payload = response?.json || {};
    if (!response || response.status < 200 || response.status >= 300) {
      throw mapHttpProviderError(response?.status || 0, payload);
    }
    if (this.cancelledRequests.has(request.requestId)) {
      this.cancelledRequests.delete(request.requestId);
      throw new AIProviderError("CANCELLED", "任务已取消");
    }
    const content = getMessageText(payload?.choices?.[0]?.message);
    if (!content) throw new AIProviderError("EMPTY_RESPONSE", "模型返回了空内容");
    return {
      content,
      provider: this.id,
      providerVersion: "fde365-chat-completions",
      model: capability.model,
      conversationId: String(payload.id || request.requestId || ""),
      usage: payload.usage || null,
    };
  }
}

class AIProviderManager {
  constructor(plugin) {
    this.plugin = plugin;
    this.providers = new Map();
  }

  register(provider) {
    this.providers.set(provider.id, provider);
    return provider;
  }

  get(id) {
    return this.providers.get(id) || null;
  }

  getSelected() {
    return this.get("fde365");
  }

  describeSelected() {
    const provider = this.getSelected();
    const status = provider.detect();
    return {
      id: provider.id,
      label: provider.label,
      ...status,
    };
  }

  async preflight() {
    const provider = this.getSelected();
    const capability = provider.detect();
    if (!capability.configured) throw new AIProviderError("PROVIDER_NOT_CONFIGURED", capability.error || "尚未配置 AI 服务");
    if (!capability.available) throw new AIProviderError("PROVIDER_UNAVAILABLE", capability.error || "AI 服务不可用");
    if (!capability.compatible) throw new AIProviderError("INCOMPATIBLE_VERSION", capability.error || "AI 服务不兼容");
    return { provider, capability };
  }

  async complete(request) {
    const { provider } = await this.preflight();
    return provider.complete(request);
  }

  cancel(requestId) {
    this.getSelected()?.cancel?.(requestId);
  }

  cancelAll() {
    for (const provider of this.providers.values()) provider.cancelAll?.();
  }
}

function agentApprovalItemDisplay(value, limit = 280) {
  const full = String(value ?? "").trim();
  const compact = full.replace(/\s+/g, " ");
  if (compact.length <= limit) return { full, preview: compact, truncated: false };
  const tailLength = Math.min(72, Math.floor(limit * 0.28));
  const headLength = Math.max(1, limit - tailLength - 3);
  return {
    full,
    preview: `${compact.slice(0, headLength)} … ${compact.slice(-tailLength)}`,
    truncated: true,
  };
}

class AgentApprovalModal extends Modal {
  constructor(app, options, resolve) {
    super(app);
    this.options = options;
    this.resolveApproval = resolve;
    this.settled = false;
  }

  finish(value) {
    if (this.settled) return;
    this.settled = true;
    this.resolveApproval(Boolean(value));
    this.close();
  }

  onOpen() {
    this.contentEl.addClass("fde-agent-modal", "fde-agent-approval-modal");
    this.contentEl.createEl("h2", { text: this.options.title || "允许本地 Agent 执行？" });
    this.contentEl.createEl("p", { text: this.options.description || "FDE365 Agent 请求执行本地操作。", cls: "fde-agent-modal-description" });
    const list = this.contentEl.createEl("ul", { cls: "fde-agent-approval-items" });
    for (const item of this.options.items || []) {
      const display = agentApprovalItemDisplay(item);
      const row = list.createEl("li");
      row.createDiv({ text: display.preview, cls: "fde-agent-approval-preview" });
      if (display.truncated) {
        row.createDiv({ text: `已缩略，共 ${display.full.length} 个字符`, cls: "fde-agent-approval-meta" });
        const details = row.createEl("details", { cls: "fde-agent-approval-details" });
        details.createEl("summary", { text: "查看完整内容" });
        details.createEl("pre", { text: display.full });
      }
    }
    const actions = this.contentEl.createDiv({ cls: "fde-agent-modal-actions" });
    const reject = actions.createEl("button", { text: "不允许" });
    const allow = actions.createEl("button", { text: "仅允许这一次", cls: "mod-cta" });
    reject.addEventListener("click", () => this.finish(false));
    allow.addEventListener("click", () => this.finish(true));
  }

  onClose() {
    if (!this.settled) {
      this.settled = true;
      this.resolveApproval(false);
    }
    this.contentEl.empty();
  }
}

class AgentQuestionModal extends Modal {
  constructor(app, questions, resolve) {
    super(app);
    this.questions = questions;
    this.resolveAnswers = resolve;
    this.inputs = new Map();
    this.settled = false;
  }

  finish(answers) {
    if (this.settled) return;
    this.settled = true;
    this.resolveAnswers(answers);
    this.close();
  }

  onOpen() {
    this.contentEl.addClass("fde-agent-modal", "fde-agent-question-modal");
    this.contentEl.createEl("h2", { text: "FDE365 Agent 需要你确认" });
    for (const question of this.questions) {
      const id = String(question?.id || `question-${this.inputs.size + 1}`);
      const group = this.contentEl.createDiv({ cls: "fde-agent-question" });
      group.createEl("strong", { text: String(question?.header || question?.question || "请补充信息") });
      if (question?.header && question?.question) group.createEl("p", { text: String(question.question), cls: "fde-agent-modal-description" });
      const options = Array.isArray(question?.options) ? question.options : [];
      if (options.length) {
        const select = group.createEl("select");
        for (const option of options) select.createEl("option", { text: String(option?.label || option), value: String(option?.label || option) });
        this.inputs.set(id, select);
      } else {
        const input = group.createEl("input", { type: "text", attr: { placeholder: "输入你的回答…" } });
        this.inputs.set(id, input);
      }
    }
    const actions = this.contentEl.createDiv({ cls: "fde-agent-modal-actions" });
    actions.createEl("button", { text: "取消" }).addEventListener("click", () => this.finish({}));
    actions.createEl("button", { text: "继续", cls: "mod-cta" }).addEventListener("click", () => {
      const answers = {};
      for (const [id, input] of this.inputs) answers[id] = input.value;
      this.finish(answers);
    });
  }

  onClose() {
    if (!this.settled) {
      this.settled = true;
      this.resolveAnswers({});
    }
    this.contentEl.empty();
  }
}

function inferInboxTags(text = "", source = "") {
  const haystack = `${text} ${source}`.toLowerCase();
  const tags = [];
  const add = (...values) => values.forEach((value) => {
    if (!tags.includes(value)) tags.push(value);
  });
  // Material format and business destination are deliberately separate. A
  // recording can contain product facts, customer needs and reusable cases at
  // the same time; "录音" must never become a seventh asset library.
  if (/(录音|语音|音频|转写|audio|mp3|m4a|wav|webm)/i.test(haystack)) add("录音转写");
  if (/(会议|会议纪要|参会|议程)/i.test(haystack)) add("会议纪要");
  if (/(聊天|微信|沟通记录|对话记录)/i.test(haystack)) add("聊天记录");
  if (/(图片|截图|照片|image|png|jpe?g|webp)/i.test(haystack)) add("图片材料");
  if (/(文档|附件|pdf|docx?|pptx?|xlsx?)/i.test(haystack)) add("文档材料");

  if (/(个人定位|身份|价值观|我的判断|表达习惯|不能公开|个人边界)/i.test(haystack)) add("个人说明书");
  if (/(产品|功能|价格|报价|承诺|交付|售后|异议|prd|竞品)/i.test(haystack)) add("产品库");
  if (/(客户原话|客户需求|客户|痛点|预算|决策人|成交|未成交)/i.test(haystack)) add("客户需求库");
  if (/(案例|事件|经历|反馈|结果|故事|数据证据)/i.test(haystack)) add("素材案例库");
  if (/(方法|步骤|流程|原则|经验|复盘|策略|前置条件|失败信号)/i.test(haystack)) add("方法论库");
  if (/(选题|标题|文章|脚本|发布|公众号|短视频|成稿|写稿)/i.test(haystack)) add("内容生产");
  if (!tags.length) add("待分类");
  return tags.slice(0, 6);
}

function inferInboxCategory(tags) {
  const destinations = ["个人说明书", "产品库", "客户需求库", "素材案例库", "方法论库", "内容生产"];
  return destinations.find((destination) => tags.includes(destination)) || "待分类";
}

async function ensureVaultFolder(app, path) {
  const normalized = normalizePath(path);
  const parts = normalized.split("/");
  let current = "";
  for (const part of parts) {
    current = current ? `${current}/${part}` : part;
    const indexed = app.vault.getAbstractFileByPath(current);
    if (indexed) {
      if (indexed instanceof TFile) throw new Error(`无法创建目录“${current}”：同名文件已存在`);
      continue;
    }

    const existing = await app.vault.adapter.stat(current).catch(() => null);
    if (existing) {
      if (existing.type !== "folder") throw new Error(`无法创建目录“${current}”：同名文件已存在`);
      continue;
    }

    try {
      await app.vault.createFolder(current);
    } catch (error) {
      const created = app.vault.getAbstractFileByPath(current);
      const stat = await app.vault.adapter.stat(current).catch(() => null);
      const isExistingFolder = Boolean(created && !(created instanceof TFile)) || stat?.type === "folder";
      if (isExistingFolder && /already exists/i.test(error instanceof Error ? error.message : String(error))) continue;
      throw error;
    }
  }
}

async function uniqueVaultPath(app, path) {
  if (!app.vault.getAbstractFileByPath(path)) return path;
  const dot = path.lastIndexOf(".");
  const base = dot > path.lastIndexOf("/") ? path.slice(0, dot) : path;
  const ext = dot > path.lastIndexOf("/") ? path.slice(dot) : "";
  let index = 2;
  while (app.vault.getAbstractFileByPath(`${base}-${index}${ext}`)) index += 1;
  return `${base}-${index}${ext}`;
}

class VaultBootstrapService {
  constructor(plugin, blueprint = KNOWLEDGE_BLUEPRINT) {
    this.plugin = plugin;
    this.app = plugin.app;
    this.blueprint = blueprint;
  }

  fullPath(relativePath = "") {
    return normalizePath([this.blueprint.root, relativePath].filter(Boolean).join("/"));
  }

  async inspectPath(path) {
    const indexed = this.app.vault.getAbstractFileByPath(path);
    if (indexed) return indexed instanceof TFile ? "file" : "folder";
    const stat = await this.app.vault.adapter.stat(path).catch(() => null);
    return stat?.type || null;
  }

  async ensure({ notify = false } = {}) {
    const created = [];
    const skipped = [];
    const conflicts = [];
    const folders = ["", ...this.blueprint.folders]
      .map((path) => this.fullPath(path))
      .sort((a, b) => a.split("/").length - b.split("/").length || a.localeCompare(b, "zh-CN"));

    for (const path of folders) {
      const type = await this.inspectPath(path);
      if (type === "folder") {
        skipped.push(path);
        continue;
      }
      if (type === "file") {
        conflicts.push(`${path}（需要目录，但同名文件已存在）`);
        continue;
      }
      try {
        await ensureVaultFolder(this.app, path);
        created.push(path);
      } catch (error) {
        conflicts.push(`${path}（${error instanceof Error ? error.message : String(error)}）`);
      }
    }

    for (const [relativePath, content] of Object.entries(this.blueprint.files)) {
      const path = this.fullPath(relativePath);
      const type = await this.inspectPath(path);
      if (type === "file") {
        skipped.push(path);
        continue;
      }
      if (type === "folder") {
        conflicts.push(`${path}（需要文件，但同名目录已存在）`);
        continue;
      }
      const parent = path.includes("/") ? path.slice(0, path.lastIndexOf("/")) : "";
      try {
        if (parent) await ensureVaultFolder(this.app, parent);
        await this.app.vault.create(path, String(content));
        created.push(path);
      } catch (error) {
        const currentType = await this.inspectPath(path);
        if (currentType === "file") skipped.push(path);
        else conflicts.push(`${path}（${error instanceof Error ? error.message : String(error)}）`);
      }
    }

    const result = {
      version: this.blueprint.version,
      created,
      skipped,
      conflicts,
      checkedAt: new Date().toISOString(),
    };
    this.plugin.settings.blueprint = {
      version: this.blueprint.version,
      lastCheckedAt: result.checkedAt,
      lastCreated: created.length,
      conflicts,
    };
    await this.plugin.saveSettings();
    if (notify) {
      const summary = conflicts.length
        ? `补齐 ${created.length} 项，发现 ${conflicts.length} 个同名冲突；未覆盖原内容`
        : created.length
          ? `已补齐 ${created.length} 项，原有内容均未覆盖`
          : "知识库结构完整，没有修改现有内容";
      new Notice(`FDE365知识库：${summary}`, 8000);
    }
    return result;
  }
}

class Fde365UpdateService {
  constructor(plugin) {
    this.plugin = plugin;
    this.app = plugin.app;
    this.inFlight = null;
  }

  get pluginDirectory() {
    return normalizePath(this.plugin.manifest.dir || `.obsidian/plugins/${this.plugin.manifest.id}`);
  }

  async request(url) {
    const response = await requestUrl({
      url,
      method: "GET",
      headers: {
        Accept: "application/json, application/octet-stream;q=0.9",
      },
      throw: false,
    });
    if (response.status < 200 || response.status >= 300) throw new Error(`FDE365 更新服务返回 HTTP ${response.status}`);
    return response;
  }

  async ensureAdapterFolder(path) {
    const adapter = this.app.vault.adapter;
    const parts = normalizePath(path).split("/").filter(Boolean);
    let current = "";
    for (const part of parts) {
      current = current ? `${current}/${part}` : part;
      if (!await adapter.exists(current)) await adapter.mkdir(current);
    }
  }

  async check({ manual = false, forceInstall = false } = {}) {
    if (IS_DEVELOPER_BUILD) {
      if (manual) new Notice("开发版已关闭自动更新，请重新构建开发包");
      return { status: "disabled", channel: FDE365_BUILD_CHANNEL };
    }
    if (this.inFlight) return this.inFlight;
    this.inFlight = this.checkNow({ manual, forceInstall }).finally(() => { this.inFlight = null; });
    return this.inFlight;
  }

  async checkNow({ manual, forceInstall }) {
    const updates = this.plugin.settings.updates;
    try {
      const releaseResponse = await this.request(FDE365_RELEASE_API);
      const release = releaseResponse.json;
      const latestVersion = GitHubUpdater.normalizeVersion(release?.tag_name);
      if (!latestVersion) throw new Error("FDE365 更新版本不是 x.y.z 格式");
      updates.lastCheckedAt = new Date().toISOString();
      updates.lastError = "";

      if (GitHubUpdater.compareVersions(latestVersion, this.plugin.manifest.version) <= 0) {
        updates.pendingVersion = "";
        await this.plugin.saveSettings();
        if (manual) new Notice(`当前已是最新版 v${this.plugin.manifest.version}`);
        return { status: "current", version: latestVersion };
      }
      if (updates.pendingVersion === latestVersion) {
        if (manual) new Notice(`v${latestVersion} 已安装，重启 Obsidian 后生效`, 8000);
        return { status: "restart-required", version: latestVersion };
      }

      const assets = Array.isArray(release.assets) ? release.assets : [];
      const manifestAsset = assets.find((asset) => asset?.name === "update-manifest.json");
      if (!manifestAsset || !GitHubUpdater.isTrustedUpdateAssetUrl(manifestAsset.browser_download_url, latestVersion, "update-manifest.json")) {
        throw new Error("更新服务缺少可信的 update-manifest.json");
      }
      const updateManifestResponse = await this.request(manifestAsset.browser_download_url);
      const updateManifest = GitHubUpdater.validateUpdateManifest(updateManifestResponse.json, {
        pluginId: this.plugin.manifest.id,
        repository: FDE365_RELEASE_REPOSITORY,
        version: latestVersion,
      });
      if (typeof requireApiVersion === "function" && !requireApiVersion(updateManifest.minAppVersion)) {
        throw new Error(`v${latestVersion} 需要 Obsidian ${updateManifest.minAppVersion} 或更高版本`);
      }

      if (!(forceInstall || updates.autoInstall)) {
        updates.pendingVersion = latestVersion;
        await this.plugin.saveSettings();
        if (manual) new Notice(`发现新版本 v${latestVersion}，可在设置中安装`);
        return { status: "available", version: latestVersion };
      }

      await this.install(release, updateManifest);
      updates.pendingVersion = latestVersion;
      updates.lastError = "";
      await this.plugin.saveSettings();
      new Notice(`FDE365 已更新到 v${latestVersion}，请重启 Obsidian 生效`, 0);
      return { status: "installed", version: latestVersion };
    } catch (error) {
      updates.lastCheckedAt = new Date().toISOString();
      updates.lastError = error instanceof Error ? error.message : String(error);
      await this.plugin.saveSettings();
      if (manual) new Notice(`检查更新失败：${updates.lastError}`, 10000);
      else console.warn("FDE365 Knowledge OS: automatic update check failed", error);
      return { status: "error", error: updates.lastError };
    }
  }

  async install(release, updateManifest) {
    const releaseAssets = new Map((release.assets || []).map((asset) => [asset.name, asset]));
    const downloads = new Map();
    for (const file of updateManifest.files) {
      const asset = releaseAssets.get(file.asset);
      if (!asset || !GitHubUpdater.isTrustedUpdateAssetUrl(asset.browser_download_url, updateManifest.version, file.asset)) {
        throw new Error(`更新服务缺少可信文件：${file.asset}`);
      }
      if (Number(asset.size || 0) > 10 * 1024 * 1024) throw new Error(`更新文件过大：${file.asset}`);
      const response = await this.request(asset.browser_download_url);
      const bytes = Buffer.from(response.arrayBuffer);
      if (GitHubUpdater.sha256(bytes) !== file.sha256) throw new Error(`更新文件校验失败：${file.asset}`);
      downloads.set(file.target, { ...file, bytes });
    }

    const remoteManifest = JSON.parse(downloads.get("manifest.json").bytes.toString("utf8"));
    if (remoteManifest.id !== this.plugin.manifest.id
      || GitHubUpdater.normalizeVersion(remoteManifest.version) !== updateManifest.version
      || remoteManifest.minAppVersion !== updateManifest.minAppVersion) {
      throw new Error("远程 manifest.json 与更新清单不一致");
    }

    const adapter = this.app.vault.adapter;
    const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
    const backupRoot = normalizePath(`${this.pluginDirectory}/.fde365-update-backups/${this.plugin.manifest.version}-to-${updateManifest.version}-${timestamp}`);
    const previous = new Map();
    const written = [];

    for (const file of updateManifest.files) {
      const target = normalizePath(`${this.pluginDirectory}/${file.target}`);
      const exists = await adapter.exists(target);
      let bytes = null;
      if (exists) {
        bytes = file.encoding === "binary"
          ? Buffer.from(await adapter.readBinary(target))
          : Buffer.from(await adapter.read(target), "utf8");
        const backup = normalizePath(`${backupRoot}/${file.target}`);
        await this.ensureAdapterFolder(backup.slice(0, backup.lastIndexOf("/")));
        if (file.encoding === "binary") {
          await adapter.writeBinary(backup, bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength));
        }
        else await adapter.write(backup, bytes.toString("utf8"));
      }
      previous.set(file.target, { exists, bytes });
    }

    try {
      for (const file of updateManifest.files) {
        const target = normalizePath(`${this.pluginDirectory}/${file.target}`);
        await this.ensureAdapterFolder(target.slice(0, target.lastIndexOf("/")));
        const download = downloads.get(file.target);
        if (file.encoding === "binary") {
          await adapter.writeBinary(target, download.bytes.buffer.slice(download.bytes.byteOffset, download.bytes.byteOffset + download.bytes.byteLength));
        }
        else await adapter.write(target, download.bytes.toString("utf8"));
        written.push(file.target);
      }
    } catch (error) {
      for (const targetName of written.reverse()) {
        const target = normalizePath(`${this.pluginDirectory}/${targetName}`);
        const old = previous.get(targetName);
        try {
          if (!old.exists) await adapter.remove(target);
          else if (downloads.get(targetName).encoding === "binary") {
            await adapter.writeBinary(target, old.bytes.buffer.slice(old.bytes.byteOffset, old.bytes.byteOffset + old.bytes.byteLength));
          }
          else await adapter.write(target, old.bytes.toString("utf8"));
        } catch (rollbackError) {
          console.error(`FDE365 Knowledge OS: failed to roll back ${targetName}`, rollbackError);
        }
      }
      throw error;
    }
  }
}

class AIKnowledgeOSSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.addClass("fde365-settings");
    containerEl.createEl("h2", { text: "FDE365 Knowledge OS 设置" });
    new Setting(containerEl)
      .setName("显示名称")
      .setDesc("用于驾驶舱问候语和 AI Copilot。")
      .addText((text) => text
        .setPlaceholder("Gary")
        .setValue(this.plugin.settings.userName)
        .onChange(async (value) => {
          this.plugin.settings.userName = value.trim() || "Gary";
          await this.plugin.saveSettings();
          this.plugin.refreshDashboard();
        }));
    new Setting(containerEl)
      .setName("界面主题")
      .setDesc("切换FDE365工作台的浅色或深色外观，不会修改 Obsidian 的全局主题。")
      .addDropdown((dropdown) => dropdown
        .addOption("light", "浅色")
        .addOption("dark", "深色")
        .setValue(this.plugin.settings.colorTheme === "light" ? "light" : "dark")
        .onChange(async (value) => {
          this.plugin.settings.colorTheme = value === "light" ? "light" : "dark";
          await this.plugin.saveSettings();
          this.plugin.refreshDashboard();
        }));
    new Setting(containerEl)
      .setName("启动时打开驾驶舱")
      .setDesc("Obsidian 启动后自动进入FDE365知识驾驶舱。")
      .addToggle((toggle) => toggle
        .setValue(this.plugin.settings.openOnStartup)
        .onChange(async (value) => {
          this.plugin.settings.openOnStartup = value;
          await this.plugin.saveSettings();
        }));
    new Setting(containerEl)
      .setName("沉浸模式")
      .setDesc("打开驾驶舱时折叠 Obsidian 原生左右侧栏。")
      .addToggle((toggle) => toggle
        .setValue(this.plugin.settings.immersiveMode)
        .onChange(async (value) => {
          this.plugin.settings.immersiveMode = value;
          await this.plugin.saveSettings();
        }));
    containerEl.createEl("h3", { text: "使用指引", attr: { id: "fde365-settings-onboarding" } });
    new Setting(containerEl)
      .setName("新人指引")
      .setDesc("重新查看收集、六类资产、AI 协作和本地安全边界。")
      .addButton((button) => button
        .setButtonText("重新打开")
        .onClick(() => this.plugin.openOnboarding({ force: true })));
    containerEl.createEl("h3", { text: "知识库初始化", attr: { id: "fde365-settings-blueprint" } });
    const blueprint = this.plugin.settings.blueprint || DEFAULT_SETTINGS.blueprint;
    new Setting(containerEl)
      .setName("六类资产模板")
      .setDesc(blueprint.conflicts?.length
        ? `模板 v${KNOWLEDGE_BLUEPRINT.version} · 最近检查发现 ${blueprint.conflicts.length} 个同名冲突；插件不会覆盖原内容。`
        : `模板 v${KNOWLEDGE_BLUEPRINT.version} · ${blueprint.lastCheckedAt ? "已检查" : "等待首次初始化"} · 只补缺失文件。`)
      .addButton((button) => button
        .setButtonText("检查并修复")
        .onClick(async () => {
          button.setDisabled(true).setButtonText("检查中…");
          try {
            await this.plugin.migrateNeutralTerminology();
            await this.plugin.migrateLegacyInboxLayout();
            await this.plugin.migrateKnowledgeContract();
            await this.plugin.bootstrapService.ensure({ notify: true });
          } finally {
            this.display();
          }
        }));

    containerEl.createEl("h3", { text: "插件更新", attr: { id: "fde365-settings-updates" } });
    const updates = this.plugin.settings.updates;
    const updateStatus = updates.pendingVersion
      ? `v${updates.pendingVersion} 已安装，重启 Obsidian 后生效。`
      : updates.lastError
        ? `最近检查失败：${updates.lastError}`
        : updates.lastCheckedAt
          ? `当前版本 v${this.plugin.manifest.version} · ${formatRelativeTime(Date.parse(updates.lastCheckedAt))}检查过更新。`
          : `当前版本 v${this.plugin.manifest.version} · 尚未检查更新。`;
    new Setting(containerEl)
      .setName("自动安装更新")
      .setDesc(IS_DEVELOPER_BUILD
        ? "开发版固定关闭自动更新，避免被用户版覆盖。"
        : "从 FDE365 国内更新服务获取并校验更新；不会读取或覆盖 Token、笔记和其他 Vault 数据。")
      .addToggle((toggle) => toggle
        .setValue(IS_DEVELOPER_BUILD ? false : updates.autoInstall)
        .setDisabled(IS_DEVELOPER_BUILD)
        .onChange(async (value) => {
          if (IS_DEVELOPER_BUILD) return;
          updates.autoInstall = value;
          await this.plugin.saveSettings();
        }));
    new Setting(containerEl)
      .setName("更新状态")
      .setDesc(IS_DEVELOPER_BUILD ? `DEV · v${this.plugin.manifest.version} · 本地构建通道` : updateStatus)
      .addButton((button) => button
        .setButtonText(IS_DEVELOPER_BUILD ? "开发版不更新" : updates.pendingVersion ? "等待重启" : "检查并安装")
        .setDisabled(IS_DEVELOPER_BUILD || Boolean(updates.pendingVersion))
        .onClick(async () => {
          button.setDisabled(true).setButtonText("检查中…");
          await this.plugin.updateService.check({ manual: true, forceInstall: true });
          this.display();
        }));

    containerEl.createEl("h3", { text: "AI 服务", attr: { id: "fde365-settings-ai" } });
    if (IS_DEVELOPER_BUILD) {
      const localRuntime = this.plugin.agentRuntime?.describe?.() || { available: false, ready: false, error: "本地 Codex CLI 尚未初始化" };
      new Setting(containerEl)
        .setName("DEV · 本地 Codex CLI")
        .setDesc(localRuntime.available
          ? `使用本机 Codex CLI 的登录、Provider、默认模型和 CODEX_HOME${localRuntime.ready ? " · 运行中" : ""}。插件不会写入或覆盖任何环境变量。`
          : localRuntime.error);
    } else {
    renderAccountSettings(this, containerEl, FDE365_MODELS);
    }
    const assistant = this.plugin.settings.ai.assistant;
    new Setting(containerEl)
      .setName("Agent 执行模式")
      .setDesc(assistant.executionMode === "yolo"
        ? "YOLO 已开启：Agent 可在当前 Vault 内直接读写和运行本地命令，不再逐次请求批准；Vault 外访问和网络仍被阻止。"
        : "需要批准：Agent 读取知识库后，命令执行和文件写入会等待你确认。")
      .addDropdown((dropdown) => dropdown
        .addOption("approval", "需要批准（推荐）")
        .addOption("yolo", "YOLO（当前 Vault 内）")
        .setValue(assistant.executionMode)
        .onChange(async (value) => {
          assistant.executionMode = value === "yolo" ? "yolo" : "approval";
          await this.plugin.saveSettings();
          new Notice(assistant.executionMode === "yolo"
            ? "YOLO 已开启：下一个 Agent 任务将在当前 Vault 内自动执行"
            : "已切换为需要批准模式");
          this.plugin.refreshDashboard();
          this.display();
        }));
    containerEl.createEl("h3", { text: "资产网络", attr: { id: "fde365-settings-graph" } });
    new Setting(containerEl)
      .setName("默认连接深度")
      .setDesc("控制资产网络初次打开时展示的卫星节点和路径搜索深度。")
      .addDropdown((dropdown) => dropdown
        .addOption("1", "1 层")
        .addOption("2", "2 层")
        .addOption("3", "3 层")
        .setValue(String(this.plugin.settings.graphDefaultDepth || 2))
        .onChange(async (value) => {
          this.plugin.settings.graphDefaultDepth = Number(value);
          await this.plugin.saveSettings();
        }));
    containerEl.createEl("h3", { text: "FDE Skills", attr: { id: "fde365-settings-agents" } });
    new Setting(containerEl)
      .setName("Skill 执行规则")
      .setDesc("34 个项目 Skill 位于知识库 .agents/skills；执行时使用当前 Provider，并要求先读取对应 SKILL.md 合同。");
    containerEl.createEl("h3", { text: "内容生产", attr: { id: "fde365-settings-projects" } });
    new Setting(containerEl)
      .setName("五阶段内容来源")
      .setDesc(`读取 ${PROJECT_ROOT}，按选题、草稿、待审核、待发布、已发布展示；发布数据作为可选分析输入单独管理。`);
    containerEl.createEl("h3", { text: "知识体检", attr: { id: "fde365-settings-analytics" } });
    new Setting(containerEl)
      .setName("统计数据来源")
      .setDesc("只读取六类资产的真实文件、来源字段、未知项、内容阶段、链接和项目 Skill 部署状态。");
  }
}

module.exports = class AIKnowledgeOSPlugin extends Plugin {
  async onload() {
    await this.loadSettings();
    this.knowledgeRoot = await resolveKnowledgeRoot(this.app);
    configureKnowledgeRoot(this.knowledgeRoot);
    FDEWorkspace.configureKnowledgeRoot(this.knowledgeRoot);
    this.isUnloading = false;
    this.runtimeInitialized = false;
    this.buildChannel = FDE365_BUILD_CHANNEL;
    this.isDeveloperBuild = IS_DEVELOPER_BUILD;
    this.startupTimer = null;
    this.updateStartupTimer = null;
    this.router = new KnowledgeOSRouter(this);
    this.bootstrapService = new VaultBootstrapService(this, { ...KNOWLEDGE_BLUEPRINT, root: this.knowledgeRoot });
    this.fdeWorkspace = new FDEWorkspace.FDEWorkspaceService(this);
    this.agentTaskStore = new AgentTaskStore(this);
    this.providerManager = new AIProviderManager(this);
    this.accountClient = new Account.FdeAccountClient(this, requestUrl);
    this.agentRuntime = new FdeCodexAgentRuntime(this, { mode: IS_DEVELOPER_BUILD ? "local-cli" : "isolated-fde365" });
    this.updateService = new Fde365UpdateService(this);
    this.fde365Provider = this.providerManager.register(new Fde365Provider(this));
    await this.migrateProviderSettings();
    this.lastFile = this.app.workspace.getActiveFile();
    this.registerView(DASHBOARD_VIEW_TYPE, (leaf) => new FDEWorkspace.FDEDashboardView(leaf, this));
    this.registerView(INBOX_VIEW_TYPE, (leaf) => new FDEWorkspace.FDEInboxView(leaf, this));
    this.registerView(LIBRARIES_VIEW_TYPE, (leaf) => new FDEWorkspace.FDELibrariesView(leaf, this));
    this.registerView(NETWORK_VIEW_TYPE, (leaf) => new FDEWorkspace.FDENetworkView(leaf, this));
    this.registerView(CONTENT_VIEW_TYPE, (leaf) => new FDEWorkspace.FDEContentView(leaf, this));
    this.registerView(SKILLS_VIEW_TYPE, (leaf) => new FDEWorkspace.FDESkillsView(leaf, this));
    this.registerView(HEALTH_VIEW_TYPE, (leaf) => new FDEWorkspace.FDEHealthView(leaf, this));
    this.addRibbonIcon("orbit", "打开FDE365 Knowledge OS", () => this.activateView());
    this.addCommand({
      id: "open-dashboard",
      name: "打开知识驾驶舱",
      callback: () => this.activateView(),
    });
    this.addCommand({
      id: "open-onboarding",
      name: "重新打开新人指引",
      callback: () => this.openOnboarding({ force: true }),
    });
    this.addCommand({
      id: "repair-knowledge-blueprint",
      name: "检查并修复知识库模板",
      callback: async () => {
        await this.migrateNeutralTerminology();
        await this.migrateLegacyInboxLayout();
        await this.migrateKnowledgeContract();
        await this.bootstrapService.ensure({ notify: true });
      },
    });
    this.addCommand({
      id: "check-for-updates",
      name: "检查并安装插件更新",
      callback: () => this.updateService.check({ manual: true, forceInstall: true }),
    });
    this.addCommand({
      id: "new-inbox-note",
      name: "新建待处理笔记",
      callback: async () => {
        await this.activateInbox();
        this.getInbox()?.createQuickNote();
      },
    });
    this.addCommand({
      id: "open-inbox",
      name: "打开待处理收集箱",
      callback: () => this.activateInbox(),
    });
    this.addCommand({
      id: "open-knowledge-center",
      name: "打开六类资产",
      callback: () => this.activateKnowledge(),
    });
    this.addCommand({
      id: "open-knowledge-map",
      name: "打开资产网络",
      callback: () => this.activateGraph(),
    });
    this.addCommand({
      id: "open-project-center",
      name: "打开内容生产流水线",
      callback: () => this.activateProjects(),
    });
    this.addCommand({
      id: "open-agent-center",
      name: "打开 FDE Skills",
      callback: () => this.activateAgents(),
    });
    this.addCommand({
      id: "open-knowledge-analytics",
      name: "打开知识体检",
      callback: () => this.activateAnalytics(),
    });
    this.addSettingTab(new AIKnowledgeOSSettingTab(this.app, this));

    this.register(() => {
      if (this.startupTimer !== null) window.clearTimeout(this.startupTimer);
      this.startupTimer = null;
      if (this.updateStartupTimer !== null) window.clearTimeout(this.updateStartupTimer);
      this.updateStartupTimer = null;
    });

    if (!IS_DEVELOPER_BUILD) {
      this.registerInterval(window.setInterval(() => {
        if (!this.isUnloading) void this.updateService.check();
      }, UPDATE_CHECK_INTERVAL_MS));
    }

    this.app.workspace.onLayoutReady(() => {
      if (!this.isUnloading) void this.initializeRuntime();
    });
  }

  async initializeRuntime() {
    if (this.runtimeInitialized || this.isUnloading) return;
    this.runtimeInitialized = true;

    const refresh = debounce(() => this.refreshDashboard(), 500);
    this.registerEvent(this.app.vault.on("create", refresh));
    this.registerEvent(this.app.vault.on("delete", refresh));
    this.registerEvent(this.app.vault.on("modify", refresh));
    this.registerEvent(this.app.vault.on("rename", refresh));
    this.registerEvent(this.app.metadataCache.on("resolved", refresh));
    this.registerEvent(this.app.workspace.on("file-open", (file) => {
      if (file) this.lastFile = file;
    }));

    try {
      const shouldNotify = Number(this.settings.blueprint?.version || 0) < KNOWLEDGE_BLUEPRINT.version;
      await this.migrateNeutralTerminology();
      await this.migrateLegacyInboxLayout();
      await this.migrateKnowledgeContract();
      await this.bootstrapService.ensure({ notify: shouldNotify });
      await this.fdeWorkspace.reloadConfig();
    } catch (error) {
      console.error("FDE365 Knowledge OS: failed to initialize knowledge blueprint", error);
      new Notice("FDE365知识库初始化失败；可在设置中重新检查", 8000);
    }

    const shouldOpenOnboarding = Number(this.settings.onboardingVersion || 0) < ONBOARDING_VERSION;
    if ((this.settings.openOnStartup || shouldOpenOnboarding) && !this.isUnloading) {
      this.startupTimer = window.setTimeout(() => {
        this.startupTimer = null;
        if (this.isUnloading) return;
        void (async () => {
          if (this.settings.openOnStartup) {
            try {
              await this.activateView();
            } catch (error) {
              console.error("FDE365 Knowledge OS: failed to open Dashboard on startup", error);
            }
          }
          if (shouldOpenOnboarding && !this.isUnloading) this.openOnboarding();
        })();
      }, 250);
    }

    if (!IS_DEVELOPER_BUILD) {
      this.updateStartupTimer = window.setTimeout(() => {
        this.updateStartupTimer = null;
        if (!this.isUnloading) void this.updateService.check();
      }, 10000);
    }
  }

  onunload() {
    this.isUnloading = true;
    this.onboardingModal?.close();
    this.onboardingModal = null;
    this.providerManager?.cancelAll?.();
    void this.agentRuntime?.shutdown?.();
    if (this.startupTimer !== null) window.clearTimeout(this.startupTimer);
    this.startupTimer = null;
    if (this.updateStartupTimer !== null) window.clearTimeout(this.updateStartupTimer);
    this.updateStartupTimer = null;
    this.app.workspace.detachLeavesOfType(DASHBOARD_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(INBOX_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(LIBRARIES_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(NETWORK_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(CONTENT_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(SKILLS_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(HEALTH_VIEW_TYPE);
  }

  async loadSettings() {
    const raw = await this.loadData();
    this.needsProviderMigration = Boolean(raw && (
      Number(raw.schemaVersion || 0) < 5
      || raw.ai?.provider !== "fde365"
      || !raw.ai?.fde365
      || raw.ai?.openaiCompatible
      || raw.ai?.codexCli
      || raw.ai?.claudeCli
    ));
    this.settings = mergeSettings(raw || {});
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async migrateNeutralTerminology() {
    if (Number(this.settings.terminologyVersion || 0) >= TERMINOLOGY_VERSION) {
      return { changed: 0, conflicts: [] };
    }

    const root = this.knowledgeRoot;
    const oldDirectoryPath = normalizePath(`${root}/${LEGACY_OWNER_DIRECTORY}`);
    const newDirectoryPath = normalizePath(`${root}/${OWNER_DIRECTORY}`);
    const oldDirectory = this.app.vault.getAbstractFileByPath(oldDirectoryPath);
    const newDirectory = this.app.vault.getAbstractFileByPath(newDirectoryPath);
    const conflicts = [];
    let changed = 0;

    if (oldDirectory && newDirectory) {
      conflicts.push(`${oldDirectoryPath} 与 ${newDirectoryPath} 同时存在`);
    } else if (oldDirectory) {
      await this.app.fileManager.renameFile(oldDirectory, newDirectoryPath);
      changed += 1;
    }

    if (conflicts.length) {
      new Notice("旧版与新版个人说明书目录同时存在，未自动合并；请先确认内容后再修复模板", 10000);
      return { changed, conflicts };
    }

    const oldFilePath = normalizePath(`${newDirectoryPath}/${LEGACY_OWNER_LABEL}说明书.md`);
    const newFilePath = normalizePath(`${newDirectoryPath}/个人说明书.md`);
    const oldFile = this.app.vault.getAbstractFileByPath(oldFilePath);
    const newFile = this.app.vault.getAbstractFileByPath(newFilePath);
    if (oldFile && newFile) {
      conflicts.push(`${oldFilePath} 与 ${newFilePath} 同时存在`);
    } else if (oldFile) {
      await this.app.fileManager.renameFile(oldFile, newFilePath);
      changed += 1;
    }

    if (conflicts.length) {
      new Notice("旧版与新版个人说明书文件同时存在，未自动合并；请先确认内容后再修复模板", 10000);
      return { changed, conflicts };
    }

    const managedPaths = new Set([
      normalizePath(`${root}/.fde/config.yaml`),
      normalizePath(`${root}/AGENTS.md`),
      normalizePath(`${root}/0-使用说明.md`),
      newFilePath,
    ]);
    const skillRoot = normalizePath(`${root}/.agents/skills`);
    const skillPrefix = `${skillRoot}/`;
    const updatedPaths = new Set();
    for (const file of this.app.vault.getFiles()) {
      if (!managedPaths.has(file.path) && !file.path.startsWith(skillPrefix)) continue;
      updatedPaths.add(file.path);
      const current = await this.app.vault.cachedRead(file);
      const next = neutralizeManagedTerminology(current);
      if (next === current) continue;
      await this.app.vault.modify(file, next);
      changed += 1;
    }

    const adapter = this.app.vault.adapter;
    const rewriteAdapterFile = async (path) => {
      const normalized = normalizePath(path);
      if (updatedPaths.has(normalized) || typeof adapter?.read !== "function" || typeof adapter?.write !== "function") return;
      if (typeof adapter.exists === "function" && !await adapter.exists(normalized)) return;
      const current = await adapter.read(normalized);
      const next = neutralizeManagedTerminology(current);
      if (next === current) return;
      await adapter.write(normalized, next);
      changed += 1;
    };
    await rewriteAdapterFile(`${root}/.fde/config.yaml`);
    for (const path of await listAdapterFiles(adapter, skillRoot)) await rewriteAdapterFile(path);

    this.settings.terminologyVersion = TERMINOLOGY_VERSION;
    await this.saveSettings();
    return { changed, conflicts };
  }

  async migrateLegacyInboxLayout() {
    if (Number(this.settings.inboxLayoutVersion || 0) >= INBOX_LAYOUT_VERSION) {
      return { moved: 0, conflicts: [] };
    }

    const root = this.knowledgeRoot;
    const legacyBase = normalizePath(`${root}/0-录音处理`);
    const mappings = [
      {
        label: "pending",
        source: normalizePath(`${legacyBase}/待处理录音`),
        destination: normalizePath(`${root}/0-待处理材料/待处理`),
      },
      {
        label: "processed",
        source: normalizePath(`${legacyBase}/已处理`),
        destination: normalizePath(`${root}/0-待处理材料/已处理记录`),
      },
    ];
    const conflicts = [];
    let moved = 0;

    for (const mapping of mappings) {
      const files = this.app.vault.getFiles()
        .filter((file) => file.path.startsWith(`${mapping.source}/`))
        .sort((left, right) => left.path.localeCompare(right.path));
      for (const file of files) {
        const relative = file.path.slice(mapping.source.length + 1);
        let target = normalizePath(`${mapping.destination}/${relative}`);
        try {
          const isLegacyReadme = relative.toLowerCase() === "readme.md";
          if (isLegacyReadme) {
            const quarantine = normalizePath(`${root}/.fde/quarantine`);
            await ensureVaultFolder(this.app, quarantine);
            target = await uniqueVaultPath(
              this.app,
              normalizePath(`${quarantine}/legacy-recording-${mapping.label}-README.md`),
            );
          } else {
            const parent = target.includes("/") ? target.slice(0, target.lastIndexOf("/")) : "";
            if (parent) await ensureVaultFolder(this.app, parent);
            target = await uniqueVaultPath(this.app, target);
          }
          await this.app.fileManager.renameFile(file, target);
          moved += 1;
        } catch (error) {
          conflicts.push(`${file.path}: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
    }

    const mappedSources = mappings.map((mapping) => `${mapping.source}/`);
    const looseFiles = this.app.vault.getFiles()
      .filter((file) => file.path.startsWith(`${legacyBase}/`)
        && !mappedSources.some((source) => file.path.startsWith(source)))
      .sort((left, right) => left.path.localeCompare(right.path));
    for (const file of looseFiles) {
      const relative = file.path.slice(legacyBase.length + 1);
      try {
        let target;
        if (relative.toLowerCase().endsWith("readme.md")) {
          const quarantine = normalizePath(`${root}/.fde/quarantine`);
          await ensureVaultFolder(this.app, quarantine);
          target = await uniqueVaultPath(
            this.app,
            normalizePath(`${quarantine}/legacy-recording-root-${relative.replaceAll("/", "--")}`),
          );
        } else {
          target = normalizePath(`${root}/0-待处理材料/待处理/${relative}`);
          const parent = target.slice(0, target.lastIndexOf("/"));
          await ensureVaultFolder(this.app, parent);
          target = await uniqueVaultPath(this.app, target);
        }
        await this.app.fileManager.renameFile(file, target);
        moved += 1;
      } catch (error) {
        conflicts.push(`${file.path}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    const remaining = this.app.vault.getFiles().filter((file) => file.path.startsWith(`${legacyBase}/`));
    if (!conflicts.length && !remaining.length) {
      const legacyFolder = this.app.vault.getAbstractFileByPath(legacyBase);
      if (legacyFolder && !(legacyFolder instanceof TFile)) {
        try {
          await this.app.vault.delete(legacyFolder, true);
        } catch (error) {
          conflicts.push(`${legacyBase}: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
    }

    if (conflicts.length) {
      new Notice(`旧录音目录迁移未完成，已保留原内容；请再次检查并修复（${conflicts.length} 项）`, 10000);
      return { moved, conflicts };
    }

    this.settings.inboxLayoutVersion = INBOX_LAYOUT_VERSION;
    await this.saveSettings();
    if (moved) new Notice(`已将 ${moved} 个旧录音文件归并到“待处理材料”`, 6000);
    return { moved, conflicts };
  }

  async migrateKnowledgeContract() {
    if (Number(this.settings.knowledgeContractVersion || 0) >= KNOWLEDGE_CONTRACT_VERSION) {
      return { changed: 0, conflicts: [] };
    }

    const adapter = this.app.vault.adapter;
    const targets = [
      { path: normalizePath(`${this.knowledgeRoot}/AGENTS.md`), kind: "agents" },
      { path: normalizePath(`${this.knowledgeRoot}/.fde/config.yaml`), kind: "config" },
      { path: normalizePath(`${this.knowledgeRoot}/.agents/skills/fde-health/SKILL.md`), kind: "health" },
    ];
    const conflicts = [];
    let changed = 0;
    for (const target of targets) {
      try {
        if (typeof adapter?.exists === "function" && !await adapter.exists(target.path)) continue;
        if (typeof adapter?.read !== "function" || typeof adapter?.write !== "function") continue;
        const current = await adapter.read(target.path);
        const next = migrateManagedKnowledgeContract(current, target.kind);
        if (next === current) continue;
        await adapter.write(target.path, next);
        changed += 1;
      } catch (error) {
        conflicts.push(`${target.path}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
    if (conflicts.length) {
      new Notice(`知识库规则真源迁移未完成；已保留原内容（${conflicts.length} 项）`, 10000);
      return { changed, conflicts };
    }
    this.settings.knowledgeContractVersion = KNOWLEDGE_CONTRACT_VERSION;
    await this.saveSettings();
    return { changed, conflicts };
  }

  async markOnboardingSeen() {
    if (Number(this.settings.onboardingVersion || 0) >= ONBOARDING_VERSION) return;
    this.settings.onboardingVersion = ONBOARDING_VERSION;
    await this.saveSettings();
  }

  openOnboarding({ force = false } = {}) {
    if (this.isUnloading || (!force && Number(this.settings.onboardingVersion || 0) >= ONBOARDING_VERSION)) return;
    if (this.onboardingModal) return;
    this.onboardingModal = new KnowledgeOSOnboardingModal(this.app, this);
    this.onboardingModal.open();
  }

  logoResource() {
    const pluginDirectory = this.manifest.dir || `.obsidian/plugins/${this.manifest.id}`;
    return this.app.vault.adapter.getResourcePath(normalizePath(`${pluginDirectory}/assets/fde365-logo.png`));
  }

  async migrateProviderSettings() {
    if (!this.needsProviderMigration) return;
    this.settings.ai.provider = "fde365";
    this.settings.schemaVersion = 5;
    this.needsProviderMigration = false;
    await this.saveSettings();
  }

  getDashboard() {
    return this.app.workspace.getLeavesOfType(DASHBOARD_VIEW_TYPE)[0]?.view || null;
  }

  getInbox() {
    return this.app.workspace.getLeavesOfType(INBOX_VIEW_TYPE)[0]?.view || null;
  }

  getKnowledgeCenter() {
    return this.app.workspace.getLeavesOfType(LIBRARIES_VIEW_TYPE)[0]?.view || null;
  }

  getGraph() {
    return this.app.workspace.getLeavesOfType(NETWORK_VIEW_TYPE)[0]?.view || null;
  }

  getProjects() {
    return this.app.workspace.getLeavesOfType(CONTENT_VIEW_TYPE)[0]?.view || null;
  }

  getAgents() {
    return this.app.workspace.getLeavesOfType(SKILLS_VIEW_TYPE)[0]?.view || null;
  }

  getAnalytics() {
    return this.app.workspace.getLeavesOfType(HEALTH_VIEW_TYPE)[0]?.view || null;
  }

  refreshDashboard() {
    const dashboard = this.getDashboard();
    if (dashboard && typeof dashboard.render === "function") dashboard.refresh();
    const inbox = this.getInbox();
    if (inbox && typeof inbox.render === "function") inbox.refresh();
    const knowledge = this.getKnowledgeCenter();
    if (knowledge && typeof knowledge.render === "function") knowledge.refresh();
    const graph = this.getGraph();
    if (graph && typeof graph.render === "function") graph.refresh();
    const projects = this.getProjects();
    if (projects && typeof projects.render === "function") projects.refresh();
    const agents = this.getAgents();
    if (agents && typeof agents.render === "function") agents.refresh();
    const analytics = this.getAnalytics();
    if (analytics && typeof analytics.render === "function") analytics.refresh();
  }

  async toggleColorTheme() {
    this.settings.colorTheme = this.settings.colorTheme === "light" ? "dark" : "light";
    await this.saveSettings();
    this.refreshDashboard();
    new Notice(`FDE365已切换为${this.settings.colorTheme === "light" ? "浅色" : "深色"}主题`);
  }

  async revealKnowledgeLeaf(leaf) {
    await this.app.workspace.revealLeaf(leaf);
    this.app.workspace.setActiveLeaf?.(leaf, { focus: true });
    await wait(25);
  }

  async activateView() {
    let leaf = this.app.workspace.getLeavesOfType(DASHBOARD_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: DASHBOARD_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }

  async activateInbox() {
    let leaf = this.app.workspace.getLeavesOfType(INBOX_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: INBOX_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }

  async activateKnowledge() {
    let leaf = this.app.workspace.getLeavesOfType(LIBRARIES_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: LIBRARIES_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }

  async activateGraph() {
    let leaf = this.app.workspace.getLeavesOfType(NETWORK_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: NETWORK_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }

  async activateProjects() {
    let leaf = this.app.workspace.getLeavesOfType(CONTENT_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: CONTENT_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }

  async activateAgents() {
    let leaf = this.app.workspace.getLeavesOfType(SKILLS_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: SKILLS_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }

  async activateAnalytics() {
    let leaf = this.app.workspace.getLeavesOfType(HEALTH_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: HEALTH_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }

  async updateGraphSnapshot(currentEdges) {
    const date = new Date().toISOString().slice(0, 10);
    const current = [...new Set(currentEdges)].sort();
    const snapshot = this.settings.graphSnapshot;
    if (!snapshot || snapshot.date !== date) {
      this.settings.graphSnapshot = {
        date,
        baselineEdges: snapshot?.currentEdges || current,
        currentEdges: current,
      };
      await this.saveSettings();
      const baseline = new Set(this.settings.graphSnapshot.baselineEdges);
      return current.filter((edge) => !baseline.has(edge)).length;
    }
    const baseline = new Set(snapshot.baselineEdges || []);
    const added = current.filter((edge) => !baseline.has(edge)).length;
    if (JSON.stringify(snapshot.currentEdges || []) !== JSON.stringify(current)) {
      snapshot.currentEdges = current;
      await this.saveSettings();
    }
    return added;
  }

  providerLabel(providerId) {
    if (providerId === "fde365-agent") return "FDE365 Codex Agent";
    return this.providerManager.get(providerId)?.label || providerId || "AI Provider";
  }

  requestAgentApproval(options) {
    return new Promise((resolve) => new AgentApprovalModal(this.app, options, resolve).open());
  }

  requestAgentQuestion(questions) {
    if (!questions.length) return Promise.resolve({});
    return new Promise((resolve) => new AgentQuestionModal(this.app, questions, resolve).open());
  }

  cancelAgentRequest(requestId) {
    return this.agentRuntime?.cancel?.(requestId) || false;
  }

  async buildAssistantContext(prompt, sourceFiles = [], localContext = []) {
    const settings = this.settings.ai.assistant;
    const scope = settings.contextScope;
    const maxChars = Math.max(2000, Math.min(100000, Number(settings.maxContextChars) || 20000));
    const context = [];
    let remaining = maxChars;
    for (const item of Array.isArray(localContext) ? localContext : []) {
      if (remaining <= 0 || !item || typeof item !== "object") break;
      const excerpt = String(item.excerpt || "").slice(0, remaining).trim();
      if (!excerpt) continue;
      context.push({
        path: String(item.path || "FDE365 本地运行上下文"),
        title: String(item.title || item.path || "FDE365 本地运行上下文"),
        excerpt,
      });
      remaining -= excerpt.length;
    }
    if (remaining <= 0) return context;
    const candidates = [];
    const addFile = (value) => {
      const file = value instanceof TFile ? value : typeof value === "string" ? this.app.vault.getAbstractFileByPath(value) : null;
      const insideKnowledgeBase = file instanceof TFile && file.path.startsWith(`${ROOT}/`);
      const isRuntimeOrSkill = insideKnowledgeBase && (file.path.startsWith(`${ROOT}/.agents/`) || file.path.startsWith(`${ROOT}/.fde/`));
      if (insideKnowledgeBase && !isRuntimeOrSkill && file.extension === "md" && !candidates.some((item) => item.path === file.path)) candidates.push(file);
    };
    sourceFiles.forEach(addFile);
    if (scope !== "none" && !sourceFiles.length) addFile(this.app.workspace.getActiveFile());

    if (scope === "retrieved") {
      const words = String(prompt || "").toLowerCase().split(/[\s，。！？；、,.!?;:：]+/).filter((word) => word.length > 1).slice(0, 12);
      const scored = [];
      for (const file of this.app.vault.getMarkdownFiles()) {
        if (!file.path.startsWith(`${ROOT}/`) || file.path.startsWith(`${ROOT}/.agents/`) || file.path.startsWith(`${ROOT}/.fde/`) || file.path.startsWith(`${ROOT}/7-系统/`)) continue;
        if (candidates.some((item) => item.path === file.path) || file.path.startsWith(`${AGENT_ROOT}/运行记录/`) || file.path.startsWith(`${AGENT_ROOT}/输出/`)) continue;
        const content = await this.app.vault.cachedRead(file);
        const haystack = `${file.basename}\n${content}`.toLowerCase();
        let score = 0;
        words.forEach((word) => {
          if (file.basename.toLowerCase().includes(word)) score += 5;
          score += Math.min(5, haystack.split(word).length - 1);
        });
        if (score > 0) scored.push({ file, score });
      }
      scored.sort((a, b) => b.score - a.score || b.file.stat.mtime - a.file.stat.mtime);
      scored.slice(0, 4).forEach((item) => addFile(item.file));
    }

    for (const file of candidates.slice(0, 6)) {
      if (remaining <= 0) break;
      const raw = await this.app.vault.cachedRead(file);
      const excerpt = raw.slice(0, Math.min(remaining, Math.max(1000, Math.floor(maxChars / Math.max(1, candidates.length))))).trim();
      if (!excerpt) continue;
      context.push({ path: file.path, title: file.basename, excerpt });
      remaining -= excerpt.length;
    }
    return context;
  }

  async askAssistant({ requestId, prompt, history = [], systemPrompt, sourceFiles = [], localContext = [], sessionId = "", onEvent = null }) {
    const context = await this.buildAssistantContext(prompt, sourceFiles, localContext);
    const messages = [
      { role: "system", content: systemPrompt || "你是FDE365知识助手。" },
      ...history.filter((message) => !message.error && ["user", "assistant"].includes(message.role) && message.content).slice(-6).map((message) => ({ role: message.role, content: message.content })),
      { role: "user", content: prompt },
    ];
    if (!IS_DEVELOPER_BUILD) await this.providerManager.preflight();
    return this.agentRuntime.complete({ requestId, mode: "chat", messages, context, sessionId, onEvent });
  }

  async saveAssistantOutput(message, viewName = "AI 助手", options = {}) {
    await ensureVaultFolder(this.app, AI_OUTPUT_ROOT);
    const date = new Date();
    const stamp = date.toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
    const base = `${AI_OUTPUT_ROOT}/${stamp}-${safeName(viewName)}.md`;
    let path = base;
    let index = 2;
    while (this.app.vault.getAbstractFileByPath(path) || await this.app.vault.adapter.exists(path)) {
      path = base.replace(/\.md$/, `-${index}.md`);
      index += 1;
    }
    const result = message.result || {};
    const conversationId = options.conversationId || result.conversationId || "";
    const sourceFiles = Array.isArray(options.sourceFiles) ? options.sourceFiles.map(String).filter(Boolean) : [];
    const prompt = String(options.prompt || "").trim();
    const content = `---\ntype: ai-assistant-output\nprovider: ${yamlQuote(result.provider || "unknown")}\nprovider_version: ${yamlQuote(result.providerVersion || "")}\nmodel: ${yamlQuote(result.model || "")}\nconversation_id: ${yamlQuote(conversationId)}\nsource_files: ${JSON.stringify(sourceFiles)}\nuser_prompt: ${yamlQuote(prompt)}\ncreated_at: ${date.toISOString()}\nsource_view: ${yamlQuote(viewName)}\ntags:\n  - ai/assistant-output\n---\n\n# ${viewName} · AI 对话\n\n${prompt ? `## 你\n\n${prompt}\n\n` : ""}## FDE365\n\n${message.content}\n`;
    return this.app.vault.create(path, content);
  }

  async runAssistantAgent(prompt) {
    const agent = {
      id: "assistant",
      name: "FDE365助手",
      description: "基于当前本地知识上下文完成用户提交的深度任务。",
      output: "分析结果",
    };
    const active = this.app.workspace.getActiveFile();
    return this.executeAgent(agent, prompt, active ? [active] : []);
  }

  async executeAgent(agent, prompt, sources = [], options = {}) {
    if (options.visibleConversation !== true) {
      new Notice("请从右侧 FDE365 Agent 对话启动任务");
      return null;
    }
    let capability;
    try {
      const runtime = this.agentRuntime.describe();
      if (!runtime.available) throw new AIProviderError("AGENT_RUNTIME_MISSING", runtime.error || "未找到 Codex Agent 运行组件");
      capability = IS_DEVELOPER_BUILD
        ? { model: "本机 Codex 默认模型" }
        : (await this.providerManager.preflight()).capability;
    } catch (error) {
      new Notice(`无法启动 Agent：${error instanceof Error ? error.message : String(error)}`);
      if (["PROVIDER_NOT_CONFIGURED", "PROVIDER_UNAVAILABLE", "INCOMPATIBLE_VERSION", "AUTH_FAILED", "MODEL_NOT_FOUND"].includes(error?.code)) this.openSettings("ai");
      return null;
    }
    const task = await this.agentTaskStore.createRun(agent, prompt, sources, {
      provider: "fde365-agent",
      providerVersion: "codex-app-server-responses",
      model: capability.model || "",
      label: IS_DEVELOPER_BUILD ? "DEV · 本地 Codex CLI" : "FDE365 Codex Agent",
    });
    if (typeof options.onTaskStart === "function") options.onTaskStart(task);
    new Notice(`${agent.name} 已进入执行队列 · ${IS_DEVELOPER_BUILD ? "本地 Codex CLI" : "FDE365 Codex Agent"}`);
    await this.agentTaskStore.transition(task, AGENT_RUN_STATUSES.RUNNING, {
      provider_version: "codex-app-server-responses",
      model: capability.model || "",
      started_at: new Date().toISOString(),
      error: "",
    });
    this.refreshDashboard();
    try {
      const context = await this.buildAssistantContext(prompt, sources, agent.localContext || []);
      const result = await this.agentRuntime.complete({
        requestId: task.taskId,
        mode: "agent",
        messages: [
          { role: "system", content: agent.systemPrompt || `你是“${agent.name}”。${agent.description} 输出类型：${agent.output}。请区分事实、推断和建议，并明确引用来源。` },
          { role: "user", content: prompt },
        ],
        context,
        sessionId: options.sessionId || "",
        onEvent: options.onEvent,
      });
      if (!result.content?.trim()) throw new AIProviderError("EMPTY_RESPONSE", "AI Provider 返回了空内容");
      const outputFile = await this.agentTaskStore.saveOutput(task, result);
      await this.agentTaskStore.transition(task, AGENT_RUN_STATUSES.WAITING_REVIEW, {
        finished_at: new Date().toISOString(),
        conversation_id: result.conversationId || "",
        output_file: outputFile.path,
        reviewed: false,
        error: "",
      });
      this.lastAgentResult = { task, result, outputFile };
      new Notice(`${agent.name} 已完成，结果已生成并等待人工验收`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const nextStatus = ["PROVIDER_NOT_CONFIGURED", "PROVIDER_UNAVAILABLE", "INCOMPATIBLE_VERSION", "AUTH_FAILED", "MODEL_NOT_FOUND"].includes(error?.code)
        ? AGENT_RUN_STATUSES.BLOCKED
        : error?.code === "CANCELLED"
          ? AGENT_RUN_STATUSES.CANCELLED
          : AGENT_RUN_STATUSES.FAILED;
      await this.agentTaskStore.transition(task, nextStatus, {
        finished_at: new Date().toISOString(),
        error: message,
      });
      new Notice(`${agent.name} 执行未完成：${message}`);
    } finally {
      this.refreshDashboard();
    }
    return task;
  }

  openSettings(section) {
    this.app.setting?.open();
    this.app.setting?.openTabById(this.manifest.id);
    if (section) window.setTimeout(() => {
      document.querySelector(`#fde365-settings-${section}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
};

module.exports.__testables = Object.freeze({
  FDE365_BUILD_CHANNEL,
  IS_DEVELOPER_BUILD,
  AIProviderError,
  AIProviderManager,
  Fde365Provider,
  Fde365UpdateService,
  VaultBootstrapService,
  mergeSettings,
  buildOpenAIMessages,
  FDE365_BASE_URL,
  FDE365_CHAT_ENDPOINT,
  FDE365_MODELS,
  DEFAULT_ROOT,
  LEGACY_ROOT,
  TERMINOLOGY_VERSION,
  INBOX_LAYOUT_VERSION,
  KNOWLEDGE_CONTRACT_VERSION,
  LEGACY_OWNER_DIRECTORY,
  OWNER_DIRECTORY,
  neutralizeManagedTerminology,
  migrateManagedKnowledgeContract,
  inferInboxTags,
  inferInboxCategory,
  configureKnowledgeRoot,
  resolveKnowledgeRoot,
  ONBOARDING_STEPS,
  ONBOARDING_VERSION,
  FDE365_RELEASE_REPOSITORY,
  FDE365_RELEASE_API,
  FDE365_UPDATE_ORIGIN,
});
