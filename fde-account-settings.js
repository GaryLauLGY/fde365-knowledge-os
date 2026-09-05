const { Setting, Notice } = require("obsidian");
const { modelIds } = require("./fde-account.js");
const credits = (value) => value == null ? "尚未同步" : `${Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 4 })} credits`;

function renderAccountSettings(tab, containerEl, fallbackModels) {
  const plugin = tab.plugin;
  const client = plugin.accountClient;
  const account = plugin.settings.account;
  const billing = plugin.settings.billing;
  const action = (button, label, fn) => button.setButtonText(label).onClick(async () => {
    button.setDisabled(true);
    try { await fn(); } catch (error) { new Notice(error.message || "操作失败，请稍后重试"); }
    finally { button.setDisabled(false); }
  });
  containerEl.createEl("h3", { text: "账号与额度" });
  const runtime = plugin.agentRuntime?.describe?.();
  if (runtime) new Setting(containerEl).setName("本地 Agent").setDesc(runtime.available ? "Codex 引擎使用当前 Vault 的隔离配置，不连接本机客户端；插件更新无需重新运行安装器。" : runtime.error);
  new Setting(containerEl).setName("账号状态").setDesc(client.isLoggedIn() ? `已登录：${account.email}` : "使用邮箱验证码登录，额度保存在服务端账号中。");
  if (!client.isLoggedIn()) {
    tab.emailDraft ||= account.email || "";
    new Setting(containerEl).setName("邮箱").addText((input) => input.setPlaceholder("you@example.com").setValue(tab.emailDraft).onChange((value) => { tab.emailDraft = value.trim(); }))
      .addButton((button) => action(button, "发送验证码", async () => { await client.requestEmailCode(tab.emailDraft); new Notice("验证码已发送，请查收邮件"); }));
    new Setting(containerEl).setName("验证码").addText((input) => { input.inputEl.type = "password"; input.setPlaceholder("输入邮箱验证码").onChange((value) => { tab.codeDraft = value.trim(); }); })
      .addButton((button) => action(button.setCta(), "登录", async () => { await client.verifyEmail(tab.emailDraft, tab.codeDraft); tab.codeDraft = ""; new Notice("登录成功"); tab.display(); }));
  } else {
    new Setting(containerEl).setName("当前余额").setDesc(`${credits(billing.remainingCredits)}${billing.lastError ? ` · 同步失败：${billing.lastError}` : billing.lastSyncedAt ? ` · ${new Date(billing.lastSyncedAt).toLocaleString()}` : ""}`)
      .addButton((button) => action(button, "刷新额度与价格", async () => { try { await client.sync(); } finally { tab.display(); } }));
    new Setting(containerEl).setName("已使用额度").setDesc(`${credits(billing.usedCredits)} · 统计范围以服务端为准`);
    new Setting(containerEl).setName("兑换码").setDesc("兑换成功后增加当前账号额度；失败时不会在本地增加余额。")
      .addText((input) => { input.inputEl.type = "password"; input.setPlaceholder("输入兑换码").onChange((value) => { tab.redeemDraft = value.trim(); }); })
      .addButton((button) => action(button.setCta(), "兑换", async () => { const result = await client.redeem(tab.redeemDraft); tab.redeemDraft = ""; new Notice(`兑换成功：增加 ${credits(result.creditsAdded)}`); tab.display(); }));
    const usage = new Setting(containerEl).setName("最近使用记录").setDesc(billing.usage.length ? "服务端返回的最近记录" : "尚无已同步记录");
    for (const item of billing.usage.slice(0, 8)) usage.descEl.createDiv({ text: `${item.createdAt || "时间未知"} · ${item.type || "变动"}${item.model ? ` · ${item.model}` : ""} · ${credits(item.amount)}` });
    new Setting(containerEl).setName("退出登录").setDesc("清除当前 Vault 的用户凭证并停止 Agent。")
      .addButton((button) => action(button.setWarning(), "退出", async () => { await client.logout(); tab.codeDraft = ""; tab.redeemDraft = ""; tab.display(); plugin.refreshDashboard(); }));
  }
  const api = plugin.settings.ai.fde365;
  const models = modelIds(plugin.settings, fallbackModels);
  new Setting(containerEl).setName("模型").setDesc(billing.pricing.length ? "模型及价格来自服务端价格表。" : "价格表尚未同步，显示预置模型；单价未知。")
    .addDropdown((dropdown) => { if (!models.includes(api.model)) dropdown.addOption("", "请选择可用模型"); for (const model of models) dropdown.addOption(model, model); dropdown.setValue(models.includes(api.model) ? api.model : "").onChange(async (value) => { if (!models.includes(value)) return; api.model = value; await plugin.saveSettings(); plugin.refreshDashboard(); tab.display(); }); });
  const price = billing.pricing.find((p) => p.id === api.model);
  if (price) new Setting(containerEl).setName("模型单价").setDesc(`输入 ${credits(price.inputCredits)} · 输出 ${credits(price.outputCredits)} · ${price.unit || "计价单位尚未由服务端说明"}`);
  new Setting(containerEl).setName("测试连接").setDesc("使用当前账号请求模型；可能产生服务端用量。")
    .addButton((button) => action(button.setDisabled(!client.isLoggedIn()), "测试连接", async () => { const result = await plugin.providerManager.getSelected().testConnection(); new Notice(`连接成功：${result.model}`); await client.sync({ quiet: true }); tab.display(); }));
}
module.exports = { renderAccountSettings };
