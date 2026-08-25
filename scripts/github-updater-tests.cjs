const assert = require("node:assert/strict");
const {
  UPDATE_FILES,
  compareVersions,
  isTrustedReleaseAssetUrl,
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
  isTrustedReleaseAssetUrl(`https://github.com/${repository}/releases/download/1.0.1/main.js`, repository),
  true,
);
assert.equal(
  isTrustedReleaseAssetUrl(`https://github.example.com/${repository}/releases/download/1.0.1/main.js`, repository),
  false,
);
assert.equal(
  isTrustedReleaseAssetUrl("https://github.com/attacker/repo/releases/download/1.0.1/main.js", repository),
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

console.log("PASS GitHub updater enforces semantic versions, trusted FDE365 release URLs and an exact file allowlist.");
