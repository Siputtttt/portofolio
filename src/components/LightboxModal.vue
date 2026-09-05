<template>
  <Teleport to="body">
    <Transition name="lb">
      <div v-if="open" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        style="background:rgba(28,25,23,.78);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)"
        role="dialog" aria-modal="true" :aria-label="alt || 'Preview Foto'"
        @click.self="emit('close')">
        <div class="lb-card w-full max-w-2xl overflow-hidden" style="background:var(--paper);border:1px solid rgba(255,255,255,.2)">
          <!-- Header ala terminal -->
          <div class="flex items-center justify-between px-4 sm:px-5 py-2.5" style="background:var(--ink)">
            <span class="mono text-[10px] sm:text-[11px] tracking-[0.12em] uppercase inline-flex items-center gap-2.5"
              style="color:rgba(255,255,255,.85)">
              <span class="amber-dot"></span>PHOTO_PREVIEW // PUTRA-RASIDIN
            </span>
            <button type="button" @click="emit('close')"
              class="mono text-[10px] tracking-[0.12em] uppercase inline-flex items-center gap-1.5 px-2.5 py-1 text-white hover:bg-white/10 transition-colors"
              aria-label="Tutup preview foto">
              CLOSE
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="square" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <!-- Gambar preview besar -->
          <div class="p-3 sm:p-5 bg-[var(--paper)]" @click.self="emit('close')">
            <img :src="image" :alt="alt"
              class="block w-full h-auto mx-auto select-none"
              style="max-height:70vh;object-fit:contain;border:1px solid var(--line);background:var(--card)"
              draggable="false" />
          </div>
          <!-- Footer hint -->
          <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 sm:px-5 py-2"
            style="border-top:1px solid var(--line);background:var(--low)">
            <span class="mono text-[10px] sm:text-[11px] tracking-[0.08em] uppercase" style="color:var(--ink2)">
              FOTO // {{ alt }}
            </span>
            <span class="mono text-[10px] tracking-[0.08em] uppercase" style="color:var(--ink3)">
              ESC / KLIK LUAR → TUTUP
            </span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch, onBeforeUnmount } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  image: { type: String, required: true },
  alt: { type: String, default: 'Preview Foto' },
})

const emit = defineEmits(['close'])

const onKey = (e) => {
  if (e.key === 'Escape' && props.open) emit('close')
}

watch(
  () => props.open,
  (v) => {
    // Kunci scroll halaman saat modal terbuka
    document.body.style.overflow = v ? 'hidden' : ''
    if (v) window.addEventListener('keydown', onKey)
    else window.removeEventListener('keydown', onKey)
  },
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})
</script>
