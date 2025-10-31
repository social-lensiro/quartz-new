### Pengertian

Fitur **Barang** pada aplikasi Lensiro berfungsi untuk **mengelola dan memantau stok barang** secara menyeluruh — mulai dari **penerimaan, penyimpanan, pengeluaran, hingga pelaporan**.  
Tujuan utamanya adalah untuk **mengoptimalkan operasional bisnis**, **mencegah kehabisan atau kelebihan stok**, serta **menjamin ketersediaan produk untuk pelanggan**.

Selain itu, fitur ini juga memudahkan pengelolaan detail setiap produk, seperti kategori, brand, harga, serta ukuran optik seperti SPH, CYL, dan ADD, yang penting dalam industri optik.

---

### Fungsi Utama
- Menampilkan daftar seluruh barang yang ada di sistem beserta **harga beli, harga jual, dan status aktif barang**.  
- Menyediakan fitur **filter dan pencarian** untuk menampilkan barang berdasarkan kategori, brand, warna, ukuran, status, dan masa kedaluwarsa.  
- Memungkinkan pengguna **menambah barang baru** dengan detail lengkap.  
- Menyediakan tombol **Set Harga** untuk memperbarui harga barang secara massal.  
- Menampilkan informasi **riwayat transaksi barang**, termasuk status aktif dan tanggal kedaluwarsa (bila ada).  

---

### Langkah Menggunakan Fitur Barang

#### Melihat & Menyaring Data Barang
1. Masuk ke menu **Gudang → Barang**.  
2. Gunakan filter untuk menampilkan barang berdasarkan:
   - Kategori dan Sub Kategori  
   - Brand dan Sub Brand  
   - Warna dan Sub Warna  
   - Ukuran SPH, CYL, atau ADD  
   - Status Aktif dan Riwayat Transaksi  
3. Klik **Tampilkan** untuk memunculkan daftar sesuai filter.  
4. Daftar barang akan muncul dalam bentuk **tabel** dengan kolom:  
   - Kode Barang  
   - Nama Barang  
   - Harga Beli & Harga Jual  
   - Status Barang  
   - Kedaluwarsa  
   - Brand, Sub Brand, dan Kategori  
5. Anda dapat mengganti tampilan ke **List atau Table View** sesuai kebutuhan.

![[02 - Barang.png]]  
<figcaption><b>📸 Gambar: Daftar Barang (Filter & List)</b></figcaption>

---

#### Menambahkan Barang Baru
1. Klik tombol **Tambah Barang** di pojok kanan atas halaman.  
2. Akan muncul form **Tambah Barang Baru** seperti ilustrasi di bawah.  
3. Isi data sesuai kolom yang tersedia:
   - **Kategori Barang**  
   - **Sub Kategori Barang**  
   - **Brand & Sub Brand**  
   - **Harga Beli dan Harga Jual**  
   - **Ukuran optik** (SPH, CYL, ADD, dan Warna)  
4. Pastikan semua data sudah lengkap dan benar.  
5. Klik **Simpan / Tambah Barang** untuk menyimpan ke sistem.  

![[02 - Barangd.png]]  
<figcaption><b>📸 Gambar: Form Tambah Barang</b></figcaption>

---

### Membuat Barang Massal (Item Massal)

Fitur **Item Massal (Beta)** memungkinkan pengguna membuat banyak item sekaligus berdasarkan kombinasi nilai resep optik (SPH, CYL, dan ADD).  
Fitur ini dirancang khusus untuk toko optik agar pembuatan katalog lensa menjadi lebih cepat dan otomatis.

#### Langkah-langkah
1. Klik tombol **Tambah Barang** → pilih tab **Item Massal (Beta)**.  
2. Isi **Informasi Dasar** seperti kategori, sub kategori, brand, dan warna.  
3. Pilih nilai **SPH**, **CYL**, dan **ADD** yang diinginkan.  
4. Sistem akan menampilkan jumlah kombinasi otomatis di bawah.  
5. Klik **Create Bulk Item**  untuk membuat semua kombinasi barang secara otomatis.  

![[02 - Barang-2.png]]

<figcaption><b>📸 Gambar: Form Pembuatan Barang Massal berdasarkan kombinasi SPH, CYL, dan ADD*</b></figcaption>

> ⚠️ Gunakan dengan hati-hati. Jumlah kombinasi yang besar (ratusan item) bisa memerlukan waktu proses lebih lama.
![[Pasted image 20251028114151.png]]
---

### Kapan Fitur “Barang Massal” Digunakan?

Fitur **Barang Massal (Item Massal)** **biasanya digunakan untuk produk lensa**, karena satu jenis lensa dapat memiliki **puluhan hingga ratusan variasi ukuran** berbeda.  
Dengan fitur ini, kamu tidak perlu menambahkan setiap ukuran satu per satu — sistem akan **membuat seluruh kombinasi otomatis** dari nilai SPH, CYL, dan ADD yang kamu pilih.

#### Contoh Kasus
Misalnya kamu ingin menambahkan produk:
> **Essilor Eyezen Bluecut**

