import { createHash } from "node:crypto";
import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { basename, join, relative } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const manifest = JSON.parse(await readFile(join(root, "manifest.json"), "utf8"));
const sourceRoot = join(root, "installer", "windows");
const releaseRoot = join(root, "windows-release");
const stageRoot = join(releaseRoot, ".stage");
const bundleName = `FDE365-Knowledge-OS-Windows-v${manifest.version}`;
const bundleRoot = join(stageRoot, bundleName);
const components = join(bundleRoot, "组件");
const pluginRoot = join(components, manifest.id);
const templateRoot = join(components, "FDE365知识库模板");
const topFiles = ["开始安装 FDE365.cmd", "开始安装 FDE365.ps1", "更新 FDE365.cmd", "更新 FDE365.ps1", "检查安装.cmd", "检查安装.ps1", "打开 FDE365 Claude.cmd", "打开 FDE365 Codex.cmd", "打开 FDE365 知识库.cmd", "⭐ 先看我.html", "使用说明.md"];
const pluginFiles = ["manifest.json", "main.js", "styles.css", "README.md", "DEVELOPMENT.md", "LICENSE", "LICENSES.md", "KB-SUITE-LICENSE.txt", "KB-SUITE-NOTICE.md", "DEFUDDLE-LICENSE.txt"];
const secretPatterns = [/sk-[A-Za-z0-9_-]{20,}/, /gh[pousr]_[A-Za-z0-9]{30,}/, /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/];

async function walk(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await walk(path)); else result.push(path);
  }
  return result;
}

async function audit(dir) {
  for (const file of await walk(dir)) {
    const path = relative(dir, file);
    const name = basename(file);
    if (name === ".DS_Store" || name === "data.json" || /Obsidian.*\.exe$/i.test(name)) throw new Error(`Forbidden Windows release path: ${path}`);
    if ((await stat(file)).size > 2_000_000 || /\.(?:png|jpe?g|gif|zip)$/i.test(file)) continue;
    const content = await readFile(file, "utf8");
    if (secretPatterns.some((pattern) => pattern.test(content))) throw new Error(`Possible secret in ${path}`);
    if (/xjlb-|xingji-liubai/i.test(content)) throw new Error(`Legacy brand in ${path}`);
  }
}

await rm(releaseRoot, { recursive: true, force: true });
await mkdir(join(components, "helpers"), { recursive: true });
await mkdir(pluginRoot, { recursive: true });
for (const name of topFiles) await cp(join(sourceRoot, name), join(bundleRoot, name));
await cp(join(sourceRoot, "obsidian-release.json"), join(components, "obsidian-release.json"));
await cp(join(sourceRoot, "helpers", "FDE365.Common.ps1"), join(components, "helpers", "FDE365.Common.ps1"));
await cp(join(sourceRoot, "helpers", "fde365-token.ps1"), join(components, "helpers", "fde365-token.ps1"));
await cp(join(root, "vault-template"), templateRoot, { recursive: true });
for (const name of pluginFiles) await cp(join(root, name), join(pluginRoot, name));
await mkdir(join(pluginRoot, "assets"), { recursive: true });
await cp(join(root, "assets", "fde365-logo.png"), join(pluginRoot, "assets", "fde365-logo.png"));
await cp(join(root, "assets", "fde365-logo-source.svg"), join(pluginRoot, "assets", "fde365-logo-source.svg"));
await audit(bundleRoot);
const zipPath = join(releaseRoot, `${bundleName}.zip`);
const python = process.platform === "win32" ? "python" : "python3";
const zipped = spawnSync(python, [join(root, "scripts", "create-unicode-zip.py"), stageRoot, zipPath, bundleName], { stdio: "inherit" });
if (zipped.status !== 0) throw new Error("Unicode zip creation failed for Windows installer");
const hash = createHash("sha256").update(await readFile(zipPath)).digest("hex");
await writeFile(join(releaseRoot, "SHA256SUMS-Windows.txt"), `${hash}  ${basename(zipPath)}\n`, "utf8");
await rm(stageRoot, { recursive: true, force: true });
console.log(`Packaged Windows installer v${manifest.version}`);
console.log(`${hash}  ${basename(zipPath)}`);
