import Image from "next/image";
import Link from "next/link";

const IMAGES = [
  { src: "/images/exterior-white.webp", alt: "Exterior of the Sauna Club Co Wheat Ridge building at dusk" },
  { src: "/images/people-socializing.webp", alt: "Members socializing together at Sauna Club Co" },
  { src: "/images/woman-cold-plunge.webp", alt: "Woman relaxing in a cold plunge tub" },
  { src: "/images/guy-cold-plunge-1.webp", alt: "Man stepping into a cold plunge tub" },
];

export function GalleryTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {IMAGES.map((image) => (
          <div key={image.src} className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-green-dark hover:text-orange"
        >
          See More
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
