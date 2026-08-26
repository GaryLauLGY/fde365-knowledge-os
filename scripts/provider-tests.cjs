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
  resolveKnowledgeRoot,
  ONBOARDING_STEPS,
  ONBOARDING_VERSION,
  FDE365_RELEASE_REPOSITORY,
  FDE365_RELEASE_API,
  FDE365_UPDATE_ORIGIN,
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
  await test("settings enforce the single fixed provider", async () => {
    const settings = mergeSettings({ ai: { provider: "codex-cli" } });
    assert.equal(settings.schemaVersion, 4);
    assert.equal(settings.ai.provider, "fde365");
    assert.equal(settings.ai.fde365.model, "gpt-5.6-luna");
    assert.equal(settings.ai.assistant.contextScope, "active-note");
    assert.equal(settings.onboardingVersion, 0);
    assert.equal(settings.ai.codexCli, undefined);
    assert.equal(settings.ai.claudeCli, undefined);
    assert.equal(settings.ai.openaiCompatible, undefined);
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

  await test("onboarding v3 includes the Token purchase and settings tutorial", async () => {
    assert.equal(ONBOARDING_VERSION, 3);
    assert.equal(ONBOARDING_STEPS.length, 5);
    assert.ok(ONBOARDING_STEPS.every((step) => step.title && step.description && step.highlights.length === 3));
    const setupStep = ONBOARDING_STEPS.at(-1);
    assert.equal(setupStep.highlights[0].action, "purchase-token");
    assert.equal(setupStep.highlights[1].action, "open-token-settings");
  });

  await test("service URL and model allowlist are fixed", async () => {
    assert.equal(FDE365_BASE_URL, "https://api.fde365.ai/v1");
    assert.equal(FDE365_CHAT_ENDPOINT, "https://api.fde365.ai/v1/chat/completions");
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

  for (const [status, code] of [[401, "AUTH_FAILED"], [404, "MODEL_NOT_FOUND"], [429, "RATE_LIMITED"]]) {
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
