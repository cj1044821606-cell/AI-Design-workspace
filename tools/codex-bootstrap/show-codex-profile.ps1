$ErrorActionPreference = "Stop"

$codexHome = Join-Path $env:USERPROFILE ".codex"
$configToml = Join-Path $codexHome "config.toml"
$startupProxyShortcut = Join-Path $env:APPDATA "Microsoft\Windows\Start Menu\Programs\Startup\Codex TranAI Proxy.vbs"
$proxyPort = 4317
$logDir = Join-Path $codexHome "log\tranai-proxy"
$responseStateFile = Join-Path $logDir "response-state.json"
$sessionStateFile = Join-Path $logDir "session-state.json"

if (-not (Test-Path -LiteralPath $configToml)) {
  throw "Missing Codex config: $configToml"
}

$configText = Get-Content -LiteralPath $configToml -Raw
$profile = if ($configText -match 'model_provider\s*=\s*"tranai_local"') { "company" } else { "openai" }
$proxyListening = @(Get-NetTCPConnection -LocalPort $proxyPort -State Listen -ErrorAction SilentlyContinue).Count -gt 0
$startupEnabled = Test-Path -LiteralPath $startupProxyShortcut
$baseUrl = [Environment]::GetEnvironmentVariable("TRANAI_BASE_URL", "User")
$responseStateExists = Test-Path -LiteralPath $responseStateFile
$sessionStateExists = Test-Path -LiteralPath $sessionStateFile

Write-Host "Active profile : $profile"
Write-Host "Config path     : $configToml"
Write-Host "Proxy listening : $proxyListening"
Write-Host "Startup enabled : $startupEnabled"
Write-Host "TranAI base URL : $(if ($baseUrl) { $baseUrl } else { '<not set>' })"
Write-Host "Response state  : $responseStateExists"
Write-Host "Session state   : $sessionStateExists"
