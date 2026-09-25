@echo off
cd /d "%~dp0debby-portfolio"
set NODE_OPTIONS=--max-old-space-size=2048
echo Starting Debby Tella portfolio...
echo.
echo Open this in your browser: http://127.0.0.1:3000
echo Keep this window open while using the website.
echo Close Chrome/other apps first if the site fails to start.
echo.

if not exist ".next\BUILD_ID" (
  echo Building site first - please wait...
  call npx next build --webpack
  if errorlevel 1 (
    echo Build failed. Close Chrome and other apps, then try again.
    pause
    exit /b 1
  )
)

start "" "http://127.0.0.1:3000"
node ".\node_modules\next\dist\bin\next" start -H 127.0.0.1 -p 3000
pause
