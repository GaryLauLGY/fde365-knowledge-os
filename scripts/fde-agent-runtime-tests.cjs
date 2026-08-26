const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const {
  FdeCodexAgentRuntime,
  buildIsolatedCodexConfig,
  buildChildEnvironment,
  buildLocalCliEnvironment,
  buildBaseInstructions,
  buildTurnPrompt,
  codexConfigPath,
  ensureIsolatedCodexConfig,
  hasManagedCodexConfig,
  isolatedCodexHome,
  executionPolicy,
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
    const localEnvironment = buildLocalCliEnvironment({
      CODEX_HOME: "/existing/local-codex-home",
      OPENAI_API_KEY: "local-test-credential",
      PATH: "/local/bin",
    });
    assert.equal(localEnvironment.CODEX_HOME, "/existing/local-codex-home");
    assert.equal(localEnvironment.OPENAI_API_KEY, "local-test-credential");
    assert.equal(localEnvironment.FDE365_TOKEN, undefined);
    assert.equal(localEnvironment.NO_COLOR, "1");

    assert.deepEqual(executionPolicy("approval", home), {
      mode: "approval",
      approvalPolicy: "on-request",
      sandbox: "read-only",
      sandboxPolicy: { type: "readOnly", networkAccess: false },
    });
    assert.deepEqual(executionPolicy("yolo", home), {
      mode: "yolo",
      approvalPolicy: "never",
      sandbox: "workspace-write",
      sandboxPolicy: { type: "workspaceWrite", writableRoots: [home], networkAccess: false },
    });
    assert.match(buildBaseInstructions({ executionMode: "approval" }, home, "FDE365知识库"), /需要批准模式/);
    assert.match(buildBaseInstructions({ executionMode: "yolo" }, home, "FDE365知识库"), /YOLO 模式[\s\S]*无需等待用户逐次批准/);

    const fakeCodex = path.join(home, "fake-codex");
    fs.writeFileSync(fakeCodex, `#!/usr/bin/env node
const readline = require("node:readline");
const rl = readline.createInterface({ input: process.stdin });
const send = (value) => process.stdout.write(JSON.stringify(value) + "\\n");
rl.on("line", (line) => {
  const message = JSON.parse(line);
  if (message.method === "initialize") send({ jsonrpc: "2.0", id: message.id, result: {} });
  else if (message.method === "thread/start") {
    const valid = (message.params.approvalPolicy === "on-request" && message.params.sandbox === "read-only")
      || (message.params.approvalPolicy === "never" && message.params.sandbox === "workspace-write");
    if (!valid) send({ jsonrpc: "2.0", id: message.id, error: { message: "invalid execution policy" } });
    else send({ jsonrpc: "2.0", id: message.id, result: { thread: { id: "thread-fde365" } } });
  }
  else if (message.method === "turn/start") {
    const policy = message.params.sandboxPolicy || {};
    const valid = (message.params.approvalPolicy === "on-request" && policy.type === "readOnly" && policy.networkAccess === false)
      || (message.params.approvalPolicy === "never" && policy.type === "workspaceWrite" && policy.networkAccess === false && Array.isArray(policy.writableRoots) && policy.writableRoots.length === 1);
    if (!valid) return send({ jsonrpc: "2.0", id: message.id, error: { message: "invalid turn execution policy" } });
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
      settings: { ai: { assistant: { executionMode: "approval" }, fde365: { token: "test-token", model: "gpt-5.6-luna", timeoutMs: 30000 } } },
      requestAgentApproval: async () => true,
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
    assert.deepEqual(await runtime.handleServerRequest("item/fileChange/requestApproval", { grantRoot: home }), { decision: "accept" });
    await runtime.shutdown();

    let yoloApprovalUiCalls = 0;
    const yoloPlugin = {
      ...plugin,
      settings: { ai: { assistant: { executionMode: "yolo" }, fde365: { token: "test-token", model: "gpt-5.6-luna", timeoutMs: 30000 } } },
      requestAgentApproval: async () => { yoloApprovalUiCalls += 1; return false; },
    };
    const yoloRuntime = new FdeCodexAgentRuntime(yoloPlugin, { codexPath: fakeCodex, codexHome });
    const yoloResult = await yoloRuntime.complete({
      requestId: "test-yolo-agent",
      messages: [{ role: "user", content: "在当前 Vault 内直接处理" }],
      context: [],
    });
    assert.equal(yoloResult.content, "Agent 已就绪");
    assert.deepEqual(await yoloRuntime.handleServerRequest("item/fileChange/requestApproval", { grantRoot: home }), { decision: "accept" });
    assert.equal(yoloApprovalUiCalls, 0);
    assert.deepEqual(await yoloRuntime.handleServerRequest("item/commandExecution/requestApproval", { cwd: path.dirname(home), command: "pwd" }), { decision: "decline" });
    assert.deepEqual(await yoloRuntime.handleServerRequest("item/commandExecution/requestApproval", { cwd: home, command: "rm -rf ." }), { decision: "decline" });
    await yoloRuntime.shutdown();

    const fakeLocalCodex = path.join(home, "fake-local-codex");
    fs.writeFileSync(fakeLocalCodex, `#!/usr/bin/env node
const readline = require("node:readline");
const rl = readline.createInterface({ input: process.stdin });
const send = (value) => process.stdout.write(JSON.stringify(value) + "\\n");
rl.on("line", (line) => {
  const message = JSON.parse(line);
  if (["thread/start", "thread/resume", "turn/start"].includes(message.method) && Object.hasOwn(message.params || {}, "model")) {
    send({ jsonrpc: "2.0", id: message.id, error: { message: "DEV request must inherit the local default model" } });
  } else if (message.method === "initialize") send({ jsonrpc: "2.0", id: message.id, result: {} });
  else if (message.method === "thread/start") send({ jsonrpc: "2.0", id: message.id, result: { thread: { id: "thread-local" } } });
  else if (message.method === "turn/start") {
    send({ jsonrpc: "2.0", id: message.id, result: { turn: { id: "turn-local" } } });
    setTimeout(() => {
      send({ jsonrpc: "2.0", method: "item/agentMessage/delta", params: { threadId: "thread-local", turnId: "turn-local", delta: "Local Codex ready" } });
      send({ jsonrpc: "2.0", method: "turn/completed", params: { threadId: "thread-local", turn: { id: "turn-local", status: "completed" } } });
    }, 10);
  }
});
`, { mode: 0o755 });
    fs.chmodSync(fakeLocalCodex, 0o755);

    const devCodexHome = path.join(home, "must-not-be-created");
    const devPlugin = {
      ...plugin,
      settings: { ai: { assistant: { executionMode: "approval" }, fde365: { token: "", model: "gpt-5.6-luna", timeoutMs: 30000 } } },
    };
    const devRuntime = new FdeCodexAgentRuntime(devPlugin, {
      codexPath: fakeLocalCodex,
      codexHome: devCodexHome,
      mode: "local-cli",
    });
    assert.equal(devRuntime.describe().mode, "local-cli");
    assert.equal(devRuntime.describe().configured, true);
    const devResult = await devRuntime.complete({
      requestId: "test-local-agent",
      messages: [{ role: "user", content: "Use local Codex" }],
      context: [],
    });
    assert.equal(devResult.content, "Local Codex ready");
    assert.equal(devResult.model, "本机 Codex 默认模型");
    assert.equal(fs.existsSync(devCodexHome), false);
    await devRuntime.shutdown();
  } finally {
    fs.rmSync(home, { recursive: true, force: true });
  }

  console.log("PASS user Agent stays per-Vault while DEV Agent inherits local Codex CLI configuration without requiring a Token or forcing a model.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
