# StockEase 📦

**StockEase** adalah aplikasi manajemen inventaris berbasis web yang dibangun dengan HTML, CSS, dan JavaScript murni (Vanilla JS). Aplikasi ini dirancang untuk membantu pengelolaan stok produk, data supplier, dan riwayat transaksi secara sederhana langsung di browser.

---

## 🖼️ Preview

> _Tambahkan screenshot aplikasi di sini_
>
> Contoh: `![Dashboard StockEase](screenshots/dashboard.png)`

---

## ✨ Fitur Utama

### 📊 Dashboard
- Ringkasan total produk, total nilai stok, dan jumlah produk yang stoknya menipis
- Alert otomatis ketika ada produk dengan stok di bawah batas minimal
- Filter produk berdasarkan kategori, supplier, dan status stok
- Tampilan tabel lengkap dengan indikator warna untuk stok kritis

### 📋 Semua Produk
- Daftar lengkap seluruh produk inventaris
- Fitur pencarian produk secara real-time berdasarkan nama

### 🏭 Supplier
- Daftar mitra supplier beserta informasi kontak dan alamat
- Tambah supplier baru melalui modal form
- Edit dan hapus data supplier dengan konfirmasi

### 📦 Manage Stok
Terdiri dari 3 tab:
- **Transaksi Baru** — Form untuk menambahkan produk baru ke inventaris (nama, kategori, satuan, stok awal, stok minimal, harga, dan supplier)
- **Transaksi Stok** — Tambah atau kurangi stok produk yang sudah ada dengan sistem modal konfirmasi
- **Edit Stok** — Ubah data produk (kategori, harga, stok minimal, supplier)

### 📜 Riwayat Transaksi
- Log lengkap semua perubahan stok (barang masuk & keluar)
- Filter berdasarkan rentang tanggal, nama produk, dan jenis transaksi
- Menampilkan stok sebelum dan sesudah transaksi

---

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|---|---|
| HTML5 | Struktur halaman dan komponen UI |
| CSS3 | Styling, layout Grid & Flexbox, animasi |
| JavaScript (ES6) | Logika aplikasi, DOM manipulation, event handling |
| localStorage | Penyimpanan data di browser (client-side) |

---

## 🚀 Cara Menjalankan

Tidak perlu instalasi apapun. Cukup:

1. Clone repository ini:
   ```bash
   git clone https://github.com/username/stockease.git
   ```

2. Buka folder project:
   ```bash
   cd stockease
   ```

3. Buka file `index.html` langsung di browser, atau gunakan ekstensi **Live Server** di VS Code untuk pengalaman terbaik.

---

## 📁 Struktur File

```
stockease/
├── index.html      # Struktur utama aplikasi (HTML)
├── style.css       # Semua styling dan layout
├── app.js          # Logika aplikasi (JavaScript)
└── README.md
```

---

## ⚠️ Catatan Penting

Aplikasi ini menggunakan **localStorage** sebagai penyimpanan data, sehingga:
- Data hanya tersimpan di browser yang digunakan
- Data akan hilang jika cache/localStorage browser dihapus
- Tidak ada sinkronisasi antar perangkat

Proyek ini adalah implementasi **front-end only** tanpa backend atau database eksternal. Pengembangan selanjutnya dapat mencakup integrasi dengan Node.js + database seperti MongoDB atau PostgreSQL.

---

## 🔮 Rencana Pengembangan

- [ ] Integrasi backend dengan Node.js & Express
- [ ] Database dengan MongoDB atau PostgreSQL
- [ ] Fitur autentikasi pengguna (login/register)
- [ ] Export laporan ke PDF atau Excel
- [ ] Tampilan responsif untuk perangkat mobile
- [ ] Grafik dan chart untuk visualisasi data stok

---

## 👨‍💻 Developer

**Rian** — Computer Science Student

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://linkedin.com/in/username)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=flat&logo=github)](https://github.com/username)

---

## 📄 Lisensi

Project ini dibuat untuk keperluan pembelajaran dan portofolio. Bebas digunakan sebagai referensi.
