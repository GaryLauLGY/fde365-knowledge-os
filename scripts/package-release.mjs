import { createHash } from "node:crypto";
import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const root = process.cwd();
const require = createRequire(import.meta.url);
const { UPDATE_FILES } = require(join(root, "github-updater.js"));
const manifest = JSON.parse(await readFile(join(root, "manifest.json"), "utf8"));
const version = manifest.version;
const repository = "GaryLauLGY/fde365-knowledge-os";
const releaseRoot = join(root, "release");
const stageRoot = join(releaseRoot, ".stage");
const pluginDir = join(stageRoot, manifest.id);
const runtimeFiles = [
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
  "CLAUDIAN-LICENSE.txt",
];
const forbiddenNames = [/^data\.json$/i, /^workspace.*\.json$/i, /^\.DS_Store$/i];
const secretPatterns = [
  /sk-[A-Za-z0-9_-]{20,}/,
  /AIza[0-9A-Za-z_-]{30,}/,
  /gh[pousr]_[A-Za-z0-9]{30,}/,
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
];
const legacyIdentifierPatterns = [/xingji-liubai/i, /xjlb-/i];

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
    if (forbiddenNames.some((pattern) => pattern.test(name)) || path.split("/").includes(".trash")) throw new Error(`Forbidden release path: ${path}`);
    if ((await stat(file)).size > 2_000_000 || /\.(?:png|jpe?g|gif|zip)$/i.test(file)) continue;
    const content = await readFile(file, "utf8");
    if (secretPatterns.some((pattern) => pattern.test(content))) throw new Error(`Possible secret in ${path}`);
    if (legacyIdentifierPatterns.some((pattern) => pattern.test(content))) throw new Error(`Legacy plugin identifier in ${path}`);
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
await mkdir(pluginDir, { recursive: true });
for (const name of runtimeFiles) await cp(join(root, name), join(pluginDir, name));
await mkdir(join(pluginDir, "docs"), { recursive: true });
await cp(join(root, "docs", "billing-backend.md"), join(pluginDir, "docs", "billing-backend.md"));
await mkdir(join(pluginDir, "assets"), { recursive: true });
await cp(join(root, "assets", "fde365-logo.png"), join(pluginDir, "assets", "fde365-logo.png"));
await cp(join(root, "assets", "fde365-logo-source.svg"), join(pluginDir, "assets", "fde365-logo-source.svg"));
await audit(pluginDir);

const zipPath = join(releaseRoot, `FDE365-Knowledge-OS-Plugin-v${version}.zip`);
zip(stageRoot, zipPath, manifest.id);
await rm(stageRoot, { recursive: true, force: true });

const updateFiles = [];
for (const file of UPDATE_FILES) {
  const source = join(root, file.target);
  const destination = join(releaseRoot, file.asset);
  await cp(source, destination);
  updateFiles.push({ ...file, sha256: await sha256(destination) });
}
const updateManifestPath = join(releaseRoot, "update-manifest.json");
await writeFile(updateManifestPath, `${JSON.stringify({
  schemaVersion: 1,
  pluginId: manifest.id,
  version,
  minAppVersion: manifest.minAppVersion,
  repository,
  files: updateFiles,
}, null, 2)}\n`, "utf8");

await audit(releaseRoot);
const checksumPaths = [zipPath, ...UPDATE_FILES.map((file) => join(releaseRoot, file.asset)), updateManifestPath];
const checksums = [];
for (const path of checksumPaths) checksums.push(`${await sha256(path)}  ${path.split("/").at(-1)}`);
await writeFile(join(releaseRoot, "SHA256SUMS.txt"), `${checksums.join("\n")}\n`, "utf8");

console.log(`Packaged v${version}`);
console.log(checksums.join("\n"));
