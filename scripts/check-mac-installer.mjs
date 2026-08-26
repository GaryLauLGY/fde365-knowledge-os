import { access, readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";

const installerRoot = "installer/macos";
const commandFiles = [
  `${installerRoot}/开始安装 FDE365.command`,
  `${installerRoot}/更新 FDE365.command`,
  `${installerRoot}/检查安装.command`,
  `${installerRoot}/打开 FDE365 Claude.command`,
  `${installerRoot}/打开 FDE365 Codex.command`,
  `${installerRoot}/打开 FDE365 知识库.command`,
];
const jxaHelperFiles = [
  `${installerRoot}/helpers/write-plugin-settings.jxa`,
  `${installerRoot}/helpers/enable-plugin.jxa`,
  `${installerRoot}/helpers/register-vault.jxa`,
  `${installerRoot}/helpers/check-token.jxa`,
  `${installerRoot}/helpers/read-plugin-token.jxa`,
  `${installerRoot}/helpers/read-plugin-model.jxa`,
  `${installerRoot}/helpers/write-client-config.jxa`,
];
const shellHelperFiles = [
  `${installerRoot}/helpers/fde365-token`,
  `${installerRoot}/helpers/fde365-claude`,
  `${installerRoot}/helpers/fde365-codex`,
  `${installerRoot}/helpers/configure-user-environment.sh`,
];

for (const path of [...commandFiles, ...jxaHelperFiles, ...shellHelperFiles, `${installerRoot}/obsidian-release.env`, `${installerRoot}/使用说明.md`, `${installerRoot}/⭐ 先看我.html`]) {
  await access(path);
}
await access("scripts/simulate-mac-install.mjs");

for (const path of [...commandFiles, ...shellHelperFiles]) {
  const result = spawnSync("/bin/bash", ["-n", path], { encoding: "utf8" });
  if (result.status !== 0) throw new Error(`Shell syntax failed for ${path}: ${result.stderr}`);
}
for (const path of jxaHelperFiles) {
  const source = await readFile(path, "utf8");
  const result = spawnSync(process.execPath, ["--check"], { input: source, encoding: "utf8" });
  if (result.status !== 0) throw new Error(`JXA syntax failed for ${path}: ${result.stderr}`);
}

const releaseConfig = await readFile(`${installerRoot}/obsidian-release.env`, "utf8");
if (!/OBSIDIAN_VERSION="1\.13\.7"/.test(releaseConfig)) throw new Error("Unexpected Obsidian release version");
if (!/https:\/\/fdekb\.garylau\.ai\/vendor\/obsidian\/1\.13\.7\/mac/.test(releaseConfig)) {
  throw new Error("Obsidian download must use the FDE365 update mirror");
}

const installScript = await readFile(commandFiles[0], "utf8");
for (const required of [
  "https://api.fde365.ai/v1",
  "https://api.fde365.ai/",
  "fde365-knowledge-os",
  "FDE365知识库",
  "curl --fail --location",
  "codesign --verify --deep --strict",
  "write-plugin-settings.jxa",
  "community-plugins.json",
  "https://claude.ai/install.sh",
  "https://chatgpt.com/codex/install.sh",
  "configure-user-environment.sh",
  'FDE365_SIMULATION="${FDE365_SIMULATION:-0}"',
  "[模拟] 已跳过打开 Obsidian",
]) {
  if (!installScript.includes(required)) throw new Error(`Installer is missing: ${required}`);
}

const updateScript = await readFile(commandFiles[1], "utf8");
if (!updateScript.includes("原 Token 和用户数据已保留")) throw new Error("Updater must state that data is preserved");
if (/rm\s+-rf\s+[^\n]*PLUGIN_TARGET/.test(updateScript)) throw new Error("Updater must not delete the installed plugin directory");

const settingsHelper = await readFile(jxaHelperFiles[0], "utf8");
if (!settingsHelper.includes('settings.ai.provider = "fde365"')) throw new Error("Settings helper must select FDE365");
if (!settingsHelper.includes("fileHandleWithStandardInput")) throw new Error("Token must be accepted over stdin");
if (/baseUrl|base_url|FDE365_BASE_URL/.test(settingsHelper)) throw new Error("Installer settings must not persist an editable Base URL");

const clientConfigHelper = await readFile(`${installerRoot}/helpers/write-client-config.jxa`, "utf8");
for (const required of [
  "https://api.fde365.ai",
  "https://api.fde365.ai/v1",
  "apiKeyHelper",
  'model_provider = "fde365"',
  'wire_api = "responses"',
  "[model_providers.fde365.auth]",
  "check_for_update_on_startup = false",
  'web_search = "disabled"',
]) {
  if (!clientConfigHelper.includes(required)) throw new Error(`Client configuration is missing: ${required}`);
}
if (/OPENAI_API_KEY|ANTHROPIC_AUTH_TOKEN/.test(clientConfigHelper)) {
  throw new Error("Persistent client configuration must not duplicate the Vault Token");
}

const environmentHelper = await readFile(`${installerRoot}/helpers/configure-user-environment.sh`, "utf8");
for (const required of [
  "$HOME/.claude/settings.json",
  "$HOME/.codex/config.toml",
  "backups/global-",
]) {
  if (!environmentHelper.includes(required)) throw new Error(`Global environment helper is missing: ${required}`);
}
for (const forbidden of ["$HOME/.zshrc", "$HOME/.zprofile", "$HOME/.bash_profile", "export OPENAI_BASE_URL", "export ANTHROPIC_BASE_URL", "unset OPENAI_API_KEY"]) {
  if (environmentHelper.includes(forbidden)) throw new Error(`Installer must not modify shell environment files: ${forbidden}`);
}

const tokenBridge = await readFile(`${installerRoot}/helpers/fde365-token`, "utf8");
if (!tokenBridge.includes(".obsidian/plugins/fde365-knowledge-os/data.json")) {
  throw new Error("CLI Token bridge must read the installed Vault configuration");
}

const consumerGuide = await readFile(`${installerRoot}/⭐ 先看我.html`, "utf8");
for (const phrase of ["只要双击", "FDE365 工具", "Claude Code", "Codex", "遇到问题"]) {
  if (!consumerGuide.includes(phrase)) throw new Error(`Consumer guide is missing: ${phrase}`);
}

console.log("PASS Mac installer configures Obsidian, Claude Code and Codex through official installers and FDE365 live configs.");
