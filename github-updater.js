const { createHash } = require("node:crypto");

const UPDATE_FILES = Object.freeze([
  { target: "main.js", asset: "main.js", encoding: "utf8" },
  { target: "manifest.json", asset: "manifest.json", encoding: "utf8" },
  { target: "styles.css", asset: "styles.css", encoding: "utf8" },
  { target: "assets/fde365-logo.png", asset: "fde365-logo.png", encoding: "binary" },
  { target: "assets/fde365-logo-source.svg", asset: "fde365-logo-source.svg", encoding: "utf8" },
]);

function normalizeVersion(value) {
  const match = String(value || "").trim().match(/^v?(\d+)\.(\d+)\.(\d+)$/);
  return match ? `${Number(match[1])}.${Number(match[2])}.${Number(match[3])}` : "";
}

function compareVersions(left, right) {
  const a = normalizeVersion(left);
  const b = normalizeVersion(right);
  if (!a || !b) throw new Error("版本号必须使用 x.y.z 格式");
  const av = a.split(".").map(Number);
  const bv = b.split(".").map(Number);
  for (let index = 0; index < 3; index += 1) {
    if (av[index] !== bv[index]) return av[index] > bv[index] ? 1 : -1;
  }
  return 0;
}

function sha256(data) {
  return createHash("sha256").update(Buffer.from(data)).digest("hex");
}

function validateUpdateManifest(value, expected = {}) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("更新清单格式无效");
  if (value.schemaVersion !== 1) throw new Error("更新清单版本不受支持");
  if (value.pluginId !== expected.pluginId) throw new Error("更新清单的插件 ID 不匹配");
  if (value.repository !== expected.repository) throw new Error("更新清单的 GitHub 仓库不匹配");
  const version = normalizeVersion(value.version);
  if (!version || version !== normalizeVersion(expected.version)) throw new Error("更新清单的版本不匹配");
  if (!normalizeVersion(value.minAppVersion)) throw new Error("更新清单的 Obsidian 最低版本无效");
  if (!Array.isArray(value.files) || value.files.length !== UPDATE_FILES.length) throw new Error("更新清单文件数量不正确");

  const expectedByTarget = new Map(UPDATE_FILES.map((file) => [file.target, file]));
  const seen = new Set();
  for (const file of value.files) {
    const expectedFile = expectedByTarget.get(file?.target);
    if (!expectedFile || seen.has(file.target)) throw new Error("更新清单包含未知或重复文件");
    if (file.asset !== expectedFile.asset || file.encoding !== expectedFile.encoding) {
      throw new Error(`更新文件定义不匹配：${file.target}`);
    }
    if (!/^[a-f0-9]{64}$/.test(String(file.sha256 || ""))) throw new Error(`更新文件校验值无效：${file.target}`);
    seen.add(file.target);
  }
  return { ...value, version };
}

function isTrustedUpdateAssetUrl(value, version, asset) {
  try {
    const url = new URL(value);
    return url.protocol === "https:"
      && url.hostname === "fdekb.garylau.ai"
      && url.username === ""
      && url.password === ""
      && url.search === ""
      && url.hash === ""
      && url.pathname === `/plugin/releases/${normalizeVersion(version)}/${asset}`;
  } catch (_) {
    return false;
  }
}

module.exports = {
  UPDATE_FILES,
  compareVersions,
  isTrustedUpdateAssetUrl,
  normalizeVersion,
  sha256,
  validateUpdateManifest,
};
