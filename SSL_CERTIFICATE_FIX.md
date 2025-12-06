# SSL Certificate Error Fix Guide

## 🔴 Error: `NET::ERR_CERT_COMMON_NAME_INVALID`

This error means the SSL certificate doesn't match your domain name `toptiersolutionsllc.net`. This is a **Netlify domain configuration issue**, not a code problem.

## ✅ How to Fix This

### **Step 1: Add Domain to Netlify**

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click on your site (`top-tier-solutions`)
3. Go to **Site settings** → **Domain management**
4. Click **Add custom domain**
5. Enter: `toptiersolutionsllc.net`
6. Click **Verify**

### **Step 2: Configure DNS Records**

Netlify will show you the DNS records you need. You need to add these in your domain registrar (where you bought the domain):

#### **Required DNS Records:**

1. **A Record** (for root domain):
   - **Type:** A
   - **Name:** `@` or `toptiersolutionsllc.net`
   - **Value:** `75.2.60.5` (Netlify's IP - verify this in your Netlify dashboard)
   - **TTL:** 3600

2. **CNAME Record** (alternative, preferred by Netlify):
   - **Type:** CNAME
   - **Name:** `@` or `toptiersolutionsllc.net`
   - **Value:** `top-tier-solutions.netlify.app` (your Netlify site URL)
   - **TTL:** 3600

3. **CNAME for www** (optional but recommended):
   - **Type:** CNAME
   - **Name:** `www`
   - **Value:** `top-tier-solutions.netlify.app`
   - **TTL:** 3600

**⚠️ Important:** Some registrars don't allow CNAME on root domain. If yours doesn't, use the A record instead.

### **Step 3: Wait for DNS Propagation**

- DNS changes can take **15 minutes to 48 hours** to propagate
- Check propagation status: [whatsmydns.net](https://www.whatsmydns.net/)

### **Step 4: Request SSL Certificate**

Once DNS is configured:

1. In Netlify Dashboard → **Domain management**
2. Netlify will **automatically** provision an SSL certificate via Let's Encrypt
3. This usually takes **5-15 minutes** after DNS is verified
4. You'll see a green checkmark when the certificate is active

### **Step 5: Verify SSL Certificate**

1. In Netlify Dashboard → **Domain management**
2. Look for your domain with a **green lock icon** 🔒
3. Status should say **"SSL certificate active"**

## 🔍 Troubleshooting

### **If Certificate Still Not Working:**

1. **Check DNS Configuration:**
   ```bash
   # Run this in terminal to check DNS
   dig toptiersolutionsllc.net
   # or
   nslookup toptiersolutionsllc.net
   ```
   - Should point to Netlify's IP or your Netlify site URL
   - ✅ **Your DNS is correctly configured** (verified)

2. **Verify Domain in Netlify:**
   - Go to **Domain management**
   - Make sure `toptiersolutionsllc.net` is listed
   - **Check the SSL certificate status** - look for:
     - 🔒 Green lock = Certificate active
     - ⏳ Yellow clock = Certificate provisioning (wait 5-15 min)
     - ❌ Red X = Certificate failed (see error message)
     - ⚠️ Warning = Certificate issue (click to see details)

3. **Force Certificate Renewal/Provisioning:**
   - In Netlify Dashboard → **Domain management**
   - Click on `toptiersolutionsllc.net`
   - Look for **"Renew certificate"** or **"Provision certificate"** button
   - If certificate shows as "pending" or "failed":
     - Click **"Remove domain"** (wait 5 minutes)
     - Click **"Add custom domain"** again
     - Enter `toptiersolutionsllc.net`
     - Netlify will automatically provision SSL

4. **Check for Multiple DNS Records:**
   - Make sure you don't have conflicting A/CNAME records
   - Remove old records pointing to other services

5. **Clear Browser Cache:**
   - Clear your browser cache and cookies
   - Try incognito/private mode
   - Try a different browser

### **Common Issues:**

#### **Issue: Domain points to wrong IP**
- **Fix:** Update A record to Netlify's IP (check in Netlify dashboard)

#### **Issue: Certificate not issued after 24 hours**
- **Fix:** Remove domain from Netlify, wait 5 minutes, add it back

#### **Issue: www subdomain works but root doesn't**
- **Fix:** Make sure both `@` and `www` DNS records are configured

#### **Issue: Certificate issued but still showing error**
- **Fix:** 
  - Wait 15-30 minutes for propagation
  - Clear browser cache
  - Check if you're accessing the correct domain (no typos)

## 📋 Quick Checklist

- [x] Domain added to Netlify Dashboard ✅
- [x] DNS records configured (CNAME, NETLIFY, NETLIFYv6) ✅
- [x] DNS propagated (verified - points to Netlify) ✅
- [⏳] **DNS verification in Netlify** (currently propagating - wait 5-30 min)
- [⏳] **SSL certificate provisioning** (currently in progress - wait 5-30 min)
- [ ] SSL certificate active (green lock icon) - **IN PROGRESS**
- [ ] Test site with HTTPS after certificate is active

## 🎯 **Your Current Status:**

✅ **DNS is working correctly** - Your domain resolves to Netlify  
⏳ **DNS Status:** "Netlify DNS propagating..." (Netlify is verifying DNS)  
⏳ **SSL Status:** "Currently provisioning your Let's Encrypt certificate" (Certificate is being issued)

### **What's Happening Now:**

Both processes are **in progress** and this is **normal**:

1. **DNS Propagation** (gear icon):
   - Netlify is verifying that DNS records are correctly configured
   - This can take 5-30 minutes
   - Once complete, status will change to "Netlify DNS" with a green checkmark ✅

2. **SSL Certificate Provisioning** (gear icon):
   - Let's Encrypt is issuing your SSL certificate
   - Usually takes **a few seconds to 30 minutes**
   - Once complete, you'll see a green lock icon 🔒

### **What You Need to Do:**

**Just wait!** Both processes are automatic. Here's the timeline:

- **5-15 minutes:** Most certificates provision within this time
- **30 minutes:** If still not done, check the troubleshooting guide link in Netlify
- **After completion:** 
  - DNS status will show green checkmark ✅
  - SSL certificate will show as active 🔒
  - Your site will work with HTTPS

### **How to Check Progress:**

1. **Domain Management Page:**
   - Refresh the page every 5-10 minutes
   - Look for status to change from "propagating..." to "Netlify DNS" ✅

2. **HTTPS Settings Page:**
   - Go to **Site settings** → **HTTPS**
   - Status will change from "Currently provisioning..." to "Certificate active" 🔒

3. **Test Your Site:**
   - Try accessing `https://toptiersolutionsllc.net` in a browser
   - Once certificate is active, you'll see the green lock in the address bar

## 🆘 Still Not Working?

If after following all steps the error persists:

1. **Contact Netlify Support:**
   - Go to [Netlify Support](https://www.netlify.com/support/)
   - They can manually verify and fix certificate issues

2. **Check Domain Registrar:**
   - Some registrars have DNS caching issues
   - Try using Netlify's DNS nameservers instead:
     - In Netlify → Domain management → Use Netlify DNS
     - Update nameservers at your registrar

3. **Verify Domain Ownership:**
   - Make sure you own the domain
   - Check domain expiration date

## 📞 Need Help?

- **Netlify Docs:** [Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)
- **Netlify Support:** [support.netlify.com](https://support.netlify.com/)

---

**Note:** This is a hosting/domain configuration issue, not a code issue. Your React app code is fine! ✅

