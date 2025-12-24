# DNS Troubleshooting - finitioneclat.ca

## Current Issue
- 24+ hours passed
- DNS only showing in France (getting worse)
- Vercel shows "Invalid Configuration"

## Step 1: Verify Nameservers in Namecheap

1. Go to Namecheap → **Domain List**
2. Click **Manage** next to `finitioneclat.ca`
3. Scroll to **Nameservers** section
4. **Check what it currently shows:**
   - Should be: `ns1.vercel-dns.com` and `ns2.vercel-dns.com`
   - If it shows something else (like Wix nameservers), that's the problem!

## Step 2: If Nameservers Are Wrong

If nameservers are NOT set to Vercel's:
1. Click **Change** or **Custom DNS**
2. Select **Custom DNS**
3. Enter:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
4. Click **Save**
5. Wait 5-10 minutes, then check again

## Step 3: Alternative - Use DNS Records Instead

If nameservers keep failing, use DNS records instead:

### In Namecheap:
1. Go to **Domain List** → **Manage** → **Advanced DNS**
2. Make sure nameservers are set to **Namecheap BasicDNS** (not Vercel)
3. Remove ALL existing A records and CNAME records
4. Add these NEW records:

**For root domain (finitioneclat.ca):**
- Type: **A Record**
- Host: `@`
- Value: `76.76.21.21` (or the IP Vercel provides)
- TTL: Automatic

**For www (www.finitioneclat.ca):**
- Type: **CNAME Record**
- Host: `www`
- Value: `cname.vercel-dns.com` (or what Vercel shows)
- TTL: Automatic

### In Vercel:
1. Go to your project → **Settings** → **Domains**
2. Remove the domain if it's there
3. Add it again: `finitioneclat.ca`
4. Vercel will show you the EXACT DNS records to add
5. Copy those EXACT values to Namecheap

## Step 4: Verify Domain is Unlocked

1. In Namecheap → **Domain** → **Domain Lock**
2. Make sure it's **Unlocked** (not locked)
3. If locked, unlock it

## Step 5: Check Vercel Domain Status

1. Go to Vercel → Your Project → **Settings** → **Domains**
2. Check if `finitioneclat.ca` shows any error messages
3. If it says "Invalid Configuration", click on it to see what's wrong

## Step 6: Test DNS Manually

Run this command in terminal to check DNS:
```bash
nslookup finitioneclat.ca
```

Or check online:
- https://www.whatsmydns.net/#NS/finitioneclat.ca
- https://dnschecker.org/#NS/finitioneclat.ca

## Most Common Issues:

1. **Nameservers not saved properly** - Most common!
2. **Domain locked** - Prevents DNS changes
3. **Conflicting DNS records** - Old records interfering
4. **Wrong DNS records** - Typo in the values

## Quick Fix to Try:

1. In Namecheap, change nameservers to **Namecheap BasicDNS** (temporarily)
2. Wait 10 minutes
3. Change back to Vercel nameservers: `ns1.vercel-dns.com` and `ns2.vercel-dns.com`
4. Save and wait

This "resets" the DNS and can fix stuck propagation.

