# 🚀 Deployment Guide for Hostinger

This guide will help you deploy your CV Form application to Hostinger hosting platform.

## 📋 Prerequisites

- Hostinger hosting account
- File Manager access or FTP credentials
- Domain name (optional, can use subdomain)

## 🛠️ Deployment Methods

### Method 1: Using Hostinger File Manager (Recommended)

#### Step 1: Prepare Your Files
Your production build is already ready in the `build` folder. The build contains:
- `index.html` - Main HTML file
- `static/` folder - CSS, JavaScript, and assets
- `manifest.json` - PWA manifest
- `robots.txt` - SEO file
- `favicon.ico` - Website icon

#### Step 2: Access Hostinger Control Panel
1. Log in to your Hostinger account
2. Go to your hosting control panel
3. Navigate to "File Manager"

#### Step 3: Upload Files
1. In File Manager, navigate to the `public_html` folder (or your domain's root folder)
2. **Important**: Delete any existing `index.html` file if present
3. Upload all contents from the `build` folder to `public_html`
4. Make sure `index.html` is in the root directory

#### Step 4: Configure .htaccess (Optional but Recommended)
Create a `.htaccess` file in your `public_html` folder with this content:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/ico "access plus 1 year"
    ExpiresByType image/icon "access plus 1 year"
    ExpiresByType text/plain "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType text/xml "access plus 1 month"
    ExpiresByType application/xml "access plus 1 month"
    ExpiresByType application/xml+rss "access plus 1 month"
    ExpiresByType application/atom+xml "access plus 1 month"
    ExpiresByType text/javascript "access plus 1 month"
</IfModule>
```

### Method 2: Using FTP/SFTP

#### Step 1: Get FTP Credentials
1. In Hostinger control panel, go to "Files" → "FTP Accounts"
2. Create a new FTP account or use existing credentials
3. Note down: Hostname, Username, Password, Port

#### Step 2: Use FTP Client
1. Download and install an FTP client (FileZilla, WinSCP, etc.)
2. Connect using your FTP credentials
3. Navigate to `public_html` folder
4. Upload all contents from the `build` folder

### Method 3: Using Git (Advanced)

If you have Git hosting enabled:

1. Push your code to a Git repository
2. In Hostinger, go to "Git" in the control panel
3. Connect your repository
4. Set the deployment path to `public_html`
5. Deploy automatically on push

## 🌐 Domain Configuration

### Using Custom Domain
1. In Hostinger control panel, go to "Domains"
2. Add your domain or use existing one
3. Point it to your hosting account
4. Wait for DNS propagation (up to 24 hours)

### Using Subdomain
1. Go to "Subdomains" in control panel
2. Create a new subdomain (e.g., `cv.yourdomain.com`)
3. Point it to `public_html` folder

## ✅ Post-Deployment Checklist

- [ ] Website loads correctly at your domain
- [ ] All form sections are working
- [ ] Responsive design works on mobile
- [ ] No console errors in browser
- [ ] SSL certificate is active (https://)
- [ ] Page load speed is acceptable

## 🔧 Troubleshooting

### Common Issues:

1. **404 Errors on Refresh**
   - Solution: Add the `.htaccess` file mentioned above

2. **Assets Not Loading**
   - Check if all files are uploaded to correct location
   - Verify file permissions (644 for files, 755 for folders)

3. **Slow Loading**
   - Enable compression in `.htaccess`
   - Check if images are optimized
   - Consider using CDN

4. **Mixed Content Errors**
   - Ensure SSL certificate is properly configured
   - Check for http:// links in your code

### Performance Optimization:

1. **Enable Gzip Compression** (included in .htaccess above)
2. **Set Browser Caching** (included in .htaccess above)
3. **Optimize Images** (already done in build)
4. **Use CDN** (optional, for better global performance)

## 📱 Testing Your Deployment

After deployment, test:
- [ ] Desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)
- [ ] Form functionality
- [ ] Responsive design
- [ ] Page load speed

## 🔄 Updating Your Application

To update your deployed application:

1. Make changes to your code
2. Run `npm run build` locally
3. Upload the new `build` folder contents to replace old files
4. Clear browser cache if needed

## 📞 Hostinger Support

If you encounter issues:
1. Check Hostinger's knowledge base
2. Contact Hostinger support
3. Check your hosting plan limits
4. Verify domain DNS settings

## 🎉 Success!

Your CV Form application should now be live on Hostinger! 

**Your website URL will be:**
- `https://yourdomain.com` (if using custom domain)
- `https://yourdomain.com/cv-form-app` (if uploaded to subfolder)
- `https://username.hostinger.com` (if using free hosting)

Remember to test all functionality after deployment! 