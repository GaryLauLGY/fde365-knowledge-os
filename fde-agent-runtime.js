const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const readline = require("node:readline");

const APP_SERVER_REQUEST_TIMEOUT_MS = 30000;
const STDERR_LIMIT = 8192;

class FdeAgentRuntimeError extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.name = "FdeAgentRuntimeError";
    this.code = code;
    this.details = details;
  }
}

function isFile(pathValue) {
  try {
    return Boolean(pathValue && fs.statSync(pathValue).isFile());
  } catch {
    return false;
  }
}

function pathCandidates(home) {
  const values = [];
  const add = (value) => {
    if (value && !values.includes(value)) values.push(value);
  };
  if (process.platform === "win32") {
    add(path.join(home, ".local", "bin", "codex.exe"));
    add(path.join(home, ".local", "bin", "codex.cmd"));
    if (process.env.APPDATA) add(path.join(process.env.APPDATA, "npm", "codex.cmd"));
  } else {
    add(path.join(home, ".local", "bin", "codex"));
    add("/opt/homebrew/bin/codex");
    add("/usr/local/bin/codex");
    add("/Applications/ChatGPT.app/Contents/Resources/codex");
  }
  for (const directory of String(process.env.PATH || "").split(path.delimiter).filter(Boolean)) {
    add(path.join(directory, process.platform === "win32" ? "codex.exe" : "codex"));
    if (process.platform === "win32") add(path.join(directory, "codex.cmd"));
  }
  return values;
}

function locateCodexBinary(home = os.homedir()) {
  return pathCandidates(home).find(isFile) || null;
}

function isolatedCodexHome(vaultPath, pluginDirectory = ".obsidian/plugins/fde365-knowledge-os") {
  return path.join(path.resolve(vaultPath), ...String(pluginDirectory).split(/[\\/]+/).filter(Boolean), ".fde365-agent", "codex-home");
}

function codexConfigPath(codexHome) {
  return path.join(codexHome, "config.toml");
}

function buildIsolatedCodexConfig(model) {
  const escapedModel = String(model || "gpt-5.6-luna").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  return [
    `model = "${escapedModel}"`,
    'model_provider = "fde365"',
    'model_reasoning_effort = "medium"',
    "check_for_update_on_startup = false",
    'web_search = "disabled"',
    "",
    "[model_providers.fde365]",
    'name = "FDE365"',
    'base_url = "https://api.fde365.ai/v1"',
    'wire_api = "responses"',
    'env_key = "FDE365_TOKEN"',
    "",
  ].join("\n");
}

function ensureIsolatedCodexConfig(codexHome, model) {
  const configPath = codexConfigPath(codexHome);
  const content = buildIsolatedCodexConfig(model);
  fs.mkdirSync(codexHome, { recursive: true, mode: 0o700 });
  let current = "";
  try { current = fs.readFileSync(configPath, "utf8"); } catch { /* create below */ }
  if (current !== content) fs.writeFileSync(configPath, content, { encoding: "utf8", mode: 0o600 });
  try { fs.chmodSync(configPath, 0o600); } catch { /* Windows does not use POSIX modes */ }
  return configPath;
}

function hasManagedCodexConfig(codexHome) {
  try {
    const config = fs.readFileSync(codexConfigPath(codexHome), "utf8");
    return config.includes('model_provider = "fde365"')
      && config.includes('base_url = "https://api.fde365.ai/v1"')
      && config.includes('wire_api = "responses"')
      && config.includes('env_key = "FDE365_TOKEN"');
  } catch {
    return false;
  }
}

function buildSpawnSpec(command) {
  const args = ["app-server", "--stdio"];
  if (process.platform === "win32" && /\.(?:cmd|bat)$/i.test(command)) {
    const comspec = process.env.ComSpec || process.env.COMSPEC || "cmd.exe";
    return {
      command: comspec,
      args: ["/d", "/s", "/c", `"${command}" ${args.join(" ")}`],
      windowsVerbatimArguments: true,
    };
  }
  return { command, args, windowsVerbatimArguments: false };
}

