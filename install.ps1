# ==============================================================================
# mcp-caller Installer for Windows PowerShell
# Usage: irm https://raw.githubusercontent.com/JohnnytheShark/mcp-caller/main/install.ps1 | iex
# ==============================================================================

Continue = "Stop"

 = "JohnnytheShark/mcp-caller"
 = "https://api.github.com/repos//releases/latest"

Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host "  mcp-caller Installer (Windows PowerShell)" -ForegroundColor Cyan
Write-Host "===========================================================" -ForegroundColor Cyan

# 1. Architecture Check
 = AMD64
if ( -ne "AMD64" -and  -ne "ARM64") {
    Write-Warning "Unsupported processor architecture: . Defaulting to x86_64."
}
 = "x86_64-pc-windows-msvc"

# 2. Get Latest Tag
Write-Host "[+] Querying GitHub for latest release..." -ForegroundColor Green
 = "v0.1.0"
try {
     = Invoke-RestMethod -Uri  -Headers @{ "User-Agent" = "mcp-caller-installer" }
    if (.tag_name) {
         = .tag_name
    }
} catch {
    Write-Warning "Could not fetch release tag from GitHub API, fallback to "
}

 = "mcp-caller--"
 = "https://github.com//releases/download//.zip"
 = Join-Path C:\Users\Johnny Orellana ".mcp-caller\bin"
 = Join-Path C:\Users\JOHNNY~1\AppData\Local\Temp ".zip"
 = Join-Path C:\Users\JOHNNY~1\AppData\Local\Temp 

Write-Host "[+] Downloading .zip ()..." -ForegroundColor Green
Invoke-WebRequest -Uri  -OutFile  -UseBasicParsing

Write-Host "[+] Extracting archive..." -ForegroundColor Green
if (Test-Path ) {
    Remove-Item -Recurse -Force 
}
Expand-Archive -Path  -DestinationPath C:\Users\JOHNNY~1\AppData\Local\Temp -Force

if (-not (Test-Path )) {
    New-Item -ItemType Directory -Force -Path  | Out-Null
}

 = Join-Path  "mcp-caller.exe"
if (-not (Test-Path )) {
     = Join-Path (Join-Path C:\Users\JOHNNY~1\AppData\Local\Temp ) "mcp-caller.exe"
}

Copy-Item -Path  -Destination (Join-Path  "mcp-caller.exe") -Force

# Clean up
Remove-Item -Force  -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force  -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host "  ? Successfully installed mcp-caller to: \mcp-caller.exe" -ForegroundColor Green
Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host ""

# 3. Check and Update User PATH
 = [Environment]::GetEnvironmentVariable("Path", [EnvironmentVariableTarget]::User)
