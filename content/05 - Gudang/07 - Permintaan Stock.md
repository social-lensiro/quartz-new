## Permintaan Stok

### Pengertian
Fitur **Permintaan Stok** digunakan untuk menghimpun kebutuhan akan suatu barang atau produk dalam jumlah tertentu yang harus dipenuhi oleh gudang atau cabang lain.  
Fitur ini membantu memastikan ketersediaan barang selalu terjaga dan proses pemenuhan stok antar cabang berjalan **terkontrol dan terdokumentasi**.

---

### Fungsi Utama
- Mengajukan permintaan barang antar cabang.  
- Menampilkan status permintaan: **Pending**, **Approved**, atau **Selesai**.  
- Mengetahui siapa pengaju, dari cabang mana, dan barang apa yang diminta.  
- Memudahkan koordinasi antara **gudang pusat dan cabang** dalam distribusi stok.

---

### Langkah-langkah Membuat Permintaan Stok

#### 1. Melihat Daftar Permintaan Stok
1. Masuk ke menu **Gudang → Permintaan Stok**.  
2. Gunakan **Filter Dasar** untuk mencari data berdasarkan:
   - Pengaju  
   - Cabang asal dan tujuan  
   - Status approval  
3. Klik **Tampilkan** untuk melihat daftar permintaan yang sudah dibuat.  
4. Sistem akan menampilkan data permintaan dalam bentuk tabel berisi kolom:
   - ID, Tanggal, Pengaju, Pelanggan, Barang, Jumlah, dan Status.  

![[07 - Permintaan Stock.png]]
<figcaption><b>📸 Gambar: Daftar Permintaan Stok</b></figcaption>

---

#### 2. Menambah Permintaan Stok
1. Klik tombol **Tambah Permintaan** di pojok kanan atas.  
2. Akan muncul form seperti ilustrasi di bawah ini.  
3. Isi data sesuai kebutuhan:
   - **Permintaan dari cabang** → cabang pengaju.  
   - **Permintaan untuk cabang** → cabang penerima.  
   - **Barang dan jumlah** yang dibutuhkan.  
   - Tambahkan **catatan** bila diperlukan (misal: urgent, restock mingguan, dll).  
4. Klik **Tambah Permintaan Barang** untuk menyimpan.  

![[07 - Permintaan Stock sfd.png]]
<figcaption><b>📸 Gambar: Form Tambah Permintaan Stok</b></figcaption>

---

Selain melalui menu **Gudang → Permintaan Stok**, sistem Lensiro juga menyediakan fitur cepat untuk membuat permintaan stok **langsung dari halaman Penjualan**.  
Fitur ini muncul otomatis apabila terdapat **barang yang stoknya kosong** saat proses transaksi.

1. Saat membuat penjualan, jika sistem mendeteksi ada item yang **stoknya habis**, akan muncul opsi:  
   > **Buat Permintaan Stok untuk stok yang kosong**
2. Centang kotak tersebut sebelum menekan tombol **Buat Penjualan**.  
3. Setelah transaksi disimpan, sistem otomatis akan menambahkan entri baru di menu **Permintaan Stok**, lengkap dengan:
   - Nama barang yang kosong  
   - Cabang asal dan tujuan  
   - Jumlah yang dibutuhkan  
   - Status awal “Pending”

![[07 - Permintaan Stock penjualan.png]]
<figcaption><b>📸 Gambar: Fitur “Buat Permintaan Stok untuk stok yang kosong” pada halaman Penjualan</b></figcaption>

💡 Dengan fitur ini, staf penjualan tidak perlu berpindah menu untuk mengajukan permintaan stok, sehingga proses pemenuhan kebutuhan barang menjadi **lebih cepat, praktis, dan otomatis terdokumentasi.**

---

### Lakukan Operasi pada Permintaan
Setelah permintaan dibuat, pengguna dengan hak akses tertentu dapat **melakukan operasi** pada permintaan yang telah disetujui.

1. Centang satu atau beberapa permintaan yang ingin diproses.  
2. Klik tombol **Lakukan Operasi** di atas tabel.  
3. Pilih salah satu opsi:
   - **Pembelian** → bila pemenuhan stok dilakukan melalui proses pembelian dari supplier.  
   - **Stok Mutasi** → bila pemenuhan dilakukan dengan mengirim stok dari cabang/gudang lain.  

