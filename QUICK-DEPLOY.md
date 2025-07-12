# ⚡ Quick GitHub Pages Deployment

## 🚀 Fastest Way to Deploy

### Option 1: Automated Script (Recommended)
```bash
./setup-github.sh
```
Just run this script and follow the prompts!

### Option 2: Manual Steps

1. **Create GitHub Repository**
   - Go to GitHub.com → New Repository
   - Name: `cv-form-app`
   - Make it **Public**
   - Don't initialize with files

2. **Update Username in package.json**
   ```bash
   # Replace 'yourusername' with your actual GitHub username
   sed -i.bak "s/yourusername/YOUR_ACTUAL_USERNAME/g" package.json
   ```

3. **Deploy**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/cv-form-app.git
   git branch -M main
   git push -u origin main
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

## 🌐 Your Website URL
**https://YOUR_USERNAME.github.io/cv-form-app**

## ✅ What Works
- ✅ Complete CV form
- ✅ Responsive design
- ✅ All form sections
- ✅ Add/Remove functionality
- ✅ Form validation
- ✅ Beautiful UI

## 🔄 Update Website
```bash
git add .
git commit -m "Update"
git push
npm run deploy
```

## 🎉 Done!
Your CV form is now live and ready for testing! 🚀 