import { Button } from "@/components/ui/Button";

const TARGETS = {
  book: { href: "/book-session", label: "Book Now" },
  "wheat-ridge": { href: "/locations/wheat-ridge", label: "Visit Wheat Ridge" },
} as const;

// Rotated by the CTA's position within a post, so each banner in a post
// gets a different color.
const COLORS = ["bg-orange", "bg-green-light", "bg-blue", "bg-wood-light"];

type BlogCTAProps = {
  target: keyof typeof TARGETS;
  text: string;
  index?: number;
};

// Dropped inline into a blog post's content blocks — the same full-width
// banner as the location page's "Schedule Your First Session" CTA.
export function BlogCTA({ target, text, index = 0 }: BlogCTAProps) {
  const { href, label } = TARGETS[target];

  return (
    <div className="mx-[calc(50%-50vw)] my-12 px-5">
      <div className={`flex flex-col items-center gap-4 rounded-2xl px-6 py-10 text-center ${COLORS[index % COLORS.length]}`}>
        <p className="font-display text-4xl uppercase tracking-wide text-tan-light">{text}</p>
        <Button href={href} variant="outline" size="lg">
          {label}
        </Button>
      </div>
    </div>
  );
}
