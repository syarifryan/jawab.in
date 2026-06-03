# JAWAB.IN Backend API

Express.js + Supabase backend for the JAWAB.IN promotional website.

## 📁 Struktur Folder

```
backend/
├── database/
│   ├── schema.sql          ← Buat tabel di Supabase
│   └── seed.sql            ← Data awal (portfolio & testimoni)
├── src/
│   ├── index.ts            ← Entry point Express server
│   ├── lib/
│   │   ├── supabase.ts     ← Supabase client
│   │   ├── validators.ts   ← Zod validation schemas
│   │   └── email.ts        ← Resend email notification
│   └── routes/
│       ├── contact.ts      ← POST /api/contact
│       ├── projects.ts     ← GET /api/projects
│       └── testimonials.ts ← GET /api/testimonials
├── .env                    ← Environment variables (JANGAN commit!)
├── .env.example            ← Template env vars
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md               ← File ini
```

## 🚀 API Endpoints

| Method | Endpoint             | Deskripsi                          |
|--------|---------------------|------------------------------------|
| POST   | `/api/contact`       | Submit form kontak                 |
| GET    | `/api/projects`      | Ambil semua proyek portfolio       |
| GET    | `/api/projects?category=web` | Filter proyek berdasarkan kategori |
| GET    | `/api/testimonials`  | Ambil semua testimoni              |
| GET    | `/api/health`        | Health check                       |

---

## 📋 Tutorial Setup Lengkap

### Step 1: Setup Database di Supabase

1. Buka Supabase Dashboard → pilih project Anda
2. Klik **SQL Editor** di sidebar kiri
3. Klik **New Query**
4. Buka file `database/schema.sql`, **copy semua isinya**
5. Paste ke SQL Editor
6. Klik **Run** ▶️
7. Tunggu sampai muncul pesan *"Success. No rows returned"*

![Supabase SQL Editor](https://supabase.com/docs/img/sql-editor.png)

### Step 2: Seed Data Awal

1. Masih di SQL Editor, klik **New Query** lagi
2. Buka file `database/seed.sql`, **copy semua isinya**
3. Paste ke SQL Editor
4. Klik **Run** ▶️
5. Verifikasi: Klik **Table Editor** di sidebar → pastikan tabel `projects` dan `testimonials` sudah berisi data

### Step 3: Ambil API Keys

1. Di Supabase Dashboard → **Settings** (ikon gear ⚙️) → **API**
2. Catat 3 nilai berikut:

| Nama | Lokasi di Dashboard | Untuk |
|------|-------------------|-------|
| **Project URL** | Di bagian atas | `SUPABASE_URL` |
| **anon / public key** | Di bagian "Project API keys" | `SUPABASE_ANON_KEY` |
| **service_role key** | Klik "Reveal" di bawah anon key | `SUPABASE_SERVICE_ROLE_KEY` |

> ⚠️ **PENTING**: `service_role key` adalah kunci rahasia yang bisa bypass semua RLS (Row Level Security). JANGAN pernah share atau commit ke Git!

### Step 4: Konfigurasi Environment

1. Buka file `.env` di folder `backend/`
2. Isi dengan API keys dari Step 3:

```env
SUPABASE_URL=https://scwgmasdhiepjxywfemw.supabase.co
SUPABASE_ANON_KEY=sb_publishable_FEaJgsD7gE8JZJ3eir7L1g_jmqE0hV5
SUPABASE_SERVICE_ROLE_KEY=paste_service_role_key_disini

PORT=3001
FRONTEND_URL=http://localhost:3000

# Opsional: Untuk notifikasi email (lihat Step 7)
RESEND_API_KEY=
NOTIFICATION_EMAIL=jawab.innn@gmail.com
```

### Step 5: Install Dependencies

```bash
cd c:\laragon\www\jawab_in\backend
npm install
```

### Step 6: Jalankan Backend

```bash
npm run dev
```

Anda akan melihat:
```
╔══════════════════════════════════════════════╗
║         JAWAB.IN Backend API Server          ║
╠══════════════════════════════════════════════╣
║  🚀 Server     : http://localhost:3001        ║
║  🌐 Frontend   : http://localhost:3000        ║
║  📊 Health     : http://localhost:3001/api/health ║
╚══════════════════════════════════════════════╝
```

**Test di browser**:
- Buka `http://localhost:3001/api/health` → harus muncul JSON `{"status":"ok"}`
- Buka `http://localhost:3001/api/projects` → harus muncul data proyek
- Buka `http://localhost:3001/api/testimonials` → harus muncul data testimoni

### Step 7 (Opsional): Setup Email Notifikasi dengan Resend

Jika ingin menerima email setiap kali ada yang submit form kontak:

1. Buat akun di [resend.com](https://resend.com) (gratis, 100 email/hari)
2. Buat API Key di **Settings** → **API Keys** → **Create API Key**
3. Tambahkan ke `.env`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxxxx
   NOTIFICATION_EMAIL=jawab.innn@gmail.com
   ```
4. Restart backend (`Ctrl+C` lalu `npm run dev`)

> Tanpa Resend, form kontak tetap berfungsi — data tetap disimpan di Supabase, hanya tidak ada notifikasi email.

---

## 🔧 Menjalankan Frontend + Backend Bersamaan

Buka **2 terminal** terpisah:

**Terminal 1 — Backend:**
```bash
cd c:\laragon\www\jawab_in\backend
npm run dev
```

**Terminal 2 — Frontend:**
```bash
cd c:\laragon\www\jawab_in\frontend
npm run dev
```

Sekarang buka `http://localhost:3000` dan coba:
1. ✅ Halaman portfolio menampilkan data dari database
2. ✅ Halaman testimoni menampilkan data dari database
3. ✅ Form kontak bisa dikirim dan data masuk ke Supabase

---

## 🔍 Troubleshooting

### "Failed to fetch" di form kontak
- Pastikan backend berjalan di port 3001 (`npm run dev`)
- Pastikan frontend punya file `.env.local` dengan `NEXT_PUBLIC_API_URL=http://localhost:3001`

### "Gagal menyimpan pesan" (500 error)
- Pastikan tabel `contacts` sudah dibuat di Supabase (jalankan `schema.sql`)
- Pastikan `SUPABASE_ANON_KEY` di `.env` sudah benar
- Cek RLS policy — pastikan policy "Public can submit contact form" ada

### Data portfolio/testimoni tidak muncul dari API
- Cek `http://localhost:3001/api/projects` di browser → harus return data
- Pastikan tabel `projects` dan `testimonials` sudah berisi data (jalankan `seed.sql`)
- Pastikan kolom `is_published` = `true` untuk semua data

### Backend tidak bisa start
- Pastikan `npm install` sudah dijalankan di folder `backend/`
- Pastikan file `.env` sudah ada dan terisi
- Cek apakah port 3001 sudah dipakai: `netstat -ano | findstr :3001`

---

## 🚀 Deployment (Vercel + Supabase)

### Frontend (Vercel)
1. Push kode ke GitHub
2. Import project di [vercel.com](https://vercel.com)
3. Set **Root Directory** = `frontend`
4. Tambah environment variable:
   - `NEXT_PUBLIC_API_URL` = URL backend Anda (atau Railway/Render URL)
5. Deploy!

### Backend (Railway / Render)
1. Import project dari GitHub
2. Set **Root Directory** = `backend`
3. Set **Build Command** = `npm run build`
4. Set **Start Command** = `npm start`
5. Tambah semua environment variables dari `.env`
6. Deploy!

> Setelah deploy backend, update `NEXT_PUBLIC_API_URL` di Vercel ke URL backend yang baru.
