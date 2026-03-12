# GitHub Push – Step by Step

Terminal me **C:\www\medicureDevices** folder me rehkar ye commands ek ek karke chalao.

---

## Step 1: Git me apna naam aur email set karo (sirf ek baar)

Apna **naam** aur **email** (GitHub wala use karo) daalo:

```powershell
.\git config --global user.email "your-email@example.com"
.\git config --global user.name "Your Name"
```

Example (apna email/naam daalna hai):
```powershell
.\git config --global user.email "ashish@gmail.com"
.\git config --global user.name "Ashish Tiwari"
```

---

## Step 2: Sab files add karo

```powershell
.\git add .
```

---

## Step 3: Pehla commit banao

```powershell
.\git commit -m "Initial commit"
```

---

## Step 4: Branch naam main karo (agar pehle se main nahi hai)

```powershell
.\git branch -M main
```

---

## Step 5: Remote add karo (agar pehle add nahi kiya)

```powershell
.\git remote add origin https://github.com/ashish28121992/medicureDevices.git
```

Agar "already exists" aaye to skip karo.

---

## Step 6: Push karo

```powershell
.\git push -u origin main
```

GitHub pe login / authentication maange to browser open hoga ya token maangega — wahi complete karo.

---

## Agar Step 3 me "Author identity unknown" aaye

Matlab Step 1 sahi se nahi chala. Dubara run karo:

```powershell
.\git config --global user.email "apna-email@example.com"
.\git config --global user.name "Apna Naam"
```

Phir Step 2 se repeat karo.
