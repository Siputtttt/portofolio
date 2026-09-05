import { ref } from 'vue'
import id from './locales/id.json'
import en from './locales/en.json'
import home1 from './locales/en.texts.home1.json'
import home2 from './locales/en.texts.home2.json'
import home3 from './locales/en.texts.home3.json'
import home4 from './locales/en.texts.home4.json'
import proj1 from './locales/en.texts.proj1.json'
import proj2 from './locales/en.texts.proj2.json'
import proj3 from './locales/en.texts.proj3.json'
import proj4 from './locales/en.texts.proj4.json'
import portfolio from './locales/en.texts.portfolio.json'
import detail from './locales/en.texts.detail.json'

/**
 * i18n ringan untuk portofolio.
 * - Tanpa dependency tambahan (cukup Vue reactivity).
 * - UI chrome (nav/footer/meta) bersumber dari id.json & en.json.
 * - Terjemahan konten kalimat-per-kalimat ada di en.texts.*.json
 *   (kunci = teks sumber Indonesia, nilai = terjemahan English).
 * - Pilihan bahasa disimpan di localStorage dan dipakai saat render berikutnya.
 */

const messages = { id, en }

// Gabungkan seluruh kamus terjemahan konten (kalimat Indonesia -> English).
const texts = {
  ...home1,
  ...home2,
  ...home3,
  ...home4,
  ...proj1,
  ...proj2,
  ...proj3,
  ...proj4,
  ...portfolio,
  ...detail,
}
const STORAGE_KEY = 'mpr-lang'
const SUPPORTED = ['id', 'en']

const saved =
  typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null

/** Locale aktif (reactive — template yang memanggil t() ikut re-render). */
export const locale = ref(SUPPORTED.includes(saved) ? saved : 'id')

/**
 * Ambil teks terjemahan berdasarkan locale aktif.
 * Mendukung path bertitik ("nav.available") termasuk indeks array ("works.0.title").
 * Bila key tidak ditemukan, kembalikan key itu sendiri (mudah dilacak).
 */
export function t(path) {
  const tree = messages[locale.value]
  const segs = path.split('.')
  let cur = tree
  for (const seg of segs) {
    if (cur == null) return path
    cur = cur[seg]
  }
  return typeof cur === 'string' ? cur : path
}

/** Ganti bahasa & beri tahu seluruh komponen via reactivity. */
export function setLocale(lang) {
  if (!SUPPORTED.includes(lang)) return
  locale.value = lang
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lang)
  }
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', lang)
  }
}

/**
 * Terjemahan berbasis kalimat sumber (Indonesian default).
 * Teks Indonesia tetap menjadi sumber di template, lalu dipetakan ke
 * English lewat en.json -> "texts". Bila locale = 'id' (atau mapping
 * belum ada), teks dikembalikan apa adanya.
 */
export function tr(text) {
  if (locale.value !== 'en') return text
  return texts[text] || text
}

/** Ganti bahasa (alias singkat untuk template event handler). */
export function toggleLocale(lang) {
  setLocale(lang)
}

export const SUPPORTED_LOCALES = SUPPORTED
