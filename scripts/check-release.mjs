import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "source.js",
  "fde-agent-runtime.js",
  "main.js",
  "github-updater.js",
  "styles.css",
  "manifest.json",
  "blueprint.json",
  "assets/fde365-logo.png",
  "assets/fde365-logo-source.svg",
  "README.md",
  "DEVELOPMENT.md",
  "LICENSE",
  "LICENSES.md",
  "KB-SUITE-LICENSE.txt",
  "KB-SUITE-NOTICE.md",
  "DEFUDDLE-LICENSE.txt",
  "CLAUDIAN-LICENSE.txt",
  "scripts/build-blueprint.mjs",
  "scripts/build-plugin.mjs",
  "scripts/blueprint-tests.mjs",
  "scripts/fde-workspace-tests.cjs",
  "scripts/provider-tests.cjs",
  "scripts/fde-agent-runtime-tests.cjs",
  "scripts/github-updater-tests.cjs",
  "scripts/package-release.mjs",
  ".github/workflows/release.yml",
  ".github/workflows/verify.yml",
  "infra/cloudflare-update-proxy/src/worker.mjs",
  "infra/cloudflare-update-proxy/wrangler.toml",
];

const readJson = async (path) => JSON.parse(await readFile(path, "utf8"));
const [manifest, packageJson, versions, blueprint] = await Promise.all([
  readJson("manifest.json"),
  readJson("package.json"),
  readJson("versions.json"),
  readJson("blueprint.json"),
]);

for (const path of requiredFiles) await access(path);
if (manifest.id !== "fde365-knowledge-os") throw new Error(`Unexpected plugin id: ${manifest.id}`);
if (!manifest.isDesktopOnly) throw new Error("Current plugin release is expected to remain desktop-only");
if (packageJson.version !== manifest.version) throw new Error(`Version mismatch: package.json=${packageJson.version}, manifest.json=${manifest.version}`);
if (versions[manifest.version] !== manifest.minAppVersion) throw new Error(`versions.json must map ${manifest.version} to ${manifest.minAppVersion}`);
if (blueprint.root !== "FDE365知识库" || blueprint.version < 1) throw new Error("Invalid knowledge blueprint metadata");

const main = await readFile("main.js", "utf8");
for (const forbidden of ["tikbit.ai", "ANTHROPIC_BASE_URL", "ANTHROPIC_AUTH_TOKEN", "process.env.CODEX_HOME =", "process.env.FDE365_TOKEN =", "process.env.ANTHROPIC_"]) {
  if (main.includes(forbidden)) throw new Error(`Forbidden vendor/config takeover string found: ${forbidden}`);
}
for (const forbidden of ["Claude CLI", "选择 AI Provider", "自定义 API（OpenAI-compatible）"]) {
  if (main.includes(forbidden)) throw new Error(`Removed provider path is still present in runtime: ${forbidden}`);
}
if (!main.includes('var FDE365_BUILD_CHANNEL = true ? "user" : "user";')) {
  throw new Error("Stable runtime was not built for the user channel");
}
for (const required of ["https://api.ipzsk.com/v1", "claude-fable-5", "claude-opus-4-8", "gpt-5.6-sol", "gpt-5.6-luna", "Token", "FDE365知识库", "fde365-six-assets"]) {
  if (!main.includes(required)) throw new Error(`Built runtime is missing: ${required}`);
}
for (const required of ["codex-app-server-responses", "thread/start", "turn/start", "FDE365 Codex Agent"]) {
  if (!main.includes(required)) throw new Error(`Built Agent runtime is missing: ${required}`);
}
for (const required of ['env_key = "FDE365_TOKEN"', ".fde365-agent", "无需重新运行安装器"]) {
  if (!main.includes(required)) throw new Error(`Built isolated Agent runtime is missing: ${required}`);
}
for (const forbidden of ["需要重新运行 FDE365 安装器", "Codex 尚未由 FDE365 接管配置", 'text: "重新运行安装器"', 'path.join(home, ".codex"']) {
  if (main.includes(forbidden)) throw new Error(`Built runtime still depends on user-level Codex takeover: ${forbidden}`);
}
for (const forbidden of ["xingji-liubai", "xjlb-"]) {
  if (main.toLowerCase().includes(forbidden)) throw new Error(`Legacy plugin identifier is still present in runtime: ${forbidden}`);
}
for (const forbidden of ["/kb-", ".kb/config.yaml", "wis-kb-", "对话 · KB", "[\"kb\", \"KB\"]"]) {
  if (main.includes(forbidden)) throw new Error(`Legacy KB product namespace is still present in runtime: ${forbidden}`);
}

const source = await readFile("source.js", "utf8");
for (const required of [
  "GaryLauLGY/fde365-knowledge-os",
  "https://fdekb.garylau.ai",
  "/plugin/latest.json",
  "update-manifest.json",
  "check-for-updates",
  "automatic update check failed",
]) {
  if (!source.includes(required)) throw new Error(`FDE365 updater is missing: ${required}`);
}
const updater = await readFile("github-updater.js", "utf8");
if (updater.includes('target: "data.json"')) throw new Error("FDE365 updater must never replace data.json");
if (source.includes("https://api.github.com/") || source.includes("https://github.com/")) {
  throw new Error("Plugin runtime must not connect to GitHub directly");
}
const releaseWorkflow = await readFile(".github/workflows/release.yml", "utf8");
for (const required of ["release/main.js", "release/manifest.json", "release/styles.css", "release/update-manifest.json"]) {
  if (!releaseWorkflow.includes(required)) throw new Error(`Release workflow is missing: ${required}`);
}
if (/xjlb|xingji|星际留白/i.test(releaseWorkflow)) throw new Error("Release workflow contains a legacy brand name");

console.log(`Release metadata and runtime verified for v${manifest.version}.`);
