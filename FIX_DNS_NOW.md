# Fix DNS Configuration - Step by Step

## Current Problem:
- Nameservers are correct ✅
- But Vercel shows "Invalid Configuration" ❌
- 24+ hours and still not working

## Solution: Switch to DNS Records Method

### Step 1: Change Nameservers Back to Namecheap

1. Go to **Namecheap** → **Domain List** → **Manage** → `finitioneclat.ca`
2. Scroll to **Nameservers** section
3. Change from **Custom DNS** to **Namecheap BasicDNS**
4. Click **Save**
5. Wait 5 minutes

### Step 2: Remove Domain from Vercel (Temporarily)

1. Go to **Vercel** → Your Project → **Settings** → **Domains**
2. Click on `finitioneclat.ca`
3. Click **Remove** (don't worry, we'll add it back)
4. Also remove `www.finitioneclat.ca` if it's there
5. Wait 2 minutes

### Step 3: Add DNS Records in Namecheap

1. Go to **Namecheap** → **Domain List** → **Manage** → **Advanced DNS**
2. **Remove ALL existing A records and CNAME records** (if any)
3. Add these NEW records:

**CNAME Record for www:**
- Type: `CNAME Record`
- Host: `www`
- Value: `461c1de4a36aa4ce.vercel-dns-017.com.` (exactly as Vercel shows)
- TTL: `Automatic`
- Click the checkmark to save

**A Record for root domain (if Vercel shows one):**
- Check Vercel - if it shows an A record, add it
- If it only shows CNAME for www, skip this

4. Click **Save All Changes**

### Step 4: Add Domain Back to Vercel

1. Go back to **Vercel** → Your Project → **Settings** → **Domains**
2. Click **Add** or **Add Domain**
3. Enter: `finitioneclat.ca`
4. Click **Add**
5. Vercel will verify the DNS records
6. Wait 5-10 minutes

### Step 5: Add www Subdomain

1. In Vercel → **Domains** section
2. Click **Add** again
3. Enter: `www.finitioneclat.ca`
4. Click **Add**

### Step 6: Verify

- Wait 10-30 minutes
- Check Vercel - should show "Valid Configuration" ✅
- Visit: https://finitioneclat.ca
- Visit: https://www.finitioneclat.ca

## Why This Works:

- DNS records method is more reliable than nameservers
- Faster verification (10-30 min vs hours)
- Easier to troubleshoot
- Vercel can verify immediately when records match

## If Still Not Working After 30 Minutes:

1. Double-check the CNAME value matches EXACTLY (no extra spaces)
2. Make sure TTL is set to "Automatic" or lowest value
3. Try clearing your browser cache
4. Check: https://www.whatsmydns.net/#CNAME/www.finitioneclat.ca

