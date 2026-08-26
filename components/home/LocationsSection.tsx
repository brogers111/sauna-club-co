import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocationCard } from "./LocationCard";
import { locations } from "@/lib/data/locations";

export function LocationsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10" id="locations">
      <div className="flex items-start gap-6 md:items-end md:justify-between">
        <SectionHeading>Locations</SectionHeading>
        <div className="relative hidden aspect-8/4 w-40 shrink-0 self-end overflow-hidden rounded-2xl sm:w-60 md:block">
          <Image
            src="/images/wheat-ridge.webp"
            alt="Aerial view of the Wheat Ridge, CO neighborhood surrounding Sauna Club Co"
            fill
            sizes="11rem"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-16">
        {locations.map((location) => (
          <LocationCard key={location.slug} location={location} />
        ))}
      </div>
    </section>
  );
}
