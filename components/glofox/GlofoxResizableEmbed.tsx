"use client";

import Script from "next/script";
import { GLOFOX_IFRAME_RESIZER_SRC } from "@/lib/site-config";

declare global {
  interface Window {
    iFrameResize?: (options: Record<string, unknown>, selector: string) => void;
  }
}

type GlofoxResizableEmbedProps = {
  id: string;
  src: string;
  title: string;
  minHeight?: number;
};

// For Glofox embeds that report their own content height back to the page
// (lead-register, login/register) instead of rendering at a fixed height —
// these start at height=0 and grow via iframe-resizer once the child page
// posts its size.
export function GlofoxResizableEmbed({ id, src, title, minHeight = 300 }: GlofoxResizableEmbedProps) {
  function initResize() {
    window.iFrameResize?.(
      {
        log: false,
        checkOrigin: false,
        tolerance: 10,
        sizeHeight: true,
        heightCalculationMethod: "lowestElement",
        minHeight,
        scrolling: "auto",
      },
      `#${id}`,
    );
  }

  return (
    <div>
      {/* onReady alone covers both the script's first load and every later
          mount that reuses the already-loaded script (e.g. navigating here
          after NewsletterSection loaded it elsewhere) — pairing it with
          onLoad double-fired initResize() on the same iframe id, which
          iframe-resizer logged as "already setup" and then lost track of
          on the next resize/focus check. */}
      <Script src={GLOFOX_IFRAME_RESIZER_SRC} strategy="afterInteractive" onReady={initResize} />
      {/* No `sandbox` here (unlike GlofoxPortalFrame) — this embed drives
          JS-based routing/modal behavior (e.g. the ?login hash triggering
          Glofox's login modal instead of the plain classes list), and
          sandbox restrictions are the likely reason that stopped working:
          sandboxed iframes have known compatibility issues with SPA
          hash-routing and storage-dependent logic like this. Matches
          Glofox's own provided embed snippet, which never specified one. */}
      <iframe
        id={id}
        src={src}
        title={title}
        width="100%"
        height={0}
        scrolling="no"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="payment"
        style={{ border: 0, display: "block", width: "100%" }}
      />
      <div className="flex justify-center pt-2 font-sans text-xs text-cream/50">
        powered by
        <a
          href="https://www.glofox.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 font-bold hover:text-orange"
        >
          Glofox
        </a>
      </div>
    </div>
  );
}
