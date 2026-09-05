# Muhammad Putra Rasidin — Fullstack Developer & Systems Architect

> Personal portfolio, engineered like a product. Built with **Vue 3** and **Vite**,
> styled as a modern *technical editorial × engineering journal* — showing the systems
> I have designed and shipped for real-world production: government-scale platforms,
> mobile attendance apps, a multi-tenant CMS, and an LMS/CBT institution system.

[![Live Site](https://img.shields.io/badge/Live%20Site-%E2%86%97%20siputtttt.github.io%2Fportofolio-EA580C)](https://siputtttt.github.io/portofolio/)
[![Vue 3](https://img.shields.io/badge/Vue-3.5-42B883)](https://vuejs.org/)
[![Vue Router](https://img.shields.io/badge/Vue%20Router-4-42B883)](https://router.vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38BDF8)](https://tailwindcss.com/)
[![Node](https://img.shields.io/badge/Node-%3E%3D20.19%20%7C%7C%20%3E%3D22.12-339933)](https://nodejs.org/)

**Author** — Muhammad Putra Rasidin · Bandung, Indonesia 🇮🇩

---

## Table of Contents

- [✨ Features](#-features)
- [🧱 Built With](#-built-with)
- [🚀 Getting Started](#-getting-started)
- [📜 Available Scripts](#-available-scripts)
- [🗂 Project Structure](#-project-structure)
- [🎨 Design Language](#-design-language)
- [🌍 Localization (ID / EN)](#-localization-id--en)
- [✏️ Customizing the Content](#-customizing-the-content)
- [🌐 Deployment](#-deployment)
- [📄 License](#-license)
- [📬 Contact](#-contact)

---

## ✨ Features

- **Distinct engineering-journal design** — warm paper background, crisp 1px hairline
  rules, monospace "telemetry" strips (geo coordinates, kernel spec, uptime SLA),
  and a single burnt-amber industrial accent. No AI-style gradients, no stock templates.
- **Bilingual ID / EN** — lightweight, dependency-free i18n. Indonesian is the default
  source language; the English toggle is persisted in `localStorage` (`mpr-lang`).
- **Case-study detail pages** — every selected project gets its own route
  (`/karya/:slug`) with scope, tech chips, spec rows, feature lists, and an
  architecture module breakdown.
- **Dynamic per-route SEO** — `title`, meta `description`, `canonical`, Open Graph and
  Twitter card tags are updated on every navigation, following the active language.
- **Search-engine ready** — `sitemap.xml`, `robots.txt`, and `schema.org/Person`
  `JSON-LD` structured data are included in `index.html`.
- **Polished interactions** — scroll-reveal via `IntersectionObserver`, sticky navbar
  with active-section tracking, photo lightbox, smooth anchor scrolling, mobile menu.
- **Single-file static prototype** — `index.standalone.html` is a self-contained
  version of the full design that runs by just opening it in a browser.
- **Fast developer loop** — Vite HMR + Tailwind CSS utility-first styling.

---

## 🧱 Built With

| Layer      | Technology                                              |
| ---------- | ------------------------------------------------------- |
| Framework  | Vue 3.x (Composition API, `<script setup>`)             |
| Routing    | Vue Router 4 (HTML5 history mode)                       |
| Build tool | Vite 8                                                  |
| Styling    | Tailwind CSS 3.4 · PostCSS · Autoprefixer               |
| Typography | Inter (UI text) · JetBrains Mono (data / labels / code) |
| Language   | JavaScript (ESM)                                        |

> **Node.js requirement:** `>=20.19.0` or `>=22.12.0` (see `engines` in
> `package.json`). The repo pins **22.23.1** in `.nvmrc`.

---

## 🚀 Getting Started

### 1. Prerequisites

Install [Node.js](https://nodejs.org/) (LTS 22 recommended) and confirm it works:

```bash
node --version   # e.g. v22.23.1
npm --version
```

If you use [nvm](https://github.com/nvm-sh/nvm), the project will pick the right
version automatically from `.nvmrc`:

```bash
nvm use
```

### 2. Clone & install

```bash
git clone https://github.com/Siputtttt/portofolio.git
cd portofolio
npm install      # or `npm ci` for a clean, lockfile-based install
```

### 3. Run the development server

```bash
npm run dev
```

Vite starts a dev server with hot-reload — open the printed URL
(usually `http://localhost:5173/`).

### 4. Create a production build

```bash
npm run build
```

The optimized, minified site is emitted to the `dist/` folder.

### 5. Preview the production build locally

```bash
npm run preview
```

Serves the `dist/` output locally so you can verify the build before deploying.

---

## 📜 Available Scripts

| Command         | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| `npm run dev`   | Start the Vite dev server with HMR                                           |
| `npm run build` | Compile a production-ready bundle into `dist/`                               |
| `npm run preview` | Serve the `dist/` folder locally to check the build                       |
| `npm run gen`   | Regenerate Vue SFC scaffolding + `main.css` from `index.standalone.html`     |

### What does `npm run gen` do?

`scripts/generate-vue.mjs` is a design-to-Vue migration utility. It reads the static
mock-up `index.standalone.html`, slices each marker-commented section (Navbar, Hero,
Selected Works, Case Study, Stack Index, Experience, Principles, Contact, Footer …)
into standalone `<template>`-only Vue SFCs under `src/components/`, extracts the
embedded styles/design tokens into `src/assets/main.css`, and wires up the
interactive Navbar. It is meant to be re-run when you restyle the standalone mock-up
and want to re-sync the component scaffolding.

---

## 🗂 Project Structure

```text
portofolio/
├── index.html                 # Vite entry — SEO meta, OG/Twitter tags, JSON-LD, fonts
├── index.standalone.html      # Self-contained single-file version of the whole design
├── package.json               # Project manifest (scripts, engines, dependencies)
├── vite.config.js             # Vite config — base path is '/portofolio/' (GitHub Pages)
├── tailwind.config.js         # Tailwind content globs & theme
├── postcss.config.js          # PostCSS plugins (tailwindcss + autoprefixer)
├── .nvmrc                     # Pinned Node version: 22.23.1
├── public/                    # Static assets copied as-is to dist/
│   ├── putra.jpeg             # Profile photo
│   ├── logo-dark.png          # Dark logo
│   ├── logo-light.png         # Light logo / favicon
│   ├── robots.txt             # Crawler rules + sitemap pointer
│   └── sitemap.xml            # URL index for search engines
├── scripts/
│   └── generate-vue.mjs       # Standalone HTML → Vue SFC generator (npm run gen)
└── src/
    ├── main.js                # Bootstrap: i18n init, router, dynamic SEO, reveal observer
    ├── App.vue                # Router shell
    ├── assets/main.css        # Tailwind directives + custom design tokens (CSS variables)
    ├── data/projects.js       # Source of truth for project detail pages (/karya/:slug)
    ├── utils/seo.js           # Per-route SEO helper + SITE_URL config
    ├── i18n/
    │   ├── index.js           # Tiny reactive i18n (t(), tr(), setLocale())
    │   └── locales/           # id.json + en.json + en.texts.*.json translation maps
    ├── router/index.js        # Vue Router — home + /karya/:slug + anchor scroll logic
    ├── components/            # Navbar.vue · Footer.vue · LightboxModal.vue
    └── views/                 # HomeView.vue · ProjectDetailView.vue
```

---

## 🎨 Design Language

The visual identity is defined once in `src/assets/main.css` as CSS custom properties
(`:root` tokens), and every section uses them — no hard-coded colors:

| Token          | Value     | Usage                          |
| -------------- | --------- | ------------------------------ |
| `--paper`      | `#f9f9f8` | Page background (warm off-white) |
| `--card`       | `#ffffff` | Cards & panels                 |
| `--ink`        | `#1c1917` | Primary text (jet charcoal)    |
| `--ink2`       | `#57534e` | Secondary text (stone gray)    |
| `--accent`     | `#d35400` | Burnt-amber industrial accent  |
| `--line`       | `#e7e5e4` | 1px hairline border rules      |
| `--green`      | `#16a34a` | "Available" status dot         |

Typography pairs **Inter** (headlines/body) with **JetBrains Mono**
(metadata, telemetry, chips, code labels), loaded from Google Fonts in `index.html`.

---

## 🌍 Localization (ID / EN)

The site ships in two languages — Indonesian (default) and English — without any
external i18n library. Vue's reactivity re-renders every translated label on toggle.

How it works:

- **UI chrome** (nav, footer, meta): structured JSON files
  `src/i18n/locales/id.json` and `src/i18n/locales/en.json`. Lookups use dot paths
  and array indexes via `t('nav.available')`.
- **Page copy**: the Indonesian sentence is the source inside templates, translated
  per-sentence by the maps in `src/i18n/locales/en.texts.*.json`
  (`key = Indonesian sentence`, `value = English translation`) through `tr(text)`.
  If a mapping is missing, the Indonesian sentence is shown as a safe fallback.
- **Persistence**: the choice is stored in `localStorage` under `mpr-lang` and the
  `<html lang>` attribute is updated accordingly.

To add a third language: create `xx.json` mirroring `id.json`, register it in
`SUPPORTED` in `src/i18n/index.js`, and (optionally) extend the content map in
`t()`/`tr()` as appropriate.

---

## ✏️ Customizing the Content

Everything you normally want to edit lives in one of a few files:

| What you want to change                    | Where                                                        |
| ------------------------------------------ | ------------------------------------------------------------ |
| Projects / case studies (titles, chips, features, architecture breakdown) | `src/data/projects.js` |
| Project English translations              | `src/i18n/locales/en.texts.proj*.json`                        |
| Hero, works, stack & experience copy      | `src/views/HomeView.vue` + `src/i18n/locales/en.texts.*.json` |
| Site title, meta description, OG/Twitter, JSON-LD | `index.html`                                          |
| `SITE_URL` / canonical URL                 | `src/utils/seo.js` (keep in sync with `index.html`)           |
| Search engine URLs                         | `public/sitemap.xml` · `public/robots.txt`                    |
| Profile photo                              | `public/putra.jpeg`                                           |
| Colors & design tokens                     | `:root` variables in `src/assets/main.css`                    |
| Fonts                                      | Google Fonts `<link>` in `index.html`                         |

### Adding a new project

1. Add an object to the `projects` array in `src/data/projects.js` (give it a unique
   `slug`, e.g. `nama-proyek`).
2. The detail route is fully dynamic — no router changes needed:
   `https://<your-site>/portofolio/karya/nama-proyek`.
3. Add its Indonesian → English sentence maps to the matching
   `en.texts.*.json` file so the detail page translates correctly.
4. Add the new URL to `public/sitemap.xml`.

---

## 🌐 Deployment

The app is configured to be served from a **sub-path** — `vite.config.js` sets
`base: '/portofolio/'`, matching the GitHub Pages URL
`https://<username>.github.io/portofolio/`.

### Option A — GitHub Pages via GitHub Actions (recommended)

Create `.github/workflows/deploy.yml` in the repo root:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Then:

1. Push the workflow to GitHub.
2. Go to **Settings → Pages** in your repository.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. The site is live at `https://<username>.github.io/portofolio/` after the first
   successful run.

### Option B — Deploy the `dist/` folder (manual)

1. Build the project: `npm run build`
2. Commit and push the generated `dist/` folder.
3. Go to **Settings → Pages → Build and deployment → Source → Deploy from a branch**.
4. Select the branch that contains `dist/` and set the folder to **`/dist`**.

> The live site for this repository is
> **https://siputtttt.github.io/portofolio/**.

### Deploying to other hosts

For Netlify / Vercel / Cloudflare Pages, remember to:

- Set the **base path** correctly in `vite.config.js` (or remove the sub-path base if
  deploying to the domain root), and
- Update `SITE_URL` in `src/utils/seo.js`, the canonical/OG URLs in `index.html`,
  plus `public/sitemap.xml` and `public/robots.txt`.

> **SPA deep links:** this app uses Vue Router's HTML5 history mode. Static hosts
> that don't rewrite unknown paths (GitHub Pages included) will 404 on a *direct*
> visit to `/karya/:slug`. In-app navigation always works fine. To make deep links
> work on such hosts, add a `404.html` that serves `index.html` (e.g. after building:
> `cp dist/index.html dist/404.html`) so the router catch-all redirects to the home
> page — or use a host that supports SPA rewrites.

---

## 📄 License

Distributed under the **ISC** license — see `package.json`. This is a personal
portfolio project; the code is shared for reference and learning. Please
[reach out](#-contact) before reusing it commercially or under your own name.

---

## 📬 Contact

**Muhammad Putra Rasidin** — Fullstack Developer & Systems Architect

- 📧 Email: [muhammadputra752@gmail.com](mailto:muhammadputra752@gmail.com)
- 💻 GitHub: [github.com/Siputtttt](https://github.com/Siputtttt)
- 🔗 LinkedIn: [linkedin.com/in/muhammad-putra-3a242a21b](https://www.linkedin.com/in/muhammad-putra-3a242a21b/)
- 🌍 Live site: [siputtttt.github.io/portofolio](https://siputtttt.github.io/portofolio/)

Built with ❤️ in Bandung, Indonesia.

