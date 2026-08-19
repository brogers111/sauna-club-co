import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookNowButton } from "@/components/ui/BookNowButton";

const GALLERY_IMAGES = [
  { src: "/images/man-cold-plunge.webp", alt: "Man submerged in a cold plunge tub at Sauna Club Co" },
  { src: "/images/guys-sauna-1.webp", alt: "Two men relaxing on the cedar benches inside the sauna" },
  { src: "/images/people-sauna-1.webp", alt: "A group socializing together inside the sauna" },
];

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20" id="services">
      <SectionHeading className="text-center">Our Services</SectionHeading>

      {/* Static gallery for now — the user will specify carousel/hover interactivity to add here. */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {GALLERY_IMAGES.map((image) => (
          <div key={image.src} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center text-center">
        <Image src="/images/icon-black.png" alt="" aria-hidden="true" width={64} height={52} className="h-12 w-auto" />
        <h3 className="mt-2 font-display text-2xl uppercase tracking-wide">Sauna</h3>
        <p className="mt-4 max-w-3xl text-green-dark/90">
          Experience a profound sense of relaxation and renewal as you settle into our expertly crafted saunas.
          Choose from our large, multi-person benches for a shared social heat, or enjoy a more reflective session.
          Beyond the soothing warmth and immediate relief of muscle tension, regular sauna use supports
          cardiovascular health, stimulates a deep sweat for detoxification, and can improve sleep quality. Let the
          gentle heat and aromatic wood create a serene retreat.
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-blue px-6 py-10 text-center">
        <p className="font-display text-2xl uppercase tracking-wide text-tan-light">Schedule Your First Session</p>
        <BookNowButton variant="outline" />
      </div>
    </section>
  );
}
