import Image from "next/image";
import Link from "next/link";

export function GalleryTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 flex flex-col gap-4">
          <div className="relative aspect-3/2 w-4/5 self-end overflow-hidden rounded-2xl">
            <Image
              src="/images/exterior-white.webp"
              alt="Exterior of the Sauna Club Co Wheat Ridge building at dusk"
              fill
              sizes="(min-width: 768px) 22vw, 32vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-3/2 overflow-hidden rounded-2xl">
            <Image
              src="/images/people-socializing.webp"
              alt="Members socializing together at Sauna Club Co"
              fill
              sizes="(min-width: 768px) 28vw, 40vw"
              className="object-cover"
            />
          </div>

          <Link
            href="/about"
            className="group mt-2 inline-flex items-center gap-3 self-end text-black transition-colors hover:text-orange"
          >
            <span className="font-display text-4xl uppercase tracking-wide">See More</span>
            <span
              aria-hidden="true"
              className="-mt-1 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border border-black transition-colors group-hover:border-orange"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={5} className="h-2 w-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-6-6m6 6-6 6" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="relative col-span-5 overflow-hidden rounded-2xl">
          <Image
            src="/images/man-cold-plunge.webp"
            alt="Man submerged in a cold plunge tub at Sauna Club Co"
            fill
            sizes="(min-width: 768px) 35vw, 60vw"
            className="object-cover"
          />
        </div>

        <div className="col-span-3 flex flex-col gap-4">
          <div className="relative mt-10 aspect-6/4 w-full self-start overflow-hidden rounded-2xl">
            <Image
              src="/images/sauna-interior.webp"
              alt="Interior of the wood-paneled sauna at Sauna Club Co"
              fill
              sizes="(min-width: 768px) 22vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/5 w-3/5 self-start overflow-hidden rounded-2xl">
            <Image
              src="/images/woman-cold-plunge.webp"
              alt="Woman relaxing in a cold plunge tub"
              fill
              sizes="(min-width: 768px) 18vw, 32vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
