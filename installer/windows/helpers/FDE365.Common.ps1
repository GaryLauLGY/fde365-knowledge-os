$ErrorActionPreference = "Stop"
Set-StrictMode -Version 2.0
try { [Console]::OutputEncoding = New-Object Text.UTF8Encoding($false) } catch {}

$script:FdePluginId = "fde365-knowledge-os"
$script:FdeAllowedModels = @("claude-fable-5", "claude-opus-4-8", "gpt-5.6-sol", "gpt-5.6-luna")

function Get-FdePath([string]$OverrideName, [string]$Fallback) {
    $value = [Environment]::GetEnvironmentVariable($OverrideName, "Process")
    if ([string]::IsNullOrWhiteSpace($value)) { return $Fallback }
    return [IO.Path]::GetFullPath($value)
}

function Get-FdeContext {
    $homeRoot = Get-FdePath "FDE365_HOME_OVERRIDE" $env:USERPROFILE
    $appDataRoot = Get-FdePath "FDE365_APPDATA_OVERRIDE" $env:APPDATA
    $localAppDataRoot = Get-FdePath "FDE365_LOCALAPPDATA_OVERRIDE" $env:LOCALAPPDATA
    $desktopFallback = [Environment]::GetFolderPath("Desktop")
    $desktopRoot = Get-FdePath "FDE365_DESKTOP_OVERRIDE" $desktopFallback
    return [pscustomobject]@{
        Home = $homeRoot
        AppData = $appDataRoot
        LocalAppData = $localAppDataRoot
        Desktop = $desktopRoot
        Support = Join-Path $localAppDataRoot "FDE365"
        Simulation = ([Environment]::GetEnvironmentVariable("FDE365_SIMULATION", "Process") -eq "1")
    }
}

function Ensure-FdeDirectory([string]$Path) {
    if (-not (Test-Path -LiteralPath $Path)) { New-Item -ItemType Directory -Path $Path -Force | Out-Null }
}

function Read-FdeJson([string]$Path) {
    if (-not (Test-Path -LiteralPath $Path)) { return [pscustomobject]@{} }
    $content = Get-Content -LiteralPath $Path -Raw -Encoding UTF8
    if ([string]::IsNullOrWhiteSpace($content)) { return [pscustomobject]@{} }
    return $content | ConvertFrom-Json
}

function Write-FdeJson([string]$Path, [object]$Value) {
    Ensure-FdeDirectory (Split-Path -Parent $Path)
    $json = $Value | ConvertTo-Json -Depth 30
    [IO.File]::WriteAllText($Path, $json + [Environment]::NewLine, (New-Object Text.UTF8Encoding($false)))
}

function Set-FdeProperty([object]$Object, [string]$Name, [object]$Value) {
    $property = $Object.PSObject.Properties[$Name]
    if ($null -eq $property) { $Object | Add-Member -NotePropertyName $Name -NotePropertyValue $Value }
    else { $property.Value = $Value }
}

