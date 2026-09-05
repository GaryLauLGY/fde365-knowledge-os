const {
  Modal,
  Notice,
  TFile,
  normalizePath,
  setIcon,
} = require("obsidian");

let ROOT = "FDE365知识库";
const { canonicalSkillName, normalizeSkillMentions } = require("./skill-names.js");

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
  { id: "owner", order: "01", key: "owner", name: "个人说明书", short: "说明书", path: "1-个人说明书", icon: "fingerprint", color: "indigo", description: "身份、判断、表达习惯和不能公开的边界", emptyAction: "用 /建库采访 补齐本人原话与判断" },
  { id: "product", order: "02", key: "product", name: "产品库", short: "产品", path: "2-产品库", icon: "package-check", color: "blue", description: "产品、价格、承诺、交付内容和常见异议", emptyAction: "创建第一个产品事实文件" },
  { id: "customer", order: "03", key: "customer", name: "客户需求库", short: "客户", path: "3-客户需求库", icon: "messages-square", color: "cyan", description: "客户原话、问题、成交与未成交记录", emptyAction: "导入一次真实客户沟通" },
  { id: "case", order: "04", key: "case", name: "素材案例库", short: "案例", path: "4-素材案例库", icon: "archive", color: "orange", description: "事件、案例、数据、对话、动作和结果", emptyAction: "把一段经历整理成可追溯案例" },
  { id: "method", order: "05", key: "method", name: "方法论库", short: "方法", path: "5-方法论库", icon: "route", color: "violet", description: "使用过的方法、前置条件、步骤与失败信号", emptyAction: "沉淀一个已经实际使用的方法" },
  { id: "content", order: "06", key: "content", name: "内容生产", short: "内容", path: "6-内容生产", icon: "pen-tool", color: "pink", description: "从选题到已发布的内容生产闭环", emptyAction: "从六库材料生成第一个可追溯选题" },
]);

const CONTENT_STAGES = Object.freeze([
  { id: "选题", icon: "lightbulb", color: "indigo", description: "有来源、读者和核心问题" },
  { id: "草稿", icon: "file-pen-line", color: "blue", description: "正在写，尚未审核" },
  { id: "待审核", icon: "scan-search", color: "orange", description: "核对事实、表达和平台" },
  { id: "待发布", icon: "calendar-clock", color: "violet", description: "审核通过，等待发布" },
  { id: "已发布", icon: "send", color: "green", description: "流程终点：记录平台、链接和日期" },
]);

const CONTENT_STAGE_GATES = Object.freeze({
  选题: Object.freeze({
    next: "草稿",
    title: "草稿内容已经补全了吗？",
    description: "进入“草稿”前，请确认目标读者、目标平台、核心问题、来源和正文草稿已经补全。",
    requirements: ["目标读者与发布平台明确", "核心问题和来源已补全", "已经形成可继续修改的正文草稿"],
    skill: "内容写作",
    prompt: "请根据当前选题补全目标读者、平台、核心问题、来源与正文草稿。完成后先留在当前阶段，等我确认再推进。",
    incompleteLabel: "还没有，去对话补全",
  }),
  草稿: Object.freeze({
    next: "待审核",
    title: "草稿已经完成了吗？",
    description: "进入“待审核”前，请确认正文结构完整，必要素材已经写入，未核实项保持明确。",
    requirements: ["正文内容完整", "来源和引用已经补充", "未核实内容已经单独标记"],
    skill: "内容写作",
    prompt: "请继续补全当前草稿，检查正文完整度、来源和未核实项。完成后不要自动推进，等我确认再进入待审核。",
    incompleteLabel: "还没有，继续写作",
  }),
  待审核: Object.freeze({
    next: "待发布",
    title: "内容审核已经完成了吗？",
    description: "进入“待发布”前，请确认事实、表达和平台适配已经审核，并且阻塞发布的问题已经处理。",
    requirements: ["事实与来源已经核对", "表达和平台适配已经检查", "没有未处理的发布阻塞项"],
    skill: "内容审核",
    prompt: "请审核当前稿件的事实、来源、表达和平台适配，列出必须修改项。先给诊断，不要自动推进阶段。",
    incompleteLabel: "还没有，去对话审核",
  }),
  待发布: Object.freeze({
    next: "已发布",
    title: "内容已经真实发布了吗？",
    description: "“已发布”是内容流程终点。只有内容已经真实发布，并补充平台、链接和发布日期后才能进入。",
    requirements: ["内容已经在目标平台发布", "发布平台和链接已记录", "发布日期已经回填"],
    skill: "",
    prompt: "",
    incompleteLabel: "尚未发布，打开内容",
  }),
});

