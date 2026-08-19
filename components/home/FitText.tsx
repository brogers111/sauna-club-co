"use client";

import { useLayoutEffect, useRef, useState } from "react";

type FitTextProps = {
  children: string;
  className?: string;
  as?: "span" | "h1" | "h2";
};

const REFERENCE_PX = 100;

// Solves for the font-size that makes `children` render at exactly the
// container's width — plain font-size math (no scaleX), so glyphs keep
// their natural proportions at any viewport width. Stays invisible until
// the real font is confirmed active, so it never paints in a fallback font.
export function FitText({ children, className = "", as = "span" }: FitTextProps) {
  const Tag = as;
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);
  const [fontReady, setFontReady] = useState(false);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const measurer = measureRef.current;
    if (!container || !measurer) return;

    // `measurer` is a hidden element permanently fixed at REFERENCE_PX — we
    // only ever read from it, never mutate it, so there's nothing for a
    // React state bailout (setting the same value twice) to leave stuck.
    function measure() {
      const naturalWidth = measurer!.scrollWidth;
      const widthPerPx = naturalWidth / REFERENCE_PX;
      setFontSize(container!.clientWidth / widthPerPx);
    }

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(container);

    document.fonts?.ready.then(() => {
      measure();
      setFontReady(true);
    });

    return () => resizeObserver.disconnect();
  }, [children]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden text-center">
      <span
        ref={measureRef}
        aria-hidden="true"
        className={className}
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          display: "inline-block",
          fontSize: `${REFERENCE_PX}px`,
        }}
      >
        {children}
      </span>

      <Tag
        className={`${className} transition-opacity duration-300 ${fontReady ? "opacity-100" : "opacity-0"}`}
        style={{
          fontSize: fontSize ? `${fontSize}px` : undefined,
          whiteSpace: "nowrap",
          display: "inline-block",
        }}
      >
        {children}
      </Tag>
    </div>
  );
}
