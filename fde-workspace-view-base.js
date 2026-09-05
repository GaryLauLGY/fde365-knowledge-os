const {
  Component,
  ItemView,
  MarkdownRenderer,
  Notice,
  TFile,
  normalizePath,
} = require("obsidian");
const { canonicalSkillName, normalizeSkillMentions } = require("./skill-names.js");

module.exports = function createFDEBaseView({
  getRoot,
  VIEW_TYPES,
  LIBRARIES,
  CONTENT_STAGES,
  CONTENT_STAGE_GATES,
  SKILL_GROUPS,
  SKILLS,
  commandCompletionState,
  appendAssistantSkillCommand,
  BASE_SKILL_RULES,
  executionModeRule,
  INBOX_COMPLETION_MARKER,
  stripInboxCompletionMarker,
  shouldCompleteInboxTurn,
  assistantScrollTarget,
  NAV_ITEMS,
  makeIcon,
  makeButton,
  formatRelativeTime,
  assistantHistoryTopic,
  percent,
  parseConfigYaml,
  sourceFromContent,
  unknownFromContent,
  frontmatterOf,
  markdownSection,
  markdownBody,
  frontmatterPaths,
  linkedPaths,
  TextPromptModal,
  AssetModal,
  AssistantNotePickerModal,
  FDEWorkspaceService,
}) {
  class FDEBaseView extends ItemView {
    constructor(leaf, plugin, pageKey) {
      super(leaf);
      this.plugin = plugin;
      this.app = plugin.app;
      this.service = plugin.fdeWorkspace;
      this.pageKey = pageKey;
      this.assistantSession = plugin.fdeAssistantSession || (plugin.fdeAssistantSession = {
        messages: [],
        loading: false,
        requestId: null,
        mode: "chat",
        draft: "",
        primaryPath: "",
        sourcePaths: [],
        sessionId: "",
        activity: [],
      });
      this.renderToken = 0;
      this.mainScrollTop = 0;
      this.assistantMarkdownOwner = null;
    }

    get assistantMessages() { return this.assistantSession.messages; }
    set assistantMessages(value) { this.assistantSession.messages = value; }
    get assistantLoading() { return this.assistantSession.loading; }
    set assistantLoading(value) { this.assistantSession.loading = value; }
    get assistantRequestId() { return this.assistantSession.requestId; }
    set assistantRequestId(value) { this.assistantSession.requestId = value; }
    get assistantMode() { return this.assistantSession.mode; }
    set assistantMode(value) {
      this.assistantSession.mode = value;
      this.assistantSession.panelOpen = true;
    }
    get assistantDraft() { return normalizeSkillMentions(this.assistantSession.draft); }
    set assistantDraft(value) { this.assistantSession.draft = value; }
    get assistantPrimaryPath() { return this.assistantSession.primaryPath; }
    set assistantPrimaryPath(value) { this.assistantSession.primaryPath = value; }
    get assistantSourcePaths() { return this.assistantSession.sourcePaths; }
    set assistantSourcePaths(value) { this.assistantSession.sourcePaths = value; }
    get assistantSessionId() { return this.assistantSession.sessionId || ""; }
    set assistantSessionId(value) { this.assistantSession.sessionId = value || ""; }
    get assistantActivity() { return this.assistantSession.activity || []; }
    set assistantActivity(value) { this.assistantSession.activity = Array.isArray(value) ? value : []; }

    get assistantScrollPositions() {
      if (!this.assistantSession.scrollPositions || typeof this.assistantSession.scrollPositions !== "object") {
        this.assistantSession.scrollPositions = {};
      }
      return this.assistantSession.scrollPositions;
    }

    captureAssistantScroll() {
      const body = this.contentEl.querySelector(".wis-assistant-body");
      if (!body) return;
      const mode = body.dataset.assistantMode || this.assistantMode;
      const distanceFromBottom = Math.max(0, body.scrollHeight - body.clientHeight - body.scrollTop);
      this.assistantScrollPositions[mode] = {
        top: body.scrollTop,
        stickToBottom: distanceFromBottom <= 32,
      };
    }

    restoreAssistantScroll() {
      const body = this.contentEl.querySelector(".wis-assistant-body");
      if (!body) return;
      const target = assistantScrollTarget(this.assistantScrollPositions[this.assistantMode], body.scrollHeight, body.clientHeight);
      if (target !== null) body.scrollTop = target;
    }

    captureMainScroll() {
      const main = this.contentEl.querySelector(".wis-main");
      if (main) this.mainScrollTop = main.scrollTop;
    }

    restoreMainScroll() {
      const main = this.contentEl.querySelector(".wis-main");
      if (main) main.scrollTop = this.mainScrollTop;
    }

    resetAssistantMarkdownOwner() {
      if (this.assistantMarkdownOwner) this.removeChild(this.assistantMarkdownOwner);
      this.assistantMarkdownOwner = new Component();
      this.addChild(this.assistantMarkdownOwner);
      return this.assistantMarkdownOwner;
    }

    assistantMarkdownSourcePath() {
      const selectedPath = [this.assistantPrimaryPath, ...this.assistantSourcePaths]
        .find((path) => path && this.app.vault.getAbstractFileByPath(path) instanceof TFile);
      return selectedPath || this.app.workspace.getActiveFile()?.path || "";
    }

    async renderAssistantMessageContent(parent, message) {
      const content = parent.createDiv({ cls: "wis-message-content" });
      if (message.role !== "assistant" || message.error || !String(message.content || "").trim()) {
        content.setText(normalizeSkillMentions(message.content));
        return content;
      }
      content.addClass("is-markdown-rendered");
      try {
        await MarkdownRenderer.render(
          this.app,
          normalizeSkillMentions(message.content),
          content,
          this.assistantMarkdownSourcePath(),
          this.assistantMarkdownOwner || this,
        );
      } catch (error) {
        console.warn("[FDE365] Markdown rendering failed; falling back to plain text", error);
        content.empty();
        content.removeClass("is-markdown-rendered");
        content.setText(normalizeSkillMentions(message.content));
      }
      return content;
    }

    focusAssistantConversation(options = {}) {
      window.setTimeout(() => {
        const body = this.contentEl.querySelector(".wis-assistant-body");
        if (body && options.scrollToEnd === true) body.scrollTop = body.scrollHeight;
        else this.restoreAssistantScroll();
        this.contentEl.querySelector(".wis-composer textarea")?.focus();
      }, 0);
    }

    async runSkillInAssistant(skillId, prompt, sourceFiles = []) {
      const skill = SKILLS.find((item) => item.id === canonicalSkillName(skillId));
      if (!skill) return null;
      if (this.assistantLoading) {
        new Notice("Agent 正在处理当前会话，请等待完成或先停止");
        return null;
      }
      const submittedPrompt = String(prompt || skill.description).trim();
      const active = this.app.workspace.getActiveFile();
      const visibleSources = [...new Map([
        ...sourceFiles,
        ...(active instanceof TFile ? [active] : []),
      ].filter((file) => file instanceof TFile).map((file) => [file.path, file])).values()];
      const currentContext = this.assistantContextFiles();
      const mergedSources = [...new Map([
        ...currentContext,
        ...visibleSources,
      ].map((file) => [file.path, file])).values()];
      this.assistantMode = "chat";
      this.assistantDraft = "";
      this.assistantPrimaryPath = mergedSources[0]?.path || "";
      this.assistantSourcePaths = mergedSources.slice(1).map((file) => file.path);
      this.assistantMessages.push({ role: "user", content: `/${skill.id}\n\n${submittedPrompt}` });
      this.assistantLoading = true;
      this.assistantRequestId = null;
      this.assistantActivity = [{ label: "Agent 处理中…" }];
      await this.render();
      this.focusAssistantConversation();

      let task = null;
      try {
        task = await this.service.runSkill(skill.id, submittedPrompt, visibleSources, {
          includeActive: false,
          sessionId: this.assistantSessionId,
          onTaskStart: (startedTask) => {
            this.assistantRequestId = startedTask?.taskId || null;
            this.assistantActivity = [{ label: "Agent 处理中…" }];
            this.plugin.refreshDashboard();
          },
          onEvent: () => {
            this.assistantActivity = [{ label: "Agent 处理中…" }];
            this.plugin.refreshDashboard();
          },
        });
        const latest = this.plugin.lastAgentResult;
        const succeeded = Boolean(task && latest?.task?.taskId === task.taskId && latest.result?.content?.trim());
        if (!succeeded) {
          const message = task?.error || task?.message || (task ? `任务状态：${task.status || "unknown"}` : "Agent 未启动，请检查本地 Codex 或 账号登录");
          throw new Error(message);
        }
        this.assistantSessionId = latest.result.conversationId || "";
        this.assistantMessages.push({
          role: "assistant",
          content: latest.result.content,
          provider: this.plugin.providerLabel(latest.result.provider),
          model: latest.result.model || "",
          result: latest.result,
        });
        return task;
      } catch (error) {
        this.assistantMessages.push({
          role: "assistant",
          content: error instanceof Error ? error.message : String(error),
          error: true,
          code: error?.code || "UNKNOWN_ERROR",
        });
        return task;
      } finally {
        this.assistantLoading = false;
        this.assistantRequestId = null;
        this.assistantActivity = [];
        await this.render();
        this.focusAssistantConversation();
      }
    }

    async prefillAssistantCommand(skillId) {
      this.assistantMode = "chat";
      this.assistantDraft = appendAssistantSkillCommand(this.assistantDraft, skillId);
      await this.render();
      window.setTimeout(() => {
        const input = this.contentEl.querySelector(".wis-composer textarea");
        if (!input) return;
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      }, 0);
    }

    async prefillContentStageSkill(note, gate) {
      if (!gate?.skill) {
        await this.service.openFile(note.file);
        new Notice("尚未真实发布，已打开内容文件补充发布记录");
        return;
      }
      this.assistantMode = "chat";
      this.assistantPrimaryPath = note.file.path;
      this.assistantSourcePaths = [];
      this.assistantDraft = `/${gate.skill} ${gate.prompt}`;
      await this.render();
      this.focusAssistantConversation();
      new Notice(`已在右侧对话填入 /${gate.skill}，确认后发送`);
    }

    openAnalyticsUpload(contentNote = null) {
      const picker = this.contentEl.createEl("input", {
        cls: "wis-hidden-file-input",
        attr: {
          type: "file",
          multiple: "",
          accept: ".csv,.tsv,.json,.xlsx,.xls,text/csv,application/json,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          tabindex: "-1",
          "aria-hidden": "true",
        },
      });
      picker.addEventListener("change", async () => {
        try {
          const imported = await this.service.importContentAnalytics(picker.files, contentNote);
          if (!imported.length) return;
          const primaryPath = contentNote?.file?.path || this.assistantPrimaryPath;
          this.assistantMode = "chat";
          this.assistantPrimaryPath = primaryPath;
          this.assistantSourcePaths = [...new Set([
            ...this.assistantSourcePaths.filter((path) => path !== primaryPath),
            ...imported.map((file) => file.path),
          ])];
          const paths = imported.map((file) => `- ${file.path}`).join("\n");
          this.assistantDraft = `/传播复盘 请读取以下用户回填的真实发布数据并分析，先确认指标口径和基线，不要把相关性写成因果：\n${paths}`;
          await this.render();
          this.focusAssistantConversation();
          new Notice(`已导入 ${imported.length} 份发布数据，并在右侧对话填入 /传播复盘`);
        } catch (error) {
          new Notice(`导入发布数据失败：${error instanceof Error ? error.message : String(error)}`, 8000);
        } finally {
          picker.remove();
        }
      }, { once: true });
      picker.click();
    }

    getViewType() { return VIEW_TYPES[this.pageKey]; }
    getDisplayText() { return `${NAV_ITEMS.find((item) => item.key === this.pageKey)?.label || "FDE365"} · FDE365`; }
    getIcon() { return NAV_ITEMS.find((item) => item.key === this.pageKey)?.icon || "orbit"; }

    async onOpen() {
      this.contentEl.addClass("wis-view-content");
      await this.render();
    }

    async onClose() {
      this.renderToken++;
      this.networkConnectionsCleanup?.();
      this.networkConnectionsCleanup = null;
      this.contentEl.removeClass("wis-view-content");
    }

    async refresh() { return this.render(); }

    async render() {
      this.captureAssistantScroll();
      this.captureMainScroll();
      const token = ++this.renderToken;
      const data = await this.service.snapshot();
      if (token !== this.renderToken) return;
      this.networkConnectionsCleanup?.();
      this.networkConnectionsCleanup = null;
      this.resetAssistantMarkdownOwner();
      this.contentEl.empty();
      const app = this.contentEl.createDiv({ cls: `wis-fde-app${this.assistantSession.panelOpen ? " is-assistant-open" : ""}` });
      const assistantWidth = Math.max(280, Math.min(560, Number(this.plugin.settings.ai.assistant.panelWidth) || 336));
      app.style.setProperty("--wis-assistant-width", `${assistantWidth}px`);
      this.renderSidebar(app, data);
      const workspace = app.createDiv({ cls: "wis-workspace" });
      this.renderTopbar(workspace, data);
      const main = workspace.createEl("main", { cls: "wis-main" });
      main.addEventListener("scroll", () => { this.mainScrollTop = main.scrollTop; }, { passive: true });
      await this.renderMain(main, data);
      if (token !== this.renderToken) return;
      this.restoreMainScroll();
      this.renderStatus(workspace, data);
      await this.renderAssistant(app, data);
      if (token !== this.renderToken) return;
      this.restoreAssistantScroll();
    }

    renderSidebar(app, data) {
      const sidebar = app.createEl("aside", { cls: "wis-sidebar" });
      const brand = sidebar.createDiv({ cls: "wis-brand" });
      const logo = brand.createEl("img", { attr: { src: this.plugin.logoResource(), alt: "FDE365" } });
      logo.addClass("wis-brand-logo");
      sidebar.createDiv({ text: "FDE365", cls: "wis-nav-label" });
      const nav = sidebar.createEl("nav", { cls: "wis-nav", attr: { "aria-label": "主导航" } });
      NAV_ITEMS.forEach((item) => {
        const button = nav.createEl("button", { cls: `wis-nav-item${item.key === this.pageKey ? " is-active" : ""}`, attr: { "aria-current": item.key === this.pageKey ? "page" : "false" } });
        makeIcon(button, item.icon);
        const text = button.createDiv();
        text.createEl("strong", { text: item.label });
        text.createSpan({ text: item.note });
        if (item.key === "inbox" && data.pending.length) button.createSpan({ text: String(data.pending.length), cls: "wis-nav-count" });
        button.addEventListener("click", async () => {
          await this.switchPage(item.key);
          this.contentEl.querySelector('.wis-nav-item[aria-current="page"]')?.focus();
        });
      });
      const pulse = sidebar.createDiv({ cls: "wis-library-pulse" });
      const pulseHead = pulse.createDiv({ cls: "wis-pulse-head" });
      pulseHead.createEl("strong", { text: "六库信号" });
      pulseHead.createSpan({ text: `${data.total} 项资产` });
      data.libraries.forEach((library) => {
        const row = pulse.createEl("button", { cls: "wis-pulse-row" });
        row.createSpan({ text: library.order, cls: `wis-library-code is-${library.color}` });
        row.createSpan({ text: library.short, cls: "wis-pulse-label" });
        const meter = row.createDiv({ cls: "wis-mini-meter" });
        meter.createDiv({ cls: `wis-mini-meter-fill is-${library.color}`, attr: { style: `width:${library.score}%` } });
        row.createSpan({ text: String(library.count), cls: "wis-pulse-count" });
        row.addEventListener("click", () => this.service.openLibrary(library.id));
      });
      const footer = sidebar.createDiv({ cls: "wis-sidebar-footer" });
      footer.createSpan({ text: "本地优先" });
      footer.createSpan({ text: "·" });
      footer.createSpan({ text: "来源优先" });
    }

    renderTopbar(workspace, data) {
      const topbar = workspace.createDiv({ cls: "wis-topbar" });
      const left = topbar.createDiv({ cls: "wis-topbar-title" });
      left.createSpan({ text: "FDE365知识库", cls: "wis-eyebrow" });
      left.createEl("strong", { text: NAV_ITEMS.find((item) => item.key === this.pageKey)?.label || "总览" });
      const actions = topbar.createDiv({ cls: "wis-topbar-actions" });
      const pagePicker = actions.createEl("select", { cls: "wis-page-picker", attr: { "aria-label": "切换工作台页面" } });
      for (const item of NAV_ITEMS) pagePicker.createEl("option", { text: item.label, attr: { value: item.key } });
      pagePicker.value = this.pageKey;
      pagePicker.addEventListener("change", async () => {
        await this.switchPage(pagePicker.value);
        this.contentEl.querySelector(".wis-page-picker")?.focus();
      });
      const search = actions.createEl("input", { attr: { type: "search", placeholder: "搜索六类资产…", "aria-label": "搜索六类资产" }, cls: "wis-global-search" });
      search.addEventListener("keydown", async (event) => {
        if (event.key !== "Enter" || !search.value.trim()) return;
        const query = search.value.trim().toLowerCase();
        const match = data.notes.find((note) => `${note.file.basename} ${note.content}`.toLowerCase().includes(query));
        if (match) await this.service.openFile(match.file);
        else new Notice("六类资产中没有找到匹配内容");
      });
      makeButton(actions, "新建资产", "plus", "is-secondary", () => new AssetModal(this.app, "product", async (value) => this.service.createAsset(value)).open());
      makeButton(actions, "设置", "settings", "is-secondary is-settings", () => this.plugin.openSettings());
      const agentToggle = makeButton(actions, "Agent", "messages-square", "is-secondary wis-agent-toggle", async () => {
        this.assistantSession.panelOpen = !this.assistantSession.panelOpen;
        await this.render();
        this.contentEl.querySelector(this.assistantSession.panelOpen ? ".wis-agent-close" : ".wis-agent-toggle")?.focus();
      });
      agentToggle.setAttr("aria-expanded", String(Boolean(this.assistantSession.panelOpen)));
    }

    renderStatus(workspace, data) {
      const status = workspace.createDiv({ cls: "wis-statusbar" });
      status.createSpan({ text: `Vault: ${this.app.vault.getName()}` });
      status.createSpan({ text: `${data.total} 项正式资产` });
      status.createSpan({ text: `来源覆盖 ${percent(data.sourceCoverage)}` });
      status.createSpan({ text: `${data.installedSkills.length}/${SKILLS.length} 技能` });
      status.createSpan({ text: "create-only · 不覆盖原始材料" });
    }

    assistantContextFiles() {
      return [...new Set([this.assistantPrimaryPath, ...this.assistantSourcePaths].filter(Boolean))]
        .map((path) => this.app.vault.getAbstractFileByPath(path))
        .filter((file) => file instanceof TFile);
    }

    isAssistantContextFile(file) {
      return file instanceof TFile
        && file.extension === "md"
        && file.path.startsWith(`${getRoot()}/`)
        && !file.path.startsWith(`${getRoot()}/.agents/`)
        && !file.path.startsWith(`${getRoot()}/.fde/`)
        && !file.path.startsWith(`${getRoot()}/7-系统/`);
    }

    assistantHistoryFiles() {
      const roots = [
        `${getRoot()}/7-系统/AI协作/输出/`,
        `${getRoot()}/7-系统/AI协作/运行记录/`,
      ];
      const files = this.app.vault.getMarkdownFiles()
        .filter((file) => roots.some((root) => file.path.startsWith(root)))
        .sort((a, b) => b.stat.mtime - a.stat.mtime);
      const runTaskIds = new Set(files
        .filter((file) => frontmatterOf(this.app, file).type === "agent-run")
        .map((file) => String(frontmatterOf(this.app, file).task_id || ""))
        .filter(Boolean));
      return files
        .filter((file) => {
          const meta = frontmatterOf(this.app, file);
          return meta.type !== "agent-output" || !runTaskIds.has(String(meta.task_id || ""));
        })
        .slice(0, 12);
    }

    async openAssistantHistory(file) {
      const recordMeta = frontmatterOf(this.app, file);
      let runFile = recordMeta.type === "agent-run" ? file : null;
      if (!runFile && recordMeta.type === "agent-output" && recordMeta.task_id) {
        runFile = this.app.vault.getMarkdownFiles().find((candidate) => {
          const meta = frontmatterOf(this.app, candidate);
          return meta.type === "agent-run" && String(meta.task_id || "") === String(recordMeta.task_id);
        }) || null;
      }
      const runMeta = runFile ? frontmatterOf(this.app, runFile) : {};
      const outputPath = String(runMeta.output_file || "");
      const resolvedOutput = outputPath ? this.app.vault.getAbstractFileByPath(outputPath) : null;
      const outputFile = resolvedOutput instanceof TFile ? resolvedOutput : file;
      const outputMeta = frontmatterOf(this.app, outputFile);
      const outputContent = await this.app.vault.cachedRead(outputFile);
      const runContent = runFile && runFile !== outputFile ? await this.app.vault.cachedRead(runFile) : outputContent;
      const prompt = String(outputMeta.user_prompt || runMeta.task || markdownSection(outputContent, "任务") || markdownSection(runContent, "任务") || "").trim();
      const response = String(
        markdownSection(outputContent, "AI 输出")
        || markdownSection(outputContent, "FDE365")
        || (outputMeta.type === "ai-assistant-output" ? markdownBody(outputContent) : "")
        || markdownSection(runContent, "执行状态")
        || "该历史任务没有保存可显示的输出。",
      ).trim();
      const sourcePaths = [...new Set([
        ...frontmatterPaths(runMeta.source_files),
        ...frontmatterPaths(outputMeta.source_files),
        ...linkedPaths(markdownSection(outputContent, "来源")),
        ...linkedPaths(markdownSection(runContent, "输入来源")),
      ])].filter((path) => this.app.vault.getAbstractFileByPath(path) instanceof TFile);
      const provider = String(outputMeta.provider || runMeta.provider || "FDE365 Agent");
      const model = String(outputMeta.model || runMeta.model || "");
      this.assistantMode = "chat";
      this.assistantSessionId = String(outputMeta.conversation_id || runMeta.conversation_id || "");
      this.assistantPrimaryPath = sourcePaths[0] || "";
      this.assistantSourcePaths = sourcePaths.slice(1);
      this.assistantDraft = "";
      this.assistantActivity = [];
      this.assistantMessages = [
        ...(prompt ? [{ role: "user", content: prompt }] : []),
        { role: "assistant", content: response, provider: this.plugin.providerLabel(provider), model },
      ];
      await this.render();
      window.setTimeout(() => {
        const body = this.contentEl.querySelector(".wis-assistant-body");
        if (body) body.scrollTop = body.scrollHeight;
        this.contentEl.querySelector(".wis-composer textarea")?.focus();
      }, 0);
    }

    async renderAssistantConversation(parent) {
      if (!this.assistantMessages.length && !this.assistantLoading) return false;
      const conversation = parent.createDiv({ cls: "wis-conversation" });
      for (const message of this.assistantMessages) {
        const item = conversation.createEl("article", { cls: `wis-message is-${message.role}${message.error ? " is-error" : ""}` });
        const avatar = item.createDiv({ cls: "wis-message-avatar" });
        makeIcon(avatar, message.role === "user" ? "user-round" : message.error ? "triangle-alert" : "sparkles");
        const bubble = item.createDiv({ cls: "wis-message-bubble" });
        const meta = bubble.createDiv({ cls: "wis-message-meta" });
        meta.createEl("strong", { text: message.role === "user" ? "你" : message.error ? "请求未完成" : "FDE365" });
        if (message.provider) meta.createSpan({ text: [message.provider, message.model].filter(Boolean).join(" · ") });
        await this.renderAssistantMessageContent(bubble, message);
        if (message.role === "assistant" && !message.error) {
          const actions = bubble.createDiv({ cls: "wis-message-actions" });
          const copy = makeButton(actions, "复制", "copy", "is-text");
          copy.addEventListener("click", async () => {
            try {
              await navigator.clipboard.writeText(message.content);
              new Notice("回答已复制");
            } catch (error) {
              new Notice(`复制失败：${error instanceof Error ? error.message : String(error)}`);
            }
          });
          const save = makeButton(actions, "保存", "file-plus-2", "is-text");
          save.addEventListener("click", async () => {
            const prompt = [...this.assistantMessages].reverse().find((item) => item.role === "user")?.content || "";
            const file = await this.plugin.saveAssistantOutput(message, `${this.getDisplayText()} · AI 对话`, {
              conversationId: this.assistantSessionId,
              sourceFiles: this.assistantContextFiles().map((source) => source.path),
              prompt,
            });
            new Notice(`回答已保存：${file.path}`);
            await this.render();
          });
        }
      }
      if (this.assistantLoading) {
        const loading = conversation.createEl("article", { cls: "wis-message is-assistant is-loading" });
        const avatar = loading.createDiv({ cls: "wis-message-avatar" });
        makeIcon(avatar, "sparkles");
        const bubble = loading.createDiv({ cls: "wis-message-bubble" });
        bubble.createEl("strong", { text: "Agent 处理中…" });
        const stop = makeButton(bubble, "停止生成", "square", "is-secondary");
        stop.addEventListener("click", () => {
          if (this.assistantRequestId) this.plugin.cancelAgentRequest(this.assistantRequestId);
        });
      }
      return true;
    }

    async renderAssistantChat(parent, data) {
      if (!(await this.renderAssistantConversation(parent))) {
        const welcome = parent.createDiv({ cls: "wis-assistant-welcome" });
        const icon = welcome.createDiv({ cls: "wis-assistant-welcome-icon" });
        makeIcon(icon, "orbit");
        welcome.createEl("strong", { text: "在知识库里，和 AI 协作工作" });
        welcome.createEl("p", { text: "连续对话、选取上下文、调用技能，并把可用结果保存回本地。" });
        const features = welcome.createDiv({ cls: "wis-assistant-feature-chips" });
        ["本地会话", "知识上下文", "结果留档"].forEach((label) => features.createSpan({ text: label }));
      }
      const context = parent.createDiv({ cls: "wis-context-card" });
      context.createEl("strong", { text: "当前知识库" });
      context.createSpan({ text: `${data.total} 项资产 · ${data.pending.length} 份待处理` });
      context.createSpan({ text: `来源覆盖 ${percent(data.sourceCoverage)} · ${data.unknown} 个待确认项` });
    }

    renderAssistantKnowledge(parent, data) {
      const intro = parent.createDiv({ cls: "wis-assistant-section-head" });
      intro.createEl("strong", { text: "六类资产" });
      intro.createSpan({ text: "进入真实业务边界，查看来源、版本和待确认项。" });
      const list = parent.createDiv({ cls: "wis-assistant-fde-list" });
      data.libraries.forEach((library) => {
        const button = list.createEl("button", { cls: `wis-assistant-fde-item is-${library.color}` });
        button.createSpan({ text: library.order, cls: `wis-library-code is-${library.color}` });
        const copy = button.createDiv();
        copy.createEl("strong", { text: library.name });
        copy.createSpan({ text: library.count ? `来源 ${percent(library.sourceCoverage)} · ${library.unknown} 待确认` : library.emptyAction });
        button.createSpan({ text: String(library.count) });
        button.addEventListener("click", () => this.service.openLibrary(library.id));
      });
      makeButton(parent, "查库 /查询知识", "sparkles", "is-secondary wis-assistant-wide-action", () => void this.prefillAssistantCommand("查询知识"));
    }

    renderAssistantSkills(parent) {
      const intro = parent.createDiv({ cls: "wis-assistant-section-head" });
      intro.createEl("strong", { text: `全部 ${SKILLS.length} 个技能` });
      intro.createSpan({ text: "点击技能填入对话，确认发送后才执行；运行前读取项目内 SKILL.md。" });
      for (const group of SKILL_GROUPS) {
        const skills = SKILLS.filter((skill) => skill.group === group.id);
        if (!skills.length) continue;
        const heading = parent.createDiv({ cls: "wis-assistant-section-head" });
        heading.createEl("strong", { text: `${group.name} · ${skills.length}` });
        const quick = parent.createDiv({ cls: "wis-skill-quick" });
        for (const skill of skills) {
          const button = quick.createEl("button", { cls: "wis-quick-skill", attr: { title: skill.description } });
          makeIcon(button, skill.icon);
          const text = button.createDiv();
          text.createEl("strong", { text: skill.name });
          text.createSpan({ text: skill.output });
          button.addEventListener("click", () => void this.prefillAssistantCommand(skill.id));
        }
      }
      makeButton(parent, "查看技能详情与部署状态", "blocks", "is-secondary wis-assistant-wide-action", () => this.plugin.router.navigate("skills"));
    }

    renderAssistantHistory(parent) {
      const intro = parent.createDiv({ cls: "wis-assistant-section-head" });
      intro.createEl("strong", { text: "本地协作历史" });
      intro.createSpan({ text: "点击记录会恢复到右侧对话，可继续确认下一步；Markdown 只在后台留档。" });
      const files = this.assistantHistoryFiles();
      const list = parent.createDiv({ cls: "wis-assistant-history" });
      if (!files.length) list.createDiv({ text: "还没有已保存的协作对话。完成一次对话或运行技能后会出现在这里。", cls: "wis-empty" });
      files.forEach((file) => {
        const meta = frontmatterOf(this.app, file);
        const topic = assistantHistoryTopic(meta);
        const skill = meta.agent_id ? canonicalSkillName(meta.agent_id) || "历史技能" : "";
        const provider = meta.provider ? this.plugin.providerLabel(String(meta.provider)) : "";
        const button = list.createEl("button", { cls: "wis-assistant-history-item" });
        makeIcon(button, meta.type === "agent-run" ? "list-checks" : "message-square-text");
        const copy = button.createDiv();
        copy.createEl("strong", { text: topic });
        copy.createSpan({ text: [skill, provider, meta.model, formatRelativeTime(file.stat.mtime)].filter(Boolean).join(" · ") });
        button.setAttr("title", `${topic}\n恢复到右侧对话并继续处理`);
        button.addEventListener("click", () => void this.openAssistantHistory(file));
      });
    }

    renderAssistantComposer(panel) {
      const composer = panel.createDiv({ cls: "wis-composer" });
      const toolbar = composer.createDiv({ cls: "wis-composer-toolbar" });
      const selectedNotes = this.assistantContextFiles().filter((file) => this.isAssistantContextFile(file));
      const note = makeButton(toolbar, selectedNotes.length ? `已选 ${selectedNotes.length} 篇` : "选择笔记", "file-search-2", `is-tool${selectedNotes.length ? " is-active" : ""}`);
      note.setAttr("title", selectedNotes.length ? `已选：${selectedNotes.map((file) => file.basename).join("、")}；点击调整` : "点击搜索并选择多篇知识库笔记");
      note.addEventListener("click", () => new AssistantNotePickerModal(this.app, selectedNotes.map((file) => file.path), async (paths) => {
        const selectedPaths = [...new Set(paths)].filter((path) => this.app.vault.getAbstractFileByPath(path) instanceof TFile);
        const preservedPaths = this.assistantContextFiles()
          .filter((file) => !this.isAssistantContextFile(file))
          .map((file) => file.path);
        this.assistantPrimaryPath = selectedPaths[0] || "";
        this.assistantSourcePaths = [...new Set([...selectedPaths.slice(1), ...preservedPaths])];
        await this.render();
      }).open());
      const upload = makeButton(toolbar, "上传数据", "file-up", "is-tool");
      upload.setAttr("title", "上传 CSV、Excel、TSV 或 JSON 发布数据，并在当前对话中分析");
      upload.addEventListener("click", () => this.openAnalyticsUpload());
      const fresh = makeButton(toolbar, "新对话", "message-square-plus", "is-tool");
      fresh.disabled = this.assistantLoading;
      if (this.assistantLoading) fresh.setAttr("title", "请等待当前任务完成或先停止");
      fresh.addEventListener("click", async () => {
        if (this.assistantRequestId) this.plugin.cancelAgentRequest(this.assistantRequestId);
        this.assistantMessages = [];
        this.assistantDraft = "";
        this.assistantSessionId = "";
        this.assistantActivity = [];
        await this.render();
      });
      if (this.assistantContextFiles().length) {
        const files = composer.createDiv({ cls: "wis-composer-context" });
        this.assistantContextFiles().forEach((file) => {
          const chip = files.createEl("button", { cls: "wis-context-chip", attr: { title: file.path } });
          makeIcon(chip, "file-text");
          chip.createSpan({ text: file.basename });
          makeIcon(chip, "x");
          chip.addEventListener("click", async () => {
            if (this.assistantPrimaryPath === file.path) this.assistantPrimaryPath = "";
            this.assistantSourcePaths = this.assistantSourcePaths.filter((path) => path !== file.path);
            await this.render();
          });
        });
      }
      const row = composer.createDiv({ cls: "wis-composer-row" });
      const inputShell = row.createDiv({ cls: "wis-composer-input-shell" });
      const commandMenu = inputShell.createDiv({
        cls: "wis-command-menu",
        attr: { role: "listbox", "aria-label": "FDE 命令建议" },
      });
      commandMenu.hidden = true;
      const input = inputShell.createEl("textarea", { attr: { placeholder: "输入问题，或输入 / 选择中文技能…", rows: "3", "aria-label": "交给 FDE365 Agent", "aria-autocomplete": "list", "aria-expanded": "false" } });
      input.value = this.assistantDraft;
      let commandMatches = [];
      let commandSelection = 0;
      let commandRange = null;

      const closeCommandMenu = () => {
        commandMatches = [];
        commandRange = null;
        commandSelection = 0;
        commandMenu.hidden = true;
        commandMenu.empty();
        input.setAttr("aria-expanded", "false");
        input.removeAttribute("aria-activedescendant");
      };
      const fillCommand = (skill) => {
        if (!skill || !commandRange) return;
        const replacement = `/${skill.id} `;
        input.value = `${input.value.slice(0, commandRange.start)}${replacement}${input.value.slice(commandRange.end)}`;
        const caret = commandRange.start + replacement.length;
        input.setSelectionRange(caret, caret);
        this.assistantDraft = input.value;
        closeCommandMenu();
        input.focus();
      };
      const renderCommandMenu = () => {
        commandMenu.empty();
        commandMatches.forEach((skill, index) => {
          const option = commandMenu.createEl("button", {
            cls: `wis-command-option${index === commandSelection ? " is-selected" : ""}`,
            attr: { id: `wis-command-${skill.id}`, role: "option", "aria-selected": String(index === commandSelection) },
          });
          makeIcon(option, skill.icon);
          const copy = option.createDiv();
          copy.createEl("strong", { text: skill.name });
          copy.createSpan({ text: `/${skill.id}` });
          option.createSpan({ text: skill.output, cls: "wis-command-output" });
          option.addEventListener("mousedown", (event) => event.preventDefault());
          option.addEventListener("click", () => fillCommand(skill));
        });
        commandMenu.hidden = !commandMatches.length;
        input.setAttr("aria-expanded", String(Boolean(commandMatches.length)));
        if (commandMatches.length) input.setAttr("aria-activedescendant", `wis-command-${commandMatches[commandSelection].id}`);
      };
      const updateCommandMenu = () => {
        const caret = input.selectionStart ?? input.value.length;
        const completion = commandCompletionState(input.value, caret);
        if (!completion) {
          closeCommandMenu();
          return;
        }
        commandMatches = completion.matches;
        commandSelection = Math.min(commandSelection, Math.max(0, commandMatches.length - 1));
        commandRange = { start: completion.start, end: completion.end };
        renderCommandMenu();
      };
      input.addEventListener("input", () => {
        this.assistantDraft = input.value;
        updateCommandMenu();
      });
      input.addEventListener("click", updateCommandMenu);
      input.addEventListener("blur", () => window.setTimeout(closeCommandMenu, 100));
      const submitStack = row.createDiv({ cls: "wis-composer-submit-stack" });
      const executionMode = this.plugin.settings.ai.assistant.executionMode === "yolo" ? "yolo" : "approval";
      const modeSelect = submitStack.createEl("select", {
        cls: `wis-agent-mode-select is-${executionMode}`,
        attr: { "aria-label": "Agent 执行模式", title: executionMode === "yolo" ? "YOLO：当前 Vault 内无需批准" : "命令和写入需要批准" },
      });
      modeSelect.createEl("option", { text: "需批准", attr: { value: "approval" } });
      modeSelect.createEl("option", { text: "YOLO", attr: { value: "yolo" } });
      modeSelect.value = executionMode;
      modeSelect.addEventListener("change", async () => {
        this.plugin.settings.ai.assistant.executionMode = modeSelect.value === "yolo" ? "yolo" : "approval";
        await this.plugin.saveSettings();
        new Notice(modeSelect.value === "yolo"
          ? "YOLO 已开启：当前 Vault 内不再逐次批准"
          : "已切换为需要批准模式");
        this.plugin.refreshDashboard();
      });
      const send = makeButton(submitStack, this.assistantLoading ? "停止" : "发送", this.assistantLoading ? "square" : "arrow-up", this.assistantLoading ? "is-secondary" : "is-primary");
      const submit = async () => {
        if (this.assistantLoading) {
          if (this.assistantRequestId) this.plugin.cancelAgentRequest(this.assistantRequestId);
          return;
        }
        const prompt = input.value.trim();
        if (!prompt) return;
        const submittedSources = this.assistantContextFiles();
        const pendingInboxSources = submittedSources.filter((file) => this.service.isInboxMaterialFile(file) && !this.service.isCompletedInboxFile(file));
        this.assistantMode = "chat";
        this.assistantMessages.push({ role: "user", content: prompt });
        this.assistantDraft = "";
        input.value = "";
        closeCommandMenu();
        this.assistantLoading = true;
        this.assistantActivity = [];
        await this.render();
        const requestId = `fde365-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        this.assistantRequestId = requestId;
        try {
          const inboxCompletionProtocol = pendingInboxSources.length
            ? `\n\n当前对话包含待处理原始材料。只有在用户明确确认执行，并且分流、正式资产写入、来源回链和处理记录全部成功后，才允许在回复最后单独输出 ${INBOX_COMPLETION_MARKER}。仅生成预览、等待确认、没有写入、部分完成或任一步骤失败时严禁输出该标记。`
            : "";
          const result = await this.plugin.askAssistant({
            requestId,
            prompt,
            history: this.assistantMessages.slice(0, -1),
            systemPrompt: `你是独立于中间工作台页面的 FDE365 本地 Agent。\n${BASE_SKILL_RULES}\n${executionModeRule(this.plugin)}\n插件可能会在“本地运行上下文”中附加已经读取的配置与技能合同；直接使用这些内容。需要时使用本地工具检查 Vault。${inboxCompletionProtocol}`,
            sourceFiles: submittedSources,
            localContext: await this.service.assistantRuntimeContext(prompt),
            sessionId: this.assistantSessionId,
            onEvent: () => {
              this.assistantActivity = [{ label: "Agent 处理中…" }];
              this.plugin.refreshDashboard();
            },
          });
          this.assistantSessionId = result.conversationId || this.assistantSessionId;
          const message = {
            role: "assistant",
            content: stripInboxCompletionMarker(result.content),
            provider: this.plugin.providerLabel(result.provider),
            model: result.model,
            result,
          };
          this.assistantMessages.push(message);
          if (pendingInboxSources.length && shouldCompleteInboxTurn(prompt, result)) {
            const completedPaths = await this.service.completeInboxFiles(pendingInboxSources);
            if (completedPaths.size) {
              new Notice(`已自动标记为处理完成：${completedPaths.size} 份材料；原始材料继续保留`);
            }
          } else if (pendingInboxSources.length) {
            this.service.setInboxProcessing(pendingInboxSources, "awaiting-confirmation", "等待确认并完成全部入库步骤", {
              conversationId: this.assistantSessionId,
              sourcePaths: pendingInboxSources.map((file) => file.path),
              messages: [...this.assistantMessages],
              resultContent: message.content,
            });
          }
          if (this.plugin.settings.ai.assistant.autoSaveOutput) await this.plugin.saveAssistantOutput(message, `${this.getDisplayText()} · AI 对话`, {
            conversationId: this.assistantSessionId,
            sourceFiles: this.assistantContextFiles().map((source) => source.path),
            prompt,
          });
        } catch (error) {
          if (pendingInboxSources.length) {
            this.service.setInboxProcessing(pendingInboxSources, "failed", "确认执行失败 · 可在当前对话重试", {
              conversationId: this.assistantSessionId,
              sourcePaths: pendingInboxSources.map((file) => file.path),
              messages: [...this.assistantMessages],
            });
          }
          this.assistantMessages.push({
            role: "assistant",
            content: error instanceof Error ? error.message : String(error),
            error: true,
            code: error?.code || "UNKNOWN_ERROR",
          });
        } finally {
          this.assistantLoading = false;
          this.assistantRequestId = null;
          this.assistantActivity = [];
          this.plugin.refreshDashboard();
        }
      };
      send.addEventListener("click", () => void submit());
      input.addEventListener("keydown", (event) => {
        if (event.isComposing || event.keyCode === 229) return;
        if (!commandMenu.hidden && commandMatches.length) {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            const delta = event.key === "ArrowDown" ? 1 : -1;
            commandSelection = (commandSelection + delta + commandMatches.length) % commandMatches.length;
            renderCommandMenu();
            commandMenu.querySelector(".wis-command-option.is-selected")?.scrollIntoView({ block: "nearest" });
            return;
          }
          if (event.key === "Tab" || (event.key === "Enter" && !event.shiftKey)) {
            event.preventDefault();
            fillCommand(commandMatches[commandSelection]);
            return;
          }
          if (event.key === "Escape") {
            event.preventDefault();
            closeCommandMenu();
            return;
          }
        }
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          void submit();
        }
      });
      const contextScope = this.plugin.settings.ai.assistant.contextScope;
      composer.createDiv({
        text: contextScope === "retrieved" ? "Agent 已预附加本地检索结果" : contextScope === "none" ? "Agent 按任务需要读取 Vault" : "Agent 已预附加当前笔记",
        cls: "wis-composer-note",
      });
    }

    async renderAssistant(app, data) {
      const panel = app.createEl("aside", { cls: "wis-assistant" });
      this.renderAssistantResizeHandle(app, panel);
      const head = panel.createDiv({ cls: "wis-assistant-head" });
      const title = head.createDiv();
      title.createSpan({ text: "FDE365 AGENT", cls: "wis-eyebrow" });
      title.createEl("strong", { text: "对话 · FDE · 技能 · 历史" });
      const capability = this.plugin.providerManager.describeSelected();
      const agentCapability = this.plugin.agentRuntime?.describe?.() || { available: false, error: "本地 Agent 未就绪" };
      const isDeveloperRuntime = agentCapability.mode === "local-cli";
      const headActions = head.createDiv({ cls: "wis-assistant-head-actions" });
      makeButton(headActions, "收起", "panel-right-close", "is-secondary wis-agent-close", async () => {
        this.assistantSession.panelOpen = false;
        await this.render();
        this.contentEl.querySelector(".wis-agent-toggle")?.focus();
      });
      const executionMode = this.plugin.settings.ai.assistant.executionMode === "yolo" ? "yolo" : "approval";
      const provider = headActions.createEl("button", {
        cls: `wis-provider-dot${agentCapability.available && (isDeveloperRuntime || capability.configured && capability.compatible) ? " is-ready" : ""}`,
        attr: { title: [isDeveloperRuntime ? "DEV · 本地 Codex CLI" : "FDE365 Codex Agent", isDeveloperRuntime ? "继承本机登录与配置" : capability.model, capability.error, agentCapability.error].filter(Boolean).join(" · ") },
      });
      provider.createSpan({ text: isDeveloperRuntime
        ? agentCapability.available ? "DEV · 本地 Codex CLI" : "缺少 Codex CLI"
        : !capability.configured ? "登录账号" : agentCapability.available ? capability.model : "缺少 Codex 组件" });
      provider.addEventListener("click", () => this.plugin.openSettings("ai"));
      const body = panel.createDiv({ cls: "wis-assistant-body" });
      body.dataset.assistantMode = this.assistantMode;
      body.addEventListener("scroll", () => this.captureAssistantScroll(), { passive: true });
      body.createEl("p", {
        text: executionMode === "yolo"
          ? "YOLO 模式：Agent 在当前 Vault 内自动执行，不再逐次批准。"
          : "需要批准：Agent 可读取当前 Vault、运行技能；命令和写入会向你确认。",
        cls: `wis-assistant-rule is-${executionMode}`,
      });
      const tabs = body.createDiv({ cls: "wis-assistant-tabs", attr: { role: "tablist", "aria-label": "AI 工作区" } });
      [["chat", "对话"], ["fde", "FDE"], ["skills", "技能"], ["history", "历史"]].forEach(([id, label]) => {
        const tab = tabs.createEl("button", { cls: this.assistantMode === id ? "is-active" : "", attr: { role: "tab", "aria-selected": String(this.assistantMode === id) } });
        tab.createSpan({ text: label });
        tab.addEventListener("click", async () => {
          this.assistantMode = id;
          await this.render();
        });
      });
      const surface = body.createDiv({ cls: `wis-assistant-surface is-${this.assistantMode}` });
      if (this.assistantMode === "fde") this.renderAssistantKnowledge(surface, data);
      else if (this.assistantMode === "skills") this.renderAssistantSkills(surface);
      else if (this.assistantMode === "history") this.renderAssistantHistory(surface);
      else await this.renderAssistantChat(surface, data);
      this.renderAssistantComposer(panel);
    }

    renderAssistantResizeHandle(app, panel) {
      const handle = panel.createDiv({
        cls: "wis-assistant-resize-handle",
        attr: {
          role: "separator",
          tabindex: "0",
          "aria-label": "调整右侧 Agent 对话栏宽度",
          "aria-orientation": "vertical",
          title: "拖动调整对话栏宽度；双击恢复默认宽度",
        },
      });
      const applyWidth = (value) => {
        const width = Math.max(280, Math.min(560, Math.round(Number(value) || 336)));
        this.plugin.settings.ai.assistant.panelWidth = width;
        app.style.setProperty("--wis-assistant-width", `${width}px`);
        handle.setAttr("aria-valuenow", String(width));
        return width;
      };
      applyWidth(this.plugin.settings.ai.assistant.panelWidth);
      let startX = 0;
      let startWidth = 0;
      let dragging = false;
      handle.addEventListener("pointerdown", (event) => {
        if (event.button !== 0) return;
        event.preventDefault();
        dragging = true;
        startX = event.clientX;
        startWidth = Number(this.plugin.settings.ai.assistant.panelWidth) || 336;
        app.addClass("is-resizing-assistant");
        handle.setPointerCapture?.(event.pointerId);
      });
      handle.addEventListener("pointermove", (event) => {
        if (!dragging) return;
        applyWidth(startWidth + startX - event.clientX);
      });
      const finishResize = async (event) => {
        if (!dragging) return;
        dragging = false;
        app.removeClass("is-resizing-assistant");
        handle.releasePointerCapture?.(event.pointerId);
        await this.plugin.saveSettings();
      };
      handle.addEventListener("pointerup", (event) => void finishResize(event));
      handle.addEventListener("pointercancel", (event) => void finishResize(event));
      handle.addEventListener("dblclick", async () => {
        applyWidth(336);
        await this.plugin.saveSettings();
      });
      handle.addEventListener("keydown", async (event) => {
        if (!["ArrowLeft", "ArrowRight", "Home"].includes(event.key)) return;
        event.preventDefault();
        const current = Number(this.plugin.settings.ai.assistant.panelWidth) || 336;
        applyWidth(event.key === "Home" ? 336 : current + (event.key === "ArrowLeft" ? 16 : -16));
        await this.plugin.saveSettings();
      });
    }
  }

  return FDEBaseView;
};
