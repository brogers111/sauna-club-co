import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocationCard } from "@/components/home/LocationCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { locations } from "@/lib/data/locations";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Locations",
  description: "Find a Sauna Club Co sauna, cold plunge, and hot tub studio near you.",
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
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading>Locations</SectionHeading>
        <div className="mt-10 flex flex-col gap-16">
          {locations.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