function buildChildEnvironment(codexHome, token, environment = process.env) {
  return {
    ...environment,
    CODEX_HOME: codexHome,
    FDE365_TOKEN: token,
    NO_COLOR: "1",
  };
}

function buildLocalCliEnvironment(environment = process.env) {
  return {
    ...environment,
    NO_COLOR: "1",
  };
}

function withOptionalModel(params, model) {
  return model ? { ...params, model } : params;
}

function normalizeExecutionMode(value) {
  return value === "yolo" ? "yolo" : "approval";
}

function executionPolicy(mode, vaultPath) {
  const normalized = normalizeExecutionMode(mode);
  return normalized === "yolo"
    ? {
        mode: normalized,
        approvalPolicy: "never",
        sandbox: "workspace-write",
        sandboxPolicy: { type: "workspaceWrite", writableRoots: [path.resolve(vaultPath)], networkAccess: false },
      }
    : {
        mode: normalized,
        approvalPolicy: "on-request",
        sandbox: "read-only",
        sandboxPolicy: { type: "readOnly", networkAccess: false },
      };
}

function isRecord(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });
  return { promise, resolve, reject };
}

class JsonRpcTransport {
  constructor(proc, onNotification, onServerRequest, onExitMessage) {
    this.proc = proc;
    this.onNotification = onNotification;
    this.onServerRequest = onServerRequest;
    this.onExitMessage = onExitMessage;
    this.nextId = 1;
    this.pending = new Map();
    this.disposed = false;
    this.reader = readline.createInterface({ input: proc.stdout });
    this.reader.on("line", (line) => this.handleLine(line));
    proc.on("close", () => {
      const error = new Error(onExitMessage());
      this.disposed = true;
      this.rejectAll(error);
      this.onNotification("fde/processExited", { error });
    });
    proc.on("error", (error) => {
      this.disposed = true;
      this.rejectAll(error);
      this.onNotification("fde/processExited", { error });
    });
  }

  request(method, params, timeoutMs = APP_SERVER_REQUEST_TIMEOUT_MS) {
    if (this.disposed) return Promise.reject(new Error("Codex app-server transport is closed"));
    const id = this.nextId++;
    const result = deferred();
    const timer = timeoutMs > 0 ? setTimeout(() => {
      this.pending.delete(id);
      result.reject(new Error(`Codex app-server request timeout: ${method}`));
    }, timeoutMs) : null;
    this.pending.set(id, { ...result, timer });
    this.send({ jsonrpc: "2.0", id, method, params });
    return result.promise;
  }

  notify(method, params) {
    const message = { jsonrpc: "2.0", method };
    if (params !== undefined) message.params = params;
    this.send(message);
  }

  send(message) {
    if (this.disposed || !this.proc.stdin?.writable) return;
    this.proc.stdin.write(`${JSON.stringify(message)}\n`);
  }

  handleLine(line) {
    let message;
    try {
      message = JSON.parse(line);
    } catch {
      return;
    }
    if (!isRecord(message)) return;
    const { id, method, params } = message;
    if (id !== undefined && !method) {
      const pending = this.pending.get(Number(id));
      if (!pending) return;
      this.pending.delete(Number(id));
      if (pending.timer) clearTimeout(pending.timer);
      if (message.error) pending.reject(new Error(String(message.error.message || "Codex app-server error")));
      else pending.resolve(message.result);
      return;
    }
    if (typeof method === "string" && id === undefined) {
      try { this.onNotification(method, params); } catch { /* notification errors do not stop the runtime */ }
      return;
    }
    if (typeof method === "string" && id !== undefined) {
      Promise.resolve(this.onServerRequest(method, params)).then(
        (result) => this.send({ jsonrpc: "2.0", id, result }),
        (error) => this.send({ jsonrpc: "2.0", id, error: { code: -32603, message: error instanceof Error ? error.message : String(error) } }),
      );
    }
  }

