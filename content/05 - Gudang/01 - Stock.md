### Pengertian

Fitur **Stok Barang** digunakan untuk **melihat dan memantau persediaan barang secara real-time** di seluruh cabang dan gudang.  
Semua data stok diperbarui **secara otomatis** setiap kali terjadi transaksi pembelian, penjualan, retur, mutasi, atau stok opname.

Fitur ini juga menyediakan fungsi lanjutan seperti:

- Menelusuri **riwayat pergerakan stok**
- Melihat **detail barang**
- Melakukan **operasi pembelian ulang atau stok opname**
- Serta **mencetak barcode** untuk keperluan label fisik barang.

---

## Fungsi Utama

- Menampilkan daftar seluruh barang beserta jumlah stok per cabang.
- Menyediakan **filter pencarian detail** berdasarkan:
  - Cabang
  - Jenis stok (tersedia, hampir habis, kosong)
  - Kategori & Sub Kategori
  - Brand & Sub Brand
  - Warna & Sub Warna
  - Ukuran SPH, CYL, ADD
  - Rentang harga beli & harga jual
- Menampilkan total kuantitas stok di bagian kanan atas.
- Mendukung tampilan **Tabel** atau **List View**.
- Terhubung langsung ke **detail barang**, **riwayat stok**, dan **operasi stok**.

---

## Langkah-langkah Melihat Data Stok

Buka menu **Gudang → Stok**.  
Gunakan **filter pencarian** di bagian atas untuk menampilkan data spesifik:

![[01 - Stock-1.png]]
<figcaption><b>Gambar: Tampilan Menu Gudang</b></figcaption>

- Pilih **Cabang** yang ingin ditampilkan.
- Atur **Jenis Stok**:

1. **Tampilkan Semua Barang**  
   Menampilkan seluruh daftar barang tanpa memperhatikan jumlah stoknya — baik yang tersedia maupun kosong.

2. **Tampilkan Barang yang Tersedia di Stok**  
   Menampilkan hanya barang-barang yang memiliki stok **lebih dari 0**, yaitu barang yang **siap dijual atau digunakan**.

3. **Tampilkan Barang yang Perlu Dipesan**  
   Menampilkan barang dengan jumlah stok **0 atau di bawah ambang batas minimal**, menandakan barang tersebut **perlu dilakukan pembelian ulang**.

   - Atur **Kategori Barang**, **Sub Kategori**, **Brand**, **Sub Brand**, **Warna**, dan **Ukuran**.
   - Masukkan **Nama Barang** atau **Rentang Harga** bila diperlukan.

Klik **Tampilkan Barang** atau tekan `Enter`.  
Sistem akan menampilkan daftar stok dalam bentuk tabel seperti berikut:



![[01 - Stock-6.png]]
<figcaption><b>Gambar: Tampilan Menu Stok Barang</b></figcaption>

Kolom yang tersedia meliputi:

- ID Barang
- Nama Barang
- Harga Beli & Harga Jual
- Cabang
- Jumlah Stok
- Tanggal Kedaluwarsa

---

## Melihat Detail Barang

Untuk menampilkan informasi lengkap barang tertentu:

Klik **nama barang** pada tabel.  
Sistem menampilkan halaman **Detail Barang** yang berisi:

- ID & Kode Barang
- Nama Barang
- Harga Jual
- Kategori & Sub Kategori
- Merek & Sub Merek
- Warna & Sub Warna
- Ukuran CYL, SPH, ADD
- Keterangan tambahan

![[01 - Stock detail.png]]
<figcaption><b>Gambar: Tampilan Informasi Detail Barang</b></figcaption>

---

## Melihat Riwayat Pergerakan Stok

Untuk melihat pergerakan stok barang (masuk dan keluar):

Klik tombol **Detail ➜** di kolom pertama tabel stok.  
Sistem menampilkan **riwayat transaksi stok** yang memengaruhi jumlah barang tersebut.  
Setiap baris menampilkan:

- Jenis transaksi (Pembelian, Penjualan, Mutasi, dll)
- Jumlah (+ atau -)
- Harga Pokok
- Nilai Total
- Inventori kumulatif

![[01 - Stock riawayat.png]]
<figcaption><b>Gambar: Riwayat Pergerakan Stok</b></figcaption>

> Warna **Hijau (+)** = stok bertambah (pembelian, mutasi masuk)  
> Warna **Merah (-)** = stok berkurang (penjualan, mutasi keluar)

---

### Harga Pokok & Inventori Kumulatif (Metode FIFO)

Sistem Lensiro menghitung nilai stok menggunakan **metode FIFO (First In, First Out)**, di mana barang yang pertama kali masuk dianggap terjual terlebih dahulu.  
Dengan cara ini, laporan stok dan HPP (Harga Pokok Penjualan) selalu akurat.

#### Contoh Riwayat Pergerakan Stok

