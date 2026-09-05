# DOKUMENTASI SISTEM & SPESIFIKASI LAYOUT PORTFOLIO
**Nama Proyek:** Muhammad Putra Rasidin — Fullstack Developer & Systems Architect Portfolio  
**Karakter Desain:** Modern Technical Editorial × Swiss Minimalism × Engineering Journal  
**Versi:** 1.0 (Production Blueprint)  
**Status:** Canonical Reference Document

---

## 1. FONDASI VISUAL & DESIGN TOKENS

### Palet Warna (Color Palette)
- **Background Utama (Page Surface):** `#f9f9f8` (Warm Off-White / Fine Paper Texture)
- **Surface Container (Cards & Panels):** `#ffffff` (Clean White)
- **Surface Container Low / Muted:** `#f3f4f3`
- **Surface Dim:** `#dadad9`
- **Teks Primer (Headings & Body):** `#1c1917` (Deep Jet Charcoal)
- **Teks Sekunder (Descriptions & Metadata):** `#57534e` / `#78716c` (Stone Gray)
- **Aksen Primer (Industrial Highlight):** `#d35400` / `#ea580c` (Warm Burnt Amber / Rust Orange)
- **Borders & Dividers:** `1px solid #e7e5e4` (Crisp Precision Hairline Rules)
- **Status Dot (Active Availability):** `#16a34a` / `#22c55e` (Emerald Green)

### Tipografi & Hirarki
- **Primary Typeface (Headings & Body Copy):** `Hanken Grotesk` atau `Inter`
  - Display Title: `56px` – `64px`, `font-weight: 700/800`, `letter-spacing: -0.035em`, `line-height: 1.05`
  - Section Header: `32px` – `38px`, `font-weight: 700`, `letter-spacing: -0.02em`
  - Body Text: `15px` – `16px`, `font-weight: 400`, `line-height: 1.6`
- **Technical & Monospace Typeface:** `JetBrains Mono` atau `Fira Code`
  - Label, Metadata, Indexing, Telemetry, Code Tags: `11px` – `13px`, `letter-spacing: +0.05em`, uppercase

---

## 2. ANATOMI STRUKTUR HALAMAN (TOP-TO-BOTTOM)

### Section 01: Global Sticky Navigation
- **Dimensi:** Tinggi `64px`, sticky top, `backdrop-filter: blur(12px)`, border-bottom `1px solid #e7e5e4`.
- **Elemen Kiri:** Logo identitas teks `PUTRA // FULLSTACK ARCHITECT` (Monospace font, tracked).
- **Elemen Tengah:** Menu navigasi: `KARYA`, `TENTANG`, `KEAHLIAN`, `PENGALAMAN`, `KONTAK`.
- **Elemen Kanan:** Status pill kapsul `● TERSEDIA UNTUK PROYEK` (dot hijau pulsing lembut) + icon profil minimalis.

### Section 02: Telemetry Coordinates Bar
- Baris monospace ultra-ringkas dengan hairline separator atas-bawah:
  - Sisi Kiri: `LAT: -6.9175° S, LONG: 107.6191° E // BANDUNG, ID`
  - Sisi Kanan: `KERNEL: LINUX 584-X64 // STATUS: PRODUCTION ACTIVE // UPTIME: 99.98%`

### Section 03: Hero Section (Split Layout 65/35)
- **Kolom Kiri (65%):**
  - Eyebrow tag: `FULLSTACK DEVELOPER // BANDUNG, ID`
  - Headline utama masif: *"Saya membangun sistem yang harus bekerja di **dunia nyata**."* (kata "dunia nyata" diwarnai `#d35400` atau italic serif kontras).
  - Deskripsi peran teknis end-to-end: arsitektur web, aplikasi mobile, backend API, database partitioning, dan infrastruktur Linux production.
  - Action row: Tombol primer solid dark `LIHAT KARYA`, tombol sekunder outline `HUBUNGI SAYA`, serta link teks `GitHub ↗` dan `LinkedIn ↗`.
- **Kolom Kanan (35%): Live Telemetry Terminal Widget:**
  - Card berbingkai bersih dengan badge header `SYS_METRICS_84_LIVE` dan dot amber.
  - Metrik grid kuadran:
    - `P99 Latency: < 120ms`
    - `Throughput Peak: 18,500 rpm`
    - `Failover SLA: 99.98%`
    - `Deployment: Zero-Downtime / CI/CD Deployed`

### Section 04: Production Pipeline Schematic Bar
- Banner skematik horizontal 5-node:
  1. `01 INGRESS: CLIENT / MOBILE` (Vue.js, Ionic, Capacitor, HTTPS)
  2. `02 GATEWAY: NGINX PROXY` (Rate Limiting, SSL, Buffer)
  3. `03 APP LAYER: PHP-FPM CLUSTER` (Laravel API, Workers)
  4. `04 MEMORY STORE: REDIS CACHE & QUEUE` (Distributed Locks, FIFO)
  5. `05 PERSISTENCE: MYSQL / MARIADB` (Composite Indexing, Replication)

