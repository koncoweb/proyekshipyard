## Ringkasan Perubahan (Proyek Batang Shipyard)

### Navigasi & Header
- Menambahkan submenu dropdown untuk `Produk Kapal` di `components/Header.tsx` (collecting, cumi, longliner, purse-seine, cakalang).
- Menstabilkan dropdown agar tidak cepat hilang (CSS: `.has-submenu`, `.submenu` dengan transition, pointer-events, dan `:focus-within`).
- Menyamakan gaya tombol header (`.pp-btn`) menjadi tombol emas (gradien, bevel, dan hover) dan memperbarui pills EN/Blog (`.gold-pill`).

### Gaya Global (CSS)
- Redesign kartu global `.card` dan `.card.media` menjadi tampilan elegan, gambar full-bleed tanpa padding, hover terangkat.
- Mengatur `.service-list` responsif (1–2 kolom) dan utilitas `.two-col` (mobile 2 kolom, fallback <360px jadi 1 kolom).
- Menambahkan varian tombol emas untuk `.btn`, `.btn.outline` serta hover states.
- Mengganti bullet list di `.gold-list` menjadi ikon SVG checkmark tipis (`.gold-bullet`) dan memperbaiki wrapping/line-height agar rapi.

### Homepage (`app/page.tsx`)
- Mengganti gambar section Produk Kapal dan link ke subhalaman produk.
- Mengganti gambar layanan: Produksi, Dokumen, Perawatan, Kapal Second sesuai aset baru.
- Menambahkan section baru "Tenaga Ahli & Sertifikasi" dengan dua kartu (foto ahli dan sertifikasi + tombol unduh PDF), serta grid 2 kolom (mobile & desktop). Menyesuaikan framing foto ahli (`objectPosition`).

### Produk Kapal
- Membuat subhalaman SEO untuk setiap jenis kapal:
  - `collecting`, `cumi`, `longliner`, `purse-seine`, `cakalang`.
- Menambahkan konten deskriptif, galeri gambar, dan tombol unduh PDF spesifikasi (tombol emas).
- Menghubungkan daftar produk ke masing-masing subhalaman.

### Layanan
- Menambahkan hero pada semua halaman layanan:
  - `produksi-kapal-kayu`, `dokumen-kapal`, `perawatan-kapal`, `kapal-bekas` (judul, subjudul, CTA konsisten).
- Memperluas konten SEO pada `/layanan` dan memperbaiki perataan list (“Mengapa Memilih…”).

### Performa & Build
- `next.config.mjs`: Menonaktifkan `compress` di dev untuk menghindari crash memori zlib; mengurangi format gambar ke `webp` saja untuk dev.

### Aset & Tautan
- Menggunakan aset gambar baru untuk berbagai section:
  - `public/images/collecting/...`, `cumi/...`, `longliner/...`, `purseseine/...`, `cakalang/...`
  - Layanan: `produksi-kapal-galangan-batang-jateng.jpg`, `jasa-pengurusan-dokumen-kapal.png`, `jasa-perawatan-perbaikan-kapal-kayu-batang.png`, `jasa-jual-beli-kapal-second.png`
  - Tenaga ahli: `tenaga-ahli-batang-shipyard-M-Hilmi-syahfata.jpeg`
  - Sertifikasi: `Hempel Paint School.jpg` + PDF Hempel/Jotun.

### Aksesibilitas & UX
- Dropdown bisa dibuka via keyboard (`:focus-within`).
- Elemen interaktif mempertahankan hover ke submenu dengan area aman (padding bawah trigger + delay via transition).

---

Jika membutuhkan daftar file yang diubah lebih rinci atau screenshot, beri tahu—akan saya tambahkan pada dokumen ini.