|No|Jenis Transaksi|Jumlah|Harga Pokok / Unit|Total Nilai|Inventori Kumulatif|Sisa Stok|
|---|---|---|---|---|---|---|
|1|Pembelian|5|1.100.000|+5.500.000|5.500.000|5|
|2|Pembelian|5|1.100.000|+5.500.000|11.000.000|10|
|3|Pembelian|5|1.100.000|+5.500.000|16.500.000|15|
|4|Pembelian|5|1.100.000|+5.500.000|22.000.000|20|
|5|Pembelian|10|1.200.000|+12.000.000|34.000.000|30|
|6|Pembelian|1|1.300.000|+1.300.000|35.300.000|31|

#### Jika Terjual 24 Unit (FIFO)

|Asal Batch|Diambil|Harga / Unit|Nilai Pokok|
|---|---|---|---|
|Batch 1|5|1.100.000|5.500.000|
|Batch 2|5|1.100.000|5.500.000|
|Batch 3|5|1.100.000|5.500.000|
|Batch 4|5|1.100.000|5.500.000|
|Batch 5|4|1.200.000|4.800.000|
|**Total Terjual (24 unit)**|||**Rp 26.800.000**|

**Harga Pokok Penjualan (HPP)** = **Rp 26.800.000**

#### Sisa Stok Setelah Penjualan

|Asal Batch|Sisa Unit|Harga / Unit|Nilai Sisa|
|---|---|---|---|
|Pembelian 5|6|1.200.000|7.200.000|
|Pembelian 6|1|1.300.000|1.300.000|
|**Total Sisa Stok**|**7 unit**|–|**Rp 8.500.000**|

**Harga pokok rata-rata sisa stok per unit ≈ Rp 1.214.286**

---

### Kesimpulan

- **Harga Pokok** = biaya modal per unit barang (digunakan untuk menghitung HPP).  
- **Inventori Kumulatif** = total nilai aset stok yang masih ada di gudang.  
- Lensiro menggunakan metode **FIFO** agar nilai stok dan laba rugi selalu akurat.  
- Pada contoh di atas:
  - Inventori sebelum penjualan: **Rp 35.300.000**
  - Nilai barang keluar (HPP): **Rp 26.800.000**
  - Inventori sesudah penjualan: **Rp 8.500.000**
  - Sisa stok: **7 unit**
    - 6 unit @ Rp 1.200.000
    - 1 unit @ Rp 1.300.000

---

## Melakukan Operasi Barang

Untuk menambah atau menyesuaikan stok:

1. Klik **nama barang** terlebih dahulu untuk membuka halaman detail.  
2. Setelah itu klik tombol **Lakukan Operasi** di pojok kanan atas.  
3. Pilih jenis operasi yang diinginkan:

### Pembelian Ulang Barang
Digunakan untuk menambah stok dari supplier.  
Form yang muncul **sama seperti modul Pembelian Order** di menu Pembelian.

### Stok Opname
Digunakan untuk mencocokkan data stok aktual dengan stok sistem.  
Form yang muncul **sama seperti modul Stok Opname** di menu Gudang.

![[01 - Stock operasi opname.png]]
<figcaption><b>Gambar: Menu Lakukan Operasi (Pembelian / Stok Opname)</b></figcaption>

> Hanya pengguna dengan hak akses **Admin Gudang** atau **Supervisor** yang dapat menjalankan operasi stok.

---

## Mencetak Barcode Barang

Untuk mencetak label barcode:

1. Centang barang-barang yang ingin dicetak di daftar stok.  
2. Klik tombol **Lihat Barcode**.  
3. Sistem menampilkan tampilan barcode lengkap berisi:
   - Nama Barang  
   - Harga  
   - Kode Barang  
4. Klik **Print** untuk mencetak.

![[01 - Stock barcode.png]]
<figcaption><b>Gambar: Tampilan Cetak Barcode Barang</b></figcaption>

> Barcode digunakan untuk mempercepat proses input di modul **Penjualan**, **Pembelian**, dan **Stok Opname** menggunakan scanner.

---

## Catatan Tambahan

- Semua data stok bersifat **otomatis dan real-time**.  
- Tidak dapat dilakukan pengeditan manual pada stok.  
- Untuk menambah stok → gunakan **modul Pembelian** atau **Mutasi Masuk**.  
- Untuk mengurangi stok → gunakan **Penjualan**, **Mutasi Keluar**, atau **Retur Pembelian**.  
- Menu **Lakukan Operasi** hanya muncul setelah **barang diklik**.  
- Gunakan **Cetak Barcode** untuk keperluan labeling dan manajemen inventori fisik.  
- **Stok Opname lebih → tampil sebagai hijau (+)**, menambah jumlah stok.  
- **Stok Opname minus → tampil sebagai merah (-)**, mengurangi jumlah stok.

---

 [[04 - Pembelian/02 - Retur Pembelian|02 - Retur Pembelian]] - [[05 - Gudang/02 - Barang|02 - Barang]]]


