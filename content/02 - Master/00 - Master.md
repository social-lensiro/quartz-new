##  1. Pengertian Data Master

  
**“Master”** merupakan kumpulan **data utama (core data)** yang menjadi dasar dari seluruh proses dan transaksi di dalam aplikasi **Lensiro**.  
Data Master berisi informasi penting yang digunakan oleh berbagai modul seperti **Gudang**, **Penjualan**, **Pembelian**, dan **Laporan**.

Beberapa entitas utama dalam Data Master antara lain:

- **Supplier** – informasi pemasok barang (lensa, frame, aksesori)
    
- **Barang (Item)** – daftar produk yang dijual, lengkap dengan detail stok, harga, dan kode barang
    
- **Brand & Sub-Brand** – merek utama dan variannya
    
- **Kategori & Sub-Kategori** – pengelompokan produk berdasarkan jenis atau fungsi
    
- **Cabang (jika multi-store)** – data toko atau lokasi operasional
    

Kehadiran Data Master sangat penting karena menjadi **fondasi utama sistem Lensiro**.  
Semua aktivitas seperti pencatatan transaksi, pembelian, penjualan, retur, dan laporan akan mengacu pada data yang terdapat di modul ini.

---

##  2. Fungsi Modul Master

Modul **Master** berperan sebagai **pusat data terintegrasi (centralized database)** yang menjadi fondasi seluruh sistem Lensiro.  
Melalui pengelolaan yang konsisten dan terpusat, Master memastikan data di setiap modul selalu **seragam, akurat, dan mudah digunakan.**

###  Fungsi Utama:

1. **Sebagai Acuan Utama Transaksi**  
    Semua transaksi seperti **penjualan, pembelian, retur, dan stok opname** mengacu pada data dari modul Master.
    
2. **Menjaga Konsistensi dan Standarisasi Data**  
    Nama produk, harga, brand, dan supplier disamakan di seluruh cabang untuk menghindari duplikasi dan kesalahan input.
    
3. **Mempermudah Pengelolaan Multi-Cabang**  
    Sistem multi-store menggunakan struktur data yang sama, sehingga laporan antar cabang bisa digabung atau dibandingkan.
    
4. **Mendukung Otomatisasi Perhitungan**  
    Data Master digunakan untuk:
    
    - Harga Pokok Penjualan (HPP)
        
    - Komisi penjualan berdasarkan brand/sub-brand
        
    - Analisis performa produk & supplier
        
    - Inventori kumulatif
        
5. **Menjadi Basis Laporan dan Analisis**  
    Semua laporan seperti **penjualan, pembelian, dan stok** mengambil referensi dari data Master agar hasil analisis konsisten dan valid.
    

---

##  3. Langkah Awal – Login ke Sistem

Sebelum dapat mengakses dan mengelola Data Master, pengguna harus **login ke aplikasi Lensiro** melalui alamat berikut:  
🔗 [https://app.lensiro.com/private/master/supplier](https://app.lensiro.com/private/master/supplier)

### Langkah-langkah Login:

1. Buka peramban web (Google Chrome, Safari, atau Edge).
    
2. Masukkan tautan di atas.
    
3. Isi **Username** dan **Password** yang diberikan oleh administrator.
    
4. Klik tombol **🟢 “Mulai Akses”** untuk masuk ke halaman utama.
    
5. Setelah berhasil login, pengguna diarahkan ke **Dashboard Master Data** untuk mengelola Supplier, Barang, Brand, dan lainnya.
    
![[00 - Master.png]]
 <figcaption><b>📸 Gambar: Tampilan Dashboard Modul Master</b></figcaption> 

---

##  Kesimpulan

Modul **Master** adalah **tulang punggung sistem Lensiro**.  
Seluruh data yang tersimpan di sini menjadi dasar setiap transaksi dan laporan.  
Dengan pengelolaan Master yang baik, bisnis menjadi:

- Lebih **terkendali dan efisien**
    
- Data **seragam antar cabang**
    
- Laporan **akurat dan mudah dianalisis**
    

---

- [[02 - Dashboard|Sebelumnya]] -- [[01 - Supplier|Berikutnya]]
---



