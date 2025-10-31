## Penghapusan Persediaan

Fitur **Penghapusan Persediaan** digunakan untuk melakukan proses formal dalam **menghapus barang dari stok sistem** karena kondisi tertentu seperti **rusak, hilang, usang, atau kedaluwarsa**.

Langkah ini memastikan data inventori tetap akurat dan sesuai dengan kondisi fisik di lapangan, sekaligus menjaga validitas laporan keuangan perusahaan.

---

### Fungsi Utama
- Menghapus stok barang yang **sudah tidak layak jual atau tidak dapat digunakan**.  
- Memperbarui jumlah persediaan secara otomatis di sistem Lensiro.  
- Menyediakan **catatan historis penghapusan** untuk keperluan audit.  
- Menampilkan daftar seluruh aktivitas penghapusan berdasarkan **barang, cabang, karyawan, dan tanggal**.  
- Dapat dilakukan **per produk** sesuai kebutuhan masing-masing cabang atau gudang.  

---

### Langkah Melakukan Penghapusan Persediaan

#### 1. Melihat Daftar Penghapusan Persediaan
1. Masuk ke menu **Gudang → Penghapusan Persediaan**.  
2. Gunakan **Filter Dasar** untuk memilih:
   - Cabang  
   - Barang  
   - Pelaku (user yang melakukan penghapusan)  
3. Bila perlu, gunakan **Filter Lanjutan** seperti:
   - ID Write-off  
   - Keterangan  
   - Rentang Tanggal  
4. Klik **Tampilkan** untuk melihat daftar penghapusan yang sudah dilakukan.  
5. Sistem akan menampilkan tabel daftar penghapusan berisi kolom:
   - ID, Tanggal, Nama Barang, Cabang, Jumlah, Pelaku, dan Keterangan.  

![[04 - Penghapusan Persediaan.png]]
<figcaption><b>📸 Gambar: Daftar Penghapusan Persediaan</b></figcaption>

---

#### 2. Menambah Penghapusan Persediaan (Per Produk)
1. Klik tombol **Tambah Penghapusan Persediaan** di pojok kanan atas halaman.  
2. Akan muncul form seperti ilustrasi di bawah ini.  
3. Isi data sesuai kondisi aktual:
   - **Barang** → pilih item yang akan dihapus dari stok.  
   - **Cabang** → tentukan lokasi stok berada.  
   - **Karyawan** → pilih user yang bertanggung jawab.  
   - **Tanggal Penyesuaian** → tanggal penghapusan dilakukan.  
   - **Jumlah Penghapusan** → masukkan jumlah barang yang dihapus.  
   - **Keterangan** → tambahkan alasan penghapusan (misal “barang rusak”, “kedaluwarsa”, dll).  
4. Klik **Simpan** untuk menyimpan data penghapusan.  

![[05 - Penghapusan Persediaans.png]]
<figcaption><b>📸 Gambar: Form Tambah Penghapusan Persediaan</b></figcaption>

---

### Catatan
- Kolom **Stok Saat Ini** menunjukkan jumlah barang yang masih tersedia sebelum dihapus.  
- Pastikan jumlah penghapusan tidak melebihi stok aktual.  
- Setelah disimpan, sistem akan langsung memperbarui total stok pada gudang/cabang terkait.  

---

### Catatan Penting
- Gunakan fitur ini **hanya untuk kondisi barang yang benar-benar tidak bisa dijual atau digunakan kembali**.  
- Semua aktivitas penghapusan otomatis tersimpan di **riwayat stok dan laporan inventori**.  
- Proses ini membantu menjaga **integritas data stok dan laporan akuntansi**.  
- Hak akses penghapusan hanya tersedia untuk **Admin Gudang atau Supervisor Cabang**.  

---

 [[05 - Gudang/03 - Stock Mutasi|Sebelumnya]] - [[05 - Gudang/05 - Stock Opname|Berikutnya]] 

