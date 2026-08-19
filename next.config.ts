import type { NextConfig } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const canonicalHost = SITE_URL ? new URL(SITE_URL).hostname : null;
const isLocalHost = canonicalHost === "localhost";

const nextConfig: NextConfig = {
  trailingSlash: false,
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

    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: alternateHost }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
