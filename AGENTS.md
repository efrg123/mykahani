<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# MyKahani — Agent Project Guide

## Project Overview

MyKahani is a **static marketing landing page** for a Pakistan-based mental health and wellness platform (mykahani.pk). It is a single-page site composed of scrollable sections, built with Next.js 16 (App Router) and exported as a fully static site.

- **Domain**: Mental health services — individual therapy, couples counseling, corporate wellness, online sessions.
- **Language**: English with embedded Urdu copy in select sections.
- **Output**: Static HTML/CSS/JS exported to the `dist/` directory.

## Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.2.4 |
| Runtime | React | 19.2.4 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animation | Framer Motion | 12.x |
| UI Primitives | @base-ui/react | 1.4.x |
| Icons | lucide-react | 1.8.x |
| Build Tool | Next.js built-in (Turbopack in dev) | — |

> **Note**: This project uses **Tailwind CSS v4** and the **shadcn/ui "base-nova"** style. UI components are built on `@base-ui/react` primitives, not Radix UI. Do not confuse with older shadcn/ui setups that use Radix.

## Project Structure

```
mykahani/
├── next.config.ts          # Static export config (output: "export", distDir: "dist")
├── tsconfig.json           # TypeScript config with @/* -> ./src/* path alias
├── package.json            # Dependencies and npm scripts
├── components.json         # shadcn/ui configuration (style: base-nova, iconLibrary: lucide)
├── postcss.config.mjs      # Tailwind CSS v4 PostCSS plugin
├── eslint.config.mjs       # ESLint 9 flat config (next/core-web-vitals + next/typescript)
├── e2e_test.py             # Python Playwright E2E test suite
├── write-files.js          # Node helper that regenerates FAQ, ContactCTA, Footer content
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata, JSON-LD schema, Inter font
│   │   ├── page.tsx        # Home page composing all sections
│   │   ├── globals.css     # Tailwind v4 theme variables, dark mode, smooth scroll
│   │   └── favicon.ico
│   ├── components/
│   │   ├── sections/       # Page section components (all are "use client")
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Challenges.tsx
│   │   │   ├── Philosophy.tsx
│   │   │   ├── CorporateSection.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── ContactCTA.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/             # Reusable UI primitives built on @base-ui/react
│   │       ├── accordion.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── separator.tsx
│   │       └── sheet.tsx
│   └── lib/
│       └── utils.ts        # cn() helper: clsx + tailwind-merge
├── public/                 # Static assets (SVGs only; no images)
└── dist/                   # Static export output (generated, do not edit manually)
```

## Build & Development Commands

All commands run from the project root (`mykahani/`):

```bash
# Install dependencies
npm install

# Start development server (Turbopack, http://localhost:3000)
npm run dev

# Build static site for production (outputs to dist/)
npm run build

# Start production server (serves the built app, not static export)
npm run start

# Run linting
npm run lint
```

## Code Style Guidelines

### Component Patterns
- **All section components are Client Components** (`"use client"`) because they use Framer Motion animations and `useInView` for scroll-triggered entrance effects.
- Use `useRef(null)` + `useInView(ref, { once: true, margin: "-100px" })` as the standard pattern for scroll animations.
- Sections accept no props; they are self-contained and receive all data from internal constants.

### Styling Conventions
- **Color palette**: `teal-700` / `teal-600` / `teal-800` as primary; `slate-50` through `slate-900` for neutrals; `emerald` as secondary accent.
- **Spacing**: `py-20 lg:py-28` is the standard vertical section padding.
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` is the standard content wrapper.
- **Border radius**: `rounded-full` for CTAs and pills; `rounded-xl` / `rounded-2xl` / `rounded-3xl` for cards.
- Use the `cn()` utility from `@/lib/utils` for conditional class merging.

### Imports
- Use `@/components/ui/...` for UI primitives.
- Use `@/components/sections/...` for section components.
- Use `@/lib/utils` for the `cn()` helper.

### Accessibility
- Navigation links use proper `aria-label` attributes (e.g., `aria-label="Open menu"` on the mobile sheet trigger).
- The contact form uses semantic `<label>` elements and proper input types.
- Smooth scrolling is enabled globally (`html { scroll-behavior: smooth; }`).

## Testing

The project uses a **Python-based Playwright E2E test** (`e2e_test.py`).

### Prerequisites
- Python 3 with `playwright` installed.
- The static site must be built first (`npm run build`) so that `dist/` exists.

### Running Tests

```bash
# Ensure the static build exists
npm run build

# Run the E2E test
python3 e2e_test.py
```

### What the E2E Test Covers
1. Starts a local HTTP server on port 3456 serving `dist/`.
2. Takes a full-page desktop screenshot (`test-desktop.png`).
3. Verifies all 11 major sections are present via text selectors.
4. Tests anchor navigation links (Services, Corporate, How It Works, FAQs, Contact).
5. Switches to mobile viewport (375×812), reloads, and takes a screenshot (`test-mobile.png`).
6. Verifies the mobile menu button exists.
7. Verifies contact form fields (name, email, phone, select dropdown).
8. Tests FAQ accordion opening and takes a screenshot (`test-faq-open.png`).

Screenshots are written to the **parent directory** (`/media/fahd/maindrive/mykahani/`).

## Deployment

The site is deployed as a **static export**.

### Primary Target: Cloudflare Pages
See `DEPLOY.md` in the parent directory for detailed steps.

Quick deploy:
```bash
npm run build
npx wrangler pages deploy dist --project-name=mykahani-pk
```

### Alternative: Vercel
```bash
npm run build
vercel --prod
```

> The `dist/` folder is the deployment artifact. Do not modify it manually; always rebuild after code changes.

## Security Considerations

- **Static site**: No backend API, no server-side data handling, and no authentication.
- **Contact form**: The form in `ContactCTA.tsx` uses `onSubmit={(e) => e.preventDefault()}` and is **non-functional** (a placeholder). If adding a real backend integration, replace this with a proper submission handler.
- **No secrets**: There are no environment variables or API keys checked into the repository.
- **Images**: Next.js Image Optimization is disabled (`images: { unoptimized: true }`) because static export does not support it. All imagery is inline SVG or CSS-generated visuals.

## Important Notes for Agents

- Do **not** add server-side features (API routes, SSR data fetching) unless the static export strategy is changed first. `output: "export"` in `next.config.ts` forbids dynamic routes and server features.
- When adding new UI components, follow the existing `@base-ui/react` primitive pattern in `src/components/ui/`, not Radix UI patterns.
- When modifying `FAQ.tsx`, `ContactCTA.tsx`, or `Footer.tsx`, note that `write-files.js` contains inline string templates for these files. If you regenerate them via that script, any hand-edits will be overwritten.
- The site targets Pakistan; any copy changes should remain culturally appropriate and may include Urdu where the existing design does.
