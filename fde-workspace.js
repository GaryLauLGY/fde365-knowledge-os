const {
  ItemView,
  Modal,
  Notice,
  TFile,
  normalizePath,
  setIcon,
} = require("obsidian");

let ROOT = "FDE365知识库";

function configureKnowledgeRoot(root) {
  ROOT = String(root || "FDE365知识库");
  return ROOT;
}

const VIEW_TYPES = Object.freeze({
  dashboard: "ai-knowledge-os-dashboard",
  inbox: "ai-knowledge-os-inbox",
  libraries: "ai-knowledge-os-knowledge",
  network: "ai-knowledge-os-graph",
  content: "ai-knowledge-os-projects",
  skills: "ai-knowledge-os-agents",
  health: "ai-knowledge-os-analytics",
});

const LIBRARIES = Object.freeze([
  { id: "owner", order: "01", key: "owner", name: "个人说明书", short: "说明书", path: "1-个人说明书", icon: "fingerprint", color: "indigo", description: "身份、判断、表达习惯和不能公开的边界", emptyAction: "用 /fde-interview 补齐本人原话与判断" },
  { id: "product", order: "02", key: "product", name: "产品库", short: "产品", path: "2-产品库", icon: "package-check", color: "blue", description: "产品、价格、承诺、交付内容和常见异议", emptyAction: "创建第一个产品事实文件" },
  { id: "customer", order: "03", key: "customer", name: "客户需求库", short: "客户", path: "3-客户需求库", icon: "messages-square", color: "cyan", description: "客户原话、问题、成交与未成交记录", emptyAction: "导入一次真实客户沟通" },
  { id: "case", order: "04", key: "case", name: "素材案例库", short: "案例", path: "4-素材案例库", icon: "archive", color: "orange", description: "事件、案例、数据、对话、动作和结果", emptyAction: "把一段经历整理成可追溯案例" },
  { id: "method", order: "05", key: "method", name: "方法论库", short: "方法", path: "5-方法论库", icon: "route", color: "violet", description: "使用过的方法、前置条件、步骤与失败信号", emptyAction: "沉淀一个已经实际使用的方法" },
  { id: "content", order: "06", key: "content", name: "内容生产", short: "内容", path: "6-内容生产", icon: "pen-tool", color: "pink", description: "从选题到发布复盘的内容生产流水线", emptyAction: "从六库材料生成第一个可追溯选题" },
]);

const CONTENT_STAGES = Object.freeze([
  { id: "选题", icon: "lightbulb", color: "indigo", description: "有来源、读者和核心问题" },
  { id: "草稿", icon: "file-pen-line", color: "blue", description: "正在写，尚未审核" },
  { id: "待审核", icon: "scan-search", color: "orange", description: "核对事实、表达和平台" },
  { id: "待发布", icon: "calendar-clock", color: "violet", description: "审核通过，等待发布" },
  { id: "已发布", icon: "send", color: "green", description: "记录平台、链接和日期" },
  { id: "数据复盘", icon: "chart-no-axes-column-increasing", color: "cyan", description: "记录数据、评论和下一次实验" },
]);

const SKILL_GROUPS = Object.freeze([
  { id: "entry", name: "开始与入库", description: "选择入口、采访、导入和体检" },
  { id: "business", name: "商业判断", description: "围绕产品、客户、证据和行动做判断" },
  { id: "content", name: "内容生产", description: "从选题、写作到审核、排版和复盘" },
  { id: "library", name: "知识库维护", description: "查找、整理、连接和安全维护" },
  { id: "state", name: "状态与决策", description: "保存、恢复、报告和回填决定" },
  { id: "method", name: "学习与讨论", description: "定义问题、组织讨论和短反馈循环" },
]);

const SKILLS = Object.freeze([
  { id: "fde-start", group: "entry", name: "从这里开始", description: "读取六库状态，只选择一个当前入口并直接继续。", output: "任务路由", icon: "compass" },
  { id: "fde-interview", group: "entry", name: "建库采访", description: "一次只问一个问题，保留原话、事实、推断和未知项。", output: "采访记录与分流建议", icon: "mic-2" },
  { id: "fde-ingest", group: "entry", name: "材料入库", description: "通读录音、聊天和旧文档，先出分流预览，确认后入库。", output: "分流预览", icon: "inbox" },
  { id: "fde-export", group: "entry", name: "导出会话", description: "导出用户明确选择的本地 Agent 会话并保留时间和来源。", output: "Markdown 会话", icon: "download" },
  { id: "fde-health", group: "entry", name: "知识库体检", description: "检查配置、来源、收件箱、内容阶段和运行状态，默认只报告。", output: "体检报告", icon: "activity" },
  { id: "fde-update", group: "entry", name: "检查更新", description: "展示 FDE Skills 差异，确认后只更新 Skill，不改业务资产。", output: "更新差异", icon: "refresh-cw" },
  { id: "fde-diagnose", group: "business", name: "商业诊断", description: "用客户、产品、案例和交付记录诊断生意问题。", output: "事实、假设与验证项", icon: "stethoscope" },
  { id: "fde-define", group: "business", name: "定义概念", description: "把模糊词换成当前业务中可观察、可检查的定义。", output: "可观察定义", icon: "brackets" },
  { id: "fde-goal", group: "business", name: "明确目标", description: "把愿望改成有对象、结果、边界、证据和时间的目标。", output: "目标合同", icon: "goal" },
  { id: "fde-question", group: "business", name: "整理问题", description: "把困惑整理成 Agent、员工或顾问可以处理的问题说明书。", output: "问题说明书", icon: "circle-help" },
  { id: "fde-focus", group: "business", name: "确定焦点", description: "识别当前约束，决定主动作、暂停项和观察项。", output: "焦点与暂停清单", icon: "focus" },
  { id: "fde-action", group: "business", name: "推进一步", description: "把推不动的任务缩成一个能产生真实反馈的动作。", output: "下一步动作", icon: "move-right" },
  { id: "fde-write", group: "content", name: "内容写作", description: "根据六类资产列证据和写作合同，再生成带来源草稿。", output: "草稿、来源与未核实项", icon: "pen-line" },
  { id: "fde-topics", group: "content", name: "生成选题", description: "从客户原话、产品问题、案例、判断和方法中生成可追溯选题。", output: "选题清单", icon: "lightbulb" },
  { id: "fde-review", group: "content", name: "内容审核", description: "先核对事实和定位，再检查内容质量；默认只诊断不改稿。", output: "发布判断与修改顺序", icon: "scan-search" },
  { id: "fde-hook", group: "content", name: "设计开头", description: "根据选题、读者和真实材料诊断并设计少量可用开头。", output: "开头方案", icon: "magnet" },
  { id: "fde-title", group: "content", name: "生成标题", description: "生成正文证据能够支持的标题，不扩大承诺。", output: "标题候选", icon: "heading" },
  { id: "fde-check", group: "content", name: "检查表达", description: "标记空泛判断、整齐模板、无来源事实和语气偏差。", output: "问题标记", icon: "spell-check-2" },
  { id: "fde-flow", group: "content", name: "检查段落", description: "检查段间承接、跳步、重复和信息拥堵。", output: "段落诊断", icon: "git-branch" },
  { id: "fde-impact", group: "content", name: "检查读者匹配", description: "检查内容是否准确指向目标读者的处境、判断和行动。", output: "读者匹配诊断", icon: "target" },
  { id: "fde-format", group: "content", name: "公众号排版", description: "把已确认 Markdown 转成公众号可粘贴 HTML，保持正文不变。", output: "微信公众号 HTML", icon: "code-xml" },
  { id: "fde-spread", group: "content", name: "传播复盘", description: "根据真实发布数据、评论和转发语境分析传播结果。", output: "传播复盘", icon: "radio-tower" },
  { id: "fde-benchmark", group: "content", name: "研究对标", description: "围绕业务目标比较可观察做法并安排小实验，不复制人设。", output: "对标观察与实验", icon: "telescope" },
  { id: "fde-library", group: "library", name: "查库与维护", description: "查找、收录、纠错和维护六类资产，每个结论返回来源。", output: "答案、来源与版本", icon: "library" },
  { id: "fde-organize", group: "library", name: "整理资产", description: "检查重复、错库、无来源和命名，先出迁移预览。", output: "资产清单与迁移预览", icon: "list-tree" },
  { id: "fde-connect", group: "library", name: "连接 Skill", description: "把 Skill 真源连接到指定 Agent 技能目录并检查状态。", output: "连接状态", icon: "link" },
  { id: "fde-setup", group: "library", name: "整理 Agent 项目", description: "整理规则真源和 Skill 真源，让多个本地 Agent 识别项目。", output: "项目设置预览", icon: "wrench" },
  { id: "fde-safety", group: "library", name: "Skill 安全检查", description: "只读检查外部命令、网络、敏感读取、隐藏指令和删除行为。", output: "安全报告", icon: "shield-check" },
  { id: "fde-save", group: "state", name: "保存进度", description: "保存目标、来源、完成项、未知项和下一步。", output: "任务状态", icon: "save" },
  { id: "fde-resume", group: "state", name: "恢复进度", description: "核对文件和事实变化后，恢复最近或指定任务。", output: "恢复检查与下一步", icon: "history" },
  { id: "fde-report", group: "state", name: "整理报告", description: "把同一任务的多次状态、决定和结果整理成带来源报告。", output: "Markdown 报告", icon: "file-chart-column" },
  { id: "fde-decide", group: "state", name: "记录决定", description: "保存选项、证据、假设、风险、回填日期和真实结果。", output: "决策记录", icon: "scale" },
  { id: "fde-discuss", group: "method", name: "多角度讨论", description: "按职责组织 3—5 个视角，只使用库内事实和公开方法。", output: "多视角讨论", icon: "users" },
  { id: "fde-economy", group: "method", name: "交易视角", description: "从价格、成本、选择、激励和信息差检查商业判断。", output: "交易结构分析", icon: "badge-dollar-sign" },
  { id: "fde-learn", group: "method", name: "短学习循环", description: "围绕工作问题先做、记录反馈、补一个知识点再继续。", output: "学习与反馈计划", icon: "graduation-cap" },
]);

function commandCompletionState(value, caret = String(value || "").length, limit = 8) {
  const text = String(value || "");
  const safeCaret = Math.max(0, Math.min(text.length, Number(caret) || 0));
  const beforeCaret = text.slice(0, safeCaret);
  const match = beforeCaret.match(/(?:^|\n)\s*(\/[a-z0-9-]*)$/i);
  if (!match) return null;
  const token = match[1];
  const query = token.slice(1).toLowerCase();
  const matches = SKILLS
    .filter((skill) => !query || skill.id.toLowerCase().includes(query) || skill.name.toLowerCase().includes(query))
    .slice(0, Math.max(1, Number(limit) || 8));
  return {
    query,
    start: safeCaret - token.length,
    end: safeCaret,
    matches,
  };
}

const BASE_SKILL_RULES = [
  "从当前目录向上找到 .fde/config.yaml，并按配置解析六类资产库。",
  "只读取本任务需要的文件，不跨知识库搜索。",
  "严格区分库内事实、用户本轮信息、当前推断和未知项。",
  "关键判断附来源路径；没有来源的内容标为推断或待确认。",
  "原始材料不覆盖；所有写入保留来源和可追溯记录。",
  "录音、聊天、图片和文档是材料形式，不是资产库；同一材料可同时建议分流到多个六类资产库。",
].join("\n");

function executionModeRule(plugin) {
  return plugin?.settings?.ai?.assistant?.executionMode === "yolo"
    ? "当前为 YOLO 模式：可在当前 Vault 内直接执行命令和文件写入，不等待逐次批准；完成后汇报改动与验证结果。"
    : "当前为需要批准模式：移动、覆盖、删除、批量写入或运行命令前，先给预览并等待用户批准。";
}

function isInboxClosurePrompt(prompt) {
  return /(?:结案|完成处理|归档处理|移入已处理)/.test(String(prompt || ""));
}

const NAV_ITEMS = Object.freeze([
  { key: "dashboard", label: "总览", note: "六库状态", icon: "layout-dashboard" },
  { key: "inbox", label: "待处理", note: "原始材料", icon: "inbox" },
  { key: "libraries", label: "六类资产", note: "真源与版本", icon: "library" },
  { key: "network", label: "资产网络", note: "跨库关系", icon: "network" },
  { key: "content", label: "内容生产", note: "六阶段流水线", icon: "panels-top-left" },
  { key: "skills", label: "FDE Skills", note: "35 项工作流", icon: "blocks" },
  { key: "health", label: "知识体检", note: "来源与冲突", icon: "activity" },
]);

function makeIcon(parent, name, cls = "") {
  const el = parent.createSpan({ cls: `wis-icon ${cls}`.trim() });
  setIcon(el, name);
  return el;
}

function makeButton(parent, label, iconName, cls = "", onClick) {
  const button = parent.createEl("button", { cls: `wis-button ${cls}`.trim() });
  button.setAttr("type", "button");
  if (iconName) makeIcon(button, iconName);
  if (label) {
    button.setAttr("aria-label", label);
    button.createSpan({ text: label, cls: "wis-button-label" });
  }
  if (onClick) button.addEventListener("click", onClick);
  return button;
}

function formatRelativeTime(timestamp) {
  const delta = Math.max(0, Date.now() - Number(timestamp || 0));
  const minute = 60000;
  if (delta < minute) return "刚刚";
  if (delta < 60 * minute) return `${Math.floor(delta / minute)} 分钟前`;
  if (delta < 24 * 60 * minute) return `${Math.floor(delta / (60 * minute))} 小时前`;
  if (delta < 2 * 24 * 60 * minute) return "昨天";
  const date = new Date(timestamp);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function assistantHistoryTopic(frontmatter = {}) {
  const prompt = String(frontmatter.user_prompt || frontmatter.task || "").trim();
  const sources = frontmatterPaths(frontmatter.source_files);
  if (/用户已明确选择以下[\s\S]*原始材料进行处理/.test(prompt) && sources.length) {
    const names = sources.slice(0, 2).map((path) => String(path).split("/").pop().replace(/\.md$/i, ""));
    return `处理 ${names.join("、")}${sources.length > 2 ? ` 等 ${sources.length} 份材料` : ""}`;
  }
  const normalized = prompt
    .replace(/^\s*\/fde-[a-z0-9-]+\s*/i, "")
    .replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, "$1")
    .replace(/[`*_>#-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (normalized) {
    const characters = Array.from(normalized);
    return characters.length > 34 ? `${characters.slice(0, 34).join("")}…` : normalized;
  }
  const skill = SKILLS.find((item) => item.id === String(frontmatter.agent_id || ""));
  return skill ? skill.name : "FDE365 协作对话";
}

function percent(value) {
  return `${Math.round(Math.max(0, Math.min(1, Number(value) || 0)) * 100)}%`;
}

function safeName(value) {
  return String(value || "未命名").trim().replace(/[\\/:*?"<>|#^[\]]/g, "-").replace(/\s+/g, " ").slice(0, 80) || "未命名";
}

function yamlValue(value) {
  return JSON.stringify(String(value || ""));
}

function parseConfigYaml(raw) {
  const result = { libraries: {}, inbox: {}, runtime: {}, policy: {} };
  let section = "";
  String(raw || "").split(/\r?\n/).forEach((line) => {
    const sectionMatch = line.match(/^([A-Za-z0-9_-]+):\s*$/);
    if (sectionMatch) {
      section = sectionMatch[1];
      if (!result[section]) result[section] = {};
      return;
    }
    const valueMatch = line.match(/^\s{2}([A-Za-z0-9_-]+):\s*(.*?)\s*$/);
    if (!valueMatch || !section) return;
    let value = valueMatch[2].replace(/^['"]|['"]$/g, "");
    if (value === "true") value = true;
    if (value === "false") value = false;
    result[section][valueMatch[1]] = value;
  });
  return result;
}

function sourceFromContent(content, frontmatter = {}) {
  const direct = frontmatter.source || frontmatter.source_file || frontmatter.sources;
  if (Array.isArray(direct) && direct.some((item) => String(item).trim())) return direct.map(String).join("、");
  if (typeof direct === "string" && direct.trim()) return direct.trim();
  const match = String(content || "").match(/^[ \t]*-[ \t]*(?:信息来源|来源文件|来源|原始文件路径)[ \t]*[：:][ \t]*(.*?)[ \t]*$/mi);
  const value = match?.[1]?.trim() || "";
  return value && !/^(?:-|无|未知|待确认|暂无)$/i.test(value) ? value : "";
}

function unknownFromContent(content) {
  const headings = ["待确认", "待验证", "未核实项", "仍不确定的内容", "待补信息", "当前推断"];
  let count = 0;
  headings.forEach((heading) => {
    const pattern = new RegExp(`^##\\s+${heading}\\s*$([\\s\\S]*?)(?=^##\\s|(?![\\s\\S]))`, "gmi");
    const match = pattern.exec(String(content || ""));
    if (!match) return;
    const body = match[1].replace(/^\s*[-*]\s*$/gm, "").replace(/<!--.*?-->/gs, "").trim();
    if (body) count += body.split(/\n+/).filter((line) => line.replace(/^\s*[-*]\s*/, "").trim()).length;
  });
  return count;
}

function frontmatterOf(app, file) {
  return app.metadataCache?.getFileCache?.(file)?.frontmatter || {};
}

