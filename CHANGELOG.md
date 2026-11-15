# Changelog — Catatan Kuliah (Latihan P11–P12)

Format berdasarkan [Keep a Changelog](https://keepachangelog.com/id-ID/1.1.0/), dan proyek ini mengikuti [Semantic Versioning](https://semver.org/lang/id/).

## [1.2.0] - 2026-11-15
### Added
- Membuat modul komponen reusable sesudah/src/komponen.js (KartuCatatan dan PesanKosong) berbasis document.createElement dan 	extContent.
- Menambahkan kunci penyimpanan berversi catatan-kuliah:v1, cadangan memori, serta status ketersediaan penyimpanan di sesudah/src/storage.js.
- Menambahkan migrasi otomatis satu kali dari kunci lama catatan-kuliah ke catatan-kuliah:v1 (Tantangan Level 2).
- Menambahkan berkas pemeriksa ketangguhan sesudah/uji/uji-tangguh.html dan sesudah/uji/uji-tangguh.js.

### Changed
- Memperbarui sesudah/src/ui.js agar menggunakan KartuCatatan untuk daftar Disematkan dan Semua catatan serta menampilkan peringatan jika penyimpanan lokal tidak tersedia.
- Memperbarui sesudah/src/state.js agar memanggil muat() dan simpan() yang tahan galat.

### Security
- Mencegah eksekusi tag HTML (XSS) pada judul catatan dengan mengganti penyusunan string HTML/innerHTML menjadi 	extContent.

## [1.1.0] - 2026-11-15
### Changed
- Memecah kode monolit pp.js menjadi 4 ES Modules (storage.js, state.js, ui.js, main.js) di folder sesudah/src/.
- Menghapus variabel global aplikasi pada window serta atribut onclick inline pada HTML.

## [1.0.0] - 2026-11-15
### Added
- Versi monolit awal aplikasi Catatan Kuliah pada folder sebelum/.
