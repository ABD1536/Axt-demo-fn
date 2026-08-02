# Axtrait Digital & IT Solutions

> **Sleek, dark, enterprise-grade Next.js landing page for Axtrait.**

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js ≥ 18** installed.

```bash
# Check your Node version
node --version

# If not installed, download from https://nodejs.org or use nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install --lts
nvm use --lts
```

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
Axtrait/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Full design system (tokens, components, animations)
├── components/
│   ├── Navbar.tsx          # Fixed header with scroll effect + mobile drawer
│   ├── HeroSection.tsx     # Full-viewport hero with animated stats
│   ├── MarqueeBanner.tsx   # Infinite tech-stack ticker
│   ├── ServicesSection.tsx # 4-card services grid with hover effects
│   ├── ProcessSection.tsx  # 4-step "How We Work" section
│   ├── TestimonialsSection.tsx  # 3 client testimonials
│   ├── ContactSection.tsx  # Lead-gen form + contact info
│   └── Footer.tsx          # Multi-column footer with socials
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── next.config.ts
└── .gitignore
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background Base | `#09090b` |
| Surface | `#0f0f12` |
| Card | `#18181d` |
| Accent Primary | `#7c3aed` (violet) |
| Accent Secondary | `#06b6d4` (cyan) |
| Text Primary | `#fafafa` |
| Text Muted | `#52525b` |
| Font Display | Space Grotesk |
| Font Body | Inter |

---

## 📦 Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org) | React framework (App Router) |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first CSS |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [PostCSS](https://postcss.org) | CSS processing |

---

## 📝 Customisation

- **Contact form backend**: In `ContactSection.tsx`, replace the simulated `setTimeout` with a real API call (e.g. [Formspree](https://formspree.io), [EmailJS](https://emailjs.com), or your own endpoint).
- **SEO metadata**: Update `app/layout.tsx` with your real domain, OG image, etc.
- **Colours / tokens**: Edit the CSS custom properties at the top of `app/globals.css`.

---

## 🛠 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

---

© 2026 Axtrait Digital & IT Solutions
