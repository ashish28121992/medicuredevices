# Medicure Devices – Jo files banayi hain (saari list)

Left side **Explorer** mein ye saari files dikhni chahiye. Neeche exact list hai.

---

## Root folder (`medicureDevices/`)

| File | Kaam |
|------|------|
| `index.html` | App ka main HTML, title, favicon |
| `package.json` | Dependencies, scripts (dev, build, deploy) |
| `tsconfig.json` | TypeScript config |
| `vite.config.ts` | Vite + React + Tailwind config |
| `README.md` | Project docs |
| `DEPLOY-AWS.md` | AWS S3 deploy steps |
| `PROJECT-FILES-LIST.md` | Ye file – saari files ki list |

---

## `src/`

| File | Kaam |
|------|------|
| `main.tsx` | App entry, Router + AuthProvider |
| `App.tsx` | Routes (Home, Products, Login, Dashboard, etc.) |
| `index.css` | Tailwind + theme (mint, slate colors) |

---

## `src/components/`

| File | Kaam |
|------|------|
| `Layout.tsx` | Navbar + main content + Footer |
| `Navbar.tsx` | Top menu, links, Login/Logout |
| `Footer.tsx` | Footer links, contact |

---

## `src/pages/`

| File | Kaam |
|------|------|
| `Home.tsx` | Home – hero, categories, CTA |
| `Products.tsx` | Products list + category filter |
| `ProductDetail.tsx` | Single product – image, price, specs |
| `Login.tsx` | Login form |
| `Register.tsx` | Register form |
| `Dashboard.tsx` | User dashboard (login ke baad) |
| `Profile.tsx` | Profile edit (name, email, phone) |

---

## `src/context/`

| File | Kaam |
|------|------|
| `AuthContext.tsx` | Login/Register/Logout state (user panel) |

---

## `src/data/`

| File | Kaam |
|------|------|
| `products.ts` | Medical products list + getProductById, categories |

---

## `public/`

| File | Kaam |
|------|------|
| `favicon.svg` | Site icon (mint green) |

---

## `scripts/`

| File | Kaam |
|------|------|
| `deploy-s3.ps1` | AWS S3 par deploy karne ka PowerShell script |

---

**Total:** 22 project files (excluding `node_modules` aur `dist`).

Left side **Explorer** mein folder expand karo (`src` → `pages`, `components`, etc.) – ye saari files wahi dikhengi.
