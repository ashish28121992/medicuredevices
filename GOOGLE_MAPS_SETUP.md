# Google Map website par kaise lagaye

## Haan, bilkul laga sakte ho

Do tareeke hain:

### 1) Embed map (recommended — abhi site me yahi use ho raha hai)

1. Phone/PC par **Google Maps** kholo.
2. Apna **business / pin** jahan tumne location add ki hai wahan **open** karo.
3. **Share** (Share button) dabao.
4. **Embed a map** tab select karo.
5. Size chuno (Medium theek rehta hai), phir **Copy HTML** ya jo **iframe** ka `src="..."` hai usme se **sirf URL** copy karo  
   - Example: `https://www.google.com/maps/embed?pb=!1m18!1m12!...`

**Project me paste kahan karein:**

- **Option A:** Root folder me `.env` file banao (ya existing me add karo):

  ```env
  VITE_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=...poora_url_yahan
  ```

  Phir dev server **restart** karo (`npm run dev`).

- **Option B:** File `src/config/contactMap.ts` me `GOOGLE_MAPS_EMBED_SRC` wali line me ye URL **direct** paste kar do (env ki zarurat nahi).

Exact pin ke liye **Option A ya B** me wahi **embed wala** URL use karo jo Google ne diya — sirf address search wala fallback se zyada accurate hota hai.

---

### 2) Sirf link (map page par nahi, sirf button)

Agar embed nahi chahiye, to sirf “Open in Google Maps” jaisa link bhi kaafi hai — Contact page par ye link already hai (`GOOGLE_MAPS_OPEN_URL` in `contactMap.ts`).

---

## API key?

- **Embed (iframe)** jo Google “Share → Embed” se milta hai: **API key zaroori nahi** hoti.
- **Maps JavaScript API** (custom JS map): Google Cloud par project + **API key** + billing — zyada kaam, zarurat padne par hi.

---

## Problem?

- Map blank dikhe: URL poora copy hua hai ya nahi check karo; `https://www.google.com/maps/embed?pb=` se start hona chahiye (embed wala).
- `.env` change ke baad **server restart** zaroori hai (Vite).
