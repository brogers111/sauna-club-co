import { Button } from "@/components/ui/Button";

const TARGETS = {
  book: { href: "/book-session", label: "Book Now" },
  "wheat-ridge": { href: "/locations/wheat-ridge", label: "Visit Wheat Ridge" },
} as const;

type BlogCTAProps = {
  target: keyof typeof TARGETS;
  text: string;
};

// Dropped inline into a blog post's content blocks to point readers at
// either booking a session or the Wheat Ridge location page.
export function BlogCTA({ target, text }: BlogCTAProps) {
  const { href, label } = TARGETS[target];

  return (
    <div className="my-8 flex flex-col items-center gap-4 rounded-2xl bg-blue px-6 py-8 text-center">
      <p className="font-display text-2xl uppercase tracking-wide text-tan-light">{text}</p>
      <Button href={href} variant="outline">
        {label}
      </Button>
    </div>
  );
}
