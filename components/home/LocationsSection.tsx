import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocationCard } from "./LocationCard";
import { locations } from "@/lib/data/locations";

export function LocationsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20" id="locations">
      <SectionHeading>Locations</SectionHeading>
      <div className="mt-10 flex flex-col gap-16">
        {locations.map((location) => (
          <LocationCard key={location.slug} location={location} />
        ))}
      </div>
    </section>
  );
}
