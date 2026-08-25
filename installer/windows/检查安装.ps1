$ErrorActionPreference = "Stop"
Set-StrictMode -Version 2.0
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$components = Join-Path $scriptRoot "组件"
. (Join-Path $components "helpers\FDE365.Common.ps1")
$context = Get-FdeContext
$vault = Get-FdeInstalledVault $context
$results = [ordered]@{
    Obsidian = ($null -ne (Get-FdeObsidianPath $context))
    ClaudeCode = ($context.Simulation -or $null -ne (Get-Command claude -ErrorAction SilentlyContinue) -or (Test-Path -LiteralPath (Join-Path $context.Home ".local\bin\claude.cmd")))
    Codex = ($context.Simulation -or $null -ne (Get-Command codex -ErrorAction SilentlyContinue) -or (Test-Path -LiteralPath (Join-Path $context.Home ".local\bin\codex.cmd")))
    Vault = (-not [string]::IsNullOrWhiteSpace($vault) -and (Test-Path -LiteralPath $vault))
    Plugin = (-not [string]::IsNullOrWhiteSpace($vault) -and (Test-Path -LiteralPath (Join-Path $vault ".obsidian\plugins\fde365-knowledge-os\main.js")))
    Token = $false
    ClaudeConfig = (Test-Path -LiteralPath (Join-Path $context.Home ".claude\settings.json"))
    CodexConfig = (Test-Path -LiteralPath (Join-Path $context.Home ".codex\config.toml"))
}
if ($results.Plugin) {
    $dataPath = Join-Path $vault ".obsidian\plugins\fde365-knowledge-os\data.json"
    if (Test-Path -LiteralPath $dataPath) {
        $data = Read-FdeJson $dataPath
        $results.Token = (-not [string]::IsNullOrWhiteSpace([string]$data.ai.fde365.token))
    }
}
Write-Host "FDE365 Windows 安装检查" -ForegroundColor Cyan
$failed = $false
foreach ($item in $results.GetEnumerator()) {
    if ($item.Value) { Write-Host ("[通过] " + $item.Key) -ForegroundColor Green }
    else { Write-Host ("[缺失] " + $item.Key) -ForegroundColor Red; $failed = $true }
}
if ($failed) {
    Write-Host "检查未通过，请重新运行安装程序。" -ForegroundColor Red
    if ($env:FDE365_NONINTERACTIVE -eq "1") { throw "FDE365 安装检查未通过。" }
    Read-Host "按回车键关闭窗口" | Out-Null
    exit 1
}
Write-Host "全部检查通过，Token 内容未显示。" -ForegroundColor Green
if ($env:FDE365_NONINTERACTIVE -ne "1") { Read-Host "按回车键关闭窗口" | Out-Null }
