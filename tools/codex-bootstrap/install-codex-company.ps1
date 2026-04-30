param(
  [string]$ApiKey,
  [string]$UserNo,
  [string]$UserName,
  [string]$UserDeptName,
  [string]$BaseUrl = "https://hk-intra-paas.transsion.com/tranai-proxy/v1",
  [string]$TrustPath,
  [switch]$DisableStartup,
  [switch]$SkipProxyStart
)

$ErrorActionPreference = "Stop"

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$codexHome = Join-Path $env:USERPROFILE ".codex"
$scriptsDir = Join-Path $codexHome "scripts"
$startupDir = Join-Path $env:APPDATA "Microsoft\Windows\Start Menu\Programs\Startup"
$startupProxyShortcut = Join-Path $startupDir "Codex TranAI Proxy.vbs"
$proxyPort = 4317

$proxyTemplate = Join-Path $scriptRoot "tranai-responses-proxy.mjs"
$startTemplate = Join-Path $scriptRoot "start-tranai-proxy.cmd"
$launcherTemplate = Join-Path $scriptRoot "launch-tranai-proxy-hidden.vbs"
$showProfileTemplate = Join-Path $scriptRoot "show-codex-profile.ps1"
$switchProfileTemplate = Join-Path $scriptRoot "switch-codex-profile.ps1"

function Require-Template($path) {
  if (-not (Test-Path -LiteralPath $path)) {
    throw "Missing installer template: $path"
  }
}

function Set-UserEnvVar($name, $value, [switch]$AlwaysWrite) {
  if ($AlwaysWrite -or -not [string]::IsNullOrWhiteSpace($value)) {
    [Environment]::SetEnvironmentVariable($name, $value, "User")
  }
}

function Get-ProxyOwningProcessIds {
  $connections = Get-NetTCPConnection -LocalPort $proxyPort -State Listen -ErrorAction SilentlyContinue
  if (-not $connections) {
    return @()
  }

  return @($connections | Select-Object -ExpandProperty OwningProcess -Unique)
}

function Stop-TranAiProxy {
  $pids = Get-ProxyOwningProcessIds
  foreach ($proxyPid in $pids) {
    try {
      Stop-Process -Id $proxyPid -Force -ErrorAction Stop
    } catch {
      Write-Warning "Failed to stop TranAI local proxy process ${proxyPid}: $($_.Exception.Message)"
    }
  }
}

function Start-TranAiProxy {
  if ($SkipProxyStart) {
    Write-Host "Skipped starting TranAI local proxy."
    return
  }

  if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Warning "Node.js is not available on PATH. The proxy files were installed, but the local proxy was not started."
    return
  }

  $proxyCommand = Join-Path $scriptsDir "start-tranai-proxy.cmd"
  $proxyLauncher = Join-Path $scriptsDir "launch-tranai-proxy-hidden.vbs"

  Stop-TranAiProxy
  Start-Sleep -Milliseconds 500

  if (Test-Path -LiteralPath $proxyLauncher) {
    & cscript.exe //nologo $proxyLauncher $proxyCommand | Out-Null
  } else {
    Start-Process -FilePath $proxyCommand -WindowStyle Hidden | Out-Null
  }

  $started = @()
  for ($i = 0; $i -lt 10; $i++) {
    Start-Sleep -Milliseconds 500
    $started = Get-ProxyOwningProcessIds
    if ($started.Count -gt 0) {
      break
    }
  }

  if ($started.Count -gt 0) {
    Write-Host "TranAI local proxy is listening on port $proxyPort."
  } else {
    Write-Warning "TranAI local proxy did not confirm as listening on port $proxyPort."
  }
}

function Write-StartupProxyShortcut {
  if ($DisableStartup) {
    if (Test-Path -LiteralPath $startupProxyShortcut) {
      Remove-Item -LiteralPath $startupProxyShortcut -Force
    }
    Write-Host "Startup launch for TranAI local proxy is disabled."
    return
  }

  $proxyCommand = Join-Path $scriptsDir "start-tranai-proxy.cmd"
  $content = @"
Set shell = CreateObject("WScript.Shell")
shell.Run """" & "$proxyCommand" & """", 0, False
"@
  Set-Content -LiteralPath $startupProxyShortcut -Value $content -Encoding ASCII
  Write-Host "Startup launch for TranAI local proxy is enabled."
}

