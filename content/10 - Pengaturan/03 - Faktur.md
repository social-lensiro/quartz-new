###  Pengertian

Menu **Pengaturan Faktur** digunakan untuk mengatur tampilan dan perilaku faktur penjualan yang dihasilkan sistem.

Dari halaman ini, pengguna dapat menambahkan logo toko, menentukan tampilan default daftar penjualan, serta memilih jenis format faktur yang digunakan (thermal, portrait, atau landscape).

  

![[03 - Faktur.png]]

<figcaption><b>📸 : Tampilan Halaman Pengaturan Faktur</b></figcaption>
  
  

---

  

##  Komponen Utama

  

###  Logo Faktur

  

- Unggah gambar logo yang akan muncul di bagian atas faktur penjualan.

- Format yang disarankan: `.png` atau `.jpg` dengan latar belakang transparan agar hasil cetak rapi.

  

---

  

###  Proses Penjualan Lunas

  

Fitur ini memungkinkan admin memproses seluruh transaksi menjadi **status lunas** secara otomatis.

Biasanya digunakan setelah impor data penjualan besar-besaran, atau untuk menyesuaikan saldo stok dengan laporan keuangan terbaru.

  

**Kapan digunakan:**

  

- Setelah migrasi data dari sistem lama.

- Setelah proses update stok dan penyesuaian saldo kas.

  

Tombol: **Proses Penjualan Lunas**

  

---

  

###  QR Code Member Portal

  

Menampilkan atau menyembunyikan QR code di faktur, yang mengarahkan pelanggan ke **portal member** Lensiro.

Opsi:

  

- **Tampilkan** – QR code muncul di faktur penjualan.

- **Sembunyikan** – QR code tidak ditampilkan.

  

---

  

###  URL Member Portal

  

Menentukan alamat situs atau tautan yang diakses pelanggan dari QR code.

Contoh: `https://member.lensiro.com/`

  

---

  

###  Tampilan Default Daftar Penjualan

  

Menentukan tampilan awal halaman daftar penjualan.

Opsi yang tersedia:

  

- **Card View** – menampilkan data dalam bentuk kartu (lebih visual).

- **Table View** – menampilkan data dalam tabel ringkas.

  

---

  

###  Varian Faktur Penjualan

  

Menentukan jenis format cetak faktur.

Pilihan:

  

- **Landscape**

- **Portrait**

- **Thermal** (ukuran kecil untuk printer kasir mini)

  

---

  

###  Kategori Barang yang Dikecualikan dari Kompensasi

  

Menentukan kategori barang yang **tidak dihitung sebagai bagian dari kompensasi komisi penjualan**, misalnya:

  

- Frame (FRM)

- Lensa (LEN)

- Aksesori (ACC)

  

Pengguna dapat mencentang kategori yang ingin dikecualikan dari perhitungan bonus atau komisi.

  

---

  

###  Tombol Perbarui

  

Setelah semua pengaturan disesuaikan, klik tombol **Perbarui** untuk menyimpan perubahan.

  

---

  

## Catatan Hak Akses

  

- Pengaturan ini **hanya bisa diubah oleh Admin**.

- Role _Manager_ bisa melihat tampilan, tetapi tidak dapat mengunggah logo atau memproses faktur.

- Role lain seperti _Cashier_ atau _Staff_ tidak memiliki akses ke menu ini.

---
[[10 - Pengaturan/02 - Inventaris|02 - Inventaris]] - [[10 - Pengaturan/04 - Penjualan|04 - Penjualan ]]




