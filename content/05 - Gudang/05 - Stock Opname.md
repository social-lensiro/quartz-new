## Stok Opname

Fitur **Stok Opname** pada aplikasi Lensiro digunakan untuk **mencocokkan data persediaan fisik di gudang dengan catatan stok yang ada di sistem**.  

Proses ini memastikan keakuratan data persediaan, mencegah kerugian akibat kehilangan atau kerusakan barang, serta menjadi dasar bagi penyusunan laporan keuangan yang akurat.  

Dengan stok opname, pengguna dapat melakukan pengecekan baik secara **parsial (per produk)** maupun **massal (seluruh cabang atau gudang)**, sesuai kebutuhan operasional.  

---

### Fungsi Utama
- Melakukan **pencocokan stok fisik dan stok sistem** secara berkala.  
- Menampilkan daftar stok opname berdasarkan **cabang, pelaku, tanggal, dan keterangan**.  
- Memungkinkan pengguna melakukan **penyesuaian jumlah stok** jika ditemukan selisih.  
- Menyediakan dua metode pengecekan:
  - *Per Produk*: untuk barang tertentu yang ingin dicek secara individual.  
  - *Secara Massal*: untuk pengecekan seluruh barang di cabang/gudang tertentu.  
- Menyimpan riwayat hasil pemeriksaan dan pelaku yang bertanggung jawab.  

---

### Langkah Melakukan Stok Opname

#### 1. Melihat Data Stok Opname
1. Masuk ke menu **Gudang → Stok Opname**.  
2. Gunakan filter untuk menampilkan data berdasarkan:
   - **Cabang**  
   - **Nama Barang**  
   - **Pelaku pemeriksa**  
   - **Rentang tanggal pemeriksaan**  
   - **Keterangan atau ID penyesuaian stok**  
3. Klik **Tampilkan** untuk melihat hasil stok opname yang sudah tercatat.  
4. Daftar hasil opname akan menampilkan kolom:
   - ID, Nama Barang, Cabang, Jumlah, Pelaku, Keterangan, dan Aksi (Edit / Hapus).  

![[05 - Stock Opname prdo.png]]
<figcaption><b>📸 Gambar: Stok Opname Per Produk</b></figcaption>

---

#### 2. Menambahkan Stok Opname
1. Tekan tombol **Tambah Stok Opname** di kanan atas halaman.  
2. Isi form dengan data berikut:
   - **Nama Barang / Produk**  
   - **Cabang atau Gudang**  
   - **Pelaku Pemeriksa (Karyawan)**  
   - **Jumlah Fisik yang Ditemukan**  
   - **Keterangan tambahan** (contoh: stok awal, hasil audit, koreksi manual)  
3. Tekan tombol **Simpan** untuk menyimpan hasil pemeriksaan.  
4. Sistem akan otomatis menyesuaikan data stok di database Lensiro.  

![[04 - Stock Opname2.png]]
<figcaption><b>📸 Gambar: Form Tambah Stok Opname</b></figcaption>

---

#### 3. Melakukan Stok Opname Secara Massal
Jika ingin memeriksa seluruh stok di suatu cabang sekaligus:

1. Masuk ke bagian **Tugas Stok Opname** di halaman bawah modul.  
2. Gunakan filter:
   - **Cabang yang ingin diperiksa**  
   - **Nama Pemeriksa (User)**  
   - **Rentang tanggal pemeriksaan**  
3. Klik **Mulai Tugas Stok Opname** untuk memulai proses pengecekan massal.  
4. Sistem akan menampilkan daftar seluruh produk di cabang tersebut.  
5. Setelah selesai, klik **Simpan / HPP** untuk menyimpan hasil pemeriksaan.  

![[04 - Stock Opname massal.png]]
<figcaption><b>📸 Gambar: Stok Opname Secara Massal</b></figcaption>

---

### Catatan
- Stok opname dapat dilakukan **per produk** (parsial) atau **secara massal** untuk efisiensi.  
- Hasil stok opname akan diperbarui ke sistem **hanya setelah disimpan**.  
- Disarankan dilakukan **secara rutin** (misalnya bulanan atau kuartalan).  
- User dengan hak akses *Admin Gudang* dan *Supervisor Cabang* dapat membuat dan menyetujui stok opname.  
- Setiap penyesuaian akan otomatis tercatat dalam **riwayat audit stok** untuk pelacakan ke depan.  

---

 [[05 - Gudang/04 - Penghapusan Persediaan|Sebelumnya]] - [[05 - Gudang/06 - HPP Editor|Berikutnya]] 