  rejectAll(error) {
    for (const pending of this.pending.values()) {
      if (pending.timer) clearTimeout(pending.timer);
      pending.reject(error);
    }
    this.pending.clear();
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    this.reader.close();
    this.rejectAll(new Error("Codex app-server transport closed"));
  }
}

function contextBlock(context = []) {
  if (!Array.isArray(context) || !context.length) return "";
  return [
    "以下是用户明确允许使用的本地上下文。引用结论时保留来源路径：",
    ...context.map((item) => `\n### ${item.title || item.path || "本地上下文"}\n来源：${item.path || "未标注"}\n${item.excerpt || ""}`),
  ].join("\n");
}

function buildTurnPrompt(request) {
  const messages = Array.isArray(request.messages) ? request.messages : [];
  const userMessages = messages.filter((message) => message?.role !== "system" && message?.content);
  const current = userMessages.at(-1)?.content || "";
  const history = request.sessionId ? [] : userMessages.slice(0, -1);
  const parts = [];
  if (history.length) {
    parts.push("以下是迁移到本地 Agent 前的最近对话：");
    for (const message of history.slice(-6)) parts.push(`${message.role === "assistant" ? "FDE365" : "用户"}：${message.content}`);
  }
  const local = contextBlock(request.context);
  if (local) parts.push(local);
  parts.push(String(current));
  return parts.filter(Boolean).join("\n\n");
}

function buildBaseInstructions(request, vaultPath, knowledgeRoot) {
  const system = (Array.isArray(request.messages) ? request.messages : []).find((message) => message?.role === "system")?.content || "";
  const executionMode = normalizeExecutionMode(request.executionMode);
  const executionRule = executionMode === "yolo"
    ? "- 当前为 YOLO 模式：在当前 Vault 内可直接执行命令、新建和修改文件，无需等待用户逐次批准；执行后汇报实际改动和验证结果。"
    : "- 当前为需要批准模式：需要落盘或运行命令时，先说明目标，再使用本地工具触发宿主批准。";
  return [
    "你是嵌入 Obsidian 的 FDE365 本地 Agent。你拥有本地工具，但必须遵守以下边界：",
    `- 工作目录固定为当前 Vault：${vaultPath}`,
    `- FDE365 知识库根目录：${knowledgeRoot}`,
    "- 只读取完成当前任务所需的文件；不得读取 Vault 外的文件、凭据、浏览器数据或其他项目。",
    "- 不得读取或输出 .obsidian/plugins/fde365-knowledge-os/data.json、Token、密钥或任何凭据。",
    "- 禁止删除、清空或覆盖原始材料；写入必须优先新建草稿。",
    "- 禁止网络访问、安装软件、修改 Obsidian 插件配置或修改 .fde/.agents 运行合同。",
    "- 当用户调用 /fde-* 时，先读取知识库内对应 .agents/skills/<skill>/SKILL.md，再按合同执行。",
    executionRule,
    system,
  ].filter(Boolean).join("\n");
}

function summarizeToolEvent(event) {
  if (event.type === "file-change") return event.path ? `准备修改 ${event.path}` : "准备修改知识库文件";
  if (event.type === "command") return event.command ? `准备运行：${event.command}` : "准备运行本地命令";
  if (event.type === "tool") return event.label || "正在使用本地工具";
  return event.label || "本地 Agent 正在工作";
}

function redact(value, token) {
  const text = String(value || "");
  return token ? text.split(token).join("[REDACTED]") : text;
}

class FdeCodexAgentRuntime {
  constructor(plugin, options = {}) {
    this.plugin = plugin;
    this.options = options;
    this.proc = null;
    this.transport = null;
    this.stderr = "";
    this.runtimeBinary = "";
    this.loadedThreads = new Set();
    this.active = null;
    this.pendingNotifications = [];
  }

