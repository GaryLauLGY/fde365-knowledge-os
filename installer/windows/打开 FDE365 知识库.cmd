@echo off
chcp 65001 >nul
set "VAULT="
if exist "%LOCALAPPDATA%\FDE365\vault-path.txt" set /p VAULT=<"%LOCALAPPDATA%\FDE365\vault-path.txt"
if not defined VAULT (
  echo 尚未找到 FDE365 工作台，请先运行安装程序。
  pause
  exit /b 1
)
if exist "%LOCALAPPDATA%\Programs\Obsidian\Obsidian.exe" (
  start "" "%LOCALAPPDATA%\Programs\Obsidian\Obsidian.exe" "%VAULT%"
) else if exist "%LOCALAPPDATA%\Obsidian\Obsidian.exe" (
  start "" "%LOCALAPPDATA%\Obsidian\Obsidian.exe" "%VAULT%"
) else if exist "%ProgramFiles%\Obsidian\Obsidian.exe" (
  start "" "%ProgramFiles%\Obsidian\Obsidian.exe" "%VAULT%"
) else (
  echo 尚未找到 Obsidian，请重新运行安装程序。
  pause
  exit /b 1
)
