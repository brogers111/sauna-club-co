# Sauna Club Co

Marketing website for Sauna Club Co, a sauna / cold plunge / hot tub studio in Wheat Ridge, CO. Built with Next.js (App Router), TypeScript, and Tailwind CSS. Session booking and membership purchases will integrate with Glofox in a later phase.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the real production domain before deploying — it drives canonical URLs, the sitemap, Open Graph tags, and JSON-LD.

## Project structure

- `app/` — routes (App Router). `app/locations/[slug]` is data-driven from `lib/data/locations.ts` so adding a second location doesn't require new routes.
- `lib/data/` — typed content (locations, pricing tiers).
- `lib/seo/` — canonical/OG metadata helper (`buildMetadata`) and JSON-LD schema builders (`schema.ts`).
- `components/ui/` — shared primitives, including `BookNowButton`, the single place the future Glofox booking link/iframe will be wired in.

## Known TODOs before launch

- Real business NAP data (address, phone, geo) in `lib/data/locations.ts` — currently placeholders.
- Real pricing (`priceUSD` in `lib/data/pricing.ts` is currently `null`).
- `NEXT_PUBLIC_SITE_URL` env var.
- Glofox booking/membership integration (`BookNowButton`).

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — production build
- `pnpm lint` — ESLint
