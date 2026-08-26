import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FitText } from "@/components/home/FitText";
import { GlofoxPortalFrame } from "@/components/glofox/GlofoxPortalFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema } from "@/lib/seo/schema";
import { GLOFOX_URLS } from "@/lib/site-config";

const STEPS = [
  {
    label: "Step 1",
    text: "Pick an available time from the list below to book your hour-long session.",
    border: "border-orange",
    shadow: "shadow-[8px_8px_0_0_var(--color-orange)]",
    accent: "text-orange",
  },
  {
    label: "Step 2",
    text: "Once you've found a time that works for you, sign in or create a free account if this is your first time booking with us.",
    border: "border-wood-light",
    shadow: "shadow-[8px_8px_0_0_var(--color-wood-light)]",
    accent: "text-wood-light",
  },
  {
    label: "Step 3",
    text: (
      <>
        Complete checkout to confirm your booking. If you have any questions along the way,{" "}
        <Link href="/contact" className="underline hover:text-orange-light">
          contact our team
        </Link>
        .
      </>
    ),
    border: "border-green-light",
    shadow: "shadow-[8px_8px_0_0_var(--color-green-light)]",
    accent: "text-green-light",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Book a Session",
  description: "Book a sauna, cold plunge, or hot tub session at Sauna Club Co.",
  path: "/book-session",
});

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Book Session", path: "/book-session" },
        ])}
      />
      <Header overlay />
      <main>
        <section className="h-[70dvh] min-h-90">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/book-hero.webp"
              alt="Empty cedar sauna benches with ambient backlighting at Sauna Club Co"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="relative z-10 flex h-full items-center px-5">
              {/* 50.91% ≈ 50% × (glyph-advance width of "BOOK A SESSION" ÷
                  "OUR LOCATIONS" in dushick, measured via fontTools) so this
                  H1 renders at the same actual size as the other hero pages
                  on desktop. */}
              <div className="w-full md:mx-auto md:w-[50.91%]">
                <FitText
                  as="h1"
                  className="font-display uppercase text-cream [text-shadow:0_4px_24px_rgb(0_0_0/45%)] text-[clamp(3rem,13vw,17rem)]"
                >
                  Book a Session
                </FitText>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading as="h2">How It Works</SectionHeading>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <div
                key={step.label}
                className={`flex flex-col gap-2 rounded-2xl border-2 bg-tan-dark px-6 py-6 ${step.border} ${step.shadow}`}
              >
                <h3 className={`font-display text-4xl uppercase tracking-wide ${step.accent}`}>{step.label}</h3>
                <p className="text-base text-cream/80">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-16">
          <SectionHeading as="h2">Available Sessions</SectionHeading>
          <p className="mt-4 max-w-2xl text-cream/80">
            Pick an available time below to book your hour-long session. Looking to buy a membership or credit pack
            instead?{" "}
            <Link href="/buy-membership" className="underline hover:text-orange-light">
              Buy a membership here
            </Link>
            .
          </p>

          <div className="mt-8 rounded-2xl border-2 border-green-light bg-tan-dark p-2 shadow-[8px_8px_0_0_var(--color-green-light)]">
            <div className="overflow-hidden rounded-xl">
              <GlofoxPortalFrame src={GLOFOX_URLS.bookSessions} title="Sauna Club Co booking portal" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
