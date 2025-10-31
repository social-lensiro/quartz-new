
## Pengertian
Modul Pelanggan berfungsi untuk mencatat dan mengelola data pelanggan yang menjadi dasar dari setiap transaksi Penjualan.

Data pelanggan digunakan untuk mengidentifikasi siapa pembeli dalam setiap transaksi, serta mendukung berbagai fitur penting seperti:

- Mencatat transaksi penjualan berdasarkan pelanggan tertentu.  
- Melacak riwayat pembelian pelanggan.  
- Mengelola sistem poin atau loyalitas pelanggan (jika diaktifkan).  
- Menyimpan informasi kontak pelanggan seperti nama, alamat, dan nomor telepon.  
- Memberikan promo atau potongan harga khusus kepada pelanggan tertentu.  




  


![[01 - Data Pelanggan-2.png]]  


<figcaption><b>Gambar : Tampilan Menu Pelanggan</b></figcaption>

---

## Langkah-langkah Menambahkan Data Pelanggan

### Buka Form Tambah Pelanggan
Form pelanggan dapat dibuka melalui dua cara:

#### Opsi 1: Melalui menu Pelanggan
1. Dari halaman utama aplikasi, pilih **Pelanggan**.  
2. Klik tombol **Tambah Pelanggan** di kanan atas halaman.

![[02 - tombol tambah pelanggan.png]]

#### Opsi 2: Melalui menu Penjualan
1. Klik menu **Penjualan**, kemudian pilih **Penjualan Langsung** atau **Penjualan Order**.  
2. Pada kolom **Pilih Pelanggan**, klik tombol **Buat Pelanggan**.  

![[01 - Data Pelanggan tombol.png]]
<figcaption><b>Gambar : Tambah Pelanggan Form Penjualan</b></figcaption>
Kedua cara di atas akan menampilkan form input pelanggan dengan tampilan dan isian yang sama.

---

### Isi Data Pelanggan
Setelah klik **Tambah Pelanggan**, akan muncul form tambah pelanggan.  
Isi kolom yang muncul dengan data berikut:

![[01 - Data Pelanggan form.png]]  
<figcaption><b>Gambar : Form Input Pelanggan</b></figcaption>


| Kolom | Keterangan |
|--------|-------------|
| Cabang (Harus) | Pilih cabang tempat pelanggan terdaftar (wajib diisi untuk sistem multi-store). |
| Nama (Harus) | Isi dengan nama lengkap pelanggan. |
| No. Identitas | Nomor KTP atau identitas lain (opsional, bisa digunakan untuk verifikasi). |
| Level | Tentukan level pelanggan (mis. Reguler, VIP, atau VVIP) jika sistem poin/loyalitas diaktifkan. |
| Alamat | Alamat lengkap pelanggan. |
| No. Telepon | Nomor telepon aktif / WhatsApp untuk komunikasi dan pencarian cepat. |
| Jenis Kelamin | Pilih Laki-laki atau Perempuan. |
| Tanggal Lahir | Diisi untuk kebutuhan promosi ulang tahun atau analisis pelanggan. |
| Email | Alamat email pelanggan (opsional). |
| Memo / Catatan | Catatan tambahan, misalnya preferensi lensa, ukuran frame, atau catatan servis. |

**Tips:** Pastikan Nama dan Nomor Telepon diisi dengan benar untuk mempermudah pencarian pelanggan saat transaksi berlangsung.

---

### Simpan Data Pelanggan
Setelah semua kolom diisi, klik tombol **Add Pelanggan** untuk menyimpan data ke sistem.  

Jika berhasil, sistem akan menampilkan notifikasi:
> Data Pelanggan berhasil ditambahkan.

---

## Detail Data Pelanggan

### Pengertian
Setiap data pelanggan di Lensiro dilengkapi dengan beberapa tab informasi yang saling terhubung.

Hal ini memudahkan pengguna (kasir, optician, maupun admin) untuk melihat riwayat pelanggan secara menyeluruh — mulai dari data pribadi, hasil pemeriksaan mata (refraksi), hingga riwayat pembelian dan poin loyalitas.

Empat tab utama yang tersedia adalah:
1. Informasi Dasar
2. Refraksi
3. Point
4. Penjualan

---

### Tab Informasi Dasar
Tab ini berisi data utama pelanggan yang sudah diinput saat proses pendaftaran.  

Data meliputi:
- Cabang tempat pelanggan terdaftar  
- Nama lengkap  
- Nomor identitas (KTP, SIM, atau lainnya)  
- Level pelanggan (mis. Reguler, VIP, VVIP)  
- Alamat, Nomor Telepon, dan Email  
- Jenis kelamin  
- Tanggal lahir  
- Catatan (Memo) tambahan  

Informasi ini dapat diperbarui kapan saja dengan klik tombol **Ubah Pelanggan**, lalu klik **Simpan** setelah selesai.

---

### Tab Refraksi
Tab Refraksi digunakan untuk mencatat hasil pemeriksaan mata pelanggan.

Semua data refraksi akan tersimpan dalam riwayat (history) sehingga optician atau kasir dapat melihat perubahan kondisi mata pelanggan dari waktu ke waktu.

#### Langkah Mengisi Refraksi
1. Buka tab **Refraksi** pada halaman detail pelanggan.  
2. Isi data pemeriksaan sesuai kolom berikut:  

![[01 - Data Pelanggan-1.png]]  

<figcaption><b>Gambar : Form Refraksi</b></figcaption>

