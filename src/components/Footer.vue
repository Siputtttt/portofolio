<template>
  <footer style="background:var(--ink);color:rgba(255,255,255,.72)">
    <div class="container">
      <div class="flex flex-wrap items-center justify-between gap-x-10 gap-y-6 py-8"
        style="border-bottom:1px solid rgba(255,255,255,.14)">
        <a href="#beranda" @click.prevent="goTop"
          class="inline-flex items-center transition-opacity hover:opacity-80"
          :aria-label="t('nav.aria.brand')">
          <img src="/logo-light.png" :alt="'Muhammad Putra Rasidin — ' + t('meta.role')"
            class="h-10 sm:h-12 w-auto object-contain" draggable="false" />
        </a>
        <nav class="flex flex-wrap items-center gap-x-8 gap-y-2">
          <RouterLink v-for="m in menu" :key="m.id" :to="{ path: '/', hash: '#' + m.id }"
            class="mono text-[11px] tracking-[0.12em] uppercase text-[rgba(255,255,255,.6)] hover:text-white transition-colors">{{ t('nav.' + m.id) }}</RouterLink>
        </nav>
        <span class="mono text-[11px] tracking-[0.08em] uppercase inline-flex items-center gap-2"
          style="color:#7ce38b">
          <span class="pulse-dot" style="background:#22c55e"></span>{{ t('footer.uptime') }}
        </span>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-4 py-6">
        <p class="mono text-[11px] tracking-[0.06em] uppercase" style="color:rgba(255,255,255,.4)">{{ t('footer.rights') }}</p>
        <p class="mono text-[11px] tracking-[0.06em] uppercase" style="color:rgba(255,255,255,.4)">{{ t('footer.buildPre') }}
          <span style="color:#e88b3a">{{ t('footer.buildTag') }}</span></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { t } from '../i18n'

const router = useRouter()

/** Menu footer — label mengikuti bahasa aktif lewat t('nav.' + id). */
const menu = [
  { id: 'karya' },
  { id: 'tentang' },
  { id: 'keahlian' },
  { id: 'pengalaman' },
  { id: 'kontak' },
]

/** Logo footer: kembali ke beranda (dari halaman detail) atau scroll ke atas */
const goTop = () => {
  if (router.currentRoute.value.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push('/')
  }
}
</script>
