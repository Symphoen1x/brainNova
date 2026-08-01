# Code Citations

## License: unknown
https://github.com/Polymer/old-docs-site/blob/27c3481e365081a0166099e07206f1a1f7bd76f0/app/3.0/start/toolbox/deploy.md

```


# Langkah-Langkah Deploy Proyek ke Firebase

Berikut langkah lengkap untuk deploy proyek **Brainova** ke Firebase Hosting:

---

## 1. Prasyarat

### Install Node.js & npm
Pastikan Node.js sudah terinstall:
```bash
node -v
npm -v
```

### Install Firebase CLI
```bash
npm install -g firebase-tools
```

---

## 2. Login ke Firebase

```bash
firebase login
```
Browser akan terbuka untuk autentikasi akun Google kamu.

---

## 3. Buat Project di Firebase Console

1. Buka [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Klik **"Add project"** / **"Tambahkan proyek"**
3. Beri nama project (misal: `brainnova`)
4. Ikuti langkah-langkahnya sampai selesai

---

## 4. Inisialisasi Firebase di Proyek

Buka terminal di folder proyek:

```bash
cd c:\xampp\htdocs\brainNova
firebase init
```

Kemudian ikuti langkah interaktif:

1. **Pilih fitur:** Gunakan panah & spasi untuk memilih **Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys**, lalu tekan Enter.

2. **Pilih project:** Pilih **Use an existing project**, lalu pilih project yang sudah kamu buat di langkah 3.

3. **Public directory:** 
   - Jika proyek kamu adalah **static HTML/CSS/JS** (tanpa build), ketik: `.` (titik, artinya root folder)
   - Jika ada folder build (misal `dist` atau `build`), ketik nama folder tersebut

4. **Configure as a single-page app?** 
   - Ketik `y` jika SPA (Single Page Application)
   - Ketik `N` jika multi-page biasa

5. **Set up automatic builds and deploys with GitHub?**
   - Ketik `N` (bisa diatur nanti)

6. **Overwrite index.html?**
   - Ketik `N` (jangan overwrite file yang sudah ada)

---

## 5. Konfigurasi `firebase.json`

Setelah init, file `firebase.json` akan dibuat. Pastikan isinya sesuai:

````json
// filepath: c:\xampp\htdocs\brainNova\firebase.json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
```


## License: unknown
https://github.com/Polymer/old-docs-site/blob/27c3481e365081a0166099e07206f1a1f7bd76f0/app/3.0/start/toolbox/deploy.md

```


# Langkah-Langkah Deploy Proyek ke Firebase

Berikut langkah lengkap untuk deploy proyek **Brainova** ke Firebase Hosting:

---

## 1. Prasyarat

### Install Node.js & npm
Pastikan Node.js sudah terinstall:
```bash
node -v
npm -v
```

### Install Firebase CLI
```bash
npm install -g firebase-tools
```

---

## 2. Login ke Firebase

```bash
firebase login
```
Browser akan terbuka untuk autentikasi akun Google kamu.

---

## 3. Buat Project di Firebase Console

1. Buka [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Klik **"Add project"** / **"Tambahkan proyek"**
3. Beri nama project (misal: `brainnova`)
4. Ikuti langkah-langkahnya sampai selesai

---

## 4. Inisialisasi Firebase di Proyek

Buka terminal di folder proyek:

```bash
cd c:\xampp\htdocs\brainNova
firebase init
```

Kemudian ikuti langkah interaktif:

1. **Pilih fitur:** Gunakan panah & spasi untuk memilih **Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys**, lalu tekan Enter.

2. **Pilih project:** Pilih **Use an existing project**, lalu pilih project yang sudah kamu buat di langkah 3.

3. **Public directory:** 
   - Jika proyek kamu adalah **static HTML/CSS/JS** (tanpa build), ketik: `.` (titik, artinya root folder)
   - Jika ada folder build (misal `dist` atau `build`), ketik nama folder tersebut

4. **Configure as a single-page app?** 
   - Ketik `y` jika SPA (Single Page Application)
   - Ketik `N` jika multi-page biasa

5. **Set up automatic builds and deploys with GitHub?**
   - Ketik `N` (bisa diatur nanti)

6. **Overwrite index.html?**
   - Ketik `N` (jangan overwrite file yang sudah ada)

---

## 5. Konfigurasi `firebase.json`

Setelah init, file `firebase.json` akan dibuat. Pastikan isinya sesuai:

````json
// filepath: c:\xampp\htdocs\brainNova\firebase.json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
```


