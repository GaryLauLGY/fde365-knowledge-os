$ErrorActionPreference = "Stop"
Set-StrictMode -Version 2.0
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$components = Join-Path $scriptRoot "组件"
. (Join-Path $components "helpers\FDE365.Common.ps1")
$context = Get-FdeContext
$vault = Get-FdeInstalledVault $context
$results = [ordered]@{
    Obsidian = ($null -ne (Get-FdeObsidianPath $context))
    Codex = ($context.Simulation -or $null -ne (Get-Command codex -ErrorAction SilentlyContinue) -or (Test-Path -LiteralPath (Join-Path $context.Home ".local\bin\codex.cmd")) -or (Test-Path -LiteralPath (Join-Path $context.Home ".local\bin\codex.exe")))
    Vault = (-not [string]::IsNullOrWhiteSpace($vault) -and (Test-Path -LiteralPath $vault))
    Plugin = (-not [string]::IsNullOrWhiteSpace($vault) -and (Test-Path -LiteralPath (Join-Path $vault ".obsidian\plugins\fde365-knowledge-os\main.js")))
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
Write-Host "安装文件检查通过；账号需在插件内邮箱登录。" -ForegroundColor Green
if ($env:FDE365_NONINTERACTIVE -ne "1") { Read-Host "按回车键关闭窗口" | Out-Null }
