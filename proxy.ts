import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Redirects any trailing-slash URL (except the homepage, which has no
// non-slash form to redirect to) to its non-trailing-slash equivalent with a
// true 301. Next's own trailingSlash:false setting (next.config.ts) already
// does this automatically, but only as a 308 — the proxy runs earlier in
// the request lifecycle, so this intercepts first and wins.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.length > 1 && pathname.endsWith("/")) {
    // Deliberately NOT request.nextUrl.clone() — NextURL re-applies the
    // framework's own trailing-slash handling when the redirect response is
    // serialized, silently restoring the slash we just stripped. A plain
    // URL built from request.url sidesteps that reprocessing entirely.
    const url = new URL(request.url);
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|favicon.ico|robots.txt|sitemap.xml).*)"],
};
