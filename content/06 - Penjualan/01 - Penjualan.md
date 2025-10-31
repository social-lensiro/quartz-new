### Pengertian

Fitur **Penjualan** pada aplikasi **Lensiro** digunakan untuk mencatat dan mengelola seluruh transaksi penjualan barang maupun jasa optik.

Proses ini mencakup dua jenis utama, yaitu **Penjualan Langsung** dan **Penjualan Order**, serta tahap-tahap pendukung seperti pembayaran, fasset (pemotongan lensa), quality control (QC), pengambilan barang, dan pencetakan nota.

Melalui modul ini, toko optik dapat memantau setiap transaksi dari awal hingga selesai secara sistematis, efisien, dan terintegrasi dengan stok serta laporan keuangan.

---

## Jenis Penjualan

Lensiro memiliki dua tipe penjualan utama:

| Jenis | Deskripsi |
|:--|:--|
| **Penjualan Langsung** | Transaksi di mana barang dapat langsung dibawa oleh pelanggan setelah pembayaran selesai. Cocok untuk barang jadi seperti frame, softlens, atau aksesori. |
| **Penjualan Order** | Transaksi yang memerlukan proses pengerjaan seperti pemotongan lensa dan perakitan frame sebelum diserahkan ke pelanggan. |

---

## Penjualan Langsung

### Pengertian

Penjualan Langsung digunakan untuk mencatat pembelian barang yang **langsung dibayar dan dibawa oleh pelanggan tanpa proses tambahan**.

Biasanya digunakan untuk transaksi cepat di kasir.

![[01 - Penjualan.png]]
<figcaption><b>📸 Gambar: Form Penjualan</b></figcaption>

### Langkah-langkah

1. Klik menu **Penjualan → Tambah Penjualan Langsung**.  
2. Isi **Cabang**, **Sales/Kasir**, dan **Tanggal Transaksi**.  
3. Pilih atau tambahkan **Pelanggan Baru** jika belum ada.  
4. Tambahkan **Barang** yang dibeli dari daftar stok.  
5. Masukkan **Diskon (jika ada)**, serta **Keterangan Tambahan**.  
6. Tentukan **Metode Pembayaran** (Cash / Debit / Credit).  
7. Klik tombol **💾 Simpan Penjualan Langsung**.


![[01 - Penjualan-3.png]]
<figcaption><b>📸 Gambar: Form Penjualan Langsung</b></figcaption>

 *Keterangan:* Form ini digunakan untuk mencatat transaksi instan. Barang dapat langsung dibawa setelah pembayaran.*

---

## Penjualan Order

### Pengertian

Fitur **Penjualan Order** digunakan untuk transaksi yang memerlukan proses tambahan sebelum barang dapat diserahkan, seperti pengukuran resep mata, pemotongan lensa, atau perakitan frame.

---

### Langkah-langkah

1. Klik menu **Penjualan → Tambah Penjualan Order**.  
2. Isi informasi pelanggan, cabang, sales, dan tanggal transaksi.  
3. Tambahkan daftar barang (misalnya frame dan lensa).  
4. Isi data resep optik: SPH, CYL, AXIS, ADD, dan lain-lain.  
5. Klik **💾 Buat Penjualan** untuk menyimpan order.


![[01 - Penjualan-2.png]]
<figcaption><b>📸 Gambar: Form Penjualan Order</b></figcaption>

📝 *Keterangan:* Tampilan pembuatan order baru dengan input pelanggan, cabang, dan resep optik pelanggan.*

---

## Pembayaran (DP / Lunas)

Sebelum order dapat diproses ke tahap fasset, pelanggan harus melakukan **pembayaran awal (DP)** atau **langsung pelunasan**.

Langkah-langkah:

1. Buka transaksi order yang sudah dibuat.  
2. Klik tombol **Tambah Pembayaran** di panel kanan.  
3. Pilih metode pembayaran: Cash, Debit, atau Transfer.  
4. Masukkan nominal sesuai jumlah yang dibayarkan.  
5. Klik **Simpan Pembayaran**.

![[00 - Penjualanfsf.png]]
<figcaption><b>📸 Gambar: Form Pembayaran Penjualan Order</b></figcaption>

 *Keterangan:* Form ini digunakan untuk mencatat pembayaran awal (DP) atau pelunasan pelanggan.*

 *Jika pembayaran belum penuh, status transaksi menjadi **DP**. Jika total sudah terbayar penuh, status berubah menjadi **Lunas**.*

---

## Fasset (Pemotongan Lensa)

Setelah pembayaran diterima dan barang siap, teknisi dapat melakukan proses **Fasset**.

Langkah-langkah:

