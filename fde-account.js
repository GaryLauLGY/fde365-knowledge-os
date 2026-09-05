// Adapted from ozrwayne/kb-suite b010603 (plugin-side account contract).
// Only server responses establish sessions, balances, usage and prices.
const API_BASE = "https://api.ipzsk.com/v1";
const ENDPOINTS = Object.freeze({ emailRequest: "/auth/email/request", emailVerify: "/auth/email/verify", refresh: "/auth/refresh", balance: "/me/balance", usage: "/me/usage", pricing: "/pricing", redeem: "/me/redeem" });
const numberOrNull = (v) => !["number", "string"].includes(typeof v) || String(v).trim() === "" || !Number.isFinite(Number(v)) ? null : Number(v);
const text = (v) => typeof v === "string" ? v.trim() : "";
function normalizeAccount(raw = {}) {
  raw = raw && typeof raw === "object" ? raw : {};
  const account = { email: text(raw.email), accessToken: text(raw.accessToken), refreshToken: text(raw.refreshToken), expiresAt: text(raw.expiresAt) };
  if (raw.demo || account.accessToken.startsWith("demo-") || account.refreshToken.startsWith("demo-")) return { email: account.email, accessToken: "", refreshToken: "", expiresAt: "" };
  return account;
}
function normalizeBilling(raw = {}) {
  raw = raw && typeof raw === "object" ? raw : {};
  return { remainingCredits: numberOrNull(raw.remainingCredits), usedCredits: numberOrNull(raw.usedCredits), totalCredits: numberOrNull(raw.totalCredits), lastSyncedAt: text(raw.lastSyncedAt), lastError: text(raw.lastError), pricing: normalizePricing(raw.pricing), usage: normalizeUsage(raw.usage) };
}
function normalizePricing(payload) {
  const rows = Array.isArray(payload) ? payload : payload?.models || payload?.pricing;
  if (!Array.isArray(rows)) return [];
  const seen = new Set();
  return rows.filter((r) => r && typeof r === "object").map((r) => ({ id: text(r.id || r.model), inputCredits: numberOrNull(r.inputCredits ?? r.input_credits), outputCredits: numberOrNull(r.outputCredits ?? r.output_credits), unit: text(r.unit) })).filter((r) => {
    if (!/^[a-zA-Z0-9][a-zA-Z0-9._:/-]{0,127}$/.test(r.id) || seen.has(r.id)) return false;
    seen.add(r.id); return true;
  }).slice(0, 100);
}
function normalizeUsage(payload) {
  const rows = Array.isArray(payload) ? payload : payload?.items || payload?.usage;
  return Array.isArray(rows) ? rows.filter((r) => r && typeof r === "object").slice(0, 20).map((r) => ({ createdAt: text(r.createdAt || r.created_at), type: text(r.type), amount: numberOrNull(r.amount), model: text(r.model), remainingCredits: numberOrNull(r.remainingCredits ?? r.remaining_credits) })) : [];
}
function modelIds(settings, fallback) {
  const ids = normalizePricing(settings?.billing?.pricing).map((r) => r.id);
  return ids.length ? ids : [...fallback];
}
function accountError(status) {
  const code = status === 401 || status === 403 ? "AUTH_FAILED" : status === 402 ? "INSUFFICIENT_CREDITS" : status === 429 ? "RATE_LIMITED" : "NETWORK_ERROR";
  const message = code === "AUTH_FAILED" ? "登录已失效，请重新登录" : code === "INSUFFICIENT_CREDITS" ? "credits 不足，请兑换后再试" : code === "RATE_LIMITED" ? "请求过于频繁，请稍后重试" : `账号服务暂不可用（HTTP ${status}）`;
  return Object.assign(new Error(message), { code, status });
}
class FdeAccountClient {
  constructor(plugin, requestUrl) { this.plugin = plugin; this.requestUrl = requestUrl; this.generation = 0; this.refreshing = null; }
  get account() { return this.plugin.settings.account; }
  get billing() { return this.plugin.settings.billing; }
  isLoggedIn() { return Boolean(this.account?.accessToken || this.account?.refreshToken); }
  assertCurrent(generation) { if (generation !== this.generation) throw Object.assign(new Error("账号已切换，请重新操作"), { code: "ACCOUNT_CHANGED" }); }
  async request(path, { method = "GET", body, token } = {}) {
    if (!Object.values(ENDPOINTS).includes(path)) throw new Error("未知账号接口");
    let response;
    try {
      response = await this.requestUrl({ url: `${API_BASE}${path}`, method, headers: { Accept: "application/json", ...(body === undefined ? {} : { "Content-Type": "application/json" }), ...(token ? { Authorization: `Bearer ${token}` } : {}) }, body: body === undefined ? undefined : JSON.stringify(body), throw: false });
    } catch { throw new Error("无法连接账号服务，请检查网络或稍后重试"); }
    if (!response || response.status < 200 || response.status >= 300) throw accountError(response?.status || 0);
    let payload;
    try { payload = response.json; } catch { /* HTML or invalid JSON is not an account response */ }
    if (path === ENDPOINTS.emailRequest && (!payload || typeof payload !== "object")) return {};
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) throw new Error("账号服务返回了无效数据");
    return payload;
  }
  async getAccessToken() {
    const a = this.account;
    const expires = Date.parse(a.expiresAt);
    if ((!a.accessToken || (Number.isFinite(expires) && expires < Date.now() + 30000)) && a.refreshToken) await this.refreshSession();
    if (Number.isFinite(Date.parse(this.account.expiresAt)) && Date.parse(this.account.expiresAt) < Date.now()) throw accountError(401);
    if (!this.account.accessToken) throw Object.assign(new Error("请先用邮箱验证码登录"), { code: "PROVIDER_NOT_CONFIGURED" });
    return this.account.accessToken;
  }
  async authorized(path, options = {}) {
    const generation = this.generation;
    const token = await this.getAccessToken();
    this.assertCurrent(generation);
    try { return await this.request(path, { ...options, token }); }
    catch (error) {
      // A 401 was rejected before mutation. Never retry network errors or 402s.
      if (error.status !== 401 || !this.account.refreshToken) throw error;
      this.assertCurrent(generation);
      await this.refreshSession(token);
      this.assertCurrent(generation);
      return this.request(path, { ...options, token: this.account.accessToken });
    }
  }
  async requestEmailCode(email) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text(email))) throw new Error("请输入有效邮箱");
    await this.request(ENDPOINTS.emailRequest, { method: "POST", body: { email: text(email) } });
  }
  async applySession(payload, email, generation) {
    this.assertCurrent(generation);
    const next = normalizeAccount({ email: payload.email || payload.user?.email || email, accessToken: payload.access_token || payload.accessToken, refreshToken: payload.refresh_token || payload.refreshToken, expiresAt: payload.expires_at || payload.expiresAt || (Number(payload.expires_in) > 0 ? new Date(Date.now() + Number(payload.expires_in) * 1000).toISOString() : "") });
    if (!next.accessToken) throw new Error("账号服务未返回有效登录凭证");
    this.plugin.settings.account = next;
    await this.plugin.saveSettings();
  }
  async verifyEmail(email, code) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text(email)) || !text(code)) throw new Error("请填写邮箱和验证码");
    const generation = ++this.generation;
    const payload = await this.request(ENDPOINTS.emailVerify, { method: "POST", body: { email: text(email), code: text(code) } });
    await this.applySession(payload, text(email), generation);
    this.plugin.settings.billing = normalizeBilling();
    await this.plugin.saveSettings();
    await this.plugin.agentRuntime?.shutdown?.();
    await this.sync({ quiet: true });
  }
  async refreshSession(staleToken) {
    if (staleToken && staleToken !== this.account.accessToken) return;
    if (this.refreshing) return this.refreshing;
    const generation = this.generation;
    const refreshToken = this.account.refreshToken;
    if (!refreshToken) throw accountError(401);
    this.refreshing = (async () => {
      const payload = await this.request(ENDPOINTS.refresh, { method: "POST", body: { refresh_token: refreshToken } });
      await this.applySession(payload, this.account.email, generation);
    })();
    try { await this.refreshing; } finally { this.refreshing = null; }
  }
  async logout() {
    this.generation++;
    this.plugin.settings.account = normalizeAccount();
    this.plugin.settings.billing = normalizeBilling();
    this.plugin.settings.ai.fde365.token = "";
    await this.plugin.saveSettings();
    this.plugin.providerManager?.cancelAll?.();
    await this.plugin.agentRuntime?.shutdown?.();
  }
  applyBalance(payload) {
    const balance = payload.balance || payload;
    const remaining = numberOrNull(balance.remaining_credits ?? balance.remainingCredits);
    if (remaining === null) throw new Error("服务端余额数据缺失");
    Object.assign(this.billing, { remainingCredits: remaining, usedCredits: numberOrNull(balance.used_credits ?? balance.usedCredits), totalCredits: numberOrNull(balance.total_credits ?? balance.totalCredits), lastSyncedAt: new Date().toISOString() });
  }
  async sync({ quiet = false } = {}) {
    const generation = this.generation;
    try {
      const balance = await this.authorized(ENDPOINTS.balance);
      this.assertCurrent(generation); this.applyBalance(balance);
      const usage = await this.authorized(ENDPOINTS.usage);
      this.assertCurrent(generation); this.billing.usage = normalizeUsage(usage);
      const pricing = await this.request(ENDPOINTS.pricing);
      this.assertCurrent(generation); this.billing.pricing = normalizePricing(pricing);
      this.billing.lastError = "";
    } catch (error) {
      this.assertCurrent(generation); this.billing.lastError = error.message;
      if (!quiet) { await this.plugin.saveSettings(); throw error; }
    }
    await this.plugin.saveSettings();
    this.plugin.refreshDashboard?.();
    return this.billing;
  }
  async redeem(code) {
    if (!text(code)) throw new Error("请输入兑换码");
    const generation = this.generation;
    const payload = await this.authorized(ENDPOINTS.redeem, { method: "POST", body: { redemption_code: text(code) } });
    this.assertCurrent(generation);
    if (payload.success !== true || !(numberOrNull(payload.credits_added ?? payload.creditsAdded) > 0)) throw new Error("未收到兑换成功凭据，请刷新使用记录确认；不要重复提交");
    this.applyBalance(payload);
    await this.plugin.saveSettings();
    await this.sync({ quiet: true });
    return { creditsAdded: numberOrNull(payload.credits_added ?? payload.creditsAdded), remainingCredits: this.billing.remainingCredits };
  }
}
module.exports = { API_BASE, ENDPOINTS, FdeAccountClient, normalizeAccount, normalizeBilling, normalizePricing, normalizeUsage, modelIds, accountError };
