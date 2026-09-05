import { createApp, nextTick, watch } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import { findProject } from './data/projects.js'
import { applySeo, SITE_URL } from './utils/seo.js'
import { t, tr, locale, setLocale } from './i18n'

// Set atribut <html lang> mengikuti bahasa awal (id) dari localStorage.
setLocale(locale.value)

const app = createApp(App)
app.use(router)
app.mount('#app')

/** SEO dinamis per halaman — baca bahasa aktif saat render. */
function applyRouteSeo(to) {
  if (to.name === 'home') {
    applySeo({
      title: t('meta.homeTitle'),
      description: t('meta.homeDescription'),
      url: SITE_URL,
    })
  } else if (to.name === 'project-detail') {
    const proj = findProject(to.params.slug)
    if (proj) {
      applySeo({
        title: `${tr(proj.title)} — Muhammad Putra Rasidin`,
        description: tr(proj.summary),
        url: SITE_URL + 'karya/' + proj.slug,
      })
    } else {
      applySeo({
        title: t('meta.notFoundTitle'),
        description: t('meta.notFoundDescription'),
        url: SITE_URL,
      })
    }
  }
}

/**
 * Scroll-reveal untuk elemen ber-class `.rv`.
 * Dijalankan setelah mount & setiap pergantian halaman (route) supaya
 * elemen yang baru dirender di views ikut ter-observasi.
 */
function initReveal() {
  const els = document.querySelectorAll('.rv')
  if (!els.length) return
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
  )
  els.forEach((el) => io.observe(el))
}

requestAnimationFrame(() => setTimeout(initReveal, 0))

router.afterEach(async (to) => {
  // SEO dinamis per halaman (mengikuti bahasa aktif).
  applyRouteSeo(to)

  await nextTick()
  setTimeout(initReveal, 0)
})

// Saat bahasa diganti di tengah halaman, SEO ikut diperbarui.
watch(locale, () => {
  applyRouteSeo(router.currentRoute.value)
})
