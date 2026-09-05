const assert = require("node:assert/strict");
const Module = require("node:module");

global.window = global;

class EmptyClass {
  constructor(...args) {
    this.app = args[0];
  }
}

const obsidianMock = {
  ItemView: EmptyClass,
  Modal: EmptyClass,
  Notice: EmptyClass,
  Plugin: EmptyClass,
  PluginSettingTab: EmptyClass,
  Setting: EmptyClass,
  TFile: class TFile {},
  htmlToMarkdown: (value) => value,
  normalizePath: (value) => value.replace(/\\/g, "/").replace(/\/+/g, "/"),
  requestUrl: (...args) => global.__akosRequestHandler(...args),
  setIcon: () => {},
};

const originalLoad = Module._load;
Module._load = function patchedLoad(request, parent, isMain) {
  if (request === "obsidian") return obsidianMock;
  return originalLoad.call(this, request, parent, isMain);
};

const PluginClass = require("../main.js");
const {
  AIProviderError,
  AIProviderManager,
  Fde365Provider,
  Fde365UpdateService,
  mergeSettings,
  buildOpenAIMessages,
  FDE365_BASE_URL,
  FDE365_CHAT_ENDPOINT,
  FDE365_MODELS,
  DEFAULT_ROOT,
  LEGACY_ROOT,
  TERMINOLOGY_VERSION,
  INBOX_LAYOUT_VERSION,
  KNOWLEDGE_CONTRACT_VERSION,
  LEGACY_OWNER_DIRECTORY,
  OWNER_DIRECTORY,
  neutralizeManagedTerminology,
  migrateManagedKnowledgeContract,
  inferInboxTags,
  inferInboxCategory,
  resolveKnowledgeRoot,
  ONBOARDING_STEPS,
  ONBOARDING_VERSION,
  FDE365_RELEASE_REPOSITORY,
  FDE365_RELEASE_API,
  FDE365_UPDATE_ORIGIN,
  FDE365_BUILD_CHANNEL,
  IS_DEVELOPER_BUILD,
} = PluginClass.__testables;
const GitHubUpdater = require("../github-updater.js");

let passed = 0;

async function test(name, fn) {
  try {
    await fn();
    passed += 1;
    process.stdout.write(`PASS ${name}\n`);
  } catch (error) {
    process.stderr.write(`FAIL ${name}\n${error.stack || error}\n`);
    process.exitCode = 1;
  }
}

function apiPlugin(overrides = {}) {
  return {
    accountClient: { isLoggedIn: () => overrides.token !== "", getAccessToken: async () => "test-token" },
    settings: mergeSettings({
      ai: {
        fde365: {
          token: "test-token",
          model: "gpt-5.6-luna",
          temperature: 0.3,
          timeoutMs: 10000,
          ...overrides,
        },
      },
    }),
  };
}