  get vaultPath() {
    const value = this.plugin.app.vault.adapter.getBasePath?.();
    if (!value) throw new FdeAgentRuntimeError("VAULT_PATH_UNAVAILABLE", "无法确定当前 Vault 的本地路径");
    return path.resolve(value);
  }

  get codexHome() {
    if (this.options.codexHome) return path.resolve(this.options.codexHome);
    const pluginDirectory = this.plugin.manifest.dir || `.obsidian/plugins/${this.plugin.manifest.id}`;
    return isolatedCodexHome(this.vaultPath, pluginDirectory);
  }

  get usesLocalCli() {
    return this.options.mode === "local-cli";
  }

  describe() {
    const binary = this.options.codexPath || locateCodexBinary();
    const configured = this.usesLocalCli ? Boolean(binary) : hasManagedCodexConfig(this.codexHome);
    return {
      available: Boolean(binary),
      ready: Boolean(this.proc && !this.proc.killed && this.transport && !this.transport.disposed),
      binary,
      configured,
      mode: this.usesLocalCli ? "local-cli" : "isolated-fde365",
      isolated: !this.usesLocalCli,
      label: binary
        ? this.usesLocalCli
          ? "DEV · 本地 Codex CLI"
          : configured ? "Codex Agent" : "Codex Agent · 首次运行自动配置"
        : "缺少 Codex 运行组件",
      error: !binary
        ? "未找到 Codex 运行组件；请先安装官方 Codex 应用或命令行组件"
        : null,
    };
  }

  async ensureReady() {
    const token = String(this.plugin.settings?.ai?.fde365?.token || "").trim();
    const model = String(this.plugin.settings?.ai?.fde365?.model || "gpt-5.6-luna").trim();
    const binary = this.options.codexPath || locateCodexBinary();
    if (!binary) throw new FdeAgentRuntimeError("AGENT_RUNTIME_MISSING", "未找到 Codex 运行组件；请先安装官方 Codex 应用或命令行组件");
    if (!this.usesLocalCli) {
      if (!token) throw new FdeAgentRuntimeError("PROVIDER_NOT_CONFIGURED", "请先填写 Token");
      try {
        ensureIsolatedCodexConfig(this.codexHome, model);
      } catch (error) {
        throw new FdeAgentRuntimeError("AGENT_CONFIG_FAILED", `无法创建当前 Vault 的独立 Agent 配置：${error instanceof Error ? error.message : String(error)}`);
      }
    }
    if (this.transport && !this.transport.disposed && this.proc && !this.proc.killed && this.runtimeBinary === binary) return;
    await this.shutdown();
    const spec = buildSpawnSpec(binary);
    const proc = spawn(spec.command, spec.args, {
      cwd: this.vaultPath,
      env: this.usesLocalCli ? buildLocalCliEnvironment() : buildChildEnvironment(this.codexHome, token),
      stdio: ["pipe", "pipe", "pipe"],
      windowsHide: true,
      windowsVerbatimArguments: spec.windowsVerbatimArguments,
    });
    this.proc = proc;
    this.stderr = "";
    proc.stderr.on("data", (chunk) => {
      this.stderr = `${this.stderr}${redact(Buffer.isBuffer(chunk) ? chunk.toString("utf8") : chunk, token)}`.slice(-STDERR_LIMIT);
    });
    this.transport = new JsonRpcTransport(
      proc,
      (method, params) => this.handleNotification(method, params),
      (method, params) => this.handleServerRequest(method, params),
      () => this.stderr.trim() ? `Codex Agent 已退出：${this.stderr.trim()}` : "Codex Agent 已退出",
    );
    try {
      await this.transport.request("initialize", {
        clientInfo: { name: "fde365-knowledge-os", version: this.plugin.manifest.version },
        capabilities: { experimentalApi: true },
      });
      this.transport.notify("initialized");
      this.runtimeBinary = binary;
    } catch (error) {
      await this.shutdown();
      throw new FdeAgentRuntimeError("AGENT_START_FAILED", redact(error instanceof Error ? error.message : error, token));
    }
  }

