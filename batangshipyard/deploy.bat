@echo off
REM Batang Shipyard - Vercel Deployment Script for Windows
REM This script helps deploy the application to Vercel

echo 🚢 Batang Shipyard - Vercel Deployment
echo ======================================

REM Check if vercel CLI is installed
vercel --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Vercel CLI is not installed
    echo Please install it with: npm i -g vercel
    pause
    exit /b 1
)

REM Check if user is logged in to Vercel
vercel whoami >nul 2>&1
if errorlevel 1 (
    echo ❌ Not logged in to Vercel
    echo Please login with: vercel login
    pause
    exit /b 1
)

echo ✅ Vercel CLI is ready

REM Run type checking
echo 🔍 Running type check...
npm run type-check
if errorlevel 1 (
    echo ❌ Type check failed
    pause
    exit /b 1
)

REM Run linting
echo 🔍 Running linter...
npm run lint
if errorlevel 1 (
    echo ❌ Linting failed
    pause
    exit /b 1
)

REM Build the application
echo 🏗️  Building application...
npm run build
if errorlevel 1 (
    echo ❌ Build failed
    pause
    exit /b 1
)

echo ✅ Build successful

REM Ask for deployment type
echo.
echo Choose deployment type:
echo 1) Preview deployment (vercel)
echo 2) Production deployment (vercel --prod)
set /p choice="Enter choice (1 or 2): "

if "%choice%"=="1" (
    echo 🚀 Deploying to preview...
    vercel
) else if "%choice%"=="2" (
    echo 🚀 Deploying to production...
    vercel --prod
) else (
    echo ❌ Invalid choice
    pause
    exit /b 1
)

if errorlevel 1 (
    echo ❌ Deployment failed
    pause
    exit /b 1
) else (
    echo ✅ Deployment successful!
    echo 🌐 Your site is now live on Vercel
)

pause
