#!/bin/bash
set -Eeuo pipefail
IFS=$'\n\t'

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
COMPONENTS_DIR="$SCRIPT_DIR/组件"
PLUGIN_ID="fde365-knowledge-os"
PLUGIN_SOURCE="$COMPONENTS_DIR/$PLUGIN_ID"
HELPERS_DIR="$COMPONENTS_DIR/helpers"
DEFAULT_VAULT="$HOME/Documents/FDE365工作台"

pause_exit() {
  local code="${1:-0}"
  echo ""
  read -r -p "按回车键关闭窗口…" _ || true
  exit "$code"
}

die() {
  printf "更新失败：%s\n" "$1"
  pause_exit 1
}

printf "\nFDE365 Knowledge OS · Mac 更新\n"
printf "仅更新插件，不连接本机 Claude Code 或 Codex。\n\n"
[ -d "$PLUGIN_SOURCE" ] || die "更新包缺少 FDE365 插件组件"
[ -f "$HELPERS_DIR/configure-user-environment.sh" ] || die "更新包缺少客户端配置助手"

read -r -p "工作台路径【直接回车使用 ${DEFAULT_VAULT}】：" VAULT_DIR
VAULT_DIR="${VAULT_DIR:-$DEFAULT_VAULT}"
VAULT_DIR="${VAULT_DIR/#\~/$HOME}"
[ -d "$VAULT_DIR/.obsidian" ] || die "指定目录不是有效的 Obsidian 工作台"

PLUGIN_TARGET="$VAULT_DIR/.obsidian/plugins/$PLUGIN_ID"
[ -d "$PLUGIN_TARGET" ] || die "当前工作台尚未安装 FDE365，请先运行首次安装"

BACKUP_ROOT="$HOME/Library/Application Support/FDE365 Knowledge OS/backups"
BACKUP_DIR="$BACKUP_ROOT/$(/bin/date +%Y%m%d-%H%M%S)"
/bin/mkdir -p "$BACKUP_DIR"
for name in manifest.json main.js styles.css assets; do
  if [ -e "$PLUGIN_TARGET/$name" ]; then
    /usr/bin/ditto "$PLUGIN_TARGET/$name" "$BACKUP_DIR/$name"
  fi
done

# 源包不含 data.json；ditto 只覆盖同名程序文件，原 Token 配置会保留。
/usr/bin/ditto "$PLUGIN_SOURCE" "$PLUGIN_TARGET" || die "无法更新插件文件"
/usr/bin/osascript -l JavaScript "$HELPERS_DIR/enable-plugin.jxa" \
  "$VAULT_DIR/.obsidian/community-plugins.json" "$PLUGIN_ID" >/dev/null \
  || die "无法确认插件启用状态"

/bin/bash "$HELPERS_DIR/configure-user-environment.sh" "$VAULT_DIR" "" "$HELPERS_DIR" "$SCRIPT_DIR" >/dev/null

VERSION="$(/usr/bin/plutil -extract version raw "$PLUGIN_TARGET/manifest.json" 2>/dev/null || true)"
printf "\n更新完成：FDE365 Knowledge OS %s\n" "${VERSION:-未知版本}"
printf "原账号配置和用户数据已保留；旧 Token 不自动发送到新服务，请在插件内登录。\n"
printf "旧程序备份：%s\n" "$BACKUP_DIR"
printf "请在方便时重新加载 Obsidian 插件。\n"
pause_exit 0
