const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const {
  FdeCodexAgentRuntime,
  buildIsolatedCodexConfig,
  buildChildEnvironment,
  buildTurnPrompt,
  codexConfigPath,
  ensureIsolatedCodexConfig,
  hasManagedCodexConfig,
  isolatedCodexHome,
} = require("../fde-agent-runtime.js");

async function main() {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), "fde365-agent-test-"));
  try {
    const codexHome = isolatedCodexHome(home);
    assert.equal(codexHome, path.join(home, ".obsidian", "plugins", "fde365-knowledge-os", ".fde365-agent", "codex-home"));
    assert.equal(codexConfigPath(codexHome), path.join(codexHome, "config.toml"));
    assert.equal(hasManagedCodexConfig(codexHome), false);
    ensureIsolatedCodexConfig(codexHome, "gpt-5.6-luna");
    assert.equal(hasManagedCodexConfig(codexHome), true);
    assert.match(fs.readFileSync(codexConfigPath(codexHome), "utf8"), /env_key = "FDE365_TOKEN"/);
    assert.doesNotMatch(buildIsolatedCodexConfig("gpt-5.6-luna"), /test-token/);

    const prompt = buildTurnPrompt({
      messages: [
        { role: "user", content: "上一个问题" },
        { role: "assistant", content: "上一个回答" },
        { role: "user", content: "这次请生成草稿" },
      ],
      context: [{ path: "FDE365知识库/2-产品库/产品A.md", title: "产品A", excerpt: "产品事实" }],
    });
    assert.match(prompt, /上一个问题/);
    assert.match(prompt, /产品A\.md/);
    assert.match(prompt, /这次请生成草稿/);

    const originalProcessCodexHome = process.env.CODEX_HOME;
    const originalProcessToken = process.env.FDE365_TOKEN;
    const env = buildChildEnvironment(codexHome, "test-token");
    assert.equal(env.NO_COLOR, "1");
    assert.equal(env.CODEX_HOME, codexHome);
    assert.equal(env.FDE365_TOKEN, "test-token");
    assert.equal(process.env.CODEX_HOME, originalProcessCodexHome);
    assert.equal(process.env.FDE365_TOKEN, originalProcessToken);

    const fakeCodex = path.join(home, "fake-codex");
    fs.writeFileSync(fakeCodex, `#!/usr/bin/env node
const readline = require("node:readline");
const rl = readline.createInterface({ input: process.stdin });
const send = (value) => process.stdout.write(JSON.stringify(value) + "\\n");
rl.on("line", (line) => {
  const message = JSON.parse(line);
  if (message.method === "initialize") send({ jsonrpc: "2.0", id: message.id, result: {} });
  else if (message.method === "thread/start") send({ jsonrpc: "2.0", id: message.id, result: { thread: { id: "thread-fde365" } } });
  else if (message.method === "turn/start") {
    send({ jsonrpc: "2.0", id: message.id, result: { turn: { id: "turn-fde365" } } });
    setTimeout(() => {
      send({ jsonrpc: "2.0", method: "item/agentMessage/delta", params: { threadId: "thread-fde365", turnId: "turn-fde365", delta: "Agent 已就绪" } });
      send({ jsonrpc: "2.0", method: "turn/completed", params: { threadId: "thread-fde365", turn: { id: "turn-fde365", status: "completed" } } });
    }, 10);
  } else if (message.method === "turn/interrupt") send({ jsonrpc: "2.0", id: message.id, result: {} });
});
`, { mode: 0o755 });
    fs.chmodSync(fakeCodex, 0o755);

    const plugin = {
      app: { vault: { adapter: { getBasePath: () => home } } },
      manifest: { id: "fde365-knowledge-os", version: "1.1.0" },
      knowledgeRoot: "FDE365知识库",
      settings: { ai: { fde365: { token: "test-token", model: "gpt-5.6-luna", timeoutMs: 30000 } } },
    };
    const runtime = new FdeCodexAgentRuntime(plugin, { codexPath: fakeCodex, codexHome });
    const result = await runtime.complete({
      requestId: "test-agent",
      messages: [{ role: "user", content: "检查 Agent" }],
      context: [],
    });
    assert.equal(result.content, "Agent 已就绪");
    assert.equal(result.conversationId, "thread-fde365");
    assert.equal(result.provider, "fde365-agent");
    await runtime.shutdown();
  } finally {
    fs.rmSync(home, { recursive: true, force: true });
  }

  console.log("PASS FDE365 Agent creates a per-Vault Codex home, leaves process/global config untouched and preserves conversation context.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
