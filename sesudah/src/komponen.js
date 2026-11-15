export function KartuCatatan(catatan) {
  const kartu = document.createElement('div');
  kartu.className = 'kartu';

  const mkEl = document.createElement('small');
  mkEl.textContent = catatan.mk ?? '';

  const judulEl = document.createElement('h3');
  judulEl.textContent = catatan.judul ?? '';

  const tanggalEl = document.createElement('small');
  tanggalEl.textContent = catatan.dibuat
    ? new Date(catatan.dibuat).toLocaleDateString('id-ID')
    : '';

  const aksiEl = document.createElement('div');
  aksiEl.className = 'aksi';

  const btnSemat = document.createElement('button');
  btnSemat.type = 'button';
  btnSemat.dataset.aksi = 'semat';
  btnSemat.dataset.id = String(catatan.id);
  btnSemat.textContent = catatan.disematkan ? 'Lepas' : 'Sematkan';

  const btnHapus = document.createElement('button');
  btnHapus.type = 'button';
  btnHapus.dataset.aksi = 'hapus';
  btnHapus.dataset.id = String(catatan.id);
  btnHapus.textContent = 'Hapus';

  aksiEl.append(btnSemat, btnHapus);
  kartu.append(mkEl, judulEl, tanggalEl, aksiEl);

  return kartu;
}

export function PesanKosong(teks) {
  const p = document.createElement('p');
  p.className = 'kosong';
  p.textContent = teks;
  return p;
}