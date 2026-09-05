<template>
  <div>
    <Navbar />

    <!-- STRIP NAVIGASI ATAS -->
    <div style="margin-top:64px;background:var(--low);border-bottom:1px solid var(--line)">
      <div class="container mono text-[11px] tracking-[0.06em] uppercase text-[var(--ink3)]">
        <div class="flex flex-wrap items-center justify-between py-2.5 gap-x-8 gap-y-1">
          <span class="whitespace-normal min-w-0 sm:whitespace-nowrap" style="color:var(--accent)">// CASE FILE {{ p ? p.index : '--' }} — {{
            p ? tr(p.category) : 'PORTFOLIO' }}</span>
          <RouterLink to="/"
            class="whitespace-nowrap hover:text-[var(--accent)] transition-colors">{{ tr('← Kembali ke Beranda') }}</RouterLink>
        </div>
      </div>
    </div>

    <template v-if="p">
      <!-- HERO : INFO PROYEK -->
      <section class="section" style="padding-bottom:56px;background:var(--paper)">
        <div class="container">
          <div class="grid lg:grid-cols-[13fr_7fr] gap-10 lg:gap-16 items-start">
            <div class="rv">
              <p class="eyebrow mb-7" style="color:var(--accent)">{{ p.index }} // {{ tr(p.category) }}</p>
              <h1 class="h-disp" style="font-size:clamp(34px,5vw,58px);max-width:18ch">{{ tr(p.title) }}</h1>
              <p class="mono text-[11px] tracking-[0.08em] uppercase mt-6 mb-6" style="color:var(--ink3)">
                {{ tr(p.platform) }} — {{ tr(p.scope) }}</p>
              <p class="body-text mb-8" style="max-width:62ch;color:var(--ink2);font-size:16px">{{ tr(p.summary) }}</p>
              <div class="flex flex-wrap gap-2 mb-10">
                <span v-for="t in p.chips" :key="t" class="chip">{{ t }}</span>
              </div>
              <div class="flex flex-wrap items-center gap-4">
                <a href="mailto:muhammadputra752@gmail.com" class="btn-dark">{{ tr('Diskusikan Proyek Serupa') }}
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    stroke-width="2">
                    <path stroke-linecap="square" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
                <RouterLink to="/#karya" class="btn-line">{{ tr('Semua Karya') }}</RouterLink>
              </div>
            </div>
            <div class="rv" style="transition-delay:.12s">
              <div class="panel" style="border-top:3px solid var(--accent)">
                <div class="px-5 py-3.5 flex items-center justify-between gap-4"
                  style="border-bottom:1px solid var(--line)">
                  <span class="mono text-[11px] tracking-[0.1em] uppercase" style="color:var(--ink2)">// SPEC
                    SHEET</span>
                  <span class="mono text-[10px] tracking-[0.1em] uppercase inline-flex items-center gap-2"
                    style="color:var(--green)">
                    <span class="pulse-dot"></span>{{ tr(p.status) }}
                  </span>
                </div>
                <div v-for="r in p.specRows" :key="r.label" class="flex items-center justify-between gap-6 px-5 py-3.5"
                  style="border-bottom:1px solid var(--line)">
                  <span class="meta">{{ tr(r.label) }}</span>
                  <span class="mono text-[11px] uppercase tracking-[0.04em] text-right" style="color:var(--ink)">{{
                    tr(r.value) }}</span>
                </div>
                <div class="px-5 py-4 flex items-center justify-between">
                  <span class="meta">{{ tr('Entri Katalog') }}</span>
                  <span class="mono text-[11px] uppercase tracking-[0.04em]" style="color:var(--accent)">{{ p.index }} /
                    05</span>
                </div>
              </div>
              <p class="mono text-[10px] tracking-[0.08em] uppercase mt-3 text-center"
                style="color:var(--ink3)">{{ tr('SPESIFIKASI DIKELOLA & DIOPERASIKAN DI PRODUCTION') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- OVERVIEW + FITUR INTI -->
      <section style="background:var(--paper);border-top:1px solid var(--line)">
        <div class="container">
          <div class="grid lg:grid-cols-[7fr_5fr] gap-10 lg:gap-14 py-16 md:py-20 items-start">
            <div class="rv">
              <p class="mono text-[12px] tracking-[0.1em] uppercase mb-4" style="color:var(--accent)">{{ tr('// RINGKASAN PROYEK') }}</p>
              <h2 class="h-sec mb-7" style="max-width:20ch">{{ tr('Konteks, masalah, dan peran teknis.') }}</h2>
              <div class="space-y-5 body-text" style="color:var(--ink2)">
                <p v-for="(par, i) in p.overview" :key="i">{{ tr(par) }}</p>
              </div>
            </div>
            <div class="rv panel" style="border-top:3px solid var(--ink);transition-delay:.1s">
              <div class="px-6 py-4" style="border-bottom:1px solid var(--line)">
                <p class="mono text-[11px] tracking-[0.1em] uppercase" style="color:var(--ink2)">{{ tr('// CAKUPAN & FITUR INTI') }}</p>
              </div>
              <ul class="px-6 py-6 space-y-3">
                <li v-for="(f, i) in p.features" :key="i" class="flex gap-4 items-start">
                  <span class="mono text-[11px] font-semibold" style="color:var(--accent)">[{{ String(i + 1).padStart(2,
                    '0') }}]</span>
                  <span class="body-text" style="font-size:14px;color:var(--ink)">{{ tr(f) }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- METRIK KUNCI -->
      <section v-if="hasMetrics" style="background:var(--low);border-top:1px solid var(--line)">
        <div class="container py-14 md:py-16">
          <div class="flex flex-wrap items-end justify-between gap-4 mb-10">
            <p class="mono text-[12px] tracking-[0.1em] uppercase" style="color:var(--accent)">{{ tr('// METRIK PRODUKSI TERVERIFIKASI') }}</p>
            <span class="mono text-[10px] tracking-[0.1em] uppercase inline-flex items-center gap-2"
              style="color:var(--green)">
              <span class="pulse-dot"></span>LIVE / VERIFIED
            </span>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-px panel" style="background:var(--line)">
            <div v-for="(m, i) in p.metrics" :key="i" class="bg-[var(--card)] px-6 py-6"
              style="border-top:3px solid var(--accent)">
              <p class="mono text-[26px] lg:text-[30px] font-bold leading-none" style="color:var(--ink)">{{ m.value }}</p>
              <p class="mono text-[10.5px] tracking-[0.08em] uppercase mt-3" style="color:var(--ink3)">{{ tr(m.caption) }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- PERBANDINGAN BOTTLENECK VS HASIL -->
      <section v-if="hasComparison" style="background:var(--paper);border-top:1px solid var(--line)">
        <div class="container py-16 md:py-20">
          <p class="mono text-[12px] tracking-[0.1em] uppercase mb-10" style="color:var(--accent)">{{ tr('// BOTTLENECK VS HASIL TERVERIFIKASI') }}</p>
          <div class="grid lg:grid-cols-2 gap-6">
            <div class="rv panel p-7" style="border-top:3px solid var(--ink)">
              <p class="mono text-[10px] tracking-[0.12em] uppercase mb-5" style="color:var(--ink2)">{{ tr('Sebelum — Bottleneck Teknis') }}</p>
              <ul class="space-y-2.5 mono text-[12px] leading-relaxed" style="color:var(--ink2)">
                <li v-for="(b, i) in p.before" :key="'b' + i" class="flex gap-3">
                  <span style="color:#dc2626">⨯</span><span>{{ tr(b) }}</span>
                </li>
              </ul>
            </div>
            <div class="rv panel p-7" style="border-top:3px solid var(--green);transition-delay:.08s">
              <p class="mono text-[10px] tracking-[0.12em] uppercase mb-5" style="color:var(--green)">{{ tr('Sesudah — Hasil Terverifikasi') }}</p>
              <ul class="space-y-2.5 mono text-[12px] leading-relaxed" style="color:var(--ink2)">
                <li v-for="(a, i) in p.after" :key="'a' + i" class="flex gap-3">
                  <span style="color:var(--green)">✓</span><span>{{ tr(a) }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- KAPASITAS TERUKUR -->
          <div v-if="hasCapacity" class="rv mt-6 panel" style="transition-delay:.12s">
            <div class="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
              style="border-bottom:1px solid var(--line)">
              <span class="mono text-[10px] tracking-[0.12em] uppercase" style="color:var(--ink2)">{{ tr('Kapasitas Terukur')
                }} — {{ p.capacity.value }} {{ tr(p.capacity.caption) }}</span>
              <span class="mono text-[11px] tracking-[0.05em]" style="color:var(--accent)">{{ tr(p.capacity.note) }}</span>
            </div>
            <div class="px-5 py-5">
              <div class="flex justify-between mb-2 mono text-[9.5px] tracking-[0.06em]" style="color:var(--ink3)">
                <span>0</span><span>10K</span><span>20K</span><span>30K</span><span>40K+</span>
              </div>
              <div class="relative"
                style="height:30px;background:repeating-linear-gradient(90deg,var(--dim) 0 1px,transparent 1px calc(25%));background-size:25% 100%;border:1px solid var(--dim)">
                <div style="width:92%;height:100%;background:var(--ink);position:relative">
                  <span class="mono text-[10px] font-semibold tracking-[0.06em] uppercase"
                    style="color:#fff;position:absolute;right:8px;top:7px">{{ tr(p.capacity.barLabel) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- BEDAH TEKNIS -->
      <section style="background:var(--ink);color:#fff;border-top:1px solid var(--line)">
        <div class="container py-16 md:py-20">
          <div class="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div class="rv">
              <p class="mono text-[12px] tracking-[0.1em] uppercase mb-5" style="color:#e88b3a">{{ tr('// BEDAH TEKNIS') }} — {{
                p.index }}</p>
              <h2 class="h-disp" style="color:#fff;font-size:clamp(32px,4.4vw,50px)">{{ tr('Rincian Teknis Proyek') }}</h2>
            </div>
            <p class="rv mono text-[11px] tracking-[0.08em] uppercase" style="color:rgba(255,255,255,.5);text-align:right">
              {{ tr(p.category) }}<br />{{ tr(p.year) }}
            </p>
          </div>
          <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-px" style="background:rgba(255,255,255,.16)">
            <div v-for="(c, i) in p.breakdown" :key="i" class="rv p-7"
              style="background:rgba(255,255,255,.035);border-top:2px solid #e88b3a">
              <p class="mono text-[11px] tracking-[0.08em] uppercase mb-4" style="color:#e88b3a">{{ tr(c.tag) }}</p>
              <h3 class="mono text-[16px] font-semibold mb-3" style="color:#fff">{{ tr(c.title) }}</h3>
              <p class="text-[14px] leading-relaxed" style="color:rgba(255,255,255,.62)">{{ tr(c.body) }}</p>
            </div>
          </div>
          <p class="rv mono text-[11px] tracking-[0.1em] uppercase text-center mt-10"
            style="color:rgba(255,255,255,.4)">{{ tr('METRIK DIUKUR DARI SISTEM PRODUKSI — BUKAN SIMULASI') }}</p>
        </div>
      </section>

      <!-- CTA LANJUTAN -->
      <section class="section" style="background:var(--paper);border-top:1px solid var(--line)">
        <div class="container">
          <div class="grid lg:grid-cols-2 gap-px panel" style="background:var(--line)">
            <div class="bg-[var(--card)] p-8 md:p-10 flex flex-col justify-between gap-8"
              style="border-top:3px solid var(--accent)">
              <div>
                <p class="mono text-[12px] tracking-[0.1em] uppercase mb-5" style="color:var(--accent)">{{ tr('// TERMINAL KOMUNIKASI') }}</p>
                <h3 class="h-sec" style="max-width:20ch">{{ tr('Punya sistem serupa yang perlu dibangun atau dioptimalkan?') }}</h3>
              </div>
              <div class="flex flex-wrap items-center gap-4">
                <a href="mailto:muhammadputra752@gmail.com" class="btn-dark">Start a Project
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    stroke-width="2">
                    <path stroke-linecap="square" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
                <a href="tel:+6285155447978" class="btn-line">(+62)851 5544 7978</a>
              </div>
            </div>
            <RouterLink :to="'/karya/' + next.slug"
              class="bg-[var(--low)] p-8 md:p-10 flex flex-col justify-between gap-8 group hover:bg-[var(--dim)] transition-colors sep-lg-left">
              <div>
                <p class="mono text-[11px] tracking-[0.1em] uppercase mb-4" style="color:var(--ink3)">{{ tr('// PROYEK BERIKUTNYA') }} — {{ next.index }}</p>
                <h4 class="mono text-[18px] font-semibold leading-snug" style="color:var(--ink)">{{ tr(next.title) }}
                  <span class="inline-block transition-transform group-hover:translate-x-1"
                    style="color:var(--accent)">→</span>
                </h4>
              </div>
              <span class="mono text-[11px] tracking-[0.08em] uppercase" style="color:var(--ink3)">{{ tr('Buka Detail Proyek') }}</span>
            </RouterLink>
          </div>
        </div>
      </section>

    </template>

    <!-- PROYEK TIDAK DITEMUKAN -->
    <section v-else class="section">
      <div class="container">
        <p class="eyebrow mb-6">{{ tr('// ERROR 404 — CASE FILE TIDAK DITEMUKAN') }}</p>
        <h1 class="h-disp" style="max-width:22ch">{{ tr('Proyek dengan identitas') }}
          <em style="font-style:normal;color:var(--accent)">{{ slug }}</em> {{ tr('tidak ditemukan.') }}
        </h1>
        <p class="body-text mt-8 mb-10" style="max-width:56ch;color:var(--ink3)">{{ tr('Slug mungkin salah ketik atau proyek sudah tidak ada di katalog.') }}</p>
        <RouterLink to="/" class="btn-dark">{{ tr('Kembali ke Katalog Karya') }}</RouterLink>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { findProject, nextProject } from '../data/projects.js'
import { tr } from '../i18n'

const props = defineProps({
  slug: { type: String, required: true },
})

const p = computed(() => findProject(props.slug))
const next = computed(() => nextProject(props.slug))
const hasComparison = computed(() => !!(p.value && p.value.before && p.value.before.length))
const hasMetrics = computed(() => !!(p.value && p.value.metrics && p.value.metrics.length))
const hasCapacity = computed(() => !!(p.value && p.value.capacity))

// SEO (title, description, canonical) per halaman ditangani di main.js
// lewat router.afterEach menggunakan data dari src/data/projects.js.
</script>
