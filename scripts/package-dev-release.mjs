import { createHash } from "node:crypto";
import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const manifest = JSON.parse(await readFile(join(root, "manifest.json"), "utf8"));
const releaseRoot = join(root, "dev-release");
const stageRoot = join(releaseRoot, ".stage");
const pluginDir = join(stageRoot, manifest.id);
const runtimeFiles = [
  "styles.css",
  "README.md",
  "DEVELOPMENT.md",
  "LICENSE",
  "LICENSES.md",
  "KB-SUITE-LICENSE.txt",
  "KB-SUITE-NOTICE.md",
  "DEFUDDLE-LICENSE.txt",
  "CLAUDIAN-LICENSE.txt",
];
const forbiddenNames = [/^data\.json$/i, /^workspace.*\.json$/i, /^\.DS_Store$/i];
const secretPatterns = [
  /sk-[A-Za-z0-9_-]{20,}/,
  /AIza[0-9A-Za-z_-]{30,}/,
  /gh[pousr]_[A-Za-z0-9]{30,}/,
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
];

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
    const name = file.split("/").at(-1);
    const path = relative(dir, file);
    if (forbiddenNames.some((pattern) => pattern.test(name)) || path.split("/").includes(".trash")) throw new Error(`Forbidden development release path: ${path}`);
    if ((await stat(file)).size > 2_000_000 || /\.(?:png|jpe?g|gif|zip)$/i.test(file)) continue;
    const content = await readFile(file, "utf8");
    if (secretPatterns.some((pattern) => pattern.test(content))) throw new Error(`Possible secret in ${path}`);
  }
}

async function sha256(file) {
  return createHash("sha256").update(await readFile(file)).digest("hex");
}

await rm(releaseRoot, { recursive: true, force: true });
await mkdir(pluginDir, { recursive: true });
for (const name of runtimeFiles) await cp(join(root, name), join(pluginDir, name));
await cp(join(root, "main.dev.js"), join(pluginDir, "main.js"));
await writeFile(join(pluginDir, "manifest.json"), `${JSON.stringify({
  ...manifest,
  name: "FDE365 Knowledge OS DEV",
  description: "FDE365 开发构建：使用本机 Codex CLI 登录与配置，不要求 Vault Token。",
}, null, 2)}\n`, "utf8");
await mkdir(join(pluginDir, "assets"), { recursive: true });
await cp(join(root, "assets", "fde365-logo.png"), join(pluginDir, "assets", "fde365-logo.png"));
await cp(join(root, "assets", "fde365-logo-source.svg"), join(pluginDir, "assets", "fde365-logo-source.svg"));
await audit(pluginDir);

const zipPath = join(releaseRoot, `FDE365-Knowledge-OS-Plugin-v${manifest.version}-dev.zip`);
const result = spawnSync("zip", ["-q", "-X", "-r", zipPath, manifest.id], { cwd: stageRoot, stdio: "inherit" });
if (result.status !== 0) throw new Error("zip failed for development release");
await rm(stageRoot, { recursive: true, force: true });
const checksum = await sha256(zipPath);
await writeFile(join(releaseRoot, "SHA256SUMS.txt"), `${checksum}  ${zipPath.split("/").at(-1)}\n`, "utf8");

console.log(`Packaged DEV v${manifest.version}`);
console.log(`${checksum}  ${zipPath.split("/").at(-1)}`);
