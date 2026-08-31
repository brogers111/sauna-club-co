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
        <div className="relative flex w-full items-center justify-between gap-6 rounded-b-2xl bg-tan-dark px-6 py-4 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.9)] md:w-auto md:gap-10 md:px-10">
          <Link href="/" className="flex items-center gap-2" aria-label="Sauna Club Co home">
            <Image
              src="/images/tan-logo.png"
              alt="Sauna Club Co"
              width={200}
              height={104}
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
                  className={`text-md hover:text-orange-light ${active ? "font-medium" : "font-normal"}`}
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
              <Button href="/buy-membership" variant="secondary" className="text-tan-light!">
                Buy Membership
              </Button>
            </div>
            <div className="hidden md:block">
              <BookNowButton label="Book Session" className="text-tan-light!" />
            </div>
            <Link
              href="/profile"
              aria-label="Profile"
              className="hidden h-11 w-11 items-center justify-center rounded-xl border-2 border-cream text-cream transition hover:bg-cream hover:text-tan-dark md:flex"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V20H4ZM6 18H18V17.2C18 17.0167 17.9542 16.85 17.8625 16.7C17.7708 16.55 17.65 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5625 14.775 15.3375C13.8583 15.1125 12.9333 15 12 15C11.0667 15 10.1417 15.1125 9.225 15.3375C8.30833 15.5625 7.4 15.9 6.5 16.35C6.35 16.4333 6.22917 16.55 6.1375 16.7C6.04583 16.85 6 17.0167 6 17.2V18ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
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
