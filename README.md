# Medicure Devices

Medical products showcase website with user panel. Built with React, Vite, Tailwind CSS. Deploy-ready for **AWS S3**.

## Features

- **Home** – Hero, categories, CTA
- **Products** – Listing with category filter (Monitoring, Respiratory, Diabetes Care, Mobility)
- **Product detail** – Full description, specs, price
- **User panel** – Login, Register, Dashboard, Profile (client-side auth for demo)
- **Responsive** – Mobile-first layout
- **AWS S3** – Deploy scripts and docs included

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output in `dist/`.

## Deploy on AWS S3

1. Create an S3 bucket and enable **Static website hosting** (index: `index.html`, error: `404.html`).
2. Set bucket policy for public read (see `DEPLOY-AWS.md`).
3. Deploy:

**Windows (PowerShell):**
```powershell
.\scripts\deploy-s3.ps1 -Bucket "your-bucket-name"
```

**Or manually after build:**
```bash
aws s3 sync dist/ s3://your-bucket-name/ --delete
aws s3 cp dist/index.html s3://your-bucket-name/404.html
```

Full steps and optional CloudFront/custom domain: **DEPLOY-AWS.md**.

## Tech stack

- React 19 + TypeScript
- Vite 7
- React Router 7
- Tailwind CSS 4