  async complete(request) {
    if (this.active) throw new FdeAgentRuntimeError("AGENT_BUSY", "本地 Agent 正在执行另一个任务，请等待完成或先停止");
    const settings = this.plugin.settings.ai.fde365;
    const token = String(settings.token || "").trim();
    const model = this.usesLocalCli ? "" : String(settings.model || "").trim();
    if (!this.usesLocalCli && !token) throw new FdeAgentRuntimeError("PROVIDER_NOT_CONFIGURED", "请先填写 Token");
    await this.ensureReady();

    const execution = executionPolicy(this.plugin.settings?.ai?.assistant?.executionMode, this.vaultPath);
    const baseInstructions = buildBaseInstructions({ ...request, executionMode: execution.mode }, this.vaultPath, this.plugin.knowledgeRoot || "FDE365知识库");
    let threadId = String(request.sessionId || "").trim();
    try {
      if (threadId && !this.loadedThreads.has(threadId)) {
        const resumed = await this.transport.request("thread/resume", withOptionalModel({
          threadId,
          approvalPolicy: execution.approvalPolicy,
          sandbox: execution.sandbox,
          baseInstructions,
          cwd: this.vaultPath,
        }, model));
        threadId = String(resumed?.thread?.id || threadId);
        this.loadedThreads.add(threadId);
      } else if (!threadId) {
        const started = await this.transport.request("thread/start", withOptionalModel({
          cwd: this.vaultPath,
          approvalPolicy: execution.approvalPolicy,
          sandbox: execution.sandbox,
          baseInstructions,
          experimentalRawEvents: true,
          ephemeral: false,
        }, model));
        threadId = String(started?.thread?.id || "");
        if (!threadId) throw new Error("Codex Agent 未返回会话 ID");
        this.loadedThreads.add(threadId);
      }

      const done = deferred();
      this.active = {
        requestId: request.requestId,
        threadId,
        turnId: null,
        text: "",
        events: [],
        done,
        onEvent: typeof request.onEvent === "function" ? request.onEvent : null,
      };
      this.pendingNotifications = [];
      const timeoutMs = Math.max(30000, Number(settings.timeoutMs) || 120000);
      const turnResult = await this.transport.request("turn/start", withOptionalModel({
        threadId,
        input: [{ type: "text", text: buildTurnPrompt({ ...request, sessionId: threadId }), text_elements: [] }],
        approvalPolicy: execution.approvalPolicy,
        effort: "medium",
        summary: "concise",
        sandboxPolicy: execution.sandboxPolicy,
      }, model), Math.min(timeoutMs, APP_SERVER_REQUEST_TIMEOUT_MS));
      this.active.turnId = String(turnResult?.turn?.id || "");
      this.flushPendingNotifications();
      if (!this.active.turnId) throw new Error("Codex Agent 未返回任务 ID");

      let timer;
      const timeout = new Promise((_, reject) => {
        timer = setTimeout(() => reject(new FdeAgentRuntimeError("TIMEOUT", `Codex Agent 运行超过 ${Math.round(timeoutMs / 1000)} 秒`)), timeoutMs);
      });
      let completed;
      try {
        completed = await Promise.race([done.promise, timeout]);
      } finally {
        clearTimeout(timer);
      }
      if (!String(completed.content || "").trim()) throw new FdeAgentRuntimeError("EMPTY_RESPONSE", "Codex Agent 没有返回可见内容");
      return {
        content: completed.content,
        provider: "fde365-agent",
        providerVersion: "codex-app-server-responses",
        model: model || "本机 Codex 默认模型",
        conversationId: threadId,
        usage: completed.usage || null,
        toolEvents: completed.events,
      };
    } catch (error) {
      if (this.active?.threadId && this.active?.turnId && this.transport) {
        void this.transport.request("turn/interrupt", {
          threadId: this.active.threadId,
          turnId: this.active.turnId,
        }).catch(() => undefined);
      } else if (this.active && !this.active.turnId) {
        await this.shutdown();
      }
      if (error instanceof FdeAgentRuntimeError) throw error;
      throw new FdeAgentRuntimeError("AGENT_FAILED", redact(error instanceof Error ? error.message : error, token));
    } finally {
      this.active = null;
      this.pendingNotifications = [];
    }
  }

