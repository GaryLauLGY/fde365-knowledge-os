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
  { id: "owner", order: "01", key: "owner", name: "老板说明书", short: "老板", path: "1-老板说明书", icon: "fingerprint", color: "indigo", description: "身份、判断、表达习惯和不能公开的边界", emptyAction: "用 /fde-interview 补齐老板原话与判断" },
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

const BASE_SKILL_RULES = [
  "从当前目录向上找到 .fde/config.yaml，并按配置解析六类资产库。",
  "只读取本任务需要的文件，不跨知识库搜索。",
  "严格区分库内事实、用户本轮信息、当前推断和未知项。",
  "关键判断附来源路径；没有来源的内容标为推断或待确认。",
  "原始材料不覆盖；移动、覆盖、删除和批量写入必须先给预览并等待用户确认。",
].join("\n");

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
  return app.metadataCache.getFileCache(file)?.frontmatter || {};
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
  }

  defaultConfig() {
    return {
      libraries: Object.fromEntries(LIBRARIES.map((item) => [item.key, item.path])),
      inbox: { recordings: "0-录音处理/待处理录音", processed: "0-录音处理/已处理" },
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
      this.config = {
        libraries: { ...defaults.libraries, ...(parsed.libraries || {}) },
        inbox: { ...defaults.inbox, ...(parsed.inbox || {}) },
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

  inboxPath(kind = "recordings") {
    return this.path(this.config.inbox[kind]);
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
        `待处理录音: ${this.inboxPath("recordings")}`,
        `已处理录音: ${this.inboxPath("processed")}`,
        `运行状态: ${this.path(this.config.runtime.state)}`,
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

  pendingFiles() {
    const root = this.inboxPath("recordings");
    return this.app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${root}/`) && file.basename !== "README");
  }

  processedFiles() {
    const root = this.inboxPath("processed");
    return this.app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${root}/`) && file.basename !== "README");
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
    const root = this.inboxPath("recordings");
    await ensureFolder(this.app, root);
    const date = new Date();
    const stamp = date.toISOString().replace(/[-:TZ]/g, "").slice(0, 12);
    const path = await uniquePath(this.app, `${root}/${stamp}-${safeName(title)}.md`);
    const file = await this.app.vault.create(path, `---\ntype: inbox\nstatus: pending\nsource: quick-note\ncreated_at: ${date.toISOString()}\nallowed_to_write: pending\n---\n\n# ${title}\n\n## 原始内容\n\n\n## 来源和参与人\n\n\n## 待确认\n\n- 是否允许写入正式资产库\n`);
    await this.openFile(file);
    new Notice("已保存到待处理；原始内容不会被自动覆盖");
    return file;
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
    return `你正在执行项目本地 Skill /${skill.id}（${skill.name}）。\n\n${BASE_SKILL_RULES}\n\n本 Skill 的职责：${skill.description}\n要求交付：${skill.output}。\n插件已在请求前读取并附加解析后的 .fde/config.yaml、FDE Skills 能力目录和 /${skill.id} 的本地 SKILL.md 合同。直接使用这些“本地运行上下文”，不要声称自己无法访问或尚未读取这些文件。`;
  }

  async runSkill(skillId, prompt, sourceFiles = []) {
    const skill = SKILLS.find((item) => item.id === skillId);
    if (!skill) throw new Error(`未知 Skill：${skillId}`);
    const active = this.app.workspace.getActiveFile();
    const sources = [...sourceFiles];
    if (active instanceof TFile && !sources.some((item) => item.path === active.path)) sources.push(active);
    const localContext = await this.skillRuntimeContext(skill);
    return this.plugin.executeAgent({
      id: skill.id,
      name: `/${skill.id}`,
      description: skill.description,
      output: skill.output,
      systemPrompt: this.skillSystemPrompt(skill),
      localContext,
    }, prompt || skill.description, sources);
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
      row.createSpan({ text: library.short });
      const meter = row.createDiv({ cls: "wis-mini-meter" });
      meter.createDiv({ cls: `wis-mini-meter-fill is-${library.color}`, attr: { style: `width:${library.score}%` } });
      row.createSpan({ text: String(library.count) });
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
    return this.app.vault.getMarkdownFiles()
      .filter((file) => roots.some((root) => file.path.startsWith(root)))
      .sort((a, b) => b.stat.mtime - a.stat.mtime)
      .slice(0, 12);
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
          const file = await this.plugin.saveAssistantOutput(message, `${this.getDisplayText()} · AI 对话`);
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
      bubble.createEl("strong", { text: this.assistantActivity.at(-1)?.label || "正在启动本地 Codex Agent…" });
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
    makeButton(parent, "查库 /fde-library", "sparkles", "is-secondary wis-assistant-wide-action", () => new TextPromptModal(this.app, {
      title: "运行 /fde-library",
      description: "查找时返回答案、来源和版本；新增或纠错前先展示目标文件。",
      placeholder: "你想从六类资产中查什么？",
      multiline: true,
      onSubmit: async (value) => this.service.runSkill("fde-library", value),
    }).open());
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
      button.addEventListener("click", () => new TextPromptModal(this.app, {
        title: `运行 /${skill.id}`,
        description: skill.description,
        placeholder: "描述这次要处理的真实任务…",
        multiline: true,
        submitLabel: "开始运行",
        onSubmit: async (value) => this.service.runSkill(skill.id, value),
      }).open());
    });
    makeButton(parent, "查看全部 35 个 FDE Skills", "blocks", "is-secondary wis-assistant-wide-action", () => this.plugin.router.navigate("skills"));
  }

  renderAssistantHistory(parent) {
    const intro = parent.createDiv({ cls: "wis-assistant-section-head" });
    intro.createEl("strong", { text: "本地协作历史" });
    intro.createSpan({ text: "显示已保存的 AI 回答和 FDE Skill 运行记录，不读取外部账号历史。" });
    const files = this.assistantHistoryFiles();
    const list = parent.createDiv({ cls: "wis-assistant-history" });
    if (!files.length) list.createDiv({ text: "还没有已保存的协作记录。对话回答可用“保存”写入本地。", cls: "wis-empty" });
    files.forEach((file) => {
      const meta = frontmatterOf(this.app, file);
      const button = list.createEl("button", { cls: "wis-assistant-history-item" });
      makeIcon(button, meta.type === "agent-run" ? "list-checks" : "message-square-text");
      const copy = button.createDiv();
      copy.createEl("strong", { text: file.basename });
      copy.createSpan({ text: [meta.provider, meta.model, formatRelativeTime(file.stat.mtime)].filter(Boolean).join(" · ") });
      button.addEventListener("click", () => this.service.openFile(file));
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
    const input = row.createEl("textarea", { attr: { placeholder: "问六类资产，或描述要推进的工作…", rows: "3", "aria-label": "交给 FDE365 Agent" } });
    input.value = this.assistantDraft;
    input.addEventListener("input", () => { this.assistantDraft = input.value; });
    const send = makeButton(row, this.assistantLoading ? "停止" : "发送", this.assistantLoading ? "square" : "arrow-up", this.assistantLoading ? "is-secondary" : "is-primary");
    const submit = async () => {
      if (this.assistantLoading) {
        if (this.assistantRequestId) this.plugin.cancelAgentRequest(this.assistantRequestId);
        return;
      }
      const prompt = input.value.trim();
      if (!prompt) return;
      this.assistantMode = "chat";
      this.assistantMessages.push({ role: "user", content: prompt });
      this.assistantDraft = "";
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
          systemPrompt: `你是独立于中间工作台页面的 FDE365 本地 Agent。\n${BASE_SKILL_RULES}\n插件可能会在“本地运行上下文”中附加已经读取的配置与 Skill 合同；直接使用这些内容。需要时使用本地工具检查 Vault，写入前说明目标并等待用户确认。`,
          sourceFiles: this.assistantContextFiles(),
          localContext: await this.service.assistantRuntimeContext(prompt),
          sessionId: this.assistantSessionId,
          onEvent: (event) => {
            this.assistantActivity = [...this.assistantActivity, event].slice(-8);
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
        if (this.plugin.settings.ai.assistant.autoSaveOutput) await this.plugin.saveAssistantOutput(message, `${this.getDisplayText()} · AI 对话`);
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
    const head = panel.createDiv({ cls: "wis-assistant-head" });
    const title = head.createDiv();
    title.createSpan({ text: "FDE365 AGENT", cls: "wis-eyebrow" });
    title.createEl("strong", { text: "对话 · FDE · Skills · 历史" });
    const capability = this.plugin.providerManager.describeSelected();
    const agentCapability = this.plugin.agentRuntime?.describe?.() || { available: false, error: "本地 Agent 未就绪" };
    const headActions = head.createDiv({ cls: "wis-assistant-head-actions" });
    const provider = headActions.createEl("button", {
      cls: `wis-provider-dot${capability.configured && capability.compatible && agentCapability.available ? " is-ready" : ""}`,
      attr: { title: ["FDE365 Codex Agent", capability.model, capability.error, agentCapability.error].filter(Boolean).join(" · ") },
    });
    provider.createSpan({ text: !capability.configured ? "配置 Token" : agentCapability.available ? capability.model : "缺少 Codex 组件" });
    provider.addEventListener("click", () => this.plugin.openSettings("ai"));
    const body = panel.createDiv({ cls: "wis-assistant-body" });
    body.createEl("p", { text: "本地 Codex Agent 可读取当前 Vault、运行 FDE Skills；写入前会向你确认。", cls: "wis-assistant-rule" });
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
}

class FDEDashboardView extends FDEBaseView {
  constructor(leaf, plugin) { super(leaf, plugin, "dashboard"); }

  async renderMain(main, data) {
    const hero = main.createEl("section", { cls: "wis-hero" });
    const copy = hero.createDiv();
    copy.createSpan({ text: "FDE365 · 六类资产", cls: "wis-eyebrow" });
    copy.createEl("h1", { text: "六类资产运营台" });
    copy.createEl("p", { text: "不按话题堆笔记。围绕老板、产品、客户、案例、方法和内容，持续保留真源与下一步。" });
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
      const text = row.createDiv();
      text.createEl("strong", { text: note.file.basename });
      text.createSpan({ text: `${note.library?.name || "资产"} · ${note.source ? `来源：${note.source}` : "缺少来源"}` });
      row.createSpan({ text: formatRelativeTime(note.file.stat.mtime) });
      row.addEventListener("click", () => this.service.openFile(note.file));
    });
  }
}

class FDEInboxView extends FDEBaseView {
  constructor(leaf, plugin) { super(leaf, plugin, "inbox"); }
  createQuickNote() {
    new TextPromptModal(this.app, {
      title: "快速记录原始材料",
      description: "先完整保留原始表达，之后再运行 /fde-ingest 分流。",
      placeholder: "给这份材料起一个可识别的标题…",
      onSubmit: async (value) => this.service.createQuickNote(value),
    }).open();
  }

  async renderMain(main, data) {
    const header = main.createDiv({ cls: "wis-page-header" });
    const copy = header.createDiv();
    copy.createSpan({ text: "FDE365 · 原始材料", cls: "wis-eyebrow" });
    copy.createEl("h1", { text: "待处理材料" });
    copy.createEl("p", { text: "录音、聊天、会议纪要和旧资料先保留原文；AI 只生成分流预览，确认后才写入六类资产。" });
    const actions = header.createDiv({ cls: "wis-header-actions" });
    makeButton(actions, "快速记录", "plus", "is-primary", () => this.createQuickNote());
    makeButton(actions, "运行 /fde-ingest", "sparkles", "is-secondary", () => this.service.runSkill("fde-ingest", "请通读待处理目录中的材料，生成分流预览。不要覆盖原始文件，不要在未经确认时写入正式资产库。", data.pending.slice(0, 6)));

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

    const list = main.createEl("section", { cls: "wis-panel" });
    const listHead = list.createDiv({ cls: "wis-panel-head" });
    const listTitle = listHead.createDiv();
    listTitle.createEl("h2", { text: "原始材料" });
    listTitle.createSpan({ text: "插件不会删除或用摘要替换这些文件" });
    if (!data.pending.length) list.createDiv({ text: "待处理目录是空的。可以快速记录，或把录音转写、聊天导出和会议纪要放进该目录。", cls: "wis-empty" });
    data.pending.forEach((file) => {
      const row = list.createDiv({ cls: "wis-inbox-row" });
      makeIcon(row, "file-audio", "is-orange");
      const text = row.createDiv();
      text.createEl("strong", { text: file.basename });
      text.createSpan({ text: `${formatRelativeTime(file.stat.mtime)} · 原始材料保留` });
      const actions = row.createDiv({ cls: "wis-row-actions" });
      makeButton(actions, "打开", "external-link", "is-text", () => this.service.openFile(file));
      makeButton(actions, "生成分流预览", "sparkles", "is-secondary", () => this.service.runSkill("fde-ingest", `请处理这份原始材料：${file.path}。先生成分流预览，不要直接写入正式资产。`, [file]));
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
    makeButton(toolbar, "查库 /fde-library", "sparkles", "is-secondary", () => new TextPromptModal(this.app, {
      title: "运行 /fde-library",
      description: "查找时返回答案、来源和版本；新增或纠错前先展示目标文件。",
      placeholder: "你想从六类资产中查什么？",
      multiline: true,
      onSubmit: async (value) => this.service.runSkill("fde-library", value),
    }).open());
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
    makeButton(actions, "从六库找选题", "sparkles", "is-secondary", () => this.service.runSkill("fde-topics", "请从客户原话、产品问题、案例结果、老板判断和方法资产中生成可追溯选题。"));
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
    const status = header.createDiv({ cls: `wis-provider-status${capability.configured ? " is-ready" : ""}` });
    makeIcon(status, capability.configured ? "circle-check-big" : "circle-alert");
    status.createSpan({ text: capability.configured ? `${capability.label} · ${capability.model || "默认模型"}` : "AI Provider 未配置" });
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
    makeButton(detailActions, `运行 /${skill.id}`, "play", "is-primary", () => new TextPromptModal(this.app, {
      title: `运行 /${skill.id}`,
      description: `${skill.description} 结果会保存在本地 AI 协作运行记录，等待人工验收。`,
      placeholder: "描述本次任务、目标和限制…",
      multiline: true,
      submitLabel: "开始运行",
      onSubmit: async (value) => this.service.runSkill(skill.id, value),
    }).open());
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
};
