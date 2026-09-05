const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { fileURLToPath } = require("node:url");
const Module = require("node:module");

class EmptyClass {}
const originalLoad = Module._load;
Module._load = function patchedLoad(request, parent, isMain) {
  if (request === "obsidian") {
    return {
      ItemView: EmptyClass,
      Modal: EmptyClass,
      Notice: EmptyClass,
      TFile: class TFile {},
      normalizePath: (value) => value.replace(/\\/g, "/").replace(/\/+/g, "/"),
      setIcon: () => {},
    };
  }
  return originalLoad.call(this, request, parent, isMain);
};

const {
  LIBRARIES,
  CONTENT_STAGES,
  CONTENT_STAGE_GATES,
  SKILLS,
  FDEWorkspaceService,
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
} = require("../fde-workspace.js");

assert.deepEqual(LIBRARIES.map((item) => item.id), ["owner", "product", "customer", "case", "method", "content"]);
assert.equal(LIBRARIES[0].name, "个人说明书");
assert.equal(LIBRARIES[0].short, "说明书");
assert.equal(LIBRARIES[0].path, "1-个人说明书");
assert.deepEqual(CONTENT_STAGES.map((item) => item.id), ["选题", "草稿", "待审核", "待发布", "已发布"]);
assert.equal(CONTENT_STAGE_GATES.选题.next, "草稿");
assert.equal(CONTENT_STAGE_GATES.选题.skill, "fde-write");
assert.equal(CONTENT_STAGE_GATES.草稿.next, "待审核");
assert.equal(CONTENT_STAGE_GATES.草稿.skill, "fde-write");
assert.equal(CONTENT_STAGE_GATES.待审核.next, "待发布");
assert.equal(CONTENT_STAGE_GATES.待审核.skill, "fde-review");
assert.equal(CONTENT_STAGE_GATES.待发布.next, "已发布");
assert.equal(CONTENT_STAGE_GATES.待发布.skill, "");
assert.equal(CONTENT_STAGE_GATES.已发布, undefined, "published content must be the terminal workflow stage");
assert.equal(SKILLS.length, 34);
assert.equal(new Set(SKILLS.map((item) => item.id)).size, 34);
assert.ok(SKILLS.every((skill) => skill.id.startsWith("fde-")), "all runtime Skill IDs must use the fde- namespace");
for (const required of ["fde-start", "fde-interview", "fde-ingest", "fde-library", "fde-write", "fde-review", "fde-health"]) {
  assert.ok(SKILLS.some((skill) => skill.id === required), `missing skill: ${required}`);
}
const workspaceService = new FDEWorkspaceService({ app: {} });
assert.deepEqual(workspaceService.matchingSkillIds("fde里有一键出内容的skill么"), ["fde-write"]);
assert.deepEqual(workspaceService.matchingSkillIds("运行 /fde-start"), ["fde-start"]);

const config = parseConfigYaml(`
libraries:
  owner: 1-个人说明书
  product: 2-产品库
inbox:
  pending: 0-待处理材料/待处理
  processed: 0-待处理材料/已处理记录
policy:
  preserve_raw_files: true
  allow_cross_project_read: false
`);
assert.equal(config.libraries.owner, "1-个人说明书");
assert.equal(config.inbox.pending, "0-待处理材料/待处理");
assert.equal(config.inbox.processed, "0-待处理材料/已处理记录");
assert.equal(config.policy.preserve_raw_files, true);
assert.equal(config.policy.allow_cross_project_read, false);

assert.equal(sourceFromContent("- 信息来源：访谈/客户A.md", {}), "访谈/客户A.md");
assert.equal(sourceFromContent("- 来源文件：待确认", {}), "");
assert.equal(sourceFromContent("", { source: "产品会议.md" }), "产品会议.md");
assert.equal(sourceFromContent("- 信息来源：\n\n## 下一节\n正文", {}), "");
assert.equal(unknownFromContent("## 已确认事实\n真实内容\n\n## 待确认\n- 价格\n- 交付日期\n"), 2);
assert.equal(unknownFromContent("## 待确认\n- \n"), 0);
assert.equal(markdownSection("---\ntype: agent-output\n---\n\n## 任务\n\n整理客户访谈\n\n## AI 输出\n\n分流完成", "任务"), "整理客户访谈");
assert.equal(markdownSection("## 任务\n\n整理客户访谈\n\n## AI 输出\n\n分流完成", "AI 输出"), "分流完成");
assert.deepEqual(frontmatterPaths('["FDE365知识库/0-待处理材料/待处理/page-01.md"]'), ["FDE365知识库/0-待处理材料/待处理/page-01.md"]);
assert.deepEqual(linkedPaths("- [[FDE365知识库/0-待处理材料/待处理/page-01]]"), ["FDE365知识库/0-待处理材料/待处理/page-01.md"]);

