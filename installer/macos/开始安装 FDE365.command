#!/bin/bash
set -Eeuo pipefail
IFS=$'\n\t'

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
COMPONENTS_DIR="$SCRIPT_DIR/组件"
PLUGIN_ID="fde365-knowledge-os"
PLUGIN_SOURCE="$COMPONENTS_DIR/$PLUGIN_ID"
VAULT_TEMPLATE="$COMPONENTS_DIR/FDE365知识库模板"
HELPERS_DIR="$COMPONENTS_DIR/helpers"
RELEASE_CONFIG="$COMPONENTS_DIR/obsidian-release.env"
DEFAULT_VAULT="$HOME/Documents/FDE365工作台"
FDE365_SERVICE_URL="https://api.fde365.ai/v1"
FDE365_PURCHASE_URL="https://api.fde365.ai/"
CLAUDE_INSTALLER_URL="https://claude.ai/install.sh"
CODEX_INSTALLER_URL="https://chatgpt.com/codex/install.sh"
DOWNLOAD_TEMP=""
DOWNLOAD_MOUNT=""
CLI_TEMP=""
FDE365_SIMULATION="${FDE365_SIMULATION:-0}"

RED=$'\033[31m'
GREEN=$'\033[32m'
BLUE=$'\033[36m'
RESET=$'\033[0m'

pause_exit() {
  local code="${1:-0}"
  echo ""
  read -r -p "按回车键关闭窗口…" _ || true
  exit "$code"
}

die() {
  printf "%s安装失败：%s%s\n" "$RED" "$1" "$RESET"
  pause_exit 1
}

step() {
  printf "\n%s%s%s\n" "$BLUE" "$1" "$RESET"
}

cleanup_download() {
  if [ -n "$DOWNLOAD_MOUNT" ] && /sbin/mount | /usr/bin/grep -Fq "on $DOWNLOAD_MOUNT "; then
    /usr/bin/hdiutil detach "$DOWNLOAD_MOUNT" -quiet >/dev/null 2>&1 || true
  fi
  if [ -n "$DOWNLOAD_MOUNT" ] && [ -d "$DOWNLOAD_MOUNT" ]; then
    /bin/rmdir "$DOWNLOAD_MOUNT" >/dev/null 2>&1 || true
  fi
  if [ -n "$DOWNLOAD_TEMP" ] && [ -f "$DOWNLOAD_TEMP/Obsidian.dmg" ]; then
    /bin/rm -f "$DOWNLOAD_TEMP/Obsidian.dmg"
  fi
  if [ -n "$DOWNLOAD_TEMP" ] && [ -d "$DOWNLOAD_TEMP" ]; then
    /bin/rmdir "$DOWNLOAD_TEMP" >/dev/null 2>&1 || true
  fi
  if [ -n "$CLI_TEMP" ] && [ -d "$CLI_TEMP" ]; then
    /bin/rm -f "$CLI_TEMP/claude-install.sh" "$CLI_TEMP/codex-install.sh"
    /bin/rmdir "$CLI_TEMP" >/dev/null 2>&1 || true
  fi
}

trap cleanup_download EXIT

