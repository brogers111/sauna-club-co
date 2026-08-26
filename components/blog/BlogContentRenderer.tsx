import type { BlogContentBlock } from "@/lib/data/blog";
import { BlogCTA } from "./BlogCTA";

export function BlogContentRenderer({ blocks }: { blocks: BlogContentBlock[] }) {
  return (
    <div className="mt-8 flex flex-col gap-4 text-cream/80">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={index} className="mt-6 font-display text-3xl uppercase tracking-wide text-cream">
                {block.text}
              </h2>
            );
          case "cta":
            return <BlogCTA key={index} target={block.target} text={block.text} />;
          case "paragraph":
            return <p key={index}>{block.text}</p>;
        }
      })}
    </div>
  );
}