const SKILL_GROUPS = Object.freeze([
  { id: "entry", name: "开始与入库", description: "选择入口、采访、导入和体检" },
  { id: "business", name: "商业判断", description: "围绕产品、客户、证据和行动做判断" },
  { id: "content", name: "内容生产", description: "从选题、写作到审核、排版和复盘" },
  { id: "library", name: "知识库维护", description: "查找、整理、连接和安全维护" },
  { id: "state", name: "状态与决策", description: "保存、恢复、报告和回填决定" },
  { id: "method", name: "学习与讨论", description: "定义问题、组织讨论和短反馈循环" },
]);

const SKILLS = Object.freeze([
  { id: "开始使用", group: "entry", name: "开始使用", description: "读取六库状态，只选择一个当前入口并直接继续。", output: "任务路由", icon: "compass" },
  { id: "建库采访", group: "entry", name: "建库采访", description: "一次只问一个问题，保留原话、事实、推断和未知项。", output: "采访记录与分流建议", icon: "mic-2" },
  { id: "材料入库", group: "entry", name: "材料入库", description: "通读录音、聊天和旧文档，先出分流预览，确认后入库。", output: "分流预览", icon: "inbox" },
  { id: "导出会话", group: "entry", name: "导出会话", description: "导出用户明确选择的本地 Agent 会话并保留时间和来源。", output: "Markdown 会话", icon: "download" },
  { id: "知识体检", group: "entry", name: "知识体检", description: "检查配置、来源、收件箱、内容阶段和运行状态，默认只报告。", output: "体检报告", icon: "activity" },
  { id: "检查更新", group: "entry", name: "检查更新", description: "展示技能差异，确认后只更新技能，不改业务资产。", output: "更新差异", icon: "refresh-cw" },
  { id: "商业诊断", group: "business", name: "商业诊断", description: "用客户、产品、案例和交付记录诊断生意问题。", output: "事实、假设与验证项", icon: "stethoscope" },
  { id: "定义概念", group: "business", name: "定义概念", description: "把模糊词换成当前业务中可观察、可检查的定义。", output: "可观察定义", icon: "brackets" },
  { id: "明确目标", group: "business", name: "明确目标", description: "把愿望改成有对象、结果、边界、证据和时间的目标。", output: "目标合同", icon: "goal" },
  { id: "整理问题", group: "business", name: "整理问题", description: "把困惑整理成 Agent、员工或顾问可以处理的问题说明书。", output: "问题说明书", icon: "circle-help" },
  { id: "确定焦点", group: "business", name: "确定焦点", description: "识别当前约束，决定主动作、暂停项和观察项。", output: "焦点与暂停清单", icon: "focus" },
  { id: "推进一步", group: "business", name: "推进一步", description: "把推不动的任务缩成一个能产生真实反馈的动作。", output: "下一步动作", icon: "move-right" },
  { id: "内容写作", group: "content", name: "内容写作", description: "根据六类资产列证据和写作合同，再生成带来源草稿。", output: "草稿、来源与未核实项", icon: "pen-line" },
  { id: "生成选题", group: "content", name: "生成选题", description: "从客户原话、产品问题、案例、判断和方法中生成可追溯选题。", output: "选题清单", icon: "lightbulb" },
  { id: "内容审核", group: "content", name: "内容审核", description: "先核对事实和定位，再检查内容质量；默认只诊断不改稿。", output: "发布判断与修改顺序", icon: "scan-search" },
  { id: "设计开头", group: "content", name: "设计开头", description: "根据选题、读者和真实材料诊断并设计少量可用开头。", output: "开头方案", icon: "magnet" },
  { id: "生成标题", group: "content", name: "生成标题", description: "生成正文证据能够支持的标题，不扩大承诺。", output: "标题候选", icon: "heading" },
  { id: "检查表达", group: "content", name: "检查表达", description: "标记空泛判断、整齐模板、无来源事实和语气偏差。", output: "问题标记", icon: "spell-check-2" },
  { id: "检查段落", group: "content", name: "检查段落", description: "检查段间承接、跳步、重复和信息拥堵。", output: "段落诊断", icon: "git-branch" },
  { id: "读者匹配", group: "content", name: "读者匹配", description: "检查内容是否准确指向目标读者的处境、判断和行动。", output: "读者匹配诊断", icon: "target" },
  { id: "公众号排版", group: "content", name: "公众号排版", description: "把已确认 Markdown 转成公众号可粘贴 HTML，保持正文不变。", output: "微信公众号 HTML", icon: "code-xml" },
  { id: "传播复盘", group: "content", name: "传播复盘", description: "根据真实发布数据、评论和转发语境分析传播结果。", output: "传播复盘", icon: "radio-tower" },
  { id: "研究对标", group: "content", name: "研究对标", description: "围绕业务目标比较可观察做法并安排小实验，不复制人设。", output: "对标观察与实验", icon: "telescope" },
  { id: "查询知识", group: "library", name: "查询知识", description: "查找、收录、纠错和维护六类资产，每个结论返回来源。", output: "答案、来源与版本", icon: "library" },
  { id: "整理资产", group: "library", name: "整理资产", description: "检查重复、错库、来源和跨库关系，并用真实 Obsidian 双链连接已确认的资产。", output: "资产清单、关联预览与双链写入记录", icon: "list-tree" },
  { id: "项目设置", group: "library", name: "项目设置", description: "审计当前 Vault 的规则与技能真源，不连接本机客户端或改写全局配置。", output: "项目设置预览", icon: "wrench" },
  { id: "安全检查", group: "library", name: "安全检查", description: "只读检查外部命令、网络、敏感读取、隐藏指令和删除行为。", output: "安全报告", icon: "shield-check" },
  { id: "保存进度", group: "state", name: "保存进度", description: "保存目标、来源、完成项、未知项和下一步。", output: "任务状态", icon: "save" },
  { id: "恢复进度", group: "state", name: "恢复进度", description: "核对文件和事实变化后，恢复最近或指定任务。", output: "恢复检查与下一步", icon: "history" },
  { id: "整理报告", group: "state", name: "整理报告", description: "把同一任务的多次状态、决定和结果整理成带来源报告。", output: "Markdown 报告", icon: "file-chart-column" },
  { id: "记录决定", group: "state", name: "记录决定", description: "保存选项、证据、假设、风险、回填日期和真实结果。", output: "决策记录", icon: "scale" },
  { id: "多角度讨论", group: "method", name: "多角度讨论", description: "按职责组织 3—5 个视角，只使用库内事实和公开方法。", output: "多视角讨论", icon: "users" },
  { id: "交易分析", group: "method", name: "交易分析", description: "从价格、成本、选择、激励和信息差检查商业判断。", output: "交易结构分析", icon: "badge-dollar-sign" },
  { id: "边做边学", group: "method", name: "边做边学", description: "围绕工作问题先做、记录反馈、补一个知识点再继续。", output: "学习与反馈计划", icon: "graduation-cap" },
]);

