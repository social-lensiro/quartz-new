# Komisi Penjualan & Fasset

Fitur **Komisi** pada aplikasi **Lensiro** digunakan untuk menghitung dan menampilkan **imbalan (komisi)** bagi karyawan berdasarkan aktivitas penjualan maupun pekerjaan fasset (pemotongan dan pemasangan lensa).  
Terdapat dua tipe utama komisi yang dihitung **otomatis oleh sistem**:

| Tipe Komisi          | Keterangan                                                                                                                   |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| **Komisi Penjualan** | Komisi untuk karyawan bagian penjualan berdasarkan transaksi yang berhasil dan telah lunas.                                  |
|  **Komisi Fasset**   | Komisi untuk teknisi/laboran berdasarkan jumlah pekerjaan fasset (pemotongan/pemasangan lensa) yang selesai dengan QC lolos. |

---

## Komisi Penjualan

**Komisi Penjualan** adalah fitur yang menampilkan hasil perhitungan komisi yang **dihitung otomatis** berdasarkan transaksi penjualan dan pengaturan komisi pada menu **Master → Brand/Sub-Brand**.

Fitur ini memudahkan manajemen untuk memantau dan merekap imbalan bagi sales sesuai hasil kerja mereka tanpa penginputan manual.

---

### Cara Kerja Komisi Penjualan

1. Di menu **Master → Brand/Sub-Brand**, tentukan **persentase komisi** untuk setiap merek atau kategori produk.  
   Contoh:  
   - Brand *Hoya* = 10%  
   - Sub-Brand *Blue Light* = 8%

2. Saat transaksi penjualan disimpan dan status pembayaran **Lunas**, sistem akan otomatis:
   - Membaca data **Brand/Sub-Brand** dari barang yang dijual,  
   - Mengambil nilai **komisi%** dari master,  
   - Menghitung otomatis komisi per item dan total transaksi,  
   - Menyimpannya di menu **Penjualan → Komisi Penjualan**.

3. User dapat melihat daftar seluruh komisi yang sudah **dibayar lunas** dan dihitung otomatis.

💡 Nilai komisi selalu konsisten dengan pengaturan master dan tidak perlu dihitung manual.

---

### Langkah Melihat Komisi Penjualan

1. Buka menu **Penjualan → Komisi → Komisi Penjualan**.  
2. Sistem menampilkan daftar semua komisi yang telah dihitung otomatis.  
3. Gunakan filter **Tanggal / Sales / Cabang** untuk pencarian cepat.  
4. Klik salah satu baris data untuk melihat **detail sumber transaksi dan perhitungan komisinya**.

![[02 - Komisi-1.png]]
<figcaption><b>📸 Gambar: Tampilan Daftar Komisi Penjualan</b></figcaption>

---

### Informasi yang Ditampilkan

| Kolom                 | Keterangan                                      |
| :-------------------- | :---------------------------------------------- |
| **Nomor Penjualan**   | Nomor transaksi sumber komisi.                  |
| **Nama Sales**        | Karyawan penerima komisi.                       |
| **Brand/Sub-Brand**   | Merek produk yang menentukan persentase komisi. |
| **Persentase Komisi** | Nilai komisi dari pengaturan master.            |
| **Nominal Komisi**    | Hasil perhitungan otomatis dari sistem.         |
| **Tanggal Transaksi** | Waktu transaksi dilakukan.                      |
|  **Cabang**           | Lokasi toko tempat transaksi dilakukan.         |

---

## Komisi Fasset

**Komisi Fasset** digunakan untuk menghitung dan menampilkan **komisi teknisi atau laboran** berdasarkan pekerjaan pemotongan dan pemasangan lensa (*fasset*) yang berhasil diselesaikan.  
Perhitungan dilakukan otomatis berdasarkan pengaturan komisi per jenis pekerjaan di **Master → Pengaturan Komisi Fasset**.

---

### Cara Kerja Komisi Fasset Otomatis

1. Saat transaksi **Penjualan Order** mencapai tahap *Fasset*, sistem mencatat:
   - Nama teknisi,  
   - Jenis pekerjaan (Single Vision, Progressive, dll),  
   - Status hasil kerja (*Berhasil / Gagal*).

2. Jika status QC = **Lolos**, maka sistem akan menambahkan nilai komisi ke teknisi sesuai pengaturan master.  
3. Jika status QC = **Gagal**, komisi tidak diberikan.

 Semua komisi teknisi dihitung otomatis dan tersimpan di menu **Penjualan → Komisi Fasset**.

---

### Langkah Melihat Komisi Fasset

1. Masuk ke **Penjualan → Komisi → Komisi Fasset**.  
2. Sistem menampilkan daftar pekerjaan fasset yang sudah diselesaikan.  
3. Gunakan filter **Tanggal / Teknisi / Cabang** untuk menelusuri data.  
4. Klik salah satu baris untuk melihat **detail pekerjaan dan status QC**.

![[02 - Komisi fasaaet.png]]
<figcaption><b>📸 Gambar: Tampilan Daftar Komisi Fasset</b></figcaption>

---

### Informasi yang Ditampilkan

| Kolom                 | Keterangan                                                     |
| :-------------------- | :------------------------------------------------------------- |
| **Nomor Penjualan**   | Nomor transaksi sumber pekerjaan fasset.                       |
| **Nama Teknisi**      | Teknisi yang mengerjakan fasset.                               |
| **Jenis Pekerjaan**   | Jenis lensa atau pengerjaan (Single Vision, Progressive, dll). |
| **Nominal Komisi**    | Besaran komisi per pekerjaan dari master.                      |
| **Tanggal Pekerjaan** | Waktu pengerjaan dilakukan.                                    |
| **Cabang**            | Lokasi toko/lab tempat pekerjaan dilakukan.                    |
|  **Status QC**        | Hasil pemeriksaan (Lolos / Gagal).                             |

---

## Catatan Penting
- Komisi hanya dihitung untuk transaksi **Lunas** dan pekerjaan dengan **QC Lolos**.  
- Nilai komisi diatur melalui **Master → Brand/Sub-Brand** (untuk Sales) dan **Master → Pengaturan Komisi Fasset** (untuk Teknisi).  
- Semua komisi dihitung otomatis dan bersifat statis setelah disimpan.  
- Data dapat diekspor untuk laporan dan perhitungan **insentif bulanan**.

---

 [[01 - Penjualan|Sebelumnya]] - [[03 - Analisa|Berikutnya]] 
