import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Badge } from "@/components/ui/Badge";
import type { Location } from "@/lib/data/locations";

export function LocationCard({ location }: { location: Location }) {
  const badges = [
    `${location.amenities.saunas} Sauna${location.amenities.saunas === 1 ? "" : "s"}`,
    `${location.amenities.coldPlunges} Cold Plunge${location.amenities.coldPlunges === 1 ? "" : "s"}`,
    `${location.amenities.hotTubs} Hot Tub${location.amenities.hotTubs === 1 ? "" : "s"}`,
    "∞ Community",
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
      <Link
        href={`/locations/${location.slug}`}
        className="relative block aspect-4/3 overflow-hidden rounded-2xl"
        aria-label={`View the ${location.name} location page`}
      >
        <Image
          src={location.image.src}
          alt={location.image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>

      <div>
        <Link
          href={`/locations/${location.slug}`}
          className="group inline-flex items-center gap-3 text-cream transition-colors hover:text-orange-light"
        >
          <h3 className="font-display text-4xl uppercase tracking-wide">
            {location.name}, {location.region}
          </h3>
          <ArrowIcon direction="right" className="-mt-1 h-5 w-5 shrink-0" />
        </Link>

        {/* Two flex rows (not a grid) on mobile so the pills sit tight and
            left-aligned instead of stretched/gapped by grid column tracks;
            md:contents dissolves the row wrappers on desktop so all four
            badges become direct flex-wrap children again. */}
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

        <p className="mt-4 font-sans font-medium text-cream">
          {location.streetAddress}, {location.city}, {location.region} {location.postalCode}
        </p>

        <div className="mt-4 flex flex-col gap-4 text-cream/80">
          {location.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
