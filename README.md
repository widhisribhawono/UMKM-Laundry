# FreshLaundry — Website Prototype UMKM Laundry

> Prototype website company profile dan sistem informasi sederhana untuk UMKM Laundry.  
> Dibuat sebagai tugas UAS mata kuliah **Komputasi Awan (Cloud Computing)**.

## 📋 Deskripsi

FreshLaundry adalah website prototype untuk UMKM laundry yang menampilkan company profile sekaligus sistem informasi sederhana. Website ini dirancang dengan desain modern, minimalis, dan profesional yang terinspirasi dari website startup seperti Stripe, Linear, dan Vercel.

Website ini merupakan **prototype statis** (tanpa backend/database) yang siap di-deploy ke layanan **Platform as a Service (PaaS)** atau Static Hosting sebagai implementasi cloud computing.

## 🛠 Teknologi

- **HTML5** — Struktur semantik
- **CSS3** — Custom styling dengan design system
- **Bootstrap 5.3** — Framework CSS responsif
- **Bootstrap Icons** — Ikon ringan
- **JavaScript (Vanilla)** — Interaksi dan animasi
- **Google Fonts (Inter)** — Tipografi modern

## 📁 Struktur Folder

```
project/
├── index.html          # Halaman Home
├── about.html          # Halaman Tentang
├── services.html       # Halaman Layanan
├── pricing.html        # Halaman Harga
├── tracking.html       # Halaman Tracking (prototype)
├── contact.html        # Halaman Kontak
├── README.md           # Dokumentasi
└── assets/
    ├── css/
    │   └── style.css   # Stylesheet utama
    ├── js/
    │   └── script.js   # JavaScript utama
    └── images/         # Folder gambar (jika diperlukan)
```

## 📄 Halaman

| Halaman | Deskripsi |
|---------|-----------|
| **Home** | Hero section, keunggulan, statistik, preview layanan, CTA |
| **Tentang** | Profil perusahaan, visi & misi, nilai, timeline |
| **Layanan** | 6 layanan dengan card modern dan alur kerja |
| **Harga** | 4 paket harga dengan pricing card |
| **Tracking** | Form tracking prototype dengan hasil contoh (JS) |
| **Kontak** | Info kontak, form kontak, Google Maps |

## 🎨 Desain

- **Warna Utama**: `#2563EB` (Primary), `#0F172A` (Secondary)
- **Background**: `#F8FAFC`
- **Font**: Inter (Google Fonts)
- **Pendekatan**: Clean UI, minimalis, modern, banyak whitespace
- **Animasi**: Fade-in on scroll, smooth hover, counter animation

## 🚀 Deployment

Website ini siap di-deploy ke berbagai layanan cloud:

### Netlify
1. Push ke repository GitHub
2. Hubungkan repository ke Netlify
3. Deploy otomatis

### Render
1. Push ke repository GitHub
2. Buat Static Site baru di Render
3. Arahkan ke repository

### GitHub Pages
1. Push ke repository GitHub
2. Aktifkan GitHub Pages di Settings
3. Pilih branch `main` sebagai source

### Vercel
1. Push ke repository GitHub
2. Import project di Vercel
3. Deploy otomatis

## 🔧 Menjalankan Secara Lokal

Cukup buka file `index.html` di browser, atau gunakan live server:

```bash
# Menggunakan VS Code Live Server Extension
# Klik kanan index.html > "Open with Live Server"

# Atau menggunakan Python
python -m http.server 8000

# Atau menggunakan Node.js
npx serve .
```

## 📝 Catatan

- Website ini adalah **prototype** dan tidak memiliki backend
- Fitur tracking hanya menampilkan data contoh (hardcoded)
- Form kontak tidak mengirim data ke server
- Cocok untuk presentasi dan demonstrasi konsep

## 👤 Informasi

- **Mata Kuliah**: Komputasi Awan (Cloud Computing)
- **Jenis Tugas**: UAS — Implementasi Platform as a Service (PaaS)
- **Studi Kasus**: UMKM Laundry

---

&copy; 2026 FreshLaundry. Prototype untuk Tugas UAS Komputasi Awan.
