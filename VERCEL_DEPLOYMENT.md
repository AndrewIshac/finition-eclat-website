# Deploy to Vercel - Step by Step Guide

## Step 1: Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - Finition Éclat website"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com
2. Click **New Repository** (or the + icon)
3. Repository name: `finition-eclat-website` (or any name you want)
4. Make it **Public** or **Private** (your choice)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **Create repository**

## Step 3: Push to GitHub

GitHub will show you commands. Run these in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/finition-eclat-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 4: Deploy to Vercel

1. Go to https://vercel.com
2. Sign up/Login (use GitHub to connect)
3. Click **Add New Project**
4. Import your GitHub repository: `finition-eclat-website`
5. Vercel will auto-detect it's a React app
6. **Settings:**
   - Framework Preset: **Create React App** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `build` (default)
7. Click **Deploy**

## Step 5: Connect Your Domain

After deployment:
1. Go to your project in Vercel
2. Click **Settings** → **Domains**
3. Add domain: `finitioneclat.ca`
4. Vercel will show DNS records to add
5. Go to Namecheap → Domain → Advanced DNS
6. Add the DNS records Vercel provides
7. Wait for DNS propagation (usually 5-30 minutes)

## Step 6: Update DNS in Namecheap

Since your domain is currently pointing to Wix nameservers, you have two options:

### Option A: Change Nameservers (Recommended)
1. Go to Namecheap → Domain → Manage
2. Change nameservers to Vercel's:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
3. Save and wait for propagation

### Option B: Use A Records (If you want to keep current nameservers)
1. In Namecheap → Advanced DNS
2. Add A record pointing to Vercel's IP (Vercel will provide this)
3. Add CNAME for www subdomain

## That's It! 🎉

Your site will be live at:
- `https://finitioneclat.ca` (after DNS propagates)
- `https://your-project.vercel.app` (immediately after deployment)

## Benefits of Vercel:
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Fast global CDN
- ✅ Auto-deploy on git push
- ✅ Easy domain connection
- ✅ No backend needed (EmailJS handles forms)

