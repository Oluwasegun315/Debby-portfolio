@echo off
cd /d "%~dp0"
echo Pushing Debby portfolio updates to GitHub...
echo.

git add -A
git status

set /p MSG="Commit message (or press Enter for default): "
if "%MSG%"=="" set MSG=Update Debby portfolio content

git commit -m "%MSG%"
if errorlevel 1 (
  echo Nothing new to commit, or commit failed.
) else (
  echo Commit created.
)

git push -u origin master
if errorlevel 1 (
  echo.
  echo Push failed. Check your GitHub login, then run this file again.
  pause
  exit /b 1
)

echo.
echo Done. GitHub is updated: https://github.com/Oluwasegun315/Debby-portfolio
pause