function markdownSection(content, heading) {
  const text = String(content || "").replace(/^---[\s\S]*?---\s*/m, "");
  const escaped = String(heading || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = new RegExp(`^##\\s+${escaped}\\s*$`, "mi").exec(text);
  if (!match) return "";
  const start = match.index + match[0].length;
  const rest = text.slice(start);
  const next = /^##\s+/m.exec(rest);
  return rest.slice(0, next ? next.index : rest.length).trim();
}

function markdownBody(content) {
  return String(content || "")
    .replace(/^---[\s\S]*?---\s*/m, "")
    .replace(/^#\s+.*$/m, "")
    .trim();
}

function frontmatterPaths(value) {
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  if (!value) return [];
  try {
    const parsed = JSON.parse(String(value));
    return Array.isArray(parsed) ? parsed.map(String).filter(Boolean) : [];
  } catch (_) {
    return [];
  }
}

function linkedPaths(content) {
  return [...String(content || "").matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g)]
    .map((match) => `${match[1].replace(/\.md$/, "")}.md`);
}

async function ensureFolder(app, path) {
  const normalized = normalizePath(path);
  let current = "";
  for (const part of normalized.split("/")) {
    current = current ? `${current}/${part}` : part;
    const existing = app.vault.getAbstractFileByPath(current);
    if (existing) continue;
    await app.vault.createFolder(current).catch((error) => {
      if (!/already exists/i.test(String(error?.message || error))) throw error;
    });
  }
}

async function uniquePath(app, path) {
  if (!app.vault.getAbstractFileByPath(path) && !await app.vault.adapter.exists(path)) return path;
  const dot = path.lastIndexOf(".");
  const slash = path.lastIndexOf("/");
  const base = dot > slash ? path.slice(0, dot) : path;
  const ext = dot > slash ? path.slice(dot) : "";
  let index = 2;
  while (app.vault.getAbstractFileByPath(`${base}-${index}${ext}`) || await app.vault.adapter.exists(`${base}-${index}${ext}`)) index += 1;
  return `${base}-${index}${ext}`;
}

class TextPromptModal extends Modal {
  constructor(app, options) {
    super(app);
    this.options = options;
  }

  onOpen() {
    const root = this.contentEl;
    root.addClass("wis-modal");
    root.createEl("h2", { text: this.options.title });
    root.createEl("p", { text: this.options.description || "", cls: "wis-modal-note" });
    const attributes = { placeholder: this.options.placeholder || "" };
    if (this.options.multiline) attributes.rows = "6";
    const input = root.createEl(this.options.multiline ? "textarea" : "input", {
      cls: "wis-modal-input",
      attr: attributes,
    });
    const actions = root.createDiv({ cls: "wis-modal-actions" });
    makeButton(actions, "取消", "x", "is-secondary", () => this.close());
    makeButton(actions, this.options.submitLabel || "继续", "arrow-right", "is-primary", async () => {
      const value = input.value.trim();
      if (!value) return;
      this.close();
      await this.options.onSubmit(value);
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && (!this.options.multiline || event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        const button = actions.querySelector(".is-primary");
        button?.click();
      }
    });
    window.setTimeout(() => input.focus(), 50);
  }
}

function recordingExtension(mimeType) {
  const type = String(mimeType || "").toLowerCase();
  if (type.includes("mp4") || type.includes("m4a")) return "m4a";
  if (type.includes("ogg")) return "ogg";
  if (type.includes("wav")) return "wav";
  return "webm";
}

class VoiceCaptureModal extends Modal {
  constructor(app, { plugin, service, onSaved }) {
    super(app);
    this.plugin = plugin;
    this.service = service;
    this.onSaved = onSaved;
    this.state = "idle";
    this.error = "";
    this.transcript = "";
    this.audio = null;
    this.mimeType = "audio/webm";
    this.durationMs = 0;
    this.activeStartedAt = 0;
    this.chunks = [];
    this.recorder = null;
    this.stream = null;
    this.timer = null;
    this.closed = false;
  }

  onOpen() {
    this.contentEl.addClass("wis-modal");
    this.contentEl.addClass("wis-voice-modal");
    this.render();
  }

  elapsedMs() {
    return this.durationMs + (this.state === "recording" && this.activeStartedAt ? Date.now() - this.activeStartedAt : 0);
  }

  timeLabel() {
    const seconds = Math.floor(this.elapsedMs() / 1000);
    return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  }

  render() {
    const root = this.contentEl;
    root.empty();
    root.createSpan({ text: "FDE365 · AI 语音记录", cls: "wis-eyebrow" });
    root.createEl("h2", { text: "语音转成待处理文字" });
    root.createEl("p", {
      text: "原始录音会和 AI 转写稿一起保存在当前 Vault；不会自动运行 /fde-ingest。",
      cls: "wis-modal-note",
    });
    const stage = root.createDiv({ cls: `wis-voice-stage is-${this.state}`, attr: { role: "status", "aria-live": "polite" } });
    const visual = stage.createDiv({ cls: "wis-voice-visual", attr: { "aria-hidden": "true" } });
    makeIcon(visual, this.state === "ready" ? "circle-check" : this.state === "error" ? "circle-alert" : "audio-lines");
    const wave = visual.createDiv({ cls: "wis-voice-wave" });
    for (let index = 0; index < 12; index += 1) wave.createSpan({ attr: { style: `--wave-index:${index}` } });
    const copy = stage.createDiv({ cls: "wis-voice-status-copy" });
    const statusText = {
      idle: ["准备录音", "点击开始后请对着麦克风说话"],
      recording: ["正在录音", "可暂停，结束后会自动转写"],
      paused: ["已暂停", "继续录音，或直接结束并转写"],
      transcribing: ["AI 正在转写", "录音已完成，请稍候"],
      ready: ["转写完成", "可以先修改文字，再保存到待处理"],
      error: ["转写未完成", this.error || "请重试"],
    }[this.state] || ["准备录音", ""];
    copy.createEl("strong", { text: statusText[0] });
    copy.createSpan({ text: statusText[1] });
    const timer = stage.createSpan({ text: this.timeLabel(), cls: "wis-voice-timer" });
    this.timerEl = timer;

    let transcriptInput = null;
    if (this.state === "ready") {
      root.createEl("label", { text: "转写文字（保存前可编辑）", cls: "wis-voice-label" });
      transcriptInput = root.createEl("textarea", {
        cls: "wis-modal-input wis-voice-transcript",
        attr: { rows: "8", "aria-label": "AI 语音转写结果" },
      });
      transcriptInput.value = this.transcript;
      transcriptInput.addEventListener("input", () => { this.transcript = transcriptInput.value; });
    }
    if (this.state === "error") root.createDiv({ text: this.error, cls: "wis-voice-error" });

    const actions = root.createDiv({ cls: "wis-modal-actions wis-voice-actions" });
    makeButton(actions, "取消", "x", "is-secondary", () => this.close());
    if (this.state === "idle" || this.state === "error") {
      makeButton(actions, this.state === "error" ? "重新录音" : "开始录音", "mic", "is-primary", () => void this.start());
    } else if (this.state === "recording") {
      makeButton(actions, "暂停", "pause", "is-secondary", () => this.pause());
      makeButton(actions, "结束并转写", "square", "is-primary", () => this.stop());
    } else if (this.state === "paused") {
      makeButton(actions, "继续", "play", "is-secondary", () => this.resume());
      makeButton(actions, "结束并转写", "sparkles", "is-primary", () => this.stop());
    } else if (this.state === "transcribing") {
      const working = makeButton(actions, "AI 转写中…", "loader-circle", "is-primary");
      working.disabled = true;
    } else if (this.state === "ready") {
      makeButton(actions, "重新录音", "rotate-ccw", "is-secondary", () => void this.start());
      makeButton(actions, "保存到待处理", "inbox", "is-primary", () => void this.save());
      window.setTimeout(() => transcriptInput?.focus(), 30);
    }
  }

  chooseMimeType() {
    const recorder = window.MediaRecorder;
    const candidates = ["audio/webm;codecs=opus", "audio/mp4", "audio/ogg;codecs=opus", "audio/webm"];
    return candidates.find((type) => typeof recorder?.isTypeSupported !== "function" || recorder.isTypeSupported(type)) || "";
  }

  startTimer() {
    this.stopTimer();
    this.timer = window.setInterval(() => {
      if (this.timerEl) this.timerEl.setText(this.timeLabel());
    }, 250);
  }

  stopTimer() {
    if (this.timer !== null) window.clearInterval(this.timer);
    this.timer = null;
  }

  stopStream() {
    for (const track of this.stream?.getTracks?.() || []) track.stop();
    this.stream = null;
  }

  async start() {
    if (!String(this.plugin.settings?.ai?.fde365?.token || "").trim()) {
      new Notice("请先在插件设置中填写 Token");
      this.plugin.openSettings?.("ai");
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      this.state = "error";
      this.error = "当前 Obsidian 环境不支持麦克风录音";
      this.render();
      return;
    }
    this.stopTimer();
    this.stopStream();
    this.chunks = [];
    this.audio = null;
    this.transcript = "";
    this.error = "";
    this.durationMs = 0;
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
      const preferred = this.chooseMimeType();
      this.recorder = new window.MediaRecorder(this.stream, preferred ? { mimeType: preferred } : undefined);
      this.mimeType = this.recorder.mimeType || preferred || "audio/webm";
      this.recorder.addEventListener("dataavailable", (event) => {
        if (event.data?.size) this.chunks.push(event.data);
      });
      this.recorder.addEventListener("stop", () => void this.finishTranscription(), { once: true });
      this.recorder.start(1000);
      this.state = "recording";
      this.activeStartedAt = Date.now();
      this.render();
      this.startTimer();
    } catch (error) {
      this.stopStream();
      this.state = "error";
      this.error = /denied|notallowed|permission/i.test(String(error?.name || error?.message || error))
        ? "麦克风权限被拒绝，请在系统设置中允许 Obsidian 使用麦克风"
        : `无法开始录音：${error instanceof Error ? error.message : String(error)}`;
      this.render();
    }
  }

  pause() {
    if (this.recorder?.state !== "recording") return;
    this.recorder.pause();
    this.durationMs += Date.now() - this.activeStartedAt;
    this.activeStartedAt = 0;
    this.state = "paused";
    this.stopTimer();
    this.render();
  }

  resume() {
    if (this.recorder?.state !== "paused") return;
    this.recorder.resume();
    this.state = "recording";
    this.activeStartedAt = Date.now();
    this.render();
    this.startTimer();
  }

  stop() {
    if (!this.recorder || !["recording", "paused"].includes(this.recorder.state)) return;
    if (this.state === "recording" && this.activeStartedAt) this.durationMs += Date.now() - this.activeStartedAt;
    this.activeStartedAt = 0;
    this.state = "transcribing";
    this.stopTimer();
    this.render();
    this.recorder.stop();
    this.stopStream();
  }

  async finishTranscription() {
    if (this.closed) return;
    try {
      const blob = new Blob(this.chunks, { type: this.mimeType });
      const audio = await blob.arrayBuffer();
      if (!audio.byteLength) throw new Error("没有录到声音");
      const extension = recordingExtension(this.mimeType);
      const result = await this.plugin.transcribeAudio({
        audio,
        fileName: `recording.${extension}`,
        mimeType: this.mimeType,
        language: "zh",
      });
      if (this.closed) return;
      this.audio = audio;
      this.transcript = result.text;
      this.model = result.model;
      this.state = "ready";
      this.render();
    } catch (error) {
      if (this.closed) return;
      this.state = "error";
      this.error = error instanceof Error ? error.message : String(error);
      this.render();
    }
  }

  async save() {
    const transcript = String(this.transcript || "").trim();
    if (!transcript || !this.audio) {
      new Notice("转写内容为空，请重新录音");
      return;
    }
    try {
      await this.service.createVoiceNote({
        transcript,
        audio: this.audio,
        mimeType: this.mimeType,
        durationSeconds: Math.max(1, Math.round(this.durationMs / 1000)),
        model: this.model,
      });
      this.close();
      new Notice("原始录音和 AI 转写已保存到待处理");
      await this.onSaved?.();
    } catch (error) {
      new Notice(`保存失败：${error instanceof Error ? error.message : String(error)}`, 8000);
    }
  }

  onClose() {
    this.closed = true;
    this.stopTimer();
    if (this.recorder && ["recording", "paused"].includes(this.recorder.state)) {
      try { this.recorder.stop(); } catch { /* already stopped */ }
    }
    this.stopStream();
    this.contentEl.empty();
  }
}

class AssetModal extends Modal {
  constructor(app, defaultLibrary, onSubmit) {
    super(app);
    this.defaultLibrary = defaultLibrary;
    this.onSubmit = onSubmit;
  }

  onOpen() {
    const root = this.contentEl;
    root.addClass("wis-modal");
    root.addClass("wis-asset-modal");
    root.createEl("h2", { text: "新建六类资产" });
    root.createEl("p", { text: "先选择真实归属，再写入对应资产库。来源无法确认时请留空并在正文标记待确认。", cls: "wis-modal-note" });
    const select = root.createEl("select", { cls: "wis-modal-input", attr: { "aria-label": "资产库" } });
    LIBRARIES.filter((item) => item.id !== "content").forEach((library) => select.createEl("option", { value: library.id, text: `${library.order} · ${library.name}` }));
    select.value = this.defaultLibrary && this.defaultLibrary !== "all" && this.defaultLibrary !== "content" ? this.defaultLibrary : "product";
    const title = root.createEl("input", { cls: "wis-modal-input", attr: { placeholder: "资产标题" } });
    const source = root.createEl("input", { cls: "wis-modal-input", attr: { placeholder: "来源文件或说明（可稍后补）" } });
    const actions = root.createDiv({ cls: "wis-modal-actions" });
    makeButton(actions, "取消", "x", "is-secondary", () => this.close());
    makeButton(actions, "创建资产", "plus", "is-primary", async () => {
      if (!title.value.trim()) return;
      this.close();
      await this.onSubmit({ libraryId: select.value, title: title.value.trim(), source: source.value.trim() });
    });
    window.setTimeout(() => title.focus(), 50);
  }
}

class ConfirmActionModal extends Modal {
  constructor(app, title, description, actionLabel, onConfirm) {
    super(app);
    Object.assign(this, { title, description, actionLabel, onConfirm });
  }

  onOpen() {
    this.contentEl.addClass("wis-modal");
    this.contentEl.createEl("h2", { text: this.title });
    this.contentEl.createEl("p", { text: this.description, cls: "wis-modal-note" });
    const actions = this.contentEl.createDiv({ cls: "wis-modal-actions" });
    makeButton(actions, "取消", "x", "is-secondary", () => this.close());
    makeButton(actions, this.actionLabel, "arrow-right", "is-primary", async () => {
      this.close();
      await this.onConfirm();
    });
  }
}

function selectableAssistantFiles(app) {
  return app.vault.getMarkdownFiles()
    .filter((file) => file.path.startsWith(`${ROOT}/`)
      && !file.path.startsWith(`${ROOT}/.agents/`)
      && !file.path.startsWith(`${ROOT}/.fde/`)
      && !file.path.startsWith(`${ROOT}/7-系统/`))
    .sort((a, b) => b.stat.mtime - a.stat.mtime);
}

class AssistantNotePickerModal extends Modal {
  constructor(app, selectedPath, onSelect) {
    super(app);
    this.selectedPath = selectedPath || "";
    this.onSelect = onSelect;
  }

  onOpen() {
    const root = this.contentEl;
    root.addClass("wis-modal");
    root.addClass("wis-context-modal");
    root.createEl("h2", { text: "选择一篇笔记" });
    root.createEl("p", { text: "选择本次任务的主要笔记。FDE365 Agent 会优先使用这篇笔记的内容。", cls: "wis-modal-note" });
    const search = root.createEl("input", {
      cls: "wis-modal-input",
      attr: { type: "search", placeholder: "按标题或路径搜索…", "aria-label": "搜索主要笔记" },
    });
    const list = root.createDiv({ cls: "wis-context-file-list" });
    const files = selectableAssistantFiles(this.app);
    const render = () => {
      list.empty();
      const query = search.value.trim().toLowerCase();
      const matches = files.filter((file) => !query || `${file.basename} ${file.path}`.toLowerCase().includes(query)).slice(0, 80);
      if (!matches.length) list.createDiv({ text: "没有匹配的知识库笔记", cls: "wis-empty" });
      matches.forEach((file) => {
        const selected = file.path === this.selectedPath;
        const row = list.createEl("button", { cls: `wis-context-file${selected ? " is-selected" : ""}` });
        makeIcon(row, selected ? "check-circle-2" : "file-text");
        const copy = row.createDiv();
        copy.createEl("strong", { text: file.basename });
        copy.createSpan({ text: file.path });
        row.addEventListener("click", async () => {
          this.close();
          await this.onSelect(file.path);
        });
      });
    };
    search.addEventListener("input", render);
    render();
    const actions = root.createDiv({ cls: "wis-modal-actions" });
    if (this.selectedPath) makeButton(actions, "清除选择", "x", "is-secondary", async () => {
      this.close();
      await this.onSelect("");
    });
    makeButton(actions, "取消", "x", "is-secondary", () => this.close());
    window.setTimeout(() => search.focus(), 50);
  }
}

class AssistantContextModal extends Modal {
  constructor(app, selectedPaths, onSubmit) {
    super(app);
    this.selected = new Set(selectedPaths || []);
    this.onSubmit = onSubmit;
  }

  contextFiles() {
    return selectableAssistantFiles(this.app);
  }

