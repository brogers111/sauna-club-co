import Image from "next/image";
import Link from "next/link";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { MobileNav } from "./MobileNav";

const NAV_LINKS = [
  { href: "/locations", label: "Locations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-tan-light/95 backdrop-blur supports-backdrop-filter:bg-tan-light/80">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label={"Sauna Club Co home"}>
          <Image
            src="/images/full-logo-black.png"
            alt="Sauna Club Co"
            width={160}
            height={84}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-green-dark hover:text-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/account"
            className="hidden text-sm font-medium uppercase tracking-wide text-green-dark hover:text-orange md:inline"
          >
            My Account
          </Link>
          <BookNowButton />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