const partialCommand = commandCompletionState("/fd", 3);
assert.ok(partialCommand.matches.length > 1, "/fd must reveal multiple FDE command completions");
assert.ok(partialCommand.matches.every((skill) => skill.id.startsWith("fde-")), "command completion must only expose FDE Skills");
assert.equal(commandCompletionState("/fde-wri", 8).matches[0].id, "fde-write");
assert.equal(commandCompletionState("请帮我 /fd", 8), null, "slash completion must not hijack ordinary prose");
assert.equal(commandCompletionState("请帮我\n/fde-hea", 12).matches[0].id, "fde-health");
assert.equal(appendAssistantSkillCommand("", "fde-question"), "/fde-question ", "the first Skill must fill the empty composer normally");
assert.equal(appendAssistantSkillCommand("请整理这个问题", "fde-question"), "请整理这个问题 /fde-question ", "a Skill must append after the current draft instead of moving to the front");
assert.equal(appendAssistantSkillCommand("请整理这个问题 /fde-question ", "fde-decide"), "请整理这个问题 /fde-question /fde-decide ", "multiple Skill commands must accumulate in the same draft");
assert.equal(assistantHistoryTopic({ user_prompt: "/fde-write 写一篇产品发布说明" }), "写一篇产品发布说明");
assert.equal(assistantHistoryTopic({
  task: "用户已明确选择以下 1 份原始材料进行处理：\n- FDE365知识库/0-待处理材料/待处理/page-01.md",
  source_files: '["FDE365知识库/0-待处理材料/待处理/page-01.md"]',
}), "处理 page-01");
assert.equal(assistantHistoryTopic({ agent_id: "fde-ingest" }), "材料入库");
assert.equal(isInboxConfirmationPrompt("确认"), true);
assert.equal(isInboxConfirmationPrompt("确认并执行"), true);
assert.equal(isInboxConfirmationPrompt("按上面的预览方案执行入库"), true);
assert.equal(isInboxConfirmationPrompt("继续修改预览"), false);
assert.equal(hasInboxCompletionMarker(`全部步骤完成\n${INBOX_COMPLETION_MARKER}`), true);
assert.equal(hasInboxCompletionMarker("分流预览已生成，等待确认"), false);
assert.equal(stripInboxCompletionMarker(`全部步骤完成\n${INBOX_COMPLETION_MARKER}`), "全部步骤完成");
const completedInboxResult = { content: `全部步骤完成\n${INBOX_COMPLETION_MARKER}`, toolEvents: [{ type: "file-change", path: "FDE365知识库/3-客户需求库/客户.md" }] };
assert.equal(hasInboxWriteEvidence(completedInboxResult), true);
assert.equal(hasInboxWriteEvidence({ content: "完成", toolEvents: [{ type: "command", command: "rg 来源 FDE365知识库" }] }), false, "read-only commands are not completion evidence");
assert.equal(shouldCompleteInboxTurn("确认", completedInboxResult), true);
assert.equal(shouldCompleteInboxTurn("确认", { content: `全部步骤完成\n${INBOX_COMPLETION_MARKER}`, toolEvents: [] }), false, "a completion claim without a real write event must remain pending");
assert.equal(shouldCompleteInboxTurn("确认", { content: "分流预览已生成，等待确认", toolEvents: [{ type: "file-change" }] }), false, "writes without the completion marker must remain pending");
assert.equal(shouldCompleteInboxTurn("继续修改预览", completedInboxResult), false, "a completion marker cannot close a non-confirmation turn");
assert.equal(assistantScrollTarget({ top: 240, stickToBottom: false }, 1800, 600), 240, "a reader who scrolled upward must keep the same conversation position");
assert.equal(assistantScrollTarget({ top: 240, stickToBottom: true }, 1800, 600), 1200, "a reader already near the end must stay attached to new messages");
assert.equal(assistantScrollTarget({ top: 1400, stickToBottom: false }, 900, 600), 300, "a restored position must stay inside the new scroll range");

const source = readFileSync(fileURLToPath(new URL("../source.js", `file://${__filename}`)), "utf8");
for (const route of ["libraries", "network", "content", "skills", "health"]) {
  assert.match(source, new RegExp(`case ["']${route}["']:`), `router must accept new workspace route: ${route}`);
}