  onOpen() {
    const root = this.contentEl;
    root.addClass("wis-modal");
    root.addClass("wis-context-modal");
    root.createEl("h2", { text: "添加知识库上下文" });
    root.createEl("p", { text: "只会把你选中的 Markdown 笔记片段交给当前 Provider。", cls: "wis-modal-note" });
    const search = root.createEl("input", {
      cls: "wis-modal-input",
      attr: { type: "search", placeholder: "搜索六类资产…", "aria-label": "搜索上下文文件" },
    });
    const list = root.createDiv({ cls: "wis-context-file-list" });
    const files = this.contextFiles();
    const render = () => {
      list.empty();
      const query = search.value.trim().toLowerCase();
      const matches = files.filter((file) => !query || `${file.basename} ${file.path}`.toLowerCase().includes(query)).slice(0, 80);
      if (!matches.length) list.createDiv({ text: "没有匹配的知识库笔记", cls: "wis-empty" });
      matches.forEach((file) => {
        const selected = this.selected.has(file.path);
        const row = list.createEl("button", { cls: `wis-context-file${selected ? " is-selected" : ""}` });
        makeIcon(row, selected ? "check-circle-2" : "file-text");
        const copy = row.createDiv();
        copy.createEl("strong", { text: file.basename });
        copy.createSpan({ text: file.path });
        row.addEventListener("click", () => {
          if (selected) this.selected.delete(file.path);
          else this.selected.add(file.path);
          render();
        });
      });
    };
    search.addEventListener("input", render);
    render();
    const actions = root.createDiv({ cls: "wis-modal-actions" });
    makeButton(actions, "清空", "x", "is-secondary", () => {
      this.selected.clear();
      render();
    });
    makeButton(actions, "添加所选", "paperclip", "is-primary", async () => {
      this.close();
      await this.onSubmit([...this.selected]);
    });
    window.setTimeout(() => search.focus(), 50);
  }
}

class FDEWorkspaceService {
  constructor(plugin) {
    this.plugin = plugin;
    this.app = plugin.app;
    this.config = this.defaultConfig();
    this.legacyInbox = {
      pending: ["0-录音处理/待处理录音"],
      processed: ["0-录音处理/已处理"],
    };
    this.inboxProcessing = new Map();
  }

  defaultConfig() {
    return {
      libraries: Object.fromEntries(LIBRARIES.map((item) => [item.key, item.path])),
      inbox: { pending: "0-待处理材料/待处理", processed: "0-待处理材料/已处理记录" },
      runtime: { state: ".fde/state", indexes: ".fde/indexes", logs: ".fde/logs", versions: ".fde/versions", reports: ".fde/reports", quarantine: ".fde/quarantine" },
      policy: { preserve_raw_files: true, require_source_on_write: true, allow_cross_project_read: false, confirm_before_delete: true },
    };
  }

  async reloadConfig() {
    const configPath = `${ROOT}/.fde/config.yaml`;
    try {
      if (!await this.app.vault.adapter.exists(configPath)) return this.config;
      const raw = await this.app.vault.adapter.read(configPath);
      const parsed = parseConfigYaml(raw);
      const defaults = this.defaultConfig();
      const parsedInbox = parsed.inbox || {};
      const usesLegacyRecordingConfig = Boolean(parsedInbox.recordings && !parsedInbox.pending);
      this.legacyInbox = {
        pending: [...new Set(["0-录音处理/待处理录音", usesLegacyRecordingConfig ? parsedInbox.recordings : ""].filter(Boolean))],
        processed: [...new Set(["0-录音处理/已处理", usesLegacyRecordingConfig ? parsedInbox.processed : ""].filter(Boolean))],
      };
      this.config = {
        libraries: { ...defaults.libraries, ...(parsed.libraries || {}) },
        inbox: {
          pending: parsedInbox.pending || defaults.inbox.pending,
          processed: usesLegacyRecordingConfig ? defaults.inbox.processed : parsedInbox.processed || defaults.inbox.processed,
        },
        runtime: { ...defaults.runtime, ...(parsed.runtime || {}) },
        policy: { ...defaults.policy, ...(parsed.policy || {}) },
      };
    } catch (error) {
      console.error("FDE365 Knowledge OS: failed to read .fde/config.yaml", error);
      this.config = this.defaultConfig();
    }
    return this.config;
  }

  path(relative = "") {
    return normalizePath([ROOT, relative].filter(Boolean).join("/"));
  }

  libraryPath(library) {
    const item = typeof library === "string" ? LIBRARIES.find((candidate) => candidate.id === library || candidate.key === library) : library;
    return this.path(this.config.libraries[item?.key] || item?.path || "");
  }

  inboxPath(kind = "pending") {
    return this.path(this.config.inbox[kind]);
  }

  inboxRoots(kind = "pending") {
    return [...new Set([this.inboxPath(kind), ...(this.legacyInbox[kind] || []).map((path) => this.path(path))])];
  }

  contentPath() {
    return this.libraryPath("content");
  }

  skillPath(skillId) {
    return this.path(`.agents/skills/${skillId}/SKILL.md`);
  }

  resolvedConfigContext() {
    return {
      path: this.path(".fde/config.yaml"),
      title: "FDE365 已解析配置",
      excerpt: [
        "以下内容由插件在本地读取并解析，不需要模型自行访问 Vault 文件系统。",
        "",
        "六类资产库：",
        ...LIBRARIES.map((library) => `- ${library.name}: ${this.libraryPath(library)}`),
        "",
        `待处理材料: ${this.inboxPath("pending")}`,
        `已处理记录: ${this.inboxPath("processed")}`,
        `运行状态: ${this.path(this.config.runtime.state)}`,
        "分类规则: 录音、聊天、图片和文档只是材料形式；业务归属必须在六类资产中判断，一份材料可有多个建议去向。",
        "",
        "安全策略：",
        `- 保留原始文件: ${this.config.policy.preserve_raw_files !== false ? "是" : "否"}`,
        `- 写入需要来源: ${this.config.policy.require_source_on_write !== false ? "是" : "否"}`,
        `- 允许跨项目读取: ${this.config.policy.allow_cross_project_read === true ? "是" : "否"}`,
        `- 删除前确认: ${this.config.policy.confirm_before_delete !== false ? "是" : "否"}`,
      ].join("\n"),
    };
  }

  skillCatalogContext() {
    return {
      path: this.path(".agents/skills"),
      title: "FDE Skills 能力目录",
      excerpt: SKILLS.map((skill) => `- /${skill.id} · ${skill.name}: ${skill.description} 交付：${skill.output}`).join("\n"),
    };
  }

  matchingSkillIds(prompt) {
    const text = String(prompt || "");
    const lower = text.toLowerCase();
    const matches = SKILLS.filter((skill) => lower.includes(skill.id)).map((skill) => skill.id);
    if (/(?:一键.*(?:出内容|成稿|写稿)|(?:出内容|成稿|写稿|写内容).*(?:skill|技能|工作流)|根据知识库写)/i.test(text)) matches.push("fde-write");
    return [...new Set(matches)];
  }

  async readSkillContract(skillId) {
    const path = this.skillPath(skillId);
    if (!await this.app.vault.adapter.exists(path)) return null;
    const raw = await this.app.vault.adapter.read(path);
    return {
      path,
      title: `/${skillId} 本地 Skill 合同`,
      excerpt: String(raw || "").slice(0, 16000),
    };
  }

  async assistantRuntimeContext(prompt) {
    const text = String(prompt || "");
    const needsSkills = /(?:skill|技能|工作流|一键|出内容|成稿|写稿|写内容|\/fde-|fde-)/i.test(text);
    if (!needsSkills) return [];
    await this.reloadConfig();
    const context = [this.resolvedConfigContext()];
    for (const skillId of this.matchingSkillIds(text)) {
      const contract = await this.readSkillContract(skillId);
      if (contract) context.push(contract);
    }
    context.push(this.skillCatalogContext());
    return context;
  }

  async skillRuntimeContext(skill) {
    await this.reloadConfig();
    const context = [this.resolvedConfigContext()];
    const contract = await this.readSkillContract(skill.id);
    if (contract) context.push(contract);
    context.push(this.skillCatalogContext());
    return context;
  }

  isIgnoredAsset(file) {
    return !file.path.startsWith(`${ROOT}/`)
      || file.path.startsWith(`${ROOT}/.agents/`)
      || file.path.startsWith(`${ROOT}/.fde/`)
      || file.path.startsWith(`${ROOT}/7-系统/`)
      || file.basename === "README"
      || file.path === `${ROOT}/0-使用说明.md`;
  }

  libraryForFile(file) {
    return LIBRARIES.find((library) => {
      const root = this.libraryPath(library);
      return file.path === root || file.path.startsWith(`${root}/`);
    }) || null;
  }

  stageForFile(file) {
    const root = this.contentPath();
    return CONTENT_STAGES.find((stage) => file.path.startsWith(`${root}/${stage.id}/`)) || null;
  }

  assetFiles() {
    return this.app.vault.getMarkdownFiles().filter((file) => !this.isIgnoredAsset(file) && Boolean(this.libraryForFile(file)));
  }

  isCompletedInboxFile(file) {
    const status = String(frontmatterOf(this.app, file).status || "").trim().toLowerCase();
    return ["processed", "completed", "closed", "done", "已完成", "已处理", "结案"].includes(status);
  }

  pendingFiles({ includeCompleted = false } = {}) {
    const roots = this.inboxRoots("pending");
    return this.app.vault.getMarkdownFiles().filter((file) => roots.some((root) => file.path.startsWith(`${root}/`))
      && file.basename !== "README"
      && !file.path.includes("/原始文件/")
      && !file.path.includes("/附件/")
      && (includeCompleted || !this.isCompletedInboxFile(file)));
  }

  processedFiles() {
    const roots = this.inboxRoots("processed");
    return this.app.vault.getMarkdownFiles().filter((file) => roots.some((root) => file.path.startsWith(`${root}/`)) && file.basename !== "README");
  }

  async completeInboxFiles(files, { markProcessed = true } = {}) {
    const pendingRoots = this.inboxRoots("pending");
    const candidates = [...new Map((files || [])
      .filter((file) => file instanceof TFile && pendingRoots.some((root) => file.path.startsWith(`${root}/`)))
      .map((file) => [file.path, file])).values()];
    const movedPaths = new Map();
    if (!candidates.length) return movedPaths;
    const targetRoot = this.inboxPath("processed");
    await ensureFolder(this.app, targetRoot);
    for (const file of candidates) {
      const oldPath = file.path;
      if (markProcessed) {
        const processedAt = new Date().toISOString();
        await this.app.vault.process(file, (content) => {
          let updated = String(content || "");
          if (/^status:\s*.*$/mi.test(updated)) updated = updated.replace(/^status:\s*.*$/mi, "status: processed");
          else if (/^---\s*\n/.test(updated)) updated = updated.replace(/^---\s*\n/, `---\nstatus: processed\n`);
          else updated = `---\nstatus: processed\nprocessed_at: ${processedAt}\n---\n\n${updated}`;
          if (/^processed_at:\s*.*$/mi.test(updated)) updated = updated.replace(/^processed_at:\s*.*$/mi, `processed_at: ${processedAt}`);
          else if (/^---\s*\n/.test(updated)) updated = updated.replace(/^---\s*\n/, `---\nprocessed_at: ${processedAt}\n`);
          return updated;
        });
      }
      const targetPath = await uniquePath(this.app, `${targetRoot}/${file.name}`);
      const state = this.inboxProcessing.get(oldPath);
      await this.app.fileManager.renameFile(file, targetPath);
      movedPaths.set(oldPath, targetPath);
      if (state) {
        this.inboxProcessing.delete(oldPath);
        this.inboxProcessing.set(targetPath, state);
      }
    }
    return movedPaths;
  }

  async reconcileCompletedInboxFiles() {
    const completed = this.pendingFiles({ includeCompleted: true }).filter((file) => this.isCompletedInboxFile(file));
    if (!completed.length) return new Map();
    return this.completeInboxFiles(completed, { markProcessed: false });
  }