### Section 05: Karya Terpilih (Katalog Teknis Asimetris)
- Header: Monospace tag `// KATALOG TEKNIS 01 - 04` dan headline editorial `KARYA TERPILIH`.
- **Flagship Project 01 (Hero Featured Card):**
  - Judul: `Sistem Absensi & Kinerja Pemerintahan`
  - Metadata: Web / Mobile / Backend API, Stack (Laravel, Vue 3, Ionic, Redis, MySQL, Docker).
  - Konten Split: Deskripsi sistem skala ribuan ASN, perbandingan box `Bottleneck Teknis` vs `Hasil Terverifikasi`, visualisasi horizontal capacity bar chart `40,000+ Concurrent Users`.
  - Link: `BACA CASE STUDY LENGKAP →`.
- **Sub-Grid 3 Proyek (Proyek 02, 03, 04):**
  - Layout kartu 3 kolom simetris bergaris tipis:
    - `02 CMS Perusahaan Multi-Tenant`
    - `03 Aplikasi Mobile Presensi Geolocation`
    - `04 LMS Institusi & Computer Based Test`
  - Masing-masing menampilkan tahun rilis, deskripsi arsitektur inti, badge stack, dan tombol `LIHAT SPESIFIKASI TEKNIS →`.

### Section 06: Deep-Dive Case Study ("Membangun Untuk Skala Nyata")
- Subtitle: *Bedah teknis mengurai bottleneck konkurensi, eliminasi database locking, dan restrukturisasi caching layer.*
- Pipeline diagram strip mini: `Mobile App -> Nginx -> PHP-FPM -> Redis Queue -> MySQL`.
- **Grid 6 Kartu Rekayasa Terstruktur (2×3 Grid):**
  1. `[01 // MASALAH]` Morning Spike Concurrency (18,000+ req/menit pada jam 07:00-07:30).
  2. `[02 // PENDEKATAN]` Decoupled Ingestion via Redis Stream.
  3. `[03 // ARSITEKTUR]` Queue & In-Memory Buffer Layer.
  4. `[04 // TANTANGAN]` Double Submission & Race Condition pada koneksi seluler tidak stabil.
  5. `[05 // SOLUSI TEKNIS]` Redis Distributed Lock (Mutex `NX PX 10000`).
  6. `[06 // HASIL TERUKUR]` Stabilitas Skala Penuh (Eliminasi 100% 504 Error, SLA 99.98%).

### Section 07: Stack yang Saya Gunakan (Technical Index Format)
- Disusun dalam format tabel indeks horizontal modern (bukan icon cloud):
  - `01 // LAYER BACKEND SYSTEM`: PHP, Laravel, CodeIgniter, RESTful API Architecture.
  - `02 // LAYER FRONTEND & MOBILE`: Vue.js, Ionic Framework, TypeScript, Tailwind CSS, Vite.
  - `03 // LAYER DATABASE & STORAGE`: MySQL, MariaDB, Redis (In-Memory Data & Caching).
  - `04 // LAYER INFRA & DEVOPS`: Linux (Ubuntu/Debian), Docker, Nginx, Git, CI/CD, Zero-Downtime Deployment.

### Section 08: Pengalaman Rekayasa (Engineering Track Record)
- Track record di `PT Elima Firman Teknologi` (Fullstack Developer / Software Engineer).
- 4 poin kontribusi nyata pada stabilitas sistem pemerintahan dan optimasi beban server.
- Box metrik sisi kanan: `5+ Core Systems`, `45,000+ ASN Aktif`, `99.98% Rata-rata Uptime`.

### Section 09: Cara Saya Membangun (4 Pilar Rekayasa)
- 4 Kolom bergaris pemisah tipis:
  1. `01 // ANALISIS: Pahami Masalahnya` (First principles over excessive tooling).
  2. `02 // STRUKTUR: Arsitektur Praktis` (Pragmatic design over architecture astronautics).
  3. `03 // EFISIENSI: Optimalkan yang Penting` (Focus on real operational bottlenecks).
  4. `04 // KETAHANAN: Bangun untuk Production` (Failure-tolerant and structured observability).

### Section 10: Terminal Kontak & Footer
- Headline call-to-action: *"PUNYA SISTEM YANG PERLU DIBANGUN ATAU DIOPTIMALKAN?"*
- Box samping `TERMINAL KOMUNIKASI`: Email protocol, GitHub repository, LinkedIn profile.
- Footer horizontal: Hak cipta `© 2026 MUHAMMAD PUTRA RASIDIN`, index navigasi cepat, dan indikator `SYS.UPTIME: 99.98%`.

---

## 3. MASTER PROMPT LENGKAP (REPRODUKSI 1:1)

