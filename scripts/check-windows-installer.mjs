import { access, readFile } from "node:fs/promises";

const root = "installer/windows";
const requiredFiles = [
  "开始安装 FDE365.cmd", "开始安装 FDE365.ps1", "更新 FDE365.cmd", "更新 FDE365.ps1",
  "检查安装.cmd", "检查安装.ps1", "打开 FDE365 Claude.cmd", "打开 FDE365 Codex.cmd",
  "打开 FDE365 知识库.cmd", "⭐ 先看我.html", "使用说明.md", "obsidian-release.json",
  "helpers/FDE365.Common.ps1", "helpers/fde365-token.ps1",
];
for (const name of requiredFiles) await access(`${root}/${name}`);

const install = await readFile(`${root}/开始安装 FDE365.ps1`, "utf8");
const common = await readFile(`${root}/helpers/FDE365.Common.ps1`, "utf8");
const updater = await readFile(`${root}/更新 FDE365.ps1`, "utf8");
const tokenHelper = await readFile(`${root}/helpers/fde365-token.ps1`, "utf8");
const release = JSON.parse(await readFile(`${root}/obsidian-release.json`, "utf8"));
for (const phrase of ["FDE365_TOKEN_INPUT", "FDE365_SIMULATION", "FDE365_VAULT_PATH", "Write-FdePluginSettings", "Install-FdeOfficialApplications"]) {
  if (!install.includes(phrase) && !common.includes(phrase)) throw new Error(`Windows installer is missing: ${phrase}`);
}
for (const phrase of [
  "https://api.fde365.ai/v1", "https://api.fde365.ai", "https://claude.ai/install.ps1",
  "https://chatgpt.com/codex/install.ps1", "Get-AuthenticodeSignature",
  "https://registry.npmjs.org", "@anthropic-ai/claude-code", "Get-FileHash",
  "model_providers.fde365.auth", "check_for_update_on_startup", 'web_search = "disabled"',
]) if (!common.includes(phrase)) throw new Error(`Windows common helper is missing: ${phrase}`);
if (/Set-FdeUserEnvironment|SetEnvironmentVariable\([^\n]+["']User["']/i.test(`${install}\n${common}`)) {
  throw new Error("Windows installer must not modify persistent user environment variables");
}
if (!updater.includes("原 Token 和用户数据已保留")) throw new Error("Windows updater must preserve Token and user data");
if (/Remove-Item[^\n]+pluginTarget/i.test(updater)) throw new Error("Windows updater must not remove the plugin directory");
if (!tokenHelper.includes("Write-Output") || tokenHelper.includes("[Console]::Out")) {
  throw new Error("Windows Token helper must use capturable pipeline output");
}
if (release.version !== "1.13.7" || release.windowsUrl !== "https://fdekb.garylau.ai/vendor/obsidian/1.13.7/windows") {
  throw new Error("Windows Obsidian release must use the FDE365 update mirror");
}
if (release.codexWindowsUrl !== "https://fdekb.garylau.ai/vendor/codex/0.151.0/windows-x86_64.zip" || !/^[a-f0-9]{64}$/.test(release.codexWindowsSha256)) {
  throw new Error("Windows Codex fallback must use the FDE365 update mirror with SHA-256");
}
const allText = await Promise.all(requiredFiles.map((name) => readFile(`${root}/${name}`, "utf8")));
const joined = allText.join("\n");
for (const pattern of [/sk-[A-Za-z0-9_-]{20,}/, /xjlb-/i, /xingji-liubai/i]) {
  if (pattern.test(joined)) throw new Error(`Forbidden content in Windows installer: ${pattern}`);
}
console.log("PASS Windows installer uses official applications, fixed FDE365 routing, Vault-only Token storage and create-only updates.");
