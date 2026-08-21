import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { NewsletterForm } from "./NewsletterForm";
import { SOCIAL_LINKS } from "@/lib/site-config";

const FOOTER_LINKS = [
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/sitemap.xml", label: "Sitemap" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
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

const SOCIAL_ICONS: { key: string; href: string; label: string; Icon: ComponentType }[] = [
  { key: "instagram", href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: InstagramIcon },
  { key: "facebook", href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: FacebookIcon },
  { key: "tiktok", href: SOCIAL_LINKS.tiktok, label: "TikTok", Icon: TikTokIcon },
];

export function Footer() {
  return (
    <footer className="mx-6 mt-24 rounded-t-3xl bg-tan-light text-black shadow-[0_-8px_24px_-6px_rgba(0,0,0,0.15)]">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="grid grid-flow-col grid-rows-3 items-center gap-x-10 gap-y-6">
          {SOCIAL_ICONS.map(({ key, href, label, Icon }) => (
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

          <nav aria-label="Footer" className="contents">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-md font-normal hover:text-orange">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Absolutely centered on the whole footer (not just this flex slot) at
            desktop widths, so it stays centered regardless of how wide the nav
            and newsletter columns are; falls back to normal in-flow centering
            when the layout stacks on mobile. */}
        {/* Padding lives on this wrapper, not the image itself — Tailwind's
            border-box reset means padding on an element with an explicit
            fixed height (h-16) would shrink its content box and squash the
            image, instead of just adding space around it. */}
        <div className="py-6 md:py-0">
          <Image
            src="/images/full-logo-black.png"
            alt="Sauna Club Co"
            width={320}
            height={168}
            className="h-16 w-auto md:absolute md:top-1/2 md:left-1/2 md:h-20 md:-translate-x-1/2 md:-translate-y-1/2"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-display text-2xl uppercase tracking-wide">Stay Up To Date</h4>
          <NewsletterForm />
          <p className="max-w-xs text-sm">
            Subscribe to follow along with our latest updates, news, events, and blogs or give us a follow on social
            media!
          </p>
        </div>
      </div>
    </footer>
  );
}
