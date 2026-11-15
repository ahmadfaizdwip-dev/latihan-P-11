import { KartuCatatan, PesanKosong } from './komponen.js';
import { statusPenyimpanan } from './storage.js';

export function renderTampilan(hasil) {
  const sematan = document.getElementById('sematan');
  const semua = document.getElementById('semua');
  const info = document.getElementById('info');

  const elemenSematan = [];
  const elemenSemua = [];

  for (let j = 0; j < hasil.length; j++) {
    const c = hasil[j];
    if (c.disematkan) {
      elemenSematan.push(KartuCatatan(c));
    }
    elemenSemua.push(KartuCatatan(c));
  }

  if (elemenSematan.length === 0) {
    sematan.replaceChildren(PesanKosong('Belum ada catatan yang disematkan.'));
  } else {
    sematan.replaceChildren(...elemenSematan);
  }

  if (elemenSemua.length === 0) {
    semua.replaceChildren(PesanKosong('Tidak ada catatan.'));
  } else {
    semua.replaceChildren(...elemenSemua);
  }

  const ringkasan = hasil.length + ' catatan, ' + elemenSematan.length + ' disematkan';
  info.textContent = statusPenyimpanan()
    ? ringkasan
    : ringkasan + ' (Peringatan: penyimpanan lokal tidak tersedia, data hanya di memori)';
}