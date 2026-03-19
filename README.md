# Portfolio — Revi Vreto

> Personal developer portfolio built with **React 18 + Vite**. No component library, no template — everything designed and coded from scratch.

**Live:** [revivreto.dev](https://revivreto.dev) · **Tech:** React · Vite · CSS Modules

---

## Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | React 18 | Industry standard, shows component architecture |
| Build tool | Vite 5 | Fast HMR, optimized production builds |
| Styling | CSS Modules + CSS Variables | Scoped styles, zero runtime overhead |
| Fonts | Fraunces + DM Mono + Outfit | Editorial, distinctive, memorable |
| Animations | CSS keyframes + IntersectionObserver | No heavy animation library needed |
| Deploy | Vercel | Zero-config, instant previews |

---

## Structure

```
src/
├── components/       # Reusable UI components
│   ├── Cursor.jsx    # Custom cursor with lag-ring
│   ├── Navbar.jsx    # Sticky nav with scroll shrink
│   └── Footer.jsx
├── sections/         # Full-page sections
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
├── data/
│   └── portfolio.js  # All content in one place — easy to update
├── styles/
│   ├── globals.css   # Design tokens + base styles
│   └── animations.css
└── App.jsx
```

---

## Running locally

```bash
git clone https://github.com/ReviVreto0101/portfolio
cd portfolio
npm install
npm run dev
```

Open `http://localhost:5173`

## Build for production

```bash
npm run build
npm run preview
```

---

## Design decisions

- **Dark editorial aesthetic** — Fraunces (optical serif) paired with DM Mono creates a refined, technical feel that stands out from typical dev portfolios
- **No UI library** — every component is custom; this is the portfolio's own proof of frontend skill
- **CSS Modules** — scoped styles, no class conflicts, production-safe
- **Single data file** — all personal content lives in `src/data/portfolio.js`; updating the portfolio means editing one file, not hunting through JSX

---

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ReviVreto0101/portfolio)

Or manually:

```bash
npm i -g vercel
vercel
```

---

*Built by Revi Vreto · [revivreto.dev](https://revivreto.dev)*
