// Precedence:
// 1. An explicit NEXT_PUBLIC_SITE_URL (set this once the real domain is live).
// 2. VERCEL_PROJECT_PRODUCTION_URL — Vercel's *stable* alias for this
//    project (e.g. sauna-club-co.vercel.app), the same URL regardless of
//    which specific build is currently live. This is what people actually
//    share, so absolute URLs (OG images, canonicals) need to point here,
//    not at a single build's own hostname.
// 3. VERCEL_URL — falls back to the current build's own unique deployment
//    URL, only relevant for preview branches that don't have a stable
//    alias of their own.
// 4. The real domain, as a final fallback for local dev off Vercel.
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://www.saunaclubco.com";
}

export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = "Sauna Club Co";

export const SITE_DESCRIPTION =
  "Sauna Club Co. is a sauna, cold plunge, and community wellness studio in Wheat Ridge, Colorado. Come unwind and socialize!";

// TODO: fill in real social profile URLs before launch — icons render as
// placeholder "#" links until then.
export const SOCIAL_LINKS = {
  instagram: "",
  facebook: "",
  tiktok: "",
};
