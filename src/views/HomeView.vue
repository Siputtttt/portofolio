<template>
    <Navbar />

    <!-- ====================== -->

    <div style="margin-top: 64px; background: var(--low); border-bottom: 1px solid var(--line)">
        <div class="container mono text-[10px] sm:text-[11px] tracking-[0.04em] sm:tracking-[0.06em] uppercase text-[var(--ink3)]">
            <div class="flex flex-wrap items-center justify-between py-2.5 gap-x-8 gap-y-1">
                <span class="whitespace-normal sm:whitespace-nowrap">LAT: -6.9175° S, LONG: 107.6191° E // BANDUNG, ID</span>
                <span class="hidden md:inline whitespace-nowrap md:ml-auto">KERNEL: LINUX 584-X64 // STATUS: <span style="color: var(--green)">PRODUCTION ACTIVE</span> // UPTIME: 99.98%</span>
            </div>
        </div>
    </div>

    <!-- ====================== -->

    <section id="beranda" class="section" style="padding-bottom: 64px; background: var(--paper)">
        <div class="container">
            <div class="grid lg:grid-cols-[13fr_7fr] gap-10 lg:gap-16 items-start">
                <!-- LEFT 65% -->
                <div class="rv">
                    <div class="eyebrow mb-7">Fullstack Developer // Bandung, ID</div>
                    <h1 class="h-disp" style="max-width: 19ch">
                        {{ tr('Saya membangun sistem yang harus bekerja di') }} <em style="font-style: normal; color: var(--accent)">{{ tr('dunia nyata') }}</em
                        >.
                    </h1>
                    <p class="body-text mt-8 mb-10" style="max-width: 60ch; color: var(--ink3)">
                        {{ tr('Peran teknis end-to-end: merancang arsitektur aplikasi web, aplikasi mobile, backend API, partitioning database, hingga infrastruktur Linux production — sistem yang melayani puluhan ribu pengguna aktif setiap hari tanpa downtime.') }}
                    </p>
                    <div class="flex flex-wrap items-center gap-4 mb-12">
                        <a href="#karya" class="btn-dark"
                            >{{ tr('Lihat Karya') }}
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="square" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                        <a href="#kontak" class="btn-line">{{ tr('Hubungi Saya') }}</a>
                    </div>
                    <div class="flex flex-wrap items-center gap-8 hair-t pt-6">
                        <span class="meta">{{ tr('Profil Publik') }} ↗</span>
                        <a href="https://github.com/Siputtttt" class="mono text-[12px] tracking-[0.08em] uppercase text-[var(--ink2)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                            {{ tr('GitHub') }} ↗</a
                        >
                        <a href="https://www.linkedin.com/in/muhammad-putra-3a242a21b/" class="mono text-[12px] tracking-[0.08em] uppercase text-[var(--ink2)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            {{ tr('LinkedIn') }} ↗</a
                        >
                    </div>
                </div>
                <!-- RIGHT 35% : LIVE TELEMETRY TERMINAL WIDGET -->
                <div class="rv" style="transition-delay: 0.15s">
                    <div class="panel" style="background: var(--ink); color: #fff">
                        <div class="flex items-center justify-between px-5 py-3.5" style="border-bottom: 1px solid rgba(255, 255, 255, 0.14)">
                            <span class="mono text-[11px] tracking-[0.1em] uppercase inline-flex items-center gap-2.5" style="color: rgba(255, 255, 255, 0.85)"> <span class="amber-dot"></span>SYS_METRICS_84_LIVE </span>
                            <span class="mono text-[10px] tracking-[0.12em] uppercase inline-flex items-center gap-2" style="color: #7ce38b"> <span class="w-1.5 h-1.5 rounded-full" style="background: #22c55e; box-shadow: 0 0 8px #22c55e"></span>LIVE </span>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-5 py-5" style="border-right: 1px solid rgba(255, 255, 255, 0.14); border-bottom: 1px solid rgba(255, 255, 255, 0.14)">
                                <p class="mono text-[10px] tracking-[0.12em] uppercase mb-2" style="color: rgba(255, 255, 255, 0.5)">P99 Latency</p>
                                <p class="mono text-[22px] font-semibold leading-none">&lt; 120<span style="color: rgba(255, 255, 255, 0.5); font-size: 12px">ms</span></p>
                            </div>
                            <div class="px-5 py-5" style="border-bottom: 1px solid rgba(255, 255, 255, 0.14)">
                                <p class="mono text-[10px] tracking-[0.12em] uppercase mb-2" style="color: rgba(255, 255, 255, 0.5)">Throughput Peak</p>
                                <p class="mono text-[22px] font-semibold leading-none">18,500<span style="color: rgba(255, 255, 255, 0.5); font-size: 12px"> rpm</span></p>
                            </div>
                            <div class="px-5 py-5" style="border-right: 1px solid rgba(255, 255, 255, 0.14)">
                                <p class="mono text-[10px] tracking-[0.12em] uppercase mb-2" style="color: rgba(255, 255, 255, 0.5)">Failover SLA</p>
                                <p class="mono text-[22px] font-semibold leading-none">99.98<span style="color: rgba(255, 255, 255, 0.5); font-size: 12px">%</span></p>
                            </div>
                            <div class="px-5 py-5">
                                <p class="mono text-[10px] tracking-[0.12em] uppercase mb-2" style="color: rgba(255, 255, 255, 0.5)">Deployment</p>
                                <p class="mono text-[13px] font-semibold leading-snug">ZERO-DOWNTIME<br /><span style="color: rgba(255, 255, 255, 0.55); font-weight: 400; font-size: 11px">CI/CD Deployed</span></p>
                            </div>
                        </div>
                    </div>
                    <p class="mono text-[10px] tracking-[0.08em] uppercase mt-3 text-center" style="color: var(--ink3)">{{ tr('TELEMETRI TERVERIFIKASI DARI SISTEM PRODUKSI') }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ====================== -->

    <section style="background: var(--paper); border-top: 1px solid var(--line)">
        <div class="container" style="padding: 26px 24px 0">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span class="meta">{{ tr('// PRODUCTION ARCHITECTURE — ARUS REQUEST') }}</span>
                <span class="meta" style="color: var(--accent)">LOAD-BALANCED · REDUNDANT · OBSERVABLE</span>
            </div>
            <div class="overflow-x-auto touch-scroll -mx-6 px-6 rv">
                <div class="flex items-stretch gap-0" style="min-width: 1020px">
                    <!-- NODE 1 -->
                    <div class="flex-1 panel p-5" style="border-top: 3px solid var(--accent)">
                        <p class="mono text-[10px] tracking-[0.1em] uppercase" style="color: var(--accent)">01 INGRESS</p>
                        <p class="mono text-[12.5px] font-semibold mt-1.5 mb-2 tracking-[0.02em]">CLIENT / MOBILE</p>
                        <p class="mono text-[10.5px] uppercase leading-relaxed" style="color: var(--ink3); letter-spacing: 0.03em">Vue.js · Ionic<br />Capacitor · HTTPS</p>
                    </div>
                    <div class="flex items-center px-1 pb-5"><span class="mono text-lg" style="color: var(--accent)">→</span></div>
                    <!-- NODE 2 -->
                    <div class="flex-1 panel p-5" style="border-top: 3px solid var(--accent)">
                        <p class="mono text-[10px] tracking-[0.1em] uppercase" style="color: var(--accent)">02 GATEWAY</p>
                        <p class="mono text-[12.5px] font-semibold mt-1.5 mb-2 tracking-[0.02em]">NGINX PROXY</p>
                        <p class="mono text-[10.5px] uppercase leading-relaxed" style="color: var(--ink3); letter-spacing: 0.03em">Rate Limiting · SSL<br />Request Buffer</p>
                    </div>
                    <div class="flex items-center px-1 pb-5"><span class="mono text-lg" style="color: var(--accent)">→</span></div>
                    <!-- NODE 3 -->
                    <div class="flex-1 panel p-5" style="border-top: 3px solid var(--accent)">
                        <p class="mono text-[10px] tracking-[0.1em] uppercase" style="color: var(--accent)">03 APP LAYER</p>
                        <p class="mono text-[12.5px] font-semibold mt-1.5 mb-2 tracking-[0.02em]">PHP-FPM CLUSTER</p>
                        <p class="mono text-[10.5px] uppercase leading-relaxed" style="color: var(--ink3); letter-spacing: 0.03em">Laravel API<br />Queue Workers</p>
                    </div>
                    <div class="flex items-center px-1 pb-5"><span class="mono text-lg" style="color: var(--accent)">→</span></div>
                    <!-- NODE 4 -->
                    <div class="flex-1 panel p-5" style="border-top: 3px solid var(--accent)">
                        <p class="mono text-[10px] tracking-[0.1em] uppercase" style="color: var(--accent)">04 MEMORY STORE</p>
                        <p class="mono text-[12.5px] font-semibold mt-1.5 mb-2 tracking-[0.02em]">REDIS CACHE &amp; QUEUE</p>
                        <p class="mono text-[10.5px] uppercase leading-relaxed" style="color: var(--ink3); letter-spacing: 0.03em">Distributed Locks<br />FIFO · Streams</p>
                    </div>
                    <div class="flex items-center px-1 pb-5"><span class="mono text-lg" style="color: var(--accent)">→</span></div>
                    <!-- NODE 5 -->
                    <div class="flex-1 panel p-5" style="border-top: 3px solid var(--accent)">
                        <p class="mono text-[10px] tracking-[0.1em] uppercase" style="color: var(--accent)">05 PERSISTENCE</p>
                        <p class="mono text-[12.5px] font-semibold mt-1.5 mb-2 tracking-[0.02em]">MYSQL / MARIADB</p>
                        <p class="mono text-[10.5px] uppercase leading-relaxed" style="color: var(--ink3); letter-spacing: 0.03em">Composite Indexing<br />Master Replication</p>
                    </div>
                </div>
            </div>
            <p class="mono text-[10px] tracking-[0.08em] uppercase sm:hidden" style="color: var(--ink3); padding-top: 10px">{{ t('ui.swipeHint') }}</p>
        </div>
    </section>

    <!-- ====================== -->

    <section id="tentang" class="section" style="padding-top: 88px">
        <div class="container">
            <div class="grid lg:grid-cols-[7fr_5fr] gap-10 lg:gap-14 items-start">
                <div class="rv">
                    <div class="eyebrow mb-6">{{ tr('// IDENTIFIKASI — TENTANG SAYA') }}</div>
                    <h2 class="h-sec mb-7">{{ tr('Engineer yang bekerja end-to-end — dari skema database sampai server produksi Linux.') }}</h2>
                    <div class="space-y-5 body-text" style="max-width: 62ch">
                        <p>
                            {{ tr('Saya') }} <strong style="color: var(--ink)">{{ tr('Muhammad Putra Rasidin') }}</strong
                            >{{ tr(', Fullstack Developer & Systems Architect berbasis di Bandung. Fokus kerja saya bukan hanya menulis kode yang berjalan — tetapi merancang sistem yang stabil di bawah beban nyata: ribuan ASN absen serentak di pagi hari, antrean data payroll, sinkronisasi kepegawaian lintas instansi, sampai migrasi server tanpa downtime.') }}
                        </p>
                        <p>{{ tr('Berpengalaman mengembangkan sistem pemerintahan skala besar, aplikasi absensi & payroll, Learning Management System, hingga aplikasi komersial multi-tenant. Terbiasa bekerja lintas lapisan: ') }}<span class="mono text-[13px]" style="color: var(--ink)">frontend · backend API · database · deployment Linux · monitoring</span>.</p>
                    </div>
                    <div class="grid sm:grid-cols-2 gap-x-10 gap-y-3 mt-8 hair-t pt-6" style="max-width: 62ch">
                        <div class="flex justify-between gap-6 py-1" style="border-bottom: 1px dashed var(--dim)"><span class="meta">Role</span><span class="mono text-[12.5px] uppercase tracking-[0.04em]" style="color: var(--ink)">Fullstack Dev &amp; Sys Arch</span></div>
                        <div class="flex justify-between gap-6 py-1" style="border-bottom: 1px dashed var(--dim)">
                            <span class="meta">{{ tr('Edukasi') }}</span
                            ><span class="mono text-[12.5px] uppercase tracking-[0.04em]" style="color: var(--ink)">Politeknik LP3I Bandung</span>
                        </div>
                        <div class="flex justify-between gap-6 py-1" style="border-bottom: 1px dashed var(--dim)">
                            <span class="meta">{{ tr('Lokasi') }}</span
                            ><span class="mono text-[12.5px] uppercase tracking-[0.04em]" style="color: var(--ink)">Bandung, ID — WIB</span>
                        </div>
                        <div class="flex justify-between gap-6 py-1" style="border-bottom: 1px dashed var(--dim)">
                            <span class="meta">{{ tr('Fokus') }}</span
                            ><span class="mono text-[12.5px] uppercase tracking-[0.04em]" style="color: var(--ink)">GovTech · SaaS · Infra</span>
                        </div>
                    </div>
                </div>
                <div class="rv" style="transition-delay: 0.12s">
                    <div class="panel low p-0" style="border-top: 3px solid var(--ink)">
                        <div class="flex items-center justify-between px-6 py-4" style="border-bottom: 1px solid var(--line)">
                            <span class="mono text-[11px] tracking-[0.1em] uppercase" style="color: var(--ink2)">REG. OPERATOR PROFILE</span>
                            <span class="mono text-[10px] tracking-[0.1em] uppercase" style="color: var(--green)">● VERIFIED</span>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center gap-5 mb-6">
                                <button type="button" @click="profileOpen = true" class="relative w-[88px] aspect-[2/3] overflow-hidden shrink-0 group cursor-pointer p-0" style="border: 1px solid var(--ink); background: var(--card)" :aria-label="tr('Perbesar foto Muhammad Putra Rasidin')">
                                    <img src="/putra.jpeg" :alt="tr('Foto Muhammad Putra Rasidin')" class="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-60" />
                                    <span class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style="background: rgba(28, 25, 23, 0.42)">
                                        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                                            <circle cx="11" cy="11" r="7.5"></circle>
                                            <path stroke-linecap="square" d="M20 20l-3.75-3.75M11 8.5v5M8.5 11h5"></path>
                                        </svg>
                                    </span>
                                </button>
                                <div>
                                    <p class="h-small">Putra Rasidin</p>
                                    <p class="mono text-[11.5px] tracking-[0.08em] uppercase mt-1" style="color: var(--accent)">Senior Fullstack Developer</p>
                                    <p class="mono text-[11px] tracking-[0.06em] uppercase mt-1" style="color: var(--ink3)">muhammadputra752@gmail.com</p>
                                </div>
                            </div>
                            <p class="body-text mb-6" style="font-size: 14.5px; color: var(--ink2)">{{ tr('Bidang keahlian terverifikasi pada sistem pemerintahan skala ribuan pengguna aktif:') }}</p>
                            <div class="space-y-3 mono text-[11.5px] tracking-[0.05em] uppercase">
                                <div class="flex justify-between items-center" style="border-bottom: 1px solid var(--line); padding-bottom: 8px"><span style="color: var(--ink3)">Web / Mobile / API</span><span style="color: var(--ink)">██████████ 100%</span></div>
                                <div class="flex justify-between items-center" style="border-bottom: 1px solid var(--line); padding-bottom: 8px"><span style="color: var(--ink3)">Database &amp; Infra</span><span style="color: var(--ink)">█████████░ 88%</span></div>
                                <div class="flex justify-between items-center"><span style="color: var(--ink3)">Reliability Eng.</span><span style="color: var(--ink)">█████████░ 92%</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ====================== -->

    <section id="karya" class="section" style="padding-top: 0; background: var(--paper); border-top: 1px solid var(--line)">
        <div class="container">
            <div class="mb-12">
                <p class="mono text-[12px] tracking-[0.1em] uppercase mb-4" style="color: var(--accent)">{{ tr('// KATALOG TEKNIS 01 - 05') }}</p>
                <h2 class="h-disp" style="font-size: clamp(32px, 4.6vw, 52px)">{{ tr('Karya Terpilih') }}</h2>
            </div>
            <!-- FLAGSHIP PROJECT 01 -->
            <div class="rv">
                <div class="panel" style="border-top: 3px solid var(--accent)">
                    <div class="grid lg:grid-cols-2">
                        <div class="p-7 md:p-9" style="border-bottom: 1px solid var(--line)">
                            <div class="flex items-center justify-between gap-4 mb-5">
                                <span class="meta" style="color: var(--accent)">{{ tr('01 // FLAGSHIP PROJECT') }}</span>
                                <span class="chip on">Featured</span>
                            </div>
                            <h3 class="h-sec mb-3" style="font-size: clamp(22px, 2.4vw, 30px)">{{ tr('Sistem Absensi & Kinerja Pemerintahan') }}</h3>
                            <p class="mono text-[11px] tracking-[0.1em] uppercase mb-6" style="color: var(--ink3)">
                                {{ tr('Web / Mobile / Backend API — Skala Pemerintah Daerah') }}
                            </p>
                            <p class="body-text mb-6" style="color: var(--ink2); font-size: 15px">
                                {{ tr('Sistem presensi dan penilaian kinerja untuk ribuan Aparatur Sipil Negara (ASN) di lingkungan pemerintahan kabupaten. Melayani lonjakan absensi pagi secara serentak, sinkronisasi data kepegawaian lintas instansi, dan integrasi dengan database pusat — dibangun di atas arsitektur event-driven yang toleran terhadap jaringan seluler yang tidak stabil.') }}
                            </p>
                            <div class="flex flex-wrap gap-2 mb-7"><span class="chip">Laravel</span><span class="chip">Vue 3</span><span class="chip">Ionic</span> <span class="chip">Redis</span><span class="chip">MySQL</span><span class="chip">Docker</span></div>
                            <RouterLink to="/karya/sistem-absensi-kinerja-asn" class="txtlink acc">{{ tr('Baca Case Study Lengkap') }} <span style="font-size: 15px; line-height: 1">→</span></RouterLink>
                        </div>
                        <div class="p-7 md:p-9 bg-[var(--low)] sep-lg-left">
                            <span class="meta mb-6 inline-block" style="color: var(--ink3)">{{ tr('// BOTTLENECK VS HASIL TERVERIFIKASI') }}</span>
                            <div class="grid sm:grid-cols-2 mb-8">
                                <div class="p-5 bg-[var(--paper)]" style="border: 1px solid var(--line); border-top: 3px solid var(--ink)">
                                    <p class="mono text-[10px] tracking-[0.12em] uppercase mb-4" style="color: var(--ink2)">{{ tr('Sebelum — Bottleneck Teknis') }}</p>
                                    <ul class="space-y-2.5 mono text-[11.5px] leading-relaxed" style="color: var(--ink2)">
                                        <li>{{ tr('⨯ Lonjakan 18,000+ req/menit jam 07:00–07:30') }}</li>
                                        <li>{{ tr('⨯ Database locking & antrean query berat') }}</li>
                                        <li>{{ tr('⨯ Double submission / race condition') }}</li>
                                        <li>{{ tr('⨯ 504 timeout berulang saat puncak') }}</li>
                                    </ul>
                                </div>
                                <div class="p-5 bg-[var(--paper)]" style="border: 1px solid var(--line); border-top: 3px solid var(--green)">
                                    <p class="mono text-[10px] tracking-[0.12em] uppercase mb-4" style="color: var(--green)">{{ tr('Sesudah — Hasil Terverifikasi') }}</p>
                                    <ul class="space-y-2.5 mono text-[11.5px] leading-relaxed" style="color: var(--ink2)">
                                        <li>{{ tr('✓ Eliminasi 100% error 504') }}</li>
                                        <li>{{ tr('✓ SLA uptime 99.98%') }}</li>
                                        <li>{{ tr('✓ P99 latency &lt; 120ms') }}</li>
                                        <li>{{ tr('✓ Zero-downtime deployment') }}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="bg-[var(--paper)] p-5" style="border: 1px solid var(--line)">
                                <div class="flex justify-between items-center mb-4">
                                    <span class="mono text-[10px] tracking-[0.12em] uppercase" style="color: var(--ink2)">{{ tr('Kapasitas Terukur') }}</span>
                                    <span class="mono text-[11px] tracking-[0.05em]" style="color: var(--accent)">LOAD TESTED</span>
                                </div>
                                <div class="flex justify-between mb-2 mono text-[9.5px] tracking-[0.06em]" style="color: var(--ink3)"><span>0</span><span>10K</span><span>20K</span><span>30K</span><span>40K+</span></div>
                                <div class="relative" style="height: 30px; background: repeating-linear-gradient(90deg, var(--dim) 0 1px, transparent 1px calc(25%)); background-size: 25% 100%; border: 1px solid var(--dim)">
                                    <div style="width: 92%; height: 100%; background: var(--ink); position: relative">
                                        <span class="mono text-[10px] font-semibold tracking-[0.06em] uppercase" style="color: #fff; position: absolute; right: 8px; top: 7px">40,000+ Concurrent Users</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- SUB-GRID : PROYEK 02 / 03 / 04 / 05 -->
            <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-px mt-px" style="background: var(--line)">
                <!-- 02 -->
                <div class="rv panel p-7 flex flex-col" style="background: var(--card)">
                    <div class="flex items-center justify-between mb-5">
                        <span class="meta" style="color: var(--accent)">{{ tr('02 // PROYEK') }}</span>
                        <span class="mono text-[11px]" style="color: var(--ink3)">2024</span>
                    </div>
                    <h3 class="h-small mb-3">{{ tr('CMS Perusahaan Multi-Tenant') }}</h3>
                    <p class="body-text flex-1 mb-6" style="font-size: 14.5px; color: var(--ink2)">
                        {{ tr('Platform konten perusahaan dengan isolasi data per tenant, RBAC modular, dan alur publikasi terstruktur di atas arsitektur Laravel + Vue.') }}
                    </p>
                    <div class="flex flex-wrap gap-2 mb-5"><span class="chip">Laravel</span><span class="chip">Vue 3</span><span class="chip">MySQL</span><span class="chip">RBAC</span></div>
                    <RouterLink to="/karya/cms-perusahaan-multi-tenant" class="txtlink mt-auto">{{ tr('Lihat Spesifikasi Teknis') }} →</RouterLink>
                </div>
                <!-- 03 -->
                <div class="rv panel p-7 flex flex-col" style="background: var(--card); transition-delay: 0.06s">
                    <div class="flex items-center justify-between mb-5">
                        <span class="meta" style="color: var(--accent)">{{ tr('03 // PROYEK') }}</span>
                        <span class="mono text-[11px]" style="color: var(--ink3)">2024</span>
                    </div>
                    <h3 class="h-small mb-3">{{ tr('Aplikasi Mobile Presensi Geolocation') }}</h3>
                    <p class="body-text flex-1 mb-6" style="font-size: 14.5px; color: var(--ink2)">
                        {{ tr('Presensi mobile lintas platform dengan validasi lokasi GPS, foto selfie, dan toleransi jaringan tidak stabil melalui buffer antrean lokal.') }}
                    </p>
                    <div class="flex flex-wrap gap-2 mb-5"><span class="chip">Ionic</span><span class="chip">Capacitor</span><span class="chip">Vue</span><span class="chip">REST API</span></div>
                    <RouterLink to="/karya/aplikasi-mobile-presensi-geolocation" class="txtlink mt-auto">{{ tr('Lihat Spesifikasi Teknis') }} →</RouterLink>
                </div>
                <!-- 04 -->
                <div class="rv panel p-7 flex flex-col" style="background: var(--card); transition-delay: 0.12s">
                    <div class="flex items-center justify-between mb-5">
                        <span class="meta" style="color: var(--accent)">{{ tr('04 // PROYEK') }}</span>
                        <span class="mono text-[11px]" style="color: var(--ink3)">2025</span>
                    </div>
                    <h3 class="h-small mb-3">{{ tr('LMS Institusi & Computer Based Test') }}</h3>
                    <p class="body-text flex-1 mb-6" style="font-size: 14.5px; color: var(--ink2)">
                        {{ tr('Learning Management System untuk institusi pemerintahan: pengelolaan pelatihan ASN, modul pembelajaran terstruktur, dan ujian berbasis komputer.') }}
                    </p>
                    <div class="flex flex-wrap gap-2 mb-5"><span class="chip">Laravel</span><span class="chip">Vue</span><span class="chip">MySQL</span><span class="chip">CBT</span></div>
                    <RouterLink to="/karya/lms-institusi-computer-based-test" class="txtlink mt-auto">{{ tr('Lihat Spesifikasi Teknis') }} →</RouterLink>
                </div>
                <!-- 05 -->
                <div class="rv panel p-7 flex flex-col" style="background: var(--card); transition-delay: 0.18s">
                    <div class="flex items-center justify-between mb-5">
                        <span class="meta" style="color: var(--accent)">{{ tr('05 // PROYEK') }}</span>
                        <span class="mono text-[11px]" style="color: var(--ink3)">2024 — Berjalan</span>
                    </div>
                    <h3 class="h-small mb-3">{{ tr('SIMPEG — Sistem Kepegawaian Terpadu') }}</h3>
                    <p class="body-text flex-1 mb-6" style="font-size: 14.5px; color: var(--ink2)">
                        {{ tr('Sistem informasi kepegawaian terpadu BKPSDM Kabupaten Bogor: data pokok & riwayat ASN, administrasi mutasi, kenaikan pangkat, KGB, pensiun, hingga perencanaan formasi & anjab-bezzeting, terintegrasi SIASN/BKN.') }}
                    </p>
                    <div class="flex flex-wrap gap-2 mb-5"><span class="chip">Laravel</span><span class="chip">Vue.js</span><span class="chip">MySQL</span><span class="chip">SIASN/BKN</span></div>
                    <RouterLink to="/karya/simpeg-sistem-informasi-kepegawaian" class="txtlink mt-auto">{{ tr('Lihat Spesifikasi Teknis') }} →</RouterLink>
                </div>

            </div>
        </div>
    </section>

    <!-- ====================== -->

    <section id="keahlian" class="section" style="background: var(--paper); border-top: 1px solid var(--line)">
        <div class="container">
            <div class="flex flex-wrap items-end justify-between gap-6 mb-14">
                <div class="rv">
                    <p class="mono text-[12px] tracking-[0.1em] uppercase mb-4" style="color: var(--accent)">{{ tr('// INDEX TEKNIS — 01 - 04') }}</p>
                    <h2 class="h-disp" style="font-size: clamp(32px, 4.6vw, 52px)">{{ tr('Stack yang Saya Gunakan') }}</h2>
                </div>
                <p class="rv mono text-[11px] tracking-[0.1em] uppercase mb-2" style="color: var(--ink3); text-align: right">Ledger 4-Tier Horizontal<br />{{ tr('Bukan icon cloud — indeks kerja nyata') }}</p>
            </div>
            <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-px panel" style="background: var(--line)">
                <!-- TIER 01 -->
                <div class="rv bg-[var(--card)] p-7 flex flex-col" style="border-top: 3px solid var(--accent)">
                    <p class="mono text-[12px] tracking-[0.06em] uppercase font-semibold mb-6" style="color: var(--accent)">01 // LAYER BACKEND SYSTEM</p>
                    <ul class="space-y-3 mono text-[13px]" style="color: var(--ink)">
                        <li style="border-bottom: 1px dashed var(--dim); padding-bottom: 10px">
                            PHP <span class="text-[10px]" style="color: var(--ink3)">— {{ tr('bahasa utama') }}</span>
                        </li>
                        <li style="border-bottom: 1px dashed var(--dim); padding-bottom: 10px">Laravel <span class="text-[10px]" style="color: var(--ink3)">— API &amp; app</span></li>
                        <li style="border-bottom: 1px dashed var(--dim); padding-bottom: 10px">CodeIgniter <span class="text-[10px]" style="color: var(--ink3)">— legacy systems</span></li>
                        <li>RESTful API Architecture</li>
                    </ul>
                </div>
                <!-- TIER 02 -->
                <div class="rv bg-[var(--card)] p-7 flex flex-col" style="border-top: 3px solid var(--accent); transition-delay: 0.05s">
                    <p class="mono text-[12px] tracking-[0.06em] uppercase font-semibold mb-6" style="color: var(--accent)">02 // LAYER FRONTEND &amp; MOBILE</p>
                    <ul class="space-y-3 mono text-[13px]" style="color: var(--ink)">
                        <li style="border-bottom: 1px dashed var(--dim); padding-bottom: 10px">Vue.js <span class="text-[10px]" style="color: var(--ink3)">— SPA &amp; app</span></li>
                        <li style="border-bottom: 1px dashed var(--dim); padding-bottom: 10px">Ionic Framework <span class="text-[10px]" style="color: var(--ink3)">— mobile hybrid</span></li>
                        <li style="border-bottom: 1px dashed var(--dim); padding-bottom: 10px">TypeScript <span class="text-[10px]" style="color: var(--ink3)">— type safety</span></li>
                        <li style="border-bottom: 1px dashed var(--dim); padding-bottom: 10px">Tailwind CSS <span class="text-[10px]" style="color: var(--ink3)">— design system</span></li>
                        <li>Vite <span class="text-[10px]" style="color: var(--ink3)">— build tool</span></li>
                    </ul>
                </div>
                <!-- TIER 03 -->
                <div class="rv bg-[var(--card)] p-7 flex flex-col" style="border-top: 3px solid var(--accent); transition-delay: 0.1s">
                    <p class="mono text-[12px] tracking-[0.06em] uppercase font-semibold mb-6" style="color: var(--accent)">03 // LAYER DATABASE &amp; STORAGE</p>
                    <ul class="space-y-3 mono text-[13px]" style="color: var(--ink)">
                        <li style="border-bottom: 1px dashed var(--dim); padding-bottom: 10px">MySQL <span class="text-[10px]" style="color: var(--ink3)">— primary RDBMS</span></li>
                        <li style="border-bottom: 1px dashed var(--dim); padding-bottom: 10px">
                            MariaDB <span class="text-[10px]" style="color: var(--ink3)">— {{ tr('sistem pemerintahan') }}</span>
                        </li>
                        <li style="border-bottom: 1px dashed var(--dim); padding-bottom: 10px">Redis <span class="text-[10px]" style="color: var(--ink3)">— in-memory cache</span></li>
                        <li>Query Optimization &amp; Composite Indexing</li>
                    </ul>
                </div>
                <!-- TIER 04 -->
                <div class="rv bg-[var(--card)] p-7 flex flex-col" style="border-top: 3px solid var(--accent); transition-delay: 0.15s">
                    <p class="mono text-[12px] tracking-[0.06em] uppercase font-semibold mb-6" style="color: var(--accent)">04 // LAYER INFRA &amp; DEVOPS</p>
                    <ul class="space-y-3 mono text-[13px]" style="color: var(--ink)">
                        <li style="border-bottom: 1px dashed var(--dim); padding-bottom: 10px">Linux <span class="text-[10px]" style="color: var(--ink3)">— Ubuntu / Debian</span></li>
                        <li style="border-bottom: 1px dashed var(--dim); padding-bottom: 10px">Docker <span class="text-[10px]" style="color: var(--ink3)">— containerization</span></li>
                        <li style="border-bottom: 1px dashed var(--dim); padding-bottom: 10px">Nginx <span class="text-[10px]" style="color: var(--ink3)">— reverse proxy</span></li>
                        <li style="border-bottom: 1px dashed var(--dim); padding-bottom: 10px">Git / CI-CD <span class="text-[10px]" style="color: var(--ink3)">— delivery</span></li>
                        <li>Zero-Downtime Deployment</li>
                    </ul>
                </div>
            </div>
            <div class="flex flex-wrap justify-between gap-4 mt-8 mono text-[11px] tracking-[0.08em] uppercase" style="color: var(--ink3)">
                <span>{{ tr('// BERDASARKAN PENGGUNAAN PRODUKSI — 2023 → 2026') }}</span>
                <span
                    >{{ tr('PEMBARUAN INDEKS:') }} <span style="color: var(--green)">{{ tr('TERSINKRON') }}</span></span
                >
            </div>
        </div>
    </section>

    <!-- ====================== -->

    <section id="pengalaman" class="section" style="background: var(--paper); border-top: 1px solid var(--line)">
        <div class="container">
            <div class="mb-14 rv">
                <p class="mono text-[12px] tracking-[0.1em] uppercase mb-4" style="color: var(--accent)">// ENGINEERING TRACK RECORD — 01 ROLE</p>
                <h2 class="h-disp" style="font-size: clamp(32px, 4.6vw, 52px)">{{ tr('Pengalaman Rekayasa') }}</h2>
            </div>
            <div class="grid lg:grid-cols-[7fr_4fr] gap-10 lg:gap-14">
                <div>
                    <!-- PT ELIMA FIRMAN TEKNOLOGI -->
                    <div class="rv panel relative p-0" style="border-top: 3px solid var(--ink)">
                        <div class="p-7 md:p-9">
                            <div class="flex flex-wrap items-start justify-between gap-4 mb-6">
                                <div>
                                    <p class="meta mb-2" style="color: var(--accent)">FULLSTACK DEVELOPER / SOFTWARE ENGINEER</p>
                                    <h3 class="h-sec" style="font-size: 24px">PT Elima Firman Teknologi</h3>
                                </div>
                                <span class="chip on">{{ tr('Jan 2024 — Sekarang') }}</span>
                            </div>
                            <p class="body-text mb-7" style="font-size: 15px; color: var(--ink2)">
                                {{ tr('Bertanggung jawab atas stabilitas sistem pemerintahan skala kabupaten yang melayani puluhan ribu ASN — dari perancangan arsitektur, pengembangan fitur, hingga operasional server produksi Linux.') }}
                            </p>
                            <div class="space-y-5">
                                <div class="flex gap-4 items-start">
                                    <span class="mono text-[11px] font-semibold pt-0.5" style="color: var(--accent)">[01]</span>
                                    <p class="body-text" style="font-size: 15px; color: var(--ink)">
                                        {{ tr('Mengembangkan & memelihara') }} <strong>{{ tr('5+ sistem pemerintahan inti') }}</strong
                                        >{{ tr(' — absensi & kinerja, kepegawaian (SIMPEG), LMS pelatihan ASN, hingga layanan internal — dalam satu ekosistem terintegrasi.') }}
                                    </p>
                                </div>
                                <div class="flex gap-4 items-start">
                                    <span class="mono text-[11px] font-semibold pt-0.5" style="color: var(--accent)">[02]</span>
                                    <p class="body-text" style="font-size: 15px; color: var(--ink)">
                                        {{ tr('Merestrukturisasi arsitektur presensi skala besar:') }} <strong>{{ tr('decoupled ingestion via Redis Stream, queue buffer layer, dan distributed lock') }}</strong
                                        >{{ tr(' — menghilangkan 100% error 504 di jam puncak.') }}
                                    </p>
                                </div>
                                <div class="flex gap-4 items-start">
                                    <span class="mono text-[11px] font-semibold pt-0.5" style="color: var(--accent)">[03]</span>
                                    <p class="body-text" style="font-size: 15px; color: var(--ink)">
                                        {{ tr('Optimasi performa database & menjalankan') }} <strong>{{ tr('migrasi zero-downtime') }}</strong
                                        >{{ tr(' — indexing, query plan, dan sinkronisasi data lintas instansi tanpa mengganggu operasional.') }}
                                    </p>
                                </div>
                                <div class="flex gap-4 items-start">
                                    <span class="mono text-[11px] font-semibold pt-0.5" style="color: var(--accent)">[04]</span>
                                    <p class="body-text" style="font-size: 15px; color: var(--ink)">
                                        {{ tr('Mengelola') }} <strong>{{ tr('deployment, monitoring, dan observability') }}</strong
                                        >{{ tr(' di infrastruktur Linux production (Nginx, PHP-FPM, Redis, MySQL) dengan alur CI/CD serta rollback yang teruji.') }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- PT ARIF KONVERSI SURYA INOVASI INDONESIA -->
                    <div class="rv panel mt-6 flex flex-wrap items-center justify-between gap-4 p-6">
                        <div class="flex items-center gap-5">
                            <span class="mono text-[11px] font-semibold px-2.5 py-1.5" style="background: var(--ink); color: #fff">2023</span>
                            <div>
                                <h4 class="h-small" style="font-size: 16px">Quality Assurance &amp; Database — Internship</h4>
                                <p class="mono text-[11px] tracking-[0.08em] uppercase mt-1" style="color: var(--ink3)">PT Arif Konversi Surya Inovasi Indonesia</p>
                            </div>
                        </div>
                        <span class="chip">{{ tr('Okt 2023 — Jan 2024') }}</span>
                    </div>
                    <p class="mono text-[11px] tracking-[0.08em] uppercase mt-6" style="color: var(--ink3)">{{ tr('// LINGKUNGAN: QA TESTING · BUG ANALYSIS · DATABASE PERFORMANCE MONITORING · INDEXING OPTIMIZATION') }}</p>
                </div>
                <!-- RIGHT : METRIC BOXES -->
                <div class="rv space-y-5" style="transition-delay: 0.1s">
                    <div class="panel" style="border-top: 3px solid var(--accent)">
                        <div class="px-6 py-4 flex items-center justify-between" style="border-bottom: 1px solid var(--line)">
                            <span class="mono text-[11px] tracking-[0.1em] uppercase" style="color: var(--ink2)">{{ tr('Sistem Dikelola') }}</span>
                            <span class="mono text-[10px]" style="color: var(--accent)">PRODUCTION</span>
                        </div>
                        <div class="px-6 py-6">
                            <p class="mono text-[44px] font-bold leading-none" style="color: var(--ink)">5+</p>
                            <p class="mono text-[12px] tracking-[0.08em] uppercase mt-2" style="color: var(--ink3)">Core Systems<br />{{ tr('Pemerintahan terintegrasi') }}</p>
                        </div>
                    </div>
                    <div class="panel" style="border-top: 3px solid var(--accent)">
                        <div class="px-6 py-4 flex items-center justify-between" style="border-bottom: 1px solid var(--line)">
                            <span class="mono text-[11px] tracking-[0.1em] uppercase" style="color: var(--ink2)">{{ tr('Pengguna Aktif') }}</span>
                            <span class="mono text-[10px]" style="color: var(--accent)">DAILY</span>
                        </div>
                        <div class="px-6 py-6">
                            <p class="mono text-[44px] font-bold leading-none" style="color: var(--ink)">45,000<span style="font-size: 22px">+</span></p>
                            <p class="mono text-[12px] tracking-[0.08em] uppercase mt-2" style="color: var(--ink3)">{{ tr('ASN Aktif') }}<br />{{ tr('Absensi & kinerja harian') }}</p>
                        </div>
                    </div>
                    <div class="panel" style="border-top: 3px solid var(--green)">
                        <div class="px-6 py-4 flex items-center justify-between" style="border-bottom: 1px solid var(--line)">
                            <span class="mono text-[11px] tracking-[0.1em] uppercase" style="color: var(--ink2)">{{ tr('Rata-rata Uptime') }}</span>
                            <span class="mono text-[10px]" style="color: var(--green)">SLA VERIFIED</span>
                        </div>
                        <div class="px-6 py-6">
                            <p class="mono text-[44px] font-bold leading-none" style="color: var(--green)">99.98<span style="font-size: 22px">%</span></p>
                            <p class="mono text-[12px] tracking-[0.08em] uppercase mt-2" style="color: var(--ink3)">Zero-Downtime<br />{{ tr('Migrasi & deployment') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ====================== -->

    <section style="background: var(--low); border-top: 1px solid var(--line)">
        <div class="container">
            <div class="flex flex-wrap items-end justify-between gap-6 py-16 md:py-20">
                <div class="rv">
                    <p class="mono text-[12px] tracking-[0.1em] uppercase mb-4" style="color: var(--accent)">{{ tr('// ENGINEERING PRINCIPLES — 4 PILAR') }}</p>
                    <h2 class="h-disp" style="font-size: clamp(30px, 4vw, 46px)">{{ tr('Cara Saya Membangun') }}</h2>
                </div>
                <p class="rv mono text-[11px] tracking-[0.08em] uppercase" style="color: var(--ink3); text-align: right">{{ tr('Pedoman kerja pada setiap sistem') }}<br />{{ tr('yang saya sentuh — apapun stack-nya') }}</p>
            </div>
            <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-px" style="background: var(--line)">
                <div class="rv" style="background: var(--paper); border-top: 3px solid var(--accent)">
                    <div class="p-7 h-full flex flex-col">
                        <p class="mono text-[11px] tracking-[0.08em] uppercase mb-4" style="color: var(--accent)">{{ tr('01 // ANALISIS') }}</p>
                        <h3 class="h-small mb-4">{{ tr('Pahami Masalahnya') }}</h3>
                        <p class="body-text text-[14.5px]" style="color: var(--ink2)">{{ tr('First principles di atas tooling berlebihan — pahami domain & bottleneck sebelum menulis baris pertama.') }}</p>
                        <p class="mono text-[11px] mt-auto pt-5" style="color: var(--ink3)">"First principles over excessive tooling"</p>
                    </div>
                </div>
                <div class="rv" style="background: var(--paper); border-top: 3px solid var(--accent); transition-delay: 0.05s">
                    <div class="p-7 h-full flex flex-col">
                        <p class="mono text-[11px] tracking-[0.08em] uppercase mb-4" style="color: var(--accent)">{{ tr('02 // STRUKTUR') }}</p>
                        <h3 class="h-small mb-4">{{ tr('Arsitektur Praktis') }}</h3>
                        <p class="body-text text-[14.5px]" style="color: var(--ink2)">{{ tr('Desain pragmatis dan mudah dioperasikan tim — bukan arsitektur untuk pamer di atas kertas.') }}</p>
                        <p class="mono text-[11px] mt-auto pt-5" style="color: var(--ink3)">"Pragmatic design over architecture astronautics"</p>
                    </div>
                </div>
                <div class="rv" style="background: var(--paper); border-top: 3px solid var(--accent); transition-delay: 0.1s">
                    <div class="p-7 h-full flex flex-col">
                        <p class="mono text-[11px] tracking-[0.08em] uppercase mb-4" style="color: var(--accent)">{{ tr('03 // EFISIENSI') }}</p>
                        <h3 class="h-small mb-4">{{ tr('Optimalkan yang Penting') }}</h3>
                        <p class="body-text text-[14.5px]" style="color: var(--ink2)">{{ tr('Ukur dulu, optimasi kemudian. Fokus pada bottleneck operasional nyata, bukan optimasi prematur.') }}</p>
                        <p class="mono text-[11px] mt-auto pt-5" style="color: var(--ink3)">"Data-driven tuning on real bottlenecks"</p>
                    </div>
                </div>
                <div class="rv" style="background: var(--paper); border-top: 3px solid var(--accent); transition-delay: 0.15s">
                    <div class="p-7 h-full flex flex-col">
                        <p class="mono text-[11px] tracking-[0.08em] uppercase mb-4" style="color: var(--accent)">{{ tr('04 // KETAHANAN') }}</p>
                        <h3 class="h-small mb-4">{{ tr('Bangun untuk Production') }}</h3>
                        <p class="body-text text-[14.5px]" style="color: var(--ink2)">{{ tr('Asumsikan akan gagal — desain toleran kegagalan dengan observability yang terstruktur sejak awal.') }}</p>
                        <p class="mono text-[11px] mt-auto pt-5" style="color: var(--ink3)">"Failure-tolerant &amp; structured observability"</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ====================== -->

    <section id="kontak" class="section" style="background: var(--paper); border-top: 1px solid var(--line)">
        <div class="container">
            <div class="grid lg:grid-cols-[13fr_7fr] gap-10 lg:gap-14 items-start">
                <!-- LEFT -->
                <div class="rv">
                    <div class="eyebrow mb-7">{{ tr('// TERMINAL KOMUNIKASI — SALURAN TERBUKA') }}</div>
                    <h2 class="h-disp" style="font-size: clamp(34px, 4.8vw, 58px); letter-spacing: -0.02em">{{ tr('Punya sistem yang perlu dibangun atau dioptimalkan?') }}</h2>
                    <p class="body-text mt-8 mb-10" style="max-width: 56ch; color: var(--ink3)">
                        {{ tr('Saya membuka kesempatan kolaborasi untuk proyek') }} <strong style="color: var(--ink)">{{ tr('sistem pemerintahan, platform SaaS, aplikasi mobile,') }}</strong> {{ tr('maupun') }} <strong style="color: var(--ink)">{{ tr('optimasi infrastruktur yang sedang bermasalah') }}</strong
                        >{{ tr('. Respon cepat, spesifikasi jelas, tanpa janji kosong.') }}
                    </p>
                    <div class="flex flex-wrap items-center gap-4 mb-12">
                        <a href="mailto:muhammadputra752@gmail.com" class="btn-dark"
                            >Start a Project
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="square" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                        <a href="tel:+6285155447978" class="btn-line">(+62)851 5544 7978</a>
                    </div>
                    <div class="hair-t pt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
                        <span class="meta">{{ tr('SALURAN:') }}</span>
                        <a href="mailto:muhammadputra752@gmail.com" class="mono text-[12px] tracking-[0.06em] uppercase text-[var(--ink)] hover:text-[var(--accent)] transition-colors">Email ↗</a>
                        <a href="https://github.com/Siputtttt" class="mono text-[12px] tracking-[0.06em] uppercase text-[var(--ink)] hover:text-[var(--accent)] transition-colors">GitHub ↗</a>
                        <a href="https://www.linkedin.com/in/muhammad-putra-3a242a21b/" class="mono text-[12px] tracking-[0.06em] uppercase text-[var(--ink)] hover:text-[var(--accent)] transition-colors">LinkedIn ↗</a>
                    </div>
                </div>
                <!-- RIGHT : TERMINAL KOMUNIKASI -->
                <div class="rv" style="transition-delay: 0.1s">
                    <div class="panel" style="background: var(--ink); color: #fff">
                        <div class="flex items-center justify-between px-5 py-3" style="border-bottom: 1px solid rgba(255, 255, 255, 0.14)">
                            <span class="mono text-[11px] tracking-[0.1em] uppercase inline-flex items-center gap-2.5" style="color: rgba(255, 255, 255, 0.85)"> <span class="amber-dot"></span>TERMINAL_KOMUNIKASI_V2 </span>
                            <span class="flex items-center gap-1.5">
                                <span class="w-2.5 h-2.5" style="background: #e8a33d"></span>
                                <span class="w-2.5 h-2.5" style="background: #22c55e"></span>
                            </span>
                        </div>
                        <div class="p-5 space-y-0 mono text-[12px] leading-relaxed">
                            <p style="color: rgba(255, 255, 255, 0.5)">$ whoami</p>
                            <p class="mb-4" style="color: #fff">PUTRA-RASIDIN // fullstack-architect</p>
                            <p style="color: rgba(255, 255, 255, 0.5)">$ connect --protocol EMAIL</p>
                            <p class="mb-4"><a href="mailto:muhammadputra752@gmail.com" style="color: #e88b3a; text-decoration: none; border-bottom: 1px solid rgba(232, 139, 58, 0.4)">muhammadputra752@gmail.com</a></p>
                            <p style="color: rgba(255, 255, 255, 0.5)">$ connect --protocol {{ tr('TELEPON') }} / WA</p>
                            <p class="mb-4"><a href="tel:+6285155447978" style="color: #e88b3a; text-decoration: none; border-bottom: 1px solid rgba(232, 139, 58, 0.4)">+62 851-5544-7978</a></p>
                            <p style="color: rgba(255, 255, 255, 0.5)">$ connect --protocol GITHUB</p>
                            <p class="mb-4">
                                <a href="#" style="color: #fff; text-decoration: none; border-bottom: 1px solid rgba(255, 255, 255, 0.3)">github.com/ {{ tr('← buka profil') }} ↗</a>
                            </p>
                            <p style="color: rgba(255, 255, 255, 0.5)">$ connect --protocol LINKEDIN</p>
                            <p class="mb-4">
                                <a href="https://www.linkedin.com/in/muhammad-putra-3a242a21b/" style="color: #fff; text-decoration: none; border-bottom: 1px solid rgba(255, 255, 255, 0.3)">linkedin.com/in/ {{ tr('← buka profil') }} ↗</a>
                            </p>
                            <p style="color: rgba(255, 255, 255, 0.5)">$ availability --check</p>
                            <p style="color: #7ce38b">{{ tr('● TERSEDIA UNTUK PROYEK // RESPONS') }} &lt; {{ tr('24 JAM') }}</p>
                        </div>
                    </div>
                    <p class="mono text-[10px] tracking-[0.06em] uppercase mt-3 text-center" style="color: var(--ink3)">{{ tr('// CATATAN: isi URL profil GitHub & LinkedIn pada atribut href') }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ====================== -->

    <Footer />

    <!-- Preview foto besar (lightbox modal) -->
    <LightboxModal :open="profileOpen" image="/putra.jpeg" alt="Muhammad Putra Rasidin" @close="profileOpen = false" />
</template>

<script setup>
// HANYA navbar & footer sebagai komponen.
// Seluruh konten utama halaman index ditulis inline di template di atas.
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import LightboxModal from '../components/LightboxModal.vue';
import { t, tr } from '../i18n';

/** State modal preview foto profil di section #tentang */
const profileOpen = ref(false);
</script>