function commandCompletionState(value, caret = String(value || "").length, limit = 8) {
  const text = String(value || "");
  const safeCaret = Math.max(0, Math.min(text.length, Number(caret) || 0));
  const beforeCaret = text.slice(0, safeCaret);
  const match = beforeCaret.match(/(?:^|\s)([/／][\p{L}\p{N}-]*)$/u);
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

function appendAssistantSkillCommand(draft, skillId) {
  const name = canonicalSkillName(skillId);
  if (!name) return String(draft || "");
  const command = `/${name}`;
  const current = normalizeSkillMentions(draft).replace(/\s+$/, "");
  return `${current}${current ? " " : ""}${command} `;
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

const INBOX_COMPLETION_MARKER = "<!-- FDE365_INBOX_COMPLETE -->";

function isInboxConfirmationPrompt(prompt) {
  const value = String(prompt || "").trim();
  return /(?:^|[，,。；;\s])(?:确认(?:并)?执行|确认|同意|批准|执行|开始执行|继续执行|执行入库|正式入库|可以写入|确认写入|完成处理|结案)(?:$|[，,。；;\s])/.test(value)
    || /(?:按|照).*(?:方案|预览).*(?:执行|入库|写入)/.test(value);
}

function hasInboxCompletionMarker(content) {
  return String(content || "").includes(INBOX_COMPLETION_MARKER);
}

function stripInboxCompletionMarker(content) {
  return String(content || "").replaceAll(INBOX_COMPLETION_MARKER, "").trim();
}

function hasInboxWriteEvidence(result) {
  return (Array.isArray(result?.toolEvents) ? result.toolEvents : []).some((event) => {
    if (event?.type === "file-change") return true;
    if (event?.type !== "command") return false;
    return /(?:\bapply_patch\b|\bsed\s+-i\b|\bperl\s+-pi\b|\btee\b|\b(?:cp|mv|touch|mkdir)\b|(?:^|[^>])>{1,2}(?![=>]))/.test(String(event.command || ""));
  });
}

function shouldCompleteInboxTurn(prompt, result) {
  return isInboxConfirmationPrompt(prompt)
    && hasInboxCompletionMarker(result?.content)
    && hasInboxWriteEvidence(result);
}

function assistantScrollTarget(state, scrollHeight, clientHeight) {
  if (!state) return null;
  const max = Math.max(0, Number(scrollHeight || 0) - Number(clientHeight || 0));
  if (state.stickToBottom) return max;
  return Math.max(0, Math.min(Number(state.top || 0), max));
}

const NAV_ITEMS = Object.freeze([
  { key: "dashboard", label: "总览", note: "六库状态", icon: "layout-dashboard" },
  { key: "inbox", label: "待处理", note: "原始材料", icon: "inbox" },
  { key: "libraries", label: "六类资产", note: "真源与版本", icon: "library" },
  { key: "network", label: "资产网络", note: "跨库关系", icon: "network" },
  { key: "content", label: "内容生产", note: "五阶段发布闭环", icon: "panels-top-left" },
  { key: "skills", label: "技能", note: `${SKILLS.length} 项工作流`, icon: "blocks" },
  { key: "health", label: "知识体检", note: "来源与冲突", icon: "activity" },
]);

function makeIcon(parent, name, cls = "") {
  const el = parent.createSpan({ cls: `wis-icon ${cls}`.trim() });
  setIcon(el, name);
  if (!el.querySelector("svg")) setIcon(el, "circle-help");
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
  const prompt = normalizeSkillMentions(frontmatter.user_prompt || frontmatter.task || "").trim();
  const sources = frontmatterPaths(frontmatter.source_files);
  if (/用户已明确选择以下[\s\S]*原始材料进行处理/.test(prompt) && sources.length) {
    const names = sources.slice(0, 2).map((path) => String(path).split("/").pop().replace(/\.md$/i, ""));
    return `处理 ${names.join("、")}${sources.length > 2 ? ` 等 ${sources.length} 份材料` : ""}`;
  }
  const normalized = prompt
    .replace(/^\s*[/／]([^\s]+)\s*/u, (match, name) => canonicalSkillName(name) ? "" : match)
    .replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, "$1")
    .replace(/[`*_>#-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (normalized) {
    const characters = Array.from(normalized);
    return characters.length > 34 ? `${characters.slice(0, 34).join("")}…` : normalized;
  }
  const skill = SKILLS.find((item) => item.id === canonicalSkillName(frontmatter.agent_id));
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

function materialPathValues(value) {
  if (Array.isArray(value)) return value.flatMap((item) => materialPathValues(item));
  const raw = String(value || "").trim();
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.flatMap((item) => materialPathValues(item));
  } catch (_) {
    // YAML scalar values are handled below.
  }
  const path = raw.replace(/^['"]|['"]$/g, "").trim();
  return path ? [normalizePath(path)] : [];
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
  constructor(app, title, description, actionLabel, onConfirm, options = {}) {
    super(app);
    Object.assign(this, { title, description, actionLabel, onConfirm, options });
  }

  onOpen() {
    this.contentEl.addClass("wis-modal");
    this.contentEl.createEl("h2", { text: this.title });
    this.contentEl.createEl("p", { text: this.description, cls: "wis-modal-note" });
    const actions = this.contentEl.createDiv({ cls: "wis-modal-actions" });
    makeButton(actions, "取消", "x", "is-secondary", () => this.close());
    makeButton(actions, this.actionLabel, this.options.icon || "arrow-right", this.options.danger ? "is-danger" : "is-primary", async () => {
      this.close();
      await this.onConfirm();
    });
  }
}

class ContentStageGateModal extends Modal {
  constructor(app, options) {
    super(app);
    this.options = options;
  }

  onOpen() {
    const root = this.contentEl;
    root.addClass("wis-modal");
    root.addClass("wis-stage-gate-modal");
    root.createEl("h2", { text: this.options.title });
    root.createEl("p", { text: this.options.description, cls: "wis-modal-note" });
    const checklist = root.createEl("ul", { cls: "wis-stage-gate-checklist" });
    (this.options.requirements || []).forEach((requirement) => {
      const item = checklist.createEl("li");
      makeIcon(item, "circle-help");
      item.createSpan({ text: requirement });
    });
    const actions = root.createDiv({ cls: "wis-modal-actions wis-stage-gate-actions" });
    makeButton(actions, "暂不推进", "x", "is-secondary", () => this.close());
    makeButton(actions, this.options.incompleteLabel, this.options.skill ? "messages-square" : "file-pen-line", "is-secondary", async () => {
      this.close();
      await this.options.onIncomplete();
    });
    makeButton(actions, `已完成，进入${this.options.next}`, "arrow-right", "is-primary", async () => {
      this.close();
      await this.options.onConfirm();
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
  constructor(app, selectedPaths, onConfirm) {
    super(app);
    this.selectedPaths = new Set((Array.isArray(selectedPaths) ? selectedPaths : [selectedPaths]).filter(Boolean));
    this.onConfirm = onConfirm;
  }

  onOpen() {
    const root = this.contentEl;
    root.addClass("wis-modal");
    root.addClass("wis-context-modal");
    root.createEl("h2", { text: "选择笔记" });
    root.createEl("p", { text: "可选择多篇笔记作为本次任务的上下文，FDE365 Agent 会一起读取。", cls: "wis-modal-note" });
    const search = root.createEl("input", {
      cls: "wis-modal-input",
      attr: { type: "search", placeholder: "按标题或路径搜索…", "aria-label": "搜索笔记" },
    });
    const list = root.createDiv({ cls: "wis-context-file-list" });
    const files = selectableAssistantFiles(this.app);
    let selectionSummary = null;
    let completeButton = null;
    const updateSelectionState = () => {
      if (selectionSummary) selectionSummary.setText(`已选 ${this.selectedPaths.size} 篇`);
      const label = completeButton?.querySelector(".wis-button-label");
      if (label) label.textContent = `完成选择 (${this.selectedPaths.size})`;
    };
    const render = () => {
      list.empty();
      const query = search.value.trim().toLowerCase();
      const matches = files.filter((file) => !query || `${file.basename} ${file.path}`.toLowerCase().includes(query)).slice(0, 80);
      if (!matches.length) list.createDiv({ text: "没有匹配的知识库笔记", cls: "wis-empty" });
      matches.forEach((file) => {
        const selected = this.selectedPaths.has(file.path);
        const row = list.createEl("button", {
          cls: `wis-context-file${selected ? " is-selected" : ""}`,
          attr: { type: "button", "aria-pressed": String(selected) },
        });
        makeIcon(row, selected ? "check-circle-2" : "file-text");
        const copy = row.createDiv();
        copy.createEl("strong", { text: file.basename });
        copy.createSpan({ text: file.path });
        row.addEventListener("click", () => {
          if (this.selectedPaths.has(file.path)) this.selectedPaths.delete(file.path);
          else this.selectedPaths.add(file.path);
          render();
        });
      });
      updateSelectionState();
    };
    search.addEventListener("input", render);
    const actions = root.createDiv({ cls: "wis-modal-actions" });
    selectionSummary = actions.createSpan({ cls: "wis-context-selection-count" });
    makeButton(actions, "清除选择", "x", "is-secondary", () => {
      this.selectedPaths.clear();
      render();
    });
    makeButton(actions, "取消", "x", "is-secondary", () => this.close());
    completeButton = makeButton(actions, "完成选择", "check", "is-primary", async () => {
      this.close();
      await this.onConfirm([...this.selectedPaths]);
    });
    render();
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
      title: "技能能力目录",
      excerpt: SKILLS.map((skill) => `- /${skill.id} · ${skill.name}: ${skill.description} 交付：${skill.output}`).join("\n"),
    };
  }

  matchingSkillIds(prompt) {
    const text = normalizeSkillMentions(prompt);
    const lower = text.toLowerCase();
    const matches = SKILLS.filter((skill) => lower.includes(skill.id)).map((skill) => skill.id);
    if (/(?:一键.*(?:出内容|成稿|写稿)|(?:出内容|成稿|写稿|写内容).*(?:skill|技能|工作流)|根据知识库写)/i.test(text)) matches.push("内容写作");
    return [...new Set(matches)];
  }

  async readSkillContract(skillId) {
    const name = canonicalSkillName(skillId);
    if (!name) return null;
    const path = this.skillPath(name);
    if (!await this.app.vault.adapter.exists(path)) return null;
    const raw = await this.app.vault.adapter.read(path);
    return {
      path,
      title: `${name} · 技能说明`,
      excerpt: String(raw || "").slice(0, 16000),
    };
  }

  async assistantRuntimeContext(prompt) {
    const text = String(prompt || "");
    const matchedSkills = this.matchingSkillIds(text);
    const needsSkills = matchedSkills.length > 0 || /(?:skill|技能|工作流|一键|出内容|成稿|写稿|写内容)/i.test(text);
    if (!needsSkills) return [];
    await this.reloadConfig();
    const context = [this.resolvedConfigContext()];
    for (const skillId of matchedSkills) {
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

  contentAnalyticsFiles() {
    const roots = [`${this.contentPath()}/发布数据/`, `${this.contentPath()}/数据复盘/`];
    return this.app.vault.getFiles()
      .filter((file) => roots.some((root) => file.path.startsWith(root)) && file.basename !== "README")
      .sort((a, b) => b.stat.mtime - a.stat.mtime);
  }

  assetFiles() {
    return this.app.vault.getMarkdownFiles().filter((file) => !this.isIgnoredAsset(file) && Boolean(this.libraryForFile(file)));
  }

  isInboxMaterialFile(file) {
    if (!(file instanceof TFile) || file.basename === "README" || file.path.includes("/原始文件/") || file.path.includes("/附件/")) return false;
    const type = String(frontmatterOf(this.app, file).type || "").trim().toLowerCase();
    if (type && type !== "inbox") return false;
    return !/(?:^|[-_—\s（(])(?:分流预览|分流记录|处理记录)(?:$|[-_—\s）)])/i.test(file.basename);
  }

  isCompletedInboxFile(file) {
    const status = String(frontmatterOf(this.app, file).status || "").trim().toLowerCase();
    return this.inboxRoots("processed").some((root) => file.path.startsWith(`${root}/`))
      || ["processed", "completed", "closed", "done", "已完成", "已处理", "结案"].includes(status);
  }

  pendingFiles({ includeCompleted = false } = {}) {
    const roots = this.inboxRoots("pending");
    return this.app.vault.getMarkdownFiles().filter((file) => roots.some((root) => file.path.startsWith(`${root}/`))
      && this.isInboxMaterialFile(file)
      && (includeCompleted || !this.isCompletedInboxFile(file)))
      .sort((a, b) => b.stat.mtime - a.stat.mtime);
  }

  processedFiles() {
    return this.materialFiles().filter((file) => this.isCompletedInboxFile(file));
  }

  materialFiles() {
    const roots = [...new Set([...this.inboxRoots("pending"), ...this.inboxRoots("processed")])];
    return [...new Map(this.app.vault.getMarkdownFiles()
      .filter((file) => roots.some((root) => file.path.startsWith(`${root}/`)) && this.isInboxMaterialFile(file))
      .map((file) => [file.path, file])).values()]
      .sort((a, b) => {
        const completionOrder = Number(this.isCompletedInboxFile(a)) - Number(this.isCompletedInboxFile(b));
        return completionOrder || b.stat.mtime - a.stat.mtime;
      });
  }

  async inboxOriginalFiles(file) {
    if (!(file instanceof TFile) || !this.isInboxMaterialFile(file)) return [];
    const content = await this.app.vault.cachedRead(file);
    const frontmatter = frontmatterOf(this.app, file);
    const yamlOriginals = [...String(content || "").matchAll(/^original_files?:\s*(.*?)\s*$/gmi)]
      .flatMap((match) => materialPathValues(match[1]));
    const candidates = [
      ...materialPathValues(frontmatter.original_file),
      ...materialPathValues(frontmatter.original_files),
      ...yamlOriginals,
    ];
    const roots = [...new Set([...this.inboxRoots("pending"), ...this.inboxRoots("processed")])];
    return [...new Map(candidates.map((path) => [normalizePath(path), normalizePath(path)])).values()]
      .filter((path) => roots.some((root) => path.startsWith(`${root}/`)) && /\/(?:原始文件|附件)\//.test(path))
      .map((path) => this.app.vault.getAbstractFileByPath(path))
      .filter((target) => target instanceof TFile);
  }

  async deleteInboxMaterials(files) {
    const records = [...new Map((files || [])
      .filter((file) => file instanceof TFile && this.isInboxMaterialFile(file))
      .map((file) => [file.path, file])).values()];
    if (!records.length) throw new Error("请选择要删除的原始材料");
    const originalGroups = await Promise.all(records.map((file) => this.inboxOriginalFiles(file)));
    const originals = [...new Map(originalGroups.flat().map((target) => [target.path, target])).values()];
    const targets = [...new Map([...records, ...originals].map((target) => [target.path, target])).values()];
    for (const target of targets) {
      if (typeof this.app.fileManager?.trashFile === "function") await this.app.fileManager.trashFile(target);
      else await this.app.vault.trash(target, true);
    }
    records.forEach((file) => this.inboxProcessing.delete(file.path));
    this.plugin.refreshDashboard?.();
    new Notice(`已将 ${records.length} 份材料记录和 ${originals.length} 个原始文件移入回收站`);
    return {
      records: records.map((file) => file.path),
      originals: originals.map((target) => target.path),
      deleted: targets.map((target) => target.path),
    };
  }

  async deleteInboxMaterial(file) {
    const result = await this.deleteInboxMaterials([file]);
    return { ...result, record: result.records[0] };
  }

  async completeInboxFiles(files, { markProcessed = true } = {}) {
    const materialRoots = [...new Set([...this.inboxRoots("pending"), ...this.inboxRoots("processed")])];
    const candidates = [...new Map((files || [])
      .filter((file) => file instanceof TFile && materialRoots.some((root) => file.path.startsWith(`${root}/`)) && this.isInboxMaterialFile(file))
      .map((file) => [file.path, file])).values()];
    const completedPaths = new Map();
    if (!candidates.length) return completedPaths;
    for (const file of candidates) {
      if (markProcessed) {
        const processedAt = new Date().toISOString();
        await this.app.vault.process(file, (content) => {
          let updated = String(content || "");
          if (/^status:\s*.*$/mi.test(updated)) updated = updated.replace(/^status:\s*.*$/mi, "status: processed");
          else if (/^---\s*\n/.test(updated)) updated = updated.replace(/^---\s*\n/, `---\nstatus: processed\n`);
          else updated = `---\nstatus: processed\nprocessed_at: ${processedAt}\n---\n\n${updated}`;
          if (/^processed_at:\s*.*$/mi.test(updated)) updated = updated.replace(/^processed_at:\s*.*$/mi, `processed_at: ${processedAt}`);
          else if (/^---\s*\n/.test(updated)) updated = updated.replace(/^---\s*\n/, `---\nprocessed_at: ${processedAt}\n`);
          updated = updated.replace(/^-\s*尚未运行 \/材料入库\s*$/mi, "- /材料入库 已处理完成");
          updated = updated.replace(/^-\s*是否处理[：:]\s*.*$/mi, "- 是否处理：已处理完成");
          return updated;
        });
      }
      const previous = this.inboxProcessing.get(file.path) || {};
      this.inboxProcessing.set(file.path, {
        ...previous,
        status: "processed",
        message: "已处理完成",
        processedAt: Date.now(),
        updatedAt: Date.now(),
      });
      completedPaths.set(file.path, file.path);
    }
    this.plugin.refreshDashboard?.();
    return completedPaths;
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
    const analyticsFiles = this.contentAnalyticsFiles();
    const analyticsNotes = contentItems.filter((note) => analyticsFiles.some((file) => file.path === note.file.path));
    const pending = this.pendingFiles();
    const processed = this.processedFiles();
    const materials = this.materialFiles();
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
      analyticsFiles,
      analyticsNotes,
      pending,
      processed,
      materials,
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
      const content = `---\ntype: inbox\nstatus: pending\nsource: dragged-file\noriginal_file: ${yamlValue(attachment.path)}\noriginal_name: ${yamlValue(sourceFile.name)}\nfile_type: ${yamlValue(sourceFile.type || "unknown")}\nfile_size: ${Number(sourceFile.size) || 0}\ncreated_at: ${createdAt}\nallowed_to_write: pending\n---\n\n# ${title}\n\n## 原始文件\n\n${reference}\n\n## 处理状态\n\n- 已收录到待处理\n- 尚未运行 /材料入库\n- 是否处理：等待用户决定\n\n## 待确认\n\n- 是否允许生成分流预览\n- 是否允许写入正式资产库\n`;
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

  async importContentAnalytics(files, contentNote = null) {
    const acceptedExtensions = new Set(["csv", "tsv", "json", "xlsx", "xls"]);
    const selected = [...(files || [])].filter((file) => {
      const extension = String(file?.name || "").split(".").pop()?.toLowerCase() || "";
      return file && acceptedExtensions.has(extension);
    });
    if (!selected.length) throw new Error("请选择 CSV、TSV、JSON、XLSX 或 XLS 数据文件");
    const owner = safeName(contentNote?.file?.basename || "未关联内容");
    const root = `${this.contentPath()}/发布数据/${owner}`;
    await ensureFolder(this.app, root);
    const imported = [];
    for (const sourceFile of selected) {
      const targetPath = await uniquePath(this.app, `${root}/${safeName(sourceFile.name)}`);
      const file = await this.app.vault.createBinary(targetPath, await sourceFile.arrayBuffer());
      imported.push(file);
    }
    return imported;
  }

  async advanceContent(note, options = {}) {
    const current = note.stage;
    const gate = CONTENT_STAGE_GATES[current?.id];
    const next = CONTENT_STAGES.find((stage) => stage.id === gate?.next);
    if (!gate || !next) return;
    new ContentStageGateModal(this.app, {
      ...gate,
      onIncomplete: async () => {
        if (typeof options.onIncomplete === "function") await options.onIncomplete(gate, note);
        else await this.openFile(note.file);
      },
      onConfirm: async () => {
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
    }).open();
  }

  skillSystemPrompt(skill) {
    return `你正在执行项目本地技能 /${skill.id}（${skill.name}）。\n\n${BASE_SKILL_RULES}\n${executionModeRule(this.plugin)}\n\n本技能的职责：${skill.description}\n要求交付：${skill.output}。\n插件已在请求前读取并附加解析后的 .fde/config.yaml、技能能力目录和 /${skill.id} 的本地 SKILL.md 合同。直接使用这些“本地运行上下文”，不要声称自己无法访问或尚未读取这些文件。`;
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

  async processInboxFiles(files, options = {}) {
    const selected = [...new Map((files || []).filter((file) => file?.path).map((file) => [file.path, file])).values()]
      .filter((file) => this.inboxProcessingState(file).status !== "running");
    if (!selected.length) return { status: "empty", task: null };

    const previousStates = selected.map((file) => this.inboxProcessingState(file));
    const conversationIds = [...new Set(previousStates.map((state) => state.conversationId).filter(Boolean))];
    const conversationId = Object.hasOwn(options, "sessionId")
      ? String(options.sessionId || "")
      : conversationIds.length === 1 ? conversationIds[0] : "";
    const previousConversation = conversationId
      ? previousStates.find((state) => state.conversationId === conversationId && Array.isArray(state.messages))
      : null;
    const messages = Array.isArray(options.messages) ? options.messages : previousConversation?.messages || [];
    const sourcePaths = selected.map((file) => file.path);
    const displayPrompt = `/材料入库\n\n处理待处理材料：${selected.map((file) => file.basename).join("、")}`;
    const fileList = selected.map((file) => `- ${file.path}`).join("\n");
    const agentPrompt = `用户已明确选择以下 ${selected.length} 份原始材料进行处理：\n${fileList}\n\n请先生成分流预览，保留原文，不要在未经确认时写入正式资产库。先单独标记录音、聊天、图片或文档等“材料形式”，再按证据建议一个或多个六类资产去向；归属不确定的内容留在待确认。`;
    this.setInboxProcessing(selected, "running", `正在用 /材料入库 处理 ${selected.length} 份材料`, {
      conversationId,
      sourcePaths,
      messages,
    });
    try {
      const task = await this.runSkill(
        "材料入库",
        agentPrompt,
        selected,
        {
          includeActive: false,
          sessionId: conversationId,
          onTaskStart: options.onTaskStart,
          onEvent: options.onEvent,
        },
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
          const latestMessage = messages.at(-1);
          if (latestMessage?.role !== "user" || latestMessage.content !== displayPrompt) messages.push({ role: "user", content: displayPrompt });
          messages.push({
            role: "assistant",
            content: resultContent || "分流预览已生成。请确认下一步要写入、修改，还是暂不处理。",
            provider: latest.result?.provider || "FDE365 Agent",
            model: latest.result?.model || "",
          });
        }
        this.setInboxProcessing(selected, "awaiting-confirmation", "等待确认", {
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
        return { status: "awaiting-confirmation", task, outputPath };
      }
      const failure = task?.error || task?.message || (task ? `任务状态：${task.status || "unknown"}` : "Agent 未启动，请检查本地 Codex 或 账号登录");
      this.setInboxProcessing(selected, "failed", `处理失败 · ${failure}`);
      return { status: "failed", task };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.setInboxProcessing(selected, "failed", `处理失败 · ${message}`);
      return { status: "failed", task: null, error };
    }
  }

  async runSkill(skillId, prompt, sourceFiles = [], options = {}) {
    const skill = SKILLS.find((item) => item.id === canonicalSkillName(skillId));
    if (!skill) throw new Error(`未知技能：${skillId}`);
    const active = this.app.workspace.getActiveFile();
    const sources = [...sourceFiles];
    if (options.includeActive !== false && active instanceof TFile && !sources.some((item) => item.path === active.path)) sources.push(active);
    const localContext = await this.skillRuntimeContext(skill);
    return this.plugin.executeAgent({
      id: skill.id,
      name: skill.name,
      description: skill.description,
      output: skill.output,
      systemPrompt: this.skillSystemPrompt(skill),
      localContext,
    }, prompt || skill.description, sources, {
      visibleConversation: true,
      sessionId: options.sessionId || "",
      onTaskStart: options.onTaskStart,
      onEvent: options.onEvent,
    });
  }
}

const createWorkspaceViews = require("./fde-workspace-views.js");
const {
  FDEWorkspaceView,
  FDEDashboardView,
  FDEInboxView,
  FDELibrariesView,
  FDENetworkView,
  FDEContentView,
  FDESkillsView,
  FDEHealthView,
} = createWorkspaceViews({
  getRoot: () => ROOT,
  VIEW_TYPES,
  LIBRARIES,
  CONTENT_STAGES,
  CONTENT_STAGE_GATES,
  SKILL_GROUPS,
  SKILLS,
  commandCompletionState,
  appendAssistantSkillCommand,
  BASE_SKILL_RULES,
  executionModeRule,
  INBOX_COMPLETION_MARKER,
  stripInboxCompletionMarker,
  shouldCompleteInboxTurn,
  assistantScrollTarget,
  NAV_ITEMS,
  makeIcon,
  makeButton,
  formatRelativeTime,
  assistantHistoryTopic,
  percent,
  parseConfigYaml,
  sourceFromContent,
  unknownFromContent,
  frontmatterOf,
  markdownSection,
  markdownBody,
  frontmatterPaths,
  linkedPaths,
  TextPromptModal,
  AssetModal,
  ConfirmActionModal,
  AssistantNotePickerModal,
  FDEWorkspaceService,
});

module.exports = {
  ROOT,
  configureKnowledgeRoot,
  VIEW_TYPES,
  LIBRARIES,
  CONTENT_STAGES,
  CONTENT_STAGE_GATES,
  SKILLS,
  SKILL_GROUPS,
  FDEWorkspaceService,
  FDEWorkspaceView,
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
  appendAssistantSkillCommand,
  assistantHistoryTopic,
  INBOX_COMPLETION_MARKER,
  isInboxConfirmationPrompt,
  hasInboxCompletionMarker,
  stripInboxCompletionMarker,
  hasInboxWriteEvidence,
  shouldCompleteInboxTurn,
  markdownSection,
  frontmatterPaths,
  linkedPaths,
  assistantScrollTarget,
};
