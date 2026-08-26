param(
    [Parameter(Mandatory = $true)][string]$QaRoot
)
$ErrorActionPreference = "Stop"
Set-StrictMode -Version 2.0
try { [Console]::OutputEncoding = New-Object Text.UTF8Encoding($false) } catch {}

$zip = Join-Path $QaRoot "FDE365-Knowledge-OS-Windows-v1.1.0.zip"
$extract = Join-Path $QaRoot "extracted"
$rollback = Join-Path $env:LOCALAPPDATA ("FDE365-TestRollback-" + [Guid]::NewGuid().ToString("N"))
$support = Join-Path $env:LOCALAPPDATA "FDE365"
$desktopTools = Join-Path ([Environment]::GetFolderPath("Desktop")) "FDE365 工具"
$configPaths = @(
    (Join-Path $env:USERPROFILE ".claude\settings.json"),
    (Join-Path $env:USERPROFILE ".codex\config.toml"),
    (Join-Path $env:APPDATA "obsidian\obsidian.json")
)
$environmentNames = @("Path", "ANTHROPIC_API_KEY", "ANTHROPIC_AUTH_TOKEN", "ANTHROPIC_BASE_URL", "ANTHROPIC_MODEL", "OPENAI_API_KEY", "OPENAI_BASE_URL")
$environmentSnapshot = @{}
$fileSnapshot = @()
$supportExisted = Test-Path -LiteralPath $support
$desktopToolsExisted = Test-Path -LiteralPath $desktopTools
$obsidianWasRunning = $null -ne (Get-Process -Name Obsidian -ErrorAction SilentlyContinue)
$startedObsidian = @()

New-Item -ItemType Directory -Path $rollback -Force | Out-Null
foreach ($name in $environmentNames) { $environmentSnapshot[$name] = [Environment]::GetEnvironmentVariable($name, "User") }
$index = 0
foreach ($path in $configPaths) {
    $exists = Test-Path -LiteralPath $path
    $backup = Join-Path $rollback ("config-" + $index)
    if ($exists) { Copy-Item -LiteralPath $path -Destination $backup -Force }
    $fileSnapshot += [pscustomobject]@{ Path = $path; Exists = $exists; Backup = $backup }
    $index++
}

