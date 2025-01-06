@echo off
setlocal

REM Získání aktuálního data a času
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set "year=%datetime:~0,4%"
set "month=%datetime:~4,2%"
set "day=%datetime:~6,2%"
set "hour=%datetime:~8,2%"
set "minute=%datetime:~10,2%"

REM Vytvoření názvu PR
set "pr_name=Auto-update_%year%-%month%-%day%_%hour%-%minute%"

REM Provedení git příkazů
git pull public master
git push origin master

REM Vytvoření PR pomocí gh CLI (GitHub CLI)
gh pr create --title "%pr_name%" --body "Automaticky vytvořený PR pro aktualizaci main větve."

echo PR "%pr_name%" byl vytvořen.

endlocal