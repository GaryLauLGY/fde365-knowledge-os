import { spawnSync } from "node:child_process";
import { constants } from "node:fs";
import {
  access,
  mkdir,
  readFile,
  readdir,
  stat,
  writeFile,
} from "node:fs/promises";
import { join, relative } from "node:path";

const root = process.cwd();
const manifest = JSON.parse(await readFile(join(root, "manifest.json"), "utf8"));
const version = manifest.version;
const simulationToken = "fde365-simulation-token-local-only";
const simulationModel = "gpt-5.6-luna";

function fail(message) {
  throw new Error(message);
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024,
    ...options,
  });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    const details = [result.stdout, result.stderr].filter(Boolean).join("\n").trim();
    fail(`${command} 执行失败${details ? `：\n${details}` : ""}`);
  }
  return result;
}

async function readJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

async function executable(path) {
  await access(path, constants.X_OK);
}

async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

if (process.platform !== "darwin") fail("Mac 安装模拟器只能在 macOS 上运行");

// Always test the current consumer artifact instead of an older ZIP.
run(process.execPath, ["scripts/check-mac-installer.mjs"]);
run(process.execPath, ["scripts/package-mac-installer.mjs"]);

const now = new Date();
const stamp = [
  now.getFullYear(),
  String(now.getMonth() + 1).padStart(2, "0"),
  String(now.getDate()).padStart(2, "0"),
  "-",
  String(now.getHours()).padStart(2, "0"),
  String(now.getMinutes()).padStart(2, "0"),
  String(now.getSeconds()).padStart(2, "0"),
  `-${process.pid}`,
].join("");
const sandbox = join(root, ".context", "mac-installer-simulations", stamp);
const packageDir = join(sandbox, "package");
const fakeHome = join(sandbox, "home");
const tempDir = join(sandbox, "tmp");
const fakeVault = join(fakeHome, "Documents", "FDE365工作台");
const zipPath = join(root, "mac-release", `FDE365-Knowledge-OS-Mac-v${version}.zip`);

await mkdir(packageDir, { recursive: true });
await mkdir(join(fakeHome, ".claude"), { recursive: true });
await mkdir(join(fakeHome, ".codex"), { recursive: true });
await mkdir(tempDir, { recursive: true });

const originalClaude = `${JSON.stringify({
  permissions: { allow: ["Read"] },
  env: { OLD_PROVIDER: "keep-in-backup-only" },
}, null, 2)}\n`;
const originalCodex = 'model_provider = "old"\n\n[mcp_servers.keep]\ncommand = "keep"\n';
const originalZshrc = "export KEEP_ME=1\n";
await writeFile(join(fakeHome, ".claude", "settings.json"), originalClaude, "utf8");
await writeFile(join(fakeHome, ".codex", "config.toml"), originalCodex, "utf8");
await writeFile(join(fakeHome, ".zshrc"), originalZshrc, "utf8");

run("/usr/bin/unzip", ["-q", zipPath, "-d", packageDir]);
const bundleRoot = join(packageDir, `FDE365-Knowledge-OS-Mac-v${version}`);
const installer = join(bundleRoot, "开始安装 FDE365.command");
await executable(installer);

const installerInput = [simulationToken, "4", fakeVault, ""].join("\n") + "\n";
const installResult = run("/bin/bash", [installer], {
  env: {
    ...process.env,
    HOME: fakeHome,
    TMPDIR: `${tempDir}/`,
    FDE365_SIMULATION: "1",
  },
  input: installerInput,
  timeout: 60_000,
});
if (!installResult.stdout.includes("模拟模式")) fail("安装包没有进入隔离模拟模式");
if (!installResult.stdout.includes("安装完成")) fail("模拟安装没有到达完成状态");

const checks = [];
function pass(label) {
  checks.push(label);
}

const pluginRoot = join(fakeVault, ".obsidian", "plugins", manifest.id);
const installedManifest = await readJson(join(pluginRoot, "manifest.json"));
if (installedManifest.id !== manifest.id || installedManifest.version !== version) {
  fail("模拟 Vault 内的插件 ID 或版本不正确");
}
pass(`插件 ${manifest.id} v${version} 已安装`);

const dataPath = join(pluginRoot, "data.json");
const data = await readJson(dataPath);
if (data.ai?.fde365?.token !== simulationToken) fail("Token 没有正确保存到模拟 Vault");
if (data.ai?.fde365?.model !== simulationModel) fail("模拟 Vault 的模型不正确");
if (data.ai?.provider !== "fde365") fail("模拟 Vault 没有选择 FDE365 Provider");
pass("Token 只写入模拟 Vault 的插件 data.json");
pass(`模型已固定为本次选择的 ${simulationModel}`);

const communityPlugins = await readJson(join(fakeVault, ".obsidian", "community-plugins.json"));
if (!Array.isArray(communityPlugins) || !communityPlugins.includes(manifest.id)) {
  fail("FDE365 插件没有在模拟 Vault 中启用");
}
await access(join(fakeVault, "FDE365知识库", "fde-manifest.json"));
pass("知识库模板已部署，社区插件已启用");

const supportRoot = join(fakeHome, "Library", "Application Support", "FDE365 Knowledge OS");
const vaultPointer = (await readFile(join(supportRoot, "vault-path.txt"), "utf8")).trim();
if (vaultPointer !== fakeVault) fail("全局入口没有指向模拟 Vault");
pass("FDE365 本地入口已指向模拟 Vault");