install_obsidian() {
  if [ "$FDE365_SIMULATION" = "1" ]; then
    OBSIDIAN_APP="$HOME/Applications/Obsidian.app"
    /bin/mkdir -p "$OBSIDIAN_APP/Contents"
    printf "%s[模拟] 已创建假的 Obsidian，不下载、不启动真实应用。%s\n" "$GREEN" "$RESET"
    return
  fi

  if [ -d "/Applications/Obsidian.app" ]; then
    OBSIDIAN_APP="/Applications/Obsidian.app"
    printf "%s已检测到 Obsidian：%s%s\n" "$GREEN" "$OBSIDIAN_APP" "$RESET"
    return
  fi
  if [ -d "$HOME/Applications/Obsidian.app" ]; then
    OBSIDIAN_APP="$HOME/Applications/Obsidian.app"
    printf "%s已检测到 Obsidian：%s%s\n" "$GREEN" "$OBSIDIAN_APP" "$RESET"
    return
  fi

  step "第 2 步 / 共 6 步：从 Obsidian 官方地址下载安装"
  DOWNLOAD_TEMP="$(/usr/bin/mktemp -d "${TMPDIR:-/tmp}/fde365-obsidian.XXXXXX")" || die "无法创建临时下载目录"
  DOWNLOAD_MOUNT="$DOWNLOAD_TEMP/mount"
  /bin/mkdir -p "$DOWNLOAD_MOUNT"
  printf "正在下载 Obsidian %s，下载源：%s\n" "$OBSIDIAN_VERSION" "$OBSIDIAN_DMG_URL"
  /usr/bin/curl --fail --location --retry 3 --connect-timeout 20 --progress-bar \
    "$OBSIDIAN_DMG_URL" -o "$DOWNLOAD_TEMP/Obsidian.dmg" \
    || die "无法访问 Obsidian 官方下载地址，请检查网络后重试"

  /usr/bin/hdiutil attach "$DOWNLOAD_TEMP/Obsidian.dmg" -readonly -nobrowse -mountpoint "$DOWNLOAD_MOUNT" -quiet \
    || die "Obsidian 官方安装镜像无法打开"
  local source_app="$DOWNLOAD_MOUNT/Obsidian.app"
  [ -d "$source_app" ] || die "官方安装镜像中没有找到 Obsidian.app"

  local bundle_id
  bundle_id="$(/usr/bin/defaults read "$source_app/Contents/Info" CFBundleIdentifier 2>/dev/null || true)"
  [ "$bundle_id" = "$OBSIDIAN_BUNDLE_ID" ] || die "下载应用的 Bundle ID 不正确"
  /usr/bin/codesign --verify --deep --strict "$source_app" >/dev/null 2>&1 \
    || die "Obsidian 官方应用签名校验失败"

  if [ -w "/Applications" ]; then
    OBSIDIAN_APP="/Applications/Obsidian.app"
  else
    /bin/mkdir -p "$HOME/Applications"
    OBSIDIAN_APP="$HOME/Applications/Obsidian.app"
  fi
  /usr/bin/ditto "$source_app" "$OBSIDIAN_APP" || die "无法复制 Obsidian 到应用程序目录"
  /usr/bin/codesign --verify --deep --strict "$OBSIDIAN_APP" >/dev/null 2>&1 \
    || die "安装后的 Obsidian 签名校验失败"
  printf "%sObsidian 已安装：%s%s\n" "$GREEN" "$OBSIDIAN_APP" "$RESET"
}

find_claude() {
  for candidate in "$HOME/.local/bin/claude" "$HOME/.claude/local/claude" "$(command -v claude 2>/dev/null || true)"; do
    if [ -n "$candidate" ] && [ -x "$candidate" ]; then return 0; fi
  done
  return 1
}

find_codex() {
  for candidate in "$HOME/.local/bin/codex" "$(command -v codex 2>/dev/null || true)"; do
    if [ -n "$candidate" ] && [ -x "$candidate" ]; then return 0; fi
  done
  return 1
}

