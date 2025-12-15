# Deployment Instructions for Namecheap

## Step 1: Build is Complete ✅
Your production build is ready in the `build/` folder.

## Step 2: Access Your Namecheap Hosting

### Option A: Using cPanel File Manager
1. Log in to your Namecheap account
2. Go to **Hosting List** → Select your domain
3. Click **Manage** → **cPanel**
4. Open **File Manager**

### Option B: Using FTP
1. Get your FTP credentials from Namecheap cPanel
2. Use an FTP client (FileZilla, WinSCP, etc.)
3. Connect using your FTP details

## Step 3: Upload Files

### Important: Upload to the correct directory!

**For main domain (yourdomain.com):**
- Upload ALL contents of the `build/` folder to: `public_html/`

**For subdomain (www.yourdomain.com):**
- Upload to: `public_html/www/` or `public_html/subdomain/`

### What to upload:
- Upload ALL files and folders from the `build/` folder
- This includes:
  - `index.html`
  - `static/` folder (with all JS and CSS files)
  - `.htaccess` file (already created for you)
  - Any other files in the build folder

### ⚠️ Important Notes:
- **DO NOT** upload the `build` folder itself, only its CONTENTS
- **DO NOT** delete existing files unless you're sure
- Make a backup of your current `public_html` folder first!

## Step 4: Verify .htaccess File

The `.htaccess` file is already in your `build/` folder. It ensures React Router works correctly.

If it's not there after upload, create it in `public_html/` with this content:
```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

## Step 5: Test Your Website

1. Visit your domain: `https://yourdomain.com`
2. Test navigation between pages
3. Test the contact form
4. Check mobile responsiveness

## Step 6: SSL Certificate (If Needed)

If your site shows "Not Secure":
1. Go to cPanel → **SSL/TLS Status**
2. Install a free SSL certificate (Let's Encrypt)
3. Force HTTPS redirect if needed

## Troubleshooting

### Pages show 404 error:
- Make sure `.htaccess` file is uploaded
- Check that mod_rewrite is enabled on your server

### Images not loading:
- Check that image paths start with `/images/` (not `images/`)
- Verify all image files are in `public_html/static/` or `public_html/images/`

### Contact form not working:
- Make sure EmailJS credentials are correct
- Check browser console for errors

### Site shows blank page:
- Check browser console for errors
- Verify all files were uploaded correctly
- Make sure `index.html` is in the root directory

## Need Help?

If you encounter issues:
1. Check browser console (F12) for errors
2. Verify all files uploaded correctly
3. Check Namecheap hosting documentation
4. Contact Namecheap support if needed

---

**Your build folder is ready at:** `build/`

**Next step:** Upload contents of `build/` folder to `public_html/` on Namecheap

