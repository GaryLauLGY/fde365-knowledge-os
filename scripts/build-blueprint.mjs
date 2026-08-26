import { readFile, readdir, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const root = process.cwd();
const sourceRoot = join(root, "vault-template");
const outputPath = join(root, "blueprint.json");
const folders = new Set([
  "7-系统",
  "7-系统/AI协作",
  "7-系统/AI协作/运行记录",
  "7-系统/AI协作/输出",
]);
const files = {};

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  entries.sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
  for (const entry of entries) {
    const absolute = join(dir, entry.name);
    const path = relative(sourceRoot, absolute).split("\\").join("/");
    if (entry.isDirectory()) {
      folders.add(path);
      await walk(absolute);
      continue;
    }
    if (entry.name === ".gitkeep") continue;
    files[path] = await readFile(absolute, "utf8");
  }
}

await walk(sourceRoot);

const blueprint = {
  id: "fde365-six-assets",
  version: 6,
  root: "FDE365知识库",
  folders: [...folders].sort((a, b) => a.localeCompare(b, "zh-CN")),
  files: Object.fromEntries(Object.entries(files).sort(([a], [b]) => a.localeCompare(b, "zh-CN"))),
};

await writeFile(outputPath, `${JSON.stringify(blueprint, null, 2)}\n`, "utf8");
console.log(`Generated blueprint v${blueprint.version}: ${blueprint.folders.length} folders, ${Object.keys(blueprint.files).length} files.`);
