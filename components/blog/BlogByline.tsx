import { formatPublishedDate, type BlogPost } from "@/lib/data/blog";

// Date • read time, shared by the post page and the /blog cards.
export function BlogByline({ post, className = "" }: { post: BlogPost; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-sm text-cream/60 ${className}`}>
      <time dateTime={post.publishedAt}>{formatPublishedDate(post.publishedAt)}</time>
      <span aria-hidden="true">•</span>
      <span>{post.readTimeMinutes} min read</span>
    </div>
  );
}
