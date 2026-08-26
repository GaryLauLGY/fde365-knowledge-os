const SOURCE_REPOSITORY = "GaryLauLGY/fde365-knowledge-os";
const MIRROR_ORIGIN = "https://fdekb.garylau.ai";
const STATIC_PLUGIN_ASSETS = new Set([
  "update-manifest.json",
  "main.js",
  "manifest.json",
  "styles.css",
  "fde365-logo.png",
  "fde365-logo-source.svg",
  "SHA256SUMS.txt",
]);

function isPluginAsset(name, version) {
  if (STATIC_PLUGIN_ASSETS.has(name)) return true;
  return ["Plugin", "Mac", "Windows"]
    .some((kind) => name === `FDE365-Knowledge-OS-${kind}-v${version}.zip`);
}

function json(value, status = 200, cacheControl = "no-store") {
  return new Response(`${JSON.stringify(value, null, 2)}\n`, {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": cacheControl,
      "x-content-type-options": "nosniff",
    },
  });
}

function normalizeVersion(value) {
  const match = String(value || "").match(/^v?(\d+)\.(\d+)\.(\d+)$/);
  return match ? `${Number(match[1])}.${Number(match[2])}.${Number(match[3])}` : "";
}

function releaseAssetUrl(version, name) {
  return `${MIRROR_ORIGIN}/plugin/releases/${version}/${encodeURIComponent(name)}`;
}

async function latestPluginRelease(request, fetcher) {
  const upstream = await fetcher(`https://api.github.com/repos/${SOURCE_REPOSITORY}/releases/latest`, {
    headers: {
      accept: "application/vnd.github+json",
      "user-agent": "FDE365-Update-Proxy/1.0",
      "x-github-api-version": "2022-11-28",
    },
    cf: { cacheEverything: true, cacheTtl: 300 },
  });
  if (!upstream.ok) return json({ error: "upstream_release_unavailable" }, 502);
  const release = await upstream.json();
  const version = normalizeVersion(release?.tag_name);
  if (!version) return json({ error: "invalid_upstream_version" }, 502);
  const assets = Array.isArray(release.assets) ? release.assets : [];
  const trustedAssets = assets
    .filter((asset) => isPluginAsset(asset?.name, version))
    .map((asset) => ({
      name: asset.name,
      size: Number(asset.size || 0),
      browser_download_url: releaseAssetUrl(version, asset.name),
    }));
  return json({
    tag_name: version,
    published_at: release.published_at || null,
    assets: trustedAssets,
  }, 200, "public, max-age=120, s-maxage=300");
}

function upstreamForPath(pathname) {
  let match = pathname.match(/^\/plugin\/releases\/(\d+\.\d+\.\d+)\/([^/]+)$/);
  if (match) {
    const [, version, encodedAsset] = match;
    const asset = decodeURIComponent(encodedAsset);
    if (!isPluginAsset(asset, version)) return null;
    return `https://github.com/${SOURCE_REPOSITORY}/releases/download/${version}/${encodeURIComponent(asset)}`;
  }

  match = pathname.match(/^\/vendor\/obsidian\/(\d+\.\d+\.\d+)\/(mac|windows)$/);
  if (match) {
    const [, version, platform] = match;
    const extension = platform === "mac" ? "dmg" : "exe";
    return `https://github.com/obsidianmd/obsidian-releases/releases/download/v${version}/Obsidian-${version}.${extension}`;
  }

  match = pathname.match(/^\/vendor\/codex\/(\d+\.\d+\.\d+)\/windows-x86_64\.zip$/);
  if (match) {
    const version = match[1];
    return `https://github.com/openai/codex/releases/download/rust-v${version}/codex-x86_64-pc-windows-msvc.exe.zip`;
  }
  return null;
}

async function proxyFile(request, upstreamUrl, fetcher) {
  const headers = new Headers();
  const range = request.headers.get("range");
  if (range) headers.set("range", range);
  const upstream = await fetcher(upstreamUrl, {
    method: "GET",
    headers,
    redirect: "follow",
    cf: { cacheEverything: true, cacheTtl: 86400 },
  });
  if (!upstream.ok && upstream.status !== 206) return json({ error: "upstream_asset_unavailable" }, 502);
  const responseHeaders = new Headers(upstream.headers);
  responseHeaders.set("cache-control", "public, max-age=3600, s-maxage=86400, immutable");
  responseHeaders.set("x-content-type-options", "nosniff");
  responseHeaders.delete("set-cookie");
  return new Response(upstream.body, { status: upstream.status, headers: responseHeaders });
}

export async function handleRequest(request, fetcher = fetch) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return json({ error: "method_not_allowed" }, 405);
  }
  const url = new URL(request.url);
  if (url.hostname !== "fdekb.garylau.ai") return json({ error: "unknown_host" }, 404);
  if (url.pathname === "/" || url.pathname === "/health") {
    return json({ service: "FDE365 update mirror", status: "ok" }, 200, "public, max-age=60");
  }
  if (url.pathname === "/plugin/latest.json") return latestPluginRelease(request, fetcher);
  const upstreamUrl = upstreamForPath(url.pathname);
  if (!upstreamUrl) return json({ error: "not_found" }, 404);
  return proxyFile(request, upstreamUrl, fetcher);
}

export default {
  fetch(request) {
    return handleRequest(request);
  },
};