| Kolom | Keterangan |
|--------|-------------|
| Tipe | Jenis lensa yang diperiksa, misalnya Lensa Lama, Autoref, atau Hasil Refraksi. |
| Sisi | Pilih Kanan atau Kiri (masing-masing sisi diinput terpisah). |
| Spherical (SPH) | Nilai koreksi sferis (rabun jauh/dekat). |
| Cylinder (CYL) | Nilai silinder untuk astigmatisme. |
| Axis | Sudut silinder dalam derajat. |
| Additional (ADD) | Tambahan lensa baca untuk pengguna bifokal/progresif. |
| PD / MPD | Jarak antar pupil dalam milimeter. |
| Visus | Tingkat ketajaman penglihatan. |
| Tanggal | Tanggal pemeriksaan dilakukan. |

Setelah semua data diisi, klik tombol **Tambah** di bagian bawah form.  
Data akan tersimpan ke dalam tabel di sebelah kanan layar.  

Setiap entri baru otomatis ditambahkan ke riwayat refraksi pelanggan.  
Kamu juga bisa menghapus data tertentu dengan klik tautan **Hapus** di kolom paling kanan tabel.

---

### Tab Point
Tab Point menampilkan jumlah poin yang dimiliki pelanggan berdasarkan transaksi yang sudah dilakukan.  
Fitur ini mendukung sistem loyalitas pelanggan.

Informasi yang ditampilkan meliputi:
- Total poin yang dimiliki pelanggan.  
- Riwayat penambahan atau penggunaan poin.  
- Tanggal dan deskripsi transaksi yang menghasilkan poin.  

![[01 - Data Pelanggan point-1.png]]  

<figcaption><b>Gambar :  Info Poin Pelanggan</b></figcaption>

(Fitur ini aktif hanya jika sistem poin diaktifkan di pengaturan aplikasi.)

---

### Tab Penjualan
Tab Penjualan menampilkan riwayat transaksi pelanggan.

Di sini pengguna dapat melihat daftar seluruh pembelian yang pernah dilakukan oleh pelanggan tersebut, termasuk:
- Nomor transaksi  
- Tanggal transaksi  
- Jenis produk yang dibeli (lensa, frame, aksesori)  
- Total pembayaran  
- Status transaksi (selesai, batal, retur, dll.)  

![[01 - Data Pelanggan penjuads.png]]  
**Gambar: Info History Pembelian Pelanggan**

Fitur ini membantu pemilik toko atau kasir untuk melacak histori pembelian pelanggan dengan cepat tanpa perlu membuka menu laporan terpisah.

---

## Catatan Tambahan
- Data Refraksi, Point, dan Penjualan akan selalu tersimpan otomatis setelah diinput.  
- Setiap perubahan atau penambahan data langsung tercatat di sistem pusat dan dapat diakses oleh pengguna dengan hak akses sesuai.  
- Riwayat pelanggan dapat digunakan untuk:
  - Pelayanan lanjutan (mis. pembuatan lensa baru).  
  - Pengingat kontrol mata.  
  - Promo khusus berdasarkan riwayat transaksi.  

---

# Modul Master Level

## Pengertian
Master Level berfungsi untuk mengelola tingkatan pelanggan seperti Reguler, VIP, atau VVIP.  
Level ini digunakan oleh sistem untuk menentukan hak istimewa pelanggan seperti:

- Persentase diskon otomatis.  
- Program poin atau loyalitas khusus.  
- Prioritas layanan pelanggan.  
- Penawaran harga khusus.

Dengan adanya pengelompokan level, toko dapat memberikan pelayanan yang lebih personal dan efisien.

---

## Menu Master Level
Tombol pengaturan level dapat diakses langsung dari halaman pelanggan.  
Klik tombol **Master Level** di kanan atas halaman daftar pelanggan.

![[01 - Data Pelanggan-3.png]]  
**Gambar: Tampilan menu Pelanggan dengan tombol Master Level.**

Saat diklik, sistem akan menampilkan pop-up **Kelola Member Level** seperti di bawah ini:  

![[01 - Data Pelanggan-4.png]]  
**Gambar: Pop-up Kelola Member Level untuk menambah, mengedit, atau menghapus level pelanggan.**

---

## Menambahkan Level Baru
1. Masukkan **Nama Level** pada kolom (contoh: Gold, Platinum, VVIP).  
2. Klik tombol **Tambah** untuk menyimpan.  
3. Level baru akan muncul di daftar “Level yang Tersedia”.  

---

## Mengedit Level
1. Klik ikon Edit pada level yang ingin diubah.  
2. Lakukan perubahan nama atau pengaturan lain.  
3. Klik **Simpan** untuk memperbarui.  

---

## Menghapus Level
1. Klik ikon Hapus di samping nama level.  
2. Konfirmasi penghapusan ketika muncul pop-up.  

Level yang masih digunakan oleh pelanggan tidak dapat dihapus sampai pelanggan tersebut dipindahkan ke level lain.

---

## Tips Penggunaan
- Gunakan level untuk membedakan strategi harga dan loyalitas pelanggan.  
- Contoh implementasi:
  - Reguler → tanpa diskon  
  - VIP → diskon 10%  
  - VVIP → diskon 15% + poin lebih tinggi  
- Level bisa digunakan untuk promo musiman atau membership eksklusif.  

---

⬅️ [[lensiro/master-data|Sebelumnya]] - [[lensiro/master-level|Berikutnya]] ➡️

Dokumentasi Lensiro 2025
