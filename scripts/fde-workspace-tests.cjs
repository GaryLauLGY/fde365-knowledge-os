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
  SKILLS,
  FDEWorkspaceService,
  parseConfigYaml,
  sourceFromContent,
  unknownFromContent,
  commandCompletionState,
  assistantHistoryTopic,
  isInboxClosurePrompt,
  markdownSection,
  frontmatterPaths,
  linkedPaths,
} = require("../fde-workspace.js");

assert.deepEqual(LIBRARIES.map((item) => item.id), ["owner", "product", "customer", "case", "method", "content"]);
assert.equal(LIBRARIES[0].name, "个人说明书");
assert.equal(LIBRARIES[0].short, "说明书");
assert.equal(LIBRARIES[0].path, "1-个人说明书");
assert.deepEqual(CONTENT_STAGES.map((item) => item.id), ["选题", "草稿", "待审核", "待发布", "已发布", "数据复盘"]);
assert.equal(SKILLS.length, 35);
assert.equal(new Set(SKILLS.map((item) => item.id)).size, 35);
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
assert.equal(assistantHistoryTopic({ user_prompt: "/fde-write 写一篇产品发布说明" }), "写一篇产品发布说明");
assert.equal(assistantHistoryTopic({
  task: "用户已明确选择以下 1 份原始材料进行处理：\n- FDE365知识库/0-待处理材料/待处理/page-01.md",
  source_files: '["FDE365知识库/0-待处理材料/待处理/page-01.md"]',
}), "处理 page-01");
assert.equal(assistantHistoryTopic({ agent_id: "fde-ingest" }), "材料入库");
assert.equal(isInboxClosurePrompt("确认结案"), true);
assert.equal(isInboxClosurePrompt("继续修改预览"), false);

const source = readFileSync(fileURLToPath(new URL("../source.js", `file://${__filename}`)), "utf8");
for (const route of ["libraries", "network", "content", "skills", "health"]) {
  assert.match(source, new RegExp(`case ["']${route}["']:`), `router must accept new workspace route: ${route}`);
}

