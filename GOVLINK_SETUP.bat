@echo off
echo ===================================================
echo   GovLink - Instalador e Inicializador Automático
echo ===================================================
echo.
echo 1. Verificando o Node.js...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] O Node.js não foi encontrado. Por favor, instale o Node.js em: https://nodejs.org/
    pause
    exit /b
)

echo 2. Instalando dependencias (npm install)...
call npm install

echo.
echo 3. Iniciando o servidor de desenvolvimento...
echo O projecto estara disponivel em: http://localhost:5173/
echo.
call npm run dev

pause
