#!/bin/bash
set -Eeuo pipefail
IFS=$'\n\t'

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PLUGIN_ID="fde365-knowledge-os"
DEFAULT_VAULT="$HOME/Documents/FDE365工作台"
FDE365_SUPPORT="$HOME/Library/Application Support/FDE365 Knowledge OS"
VAULT_POINTER="$FDE365_SUPPORT/vault-path.txt"

PASS=0
FAIL=0

ok() {
  printf "✓ %s\n" "$1"
  PASS=$((PASS + 1))
}

bad() {
  printf "✗ %s\n" "$1"
  FAIL=$((FAIL + 1))
}

printf "\nFDE365 一键检查\n\n"
if [ -f "$VAULT_POINTER" ]; then
  IFS= read -r VAULT_DIR < "$VAULT_POINTER"
  printf "正在检查：%s\n\n" "$VAULT_DIR"
else
  read -r -p "工作台路径【直接回车使用 ${DEFAULT_VAULT}】：" VAULT_DIR
  VAULT_DIR="${VAULT_DIR:-$DEFAULT_VAULT}"
fi
VAULT_DIR="${VAULT_DIR/#\~/$HOME}"

if [ -d "/Applications/Obsidian.app" ] || [ -d "$HOME/Applications/Obsidian.app" ]; then
  ok "已安装 Obsidian"
else
  bad "未找到 Obsidian"
fi

PLUGIN_DIR="$VAULT_DIR/.obsidian/plugins/$PLUGIN_ID"
if [ -d "$PLUGIN_DIR" ]; then
  ok "已找到 FDE365 插件目录"
else
  bad "未找到 FDE365 插件目录"
fi

for name in manifest.json main.js styles.css assets/fde365-logo.png; do
  if [ -e "$PLUGIN_DIR/$name" ]; then
    ok "插件文件存在：$name"
  else
    bad "插件文件缺失：$name"
  fi
done

if [ -f "$PLUGIN_DIR/manifest.json" ]; then
  PLUGIN_ID_ACTUAL="$(/usr/bin/plutil -extract id raw "$PLUGIN_DIR/manifest.json" 2>/dev/null || true)"
  VERSION="$(/usr/bin/plutil -extract version raw "$PLUGIN_DIR/manifest.json" 2>/dev/null || true)"
  if [ "$PLUGIN_ID_ACTUAL" = "$PLUGIN_ID" ]; then
    ok "插件 ID 正确，版本 ${VERSION:-未知}"
  else
    bad "插件 ID 不正确"
  fi
fi

printf "账号需在插件内邮箱登录；未登录不影响安装完整性检查。\n"

if /usr/bin/grep -Fq '"fde365-knowledge-os"' "$VAULT_DIR/.obsidian/community-plugins.json" 2>/dev/null; then
  ok "插件已加入启用列表"
else
  bad "插件未加入启用列表"
fi

if [ -d "$VAULT_DIR/FDE365知识库" ]; then
  ok "FDE365知识库目录存在"
else
  bad "FDE365知识库目录不存在"
fi

if [ -x "$HOME/.local/bin/codex" ] || command -v codex >/dev/null 2>&1; then
  ok "Codex CLI 已安装"
else
  bad "Codex CLI 尚未安装"
fi

for launcher in "打开 FDE365 知识库.command"; do
  if [ -x "$HOME/Desktop/FDE365 工具/$launcher" ]; then
    ok "桌面入口已就绪：$launcher"
  else
    bad "桌面入口缺失：$launcher"
  fi
done

printf "\n诊断完成：%s 项正常，%s 项异常。\n" "$PASS" "$FAIL"
printf "检查过程不会显示 Token 内容。异常时请重新运行“开始安装 FDE365.command”。\n"
echo ""
read -r -p "按回车键关闭窗口…" _ || true
[ "$FAIL" -eq 0 ]
