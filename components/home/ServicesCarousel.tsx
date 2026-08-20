"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

const TEXT_FADE_MS = 400;

type Slot = "left" | "middle" | "right";

type ServiceItem = {
  slug: string;
  heading: string;
  steamVariant: Slot;
  image: { src: string; alt: string };
  paragraph: string;
};

const SERVICES: ServiceItem[] = [
  {
    slug: "cold-plunge",
    heading: "Cold Plunge",
    steamVariant: "left",
    image: { src: "/images/man-cold-plunge.webp", alt: "Man submerged in a cold plunge tub at Sauna Club Co" },
    paragraph:
      "Brace yourself and step into our precision-chilled cold plunge tubs for a rush of invigorating cold exposure. Alternating between heat and cold — a practice known as contrast therapy — helps reduce inflammation, speeds muscle recovery, and sharpens mental clarity. Regular cold plunge sessions can also boost circulation, strengthen immune response, and build resilience to everyday stress. Take the plunge and feel the reset.",
  },
  {
    slug: "sauna",
    heading: "Sauna",
    steamVariant: "middle",
    image: { src: "/images/guys-sauna-1.webp", alt: "Two men relaxing on the cedar benches inside the sauna" },
    paragraph:
      "Experience a profound sense of relaxation and renewal as you settle into our expertly crafted saunas. Choose from our large, multi-person benches for a shared social heat, or enjoy a more reflective session. Beyond the soothing warmth and immediate relief of muscle tension, regular sauna use supports cardiovascular health, stimulates a deep sweat for detoxification, and can improve sleep quality. Let the gentle heat and aromatic wood create a serene retreat.",
  },
  {
    slug: "socialize",
    heading: "Socialize",
    steamVariant: "right",
    image: { src: "/images/people-sauna-2.webp", alt: "A group socializing together inside the sauna" },
    paragraph:
      "Sauna Club Co isn't just about the heat and cold — it's about the people you share it with. Our benches and lounge spaces are built for connection, whether you're catching up with old friends or making new ones. Socializing in a low-stress, screen-free environment has been shown to ease anxiety, elevate mood, and strengthen a sense of community. Come for the recovery, stay for the company.",
  },
];

const STEAM_ICON: Record<Slot, string> = {
  left: "/images/icon-left-orange.png",
  middle: "/images/icon-middle-orange.png",
  right: "/images/icon-right-orange.png",
};

const SLOT_STYLE: Record<Slot, { left: string; width: string; zIndex: number; opacity: number }> = {
  middle: { left: "50%", width: "46%", zIndex: 20, opacity: 1 },
  right: { left: "94%", width: "34%", zIndex: 10, opacity: 0.9 },
  left: { left: "6%", width: "34%", zIndex: 10, opacity: 0.9 },
};

export function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  // The paragraph fades out/in on its own schedule so it never blocks or
  // delays the image/icon/heading movement, which happens immediately.
  const [textIndex, setTextIndex] = useState(1);
  const [textVisible, setTextVisible] = useState(true);
  const active = SERVICES[activeIndex];
  const count = SERVICES.length;

  function go(delta: number) {
    const next = (activeIndex + delta + count) % count;
    setActiveIndex(next);

    setTextVisible(false); // fade out the current paragraph
    window.setTimeout(() => {
      setTextIndex(next);
      // Wait a frame so the newly-active paragraph paints at opacity-0
      // before we flip it to opacity-100 — otherwise there's no prior
      // frame for the browser to transition from, and it just snaps in.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTextVisible(true));
      });
    }, TEXT_FADE_MS);
  }

  return (
    <div>
      <div className="relative h-70 overflow-hidden sm:h-90 md:h-105">
        {/* Edge fades — the outer edges of the side images dissolve into the page background. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-16 bg-linear-to-r from-tan-light to-transparent sm:w-24 md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-16 bg-linear-to-l from-tan-light to-transparent sm:w-24 md:w-32" />

        {SERVICES.map((service, index) => {
          const relative = (index - activeIndex + count) % count;
          const slot: Slot = relative === 0 ? "middle" : relative === 1 ? "right" : "left";
          const style = SLOT_STYLE[slot];

          return (
            <div
              key={service.slug}
              className="absolute top-1/2 aspect-4/6 overflow-hidden rounded-2xl shadow-md transition-all duration-500 ease-out md:aspect-5/4"
              style={{
                left: style.left,
                width: style.width,
                zIndex: style.zIndex,
                opacity: style.opacity,
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes="(min-width: 768px) 40vw, 60vw"
                className="object-cover"
              />
            </div>
          );
        })}

        {/* Desktop: arrows sit beside the middle image, overlaid on the stage. */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Show previous service"
          className="absolute left-[25%] top-1/2 z-40 hidden -translate-x-1/2 -translate-y-1/2 cursor-pointer text-black transition-colors hover:text-orange md:block"
        >
          <ArrowIcon direction="left" className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Show next service"
          className="absolute left-[75%] top-1/2 z-40 hidden -translate-x-1/2 -translate-y-1/2 cursor-pointer text-black transition-colors hover:text-orange md:block"
        >
          <ArrowIcon direction="right" className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile: arrows sit in normal flow below the stage instead of
          overlapping the (now off-screen-at-the-edges) side images. */}
      <div className="mt-4 flex items-center justify-center gap-10 md:hidden">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Show previous service"
          className="cursor-pointer text-black transition-colors hover:text-orange"
        >
          <ArrowIcon direction="left" className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Show next service"
          className="cursor-pointer text-black transition-colors hover:text-orange"
        >
          <ArrowIcon direction="right" className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex flex-col items-center text-center">
        {/* Icon and heading sit in a plain left-aligned row on mobile
            (pl-10). At md+, they instead each anchor to a fixed point either
            side of the centerline, independently of the H3's text length,
            so neither shifts position as the active slide (and heading
            length) changes. */}
        <div className="relative flex w-full items-center gap-3 pl-10 md:h-14 md:gap-0 md:pl-0">
          <div className="md:absolute md:top-1/2 md:right-[calc(50%+50px)] md:-translate-y-1/2">
            <Image
              src={STEAM_ICON[active.steamVariant]}
              alt={`Steam icon highlighting the currently active service, ${active.heading}`}
              width={64}
              height={52}
              className="h-12 w-auto"
            />
          </div>

          <div className="text-left md:absolute md:top-1/2 md:left-[calc(50%-50px)] md:-translate-y-1/2">
            {SERVICES.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <h3
                  key={service.slug}
                  className={isActive ? "whitespace-nowrap font-display text-4xl uppercase tracking-wide text-black" : "sr-only"}
                  aria-hidden={isActive ? undefined : true}
                >
                  {service.heading}
                </h3>
              );
            })}
          </div>
        </div>

        {/* Grid-stacked (all 3 paragraphs share the same cell) so the
            container's height is always the tallest paragraph's height —
            nothing below jumps around as shorter/longer text swaps in. */}
        <div className="mt-4 grid w-full max-w-3xl justify-items-center">
          {SERVICES.map((service, index) => {
            const isTextActive = index === textIndex;
            const shown = isTextActive && textVisible;
            return (
              <p
                key={service.slug}
                style={{ gridArea: "1 / 1" }}
                className={`text-black/80 transition-opacity duration-400 ${shown ? "opacity-100" : "pointer-events-none opacity-0"}`}
                aria-hidden={isTextActive ? undefined : true}
              >
                {service.paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
