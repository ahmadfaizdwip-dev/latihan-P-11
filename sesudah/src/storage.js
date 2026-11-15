const KUNCI = 'catatan-kuliah';

export function muatCatatan() {
  return JSON.parse(localStorage.getItem(KUNCI)) || [];
}

export function simpanCatatan(data) {
  localStorage.setItem(KUNCI, JSON.stringify(data));
}