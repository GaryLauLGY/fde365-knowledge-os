import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const blueprint = JSON.parse(await readFile("blueprint.json", "utf8"));
const requiredFolders = [
  "0-录音处理/待处理录音",
  "1-老板说明书",
  "2-产品库",
  "3-客户需求库",
  "4-素材案例库",
  "5-方法论库",
  "6-内容生产/选题",
  "6-内容生产/草稿",
  "6-内容生产/待审核",
  "6-内容生产/待发布",
  "6-内容生产/已发布",
  "6-内容生产/数据复盘",
  ".fde/reports",
  ".fde/quarantine",
  "7-系统/AI协作/运行记录",
];

assert.equal(blueprint.id, "fde365-six-assets");
assert.equal(blueprint.root, "FDE365知识库");
assert.equal(blueprint.version, 4);
for (const path of requiredFolders) assert.ok(blueprint.folders.includes(path), `missing blueprint folder: ${path}`);
for (const path of ["0-使用说明.md", "VERSION", "fde-manifest.json", ".fde/config.yaml", "AGENTS.md", "1-老板说明书/老板说明书.md", ".agents/skills/fde-start/SKILL.md", ".agents/skills/fde-ingest/SKILL.md", ".agents/skills/fde-health/SKILL.md"]) {
  assert.equal(typeof blueprint.files[path], "string", `missing blueprint file: ${path}`);
  assert.ok(blueprint.files[path].trim(), `empty blueprint file: ${path}`);
}
assert.ok(!Object.keys(blueprint.files).some((path) => path.endsWith(".gitkeep")));
assert.equal(new Set(blueprint.folders).size, blueprint.folders.length);
const skillPaths = Object.keys(blueprint.files).filter((path) => /^\.agents\/skills\/[^/]+\/SKILL\.md$/.test(path));
assert.equal(skillPaths.length, 35);
assert.ok(skillPaths.every((path) => /^\.agents\/skills\/fde-[^/]+\/SKILL\.md$/.test(path)), "all Skill directories must use the fde- namespace");
for (const path of skillPaths) {
  const id = path.split("/")[2];
  assert.match(blueprint.files[path], new RegExp(`^---\\nname: ${id}\\n`), `Skill frontmatter must match directory: ${path}`);
}
assert.ok(!Object.keys(blueprint.files).some((path) => /(?:^|\/)kb(?:-|\/|\.)/i.test(path)), "blueprint paths must not contain the legacy kb namespace");
assert.ok(!Object.values(blueprint.files).some((content) => /(?:\/|\$|name:\s*)kb-/i.test(content)), "blueprint must not contain legacy /kb-* commands");
assert.ok(!Object.values(blueprint.files).some((content) => /\.kb(?:\/|\b)/i.test(content)), "blueprint must not contain the legacy .kb runtime path");

console.log(`PASS blueprint contains ${blueprint.folders.length} folders and ${Object.keys(blueprint.files).length} files`);