const workspaceSource = [
  readFileSync(fileURLToPath(new URL("../fde-workspace.js", `file://${__filename}`)), "utf8"),
  readFileSync(fileURLToPath(new URL("../fde-workspace-view-base.js", `file://${__filename}`)), "utf8"),
  readFileSync(fileURLToPath(new URL("../fde-workspace-views.js", `file://${__filename}`)), "utf8"),
].join("\n");
const organizeSkillSource = readFileSync(fileURLToPath(new URL("../vault-template/.agents/skills/fde-organize/SKILL.md", `file://${__filename}`)), "utf8");
const runSkillInAssistantSource = workspaceSource.match(/async runSkillInAssistant\(skillId, prompt, sourceFiles = \[\]\)[\s\S]*?\n\s+async prefillAssistantCommand/)?.[0] || "";
const processInboxViewSource = workspaceSource.match(/class FDEInboxView[\s\S]*?\n\s+async openProcessingConversation/)?.[0] || "";
const retiredAudienceTerm = String.fromCodePoint(0x8001, 0x677f);
assert.ok(!source.includes(retiredAudienceTerm), "plugin source must use neutral audience terminology");
assert.ok(!workspaceSource.includes(retiredAudienceTerm), "workspace source must use neutral audience terminology");
for (const feature of ["AssistantNotePickerModal", "ContentStageGateModal", "renderAssistantKnowledge", "renderAssistantSkills", "renderAssistantHistory"]) {
  assert.match(workspaceSource, new RegExp(feature), `unified assistant must include ${feature}`);
}
assert.doesNotMatch(workspaceSource, /AssistantProviderModal|codex-cli|claude-cli|openai-compatible/, "workspace must not expose alternative provider switching");
assert.match(workspaceSource, /登录账号/, "assistant must route unconfigured users to account settings");
assert.match(workspaceSource, /selectedNotes\.length \? `已选 \$\{selectedNotes\.length\} 篇` : "选择笔记"/, "note control must expose the number of selected context notes");
assert.match(workspaceSource, /this\.selectedPaths = new Set[\s\S]*?this\.selectedPaths\.has\(file\.path\)[\s\S]*?this\.selectedPaths\.delete\(file\.path\)[\s\S]*?this\.selectedPaths\.add\(file\.path\)/, "note picker rows must toggle multiple selections without closing the modal");
assert.match(workspaceSource, /makeButton\(actions, "完成选择"[\s\S]*?await this\.onConfirm\(\[\.\.\.this\.selectedPaths\]\)/, "note picker must confirm all selected note paths together");
assert.match(workspaceSource, /const preservedPaths = this\.assistantContextFiles\(\)[\s\S]*?!this\.isAssistantContextFile\(file\)[\s\S]*?this\.assistantSourcePaths = \[\.\.\.new Set\(\[\.\.\.selectedPaths\.slice\(1\), \.\.\.preservedPaths\]\)\]/, "changing selected notes must preserve uploaded non-note data context");
assert.doesNotMatch(workspaceSource, /AssistantContextModal|"添加上下文"/, "the shared composer must not expose the removed arbitrary-context picker");
assert.match(workspaceSource, /makeButton\(toolbar, "上传数据", "file-up"/, "the shared composer must replace arbitrary context with an explicit data-upload action");
assert.match(workspaceSource, /accept: "\.csv,\.tsv,\.json,\.xlsx,\.xls/, "data upload must be limited to supported analytics formats");
assert.match(workspaceSource, /this\.assistantDraft = `\/fde-spread/, "uploaded platform data must prefill the analysis Skill in the existing conversation");
assert.doesNotMatch(workspaceSource, /请先在FDE365知识库中打开一篇业务笔记/, "primary-note control must not require users to open a note before selecting it");
assert.match(source, /if \(scope !== "none" && !sourceFiles\.length\) addFile\(this\.app\.workspace\.getActiveFile\(\)\)/, "an explicitly selected note must replace rather than silently combine with the active editor note");
assert.doesNotMatch(source, /if \(scope === "none"[^\n]*return context/, "explicitly selected notes must still be sent when automatic context is disabled");
assert.match(workspaceSource, /plugin\.fdeAssistantSession \|\| \(plugin\.fdeAssistantSession = \{/, "all middle workspace views must share one plugin-level assistant session");
assert.match(workspaceSource, /captureAssistantScroll\(\);[\s\S]*?this\.contentEl\.empty\(\);[\s\S]*?restoreAssistantScroll\(\);/, "a full workspace render must preserve the right conversation scroll anchor");
assert.match(workspaceSource, /distanceFromBottom <= 32/, "conversation scrolling must distinguish readers at the end from readers reviewing older messages");
assert.doesNotMatch(workspaceSource, /focusAssistantConversation\(\)\s*\{[\s\S]{0,180}body\.scrollTop = body\.scrollHeight/, "ordinary sends must not force the conversation to a different scroll position");
assert.match(workspaceSource, /renderAssistantComposer\(panel\)[\s\S]*?wis-composer-submit-stack[\s\S]*?wis-agent-mode-select/, "the shared composer must place the execution-mode selector directly above Send");
assert.doesNotMatch(workspaceSource, /headActions\.createEl\("select"/, "the Agent header must not retain the execution-mode selector");
assert.match(workspaceSource, /modeSelect\.createEl\("option", \{ text: "YOLO"/, "the execution-mode selector must expose YOLO directly");
assert.match(workspaceSource, /executionModeRule\(this\.plugin\)/, "Skill and chat prompts must follow the selected execution mode");
assert.match(workspaceSource, /this\.assistantMode = id;\s*await this\.render\(\);/, "assistant tabs must only switch the visible surface and preserve the shared conversation session");
assert.match(workspaceSource, /commandCompletionState\(input\.value, caret\)/, "assistant composer must offer slash-command completion from the shared input");
assert.match(workspaceSource, /event\.key === "Tab" \|\| \(event\.key === "Enter"/, "slash-command completion must support keyboard filling");
assert.match(workspaceSource, /this\.assistantDraft = "";\s*input\.value = "";\s*closeCommandMenu\(\);\s*this\.assistantLoading = true;/, "sending must synchronously clear both the shared draft and the currently mounted textarea");
assert.match(workspaceSource, /shouldCompleteInboxTurn\(prompt, result\)\)[\s\S]*?completeInboxFiles\(pendingInboxSources\)/, "an inbox item may complete only after confirmation, the Agent completion marker and real write evidence");
assert.match(workspaceSource, /仅生成预览、等待确认、没有写入、部分完成或任一步骤失败时严禁输出该标记/, "the Agent contract must reserve the completion marker for fully executed inbox writes");
assert.doesNotMatch(workspaceSource.match(/async snapshot\(\)[\s\S]*?\n  async ensureDefaultOwnerProfile/)?.[0] || "", /reconcileCompletedInboxFiles/, "the inbox snapshot must not move or rewrite processed originals while rendering");
assert.match(workspaceSource, /bubble\.createEl\("strong", \{ text: "Agent 处理中…" \}\)/, "the shared Agent loading state must use one user-facing status");
assert.doesNotMatch(workspaceSource, /assistantActivity\.at\(-1\)\?\.label/, "the loading UI must never expose raw tool or shell activity labels");
assert.doesNotMatch(source, /class (?:InboxView|KnowledgeDashboardView|KnowledgeCenterView|KnowledgeGraphView|ProjectCenterView|AgentCenterView|KnowledgeAnalyticsView)\b/, "unregistered legacy workspace views must not remain in the plugin entrypoint");
assert.match(workspaceSource, /class FDEInboxView[\s\S]*?dropZone\.addEventListener\("drop"/, "inbox must expose a real file drop target");
assert.doesNotMatch(`${source}\n${workspaceSource}`, /VoiceCaptureModal|VoiceDictationModal|startVoiceCapture|transcribeAudio|new-ai-voice-note/, "the plugin must not retain a voice-input entrypoint or transcription runtime");
assert.doesNotMatch(workspaceSource, /makeButton\(actions, "AI 语音"/, "the inbox header must not expose voice input");
assert.match(workspaceSource, /只收录并保留原文，不会自动运行 Skill/, "drop target must tell users that importing does not run a Skill");
assert.match(workspaceSource, /pending: "0-待处理材料\/待处理"/, "the default inbox must be material-neutral rather than recording-specific");
assert.match(workspaceSource, /待处理材料: \$\{this\.inboxPath\("pending"\)\}/, "resolved Agent context must describe a generic pending-material inbox");
assert.doesNotMatch(`${source}\n${workspaceSource}`, /录音与灵感/, "inbox navigation must not present the universal inbox as a recording-only area");
assert.match(workspaceSource, /用 \/fde-ingest 处理/, "each pending item must leave Skill execution to an explicit user action");
assert.match(workspaceSource, /this\.selectedPaths = new Set\(\)/, "inbox must keep an explicit selection model for pending files");
assert.match(workspaceSource, /type: "checkbox", "aria-label": `选择 \$\{file\.basename\}`/, "every pending item must expose an accessible checkbox");
assert.match(workspaceSource, /批量处理\$\{processableSelectedFiles\.length/, "selected processable files must expose a scoped batch processing action");
assert.match(workspaceSource, /const batchReady = processableSelectedFiles\.length > 0;[\s\S]*?batchButton\.addClass\("is-ready"\)/, "a selected idle material must put the batch action into an explicit ready state");
assert.match(workspaceSource, /批量删除\$\{selectedFiles\.length[\s\S]*?confirmDeleteMaterials\(selectedFiles\)/, "selected original materials must expose a dedicated batch deletion action");
assert.match(workspaceSource, /status === "running"[\s\S]*?wis-processing-spinner/, "running inbox tasks must render a visible loading indicator");
assert.match(workspaceSource, /"success"[\s\S]*?"failed"/, "inbox processing must distinguish successful and failed runs");
assert.match(workspaceSource, /includeActive: false,[\s\S]{0,120}sessionId: conversationId,[\s\S]{0,180}onTaskStart: options\.onTaskStart/, "batch inbox processing must keep its sources scoped while exposing the visible Agent task");
assert.match(workspaceSource, /async openProcessingConversation\(state, file\)/, "completed inbox tasks must continue in the shared Agent conversation");
assert.match(workspaceSource, /this\.assistantSessionId = conversationId;/, "continuing an inbox task must resume the same Agent conversation when available");
assert.match(workspaceSource, /async processInboxFiles\(files, options = \{\}\)/, "inbox processing must accept the shared conversation bridge");
assert.match(processInboxViewSource, /this\.assistantLoading = true;[\s\S]*?await this\.render\(\);[\s\S]*?this\.service\.processInboxFiles\(selected/, "inbox processing must reveal the right conversation before starting the Agent");
assert.match(processInboxViewSource, /sessionId: conversationId,[\s\S]*?messages: this\.assistantMessages,[\s\S]*?onTaskStart/, "inbox processing must keep its visible messages and runtime thread together");
assert.match(workspaceSource, /previousConversation\?\.messages \|\| \[\]/, "a material conversation must preserve its visible message history across processing turns");
assert.match(workspaceSource, /const sameConversation = Boolean\(conversationId && this\.assistantSessionId === conversationId/, "opening the same material again must not reset the active conversation");
assert.match(source, /mode: "agent",[\s\S]*?sessionId: options\.sessionId \|\| ""/, "Agent Skill execution must pass an existing conversation ID to the runtime");
assert.match(workspaceSource, /visibleConversation: true,[\s\S]{0,100}sessionId: options\.sessionId \|\| ""/, "the shared conversation bridge must explicitly authorize visible Agent execution");
assert.match(source, /if \(options\.visibleConversation !== true\)[\s\S]{0,160}请从右侧 FDE365 Agent 对话启动任务/, "the runtime entrypoint must reject hidden or legacy background Agent launches");
assert.match(workspaceSource, /makeButton\(actions, "查看处理对话", "messages-square"/, "completed inbox tasks with a saved Agent run must expose the corresponding conversation action");
assert.doesNotMatch(workspaceSource, /查看分流预览[\s\S]{0,200}openFile\(state\.outputPath\)/, "completed inbox tasks must not send users into a Markdown output file to continue the workflow");
assert.doesNotMatch(workspaceSource, /state\.status === "success" && state\.preview/, "completed inbox tasks must not add a routing-preview block to the original-material list");
assert.match(workspaceSource, /async openAssistantHistory\(file\)/, "history items must restore a conversation rather than open a Markdown file");
assert.match(workspaceSource, /this\.assistantSessionId = String\(outputMeta\.conversation_id \|\| runMeta\.conversation_id \|\| ""\)/, "history restoration must recover the saved Agent conversation ID");
assert.match(workspaceSource, /button\.addEventListener\("click", \(\) => void this\.openAssistantHistory\(file\)\)/, "clicking a history item must return to the shared conversation surface");
assert.match(workspaceSource, /copy\.createEl\("strong", \{ text: topic \}\)/, "assistant history must show a conversation topic instead of its backing archive filename");
assert.doesNotMatch(workspaceSource, /renderAssistantHistory\(parent\)[\s\S]*?copy\.createEl\("strong", \{ text: file\.basename \}\)/, "assistant history must keep backing archive filenames out of the visible title");
assert.doesNotMatch(workspaceSource, /renderAssistantHistory\(parent\)[\s\S]*?button\.addEventListener\("click", \(\) => this\.service\.openFile\(file\)\)/, "history items must not open their backing Markdown archive");
assert.match(source, /conversation_id: \$\{yamlQuote\(conversationId\)\}[\s\S]*?source_files: \$\{JSON\.stringify\(sourceFiles\)\}[\s\S]*?user_prompt: \$\{yamlQuote\(prompt\)\}/, "saved assistant history must retain the conversation ID, source context and user prompt needed for restoration");
assert.doesNotMatch(source, /请在 FDE365 右侧栏“历史”查看输出/, "completed tasks must not force users to hunt for results in history");
assert.doesNotMatch(workspaceSource, /async onClose\(\) \{\s*if \(this\.assistantRequestId\)/, "switching or closing a middle workspace view must not cancel the shared assistant request");
assert.match(workspaceSource, /pageSkills\(\) \{\s*return \["fde-start", "fde-library", "fde-write"\];/, "assistant quick Skills must be independent from the middle workspace page");
assert.doesNotMatch(workspaceSource, /当前页面：\$\{this\.pageKey\}/, "assistant identity must not change with the middle workspace page");
assert.match(workspaceSource, /async prefillAssistantCommand\(skillId\)/, "Skill buttons must share one composer-prefill interaction");
assert.match(workspaceSource, /if \(!el\.querySelector\("svg"\)\) setIcon\(el, "circle-help"\);/, "unknown Obsidian icons must fall back instead of leaving an empty tile");
assert.match(workspaceSource, /label: "缺少来源"[\s\S]{0,180}icon: "link"/, "missing-source quality issues must use an available link icon");
assert.match(workspaceSource, /async runSkillInAssistant\(skillId, prompt, sourceFiles = \[\]\)/, "dashboard Skill launches must have a shared-conversation bridge");
assert.match(workspaceSource, /this\.assistantMode = "chat";[\s\S]*?this\.assistantLoading = true;[\s\S]*?await this\.render\(\);[\s\S]*?this\.service\.runSkill\(skill\.id/, "the conversation must become visible before the Skill begins running");
assert.doesNotMatch(runSkillInAssistantSource, /this\.assistantSessionId = ""/, "page actions must never silently replace the current Agent conversation");
assert.match(runSkillInAssistantSource, /this\.assistantMessages\.push\([\s\S]*?sessionId: this\.assistantSessionId/, "page actions must append to and resume the current Agent conversation");
assert.equal((workspaceSource.match(/this\.assistantSessionId = "";/g) || []).length, 1, "only the explicit New conversation control may clear the active runtime thread");
assert.match(workspaceSource, /fresh\.disabled = this\.assistantLoading;/, "New conversation must stay disabled until the active turn finishes or is stopped");
assert.doesNotMatch(workspaceSource, /makeButton\([^\n]+this\.service\.runSkill/, "visible page actions must never launch a hidden background Skill conversation");
assert.match(workspaceSource, /makeButton\(signal, "运行 \/fde-start"[\s\S]*?this\.runSkillInAssistant\("fde-start"/, "the dashboard start action must open its Agent conversation while running");
for (const skillId of ["fde-organize", "fde-topics", "fde-review", "fde-health"]) {
  assert.match(workspaceSource, new RegExp(`runSkillInAssistant\\("${skillId}"`), `/${skillId} page actions must use the visible shared conversation`);
}
assert.match(workspaceSource, /"整理关联"[\s\S]*?真实 Obsidian \[\[双链\]\][\s\S]*?不要创建 Canvas 或 Canva 预览/, "the asset-network action must request real reciprocal Wikilinks instead of a Canvas preview");
assert.match(organizeSkillSource, /## 跨库双链模式/, "fde-organize must define a dedicated cross-library linking mode");
assert.match(organizeSkillSource, /两端 Markdown 笔记[\s\S]*?\[\[完整\/Vault\/相对路径\|标题\]\]/, "fde-organize must write the confirmed relationship into both Markdown notes");
assert.match(organizeSkillSource, /不创建 `\.canvas`、Canvas 或 Canva 预览/, "fde-organize must not substitute a visual canvas for real Obsidian links");
assert.match(workspaceSource, /CONTENT_STAGE_GATES\[stage\.id\][\s\S]*?"确认推进"/, "content cards must gate every non-terminal stage transition");
assert.match(workspaceSource, /class ContentStageGateModal[\s\S]*?makeIcon\(item, "circle-help"\)/, "stage requirements must appear as unanswered checks rather than pre-approved results");
assert.doesNotMatch(workspaceSource.match(/class ContentStageGateModal[\s\S]*?\n}\n\nfunction selectableAssistantFiles/)?.[0] || "", /makeIcon\(item, "circle-check"\)/, "stage requirements must not imply that the system already verified them");
assert.match(workspaceSource, /草稿内容已经补全了吗/, "topic-to-draft must explicitly confirm that content is complete");
assert.match(workspaceSource, /草稿已经完成了吗/, "draft-to-review must explicitly confirm that the draft is complete");
assert.match(workspaceSource, /内容审核已经完成了吗/, "review-to-publish must explicitly confirm that review is complete");
assert.match(workspaceSource, /内容已经真实发布了吗/, "publish completion must require a real publication record");
assert.match(workspaceSource, /prefillContentStageSkill\(currentNote, gate\)/, "an incomplete stage must route its Skill into the visible shared conversation");
assert.match(workspaceSource, /stage\.id === "已发布"[\s\S]*?"上传数据分析"/, "published content must offer optional data analysis without another workflow stage");
assert.doesNotMatch(workspaceSource, /id: "数据复盘"/, "data review must not remain a directly advanceable content stage");
assert.match(source, /if \(typeof options\.onTaskStart === "function"\) options\.onTaskStart\(task\);/, "Agent execution must expose its task ID as soon as the run is created");
assert.match(source, /mode: "agent",[\s\S]*?onEvent: options\.onEvent/, "Agent execution must forward live activity into the visible conversation");
assert.match(workspaceSource, /this\.assistantMode = "chat";[\s\S]*?this\.assistantDraft = appendAssistantSkillCommand\(this\.assistantDraft, skillId\);/, "prefilling a Skill must switch to chat and append its command to the shared draft");
assert.doesNotMatch(workspaceSource, /current\.replace\(\/\^\\\/fde-/, "prefilling another Skill must never replace an earlier command");
assert.match(workspaceSource, /button\.addEventListener\("click", \(\) => void this\.prefillAssistantCommand\(skill\.id\)\)/, "right-side Skill cards must prefill rather than execute immediately");
assert.match(workspaceSource, /填入 \/\$\{skill\.id\}/, "the central Skill detail action must communicate that it fills the shared chat composer");
assert.doesNotMatch(workspaceSource, /renderAssistantSkills\(parent\)[\s\S]*?button\.addEventListener\("click", \(\) => new TextPromptModal/, "right-side Skill cards must not open a second prompt modal");

const styles = readFileSync(fileURLToPath(new URL("../styles.css", `file://${__filename}`)), "utf8");
assert.match(styles, /button\.wis-library-tab[\s\S]*?height:\s*auto\s*!important/, "library tabs must override native fixed button height");
assert.match(styles, /\.wis-asset-card-top[\s\S]*?gap:\s*9px/, "asset card sequence and library name must retain spacing");
assert.match(styles, /\.wis-assistant-tabs/, "unified assistant must expose workspace tabs");
assert.match(styles, /\.wis-assistant-tabs\s*\{[\s\S]*?position:\s*sticky;[\s\S]*?top:\s*0;[\s\S]*?z-index:\s*6;/, "assistant workspace tabs must remain pinned above a scrolling conversation");
assert.match(styles, /\.wis-view-content\s*\{[\s\S]*?container-type:\s*inline-size/, "workspace must query the Obsidian leaf width");
assert.match(styles, /@container wis-view \(max-width:\s*1450px\)[\s\S]*?\.wis-library-grid\s*\{[\s\S]*?repeat\(2,\s*minmax\(0,\s*1fr\)\)/, "dashboard libraries must become two columns in a squeezed leaf");
assert.match(styles, /\.wis-hero,[\s\S]*?\.wis-page-header\s*\{[\s\S]*?flex-wrap:\s*wrap;/, "dashboard header controls must wrap when a resized Agent panel narrows the middle workspace");
assert.match(styles, /\.wis-today-signal\s*\{[\s\S]*?grid-template-columns:\s*28px minmax\(0,\s*1fr\) auto;[\s\S]*?width:\s*min\(100%,\s*440px\);[\s\S]*?max-width:\s*100%;/, "dashboard signal must keep icon, status and action on one intrinsically safe row");
assert.match(styles, /\.wis-today-signal\s*>\s*\.wis-button\s*\{[\s\S]*?grid-column:\s*3;[\s\S]*?justify-self:\s*end;[\s\S]*?white-space:\s*nowrap;/, "dashboard signal action must stay on the same row without wrapping");
assert.match(styles, /\.wis-today-signal\s*>\s*div strong\s*\{[\s\S]*?text-overflow:\s*ellipsis;[\s\S]*?white-space:\s*nowrap;/, "dashboard signal status must truncate instead of forcing the action onto another row");
assert.match(styles, /\.wis-pipeline-summary\s*\{[\s\S]*?grid-template-rows:\s*auto minmax\(0,\s*1fr\)/, "dashboard content pipeline must reserve a centered track region beneath its header");
assert.match(styles, /\.wis-pipeline-summary \.wis-stage-track\s*\{[\s\S]*?align-self:\s*center/, "dashboard content stages must stay vertically centered inside their panel");
assert.match(styles, /\.wis-command-menu\s*\{[\s\S]*?position:\s*absolute;[\s\S]*?bottom:\s*calc\(100% \+ 6px\)/, "slash-command suggestions must float above the shared composer without resizing the conversation");
assert.match(styles, /\.wis-composer-submit-stack\s*\{[\s\S]*?flex-direction:\s*column;[\s\S]*?width:\s*76px;/, "execution mode and Send must form one stable vertical action stack");
assert.match(styles, /\.wis-agent-mode-select\s*\{[\s\S]*?padding:\s*4px 8px;[\s\S]*?text-align:\s*center;[\s\S]*?text-align-last:\s*center;/, "execution-mode text must stay centered inside its pill");
assert.match(styles, /\.wis-message-content\s*\{[\s\S]*?user-select:\s*text !important;/, "conversation text must remain selectable for native copying");
assert.match(workspaceSource, /MarkdownRenderer\.render\([\s\S]*?this\.assistantMarkdownSourcePath\(\)[\s\S]*?this\.assistantMarkdownOwner \|\| this/, "assistant answers must use Obsidian's lifecycle-owned Markdown renderer with a link-resolution source path");
assert.match(workspaceSource, /message\.role !== "assistant" \|\| message\.error[\s\S]*?content\.setText/, "user and error messages must remain plain text");
assert.match(workspaceSource, /resetAssistantMarkdownOwner\(\)[\s\S]*?this\.removeChild\(this\.assistantMarkdownOwner\)[\s\S]*?this\.addChild\(this\.assistantMarkdownOwner\)/, "assistant Markdown render resources must be replaced with the current workspace render lifecycle");
assert.match(workspaceSource, /await this\.renderAssistant\(app, data\);[\s\S]*?this\.restoreAssistantScroll\(\);/, "assistant scroll restoration must wait until Markdown layout completes");
assert.match(styles, /\.wis-message-content\.is-markdown-rendered\s*\{[\s\S]*?white-space:\s*normal;/, "rendered Markdown must override the plain-text pre-wrap layout");
assert.match(styles, /\.wis-message-content\.is-markdown-rendered pre,[\s\S]*?table\s*\{[\s\S]*?overflow:\s*auto;/, "wide Markdown code blocks and tables must scroll within the Agent panel");
assert.match(styles, /\.wis-assistant-resize-handle\s*\{[\s\S]*?cursor:\s*col-resize;/, "the right Agent panel must expose a dedicated resize handle");
assert.match(styles, /grid-template-columns:\s*196px minmax\(0,\s*1fr\) minmax\(280px,\s*var\(--wis-assistant-width,\s*336px\)\)/, "the desktop workspace must consume the persisted Agent panel width");
assert.match(styles, /\.wis-inbox-dropzone\s*\{[\s\S]*?grid-template-columns:\s*46px minmax\(0,\s*1fr\) auto;[\s\S]*?border:\s*1px dashed/, "inbox drop target must be a clear full-width collection surface");
assert.match(styles, /\.wis-inbox-row\s*\{[\s\S]*?grid-template-columns:\s*18px 36px minmax\(0,\s*1fr\) auto;[\s\S]*?grid-template-areas:\s*"select icon copy actions"/, "pending rows must reserve stable named areas for the checkbox, icon, copy and actions");
assert.match(styles, /\.wis-inbox-processing-status\s*\{[\s\S]*?gap:\s*7px;[\s\S]*?min-height:\s*20px/, "processing status icons and text must retain readable separation");
assert.match(styles, /\.wis-note-row\s*\{[\s\S]*?height:\s*auto\s*!important;[\s\S]*?min-height:\s*58px;[\s\S]*?padding:\s*9px 4px;/, "recent asset rows must override Obsidian's fixed button height and preserve two readable text lines");
assert.match(styles, /\.wis-note-row-meta\s*\{[\s\S]*?text-overflow:\s*ellipsis;[\s\S]*?white-space:\s*nowrap;/, "recent asset source paths must truncate instead of compressing the row");
assert.match(styles, /\.wis-pulse-row\s*\{[\s\S]*?grid-template-columns:\s*21px 42px minmax\(28px,\s*1fr\) 18px;/, "library pulse labels must reserve enough width for three Chinese characters before the meter");
assert.match(styles, /\.wis-pulse-label\s*\{[\s\S]*?text-overflow:\s*ellipsis;[\s\S]*?white-space:\s*nowrap;/, "library pulse labels must not overlap the progress meter");
assert.match(styles, /\.wis-processing-spinner\s*\{[\s\S]*?animation:\s*wis-inbox-spin/, "running inbox tasks must animate a dedicated loading spinner");
assert.doesNotMatch(styles, /wis-voice-|akos-dictation-|akos-capture-card\.is-recording/, "voice-input-only styles must be removed with the feature");
assert.match(styles, /\.wis-inbox-processing-status\.is-success\s*\{\s*color:\s*var\(--wis-green\)/, "successful inbox tasks must use a restrained success state");
assert.match(styles, /\.wis-inbox-processing-status\.is-failed\s*\{\s*color:\s*var\(--wis-danger\)/, "failed inbox tasks must use a clear failure state");
assert.match(workspaceSource, /card\.createSpan\(\{ text: item\.value, cls: "wis-health-issue-value" \}\)/, "health issue values must use a dedicated grid class instead of colliding with icons");
assert.match(styles, /\.wis-health-issue > \.wis-icon\s*\{[\s\S]*?grid-column:\s*1;[\s\S]*?grid-row:\s*1;/, "health issue icons must stay in their own grid cell");
assert.match(styles, /\.wis-health-issue > div\s*\{[\s\S]*?grid-column:\s*2;[\s\S]*?grid-row:\s*1;/, "health issue titles must retain the full text column");
assert.match(styles, /\.wis-health-issue strong\s*\{[\s\S]*?white-space:\s*nowrap;/, "health issue titles must never collapse into vertical Chinese text");
assert.match(styles, /\.wis-health-issue-value\s*\{[\s\S]*?grid-column:\s*1 \/ -1;[\s\S]*?grid-row:\s*2;/, "health issue values must occupy their own full-width row");
assert.doesNotMatch(styles, /\.wis-health-issue > span\s*\{/, "health issue layout must not apply value placement to the icon span");
assert.doesNotMatch(workspaceSource, /createEl\([^\n]*wis-inbox-result-preview/, "routing previews must not render as a second block beneath an original material row");
assert.match(workspaceSource, /captureMainScroll\(\)[\s\S]*?this\.contentEl\.empty\(\)[\s\S]*?restoreMainScroll\(\)/, "workspace rerenders must restore the middle-panel scroll position");
assert.match(workspaceSource, /main\.addEventListener\("scroll", \(\) => \{ this\.mainScrollTop = main\.scrollTop; \}/, "workspace must continuously retain the middle-panel scroll position");
assert.match(workspaceSource, /async inboxOriginalFiles\(file\)[\s\S]*?inboxRoots\("pending"\)[\s\S]*?inboxRoots\("processed"\)[\s\S]*?\/(?:\\\/)?\(\?:原始文件\|附件\)/, "material deletion must resolve originals only inside inbox attachment folders");
assert.match(workspaceSource, /async deleteInboxMaterials\(files\)[\s\S]*?Promise\.all\(records\.map[\s\S]*?fileManager\?\.trashFile[\s\S]*?vault\.trash/, "confirmed batch deletion must use Obsidian trash for all records and their scoped original files");
assert.match(workspaceSource, /删除选中的 \$\{candidates\.length\} 份原始材料？[\s\S]*?正式资产、处理记录和 Agent 对话不会删除[\s\S]*?批量删除 \(\$\{candidates\.length\}\)[\s\S]*?danger:\s*true/, "batch deletion must require a destructive confirmation that explains its exact non-cascading boundary");
assert.match(workspaceSource, /makeButton\(actions, "删除", "trash-2", "is-danger"/, "every material row must expose a clearly destructive delete action");
assert.doesNotMatch(workspaceSource, /markMaterialProcessed|"标记已处理"/, "processed inbox state must be automatic rather than another manual action");
const processInboxFilesSource = workspaceSource.match(/async processInboxFiles\(files, options = \{\}\)[\s\S]*?\n\s+async runSkill\(/)?.[0] || "";
assert.match(processInboxFilesSource, /this\.setInboxProcessing\(selected, "awaiting-confirmation", "等待确认"/, "the first fde-ingest turn must stop at the confirmation gate");
assert.doesNotMatch(processInboxFilesSource, /completeInboxFiles\(/, "generating a routing preview must never mark an original material processed");
assert.match(workspaceSource, /state\?\.status === "awaiting-confirmation"\) this\.assistantDraft = "确认执行"/, "opening a material awaiting confirmation must prefill the confirmation command in its existing conversation");
assert.match(workspaceSource, /if \(awaitingConfirmation\) \{[\s\S]*?"前往确认"[\s\S]*?openProcessingConversation\(state, file\)/, "the row action must become a direct confirmation-conversation entry while awaiting review");
assert.match(workspaceSource, /const processableFiles = data\.pending\.filter[\s\S]*?\["running", "awaiting-confirmation"\]/, "process-all must exclude materials already waiting for confirmation");
assert.match(workspaceSource, /const processableSelectedFiles = selectedFiles\.filter[\s\S]*?pendingPaths\.has\(file\.path\)[\s\S]*?status !== "awaiting-confirmation"/, "batch processing must filter completed and awaiting-confirmation selections without blocking batch deletion");
assert.match(workspaceSource, /materialFiles\(\)[\s\S]*?completionOrder[\s\S]*?return completionOrder \|\| b\.stat\.mtime - a\.stat\.mtime/, "the shared material list must keep pending records above completed records");
assert.match(workspaceSource, /checkbox\.disabled = state\.status === "running"/, "all idle materials must remain selectable for batch deletion while running materials stay protected");
assert.match(workspaceSource, /materials\.forEach\(\(file\) =>[\s\S]*?status: "processed", message: "已处理完成"/, "completed originals must remain visible in the same material list with a persisted status");
assert.doesNotMatch(workspaceSource, /state\.status === "success" && state\.preview\)[^\n]*wis-inbox-result-preview/, "routing previews must stay in the Agent conversation instead of appearing as another material block");
assert.match(workspaceSource, /(?:分流预览\|分流记录\|处理记录)/, "derived routing-preview records must be excluded from original-material discovery");
assert.doesNotMatch(workspaceSource.match(/async completeInboxFiles\(files[\s\S]*?\n  async reconcileCompletedInboxFiles/)?.[0] || "", /renameFile|uniquePath/, "marking a material complete must not move or rename the original record");
assert.match(styles, /\.wis-panel-head > \.wis-inbox-batch-actions \.wis-button\.is-primary\.is-ready\s*\{[\s\S]*?color:\s*#ffffff !important;[\s\S]*?opacity:\s*1 !important/, "a ready batch action must keep high-contrast white text and icon color");
assert.match(styles, /\.wis-inbox-list > \.wis-panel-head\s*\{[\s\S]*?align-items:\s*center;[\s\S]*?padding-bottom:\s*10px;/, "the inbox batch toolbar must keep a clear gap above the first material divider");
assert.match(styles, /\.wis-ingest-step\s*\{[\s\S]*?grid-template-areas:[\s\S]*?"number icon title"[\s\S]*?"description description description"/, "ingest steps must reserve a full title track instead of squeezing Chinese labels into a vertical column");
assert.match(styles, /\.wis-ingest-step strong\s*\{[\s\S]*?grid-area:\s*title;[\s\S]*?white-space:\s*nowrap/, "ingest step titles must stay horizontal at notebook widths");
assert.match(styles, /@container wis-view \(max-width:\s*1120px\)[\s\S]*?\.wis-assistant\s*\{[\s\S]*?position:\s*absolute;[\s\S]*?z-index:\s*30;[\s\S]*?display:\s*grid;[\s\S]*?width:\s*min\(318px,\s*calc\(100%\s*-\s*48px\)\)/, "assistant must remain visible above content in a narrow leaf");
assert.doesNotMatch(styles, /@container wis-view \(max-width:\s*1120px\)[\s\S]*?\.wis-assistant\s*\{[^}]*display:\s*none/, "assistant must never disappear at the narrow-leaf breakpoint");
assert.match(workspaceSource, /cls:\s*"wis-button-label"/, "interactive buttons must render a dedicated text label");
assert.match(styles, /\.wis-modal \.wis-modal-actions \.wis-button-label\s*\{[\s\S]*?display:\s*inline-block\s*!important;[\s\S]*?visibility:\s*visible\s*!important/, "all modal actions must keep their labels visible");
assert.match(styles, /\.wis-modal \.wis-modal-actions \.wis-button\.is-primary\s*\{[\s\S]*?color:\s*#ffffff\s*!important;[\s\S]*?background:[\s\S]*?!important/, "modal primary actions must keep an explicit readable foreground and background");
assert.match(styles, /\.wis-modal \.wis-modal-actions \.wis-button\.is-danger\s*\{[\s\S]*?color:\s*#c8394b\s*!important;[\s\S]*?background:\s*#fff1f3\s*!important/, "modal danger actions must remain visible outside the workspace color-variable scope");
assert.match(styles, /\.wis-modal \.wis-modal-actions \.wis-button\.is-danger:hover,[\s\S]*?focus-visible[\s\S]*?color:\s*#ffffff\s*!important;[\s\S]*?background:\s*#d94b5b\s*!important/, "hovered and keyboard-focused danger actions must keep high-contrast text and background");
assert.match(styles, /\.wis-modal \.wis-modal-actions \.wis-button\.is-danger > \.wis-button-label,[\s\S]*?currentColor\s*!important;[\s\S]*?visibility:\s*visible\s*!important/, "danger action labels and icons must not disappear on hover");
assert.match(styles, /\.wis-stage-gate-checklist\s*\{[\s\S]*?display:\s*grid/, "stage-completion checks must remain readable inside the confirmation modal");
assert.match(styles, /\.wis-content-analytics\s*\{[\s\S]*?margin-top:/, "optional published-data analysis must remain visually separate from the five-stage board");
assert.match(workspaceSource, /localContext:\s*await this\.service\.assistantRuntimeContext\(prompt\)/, "assistant must attach locally resolved Skill context before calling the provider");
assert.match(workspaceSource, /const localContext = await this\.skillRuntimeContext\(skill\)/, "Skill runs must load their local config and contract before calling the provider");
assert.match(workspaceSource, /查看运行记录/, "Skills page must expose the real local run history");
assert.doesNotMatch(`${source}\n${workspaceSource}`, /Agent Center/, "runtime must not direct users to the removed Agent Center");
assert.match(styles, /button\.wis-library-card\s*\{[\s\S]*?justify-content:\s*stretch;[\s\S]*?justify-items:\s*stretch;[\s\S]*?width:\s*100%/, "full-width library cards must stretch their content instead of centering a narrow column");
assert.match(styles, /button\.wis-asset-card\s*\{[\s\S]*?align-items:\s*stretch;[\s\S]*?justify-content:\s*flex-start;[\s\S]*?width:\s*100%/, "full-width asset cards must use the available horizontal space");
assert.doesNotMatch(workspaceSource, /const copy = brand\.createDiv\(\)/, "sidebar logo must not retain a duplicate text block that can overflow");
assert.match(styles, /\.wis-brand-logo\s*\{[\s\S]*?max-width:\s*100%;[\s\S]*?flex:\s*0 1 178px/, "horizontal logo must shrink inside the sidebar instead of overflowing");

assert.doesNotMatch(workspaceSource, /(?:\/kb-|\.kb(?:\/|\b)|wis-kb-|对话 · KB|\["kb", "KB"\])/, "workspace must not retain the legacy KB product namespace");

console.log("PASS FDE workspace uses six libraries, five gated content stages, optional published-data analysis, 34 skills, persistent assistant state, overflow-safe controls and source-aware quality rules");
