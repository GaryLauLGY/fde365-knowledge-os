#!/bin/bash
set -Eeuo pipefail

FDE365_CLAUDE="$HOME/Library/Application Support/FDE365 Knowledge OS/bin/fde365-claude"
if [ ! -x "$FDE365_CLAUDE" ]; then
  printf '请先双击“开始安装 FDE365.command”。\n'
  read -r -p "按回车键关闭窗口…" _ || true
  exit 1
fi

WORK_DIR="$(/usr/bin/osascript -e 'POSIX path of (choose folder with prompt "选择这次要让 FDE365 Claude 处理的文件夹")' 2>/dev/null || true)"
[ -n "$WORK_DIR" ] || exit 0
cd "$WORK_DIR"
exec "$FDE365_CLAUDE"
