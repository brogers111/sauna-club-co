function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://www.saunaclubco.com";
}

export const SITE_URL = resolveSiteUrl();
export const GLOFOX_BRANCH_ID = "6a7a099409481f1d490ae9e4";
export const GLOFOX_PORTAL_ORIGIN = "https://app.glofox.com";

const GLOFOX_PORTAL_BASE = `${GLOFOX_PORTAL_ORIGIN}/portal/#/branch/${GLOFOX_BRANCH_ID}`;

// Every distinct Glofox portal view this site embeds, in one place so none
// of them drift out of sync with each other or get hand-retyped.
export const GLOFOX_URLS = {
  bookSessions: `${GLOFOX_PORTAL_BASE}/classes-list-view`,
  buyMembership: `${GLOFOX_PORTAL_BASE}/memberships`,
  loginRegister: `${GLOFOX_PORTAL_BASE}/classes-list-view?login`,
  leadRegister: `${GLOFOX_PORTAL_BASE}/lead-register`,
};

// The only external script this site loads — required by Glofox's
// lead-register and login/register embeds to report their content height
// back to the parent page (they render at height=0 without it).
export const GLOFOX_IFRAME_RESIZER_SRC = "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.6.1/iframeResizer.min.js";

export const SITE_NAME = "Sauna Club Co";

export const SITE_DESCRIPTION =
  "Sauna Club Co is a sauna, cold plunge, and community wellness studio in Wheat Ridge, Colorado. Come unwind and socialize!";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/saunaclubcollc/",
  facebook: "https://www.facebook.com/people/Sauna-Club-Co-LLC/61593920043011/",
  tiktok: "https://www.tiktok.com/@saunaclubcollc",
};
