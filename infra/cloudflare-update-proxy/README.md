# FDE365 更新镜像

Cloudflare Worker 只代理固定白名单中的 FDE365 插件发布文件，以及安装器所需的 Obsidian、Codex 官方 GitHub 文件。客户端只访问 `https://fdekb.garylau.ai`，GitHub 仅作为 Cloudflare 上游。

公开入口：

- `/health`
- `/plugin/latest.json`
- `/plugin/releases/<version>/<allowlisted-asset>`
- `/vendor/obsidian/<version>/mac`
- `/vendor/obsidian/<version>/windows`
- `/vendor/codex/<version>/windows-x86_64.zip`

该 Worker 没有任意 URL 代理入口，也不接收或保存 Token。
