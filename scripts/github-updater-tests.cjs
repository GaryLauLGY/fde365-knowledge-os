const assert = require("node:assert/strict");
const {
  UPDATE_FILES,
  compareVersions,
  isTrustedUpdateAssetUrl,
  normalizeVersion,
  sha256,
  validateUpdateManifest,
} = require("../github-updater.js");

assert.equal(normalizeVersion("v1.2.3"), "1.2.3");
assert.equal(normalizeVersion("1.2.3"), "1.2.3");
assert.equal(normalizeVersion("1.2"), "");
assert.equal(compareVersions("1.0.1", "1.0.0"), 1);
assert.equal(compareVersions("1.0.0", "v1.0.0"), 0);
assert.equal(compareVersions("0.9.9", "1.0.0"), -1);
assert.equal(sha256(Buffer.from("fde365")), "84dd9ff904516ed6e42b134bd01c63f43bc6abaf6286b3c45238173f5407827e");

const repository = "GaryLauLGY/fde365-knowledge-os";
assert.equal(
  isTrustedUpdateAssetUrl("https://fdekb.garylau.ai/plugin/releases/1.0.1/main.js", "1.0.1", "main.js"),
  true,
);
assert.equal(
  isTrustedUpdateAssetUrl("https://github.com/GaryLauLGY/fde365-knowledge-os/releases/download/1.0.1/main.js", "1.0.1", "main.js"),
  false,
);
assert.equal(
  isTrustedUpdateAssetUrl("https://fdekb.garylau.ai/plugin/releases/1.0.1/data.json", "1.0.1", "main.js"),
  false,
);
assert.equal(
  isTrustedUpdateAssetUrl("https://fdekb.garylau.ai/plugin/releases/1.0.2/main.js", "1.0.1", "main.js"),
  false,
);

const updateManifest = {
  schemaVersion: 1,
  pluginId: "fde365-knowledge-os",
  version: "1.0.1",
  minAppVersion: "1.8.0",
  repository,
  files: UPDATE_FILES.map((file) => ({ ...file, sha256: "a".repeat(64) })),
};
assert.equal(validateUpdateManifest(updateManifest, {
  pluginId: "fde365-knowledge-os",
  repository,
  version: "v1.0.1",
}).version, "1.0.1");
assert.throws(() => validateUpdateManifest({
  ...updateManifest,
  files: [...updateManifest.files, { target: "data.json", asset: "data.json", encoding: "utf8", sha256: "b".repeat(64) }],
}, {
  pluginId: "fde365-knowledge-os",
  repository,
  version: "1.0.1",
}), /文件数量不正确|未知或重复文件/);

console.log("PASS FDE365 updater enforces semantic versions, trusted mirror URLs and an exact file allowlist.");
