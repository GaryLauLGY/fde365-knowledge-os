import { createHash } from "node:crypto";
import { chmod, cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { basename, join, relative } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const manifest = JSON.parse(await readFile(join(root, "manifest.json"), "utf8"));
const version = manifest.version;
const sourceRoot = join(root, "installer", "macos");
const releaseRoot = join(root, "mac-release");
const stageRoot = join(releaseRoot, ".stage");
const bundleName = `FDE365-Knowledge-OS-Mac-v${version}`;
const bundleRoot = join(stageRoot, bundleName);
const componentsRoot = join(bundleRoot, "组件");
const pluginRoot = join(componentsRoot, manifest.id);
const templateRoot = join(componentsRoot, "FDE365知识库模板");

const topLevelFiles = [
  "开始安装 FDE365.command",
  "更新 FDE365.command",
  "检查安装.command",
  "打开 FDE365 知识库.command",
  "⭐ 先看我.html",
];
const helperFiles = [
  "write-plugin-settings.jxa",
  "enable-plugin.jxa",
  "register-vault.jxa",
  "configure-user-environment.sh",
];
const pluginFiles = [
  "manifest.json",
  "main.js",
  "styles.css",
  "README.md",
  "DEVELOPMENT.md",
  "LICENSE",
  "LICENSES.md",
  "KB-SUITE-LICENSE.txt",
  "KB-SUITE-NOTICE.md",
  "DEFUDDLE-LICENSE.txt",
];
const secretPatterns = [
  /sk-[A-Za-z0-9_-]{20,}/,
  /AIza[0-9A-Za-z_-]{30,}/,
  /gh[pousr]_[A-Za-z0-9]{30,}/,
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
];
const forbiddenLegacyPatterns = [/xingji-liubai/i, /xjlb-/i];

async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

async function audit(dir) {
  for (const file of await walk(dir)) {
    const path = relative(dir, file);
    const name = basename(file);
    if (name === ".DS_Store" || name === "data.json" || /Obsidian.*\.dmg$/i.test(name)) {
      throw new Error(`Forbidden Mac release path: ${path}`);
    }
    if ((await stat(file)).size > 2_000_000 || /\.(?:png|jpe?g|gif|zip)$/i.test(file)) continue;
    const content = await readFile(file, "utf8");
    if (secretPatterns.some((pattern) => pattern.test(content))) throw new Error(`Possible secret in ${path}`);
    if (forbiddenLegacyPatterns.some((pattern) => pattern.test(content))) throw new Error(`Legacy plugin identifier in ${path}`);
  }
}

function zip(cwd, output, entry) {
  const result = spawnSync("zip", ["-q", "-X", "-r", output, entry], { cwd, stdio: "inherit" });
  if (result.status !== 0) throw new Error(`zip failed for ${entry}`);
}

async function sha256(file) {
  return createHash("sha256").update(await readFile(file)).digest("hex");
}

await rm(releaseRoot, { recursive: true, force: true });
await mkdir(join(componentsRoot, "helpers"), { recursive: true });
await mkdir(pluginRoot, { recursive: true });

for (const name of topLevelFiles) {
  const destination = join(bundleRoot, name);
  await cp(join(sourceRoot, name), destination);
  if (name.endsWith(".command")) await chmod(destination, 0o755);
}
await cp(join(sourceRoot, "obsidian-release.env"), join(componentsRoot, "obsidian-release.env"));
for (const name of helperFiles) {
  await cp(join(sourceRoot, "helpers", name), join(componentsRoot, "helpers", name));
}

await cp(join(root, "vault-template"), templateRoot, { recursive: true });
for (const name of pluginFiles) await cp(join(root, name), join(pluginRoot, name));
await mkdir(join(pluginRoot, "docs"), { recursive: true });
await cp(join(root, "docs", "billing-backend.md"), join(pluginRoot, "docs", "billing-backend.md"));
await mkdir(join(pluginRoot, "assets"), { recursive: true });
await cp(join(root, "assets", "fde365-logo.png"), join(pluginRoot, "assets", "fde365-logo.png"));
await cp(join(root, "assets", "fde365-logo-source.svg"), join(pluginRoot, "assets", "fde365-logo-source.svg"));

await audit(bundleRoot);

const zipPath = join(releaseRoot, `${bundleName}.zip`);
zip(stageRoot, zipPath, bundleName);
const hash = await sha256(zipPath);
await writeFile(join(releaseRoot, "SHA256SUMS-Mac.txt"), `${hash}  ${basename(zipPath)}\n`, "utf8");
await rm(stageRoot, { recursive: true, force: true });

console.log(`Packaged Mac installer v${version}`);
console.log(`${hash}  ${basename(zipPath)}`);
