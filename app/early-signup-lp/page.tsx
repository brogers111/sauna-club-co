import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ServicesCarousel } from "@/components/home/ServicesCarousel";
import { PricingSection } from "@/components/home/PricingSection";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { DirectionsAndHours } from "@/components/locations/DirectionsAndHours";
import { MembershipCta } from "@/components/locations/MembershipCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getLocationBySlug } from "@/lib/data/locations";
import { buildLocationServices } from "@/lib/data/location-services";
import { buildMetadata } from "@/lib/seo/metadata";
import type { Location } from "@/lib/data/locations";

const SIGNUP_ID = "early-signup";

const PRE_OPENING_DIRECTIONS =
  "Coming early 2027, Sauna Club Co will be located just off I-70. You can take the Kipling exit south, hang a left at Winchell's Donuts, and keep going past Dairy Queen. You'll spot us on the left, just before New Image Brewing Company.";

// Future-tense carousel copy, since the club hasn't opened yet. Images and
// headings still come from the shared location services.
function buildUpcomingServices(location: Location) {
  const nearestArea = location.nearbyAreas[0];
  const paragraphs: Record<string, string> = {
    "cold-plunge": `Our ${location.name} cold plunge tubs will be precision-chilled for real contrast therapy, the practice of cycling between hot and cold. Contrast therapy promotes flushing of cardiovascular and lymphatic systems while also acting to sharpen focus, speed muscle recovery, and invigorate your entire body. If you're searching for a cold plunge near ${nearestArea} or ${location.name}, this will be where locals come to reset.`,
    sauna: `Sink into the heat at ${location.name}'s soon-to-be go-to sauna. Our custom-built saunas will be designed for a deep, consistent warmth that helps you sweat out stress, loosen tight muscles, and unwind after a long day. This will be a sauna experience ${nearestArea}-area locals will keep coming back for.`,
    "hot-mineral-bath": `Ease into our ${location.name} mineral bath to warm back up, soothe your joints, and elevate your complexion. Delicate minerals and magnesium will soften your skin as you ease into a deep sense of relaxation, calming you from head to toe. This will be the perfect way to wind down every visit.`,
  };

  return buildLocationServices(location).map((service) => ({
    ...service,
    paragraph: paragraphs[service.slug] ?? service.paragraph,
  }));
}

// Paid-traffic landing page: kept out of search results and the sitemap.
export const metadata: Metadata = {
  ...buildMetadata({
    title: "Early Signup Discounts",
    description:
      "Join the Sauna Club Co waitlist and receive discounts on memberships & session credit packs once we open in early 2027.",
    path: "/early-signup-lp",
  }),
  robots: { index: false, follow: false },
};

export default function EarlySignupLandingPage() {
  const location = getLocationBySlug("wheat-ridge");
  if (!location) notFound();

  return (
    <>
      <Header overlay />
      <main>
        {/* Homepage hero image with the location page's hero layout and type sizes. */}
        <section className="relative h-[75dvh] min-h-90 overflow-hidden">
          <Image
            src="/images/hero-image.webp"
            alt="Person relaxing in a steaming cedar sauna at Sauna Club Co"
            fill
            preload
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Centered 10% of the image height below its midpoint. */}
          <h1 className="absolute inset-x-0 top-[60%] z-10 -translate-y-1/2 px-5 text-center font-display uppercase text-cream [text-shadow:0_4px_24px_rgb(0_0_0/45%)]">
            <span className="block text-6xl tracking-wide sm:text-7xl md:text-9xl">Plan Your Unwind</span>
            <span className="mt-2 block text-2xl tracking-wide sm:text-3xl md:text-5xl">In Wheat Ridge, CO</span>
          </h1>
        </section>

        {/* Sections drop their own vertical padding here so every gap on
            this page is the same 100px, on mobile and desktop. No bottom
            padding: the footer brings its own (96px) top margin. */}
        <div className="flex flex-col gap-25 pt-25">
          <NewsletterSection
            id={SIGNUP_ID}
            heading="Discounts on Early Signups"
            description="Join the Sauna Club Co waitlist and receive discount codes closer to our opening date in early 2027!"
            className="scroll-mt-28"
          />

          <section className="mx-auto w-full max-w-6xl px-6">
            <SectionHeading as="h2" className="text-center">Features To Expect</SectionHeading>
            <div className="mt-4">
              <ServicesCarousel services={buildUpcomingServices(location)} />
            </div>
          </section>

          <PricingSection ctaLabel="Get Discount" sessionHref={`#${SIGNUP_ID}`} className="" />

          <DirectionsAndHours
            location={location}
            hoursLabel="Weekly Hours After Opening"
            directions={PRE_OPENING_DIRECTIONS}
            className=""
          />

          <MembershipCta heading="Purchase early membership for a discount" buttonLabel="Get Discounts" href="/buy-membership" />

          <GalleryTeaser cta={{ label: "Signup Early", href: `#${SIGNUP_ID}` }} className="w-full" />
        </div>
      </main>
      <Footer />
    </>
  );
}