Require-Template $proxyTemplate
Require-Template $startTemplate
Require-Template $launcherTemplate
Require-Template $showProfileTemplate
Require-Template $switchProfileTemplate

if ([string]::IsNullOrWhiteSpace($ApiKey)) {
  $ApiKey = Read-Host "Enter TranAI API key"
}

if ([string]::IsNullOrWhiteSpace($ApiKey)) {
  throw "TranAI API key is required."
}

$resolvedTrustPath = $null
$projectTrustBlock = ""
if (-not [string]::IsNullOrWhiteSpace($TrustPath)) {
  $resolvedTrustPath = Resolve-Path $TrustPath
  $escapedTrustPath = [string]$resolvedTrustPath
  $escapedTrustPath = $escapedTrustPath.Replace("'", "''")
  $projectTrustBlock = @"

[projects.'$escapedTrustPath']
trust_level = "trusted"
"@
}

New-Item -ItemType Directory -Force $codexHome | Out-Null
New-Item -ItemType Directory -Force $scriptsDir | Out-Null
New-Item -ItemType Directory -Force $startupDir | Out-Null

Copy-Item -LiteralPath $proxyTemplate -Destination (Join-Path $scriptsDir "tranai-responses-proxy.mjs") -Force
Copy-Item -LiteralPath $startTemplate -Destination (Join-Path $scriptsDir "start-tranai-proxy.cmd") -Force
Copy-Item -LiteralPath $launcherTemplate -Destination (Join-Path $scriptsDir "launch-tranai-proxy-hidden.vbs") -Force
Copy-Item -LiteralPath $showProfileTemplate -Destination (Join-Path $scriptsDir "show-codex-profile.ps1") -Force
Copy-Item -LiteralPath $switchProfileTemplate -Destination (Join-Path $scriptsDir "switch-codex-profile.ps1") -Force

$companyConfig = @"
model = "gpt-5.4"
model_provider = "tranai_local"
model_reasoning_effort = "high"

[model_providers.tranai]
name = "TranAI"
base_url = "$BaseUrl"
env_key = "TRANAI_API_KEY"
wire_api = "responses"

[model_providers.tranai_local]
name = "TranAI Local Proxy"
base_url = "http://127.0.0.1:4317/v1"
env_key = "TRANAI_API_KEY"
wire_api = "responses"

[windows]
sandbox = "elevated"

[features]
multi_agent = true
$projectTrustBlock
"@

$openAiConfig = @"
[windows]
sandbox = "elevated"
$projectTrustBlock
"@

$configCompanyPath = Join-Path $codexHome "config.company.toml"
$configOpenAiPath = Join-Path $codexHome "config.openai.toml"
$configPath = Join-Path $codexHome "config.toml"

Set-Content -LiteralPath $configCompanyPath -Value $companyConfig -Encoding UTF8
Set-Content -LiteralPath $configOpenAiPath -Value $openAiConfig -Encoding UTF8
Set-Content -LiteralPath $configPath -Value $companyConfig -Encoding UTF8

Set-UserEnvVar "TRANAI_API_KEY" $ApiKey -AlwaysWrite
Set-UserEnvVar "TRANAI_BASE_URL" $BaseUrl -AlwaysWrite
Set-UserEnvVar "TRANAI_USER_NO" $UserNo
Set-UserEnvVar "TRANAI_USER_NAME" $UserName
Set-UserEnvVar "TRANAI_USER_DEPT_NAME" $UserDeptName

Write-StartupProxyShortcut
Start-TranAiProxy

Write-Host ""
Write-Host "Codex company profile installed."
Write-Host "Codex home : $codexHome"
Write-Host "Trusted path: $(if ($resolvedTrustPath) { $resolvedTrustPath } else { '<not configured>' })"
Write-Host "Active config: $configPath"
Write-Host ""
Write-Host "Next step:"
Write-Host "1. Open VS Code."
Write-Host "2. Start a new Codex thread, or reload the VS Code window."
Write-Host "3. The default model will use the local TranAI proxy without OpenAI login."
if (-not $resolvedTrustPath) {
  Write-Host "4. If you want a project to be trusted automatically, rerun with -TrustPath <your project folder>."
}
