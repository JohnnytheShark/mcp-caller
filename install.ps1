# ==============================================================================
# mcp-caller Installer for Windows PowerShell
# Usage: irm https://raw.githubusercontent.com/JohnnytheShark/mcp-caller/main/install.ps1 | iex
# ==============================================================================

$ErrorActionPreference = "Stop"

$Repo = "JohnnytheShark/mcp-caller"
$ApiUrl = "https://api.github.com/repos/$Repo/releases/latest"

Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host "  mcp-caller Installer (Windows PowerShell)" -ForegroundColor Cyan
Write-Host "===========================================================" -ForegroundColor Cyan

# 1. Architecture Check
$Arch = $env:PROCESSOR_ARCHITECTURE
if ($Arch -ne "AMD64" -and $Arch -ne "ARM64") {
    Write-Warning "Unsupported processor architecture: $Arch. Defaulting to x86_64."
}
$Target = "x86_64-pc-windows-msvc"

# 2. Get Latest Tag
Write-Host "[+] Querying GitHub for latest release..." -ForegroundColor Green
$Version = "v0.1.0"
try {
    $Release = Invoke-RestMethod -Uri $ApiUrl -Headers @{ "User-Agent" = "mcp-caller-installer" }
    if ($Release.tag_name) {
        $Version = $Release.tag_name
    }
} catch {
    Write-Warning "Could not fetch release tag from GitHub API, fallback to $Version"
}

$Asset = "mcp-caller-${Version}-${Target}"
$DownloadUrl = "https://github.com/$Repo/releases/download/$Version/${Asset}.zip"
$InstallDir = Join-Path $env:USERPROFILE ".mcp-caller\bin"
$ZipFile = Join-Path $env:TEMP "${Asset}.zip"
$ExtractDir = Join-Path $env:TEMP $Asset

Write-Host "[+] Downloading .zip ($DownloadUrl)..." -ForegroundColor Green
Invoke-WebRequest -Uri $DownloadUrl -OutFile $ZipFile -UseBasicParsing

Write-Host "[+] Extracting archive..." -ForegroundColor Green
if (Test-Path $ExtractDir) {
    Remove-Item -Recurse -Force $ExtractDir
}
Expand-Archive -Path $ZipFile -DestinationPath $env:TEMP -Force

if (-not (Test-Path $InstallDir)) {
    New-Item -ItemType Directory -Force -Path $InstallDir | Out-Null
}

$ExePath = Join-Path $ExtractDir "mcp-caller.exe"
if (-not (Test-Path $ExePath)) {
    $ExePath = Join-Path (Join-Path $env:TEMP $Asset) "mcp-caller.exe"
}

Copy-Item -Path $ExePath -Destination (Join-Path $InstallDir "mcp-caller.exe") -Force

# Clean up
Remove-Item -Force $ZipFile -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force $ExtractDir -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host "  [+] Successfully installed mcp-caller to: $InstallDir\mcp-caller.exe" -ForegroundColor Green
Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host ""

# 3. Check and Update User PATH
$UserPath = [Environment]::GetEnvironmentVariable("Path", [EnvironmentVariableTarget]::User)
if ($UserPath -notlike "*$InstallDir*") {
    Write-Host "[+] Adding $InstallDir to your User PATH..." -ForegroundColor Yellow
    [Environment]::SetEnvironmentVariable("Path", "$InstallDir;$UserPath", [EnvironmentVariableTarget]::User)
    $env:PATH = "$InstallDir;$env:PATH"
    Write-Host "[+] PATH updated. Please restart your terminal if needed." -ForegroundColor Green
}

Write-Host "Run 'mcp-caller' to get started!" -ForegroundColor Cyan
