"use client";

import { useSyncExternalStore } from "react";

// No-op subscription: the year doesn't change while the page is open, so
// there's nothing to listen for — we only need the client/server snapshot
// split useSyncExternalStore provides.
function subscribe() {
  return () => {};
}

function getSnapshot() {
  return new Date().getFullYear();
}

// Static pages are prerendered at build time, so a plain `new Date()` call
// server-side would freeze the year at whatever it was on the last deploy.
// Rendering nothing for the server snapshot and filling the year in from
// the visitor's own clock keeps this correct indefinitely without needing
// a rebuild every January.
function getServerSnapshot() {
  return null;
}

export function CopyrightNotice() {
  const year = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <p className="pb-4 text-center font-sans text-sm text-black/50">
      Sauna Club Co LLC{year !== null ? `, © ${year}` : ""}
    </p>
  );
}
