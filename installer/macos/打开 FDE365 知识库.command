#!/bin/bash
set -Eeuo pipefail

VAULT_POINTER="$HOME/Library/Application Support/FDE365 Knowledge OS/vault-path.txt"
if [ ! -f "$VAULT_POINTER" ]; then
  printf '请先双击“开始安装 FDE365.command”。\n'
  read -r -p "按回车键关闭窗口…" _ || true
  exit 1
fi
IFS= read -r VAULT_DIR < "$VAULT_POINTER"
open -a Obsidian "$VAULT_DIR"
