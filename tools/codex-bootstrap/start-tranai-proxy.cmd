@echo off
setlocal

set "CODEX_HOME=%USERPROFILE%\.codex"
set "SCRIPT=%CODEX_HOME%\scripts\tranai-responses-proxy.mjs"
set "LOG_DIR=%CODEX_HOME%\log\tranai-proxy"
set "LAUNCHER_LOG=%LOG_DIR%\launcher.log"
set "RESTART_DELAY_SECONDS=2"

if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

if not defined TRANAI_API_KEY (
  for /f "usebackq delims=" %%i in (`powershell -NoProfile -Command "[Environment]::GetEnvironmentVariable('TRANAI_API_KEY','User')"`) do set "TRANAI_API_KEY=%%i"
)

if not defined TRANAI_BASE_URL (
  for /f "usebackq delims=" %%i in (`powershell -NoProfile -Command "[Environment]::GetEnvironmentVariable('TRANAI_BASE_URL','User')"`) do set "TRANAI_BASE_URL=%%i"
)

if not defined TRANAI_USER_NO (
  for /f "usebackq delims=" %%i in (`powershell -NoProfile -Command "[Environment]::GetEnvironmentVariable('TRANAI_USER_NO','User')"`) do set "TRANAI_USER_NO=%%i"
)

if not defined TRANAI_USER_NAME (
  for /f "usebackq delims=" %%i in (`powershell -NoProfile -Command "[Environment]::GetEnvironmentVariable('TRANAI_USER_NAME','User')"`) do set "TRANAI_USER_NAME=%%i"
)

if not defined TRANAI_USER_DEPT_NAME (
  for /f "usebackq delims=" %%i in (`powershell -NoProfile -Command "[Environment]::GetEnvironmentVariable('TRANAI_USER_DEPT_NAME','User')"`) do set "TRANAI_USER_DEPT_NAME=%%i"
)

if "%TRANAI_API_KEY%"=="" (
  echo TRANAI_API_KEY is not set.
  exit /b 1
)

:run
node "%SCRIPT%"
set "EXIT_CODE=%ERRORLEVEL%"

if "%EXIT_CODE%"=="0" (
  exit /b 0
)

>>"%LAUNCHER_LOG%" echo [%date% %time%] proxy exited with code %EXIT_CODE%, restarting in %RESTART_DELAY_SECONDS%s
timeout /t %RESTART_DELAY_SECONDS% /nobreak >nul
goto run
