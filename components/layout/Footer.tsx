import Image from "next/image";
import Link from "next/link";
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

export function Footer() {
  return (
    <footer className="mt-24 bg-green-dark text-tan-light">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <nav aria-label="Footer" className="flex flex-col gap-3">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm uppercase tracking-wide hover:text-orange">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-4">
          <Image
            src="/images/full-logo-white.png"
            alt="Sauna Club Co"
            width={160}
            height={84}
            className="h-12 w-auto"
          />
          {SOCIAL_LINKS.instagram ? (
            <Link
              href={SOCIAL_LINKS.instagram}
              className="text-sm uppercase tracking-wide hover:text-orange"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          ) : null}
        </div>

        <div className="flex flex-col gap-3">
          <p className="max-w-xs text-sm">
            Subscribe to follow along with our latest updates, news, events, and blogs or give us a follow on
            social media!
          </p>
          <NewsletterForm />
        </div>
      </div>
    </footer>
  );
}
