function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://www.saunaclubco.com";
}

export const SITE_URL = resolveSiteUrl();
export const GLOFOX_BRANCH_ID = "6a7a099409481f1d490ae9e4";
export const GLOFOX_PORTAL_ORIGIN = "https://app.glofox.com";

export const SITE_NAME = "Sauna Club Co";

export const SITE_DESCRIPTION =
  "Sauna Club Co. is a sauna, cold plunge, and community wellness studio in Wheat Ridge, Colorado. Come unwind and socialize!";

// TODO: fill in real social profile URLs before launch
export const SOCIAL_LINKS = {
  instagram: "",
  facebook: "",
  tiktok: "",
};
