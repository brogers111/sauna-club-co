import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FitText } from "@/components/home/FitText";
import { GlofoxResizableEmbed } from "@/components/glofox/GlofoxResizableEmbed";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema } from "@/lib/seo/schema";
import { GLOFOX_BRANCH_ID, GLOFOX_URLS } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Buy a Membership",
  description: "Purchase a Sauna Club Co membership or session credit pack — unlimited monthly access or multi-session bundles.",
  path: "/buy-membership",
});

const STEPS = [
  {
    label: "Step 1",
    text: "Choose an unlimited monthly membership or a multi-session credit pack from the list below.",
    border: "border-orange",
    shadow: "shadow-[8px_8px_0_0_var(--color-orange)]",
    accent: "text-orange",
  },
  {
    label: "Step 2",
    text: "Once you've found the option that works for you, sign in or create a free account if this is your first time purchasing with us.",
    border: "border-wood-light",
    shadow: "shadow-[8px_8px_0_0_var(--color-wood-light)]",
    accent: "text-wood-light",
  },
  {
    label: "Step 3",
    text: (
      <>
        Complete checkout to confirm your purchase. If you have any questions along the way,{" "}
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

export default function BuyMembershipPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Buy Membership", path: "/buy-membership" },
        ])}
      />
      <Header overlay />
      <main>
        <section className="h-[70dvh] min-h-90">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/sauna-interior.webp"
              alt="Interior of the wood-paneled sauna at Sauna Club Co"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="relative z-10 flex h-full items-center px-5">
              {/* 61.13% ≈ 50% × (glyph-advance width of "BUY A MEMBERSHIP" ÷
                  "OUR LOCATIONS" in dushick, measured via fontTools) so this
                  H1 renders at the same actual size as the other hero pages
                  on desktop. */}
              <div className="w-full md:mx-auto md:w-[61.13%]">
                <FitText
                  as="h1"
                  className="font-display uppercase text-cream [text-shadow:0_4px_24px_rgb(0_0_0/45%)] text-[clamp(3rem,13vw,17rem)]"
                >
                  Buy a Membership
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
          <SectionHeading as="h2">Memberships &amp; Credit Packs</SectionHeading>
          <p className="mt-4 max-w-2xl text-cream/80">
            Choose an unlimited monthly membership or a multi-session credit pack below. Just booking a single
            session instead?{" "}
            <Link href="/book-session" className="underline hover:text-orange-light">
              Book a session here
            </Link>
            .
          </p>

          <div className="mt-8 rounded-2xl border-2 border-green-light bg-tan-dark p-2 shadow-[8px_8px_0_0_var(--color-green-light)]">
            <div className="overflow-hidden rounded-xl bg-tan-dark p-4">
              <GlofoxResizableEmbed
                id={`glofox_${GLOFOX_BRANCH_ID}_memberships`}
                src={GLOFOX_URLS.buyMembership}
                title="Sauna Club Co membership and credit pack portal"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