1. Klik **Tambah Fasset** pada transaksi terkait.  
2. Pilih **Pelaku Fasset (teknisi)**.  
3. Tentukan **Status Pekerjaan**:  
   - Dikerjakan  
   - Berhasil  
   - Gagal  
4. Centang item yang sedang dikerjakan (frame dan lensa).  
5. Klik **Simpan Fasset**.

![[00 - Penjualansd.png]]
<figcaption><b>📸 Gambar: Form Tambah Fasset</b></figcaption>

 *Keterangan:* Form pencatatan proses pemotongan dan pemasangan lensa ke frame oleh teknisi.*

---

### Riwayat Fasset

Setelah disimpan, hasil pekerjaan muncul di bagian **Riwayat Fasset**, berisi nama pelaku, tanggal pengerjaan, status, dan catatan teknisi.

![[00 - Penjualan fasaet.png]]
<figcaption><b>📸 Gambar: Riwayat Fasset Setelah Proses Selesai</b></figcaption>

 *Keterangan:* Riwayat proses fasset yang telah berhasil disimpan oleh teknisi.*

---

## Quality Control (QC)

Setelah fasset selesai, bagian QC melakukan pemeriksaan hasil kerja berdasarkan 14 poin standar optik, meliputi:

✅ Kebersihan lensa  
✅ Coating & warna lensa  
✅ Keutuhan frame  
✅ Ketepatan sumbu, PD, ADD, dan tinggi pandang  

Setiap poin harus diceklis sebelum QC dapat disimpan.

Jika seluruh pemeriksaan **lolos**, status order berubah menjadi **Siap Diambil**.

![[00 - Penjualan qc.png]]
<figcaption><b>📸 Gambar: Form Quality Control (QC) Fasset</b></figcaption>

 *Keterangan:* Form pemeriksaan hasil fasset berdasarkan checklist kualitas optik.*

---

## Pelunasan dan Pengambilan Barang

Setelah QC disetujui, pelanggan dapat melunasi sisa pembayaran (jika sebelumnya DP) dan mengambil pesanan.

Langkah-langkah:

1. Klik **Tambah Pembayaran** jika masih ada sisa tagihan.  
2. Setelah status menjadi **Lunas**, klik **Simpan Pengambilan**.  
3. Isi tanggal dan nomor faktur pengambilan.  
4. Klik **Simpan**.

![[00 - Penjualan luans.png]]
<figcaption><b>📸 Gambar: Form Pengambilan Barang</b></figcaption>

 *Keterangan:* Menu untuk mencatat tanggal pengambilan setelah QC selesai dan pembayaran lunas.*

---

## Cetak Nota Penjualan

Setelah order selesai, sistem menyediakan fitur **Cetak Nota** sebagai bukti transaksi pelanggan.

Langkah-langkah:

1. Buka transaksi penjualan yang sudah selesai.  
2. Klik tombol **Tampilkan Order Penjualan → Cetak Nota**.  
3. Pilih format printer (58mm / A4 / PDF).

![[00 - Penjualan nota.png]]
<figcaption><b>📸 Gambar: Cetak Nota Penjualan</b></figcaption>

 *Keterangan:* Fitur untuk mencetak nota resmi pelanggan setelah order selesai.*

---

## Daftar Penjualan

Daftar penjualan menampilkan seluruh transaksi dalam tampilan **kanban**, memudahkan pengguna memantau progres setiap order.

| Kolom        | Arti Status                                        |
| :----------- | :------------------------------------------------- |
| **Diproses** | Order baru dibuat, menunggu fasset atau QC.        |
| **Lunas**    | Pembayaran penuh, siap QC.                         |
|  **Diambil** | Barang sudah lolos QC dan diserahkan ke pelanggan. |

![[00 - Penjualan lisat.png]]
<figcaption><b>📸 Gambar: Kanban View Penjualan</b></figcaption>

 *Keterangan:* Tampilan visual status transaksi penjualan berdasarkan progres pengerjaan.*

---

## Ringkasan Alur Penjualan

| Tahap                          | Deskripsi                        | Status Sistem          |
| :----------------------------- | :------------------------------- | :--------------------- |
| 1. **Buat Order**              | Isi data pelanggan dan barang    | 📝Draft                |
| 2. **Pembayaran Awal**         | DP / Lunas                       | Menunggu Proses        |
| 3. **Fasset**                  | Pemotongan dan pemasangan lensa  | Dikerjakan /  Berhasil |
| 4. **QC**                      | Pemeriksaan kualitas hasil kerja | Lolos /  Gagal         |
| 5. **Pelunasan & Pengambilan** | Serah terima ke pelanggan        | Selesai                |
| 6. **Cetak Nota**              | Bukti transaksi pelanggan        |  Arsip Penjualan       |



 [[07 - Permintaan Stock]] - [[06 - Penjualan/02 - Komisi|Berikutnya]] 

---