Gunakan prompt di bawah ini pada design engine atau code generation untuk mereproduksi tampilan yang identik:

```markdown
Generate a high-fidelity, production-grade engineering portfolio website for "Muhammad Putra Rasidin", a Senior Fullstack Developer and Systems Architect based in Bandung, Indonesia.

DESIGN AESTHETIC & PHILOSOPHY:
- Style: Modern Technical Editorial × Swiss Engineering Journal × Minimalist Brutalism.
- Surface & Background: Warm off-white paper canvas (#f9f9f8) with pure white (#ffffff) container cards and subtle neutral low-surfaces (#f3f4f3).
- Typography: Large, high-contrast, editorial sans-serif (Hanken Grotesk or Inter) with tight letter-spacing for headlines; clean monospace (JetBrains Mono or Fira Code) for all metadata, system telemetry, pipeline steps, indices, and tech tags.
- Color Palette: Deep jet black / charcoal body text (#1c1917), neutral stone gray descriptions (#78716c), crisp 1px hairline border rules (#e7e5e4), and a single purposeful industrial accent color of warm burnt amber (#d35400).
- Explicit Exclusions: NO AI-style neon purple/blue gradients, NO cartoon blobs, NO generic rounded card templates, NO tech icon grids, NO cliché buzzwords like "passionate coder".

KEY SECTIONS TO INCLUDE:
1. STICKY NAVBAR:
   - Left brand: "PUTRA // FULLSTACK ARCHITECT" in spaced monospace.
   - Center navigation: KARYA, TENTANG, KEAHLIAN, PENGALAMAN, KONTAK.
   - Right status indicator: "● TERSEDIA UNTUK PROYEK" with an emerald green pulsing indicator.

2. SUB-NAV TELEMETRY STRIP:
   - Monospace telemetry coordinates: Bandung geolocation coordinates, Linux kernel spec, system status "PRODUCTION ACTIVE", uptime SLA "99.98%".

3. HERO SECTION (65/35 Split):
   - Left side: Prominent editorial headline: "Saya membangun sistem yang harus bekerja di dunia nyata." (accentuate "dunia nyata"). Subtitle detailing fullstack capabilities from DB schemas to backend APIs, frontend/mobile, and Linux production server infrastructure. Primary button "LIHAT KARYA", secondary outline "HUBUNGI SAYA", and direct GitHub / LinkedIn links.
   - Right side: Live System Metrics Terminal widget with P99 Latency (<120ms), Peak Throughput (18,500 rpm), Failover SLA (99.98%), and Zero-Downtime deployment status.

4. HORIZONTAL PRODUCTION PIPELINE SCHEMATIC:
   - 5 connected nodes: Ingress (Client/Mobile) -> Gateway (Nginx Proxy) -> App Layer (PHP-FPM Cluster) -> Memory Store (Redis Cache & Queue) -> Persistence (MySQL/MariaDB).

5. SELECTED WORKS (KARYA TERPILIH):
   - Featured flagship card: "01 Sistem Absensi & Kinerja Pemerintahan" with comprehensive breakdown of technical bottlenecks vs verified results, a 40,000+ concurrent user bar chart, tech stack tags, and CTA "BACA CASE STUDY LENGKAP ->".
   - 3-column sub-grid for Project 02 (CMS Perusahaan Multi-Tenant), Project 03 (Aplikasi Mobile Presensi Geolocation), and Project 04 (LMS Institusi & Computer Based Test).

6. CASE STUDY DEEP-DIVE ("MEMBANGUN UNTUK SKALA NYATA"):
   - 6 structured technical breakdown cards addressing real-world concurrency: Morning Spike Concurrency, Decoupled Ingestion via Redis, Queue & Buffer Layer, Double Submission Race Condition, Redis Distributed Lock, and Full-Scale Stability.

7. TECHNICAL STACK INDEX:
   - Formatted as a structured 4-tier horizontal technical ledger: Backend System, Frontend & Mobile, Database & Storage, Infra & DevOps.

8. WORK EXPERIENCE & METRICS:
   - Engineering timeline for PT Elima Firman Teknologi highlighting government system scalability, zero-downtime migrations, and performance metrics (5+ core systems, 45,000+ active users, 99.98% uptime).

9. ENGINEERING PRINCIPLES (CARA SAYA MEMBANGUN):
   - 4 horizontal cards: 01 Pahami Masalahnya (First Principles), 02 Arsitektur Praktis (Pragmatic Architecture), 03 Optimalkan yang Penting (Data-driven Tuning), 04 Bangun untuk Production (Failure Tolerance).

10. CLOSING CONTACT & FOOTER:
    - High-impact callout box "PUNYA SISTEM YANG PERLU DIBANGUN ATAU DIOPTIMALKAN?" with action buttons and a Communication Terminal widget (Email, GitHub, LinkedIn).
    - Monospace engineering footer with copyright, index links, and system uptime confirmation.
```