  async noteInfo(file) {
    const content = await this.app.vault.cachedRead(file);
    const frontmatter = frontmatterOf(this.app, file);
    const source = sourceFromContent(content, frontmatter);
    const unknown = unknownFromContent(content);
    const library = this.libraryForFile(file);
    const stage = this.stageForFile(file);
    const stageValue = String(frontmatter.stage || frontmatter.status || content.match(/^\s*-\s*当前阶段\s*[：:]\s*(.+?)\s*$/mi)?.[1] || "").trim();
    const stageConflict = Boolean(stage && stageValue && stageValue !== stage.id);
    return {
      file,
      content,
      frontmatter,
      library,
      stage,
      source,
      unknown,
      stageValue,
      stageConflict,
      stale: Date.now() - file.stat.mtime > 90 * 86400000,
      excerpt: content.replace(/^---[\s\S]*?---\s*/m, "").replace(/^#{1,6}\s+/gm, "").replace(/\[\[|\]\]/g, "").replace(/\s+/g, " ").trim().slice(0, 150),
    };
  }

  async snapshot() {
    await this.reloadConfig();
    await this.reconcileCompletedInboxFiles();
    const files = this.assetFiles();
    const notes = await Promise.all(files.map((file) => this.noteInfo(file)));
    const libraries = LIBRARIES.map((library) => {
      const items = notes.filter((note) => note.library?.id === library.id);
      const sourceCount = items.filter((note) => note.source).length;
      const unknown = items.reduce((sum, note) => sum + note.unknown, 0);
      const stale = items.filter((note) => note.stale).length;
      const score = items.length
        ? Math.max(0, Math.round(100 - (1 - sourceCount / items.length) * 45 - Math.min(25, unknown * 4) - stale / items.length * 20))
        : 0;
      return {
        ...library,
        path: this.libraryPath(library),
        items,
        count: items.length,
        sourceCount,
        sourceCoverage: items.length ? sourceCount / items.length : 0,
        unknown,
        stale,
        score,
        updated: Math.max(0, ...items.map((item) => item.file.stat.mtime)),
      };
    });
    const contentItems = notes.filter((note) => note.library?.id === "content");
    const stages = CONTENT_STAGES.map((stage) => ({ ...stage, items: contentItems.filter((item) => item.stage?.id === stage.id) }));
    const pending = this.pendingFiles();
    const processed = this.processedFiles();
    const totalSources = notes.filter((note) => note.source).length;
    const unknown = notes.reduce((sum, note) => sum + note.unknown, 0);
    const stale = notes.filter((note) => note.stale).length;
    const recent = [...notes].sort((a, b) => b.file.stat.mtime - a.file.stat.mtime).slice(0, 8);
    const missingPaths = [];
    for (const library of LIBRARIES) {
      if (!await this.app.vault.adapter.exists(this.libraryPath(library))) missingPaths.push(this.libraryPath(library));
    }
    const installedSkills = [];
    for (const skill of SKILLS) {
      if (await this.app.vault.adapter.exists(this.skillPath(skill.id))) installedSkills.push(skill.id);
    }
    const relations = this.buildRelations(notes);
    return {
      notes,
      libraries,
      stages,
      pending,
      processed,
      total: notes.length,
      sourceCoverage: notes.length ? totalSources / notes.length : 0,
      unknown,
      stale,
      recent,
      missingPaths,
      installedSkills,
      stageConflicts: notes.filter((note) => note.stageConflict),
      relations,
    };
  }

  buildRelations(notes) {
    const byPath = new Map(notes.map((note) => [note.file.path, note]));
    const matrix = Object.fromEntries(LIBRARIES.map((source) => [source.id, Object.fromEntries(LIBRARIES.map((target) => [target.id, 0]))]));
    const edges = [];
    const resolved = this.app.metadataCache.resolvedLinks || {};
    Object.entries(resolved).forEach(([sourcePath, targets]) => {
      const source = byPath.get(sourcePath);
      if (!source?.library) return;
      Object.keys(targets || {}).forEach((targetPath) => {
        const target = byPath.get(targetPath);
        if (!target?.library) return;
        matrix[source.library.id][target.library.id] += 1;
        edges.push({ source, target });
      });
    });
    return { matrix, edges };
  }

  async openFile(fileOrPath) {
    const file = fileOrPath instanceof TFile ? fileOrPath : this.app.vault.getAbstractFileByPath(fileOrPath);
    if (file instanceof TFile) await this.app.workspace.getLeaf("tab").openFile(file);
  }

  async openLibrary(libraryId) {
    await this.plugin.activateKnowledge();
    const view = this.plugin.getKnowledgeCenter();
    if (view) {
      view.selectedLibrary = libraryId;
      await view.refresh();
    }
  }

  async createAsset({ libraryId, title, source }) {
    const library = LIBRARIES.find((item) => item.id === libraryId) || LIBRARIES[1];
    const root = this.libraryPath(library);
    await ensureFolder(this.app, root);
    const path = await uniquePath(this.app, `${root}/${safeName(title)}.md`);
    const date = new Date().toISOString().slice(0, 10);
    const body = this.assetTemplate(library, title, source, date);
    const file = await this.app.vault.create(path, body);
    await this.openFile(file);
    new Notice(`已创建到 ${library.name}：${file.basename}`);
    return file;
  }

  assetTemplate(library, title, source, date) {
    const head = `---\ntype: ${library.id}-asset\nsource: ${yamlValue(source)}\ncreated_at: ${date}\nupdated_at: ${date}\nstatus: draft\n---\n\n# ${title}\n\n- 信息来源：${source || ""}\n- 更新时间：${date}\n`;
    const bodies = {
      owner: "\n## 已确认事实\n\n## 我的判断\n\n## 我的表达\n\n## 工作边界\n\n## 待补信息\n",
      product: "\n## 给谁\n\n## 解决什么问题\n\n## 交付内容\n\n## 价格和付款条件\n\n## 已有证据\n\n## 常见异议\n\n## 不能承诺的内容\n\n## 待确认\n",
      customer: "\n- 接触阶段：\n- 是否允许公开：待确认\n\n## 客户原话\n\n## 已确认事实\n\n## 当前推断\n\n## 结果\n\n## 待确认\n",
      case: "\n- 发生日期：\n- 是否允许公开：待确认\n\n## 当时发生了什么\n\n## 原话或数据\n\n## 采取了什么动作\n\n## 结果\n\n## 可以支持哪些判断\n\n## 仍不确定的内容\n",
      method: "\n- 使用场景：\n\n## 要解决的问题\n\n## 前置条件\n\n## 步骤\n\n## 完成信号\n\n## 失败信号\n\n## 实际案例\n\n## 不适用情况\n\n## 待验证\n",
    };
    return `${head}${bodies[library.id] || bodies.case}`;
  }

  async createQuickNote(title) {
    const root = this.inboxPath("pending");
    await ensureFolder(this.app, root);
    const date = new Date();
    const stamp = date.toISOString().replace(/[-:TZ]/g, "").slice(0, 12);
    const path = await uniquePath(this.app, `${root}/${stamp}-${safeName(title)}.md`);
    const file = await this.app.vault.create(path, `---\ntype: inbox\nstatus: pending\nsource: quick-note\ncreated_at: ${date.toISOString()}\nallowed_to_write: pending\n---\n\n# ${title}\n\n## 原始内容\n\n\n## 来源和参与人\n\n\n## 待确认\n\n- 是否允许写入正式资产库\n`);
    await this.openFile(file);
    new Notice("已保存到待处理；原始内容不会被自动覆盖");
    return file;
  }

  async createVoiceNote({ transcript, audio, mimeType, durationSeconds, model }) {
    const root = this.inboxPath("pending");
    const originalRoot = `${root}/原始文件`;
    await ensureFolder(this.app, root);
    await ensureFolder(this.app, originalRoot);
    const date = new Date();
    const stamp = date.toISOString().replace(/[-:TZ]/g, "").slice(0, 12);
    const extension = recordingExtension(mimeType);
    const audioPath = await uniquePath(this.app, `${originalRoot}/${stamp}-voice.${extension}`);
    const audioFile = await this.app.vault.createBinary(audioPath, audio);
    const title = safeName(String(transcript || "").replace(/\s+/g, " ").slice(0, 28)) || "AI语音记录";
    const notePath = await uniquePath(this.app, `${root}/${stamp}-${title}.md`);
    const content = `---\ntype: inbox\nstatus: pending\nsource: ai-voice-transcription\noriginal_file: ${yamlValue(audioFile.path)}\nfile_type: ${yamlValue(mimeType || "audio/webm")}\nduration_seconds: ${Number(durationSeconds) || 0}\ntranscription_model: ${yamlValue(model || "whisper-1")}\ncreated_at: ${date.toISOString()}\nallowed_to_write: pending\n---\n\n# ${title}\n\n## 原始录音\n\n![[${audioFile.path}]]\n\n## AI 转写\n\n${String(transcript || "").trim()}\n\n## 处理状态\n\n- 原始录音已保留\n- AI 转写已生成\n- 尚未运行 /fde-ingest\n- 是否处理：等待用户决定\n\n## 待确认\n\n- 人名、数字和专有名词是否识别正确\n- 是否允许写入正式资产库\n`;
    const note = await this.app.vault.create(notePath, content);
    return { note, audio: audioFile };
  }

  async importInboxFiles(fileList) {
    const files = Array.from(fileList || []).filter((file) => file && typeof file.name === "string" && typeof file.arrayBuffer === "function");
    if (!files.length) return [];
    const root = this.inboxPath("pending");
    const attachmentRoot = `${root}/原始文件`;
    await ensureFolder(this.app, root);
    await ensureFolder(this.app, attachmentRoot);
    const imported = [];
    for (const sourceFile of files) {
      const originalName = safeName(sourceFile.name || "未命名文件");
      const attachmentPath = await uniquePath(this.app, `${attachmentRoot}/${originalName}`);
      const bytes = await sourceFile.arrayBuffer();
      const attachment = await this.app.vault.createBinary(attachmentPath, bytes);
      const title = safeName(originalName.replace(/\.[^.]+$/, ""));
      const createdAt = new Date().toISOString();
      const notePath = await uniquePath(this.app, `${root}/${title}.md`);
      const canEmbed = /^(?:image|audio|video)\//i.test(String(sourceFile.type || ""));
      const reference = canEmbed ? `![[${attachment.path}]]` : `[[${attachment.path}|打开原始文件]]`;
      const content = `---\ntype: inbox\nstatus: pending\nsource: dragged-file\noriginal_file: ${yamlValue(attachment.path)}\noriginal_name: ${yamlValue(sourceFile.name)}\nfile_type: ${yamlValue(sourceFile.type || "unknown")}\nfile_size: ${Number(sourceFile.size) || 0}\ncreated_at: ${createdAt}\nallowed_to_write: pending\n---\n\n# ${title}\n\n## 原始文件\n\n${reference}\n\n## 处理状态\n\n- 已收录到待处理\n- 尚未运行 /fde-ingest\n- 是否处理：等待用户决定\n\n## 待确认\n\n- 是否允许生成分流预览\n- 是否允许写入正式资产库\n`;
      const note = await this.app.vault.create(notePath, content);
      imported.push({ note, attachment });
    }
    return imported;
  }

  async createContent(title, stageId = "选题") {
    const stage = CONTENT_STAGES.find((item) => item.id === stageId) || CONTENT_STAGES[0];
    const root = `${this.contentPath()}/${stage.id}`;
    await ensureFolder(this.app, root);
    const date = new Date().toISOString().slice(0, 10);
    const path = await uniquePath(this.app, `${root}/${date}-${safeName(title)}.md`);
    const file = await this.app.vault.create(path, `---\ntype: content\nstage: ${stage.id}\nsource: ""\ncreated_at: ${date}\nupdated_at: ${date}\n---\n\n# ${title}\n\n- 目标读者：\n- 目标平台：\n- 当前阶段：${stage.id}\n- 来源文件：\n- 创建日期：${date}\n- 最后修改：${date}\n\n## 正文或提纲\n\n\n## 未核实项\n\n\n## 发布记录\n`);
    await this.openFile(file);
    new Notice(`已创建到内容生产 / ${stage.id}`);
    return file;
  }

  async advanceContent(note) {
    const current = note.stage;
    const index = CONTENT_STAGES.findIndex((stage) => stage.id === current?.id);
    if (index < 0 || index >= CONTENT_STAGES.length - 1) return;
    const next = CONTENT_STAGES[index + 1];
    new ConfirmActionModal(
      this.app,
      `推进到「${next.id}」？`,
      `将移动“${note.file.basename}”，同时更新文件中的当前阶段。不会覆盖目标目录的同名文件。`,
      `推进到 ${next.id}`,
      async () => {
        const targetRoot = `${this.contentPath()}/${next.id}`;
        await ensureFolder(this.app, targetRoot);
        const targetPath = await uniquePath(this.app, `${targetRoot}/${note.file.name}`);
        await this.app.vault.process(note.file, (content) => {
          let updated = content.replace(/^(stage:\s*).+$/mi, `$1${next.id}`);
          if (/^-\s*当前阶段\s*[：:]/mi.test(updated)) updated = updated.replace(/^(\s*-\s*当前阶段\s*[：:]\s*).+$/mi, `$1${next.id}`);
          return updated;
        });
        await this.app.fileManager.renameFile(note.file, targetPath);
        new Notice(`已推进到 ${next.id}`);
        this.plugin.refreshDashboard();
      },
    ).open();
  }

  skillSystemPrompt(skill) {
    return `你正在执行项目本地 Skill /${skill.id}（${skill.name}）。\n\n${BASE_SKILL_RULES}\n${executionModeRule(this.plugin)}\n\n本 Skill 的职责：${skill.description}\n要求交付：${skill.output}。\n插件已在请求前读取并附加解析后的 .fde/config.yaml、FDE Skills 能力目录和 /${skill.id} 的本地 SKILL.md 合同。直接使用这些“本地运行上下文”，不要声称自己无法访问或尚未读取这些文件。`;
  }

  inboxProcessingState(fileOrPath) {
    const path = typeof fileOrPath === "string" ? fileOrPath : fileOrPath?.path;
    return this.inboxProcessing.get(path) || { status: "idle", message: "等待处理" };
  }

  setInboxProcessing(files, status, message, details = {}) {
    files.forEach((file) => {
      if (!file?.path) return;
      const previous = this.inboxProcessing.get(file.path) || {};
      this.inboxProcessing.set(file.path, { ...previous, status, message, ...details, updatedAt: Date.now() });
    });
    this.plugin.refreshDashboard?.();
  }

  async processInboxFiles(files) {
    const selected = [...new Map((files || []).filter((file) => file?.path).map((file) => [file.path, file])).values()]
      .filter((file) => this.inboxProcessingState(file).status !== "running");
    if (!selected.length) return { status: "empty", task: null };

    const previousStates = selected.map((file) => this.inboxProcessingState(file));
    const conversationIds = [...new Set(previousStates.map((state) => state.conversationId).filter(Boolean))];
    const conversationId = conversationIds.length === 1 ? conversationIds[0] : "";
    const previousConversation = conversationId
      ? previousStates.find((state) => state.conversationId === conversationId && Array.isArray(state.messages))
      : null;
    const messages = previousConversation?.messages || [];
    const sourcePaths = selected.map((file) => file.path);
    const displayPrompt = `处理待处理材料：${selected.map((file) => file.basename).join("、")}`;
    const fileList = selected.map((file) => `- ${file.path}`).join("\n");
    const agentPrompt = `用户已明确选择以下 ${selected.length} 份原始材料进行处理：\n${fileList}\n\n请先生成分流预览，保留原文，不要在未经确认时写入正式资产库。先单独标记录音、聊天、图片或文档等“材料形式”，再按证据建议一个或多个六类资产去向；归属不确定的内容留在待确认。`;
    this.setInboxProcessing(selected, "running", `正在用 /fde-ingest 处理 ${selected.length} 份材料`, {
      conversationId,
      sourcePaths,
      messages,
    });
    try {
      const task = await this.runSkill(
        "fde-ingest",
        agentPrompt,
        selected,
        { includeActive: false, sessionId: conversationId },
      );
      const succeeded = task && ["waiting-review", "success", "completed"].includes(task.status);
      if (succeeded) {
        const latest = this.plugin.lastAgentResult;
        const isCurrentResult = latest?.task?.taskId === task.taskId;
        const outputPath = isCurrentResult ? latest.outputFile?.path || "" : "";
        const resultContent = isCurrentResult ? String(latest.result?.content || "").trim() : "";
        const preview = isCurrentResult
          ? resultContent.replace(/\s+/g, " ").slice(0, 160)
          : "";
        if (isCurrentResult) {
          messages.push(
            { role: "user", content: displayPrompt },
            {
              role: "assistant",
              content: resultContent || "分流预览已生成。请确认下一步要写入、修改，还是暂不处理。",
              provider: latest.result?.provider || "FDE365 Agent",
              model: latest.result?.model || "",
            },
          );
        }
        this.setInboxProcessing(selected, "success", "处理完成 · 可在右侧对话继续", {
          outputPath,
          preview,
          resultContent,
          taskId: task.taskId,
          conversationId: isCurrentResult ? latest.result?.conversationId || conversationId : conversationId,
          provider: isCurrentResult ? latest.result?.provider || "FDE365 Agent" : "FDE365 Agent",
          model: isCurrentResult ? latest.result?.model || "" : "",
          sourcePaths,
          messages,
        });
        return { status: "success", task, outputPath };
      }
      const failure = task?.error || task?.message || (task ? `任务状态：${task.status || "unknown"}` : "Agent 未启动，请检查本地 Codex 或 Token 配置");
      this.setInboxProcessing(selected, "failed", `处理失败 · ${failure}`);
      return { status: "failed", task };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.setInboxProcessing(selected, "failed", `处理失败 · ${message}`);
      return { status: "failed", task: null, error };
    }
  }

  async runSkill(skillId, prompt, sourceFiles = [], options = {}) {
    const skill = SKILLS.find((item) => item.id === skillId);
    if (!skill) throw new Error(`未知 Skill：${skillId}`);
    const active = this.app.workspace.getActiveFile();
    const sources = [...sourceFiles];
    if (options.includeActive !== false && active instanceof TFile && !sources.some((item) => item.path === active.path)) sources.push(active);
    const localContext = await this.skillRuntimeContext(skill);
    return this.plugin.executeAgent({
      id: skill.id,
      name: `/${skill.id}`,
      description: skill.description,
      output: skill.output,
      systemPrompt: this.skillSystemPrompt(skill),
      localContext,
    }, prompt || skill.description, sources, { sessionId: options.sessionId || "" });
  }
}

class FDEBaseView extends ItemView {
  constructor(leaf, plugin, pageKey) {
    super(leaf);
    this.plugin = plugin;
    this.app = plugin.app;
    this.service = plugin.fdeWorkspace;
    this.pageKey = pageKey;
    this.assistantSession = plugin.fdeAssistantSession || (plugin.fdeAssistantSession = {
      messages: [],
      loading: false,
      requestId: null,
      mode: "chat",
      draft: "",
      primaryPath: "",
      sourcePaths: [],
      sessionId: "",
      activity: [],
    });
    this.renderToken = 0;
  }

  get assistantMessages() { return this.assistantSession.messages; }
  set assistantMessages(value) { this.assistantSession.messages = value; }
  get assistantLoading() { return this.assistantSession.loading; }
  set assistantLoading(value) { this.assistantSession.loading = value; }
  get assistantRequestId() { return this.assistantSession.requestId; }
  set assistantRequestId(value) { this.assistantSession.requestId = value; }
  get assistantMode() { return this.assistantSession.mode; }
  set assistantMode(value) { this.assistantSession.mode = value; }
  get assistantDraft() { return this.assistantSession.draft; }
  set assistantDraft(value) { this.assistantSession.draft = value; }
  get assistantPrimaryPath() { return this.assistantSession.primaryPath; }
  set assistantPrimaryPath(value) { this.assistantSession.primaryPath = value; }
  get assistantSourcePaths() { return this.assistantSession.sourcePaths; }
  set assistantSourcePaths(value) { this.assistantSession.sourcePaths = value; }
  get assistantSessionId() { return this.assistantSession.sessionId || ""; }
  set assistantSessionId(value) { this.assistantSession.sessionId = value || ""; }
  get assistantActivity() { return this.assistantSession.activity || []; }
  set assistantActivity(value) { this.assistantSession.activity = Array.isArray(value) ? value : []; }

  async prefillAssistantCommand(skillId) {
    const command = `/${String(skillId || "").replace(/^\//, "")}`;
    const current = String(this.assistantDraft || "").trim();
    const remainder = current.replace(/^\/fde-[a-z0-9-]+\s*/i, "").trim();
    this.assistantMode = "chat";
    this.assistantDraft = `${command}${remainder ? ` ${remainder}` : " "}`;
    await this.render();
    window.setTimeout(() => {
      const input = this.contentEl.querySelector(".wis-composer textarea");
      if (!input) return;
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }, 0);
  }

  getViewType() { return VIEW_TYPES[this.pageKey]; }
  getDisplayText() { return `${NAV_ITEMS.find((item) => item.key === this.pageKey)?.label || "FDE365"} · FDE365`; }
  getIcon() { return NAV_ITEMS.find((item) => item.key === this.pageKey)?.icon || "orbit"; }

  async onOpen() {
    this.contentEl.addClass("wis-view-content");
    await this.render();
  }

  async onClose() {
    this.contentEl.removeClass("wis-view-content");
  }

  async refresh() { return this.render(); }

  async render() {
    const token = ++this.renderToken;
    const data = await this.service.snapshot();
    if (token !== this.renderToken) return;
    this.contentEl.empty();
    const app = this.contentEl.createDiv({ cls: `wis-fde-app is-${this.plugin.settings.colorTheme === "dark" ? "dark" : "light"}` });
    const assistantWidth = Math.max(280, Math.min(560, Number(this.plugin.settings.ai.assistant.panelWidth) || 336));
    app.style.setProperty("--wis-assistant-width", `${assistantWidth}px`);
    this.renderSidebar(app, data);
    const workspace = app.createDiv({ cls: "wis-workspace" });
    this.renderTopbar(workspace, data);
    const main = workspace.createEl("main", { cls: "wis-main" });
    await this.renderMain(main, data);
    this.renderStatus(workspace, data);
    this.renderAssistant(app, data);
  }

  renderSidebar(app, data) {
    const sidebar = app.createEl("aside", { cls: "wis-sidebar" });
    const brand = sidebar.createDiv({ cls: "wis-brand" });
    const logo = brand.createEl("img", { attr: { src: this.plugin.logoResource(), alt: "FDE365" } });
    logo.addClass("wis-brand-logo");
    sidebar.createDiv({ text: "FDE365", cls: "wis-nav-label" });
    const nav = sidebar.createEl("nav", { cls: "wis-nav", attr: { "aria-label": "主导航" } });
    NAV_ITEMS.forEach((item) => {
      const button = nav.createEl("button", { cls: `wis-nav-item${item.key === this.pageKey ? " is-active" : ""}` });
      makeIcon(button, item.icon);
      const text = button.createDiv();
      text.createEl("strong", { text: item.label });
      text.createSpan({ text: item.note });
      if (item.key === "inbox" && data.pending.length) button.createSpan({ text: String(data.pending.length), cls: "wis-nav-count" });
      button.addEventListener("click", () => this.plugin.router.navigate(item.key));
    });
    const pulse = sidebar.createDiv({ cls: "wis-library-pulse" });
    const pulseHead = pulse.createDiv({ cls: "wis-pulse-head" });
    pulseHead.createEl("strong", { text: "六库信号" });
    pulseHead.createSpan({ text: `${data.total} 项资产` });
    data.libraries.forEach((library) => {
      const row = pulse.createEl("button", { cls: "wis-pulse-row" });
      row.createSpan({ text: library.order, cls: `wis-library-code is-${library.color}` });
      row.createSpan({ text: library.short, cls: "wis-pulse-label" });
      const meter = row.createDiv({ cls: "wis-mini-meter" });
      meter.createDiv({ cls: `wis-mini-meter-fill is-${library.color}`, attr: { style: `width:${library.score}%` } });
      row.createSpan({ text: String(library.count), cls: "wis-pulse-count" });
      row.addEventListener("click", () => this.service.openLibrary(library.id));
    });
    const footer = sidebar.createDiv({ cls: "wis-sidebar-footer" });
    footer.createSpan({ text: "本地优先" });
    footer.createSpan({ text: "·" });
    footer.createSpan({ text: "来源优先" });
  }

