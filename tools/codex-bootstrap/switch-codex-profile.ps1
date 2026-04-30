param(
  [Parameter(Mandatory = $true)]
  [ValidateSet("openai", "company")]
  [string]$Profile
)

$ErrorActionPreference = "Stop"

$codexHome = Join-Path $env:USERPROFILE ".codex"
$configToml = Join-Path $codexHome "config.toml"
$openAiConfig = Join-Path $codexHome "config.openai.toml"
$companyConfig = Join-Path $codexHome "config.company.toml"
$startupDir = Join-Path $env:APPDATA "Microsoft\Windows\Start Menu\Programs\Startup"
$startupProxyShortcut = Join-Path $startupDir "Codex TranAI Proxy.vbs"
$proxyLauncher = Join-Path $codexHome "scripts\launch-tranai-proxy-hidden.vbs"
$proxyCommand = Join-Path $codexHome "scripts\start-tranai-proxy.cmd"
$proxyPort = 4317

function Write-StartupProxyShortcut {
  $content = @"
Set shell = CreateObject("WScript.Shell")
shell.Run """" & "$proxyCommand" & """", 0, False
"@
  Set-Content -LiteralPath $startupProxyShortcut -Value $content -Encoding ASCII
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
  if ($pids.Count -eq 0) {
    Write-Host "TranAI local proxy is not running."
    return
  }

  foreach ($proxyPid in $pids) {
    try {
      Stop-Process -Id $proxyPid -Force -ErrorAction Stop
      Write-Host "Stopped TranAI local proxy process $proxyPid."
    } catch {
      Write-Warning "Failed to stop TranAI local proxy process ${proxyPid}: $($_.Exception.Message)"
    }
  }
}

function Start-TranAiProxy {
  $existing = Get-ProxyOwningProcessIds
  if ($existing.Count -gt 0) {
    Write-Host "TranAI local proxy is already listening on port $proxyPort."
    return
  }

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
    Write-Host "TranAI local proxy started on port $proxyPort."
  } else {
    Write-Warning "TranAI local proxy did not confirm as listening on port $proxyPort."
  }
}

switch ($Profile) {
  "openai" {
    if (-not (Test-Path -LiteralPath $openAiConfig)) {
      throw "Missing OpenAI profile config: $openAiConfig"
    }

    Copy-Item -LiteralPath $openAiConfig -Destination $configToml -Force

    if (Test-Path -LiteralPath $startupProxyShortcut) {
      Remove-Item -LiteralPath $startupProxyShortcut -Force
      Write-Host "Disabled startup launch for TranAI local proxy."
    }

    Stop-TranAiProxy
    Write-Host "Active Codex profile: OpenAI"
  }
  "company" {
    if (-not (Test-Path -LiteralPath $companyConfig)) {
      throw "Missing company profile config: $companyConfig"
    }

    Copy-Item -LiteralPath $companyConfig -Destination $configToml -Force
    Write-StartupProxyShortcut
    Start-TranAiProxy
    Write-Host "Active Codex profile: Company proxy"
  }
}

Write-Host ""
Write-Host "Config path: $configToml"
Write-Host "Next step: open a new Codex thread, or run 'Developer: Reload Window' in VS Code."
