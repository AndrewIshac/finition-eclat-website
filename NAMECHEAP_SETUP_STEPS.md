# Namecheap Setup Steps for finitioneclat.ca

## Current Status
- Domain: finitioneclat.ca ✅
- Nameservers: Currently pointing to Wix (ns10.wixdns.net, ns11.wixdns.net)
- Need to: Change to Namecheap nameservers to host your React website

## Step 1: Check if You Have Namecheap Hosting

### Option A: You Have Namecheap Hosting
If you already purchased hosting from Namecheap:
1. Go to **Hosting List** in your Namecheap account
2. Find your domain or hosting package
3. Note your nameservers (usually something like):
   - `dns1.registrar-servers.com`
   - `dns2.registrar-servers.com`
   - OR specific hosting nameservers

### Option B: You DON'T Have Namecheap Hosting Yet
You need to purchase hosting first:
1. Go to Namecheap → **Hosting** → **Shared Hosting**
2. Choose a plan (Stellar, Stellar Plus, or Stellar Business)
3. Select your domain: finitioneclat.ca
4. Complete purchase
5. Wait for setup (usually 15-30 minutes)

## Step 2: Change Nameservers

Once you have hosting, change nameservers:

1. Go to **Domain List** → Click **Manage** next to finitioneclat.ca
2. Scroll to **Nameservers** section
3. Click **Change** or **Custom DNS**
4. Select **Namecheap BasicDNS** or enter your hosting nameservers
5. Click **Save**

**Default Namecheap Nameservers (if using BasicDNS):**
- `dns1.registrar-servers.com`
- `dns2.registrar-servers.com`

**OR use your hosting-specific nameservers** (check your hosting package for exact nameservers)

## Step 3: Wait for DNS Propagation
- Changes can take 24-48 hours (usually much faster, 1-4 hours)
- You can check status at: https://www.whatsmydns.net/

## Step 4: Access cPanel

Once nameservers are updated:
1. Go to **Hosting List** → Select your domain
2. Click **Manage** → **cPanel**
3. You'll see your hosting dashboard

## Step 5: Upload Your Website

1. In cPanel, open **File Manager**
2. Navigate to `public_html/` folder
3. Upload ALL contents from your `build/` folder
4. Make sure `.htaccess` file is uploaded

## Quick Checklist

- [ ] Do you have Namecheap hosting? (Check Hosting List)
- [ ] If no, purchase hosting
- [ ] Change nameservers from Wix to Namecheap
- [ ] Wait for DNS propagation (check whatsmydns.net)
- [ ] Access cPanel
- [ ] Upload website files to public_html/

## Need Help?

**If you don't have hosting:**
- Purchase from Namecheap → Hosting → Shared Hosting
- Choose Stellar plan (cheapest, good for this site)

**If you have hosting but don't see it:**
- Check Hosting List in your account
- Contact Namecheap support

**If nameservers won't change:**
- Make sure domain is unlocked
- Wait a few minutes and try again
- Contact Namecheap support if needed

