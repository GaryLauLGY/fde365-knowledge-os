@echo off
chcp 65001 >nul
title FDE365 Knowledge OS 安装
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0开始安装 FDE365.ps1"
if errorlevel 1 pause