## License: unknown
https://github.com/Polymer/old-docs-site/blob/27c3481e365081a0166099e07206f1a1f7bd76f0/app/3.0/start/toolbox/deploy.md

```


# Langkah-Langkah Deploy Proyek ke Firebase

Berikut langkah lengkap untuk deploy proyek **Brainova** ke Firebase Hosting:

---

## 1. Prasyarat

### Install Node.js & npm
Pastikan Node.js sudah terinstall:
```bash
node -v
npm -v
```

### Install Firebase CLI
```bash
npm install -g firebase-tools
```

---

## 2. Login ke Firebase

```bash
firebase login
```
Browser akan terbuka untuk autentikasi akun Google kamu.

---

## 3. Buat Project di Firebase Console

1. Buka [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Klik **"Add project"** / **"Tambahkan proyek"**
3. Beri nama project (misal: `brainnova`)
4. Ikuti langkah-langkahnya sampai selesai

---

## 4. Inisialisasi Firebase di Proyek

Buka terminal di folder proyek:

```bash
cd c:\xampp\htdocs\brainNova
firebase init
```

Kemudian ikuti langkah interaktif:

1. **Pilih fitur:** Gunakan panah & spasi untuk memilih **Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys**, lalu tekan Enter.

2. **Pilih project:** Pilih **Use an existing project**, lalu pilih project yang sudah kamu buat di langkah 3.

3. **Public directory:** 
   - Jika proyek kamu adalah **static HTML/CSS/JS** (tanpa build), ketik: `.` (titik, artinya root folder)
   - Jika ada folder build (misal `dist` atau `build`), ketik nama folder tersebut

4. **Configure as a single-page app?** 
   - Ketik `y` jika SPA (Single Page Application)
   - Ketik `N` jika multi-page biasa

5. **Set up automatic builds and deploys with GitHub?**
   - Ketik `N` (bisa diatur nanti)

6. **Overwrite index.html?**
   - Ketik `N` (jangan overwrite file yang sudah ada)

---

## 5. Konfigurasi `firebase.json`

Setelah init, file `firebase.json` akan dibuat. Pastikan isinya sesuai:

````json
// filepath: c:\xampp\htdocs\brainNova\firebase.json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
```


## License: unknown
https://github.com/Polymer/old-docs-site/blob/27c3481e365081a0166099e07206f1a1f7bd76f0/app/3.0/start/toolbox/deploy.md

