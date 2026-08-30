param(
    [Parameter(Mandatory = $true)][string]$QaRoot,
    [string]$Version = "1.1.2"
)
$ErrorActionPreference = "Stop"
$zip = Join-Path $QaRoot "FDE365-Knowledge-OS-Windows-v$Version.zip"
$extract = Join-Path $QaRoot "extracted"
if (Test-Path -LiteralPath $extract) { throw "隔离测试目录已经存在，请使用新的 QaRoot。" }
Expand-Archive -LiteralPath $zip -DestinationPath $extract
$bundle = Join-Path $extract "FDE365-Knowledge-OS-Windows-v$Version"
$install = Join-Path $bundle "开始安装 FDE365.ps1"
if (-not (Test-Path -LiteralPath $install)) {
    $names = @(Get-ChildItem -LiteralPath $bundle | Select-Object -ExpandProperty Name)
    throw "Windows 解压后文件名不正确：$($names -join ', ')"
}
$env:FDE365_SIMULATION = "1"
$env:FDE365_NONINTERACTIVE = "1"
$env:FDE365_TOKEN_INPUT = "windows-remote-placeholder-token"
$env:FDE365_MODEL = "gpt-5.6-luna"
$env:FDE365_HOME_OVERRIDE = Join-Path $QaRoot "sandbox\home"
$env:FDE365_APPDATA_OVERRIDE = Join-Path $QaRoot "sandbox\appdata"
$env:FDE365_LOCALAPPDATA_OVERRIDE = Join-Path $QaRoot "sandbox\localappdata"
$env:FDE365_DESKTOP_OVERRIDE = Join-Path $QaRoot "sandbox\desktop"
$env:FDE365_VAULT_PATH = Join-Path $QaRoot "sandbox\vault"
& $install
if (-not $?) { throw "模拟安装失败。" }
& (Join-Path $bundle "检查安装.ps1")
if (-not $?) { throw "模拟检查失败。" }
$dataPath = Join-Path $env:FDE365_VAULT_PATH ".obsidian\plugins\fde365-knowledge-os\data.json"
$data = Get-Content -LiteralPath $dataPath -Raw -Encoding UTF8 | ConvertFrom-Json
if ([string]$data.ai.fde365.token -ne "windows-remote-placeholder-token") { throw "Token 隔离写入不正确。" }
if ([string]$data.ai.fde365.model -ne "gpt-5.6-luna") { throw "模型写入不正确。" }
$claude = Get-Content -LiteralPath (Join-Path $env:FDE365_HOME_OVERRIDE ".claude\settings.json") -Raw -Encoding UTF8
$codex = Get-Content -LiteralPath (Join-Path $env:FDE365_HOME_OVERRIDE ".codex\config.toml") -Raw -Encoding UTF8
if ($claude -notmatch "https://api.fde365.ai") { throw "Claude 固定服务地址缺失。" }
if ($codex -notmatch "https://api.fde365.ai/v1") { throw "Codex 固定服务地址缺失。" }
$tokenOutsideVault = Get-ChildItem -LiteralPath (Join-Path $QaRoot "sandbox") -Recurse -File | Where-Object {
    $_.FullName -ne $dataPath -and (Select-String -LiteralPath $_.FullName -SimpleMatch "windows-remote-placeholder-token" -Quiet -ErrorAction SilentlyContinue)
}
if ($tokenOutsideVault) { throw "测试 Token 出现在 Vault 插件配置之外。" }
[pscustomobject]@{
    Status = "PASS"
    PowerShell = $PSVersionTable.PSVersion.ToString()
    BundleName = Split-Path -Leaf $bundle
    Vault = $env:FDE365_VAULT_PATH
    Model = [string]$data.ai.fde365.model
    TokenStoredOnlyInVault = $true
} | ConvertTo-Json
