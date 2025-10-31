### Pengertian

Fitur **Pembelian** pada aplikasi **Lensiro** digunakan untuk mencatat seluruh aktivitas pembelian barang atau jasa dari supplier.

Melalui menu ini, pengguna dapat merekam setiap transaksi pembelian — mulai dari pencatatan faktur, penginputan barang, hingga proses pembayaran kepada supplier — secara **terstruktur, transparan, dan mudah ditelusuri**.

Fitur ini membantu toko optik dalam:

- Mengontrol stok barang masuk dari supplier.
- Memastikan setiap pembelian memiliki bukti transaksi digital.
- Menghindari kesalahan pencatatan manual.
- Memonitor nilai pembelian dan hutang kepada supplier.

Dengan sistem pembelian yang terintegrasi, semua data akan langsung terhubung ke modul **Gudang**, **Laporan**, dan **Akuntansi** sehingga alur data berjalan otomatis tanpa perlu input ulang.

---

## Langkah-langkah Menggunakan Fitur Pembelian

### Buka Menu Pembelian

Klik menu **Pembelian** pada sidebar kiri, kemudian pilih sub-menu **Daftar Pembelian**.

![[01 - Order Pembelian order.png]]
<figcaption><b>Gambar: Tampilan Daftar Pembelian</b></figcaption>

---

### Tambah Pembelian Baru

Klik tombol **Tambah Pembelian Order** di pojok kanan atas untuk membuat transaksi baru.  
Sistem akan menampilkan halaman form pembelian seperti gambar di bawah.


![[01 - Order Pembelian.png]]
<figcaption><b>Gambar: Tampilan Form Pembelian (Informasi Dasar dan Pemilihan Barang)</b></figcaption>

#### Informasi Dasar

Berisi data utama pembelian seperti:

- **Tipe Pembelian:** pilih _Eksternal (Supplier)_ atau _Internal (Antar Cabang)_
- **Cabang:** lokasi penerima barang
- **Supplier:** pemasok barang
- **Tipe Harga:** jenis harga yang digunakan (opsional)
- **Diskon & Tanggal Order**
- **Keterangan:** catatan tambahan (opsional)

![[01 - Order Pembelian daraas.png]]
<figcaption><b>Gambar: Tampilan Informasi Dasar</b></figcaption>

#### Pemilihan Barang

Bagian kanan digunakan untuk menambahkan barang yang akan dibeli.

- Ketik nama barang di kolom pencarian.
- Jika barang belum ada, klik **Buat Barang Baru**.
- Sistem akan otomatis menampilkan _Ringkasan Order_ di bagian bawah kanan.

![[01 - Order Pembelian barnagf.png]]
<figcaption><b>Gambar: Daftar Barang</b></figcaption>

---

### Daftar Barang Terpilih

Setelah memilih barang, data akan muncul dalam tabel berikut:

![[01 - Order Pembelian terpilih.png]]
<figcaption><b>Gambar: Daftar Barang Terpilih</b></figcaption>

Tabel ini menampilkan kolom:

- **Barang** (nama dan kode barang)
- **Harga Beli**
- **Jumlah**
- **Harga Jual** (jika diperlukan untuk referensi)
- **Keterangan**
- **Aksi (hapus/edit)**

Jika semua data sudah benar, klik tombol **Buat Pembelian Order** di kanan bawah untuk menyimpan transaksi.

---

### Cek Status Pesanan

Setelah order dibuat, sistem akan menampilkan daftar order dengan status awal **Pending** seperti terlihat pada gambar berikut.

![[01 - Order Pembelian orderr.png]]
<figcaption><b>Gambar: Tampilan Daftar Order dengan Status Barang & Status Bayar</b></figcaption>

Kolom ini menunjukkan dua indikator utama:

- **Status Barang** → kondisi pesanan barang
- **Status Bayar** → kondisi pembayaran

---

### Ubah Status Barang

Klik tombol pada kolom **Status Barang**, maka akan muncul tampilan detail status seperti berikut.

![[01 - Order Pembelian statuys.png]]
<figcaption><b>Gambar: Menu Manage Purchase Order – Status Barang</b></figcaption>

Pilih **Telah Dipesan** jika order sudah dikonfirmasi ke supplier, lalu klik tombol **Update Status** di kanan bawah.

---

### Tambah Pembayaran

Kembali ke daftar order, klik pada kolom **Status Bayar**, lalu sistem akan menampilkan halaman detail pembayaran seperti berikut.

![[01 - Order Pembelian bayart.png]]
<figcaption><b>Gambar: Halaman Tambah Pembayaran Order (Cash, Debit, Credit)</b></figcaption>

Isi data:

- **Metode Pembayaran:** Cash, Debit, atau Credit
- **Pembayar:** nama pengguna yang melakukan pembayaran
- **Jumlah Pembayaran** sesuai nilai tagihan

Klik **Tambah Pembayaran** untuk menyimpan transaksi.

---

### Konfirmasi Penerimaan Barang

Setelah pembayaran dilakukan, kembali ke tampilan **Status Barang** dan pilih tab **Penerimaan**.

![[01 - Order Pembelian sealasia.png]]
<figcaption><b>Gambar: Halaman Penerimaan Barang Baru (Form Terima Barang)</b></figcaption>

Isi kolom:

- **Penerima & Tanggal Terima**
- **Nomor Faktur** dari supplier
- **Jumlah Barang Diterima**

Tekan **Terima Barang** untuk menyelesaikan proses penerimaan.  
Sistem otomatis memperbarui status menjadi **Selesai** dan stok barang akan bertambah di gudang.

---

 [[03 - Pelanggan/01 - Data Pelanggan|Sebelumnya]] - [[04 - Pembelian/02 - Retur Pembelian|Berikutnya]] 

