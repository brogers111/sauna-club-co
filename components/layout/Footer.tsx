import Image from "next/image";
import Link from "next/link";
import { CopyrightNotice } from "./CopyrightNotice";
import { SOCIAL_LINKS } from "@/lib/site-config";

type FooterLink = { href: string; label: string; external?: boolean };

const NAVIGATION_LINKS: FooterLink[] = [
  { href: "/locations", label: "Locations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

const JOIN_US_LINKS: FooterLink[] = [
  { href: "/login", label: "Profile" },
  { href: "/book", label: "Book Session" },
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

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
      <span className="text-md font-bold">{title}</span>
      <nav className="flex flex-col items-center gap-2 md:items-start">
        {links.map((link) => {
          // A plain <a>, not next/link's <Link> — /sitemap.xml is a route
          // handler that serves raw XML, not an app page, so Link's
          // automatic RSC prefetch (?_rsc=...) 404s against it.
          if (link.href.endsWith(".xml")) {
            return (
              <a key={link.href} href={link.href} className="text-md font-normal hover:text-orange">
                {link.label}
              </a>
            );
          }

          return (
            <Link
              key={link.label}
              href={link.href || "#"}
              className="text-md font-normal hover:text-orange"
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
  return (
    <footer className="mx-6 mt-24 rounded-t-3xl bg-tan-dark text-cream shadow-[0_-12px_30px_-8px_rgba(0,0,0,0.9)]">
      {/* flex-col stacks Navigation, Join Us, Logo, Learn, Follow Us in that
          order on mobile; md:flex-row lays the same five out left to right,
          so the logo sits in the middle either way with no separate
          mobile/desktop markup needed. */}
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-8 py-12 md:flex-row md:items-start md:justify-between md:px-4">
        <FooterColumn title="Navigation:" links={NAVIGATION_LINKS} />
        <FooterColumn title="Join Us:" links={JOIN_US_LINKS} />

        <Link href="/" aria-label="Sauna Club Co home" className="md:self-center">
          <Image src="/images/full-logo-white.png" alt="Sauna Club Co" width={320} height={168} loading="eager" className="h-16 w-auto md:h-20" />
        </Link>

        <FooterColumn title="Learn:" links={LEARN_LINKS} />
        <FooterColumn title="Follow Us:" links={FOLLOW_US_LINKS} />
      </div>

      <CopyrightNotice />
    </footer>
  );
}
