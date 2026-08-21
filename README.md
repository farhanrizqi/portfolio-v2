# Farhan Rizqi Aminullah — Portfolio (v1)

Stack: **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui-style components**

## Getting started

npm install
npm run dev

Open http://localhost:3000

## What's done

- Self-hosted fonts via @fontsource (Manrope + Inter) — no Google Fonts CDN dependency
- Accent color locked: #4C4FE0 (deep indigo)
- Full site skeleton: Nav, Hero, Selected Work, Professional Experience, Services, About, Tech Stack, Contact, Footer
- 5 individual case study pages at /work/[slug], built from a shared src/lib/projects.ts data source
- Per-page SEO metadata (title + description + OG tags) generated per case study via generateMetadata
- Thematic SVG placeholder thumbnails for each project (public/images/) reflecting each project's actual content, not generic gray boxes
- Contact form wired to build a pre-filled WhatsApp deep link (wa.me) from form fields

## Before you go live

1. Set your real WhatsApp number — src/components/sections/contact.tsx, top of file: WHATSAPP_NUMBER constant currently reads "62XXXXXXXXXX"
2. Swap SVG placeholders for real screenshots once each concept project actually exists as a built site — public/images/*.svg, referenced from src/lib/projects.ts
3. Fill in a real profile photo — src/components/sections/about.tsx currently has an empty div as an avatar placeholder

## Project structure

- src/components/sections/ — one file per homepage section
- src/components/ui/ — Button, Badge, Card (hand-built shadcn-style primitives; the shadcn CLI registry wasn't reachable in the build sandbox, so these were written manually following the same conventions: cva for variants, cn() for class merging, Radix Slot for polymorphism)
- src/lib/projects.ts — single source of truth for all 5 project case studies; both homepage sections and the /work/[slug] route pull from this
- src/app/work/[slug]/page.tsx — dynamic route rendering any project from projects.ts, with generateStaticParams + generateMetadata
- src/app/globals.css — design tokens matching the plan's visual system

## Next steps beyond v1

- Build real screenshots for each independent project (or actually build them as live micro-sites)
- Add a lightweight analytics setup so you know which projects/services get clicked before doing a v2
- Consider a short-form, sharable version of the Loperin/TMS case studies for LinkedIn (see plan v2 section 14 — Discovery)
