import { muatCatatan, simpanCatatan } from './storage.js';

let daftarCatatan = muatCatatan();

export function semua() {
  return daftarCatatan;
}

export function tambah(judul, mk) {
  daftarCatatan.push({
    id: Date.now(),
    judul: judul,
    mk: mk,
    dibuat: new Date().toISOString(),
    disematkan: false
  });
  simpanCatatan(daftarCatatan);
}

export function alihSemat(id) {
  for (let i = 0; i < daftarCatatan.length; i++) {
    if (daftarCatatan[i].id === id) {
      daftarCatatan[i].disematkan = !daftarCatatan[i].disematkan;
    }
  }
  simpanCatatan(daftarCatatan);
}

export function hapus(id) {
  daftarCatatan = daftarCatatan.filter((c) => c.id !== id);
  simpanCatatan(daftarCatatan);
}

export function cari(kata) {
  const kataKunci = kata.toLowerCase();
  return daftarCatatan.filter((c) => c.judul.toLowerCase().includes(kataKunci));
}