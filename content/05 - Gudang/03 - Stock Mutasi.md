## Stok Mutasi

Fitur **Stok Mutasi** digunakan untuk **melacak dan mencatat setiap pergerakan barang** antar cabang, gudang, atau lokasi penyimpanan di dalam sistem Lensiro.  
Mutasi stok mencakup proses **barang masuk, keluar, rusak, hilang, atau kedaluwarsa**. Dengan fitur ini, setiap perpindahan barang tercatat secara otomatis dan terintegrasi, sehingga membantu menjaga **akurasi data stok**, **meminimalkan risiko kehilangan**, serta **mendukung efisiensi distribusi antar cabang**.

---

### Fungsi Utama
- Mencatat **transaksi perpindahan stok** antar cabang, gudang, atau lokasi penyimpanan.  
- Melacak status pengiriman dengan label seperti *Terkirim*, *Diterima*, atau *Selesai*.  
- Memberikan transparansi terhadap **siapa pengirim dan penerima barang**.  
- Menyediakan **filter pencarian** berdasarkan cabang asal, cabang tujuan, tanggal, dan status.  
- Membantu **perencanaan pengadaan** dan **pengendalian persediaan** agar stok tetap optimal di setiap cabang.  

---

### Langkah Melihat dan Menambah Stok Mutasi

#### Melihat Daftar Mutasi
1. Masuk ke menu **Gudang → Stok Mutasi**.  
2. Gunakan **Filter Cabang** untuk menentukan:  
   - **Dari Cabang** (lokasi asal barang dikirim).  
   - **Ke Cabang** (lokasi tujuan barang diterima).  
3. Klik tombol **Tampilkan** untuk menampilkan data mutasi.  
4. Daftar mutasi akan muncul dalam bentuk tabel dengan kolom:  
   - ID Transaksi  
   - Tanggal Kirim  
   - Cabang Asal & Tujuan  
   - Pengirim & Penerima  
   - Status (Terkirim, Selesai, dll.)  
   - Keterangan tambahan  

![[03 - Stock Mutasi-1.png]]  
<figcaption><b>📸 Gambar: Daftar Stok Mutasi</b></figcaption>

---

#### Menambah Mutasi Stok
1. Klik tombol **Tambah Mutasi** di pojok kanan atas halaman.  
2. Isi data yang diperlukan:
   - **Cabang Asal dan Cabang Tujuan**  
   - **Barang yang dikirim beserta jumlahnya**  
   - **Keterangan tambahan** jika perlu (misal: “Urgent – permintaan cabang”).  
3. Tekan **Simpan / Kirim Mutasi** untuk mencatat transaksi.  
4. Sistem akan otomatis memperbarui jumlah stok di cabang asal dan tujuan.

![[03 - Stock Mutasis.png]]  
<figcaption><b>📸 Gambar: Form Tambah Mutasi</b></figcaption>

---

### Catatan
- Setiap mutasi yang dikirim harus **dikonfirmasi penerimaannya** agar stok di kedua lokasi sinkron.  
- Status **“Terkirim”** berubah menjadi **“Selesai”** setelah penerimaan dikonfirmasi.  
- Mutasi stok membantu dalam pelacakan **perpindahan antar cabang**, termasuk pengiriman rutin, pemindahan stok lambat, atau barang retur antar lokasi.  
- Semua data mutasi otomatis terintegrasi dengan laporan stok dan inventori di Lensiro.  

---

### Tombol Aksi
Setiap baris mutasi memiliki menu **aksi (⋮)** di kolom paling kanan untuk melakukan beberapa fungsi cepat:

| Tombol | Fungsi |
|:--|:--|
| **👁️ Lihat Detail** | Menampilkan detail lengkap transaksi mutasi, termasuk daftar barang, jumlah, dan status penerimaan. |
| **📄 Surat Jalan** | Mencetak dokumen surat jalan sebagai bukti fisik pengiriman antar cabang. |
| **🗑️ Hapus** | Menghapus data mutasi (hanya bisa dilakukan bila mutasi belum memiliki status “Selesai”). |

![[03 - Stock Mutasi aksio.png]]  
<figcaption><b>📸 Gambar: Menu Aksi Mutasi Stok</b></figcaption>

> ⚠️ Jika mutasi sudah berstatus **Selesai**, maka Stok akan bertambah dan berkurang di masing masing cabang

---

[[02 - Barang|Sebelumnya]] - [[04 - Penghapusan Persediaan|Berikutnya]] 

