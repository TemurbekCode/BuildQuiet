# Buildquiet — Studio Website

> **We build. Quietly.**
> Marketing website for Buildquiet, a white-label web development studio partnering with marketing agencies in the US and Europe.

**Live:** [buildquiet.com](https://buildquiet.com) <!-- domen ulangach yangila -->

---

## Overview

Buildquiet is the invisible dev team behind marketing agencies — custom websites and landing pages built under the agency's brand. This repository contains the studio's own one-page marketing site.

The site is intentionally minimal and dependency-free: no frameworks, no build step, no tracking scripts. Fast by default — the site itself is the portfolio.

## Features

- **Animated splash screen** — brand "brick" logo builds itself on first visit; skipped on repeat visits via `sessionStorage` and skipped entirely for users with `prefers-reduced-motion`
- **Hero visual** — animated staging-browser mockup with floating status cards telling the white-label story
- **One-page layout** — Hero → Problem → Services → Process → Why us → Work → FAQ → Contact → CTA
- **Contact form** — powered by Netlify Forms (`data-netlify="true"`), no backend required
- **Fully responsive** — mobile-first breakpoints at 900px / 980px
- **Accessible** — reduced-motion support, semantic HTML, keyboard-friendly FAQ accordion (`<details>`)

## Tech Stack

| Layer      | Choice                                    |
|------------|-------------------------------------------|
| Markup     | Semantic HTML5                             |
| Styling    | Vanilla CSS (custom properties, grid)      |
| Fonts      | Space Grotesk · Inter · JetBrains Mono (Google Fonts) |
| JS         | ~20 lines of vanilla JS (splash control)   |
| Forms      | Netlify Forms                              |
| Hosting    | Netlify + custom domain                    |

No frameworks. No build step. Clone and open.

## Project Structure

```
buildquiet/
├── index.html          # Entire site (markup + styles + splash script)
├── assets/             # Images: portfolio screenshots, favicon, og-image
│   ├── favicon.svg
│   ├── og-image.png
│   └── work/           # Portfolio thumbnails
└── README.md
```

## Getting Started

```bash
# Clone
git clone https://github.com/<username>/buildquiet.git
cd buildquiet

# Run locally — any static server works, e.g.:
npx serve .
# or just open index.html in a browser
```

## Deployment (Netlify)

1. Push the repo to GitHub
2. In Netlify: **Add new site → Import from Git** → select the repo
3. Build settings: leave empty (no build step), publish directory: `/`
4. **Domain settings** → add custom domain `buildquiet.com` → follow DNS instructions (Namecheap: point nameservers to Netlify or add A/CNAME records)
5. **Forms**: after the first deploy, the contact form appears under **Site → Forms**. Enable email notifications: **Forms → Settings → Form notifications**

### Brand Reference

| Token          | Value     | Usage                          |
|----------------|-----------|--------------------------------|
| `--ink`        | `#151613` | Text, buttons, dark section    |
| `--paper`      | `#FAFAF7` | Main background                |
| `--green`      | `#0F6E56` | Accent, links, brand mark      |
| `--green-bright` | `#2FBE8F` | Accent on dark backgrounds   |
| `--stone`      | `#8A8A80` | Secondary text                 |
| `--line`       | `#E4E2DA` | Borders, dividers              |

Typography: **Space Grotesk** (display) · **Inter** (body) · **JetBrains Mono** (technical labels)

## Pre-Launch Checklist

- [ ] Replace `[placeholder]` portfolio cards in the Work section with real projects
- [ ] Add real screenshots to `assets/work/` and wire them into `.work-thumb`
- [ ] Connect Calendly link to all "Book a call" buttons
- [ ] Add LinkedIn URL in the footer and contact section
- [ ] Add favicon (`favicon.svg`) and OG image (`og-image.png`) for link previews
- [ ] Verify form submission works after first Netlify deploy
- [ ] Run Lighthouse — target 95+ on all four scores
- [ ] Test on real mobile device (not just DevTools)

## License

© 2026 Buildquiet. All rights reserved.
The code structure may be referenced for learning; brand assets (name, logo, copy) may not be reused.