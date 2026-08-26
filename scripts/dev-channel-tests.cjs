const assert = require("node:assert/strict");
const Module = require("node:module");

global.window = global;

class EmptyClass {
  constructor(...args) {
    this.app = args[0];
  }
}

const originalLoad = Module._load;
Module._load = function patchedLoad(request, parent, isMain) {
  if (request === "obsidian") {
    return {
      ItemView: EmptyClass,
      Modal: EmptyClass,
      Notice: EmptyClass,
      Plugin: EmptyClass,
      PluginSettingTab: EmptyClass,
      Setting: EmptyClass,
      TFile: class TFile {},
      htmlToMarkdown: (value) => value,
      normalizePath: (value) => value.replace(/\\/g, "/").replace(/\/+/g, "/"),
      requestUrl: async () => { throw new Error("DEV update service must not make a request"); },
      setIcon: () => {},
    };
  }
  return originalLoad.call(this, request, parent, isMain);
};

const PluginClass = require("../main.dev.js");
const {
  FDE365_BUILD_CHANNEL,
  IS_DEVELOPER_BUILD,
  Fde365UpdateService,
  ONBOARDING_STEPS,
} = PluginClass.__testables;

(async () => {
  assert.equal(FDE365_BUILD_CHANNEL, "dev");
  assert.equal(IS_DEVELOPER_BUILD, true);
  assert.match(ONBOARDING_STEPS.at(-1).title, /本机 Codex CLI/);
  assert.equal(ONBOARDING_STEPS.at(-1).highlights.some((item) => item.action === "purchase-token"), false);

  const updateService = new Fde365UpdateService({
    app: {},
    manifest: { id: "fde365-knowledge-os", version: "1.1.0" },
    settings: { updates: { autoInstall: true } },
  });
  assert.deepEqual(await updateService.check(), { status: "disabled", channel: "dev" });

  console.log("PASS DEV artifact uses local Codex CLI onboarding and disables stable-channel updates without network access.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
