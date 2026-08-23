export type Author = {
  slug: string;
  name: string;
  bio: string;
  photo?: {
    src: string;
    alt: string;
  };
};

// Populated once real Sauna Insights writers are onboarded.
export const authors: Author[] = [];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((author) => author.slug === slug);
}
