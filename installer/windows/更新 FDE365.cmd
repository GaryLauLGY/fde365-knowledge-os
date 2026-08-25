@echo off
chcp 65001 >nul
title 更新 FDE365 Knowledge OS
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0更新 FDE365.ps1"
if errorlevel 1 pause
