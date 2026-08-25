$ErrorActionPreference = "Stop"
$localRoot = if ($env:FDE365_LOCALAPPDATA_OVERRIDE) { $env:FDE365_LOCALAPPDATA_OVERRIDE } else { $env:LOCALAPPDATA }
$pointer = Join-Path $localRoot "FDE365\vault-path.txt"
if (-not (Test-Path -LiteralPath $pointer)) { throw "FDE365 工作台尚未配置。" }
$vault = (Get-Content -LiteralPath $pointer -Raw -Encoding UTF8).Trim()
$dataPath = Join-Path $vault ".obsidian\plugins\fde365-knowledge-os\data.json"
if (-not (Test-Path -LiteralPath $dataPath)) { throw "当前工作台没有 FDE365 Token 配置。" }
$data = Get-Content -LiteralPath $dataPath -Raw -Encoding UTF8 | ConvertFrom-Json
$token = [string]$data.ai.fde365.token
if ([string]::IsNullOrWhiteSpace($token)) { throw "当前工作台尚未填写 Token。" }
Write-Output $token.Trim()
