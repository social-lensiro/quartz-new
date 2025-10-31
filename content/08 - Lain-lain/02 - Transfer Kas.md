# Transfer Kas

### Pengertian
Fitur **Transfer Kas** digunakan untuk mencatat dan mengelola proses **pemindahan dana antar cabang atau antar akun kas/bank** dalam sistem Lensiro.  
Dengan fitur ini, setiap transaksi transfer uang dapat terekam secara otomatis dan transparan, sehingga saldo setiap cabang dan akun tetap akurat serta mudah diaudit.

---

### Fungsi Utama
- Mencatat transaksi **pemindahan kas antar cabang** atau antar akun.  
- Memastikan saldo kas antar cabang selalu seimbang setelah transfer dilakukan.  
- Menampilkan riwayat seluruh aktivitas transfer lengkap dengan nominal dan pengguna.  
- Menghitung **total transfer keluar** dan **total transfer masuk** secara otomatis.  
- Memberikan informasi transfer terakhir untuk pemantauan cepat.  

---

### Langkah-langkah Menggunakan Fitur Transfer Kas

#### 1. Melihat Daftar Transfer Kas
1. Masuk ke menu **Lain-lain → Transfer Kas**.  
2. Pilih **Cabang** yang ingin dilihat transaksi transfer-nya.  
3. Sistem akan menampilkan:
   - Total transfer bersih (masuk dan keluar).  
   - Transfer terakhir yang dilakukan.  
   - Tabel riwayat transfer berisi:  
     - ID  
     - Tanggal  
     - Jenis Transfer  
     - Jumlah  
     - Cabang Pengirim & Penerima  
     - Akun Sumber & Akun Tujuan  
     - Keterangan dan pengguna.  

![[02 - Transfer Kas-1.png]]
<figcaption><b>Gambar: Tampilan Riwayat Transfer Kas</b></figcaption>

---

#### 2. Menambah Transfer Kas Baru
1. Klik tombol **Tambah Transfer** di bagian atas halaman.  
2. Isi form yang muncul dengan data berikut:
   - **Tanggal Transfer**  
   - **Cabang Pengirim & Penerima**  
   - **Akun Sumber & Akun Tujuan**  
   - **Jumlah Transfer**  
   - **Keterangan tambahan (opsional)**  
3. Klik **Simpan** untuk mencatat transaksi.  
4. Setelah disimpan, sistem akan langsung memperbarui saldo kas di masing-masing cabang dan akun.  

![[02 - Transfer Kass.png]]
<figcaption><b>Gambar: Form Tambah Transfer Kas</b></figcaption>

---

### Catatan
- Pastikan cabang pengirim memiliki saldo cukup sebelum melakukan transfer.  
- Semua aktivitas transfer otomatis tercatat pada **laporan kas & bank**.  
- Transfer yang sudah disimpan tidak dapat dihapus tanpa izin Admin.

---

## Pengaturan Transfer
Pengaturan ini diakses melalui tombol **Pengaturan** di pojok kanan atas.  
Fungsinya untuk menentukan akun-akun yang digunakan dalam proses transfer kas.

| Jenis Pengaturan | Penjelasan |
|------------------|------------|
| **Transfer Antar Cabang** | Mengatur akun jembatan antar cabang agar jurnal tercatat otomatis. |
| **Transfer Sesama Cabang** | Mengatur hubungan antar akun sumber dan akun tujuan dalam satu cabang. |

![[02 - Transfer Kas-2.png]]
<figcaption><b>Gambar 2:</b> Halaman pengaturan akun transfer antar cabang dan sesama cabang.</figcaption>

---

## Contoh Jurnal Otomatis

### a. Cabang Pengirim
| Akun | Posisi | Nilai |
|------|---------|-------|
| Kliring Kas Antar Cabang | Debit | Rp 5.000.000 |
| Kas Tangan | Kredit | Rp 5.000.000 |

### b. Cabang Penerima
| Akun | Posisi | Nilai |
|------|---------|-------|
| Kas Bank | Debit | Rp 5.000.000 |
| Kliring Kas Antar Cabang | Kredit | Rp 5.000.000 |

**Penjelasan:**  
Transaksi tersebut mencatat dana keluar dari kas tangan cabang pengirim dan diterima di kas bank cabang penerima melalui akun kliring antar cabang.  
Sistem memastikan kedua jurnal selalu seimbang dan konsisten antar cabang.

![[02 - Transfer Kas-3.png]]
<figcaption><b>Gambar 3:</b> Contoh alur jurnal otomatis dari transaksi transfer kas antar cabang.</figcaption>

---

## Catatan
- Transfer kas tidak memengaruhi laba rugi secara langsung.  
- Hanya pengguna dengan hak akses **Admin atau Supervisor Keuangan** yang dapat melakukan transfer antar cabang.  
- Data transfer bersifat historis dan tercatat permanen dalam laporan akuntansi.  
- Akun jembatan harus diset terlebih dahulu sebelum melakukan transfer antar cabang.

---

 [[08 - Lain-lain/01 - Kas Kecil|Sebelumnya]] - [[01 - Pemasukan dan Pengeluaran|Berikutnya]] 

