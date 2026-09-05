<template>
  <header id="siteHeader" ref="headerEl" class="fixed top-0 left-0 w-full z-50"
    style="background:rgba(249,249,248,.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid var(--line)">
    <div class="container flex items-center justify-between" style="height:64px">
      <a href="#beranda" @click.prevent="goTop"
        class="flex items-center shrink-0 transition-opacity hover:opacity-80"
        :aria-label="t('nav.aria.brand')">
        <img src="/logo-dark.png" :alt="'Muhammad Putra Rasidin — ' + t('meta.role')"
          class="h-8 sm:h-9 lg:h-10 w-auto object-contain" draggable="false" />
      </a>

      <nav class="hidden lg:flex items-center gap-9">
        <RouterLink v-for="m in menu" :key="m.id" :to="{ path: '/', hash: '#' + m.id }"
          class="nav-link mono text-[12px] tracking-[0.12em] uppercase text-[var(--ink2)] hover:text-[var(--ink)] transition-colors"
          :class="{ 'is-active': activeSection === m.id }">
          {{ t('nav.' + m.id) }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-2.5 sm:gap-3 lg:gap-4">
        <!-- Switch bahasa ID/EN -->
        <div class="flex items-stretch border border-[var(--line)] bg-[var(--card)] p-0.5"
          role="group" :aria-label="t('nav.aria.lang')">
          <button v-for="l in langs" :key="l.code" type="button" @click="setLocale(l.code)"
            class="mono text-[10px] leading-none tracking-[0.08em] uppercase px-2 py-[7px] transition-colors"
            :class="locale === l.code
              ? 'bg-[var(--ink)] text-white'
              : 'text-[var(--ink2)] hover:text-[var(--ink)]'"
            :aria-pressed="locale === l.code">{{ l.code }}</button>
        </div>
        <span
          class="hidden md:inline-flex items-center gap-2 mono text-[11px] tracking-[0.08em] uppercase border border-[var(--line)] px-3.5 py-1.5 bg-[var(--card)] text-[var(--ink2)]">
          <span class="pulse-dot"></span>{{ t('nav.available') }}
        </span>
        <RouterLink :to="{ path: '/', hash: '#tentang' }" @click="closeMobile"
          class="hidden sm:block w-9 h-[52px] border border-[var(--ink)] bg-[var(--card)] overflow-hidden transition-opacity hover:opacity-75"
          :aria-label="t('nav.aria.profile')">
          <img src="/putra.jpeg" :alt="'Foto Muhammad Putra Rasidin'" class="w-full h-full object-cover" />
        </RouterLink>
        <button id="mobileMenuBtn"
          class="hamb-btn lg:hidden w-11 h-11 flex items-center justify-center border transition-colors duration-200"
          :class="mobileOpen
            ? 'open bg-[var(--ink)] text-white border-[var(--ink)]'
            : 'border-[var(--ink)] bg-[var(--card)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white'"
          :aria-label="mobileOpen ? t('nav.aria.menuClose') : t('nav.aria.menu')"
          :aria-expanded="mobileOpen" aria-controls="mobileNav"
          @click="mobileOpen = !mobileOpen">
          <span class="hamb" aria-hidden="true">
            <span class="bar"></span><span class="bar"></span><span class="bar"></span>
          </span>
        </button>
      </div>
    </div>

    <Transition name="mnav">
      <div v-if="mobileOpen" id="mobileNav" class="lg:hidden"
        style="border-top:1px solid var(--line);background:var(--paper)">
        <div class="container py-5 flex flex-col">
          <RouterLink v-for="(m, i) in menu" :key="m.id" :to="{ path: '/', hash: '#' + m.id }"
            @click="closeMobile"
            class="mnav-i nav-link mono text-[12px] tracking-[0.12em] uppercase text-[var(--ink2)] hover:text-[var(--accent)] transition-colors py-2.5"
            :class="{ 'is-active': activeSection === m.id }">
            {{ String(i + 1).padStart(2, '0') }} / {{ t('nav.' + m.id) }}
          </RouterLink>
          <span
            class="mnav-i inline-flex items-center gap-2 mono text-[11px] tracking-[0.08em] uppercase border border-[var(--line)] px-3 py-2 bg-[var(--card)] text-[var(--ink2)] w-fit mt-1.5">
            <span class="pulse-dot"></span>{{ t('nav.available') }}
          </span>
          <div class="mnav-i flex items-center gap-3 pt-1 mt-2.5">
            <span class="mono text-[10px] tracking-[0.12em] uppercase text-[var(--ink3)]">{{ t('nav.aria.lang') }}</span>
            <div class="flex items-stretch border border-[var(--line)] bg-[var(--card)] p-0.5" role="group"
              :aria-label="t('nav.aria.lang')">
              <button v-for="l in langs" :key="l.code" type="button" @click="setLocale(l.code)"
                class="mono text-[11px] leading-none tracking-[0.08em] uppercase px-3 py-2 transition-colors"
                :class="locale === l.code
                  ? 'bg-[var(--ink)] text-white'
                  : 'text-[var(--ink2)] hover:text-[var(--ink)]'"
                :aria-pressed="locale === l.code">
                {{ l.code === 'id' ? 'Indonesia' : 'English' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Lapisan peredup saat drawer mobile terbuka (klik untuk menutup) -->
  <Transition name="mnav-dim">
    <div v-if="mobileOpen" class="mnav-dim fixed inset-0 z-40 lg:hidden" aria-hidden="true"
      style="background:rgba(28,25,23,.4)"
      @click="closeMobile"></div>
  </Transition>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { t, locale, setLocale } from '../i18n'

const router = useRouter()
const mobileOpen = ref(false)
const headerEl = ref(null)

/** Tutup drawer mobile (dipakai tombol, link, overlay & ESC). */
const closeMobile = () => {
  mobileOpen.value = false
}

/** Menu navigasi (urutan tampil). Dipakai desktop & mobile sekaligus. */
const menu = [
  { id: 'karya' },
  { id: 'tentang' },
  { id: 'keahlian' },
  { id: 'pengalaman' },
  { id: 'kontak' },
]

/** Bahasa yang didukung untuk toggle ID/EN. */
const langs = [{ code: 'id' }, { code: 'en' }]

/** Section yang sedang dikunjungi (scroll-spy). Kosong bila di halaman lain. */
const activeSection = ref('')

/**
 * Cari section aktif: section dengan posisi teratas <= garis probe
 * (tepat di bawah navbar 64px) dan paling bawah di urutan dokumen.
 * Urutan dipakai sesuai posisi DOM di Home: tentang -> karya -> ...
 */
const SECTION_ORDER = ['tentang', 'karya', 'keahlian', 'pengalaman', 'kontak']
const computeActive = () => {
  if (router.currentRoute.value.path !== '/') {
    activeSection.value = ''
    return
  }
  const probe = 130
  let current = ''
  for (const id of SECTION_ORDER) {
    const el = document.getElementById(id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= probe) current = id
    else break
  }
  activeSection.value = current
}

const onScroll = () => {
  const h = headerEl.value
  if (h) {
    h.style.boxShadow =
      window.scrollY > 12
        ? '0 1px 0 0 var(--line), 0 12px 32px -24px rgba(28,25,23,.25)'
        : 'none'
  }
  computeActive()
}

/** Logo: dari halaman detail -> kembali ke beranda, dari home -> scroll ke atas */
const goTop = () => {
  closeMobile()
  if (router.currentRoute.value.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push('/')
  }
}

/**
 * Kunci scroll halaman selama drawer terbuka, supaya pengguna HP
 * fokus memilih menu (bukan malah menggeser konten di belakangnya).
 */
watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

/** Tutup saat tombol ESC ditekan. */
const onKey = (e) => {
  if (e.key === 'Escape' && mobileOpen.value) closeMobile()
}

/** Jika layar diperbesar sampai >= lg, drawer tidak relevan lagi. */
const onResize = () => {
  if (window.innerWidth >= 1024 && mobileOpen.value) closeMobile()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
  window.addEventListener('resize', onResize)
  computeActive()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('resize', onResize)
  document.body.style.overflow = ''
})
</script>