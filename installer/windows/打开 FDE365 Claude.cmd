@echo off
chcp 65001 >nul
set "TARGET=%~1"
if not defined TARGET if exist "%LOCALAPPDATA%\FDE365\vault-path.txt" set /p TARGET=<"%LOCALAPPDATA%\FDE365\vault-path.txt"
if not defined TARGET set "TARGET=%USERPROFILE%"
if exist "%LOCALAPPDATA%\Microsoft\WindowsApps\wt.exe" (
  start "" "%LOCALAPPDATA%\Microsoft\WindowsApps\wt.exe" -d "%TARGET%" powershell.exe -NoExit -Command "claude"
) else (
  start "FDE365 Claude" /D "%TARGET%" cmd.exe /K claude
)
