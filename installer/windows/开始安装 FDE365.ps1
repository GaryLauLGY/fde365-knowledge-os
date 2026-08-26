$ErrorActionPreference = "Stop"
Set-StrictMode -Version 2.0
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$components = Join-Path $scriptRoot "组件"
. (Join-Path $components "helpers\FDE365.Common.ps1")

function Stop-FdeInstall([string]$Message) {
    Write-Host "安装失败：$Message" -ForegroundColor Red
    if ($env:FDE365_NONINTERACTIVE -ne "1") { Read-Host "按回车键关闭窗口" | Out-Null }
    exit 1
}

try {
    $context = Get-FdeContext
    $pluginSource = Join-Path $components "fde365-knowledge-os"
    $templateSource = Join-Path $components "FDE365知识库模板"
    $helpers = Join-Path $components "helpers"
    $releaseConfig = Join-Path $components "obsidian-release.json"
    foreach ($required in @($pluginSource, $templateSource, $helpers, $releaseConfig)) {
        if (-not (Test-Path -LiteralPath $required)) { throw "安装包组件缺失：$required" }
    }

    Write-Host ""
    Write-Host "FDE365 Knowledge OS · Windows 一键安装" -ForegroundColor Cyan
    Write-Host "一次安装即可使用 Obsidian、Claude Code 和 Codex。"
    Write-Host "AI 服务地址已固定，不需要填写 Base URL。"
    if ($context.Simulation) { Write-Host "模拟模式：所有写入都位于隔离目录。" -ForegroundColor Cyan }

    Write-Host "`n第 1 步 / 共 6 步：填写 FDE365 Token" -ForegroundColor Cyan
    $token = Get-FdeTokenFromPrompt
    if ([string]::IsNullOrWhiteSpace($token)) { throw "Token 不能为空。" }
    $model = Get-FdeSelectedModel

    Write-Host "`n第 2 步 / 共 6 步：安装官方应用" -ForegroundColor Cyan
    Install-FdeOfficialApplications $context $releaseConfig

    Write-Host "`n第 3 步 / 共 6 步：创建 FDE365 工作台" -ForegroundColor Cyan
    $defaultVault = Join-Path $context.Home "Documents\FDE365工作台"
    $vault = [Environment]::GetEnvironmentVariable("FDE365_VAULT_PATH", "Process")
    if ([string]::IsNullOrWhiteSpace($vault)) {
        $vault = Read-Host "工作台路径（直接回车使用 $defaultVault）"
    }
    if ([string]::IsNullOrWhiteSpace($vault)) { $vault = $defaultVault }
    $vault = [IO.Path]::GetFullPath($vault)
    if (Test-Path -LiteralPath $vault) {
        $vault = $vault + "-" + (Get-Date -Format "yyyyMMdd-HHmmss")
        Write-Host "目标已存在，为保护原内容改用：$vault"
    }
    $knowledge = Join-Path $vault "FDE365知识库"
    $pluginTarget = Join-Path $vault ".obsidian\plugins\fde365-knowledge-os"
    Copy-FdeCreateOnly $templateSource $knowledge
    Copy-FdeCreateOnly $pluginSource $pluginTarget
    Enable-FdePlugin $vault
    Write-FdePluginSettings (Join-Path $pluginTarget "data.json") $token $model
    $token = $null
    [Environment]::SetEnvironmentVariable("FDE365_TOKEN_INPUT", $null, "Process")

    Write-Host "`n第 4 步 / 共 6 步：连接 Claude Code 和 Codex" -ForegroundColor Cyan
    $backup = Write-FdeClientConfig $context $vault $model $helpers

    Write-Host "`n第 5 步 / 共 6 步：创建桌面入口" -ForegroundColor Cyan
    Install-FdeDesktopTools $context $scriptRoot
    Register-FdeVault $context $vault

    Write-Host "`n第 6 步 / 共 6 步：完成" -ForegroundColor Cyan
    if (-not $context.Simulation -and $env:FDE365_SKIP_LAUNCH -ne "1") {
        $obsidian = Get-FdeObsidianPath $context
        if ($null -ne $obsidian) { Start-Process -FilePath $obsidian -ArgumentList ('"' + $vault + '"') | Out-Null }
    }
    Write-Host "安装完成。" -ForegroundColor Green
    Write-Host "工作台：$vault"
    Write-Host "模型：$model"
    Write-Host "原配置备份：$backup"
    Write-Host "桌面已创建“FDE365 工具”。"
    if ($env:FDE365_NONINTERACTIVE -ne "1") { Read-Host "按回车键关闭窗口" | Out-Null }
} catch {
    Stop-FdeInstall $_.Exception.Message
}
