"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { createPortal } from "react-dom";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { Button } from "@/components/ui/Button";
import { isActiveNavLink } from "@/lib/nav";

const CLOSE_ANIMATION_MS = 300;

const NAV_LINKS = [
  { href: "/locations", label: "Locations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  function openMenu() {
    setOpen(true);
    // Mount at translate-y(-100%) first, then flip to 0 a frame later so the
    // browser actually has a "closed" frame to transition from — otherwise
    // it would just appear instantly at its open position.
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }

  function closeMenu() {
    setVisible(false);
    // Delay the actual unmount until the retract transition finishes, so it
    // slides back up instead of just vanishing.
    window.setTimeout(() => setOpen(false), CLOSE_ANIMATION_MS);
  }

  const dropdown = (
    // Sits behind the header (lower z-index) as its own rounded-bottom,
    // shadowed card — content-sized, not full screen — so the header's card
    // visibly overlaps the top of this one instead of the two blending into
    // one flat shape. pt-28 pushes the links down clear of the header bar.
    // Same horizontal inset as the header bar (inset-x-4 sm:inset-x-8) so it
    // reads as the same card continuing downward, not a separate full-bleed
    // panel.
    //
    // Portaled to <body> rather than rendered inline: it's a *descendant* of
    // the header in the component tree, so without a portal its z-index
    // would only ever be compared against the header's own internal
    // children (which paint above it regardless of z-index, since it's the
    // only positioned element among plain-flow siblings) — never against
    // the header itself. Portaling makes it a true sibling of the header at
    // the body level, where a plain z-40-vs-z-50 comparison applies.
    <nav
      id="mobile-nav-menu"
      aria-label="Primary"
      className={`fixed inset-x-4 top-0 z-40 rounded-b-2xl bg-tan-dark px-6 pt-28 pb-10 shadow-md transition-transform duration-300 ease-out sm:inset-x-8 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul className="flex flex-col items-center gap-4">
        {NAV_LINKS.map((link) => {
          const active = isActiveNavLink(pathname, link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={`block text-center text-sm text-cream ${active ? "font-medium" : "font-normal"}`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex flex-col gap-3">
        <Button href="/buy-membership" variant="secondary" className="w-full text-tan-dark!">
          Buy Membership
        </Button>
        <BookNowButton label="Book Session" className="w-full text-tan-dark!" />
        <Button href="/profile" variant="muted" className="w-full border-2 border-cream text-cream!">
          Profile
        </Button>
      </div>
    </nav>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => (open ? closeMenu() : openMenu())}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 items-center justify-center rounded-full text-cream"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {/* No SSR/mount guard needed: `open` starts false, so this can only
          become true in response to a click, by which point `document`
          is guaranteed to exist. */}
      {open ? createPortal(dropdown, document.body) : null}
    </div>
  );
}
