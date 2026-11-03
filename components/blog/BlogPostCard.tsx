import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/data/blog";
import { BlogByline } from "./BlogByline";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col text-cream transition-colors hover:text-orange-light">
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
        <Image
          src={post.featuredImage.src}
          alt={post.featuredImage.alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h2 className="mt-4 font-display text-2xl uppercase tracking-wide">{post.title}</h2>
      <BlogByline post={post} className="mt-1" />
      <p className="mt-2 font-sans text-sm text-cream/80">{post.metaDescription}</p>
    </Link>
  );
}
