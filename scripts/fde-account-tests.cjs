const { test } = require("node:test");
const assert = require("node:assert/strict");
const { FdeAccountClient, API_BASE, normalizeAccount, normalizeBilling, modelIds } = require("../fde-account.js");
function fixture(handler) {
  const requests = [];
  const plugin = { settings: { account: normalizeAccount(), billing: normalizeBilling(), ai: { fde365: { token: "legacy-not-for-new-origin" } } }, saveSettings: async () => {}, agentRuntime: { shutdown: async () => {} } };
  const client = new FdeAccountClient(plugin, async (request) => {
    requests.push(request);
    assert.ok(request.url.startsWith(API_BASE + "/"));
    assert.ok(!JSON.stringify(request).includes("legacy-not-for-new-origin"));
    return handler(request, requests.length);
  });
  return { plugin, client, requests };
}
const response = (json, status = 200) => ({ json, status });
test("defaults never invent balances or accept demo credentials", () => {
  assert.equal(normalizeBilling(null).remainingCredits, null);
  assert.equal(normalizeBilling({ remainingCredits: null }).remainingCredits, null);
  assert.equal(normalizeBilling({ remainingCredits: 0 }).remainingCredits, 0);
  assert.equal(normalizeBilling({ remainingCredits: [] }).remainingCredits, null);
  assert.equal(normalizeBilling({ remainingCredits: false }).remainingCredits, null);
  assert.equal(normalizeAccount(null).accessToken, "");
  assert.equal(normalizeAccount({ accessToken: "demo-test" }).accessToken, "");
  assert.deepEqual(modelIds({ billing: { pricing: [{ id: 'bad"model' }, { id: "new-model" }, { id: "new-model" }] } }, []), ["new-model"]);
});
test("legacy credentials are not automatically used at the new origin", async () => {
  const { client, requests } = fixture(() => response({}));
  await assert.rejects(client.getAccessToken(), { code: "PROVIDER_NOT_CONFIGURED" });
  assert.equal(requests.length, 0);
});
test("email request supports empty 200 and rejects network errors without secrets", async () => {
  const { client } = fixture(() => response(undefined));
  await client.requestEmailCode("user@example.com");
  await assert.rejects(client.requestEmailCode("bad"), /有效邮箱/);
  const broken = fixture(() => { throw new Error("private-server-content"); });
  await assert.rejects(broken.client.requestEmailCode("user@example.com"), e => !e.message.includes("private-server-content"));
});
test("login, balance, usage and server pricing synchronize", async () => {
  const { client, plugin } = fixture((r) => {
    if (r.url.endsWith("/auth/email/verify")) return response({ email: "user@example.com", access_token: "session-test", refresh_token: "refresh-test", expires_in: 3600 });
    if (r.url.endsWith("/me/balance")) return response({ remaining_credits: 25, used_credits: 5, total_credits: 30 });
    if (r.url.endsWith("/me/usage")) return response({ items: [{ type: "AI_USAGE", amount: -5 }] });
    return response({ models: [{ id: "server-model", input_credits: 1, output_credits: 2, unit: "per 1M tokens" }] });
  });
  await client.verifyEmail("user@example.com", "test-code");
  assert.equal(plugin.settings.account.accessToken, "session-test");
  assert.equal(plugin.settings.billing.remainingCredits, 25);
  assert.equal(plugin.settings.billing.usage[0].amount, -5);
  assert.deepEqual(modelIds(plugin.settings, []), ["server-model"]);
});
test("expired sessions refresh once under concurrent requests", async () => {
  let refreshes = 0;
  const { client, plugin } = fixture(async () => { refreshes++; await new Promise(r => setTimeout(r, 5)); return response({ access_token: "new-session", refresh_token: "new-refresh", expires_in: 3600 }); });
  plugin.settings.account = normalizeAccount({ accessToken: "expired", refreshToken: "refresh", expiresAt: new Date(0).toISOString() });
  assert.deepEqual(await Promise.all([client.getAccessToken(), client.getAccessToken()]), ["new-session", "new-session"]);
  assert.equal(refreshes, 1);
});
test("401 refreshes once; 402 and ambiguous redemption are never retried", async () => {
  const { client, plugin, requests } = fixture(r => r.url.endsWith("/auth/refresh") ? response({ access_token: "rotated", refresh_token: "rotated-r" }) : r.headers.Authorization === "Bearer old" ? response({}, 401) : response({ remaining_credits: 7 }));
  plugin.settings.account = normalizeAccount({ accessToken: "old", refreshToken: "refresh" });
  assert.equal((await client.authorized("/me/balance")).remaining_credits, 7);
  assert.equal(requests.length, 3);
  for (const status of [402, 500]) {
    const f = fixture(() => response({}, status));
    f.plugin.settings.account = normalizeAccount({ accessToken: "session", refreshToken: "refresh" });
    await assert.rejects(f.client.redeem("not-a-real-code"));
    assert.equal(f.requests.length, 1);
    assert.equal(f.plugin.settings.billing.remainingCredits, null);
  }
});
test("logout invalidates in-flight refresh and cannot restore old credentials", async () => {
  let finish;
  const { client, plugin } = fixture(() => new Promise(resolve => { finish = resolve; }));
  plugin.settings.account = normalizeAccount({ accessToken: "old", refreshToken: "refresh" });
  const refreshing = client.refreshSession();
  await client.logout();
  finish(response({ access_token: "must-not-return" }));
  await assert.rejects(refreshing, { code: "ACCOUNT_CHANGED" });
  assert.equal(client.isLoggedIn(), false);
  assert.equal(plugin.settings.ai.fde365.token, "");
});
test("redemption requires server proof; failed sync does not fabricate balance", async () => {
  const { client, plugin, requests } = fixture(r => r.url.endsWith("/me/redeem") ? response({ success: true, credits_added: 10, remaining_credits: 15 }) : response({}, 503));
  plugin.settings.account = normalizeAccount({ accessToken: "session" });
  assert.equal((await client.redeem("test-redemption")).creditsAdded, 10);
  assert.equal(plugin.settings.billing.remainingCredits, 15);
  assert.ok(plugin.settings.billing.lastError);
  assert.equal(requests.filter(r => r.url.endsWith("/me/redeem")).length, 1);
});
test("account settings render logged-out and logged-in states without raw credentials", () => {
  const Module = require("node:module");
  const original = Module._load;
  const labels = [];
  class Control {
    constructor() { this.inputEl = {}; }
    setButtonText(value) { labels.push(value); return this; }
    setDisabled() { return this; }
    setCta() { return this; }
    setWarning() { return this; }
    setPlaceholder() { return this; }
    setValue() { return this; }
    addOption() { return this; }
    onChange() { return this; }
    onClick() { return this; }
  }
  class Setting {
    constructor() { this.descEl = { createDiv: value => labels.push(value.text) }; }
    setName(value) { labels.push(value); return this; }
    setDesc(value) { labels.push(value); return this; }
    addText(fn) { fn(new Control()); return this; }
    addButton(fn) { fn(new Control()); return this; }
    addDropdown(fn) { fn(new Control()); return this; }
  }
  Module._load = function (request, parent, main) {
    if (request === "obsidian") return { Setting, Notice: class {} };
    return original.call(this, request, parent, main);
  };
  let renderAccountSettings;
  try { ({ renderAccountSettings } = require("../fde-account-settings.js")); } finally { Module._load = original; }
  const { client, plugin } = fixture(() => response({}));
  plugin.accountClient = client;
  plugin.settings.ai.fde365.model = "gpt-5.6-luna";
  const tab = { plugin };
  const container = { createEl: () => {} };
  renderAccountSettings(tab, container, ["gpt-5.6-luna"]);
  assert.ok(labels.includes("发送验证码"));
  assert.ok(!labels.includes("兑换"));
  labels.length = 0;
  plugin.settings.account = normalizeAccount({ email: "user@example.com", accessToken: "hidden-session", refreshToken: "hidden-refresh" });
  renderAccountSettings(tab, container, ["gpt-5.6-luna"]);
  assert.ok(labels.includes("兑换"));
  assert.ok(labels.includes("最近使用记录"));
  assert.ok(labels.some(v => v.includes("尚未同步")));
  assert.ok(!labels.join(" ").includes("hidden-session"));
  assert.ok(!labels.join(" ").includes("hidden-refresh"));
});
