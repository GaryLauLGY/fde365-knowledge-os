import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
const root = "installer/macos";
const shell = ["开始安装 FDE365.command", "更新 FDE365.command", "检查安装.command", "打开 FDE365 知识库.command", "helpers/configure-user-environment.sh"];
const jxa = ["write-plugin-settings.jxa", "enable-plugin.jxa", "register-vault.jxa"];
for (const name of shell) {
  const r = spawnSync("/bin/bash", ["-n", root + "/" + name], { encoding: "utf8" });
  assert.equal(r.status, 0, name + ": " + r.stderr);
}
for (const name of jxa) {
  const r = spawnSync(process.execPath, ["--check"], { input: await readFile(root + "/helpers/" + name, "utf8"), encoding: "utf8" });
  assert.equal(r.status, 0, name + ": " + r.stderr);
}
const install = await readFile(root + "/" + shell[0], "utf8");
for (const required of ["https://api.ipzsk.com/v1", "https://chatgpt.com/codex/install.sh", "codesign --verify --deep --strict", "FDE365_SIMULATION", "write-plugin-settings.jxa", "[模拟] 已跳过打开 Obsidian"]) assert.ok(install.includes(required), required);
assert.doesNotMatch(install, /read.*TOKEN|claude.ai\/install|write-client-config/);
const update = await readFile(root + "/" + shell[1], "utf8");
assert.match(update, /用户数据已保留/);
assert.doesNotMatch(update, /rm\s+-rf[^\n]*PLUGIN_TARGET|write-client-config/);
const environment = await readFile(root + "/helpers/configure-user-environment.sh", "utf8");
assert.doesNotMatch(environment, /\.claude|\.codex|\.zshrc|\.bash_profile|TOKEN/);
const settings = await readFile(root + "/helpers/write-plugin-settings.jxa", "utf8");
assert.match(settings, /schemaVersion = 5/);
assert.doesNotMatch(settings, /readToken|baseUrl|base_url|fde365.token =/);
for (const f of ["使用说明.md", "⭐ 先看我.html", "obsidian-release.env"]) await access(root + "/" + f);
assert.match(await readFile(root + "/obsidian-release.env", "utf8"), /https:\/\/fdekb.garylau.ai\/vendor\/obsidian/);
console.log("PASS Mac installer uses account login, a per-Vault Agent, and no global client connection.");
