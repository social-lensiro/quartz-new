###  Pengertian

Menu **Pengaturan Penjualan** digunakan untuk mengatur perilaku sistem saat melakukan transaksi penjualan, serta mengatur **penomoran awal faktur dan POS** untuk setiap cabang optik.

Fitur ini penting untuk memastikan penomoran transaksi berjalan **teratur, unik, dan tidak bertabrakan antar cabang.**

  

![[04 - Penjualan.png]]
<figcaption><b>📸 : Tampilan Tampilan Halaman Pengaturan Penjualan</b></figcaption>


  
  

---

  

##  Komponen Utama

  

###  Otomatis Set Sales sebagai Kasir

  

Menentukan apakah sistem akan **mengatur otomatis Sales Person sebagai Kasir** saat membuat transaksi baru.

  

Opsi:

  

- **Aktif** → Sales Person otomatis menjadi Kasir (disarankan untuk toko kecil agar proses lebih cepat).

- **Nonaktif** → Kasir dapat berbeda dengan Sales Person (biasanya digunakan di toko besar dengan beberapa petugas).

  

🧠 _Keterangan Tambahan:_

Jika fitur ini aktif, setiap transaksi akan otomatis mengisi kolom Kasir berdasarkan Sales yang sedang login.

  

---

  

###  Nomor Urut Penjualan per Cabang

  

Bagian ini digunakan untuk mengatur **nomor awal faktur dan POS** di setiap cabang Lensiro.

Misalnya:

  


| Cabang | Nomor Awal POS | Nomor Awal Order |
|--------|----------------|------------------|
| Lensiro Optical – Warehouse (WH01) | 1 | 1 |
| Lensiro Optical – Jakarta (JKT01) | 1 | 1 |
| Lensiro Optical – Surabaya (SBY01) | 1 | 1 |
| Lensiro Optical – Yogyakarta (YGY01) | 1 | 1 |

  

> ⚠️ **Peringatan:**

> Mengubah nomor urut akan memengaruhi penomoran faktur penjualan berikutnya.

> Pastikan tidak ada konflik dengan nomor yang sudah digunakan sebelumnya.

  

---

  

###  Reset Nomor Urut Penjualan

  

Tombol ini berfungsi untuk **mengatur ulang seluruh nomor urut penjualan** agar kembali mengikuti pengaturan di atas.

  

> 🔴 _Peringatan:_ Tindakan ini akan memengaruhi seluruh faktur aktif dan riwayat penjualan yang sudah tercatat. Gunakan hanya bila diperlukan (misalnya setelah migrasi data).

  

---

  

###  Tombol Perbarui

  

Klik **Perbarui** untuk menyimpan seluruh pengaturan terbaru di halaman ini.

  

---

  

##  Catatan Hak Akses

  

- Menu ini hanya dapat diakses oleh **Admin**.

- _Manager_ hanya dapat melihat nomor urut tanpa mengubahnya.

- _Cashier_ dan _Staff_ tidak memiliki akses ke bagian ini.

---
 [[03 - Faktur]] 