  renderTopbar(workspace, data) {
    const topbar = workspace.createDiv({ cls: "wis-topbar" });
    const left = topbar.createDiv({ cls: "wis-topbar-title" });
    left.createSpan({ text: "FDE365知识库", cls: "wis-eyebrow" });
    left.createEl("strong", { text: NAV_ITEMS.find((item) => item.key === this.pageKey)?.label || "总览" });
    const actions = topbar.createDiv({ cls: "wis-topbar-actions" });
    const search = actions.createEl("input", { attr: { type: "search", placeholder: "搜索六类资产…", "aria-label": "搜索六类资产" }, cls: "wis-global-search" });
    search.addEventListener("keydown", async (event) => {
      if (event.key !== "Enter" || !search.value.trim()) return;
      const query = search.value.trim().toLowerCase();
      const match = data.notes.find((note) => `${note.file.basename} ${note.content}`.toLowerCase().includes(query));
      if (match) await this.service.openFile(match.file);
      else new Notice("六类资产中没有找到匹配内容");
    });
    makeButton(actions, "新建资产", "plus", "is-secondary", () => new AssetModal(this.app, "product", async (value) => this.service.createAsset(value)).open());
    makeButton(actions, "设置", "settings", "is-secondary is-settings", () => this.plugin.openSettings());
  }

  renderStatus(workspace, data) {
    const status = workspace.createDiv({ cls: "wis-statusbar" });
    status.createSpan({ text: `Vault: ${this.app.vault.getName()}` });
    status.createSpan({ text: `${data.total} 项正式资产` });
    status.createSpan({ text: `来源覆盖 ${percent(data.sourceCoverage)}` });
    status.createSpan({ text: `${data.installedSkills.length}/${SKILLS.length} Skills` });
    status.createSpan({ text: "create-only · 不覆盖原始材料" });
  }

  pageSkills() {
    return ["fde-start", "fde-library", "fde-write"];
  }

  assistantContextFiles() {
    return [...new Set([this.assistantPrimaryPath, ...this.assistantSourcePaths].filter(Boolean))]
      .map((path) => this.app.vault.getAbstractFileByPath(path))
      .filter((file) => file instanceof TFile);
  }

  isAssistantContextFile(file) {
    return file instanceof TFile
      && file.extension === "md"
      && file.path.startsWith(`${ROOT}/`)
      && !file.path.startsWith(`${ROOT}/.agents/`)
      && !file.path.startsWith(`${ROOT}/.fde/`)
      && !file.path.startsWith(`${ROOT}/7-系统/`);
  }

  assistantHistoryFiles() {
    const roots = [
      `${ROOT}/7-系统/AI协作/输出/`,
      `${ROOT}/7-系统/AI协作/运行记录/`,
    ];
    const files = this.app.vault.getMarkdownFiles()
      .filter((file) => roots.some((root) => file.path.startsWith(root)))
      .sort((a, b) => b.stat.mtime - a.stat.mtime);
    const runTaskIds = new Set(files
      .filter((file) => frontmatterOf(this.app, file).type === "agent-run")
      .map((file) => String(frontmatterOf(this.app, file).task_id || ""))
      .filter(Boolean));
    return files
      .filter((file) => {
        const meta = frontmatterOf(this.app, file);
        return meta.type !== "agent-output" || !runTaskIds.has(String(meta.task_id || ""));
      })
      .slice(0, 12);
  }

  async openAssistantHistory(file) {
    const recordMeta = frontmatterOf(this.app, file);
    let runFile = recordMeta.type === "agent-run" ? file : null;
    if (!runFile && recordMeta.type === "agent-output" && recordMeta.task_id) {
      runFile = this.app.vault.getMarkdownFiles().find((candidate) => {
        const meta = frontmatterOf(this.app, candidate);
        return meta.type === "agent-run" && String(meta.task_id || "") === String(recordMeta.task_id);
      }) || null;
    }
    const runMeta = runFile ? frontmatterOf(this.app, runFile) : {};
    const outputPath = String(runMeta.output_file || "");
    const resolvedOutput = outputPath ? this.app.vault.getAbstractFileByPath(outputPath) : null;
    const outputFile = resolvedOutput instanceof TFile ? resolvedOutput : file;
    const outputMeta = frontmatterOf(this.app, outputFile);
    const outputContent = await this.app.vault.cachedRead(outputFile);
    const runContent = runFile && runFile !== outputFile ? await this.app.vault.cachedRead(runFile) : outputContent;
    const prompt = String(outputMeta.user_prompt || runMeta.task || markdownSection(outputContent, "任务") || markdownSection(runContent, "任务") || "").trim();
    const response = String(
      markdownSection(outputContent, "AI 输出")
      || markdownSection(outputContent, "FDE365")
      || (outputMeta.type === "ai-assistant-output" ? markdownBody(outputContent) : "")
      || markdownSection(runContent, "执行状态")
      || "该历史任务没有保存可显示的输出。",
    ).trim();
    const sourcePaths = [...new Set([
      ...frontmatterPaths(runMeta.source_files),
      ...frontmatterPaths(outputMeta.source_files),
      ...linkedPaths(markdownSection(outputContent, "来源")),
      ...linkedPaths(markdownSection(runContent, "输入来源")),
    ])].filter((path) => this.app.vault.getAbstractFileByPath(path) instanceof TFile);
    const provider = String(outputMeta.provider || runMeta.provider || "FDE365 Agent");
    const model = String(outputMeta.model || runMeta.model || "");
    this.assistantMode = "chat";
    this.assistantSessionId = String(outputMeta.conversation_id || runMeta.conversation_id || "");
    this.assistantPrimaryPath = sourcePaths[0] || "";
    this.assistantSourcePaths = sourcePaths.slice(1);
    this.assistantDraft = "";
    this.assistantActivity = [];
    this.assistantMessages = [
      ...(prompt ? [{ role: "user", content: prompt }] : []),
      { role: "assistant", content: response, provider: this.plugin.providerLabel(provider), model },
    ];
    await this.render();
    window.setTimeout(() => {
      const body = this.contentEl.querySelector(".wis-assistant-body");
      if (body) body.scrollTop = body.scrollHeight;
      this.contentEl.querySelector(".wis-composer textarea")?.focus();
    }, 0);
  }