install_ai_clients() {
  step "第 3 步 / 共 6 步：安装 AI 助手"
  if [ "$FDE365_SIMULATION" = "1" ]; then
    /bin/mkdir -p "$HOME/.local/bin"
    printf '#!/bin/bash\nprintf "FDE365 simulated Claude Code\\n"\n' > "$HOME/.local/bin/claude"
    printf '#!/bin/bash\nprintf "FDE365 simulated Codex CLI\\n"\n' > "$HOME/.local/bin/codex"
    /bin/chmod 755 "$HOME/.local/bin/claude" "$HOME/.local/bin/codex"
    printf "%s[模拟] 已创建假的 Claude Code 和 Codex，不访问官方下载地址。%s\n" "$GREEN" "$RESET"
    return
  fi

  CLI_TEMP="$(/usr/bin/mktemp -d "${TMPDIR:-/tmp}/fde365-clients.XXXXXX")" || die "无法创建 AI 助手下载目录"

  if find_claude; then
    printf "%s已检测到 Claude Code。%s\n" "$GREEN" "$RESET"
  else
    printf "正在从 Claude Code 官方地址下载安装…\n"
    /usr/bin/curl --fail --location --retry 3 --connect-timeout 20 --progress-bar \
      "$CLAUDE_INSTALLER_URL" -o "$CLI_TEMP/claude-install.sh" \
      || die "无法下载 Claude Code，请检查网络后重试"
    /bin/bash "$CLI_TEMP/claude-install.sh" || die "Claude Code 官方安装程序执行失败"
    find_claude || die "Claude Code 安装完成后仍未找到程序"
  fi

  if find_codex; then
    printf "%s已检测到 Codex CLI。%s\n" "$GREEN" "$RESET"
  else
    printf "正在从 Codex 官方地址下载安装…\n"
    /usr/bin/curl --fail --location --retry 3 --connect-timeout 20 --progress-bar \
      "$CODEX_INSTALLER_URL" -o "$CLI_TEMP/codex-install.sh" \
      || die "无法下载 Codex CLI，请检查网络后重试"
    /bin/bash "$CLI_TEMP/codex-install.sh" || die "Codex CLI 官方安装程序执行失败"
    find_codex || die "Codex CLI 安装完成后仍未找到程序"
  fi
}

printf "\n%sFDE365 Knowledge OS · Mac 一键安装%s\n" "$BLUE" "$RESET"
printf "AI 服务固定为：%s\n" "$FDE365_SERVICE_URL"
printf "一次安装即可在 Obsidian、Claude Code 和 Codex 中使用 FDE365。\n"
if [ "$FDE365_SIMULATION" = "1" ]; then
  printf "%s模拟模式：所有内容只写入隔离 HOME，不下载或打开真实应用。%s\n" "$BLUE" "$RESET"
fi

[ -d "$PLUGIN_SOURCE" ] || die "安装包缺少 FDE365 插件组件"
[ -d "$VAULT_TEMPLATE" ] || die "安装包缺少 FDE365 知识库模板"
[ -f "$RELEASE_CONFIG" ] || die "安装包缺少 Obsidian 官方下载配置"
[ -f "$HELPERS_DIR/write-plugin-settings.jxa" ] || die "安装包缺少配置助手"
[ -f "$HELPERS_DIR/configure-user-environment.sh" ] || die "安装包缺少 AI 客户端配置助手"
[ -f "$SCRIPT_DIR/打开 FDE365 Claude.command" ] || die "安装包缺少 FDE365 启动工具"

# 此文件只包含公开版本号和官方地址。
# shellcheck disable=SC1090
source "$RELEASE_CONFIG"
[ -n "${OBSIDIAN_VERSION:-}" ] || die "Obsidian 版本配置为空"
[ -n "${OBSIDIAN_DMG_URL:-}" ] || die "Obsidian 官方下载地址为空"
[ "${OBSIDIAN_BUNDLE_ID:-}" = "md.obsidian" ] || die "Obsidian Bundle ID 配置错误"

step "第 1 步 / 共 6 步：填写 FDE365 Token"
printf "请先前往 %s 购买或创建 Token。\n" "$FDE365_PURCHASE_URL"
TOKEN=""
while [ -z "$TOKEN" ]; do
  read -r -s -p "粘贴 Token（输入内容不会显示）并按回车：" TOKEN
  echo ""
done

echo "选择模型："
echo "  1) claude-fable-5"
echo "  2) claude-opus-4-8"
echo "  3) gpt-5.6-sol"
echo "  4) gpt-5.6-luna（默认）"
read -r -p "输入序号【直接回车选 4】：" MODEL_CHOICE
case "${MODEL_CHOICE:-4}" in
  1) MODEL="claude-fable-5" ;;
  2) MODEL="claude-opus-4-8" ;;
  3) MODEL="gpt-5.6-sol" ;;
  4|"") MODEL="gpt-5.6-luna" ;;
  *) die "模型序号无效" ;;
esac

install_obsidian
install_ai_clients