Dan kamu ingin membuat variasinya berdasarkan:
- **SPH**: +0.25 s/d −6.00  
- **CYL**: 0.00, −0.25, −0.50, −0.75  
- **ADD**: +0.75 dan +1.25  

Sistem otomatis menghitung seluruh kombinasi dari nilai-nilai tersebut, contohnya:  
+1.00 / −0.25 / +0.75  
−2.25 / −0.50 / +1.25  
−3.75 / 0.00 / +0.75  
...dst

Dari kombinasi itu bisa muncul **ratusan varian barang sekaligus**, lengkap dengan kode otomatis seperti:  
> `LNS-EYEZEN-(-2.25/-0.50/+1.25)`

> ⚙️ Fitur ini sangat berguna bagi toko optik yang menjual berbagai jenis lensa **Single Vision**, **Progressive**, atau **Bluecut**,  
> karena sistem dapat langsung membuat seluruh ukuran standar industri dengan cepat dan konsisten.

---

### Riwayat Pergerakan Barang

Fitur ini menampilkan **riwayat keluar–masuk barang (stok movement)** untuk setiap item secara kronologis.  
Fungsinya untuk menelusuri semua aktivitas yang menyebabkan stok bertambah atau berkurang — seperti pembelian, penjualan, retur, dan mutasi antar cabang.

#### Langkah-langkah
1. Buka menu **Gudang → Barang**.  
2. Pilih salah satu barang dari daftar.  
3. Klik ikon **panah biru (➡️)** di sisi kanan baris barang.  
4. Sistem akan menampilkan **daftar riwayat pergerakan stok**, yang berisi semua transaksi terkait barang tersebut.  

![[02 - Barang riwayat-1.png]]  
<figcaption><b>📸 Gambar: Riwayat Pergerakan Barang</b></figcaption>

> 🟢 **Hijau (+)** menandakan barang **masuk** (pembelian, retur penjualan, mutasi masuk).  
> 🔴 **Merah (−)** menandakan barang **keluar** (penjualan, retur pembelian, mutasi keluar).  
> Riwayat ini membantu pengguna memastikan setiap perubahan stok terekam dengan akurat dan dapat ditelusuri kapan pun.

---

### Lakukan Operasi pada Barang

Menu **Lakukan Operasi** digunakan untuk melakukan berbagai tindakan terhadap barang yang dipilih dari daftar.

#### Langkah-langkah
1. Centang satu atau beberapa barang di daftar tabel.  
2. Klik tombol **Lakukan Operasi** di bagian atas tabel.  
3. Pilih salah satu opsi berikut:

| Opsi Operasi | Fungsi |
|---------------|--------|
| **Aktifkan** | Mengubah status barang menjadi aktif agar bisa digunakan pada transaksi. |
| **Nonaktifkan** | Menonaktifkan barang agar tidak muncul pada daftar pemilihan transaksi. |
| **Tampilkan Barcode** | Menampilkan dan mencetak barcode barang terpilih. |
| **Hapus Barang** | Menghapus barang yang belum pernah memiliki transaksi (pembelian/penjualan). |

![[02 - Barang operasi.png]]  
<figcaption><b>📸 Gambar: Menu Lakukan Operasi (Aktifkan, Nonaktifkan, Barcode, dan Hapus)</b></figcaption>

> ⚠️ Jika barang memiliki transaksi aktif, sistem akan menampilkan pesan:  
> **“Item yang memiliki transaksi tidak akan dihapus.”**  
> Solusi: ubah statusnya menjadi **Nonaktif** bila tidak ingin digunakan lagi.  

---

### Mengatur atau Memperbarui Harga Barang

Fitur **Set Harga** digunakan untuk memperbarui harga barang secara massal.  
Bisa digunakan untuk mengubah **Harga Beli**, **Harga Jual**, atau tipe harga lain seperti *Standard*, *Premium*, dan *Wholesale*.

#### Langkah-langkah
1. Pilih barang yang ingin diubah → klik **Set Harga**.  
2. Pilih **Tipe Harga** yang akan diperbarui.  
3. Masukkan **harga baru**.  
4. Tabel di bawah akan menampilkan barang-barang yang akan diperbarui.  
5. Klik **Lakukan Perubahan** untuk menyimpan hasil.

![[02 - Barang edit.png]]  
<figcaption><b>📸 Gambar: Form Set Harga Barang dan Daftar Barang yang Diperbarui*</b></figcaption>

> 💡 Setelah disimpan, sistem otomatis memperbarui harga di seluruh modul terkait (**Penjualan**, **Pembelian**, dan **Stok**).

---

### Catatan
- Data barang yang tersimpan langsung terhubung dengan modul **Penjualan, Pembelian, dan Stok**.  
- Barang *Non-Aktif* tidak muncul di daftar pemilihan transaksi.  
- Perubahan data otomatis diperbarui di seluruh sistem.  
- Disarankan untuk menambahkan data barang dengan struktur **kategori & brand yang konsisten** agar laporan mudah dibaca.  

---

 [[05 - Gudang/01 - Stock|Sebelumnya]] - [[05 - Gudang/03 - Stock Mutasi|Berikutnya]] 

