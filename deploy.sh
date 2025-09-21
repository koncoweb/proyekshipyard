#!/bin/bash

# Batang Shipyard - Vercel Deployment Script
# This script helps deploy the application to Vercel

echo "🚢 Batang Shipyard - Vercel Deployment"
echo "======================================"

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed"
    echo "Please install it with: npm i -g vercel"
    exit 1
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo "❌ Not logged in to Vercel"
    echo "Please login with: vercel login"
    exit 1
fi

echo "✅ Vercel CLI is ready"

# Run type checking
echo "🔍 Running type check..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ Type check failed"
    exit 1
fi

# Run linting
echo "🔍 Running linter..."
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ Linting failed"
    exit 1
fi

# Build the application
echo "🏗️  Building application..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build successful"

# Ask for deployment type
echo ""
echo "Choose deployment type:"
echo "1) Preview deployment (vercel)"
echo "2) Production deployment (vercel --prod)"
read -p "Enter choice (1 or 2): " choice

case $choice in
    1)
        echo "🚀 Deploying to preview..."
        vercel
        ;;
    2)
        echo "🚀 Deploying to production..."
        vercel --prod
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your site is now live on Vercel"
else
    echo "❌ Deployment failed"
    exit 1
fi
