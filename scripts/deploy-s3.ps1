# Medicure Devices - Deploy to AWS S3
# Usage: .\scripts\deploy-s3.ps1 -Bucket "your-bucket-name"
# Prerequisite: AWS CLI installed and configured (aws configure)

param(
    [Parameter(Mandatory=$true)]
    [string]$Bucket
)

$ErrorActionPreference = "Stop"

Write-Host "Building project..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Uploading to S3 bucket: $Bucket" -ForegroundColor Cyan
# Upload assets with long cache (filenames are hashed)
aws s3 sync dist/ "s3://$Bucket/" --delete `
    --cache-control "public, max-age=31536000, immutable" `
    --exclude "index.html" `
    --exclude "*.html"

# Upload index.html with no-cache so users get latest on refresh
aws s3 cp dist/index.html "s3://$Bucket/index.html" --cache-control "no-cache"

# SPA: upload index.html as 404.html for S3 static site hosting (so /products/1 etc. work)
aws s3 cp dist/index.html "s3://$Bucket/404.html" --cache-control "no-cache"

Write-Host "Deploy complete. Enable static website hosting on bucket and set Error document to 404.html for SPA routing." -ForegroundColor Green