```


# Langkah-Langkah Deploy Proyek ke Firebase

Berikut langkah lengkap untuk deploy proyek **Brainova** ke Firebase Hosting:

---

## 1. Prasyarat

### Install Node.js & npm
Pastikan Node.js sudah terinstall:
```bash
node -v
npm -v
```

### Install Firebase CLI
```bash
npm install -g firebase-tools
```

---

## 2. Login ke Firebase

```bash
firebase login
```
Browser akan terbuka untuk autentikasi akun Google kamu.

---

## 3. Buat Project di Firebase Console

1. Buka [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Klik **"Add project"** / **"Tambahkan proyek"**
3. Beri nama project (misal: `brainnova`)
4. Ikuti langkah-langkahnya sampai selesai

---

## 4. Inisialisasi Firebase di Proyek

Buka terminal di folder proyek:

```bash
cd c:\xampp\htdocs\brainNova
firebase init
```

Kemudian ikuti langkah interaktif:

1. **Pilih fitur:** Gunakan panah & spasi untuk memilih **Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys**, lalu tekan Enter.

2. **Pilih project:** Pilih **Use an existing project**, lalu pilih project yang sudah kamu buat di langkah 3.

3. **Public directory:** 
   - Jika proyek kamu adalah **static HTML/CSS/JS** (tanpa build), ketik: `.` (titik, artinya root folder)
   - Jika ada folder build (misal `dist` atau `build`), ketik nama folder tersebut

4. **Configure as a single-page app?** 
   - Ketik `y` jika SPA (Single Page Application)
   - Ketik `N` jika multi-page biasa

5. **Set up automatic builds and deploys with GitHub?**
   - Ketik `N` (bisa diatur nanti)

6. **Overwrite index.html?**
   - Ketik `N` (jangan overwrite file yang sudah ada)

---

## 5. Konfigurasi `firebase.json`

Setelah init, file `firebase.json` akan dibuat. Pastikan isinya sesuai:

````json
// filepath: c:\xampp\htdocs\brainNova\firebase.json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
```


## License: unknown
https://github.com/Polymer/old-docs-site/blob/27c3481e365081a0166099e07206f1a1f7bd76f0/app/3.0/start/toolbox/deploy.md

```


# Langkah-Langkah Deploy Proyek ke Firebase

Berikut langkah lengkap untuk deploy proyek **Brainova** ke Firebase Hosting:

---

## 1. Prasyarat

### Install Node.js & npm
Pastikan Node.js sudah terinstall:
```bash
node -v
npm -v
```

### Install Firebase CLI
```bash
npm install -g firebase-tools
```

---

## 2. Login ke Firebase

```bash
firebase login
```
Browser akan terbuka untuk autentikasi akun Google kamu.

---

## 3. Buat Project di Firebase Console

1. Buka [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Klik **"Add project"** / **"Tambahkan proyek"**
3. Beri nama project (misal: `brainnova`)
4. Ikuti langkah-langkahnya sampai selesai

---

## 4. Inisialisasi Firebase di Proyek

Buka terminal di folder proyek:

```bash
cd c:\xampp\htdocs\brainNova
firebase init
```

Kemudian ikuti langkah interaktif:

1. **Pilih fitur:** Gunakan panah & spasi untuk memilih **Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys**, lalu tekan Enter.

2. **Pilih project:** Pilih **Use an existing project**, lalu pilih project yang sudah kamu buat di langkah 3.

3. **Public directory:** 
   - Jika proyek kamu adalah **static HTML/CSS/JS** (tanpa build), ketik: `.` (titik, artinya root folder)
   - Jika ada folder build (misal `dist` atau `build`), ketik nama folder tersebut

4. **Configure as a single-page app?** 
   - Ketik `y` jika SPA (Single Page Application)
   - Ketik `N` jika multi-page biasa

5. **Set up automatic builds and deploys with GitHub?**
   - Ketik `N` (bisa diatur nanti)

6. **Overwrite index.html?**
   - Ketik `N` (jangan overwrite file yang sudah ada)

---

## 5. Konfigurasi `firebase.json`

Setelah init, file `firebase.json` akan dibuat. Pastikan isinya sesuai:

````json
// filepath: c:\xampp\htdocs\brainNova\firebase.json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
```


## License: unknown
https://github.com/Polymer/old-docs-site/blob/27c3481e365081a0166099e07206f1a1f7bd76f0/app/3.0/start/toolbox/deploy.md

