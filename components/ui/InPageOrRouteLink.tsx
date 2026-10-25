import Link from "next/link";
import type { ComponentProps } from "react";

type InPageOrRouteLinkProps = ComponentProps<"a"> & { href: string };

// Same-page "#anchor" links render as a plain <a> so the browser handles
// them natively. Next's <Link> ignores a click whose hash already matches
// the URL (so a second "jump to form" click does nothing) and that stale
// hash state then breaks scroll-to-top on the next route navigation.
export function InPageOrRouteLink({ href, ...props }: InPageOrRouteLinkProps) {
  if (href.startsWith("#")) {
    return <a href={href} {...props} />;
  }
  return <Link href={href} {...props} />;
}
