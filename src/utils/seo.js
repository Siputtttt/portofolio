/**
 * src/utils/seo.js
 * Helper untuk memperbarui meta SEO (title, description, OG, Twitter)
 * secara dinamis per halaman/route.
 *
 * Catatan: SITE_URL harus konsisten dengan yang ada di index.html.
 * Ganti bila deploy bukan di https://siputtttt.github.io/portofolio/.
 */
export const SITE_URL = 'https://siputtttt.github.io/portofolio/'

export const HOME_SEO = {
  title: 'Muhammad Putra Rasidin — Fullstack Developer & Systems Architect',
  description:
    'Portofolio Muhammad Putra Rasidin, Fullstack Developer & Systems Architect di Bandung — sistem pemerintahan skala ribuan ASN, aplikasi mobile presensi, CMS multi-tenant, LMS & CBT, serta infrastruktur Linux production.',
  url: SITE_URL,
}

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Set title + semua meta penting untuk satu halaman. */
export function applySeo({ title, description, url = SITE_URL, image = SITE_URL + 'putra.jpeg' }) {
  document.title = title

  upsertMeta('name', 'description', description)
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:url', url)
  upsertMeta('property', 'og:image', image)
  upsertMeta('name', 'twitter:title', title)
  upsertMeta('name', 'twitter:description', description)
  upsertMeta('name', 'twitter:image', image)

  // canonical mengikuti URL halaman aktif
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}
