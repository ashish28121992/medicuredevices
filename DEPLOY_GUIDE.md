# Medicure Devices – Deploy Guide (Static Frontend)

Apna domain purchase ho chuka hai. Ab frontend ko kahan deploy karna hai aur kaise — step-by-step neeche hai.

---

## 1. Kahan deploy karein? (Best options)

| Platform      | Free tier | Custom domain | Difficulty |
|--------------|-----------|----------------|------------|
| **Vercel**   | ✅        | ✅             | Sabse aasaan |
| **Netlify**  | ✅        | ✅             | Aasaan      |
| **Cloudflare Pages** | ✅ | ✅       | Thoda technical |

**Recommendation:** **Vercel** — Vite/React ke liye best, free, aur custom domain support achha hai.

---

## 2. Pehle local pe build check karo

Terminal mein ye chalao:

```bash
npm run build
```

Agar koi error na aaye aur `dist` folder ban jaye, to deploy ke liye ready ho.

---

## 3. Vercel pe deploy (recommended)

### Option A: GitHub se deploy (best – auto update on push)

**Step 1:** Code ko GitHub pe push karo  
- GitHub.com pe account banao (agar nahi hai)  
- New repository banao  
- Local project ko Git repo banao aur push karo:

```bash
cd c:\www\medicureDevices
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/medicuredevices.git
git push -u origin main
```

**Step 2:** Vercel pe sign up  
- https://vercel.com pe jao  
- “Sign Up” → **GitHub** se login karo  

**Step 3:** Naya project banao  
- “Add New…” → “Project”  
- GitHub repo **medicuredevices** (ya jo naam diya) select karo  
- **Framework Preset:** Vite (auto detect ho sakta hai)  
- **Root Directory:** blank  
- **Build Command:** `npm run build`  
- **Output Directory:** `dist`  
- “Deploy” dabao  

**Step 4:** Custom domain add karo  
- Project open karo → **Settings** → **Domains**  
- “Add” pe click karke apna domain likho (e.g. `www.medicuredevices.com` ya `medicuredevices.com`)  
- Vercel tumhe **DNS records** bata dega  

**Step 5:** Domain provider pe DNS set karo  
- Jahan se domain liya (GoDaddy, Namecheap, Google Domains, etc.) uski **DNS / Domain** settings kholo  
- Vercel jo record batata hai (usually **A** ya **CNAME**) wahi add karo  
- Save karo — 5–30 minute mein domain live ho jata hai  

Iske baad har baar `git push` karoge to Vercel automatically naya build + deploy kar dega.

---

### Option B: Bina GitHub – direct upload (one-time deploy)

**Step 1:** Build banao  

```bash
cd c:\www\medicureDevices
npm run build
```

**Step 2:** Vercel pe jao  
- https://vercel.com → Sign up (email se bhi ho sakta hai)  

**Step 3:** “Add New…” → “Project” → **“Import Third-Party Git Repository”** skip karke  
- **“Deploy with Vercel CLI”** option pe jao  
- Neeche diya “Install Vercel CLI” follow karo  

**Step 4:** CLI se deploy  

```bash
npm i -g vercel
cd c:\www\medicureDevices
vercel
```

- Login / signup karo  
- Project name, root (current folder) confirm karo  
- Deploy complete hone ke baad ek **URL** milega (e.g. `medicuredevices.vercel.app`)  

**Step 5:** Custom domain  
- Vercel dashboard → Project → **Settings** → **Domains** → apna domain add karo  
- Domain wale site pe jaake DNS me Vercel ki di hui values add karo  

---

## 4. Netlify (alternative)

- https://netlify.com → Sign up (GitHub se ya email)  
- “Add new site” → “Import an existing project” → GitHub repo connect karo  
- **Build command:** `npm run build`  
- **Publish directory:** `dist`  
- Deploy karo  
- **Domain settings** → “Add custom domain” → apna domain likho  
- DNS me Netlify ki batayi hui **CNAME** ya **A record** add karo  

---

## 5. React Router (SPA) – important

Tumhare app me React Router hai (e.g. `/gallery`, `/about`). Agar koi direct link open kare (e.g. `yoursite.com/gallery`) to server ko `index.html` hi dena chahiye.  

- **Vercel:** Ye automatically handle karta hai, kuch extra file ki zarurat nahi.  
- **Netlify:** Root me `public/netlify.toml` ya `public/_redirects` me ek line chahiye:

```
/*    /index.html   200
```

Agar chaho to main bata sakta hoon exactly kahan file banaani hai.

---

## 6. Short checklist

- [ ] `npm run build` local pe chal raha hai  
- [ ] Code GitHub pe push (agar Option A use kar rahe ho)  
- [ ] Vercel/Netlify pe project connect + deploy  
- [ ] Custom domain add kiya  
- [ ] Domain provider pe DNS update kiya  
- [ ] 10–30 min wait karke domain open karke check kiya  

---

## 7. GoDaddy domain? → **GODADDY_DOMAIN_SETUP.md** kholo

Tumhara domain **GoDaddy** se hai to project me **GODADDY_DOMAIN_SETUP.md** file hai — usme GoDaddy DNS + Vercel connect ka full step-by-step hai. Wahi follow karo.

---

## 7b. Domain kahan se liya? (reference)

- **Namecheap / GoDaddy / etc.:** Wahi site pe “Domain” / “DNS” section me jao, Vercel/Netlify ki di hui **A** ya **CNAME** value add karo.  
- **Cloudflare (DNS):** Cloudflare me domain add karke Vercel/Netlify ke records add kar sakte ho.  

Agar batao domain kis provider se hai (Namecheap, GoDaddy, etc.) to main uske hisaab se exact steps likh sakta hoon (screenshots jaisa step-by-step).