step "第 4 步 / 共 6 步：创建 FDE365 工作台"
read -r -p "工作台路径【直接回车使用 ${DEFAULT_VAULT}】：" VAULT_DIR
VAULT_DIR="${VAULT_DIR:-$DEFAULT_VAULT}"
VAULT_DIR="${VAULT_DIR/#\~/$HOME}"
if [ -e "$VAULT_DIR" ]; then
  VAULT_DIR="$VAULT_DIR-$(/bin/date +%Y%m%d-%H%M%S)"
  printf "目标已存在，为保护原内容改用：%s\n" "$VAULT_DIR"
fi

/bin/mkdir -p "$VAULT_DIR/FDE365知识库" "$VAULT_DIR/.obsidian/plugins/$PLUGIN_ID"
/usr/bin/ditto "$VAULT_TEMPLATE" "$VAULT_DIR/FDE365知识库" || die "无法复制知识库模板"
/usr/bin/ditto "$PLUGIN_SOURCE" "$VAULT_DIR/.obsidian/plugins/$PLUGIN_ID" || die "无法复制 FDE365 插件"

COMMUNITY_PLUGINS="$VAULT_DIR/.obsidian/community-plugins.json"
/usr/bin/osascript -l JavaScript "$HELPERS_DIR/enable-plugin.jxa" "$COMMUNITY_PLUGINS" "$PLUGIN_ID" >/dev/null \
  || die "无法启用 FDE365 插件"

DATA_JSON="$VAULT_DIR/.obsidian/plugins/$PLUGIN_ID/data.json"
printf '%s' "$TOKEN" | /usr/bin/osascript -l JavaScript \
  "$HELPERS_DIR/write-plugin-settings.jxa" "$DATA_JSON" "$MODEL" >/dev/null \
  || die "无法保存 Token"
TOKEN=""
unset TOKEN
/bin/chmod 600 "$DATA_JSON" 2>/dev/null || true

step "第 5 步 / 共 6 步：连接三个 FDE365 入口"
GLOBAL_BACKUP="$(/bin/bash "$HELPERS_DIR/configure-user-environment.sh" \
  "$VAULT_DIR" "$MODEL" "$HELPERS_DIR" "$SCRIPT_DIR")" \
  || die "无法配置 Claude Code、Codex 和终端环境"

step "第 6 步 / 共 6 步：启动 FDE365"
OBSIDIAN_CONFIG_DIR="$HOME/Library/Application Support/obsidian"
OBSIDIAN_CONFIG="$OBSIDIAN_CONFIG_DIR/obsidian.json"
/bin/mkdir -p "$OBSIDIAN_CONFIG_DIR"
if [ -f "$OBSIDIAN_CONFIG" ]; then
  /bin/cp "$OBSIDIAN_CONFIG" "$OBSIDIAN_CONFIG.fde365-backup-$(/bin/date +%Y%m%d-%H%M%S)"
fi
VAULT_ID="$(printf '%s' "$VAULT_DIR" | /sbin/md5 | /usr/bin/cut -c1-16)"
TIMESTAMP_MS="$(/bin/date +%s)000"
/usr/bin/osascript -l JavaScript "$HELPERS_DIR/register-vault.jxa" \
  "$OBSIDIAN_CONFIG" "$VAULT_DIR" "$VAULT_ID" "$TIMESTAMP_MS" >/dev/null \
  || die "无法登记知识库"

if [ "$FDE365_SIMULATION" = "1" ]; then
  printf "%s[模拟] 已跳过打开 Obsidian。%s\n" "$GREEN" "$RESET"
else
  /usr/bin/open -a "$OBSIDIAN_APP" "$VAULT_DIR" >/dev/null 2>&1 \
    || /usr/bin/open "$OBSIDIAN_APP" >/dev/null 2>&1 \
    || die "Obsidian 已安装，但无法自动打开"
fi

printf "\n%s安装完成。%s\n" "$GREEN" "$RESET"
printf "工作台位置：%s\n" "$VAULT_DIR"
printf "模型：%s\n" "$MODEL"
printf "桌面已创建“FDE365 工具”，可以从任意文件夹启动 Claude Code 或 Codex。\n"
printf "原有客户端配置已备份到：%s\n" "$GLOBAL_BACKUP"
printf "首次打开若出现安全确认，请选择信任当前知识库并启用第三方插件。\n"
pause_exit 0
