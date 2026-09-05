/**
 * src/data/projects.js
 * Data portofolio yang ditampilkan pada halaman detail (/karya/:slug).
 * Konten diselaraskan dengan catatan portofolio CMS (m_portfolio_details):
 *   - 01 / 101 Sicantik — Presensi, Kinerja & Disiplin ASN (Kab. Bogor)
 *   - 02 CMS Perusahaan Multi-Tenant
 *   - 03 Aplikasi Mobile Presensi Geolocation
 *   - 04 / 103 Bogor Corporate University — LMS & Online Assessment Center
 *   - 05 / 102 SIMPEG — Sistem Informasi Kepegawaian Terpadu
 * Silakan sesuaikan isi field di sini bila ada detail yang ingin diubah.
 */

export const projects = [
  {
    slug: 'sistem-absensi-kinerja-asn',
    index: '01',
    category: 'FLAGSHIP PROJECT',
    featured: true,
    title: 'Sistem Absensi & Kinerja Pemerintahan',
    year: '2023 — Berjalan',
    platform: 'Web / Mobile / Backend API',
    scope: 'Skala Pemerintah Daerah',
    status: 'PRODUCTION — MULTI-TAHUN',
    summary:
      'Sicantik — platform terpadu yang memadukan presensi berbasis GPS dengan verifikasi selfie dan deteksi wajah, manajemen kinerja digital (e-SKP), layanan administrasi kepegawaian (cuti, dinas, TPP), dan penegakan disiplin berbasis data untuk ribuan ASN Kabupaten Bogor dalam satu ekosistem web dan mobile.',
    overview: [
      'Pemerintah Kabupaten Bogor membutuhkan satu platform terpadu untuk memantau kehadiran, kinerja, dan kedisiplinan ribuan ASN secara real-time, sekaligus menekan manipulasi data kehadiran dan mempercepat administrasi kepegawaian yang sebelumnya manual serta tersebar di banyak aplikasi.',
      'Sicantik dibangun sebagai sistem tunggal yang memadukan presensi berbasis lokasi GPS dengan verifikasi selfie dan deteksi wajah, manajemen kinerja digital (e-SKP, cascading, renaksi, realisasi, review 360 derajat), layanan administrasi kepegawaian (cuti, dinas, TPP), penegakan disiplin berbasis data, serta dashboard pimpinan — seluruhnya dalam satu aplikasi web dan mobile.',
    ],
    chips: ['Laravel', 'Vue.js', 'PWA Mobile', 'MySQL', 'Firebase Cloud Messaging', 'REST API'],
    specRows: [
      { label: 'Role', value: 'Fullstack Developer & Systems Architect' },
      { label: 'Platform', value: 'Web (SPA Vue.js) · Mobile (PWA) · REST API' },
      { label: 'Skala', value: 'Ribuan ASN aktif · Pemerintah Kabupaten Bogor' },
      { label: 'Integrasi', value: 'SIASN/BKN · Firebase Cloud Messaging' },
      { label: 'Status', value: 'Production · Multi-Tahun' },
    ],
    features: [
      'Presensi GPS dengan radius geofence, selfie + deteksi wajah, skema kerja & shift, kalender kerja, tabulasi per OPD, tracking real-time, serta monitoring indikasi fake GPS dan loss GPS',
      'E-SKP tahunan, cascading SKP organisasi ke pegawai, rencana aksi (renaksi) & timeline, realisasi kinerja, verifikasi/penilaian SKP atasan, sinkronisasi SIASN, dan monitoring anomali data SKP',
      'Logbook aktivitas harian dengan kategori aktivitas, validasi atasan, tabulasi & rekap, peer review 360 derajat, index performa KPI, dan approval center',
      'E-Cuti digital: pengajuan cuti & izin, perhitungan kuota, penerbitan surat cuti, rekapitulasi, dan verifikasi melalui tautan publik',
      'Dinas luar, work from home (WFH), fleksibilitas kerja (WFA), dan presensi kegiatan berbasis QR code',
      'TPP: rekapitulasi & tabulasi, rekon data, unggah dokumen pengantar, Berita Acara Verifikasi (BAV), verifikasi verifikator, dan ringkasan per OPD',
      'Hukuman disiplin (hukdis), tindak bina 4 tahap, rekapitulasi pelanggaran, dan Early Warning System otomatis berbasis data kehadiran & kinerja',
      'Instruksi Khusus Pimpinan (IKP): penjadwalan, lampiran file & tautan, komentar, kolaborasi, dan laporan kinerja instruksi',
      'Penghargaan pegawai: Pegawai Terbaik Periodik (PTP), ASN Berprestasi, penghargaan SLKS, dan Fasilitator Favorit',
      'Dashboard kerja untuk pegawai dan dashboard pimpinan dengan visualisasi real-time data kinerja, kehadiran, dan kedisiplinan',
      'Profil ASN lengkap, struktur organisasi, ketua tim, pejabat PLT, riwayat diklat, media sosial ASN, terintegrasi SIASN/SIMPEG',
      'Push notification via Firebase Cloud Messaging serta master data skema kerja, lokasi presensi, database maps, kalender kerja, broadcaster, dan hotline',
    ],
    before: [],
    after: [],
    capacity: null,
    metrics: [],

    breakdown: [
      {
        tag: '01 // BACKEND API',
        title: 'REST API Laravel',
        body: 'REST API Laravel untuk seluruh modul aplikasi Sicantik — presensi, kinerja, layanan ASN, hingga dashboard pimpinan.',
      },
      {
        tag: '02 // FRONTEND WEB & MOBILE',
        title: 'SPA Vue.js + PWA Mobile',
        body: 'Aplikasi web SPA Vue.js untuk desktop dan PWA mobile sehingga presensi dan layanan tetap bisa diakses dari perangkat lapangan.',
      },
      {
        tag: '03 // MODUL PRESENSI',
        title: 'GPS, Selfie & Deteksi Wajah',
        body: 'Modul presensi GPS dengan radius geofence, selfie & deteksi wajah, tracking posisi, serta indikasi fake GPS dan loss GPS.',
      },
      {
        tag: '04 // MODUL KINERJA',
        title: 'SKP, Renaksi, Realisasi & KPI',
        body: 'Modul SKP, rencana aksi (renaksi), realisasi, review SKP, indeks KPI, dan review periodik.',
      },
      {
        tag: '05 // LAYANAN ASN',
        title: 'Cuti, Dinas Luar, WFH/WFA',
        body: 'Modul cuti, dinas luar, work from home (WFH), fleksibilitas kerja (WFA), dan presensi kegiatan berbasis QR.',
      },
      {
        tag: '06 // MODUL TPP',
        title: 'TPP, Verifikasi & BAV',
        body: 'Modul TPP, verifikasi TPP oleh verifikator terdaftar, Berita Acara Verifikasi (BAV), dan rekon data.',
      },
      {
        tag: '07 // DISIPLIN & EWS',
        title: 'Hukdis, Tindak Bina & Early Warning',
        body: 'Modul hukuman disiplin (hukdis), tindak bina, dan peringatan dini otomatis berbasis data kehadiran & kinerja.',
      },
      {
        tag: '08 // INSTRUKSI KHUSUS PIMPINAN',
        title: 'IKP & Laporan Kinerja',
        body: 'Modul instruksi khusus pimpinan beserta penjadwalan, lampiran, dan laporan kinerja instruksi.',
      },
      {
        tag: '09 // PENGHARGAAN',
        title: 'PTP, Award, SLKS & Favorit',
        body: 'Modul Pegawai Terbaik Periodik (PTP), award, SLKS, dan Fasilitator Favorit.',
      },
      {
        tag: '10 // DASHBOARD',
        title: 'Dashboard Kerja & Pimpinan',
        body: 'Dashboard kerja pegawai dan dashboard pimpinan dengan rekap real-time.',
      },
      {
        tag: '11 // DATA KEPEGAWAIAN',
        title: 'Profil ASN & Struktur',
        body: 'Modul profil ASN, struktur organisasi, ketua tim, pejabat PLT, riwayat diklat, dan media sosial ASN.',
      },
      {
        tag: '12 // NOTIFIKASI & MASTER DATA',
        title: 'Push Notification & Referensi',
        body: 'Push notification real-time via Firebase Cloud Messaging dan master data skema kerja, lokasi, kalender, broadcaster.',
      },
      {
        tag: '13 // DOKUMENTASI',
        title: 'Dokumentasi Teknis & Panduan',
        body: 'Dokumentasi teknis dan panduan penggunaan aplikasi untuk operator dan pimpinan.',
      },
    ],
  },

  {
    slug: 'cms-perusahaan-multi-tenant',
    index: '02',
    category: 'PROYEK',
    featured: false,
    title: 'CMS Perusahaan Multi-Tenant',
    year: '2024',
    platform: 'Web Platform — SaaS',
    scope: 'Perusahaan / Klien Jamak (Multi-Tenant)',
    status: 'PRODUCTION',
    summary:
      'Platform konten perusahaan dengan isolasi data per tenant, RBAC modular, dan alur publikasi terstruktur di atas arsitektur Laravel + Vue.',
    overview: [
      'Platform konten perusahaan dengan isolasi data per tenant, RBAC modular, dan alur publikasi terstruktur di atas arsitektur Laravel + Vue.',
      'Satu basis kode melayani banyak klien perusahaan — setiap tenant memiliki ruang datanya sendiri, manajemen pengguna dengan kontrol akses berbasis peran, serta alur kerja editorial yang terstruktur dari draf hingga publikasi.',
    ],
    chips: ['Laravel', 'Vue 3', 'MySQL', 'RBAC'],
    specRows: [
      { label: 'Role', value: 'Fullstack Developer' },
      { label: 'Platform', value: 'Web · Multi-Tenant SaaS' },
      { label: 'Tahun', value: '2024' },
      { label: 'Status', value: 'Production' },
    ],
    features: [
      'Isolasi data per tenant dalam satu basis kode',
      'Manajemen pengguna & RBAC modular (role/permission)',
      'Alur publikasi terstruktur: draf → review → publish',
      'Modul konten & media per tenant',
      'Audit trail aktivitas & riwayat revisi konten',
    ],
    before: [],
    after: [],
    breakdown: [
      {
        tag: '01 // LINGKUP',
        title: 'Multi-Tenant, Data Terisolasi',
        body: 'Banyak klien berbagi satu instalasi aplikasi tanpa saling menembus data. Setiap tenant membutuhkan ruang konten, pengguna, dan konfigurasinya sendiri.',
      },
      {
        tag: '02 // PENDEKATAN',
        title: 'Satu Codebase, Scoping Ketat',
        body: 'Backend Laravel menegakkan isolasi lewat scoping query per tenant dan RBAC modular — frontend Vue 3 mengonsumsi REST API yang sama untuk semua klien.',
      },
      {
        tag: '03 // HASIL',
        title: 'Alur Publikasi yang Terjaga',
        body: 'Setiap perubahan konten melewati alur review sebelum live, tercatat sebagai riwayat revisi, dan dapat diaudit kapan saja.',
      },
    ],
    capacity: null,
    metrics: [],
  },

  {
    slug: 'aplikasi-mobile-presensi-geolocation',
    index: '03',
    category: 'PROYEK',
    featured: false,
    title: 'Aplikasi Mobile Presensi Geolocation',
    year: '2024',
    platform: 'Mobile App (Android / iOS)',
    scope: 'Ekosistem Presensi Pemerintahan',
    status: 'PRODUCTION',
    summary:
      'Presensi mobile lintas platform dengan validasi lokasi GPS, foto selfie, dan toleransi jaringan tidak stabil melalui buffer antrean lokal.',
    overview: [
      'Presensi mobile lintas platform dengan validasi lokasi GPS, foto selfie, dan toleransi jaringan tidak stabil melalui buffer antrean lokal.',
      'Dibangun dengan Ionic + Capacitor di atas Vue dan berkomunikasi dengan REST API ekosistem presensi pemerintahan — dirancang agar tetap dapat digunakan di area dengan sinyal buruk dan pada perangkat kelas menengah.',
    ],
    chips: ['Ionic', 'Capacitor', 'Vue', 'REST API'],
    specRows: [
      { label: 'Role', value: 'Fullstack Developer — Mobile' },
      { label: 'Platform', value: 'Android · iOS (Hybrid)' },
      { label: 'Tahun', value: '2024' },
      { label: 'Status', value: 'Production' },
    ],
    features: [
      'Validasi lokasi GPS & radius terhadap titik presensi',
      'Verifikasi foto selfie saat melakukan presensi',
      'Buffer antrean lokal saat koneksi hilang',
      'Sinkronisasi otomatis saat koneksi pulih',
      'Request idempotent — mencegah presensi ganda saat retry',
    ],
    before: [],
    after: [],
    breakdown: [
      {
        tag: '01 // MASALAH',
        title: 'Jaringan Seluler Tidak Stabil',
        body: 'Presensi sering gagal atau terkirim ganda ketika pengguna berada di area dengan sinyal buruk — pengalaman yang fatal untuk absensi harian.',
      },
      {
        tag: '02 // PENDEKATAN',
        title: 'Buffer Antrean Lokal',
        body: 'Data presensi disimpan sementara di perangkat dan disinkronkan ke server saat koneksi pulih, sehingga presensi tetap tercatat walau jaringan terputus.',
      },
      {
        tag: '03 // HASIL',
        title: 'Tercatat Tepat Satu Kali',
        body: 'Mekanisme retry idempotent menjamin satu presensi hanya tercatat satu kali — tanpa duplikasi data di sisi server.',
      },
    ],
    capacity: null,
    metrics: [],
  },

  {
    slug: 'lms-institusi-computer-based-test',
    index: '04',
    category: 'PROYEK',
    featured: false,
    title: 'LMS Institusi & Computer Based Test',
    year: '2025',
    platform: 'Web Application — LMS & OAC',
    scope: 'Institusi Pemerintahan — Pengembangan Kompetensi ASN',
    status: 'PRODUCTION',
    summary:
      'Bogor Corporate University (GORPU) — portal LMS dan assessment center ASN: ruang belajar, pelatihan, coaching & mentoring, data assessment, arsip pelatihan, hingga Online Assessment Center dengan deteksi wajah dan pengawasan live video WebRTC.',
    overview: [
      'BKPSDM Kabupaten Bogor membutuhkan satu platform terpadu untuk menyelenggarakan pengembangan kompetensi ASN secara digital (e-learning), assessment center, dan pengelolaan data pelatihan yang sebelumnya manual serta tersebar di banyak aplikasi, sekaligus memastikan integritas ujian online (OAC) di tengah ribuan peserta dari berbagai OPD dengan kebutuhan pengawasan jarak jauh secara real-time.',
      'Bogor Corporate University (GORPU) dibangun sebagai portal LMS dan assessment center tunggal yang memadukan ruang belajar, pelatihan, coaching & mentoring, magang, data assessment pegawai, Online Assessment Center dengan pengawasan live video berbasis WebRTC (Janus Gateway), deteksi wajah TensorFlow.js, keamanan ujian ketat (kunci fullscreen dan deteksi pindah tab), arsip pelatihan, tabulasi JP, sertifikat digital, serta pengaturan konten aplikasi — seluruhnya dalam satu aplikasi web modern berbasis Vue 3 dan Laravel.',
    ],
    chips: ['Laravel', 'Vue 3', 'Vite', 'WebRTC (Janus)', 'TensorFlow.js', 'MySQL'],
    specRows: [
      { label: 'Role', value: 'Fullstack Developer' },
      { label: 'Platform', value: 'Web (SPA Vue 3) · REST API' },
      { label: 'Instansi', value: 'BKPSDM Kabupaten Bogor' },
      { label: 'Pengawasan', value: 'WebRTC (Janus) · TensorFlow.js' },
      { label: 'Status', value: 'Production' },
    ],
    features: [
      'Portal & landing page: banner slider, statistik real-time, kategori & metode pembelajaran, rekomendasi pelatihan populer',
      'Autentikasi lengkap: login NIP/email, registrasi non-ASN, reset password via token email, verifikasi akun, dan profil pengguna',
      'Ruang belajar: pencarian & filter, tab deskripsi/persyaratan/materi/coaching/magang/penilaian, serta rating & review bintang',
      'Manajemen LMS: CRUD pelatihan & kategori, ruang belajar, peserta (ASN & umum), pengajar, tugas peserta, dan evaluasi soal',
      'Coaching & mentoring, magang, dan pendataan pengembangan kompetensi (bangkom) ASN',
      'Data assessment pegawai (rekap per tahun/bulan/OPD) dan analisis gap kompetensi berbasis data',
      'Online Assessment Center: prelaunch device check (kamera, mikrofon, jaringan), navigasi soal, tanda ragu, countdown timer & auto-submit',
      'Deteksi wajah berbasis TensorFlow.js (BlazeFace) untuk verifikasi peserta ujian',
      'Keamanan ujian ketat: kunci fullscreen, deteksi pindah tab & kehilangan fokus, dan pencatatan pelanggaran',
      'Live video monitoring peserta secara real-time menggunakan WebRTC Janus Gateway',
      'Manajemen OAC admin: kategori soal, peserta, hasil ujian, penilaian, monitoring, Q&A, peran assessor, dan unduh hasil',
      'Arsip pelatihan struktural/teknis/fungsional, tabulasi JP, riwayat peserta & sertifikat PDF, dan dashboard statistik',
    ],

    before: [],
    after: [],
    breakdown: [
      {
        tag: '01 // PLATFORM WEB',
        title: 'Vue 3 SPA + Laravel REST API',
        body: 'Frontend Vue 3 (Vite) dengan Bootstrap-Vue-Next, Pinia, dan Vue Router; backend Laravel sebagai REST API terintegrasi.',
      },
      {
        tag: '02 // RUANG BELAJAR & LMS',
        title: 'Pelatihan, Materi, Peserta & Pengajar',
        body: 'Pengelolaan ruang belajar, pelatihan, materi, peserta (ASN dan umum), pengajar, tugas peserta, dan evaluasi soal.',
      },
      {
        tag: '03 // ASSESSMENT & PENGEMBANGAN',
        title: 'Data Assessment & Gap Kompetensi',
        body: 'Modul data assessment pegawai, gap kompetensi, coaching & mentoring, magang, dan pengembangan kompetensi (bangkom).',
      },
      {
        tag: '04 // ONLINE ASSESSMENT CENTER',
        title: 'Sesi Ujian Online & Penilaian',
        body: 'Prelaunch device check, navigasi soal, tanda ragu, countdown timer & auto-submit, dan pengelolaan hasil ujian.',
      },
      {
        tag: '05 // DETEKSI WAJAH',
        title: 'TensorFlow.js — BlazeFace',
        body: 'Verifikasi identitas peserta ujian secara real-time menggunakan deteksi wajah TensorFlow.js (BlazeFace).',
      },
      {
        tag: '06 // KEAMANAN UJIAN',
        title: 'Fullscreen Lock & Anti Pindah Tab',
        body: 'Kunci fullscreen, deteksi pindah tab dan kehilangan fokus, serta pencatatan pelanggaran selama ujian berlangsung.',
      },
      {
        tag: '07 // LIVE MONITORING',
        title: 'WebRTC via Janus Gateway',
        body: 'Streaming video pengawasan peserta secara real-time menggunakan WebRTC Janus Gateway untuk proctoring jarak jauh.',
      },
      {
        tag: '08 // ADMIN OAC',
        title: 'Bank Soal, Assessor & Monitoring',
        body: 'Pengelolaan kategori soal, peserta ujian, penilaian, monitoring peserta, Q&A, peran assessor, dan unduh hasil ujian.',
      },
      {
        tag: '09 // ARSIP, JP & SERTIFIKAT',
        title: 'Pelatihan, Tabulasi JP & PDF',
        body: 'Arsip pelatihan struktural/teknis/fungsional, tabulasi Jam Pelajaran (JP), unduhan sertifikat PDF (jsPDF), dan ekspor data XLSX.',
      },
      {
        tag: '10 // PENGATURAN & DASHBOARD',
        title: 'Konten Aplikasi & Statistik Kegiatan',
        body: 'Banner slider, rekomendasi LMS, mobile broadcast & notifikasi, serta dashboard statistik dengan visualisasi ECharts.',
      },
    ],
    capacity: null,
    metrics: [],
  },

  {
    slug: 'simpeg-sistem-informasi-kepegawaian',
    index: '05',
    category: 'PROYEK',
    featured: false,
    title: 'SIMPEG — Sistem Kepegawaian Terpadu',
    year: '2024 — Berjalan',
    platform: 'Web Application',
    scope: 'Institusi Pemerintahan — Data Kepegawaian',
    status: 'PRODUCTION',
    summary:
      'SIMPEG — sistem informasi kepegawaian terpadu BKPSDM Kabupaten Bogor: data pokok & riwayat ASN, administrasi mutasi, kenaikan pangkat, KGB, pensiun, hukuman disiplin, perencanaan formasi & anjab-bezzeting, tabulasi analitik, hingga rekonsiliasi SIASN/BKN dalam satu sistem.',
    overview: [
      'BKPSDM Kabupaten Bogor membutuhkan satu sistem informasi kepegawaian yang terpadu untuk mengelola data dan layanan kepegawaian ribuan ASN — mulai dari data pokok, riwayat kepangkatan dan jabatan, administrasi mutasi, kenaikan pangkat, KGB, pensiun, hukuman disiplin, hingga perencanaan kebutuhan pegawai (anjab, bezzeting, formasi) — yang sebelumnya tersebar di banyak aplikasi, sebagian masih manual, dan belum terintegrasi dengan SIASN/BKN serta aplikasi kepegawaian lain seperti Sicantik.',
      'SIMPEG dibangun sebagai sistem tunggal kepegawaian yang mengelola seluruh siklus data ASN secara digital dan terpusat, dilengkapi rekonsiliasi dan sinkronisasi data SIASN/BKN, tabulasi dan rekapitulasi analitik yang dapat diekspor, perencanaan kebutuhan dan peta jabatan, manajemen talenta dan suksesi, layanan digital (E-Sign, Kepbup, surat perjanjian kerja), serta dashboard pimpinan dan operator perangkat daerah.',
    ],
    chips: ['Laravel', 'Vue.js', 'Sximo 7.1', 'MySQL', 'SIASN/BKN'],
    specRows: [
      { label: 'Role', value: 'Fullstack Developer' },
      { label: 'Platform', value: 'Web (SPA Vue.js — Sximo 7.1)' },
      { label: 'Instansi', value: 'BKPSDM Kabupaten Bogor' },
      { label: 'Integrasi', value: 'SIASN/BKN · SimpegLite · Sicantik' },
      { label: 'Status', value: 'Production' },
    ],
    features: [
      'Dashboard & rekapitulasi HRM: pegawai aktif (PNS, CPNS, PPPK, PPPK Paruh Waktu), statistik usia, pendidikan, pangkat per perangkat daerah',
      'Data pegawai & pencarian profil via NIP/nama dengan informasi personal dan kepegawaian lengkap serta filter per OPD',
      'Riwayat kepegawaian: pendidikan, diklat/kursus, keluarga, arsip digital, riwayat jafung, dan riwayat angka kredit',
      'Kinerja & prestasi: riwayat SKP, assessment center, talent management, penghargaan, dan uji kompetensi',
      'Mutasi pegawai: draft, proses, jenis & ruang lingkup, rekonsiliasi data, dan sinkronisasi ke aplikasi terkait',
      'Kenaikan pangkat, KGB dengan Early Warning System (EWS), data gaji pokok, pensiun & monitoring batas usia pensiun (BUP)',
      'Hukuman disiplin dan penghargaan pegawai (Satyalancana) beserta rekapitulasinya',
      'Formasi ASN, peta jabatan, info jabatan (tugas pokok, syarat, kelas jabatan), dan analisis kebutuhan formasi per OPD',
      'Anjab & bezzeting: eselon, fungsional, kepala camat/sekolah/puskesmas dan lurah, plus rekapitulasi jabatan (rekjab)',
      'e-SAKIP: visi/misi/tujuan RPJMD, cascading program, indikator kinerja daerah, dan perjanjian kinerja',
      'Tabulasi & rekapitulasi (usia, gender, eselon, golongan, pendidikan, hukdis, jabatan kosong, SUD, surat) dengan ekspor Excel',
      'Integrasi SIASN/BKN (API SimpegLite, data TPP Sicantik), layanan digital E-Sign/TTE, Kepbup, perjanjian kerja, dan manajemen talenta Simantap',
    ],
    before: [],
    after: [],

    breakdown: [
      {
        tag: '01 // BACKEND API',
        title: 'REST API Laravel',
        body: 'REST API Laravel untuk seluruh modul aplikasi SIMPEG — dari data pegawai hingga layanan digital.',
      },
      {
        tag: '02 // FRONTEND WEB',
        title: 'SPA Vue.js (Sximo 7.1)',
        body: 'Aplikasi web SPA Vue.js (Sximo 7.1) yang dapat diakses dari desktop dan mobile.',
      },
      {
        tag: '03 // DATA PEGAWAI',
        title: 'Profil, Pencarian & Riwayat',
        body: 'Modul profil pegawai, pencarian NIP/nama, dan riwayat kepegawaian yang lengkap.',
      },
      {
        tag: '04 // ADMINISTRASI KEPEGAWAIAN',
        title: 'Mutasi, Pangkat, KGB & Pensiun',
        body: 'Modul mutasi, kenaikan pangkat, KGB, pensiun, hukuman disiplin, dan penghargaan.',
      },
      {
        tag: '05 // PERENCANAAN',
        title: 'Formasi, Anjab, Bezzeting & Rekjab',
        body: 'Modul formasi, analisis jabatan (anjab), bezzeting, dan rekapitulasi jabatan.',
      },
      {
        tag: '06 // KINERJA',
        title: 'e-SAKIP, SKP & Assessment',
        body: 'Modul e-SAKIP, SKP, angka kredit, assessment center, dan talent management.',
      },
      {
        tag: '07 // TABULASI & ANALITIK',
        title: 'Rekapitulasi Data + Ekspor Excel',
        body: 'Modul rekapitulasi data kepegawaian berdasarkan banyak dimensi lengkap dengan ekspor Excel.',
      },
      {
        tag: '08 // INTEGRASI SIASN',
        title: 'Rekonsiliasi & Sinkronisasi SIASN/BKN',
        body: 'Modul rekonsiliasi dan sinkronisasi data kepegawaian dengan SIASN/BKN, API SimpegLite, dan data TPP Sicantik.',
      },
      {
        tag: '09 // MANAJEMEN TALENTA',
        title: 'Simantap — Skor, Peta Jabatan & Suksesi',
        body: 'Modul Simantap: penilaian skor pegawai, assessment, peta jabatan, simulasi pengisian jabatan, dan talent pool.',
      },
      {
        tag: '10 // LAYANAN DIGITAL',
        title: 'E-Sign/TTE, Kepbup & Perjanjian Kerja',
        body: 'Modul E-Sign/Tanda Tangan Elektronik, Keputusan Bupati (Kepbup), surat perjanjian kerja, surat & disposisi.',
      },
      {
        tag: '11 // ADMIN & NOTIFIKASI',
        title: 'User, Permission, Berita & Email Blast',
        body: 'Manajemen user, group, permission, berita/informasi, notifikasi, dan email blast.',
      },
      {
        tag: '12 // DOKUMENTASI',
        title: 'Dokumentasi Teknis & Panduan',
        body: 'Dokumentasi teknis dan panduan penggunaan aplikasi untuk operator dan pimpinan.',
      },
    ],
    capacity: null,
    metrics: [],
  },
]


export function findProject(slug) {
  return projects.find((p) => p.slug === slug) || null
}

export function nextProject(slug) {
  const i = projects.findIndex((p) => p.slug === slug)
  if (i === -1) return projects[0]
  return projects[(i + 1) % projects.length]
}

