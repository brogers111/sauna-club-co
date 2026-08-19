import Image from "next/image";
import { FitText } from "./FitText";

export function Hero() {
  return (
    <section className="h-dvh p-5">
      <div className="relative h-full w-full overflow-hidden rounded-[2.5rem]">
        <Image
          src="/images/hero-image.webp"
          alt="Person relaxing in a steaming cedar sauna at Sauna Club Co"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="relative z-10 flex h-full items-center px-5">
          <FitText
            as="h1"
            className="font-display uppercase text-tan-light [text-shadow:0_4px_24px_rgb(0_0_0/45%)] text-[clamp(3rem,13vw,17rem)]"
          >
            Plan Your Unwind
          </FitText>
        </div>

        <a
          href="#services"
          aria-label="Scroll to our services"
          className="absolute bottom-6 left-1/2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-tan-light text-tan-light transition-colors hover:bg-tan-light hover:text-green-dark"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0-6-6m6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
