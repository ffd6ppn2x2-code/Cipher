# AGENTS.md

## Project

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS 3.3 + Framer Motion 11.
Cybersecurity consulting website ("Cipher") with bilingual EN/AR support.

## Commands

```bash
npm run dev      # next dev
npm run build    # next build
npm run start    # next start (production)
npm run lint     # next lint (ESLint 9 flat config)
```

`npx tsc --noEmit` works for type-checking. There is no dedicated `typecheck` script.

## Path alias

`@/*` → `./*` (defined in `tsconfig.json` paths). Works for both imports and component references.

## Dual Next.js config files

Both `next.config.js` (CJS) and `next.config.mjs` (ESM) exist with identical content. Keep them in sync if you modify config. Next.js may prefer `.mjs` when both are present.

## ESLint

Two configs exist: `eslint.config.js` (ESLint 9 flat config, active) and `.eslintrc.json` (legacy). The flat config wraps `next/core-web-vitals`. The `.eslintrc.json` is effectively unused but should be kept for reference or removed if stale.

## Client components

Next.js App Router defaults to Server Components. Every file that uses hooks, context, event handlers, or Framer Motion must start with `'use client'`.

## i18n architecture

- **Custom, no library.** React Context in `lib/i18n/context.tsx` — provides `LanguageProvider` and `useLanguage()` hook.
- **Locales**: `en` and `ar` (Arabic).
- **RTL**: `LanguageProvider` sets `document.documentElement.dir` and `document.documentElement.lang` automatically.
- **Persistence**: language saved to `localStorage` key `cipher-lang`.
- **Translations**: `lib/i18n/translations.ts` — single object with `en` and `ar` keys. Always keep both locales in sync (same structure, same keys). The `Translations` type is derived from `typeof translations.en`.
- All translated strings are hardcoded; there is no CMS or file-based translation loading.

## Styling

- **Custom Tailwind colors** defined in `tailwind.config.ts` under `colors.cipher.*` (e.g. `bg-cipher-bg`, `text-cipher-primary`).
- **CSS custom properties** in `globals.css` `:root` block mirror the same palette — keep both in sync if colors change.
- **Custom component classes** in `globals.css` `@layer components`: `btn-primary`, `btn-ghost`, `card`, `section-label`, `gradient-text`, `glow-line`.
- Fonts: Inter (sans), JetBrains Mono (mono). Inter is loaded via Google Fonts `@import` in `globals.css` (no `next/font`).

## Service data

All service categories live in `lib/services/data.ts` as a static array of `ServiceCategory` objects. Types in `lib/services/types.ts`. This data drives:
- Home page service cards
- Services page sections
- Dynamic `/services/[slug]` pages (SSG via `generateStaticParams`)
- Header dropdown and footer links

Route `/services` renders all categories inline with `#cat-slug` anchors for each section. Individual category pages at `/services/[slug]` exist too.

## Routing

| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/services/[slug]` | `app/services/[slug]/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/contact` | `app/contact/page.tsx` |

Middleware in `middleware.ts` is a no-op placeholder (passes through all requests). Matcher excludes `api`, `_next/static`, `_next/image`, `favicon.ico`.

## Stale / unused files

- `components/SiteHeader 2.tsx` — empty file, appears to be a stale copy. Do not use.
- `components/DirectionWrapper.tsx` — small RTL wrapper; RTL is already handled by `LanguageProvider` setting `document.documentElement.dir`. The wrapper is likely redundant.

## Known environment quirks

- On macOS, `next dev` may hang on telemetry. If it does, kill the process with `pkill -f "next/dist/telemetry"` or set `NEXT_TELEMETRY_DISABLED=1`.
- The `.claude/settings.local.json` file contains permissive bash allow-rules for this project — do not rely on it as a security boundary.

## No tests, no CI

There are no tests, no CI workflows, and no pre-commit hooks in this repo. Adding features does not require test updates.
