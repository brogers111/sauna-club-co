"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CopyrightNotice } from "./CopyrightNotice";
import { isActiveNavLink } from "@/lib/nav";
import { SOCIAL_LINKS } from "@/lib/site-config";

type FooterLink = { href: string; label: string; external?: boolean };

const NAVIGATION_LINKS: FooterLink[] = [
  { href: "/locations", label: "Locations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

const JOIN_US_LINKS: FooterLink[] = [
  { href: "/profile", label: "Profile" },
  { href: "/book-session", label: "Book Session" },
  { href: "/buy-membership", label: "Buy Membership" },
];

const LEARN_LINKS: FooterLink[] = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms & Conditions" },
];

const FOLLOW_US_LINKS: FooterLink[] = [
  { href: SOCIAL_LINKS.instagram, label: "Instagram", external: true },
  { href: SOCIAL_LINKS.facebook, label: "Facebook", external: true },
  { href: SOCIAL_LINKS.tiktok, label: "TikTok", external: true },
];

function FooterColumn({ title, links, pathname }: { title: string; links: FooterLink[]; pathname: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
      <span className="text-md font-bold">{title}</span>
      <nav className="flex flex-col items-center gap-2 md:items-start">
        {links.map((link) => {
          // External links (social) can never be the "current page" — and
          // an empty href (social links with no URL set yet) would
          // otherwise false-positive as active, since every pathname
          // starts with "" + "/".
          const active = !link.external && isActiveNavLink(pathname, link.href);

          // A plain <a>, not next/link's <Link> — /sitemap.xml is a route
          // handler that serves raw XML, not an app page, so Link's
          // automatic RSC prefetch (?_rsc=...) 404s against it.
          if (link.href.endsWith(".xml")) {
            return (
              <a key={link.href} href={link.href} className="text-md font-normal hover:text-orange-light">
                {link.label}
              </a>
            );
          }

          return (
            <Link
              key={link.label}
              href={link.href || "#"}
              aria-current={active ? "page" : undefined}
              className={`text-md hover:text-orange-light ${active ? "font-medium" : "font-normal"}`}
              target={link.external && link.href ? "_blank" : undefined}
              rel={link.external && link.href ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="mx-6 mt-24 rounded-t-3xl bg-tan-dark text-cream shadow-[0_-12px_30px_-8px_rgba(0,0,0,0.9)]">
      {/* flex-col stacks Navigation, Join Us, Logo, Learn, Follow Us in that
          order on mobile; md:flex-row lays the same five out left to right,
          so the logo sits in the middle either way with no separate
          mobile/desktop markup needed. */}
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-8 py-12 md:flex-row md:items-start md:justify-between md:px-4">
        <FooterColumn title="Explore:" links={NAVIGATION_LINKS} pathname={pathname} />
        <FooterColumn title="Get Started:" links={JOIN_US_LINKS} pathname={pathname} />

        <Link href="/" aria-label="Sauna Club Co home" className="md:self-center">
          <Image src="/images/tan-logo.png" alt="Sauna Club Co" width={320} height={168} loading="eager" className="h-16 w-auto md:h-20" />
        </Link>

        <FooterColumn title="Good to Know:" links={LEARN_LINKS} pathname={pathname} />
        <FooterColumn title="Say Hi:" links={FOLLOW_US_LINKS} pathname={pathname} />
      </div>

      <CopyrightNotice />
    </footer>
  );
}
