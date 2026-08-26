#!/bin/bash
set -Eeuo pipefail
IFS=$'\n\t'

VAULT_DIR="${1:-}"
MODEL="${2:-}"
SOURCE_HELPERS="${3:-}"
SOURCE_LAUNCHERS="${4:-}"
[ -d "$VAULT_DIR/.obsidian" ] || { printf '工作台路径无效\n' >&2; exit 1; }
[ -d "$SOURCE_HELPERS" ] || { printf '环境配置组件缺失\n' >&2; exit 1; }

FDE365_SUPPORT="$HOME/Library/Application Support/FDE365 Knowledge OS"
FDE365_BIN="$FDE365_SUPPORT/bin"
BACKUP_DIR="$FDE365_SUPPORT/backups/global-$(/bin/date +%Y%m%d-%H%M%S)"
CLAUDE_SETTINGS="$HOME/.claude/settings.json"
CODEX_CONFIG="$HOME/.codex/config.toml"
TOKEN_HELPER="$FDE365_BIN/fde365-token"
DESKTOP_TOOLS="$HOME/Desktop/FDE365 工具"

/bin/mkdir -p "$FDE365_BIN" "$BACKUP_DIR" "$HOME/.claude" "$HOME/.codex" "$DESKTOP_TOOLS"

for target in "$CLAUDE_SETTINGS" "$CODEX_CONFIG"; do
  if [ -f "$target" ]; then
    safe_name="$(printf '%s' "$target" | /usr/bin/sed 's#[ /]#_#g')"
    /bin/cp -p "$target" "$BACKUP_DIR/$safe_name"
  fi
done

for helper in read-plugin-token.jxa fde365-token fde365-claude fde365-codex; do
  /usr/bin/ditto "$SOURCE_HELPERS/$helper" "$FDE365_BIN/$helper"
done
/bin/chmod 700 "$FDE365_BIN/fde365-token" "$FDE365_BIN/fde365-claude" "$FDE365_BIN/fde365-codex"
/bin/chmod 600 "$FDE365_BIN/read-plugin-token.jxa"

printf '%s\n' "$VAULT_DIR" > "$FDE365_SUPPORT/vault-path.txt"
printf '%s\n' "$MODEL" > "$FDE365_SUPPORT/model.txt"
/bin/chmod 600 "$FDE365_SUPPORT/vault-path.txt" "$FDE365_SUPPORT/model.txt"

/usr/bin/osascript -l JavaScript "$SOURCE_HELPERS/write-client-config.jxa" \
  "$CLAUDE_SETTINGS" "$CODEX_CONFIG" "$TOKEN_HELPER" "$MODEL" >/dev/null
/bin/chmod 600 "$CLAUDE_SETTINGS" "$CODEX_CONFIG"

for launcher in "打开 FDE365 Claude.command" "打开 FDE365 Codex.command" "打开 FDE365 知识库.command"; do
  /usr/bin/ditto "$SOURCE_LAUNCHERS/$launcher" "$DESKTOP_TOOLS/$launcher"
  /bin/chmod 755 "$DESKTOP_TOOLS/$launcher"
done

printf '%s\n' "$BACKUP_DIR"
