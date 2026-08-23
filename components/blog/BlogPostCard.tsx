import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/data/blog";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col text-black transition-colors hover:text-orange">
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
        <Image
          src={post.featuredImage.src}
          alt={post.featuredImage.alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 font-display text-2xl uppercase tracking-wide">{post.title}</h3>
      <p className="mt-1 font-sans text-sm text-black/60">{post.readTimeMinutes} min read</p>
      <p className="mt-2 font-sans text-sm text-black/80">{post.metaDescription}</p>
    </Link>
  );
}
