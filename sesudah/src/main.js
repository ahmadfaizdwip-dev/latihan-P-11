import { tambah, alihSemat, hapus, cari } from './state.js';
import { renderTampilan } from './ui.js';

let kataCari = '';

function perbarui() {
  const hasil = cari(kataCari);
  renderTampilan(hasil);
}

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const inputJudul = document.getElementById('judul');
  const judul = inputJudul.value.trim();
  if (judul === '') return;

  const mk = document.getElementById('mk').value;
  tambah(judul, mk);
  inputJudul.value = '';
  perbarui();
});

document.getElementById('cari').addEventListener('input', (e) => {
  kataCari = e.target.value;
  perbarui();
});

function tanganiKlikKartu(e) {
  const tombol = e.target.closest('button[data-aksi]');
  if (!tombol) return;

  const id = Number(tombol.dataset.id);
  const aksi = tombol.dataset.aksi;

  if (aksi === 'semat') {
    alihSemat(id);
    perbarui();
  } else if (aksi === 'hapus') {
    if (!confirm('Hapus catatan ini?')) return;
    hapus(id);
    perbarui();
  }
}

document.getElementById('sematan').addEventListener('click', tanganiKlikKartu);
document.getElementById('semua').addEventListener('click', tanganiKlikKartu);

perbarui();