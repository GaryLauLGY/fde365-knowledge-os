@echo off
chcp 65001 >nul
title 检查 FDE365 Knowledge OS
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0检查安装.ps1"
if errorlevel 1 pause
