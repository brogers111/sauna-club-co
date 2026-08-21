import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

export function GalleryTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10">
      {/* Mobile: simple 3-photo vertical stack. */}
      <div className="flex flex-col gap-4 md:hidden">
        <div className="relative aspect-3/2 w-3/4 self-start overflow-hidden rounded-2xl">
          <Image
            src="/images/people-socializing.webp"
            alt="Members socializing together at Sauna Club Co"
            fill
            sizes="75vw"
            className="object-cover"
          />
        </div>

        <div className="relative aspect-4/6 w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/man-cold-plunge.webp"
            alt="Man submerged in a cold plunge tub at Sauna Club Co"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative aspect-3/2 w-3/4 self-end overflow-hidden rounded-2xl">
          <Image
            src="/images/sauna-interior.webp"
            alt="Interior of the wood-paneled sauna at Sauna Club Co"
            fill
            sizes="75vw"
            className="object-cover"
          />
        </div>

        <Link
          href="/about"
          className="group inline-flex items-center gap-3 self-end text-black transition-colors hover:text-orange"
        >
          <span className="font-display text-4xl uppercase tracking-wide">See More</span>
          <ArrowIcon direction="right" className="-mt-1 h-5 w-5 shrink-0" />
        </Link>
      </div>

      {/* Desktop: original staggered 5-photo layout. */}
      <div className="hidden md:grid md:grid-cols-12 md:gap-4">
        <div className="col-span-4 flex flex-col gap-4">
          <div className="relative aspect-3/2 w-4/5 self-end overflow-hidden rounded-2xl">
            <Image
              src="/images/exterior-white.webp"
              alt="Exterior of the Sauna Club Co Wheat Ridge building at dusk"
              fill
              sizes="22vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-3/2 overflow-hidden rounded-2xl">
            <Image
              src="/images/people-socializing.webp"
              alt="Members socializing together at Sauna Club Co"
              fill
              sizes="28vw"
              className="object-cover"
            />
          </div>

          <Link
            href="/about"
            className="group mt-2 inline-flex items-center gap-3 self-end text-black transition-colors hover:text-orange"
          >
            <span className="font-display text-4xl uppercase tracking-wide">See More</span>
            <ArrowIcon direction="right" className="-mt-1 h-5 w-5 shrink-0" />
          </Link>
        </div>

        <div className="relative col-span-5 overflow-hidden rounded-2xl">
          <Image
            src="/images/man-cold-plunge.webp"
            alt="Man submerged in a cold plunge tub at Sauna Club Co"
            fill
            sizes="35vw"
            className="object-cover"
          />
        </div>

        <div className="col-span-3 flex flex-col gap-4">
          <div className="relative mt-10 aspect-6/4 w-full self-start overflow-hidden rounded-2xl">
            <Image
              src="/images/sauna-interior.webp"
              alt="Interior of the wood-paneled sauna at Sauna Club Co"
              fill
              sizes="22vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/5 w-3/5 self-start overflow-hidden rounded-2xl">
            <Image
              src="/images/woman-cold-plunge.webp"
              alt="Woman relaxing in a cold plunge tub"
              fill
              sizes="18vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