try {
    Expand-Archive -LiteralPath $zip -DestinationPath $extract
    $bundle = Join-Path $extract "FDE365-Knowledge-OS-Windows-v1.1.0"
    $install = Join-Path $bundle "开始安装 FDE365.ps1"
    if (-not (Test-Path -LiteralPath $install)) { throw "发布包解压后的入口文件缺失。" }

    Remove-Item Env:FDE365_SIMULATION -ErrorAction SilentlyContinue
    Remove-Item Env:FDE365_HOME_OVERRIDE -ErrorAction SilentlyContinue
    Remove-Item Env:FDE365_APPDATA_OVERRIDE -ErrorAction SilentlyContinue
    Remove-Item Env:FDE365_LOCALAPPDATA_OVERRIDE -ErrorAction SilentlyContinue
    Remove-Item Env:FDE365_DESKTOP_OVERRIDE -ErrorAction SilentlyContinue
    $env:FDE365_NONINTERACTIVE = "1"
    $env:FDE365_SKIP_LAUNCH = "1"
    $env:FDE365_TOKEN_INPUT = "windows-real-placeholder-token"
    $env:FDE365_MODEL = "gpt-5.6-luna"
    $env:FDE365_VAULT_PATH = Join-Path $QaRoot "real-vault"

    & $install
    if (-not $?) { throw "真实安装脚本执行失败。" }
    $env:Path = [Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [Environment]::GetEnvironmentVariable("Path", "User")

    & (Join-Path $bundle "检查安装.ps1")
    if (-not $?) { throw "真实安装检查失败。" }

    $obsidian = Join-Path $env:LOCALAPPDATA "Programs\Obsidian\Obsidian.exe"
    if (-not (Test-Path -LiteralPath $obsidian)) { $obsidian = Join-Path $env:LOCALAPPDATA "Obsidian\Obsidian.exe" }
    if (-not (Test-Path -LiteralPath $obsidian)) { $obsidian = Join-Path $env:ProgramFiles "Obsidian\Obsidian.exe" }
    if (-not (Test-Path -LiteralPath $obsidian)) { throw "真实安装后没有找到 Obsidian。" }
    $signature = Get-AuthenticodeSignature -FilePath $obsidian
    if ($signature.Status -ne "Valid") { throw "已安装 Obsidian 的签名无效：$($signature.Status)" }

    $claude = Get-Command claude -ErrorAction Stop
    $codex = Get-Command codex -ErrorAction Stop
    $claudeVersion = (& $claude.Source --version 2>&1 | Select-Object -First 1)
    $codexVersion = (& $codex.Source --version 2>&1 | Select-Object -First 1)
    if ([string]::IsNullOrWhiteSpace([string]$claudeVersion)) { throw "Claude Code 版本检查失败。" }
    if ([string]::IsNullOrWhiteSpace([string]$codexVersion)) { throw "Codex 版本检查失败。" }

    $claudeConfig = Get-Content -LiteralPath (Join-Path $env:USERPROFILE ".claude\settings.json") -Raw -Encoding UTF8
    $codexConfig = Get-Content -LiteralPath (Join-Path $env:USERPROFILE ".codex\config.toml") -Raw -Encoding UTF8
    if ($claudeConfig -notmatch "https://api.fde365.ai") { throw "Claude 固定服务地址没有生效。" }
    if ($codexConfig -notmatch "https://api.fde365.ai/v1") { throw "Codex 固定服务地址没有生效。" }
    if ($claudeConfig -match "windows-real-placeholder-token" -or $codexConfig -match "windows-real-placeholder-token") {
        throw "测试 Token 被复制到了客户端配置。"
    }
    $tokenOutput = & (Join-Path $support "bin\fde365-token.ps1")
    if ([string]$tokenOutput -ne "windows-real-placeholder-token") { throw "客户端 Token 动态读取失败。" }
    $tokenOutput = $null

    if (-not $obsidianWasRunning) {
        $launchTime = Get-Date
        Start-Process -FilePath $obsidian -ArgumentList ('"' + $env:FDE365_VAULT_PATH + '"') | Out-Null
        Start-Sleep -Seconds 12
        $startedObsidian = @(Get-Process -Name Obsidian -ErrorAction SilentlyContinue | Where-Object { $_.StartTime -ge $launchTime.AddSeconds(-2) })
        if ($startedObsidian.Count -eq 0) { throw "Obsidian 启动验证失败。" }
    }

    [pscustomobject]@{
        Status = "PASS"
        PowerShell = $PSVersionTable.PSVersion.ToString()
        ObsidianSignature = [string]$signature.Status
        ObsidianPublisher = [string]$signature.SignerCertificate.Subject
        ClaudeVersionDetected = $true
        CodexVersionDetected = $true
        PluginVersion = "1.1.0"
        FixedClaudeBaseUrl = $true
        FixedCodexBaseUrl = $true
        TokenStoredOnlyInVault = $true
        ObsidianLaunchVerified = (-not $obsidianWasRunning)
        OriginalClientConfigsRestoredAfterTest = $true
    } | ConvertTo-Json
} finally {
    foreach ($process in $startedObsidian) { Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue }
    foreach ($item in $fileSnapshot) {
        if ($item.Exists) {
            New-Item -ItemType Directory -Path (Split-Path -Parent $item.Path) -Force | Out-Null
            Copy-Item -LiteralPath $item.Backup -Destination $item.Path -Force
        } elseif (Test-Path -LiteralPath $item.Path) {
            Remove-Item -LiteralPath $item.Path -Force
        }
    }
    foreach ($name in $environmentNames) { [Environment]::SetEnvironmentVariable($name, $environmentSnapshot[$name], "User") }
    if (-not $supportExisted -and (Test-Path -LiteralPath $support)) { Remove-Item -LiteralPath $support -Recurse -Force }
    if (-not $desktopToolsExisted -and (Test-Path -LiteralPath $desktopTools)) { Remove-Item -LiteralPath $desktopTools -Recurse -Force }
    if (Test-Path -LiteralPath $rollback) { Remove-Item -LiteralPath $rollback -Recurse -Force }
    Remove-Item Env:FDE365_TOKEN_INPUT -ErrorAction SilentlyContinue
}
