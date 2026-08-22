import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FitText } from "@/components/home/FitText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema } from "@/lib/seo/schema";

const STEPS = [
  {
    label: "Step 1",
    text: (
      <>
        Under the <strong>Classes</strong> tab below, pick an available time to book your session. Under the{" "}
        <strong>Memberships</strong> tab, purchase multi-session bundles or monthly memberships.
      </>
    ),
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
        Complete checkout to confirm your booking or purchase. If you have any questions along the way,{" "}
        <Link href="/contact" className="underline hover:text-wood-dark">
          contact our team
        </Link>
        .
      </>
    ),
    border: "border-wood-dark",
    shadow: "shadow-[8px_8px_0_0_var(--color-wood-dark)]",
    accent: "text-wood-dark",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Book a Session",
  description: "Book a recovery session at Sauna Club Co or select from our wide range of memberships available.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Book Now", path: "/book" },
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
              <div className="w-full md:mx-auto md:w-[34.3%]">
                <FitText
                  as="h1"
                  className="font-display uppercase text-tan-light [text-shadow:0_4px_24px_rgb(0_0_0/45%)] text-[clamp(3rem,13vw,17rem)]"
                >
                  Book Now
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
                className={`flex flex-col gap-2 rounded-2xl border-2 bg-white px-6 py-6 ${step.border} ${step.shadow}`}
              >
                <h3 className={`font-display text-4xl uppercase tracking-wide ${step.accent}`}>{step.label}</h3>
                <p className="text-base text-black/80">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border-2 border-green-light bg-tan-light p-2 shadow-[8px_8px_0_0_var(--color-green-light)]">
            <div className="overflow-hidden rounded-xl">
              <iframe
                src="https://app.glofox.com/portal/#/branch/6a7a099409481f1d490ae9e4/classes-list-view?header=classes,memberships"
                title="Sauna Club Co booking and membership portal"
                className="h-[80vh] w-full"
                style={{ border: 0, display: "block" }}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
