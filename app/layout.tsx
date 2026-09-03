import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { fredoka, dushick } from "./fonts";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { GTM_ID, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Sauna & Cold Plunge Studio in Wheat Ridge, CO`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fredoka.variable} ${dushick.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-tan-light text-cream">
        {/* Required to sit immediately after the opening <body> tag per
            Google's own installation instructions — the JS-based tag above
            (via GoogleTagManager) handles tracking for everyone else; this
            is only the no-JS fallback. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
      <GoogleTagManager gtmId={GTM_ID} />
    </html>
  );
}
