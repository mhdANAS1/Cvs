#!/bin/bash

echo "🚀 GitHub Pages Setup Script for CV Form App"
echo "=============================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Prerequisites check passed!"

# Get GitHub username
echo ""
echo "📝 Please enter your GitHub username:"
read github_username

if [ -z "$github_username" ]; then
    echo "❌ Username cannot be empty. Please run the script again."
    exit 1
fi

echo "✅ Username: $github_username"

# Update package.json with correct homepage
echo "🔧 Updating package.json with your GitHub username..."
sed -i.bak "s/yourusername/$github_username/g" package.json

# Add all files to git
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Initial commit: CV Form Application with GitHub Pages setup"

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "🔄 Updating existing remote..."
    git remote set-url origin "https://github.com/$github_username/cv-form-app.git"
else
    echo "🔗 Adding GitHub remote..."
    git remote add origin "https://github.com/$github_username/cv-form-app.git"
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo ""
echo "🎉 Setup Complete!"
echo "=================="
echo "✅ Repository created and pushed to GitHub"
echo "✅ Application deployed to GitHub Pages"
echo ""
echo "🌐 Your CV Form is now live at:"
echo "   https://$github_username.github.io/cv-form-app"
echo ""
echo "📋 Next Steps:"
echo "1. Go to your GitHub repository"
echo "2. Click 'Settings' tab"
echo "3. Scroll to 'Pages' section"
echo "4. Select 'gh-pages' branch as source"
echo "5. Click 'Save'"
echo ""
echo "🔗 Repository URL: https://github.com/$github_username/cv-form-app"
echo ""
echo "Happy coding! 🚀" 