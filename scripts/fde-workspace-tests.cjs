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
} = require("../fde-workspace.js");

assert.deepEqual(LIBRARIES.map((item) => item.id), ["owner", "product", "customer", "case", "method", "content"]);
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
  owner: 1-老板说明书
  product: 2-产品库
inbox:
  recordings: 0-录音处理/待处理录音
policy:
  preserve_raw_files: true
  allow_cross_project_read: false
`);
assert.equal(config.libraries.owner, "1-老板说明书");
assert.equal(config.inbox.recordings, "0-录音处理/待处理录音");
assert.equal(config.policy.preserve_raw_files, true);
assert.equal(config.policy.allow_cross_project_read, false);

assert.equal(sourceFromContent("- 信息来源：访谈/客户A.md", {}), "访谈/客户A.md");
assert.equal(sourceFromContent("- 来源文件：待确认", {}), "");
assert.equal(sourceFromContent("", { source: "产品会议.md" }), "产品会议.md");
assert.equal(sourceFromContent("- 信息来源：\n\n## 下一节\n正文", {}), "");
assert.equal(unknownFromContent("## 已确认事实\n真实内容\n\n## 待确认\n- 价格\n- 交付日期\n"), 2);
assert.equal(unknownFromContent("## 待确认\n- \n"), 0);

const source = readFileSync(fileURLToPath(new URL("../source.js", `file://${__filename}`)), "utf8");
for (const route of ["libraries", "network", "content", "skills", "health"]) {
  assert.match(source, new RegExp(`case ["']${route}["']:`), `router must accept new workspace route: ${route}`);
}

const workspaceSource = readFileSync(fileURLToPath(new URL("../fde-workspace.js", `file://${__filename}`)), "utf8");
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
assert.doesNotMatch(workspaceSource, /async onClose\(\) \{\s*if \(this\.assistantRequestId\)/, "switching or closing a middle workspace view must not cancel the shared assistant request");
assert.match(workspaceSource, /pageSkills\(\) \{\s*return \["fde-start", "fde-library", "fde-write"\];/, "assistant quick Skills must be independent from the middle workspace page");
assert.doesNotMatch(workspaceSource, /当前页面：\$\{this\.pageKey\}/, "assistant identity must not change with the middle workspace page");

const styles = readFileSync(fileURLToPath(new URL("../styles.css", `file://${__filename}`)), "utf8");
assert.match(styles, /button\.wis-library-tab[\s\S]*?height:\s*auto\s*!important/, "library tabs must override native fixed button height");
assert.match(styles, /\.wis-asset-card-top[\s\S]*?gap:\s*9px/, "asset card sequence and library name must retain spacing");
assert.match(styles, /\.wis-assistant-tabs/, "unified assistant must expose workspace tabs");
assert.match(styles, /\.wis-view-content\s*\{[\s\S]*?container-type:\s*inline-size/, "workspace must query the Obsidian leaf width");
assert.match(styles, /@container wis-view \(max-width:\s*1450px\)[\s\S]*?\.wis-library-grid\s*\{[\s\S]*?repeat\(2,\s*minmax\(0,\s*1fr\)\)/, "dashboard libraries must become two columns in a squeezed leaf");
assert.match(styles, /@container wis-view \(max-width:\s*1450px\)[\s\S]*?\.wis-today-signal\s*\{[\s\S]*?grid-template-columns:\s*28px minmax\(0,\s*1fr\)[\s\S]*?width:\s*min\(100%,\s*440px\)/, "dashboard signal must reflow before its fde-start action can escape the card");
assert.match(styles, /\.wis-today-signal\s*>\s*\.wis-button\s*\{[\s\S]*?grid-column:\s*2;[\s\S]*?max-width:\s*100%/, "dashboard signal action must remain inside the responsive grid");
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
