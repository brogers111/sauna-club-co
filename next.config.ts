import type { NextConfig } from "next";
import { GLOFOX_PORTAL_ORIGIN } from "./lib/site-config";

const IFRAME_RESIZER_CDN = "https://cdnjs.cloudflare.com";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const canonicalHost = SITE_URL ? new URL(SITE_URL).hostname : null;
const isLocalHost = canonicalHost === "localhost";
const isDev = process.env.NODE_ENV !== "production";
const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${IFRAME_RESIZER_CDN}${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  `frame-src ${GLOFOX_PORTAL_ORIGIN}`,
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const nextConfig: NextConfig = {
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 1080, 1280, 1920],
    imageSizes: [32, 64, 96, 128, 256],
  },
  async redirects() {
    if (!canonicalHost || isLocalHost) return [];

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
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: CSP },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
