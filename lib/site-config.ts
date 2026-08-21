// Precedence: an explicit NEXT_PUBLIC_SITE_URL (set this once the real
// domain is live) > Vercel's auto-injected deployment URL (so preview/
// staging deployments always generate correct OG/canonical URLs for
// themselves, with no manual per-deployment config) > the real domain as
// a final fallback for local dev off Vercel.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://www.saunaclubco.com");

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
