"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

const TEXT_FADE_MS = 400;

type Slot = "left" | "middle" | "right";

export type ServiceItem = {
  slug: string;
  heading: string;
  steamVariant: Slot;
  image: { src: string; alt: string };
  paragraph: string;
};

// Default homepage lineup — pass a `services` prop to reuse this carousel
// with different copy/images (e.g. a location page) while keeping the same
// interactive layout.
const DEFAULT_SERVICES: ServiceItem[] = [
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

type ServicesCarouselProps = {
  services?: ServiceItem[];
  // "dark" is for the homepage, whose section background is black — flips
  // the edge fades and text colors to stay legible/blend correctly there.
  background?: "light" | "dark";
};

export function ServicesCarousel({ services = DEFAULT_SERVICES, background = "light" }: ServicesCarouselProps) {
  const isDark = background === "dark";
  const [activeIndex, setActiveIndex] = useState(1);
  // The paragraph fades out/in on its own schedule so it never blocks or
  // delays the image/icon/heading movement, which happens immediately.
  const [textIndex, setTextIndex] = useState(1);
  const [textVisible, setTextVisible] = useState(true);
  const active = services[activeIndex];
  const count = services.length;

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
      <div className="relative h-60 overflow-hidden sm:h-90 md:h-105">
        {/* Edge fades — the outer edges of the side images dissolve into the page background. */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 z-30 w-16 bg-linear-to-r to-transparent sm:w-24 md:w-32 ${isDark ? "from-black" : "from-tan-light"}`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 z-30 w-16 bg-linear-to-l to-transparent sm:w-24 md:w-32 ${isDark ? "from-black" : "from-tan-light"}`}
        />

        {services.map((service, index) => {
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
      </div>

      {/* Arrows + steam icon sit in one centered row below the image stage,
          on both mobile and desktop — no more overlaying the stage itself. */}
      <div className="mt-4 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Show previous service"
          className={`cursor-pointer transition-colors hover:text-orange ${isDark ? "text-tan-light" : "text-black"}`}
        >
          <ArrowIcon direction="left" className="h-5 w-5" />
        </button>

        <Image
          src={STEAM_ICON[active.steamVariant]}
          alt={`Steam icon highlighting the currently active service, ${active.heading}`}
          width={64}
          height={52}
          className="h-12 w-auto"
        />

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Show next service"
          className={`cursor-pointer transition-colors hover:text-orange ${isDark ? "text-tan-light" : "text-black"}`}
        >
          <ArrowIcon direction="right" className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 text-center">
        {services.map((service, index) => {
          const isActive = index === activeIndex;
          return (
            <h3
              key={service.slug}
              className={
                isActive
                  ? `font-display text-4xl uppercase tracking-wide ${isDark ? "text-tan-light" : "text-black"}`
                  : "sr-only"
              }
              aria-hidden={isActive ? undefined : true}
            >
              {service.heading}
            </h3>
          );
        })}
      </div>

      {/* Grid-stacked (all 3 paragraphs share the same cell) so the
          container's height is always the tallest paragraph's height —
          nothing below jumps around as shorter/longer text swaps in. */}
      <div className="mx-auto mt-4 grid w-full max-w-3xl justify-items-center text-center">
        {services.map((service, index) => {
          const isTextActive = index === textIndex;
          const shown = isTextActive && textVisible;
          return (
            <p
              key={service.slug}
              style={{ gridArea: "1 / 1" }}
              className={`transition-opacity duration-400 ${isDark ? "text-tan-light/80" : "text-black/80"} ${shown ? "opacity-100" : "pointer-events-none opacity-0"}`}
              aria-hidden={isTextActive ? undefined : true}
            >
              {service.paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
}
