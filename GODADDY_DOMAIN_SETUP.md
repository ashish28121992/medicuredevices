# GoDaddy Domain → Vercel Connect (Step-by-Step)

Tumhara domain **GoDaddy** se hai. Neeche exact steps hai — pehle Vercel pe domain add karo, phir GoDaddy pe DNS set karo.

---

## Part A: Vercel pe domain add karo

1. **Vercel** pe jao → apna project kholo → **Settings** → **Domains**.
2. "Add" ya "Add Domain" pe click karo.
3. Apna domain type karo:
   - **www wala:** `www.tumharadomain.com` (e.g. `www.medicuredevices.com`)
   - **bina www:** `tumharadomain.com` (e.g. `medicuredevices.com`)
4. Dono add kar sakte ho — Vercel dono ke liye instructions dega.
5. Add karte hi Vercel tumhe **DNS records** dikhayega (CNAME, A record). In values ko copy karo — ab GoDaddy pe yehi daalna hai.

---

## Part B: GoDaddy pe DNS set karo

1. **GoDaddy** pe login karo → https://www.godaddy.com
2. **My Products** (ya **Domains**) pe jao → apna domain select karo.
3. Domain ke saamne **DNS** ya **Manage DNS** pe click karo.
4. **Records** wale section me jao (A, CNAME, etc. dikhenge).

### Sirf www chalana (e.g. www.medicuredevices.com)

| Type  | Name | Value                 | TTL  |
|-------|------|------------------------|------|
| CNAME | www  | `cname.vercel-dns.com` | 600  |

- "Add" / "Add Record" pe click karo.
- **Type:** CNAME
- **Name:** `www`
- **Value** ya **Points to:** `cname.vercel-dns.com`
- Save karo.

### Root domain bhi chalana (medicuredevices.com bina www)

Vercel jo batata hai wahi use karo. Usually:

| Type  | Name | Value                 | TTL  |
|-------|------|------------------------|------|
| A     | @    | `76.76.21.21`          | 600  |
| CNAME | www  | `cname.vercel-dns.com` | 600  |

- **A record:** Name = `@`, Value = `76.76.21.21` (Vercel ki latest value dashboard me check karo)
- **CNAME:** Name = `www`, Value = `cname.vercel-dns.com`
- Purane conflicting records (www ya @ ke) delete kar do, sirf ye add karo. Save karo.

DNS update me 5–30 minute (kabhi 1–2 ghante) lag sakte hain.

---

## Part C: Vercel pe verify karo

1. **Vercel** → Project → **Settings** → **Domains** pe jao.
2. Domain ke saamne status **"Valid Configuration"** aane tak wait karo.
3. Browser me `https://tumharadomain.com` aur `https://www.tumharadomain.com` open karke check karo.

---

## GoDaddy quick checklist

- [ ] GoDaddy → My Products → domain → **DNS** / **Manage DNS**
- [ ] **CNAME** add: Name = `www`, Value = `cname.vercel-dns.com`
- [ ] (Optional) **A record** add: Name = `@`, Value = `76.76.21.21`
- [ ] Purane conflicting records delete kiye, Save kiya
- [ ] 10–30 min wait, phir Vercel pe status check kiya

---

## GoDaddy screen pe kya dikhega

- **DNS Management** / **Manage DNS** → table me **Type**, **Name**, **Value**, **TTL** columns honge.
- **Add** ya **Add Record** button se naya CNAME ya A record add karte ho.
- Name me `www` likhoge to www wala domain point karega; `@` root domain (bina www) ke liye hota hai.
