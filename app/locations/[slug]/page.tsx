import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { getLocationBySlug, locations } from "@/lib/data/locations";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema, localBusinessSchema, serviceSchema } from "@/lib/seo/schema";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return buildMetadata({
    title: `Sauna & Cold Plunge in ${location.name}, ${location.region}`,
    description: location.metaDescription,
    path: `/locations/${location.slug}`,
  });
}

const SERVICES = (locationName: string) => [
  {
    name: "Sauna",
    description: `Wood-fired and infrared sauna sessions at the ${locationName} location for deep relaxation, muscle recovery, and detoxification.`,
  },
  {
    name: "Cold Plunge",
    description: `Precision-chilled cold plunge tubs at the ${locationName} location for contrast therapy and recovery.`,
  },
  {
    name: "Hot Tub",
    description: `Hot tub access at the ${locationName} location for total-body recovery.`,
  },
];

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const services = SERVICES(location.name);

  const badges = [
    `${location.amenities.saunas} Sauna${location.amenities.saunas === 1 ? "" : "s"}`,
    `${location.amenities.coldPlunges} Cold Plunge${location.amenities.coldPlunges === 1 ? "" : "s"}`,
    `${location.amenities.hotTubs} Hot Tub${location.amenities.hotTubs === 1 ? "" : "s"}`,
    "∞ Community",
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
            { name: location.name, path: `/locations/${location.slug}` },
          ]),
          localBusinessSchema(location),
          ...services.map((service) => serviceSchema(location, service)),
        ]}
      />
      <Header overlay />
      <main>
        <section className="relative flex h-[50vh] min-h-90 items-center justify-center overflow-hidden">
          <Image
            src={location.heroImage.src}
            alt={location.heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <h1 className="relative z-10 font-display text-5xl uppercase tracking-wide text-tan-light [text-shadow:0_4px_24px_rgb(0_0_0/45%)]">
            {location.name}
          </h1>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge key={badge} index={index}>
                {badge}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-4 text-black/80">
            {location.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <BookNowButton className="mt-8" />
        </section>

        <section className="bg-tan-dark/40 py-16">
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading as="h2">What&apos;s Here</SectionHeading>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {services.map((service) => (
                <div key={service.name}>
                  <h3 className="font-display text-xl uppercase tracking-wide">{service.name}</h3>
                  <p className="mt-2 text-sm text-black/80">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
