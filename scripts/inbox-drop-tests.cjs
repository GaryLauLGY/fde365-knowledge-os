const assert = require("node:assert/strict");
const Module = require("node:module");

class EmptyClass {}
class MockTFile {
  constructor(path, size = 0) {
    this.path = path;
    this.name = path.split("/").at(-1);
    this.extension = this.name.includes(".") ? this.name.split(".").at(-1) : "";
    this.basename = this.extension ? this.name.slice(0, -(this.extension.length + 1)) : this.name;
    this.stat = { ctime: Date.now(), mtime: Date.now(), size };
  }
}

const originalLoad = Module._load;
Module._load = function patchedLoad(request, parent, isMain) {
  if (request === "obsidian") {
    return {
      ItemView: EmptyClass,
      Modal: EmptyClass,
      Notice: EmptyClass,
      TFile: MockTFile,
      normalizePath: (value) => value.replace(/\\/g, "/").replace(/\/+/g, "/"),
      setIcon: () => {},
    };
  }
  return originalLoad.call(this, request, parent, isMain);
};

const { FDEWorkspaceService } = require("../fde-workspace.js");

(async () => {
  const folders = new Set();
  const files = new Map();
  let agentRuns = 0;
  let refreshes = 0;
  let executeAgentImpl = async () => null;
  let lastAgentSources = [];
  let lastAgentOptions = {};
  const activeFile = new MockTFile("无关目录/当前笔记.md");
  const vault = {
    adapter: { exists: async (path) => folders.has(path) || files.has(path) },
    getAbstractFileByPath: (path) => files.get(path) || (folders.has(path) ? { path, children: [] } : null),
    getMarkdownFiles: () => [...files.values()].filter((file) => file.extension === "md"),
    createFolder: async (path) => { folders.add(path); return { path, children: [] }; },
    createBinary: async (path, buffer) => {
      const file = new MockTFile(path, buffer.byteLength);
      file.bytes = Buffer.from(buffer);
      files.set(path, file);
      return file;
    },
    create: async (path, content) => {
      const file = new MockTFile(path, Buffer.byteLength(content));
      file.content = content;
      files.set(path, file);
      return file;
    },
    process: async (file, callback) => {
      file.content = callback(file.content || "");
      return file.content;
    },
  };
  const metadataCache = {
    getFileCache: (file) => {
      const status = String(file.content || "").match(/^status:\s*(.+)$/mi)?.[1]?.trim();
      return { frontmatter: status ? { status } : {} };
    },
  };
  const fileManager = {
    renameFile: async (file, targetPath) => {
      files.delete(file.path);
      file.path = targetPath;
      file.name = targetPath.split("/").at(-1);
      file.basename = file.name.replace(/\.[^.]+$/, "");
      files.set(targetPath, file);
    },
  };
  const plugin = {
    app: { vault, metadataCache, fileManager, workspace: { getActiveFile: () => activeFile } },
    executeAgent: async (...args) => {
      agentRuns += 1;
      lastAgentSources = args[2];
      lastAgentOptions = args[3] || {};
      return executeAgentImpl(...args);
    },
    refreshDashboard: () => { refreshes += 1; },
  };
  const service = new FDEWorkspaceService(plugin);
  const dropped = {
    name: "客户访谈.txt",
    type: "text/plain",
    size: 4,
    arrayBuffer: async () => Uint8Array.from([1, 2, 3, 4]).buffer,
  };

  const first = await service.importInboxFiles([dropped]);
  assert.equal(first.length, 1);
  assert.equal(first[0].attachment.path, "FDE365知识库/0-待处理材料/待处理/原始文件/客户访谈.txt");
  assert.equal(first[0].note.path, "FDE365知识库/0-待处理材料/待处理/客户访谈.md");
  assert.match(first[0].note.content, /status: pending/);
  assert.match(first[0].note.content, /尚未运行 \/fde-ingest/);
  assert.match(first[0].note.content, /等待用户决定/);
  assert.equal(agentRuns, 0, "dropping a file must never execute a Skill automatically");

  const second = await service.importInboxFiles([dropped]);
  assert.equal(second[0].attachment.path, "FDE365知识库/0-待处理材料/待处理/原始文件/客户访谈-2.txt");
  assert.equal(second[0].note.path, "FDE365知识库/0-待处理材料/待处理/客户访谈-2.md");
  assert.equal(agentRuns, 0);

  let finishAgent;
  executeAgentImpl = async () => new Promise((resolve) => { finishAgent = resolve; });
  const processing = service.processInboxFiles([first[0].note, second[0].note]);
  for (let attempt = 0; attempt < 20 && typeof finishAgent !== "function"; attempt += 1) {
    await new Promise((resolve) => setImmediate(resolve));
  }
  assert.equal(service.inboxProcessingState(first[0].note).status, "running");
  assert.equal(service.inboxProcessingState(second[0].note).status, "running");
  assert.ok(refreshes > 0, "starting a batch must refresh the inbox so its spinner is visible");
  assert.deepEqual(lastAgentSources.map((file) => file.path), [first[0].note.path, second[0].note.path], "batch processing must not attach an unrelated active note");
  assert.equal(lastAgentOptions.sessionId, "", "first processing pass must create one new Agent conversation");
  const successTask = { taskId: "fde-ingest-test", status: "waiting-review" };
  plugin.lastAgentResult = {
    task: successTask,
    outputFile: new MockTFile("FDE365知识库/7-系统/AI协作/输出/fde-ingest-test.md"),
    result: {
      content: "已生成分流预览：客户需求、产品事实与待确认项。",
      conversationId: "conversation-ingest-test",
      provider: "fde365-agent",
      model: "gpt-test",
    },
  };
  finishAgent(successTask);
  const success = await processing;
  assert.equal(success.status, "success");
  assert.equal(success.outputPath, plugin.lastAgentResult.outputFile.path);
  assert.equal(service.inboxProcessingState(first[0].note).status, "success");
  assert.match(service.inboxProcessingState(first[0].note).message, /右侧对话继续/);
  assert.equal(service.inboxProcessingState(first[0].note).outputPath, plugin.lastAgentResult.outputFile.path);
  assert.match(service.inboxProcessingState(first[0].note).preview, /客户需求/);
  assert.match(service.inboxProcessingState(first[0].note).resultContent, /产品事实/);
  assert.equal(service.inboxProcessingState(first[0].note).conversationId, "conversation-ingest-test");
  assert.deepEqual(service.inboxProcessingState(first[0].note).sourcePaths, [first[0].note.path, second[0].note.path]);
  assert.equal(service.inboxProcessingState(first[0].note).messages.length, 2, "the initial preview must become the first turn of the material conversation");
  assert.equal(
    service.inboxProcessingState(first[0].note).messages,
    service.inboxProcessingState(second[0].note).messages,
    "all materials in one batch must share the same visible conversation history",
  );

  executeAgentImpl = async () => {
    const continuedTask = { taskId: "fde-ingest-continued", status: "waiting-review" };
    plugin.lastAgentResult = {
      task: continuedTask,
      outputFile: new MockTFile("FDE365知识库/7-系统/AI协作/输出/fde-ingest-continued.md"),
      result: {
        content: "已按反馈更新分流预览。",
        conversationId: "conversation-ingest-test",
        provider: "fde365-agent",
        model: "gpt-test",
      },
    };
    return continuedTask;
  };
  const continued = await service.processInboxFiles([first[0].note]);
  assert.equal(continued.status, "success");
  assert.equal(lastAgentOptions.sessionId, "conversation-ingest-test", "reprocessing the same material must resume its existing Agent conversation");
  assert.equal(service.inboxProcessingState(first[0].note).messages.length, 4, "reprocessing must append a turn instead of replacing the visible conversation");
  assert.match(service.inboxProcessingState(first[0].note).messages.at(-1).content, /更新分流预览/);

  executeAgentImpl = async () => ({ status: "failed", error: "模型请求失败" });
  const failure = await service.processInboxFiles([first[0].note]);
  assert.equal(failure.status, "failed");
  assert.equal(service.inboxProcessingState(first[0].note).status, "failed");
  assert.match(service.inboxProcessingState(first[0].note).message, /模型请求失败/);

  const pendingPath = first[0].note.path;
  const moved = await service.completeInboxFiles([first[0].note]);
  assert.equal(moved.get(pendingPath), "FDE365知识库/0-待处理材料/已处理记录/客户访谈.md");
  assert.equal(first[0].note.path, "FDE365知识库/0-待处理材料/已处理记录/客户访谈.md");
  assert.match(first[0].note.content, /^status: processed$/mi);
  assert.match(first[0].note.content, /^processed_at:/mi);

  const legacyPending = new MockTFile("FDE365知识库/0-录音处理/待处理录音/旧材料.md");
  const genericPending = new MockTFile("FDE365知识库/0-待处理材料/待处理/新材料.md");
  const legacyConfigService = new FDEWorkspaceService({
    app: {
      vault: {
        adapter: {
          exists: async (path) => path === "FDE365知识库/.fde/config.yaml",
          read: async () => "inbox:\n  recordings: 0-录音处理/待处理录音\n  processed: 0-录音处理/已处理\n",
        },
        getMarkdownFiles: () => [legacyPending, genericPending],
      },
    },
  });
  await legacyConfigService.reloadConfig();
  assert.equal(legacyConfigService.inboxPath("pending"), "FDE365知识库/0-待处理材料/待处理", "legacy recording config must migrate new writes to the generic inbox");
  assert.equal(legacyConfigService.inboxPath("processed"), "FDE365知识库/0-待处理材料/已处理记录");
  assert.deepEqual(legacyConfigService.pendingFiles().map((file) => file.path), [legacyPending.path, genericPending.path], "legacy recording materials must remain visible without moving or deleting them");

  console.log("PASS generic inbox handles every file type, keeps legacy recording materials visible and exposes explicit batch processing states.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