  event(event) {
    if (!this.active) return;
    const normalized = { ...event, label: event.label || summarizeToolEvent(event) };
    this.active.events.push(normalized);
    try { this.active.onEvent?.(normalized); } catch { /* UI event failures do not stop the agent */ }
  }

  handleNotification(method, params) {
    if (!this.active) return;
    if (method === "fde/processExited") {
      this.active.done.reject(new FdeAgentRuntimeError("AGENT_EXITED", params?.error?.message || "Codex Agent 已退出"));
      return;
    }
    if (!this.active.turnId && method !== "turn/started") {
      this.pendingNotifications.push({ method, params });
      return;
    }
    if (method === "turn/started" && !this.active.turnId && String(params?.threadId || "") === this.active.threadId) {
      this.active.turnId = String(params?.turn?.id || "");
      this.flushPendingNotifications();
      return;
    }
    const threadId = String(params?.threadId || "");
    const turnId = String(params?.turnId || params?.turn_id || params?.turn?.id || "");
    if (threadId && threadId !== this.active.threadId) return;
    if (turnId && this.active.turnId && turnId !== this.active.turnId) return;

    if (method === "item/agentMessage/delta") {
      this.active.text += String(params?.delta || "");
      return;
    }
    if (method === "item/completed" && params?.item?.type === "agentMessage") {
      const text = String(params.item.text || "");
      if (text && !this.active.text.includes(text)) this.active.text = text;
      return;
    }
    if (method === "item/started") {
      const item = params?.item || {};
      if (item.type === "commandExecution") this.event({ type: "command", command: String(item.command || ""), label: `正在运行：${String(item.command || "本地命令")}` });
      else if (item.type === "fileChange") this.event({ type: "file-change", label: "正在准备知识库文件变更" });
      else if (item.type === "webSearch") this.event({ type: "tool", label: "网络搜索已被 FDE365 安全策略禁用" });
      return;
    }
    if (method === "item/fileChange/patchUpdated") {
      for (const change of Array.isArray(params?.changes) ? params.changes : []) {
        this.event({ type: "file-change", path: String(change.path || ""), diff: String(change.diff || "") });
      }
      return;
    }
    if (method === "thread/tokenUsage/updated") {
      this.active.usage = params?.tokenUsage || null;
      return;
    }
    if (method === "error" && !params?.willRetry) {
      this.active.done.reject(new FdeAgentRuntimeError("AGENT_FAILED", String(params?.error?.message || "Codex Agent 运行失败")));
      return;
    }
    if (method === "turn/completed") {
      const status = String(params?.turn?.status || "completed");
      if (status === "failed") {
        this.active.done.reject(new FdeAgentRuntimeError("AGENT_FAILED", String(params?.turn?.error?.message || "Codex Agent 运行失败")));
      } else if (status === "interrupted") {
        this.active.done.reject(new FdeAgentRuntimeError("CANCELLED", "任务已取消"));
      } else {
        this.active.done.resolve({ content: this.active.text.trim(), events: this.active.events, usage: this.active.usage || null });
      }
    }
  }

  flushPendingNotifications() {
    if (!this.active?.turnId || !this.pendingNotifications.length) return;
    const pending = this.pendingNotifications;
    this.pendingNotifications = [];
    for (const item of pending) if (item) this.handleNotification(item.method, item.params);
  }

