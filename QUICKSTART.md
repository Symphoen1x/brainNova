# Brainova — Quick Start Guide

Panduan cepat menjalankan proyek Brainova di environment lokal (Windows).

---

## Prasyarat

Pastikan software berikut sudah terinstall:

| Software | Versi Minimal | Cek Versi |
|---|---|---|
| PHP | 8.2+ | `php -v` |
| Composer | 2.x | `composer -V` |
| Node.js | 20+ | `node -v` |
| npm | 10+ | `npm -v` |
| Git | Latest | `git -v` |

---

## 1. Clone & Setup Awal

```bash
# Clone repository
git clone https://github.com/your-org/brainnova.git
cd brainnova

# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install
```

---

## 2. Konfigurasi Environment

```bash
# Copy file environment
cp .env.example .env

# Generate application key
php artisan key:generate
```

Edit file `.env` dan sesuaikan:

```env
APP_NAME=Brainova
APP_URL=http://localhost:8000

# Database (SQLite untuk development)
DB_CONNECTION=sqlite
# DB_DATABASE= (kosongkan, otomatis pakai database/database.sqlite)

# Mail (opsional, untuk contact form)
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your@email.com
MAIL_PASSWORD=your-app-password
MAIL_FROM_ADDRESS=hello@brainnova.id
MAIL_FROM_NAME="Brainova"
```

---

## 3. Setup Database

```bash
# Buat file SQLite (jika belum ada)
touch database/database.sqlite
# atau di Windows PowerShell:
New-Item database/database.sqlite -ItemType File

# Jalankan semua migrasi
php artisan migrate

# (Opsional) Jalankan seeder
php artisan db:seed
```

Output migrasi yang diharapkan:
```
  INFO  Running migrations.

  0001_01_01_000000_create_users_table ...................... DONE
  0001_01_01_000001_create_cache_table ...................... DONE
  0001_01_01_000002_create_jobs_table ....................... DONE
  2025_08_14_170933_add_two_factor_columns_to_users_table .. DONE
  2025_08_15_000000_create_newsletter_subscribers_table .... DONE
```

---

## 4. Menjalankan Development Server

### Cara 1 — Satu perintah (direkomendasikan)

```bash
composer run dev
```

Ini akan menjalankan secara bersamaan:
- `php artisan serve` → Laravel di `http://localhost:8000`
- `npm run dev` (Vite) → hot reload assets
- `php artisan queue:listen` → background job processor

### Cara 2 — Terpisah (3 terminal)

**Terminal 1 — Laravel:**
```bash
php artisan serve
```

**Terminal 2 — Vite:**
```bash
npm run dev
```

**Terminal 3 — Queue (opsional):**
```bash
php artisan queue:listen
```

---

## 5. Akses Aplikasi

Buka browser dan kunjungi:

| Halaman | URL |
|---|---|
| Homepage | http://localhost:8000 |
| Blog | http://localhost:8000/blog |
| Contact | http://localhost:8000/contact |
| Login | http://localhost:8000/login |
| Register | http://localhost:8000/register |
| Dashboard (auth) | http://localhost:8000/dashboard |

---

## 6. Build untuk Production

```bash
# Build aset frontend
npm run build

# Atau dengan SSR:
npm run build:ssr

# Optimisasi Laravel
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

---

## 7. Perintah Artisan Berguna

```bash
# Lihat semua route
php artisan route:list

# Clear semua cache
php artisan optimize:clear

# Jalankan test
php artisan test

# Cek versi Laravel
php artisan --version

# Interactive shell
php artisan tinker
```

---

## 8. Troubleshooting

### Port 8000 sudah dipakai
```bash
php artisan serve --port=8001
```

### Port 5173 (Vite) sudah dipakai
Vite otomatis pindah ke port berikutnya (5174, dst). Tidak perlu action tambahan.

### Error 500 saat pertama kali
```bash
php artisan config:clear
php artisan cache:clear
php artisan view:clear
```

### File database tidak ditemukan
```bash
# Windows PowerShell
New-Item database/database.sqlite -ItemType File -Force
php artisan migrate
```

### Error "Class not found"
```bash
composer dump-autoload
```

### Node modules error
```bash
rm -rf node_modules
npm install
```

---

## 9. Struktur URL & Navigation

```
/                    → Homepage (welcome.tsx)
├── /blog            → Blog listing (blog.tsx)
├── /contact         → Contact page (contact.tsx)
├── /login           → Login
├── /register        → Register
└── /dashboard       → Dashboard (requires auth)
    └── /settings/   → User settings
        ├── /profile
        ├── /password
        └── /appearance
```

---

## 10. Konfigurasi Tambahan (Opsional)

### Aktifkan Email Contact Form

Edit `app/Http/Controllers/ContactController.php`:

```php
// Uncomment baris berikut setelah membuat Mailable:
// Mail::to('hello@brainnova.id')->send(new ContactMessage($validated));
```

Buat Mailable:
```bash
php artisan make:mail ContactMessage --markdown=emails.contact
```

### Two-Factor Authentication
2FA sudah terkonfigurasi via Laravel Fortify. Aktifkan di profil pengguna setelah login.

---

*Brainova v1.0.0 | Laravel 12 + React 19 + TypeScript + Tailwind CSS v4*
