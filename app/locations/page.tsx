import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FitText } from "@/components/home/FitText";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Badge } from "@/components/ui/Badge";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { locations } from "@/lib/data/locations";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Sauna & Cold Plunge Locations",
  description: "Find a Sauna Club Co studio near you. Enjoy the comfort, relaxation, and socialization our club has to offer!",
  path: "/locations",
});

export default function LocationsIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ])}
      />
      <Header overlay />
      <main>
        <section className="h-[70dvh] min-h-90">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/locations-hero.webp"
              alt="Exterior of a Sauna Club Co wellness studio"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="relative z-10 flex h-full items-center px-5">
              {/* Constraining the container to half width on desktop halves
                  the font size FitText solves for, since it always scales the
                  text to fill exactly 100% of its container's width. */}
              <div className="w-full md:mx-auto md:w-1/2">
                <FitText
                  as="h1"
                  className="font-display uppercase text-cream [text-shadow:0_4px_24px_rgb(0_0_0/45%)] text-[clamp(3rem,13vw,17rem)]"
                >
                  Our Locations
                </FitText>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-16">
            {locations.map((location) => {
              const badges = [
                `${location.amenities.saunas} Sauna${location.amenities.saunas === 1 ? "" : "s"}`,
                `${location.amenities.coldPlunges} Cold Plunge${location.amenities.coldPlunges === 1 ? "" : "s"}`,
                `${location.amenities.hotTubs} Hot Tub${location.amenities.hotTubs === 1 ? "" : "s"}`,
                "∞ Community",
              ];

              return (
                <div key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-cream transition-colors hover:text-orange"
                  >
                    <h2 className="font-display text-5xl uppercase tracking-wide md:text-7xl">
                      {location.name}, {location.region}
                    </h2>
                  </Link>

                  <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                    <Link
                      href={`/locations/${location.slug}`}
                      aria-label={`View the ${location.name}, ${location.region} location`}
                      className="relative block aspect-4/3 overflow-hidden rounded-2xl"
                    >
                      <Image
                        src={location.image.src}
                        alt={location.image.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </Link>

                    <div>
                      <Link
                        href={`/locations/${location.slug}`}
                        className="group inline-flex items-center gap-3 text-cream transition-colors hover:text-orange"
                      >
                        <h3 className="font-display text-4xl uppercase tracking-wide">Location Details</h3>
                        <ArrowIcon direction="right" className="-mt-1 h-5 w-5 shrink-0" />
                      </Link>

                      <div className="mt-3 flex flex-col gap-2 md:flex-row md:flex-wrap">
                        <div className="flex gap-2 md:contents">
                          <Badge index={0}>{badges[0]}</Badge>
                          <Badge index={1}>{badges[1]}</Badge>
                        </div>
                        <div className="flex gap-2 md:contents">
                          <Badge index={2}>{badges[2]}</Badge>
                          <Badge index={3}>{badges[3]}</Badge>
                        </div>
                      </div>

                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          `${location.streetAddress}, ${location.city}, ${location.region} ${location.postalCode}`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block font-sans font-medium text-cream transition-colors hover:text-orange"
                      >
                        {location.streetAddress}, {location.city}, {location.region} {location.postalCode}
                      </a>

                      <div className="mt-4 flex flex-col gap-4 text-cream/80">
                        {location.locationsIndexDescription.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-[calc(50%-50vw)] mb-20 px-5">
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-green-light px-6 py-10 text-center">
            <p className="font-display text-4xl uppercase tracking-wide text-cream">Schedule Your First Session</p>
            <BookNowButton variant="outline" size="lg" />
          </div>
        </div>

        <GalleryTeaser />
      </main>
      <Footer />
    </>
  );
}
