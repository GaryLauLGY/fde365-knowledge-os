#!/bin/bash
set -Eeuo pipefail
VAULT_DIR="${1:-}"
SOURCE_LAUNCHERS="${4:-}"
[ -d "$VAULT_DIR/.obsidian" ] || { printf '工作台路径无效\n' >&2; exit 1; }
FDE365_SUPPORT="$HOME/Library/Application Support/FDE365 Knowledge OS"
DESKTOP_TOOLS="$HOME/Desktop/FDE365 工具"
/bin/mkdir -p "$FDE365_SUPPORT" "$DESKTOP_TOOLS"
printf '%s\n' "$VAULT_DIR" > "$FDE365_SUPPORT/vault-path.txt"
/bin/chmod 600 "$FDE365_SUPPORT/vault-path.txt"
/usr/bin/ditto "$SOURCE_LAUNCHERS/打开 FDE365 知识库.command" "$DESKTOP_TOOLS/打开 FDE365 知识库.command"
/bin/chmod 755 "$DESKTOP_TOOLS/打开 FDE365 知识库.command"
printf '%s\n' "$FDE365_SUPPORT"
