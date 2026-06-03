# JAWAB.IN 🌟
> **Solusi Akademik & Digital Terpercaya** — Web promosi interaktif dengan gaya desain **Neobrutalism** modern.

Project ini terdiri dari aplikasi full-stack yang mempromosikan layanan jasa akademik dan digital (pembuatan website, IoT, kecerdasan buatan, bimbingan skripsi, penulisan jurnal, dan jasa desain).

---

## 🎨 Gaya Desain (Neobrutalism)
Website ini mengadopsi gaya **Neobrutalism** yang berani dan premium:
*   **Borders Tebal**: Menggunakan garis luar tegas (`2-3px solid #1A1A1A`).
*   **Hard Shadows**: Bayangan datar tanpa blur (`4px 4px 0px #1A1A1A`).
*   **Warna Vibrant**: Kombinasi warna mencolok seperti Kuning Kunyit (`#FFE500`), Biru (`#3B82F6`), Mint (`#34D399`), dan Pink (`#EC4899`) di atas warna dasar cream hangat (`#FFF8E7`).
*   **Tipografi**: Menggunakan font **Space Grotesk** untuk heading yang futuristik dan **Inter** untuk keterbacaan teks yang optimal.

---

## 🛠️ Tech Stack

### Frontend (Klien)
*   **Framework**: Next.js (React) + TypeScript
*   **Styling**: Tailwind CSS & Vanilla CSS (untuk penyesuaian token Neobrutalism)
*   **Ikon**: Lucide React
*   **Animasi**: Framer Motion / CSS Transitions

### Backend (Server & API)
*   **Runtime**: Node.js + Express.js + TypeScript
*   **Database**: Supabase (PostgreSQL)
*   **Validasi**: Zod Schema Validation
*   **Notifikasi Email**: Resend API

---

## 📁 Struktur Folder Project

```text
jawab_in/
├── frontend/               # Project Next.js (Frontend)
│   ├── src/
│   │   ├── components/     # Komponen UI (Navbar, Footer, NeoCard, dll)
│   │   ├── app/            # Next.js App Router (Halaman Utama)
│   │   └── supabase/       # Integrasi Supabase Client
│   └── package.json
│
├── backend/                # Project Express.js (Backend API)
│   ├── database/           # Skema Database & Seed SQL
│   ├── src/
│   │   ├── routes/         # Endpoints (Projects, Testimonials, Contact)
│   │   ├── lib/            # Helpers (Supabase client, Resend, Validators)
│   │   └── index.ts        # Entry point server
│   └── package.json
│
├── design/                 # Dokumen spesifikasi desain & aset visual
├── README.md               # Dokumentasi utama project (File ini)
└── IMPLEMENTATION_PLAN.md  # Rencana detail implementasi fitur
```

---

## 🚀 Cara Menjalankan Project Secara Lokal

### 1. Prasyarat (Prerequisites)
Pastikan Anda sudah menginstal:
*   [Node.js](https://nodejs.org/) (versi 18+)
*   Akun [Supabase](https://supabase.com) (untuk database)
*   Akun [Resend](https://resend.com) (opsional, untuk notifikasi email)

---

### 2. Setup Database (Supabase)
1. Buat project baru di **Supabase Dashboard**.
2. Masuk ke menu **SQL Editor** -> klik **New Query**.
3. Buka file `backend/database/schema.sql`, salin seluruh isinya, lalu klik **Run** untuk membuat tabel database.
4. Buat query baru, buka file `backend/database/seed.sql`, salin isinya, lalu klik **Run** untuk mengisi data awal (portfolio & testimoni).

---

### 3. Konfigurasi Backend (`backend/`)
1. Masuk ke direktori backend:
   ```bash
   cd backend
   ```
2. Buat file `.env` dengan menyalin template dari `.env.example`:
   ```bash
   cp .env.example .env
   ```
3. Isi variabel lingkungan di dalam file `.env` dengan detail API Keys Anda:
   ```env
   SUPABASE_URL=https://your-supabase-url.supabase.co
   SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   PORT=3001
   FRONTEND_URL=http://localhost:3000
   RESEND_API_KEY=your-resend-api-key # Opsional
   NOTIFICATION_EMAIL=jawab.innn@gmail.com
   ```
4. Install dependencies dan jalankan backend:
   ```bash
   npm install
   npm run dev
   ```
   *Backend akan berjalan di port `3001` (http://localhost:3001).*

---

### 4. Konfigurasi Frontend (`frontend/`)
1. Buka terminal baru dan masuk ke direktori frontend:
   ```bash
   cd frontend
   ```
2. Buat file `.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```
3. Install dependencies dan jalankan frontend:
   ```bash
   npm install
   npm run dev
   ```
   *Frontend akan berjalan di port `3000` (http://localhost:3000).*

---

## 🔗 API Endpoints (Backend)

| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| **GET** | `/api/health` | Mengecek status kesehatan backend |
| **GET** | `/api/projects` | Mengambil semua list portfolio |
| **GET** | `/api/testimonials` | Mengambil list testimoni dari klien |
| **POST** | `/api/contact` | Mengirim data formulir kontak & memicu email notifikasi |

---

## 📸 Panduan Kontribusi
1. Lakukan git pull untuk update kode terbaru:
   ```bash
   git pull origin main
   ```
2. Buat branch baru untuk fitur Anda:
   ```bash
   git checkout -b fitur-baru
   ```
3. Lakukan commit dengan pesan yang jelas:
   ```bash
   git commit -m "Menambahkan fitur X"
   ```
4. Push ke GitHub dan buat Pull Request.
