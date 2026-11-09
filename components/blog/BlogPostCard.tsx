import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/data/blog";
import { BlogByline } from "./BlogByline";

type BlogPostCardProps = {
  post: BlogPost;
  // h2 on /blog; h3 when the cards sit under their own section heading
  // (e.g. Related Articles on a post).
  headingLevel?: "h2" | "h3";
  sizes?: string;
};

export function BlogPostCard({ post, headingLevel: Heading = "h2", sizes = "(min-width: 768px) 33vw, 100vw" }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col text-cream transition-colors hover:text-orange-light">
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
        <Image
          src={post.featuredImage.src}
          alt={post.featuredImage.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <Heading className="mt-4 font-display text-2xl uppercase tracking-wide">{post.title}</Heading>
      <BlogByline post={post} className="mt-1" />
      <p className="mt-2 font-sans text-sm text-cream/80">{post.metaDescription}</p>
    </Link>
  );
}
