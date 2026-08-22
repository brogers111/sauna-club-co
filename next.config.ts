import type { NextConfig } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const canonicalHost = SITE_URL ? new URL(SITE_URL).hostname : null;
const isLocalHost = canonicalHost === "localhost";

const nextConfig: NextConfig = {
  trailingSlash: false,
  // Next's own trailingSlash:false normalization runs inside route
  // resolution, ahead of middleware, and always issues a hardcoded 308 —
  // there's no way to override its status code from middleware.ts as long
  // as it's the one handling the redirect. This flag turns that automatic
  // redirect off so middleware.ts becomes the sole handler and can issue a
  // true 301 instead.
  skipTrailingSlashRedirect: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    if (!canonicalHost || isLocalHost) return [];

    // Canonicalize the www/non-www variant that ISN'T the configured SITE_URL host.
    const wwwHost = canonicalHost.startsWith("www.")
      ? canonicalHost
      : `www.${canonicalHost}`;
    const nonWwwHost = canonicalHost.startsWith("www.")
      ? canonicalHost.slice(4)
      : canonicalHost;
    const alternateHost = canonicalHost === nonWwwHost ? wwwHost : nonWwwHost;

    // Trailing-slash normalization is handled in middleware.ts, not here —
    // Next's own trailingSlash:false setting intercepts and redirects (308)
    // before a rule placed here would ever run, so a 301 override has to
    // happen earlier in the request lifecycle than this config can reach.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: alternateHost }],
        destination: `${SITE_URL}/:path*`,
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
