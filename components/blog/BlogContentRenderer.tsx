import type { BlogContentBlock } from "@/lib/data/blog";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BlogCTA } from "./BlogCTA";
import { RichTextRenderer } from "./RichTextRenderer";

// Same palette and order as the location page's "Areas We Serve" cards.
const CARD_COLORS = [
  { border: "border-green-light", shadow: "shadow-[8px_8px_0_0_var(--color-green-light)]", accent: "text-green-light" },
  { border: "border-blue", shadow: "shadow-[8px_8px_0_0_var(--color-blue)]", accent: "text-blue" },
  { border: "border-orange", shadow: "shadow-[8px_8px_0_0_var(--color-orange)]", accent: "text-orange" },
  { border: "border-wood-light", shadow: "shadow-[8px_8px_0_0_var(--color-wood-light)]", accent: "text-wood-light" },
];

// Static class names so Tailwind generates them; 4 cards wrap as 2×2.
const CARD_GRID_COLS: Record<number, string> = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-2" };

type BlogContentRendererProps = {
  blocks: BlogContentBlock[];
  // Where this post's CTA banners start in the color rotation, so
  // consecutive posts don't open with the same color.
  ctaColorOffset?: number;
};

export function BlogContentRenderer({ blocks, ctaColorOffset = 0 }: BlogContentRendererProps) {
  let ctaCount = ctaColorOffset;

  return (
    <div className="mt-10 flex flex-col gap-4 text-cream/80">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return block.level === 3 ? (
              <h3 key={index} className="mt-4 font-display text-2xl uppercase tracking-wide text-cream md:text-3xl">
                {block.text}
              </h3>
            ) : (
              <h2 key={index} className="mt-8 font-display text-4xl uppercase tracking-wide text-cream md:text-5xl">
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={index}>
                <RichTextRenderer text={block.text} />
              </p>
            );
          case "list":
            return (
              <ul key={index} className="flex flex-col gap-3 pl-1">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <span aria-hidden="true" className="text-xl leading-none text-orange">
                      •
                    </span>
                    <span>
                      <RichTextRenderer text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "cards":
            return (
              <div key={index} className={`my-4 grid grid-cols-1 gap-6 ${CARD_GRID_COLS[block.items.length] ?? "sm:grid-cols-3"}`}>
                {block.items.map((item, itemIndex) => {
                  const color = CARD_COLORS[itemIndex % CARD_COLORS.length];
                  return (
                    <div key={item.title} className={`rounded-2xl border-2 bg-tan-dark px-5 py-5 ${color.border} ${color.shadow}`}>
                      <p className={`font-display text-2xl uppercase tracking-wide ${color.accent}`}>{item.title}</p>
                      <p className="mt-2 text-base text-cream/80">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            );
          case "faq":
            return <FAQAccordion key={index} faqs={block.items} />;
          case "cta":
            return <BlogCTA key={index} target={block.target} text={block.text} index={ctaCount++} />;
        }
      })}
    </div>
  );
}
