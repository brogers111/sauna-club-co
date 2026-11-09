"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

// Horizontal scroll-snap track: 3 cards across on desktop, one-and-a-bit on
// mobile so it's obvious the row swipes. Every card is server-rendered into
// the HTML (just scrolled out of view), so crawlers see every link.
export function RelatedPostsCarousel({ children }: { children: ReactNode[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canScroll, setCanScroll] = useState({ back: false, forward: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function update() {
      if (!track) return;
      setCanScroll({
        back: track.scrollLeft > 1,
        forward: track.scrollLeft + track.clientWidth < track.scrollWidth - 1,
      });
    }

    update();
    track.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => {
      track.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!track || !(card instanceof HTMLElement)) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  }

  const showArrows = canScroll.back || canScroll.forward;

  return (
    <div>
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] md:gap-10 [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, index) => (
          <li key={index} className="w-[85%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-5rem)/3)]">
            {child}
          </li>
        ))}
      </ul>

      {showArrows ? (
        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScroll.back}
            aria-label="Show previous articles"
            className="cursor-pointer text-cream transition-colors hover:text-orange disabled:cursor-default disabled:opacity-30 disabled:hover:text-cream"
          >
            <ArrowIcon direction="left" className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScroll.forward}
            aria-label="Show more articles"
            className="cursor-pointer text-cream transition-colors hover:text-orange disabled:cursor-default disabled:opacity-30 disabled:hover:text-cream"
          >
            <ArrowIcon direction="right" className="h-6 w-6" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
