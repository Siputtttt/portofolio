/**
 * scripts/generate-vue.mjs
 * Migrasi desain dari index.standalone.html -> komponen Vue 3 (SFC).
 * Menghasilkan:
 *   - src/assets/main.css        (Tailwind directives + seluruh custom CSS)
 *   - src/components/*.vue       (Navbar, Footer + komponen tiap section)
 *
 * Jalankan: node scripts/generate-vue.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SRC = readFileSync(join(ROOT, 'index.standalone.html'), 'utf8')

/* ------------------------------------------------------------------ */
/* 1. Main CSS : tailwind directives + seluruh <style> dari stand-alone */
/* ------------------------------------------------------------------ */
const styleMatch = SRC.match(/<style>([\s\S]*?)<\/style>/)
if (!styleMatch) throw new Error('Tidak menemukan blok <style> di index.standalone.html')
const css = styleMatch[1].trim()
const mainCss =
  '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n' +
  css +
  '\n'
mkdirSync(join(ROOT, 'src/assets'), { recursive: true })
writeFileSync(join(ROOT, 'src/assets/main.css'), mainCss)

/* ------------------------------------------------------------------ */
/* 2. Pecah markup menjadi segmen per section (berdasarkan komentar)    */
/* ------------------------------------------------------------------ */
const MARKERS = [
  // [namaFile, substring unik di komentar marker]
  ['Navbar', 'SECTION 01 : GLOBAL STICKY NAVIGATION'],
  ['TelemetryBar', 'SECTION 02 : TELEMETRY COORDINATES BAR'],
  ['HeroSection', 'SECTION 03 : HERO'],
  ['PipelineSection', 'SECTION 04 : PRODUCTION PIPELINE SCHEMATIC'],
  ['AboutSection', 'TENTANG / IDENTITAS'],
  ['WorksSection', 'SECTION 05 : KARYA TERPILIH'],
  ['CaseStudySection', 'SECTION 06 : DEEP-DIVE CASE STUDY'],
  ['StackIndexSection', 'SECTION 07 : TECHNICAL STACK INDEX'],
  ['ExperienceSection', 'SECTION 08 : PENGALAMAN REKAYASA'],
  ['PrinciplesSection', 'SECTION 09 : CARA SAYA MEMBANGUN'],
  ['ContactSection', 'SECTION 10 : TERMINAL KONTAK'],
]

function boundaryFor(title) {
  const titlePos = SRC.indexOf(title)
  if (titlePos === -1) throw new Error('Marker tidak ditemukan: ' + title)
  const start = SRC.lastIndexOf('<!--', titlePos)
  const end = SRC.indexOf('-->', titlePos) + 3
  return { start, end }
}

/* Footer: potong dari marker komentar "FOOTER" sampai </footer> */
const footerPos = SRC.indexOf('<footer')
const footerCommentStart = SRC.lastIndexOf('<!--', footerPos)
const footerCommentEnd = SRC.indexOf('-->', footerCommentStart) + 3
const footerBoundary = { start: footerCommentStart, end: footerCommentEnd }

const bounds = MARKERS.map(([, t]) => boundaryFor(t))
const segments = MARKERS.map(([name], i) => {
  const from = bounds[i].end
  const to = i + 1 < bounds.length ? bounds[i + 1].start : footerBoundary.start
  let content = SRC.slice(from, to)
  // buang wrapper <main> (dipindah ke App.vue) supaya tiap SFC root-nya tunggal
  content = content.replace(/<main[^>]*>|<\/main>/g, '')
  return { name, content: content.trim() }
})

segments.push({
  name: 'Footer',
  content: SRC.slice(footerBoundary.end, SRC.indexOf('</footer>') + '</footer>'.length).trim(),
})

/* ------------------------------------------------------------------ */
/* 3. Tulis SFC                                                         */
/* ------------------------------------------------------------------ */
const OUT = join(ROOT, 'src/components')
mkdirSync(OUT, { recursive: true })

for (const { name, content } of segments) {
  if (name === 'Navbar') {
    /* navbar interaktif: mobile menu + shadow saat scroll */
    const vue = content
      .replace('<header id="siteHeader"', '<header id="siteHeader" ref="headerEl"')
      .replace(
        'id="mobileNav" class="hidden lg:hidden"',
        'id="mobileNav" v-show="mobileOpen" class="lg:hidden"'
      )
      .replace(
        'aria-label="Menu"',
        'aria-label="Menu" @click="mobileOpen = !mobileOpen"'
      )
      .replace(/<a /g, '<a @click="mobileOpen = false" ')

    const sfc =
      `<template>\n${vue}\n</template>\n\n` +
      `<script setup>\n` +
      `import { ref, onMounted, onBeforeUnmount } from 'vue'\n\n` +
      `const mobileOpen = ref(false)\n` +
      `const headerEl = ref(null)\n\n` +
      `const onScroll = () => {\n` +
      `  const h = headerEl.value\n` +
      `  if (!h) return\n` +
      `  h.style.boxShadow =\n` +
      `    window.scrollY > 12\n` +
      `      ? '0 1px 0 0 var(--line), 0 12px 32px -24px rgba(28,25,23,.25)'\n` +
      `      : 'none'\n` +
      `}\n\n` +
      `onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))\n` +
      `onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))\n` +
      `</script>\n`
    writeFileSync(join(OUT, name + '.vue'), sfc)
  } else {
    const sfc = `<template>\n${content}\n</template>\n`
    writeFileSync(join(OUT, name + '.vue'), sfc)
  }
  console.log('✓ generated', name + '.vue', '(', content.length, 'chars )')
}

console.log('✓ main.css selesai')
console.log('Selesai —', segments.length, 'komponen')
