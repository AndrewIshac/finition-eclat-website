# Using DNS Records Instead of Nameservers (More Reliable)

If nameservers aren't working, use DNS records instead. This is often more reliable.

## Step 1: Change Nameservers Back to Namecheap

1. Go to Namecheap → **Domain List** → **Manage** → `finitioneclat.ca`
2. Scroll to **Nameservers**
3. Change to **Namecheap BasicDNS** (default Namecheap nameservers)
4. Save

## Step 2: Get DNS Records from Vercel

1. Go to Vercel → Your Project → **Settings** → **Domains**
2. Click **Add** or edit `finitioneclat.ca`
3. Vercel will show you DNS records like:
   - **A Record** for root domain
   - **CNAME Record** for www subdomain
4. **Copy these EXACT values**

## Step 3: Add DNS Records in Namecheap

1. Go to Namecheap → **Domain List** → **Manage** → **Advanced DNS**
2. **Remove ALL existing A records and CNAME records** (if any)
3. Add the records Vercel provided:

### Example (your values might be different):

**A Record (for finitioneclat.ca):**
- Type: `A Record`
- Host: `@`
- Value: `76.76.21.21` (or IP Vercel shows)
- TTL: `Automatic`

**CNAME Record (for www.finitioneclat.ca):**
- Type: `CNAME Record`
- Host: `www`
- Value: `cname.vercel-dns.com` (or what Vercel shows)
- TTL: `Automatic`

4. Click **Save All Changes**

## Step 4: Wait and Verify

- Wait 10-30 minutes
- Check: https://www.whatsmydns.net/#A/finitioneclat.ca
- Visit: https://finitioneclat.ca

## Why This Works Better:

- ✅ More reliable than nameservers
- ✅ Faster propagation
- ✅ Easier to troubleshoot
- ✅ You keep control of DNS