  insideVault(value) {
    if (!value) return true;
    const resolved = path.resolve(this.vaultPath, String(value));
    const relative = path.relative(this.vaultPath, resolved);
    return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
  }

  async handleServerRequest(method, params) {
    const yolo = normalizeExecutionMode(this.plugin.settings?.ai?.assistant?.executionMode) === "yolo";
    if (method === "item/commandExecution/requestApproval") {
      const command = String(params?.command || "");
      if (params?.networkApprovalContext) return { decision: "decline" };
      if (!this.insideVault(params?.cwd)) return { decision: "decline" };
      if (/(?:^|\s)(?:rm\s+-rf|rmdir\s+\/s|del\s+\/s|format\s+|diskpart\b|git\s+reset\s+--hard)(?:\s|$)/i.test(command)) return { decision: "decline" };
      if (yolo) return { decision: "accept" };
      const allowed = await this.plugin.requestAgentApproval?.({
        kind: "command",
        title: "允许本地 Agent 运行命令？",
        description: params?.reason || "Codex Agent 请求运行本地命令。",
        items: [command || "未提供命令", params?.cwd ? `目录：${params.cwd}` : `目录：${this.vaultPath}`],
      });
      return { decision: allowed ? "accept" : "decline" };
    }
    if (method === "item/fileChange/requestApproval") {
      if (params?.grantRoot && !this.insideVault(params.grantRoot)) return { decision: "decline" };
      if (yolo) return { decision: "accept" };
      const allowed = await this.plugin.requestAgentApproval?.({
        kind: "file-change",
        title: "允许本地 Agent 修改知识库？",
        description: params?.reason || "Codex Agent 请求写入当前 Vault。",
        items: [params?.grantRoot ? `允许范围：${params.grantRoot}` : `允许范围：当前 Vault（${this.vaultPath}）`, "只允许本次操作；不会永久放行。"],
      });
      return { decision: allowed ? "accept" : "decline" };
    }
    if (method === "item/permissions/requestApproval") {
      return { permissions: {}, scope: "turn" };
    }
    if (method === "item/tool/requestUserInput") {
      const answers = await this.plugin.requestAgentQuestion?.(Array.isArray(params?.questions) ? params.questions : []);
      const mapped = {};
      for (const [key, value] of Object.entries(answers || {})) mapped[key] = { answers: Array.isArray(value) ? value : [String(value)] };
      return { answers: mapped };
    }
    if (method === "item/tool/call") throw new Error(`不支持的本地动态工具：${String(params?.tool || "unknown")}`);
    throw new Error(`不支持的 Codex Agent 请求：${method}`);
  }

  cancel(requestId) {
    if (!this.active || (requestId && this.active.requestId !== requestId)) return false;
    const { threadId, turnId, done } = this.active;
    if (threadId && turnId && this.transport) void this.transport.request("turn/interrupt", { threadId, turnId }).catch(() => undefined);
    done.reject(new FdeAgentRuntimeError("CANCELLED", "任务已取消"));
    return true;
  }

  async shutdown() {
    if (this.active) this.active.done.reject(new FdeAgentRuntimeError("CANCELLED", "Agent 运行已停止"));
    this.active = null;
    this.pendingNotifications = [];
    this.loadedThreads.clear();
    this.runtimeBinary = "";
    this.transport?.dispose();
    this.transport = null;
    if (this.proc && !this.proc.killed) {
      const proc = this.proc;
      await new Promise((resolve) => {
        const timer = setTimeout(() => {
          try { proc.kill("SIGKILL"); } catch { /* already exited */ }
          resolve();
        }, 3000);
        proc.once("close", () => { clearTimeout(timer); resolve(); });
        try { proc.kill("SIGTERM"); } catch { clearTimeout(timer); resolve(); }
      });
    }
    this.proc = null;
    this.stderr = "";
  }
}

module.exports = {
  FdeAgentRuntimeError,
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
  normalizeExecutionMode,
  locateCodexBinary,
};
