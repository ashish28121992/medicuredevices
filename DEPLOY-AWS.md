# AWS S3 par Medicure Devices deploy karna

## 1. S3 bucket banao

1. AWS Console → S3 → Create bucket
2. Bucket name: e.g. `medicure-devices` (unique hona chahiye)
3. Region apni pasand choose karo
4. **Block Public Access** settings: "Allow public access" (bucket public static site ke liye)
5. Create bucket

## 2. Static website hosting enable karo

1. Bucket par click → **Properties** tab
2. **Static website hosting** → Edit
3. Enable: **Host a static website**
4. Index document: `index.html`
5. **Error document**: `404.html` (ye important hai – isse hi React Router ki saari routes kaam karti hain)
6. Save

## 3. Bucket policy (public read)

1. Bucket → **Permissions** → **Bucket policy** → Edit
2. Neeche wali policy use karo (apna `BUCKET_NAME` replace karo):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::BUCKET_NAME/*"
        }
    ]
}
```

3. Save

## 4. Build aur upload

### Option A: PowerShell script (Windows)

```powershell
.\scripts\deploy-s3.ps1 -Bucket "medicure-devices"
```

### Option B: Manual commands

```bash
npm run build
aws s3 sync dist/ s3://YOUR_BUCKET_NAME/ --delete
aws s3 cp dist/index.html s3://YOUR_BUCKET_NAME/404.html
```

### Option C: package.json script

`package.json` mein `deploy` script mein `YOUR_BUCKET_NAME` ko apne bucket name se replace karo, phir:

```bash
npm run deploy
```

## 5. Site URL

Properties → Static website hosting → **Bucket website endpoint**  
Example: `http://medicure-devices.s3-website.ap-south-1.amazonaws.com`

---

## Optional: Custom domain + HTTPS (CloudFront)

Agar custom domain (e.g. `www.medicuredevices.com`) aur HTTPS chahiye:

1. AWS Certificate Manager se certificate banao (domain verify karo)
2. CloudFront distribution banao:
   - Origin: apna S3 bucket (website endpoint)
   - Default Root Object: `index.html`
   - Error pages: 403 → 200, response page `/index.html` (SPA ke liye)
   - Alternate domain (CNAME) + certificate attach karo
3. Domain ke DNS mein CloudFront ka CNAME add karo

Isse baad production URL: `https://www.medicuredevices.com` jaisa hoga.