const claudeSettings = await readJson(join(fakeHome, ".claude", "settings.json"));
if (claudeSettings.env?.ANTHROPIC_BASE_URL !== "https://api.fde365.ai") fail("Claude Base URL 不正确");
if (claudeSettings.env?.ANTHROPIC_MODEL !== simulationModel) fail("Claude 模型不正确");
if (claudeSettings.apiKeyHelper !== join(supportRoot, "bin", "fde365-token")) fail("Claude Token 助手不正确");
if (claudeSettings.permissions?.allow?.[0] !== "Read") fail("Claude 原有非连接设置没有保留");
pass("Claude Code 配置完成，并保留原有非连接设置");

const codexConfig = await readFile(join(fakeHome, ".codex", "config.toml"), "utf8");
for (const expected of [
  `model = "${simulationModel}"`,
  'model_provider = "fde365"',
  'base_url = "https://api.fde365.ai/v1"',
  'wire_api = "responses"',
  `[model_providers.fde365.auth]`,
  `command = "${join(supportRoot, "bin", "fde365-token").replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`,
]) {
  if (!codexConfig.includes(expected)) fail(`Codex 配置缺少：${expected}`);
}
pass("Codex 配置完成，并使用 FDE365 Responses 接口");

for (const shellName of [".zshrc", ".zprofile", ".bash_profile"]) {
  const shellConfig = await readFile(join(fakeHome, shellName), "utf8");
  if (!shellConfig.includes("# >>> FDE365 Knowledge OS >>>")) fail(`${shellName} 缺少 FDE365 环境块`);
}
if (!(await readFile(join(fakeHome, ".zshrc"), "utf8")).includes("export KEEP_ME=1")) {
  fail("模拟安装覆盖了原有 .zshrc 内容");
}
pass("zsh/bash 环境已配置，原有 Shell 内容仍保留");

const desktopTools = join(fakeHome, "Desktop", "FDE365 工具");
for (const launcher of [
  "打开 FDE365 Claude.command",
  "打开 FDE365 Codex.command",
  "打开 FDE365 知识库.command",
]) {
  await executable(join(desktopTools, launcher));
}
await executable(join(fakeHome, ".local", "bin", "claude"));
await executable(join(fakeHome, ".local", "bin", "codex"));
await access(join(fakeHome, "Applications", "Obsidian.app", "Contents"));
pass("假的 Obsidian、Claude Code、Codex 与三个桌面入口已创建");

const backupRoot = join(supportRoot, "backups");
const backupDirs = await readdir(backupRoot, { withFileTypes: true });
const backupDirEntry = backupDirs.find((entry) => entry.isDirectory() && entry.name.startsWith("global-"));
if (!backupDirEntry) fail("没有创建旧配置备份目录");
const backupDir = join(backupRoot, backupDirEntry.name);
const backupFiles = await walk(backupDir);
const backupContents = await Promise.all(backupFiles.map((path) => readFile(path, "utf8")));
for (const original of [originalClaude, originalCodex, originalZshrc]) {
  if (!backupContents.includes(original)) fail("旧配置备份内容不完整");
}
pass("Claude、Codex 与 Shell 的旧配置已完整备份");

const tokenHelper = join(supportRoot, "bin", "fde365-token");
const tokenResult = run("/bin/bash", [tokenHelper], {
  env: { ...process.env, HOME: fakeHome },
});
if (tokenResult.stdout.trim() !== simulationToken) fail("Token 动态读取链路失败");
pass("Claude/Codex 可通过本地助手动态读取 Vault Token");

const obsidianConfig = await readJson(join(fakeHome, "Library", "Application Support", "obsidian", "obsidian.json"));
const registeredVault = Object.values(obsidianConfig.vaults ?? {}).find((vault) => vault?.path === fakeVault && vault?.open === true);
if (!registeredVault) fail("模拟 Vault 没有登记到假的 Obsidian 配置");
pass("模拟 Vault 已登记到假的 Obsidian 配置");

for (const file of await walk(fakeHome)) {
  if (file === dataPath) continue;
  if ((await stat(file)).size > 2_000_000) continue;
  const content = await readFile(file, "utf8").catch(() => "");
  if (content.includes(simulationToken)) {
    fail(`Token 被复制到不允许的位置：${relative(fakeHome, file)}`);
  }
}
pass("扫描确认 Token 未复制到其他配置、备份或启动器");

const reportPath = join(sandbox, "REPORT.md");
const report = [
  "# FDE365 Mac 安装模拟报告",
  "",
  `- 结果：PASS（${checks.length}/${checks.length}）`,
  `- 安装包版本：v${version}`,
  `- 模拟环境：${sandbox}`,
  `- 模拟 HOME：${fakeHome}`,
  `- 模拟 Vault：${fakeVault}`,
  "- 安全边界：未下载软件、未启动应用、未写入真实 HOME",
  "- Token：仅确认保存位置和动态读取成功，不在报告中记录值",
  "",
  "## 已通过",
  "",
  ...checks.map((label) => `- PASS：${label}`),
  "",
  "## 本模拟不覆盖",
  "",
  "- 官方下载站的实时可用性与下载速度",
  "- Obsidian、Claude Code、Codex 的签名、Gatekeeper 与首次启动 UI",
  "- 使用真实 Token 发起的线上模型请求",
  "",
].join("\n");
await writeFile(reportPath, report, "utf8");

console.log(`PASS：FDE365 Mac 安装已在隔离环境完成 ${checks.length} 项检查。`);
console.log(`模拟环境：${sandbox}`);
console.log(`报告：${reportPath}`);
