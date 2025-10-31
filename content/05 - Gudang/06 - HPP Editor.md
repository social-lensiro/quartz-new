## HPP Editor

Fitur **HPP Editor** digunakan untuk melakukan **penyesuaian dan perhitungan ulang Harga Pokok Penjualan (HPP)** di sistem Lensiro.  

HPP berperan penting dalam menentukan **margin laba**, **laba rugi**, dan **nilai stok akhir** di laporan keuangan.  

Lensiro menyediakan dua mode utama:
- **Penyesuaian Stok** → koreksi manual atau massal terhadap harga pokok pembelian.  
- **Hitung Ulang Semua (FIFO)** → menghitung ulang seluruh harga pokok berdasarkan urutan stok masuk (*First In First Out*).  

---

### Fungsi Utama
- Menyesuaikan HPP untuk item yang nilainya nol, kosong, atau tidak wajar.  
- Memperbarui harga pokok secara manual maupun serentak.  
- Menghitung ulang HPP otomatis dengan metode FIFO.  
- Menjaga konsistensi data stok dan akurasi laporan keuangan.  

---

### Langkah Menggunakan Editor HPP

#### 1. Penyesuaian Stok (Edit Manual & Massal)
1. Masuk ke menu **Gudang → HPP Editor → Penyesuaian Stok**.  
2. Gunakan filter:
   - **Cabang / Gudang**  
   - **Kondisi Harga Pokok** (Harga Nol, Kosong, Rendah)  
   - **Periode Tanggal**  
   - **ID Job / Opname** *(opsional)*  
3. Klik **Ambil Data** untuk menampilkan daftar transaksi dengan masalah harga pokok.  
4. Sistem menampilkan tabel berisi kolom:  
   `ID`, `Tanggal`, `Cabang`, `Barang`, `Qty Penyesuaian`, `Memo`, `Pelaku`, dan `Harga Pokok`.  

![[06 - HPP Editor.png]]
<figcaption><b>📸 Tampilan: Panel HPP Editor</b></figcaption>

---

#### 2. Koreksi Harga Pokok Secara Manual
1. Klik nilai **Harga Pokok** yang ingin diperbaiki.  
2. Masukkan nilai baru sesuai harga pembelian yang benar.  
3. Klik **Simpan Perubahan**.  
4. Sistem langsung memperbarui HPP untuk item tersebut.  

🧾 *Catatan:*  
- Baris merah = HPP bermasalah.  
- Perubahan hanya dapat dilakukan oleh pengguna berhak (*Administrator / Finance*).  

---

#### 3. Update Massal (Perubahan Banyak Data Sekaligus)
1. Centang beberapa baris item yang ingin diubah.  
2. Di bagian bawah tabel akan muncul panel tindakan:  
   `[data dipilih] | [Batal Pilih] [Update Massal]`  
3. Klik **Update Massal** untuk membuka jendela pengaturan perubahan harga.  

![[06 - HPP Editors.png]]
<figcaption><b>📸 Tampilan: Panel Update Massal di bagian bawah tabel</b></figcaption>

---

### Metode Update Harga Massal
Setelah klik **Update Massal**, akan muncul jendela pengaturan seperti gambar di bawah.  

![[06 - HPP Editorsd.png]]
<figcaption><b>📸 Tampilan: Update Harga</b></figcaption>

Kamu dapat memilih metode update harga berikut:

| Metode | Keterangan |
|:--|:--|
| Harga Beli | Menetapkan harga pokok berdasarkan harga beli dari supplier. |
| Harga Jual | Menggunakan harga jual item sebagai acuan sementara. |
| Harga Custom | Memasukkan harga khusus berbeda dari harga standar. |
| Persentase | Mengubah semua harga dengan kenaikan/penurunan dalam persen. |
| Tambah Nilai | Menambahkan nominal tertentu terhadap harga lama. |
| Kurangi Nilai | Mengurangi nominal tertentu dari harga lama. |
| Nilai Tetap | Mengatur semua harga pokok ke angka spesifik (misal Rp 5.000.000). |

**Langkah-langkah:**
1. Pilih **Metode Update** yang diinginkan.  
2. Masukkan nilai baru di kolom **Nilai Baru (Rp)**.  
3. Periksa kolom pratinjau (*Preview Perubahan*) untuk memastikan hasil akhir:  
   - **Harga Lama**, **Harga Baru**, **Selisih**, dan **Perubahan %**.  
4. Klik **Update X Item** untuk menyimpan semua perubahan sekaligus.  

 *Catatan:*  
- Semua item yang dipilih akan diperbarui berdasarkan metode yang sama.  
- Pastikan nilai sudah diverifikasi sebelum konfirmasi.  
- Sistem menampilkan total nilai lama vs nilai baru untuk memastikan akurasi.  

---

#### 4. Hitung Ulang Semua Harga Pokok (Metode FIFO)
1. Pindah ke tab **Hitung Ulang Semua**.  
2. Klik **Mulai Perhitungan FIFO**.  
3. Sistem akan menghitung ulang seluruh nilai HPP berdasarkan urutan stok masuk (*First In First Out*).  

![[06 - HPP Editore.png]]
<figcaption><b>📸 Gambar: Tampilan Perhitungan Ulang FIFO</b></figcaption>

 *Metode FIFO:*  
Barang yang pertama kali masuk akan dijual lebih dulu, sehingga harga pokok mengikuti urutan masuk stok.  

---

### Peringatan
> **Penting:**  
> - Jangan menutup halaman selama proses *Hitung Ulang FIFO*.  
> - Pastikan semua harga bermasalah sudah dikoreksi sebelum memulai.  
> - Setelah proses selesai, nilai lama akan ditimpa.  
> - Gunakan hanya oleh pengguna dengan hak akses penuh.  

---

### Catatan Tambahan
- Gunakan **Penyesuaian Stok** untuk koreksi sebagian.  
- Gunakan **Update Massal** untuk koreksi banyak item sekaligus.  
- Gunakan **Hitung Ulang FIFO** untuk pembaruan menyeluruh.  
- Disarankan dijalankan di akhir periode akuntansi.  

---

 [[05 - Gudang/05 - Stock Opname|Sebelumnya]] - [[05 - Gudang/07 - Permintaan Stock|Berikutnya]] 

