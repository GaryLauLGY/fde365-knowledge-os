$ErrorActionPreference = "Stop"
Set-StrictMode -Version 2.0
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$components = Join-Path $scriptRoot "组件"
. (Join-Path $components "helpers\FDE365.Common.ps1")
try {
    $context = Get-FdeContext
    $vault = Get-FdeInstalledVault $context
    if ([string]::IsNullOrWhiteSpace($vault) -or -not (Test-Path -LiteralPath $vault)) { throw "没有找到已安装的 FDE365 工作台。" }
    $source = Join-Path $components "fde365-knowledge-os"
    $target = Join-Path $vault ".obsidian\plugins\fde365-knowledge-os"
    Ensure-FdeDirectory $target
    foreach ($name in @("manifest.json", "main.js", "styles.css", "README.md", "LICENSE", "LICENSES.md", "KB-SUITE-LICENSE.txt", "KB-SUITE-NOTICE.md", "DEFUDDLE-LICENSE.txt")) {
        Copy-Item -LiteralPath (Join-Path $source $name) -Destination (Join-Path $target $name) -Force
    }
    $assetTarget = Join-Path $target "assets"
    Ensure-FdeDirectory $assetTarget
    Copy-Item -LiteralPath (Join-Path $source "assets\fde365-logo.png") -Destination (Join-Path $assetTarget "fde365-logo.png") -Force
    Copy-Item -LiteralPath (Join-Path $source "assets\fde365-logo-source.svg") -Destination (Join-Path $assetTarget "fde365-logo-source.svg") -Force
    Copy-FdeCreateOnly (Join-Path $components "FDE365知识库模板") (Join-Path $vault "FDE365知识库")
    Enable-FdePlugin $vault
    Write-Host "更新完成：程序文件已替换，原 Token 和用户数据已保留。" -ForegroundColor Green
    if ($env:FDE365_NONINTERACTIVE -ne "1") { Read-Host "按回车键关闭窗口" | Out-Null }
} catch {
    Write-Host "更新失败：$($_.Exception.Message)" -ForegroundColor Red
    if ($env:FDE365_NONINTERACTIVE -ne "1") { Read-Host "按回车键关闭窗口" | Out-Null }
    exit 1
}
