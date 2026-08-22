import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FitText } from "@/components/home/FitText";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { PricingSection } from "@/components/home/PricingSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Pricing & Memberships",
  description: "Explore session and membership pricing for sauna, cold plunge, and hot tub access at Sauna Club Co.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <Header overlay />
      <main>
        <section className="h-[70dvh] min-h-90">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/pricing-hero.webp"
              alt="Interior of a Sauna Club Co wellness studio"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="relative z-10 flex h-full items-center px-5">
              {/* FitText always scales text to exactly fill its container's
                  width, so matching /locations' "Our Locations" font size
                  (rendered in a md:w-1/2 container) means accounting for
                  "Our Pricing" being a narrower string in this font. 39.4% ≈
                  50% × (glyph-advance width of "OUR PRICING" ÷ "OUR
                  LOCATIONS" in dushick, measured via fontTools) so both
                  headings render at the same actual size on desktop. */}
              <div className="w-full md:mx-auto md:w-[39.4%]">
                <FitText
                  as="h1"
                  className="font-display uppercase text-tan-light [text-shadow:0_4px_24px_rgb(0_0_0/45%)] text-[clamp(3rem,13vw,17rem)]"
                >
                  Our Pricing
                </FitText>
              </div>
            </div>
          </div>
        </section>

        <PricingSection />

        <GalleryTeaser />
      </main>
      <Footer />
    </>
  );
}
