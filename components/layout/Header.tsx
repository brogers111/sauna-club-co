"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { Button } from "@/components/ui/Button";
import { isActiveNavLink } from "@/lib/nav";
import { MobileNav } from "./MobileNav";

const NAV_LINKS = [
  { href: "/locations", label: "Locations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

type HeaderProps = {
  // Pages with an image/color band directly beneath the header (e.g. a hero)
  // let the nav float in front of it instead of reserving its own space.
  overlay?: boolean;
};

export function Header({ overlay = false }: HeaderProps) {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-8 lg:px-16">
        <div className="relative flex w-full items-center justify-between gap-6 rounded-b-2xl bg-black px-6 py-4 text-tan-light shadow-md md:w-auto md:gap-10 md:px-10">
          <Link href="/" className="flex items-center gap-2" aria-label="Sauna Club Co home">
            <Image
              src="/images/tan-logo.png"
              alt="Sauna Club Co"
              width={500}
              height={262}
              priority
              className="h-13 w-auto"
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const active = isActiveNavLink(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-md hover:text-orange ${active ? "font-medium" : "font-normal"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Wrapped rather than passed as a className: Button/BookNowButton
                already hardcode "inline-flex" in their own base classes, which
                ties with (and can silently beat) a `hidden` override applied
                to the same element depending on Tailwind's generated rule
                order. Hiding the wrapper instead avoids the conflict entirely. */}
            <div className="hidden md:block">
              <Button href="/account" variant="muted">
                My Account
              </Button>
            </div>
            <div className="hidden md:block">
              <BookNowButton className="text-black!" />
            </div>
            <MobileNav />
          </div>
        </div>
      </header>
      {overlay ? null : (
        <div className="h-18 md:h-21" aria-hidden="true" />
      )}
    </>
  );
}
