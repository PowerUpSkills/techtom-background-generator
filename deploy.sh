#!/bin/bash

# TechTOM Background Generator - GitHub Pages Deployment Script
# Run this script from the project directory to deploy to GitHub Pages

echo "🚀 TechTOM Background Generator - GitHub Pages Deployment"
echo "========================================================="

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    
    echo "📝 Adding files..."
    git add .
    
    echo "💾 Creating initial commit..."
    git commit -m "Initial commit: TechTOM Background Generator"
    
    echo "🌐 Please create a repository on GitHub named 'techtom-background-generator'"
    echo "📋 Then run these commands:"
    echo ""
    echo "git remote add origin https://github.com/YOUR_USERNAME/techtom-background-generator.git"
    echo "git branch -M main"
    echo "git push -u origin main"
    echo ""
    echo "🔧 After pushing, enable GitHub Pages in repository settings:"
    echo "   Settings > Pages > Source: Deploy from a branch > main > / (root)"
    echo ""
else
    echo "📝 Adding changes..."
    git add .
    
    echo "💾 Committing changes..."
    git commit -m "Update TechTOM Background Generator - $(date)"
    
    echo "🚀 Pushing to GitHub..."
    git push
    
    echo "✅ Deployment complete!"
    echo "🌐 Your site should be available at: https://YOUR_USERNAME.github.io/techtom-background-generator"
fi

echo ""
echo "📋 Required files checklist:"
echo "   ✅ index.html (created)"
echo "   ✅ app.js (created)"
echo "   ✅ README.md (created)"
echo "   ❗ Supporter.jpg (you need to add this)"
echo "   ❗ Fredoka-VariableFont_wdth,wght.ttf (you need to add this)"
echo ""
echo "🔧 Don't forget to:"
echo "   1. Copy your Supporter.jpg file to this directory"
echo "   2. Copy your Fredoka font file to this directory"
echo "   3. Push the updated files to GitHub"