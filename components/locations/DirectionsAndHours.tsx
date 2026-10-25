import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Location } from "@/lib/data/locations";

type DirectionsAndHoursProps = {
  location: Location;
  // Optional bold line shown above the hours.
  hoursLabel?: string;
  // Overrides the location's default driving directions copy.
  directions?: string;
  // Vertical spacing; pages that space their sections themselves can override it.
  className?: string;
};

export function DirectionsAndHours({
  location,
  hoursLabel,
  directions = location.drivingDirections,
  className = "py-16",
}: DirectionsAndHoursProps) {
  const address = `${location.streetAddress}, ${location.city}, ${location.region} ${location.postalCode}`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className={`mx-auto max-w-6xl px-6 ${className}`}>
      <SectionHeading as="h2" className="text-center md:text-left">Directions &amp; Hours</SectionHeading>

      <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl border-2 border-blue shadow-[8px_8px_0_0_var(--color-blue)]"
        >
          <div className="relative aspect-4/3 w-full">
            <Image
              src={location.mapImage.src}
              alt={location.mapImage.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </a>

        <div>
          {hoursLabel ? (
            <p className="mb-2 text-center font-sans text-xl font-bold text-cream md:text-2xl">{hoursLabel}</p>
          ) : null}
          <p className="text-center font-sans font-bold text-cream">
            7:00 am – 10:00 pm Monday–Friday
            <br />
            8:00 am – 9:00 pm Saturday &amp; Sunday
          </p>
          <p className="mt-6 text-center font-sans text-cream/80">{directions}</p>

          <div className="mt-6 flex justify-center">
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue px-6 py-3 text-sm font-medium text-tan-light transition hover:opacity-80"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="h-5 w-5 shrink-0">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21c-4-4.5-7-8.2-7-11.5A7 7 0 0 1 12 2a7 7 0 0 1 7 7.5C19 12.8 16 16.5 12 21Z"
                />
                <circle cx="12" cy="9.5" r="2.25" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
