import Link from "next/link";
import type { RichText } from "@/lib/data/blog";

const LINK_CLASS = "text-orange underline transition-colors hover:text-orange-light";

// Internal links ("/...") stay in the same tab; everything else is external
// and opens in a new one.
export function RichTextRenderer({ text }: { text: RichText }) {
  if (typeof text === "string") return text;

  return text.map((segment, index) => {
    if (typeof segment === "string") return segment;
    if (segment.href.startsWith("/")) {
      return (
        <Link key={index} href={segment.href} className={LINK_CLASS}>
          {segment.text}
        </Link>
      );
    }
    return (
      <a key={index} href={segment.href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
        {segment.text}
      </a>
    );
  });
}
