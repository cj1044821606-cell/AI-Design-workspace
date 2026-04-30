@echo off
setlocal
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0install-codex-company.ps1" %*
exit /b %errorlevel%