```


# Langkah-Langkah Deploy Proyek ke Firebase

Berikut langkah lengkap untuk deploy proyek **Brainova** ke Firebase Hosting:

---

## 1. Prasyarat

### Install Node.js & npm
Pastikan Node.js sudah terinstall:
```bash
node -v
npm -v
```

### Install Firebase CLI
```bash
npm install -g firebase-tools
```

---

## 2. Login ke Firebase

```bash
firebase login
```
Browser akan terbuka untuk autentikasi akun Google kamu.

---

## 3. Buat Project di Firebase Console

1. Buka [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Klik **"Add project"** / **"Tambahkan proyek"**
3. Beri nama project (misal: `brainnova`)
4. Ikuti langkah-langkahnya sampai selesai

---

## 4. Inisialisasi Firebase di Proyek

Buka terminal di folder proyek:

```bash
cd c:\xampp\htdocs\brainNova
firebase init
```

Kemudian ikuti langkah interaktif:

1. **Pilih fitur:** Gunakan panah & spasi untuk memilih **Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys**, lalu tekan Enter.

2. **Pilih project:** Pilih **Use an existing project**, lalu pilih project yang sudah kamu buat di langkah 3.

3. **Public directory:** 
   - Jika proyek kamu adalah **static HTML/CSS/JS** (tanpa build), ketik: `.` (titik, artinya root folder)
   - Jika ada folder build (misal `dist` atau `build`), ketik nama folder tersebut

4. **Configure as a single-page app?** 
   - Ketik `y` jika SPA (Single Page Application)
   - Ketik `N` jika multi-page biasa

5. **Set up automatic builds and deploys with GitHub?**
   - Ketik `N` (bisa diatur nanti)

6. **Overwrite index.html?**
   - Ketik `N` (jangan overwrite file yang sudah ada)

---

## 5. Konfigurasi `firebase.json`

Setelah init, file `firebase.json` akan dibuat. Pastikan isinya sesuai:

````json
// filepath: c:\xampp\htdocs\brainNova\firebase.json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
```


## License: unknown
https://github.com/Polymer/old-docs-site/blob/27c3481e365081a0166099e07206f1a1f7bd76f0/app/3.0/start/toolbox/deploy.md

```


# Langkah-Langkah Deploy Proyek ke Firebase

Berikut langkah lengkap untuk deploy proyek **Brainova** ke Firebase Hosting:

---

## 1. Prasyarat

### Install Node.js & npm
Pastikan Node.js sudah terinstall:
```bash
node -v
npm -v
```

### Install Firebase CLI
```bash
npm install -g firebase-tools
```

---

## 2. Login ke Firebase

```bash
firebase login
```
Browser akan terbuka untuk autentikasi akun Google kamu.

---

## 3. Buat Project di Firebase Console

1. Buka [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Klik **"Add project"** / **"Tambahkan proyek"**
3. Beri nama project (misal: `brainnova`)
4. Ikuti langkah-langkahnya sampai selesai

---

## 4. Inisialisasi Firebase di Proyek

Buka terminal di folder proyek:

```bash
cd c:\xampp\htdocs\brainNova
firebase init
```

Kemudian ikuti langkah interaktif:

1. **Pilih fitur:** Gunakan panah & spasi untuk memilih **Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys**, lalu tekan Enter.

2. **Pilih project:** Pilih **Use an existing project**, lalu pilih project yang sudah kamu buat di langkah 3.

3. **Public directory:** 
   - Jika proyek kamu adalah **static HTML/CSS/JS** (tanpa build), ketik: `.` (titik, artinya root folder)
   - Jika ada folder build (misal `dist` atau `build`), ketik nama folder tersebut

4. **Configure as a single-page app?** 
   - Ketik `y` jika SPA (Single Page Application)
   - Ketik `N` jika multi-page biasa

5. **Set up automatic builds and deploys with GitHub?**
   - Ketik `N` (bisa diatur nanti)

6. **Overwrite index.html?**
   - Ketik `N` (jangan overwrite file yang sudah ada)

---

## 5. Konfigurasi `firebase.json`

Setelah init, file `firebase.json` akan dibuat. Pastikan isinya sesuai:

````json
// filepath: c:\xampp\htdocs\brainNova\firebase.json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
````

> **Catatan:** Ub
```

