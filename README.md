# AutomationLabs

Modern marketing site for [automationlabs.ch](https://www.automationlabs.ch) — business automation agency for SMB and mid-cap companies.

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** — scroll animations & parallax
- **Lucide React** — icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/              # Next.js routes & layout
├── components/
│   ├── layout/       # Header, Footer
│   ├── motion/       # Reusable animation primitives
│   ├── sections/     # Page sections (Hero, Services, …)
│   └── ui/           # Buttons, Container, headings
├── content/
│   └── site.ts       # ← All copy, nav, services, contact info
└── lib/
    └── cn.ts         # className helper
```

## Customization

**All site content lives in `src/content/site.ts`.** Update text, services, navigation, contact details, and insights there — no need to touch components.

To add a new section:

1. Create a component in `src/components/sections/`
2. Import it in `src/app/page.tsx`
3. Add any content to `src/content/site.ts`

## Design tokens

Colors and animations are defined in `src/app/globals.css` under `:root` and `@theme inline`.
