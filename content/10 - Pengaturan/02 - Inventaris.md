###  Pengertian

  

Menu **Pengaturan Inventaris** digunakan untuk mengatur format penamaan dan perhitungan dasar dalam sistem stok barang.

Fitur ini membantu menjaga konsistensi kode dan nama barang di seluruh cabang optik, sekaligus memastikan harga pokok barang (HPP) selalu akurat.

![[02 - Inventaris.png]]
<figcaption><b>📸 : Tampilan Halaman Pengaturan Inventaris</b></figcaption>


  
  

---

  

##  Komponen Utama

  

###  Format Kode

  

Menentukan pola kode unik untuk setiap item di dalam database.

Opsi yang tersedia:

  

- **Hanya ID** → sistem hanya menampilkan kode unik ID barang.

- **Kode Kategori + ID** → sistem menambahkan kode kategori sebelum ID, misalnya `LEN-0150`.

  

---

  

###  Format Nama Item

  

Menentukan cara penulisan nama item pada daftar inventaris dan laporan.

Opsi yang tersedia:

  

- **Lengkap** → menampilkan nama lengkap beserta merek dan kode, contoh:

`Lensa - Kodak (SPH-1.50/CYL-0.50/ADD000)`

- **Singkat** → menampilkan versi nama ringkas, contoh:

`Lensa - Kodak 1.50/C-0.50`

- **Singkat Tanpa Kode** → nama sederhana tanpa kode teknis.

  

 _Contoh Format Nama:_

  

| Tipe | Contoh |
|------|--------|
| Lengkap | Lensa - Kodak (SPH-1.50/CYL-0.50/ADD000) |
| Singkat | Lensa - Kodak 1.50/C-0.50 |
| Singkat Tanpa Kode | Lensa - Kodak |


  

---

  

###  Perbarui Nama Item

  

Fungsi ini digunakan untuk **memperbarui seluruh nama item** di inventaris agar sesuai dengan format baru yang telah dipilih.

  

 **Kapan sebaiknya digunakan:**

  

- Setelah mengubah format nama item di pengaturan.

- Setelah melakukan impor data barang dalam jumlah besar.

- Saat ingin menyeragamkan penulisan nama seluruh produk.

  

Tombol: **Perbarui Nama Item**

  

---

  

###  Hitung Harga Pokok Barang (HPP)

  

Fitur ini menghitung ulang **harga pokok rata-rata (HPP)** berdasarkan seluruh riwayat pembelian barang.

  

 **Kapan sebaiknya dilakukan:**

  

- Setelah impor data stok dalam jumlah besar.

- Jika terdapat selisih nilai persediaan yang tidak sesuai.

- Secara berkala untuk memastikan akurasi laporan keuangan.

  

Tombol: **Hitung Harga Pokok**

  

---

  

###  Perbarui

  

Gunakan tombol **Perbarui** di bagian kanan bawah halaman untuk menyimpan semua perubahan pengaturan.

  

---

  

##  Catatan Hak Akses

  

- Menu ini hanya bisa diakses dan diubah oleh **Admin**.

- Role lain seperti _Manager_ hanya bisa melihat pengaturan tanpa mengubah format kode atau perhitungan HPP.

---
 [[01 - Akun]] - [[03 - Faktur]]


