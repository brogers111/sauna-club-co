"use client";

import { useEffect, useRef, useState } from "react";
import { GLOFOX_BRANCH_ID, GLOFOX_PORTAL_ORIGIN } from "@/lib/site-config";

const LOAD_TIMEOUT_MS = 12000;

const PORTAL_SRC = `${GLOFOX_PORTAL_ORIGIN}/portal/#/branch/${GLOFOX_BRANCH_ID}/classes-list-view?header=classes,memberships`;

export function BookingIframe() {
  const [status, setStatus] = useState<"loading" | "loaded" | "timeout">("loading");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setStatus((current) => (current === "loading" ? "timeout" : current));
    }, LOAD_TIMEOUT_MS);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleLoad() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setStatus("loaded");
  }

  return (
    <div className="relative h-[80vh] w-full">
      {status !== "loaded" ? (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-tan-light px-6 text-center">
          {status === "loading" ? (
            <>
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-light/30 border-t-green-light" />
              <p className="font-sans text-sm text-black/60">Loading the booking portal…</p>
            </>
          ) : (
            <>
              <p className="font-sans text-sm text-black/80">
                The booking portal is taking longer than expected to load. This can happen with an ad blocker or a
                slow connection.
              </p>
              <a
                href={PORTAL_SRC}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-orange px-6 py-3 text-sm font-medium text-tan-light transition hover:opacity-80"
              >
                Open Booking Portal in a New Tab
              </a>
            </>
          )}
        </div>
      ) : null}

      {/* allow-scripts + allow-same-origin together let Glofox's portal
          remove its own sandbox restrictions via JS (a known sandbox
          caveat) — but both are required for a same-origin session/auth
          app like this to function at all, and Glofox is a trusted vendor,
          not untrusted user content, so the tradeoff is standard practice
          for embedding third-party SaaS widgets. allow-popups(+escape) is
          for any OAuth/payment popups; top-navigation is gated to user
          activation only, so the portal can't redirect the whole tab on
          its own. */}
      <iframe
        src={PORTAL_SRC}
        title="Sauna Club Co booking and membership portal"
        onLoad={handleLoad}
        referrerPolicy="strict-origin-when-cross-origin"
        allow="payment"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        className="h-full w-full"
        style={{ border: 0, display: "block" }}
      />
    </div>
  );
}