(async () => {
  await test("stable artifact uses the user build channel", async () => {
    assert.equal(FDE365_BUILD_CHANNEL, "user");
    assert.equal(IS_DEVELOPER_BUILD, false);
  });

  await test("settings enforce the single fixed provider", async () => {
    const settings = mergeSettings({ ai: { provider: "codex-cli" } });
    assert.equal(settings.schemaVersion, 5);
    assert.equal(settings.ai.provider, "fde365");
    assert.equal(settings.ai.fde365.model, "gpt-5.6-luna");
    assert.equal(settings.ai.assistant.contextScope, "active-note");
    assert.equal(settings.ai.assistant.executionMode, "approval");
    assert.equal(settings.ai.assistant.panelWidth, 336);
    assert.equal(settings.onboardingVersion, 0);
    assert.equal(settings.inboxLayoutVersion, 0);
    assert.equal(settings.knowledgeContractVersion, 0);
    assert.equal(settings.ai.codexCli, undefined);
    assert.equal(settings.ai.claudeCli, undefined);
    assert.equal(settings.ai.openaiCompatible, undefined);
  });

  await test("Agent execution mode only accepts approval or yolo", async () => {
    assert.equal(mergeSettings({ ai: { assistant: { executionMode: "yolo" } } }).ai.assistant.executionMode, "yolo");
    assert.equal(mergeSettings({ ai: { assistant: { executionMode: "danger-full-access" } } }).ai.assistant.executionMode, "approval");
  });

  await test("Agent panel width persists within safe workspace bounds", async () => {
    assert.equal(mergeSettings({ ai: { assistant: { panelWidth: 448 } } }).ai.assistant.panelWidth, 448);
    assert.equal(mergeSettings({ ai: { assistant: { panelWidth: 100 } } }).ai.assistant.panelWidth, 280);
    assert.equal(mergeSettings({ ai: { assistant: { panelWidth: 900 } } }).ai.assistant.panelWidth, 560);
  });

  await test("legacy API credentials migrate to Token without retaining editable URL", async () => {
    const settings = mergeSettings({
      ai: {
        provider: "openai-compatible",
        openaiCompatible: {
          baseUrl: "https://old.example/v1",
          apiKey: "legacy-token",
          model: "claude-fable-5",
        },
      },
    });
    assert.equal(settings.ai.fde365.token, "legacy-token");
    assert.equal(settings.ai.fde365.model, "claude-fable-5");
    assert.equal(settings.ai.fde365.baseUrl, undefined);
    assert.equal(settings.ai.fde365.apiKey, undefined);
  });

  await test("onboarding v4 includes account login and credits", async () => {
    assert.equal(ONBOARDING_VERSION, 4);
    assert.equal(ONBOARDING_STEPS.length, 5);
    assert.ok(ONBOARDING_STEPS.every((step) => step.title && step.description && step.highlights.length === 3));
    const setupStep = ONBOARDING_STEPS.at(-1);
    assert.equal(setupStep.highlights[0].action, "open-token-settings");
    assert.equal(setupStep.highlights[1].action, "open-token-settings");
  });

  await test("service URL and model allowlist are fixed", async () => {
    assert.equal(FDE365_BASE_URL, "https://api.ipzsk.com/v1");
    assert.equal(FDE365_CHAT_ENDPOINT, "https://api.ipzsk.com/v1/chat/completions");
    assert.deepEqual([...FDE365_MODELS], ["claude-fable-5", "claude-opus-4-8", "gpt-5.6-sol", "gpt-5.6-luna"]);
  });

  await test("new vaults use FDE365 root while legacy vaults remain readable", async () => {
    assert.equal(DEFAULT_ROOT, "FDE365知识库");
    assert.equal(LEGACY_ROOT, String.fromCodePoint(0x661f, 0x9645, 0x7559, 0x767d, 0x77e5, 0x8bc6, 0x5e93));
    const adapter = { exists: async (path) => path === LEGACY_ROOT };
    const app = { vault: { adapter, getAbstractFileByPath: () => null } };
    assert.equal(await resolveKnowledgeRoot(app), LEGACY_ROOT);
    adapter.exists = async () => false;
    assert.equal(await resolveKnowledgeRoot(app), DEFAULT_ROOT);
  });

  await test("legacy audience terminology migrates to neutral wording without a source literal", async () => {
    const retiredAudienceTerm = String.fromCodePoint(0x8001, 0x677f);
    assert.equal(TERMINOLOGY_VERSION, 2);
    assert.equal(LEGACY_OWNER_DIRECTORY, `1-${retiredAudienceTerm}说明书`);
    assert.equal(OWNER_DIRECTORY, "1-个人说明书");
    assert.equal(
      neutralizeManagedTerminology(`${retiredAudienceTerm}说明书；${retiredAudienceTerm}原话；${retiredAudienceTerm}判断`),
      "个人说明书；本人原话；个人判断",
    );
  });

  await test("inbox inference separates material format from six-library destinations", async () => {
    const tags = inferInboxTags("客户录音转写：客户讲了预算和产品报价，后续需要复盘成交流程", "audio/m4a");
    assert.equal(INBOX_LAYOUT_VERSION, 1);
    assert.ok(tags.includes("录音转写"));
    assert.ok(tags.includes("产品库"));
    assert.ok(tags.includes("客户需求库"));
    assert.ok(tags.includes("方法论库"));
    assert.equal(inferInboxCategory(tags), "产品库");
    assert.equal(inferInboxCategory(inferInboxTags("一段没有明确业务归属的录音", "audio/wav")), "待分类");
  });

  await test("terminology migration renames the managed owner path and leaves ordinary notes unchanged", async () => {
    const retiredAudienceTerm = String.fromCodePoint(0x8001, 0x677f);
    const oldDirectoryPath = `${DEFAULT_ROOT}/${LEGACY_OWNER_DIRECTORY}`;
    const newDirectoryPath = `${DEFAULT_ROOT}/${OWNER_DIRECTORY}`;
    const files = new Map();
    const addFile = (path, content) => {
      const file = { path, content };
      files.set(path, file);
      return file;
    };
    addFile(`${oldDirectoryPath}/${retiredAudienceTerm}说明书.md`, `# ${retiredAudienceTerm}说明书\n\n${retiredAudienceTerm}判断`);
    addFile(`${DEFAULT_ROOT}/.fde/config.yaml`, `owner: 1-${retiredAudienceTerm}说明书`);
    addFile(`${DEFAULT_ROOT}/.agents/skills/fde-write/SKILL.md`, `对照${retiredAudienceTerm}表达`);
    const ordinary = addFile(`${DEFAULT_ROOT}/4-素材案例库/客户称呼.md`, `客户原文保留${retiredAudienceTerm}称呼`);
    const folders = new Map([[oldDirectoryPath, { path: oldDirectoryPath, kind: "folder" }]]);
    const vault = {
      adapter: {
        exists: async (path) => files.has(path) || folders.has(path),
        read: async (path) => files.get(path)?.content || "",
        write: async (path, content) => { files.get(path).content = content; },
        list: async (path) => path === `${DEFAULT_ROOT}/.agents/skills`
          ? { files: [`${DEFAULT_ROOT}/.agents/skills/fde-write/SKILL.md`], folders: [] }
          : { files: [], folders: [] },
      },
      getAbstractFileByPath: (path) => files.get(path) || folders.get(path) || null,
      getFiles: () => [...files.values()].filter((file) => !file.path.includes("/.fde/") && !file.path.includes("/.agents/")),
      cachedRead: async (file) => file.content,
      modify: async (file, content) => { file.content = content; },
    };
    const fileManager = {
      renameFile: async (entry, target) => {
        const source = entry.path;
        if (entry.kind === "folder") {
          folders.delete(source);
          entry.path = target;
          folders.set(target, entry);
          for (const [path, file] of [...files]) {
            if (!path.startsWith(`${source}/`)) continue;
            files.delete(path);
            file.path = `${target}${path.slice(source.length)}`;
            files.set(file.path, file);
          }
          return;
        }
        files.delete(source);
        entry.path = target;
        files.set(target, entry);
      },
    };
    const plugin = {
      app: { vault, fileManager },
      knowledgeRoot: DEFAULT_ROOT,
      settings: mergeSettings({}),
      saveSettings: async () => {},
    };

    const result = await PluginClass.prototype.migrateNeutralTerminology.call(plugin);
    assert.equal(result.conflicts.length, 0);
    assert.equal(plugin.settings.terminologyVersion, TERMINOLOGY_VERSION);
    assert.ok(folders.has(newDirectoryPath));
    assert.ok(files.has(`${newDirectoryPath}/个人说明书.md`));
    assert.equal(files.get(`${DEFAULT_ROOT}/.fde/config.yaml`).content, "owner: 1-个人说明书");
    assert.equal(files.get(`${DEFAULT_ROOT}/.agents/skills/fde-write/SKILL.md`).content, "对照个人表达");
    assert.equal(ordinary.content, `客户原文保留${retiredAudienceTerm}称呼`);
  });

  await test("legacy rule sources migrate to .fde without touching historical .kb state", async () => {
    assert.equal(KNOWLEDGE_CONTRACT_VERSION, 2);
    const agentsPath = `${DEFAULT_ROOT}/AGENTS.md`;
    const fdeConfigPath = `${DEFAULT_ROOT}/.fde/config.yaml`;
    const healthSkillPath = `${DEFAULT_ROOT}/.agents/skills/fde-health/SKILL.md`;
    const kbConfigPath = `${DEFAULT_ROOT}/.kb/config.yaml`;
    const files = new Map([
      [agentsPath, [
        "- `.kb/config.yaml` 是六类资产、收件箱和运行目录的路径真源。",
        "- 原始录音、聊天、会议纪要和旧资料保留在 `0-录音处理/待处理录音`，不得用摘要覆盖。",
        "- 状态、索引、日志和版本只写入 `.kb`，AI 运行记录写入 `7-系统/AI协作`。",
      ].join("\n")],
      [fdeConfigPath, [
        "update_source: https://github.com/GaryLauLGY/fde365-knowledge-os",
        "inbox:",
        "  recordings: 0-录音处理/待处理录音",
        "  processed: 0-录音处理/已处理",
        "runtime:",
        "  state: .kb/state",
      ].join("\n")],
      [healthSkillPath, [
        "## 读取",
        "- AGENTS.md、CLAUDE.md 和已安装 fde-* 清单",
        "5. 把问题分为阻塞、要处理和提醒，只给出有证据的问题。",
        "## 写回",
        "- 默认不写；确认后只创建缺失空目录或修正明确的路径",
      ].join("\n")],
      [kbConfigPath, "legacy: keep-verbatim"],
    ]);
    const writes = [];
    const plugin = {
      app: {
        vault: {
          adapter: {
            exists: async (path) => files.has(path),
            read: async (path) => files.get(path),
            write: async (path, content) => { files.set(path, content); writes.push(path); },
          },
        },
      },
      knowledgeRoot: DEFAULT_ROOT,
      settings: mergeSettings({}),
      saveSettings: async () => {},
    };

    const result = await PluginClass.prototype.migrateKnowledgeContract.call(plugin);
    assert.equal(result.changed, 3);
    assert.deepEqual(writes.sort(), [agentsPath, fdeConfigPath, healthSkillPath].sort());
    assert.equal(plugin.settings.knowledgeContractVersion, KNOWLEDGE_CONTRACT_VERSION);
    assert.match(files.get(agentsPath), /\.fde\/config\.yaml.*唯一路径真源/);
    assert.match(files.get(agentsPath), /旧 `\.kb\/` 只作历史追溯/);
    assert.match(files.get(agentsPath), /0-待处理材料\/待处理/);
    assert.match(files.get(agentsPath), /明确确认删除.*收件记录和对应原始文件.*移入回收站/);
    assert.doesNotMatch(files.get(agentsPath), /只写入 `\.kb`/);
    assert.match(files.get(fdeConfigPath), /pending: 0-待处理材料\/待处理/);
    assert.match(files.get(fdeConfigPath), /processed: 0-待处理材料\/已处理记录/);
    assert.match(files.get(fdeConfigPath), /state: \.fde\/state/);
    assert.match(files.get(healthSkillPath), /### 待处理口径/);
    assert.match(files.get(healthSkillPath), /目录中的非隐藏文件总数不是待处理数量/);
    assert.match(files.get(healthSkillPath), /不删除 `\.kb\/`/);
    assert.equal(files.get(kbConfigPath), "legacy: keep-verbatim");
    assert.equal(migrateManagedKnowledgeContract("custom: unchanged", "config"), "custom: unchanged");
  });

  await test("legacy recording folders migrate into the generic pending-material inbox", async () => {
    const legacyBase = `${DEFAULT_ROOT}/0-录音处理`;
    const pendingSource = `${legacyBase}/待处理录音`;
    const processedSource = `${legacyBase}/已处理`;
    const pendingTarget = `${DEFAULT_ROOT}/0-待处理材料/待处理`;
    const processedTarget = `${DEFAULT_ROOT}/0-待处理材料/已处理记录`;
    const files = new Map();
    const folders = new Map();
    const addFolder = (path) => {
      const folder = { path, kind: "folder" };
      folders.set(path, folder);
      return folder;
    };
    const addFile = (path, content = "") => {
      const file = new obsidianMock.TFile();
      file.path = path;
      file.content = content;
      files.set(path, file);
      return file;
    };
    [legacyBase, pendingSource, processedSource, `${DEFAULT_ROOT}/0-待处理材料`, pendingTarget, processedTarget]
      .forEach(addFolder);
    addFile(`${pendingSource}/客户访谈.m4a`);
    addFile(`${processedSource}/2026-08-访谈.md`);
    addFile(`${pendingSource}/README.md`, "旧录音说明");
    addFile(`${legacyBase}/README.md`, "旧录音根目录说明");
    addFile(`${pendingTarget}/README.md`, "通用待处理说明");
    const vault = {
      adapter: { stat: async (path) => folders.has(path) ? { type: "folder" } : null },
      getAbstractFileByPath: (path) => files.get(path) || folders.get(path) || null,
      getFiles: () => [...files.values()],
      createFolder: async (path) => { addFolder(path); },
      delete: async (folder) => {
        const prefix = `${folder.path}/`;
        for (const path of [...folders.keys()]) if (path === folder.path || path.startsWith(prefix)) folders.delete(path);
      },
    };
    const fileManager = {
      renameFile: async (file, target) => {
        files.delete(file.path);
        file.path = target;
        files.set(target, file);
      },
    };
    const plugin = {
      app: { vault, fileManager },
      knowledgeRoot: DEFAULT_ROOT,
      settings: mergeSettings({}),
      saveSettings: async () => {},
    };

    const result = await PluginClass.prototype.migrateLegacyInboxLayout.call(plugin);
    assert.equal(result.conflicts.length, 0);
    assert.equal(result.moved, 4);
    assert.equal(plugin.settings.inboxLayoutVersion, INBOX_LAYOUT_VERSION);
    assert.ok(files.has(`${pendingTarget}/客户访谈.m4a`));
    assert.ok(files.has(`${processedTarget}/2026-08-访谈.md`));
    assert.equal(files.get(`${pendingTarget}/README.md`).content, "通用待处理说明");
    assert.ok([...files.keys()].some((path) => path.startsWith(`${DEFAULT_ROOT}/.fde/quarantine/legacy-recording-pending-README`)));
    assert.ok([...files.keys()].some((path) => path.startsWith(`${DEFAULT_ROOT}/.fde/quarantine/legacy-recording-root-README`)));
    assert.equal(folders.has(legacyBase), false);
  });

  await test("OpenAI messages place context before final user message", async () => {
    const messages = buildOpenAIMessages({
      messages: [{ role: "system", content: "规则" }, { role: "user", content: "问题" }],
      context: [{ path: "产品.md", excerpt: "证据" }],
    });
    assert.equal(messages.at(-1).role, "user");
    assert.match(messages.at(-2).content, /产品\.md/);
  });

  await test("provider requires a Token", async () => {
    const provider = new Fde365Provider(apiPlugin({ token: "" }));
    assert.equal(provider.detect().configured, false);
    await assert.rejects(
      () => provider.complete({ requestId: "x", messages: [], context: [] }),
      (error) => error instanceof AIProviderError && error.code === "PROVIDER_NOT_CONFIGURED",
    );
  });

  await test("fixed provider returns normalized completion", async () => {
    global.__akosRequestHandler = async (request) => {
      assert.equal(request.url, FDE365_CHAT_ENDPOINT);
      assert.equal(request.headers.Authorization, "Bearer test-token");
      const body = JSON.parse(request.body);
      assert.equal(body.model, "gpt-5.6-luna");
      assert.equal(body.stream, false);
      return {
        status: 200,
        json: {
          id: "response-1",
          choices: [{ message: { role: "assistant", content: "测试回答" } }],
          usage: { prompt_tokens: 3, completion_tokens: 2 },
        },
      };
    };
    const result = await new Fde365Provider(apiPlugin()).complete({
      requestId: "request-1",
      messages: [{ role: "user", content: "你好" }],
      context: [],
    });
    assert.equal(result.content, "测试回答");
    assert.equal(result.provider, "fde365");
    assert.equal(result.model, "gpt-5.6-luna");
  });

  for (const [status, code] of [[401, "AUTH_FAILED"], [402, "INSUFFICIENT_CREDITS"], [404, "MODEL_NOT_FOUND"], [429, "RATE_LIMITED"]]) {
    await test(`HTTP ${status} maps to ${code}`, async () => {
      global.__akosRequestHandler = async () => ({ status, json: { error: { message: "remote" } } });
      const provider = new Fde365Provider(apiPlugin());
      await assert.rejects(
        () => provider.complete({ requestId: `status-${status}`, messages: [{ role: "user", content: "x" }], context: [] }),
        (error) => error.code === code,
      );
    });
  }

  await test("provider manager always resolves to the fixed service", async () => {
    const plugin = apiPlugin();
    plugin.settings.ai.provider = "unknown";
    const manager = new AIProviderManager(plugin);
    manager.register(new Fde365Provider(plugin));
    assert.equal(manager.getSelected().id, "fde365");
  });

  await test("FDE365 updater installs only verified runtime files and preserves data.json", async () => {
    const pluginDirectory = ".obsidian/plugins/fde365-knowledge-os";
    const files = new Map();
    const folders = new Set([".obsidian", ".obsidian/plugins", pluginDirectory, `${pluginDirectory}/assets`]);
    const oldData = '{"ai":{"fde365":{"token":"must-stay-local"}}}\n';
    files.set(`${pluginDirectory}/data.json`, Buffer.from(oldData));
    for (const file of GitHubUpdater.UPDATE_FILES) files.set(`${pluginDirectory}/${file.target}`, Buffer.from(`old-${file.asset}`));
    const adapter = {
      exists: async (path) => files.has(path) || folders.has(path),
      mkdir: async (path) => { folders.add(path); },
      read: async (path) => files.get(path).toString("utf8"),
      readBinary: async (path) => {
        const value = files.get(path);
        return value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength);
      },
      write: async (path, value) => { files.set(path, Buffer.from(value, "utf8")); },
      writeBinary: async (path, value) => { files.set(path, Buffer.from(value)); },
      remove: async (path) => { files.delete(path); },
    };
    const remote = new Map([
      ["main.js", Buffer.from("new-main")],
      ["manifest.json", Buffer.from(JSON.stringify({ id: "fde365-knowledge-os", version: "1.0.1", minAppVersion: "1.8.0" }))],
      ["styles.css", Buffer.from("new-styles")],
      ["fde365-logo.png", Buffer.from([1, 2, 3, 4])],
      ["fde365-logo-source.svg", Buffer.from("<svg></svg>")],
    ]);
    const updateManifest = {
      schemaVersion: 1,
      pluginId: "fde365-knowledge-os",
      version: "1.0.1",
      minAppVersion: "1.8.0",
      repository: FDE365_RELEASE_REPOSITORY,
      files: GitHubUpdater.UPDATE_FILES.map((file) => ({ ...file, sha256: GitHubUpdater.sha256(remote.get(file.asset)) })),
    };
    const asset = (name) => ({
      name,
      size: remote.get(name)?.length || 1024,
      browser_download_url: `${FDE365_UPDATE_ORIGIN}/plugin/releases/1.0.1/${name}`,
    });
    const release = {
      tag_name: "1.0.1",
      assets: [asset("update-manifest.json"), ...GitHubUpdater.UPDATE_FILES.map((file) => asset(file.asset))],
    };
    global.__akosRequestHandler = async ({ url }) => {
      if (url === FDE365_RELEASE_API) return { status: 200, json: release };
      if (url.endsWith("/update-manifest.json")) return { status: 200, json: updateManifest };
      const name = url.split("/").at(-1);
      const bytes = remote.get(name);
      return { status: 200, arrayBuffer: bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) };
    };
    const plugin = {
      app: { vault: { adapter } },
      manifest: { id: "fde365-knowledge-os", version: "1.0.0", dir: pluginDirectory },
      settings: mergeSettings({}),
      saveSettings: async () => {},
    };
    const result = await new Fde365UpdateService(plugin).check({ forceInstall: true });
    assert.equal(result.status, "installed");
    assert.equal(plugin.settings.updates.pendingVersion, "1.0.1");
    assert.equal(files.get(`${pluginDirectory}/main.js`).toString(), "new-main");
    assert.equal(files.get(`${pluginDirectory}/data.json`).toString(), oldData);
    assert.ok([...files.keys()].some((path) => path.includes(".fde365-update-backups") && path.endsWith("/main.js")));
  });

  process.stdout.write(`\n${passed} provider tests passed.\n`);
  if (process.exitCode) process.exit(process.exitCode);
})();
