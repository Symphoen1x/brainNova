# Brainova — Project Report

**Tanggal**: 19 Februari 2026  
**Versi**: 1.0.0  
**Status**: Development (TRL 7)

---

## 1. Ringkasan Proyek

Brainova adalah platform teknologi berbasis AI dan neurosains kognitif yang dirancang untuk meningkatkan kualitas pembelajaran dan kesejahteraan mental. Aplikasi ini dibangun di atas stack modern Laravel 12 + Inertia.js + React + TypeScript dengan antarmuka yang futuristik, dark-first, dan mendukung SDG (Sustainable Development Goals) PBB.

---

## 2. Stack Teknologi

| Layer | Teknologi | Versi |
|---|---|---|
| Backend Framework | Laravel | 12.x |
| Frontend Framework | React | 19.x |
| SPA Bridge | Inertia.js | 2.x |
| Language | TypeScript | 5.7.x |
| CSS Framework | Tailwind CSS | v4.x |
| UI Components | shadcn/ui (new-york) | Latest |
| Icon Library | Lucide React | 0.475.x |
| Build Tool | Vite | 7.x |
| Authentication | Laravel Fortify (2FA) | Latest |
| Database | SQLite (dev) / MySQL (prod) | - |
| Routing | Wayfinder (type-safe) | 0.1.x |
| Package Manager | npm + Composer | - |

---

## 3. Struktur Proyek

```
brainNova/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── ContactController.php       ← Handles contact form POST
│   │   │   └── NewsletterController.php    ← Handles newsletter subscribe POST
│   │   ├── Middleware/
│   │   └── Requests/
│   ├── Models/
│   │   └── User.php
│   └── Providers/
├── database/
│   └── migrations/
│       └── 2025_08_15_000000_create_newsletter_subscribers_table.php
├── resources/
│   ├── css/
│   │   └── app.css                         ← Brainova theme (oklch blue/cyan)
│   └── js/
│       ├── components/
│       │   ├── landing/
│       │   │   ├── navbar.tsx              ← Sticky glassmorphism navbar
│       │   │   ├── footer.tsx              ← 4-column footer
│       │   │   ├── theme-toggle.tsx        ← Light/Dark toggle
│       │   │   ├── section-heading.tsx     ← Reusable section title
│       │   │   ├── service-card.tsx        ← Product card with glow effect
│       │   │   ├── stat-counter.tsx        ← Animated number counter
│       │   │   ├── blog-card.tsx           ← Article preview card
│       │   │   ├── contact-form.tsx        ← Inertia useForm contact form
│       │   │   └── newsletter-form.tsx     ← Email subscribe form
│       │   ├── app-logo.tsx                ← Brainova logo text
│       │   └── app-logo-icon.tsx           ← Brain SVG icon
│       ├── layouts/
│       │   └── landing-layout.tsx          ← Shared navbar + footer wrapper
│       └── pages/
│           ├── welcome.tsx                 ← Homepage (7 sections)
│           ├── blog.tsx                    ← Blog listing page
│           └── contact.tsx                 ← Contact + info page
└── routes/
    ├── web.php                             ← Public routes
    └── settings.php                        ← Auth settings routes
```

---

## 4. Halaman & Fitur

### 4.1 Homepage (`/`)

Terdiri dari 7 section utama:

| Section | Konten |
|---|---|
| **Hero** | Mesh gradient bg, grid overlay, badge "TRL 7", headline utama, tombol CTA, trust badges |
| **About** | 4 SDG card (Pendidikan Berkualitas, Kesehatan, Inovasi, Kemitraan) + glassmorphism detail cards |
| **Services** | 3 produk: OLYRA, Neuro Academy, FUMORIVE — glow hover + gradient accent |
| **Stats** | 4 animated counter: 15.000+ Pengguna, 500+ Institusi, 85%+ Efektivitas, 200+ Modul |
| **Technology** | 6 tech spec cards: Neuro-AI Engine, EEG Muse, Cloud, PWA, AES-256, Real-Time |
| **Blog Preview** | 3 artikel terbaru |
| **CTA** | Gradient headline + tombol + form newsletter |

### 4.2 Blog (`/blog`)

- Grid 6 artikel placeholder dengan kategori & excerpt
- Filter kategori (UI only)
- Newsletter subscription di bawah

### 4.3 Contact (`/contact`)

- Form kontak (nama, email, subjek, pesan) via Inertia `useForm`
- Informasi kontak (lokasi, email, telepon, jam operasional)
- Partner stats di footer section
- Newsletter subscription