  renderAssistantConversation(parent) {
    if (!this.assistantMessages.length && !this.assistantLoading) return false;
    const conversation = parent.createDiv({ cls: "wis-conversation" });
    this.assistantMessages.forEach((message) => {
      const item = conversation.createEl("article", { cls: `wis-message is-${message.role}${message.error ? " is-error" : ""}` });
      const avatar = item.createDiv({ cls: "wis-message-avatar" });
      makeIcon(avatar, message.role === "user" ? "user-round" : message.error ? "triangle-alert" : "sparkles");
      const bubble = item.createDiv({ cls: "wis-message-bubble" });
      const meta = bubble.createDiv({ cls: "wis-message-meta" });
      meta.createEl("strong", { text: message.role === "user" ? "你" : message.error ? "请求未完成" : "FDE365" });
      if (message.provider) meta.createSpan({ text: [message.provider, message.model].filter(Boolean).join(" · ") });
      bubble.createDiv({ text: message.content, cls: "wis-message-content" });
      if (message.role === "assistant" && !message.error) {
        const actions = bubble.createDiv({ cls: "wis-message-actions" });
        const copy = makeButton(actions, "复制", "copy", "is-text");
        copy.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(message.content);
            new Notice("回答已复制");
          } catch (error) {
            new Notice(`复制失败：${error instanceof Error ? error.message : String(error)}`);
          }
        });
        const save = makeButton(actions, "保存", "file-plus-2", "is-text");
        save.addEventListener("click", async () => {
          const prompt = [...this.assistantMessages].reverse().find((item) => item.role === "user")?.content || "";
          const file = await this.plugin.saveAssistantOutput(message, `${this.getDisplayText()} · AI 对话`, {
            conversationId: this.assistantSessionId,
            sourceFiles: this.assistantContextFiles().map((source) => source.path),
            prompt,
          });
          new Notice(`回答已保存：${file.path}`);
          await this.render();
        });
      }
    });
    if (this.assistantLoading) {
      const loading = conversation.createEl("article", { cls: "wis-message is-assistant is-loading" });
      const avatar = loading.createDiv({ cls: "wis-message-avatar" });
      makeIcon(avatar, "sparkles");
      const bubble = loading.createDiv({ cls: "wis-message-bubble" });
      bubble.createEl("strong", { text: "Agent 处理中…" });
      const stop = makeButton(bubble, "停止生成", "square", "is-secondary");
      stop.addEventListener("click", () => {
        if (this.assistantRequestId) this.plugin.cancelAgentRequest(this.assistantRequestId);
      });
    }
    return true;
  }

  renderAssistantChat(parent, data) {
    if (!this.renderAssistantConversation(parent)) {
      const welcome = parent.createDiv({ cls: "wis-assistant-welcome" });
      const icon = welcome.createDiv({ cls: "wis-assistant-welcome-icon" });
      makeIcon(icon, "orbit");
      welcome.createEl("strong", { text: "在知识库里，和 AI 协作工作" });
      welcome.createEl("p", { text: "连续对话、选取上下文、调用 FDE Skills，并把可用结果保存回本地。" });
      const features = welcome.createDiv({ cls: "wis-assistant-feature-chips" });
      ["本地会话", "知识上下文", "结果留档"].forEach((label) => features.createSpan({ text: label }));
    }
    const context = parent.createDiv({ cls: "wis-context-card" });
    context.createEl("strong", { text: "当前知识库" });
    context.createSpan({ text: `${data.total} 项资产 · ${data.pending.length} 份待处理` });
    context.createSpan({ text: `来源覆盖 ${percent(data.sourceCoverage)} · ${data.unknown} 个待确认项` });
  }

  renderAssistantKnowledge(parent, data) {
    const intro = parent.createDiv({ cls: "wis-assistant-section-head" });
    intro.createEl("strong", { text: "六类资产" });
    intro.createSpan({ text: "进入真实业务边界，查看来源、版本和待确认项。" });
    const list = parent.createDiv({ cls: "wis-assistant-fde-list" });
    data.libraries.forEach((library) => {
      const button = list.createEl("button", { cls: `wis-assistant-fde-item is-${library.color}` });
      button.createSpan({ text: library.order, cls: `wis-library-code is-${library.color}` });
      const copy = button.createDiv();
      copy.createEl("strong", { text: library.name });
      copy.createSpan({ text: library.count ? `来源 ${percent(library.sourceCoverage)} · ${library.unknown} 待确认` : library.emptyAction });
      button.createSpan({ text: String(library.count) });
      button.addEventListener("click", () => this.service.openLibrary(library.id));
    });
    makeButton(parent, "查库 /fde-library", "sparkles", "is-secondary wis-assistant-wide-action", () => void this.prefillAssistantCommand("fde-library"));
  }

  renderAssistantSkills(parent) {
    const intro = parent.createDiv({ cls: "wis-assistant-section-head" });
    intro.createEl("strong", { text: "当前页面工作流" });
    intro.createSpan({ text: "运行前读取项目内 SKILL.md，结果进入本地 AI 协作记录。" });
    const quick = parent.createDiv({ cls: "wis-skill-quick" });
    this.pageSkills().map((id) => SKILLS.find((skill) => skill.id === id)).filter(Boolean).forEach((skill) => {
      const button = quick.createEl("button", { cls: "wis-quick-skill" });
      makeIcon(button, skill.icon);
      const text = button.createDiv();
      text.createEl("strong", { text: `/${skill.id}` });
      text.createSpan({ text: skill.name });
      button.addEventListener("click", () => void this.prefillAssistantCommand(skill.id));
    });
    makeButton(parent, "查看全部 35 个 FDE Skills", "blocks", "is-secondary wis-assistant-wide-action", () => this.plugin.router.navigate("skills"));
  }

  renderAssistantHistory(parent) {
    const intro = parent.createDiv({ cls: "wis-assistant-section-head" });
    intro.createEl("strong", { text: "本地协作历史" });
    intro.createSpan({ text: "点击记录会恢复到右侧对话，可继续确认下一步；Markdown 只在后台留档。" });
    const files = this.assistantHistoryFiles();
    const list = parent.createDiv({ cls: "wis-assistant-history" });
    if (!files.length) list.createDiv({ text: "还没有已保存的协作对话。完成一次对话或运行 Skill 后会出现在这里。", cls: "wis-empty" });
    files.forEach((file) => {
      const meta = frontmatterOf(this.app, file);
      const topic = assistantHistoryTopic(meta);
      const skill = meta.agent_id ? `/${meta.agent_id}` : "";
      const provider = meta.provider ? this.plugin.providerLabel(String(meta.provider)) : "";
      const button = list.createEl("button", { cls: "wis-assistant-history-item" });
      makeIcon(button, meta.type === "agent-run" ? "list-checks" : "message-square-text");
      const copy = button.createDiv();
      copy.createEl("strong", { text: topic });
      copy.createSpan({ text: [skill, provider, meta.model, formatRelativeTime(file.stat.mtime)].filter(Boolean).join(" · ") });
      button.setAttr("title", `${topic}\n恢复到右侧对话并继续处理`);
      button.addEventListener("click", () => void this.openAssistantHistory(file));
    });
  }

  renderAssistantComposer(panel) {
    const composer = panel.createDiv({ cls: "wis-composer" });
    const toolbar = composer.createDiv({ cls: "wis-composer-toolbar" });
    const primary = this.app.vault.getAbstractFileByPath(this.assistantPrimaryPath);
    const primarySelected = primary instanceof TFile;
    const note = makeButton(toolbar, primarySelected ? "已选笔记" : "选择笔记", "file-search-2", `is-tool${primarySelected ? " is-active" : ""}`);
    note.setAttr("title", primarySelected ? `当前选择：${primary.path}；点击重新选择` : "点击搜索并选择一篇知识库笔记");
    note.addEventListener("click", () => new AssistantNotePickerModal(this.app, this.assistantPrimaryPath, async (path) => {
      this.assistantPrimaryPath = path;
      if (path) this.assistantSourcePaths = this.assistantSourcePaths.filter((item) => item !== path);
      await this.render();
    }).open());
    const attach = makeButton(toolbar, "添加上下文", "paperclip", "is-tool");
    attach.addEventListener("click", () => new AssistantContextModal(this.app, this.assistantSourcePaths, async (paths) => {
      this.assistantSourcePaths = paths.filter((path) => path !== this.assistantPrimaryPath);
      await this.render();
    }).open());
    const fresh = makeButton(toolbar, "新对话", "message-square-plus", "is-tool");
    fresh.addEventListener("click", async () => {
      if (this.assistantRequestId) this.plugin.cancelAgentRequest(this.assistantRequestId);
      this.assistantMessages = [];
      this.assistantDraft = "";
      this.assistantSessionId = "";
      this.assistantActivity = [];
      await this.render();
    });
    if (this.assistantContextFiles().length) {
      const files = composer.createDiv({ cls: "wis-composer-context" });
      this.assistantContextFiles().forEach((file) => {
        const chip = files.createEl("button", { cls: "wis-context-chip", attr: { title: file.path } });
        makeIcon(chip, "file-text");
        chip.createSpan({ text: file.basename });
        makeIcon(chip, "x");
        chip.addEventListener("click", async () => {
          if (this.assistantPrimaryPath === file.path) this.assistantPrimaryPath = "";
          this.assistantSourcePaths = this.assistantSourcePaths.filter((path) => path !== file.path);
          await this.render();
        });
      });
    }
    const row = composer.createDiv({ cls: "wis-composer-row" });
    const inputShell = row.createDiv({ cls: "wis-composer-input-shell" });
    const commandMenu = inputShell.createDiv({
      cls: "wis-command-menu",
      attr: { role: "listbox", "aria-label": "FDE 命令建议" },
    });
    commandMenu.hidden = true;
    const input = inputShell.createEl("textarea", { attr: { placeholder: "问六类资产，或输入 /fd 选择命令…", rows: "3", "aria-label": "交给 FDE365 Agent", "aria-autocomplete": "list", "aria-expanded": "false" } });
    input.value = this.assistantDraft;
    let commandMatches = [];
    let commandSelection = 0;
    let commandRange = null;

    const closeCommandMenu = () => {
      commandMatches = [];
      commandRange = null;
      commandSelection = 0;
      commandMenu.hidden = true;
      commandMenu.empty();
      input.setAttr("aria-expanded", "false");
      input.removeAttribute("aria-activedescendant");
    };
    const fillCommand = (skill) => {
      if (!skill || !commandRange) return;
      const replacement = `/${skill.id} `;
      input.value = `${input.value.slice(0, commandRange.start)}${replacement}${input.value.slice(commandRange.end)}`;
      const caret = commandRange.start + replacement.length;
      input.setSelectionRange(caret, caret);
      this.assistantDraft = input.value;
      closeCommandMenu();
      input.focus();
    };
    const renderCommandMenu = () => {
      commandMenu.empty();
      commandMatches.forEach((skill, index) => {
        const option = commandMenu.createEl("button", {
          cls: `wis-command-option${index === commandSelection ? " is-selected" : ""}`,
          attr: { id: `wis-command-${skill.id}`, role: "option", "aria-selected": String(index === commandSelection) },
        });
        makeIcon(option, skill.icon);
        const copy = option.createDiv();
        copy.createEl("strong", { text: `/${skill.id}` });
        copy.createSpan({ text: skill.name });
        option.createSpan({ text: skill.output, cls: "wis-command-output" });
        option.addEventListener("mousedown", (event) => event.preventDefault());
        option.addEventListener("click", () => fillCommand(skill));
      });
      commandMenu.hidden = !commandMatches.length;
      input.setAttr("aria-expanded", String(Boolean(commandMatches.length)));
      if (commandMatches.length) input.setAttr("aria-activedescendant", `wis-command-${commandMatches[commandSelection].id}`);
    };
    const updateCommandMenu = () => {
      const caret = input.selectionStart ?? input.value.length;
      const completion = commandCompletionState(input.value, caret);
      if (!completion) {
        closeCommandMenu();
        return;
      }
      commandMatches = completion.matches;
      commandSelection = Math.min(commandSelection, Math.max(0, commandMatches.length - 1));
      commandRange = { start: completion.start, end: completion.end };
      renderCommandMenu();
    };
    input.addEventListener("input", () => {
      this.assistantDraft = input.value;
      updateCommandMenu();
    });
    input.addEventListener("click", updateCommandMenu);
    input.addEventListener("blur", () => window.setTimeout(closeCommandMenu, 100));
    const submitStack = row.createDiv({ cls: "wis-composer-submit-stack" });
    const executionMode = this.plugin.settings.ai.assistant.executionMode === "yolo" ? "yolo" : "approval";
    const modeSelect = submitStack.createEl("select", {
      cls: `wis-agent-mode-select is-${executionMode}`,
      attr: { "aria-label": "Agent 执行模式", title: executionMode === "yolo" ? "YOLO：当前 Vault 内无需批准" : "命令和写入需要批准" },
    });
    modeSelect.createEl("option", { text: "需批准", attr: { value: "approval" } });
    modeSelect.createEl("option", { text: "YOLO", attr: { value: "yolo" } });
    modeSelect.value = executionMode;
    modeSelect.addEventListener("change", async () => {
      this.plugin.settings.ai.assistant.executionMode = modeSelect.value === "yolo" ? "yolo" : "approval";
      await this.plugin.saveSettings();
      new Notice(modeSelect.value === "yolo"
        ? "YOLO 已开启：当前 Vault 内不再逐次批准"
        : "已切换为需要批准模式");
      this.plugin.refreshDashboard();
    });
    const send = makeButton(submitStack, this.assistantLoading ? "停止" : "发送", this.assistantLoading ? "square" : "arrow-up", this.assistantLoading ? "is-secondary" : "is-primary");
    const submit = async () => {
      if (this.assistantLoading) {
        if (this.assistantRequestId) this.plugin.cancelAgentRequest(this.assistantRequestId);
        return;
      }
      const prompt = input.value.trim();
      if (!prompt) return;
      const submittedSources = this.assistantContextFiles();
      this.assistantMode = "chat";
      this.assistantMessages.push({ role: "user", content: prompt });
      this.assistantDraft = "";
      input.value = "";
      closeCommandMenu();
      this.assistantLoading = true;
      this.assistantActivity = [];
      await this.render();
      const requestId = `fde365-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      this.assistantRequestId = requestId;
      try {
        const result = await this.plugin.askAssistant({
          requestId,
          prompt,
          history: this.assistantMessages.slice(0, -1),
          systemPrompt: `你是独立于中间工作台页面的 FDE365 本地 Agent。\n${BASE_SKILL_RULES}\n${executionModeRule(this.plugin)}\n插件可能会在“本地运行上下文”中附加已经读取的配置与 Skill 合同；直接使用这些内容。需要时使用本地工具检查 Vault。`,
          sourceFiles: submittedSources,
          localContext: await this.service.assistantRuntimeContext(prompt),
          sessionId: this.assistantSessionId,
          onEvent: () => {
            this.assistantActivity = [{ label: "Agent 处理中…" }];
            this.plugin.refreshDashboard();
          },
        });
        this.assistantSessionId = result.conversationId || this.assistantSessionId;
        const message = {
          role: "assistant",
          content: result.content,
          provider: this.plugin.providerLabel(result.provider),
          model: result.model,
          result,
        };
        this.assistantMessages.push(message);
        if (isInboxClosurePrompt(prompt)) {
          const movedPaths = await this.service.completeInboxFiles(submittedSources);
          if (movedPaths.size) {
            const movedPath = (path) => movedPaths.get(path) || path;
            this.assistantPrimaryPath = movedPath(this.assistantPrimaryPath);
            this.assistantSourcePaths = this.assistantSourcePaths.map(movedPath);
            new Notice(`已结案并移入已处理记录：${movedPaths.size} 份材料`);
          }
        }
        if (this.plugin.settings.ai.assistant.autoSaveOutput) await this.plugin.saveAssistantOutput(message, `${this.getDisplayText()} · AI 对话`, {
          conversationId: this.assistantSessionId,
          sourceFiles: this.assistantContextFiles().map((source) => source.path),
          prompt,
        });
      } catch (error) {
        this.assistantMessages.push({
          role: "assistant",
          content: error instanceof Error ? error.message : String(error),
          error: true,
          code: error?.code || "UNKNOWN_ERROR",
        });
      } finally {
        this.assistantLoading = false;
        this.assistantRequestId = null;
        this.assistantActivity = [];
        this.plugin.refreshDashboard();
      }
    };
    send.addEventListener("click", () => void submit());
    input.addEventListener("keydown", (event) => {
      if (!commandMenu.hidden && commandMatches.length) {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          const delta = event.key === "ArrowDown" ? 1 : -1;
          commandSelection = (commandSelection + delta + commandMatches.length) % commandMatches.length;
          renderCommandMenu();
          commandMenu.querySelector(".wis-command-option.is-selected")?.scrollIntoView({ block: "nearest" });
          return;
        }
        if (event.key === "Tab" || (event.key === "Enter" && !event.shiftKey)) {
          event.preventDefault();
          fillCommand(commandMatches[commandSelection]);
          return;
        }
        if (event.key === "Escape") {
          event.preventDefault();
          closeCommandMenu();
          return;
        }
      }
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        void submit();
      }
    });
    const contextScope = this.plugin.settings.ai.assistant.contextScope;
    composer.createDiv({
      text: contextScope === "retrieved" ? "Agent 已预附加本地检索结果" : contextScope === "none" ? "Agent 按任务需要读取 Vault" : "Agent 已预附加当前笔记",
      cls: "wis-composer-note",
    });
  }

  renderAssistant(app, data) {
    const panel = app.createEl("aside", { cls: "wis-assistant" });
    this.renderAssistantResizeHandle(app, panel);
    const head = panel.createDiv({ cls: "wis-assistant-head" });
    const title = head.createDiv();
    title.createSpan({ text: "FDE365 AGENT", cls: "wis-eyebrow" });
    title.createEl("strong", { text: "对话 · FDE · Skills · 历史" });
    const capability = this.plugin.providerManager.describeSelected();
    const agentCapability = this.plugin.agentRuntime?.describe?.() || { available: false, error: "本地 Agent 未就绪" };
    const isDeveloperRuntime = agentCapability.mode === "local-cli";
    const headActions = head.createDiv({ cls: "wis-assistant-head-actions" });
    const executionMode = this.plugin.settings.ai.assistant.executionMode === "yolo" ? "yolo" : "approval";
    const provider = headActions.createEl("button", {
      cls: `wis-provider-dot${agentCapability.available && (isDeveloperRuntime || capability.configured && capability.compatible) ? " is-ready" : ""}`,
      attr: { title: [isDeveloperRuntime ? "DEV · 本地 Codex CLI" : "FDE365 Codex Agent", isDeveloperRuntime ? "继承本机登录与配置" : capability.model, capability.error, agentCapability.error].filter(Boolean).join(" · ") },
    });
    provider.createSpan({ text: isDeveloperRuntime
      ? agentCapability.available ? "DEV · 本地 Codex CLI" : "缺少 Codex CLI"
      : !capability.configured ? "配置 Token" : agentCapability.available ? capability.model : "缺少 Codex 组件" });
    provider.addEventListener("click", () => this.plugin.openSettings("ai"));
    const body = panel.createDiv({ cls: "wis-assistant-body" });
    body.createEl("p", {
      text: executionMode === "yolo"
        ? "YOLO 模式：Agent 在当前 Vault 内自动执行，不再逐次批准。"
        : "需要批准：Agent 可读取当前 Vault、运行 FDE Skills；命令和写入会向你确认。",
      cls: `wis-assistant-rule is-${executionMode}`,
    });
    const tabs = body.createDiv({ cls: "wis-assistant-tabs", attr: { role: "tablist", "aria-label": "AI 工作区" } });
    [["chat", "对话"], ["fde", "FDE"], ["skills", "Skills"], ["history", "历史"]].forEach(([id, label]) => {
      const tab = tabs.createEl("button", { cls: this.assistantMode === id ? "is-active" : "", attr: { role: "tab", "aria-selected": String(this.assistantMode === id) } });
      tab.createSpan({ text: label });
      tab.addEventListener("click", async () => {
        this.assistantMode = id;
        await this.render();
      });
    });
    const surface = body.createDiv({ cls: `wis-assistant-surface is-${this.assistantMode}` });
    if (this.assistantMode === "fde") this.renderAssistantKnowledge(surface, data);
    else if (this.assistantMode === "skills") this.renderAssistantSkills(surface);
    else if (this.assistantMode === "history") this.renderAssistantHistory(surface);
    else this.renderAssistantChat(surface, data);
    this.renderAssistantComposer(panel);
  }

  renderAssistantResizeHandle(app, panel) {
    const handle = panel.createDiv({
      cls: "wis-assistant-resize-handle",
      attr: {
        role: "separator",
        tabindex: "0",
        "aria-label": "调整右侧 Agent 对话栏宽度",
        "aria-orientation": "vertical",
        title: "拖动调整对话栏宽度；双击恢复默认宽度",
      },
    });
    const applyWidth = (value) => {
      const width = Math.max(280, Math.min(560, Math.round(Number(value) || 336)));
      this.plugin.settings.ai.assistant.panelWidth = width;
      app.style.setProperty("--wis-assistant-width", `${width}px`);
      handle.setAttr("aria-valuenow", String(width));
      return width;
    };
    applyWidth(this.plugin.settings.ai.assistant.panelWidth);
    let startX = 0;
    let startWidth = 0;
    let dragging = false;
    handle.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;
      event.preventDefault();
      dragging = true;
      startX = event.clientX;
      startWidth = Number(this.plugin.settings.ai.assistant.panelWidth) || 336;
      app.addClass("is-resizing-assistant");
      handle.setPointerCapture?.(event.pointerId);
    });
    handle.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      applyWidth(startWidth + startX - event.clientX);
    });
    const finishResize = async (event) => {
      if (!dragging) return;
      dragging = false;
      app.removeClass("is-resizing-assistant");
      handle.releasePointerCapture?.(event.pointerId);
      await this.plugin.saveSettings();
    };
    handle.addEventListener("pointerup", (event) => void finishResize(event));
    handle.addEventListener("pointercancel", (event) => void finishResize(event));
    handle.addEventListener("dblclick", async () => {
      applyWidth(336);
      await this.plugin.saveSettings();
    });
    handle.addEventListener("keydown", async (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home"].includes(event.key)) return;
      event.preventDefault();
      const current = Number(this.plugin.settings.ai.assistant.panelWidth) || 336;
      applyWidth(event.key === "Home" ? 336 : current + (event.key === "ArrowLeft" ? 16 : -16));
      await this.plugin.saveSettings();
    });
  }
}

class FDEDashboardView extends FDEBaseView {
  constructor(leaf, plugin) { super(leaf, plugin, "dashboard"); }

  async renderMain(main, data) {
    const hero = main.createEl("section", { cls: "wis-hero" });
    const copy = hero.createDiv();
    copy.createSpan({ text: "FDE365 · 六类资产", cls: "wis-eyebrow" });
    copy.createEl("h1", { text: "六类资产运营台" });
    copy.createEl("p", { text: "不按话题堆笔记。围绕个人、产品、客户、案例、方法和内容，持续保留真源与下一步。" });
    const signal = hero.createDiv({ cls: "wis-today-signal" });
    makeIcon(signal, data.pending.length ? "inbox" : data.unknown ? "circle-help" : "circle-check-big");
    const signalCopy = signal.createDiv();
    signalCopy.createSpan({ text: "当前入口" });
    signalCopy.createEl("strong", { text: data.pending.length ? `先处理 ${data.pending.length} 份原始材料` : data.unknown ? `先确认 ${data.unknown} 个未知项` : "六库状态可以继续推进" });
    makeButton(signal, "运行 /fde-start", "arrow-right", "is-secondary", () => this.service.runSkill("fde-start", "请读取当前六类资产库状态，为我选择并执行一个最值得推进的入口。"));

    const head = main.createDiv({ cls: "wis-section-head" });
    const headCopy = head.createDiv();
    headCopy.createEl("h2", { text: "六类资产" });
    headCopy.createSpan({ text: "目录就是业务边界；数字只统计正式资产，不包含系统文件和 Skill。" });
    const grid = main.createDiv({ cls: "wis-library-grid" });
    data.libraries.forEach((library) => {
      const card = grid.createEl("button", { cls: `wis-library-card is-${library.color}` });
      const top = card.createDiv({ cls: "wis-library-card-top" });
      top.createSpan({ text: library.order, cls: "wis-library-number" });
      makeIcon(top, library.icon);
      card.createEl("h3", { text: library.name });
      card.createEl("p", { text: library.description });
      const metrics = card.createDiv({ cls: "wis-library-metrics" });
      metrics.createDiv({ text: String(library.count), cls: "wis-library-count" });
      const detail = metrics.createDiv();
      detail.createSpan({ text: "项资产" });
      detail.createSpan({ text: `来源 ${percent(library.sourceCoverage)}` });
      const footer = card.createDiv({ cls: "wis-library-card-foot" });
      footer.createSpan({ text: library.count ? `${library.unknown} 个待确认` : library.emptyAction });
      footer.createSpan({ text: library.updated ? formatRelativeTime(library.updated) : "尚未建立" });
      card.addEventListener("click", () => this.service.openLibrary(library.id));
    });

    const lower = main.createDiv({ cls: "wis-dashboard-lower" });
    const pipeline = lower.createEl("section", { cls: "wis-panel wis-pipeline-summary" });
    const pipelineHead = pipeline.createDiv({ cls: "wis-panel-head" });
    const pipelineTitle = pipelineHead.createDiv();
    pipelineTitle.createEl("h2", { text: "内容流转" });
    pipelineTitle.createSpan({ text: "一个文件只处于一个阶段" });
    makeButton(pipelineHead, "打开流水线", "arrow-right", "is-text", () => this.plugin.activateProjects());
    const track = pipeline.createDiv({ cls: "wis-stage-track" });
    data.stages.forEach((stage, index) => {
      const item = track.createDiv({ cls: `wis-stage-node is-${stage.color}` });
      item.createSpan({ text: String(index + 1).padStart(2, "0") });
      item.createEl("strong", { text: stage.id });
      item.createDiv({ text: String(stage.items.length) });
    });
    const quality = lower.createEl("section", { cls: "wis-panel wis-quality-summary" });
    const qualityHead = quality.createDiv({ cls: "wis-panel-head" });
    const qualityTitle = qualityHead.createDiv();
    qualityTitle.createEl("h2", { text: "知识质量" });
    qualityTitle.createSpan({ text: "只显示可行动的问题" });
    makeButton(qualityHead, "完整体检", "arrow-right", "is-text", () => this.plugin.activateAnalytics());
    [
      { label: "缺少来源", value: data.total - data.notes.filter((note) => note.source).length, note: "不能作为确定事实", icon: "link-2-off", color: "orange" },
      { label: "待确认内容", value: data.unknown, note: "推断和事实尚未分开", icon: "circle-help", color: "violet" },
      { label: "超过 90 天", value: data.stale, note: "可能需要版本复核", icon: "clock-3", color: "blue" },
    ].forEach((item) => {
      const row = quality.createDiv({ cls: `wis-quality-row is-${item.color}` });
      makeIcon(row, item.icon);
      const text = row.createDiv();
      text.createEl("strong", { text: item.label });
      text.createSpan({ text: item.note });
      row.createSpan({ text: String(item.value) });
    });

    const recent = main.createEl("section", { cls: "wis-panel wis-recent" });
    const recentHead = recent.createDiv({ cls: "wis-panel-head" });
    const recentTitle = recentHead.createDiv();
    recentTitle.createEl("h2", { text: "最近资产" });
    recentTitle.createSpan({ text: "来自六个正式资产库" });
    if (!data.recent.length) recent.createDiv({ text: "六类资产还是空的。运行 /fde-interview，或先把材料放入待处理。", cls: "wis-empty" });
    data.recent.forEach((note) => {
      const row = recent.createEl("button", { cls: "wis-note-row" });
      row.createSpan({ text: note.library?.order || "--", cls: `wis-library-code is-${note.library?.color || "blue"}` });
      const text = row.createDiv({ cls: "wis-note-row-copy" });
      text.createEl("strong", { text: note.file.basename, cls: "wis-note-row-title" });
      text.createSpan({ text: `${note.library?.name || "资产"} · ${note.source ? `来源：${note.source}` : "缺少来源"}`, cls: "wis-note-row-meta" });
      row.createSpan({ text: formatRelativeTime(note.file.stat.mtime), cls: "wis-note-row-time" });
      row.addEventListener("click", () => this.service.openFile(note.file));
    });
  }
}

class FDEInboxView extends FDEBaseView {
  constructor(leaf, plugin) {
    super(leaf, plugin, "inbox");
    this.selectedPaths = new Set();
  }

  async processFiles(files) {
    const result = await this.service.processInboxFiles(files);
    if (result.status === "success") {
      files.forEach((file) => this.selectedPaths.delete(file.path));
      new Notice("处理完成。点击“继续处理”，在右侧 Agent 对话中确认下一步");
    }
    await this.render();
  }

  async openProcessingConversation(state, file) {
    const sourcePaths = [...new Set((state?.sourcePaths || [file.path]).filter(Boolean))];
    const primaryPath = sourcePaths[0] || file.path;
    const resultContent = String(state?.resultContent || state?.preview || "").trim();
    const conversationId = state?.conversationId || "";
    const sameConversation = Boolean(conversationId && this.assistantSessionId === conversationId && this.assistantMessages.length);
    this.assistantMode = "chat";
    this.assistantSessionId = conversationId;
    this.assistantPrimaryPath = primaryPath;
    this.assistantSourcePaths = sourcePaths.filter((path) => path !== primaryPath);
    if (!sameConversation || !this.assistantDraft.trim()) {
      this.assistantDraft = "请基于上面的分流预览给出可执行的下一步，等我确认后再写入正式资产库。";
    }
    this.assistantActivity = [];
    if (!sameConversation) {
      this.assistantMessages = Array.isArray(state?.messages) && state.messages.length
        ? state.messages
        : [
          { role: "user", content: `处理待处理材料：${sourcePaths.map((path) => path.split("/").pop()).join("、")}` },
          {
            role: "assistant",
            content: resultContent || "分流预览已生成。请确认下一步要写入、修改，还是暂不处理。",
            provider: state?.provider || "FDE365 Agent",
            model: state?.model || "",
          },
        ];
    }
    await this.render();
    window.setTimeout(() => {
      const input = this.contentEl.querySelector(".wis-composer textarea");
      input?.focus();
      const body = this.contentEl.querySelector(".wis-assistant-body");
      if (body) body.scrollTop = body.scrollHeight;
    }, 0);
  }

  renderProcessingStatus(parent, state) {
    const status = state?.status || "idle";
    const line = parent.createDiv({
      cls: `wis-inbox-processing-status is-${status}`,
      attr: { role: "status", "aria-live": "polite", title: state?.message || "等待处理" },
    });
    if (status === "running") line.createSpan({ cls: "wis-processing-spinner", attr: { "aria-hidden": "true" } });
    else makeIcon(line, status === "success" ? "circle-check" : status === "failed" ? "circle-x" : "clock-3");
    line.createSpan({ text: state?.message || "等待处理" });
  }

  createQuickNote() {
    new TextPromptModal(this.app, {
      title: "快速记录原始材料",
      description: "先完整保留原始表达，之后再运行 /fde-ingest 分流。",
      placeholder: "给这份材料起一个可识别的标题…",
      onSubmit: async (value) => this.service.createQuickNote(value),
    }).open();
  }

  startVoiceCapture() {
    new VoiceCaptureModal(this.app, {
      plugin: this.plugin,
      service: this.service,
      onSaved: async () => this.render(),
    }).open();
  }

  async renderMain(main, data) {
    const pendingPaths = new Set(data.pending.map((file) => file.path));
    this.selectedPaths = new Set([...this.selectedPaths].filter((path) => pendingPaths.has(path)));
    const header = main.createDiv({ cls: "wis-page-header" });
    const copy = header.createDiv();
    copy.createSpan({ text: "FDE365 · 原始材料", cls: "wis-eyebrow" });
    copy.createEl("h1", { text: "待处理材料" });
    copy.createEl("p", { text: "录音、聊天、会议纪要和旧资料先保留原文；AI 只生成分流预览，确认后才写入六类资产。" });
    const actions = header.createDiv({ cls: "wis-header-actions" });
    makeButton(actions, "快速记录", "plus", "is-primary", () => this.createQuickNote());
    makeButton(actions, "AI 语音", "audio-lines", "is-secondary", () => this.startVoiceCapture());
    const processAll = makeButton(actions, "处理全部待处理", "sparkles", "is-secondary", () => void this.processFiles(data.pending));
    processAll.disabled = !data.pending.length || data.pending.every((file) => this.service.inboxProcessingState(file).status === "running");

    const dropZone = main.createEl("section", {
      cls: "wis-inbox-dropzone",
      attr: { role: "button", tabindex: "0", "aria-label": "拖入或选择要收录到待处理的文件" },
    });
    const dropIcon = dropZone.createDiv({ cls: "wis-inbox-drop-icon" });
    makeIcon(dropIcon, "cloud-upload");
    const dropCopy = dropZone.createDiv({ cls: "wis-inbox-drop-copy" });
    const dropTitle = dropCopy.createEl("strong", { text: "把文件拖到这里" });
    dropCopy.createSpan({ text: "只收录并保留原文，不会自动运行 Skill" });
    dropZone.createSpan({ text: "选择文件", cls: "wis-inbox-drop-action" });
    const picker = dropZone.createEl("input", { attr: { type: "file", multiple: "", tabindex: "-1", "aria-hidden": "true" } });
    picker.addClass("wis-inbox-file-picker");
    let importing = false;
    const importFiles = async (fileList) => {
      if (importing) return;
      const files = Array.from(fileList || []);
      if (!files.length) return;
      importing = true;
      dropZone.addClass("is-importing");
      dropTitle.setText(`正在收录 ${files.length} 个文件…`);
      try {
        const imported = await this.service.importInboxFiles(files);
        new Notice(`已收录 ${imported.length} 个文件；等待你决定是否运行 /fde-ingest`);
        await this.render();
      } catch (error) {
        dropZone.removeClass("is-importing");
        dropTitle.setText("收录未完成，可重新拖入");
        new Notice(`文件收录失败：${error instanceof Error ? error.message : String(error)}`, 8000);
      } finally {
        importing = false;
        picker.value = "";
      }
    };
    dropZone.addEventListener("click", (event) => {
      if (event.target !== picker) picker.click();
    });
    dropZone.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        picker.click();
      }
    });
    picker.addEventListener("change", () => void importFiles(picker.files));
    dropZone.addEventListener("dragenter", (event) => {
      event.preventDefault();
      if (!importing) dropZone.addClass("is-dragging");
    });
    dropZone.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
    });
    dropZone.addEventListener("dragleave", (event) => {
      if (!dropZone.contains(event.relatedTarget)) dropZone.removeClass("is-dragging");
    });
    dropZone.addEventListener("drop", (event) => {
      event.preventDefault();
      dropZone.removeClass("is-dragging");
      void importFiles(event.dataTransfer?.files);
    });

    const stats = main.createDiv({ cls: "wis-compact-stats" });
    [
      ["待处理", data.pending.length, "inbox", "orange"],
      ["已处理记录", data.processed.length, "archive-restore", "blue"],
      ["正式资产", data.total, "library", "indigo"],
      ["待确认项", data.unknown, "circle-help", "violet"],
    ].forEach(([label, value, iconName, color]) => {
      const card = stats.createDiv({ cls: `wis-compact-stat is-${color}` });
      makeIcon(card, iconName);
      const text = card.createDiv();
      text.createSpan({ text: label });
      text.createEl("strong", { text: String(value) });
    });

    const flow = main.createEl("section", { cls: "wis-panel wis-ingest-flow" });
    const flowHead = flow.createDiv({ cls: "wis-panel-head" });
    const title = flowHead.createDiv();
    title.createEl("h2", { text: "安全入库流程" });
    title.createSpan({ text: "确认点放在真正写入之前" });
    const steps = flow.createDiv({ cls: "wis-ingest-steps" });
    [
      ["01", "保留原文", "登记路径、日期、参与人", "file-lock-2"],
      ["02", "通读拆分", "原话、事实、判断、方法、案例、选题", "scan-text"],
      ["03", "分流预览", "新增、补充、冲突、重复", "split"],
      ["04", "人工确认", "确认后写六库并记录处理批次", "badge-check"],
    ].forEach(([number, label, note, iconName]) => {
      const step = steps.createDiv({ cls: "wis-ingest-step" });
      step.createSpan({ text: number });
      makeIcon(step, iconName);
      step.createEl("strong", { text: label });
      step.createDiv({ text: note });
    });

    const list = main.createEl("section", { cls: "wis-panel wis-inbox-list" });
    const listHead = list.createDiv({ cls: "wis-panel-head" });
    const listTitle = listHead.createDiv();
    listTitle.createEl("h2", { text: "原始材料" });
    listTitle.createSpan({ text: "插件不会删除或用摘要替换这些文件" });
    const selectedFiles = data.pending.filter((file) => this.selectedPaths.has(file.path));
    const selectableFiles = data.pending.filter((file) => this.service.inboxProcessingState(file).status !== "running");
    const batch = listHead.createDiv({ cls: "wis-inbox-batch-actions" });
    const selectAllLabel = batch.createEl("label", { cls: "wis-inbox-select-all" });
    const selectAll = selectAllLabel.createEl("input", { attr: { type: "checkbox", "aria-label": "全选待处理材料" } });
    selectAll.checked = Boolean(selectableFiles.length) && selectableFiles.every((file) => this.selectedPaths.has(file.path));
    selectAll.indeterminate = selectedFiles.length > 0 && !selectAll.checked;
    selectAll.disabled = !selectableFiles.length;
    selectAllLabel.createSpan({ text: "全选" });
    selectAll.addEventListener("change", () => {
      if (selectAll.checked) selectableFiles.forEach((file) => this.selectedPaths.add(file.path));
      else this.selectedPaths.clear();
      void this.render();
    });
    batch.createSpan({ text: `已选 ${selectedFiles.length} 项`, cls: "wis-inbox-selected-count" });
    if (selectedFiles.length) makeButton(batch, "取消选择", "x", "is-text", () => {
      this.selectedPaths.clear();
      void this.render();
    });
    const batchButton = makeButton(batch, `批量处理${selectedFiles.length ? ` (${selectedFiles.length})` : ""}`, "sparkles", "is-primary", () => void this.processFiles(selectedFiles));
    const batchReady = selectedFiles.some((file) => this.service.inboxProcessingState(file).status !== "running");
    batchButton.disabled = !batchReady;
    if (batchReady) batchButton.addClass("is-ready");
    if (!data.pending.length) list.createDiv({ text: "待处理目录是空的。可以快速记录，或把录音转写、聊天导出和会议纪要放进该目录。", cls: "wis-empty" });
    data.pending.forEach((file) => {
      const state = this.service.inboxProcessingState(file);
      const row = list.createDiv({ cls: `wis-inbox-row is-${state.status}` });
      const selectLabel = row.createEl("label", { cls: "wis-inbox-select", attr: { title: `选择 ${file.basename}` } });
      const checkbox = selectLabel.createEl("input", { attr: { type: "checkbox", "aria-label": `选择 ${file.basename}` } });
      checkbox.checked = this.selectedPaths.has(file.path);
      checkbox.disabled = state.status === "running";
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) this.selectedPaths.add(file.path);
        else this.selectedPaths.delete(file.path);
        void this.render();
      });
      makeIcon(row, "file-text", "is-orange");
      const text = row.createDiv({ cls: "wis-inbox-row-copy" });
      text.createEl("strong", { text: file.basename });
      text.createSpan({ text: `${formatRelativeTime(file.stat.mtime)} · 原始材料保留` });
      this.renderProcessingStatus(text, state);
      if (state.status === "success" && state.preview) text.createDiv({ text: state.preview, cls: "wis-inbox-result-preview" });
      const actions = row.createDiv({ cls: "wis-row-actions" });
      makeButton(actions, "打开原文", "external-link", "is-text", () => this.service.openFile(file));
      if (state.status === "success") {
        makeButton(actions, "继续处理", "messages-square", "is-primary", () => void this.openProcessingConversation(state, file));
      }
      const processButton = makeButton(
        actions,
        state.status === "running" ? "处理中…" : state.status === "failed" ? "重试处理" : state.status === "success" ? "重新处理" : "用 /fde-ingest 处理",
        state.status === "running" ? "loader-circle" : "sparkles",
        "is-secondary",
        () => void this.processFiles([file]),
      );
      processButton.disabled = state.status === "running";
      if (state.status === "running") processButton.setAttr("aria-busy", "true");
    });
  }
}

class FDELibrariesView extends FDEBaseView {
  constructor(leaf, plugin) {
    super(leaf, plugin, "libraries");
    this.selectedLibrary = "all";
    this.query = "";
  }

  async renderMain(main, data) {
    const header = main.createDiv({ cls: "wis-page-header" });
    const copy = header.createDiv();
    copy.createSpan({ text: "FDE365 · 真实来源", cls: "wis-eyebrow" });
    copy.createEl("h1", { text: "六类资产" });
    copy.createEl("p", { text: "每个库回答一种不同的问题。路径决定归属，来源决定能否作为事实使用。" });
    makeButton(header, "新建资产", "plus", "is-primary", () => new AssetModal(this.app, this.selectedLibrary, async (value) => this.service.createAsset(value)).open());
    const selector = main.createDiv({ cls: "wis-library-selector" });
    const all = selector.createEl("button", { cls: `wis-library-tab${this.selectedLibrary === "all" ? " is-active" : ""}` });
    all.createSpan({ text: "ALL" });
    all.createEl("strong", { text: "全部资产" });
    all.createSpan({ text: String(data.total) });
    all.addEventListener("click", () => { this.selectedLibrary = "all"; void this.render(); });
    data.libraries.forEach((library) => {
      const button = selector.createEl("button", { cls: `wis-library-tab is-${library.color}${this.selectedLibrary === library.id ? " is-active" : ""}` });
      button.createSpan({ text: library.order });
      button.createEl("strong", { text: library.name });
      button.createSpan({ text: String(library.count) });
      button.addEventListener("click", () => { this.selectedLibrary = library.id; void this.render(); });
    });
    const selected = this.selectedLibrary === "all" ? null : data.libraries.find((item) => item.id === this.selectedLibrary);
    if (selected) {
      const brief = main.createDiv({ cls: `wis-library-brief is-${selected.color}` });
      makeIcon(brief, selected.icon);
      const briefCopy = brief.createDiv();
      briefCopy.createEl("h2", { text: selected.name });
      briefCopy.createEl("p", { text: selected.description });
      const briefMetrics = brief.createDiv({ cls: "wis-brief-metrics" });
      briefMetrics.createSpan({ text: `${selected.count} 项资产` });
      briefMetrics.createSpan({ text: `来源覆盖 ${percent(selected.sourceCoverage)}` });
      briefMetrics.createSpan({ text: `${selected.unknown} 个待确认` });
    }
    const toolbar = main.createDiv({ cls: "wis-library-toolbar" });
    const search = toolbar.createEl("input", { attr: { type: "search", placeholder: "在当前资产范围搜索…" } });
    search.value = this.query;
    search.addEventListener("input", () => {
      this.query = search.value.trim().toLowerCase();
      main.querySelectorAll(".wis-asset-card").forEach((card) => card.toggleClass("is-hidden", !card.dataset.search.includes(this.query)));
    });
    makeButton(toolbar, "查库 /fde-library", "sparkles", "is-secondary", () => void this.prefillAssistantCommand("fde-library"));
    const notes = data.notes.filter((note) => this.selectedLibrary === "all" || note.library?.id === this.selectedLibrary);
    const grid = main.createDiv({ cls: "wis-asset-grid" });
    if (!notes.length) grid.createDiv({ text: selected?.emptyAction || "六类资产还是空的。", cls: "wis-empty" });
    notes.sort((a, b) => b.file.stat.mtime - a.file.stat.mtime).forEach((note) => {
      const card = grid.createEl("button", { cls: `wis-asset-card is-${note.library?.color || "blue"}` });
      card.dataset.search = `${note.file.basename} ${note.content}`.toLowerCase();
      const top = card.createDiv({ cls: "wis-asset-card-top" });
      top.createSpan({ text: note.library?.order || "--", cls: "wis-library-code" });
      top.createSpan({ text: note.library?.name || "资产" });
      card.createEl("h3", { text: note.file.basename });
      card.createEl("p", { text: note.excerpt || "尚未填写正文。" });
      const evidence = card.createDiv({ cls: "wis-evidence-row" });
      evidence.createSpan({ text: note.source ? "有来源" : "缺少来源", cls: note.source ? "is-good" : "is-warning" });
      if (note.unknown) evidence.createSpan({ text: `${note.unknown} 待确认`, cls: "is-unknown" });
      evidence.createSpan({ text: formatRelativeTime(note.file.stat.mtime) });
      card.addEventListener("click", () => this.service.openFile(note.file));
    });
  }
}

class FDENetworkView extends FDEBaseView {
  constructor(leaf, plugin) { super(leaf, plugin, "network"); }

  async renderMain(main, data) {
    const header = main.createDiv({ cls: "wis-page-header" });
    const copy = header.createDiv();
    copy.createSpan({ text: "FDE365 · 资产连接", cls: "wis-eyebrow" });
    copy.createEl("h1", { text: "资产网络" });
    copy.createEl("p", { text: "关系不是装饰：产品要连接客户需求，方法要连接真实案例，内容要能回到来源。" });
    makeButton(header, "整理关联", "sparkles", "is-primary", () => this.service.runSkill("fde-organize", "请只读检查六类资产之间的支持、冲突、例子和版本关系，先给关联与迁移预览。"));
    const map = main.createEl("section", { cls: "wis-network-map" });
    const center = map.createDiv({ cls: "wis-network-center" });
    center.createSpan({ text: "FDE365" });
    center.createEl("strong", { text: `${data.relations.edges.length}` });
    center.createSpan({ text: "跨库连接" });
    data.libraries.forEach((library, index) => {
      const node = map.createEl("button", { cls: `wis-network-node is-${library.color} at-${index + 1}` });
      node.createSpan({ text: library.order });
      makeIcon(node, library.icon);
      node.createEl("strong", { text: library.short });
      node.createSpan({ text: `${library.count} 项` });
      node.addEventListener("click", () => this.service.openLibrary(library.id));
    });
    const matrixPanel = main.createEl("section", { cls: "wis-panel wis-relation-matrix" });
    const matrixHead = matrixPanel.createDiv({ cls: "wis-panel-head" });
    const title = matrixHead.createDiv();
    title.createEl("h2", { text: "跨库关系矩阵" });
    title.createSpan({ text: "只统计实际双向链接，不生成模拟数据" });
    const table = matrixPanel.createDiv({ cls: "wis-matrix" });
    table.createSpan();
    data.libraries.forEach((library) => table.createSpan({ text: library.short, cls: `is-${library.color}` }));
    data.libraries.forEach((source) => {
      table.createSpan({ text: source.short, cls: `is-${source.color}` });
      data.libraries.forEach((target) => {
        const value = data.relations.matrix[source.id][target.id];
        table.createSpan({ text: String(value), cls: value ? "has-link" : "" });
      });
    });
    const gaps = main.createEl("section", { cls: "wis-panel" });
    const gapsHead = gaps.createDiv({ cls: "wis-panel-head" });
    const gapsTitle = gapsHead.createDiv();
    gapsTitle.createEl("h2", { text: "关键连接检查" });
    gapsTitle.createSpan({ text: "优先补能验证业务判断的连接" });
    [
      ["产品 → 客户", "产品承诺是否来自真实需求", "product", "customer"],
      ["案例 → 方法", "方法是否有实际使用证据", "case", "method"],
      ["内容 → 来源", "成稿是否能回到产品、客户和案例", "content", "case"],
    ].forEach(([label, note, from, to]) => {
      const value = data.relations.matrix[from][to] + data.relations.matrix[to][from];
      const row = gaps.createDiv({ cls: "wis-check-row" });
      makeIcon(row, value ? "circle-check-big" : "circle-dashed", value ? "is-good" : "is-warning");
      const text = row.createDiv();
      text.createEl("strong", { text: label });
      text.createSpan({ text: note });
      row.createSpan({ text: value ? `${value} 条连接` : "尚未连接" });
    });
  }
}

class FDEContentView extends FDEBaseView {
  constructor(leaf, plugin) { super(leaf, plugin, "content"); }

  async renderMain(main, data) {
    const header = main.createDiv({ cls: "wis-page-header" });
    const copy = header.createDiv();
    copy.createSpan({ text: "FDE365 · 内容工作流", cls: "wis-eyebrow" });
    copy.createEl("h1", { text: "内容生产" });
    copy.createEl("p", { text: "同一稿件不复制成多个状态。目录和文件中的当前阶段必须一致，发布结论必须能回到六库来源。" });
    const actions = header.createDiv({ cls: "wis-header-actions" });
    makeButton(actions, "新建选题", "plus", "is-primary", () => new TextPromptModal(this.app, {
      title: "新建选题",
      description: "创建后进入“选题”阶段；请在文件中补目标读者、核心问题和来源。",
      placeholder: "选题标题…",
      onSubmit: async (value) => this.service.createContent(value, "选题"),
    }).open());
    makeButton(actions, "从六库找选题", "sparkles", "is-secondary", () => this.service.runSkill("fde-topics", "请从客户原话、产品问题、案例结果、个人判断和方法资产中生成可追溯选题。"));
    const summary = main.createDiv({ cls: "wis-content-summary" });
    data.stages.forEach((stage, index) => {
      const item = summary.createDiv({ cls: `wis-content-summary-item is-${stage.color}` });
      item.createSpan({ text: String(index + 1).padStart(2, "0") });
      makeIcon(item, stage.icon);
      item.createEl("strong", { text: stage.id });
      item.createDiv({ text: String(stage.items.length) });
    });
    const board = main.createDiv({ cls: "wis-content-board" });
    data.stages.forEach((stage, index) => {
      const column = board.createEl("section", { cls: `wis-stage-column is-${stage.color}` });
      const stageHead = column.createDiv({ cls: "wis-stage-column-head" });
      const stageTitle = stageHead.createDiv();
      stageTitle.createSpan({ text: String(index + 1).padStart(2, "0") });
      stageTitle.createEl("strong", { text: stage.id });
      stageHead.createSpan({ text: String(stage.items.length) });
      column.createDiv({ text: stage.description, cls: "wis-stage-description" });
      const cards = column.createDiv({ cls: "wis-stage-cards" });
      if (!stage.items.length) cards.createDiv({ text: "暂无内容", cls: "wis-stage-empty" });
      stage.items.sort((a, b) => b.file.stat.mtime - a.file.stat.mtime).forEach((note) => {
        const card = cards.createDiv({ cls: "wis-content-card" });
        card.createEl("strong", { text: note.file.basename });
        card.createSpan({ text: note.source ? `来源：${note.source}` : "缺少来源", cls: note.source ? "is-source" : "is-warning" });
        if (note.unknown) card.createSpan({ text: `${note.unknown} 个未核实项`, cls: "is-unknown" });
        const cardActions = card.createDiv({ cls: "wis-content-card-actions" });
        makeButton(cardActions, "打开", "external-link", "is-text", () => this.service.openFile(note.file));
        if (index < CONTENT_STAGES.length - 1) makeButton(cardActions, "推进", "arrow-right", "is-text", () => this.service.advanceContent(note));
        if (stage.id === "待审核") makeButton(cardActions, "审核", "sparkles", "is-text", () => this.service.runSkill("fde-review", `请审核稿件 ${note.file.path}，默认只诊断，不直接改稿。`, [note.file]));
      });
    });
    if (data.stageConflicts.length) {
      const conflict = main.createEl("section", { cls: "wis-alert is-warning" });
      makeIcon(conflict, "triangle-alert");
      const text = conflict.createDiv();
      text.createEl("strong", { text: `${data.stageConflicts.length} 个阶段冲突` });
      text.createSpan({ text: "文件所在目录与“当前阶段”字段不一致。运行 /fde-health 查看路径证据，插件不会自动选边。" });
      makeButton(conflict, "运行体检", "activity", "is-secondary", () => this.service.runSkill("fde-health", "请检查内容文件目录与当前阶段字段冲突，只报告，不自动移动。", data.stageConflicts.map((note) => note.file)));
    }
  }
}

class FDESkillsView extends FDEBaseView {
  constructor(leaf, plugin) {
    super(leaf, plugin, "skills");
    this.selectedSkill = "fde-start";
    this.selectedGroup = "entry";
  }

  async renderMain(main, data) {
    const header = main.createDiv({ cls: "wis-page-header" });
    const copy = header.createDiv();
    copy.createSpan({ text: "FDE365 · 本地工作流", cls: "wis-eyebrow" });
    copy.createEl("h1", { text: "FDE Skills" });
    copy.createEl("p", { text: "35 项能力随知识库部署在 .agents/skills。它们共享六库边界、来源规则、未知项和确认机制。" });
    const capability = this.plugin.providerManager.describeSelected();
    const agentCapability = this.plugin.agentRuntime?.describe?.() || { available: false };
    const isDeveloperRuntime = agentCapability.mode === "local-cli";
    const isReady = isDeveloperRuntime ? agentCapability.available : capability.configured;
    const status = header.createDiv({ cls: `wis-provider-status${isReady ? " is-ready" : ""}` });
    makeIcon(status, isReady ? "circle-check-big" : "circle-alert");
    status.createSpan({ text: isDeveloperRuntime
      ? agentCapability.available ? "DEV · 本地 Codex CLI" : "DEV · 未找到 Codex CLI"
      : capability.configured ? `${capability.label} · ${capability.model || "默认模型"}` : "AI Provider 未配置" });
    const overview = main.createDiv({ cls: "wis-skill-overview" });
    overview.createDiv({ text: String(data.installedSkills.length), cls: "wis-skill-big-number" });
    const overviewCopy = overview.createDiv();
    overviewCopy.createEl("strong", { text: `已部署 / ${SKILLS.length} Skills` });
    overviewCopy.createSpan({ text: "create-only 安装，不覆盖已有 Skill；Codex 从知识库根目录发现本地能力。" });
    const meter = overview.createDiv({ cls: "wis-skill-meter" });
    meter.createDiv({ cls: "wis-skill-meter-fill", attr: { style: `width:${Math.round(data.installedSkills.length / SKILLS.length * 100)}%` } });
    const tabs = main.createDiv({ cls: "wis-skill-groups" });
    SKILL_GROUPS.forEach((group) => {
      const button = tabs.createEl("button", { cls: this.selectedGroup === group.id ? "is-active" : "" });
      button.createEl("strong", { text: group.name });
      button.createSpan({ text: String(SKILLS.filter((skill) => skill.group === group.id).length) });
      button.addEventListener("click", () => { this.selectedGroup = group.id; this.selectedSkill = SKILLS.find((skill) => skill.group === group.id)?.id; void this.render(); });
    });
    const layout = main.createDiv({ cls: "wis-skill-layout" });
    const catalog = layout.createDiv({ cls: "wis-skill-catalog" });
    SKILLS.filter((skill) => skill.group === this.selectedGroup).forEach((skill) => {
      const installed = data.installedSkills.includes(skill.id);
      const button = catalog.createEl("button", { cls: `wis-skill-card${this.selectedSkill === skill.id ? " is-selected" : ""}` });
      makeIcon(button, skill.icon);
      const text = button.createDiv();
      text.createEl("strong", { text: `/${skill.id}` });
      text.createSpan({ text: skill.name });
      button.createSpan({ text: installed ? "已部署" : "缺失", cls: installed ? "is-installed" : "is-missing" });
      button.addEventListener("click", () => { this.selectedSkill = skill.id; void this.render(); });
    });
    const skill = SKILLS.find((item) => item.id === this.selectedSkill) || SKILLS[0];
    const detail = layout.createEl("section", { cls: "wis-skill-detail" });
    const detailIcon = detail.createDiv({ cls: "wis-skill-detail-icon" });
    makeIcon(detailIcon, skill.icon);
    detail.createSpan({ text: `/${skill.id}`, cls: "wis-eyebrow" });
    detail.createEl("h2", { text: skill.name });
    detail.createEl("p", { text: skill.description });
    const contract = detail.createDiv({ cls: "wis-skill-contract" });
    contract.createEl("strong", { text: "共同工作合同" });
    ["读取 .fde/config.yaml", "关键判断附来源", "事实 / 推断 / 未知分开", "破坏性动作先预览确认"].forEach((item) => {
      const row = contract.createDiv();
      makeIcon(row, "check");
      row.createSpan({ text: item });
    });
    detail.createDiv({ text: `交付：${skill.output}`, cls: "wis-skill-output" });
    const detailActions = detail.createDiv({ cls: "wis-skill-detail-actions" });
    makeButton(detailActions, `填入 /${skill.id}`, "message-square-text", "is-primary", () => void this.prefillAssistantCommand(skill.id));
    makeButton(detailActions, "查看运行记录", "history", "is-secondary", async () => {
      this.assistantMode = "history";
      await this.render();
    });
  }
}

class FDEHealthView extends FDEBaseView {
  constructor(leaf, plugin) { super(leaf, plugin, "health"); }

  async renderMain(main, data) {
    const header = main.createDiv({ cls: "wis-page-header" });
    const copy = header.createDiv();
    copy.createSpan({ text: "FDE365 · 知识质量", cls: "wis-eyebrow" });
    copy.createEl("h1", { text: "知识体检" });
    copy.createEl("p", { text: "检查六库配置、来源、未知项、收件箱、内容阶段和本地 Skill。默认只报告，不替你选择业务事实。" });
    const actions = header.createDiv({ cls: "wis-header-actions" });
    makeButton(actions, "运行 /fde-health", "activity", "is-primary", () => this.service.runSkill("fde-health", "请对当前六类资产知识库做完整只读体检，按阻塞、要处理、提醒给出路径和证据。"));
    makeButton(actions, "补齐缺失模板", "folder-plus", "is-secondary", () => this.plugin.bootstrapService.ensure({ notify: true }));
    const score = Math.max(0, Math.round(100 - (1 - data.sourceCoverage) * 45 - Math.min(25, data.unknown * 3) - Math.min(15, data.stageConflicts.length * 5) - Math.min(15, data.missingPaths.length * 8)));
    const hero = main.createDiv({ cls: "wis-health-hero" });
    const ring = hero.createDiv({ cls: "wis-health-ring", attr: { style: `--wis-health:${score * 3.6}deg` } });
    ring.createEl("strong", { text: String(score) });
    ring.createSpan({ text: "健康度" });
    const heroCopy = hero.createDiv();
    heroCopy.createEl("h2", { text: score >= 80 ? "六库可以继续使用" : score >= 55 ? "知识库可用，但有明确缺口" : "先修结构和来源，再扩大使用" });
    heroCopy.createEl("p", { text: "健康度只基于当前本地证据，不生成模拟增长率或成功率。空库不会被判断为损坏。" });
    const heroMetrics = heroCopy.createDiv({ cls: "wis-health-hero-metrics" });
    heroMetrics.createSpan({ text: `来源覆盖 ${percent(data.sourceCoverage)}` });
    heroMetrics.createSpan({ text: `${data.unknown} 个待确认` });
    heroMetrics.createSpan({ text: `${data.pending.length} 份待处理` });
    heroMetrics.createSpan({ text: `${data.installedSkills.length}/${SKILLS.length} Skills` });
    const issues = main.createDiv({ cls: "wis-health-issues" });
    [
      { level: data.missingPaths.length ? "block" : "ok", title: "六库路径", value: data.missingPaths.length ? `${data.missingPaths.length} 个缺失` : "配置与目录存在", note: data.missingPaths[0] || `${ROOT}/.fde/config.yaml` },
      { level: data.sourceCoverage < 0.8 ? "warn" : "ok", title: "来源覆盖", value: percent(data.sourceCoverage), note: `${data.total - data.notes.filter((note) => note.source).length} 项资产没有可识别来源` },
      { level: data.unknown ? "warn" : "ok", title: "事实边界", value: `${data.unknown} 个待确认`, note: "待确认、待验证、未核实和当前推断保持显式分开" },
      { level: data.stageConflicts.length ? "block" : "ok", title: "内容阶段", value: data.stageConflicts.length ? `${data.stageConflicts.length} 个冲突` : "目录与字段一致", note: "一个文件同时只处于一个阶段" },
      { level: data.installedSkills.length < SKILLS.length ? "warn" : "ok", title: "项目 Skills", value: `${data.installedSkills.length}/${SKILLS.length}`, note: `${ROOT}/.agents/skills` },
    ].forEach((item) => {
      const card = issues.createDiv({ cls: `wis-health-issue is-${item.level}` });
      makeIcon(card, item.level === "ok" ? "circle-check-big" : item.level === "block" ? "octagon-alert" : "triangle-alert");
      const text = card.createDiv();
      text.createEl("strong", { text: item.title });
      text.createSpan({ text: item.note });
      card.createSpan({ text: item.value });
    });
    const table = main.createEl("section", { cls: "wis-panel wis-library-health" });
    const tableHead = table.createDiv({ cls: "wis-panel-head" });
    const title = tableHead.createDiv();
    title.createEl("h2", { text: "六库质量" });
    title.createSpan({ text: "来源、未知项和更新时间共同决定是否能复用" });
    data.libraries.forEach((library) => {
      const row = table.createDiv({ cls: "wis-library-health-row" });
      row.createSpan({ text: library.order, cls: `wis-library-code is-${library.color}` });
      const text = row.createDiv();
      text.createEl("strong", { text: library.name });
      text.createSpan({ text: library.count ? `${library.count} 项 · ${library.unknown} 待确认 · ${library.stale} 过期候选` : library.emptyAction });
      const meter = row.createDiv({ cls: "wis-health-meter" });
      meter.createDiv({ cls: `wis-health-meter-fill is-${library.color}`, attr: { style: `width:${library.score}%` } });
      row.createSpan({ text: `${library.score}` });
    });
  }
}

module.exports = {
  ROOT,
  configureKnowledgeRoot,
  VIEW_TYPES,
  LIBRARIES,
  CONTENT_STAGES,
  SKILLS,
  SKILL_GROUPS,
  FDEWorkspaceService,
  FDEDashboardView,
  FDEInboxView,
  FDELibrariesView,
  FDENetworkView,
  FDEContentView,
  FDESkillsView,
  FDEHealthView,
  parseConfigYaml,
  sourceFromContent,
  unknownFromContent,
  commandCompletionState,
  assistantHistoryTopic,
  isInboxClosurePrompt,
  markdownSection,
  frontmatterPaths,
  linkedPaths,
};