if ( -notlike "**") {
    Write-Host "[+] Adding  to your User PATH..." -ForegroundColor Yellow
    [Environment]::SetEnvironmentVariable("Path", ";", [EnvironmentVariableTarget]::User)
    C:/Users/Johnny Orellana/.gemini/antigravity-cli/bin;C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v13.2\bin\x64;C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v13.2\bin;C:\Program Files\ImageMagick-7.1.2-Q16-HDRI;C:\Python313\Scripts\;C:\Python313\;C:\Python39\Scripts\;C:\Python39\;C:\Python38\Scripts\;C:\Python38\;C:\Program Files (x86)\Common Files\Intel\Shared Libraries\redist\intel64\compiler;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files\PuTTY\;C:\ProgramData\chocolatey\bin;C:\Program Files\Git\cmd;C:\Program Files\Microsoft VS Code\bin;C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;C:\Program Files\MongoDB\Server\4.4\bin;C:\Program Files\MongoDB\Tools\100\bin;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files (x86)\Stripe;C:\Program Files (x86)\Intel\Intel(R) Management Engine Components\DAL;C:\Program Files\Intel\Intel(R) Management Engine Components\DAL;C:\Program Files\PostgreSQL\17\bin;C:\Program Files (x86)\HP\HP OCR\DB_Lib\;C:\Program Files\dotnet\;C:\Program Files\nodejs\;C:\Program Files\Docker\Docker\resources\bin;C:\Program Files\NVIDIA Corporation\NVIDIA App\NvDLISR;C:\Program Files\CMake\bin;C:\Program Files\LLVM\bin;C:\Program Files (x86)\LLVM\bin;C:\Program Files\NVIDIA Corporation\Nsight Compute 2026.1.1\;C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\;C:\Users\Johnny Orellana\AppData\Local\agy\bin;C:\Users\Johnny Orellana\scoop\apps\gcc\current\bin;C:\Users\Johnny Orellana\scoop\shims;C:\Program Files (x86)\Microsoft Visual Studio\18\BuildTools\VC\Tools\MSVC\14.51.36231\bin\Hostx64\x64;C:\Users\Johnny Orellana\AppData\Local\ferrumox\bin;C:\Users\Johnny Orellana\.cargo\bin;C:\Users\Johnny Orellana\AppData\Local\Microsoft\WindowsApps;C:\Users\Johnny Orellana\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\Johnny Orellana\php;C:\Users\Johnny Orellana\AppData\Local\Programs\Git\cmd;C:\Users\Johnny Orellana\.dotnet\tools;C:\Users\Johnny Orellana\.deno\bin;C:\Users\Johnny Orellana\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin;C:\Users\Johnny Orellana\AppData\Roaming\npm;C:\Users\Johnny Orellana\AppData\Local\Programs\Ollama;C:\Users\Johnny Orellana\AppData\Local\Microsoft\WinGet\Links;C:\PROGRA~1\Android\ANDROI~1\jbr\bin;C:\Users\JOHNNY~1\AppData\Local\Android\Sdk\cmdline-tools\latest\bin;C:\Users\JOHNNY~1\AppData\Local\Android\Sdk\platform-tools;C:\Users\Johnny Orellana\.skill-cli\bin;C:\Users\Johnny Orellana\.ox\bin;C:\Users\Johnny Orellana\.github-mcp-rust\bin;C:\Users\Johnny Orellana\AppData\Roaming\Python\Python313\Scripts;C:\Users\Johnny Orellana\scoop\apps\neovim\current\bin;C:\Users\Johnny Orellana\scoop\apps\neovim\current\bin = "C:/Users/Johnny Orellana/.gemini/antigravity-cli/bin;C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v13.2\bin\x64;C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v13.2\bin;C:\Program Files\ImageMagick-7.1.2-Q16-HDRI;C:\Python313\Scripts\;C:\Python313\;C:\Python39\Scripts\;C:\Python39\;C:\Python38\Scripts\;C:\Python38\;C:\Program Files (x86)\Common Files\Intel\Shared Libraries\redist\intel64\compiler;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files\PuTTY\;C:\ProgramData\chocolatey\bin;C:\Program Files\Git\cmd;C:\Program Files\Microsoft VS Code\bin;C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;C:\Program Files\MongoDB\Server\4.4\bin;C:\Program Files\MongoDB\Tools\100\bin;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files (x86)\Stripe;C:\Program Files (x86)\Intel\Intel(R) Management Engine Components\DAL;C:\Program Files\Intel\Intel(R) Management Engine Components\DAL;C:\Program Files\PostgreSQL\17\bin;C:\Program Files (x86)\HP\HP OCR\DB_Lib\;C:\Program Files\dotnet\;C:\Program Files\nodejs\;C:\Program Files\Docker\Docker\resources\bin;C:\Program Files\NVIDIA Corporation\NVIDIA App\NvDLISR;C:\Program Files\CMake\bin;C:\Program Files\LLVM\bin;C:\Program Files (x86)\LLVM\bin;C:\Program Files\NVIDIA Corporation\Nsight Compute 2026.1.1\;C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\;C:\Users\Johnny Orellana\AppData\Local\agy\bin;C:\Users\Johnny Orellana\scoop\apps\gcc\current\bin;C:\Users\Johnny Orellana\scoop\shims;C:\Program Files (x86)\Microsoft Visual Studio\18\BuildTools\VC\Tools\MSVC\14.51.36231\bin\Hostx64\x64;C:\Users\Johnny Orellana\AppData\Local\ferrumox\bin;C:\Users\Johnny Orellana\.cargo\bin;C:\Users\Johnny Orellana\AppData\Local\Microsoft\WindowsApps;C:\Users\Johnny Orellana\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\Johnny Orellana\php;C:\Users\Johnny Orellana\AppData\Local\Programs\Git\cmd;C:\Users\Johnny Orellana\.dotnet\tools;C:\Users\Johnny Orellana\.deno\bin;C:\Users\Johnny Orellana\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin;C:\Users\Johnny Orellana\AppData\Roaming\npm;C:\Users\Johnny Orellana\AppData\Local\Programs\Ollama;C:\Users\Johnny Orellana\AppData\Local\Microsoft\WinGet\Links;C:\PROGRA~1\Android\ANDROI~1\jbr\bin;C:\Users\JOHNNY~1\AppData\Local\Android\Sdk\cmdline-tools\latest\bin;C:\Users\JOHNNY~1\AppData\Local\Android\Sdk\platform-tools;C:\Users\Johnny Orellana\.skill-cli\bin;C:\Users\Johnny Orellana\.ox\bin;C:\Users\Johnny Orellana\.github-mcp-rust\bin;C:\Users\Johnny Orellana\AppData\Roaming\Python\Python313\Scripts;C:\Users\Johnny Orellana\scoop\apps\neovim\current\bin;C:\Users\Johnny Orellana\scoop\apps\neovim\current\bin;"
    Write-Host "[+] PATH updated. Please restart your terminal if needed." -ForegroundColor Green
}

Write-Host "Run 'mcp-caller' to get started!" -ForegroundColor Cyan
