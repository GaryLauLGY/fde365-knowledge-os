import assert from "node:assert/strict";
import test from "node:test";
import worker, { handleRequest } from "../src/worker.mjs";

const request = (path, init) => new Request(`https://fdekb.garylau.ai${path}`, init);

test("health is public and does not contact an upstream", async () => {
  const response = await handleRequest(request("/health"), () => { throw new Error("unexpected fetch"); });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).status, "ok");
});

test("Cloudflare entrypoint does not treat env as a fetch function", async () => {
  const response = await worker.fetch(request("/health"), { bindings: true }, {});
  assert.equal(response.status, 200);
});

test("latest release exposes only allowlisted assets on the FDE365 domain", async () => {
  const fetcher = async (url) => {
    assert.equal(url, "https://api.github.com/repos/GaryLauLGY/fde365-knowledge-os/releases/latest");
    return new Response(JSON.stringify({
      tag_name: "1.0.2",
      published_at: "2026-08-26T00:00:00Z",
      assets: [
        { name: "main.js", size: 10 },
        { name: "update-manifest.json", size: 20 },
        { name: "FDE365-Knowledge-OS-Mac-v1.0.2.zip", size: 25 },
        { name: "untrusted.exe", size: 30 },
      ],
    }), { status: 200, headers: { "content-type": "application/json" } });
  };
  const response = await handleRequest(request("/plugin/latest.json"), fetcher);
  const body = await response.json();
  assert.equal(response.status, 200);
  assert.equal(body.tag_name, "1.0.2");
  assert.deepEqual(body.assets.map((asset) => asset.name), ["main.js", "update-manifest.json", "FDE365-Knowledge-OS-Mac-v1.0.2.zip"]);
  assert.ok(body.assets.every((asset) => asset.browser_download_url.startsWith("https://fdekb.garylau.ai/plugin/releases/1.0.2/")));
});

test("plugin, Obsidian and Codex paths map only to pinned official upstreams", async () => {
  const seen = [];
  const fetcher = async (url) => {
    seen.push(url);
    return new Response("file", { status: 200, headers: { "content-type": "application/octet-stream" } });
  };
  assert.equal((await handleRequest(request("/plugin/releases/1.0.2/main.js"), fetcher)).status, 200);
  assert.equal((await handleRequest(request("/vendor/obsidian/1.13.7/mac"), fetcher)).status, 200);
  assert.equal((await handleRequest(request("/vendor/obsidian/1.13.7/windows"), fetcher)).status, 200);
  assert.equal((await handleRequest(request("/vendor/codex/0.149.1/windows-x86_64.zip"), fetcher)).status, 200);
  assert.deepEqual(seen, [
    "https://github.com/GaryLauLGY/fde365-knowledge-os/releases/download/1.0.2/main.js",
    "https://github.com/obsidianmd/obsidian-releases/releases/download/v1.13.7/Obsidian-1.13.7.dmg",
    "https://github.com/obsidianmd/obsidian-releases/releases/download/v1.13.7/Obsidian-1.13.7.exe",
    "https://github.com/openai/codex/releases/download/rust-v0.149.1/codex-x86_64-pc-windows-msvc.exe.zip",
  ]);
});

test("arbitrary proxying, query tricks and writes are rejected", async () => {
  const fetcher = () => { throw new Error("unexpected fetch"); };
  assert.equal((await handleRequest(request("/plugin/releases/1.0.2/evil.exe"), fetcher)).status, 404);
  assert.equal((await handleRequest(request("/proxy?url=https://example.com"), fetcher)).status, 404);
  assert.equal((await handleRequest(request("/health", { method: "POST" }), fetcher)).status, 405);
});