Proses pembelian akan mengikuti alur seperti modul **Pembelian**,  
sedangkan mutasi mengikuti alur di **Stock Mutasi**.

![[07 - Permintaan Stock aksi.png]]
<figcaption><b>📸 Gambar: Menu “Lakukan Operasi” untuk memproses permintaan stok</b></figcaption>

---

### Melihat Detail Permintaan Stok
Setelah permintaan stok dibuat, pengguna dapat **memantau status dan perkembangannya** langsung dari daftar utama.

1. Buka menu **Gudang → Permintaan Stok**.  
2. Pada kolom **Aksi**, klik tombol **⋮ (tiga titik)** di sisi kanan baris permintaan.  
3. Pilih opsi **Lihat Detail** untuk membuka informasi lengkap permintaan tersebut.

Sistem akan menampilkan data meliputi:
- ID dan tanggal permintaan  
- Nama pengaju dan pelanggan (jika terkait transaksi penjualan)  
- Cabang asal dan tujuan  
- Daftar barang dan jumlah diminta  
- Status approval dan pemenuhan  
- Catatan tambahan atau memo proses  

![[07 - Permintaan Stock detail.png]]
<figcaption><b>📸 Gambar: Menu Aksi “Lihat Detail” untuk memantau status permintaan stok</b></figcaption>

💡 Dari tampilan ini, pengguna juga dapat mengetahui apakah permintaan telah disetujui (**Approved**), masih menunggu persetujuan (**Pending**), atau sudah dipenuhi melalui **mutasi** atau **pembelian**.

---

### Melihat Status dan Alur Permintaan Stok
Setelah membuat atau menyetujui permintaan stok, pengguna dapat melihat **alur proses permintaan** secara visual melalui tampilan status permintaan.  
Fitur ini membantu untuk memantau:
- Di cabang mana proses sedang berlangsung  
- Apakah stok sudah dikirim atau masih menunggu approval  
- Siapa yang melakukan tindakan terakhir (pengirim atau penerima)  
- Dan bagaimana jalur pemenuhan stok dilakukan (Mutasi atau Pembelian)

#### Cara Melihat Status Permintaan
1. Buka menu **Gudang → Permintaan Stok**.  
2. Klik tombol **⋮ (aksi)** di kolom paling kanan.  
3. Pilih **Lihat Detail** untuk membuka tampilan **Status Permintaan Stok**.  
4. Sistem akan menampilkan diagram alur seperti berikut:

![[07 - Permintaan Stock s.png]]
<figcaption><b>📸 Gambar: Tampilan Status Permintaan Stok dan Memo Approval</b></figcaption>

---

### Penjelasan Tampilan Status
- **Kotak Ungu (Cabang Asal & Tujuan)** → Menunjukkan cabang pengirim dan penerima stok.  
- **Kotak Kuning (Stok Mutasi)** → Menandakan proses pengiriman antar cabang sedang dilakukan.  
- **Kotak Hijau (Permintaan Barang Selesai)** → Menandakan permintaan telah dipenuhi sepenuhnya.  
- **Kotak Abu-abu (Tidak Dilakukan)** → Menandakan opsi proses (seperti pembelian) tidak digunakan pada permintaan ini.

Bagian kanan halaman juga menampilkan:
- **Memo Approval** → Catatan atau persetujuan dari pihak admin/gudang.  
- **Memo Pelaku** → Catatan dari pelaksana mutasi atau pengirim barang.  
- Tombol **Approve dan Simpan Memo** untuk menyetujui sekaligus memberi catatan.  

💡 Diagram ini membantu memastikan seluruh proses permintaan berjalan **transparan, terpantau, dan terdokumentasi secara sistematis.**

---

### Permintaan Stok dari Modul Penjualan
(Stok yang diminta otomatis tercatat saat penjualan dilakukan, jika stok barang habis.)

---

 [[05 - Gudang/06 - HPP Editor|Sebelumnya]] - [[06 - Penjualan/01 - Penjualan|Berikutnya]] 

