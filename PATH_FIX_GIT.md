# Git PATH Fix (Windows) – Manual Steps

Jab bhi terminal me `git` likhne pe "not recognized" aaye, neeche steps follow karo. Ek baar sahi se add ho jaye to phir har naye terminal me `git` chalega.

---

## Method 1: Windows Settings se PATH add karo (recommended)

1. **Windows key** dabao, type karo: **environment variables**
2. **"Edit the system environment variables"** open karo
3. Neeche **"Environment Variables..."** button pe click karo
4. **User variables** (upar wala box) me **Path** select karo → **Edit** pe click karo
5. **New** pe click karo aur ye exactly paste karo:
   ```
   C:\Program Files\Git\bin
   ```
6. **OK** → **OK** → **OK** sab band karo
7. **Cursor ko bilkul band karke dubara kholo** (sirf terminal nahi, pura app restart)
8. Naya terminal kholo, type karo: `git --version` — version dikhna chahiye

---

## Method 2: Project me git.cmd use karo (jab tak PATH fix na ho)

Is project me **git.cmd** file hai. Isse aise use kar sakte ho:

```powershell
cd C:\www\medicureDevices

.\git.cmd init
.\git.cmd add .
.\git.cmd commit -m "Initial commit"
.\git.cmd remote add origin https://github.com/YOUR_USERNAME/medicuredevices.git
.\git.cmd push -u origin main
```

Har jagah `git` ki jagah `.\git.cmd` likhna hai (sirf is project folder me).

---

## Check: Git sahi jagah pe hai?

Agar Git kahin aur install hai to pehle ye path check karo — File Explorer me jao:

- `C:\Program Files\Git\bin\git.exe` — yahan hai to upar wala path sahi hai
- Agar nahi hai to **Program Files** me **Git** folder dhundho, uske andar **bin** folder me **git.exe** ka full path copy karke PATH me wahi add karo