const workspaceSource = readFileSync(fileURLToPath(new URL("../fde-workspace.js", `file://${__filename}`)), "utf8");
const retiredAudienceTerm = String.fromCodePoint(0x8001, 0x677f);
assert.ok(!source.includes(retiredAudienceTerm), "plugin source must use neutral audience terminology");
assert.ok(!workspaceSource.includes(retiredAudienceTerm), "workspace source must use neutral audience terminology");
for (const feature of ["AssistantContextModal", "AssistantNotePickerModal", "renderAssistantKnowledge", "renderAssistantSkills", "renderAssistantHistory"]) {
  assert.match(workspaceSource, new RegExp(feature), `unified assistant must include ${feature}`);
}
assert.doesNotMatch(workspaceSource, /AssistantProviderModal|codex-cli|claude-cli|openai-compatible/, "workspace must not expose alternative provider switching");
assert.match(workspaceSource, /配置 Token/, "assistant must route unconfigured users to Token settings");
assert.match(workspaceSource, /primarySelected \? "已选笔记" : "选择笔记"/, "primary-note control must open a real note selector and expose its selected state");
assert.doesNotMatch(workspaceSource, /请先在FDE365知识库中打开一篇业务笔记/, "primary-note control must not require users to open a note before selecting it");
assert.match(source, /if \(scope !== "none" && !sourceFiles\.length\) addFile\(this\.app\.workspace\.getActiveFile\(\)\)/, "an explicitly selected note must replace rather than silently combine with the active editor note");
assert.doesNotMatch(source, /if \(scope === "none"[^\n]*return context/, "explicitly selected notes must still be sent when automatic context is disabled");
assert.match(workspaceSource, /plugin\.fdeAssistantSession \|\| \(plugin\.fdeAssistantSession = \{/, "all middle workspace views must share one plugin-level assistant session");
assert.match(workspaceSource, /renderAssistantComposer\(panel\)[\s\S]*?wis-composer-submit-stack[\s\S]*?wis-agent-mode-select/, "the shared composer must place the execution-mode selector directly above Send");
assert.doesNotMatch(workspaceSource, /headActions\.createEl\("select"/, "the Agent header must not retain the execution-mode selector");
assert.match(workspaceSource, /modeSelect\.createEl\("option", \{ text: "YOLO"/, "the execution-mode selector must expose YOLO directly");
assert.match(workspaceSource, /executionModeRule\(this\.plugin\)/, "Skill and chat prompts must follow the selected execution mode");
assert.match(workspaceSource, /this\.assistantMode = id;\s*await this\.render\(\);/, "assistant tabs must only switch the visible surface and preserve the shared conversation session");
assert.match(workspaceSource, /commandCompletionState\(input\.value, caret\)/, "assistant composer must offer slash-command completion from the shared input");
assert.match(workspaceSource, /event\.key === "Tab" \|\| \(event\.key === "Enter"/, "slash-command completion must support keyboard filling");
assert.match(workspaceSource, /this\.assistantDraft = "";\s*input\.value = "";\s*closeCommandMenu\(\);\s*this\.assistantLoading = true;/, "sending must synchronously clear both the shared draft and the currently mounted textarea");
assert.match(workspaceSource, /isInboxClosurePrompt\(prompt\)[\s\S]*?completeInboxFiles\(submittedSources\)/, "an explicit closing turn must move selected pending materials into processed records");
assert.match(workspaceSource, /await this\.reconcileCompletedInboxFiles\(\);/, "the inbox snapshot must reconcile legacy materials already marked processed");
assert.match(workspaceSource, /bubble\.createEl\("strong", \{ text: "Agent 处理中…" \}\)/, "the shared Agent loading state must use one user-facing status");
assert.doesNotMatch(workspaceSource, /assistantActivity\.at\(-1\)\?\.label/, "the loading UI must never expose raw tool or shell activity labels");
assert.match(source, /progress\.createSpan\(\{ text: "Agent 处理中…" \}\)/, "legacy assistant surfaces must use the same generic Agent status");
assert.doesNotMatch(source, /progress\.createSpan\(\{ text: "正在生成回答" \}\)/, "legacy assistant surfaces must not expose a conflicting loading label");
assert.match(workspaceSource, /class FDEInboxView[\s\S]*?dropZone\.addEventListener\("drop"/, "inbox must expose a real file drop target");
assert.match(workspaceSource, /class VoiceCaptureModal extends Modal/, "quick capture must include a built-in AI voice recording modal");
assert.match(workspaceSource, /new window\.MediaRecorder/, "voice capture must preserve a real microphone recording instead of browser dictation text only");
assert.match(workspaceSource, /plugin\.transcribeAudio/, "recorded audio must be sent through the fixed FDE365 transcription service");
assert.match(workspaceSource, /async createVoiceNote\(\{ transcript, audio, mimeType, durationSeconds, model \}\)/, "voice capture must save both the original audio and editable transcript");
assert.match(workspaceSource, /makeButton\(actions, "AI 语音", "audio-lines"/, "the inbox header must expose AI voice capture beside quick text capture");
assert.match(workspaceSource, /尚未运行 \/fde-ingest/, "voice transcription must remain pending until the user chooses to process it");
assert.match(workspaceSource, /只收录并保留原文，不会自动运行 Skill/, "drop target must tell users that importing does not run a Skill");
assert.match(workspaceSource, /pending: "0-待处理材料\/待处理"/, "the default inbox must be material-neutral rather than recording-specific");
assert.match(workspaceSource, /待处理材料: \$\{this\.inboxPath\("pending"\)\}/, "resolved Agent context must describe a generic pending-material inbox");
assert.doesNotMatch(`${source}\n${workspaceSource}`, /录音与灵感/, "inbox navigation must not present the universal inbox as a recording-only area");
assert.match(workspaceSource, /用 \/fde-ingest 处理/, "each pending item must leave Skill execution to an explicit user action");
assert.match(workspaceSource, /this\.selectedPaths = new Set\(\)/, "inbox must keep an explicit selection model for pending files");
assert.match(workspaceSource, /type: "checkbox", "aria-label": `选择 \$\{file\.basename\}`/, "every pending item must expose an accessible checkbox");
assert.match(workspaceSource, /批量处理\$\{selectedFiles\.length/, "selected pending files must expose a batch processing action");
assert.match(workspaceSource, /const batchReady = selectedFiles\.some[\s\S]*?batchButton\.addClass\("is-ready"\)/, "a selected idle material must put the batch action into an explicit ready state");
assert.match(workspaceSource, /status === "running"[\s\S]*?wis-processing-spinner/, "running inbox tasks must render a visible loading indicator");
assert.match(workspaceSource, /"success"[\s\S]*?"failed"/, "inbox processing must distinguish successful and failed runs");
assert.match(workspaceSource, /\{ includeActive: false, sessionId: conversationId \}/, "batch inbox processing must not attach an unrelated active note");
assert.match(workspaceSource, /async openProcessingConversation\(state, file\)/, "completed inbox tasks must continue in the shared Agent conversation");
assert.match(workspaceSource, /this\.assistantSessionId = conversationId;/, "continuing an inbox task must resume the same Agent conversation when available");
assert.match(workspaceSource, /\{ includeActive: false, sessionId: conversationId \}/, "reprocessing a material must continue its existing Agent thread");
assert.match(workspaceSource, /previousConversation\?\.messages \|\| \[\]/, "a material conversation must preserve its visible message history across processing turns");
assert.match(workspaceSource, /const sameConversation = Boolean\(conversationId && this\.assistantSessionId === conversationId/, "opening the same material again must not reset the active conversation");
assert.match(source, /mode: "agent",[\s\S]*?sessionId: options\.sessionId \|\| ""/, "Agent Skill execution must pass an existing conversation ID to the runtime");
assert.match(workspaceSource, /makeButton\(actions, "继续处理", "messages-square"/, "completed inbox tasks must expose an explicit conversation continuation action");
assert.doesNotMatch(workspaceSource, /查看分流预览[\s\S]{0,200}openFile\(state\.outputPath\)/, "completed inbox tasks must not send users into a Markdown output file to continue the workflow");
assert.match(workspaceSource, /state\.status === "success" && state\.preview/, "completed inbox tasks must show a compact result preview in place");
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
assert.match(workspaceSource, /this\.assistantMode = "chat";[\s\S]*?this\.assistantDraft = `\$\{command\}/, "prefilling a Skill must switch to chat and place its command in the shared composer");
assert.ok(workspaceSource.includes('const remainder = current.replace(/^\\/fde-[a-z0-9-]+\\s*/i, "").trim();'), "prefilling another Skill must retain unsent task text after replacing its slash command");
assert.match(workspaceSource, /button\.addEventListener\("click", \(\) => void this\.prefillAssistantCommand\(skill\.id\)\)/, "right-side Skill cards must prefill rather than execute immediately");
assert.match(workspaceSource, /填入 \/\$\{skill\.id\}/, "the central Skill detail action must communicate that it fills the shared chat composer");
assert.doesNotMatch(workspaceSource, /renderAssistantSkills\(parent\)[\s\S]*?button\.addEventListener\("click", \(\) => new TextPromptModal/, "right-side Skill cards must not open a second prompt modal");

const styles = readFileSync(fileURLToPath(new URL("../styles.css", `file://${__filename}`)), "utf8");
assert.match(styles, /button\.wis-library-tab[\s\S]*?height:\s*auto\s*!important/, "library tabs must override native fixed button height");
assert.match(styles, /\.wis-asset-card-top[\s\S]*?gap:\s*9px/, "asset card sequence and library name must retain spacing");
assert.match(styles, /\.wis-assistant-tabs/, "unified assistant must expose workspace tabs");
assert.match(styles, /\.wis-view-content\s*\{[\s\S]*?container-type:\s*inline-size/, "workspace must query the Obsidian leaf width");
assert.match(styles, /@container wis-view \(max-width:\s*1450px\)[\s\S]*?\.wis-library-grid\s*\{[\s\S]*?repeat\(2,\s*minmax\(0,\s*1fr\)\)/, "dashboard libraries must become two columns in a squeezed leaf");
assert.match(styles, /@container wis-view \(max-width:\s*1450px\)[\s\S]*?\.wis-today-signal\s*\{[\s\S]*?grid-template-columns:\s*28px minmax\(0,\s*1fr\)[\s\S]*?width:\s*min\(100%,\s*440px\)/, "dashboard signal must reflow before its fde-start action can escape the card");
assert.match(styles, /\.wis-today-signal\s*>\s*\.wis-button\s*\{[\s\S]*?grid-column:\s*2;[\s\S]*?max-width:\s*100%/, "dashboard signal action must remain inside the responsive grid");
assert.match(styles, /\.wis-pipeline-summary\s*\{[\s\S]*?grid-template-rows:\s*auto minmax\(0,\s*1fr\)/, "dashboard content pipeline must reserve a centered track region beneath its header");
assert.match(styles, /\.wis-pipeline-summary \.wis-stage-track\s*\{[\s\S]*?align-self:\s*center/, "dashboard content stages must stay vertically centered inside their panel");
assert.match(styles, /\.wis-command-menu\s*\{[\s\S]*?position:\s*absolute;[\s\S]*?bottom:\s*calc\(100% \+ 6px\)/, "slash-command suggestions must float above the shared composer without resizing the conversation");
assert.match(styles, /\.wis-composer-submit-stack\s*\{[\s\S]*?flex-direction:\s*column;[\s\S]*?width:\s*76px;/, "execution mode and Send must form one stable vertical action stack");
assert.match(styles, /\.wis-agent-mode-select\s*\{[\s\S]*?padding:\s*4px 8px;[\s\S]*?text-align:\s*center;[\s\S]*?text-align-last:\s*center;/, "execution-mode text must stay centered inside its pill");
assert.match(styles, /\.wis-message-content\s*\{[\s\S]*?user-select:\s*text !important;/, "conversation text must remain selectable for native copying");
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
assert.match(styles, /\.wis-voice-stage\.is-recording \.wis-voice-wave span\s*\{[\s\S]*?animation:\s*wis-voice-wave/, "AI voice capture must show a visible recording state");
assert.match(styles, /@media \(prefers-reduced-motion:\s*reduce\)[\s\S]*?\.wis-voice-stage\.is-recording/, "voice recording motion must respect reduced-motion preferences");
assert.match(styles, /\.wis-inbox-processing-status\.is-success\s*\{\s*color:\s*var\(--wis-green\)/, "successful inbox tasks must use a restrained success state");
assert.match(styles, /\.wis-inbox-processing-status\.is-failed\s*\{\s*color:\s*var\(--wis-danger\)/, "failed inbox tasks must use a clear failure state");
assert.match(styles, /\.wis-inbox-result-preview\s*\{[\s\S]*?border-left:\s*2px solid var\(--wis-green\)/, "completed inbox tasks must display a quiet inline result strip");
assert.match(styles, /\.wis-panel-head > \.wis-inbox-batch-actions \.wis-button\.is-primary\.is-ready\s*\{[\s\S]*?color:\s*#ffffff !important;[\s\S]*?opacity:\s*1 !important/, "a ready batch action must keep high-contrast white text and icon color");
assert.match(styles, /\.wis-ingest-step\s*\{[\s\S]*?grid-template-areas:[\s\S]*?"number icon title"[\s\S]*?"description description description"/, "ingest steps must reserve a full title track instead of squeezing Chinese labels into a vertical column");
assert.match(styles, /\.wis-ingest-step strong\s*\{[\s\S]*?grid-area:\s*title;[\s\S]*?white-space:\s*nowrap/, "ingest step titles must stay horizontal at notebook widths");
assert.match(styles, /@container wis-view \(max-width:\s*1120px\)[\s\S]*?\.wis-assistant\s*\{[\s\S]*?position:\s*absolute;[\s\S]*?z-index:\s*30;[\s\S]*?display:\s*grid;[\s\S]*?width:\s*min\(318px,\s*calc\(100%\s*-\s*48px\)\)/, "assistant must remain visible above content in a narrow leaf");
assert.doesNotMatch(styles, /@container wis-view \(max-width:\s*1120px\)[\s\S]*?\.wis-assistant\s*\{[^}]*display:\s*none/, "assistant must never disappear at the narrow-leaf breakpoint");
assert.match(workspaceSource, /cls:\s*"wis-button-label"/, "interactive buttons must render a dedicated text label");
assert.match(styles, /\.wis-modal \.wis-modal-actions \.wis-button-label\s*\{[\s\S]*?display:\s*inline-block\s*!important;[\s\S]*?visibility:\s*visible\s*!important/, "all modal actions must keep their labels visible");
assert.match(styles, /\.wis-modal \.wis-modal-actions \.wis-button\.is-primary\s*\{[\s\S]*?color:\s*#ffffff\s*!important;[\s\S]*?background:[\s\S]*?!important/, "modal primary actions must keep an explicit readable foreground and background");
assert.match(workspaceSource, /localContext:\s*await this\.service\.assistantRuntimeContext\(prompt\)/, "assistant must attach locally resolved Skill context before calling the provider");
assert.match(workspaceSource, /const localContext = await this\.skillRuntimeContext\(skill\)/, "Skill runs must load their local config and contract before calling the provider");
assert.match(workspaceSource, /查看运行记录/, "Skills page must expose the real local run history");
assert.doesNotMatch(`${source}\n${workspaceSource}`, /Agent Center/, "runtime must not direct users to the removed Agent Center");
assert.match(styles, /button\.wis-library-card\s*\{[\s\S]*?justify-content:\s*stretch;[\s\S]*?justify-items:\s*stretch;[\s\S]*?width:\s*100%/, "full-width library cards must stretch their content instead of centering a narrow column");
assert.match(styles, /button\.wis-asset-card\s*\{[\s\S]*?align-items:\s*stretch;[\s\S]*?justify-content:\s*flex-start;[\s\S]*?width:\s*100%/, "full-width asset cards must use the available horizontal space");
assert.doesNotMatch(workspaceSource, /const copy = brand\.createDiv\(\)/, "sidebar logo must not retain a duplicate text block that can overflow");
assert.match(styles, /\.wis-brand-logo\s*\{[\s\S]*?max-width:\s*100%;[\s\S]*?flex:\s*0 1 178px/, "horizontal logo must shrink inside the sidebar instead of overflowing");

assert.doesNotMatch(workspaceSource, /(?:\/kb-|\.kb(?:\/|\b)|wis-kb-|对话 · KB|\["kb", "KB"\])/, "workspace must not retain the legacy KB product namespace");

console.log("PASS FDE workspace uses six libraries, six content stages, 35 skills, persistent assistant state, overflow-safe controls and source-aware quality rules");
