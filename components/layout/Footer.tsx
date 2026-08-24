import Image from "next/image";
import Link from "next/link";
import { CopyrightNotice } from "./CopyrightNotice";
import { NewsletterForm } from "./NewsletterForm";
import { SOCIAL_LINKS } from "@/lib/site-config";

// Column-major order (grid-flow-col): first 4 fill column 1 top-to-bottom,
// next 4 fill column 2, producing 4 rows of 2 columns.
const FOOTER_LINKS = [
  { href: "/locations", label: "Locations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/book", label: "Book" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/sitemap.xml", label: "Sitemap" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms & Conditions" },
];

// Desktop-only: appended after FOOTER_LINKS in the same
// grid-flow-col/grid-rows-4 grid, so these naturally become a third
// column — a "Follow Us:" heading plus the 3 platforms, spelled out.
const SOCIAL_LINK_ITEMS = [
  { key: "instagram", href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { key: "facebook", href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { key: "tiktok", href: SOCIAL_LINKS.tiktok, label: "TikTok" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 21v-7h2.5l.5-3H14V9c0-.83.5-1.5 1.5-1.5H17V4.2c-.3 0-1.3-.2-2.4-.2C12.3 4 11 5.7 11 8.2V11H8.5v3H11v7h3Z"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 3v10.8a3.2 3.2 0 1 1-3.2-3.2M15.5 3a5 5 0 0 0 4.5 4.7"
      />
    </svg>
  );
}

// Mobile-only: icons instead of spelled-out text, placed under the
// newsletter subtext rather than mixed into the link grid.
const SOCIAL_ICON_ITEMS = [
  { key: "instagram", href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: InstagramIcon },
  { key: "facebook", href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: FacebookIcon },
  { key: "tiktok", href: SOCIAL_LINKS.tiktok, label: "TikTok", Icon: TikTokIcon },
];

export function Footer() {
  return (
    <footer className="mx-6 mt-24 rounded-t-3xl bg-tan-light text-black shadow-[0_-8px_24px_-6px_rgba(0,0,0,0.15)]">
      {/* Mobile layout — separate from desktop's since the two need
          genuinely different structure (icons vs. spelled-out social links
          in different positions), not just responsive tweaks to one shared
          layout. */}
      <div className="flex flex-col items-center gap-10 px-8 py-12 md:hidden">
        <nav aria-label="Footer" className="grid grid-flow-col grid-rows-4 gap-x-10 gap-y-6 text-center">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-md font-normal hover:text-orange">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/" aria-label="Sauna Club Co home">
          <Image src="/images/full-logo-black.png" alt="Sauna Club Co" width={320} height={168} className="h-16 w-auto" />
        </Link>

        <div className="flex w-full flex-col gap-3">
          <h3 className="font-display text-2xl uppercase tracking-wide">Stay Up To Date</h3>
          <NewsletterForm />
          <p className="max-w-xs text-sm">
            Subscribe to follow along with our latest updates and events or give us a follow on social media!
          </p>
          <div className="flex items-center justify-center gap-10 pt-2">
            {SOCIAL_ICON_ITEMS.map(({ key, href, label, Icon }) => (
              <Link
                key={key}
                href={href || "#"}
                aria-label={label}
                className="hover:text-orange"
                target={href ? "_blank" : undefined}
                rel={href ? "noopener noreferrer" : undefined}
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop layout — unchanged from before the mobile split. */}
      <div className="relative mx-auto hidden max-w-6xl items-start justify-between px-4 py-12 md:flex">
        <nav aria-label="Footer" className="grid grid-flow-col grid-rows-4 gap-x-10 gap-y-6">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-md font-normal hover:text-orange">
              {link.label}
            </Link>
          ))}
          <span className="text-md font-bold">Follow Us:</span>
          {SOCIAL_LINK_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href || "#"}
              className="text-md font-normal hover:text-orange"
              target={item.href ? "_blank" : undefined}
              rel={item.href ? "noopener noreferrer" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Absolutely centered on the whole footer (not just this flex slot). */}
        <Link
          href="/"
          aria-label="Sauna Club Co home"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image src="/images/full-logo-black.png" alt="Sauna Club Co" width={320} height={168} className="h-20 w-auto" />
        </Link>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-2xl uppercase tracking-wide">Stay Up To Date</h3>
          <NewsletterForm />
          <p className="max-w-xs text-sm">
            Subscribe to follow along with our latest updates and events or give us a follow on social media!
          </p>
        </div>
      </div>

      <CopyrightNotice />
    </footer>
  );
}
