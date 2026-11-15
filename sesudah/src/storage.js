export const KUNCI = 'catatan-kuliah:v1';
const KUNCI_LAMA = 'catatan-kuliah';

let cadanganMemori = [];
let penyimpananTersedia = true;

function catatanSah(item) {
  return (
    item !== null &&
    typeof item === 'object' &&
    !Array.isArray(item) &&
    typeof item.judul === 'string' &&
    item.judul.trim() !== ''
  );
}

export function statusPenyimpanan() {
  return penyimpananTersedia;
}

export function muat() {
  try {
    let raw = localStorage.getItem(KUNCI);

    // Migrasi otomatis dari kunci lama P10/monolit (Level 2)
    if (raw === null) {
      const lama = localStorage.getItem(KUNCI_LAMA);
      if (lama !== null) {
        const parsedLama = JSON.parse(lama);
        if (Array.isArray(parsedLama)) {
          const validLama = parsedLama.filter(catatanSah);
          localStorage.setItem(KUNCI, JSON.stringify(validLama));
          localStorage.removeItem(KUNCI_LAMA);
          penyimpananTersedia = true;
          cadanganMemori = validLama;
          return validLama;
        }
      }
      penyimpananTersedia = true;
      return [];
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      penyimpananTersedia = true;
      return [];
    }

    const valid = parsed.filter(catatanSah);
    penyimpananTersedia = true;
    cadanganMemori = valid;
    return valid;
  } catch {
    penyimpananTersedia = false;
    return [...cadanganMemori];
  }
}

export function simpan(data) {
  const valid = Array.isArray(data) ? data.filter(catatanSah) : [];
  cadanganMemori = [...valid];
  try {
    localStorage.setItem(KUNCI, JSON.stringify(valid));
    penyimpananTersedia = true;
    return true;
  } catch {
    penyimpananTersedia = false;
    return false;
  }
}