function Copy-FdeCreateOnly([string]$Source, [string]$Destination) {
    Ensure-FdeDirectory $Destination
    $sourceRoot = (Resolve-Path -LiteralPath $Source).Path
    Get-ChildItem -LiteralPath $sourceRoot -Recurse -Force | ForEach-Object {
        $relative = $_.FullName.Substring($sourceRoot.Length).TrimStart('\', '/')
        $target = Join-Path $Destination $relative
        if ($_.PSIsContainer) { Ensure-FdeDirectory $target }
        elseif (-not (Test-Path -LiteralPath $target)) {
            Ensure-FdeDirectory (Split-Path -Parent $target)
            Copy-Item -LiteralPath $_.FullName -Destination $target
        }
    }
}

function Backup-FdeFile([string]$Path, [string]$BackupDirectory) {
    if (-not (Test-Path -LiteralPath $Path)) { return }
    Ensure-FdeDirectory $BackupDirectory
    $safeName = ($Path -replace '[:\\/ ]', '_').Trim('_')
    Copy-Item -LiteralPath $Path -Destination (Join-Path $BackupDirectory $safeName) -Force
}

function Get-FdeSelectedModel {
    $requested = [Environment]::GetEnvironmentVariable("FDE365_MODEL", "Process")
    if ($script:FdeAllowedModels -contains $requested) { return $requested }
    Write-Host "选择模型："
    for ($index = 0; $index -lt $script:FdeAllowedModels.Count; $index++) {
        Write-Host ("  {0}) {1}" -f ($index + 1), $script:FdeAllowedModels[$index])
    }
    $choice = Read-Host "输入序号（直接回车选 4）"
    if ([string]::IsNullOrWhiteSpace($choice)) { $choice = "4" }
    $number = 0
    if (-not [int]::TryParse($choice, [ref]$number) -or $number -lt 1 -or $number -gt 4) {
        throw "模型序号无效。"
    }
    return $script:FdeAllowedModels[$number - 1]
}

function Write-FdePluginSettings([string]$DataPath, [string]$Model) {
    if ($script:FdeAllowedModels -notcontains $Model) { throw "模型不在允许列表中。" }
    $settings = Read-FdeJson $DataPath
    Set-FdeProperty $settings "schemaVersion" 5
    if ($null -eq $settings.PSObject.Properties["onboardingVersion"]) { Set-FdeProperty $settings "onboardingVersion" 0 }
    if ($null -eq $settings.PSObject.Properties["ai"] -or $null -eq $settings.ai) {
        Set-FdeProperty $settings "ai" ([pscustomobject]@{})
    }
    Set-FdeProperty $settings.ai "provider" "fde365"
    if ($null -eq $settings.ai.PSObject.Properties["fde365"] -or $null -eq $settings.ai.fde365) {
        Set-FdeProperty $settings.ai "fde365" ([pscustomobject]@{})
    }
    Set-FdeProperty $settings.ai.fde365 "model" $Model
    Set-FdeProperty $settings.ai.fde365 "temperature" 0.3
    Set-FdeProperty $settings.ai.fde365 "timeoutMs" 120000
    Write-FdeJson $DataPath $settings
}

function Enable-FdePlugin([string]$VaultPath) {
    $communityPath = Join-Path $VaultPath ".obsidian\community-plugins.json"
    $plugins = @()
    if (Test-Path -LiteralPath $communityPath) {
        $loaded = Get-Content -LiteralPath $communityPath -Raw -Encoding UTF8 | ConvertFrom-Json
        if ($null -ne $loaded) { $plugins = @($loaded) }
    }
    if ($plugins -notcontains $script:FdePluginId) { $plugins += $script:FdePluginId }
    Write-FdeJson $communityPath $plugins
}

function Register-FdeVault([object]$Context, [string]$VaultPath) {
    $configPath = Join-Path $Context.AppData "obsidian\obsidian.json"
    $config = Read-FdeJson $configPath
    if ($null -eq $config.PSObject.Properties["vaults"] -or $null -eq $config.vaults) {
        Set-FdeProperty $config "vaults" ([pscustomobject]@{})
    }
    $sha = [Security.Cryptography.SHA256]::Create()
    try {
        $hash = $sha.ComputeHash([Text.Encoding]::UTF8.GetBytes($VaultPath.ToLowerInvariant()))
        $vaultId = -join ($hash[0..7] | ForEach-Object { $_.ToString("x2") })
    } finally { $sha.Dispose() }
    $entry = [pscustomobject]@{ path = $VaultPath; ts = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds(); open = $true }
    Set-FdeProperty $config.vaults $vaultId $entry
    Write-FdeJson $configPath $config
}

function Write-FdeVaultPointer([object]$Context, [string]$VaultPath) {
    Ensure-FdeDirectory $Context.Support
    [IO.File]::WriteAllText((Join-Path $Context.Support "vault-path.txt"), $VaultPath + [Environment]::NewLine, (New-Object Text.UTF8Encoding($false)))
}

function Install-FdeDesktopTools([object]$Context, [string]$LaunchersPath) {
    $tools = Join-Path $Context.Desktop "FDE365 工具"
    Ensure-FdeDirectory $tools
    foreach ($name in @("打开 FDE365 知识库.cmd")) {
        Copy-Item -LiteralPath (Join-Path $LaunchersPath $name) -Destination (Join-Path $tools $name) -Force
    }
}

function Get-FdeObsidianPath([object]$Context) {
    $candidates = @(
        (Join-Path $Context.LocalAppData "Programs\Obsidian\Obsidian.exe"),
        (Join-Path $Context.LocalAppData "Obsidian\Obsidian.exe"),
        (Join-Path $env:ProgramFiles "Obsidian\Obsidian.exe")
    )
    foreach ($candidate in $candidates) { if (Test-Path -LiteralPath $candidate) { return $candidate } }
    return $null
}

function Install-FdeOfficialApplications([object]$Context, [string]$ReleaseConfigPath) {
    if ($Context.Simulation) {
        $fakeBin = Join-Path $Context.Home ".local\bin"
        Ensure-FdeDirectory $fakeBin
        Set-Content -LiteralPath (Join-Path $fakeBin "codex.cmd") -Value "@echo off`r`necho FDE365 simulated Codex CLI" -Encoding ASCII
        $fakeObsidian = Join-Path $Context.LocalAppData "Obsidian\Obsidian.exe"
        Ensure-FdeDirectory (Split-Path -Parent $fakeObsidian)
        Set-Content -LiteralPath $fakeObsidian -Value "simulation" -Encoding ASCII
        Write-Host "[模拟] 已创建隔离的 Obsidian 和 Codex 引擎占位程序。" -ForegroundColor Cyan
        return
    }

    $release = Read-FdeJson $ReleaseConfigPath
    $temp = Join-Path ([IO.Path]::GetTempPath()) ("fde365-windows-" + [Guid]::NewGuid().ToString("N"))
    Ensure-FdeDirectory $temp
    try {
        if ($null -eq (Get-FdeObsidianPath $Context)) {
            Write-Host "正在从 FDE365 国内下载服务获取 Obsidian $($release.version)…"
            $installer = Join-Path $temp "Obsidian.exe"
            Invoke-WebRequest -UseBasicParsing -Uri $release.windowsUrl -OutFile $installer
            $signature = Get-AuthenticodeSignature -FilePath $installer
            if ($signature.Status -ne "Valid") { throw "Obsidian 官方安装程序签名校验失败：$($signature.Status)" }
            $process = Start-Process -FilePath $installer -ArgumentList "/S" -Wait -PassThru
            if ($process.ExitCode -ne 0) { throw "Obsidian 安装程序退出码：$($process.ExitCode)" }
            if ($null -eq (Get-FdeObsidianPath $Context)) { throw "Obsidian 安装完成后仍未找到程序。" }
        } else { Write-Host "已检测到 Obsidian。" -ForegroundColor Green }

        if ($null -eq (Get-Command codex -ErrorAction SilentlyContinue)) {
            Write-Host "正在从 Codex 官方地址安装…"
            try {
                $codexScript = Join-Path $temp "codex-install.ps1"
                Invoke-WebRequest -UseBasicParsing -Uri "https://chatgpt.com/codex/install.ps1" -OutFile $codexScript
                & powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File $codexScript
                if ($LASTEXITCODE -ne 0) { throw "Codex 官方安装程序退出码：$LASTEXITCODE" }
            } catch {
                Write-Host "官方脚本无法访问，改用 FDE365 国内下载服务…" -ForegroundColor Yellow
                $codexZip = Join-Path $temp "codex-windows.zip"
                $codexExtract = Join-Path $temp "codex-extracted"
                Invoke-WebRequest -UseBasicParsing -Uri $release.codexWindowsUrl -OutFile $codexZip
                $actualHash = (Get-FileHash -LiteralPath $codexZip -Algorithm SHA256).Hash.ToLowerInvariant()
                if ($actualHash -ne ([string]$release.codexWindowsSha256).ToLowerInvariant()) {
                    throw "Codex 官方发布包 SHA-256 校验失败。"
                }
                Expand-Archive -LiteralPath $codexZip -DestinationPath $codexExtract
                $codexBinary = Get-ChildItem -LiteralPath $codexExtract -Filter "codex-*-pc-windows-msvc.exe" -Recurse -File | Select-Object -First 1
                if ($null -eq $codexBinary) { throw "Codex 官方发布包中没有找到 Windows 程序。" }
                $localBin = Join-Path $Context.Home ".local\bin"
                Ensure-FdeDirectory $localBin
                Copy-Item -LiteralPath $codexBinary.FullName -Destination (Join-Path $localBin "codex.exe") -Force
            }
        } else { Write-Host "已检测到 Codex CLI。" -ForegroundColor Green }
    } finally {
        if (Test-Path -LiteralPath $temp) { Remove-Item -LiteralPath $temp -Recurse -Force -ErrorAction SilentlyContinue }
    }
}

function Get-FdeInstalledVault([object]$Context) {
    $pointer = Join-Path $Context.Support "vault-path.txt"
    if (-not (Test-Path -LiteralPath $pointer)) { return $null }
    $value = (Get-Content -LiteralPath $pointer -Raw -Encoding UTF8).Trim()
    if ([string]::IsNullOrWhiteSpace($value)) { return $null }
    return $value
}
