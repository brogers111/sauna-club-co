import Image from "next/image";
import Link from "next/link";
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
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={location.image.src}
          alt={location.image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        <Link href={`/locations/${location.slug}`} className="hover:text-orange">
          <h3 className="font-display text-4xl uppercase tracking-wide text-black">{location.name}</h3>
        </Link>

        <div className="mt-3 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge key={badge} index={index}>
              {badge}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-4 text-black/80">
          {location.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
