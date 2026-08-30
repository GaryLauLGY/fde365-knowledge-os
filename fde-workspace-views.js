const { Notice } = require("obsidian");
const createFDEBaseView = require("./fde-workspace-view-base.js");

module.exports = function createWorkspaceViews(deps) {
  const {
    getRoot,
    VIEW_TYPES,
    LIBRARIES,
    CONTENT_STAGES,
    CONTENT_STAGE_GATES,
    SKILL_GROUPS,
    SKILLS,
    makeIcon,
    makeButton,
    formatRelativeTime,
    percent,
    TextPromptModal,
    AssetModal,
    ConfirmActionModal,
  } = deps;
  const FDEBaseView = createFDEBaseView(deps);

  class FDEDashboardView extends FDEBaseView {
    constructor(leaf, plugin) { super(leaf, plugin, "dashboard"); }

    async renderMain(main, data) {
      const hero = main.createEl("section", { cls: "wis-hero" });
      const copy = hero.createDiv();
      copy.createSpan({ text: "FDE365 · 六类资产", cls: "wis-eyebrow" });
      copy.createEl("h1", { text: "六类资产运营台" });
      copy.createEl("p", { text: "不按话题堆笔记。围绕个人、产品、客户、案例、方法和内容，持续保留真源与下一步。" });
      const signal = hero.createDiv({ cls: "wis-today-signal" });
      makeIcon(signal, data.pending.length ? "inbox" : data.unknown ? "circle-help" : "circle-check-big");
      const signalCopy = signal.createDiv();
      signalCopy.createSpan({ text: "当前入口" });
      signalCopy.createEl("strong", { text: data.pending.length ? `先处理 ${data.pending.length} 份原始材料` : data.unknown ? `先确认 ${data.unknown} 个未知项` : "六库状态可以继续推进" });
      makeButton(signal, "运行 /fde-start", "arrow-right", "is-secondary", () => void this.runSkillInAssistant("fde-start", "请读取当前六类资产库状态，为我选择并执行一个最值得推进的入口。"));

      const head = main.createDiv({ cls: "wis-section-head" });
      const headCopy = head.createDiv();
      headCopy.createEl("h2", { text: "六类资产" });
      headCopy.createSpan({ text: "目录就是业务边界；数字只统计正式资产，不包含系统文件和 Skill。" });
      const grid = main.createDiv({ cls: "wis-library-grid" });
      data.libraries.forEach((library) => {
        const card = grid.createEl("button", { cls: `wis-library-card is-${library.color}` });
        const top = card.createDiv({ cls: "wis-library-card-top" });
        top.createSpan({ text: library.order, cls: "wis-library-number" });
        makeIcon(top, library.icon);
        card.createEl("h3", { text: library.name });
        card.createEl("p", { text: library.description });
        const metrics = card.createDiv({ cls: "wis-library-metrics" });
        metrics.createDiv({ text: String(library.count), cls: "wis-library-count" });
        const detail = metrics.createDiv();
        detail.createSpan({ text: "项资产" });
        detail.createSpan({ text: `来源 ${percent(library.sourceCoverage)}` });
        const footer = card.createDiv({ cls: "wis-library-card-foot" });
        footer.createSpan({ text: library.count ? `${library.unknown} 个待确认` : library.emptyAction });
        footer.createSpan({ text: library.updated ? formatRelativeTime(library.updated) : "尚未建立" });
        card.addEventListener("click", () => this.service.openLibrary(library.id));
      });

      const lower = main.createDiv({ cls: "wis-dashboard-lower" });
      const pipeline = lower.createEl("section", { cls: "wis-panel wis-pipeline-summary" });
      const pipelineHead = pipeline.createDiv({ cls: "wis-panel-head" });
      const pipelineTitle = pipelineHead.createDiv();
      pipelineTitle.createEl("h2", { text: "内容流转" });
      pipelineTitle.createSpan({ text: "一个文件只处于一个阶段" });
      makeButton(pipelineHead, "打开流水线", "arrow-right", "is-text", () => this.plugin.activateProjects());
      const track = pipeline.createDiv({ cls: "wis-stage-track" });
      data.stages.forEach((stage, index) => {
        const item = track.createDiv({ cls: `wis-stage-node is-${stage.color}` });
        item.createSpan({ text: String(index + 1).padStart(2, "0") });
        item.createEl("strong", { text: stage.id });
        item.createDiv({ text: String(stage.items.length) });
      });
      const quality = lower.createEl("section", { cls: "wis-panel wis-quality-summary" });
      const qualityHead = quality.createDiv({ cls: "wis-panel-head" });
      const qualityTitle = qualityHead.createDiv();
      qualityTitle.createEl("h2", { text: "知识质量" });
      qualityTitle.createSpan({ text: "只显示可行动的问题" });
      makeButton(qualityHead, "完整体检", "arrow-right", "is-text", () => this.plugin.activateAnalytics());
      [
        { label: "缺少来源", value: data.total - data.notes.filter((note) => note.source).length, note: "不能作为确定事实", icon: "link", color: "orange" },
        { label: "待确认内容", value: data.unknown, note: "推断和事实尚未分开", icon: "circle-help", color: "violet" },
        { label: "超过 90 天", value: data.stale, note: "可能需要版本复核", icon: "clock-3", color: "blue" },
      ].forEach((item) => {
        const row = quality.createDiv({ cls: `wis-quality-row is-${item.color}` });
        makeIcon(row, item.icon);
        const text = row.createDiv();
        text.createEl("strong", { text: item.label });
        text.createSpan({ text: item.note });
        row.createSpan({ text: String(item.value) });
      });

      const recent = main.createEl("section", { cls: "wis-panel wis-recent" });
      const recentHead = recent.createDiv({ cls: "wis-panel-head" });
      const recentTitle = recentHead.createDiv();
      recentTitle.createEl("h2", { text: "最近资产" });
      recentTitle.createSpan({ text: "来自六个正式资产库" });
      if (!data.recent.length) recent.createDiv({ text: "六类资产还是空的。运行 /fde-interview，或先把材料放入待处理。", cls: "wis-empty" });
      data.recent.forEach((note) => {
        const row = recent.createEl("button", { cls: "wis-note-row" });
        row.createSpan({ text: note.library?.order || "--", cls: `wis-library-code is-${note.library?.color || "blue"}` });
        const text = row.createDiv({ cls: "wis-note-row-copy" });
        text.createEl("strong", { text: note.file.basename, cls: "wis-note-row-title" });
        text.createSpan({ text: `${note.library?.name || "资产"} · ${note.source ? `来源：${note.source}` : "缺少来源"}`, cls: "wis-note-row-meta" });
        row.createSpan({ text: formatRelativeTime(note.file.stat.mtime), cls: "wis-note-row-time" });
        row.addEventListener("click", () => this.service.openFile(note.file));
      });
    }
  }

  class FDEInboxView extends FDEBaseView {
    constructor(leaf, plugin) {
      super(leaf, plugin, "inbox");
      this.selectedPaths = new Set();
    }

    async processFiles(files) {
      const selected = [...new Map((files || []).filter((file) => file?.path).map((file) => [file.path, file])).values()];
      if (!selected.length || this.assistantLoading) {
        if (this.assistantLoading) new Notice("Agent 正在处理当前会话，请等待完成或先停止");
        return;
      }
      const states = selected.map((file) => this.service.inboxProcessingState(file));
      const conversationIds = [...new Set(states.map((state) => state.conversationId).filter(Boolean))];
      const conversationId = conversationIds.length === 1 ? conversationIds[0] : this.assistantSessionId;
      const storedConversation = states.find((state) => state.conversationId === conversationId && Array.isArray(state.messages));
      const messages = conversationId && conversationId === this.assistantSessionId
        ? this.assistantMessages
        : storedConversation?.messages || [];
      const displayPrompt = `/fde-ingest\n\n处理待处理材料：${selected.map((file) => file.basename).join("、")}`;
      this.assistantMode = "chat";
      this.assistantSessionId = conversationId;
      this.assistantPrimaryPath = selected[0].path;
      this.assistantSourcePaths = selected.slice(1).map((file) => file.path);
      this.assistantMessages = [...messages, { role: "user", content: displayPrompt }];
      this.assistantDraft = "";
      this.assistantLoading = true;
      this.assistantRequestId = null;
      this.assistantActivity = [{ label: "Agent 处理中…" }];
      await this.render();
      this.focusAssistantConversation();

      try {
        const result = await this.service.processInboxFiles(selected, {
          sessionId: conversationId,
          messages: this.assistantMessages,
          onTaskStart: (task) => {
            this.assistantRequestId = task?.taskId || null;
            this.plugin.refreshDashboard();
          },
          onEvent: () => {
            this.assistantActivity = [{ label: "Agent 处理中…" }];
            this.plugin.refreshDashboard();
          },
        });
        const latestState = this.service.inboxProcessingState(selected[0]);
        this.assistantSessionId = latestState.conversationId || this.assistantSessionId;
        if (result.status === "awaiting-confirmation") {
          new Notice("分流预览已生成；请在右侧对话确认并完成入库步骤");
        } else {
          const message = result.task?.error || result.error?.message || latestState.message || "Agent 未能完成处理";
          this.assistantMessages.push({ role: "assistant", content: message, error: true, code: result.error?.code || "AGENT_FAILED" });
        }
      } finally {
        this.assistantLoading = false;
        this.assistantRequestId = null;
        this.assistantActivity = [];
        await this.render();
        this.focusAssistantConversation();
      }
    }

    async openProcessingConversation(state, file) {
      const sourcePaths = [...new Set((state?.sourcePaths || [file.path]).filter(Boolean))];
      const primaryPath = sourcePaths[0] || file.path;
      const resultContent = String(state?.resultContent || state?.preview || "").trim();
      const conversationId = state?.conversationId || "";
      const sameConversation = Boolean(conversationId && this.assistantSessionId === conversationId && this.assistantMessages.length);
      this.assistantMode = "chat";
      this.assistantSessionId = conversationId;
      this.assistantPrimaryPath = primaryPath;
      this.assistantSourcePaths = sourcePaths.filter((path) => path !== primaryPath);
      if (state?.status === "awaiting-confirmation") this.assistantDraft = "确认执行";
      else if (!sameConversation || !this.assistantDraft.trim()) this.assistantDraft = "请基于上面的处理结果给出可执行的下一步。";
      this.assistantActivity = [];
      if (!sameConversation) {
        this.assistantMessages = Array.isArray(state?.messages) && state.messages.length
          ? state.messages
          : [
            { role: "user", content: `处理待处理材料：${sourcePaths.map((path) => path.split("/").pop()).join("、")}` },
            {
              role: "assistant",
              content: resultContent || "分流预览已生成。请确认下一步要写入、修改，还是暂不处理。",
              provider: state?.provider || "FDE365 Agent",
              model: state?.model || "",
            },
          ];
      }
      await this.render();
      window.setTimeout(() => {
        const input = this.contentEl.querySelector(".wis-composer textarea");
        input?.focus();
        const body = this.contentEl.querySelector(".wis-assistant-body");
        if (body) body.scrollTop = body.scrollHeight;
      }, 0);
    }

    async confirmDeleteMaterials(files) {
      const candidates = [...new Map((files || [])
        .filter((file) => this.service.inboxProcessingState(file).status !== "running")
        .map((file) => [file.path, file])).values()];
      if (!candidates.length) {
        new Notice("请选择当前未在处理中的原始材料");
        return;
      }
      const originalGroups = await Promise.all(candidates.map((file) => this.service.inboxOriginalFiles(file)));
      const originalCount = new Set(originalGroups.flat().map((target) => target.path)).size;
      const title = candidates.length === 1 ? "删除这份原始材料？" : `删除选中的 ${candidates.length} 份原始材料？`;
      new ConfirmActionModal(
        this.app,
        title,
        `将把 ${candidates.length} 条收件记录和 ${originalCount} 个对应原始文件移入回收站。六库正式资产、处理记录和 Agent 对话不会删除，但其中的来源链接可能失效。`,
        candidates.length === 1 ? "删除材料和原始文件" : `批量删除 (${candidates.length})`,
        async () => {
          try {
            await this.service.deleteInboxMaterials(candidates);
            const deletedPaths = new Set(candidates.map((file) => file.path));
            deletedPaths.forEach((path) => this.selectedPaths.delete(path));
            if (deletedPaths.has(this.assistantPrimaryPath)) this.assistantPrimaryPath = "";
            this.assistantSourcePaths = this.assistantSourcePaths.filter((path) => !deletedPaths.has(path));
            await this.render();
          } catch (error) {
            new Notice(`删除失败：${error instanceof Error ? error.message : String(error)}`, 8000);
          }
        },
        { danger: true, icon: "trash-2" },
      ).open();
    }

    async confirmDeleteMaterial(file, state) {
      if (state?.status === "running") {
        new Notice("材料正在处理中，请先停止 Agent 再删除");
        return;
      }
      await this.confirmDeleteMaterials([file]);
    }

    renderProcessingStatus(parent, state) {
      const status = state?.status || "idle";
      const line = parent.createDiv({
        cls: `wis-inbox-processing-status is-${status}`,
        attr: { role: "status", "aria-live": "polite", title: state?.message || "等待处理" },
      });
      if (status === "running") line.createSpan({ cls: "wis-processing-spinner", attr: { "aria-hidden": "true" } });
      else makeIcon(line, ["success", "processed"].includes(status) ? "circle-check" : status === "awaiting-confirmation" ? "circle-help" : status === "failed" ? "circle-x" : "clock-3");
      line.createSpan({ text: state?.message || "等待处理" });
    }

    createQuickNote() {
      new TextPromptModal(this.app, {
        title: "快速记录原始材料",
        description: "先完整保留原始表达，之后再运行 /fde-ingest 分流。",
        placeholder: "给这份材料起一个可识别的标题…",
        onSubmit: async (value) => this.service.createQuickNote(value),
      }).open();
    }

    async renderMain(main, data) {
      const header = main.createDiv({ cls: "wis-page-header" });
      const copy = header.createDiv();
      copy.createSpan({ text: "FDE365 · 原始材料", cls: "wis-eyebrow" });
      copy.createEl("h1", { text: "待处理材料" });
      copy.createEl("p", { text: "录音、聊天、会议纪要和旧资料先保留原文；AI 只生成分流预览，确认后才写入六类资产。" });
      const actions = header.createDiv({ cls: "wis-header-actions" });
      makeButton(actions, "快速记录", "plus", "is-primary", () => this.createQuickNote());
      const processableFiles = data.pending.filter((file) => !["running", "awaiting-confirmation"].includes(this.service.inboxProcessingState(file).status));
      const processAll = makeButton(actions, "处理全部待处理", "sparkles", "is-secondary", () => void this.processFiles(processableFiles));
      processAll.disabled = !processableFiles.length;

      const dropZone = main.createEl("section", {
        cls: "wis-inbox-dropzone",
        attr: { role: "button", tabindex: "0", "aria-label": "拖入或选择要收录到待处理的文件" },
      });
      const dropIcon = dropZone.createDiv({ cls: "wis-inbox-drop-icon" });
      makeIcon(dropIcon, "cloud-upload");
      const dropCopy = dropZone.createDiv({ cls: "wis-inbox-drop-copy" });
      const dropTitle = dropCopy.createEl("strong", { text: "把文件拖到这里" });
      dropCopy.createSpan({ text: "只收录并保留原文，不会自动运行 Skill" });
      dropZone.createSpan({ text: "选择文件", cls: "wis-inbox-drop-action" });
      const picker = dropZone.createEl("input", { attr: { type: "file", multiple: "", tabindex: "-1", "aria-hidden": "true" } });
      picker.addClass("wis-inbox-file-picker");
      let importing = false;
      const importFiles = async (fileList) => {
        if (importing) return;
        const files = Array.from(fileList || []);
        if (!files.length) return;
        importing = true;
        dropZone.addClass("is-importing");
        dropTitle.setText(`正在收录 ${files.length} 个文件…`);
        try {
          const imported = await this.service.importInboxFiles(files);
          new Notice(`已收录 ${imported.length} 个文件；等待你决定是否运行 /fde-ingest`);
          await this.render();
        } catch (error) {
          dropZone.removeClass("is-importing");
          dropTitle.setText("收录未完成，可重新拖入");
          new Notice(`文件收录失败：${error instanceof Error ? error.message : String(error)}`, 8000);
        } finally {
          importing = false;
          picker.value = "";
        }
      };
      dropZone.addEventListener("click", (event) => {
        if (event.target !== picker) picker.click();
      });
      dropZone.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          picker.click();
        }
      });
      picker.addEventListener("change", () => void importFiles(picker.files));
      dropZone.addEventListener("dragenter", (event) => {
        event.preventDefault();
        if (!importing) dropZone.addClass("is-dragging");
      });
      dropZone.addEventListener("dragover", (event) => {
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
      });
      dropZone.addEventListener("dragleave", (event) => {
        if (!dropZone.contains(event.relatedTarget)) dropZone.removeClass("is-dragging");
      });
      dropZone.addEventListener("drop", (event) => {
        event.preventDefault();
        dropZone.removeClass("is-dragging");
        void importFiles(event.dataTransfer?.files);
      });

      const stats = main.createDiv({ cls: "wis-compact-stats" });
      [
        ["待处理", data.pending.length, "inbox", "orange"],
        ["已处理记录", data.processed.length, "archive-restore", "blue"],
        ["正式资产", data.total, "library", "indigo"],
        ["待确认项", data.unknown, "circle-help", "violet"],
      ].forEach(([label, value, iconName, color]) => {
        const card = stats.createDiv({ cls: `wis-compact-stat is-${color}` });
        makeIcon(card, iconName);
        const text = card.createDiv();
        text.createSpan({ text: label });
        text.createEl("strong", { text: String(value) });
      });

      const flow = main.createEl("section", { cls: "wis-panel wis-ingest-flow" });
      const flowHead = flow.createDiv({ cls: "wis-panel-head" });
      const title = flowHead.createDiv();
      title.createEl("h2", { text: "安全入库流程" });
      title.createSpan({ text: "确认点放在真正写入之前" });
      const steps = flow.createDiv({ cls: "wis-ingest-steps" });
      [
        ["01", "保留原文", "登记路径、日期、参与人", "file-lock-2"],
        ["02", "通读拆分", "原话、事实、判断、方法、案例、选题", "scan-text"],
        ["03", "分流预览", "新增、补充、冲突、重复", "split"],
        ["04", "人工确认", "确认后写六库并记录处理批次", "badge-check"],
      ].forEach(([number, label, note, iconName]) => {
        const step = steps.createDiv({ cls: "wis-ingest-step" });
        step.createSpan({ text: number });
        makeIcon(step, iconName);
        step.createEl("strong", { text: label });
        step.createDiv({ text: note });
      });

      const list = main.createEl("section", { cls: "wis-panel wis-inbox-list" });
      const listHead = list.createDiv({ cls: "wis-panel-head" });
      const listTitle = listHead.createDiv();
      listTitle.createEl("h2", { text: "原始材料" });
      listTitle.createSpan({ text: "处理不会覆盖原文；确认删除时会同时移除收件记录和原始文件" });
      const materials = Array.isArray(data.materials) ? data.materials : [...data.pending, ...data.processed];
      const pendingPaths = new Set(data.pending.map((file) => file.path));
      const selectableFiles = materials.filter((file) => this.service.inboxProcessingState(file).status !== "running");
      const selectablePaths = new Set(selectableFiles.map((file) => file.path));
      this.selectedPaths = new Set([...this.selectedPaths].filter((path) => selectablePaths.has(path)));
      const selectedFiles = selectableFiles.filter((file) => this.selectedPaths.has(file.path));
      const processableSelectedFiles = selectedFiles.filter((file) => pendingPaths.has(file.path)
        && this.service.inboxProcessingState(file).status !== "awaiting-confirmation");
      const batch = listHead.createDiv({ cls: "wis-inbox-batch-actions" });
      const selectAllLabel = batch.createEl("label", { cls: "wis-inbox-select-all" });
      const selectAll = selectAllLabel.createEl("input", { attr: { type: "checkbox", "aria-label": "全选原始材料" } });
      selectAll.checked = Boolean(selectableFiles.length) && selectableFiles.every((file) => this.selectedPaths.has(file.path));
      selectAll.indeterminate = selectedFiles.length > 0 && !selectAll.checked;
      selectAll.disabled = !selectableFiles.length;
      selectAllLabel.createSpan({ text: "全选" });
      selectAll.addEventListener("change", () => {
        if (selectAll.checked) selectableFiles.forEach((file) => this.selectedPaths.add(file.path));
        else this.selectedPaths.clear();
        void this.render();
      });
      batch.createSpan({ text: `已选 ${selectedFiles.length} 项`, cls: "wis-inbox-selected-count" });
      if (selectedFiles.length) makeButton(batch, "取消选择", "x", "is-text", () => {
        this.selectedPaths.clear();
        void this.render();
      });
      const batchButton = makeButton(batch, `批量处理${processableSelectedFiles.length ? ` (${processableSelectedFiles.length})` : ""}`, "sparkles", "is-primary", () => void this.processFiles(processableSelectedFiles));
      const batchReady = processableSelectedFiles.length > 0;
      batchButton.disabled = !batchReady;
      if (batchReady) batchButton.addClass("is-ready");
      const batchDeleteButton = makeButton(batch, `批量删除${selectedFiles.length ? ` (${selectedFiles.length})` : ""}`, "trash-2", "is-danger", () => void this.confirmDeleteMaterials(selectedFiles));
      batchDeleteButton.disabled = !selectedFiles.length;
      if (!materials.length) list.createDiv({ text: "原始材料列表是空的。可以快速记录，或把录音转写、聊天导出和会议纪要放进该目录。", cls: "wis-empty" });
      materials.forEach((file) => {
        const storedState = this.service.inboxProcessingState(file);
        const completed = this.service.isCompletedInboxFile(file) || storedState.status === "processed";
        const state = completed ? { ...storedState, status: "processed", message: "已处理完成" } : storedState;
        const row = list.createDiv({ cls: `wis-inbox-row is-${state.status}` });
        const awaitingConfirmation = state.status === "awaiting-confirmation";
        const selectTitle = state.status === "running"
          ? `${file.basename} 正在处理中，不能选择`
          : completed
            ? `选择已处理材料 ${file.basename}（可批量删除）`
            : awaitingConfirmation
              ? `选择等待确认材料 ${file.basename}（只可批量删除）`
              : `选择 ${file.basename}`;
        const selectLabel = row.createEl("label", { cls: "wis-inbox-select", attr: { title: selectTitle } });
        const checkbox = selectLabel.createEl("input", { attr: { type: "checkbox", "aria-label": `选择 ${file.basename}` } });
        checkbox.checked = this.selectedPaths.has(file.path);
        checkbox.disabled = state.status === "running";
        checkbox.addEventListener("change", () => {
          if (checkbox.checked) this.selectedPaths.add(file.path);
          else this.selectedPaths.delete(file.path);
          void this.render();
        });
        makeIcon(row, "file-text", "is-orange");
        const text = row.createDiv({ cls: "wis-inbox-row-copy" });
        text.createEl("strong", { text: file.basename });
        text.createSpan({ text: `${formatRelativeTime(file.stat.mtime)} · 原始材料保留` });
        this.renderProcessingStatus(text, state);
        const actions = row.createDiv({ cls: "wis-row-actions" });
        makeButton(actions, "打开原文", "external-link", "is-text", () => this.service.openFile(file));
        if (completed && (state.conversationId || state.messages?.length)) {
          makeButton(actions, "查看处理对话", "messages-square", "is-secondary", () => void this.openProcessingConversation(state, file));
        }
        if (!completed) {
          if (awaitingConfirmation) {
            makeButton(actions, "前往确认", "arrow-right", "is-primary", () => void this.openProcessingConversation(state, file));
          } else {
            const processButton = makeButton(
              actions,
              state.status === "running" ? "处理中…" : state.status === "failed" ? "重试处理" : "用 /fde-ingest 处理",
              state.status === "running" ? "loader-circle" : "sparkles",
              "is-secondary",
              () => void this.processFiles([file]),
            );
            processButton.disabled = state.status === "running";
            if (state.status === "running") processButton.setAttr("aria-busy", "true");
          }
        }
        const deleteButton = makeButton(actions, "删除", "trash-2", "is-danger", () => void this.confirmDeleteMaterial(file, state));
        deleteButton.disabled = state.status === "running";
      });
    }
  }

  class FDELibrariesView extends FDEBaseView {
    constructor(leaf, plugin) {
      super(leaf, plugin, "libraries");
      this.selectedLibrary = "all";
      this.query = "";
    }

    async renderMain(main, data) {
      const header = main.createDiv({ cls: "wis-page-header" });
      const copy = header.createDiv();
      copy.createSpan({ text: "FDE365 · 真实来源", cls: "wis-eyebrow" });
      copy.createEl("h1", { text: "六类资产" });
      copy.createEl("p", { text: "每个库回答一种不同的问题。路径决定归属，来源决定能否作为事实使用。" });
      makeButton(header, "新建资产", "plus", "is-primary", () => new AssetModal(this.app, this.selectedLibrary, async (value) => this.service.createAsset(value)).open());
      const selector = main.createDiv({ cls: "wis-library-selector" });
      const all = selector.createEl("button", { cls: `wis-library-tab${this.selectedLibrary === "all" ? " is-active" : ""}` });
      all.createSpan({ text: "ALL" });
      all.createEl("strong", { text: "全部资产" });
      all.createSpan({ text: String(data.total) });
      all.addEventListener("click", () => { this.selectedLibrary = "all"; void this.render(); });
      data.libraries.forEach((library) => {
        const button = selector.createEl("button", { cls: `wis-library-tab is-${library.color}${this.selectedLibrary === library.id ? " is-active" : ""}` });
        button.createSpan({ text: library.order });
        button.createEl("strong", { text: library.name });
        button.createSpan({ text: String(library.count) });
        button.addEventListener("click", () => { this.selectedLibrary = library.id; void this.render(); });
      });
      const selected = this.selectedLibrary === "all" ? null : data.libraries.find((item) => item.id === this.selectedLibrary);
      if (selected) {
        const brief = main.createDiv({ cls: `wis-library-brief is-${selected.color}` });
        makeIcon(brief, selected.icon);
        const briefCopy = brief.createDiv();
        briefCopy.createEl("h2", { text: selected.name });
        briefCopy.createEl("p", { text: selected.description });
        const briefMetrics = brief.createDiv({ cls: "wis-brief-metrics" });
        briefMetrics.createSpan({ text: `${selected.count} 项资产` });
        briefMetrics.createSpan({ text: `来源覆盖 ${percent(selected.sourceCoverage)}` });
        briefMetrics.createSpan({ text: `${selected.unknown} 个待确认` });
      }
      const toolbar = main.createDiv({ cls: "wis-library-toolbar" });
      const search = toolbar.createEl("input", { attr: { type: "search", placeholder: "在当前资产范围搜索…" } });
      search.value = this.query;
      search.addEventListener("input", () => {
        this.query = search.value.trim().toLowerCase();
        main.querySelectorAll(".wis-asset-card").forEach((card) => card.toggleClass("is-hidden", !card.dataset.search.includes(this.query)));
      });
      makeButton(toolbar, "查库 /fde-library", "sparkles", "is-secondary", () => void this.prefillAssistantCommand("fde-library"));
      const notes = data.notes.filter((note) => this.selectedLibrary === "all" || note.library?.id === this.selectedLibrary);
      const grid = main.createDiv({ cls: "wis-asset-grid" });
      if (!notes.length) grid.createDiv({ text: selected?.emptyAction || "六类资产还是空的。", cls: "wis-empty" });
      notes.sort((a, b) => b.file.stat.mtime - a.file.stat.mtime).forEach((note) => {
        const card = grid.createEl("button", { cls: `wis-asset-card is-${note.library?.color || "blue"}` });
        card.dataset.search = `${note.file.basename} ${note.content}`.toLowerCase();
        const top = card.createDiv({ cls: "wis-asset-card-top" });
        top.createSpan({ text: note.library?.order || "--", cls: "wis-library-code" });
        top.createSpan({ text: note.library?.name || "资产" });
        card.createEl("h3", { text: note.file.basename });
        card.createEl("p", { text: note.excerpt || "尚未填写正文。" });
        const evidence = card.createDiv({ cls: "wis-evidence-row" });
        evidence.createSpan({ text: note.source ? "有来源" : "缺少来源", cls: note.source ? "is-good" : "is-warning" });
        if (note.unknown) evidence.createSpan({ text: `${note.unknown} 待确认`, cls: "is-unknown" });
        evidence.createSpan({ text: formatRelativeTime(note.file.stat.mtime) });
        card.addEventListener("click", () => this.service.openFile(note.file));
      });
    }
  }

  class FDENetworkView extends FDEBaseView {
    constructor(leaf, plugin) { super(leaf, plugin, "network"); }

    async renderMain(main, data) {
      const header = main.createDiv({ cls: "wis-page-header" });
      const copy = header.createDiv();
      copy.createSpan({ text: "FDE365 · 资产连接", cls: "wis-eyebrow" });
      copy.createEl("h1", { text: "资产网络" });
      copy.createEl("p", { text: "关系不是装饰：产品要连接客户需求，方法要连接真实案例，内容要能回到来源。" });
      makeButton(header, "整理关联", "sparkles", "is-primary", () => void this.runSkillInAssistant("fde-organize", "请执行资产网络的‘整理关联’模式：读取六类资产中的真实 Markdown 和现有 Wikilink，识别有证据的支持、冲突、例子与版本关系。需要批准模式下，先列出待建立的双向链接对、关系类型和依据，等我确认后再写；YOLO 模式下可直接写入。写入时必须在关系两端笔记的‘关联资产’章节加入真实 Obsidian [[双链]]，使用完整 Vault 相对路径避免同名歧义，并在完成后重新统计跨库连接。不要创建 Canvas 或 Canva 预览，除非我明确要求。"));
      const map = main.createEl("section", { cls: "wis-network-map" });
      const center = map.createDiv({ cls: "wis-network-center" });
      center.createSpan({ text: "FDE365" });
      center.createEl("strong", { text: `${data.relations.edges.length}` });
      center.createSpan({ text: "跨库连接" });
      data.libraries.forEach((library, index) => {
        const node = map.createEl("button", { cls: `wis-network-node is-${library.color} at-${index + 1}` });
        node.createSpan({ text: library.order });
        makeIcon(node, library.icon);
        node.createEl("strong", { text: library.short });
        node.createSpan({ text: `${library.count} 项` });
        node.addEventListener("click", () => this.service.openLibrary(library.id));
      });
      const matrixPanel = main.createEl("section", { cls: "wis-panel wis-relation-matrix" });
      const matrixHead = matrixPanel.createDiv({ cls: "wis-panel-head" });
      const title = matrixHead.createDiv();
      title.createEl("h2", { text: "跨库关系矩阵" });
      title.createSpan({ text: "只统计实际双向链接，不生成模拟数据" });
      const table = matrixPanel.createDiv({ cls: "wis-matrix" });
      table.createSpan();
      data.libraries.forEach((library) => table.createSpan({ text: library.short, cls: `is-${library.color}` }));
      data.libraries.forEach((source) => {
        table.createSpan({ text: source.short, cls: `is-${source.color}` });
        data.libraries.forEach((target) => {
          const value = data.relations.matrix[source.id][target.id];
          table.createSpan({ text: String(value), cls: value ? "has-link" : "" });
        });
      });
      const gaps = main.createEl("section", { cls: "wis-panel" });
      const gapsHead = gaps.createDiv({ cls: "wis-panel-head" });
      const gapsTitle = gapsHead.createDiv();
      gapsTitle.createEl("h2", { text: "关键连接检查" });
      gapsTitle.createSpan({ text: "优先补能验证业务判断的连接" });
      [
        ["产品 → 客户", "产品承诺是否来自真实需求", "product", "customer"],
        ["案例 → 方法", "方法是否有实际使用证据", "case", "method"],
        ["内容 → 来源", "成稿是否能回到产品、客户和案例", "content", "case"],
      ].forEach(([label, note, from, to]) => {
        const value = data.relations.matrix[from][to] + data.relations.matrix[to][from];
        const row = gaps.createDiv({ cls: "wis-check-row" });
        makeIcon(row, value ? "circle-check-big" : "circle-dashed", value ? "is-good" : "is-warning");
        const text = row.createDiv();
        text.createEl("strong", { text: label });
        text.createSpan({ text: note });
        row.createSpan({ text: value ? `${value} 条连接` : "尚未连接" });
      });
    }
  }

  class FDEContentView extends FDEBaseView {
    constructor(leaf, plugin) { super(leaf, plugin, "content"); }

    async renderMain(main, data) {
      const header = main.createDiv({ cls: "wis-page-header" });
      const copy = header.createDiv();
      copy.createSpan({ text: "FDE365 · 内容工作流", cls: "wis-eyebrow" });
      copy.createEl("h1", { text: "内容生产" });
      copy.createEl("p", { text: "每次推进前先确认当前环节已经完成；内容真实发布后流程结束，发布数据作为可选分析输入单独上传。" });
      const actions = header.createDiv({ cls: "wis-header-actions" });
      makeButton(actions, "新建选题", "plus", "is-primary", () => new TextPromptModal(this.app, {
        title: "新建选题",
        description: "创建后进入“选题”阶段；请在文件中补目标读者、核心问题和来源。",
        placeholder: "选题标题…",
        onSubmit: async (value) => this.service.createContent(value, "选题"),
      }).open());
      makeButton(actions, "从六库找选题", "sparkles", "is-secondary", () => void this.runSkillInAssistant("fde-topics", "请从客户原话、产品问题、案例结果、个人判断和方法资产中生成可追溯选题。"));
      const summary = main.createDiv({ cls: "wis-content-summary" });
      data.stages.forEach((stage, index) => {
        const item = summary.createDiv({ cls: `wis-content-summary-item is-${stage.color}` });
        item.createSpan({ text: String(index + 1).padStart(2, "0") });
        makeIcon(item, stage.icon);
        item.createEl("strong", { text: stage.id });
        item.createDiv({ text: String(stage.items.length) });
      });
      const board = main.createDiv({ cls: "wis-content-board" });
      data.stages.forEach((stage, index) => {
        const column = board.createEl("section", { cls: `wis-stage-column is-${stage.color}` });
        const stageHead = column.createDiv({ cls: "wis-stage-column-head" });
        const stageTitle = stageHead.createDiv();
        stageTitle.createSpan({ text: String(index + 1).padStart(2, "0") });
        stageTitle.createEl("strong", { text: stage.id });
        stageHead.createSpan({ text: String(stage.items.length) });
        column.createDiv({ text: stage.description, cls: "wis-stage-description" });
        const cards = column.createDiv({ cls: "wis-stage-cards" });
        if (!stage.items.length) cards.createDiv({ text: "暂无内容", cls: "wis-stage-empty" });
        stage.items.sort((a, b) => b.file.stat.mtime - a.file.stat.mtime).forEach((note) => {
          const card = cards.createDiv({ cls: "wis-content-card" });
          card.createEl("strong", { text: note.file.basename });
          card.createSpan({ text: note.source ? `来源：${note.source}` : "缺少来源", cls: note.source ? "is-source" : "is-warning" });
          if (note.unknown) card.createSpan({ text: `${note.unknown} 个未核实项`, cls: "is-unknown" });
          const cardActions = card.createDiv({ cls: "wis-content-card-actions" });
          makeButton(cardActions, "打开", "external-link", "is-text", () => this.service.openFile(note.file));
          if (CONTENT_STAGE_GATES[stage.id]) makeButton(cardActions, "确认推进", "arrow-right", "is-text", () => this.service.advanceContent(note, {
            onIncomplete: (gate, currentNote) => this.prefillContentStageSkill(currentNote, gate),
          }));
          if (stage.id === "待审核") makeButton(cardActions, "审核", "sparkles", "is-text", () => void this.runSkillInAssistant("fde-review", `请审核稿件 ${note.file.path}，默认只诊断，不直接改稿。`, [note.file]));
          if (stage.id === "已发布") makeButton(cardActions, "上传数据分析", "file-up", "is-text", () => this.openAnalyticsUpload(note));
        });
      });
      const analytics = main.createEl("section", { cls: "wis-panel wis-content-analytics" });
      const analyticsHead = analytics.createDiv({ cls: "wis-panel-head" });
      const analyticsCopy = analyticsHead.createDiv();
      analyticsCopy.createEl("h2", { text: "发布数据分析（可选）" });
      analyticsCopy.createSpan({ text: "“已发布”是流程终点；CSV、Excel、TSV 或 JSON 只作为分析输入，不改变稿件阶段。" });
      makeButton(analyticsHead, "上传发布数据", "file-up", "is-secondary", () => this.openAnalyticsUpload());
      const analyticsBody = analytics.createDiv({ cls: "wis-content-analytics-body" });
      if (!data.analyticsFiles.length) {
        analyticsBody.createDiv({ text: "发布后可以上传抖音、小红书、公众号等平台导出的数据，再在右侧对话运行 /fde-spread。", cls: "wis-empty" });
      } else {
        analyticsBody.createDiv({ text: `${data.analyticsFiles.length} 份数据或历史分析记录`, cls: "wis-content-analytics-count" });
        data.analyticsFiles.slice(0, 8).forEach((file) => {
          const row = analyticsBody.createDiv({ cls: "wis-content-analytics-file" });
          makeIcon(row, file.extension === "md" ? "file-text" : "table-2");
          const fileCopy = row.createDiv();
          fileCopy.createEl("strong", { text: file.basename });
          fileCopy.createSpan({ text: file.path });
          if (file.extension === "md") makeButton(row, "打开", "external-link", "is-text", () => this.service.openFile(file));
        });
      }
      if (data.stageConflicts.length) {
        const conflict = main.createEl("section", { cls: "wis-alert is-warning" });
        makeIcon(conflict, "triangle-alert");
        const text = conflict.createDiv();
        text.createEl("strong", { text: `${data.stageConflicts.length} 个阶段冲突` });
        text.createSpan({ text: "文件所在目录与“当前阶段”字段不一致。运行 /fde-health 查看路径证据，插件不会自动选边。" });
        makeButton(conflict, "运行体检", "activity", "is-secondary", () => void this.runSkillInAssistant("fde-health", "请检查内容文件目录与当前阶段字段冲突，只报告，不自动移动。", data.stageConflicts.map((note) => note.file)));
      }
    }
  }

  class FDESkillsView extends FDEBaseView {
    constructor(leaf, plugin) {
      super(leaf, plugin, "skills");
      this.selectedSkill = "fde-start";
      this.selectedGroup = "entry";
    }

    async renderMain(main, data) {
      const header = main.createDiv({ cls: "wis-page-header" });
      const copy = header.createDiv();
      copy.createSpan({ text: "FDE365 · 本地工作流", cls: "wis-eyebrow" });
      copy.createEl("h1", { text: "FDE Skills" });
      copy.createEl("p", { text: "35 项能力随知识库部署在 .agents/skills。它们共享六库边界、来源规则、未知项和确认机制。" });
      const capability = this.plugin.providerManager.describeSelected();
      const agentCapability = this.plugin.agentRuntime?.describe?.() || { available: false };
      const isDeveloperRuntime = agentCapability.mode === "local-cli";
      const isReady = isDeveloperRuntime ? agentCapability.available : capability.configured;
      const status = header.createDiv({ cls: `wis-provider-status${isReady ? " is-ready" : ""}` });
      makeIcon(status, isReady ? "circle-check-big" : "circle-alert");
      status.createSpan({ text: isDeveloperRuntime
        ? agentCapability.available ? "DEV · 本地 Codex CLI" : "DEV · 未找到 Codex CLI"
        : capability.configured ? `${capability.label} · ${capability.model || "默认模型"}` : "AI Provider 未配置" });
      const overview = main.createDiv({ cls: "wis-skill-overview" });
      overview.createDiv({ text: String(data.installedSkills.length), cls: "wis-skill-big-number" });
      const overviewCopy = overview.createDiv();
      overviewCopy.createEl("strong", { text: `已部署 / ${SKILLS.length} Skills` });
      overviewCopy.createSpan({ text: "create-only 安装，不覆盖已有 Skill；Codex 从知识库根目录发现本地能力。" });
      const meter = overview.createDiv({ cls: "wis-skill-meter" });
      meter.createDiv({ cls: "wis-skill-meter-fill", attr: { style: `width:${Math.round(data.installedSkills.length / SKILLS.length * 100)}%` } });
      const tabs = main.createDiv({ cls: "wis-skill-groups" });
      SKILL_GROUPS.forEach((group) => {
        const button = tabs.createEl("button", { cls: this.selectedGroup === group.id ? "is-active" : "" });
        button.createEl("strong", { text: group.name });
        button.createSpan({ text: String(SKILLS.filter((skill) => skill.group === group.id).length) });
        button.addEventListener("click", () => { this.selectedGroup = group.id; this.selectedSkill = SKILLS.find((skill) => skill.group === group.id)?.id; void this.render(); });
      });
      const layout = main.createDiv({ cls: "wis-skill-layout" });
      const catalog = layout.createDiv({ cls: "wis-skill-catalog" });
      SKILLS.filter((skill) => skill.group === this.selectedGroup).forEach((skill) => {
        const installed = data.installedSkills.includes(skill.id);
        const button = catalog.createEl("button", { cls: `wis-skill-card${this.selectedSkill === skill.id ? " is-selected" : ""}` });
        makeIcon(button, skill.icon);
        const text = button.createDiv();
        text.createEl("strong", { text: `/${skill.id}` });
        text.createSpan({ text: skill.name });
        button.createSpan({ text: installed ? "已部署" : "缺失", cls: installed ? "is-installed" : "is-missing" });
        button.addEventListener("click", () => { this.selectedSkill = skill.id; void this.render(); });
      });
      const skill = SKILLS.find((item) => item.id === this.selectedSkill) || SKILLS[0];
      const detail = layout.createEl("section", { cls: "wis-skill-detail" });
      const detailIcon = detail.createDiv({ cls: "wis-skill-detail-icon" });
      makeIcon(detailIcon, skill.icon);
      detail.createSpan({ text: `/${skill.id}`, cls: "wis-eyebrow" });
      detail.createEl("h2", { text: skill.name });
      detail.createEl("p", { text: skill.description });
      const contract = detail.createDiv({ cls: "wis-skill-contract" });
      contract.createEl("strong", { text: "共同工作合同" });
      ["读取 .fde/config.yaml", "关键判断附来源", "事实 / 推断 / 未知分开", "破坏性动作先预览确认"].forEach((item) => {
        const row = contract.createDiv();
        makeIcon(row, "check");
        row.createSpan({ text: item });
      });
      detail.createDiv({ text: `交付：${skill.output}`, cls: "wis-skill-output" });
      const detailActions = detail.createDiv({ cls: "wis-skill-detail-actions" });
      makeButton(detailActions, `填入 /${skill.id}`, "message-square-text", "is-primary", () => void this.prefillAssistantCommand(skill.id));
      makeButton(detailActions, "查看运行记录", "history", "is-secondary", async () => {
        this.assistantMode = "history";
        await this.render();
      });
    }
  }

  class FDEHealthView extends FDEBaseView {
    constructor(leaf, plugin) { super(leaf, plugin, "health"); }

    async renderMain(main, data) {
      const header = main.createDiv({ cls: "wis-page-header" });
      const copy = header.createDiv();
      copy.createSpan({ text: "FDE365 · 知识质量", cls: "wis-eyebrow" });
      copy.createEl("h1", { text: "知识体检" });
      copy.createEl("p", { text: "检查六库配置、来源、未知项、收件箱、内容阶段和本地 Skill。默认只报告，不替你选择业务事实。" });
      const actions = header.createDiv({ cls: "wis-header-actions" });
      makeButton(actions, "运行 /fde-health", "activity", "is-primary", () => void this.runSkillInAssistant("fde-health", "请对当前六类资产知识库做完整只读体检，按阻塞、要处理、提醒给出路径和证据。"));
      makeButton(actions, "补齐缺失模板", "folder-plus", "is-secondary", () => this.plugin.bootstrapService.ensure({ notify: true }));
      const score = Math.max(0, Math.round(100 - (1 - data.sourceCoverage) * 45 - Math.min(25, data.unknown * 3) - Math.min(15, data.stageConflicts.length * 5) - Math.min(15, data.missingPaths.length * 8)));
      const hero = main.createDiv({ cls: "wis-health-hero" });
      const ring = hero.createDiv({ cls: "wis-health-ring", attr: { style: `--wis-health:${score * 3.6}deg` } });
      ring.createEl("strong", { text: String(score) });
      ring.createSpan({ text: "健康度" });
      const heroCopy = hero.createDiv();
      heroCopy.createEl("h2", { text: score >= 80 ? "六库可以继续使用" : score >= 55 ? "知识库可用，但有明确缺口" : "先修结构和来源，再扩大使用" });
      heroCopy.createEl("p", { text: "健康度只基于当前本地证据，不生成模拟增长率或成功率。空库不会被判断为损坏。" });
      const heroMetrics = heroCopy.createDiv({ cls: "wis-health-hero-metrics" });
      heroMetrics.createSpan({ text: `来源覆盖 ${percent(data.sourceCoverage)}` });
      heroMetrics.createSpan({ text: `${data.unknown} 个待确认` });
      heroMetrics.createSpan({ text: `${data.pending.length} 份待处理` });
      heroMetrics.createSpan({ text: `${data.installedSkills.length}/${SKILLS.length} Skills` });
      const issues = main.createDiv({ cls: "wis-health-issues" });
      [
        { level: data.missingPaths.length ? "block" : "ok", title: "六库路径", value: data.missingPaths.length ? `${data.missingPaths.length} 个缺失` : "配置与目录存在", note: data.missingPaths[0] || `${getRoot()}/.fde/config.yaml` },
        { level: data.sourceCoverage < 0.8 ? "warn" : "ok", title: "来源覆盖", value: percent(data.sourceCoverage), note: `${data.total - data.notes.filter((note) => note.source).length} 项资产没有可识别来源` },
        { level: data.unknown ? "warn" : "ok", title: "事实边界", value: `${data.unknown} 个待确认`, note: "待确认、待验证、未核实和当前推断保持显式分开" },
        { level: data.stageConflicts.length ? "block" : "ok", title: "内容阶段", value: data.stageConflicts.length ? `${data.stageConflicts.length} 个冲突` : "目录与字段一致", note: "一个文件同时只处于一个阶段" },
        { level: data.installedSkills.length < SKILLS.length ? "warn" : "ok", title: "项目 Skills", value: `${data.installedSkills.length}/${SKILLS.length}`, note: `${getRoot()}/.agents/skills` },
      ].forEach((item) => {
        const card = issues.createDiv({ cls: `wis-health-issue is-${item.level}` });
        makeIcon(card, item.level === "ok" ? "circle-check-big" : item.level === "block" ? "octagon-alert" : "triangle-alert");
        const text = card.createDiv();
        text.createEl("strong", { text: item.title });
        text.createSpan({ text: item.note });
        card.createSpan({ text: item.value, cls: "wis-health-issue-value" });
      });
      const table = main.createEl("section", { cls: "wis-panel wis-library-health" });
      const tableHead = table.createDiv({ cls: "wis-panel-head" });
      const title = tableHead.createDiv();
      title.createEl("h2", { text: "六库质量" });
      title.createSpan({ text: "来源、未知项和更新时间共同决定是否能复用" });
      data.libraries.forEach((library) => {
        const row = table.createDiv({ cls: "wis-library-health-row" });
        row.createSpan({ text: library.order, cls: `wis-library-code is-${library.color}` });
        const text = row.createDiv();
        text.createEl("strong", { text: library.name });
        text.createSpan({ text: library.count ? `${library.count} 项 · ${library.unknown} 待确认 · ${library.stale} 过期候选` : library.emptyAction });
        const meter = row.createDiv({ cls: "wis-health-meter" });
        meter.createDiv({ cls: `wis-health-meter-fill is-${library.color}`, attr: { style: `width:${library.score}%` } });
        row.createSpan({ text: `${library.score}` });
      });
    }
  }

  return {
    FDEBaseView,
    FDEDashboardView,
    FDEInboxView,
    FDELibrariesView,
    FDENetworkView,
    FDEContentView,
    FDESkillsView,
    FDEHealthView,
  };
};
