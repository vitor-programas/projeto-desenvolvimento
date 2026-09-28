@echo off
echo Iniciando backend (porta 3000) e frontend (porta 3001)...
start "Backend" cmd /k "cd /d %~dp0backend && npm install && node server.js"
start "Frontend" cmd /k "cd /d %~dp0frontend && npm install && npm run dev"
echo Quando os dois terminais terminarem de subir, abra http://localhost:3001
pause