---

## 5. Endpoint API / Routes

| Method | URL | Name | Deskripsi |
|---|---|---|---|
| GET | `/` | `home` | Homepage |
| GET | `/blog` | `blog` | Blog listing |
| GET | `/contact` | `contact` | Contact page |
| POST | `/contact` | `contact.store` | Submit contact form |
| POST | `/newsletter` | `newsletter.store` | Subscribe newsletter |
| GET | `/dashboard` | `dashboard` | User dashboard (auth required) |
| GET | `/login` | `login` | Login page |
| GET | `/register` | `register` | Register page |
| GET | `/settings/profile` | `settings.profile` | Profile settings |
| GET | `/settings/password` | `settings.password` | Password settings |
| GET | `/settings/appearance` | `settings.appearance` | Appearance settings |

---

## 6. Database

### 6.1 Tabel yang Ada

| Tabel | Deskripsi |
|---|---|
| `users` | Pengguna terdaftar (Fortify auth) |
| `cache` | Cache Laravel |
| `jobs` | Queue jobs |
| `newsletter_subscribers` | Email subscriber newsletter |
| `tasks` | Tasks (dari migrasi bawaan) |

### 6.2 newsletter_subscribers

```sql
CREATE TABLE newsletter_subscribers (
    id          BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email       VARCHAR(255) UNIQUE NOT NULL,
    subscribed_at TIMESTAMP NULL,
    created_at  TIMESTAMP NULL
);
```

---

## 7. Theme & Design System

### 7.1 Warna (oklch)

| Token | Light | Dark |
|---|---|---|
| `--background` | `oklch(0.99 0.005 240)` | `oklch(0.10 0.02 270)` |
| `--foreground` | `oklch(0.15 0.02 250)` | `oklch(0.95 0.01 240)` |
| `--primary` | `oklch(0.55 0.20 255)` | `oklch(0.72 0.19 195)` |
| `--neon` | `oklch(0.72 0.25 195)` | `oklch(0.72 0.25 195)` |

### 7.2 Utility Classes Custom

| Class | Fungsi |
|---|---|
| `.glass` | Glassmorphism card (backdrop-blur + bg opacity) |
| `.glow` | Box shadow neon cyan |
| `.glow-text` | Text shadow neon |
| `.gradient-text` | Gradient text biru → cyan |
| `.mesh-gradient` | Radial gradient background hero |

---

## 8. Autentikasi

Menggunakan **Laravel Fortify** dengan fitur:
- Login / Register
- Email Verification
- Password Reset
- Two-Factor Authentication (2FA) dengan TOTP
- Session Management

---

## 9. Produk Brainova

### OLYRA
Platform pembelajaran adaptif berbasis AI + neurosains. Menganalisis pola kognitif pengguna untuk personalisasi konten pembelajaran secara real-time.

### Neuro Academy
Ekosistem pendidikan digital yang menggabungkan kurikulum berbasis bukti ilmiah dengan teknologi penilaian neurokognitif untuk institusi pendidikan.

### FUMORIVE
Aplikasi kesehatan mental berbasis neurofeedback dan pemantauan EEG non-invasif untuk deteksi dini burnout dan anxiety pada profesional & pelajar.

---

## 10. Rencana Pengembangan Selanjutnya

| Fitur | Status | Prioritas |
|---|---|---|
| Real email sending via ContactController | Planned | High |
| Blog CMS (database-driven posts) | Planned | Medium |
| Admin dashboard | Planned | Medium |
| Product pages (OLYRA/Neuro Academy/FUMORIVE) | Planned | High |
| SEO meta tags (OG, Twitter Card) | Planned | Medium |
| Analytics integration | Planned | Low |
| Multi-language support (ID/EN) | Planned | Low |
| PWA manifest | Planned | Low |

---

## 11. Catatan Teknis

- **Email kontak belum aktif**: `ContactController.php` saat ini hanya `log` submit. Aktifkan dengan membuat `App\Mail\ContactMessage` dan konfigurasi `.env` SMTP.
- **Blog masih statis**: Artikel hardcoded di `blog.tsx`. Butuh tabel `posts` + controller untuk CMS.
- **Vite port**: Port 5173 perlu kosong. Jika terpakai, Vite otomatis pindah ke 5174.
- **SQLite untuk development**: File di `database/database.sqlite`.

---

*Generated: 19 Februari 2026 | Brainova v1.0.0*
