import Image from "next/image";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { FitText } from "./FitText";

export function Hero() {
  return (
    <section className="h-dvh">
      <div className="relative h-full w-full overflow-hidden">
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
            className="font-display uppercase text-cream [text-shadow:0_4px_24px_rgb(0_0_0/45%)] text-[clamp(3rem,13vw,17rem)]"
          >
            Plan Your Unwind
          </FitText>
        </div>

        <a
          href="#services"
          aria-label="Scroll to our services"
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream transition-colors hover:text-orange"
        >
          <ArrowIcon direction="down" className="h-10 w-10" />
        </a>
      </div>
    </section>
  );
}
