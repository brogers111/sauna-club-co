import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

// Explicit noindex, even though Next.js also injects its own automatic
// noindex tag for not-found responses: without this, the page would
// otherwise inherit the root layout's sitewide `index, follow`, producing
// two *contradicting* robots tags instead of two agreeing ones.
export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center">
        <Image
          src="/images/icon-black.png"
          alt=""
          aria-hidden="true"
          width={64}
          height={52}
          className="h-14 w-auto"
        />
        <h1 className="mt-6 font-display text-6xl uppercase tracking-wide text-black md:text-7xl">
          Lost in the Steam
        </h1>
        <p className="mt-6 max-w-md text-black/80">
          Looks like you took a wrong turn somewhere between the sauna and the cold plunge — this page doesn&apos;t
          exist. Let&apos;s get you back to somewhere a little warmer.
        </p>
        <Button href="/" className="mt-8">
          Back to Home
        </Button>
      </main>
      <Footer />
    </>
  );
}
