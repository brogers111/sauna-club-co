// Content is a typed block list rather than markdown/MDX, matching this
// project's hardcoded-content convention (see AGENTS.md) and letting a
// BlogCTA render as a real component inline with the copy.
export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "cta"; target: "book" | "wheat-ridge"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  // Short version for <meta> tags and the blog index card — not the full post.
  metaDescription: string;
  readTimeMinutes: number;
  // ISO date (YYYY-MM-DD) — string-sortable, so no Date parsing needed to sort by newest first.
  publishedAt: string;
  authorSlug: string;
  featuredImage: {
    src: string;
    alt: string;
  };
  content: BlogContentBlock[];
};

// Populated once the first Sauna Insights write-ups are ready.
export const blogPosts: BlogPost[] = [];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}
