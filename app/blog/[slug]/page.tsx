import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogContentRenderer } from "@/components/blog/BlogContentRenderer";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";
import { getAuthorBySlug } from "@/lib/data/authors";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbListSchema } from "@/lib/seo/schema";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.featuredImage.src,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const author = getAuthorBySlug(post.authorSlug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          ...(author
            ? [
                articleSchema({
                  headline: post.title,
                  description: post.metaDescription,
                  path: `/blog/${post.slug}`,
                  datePublished: post.publishedAt,
                  authorName: author.name,
                  authorPath: `/blog/authors/${author.slug}`,
                  image: post.featuredImage.src,
                }),
              ]
            : []),
        ]}
      />
      <Header overlay />
      <main>
        <section className="relative flex h-[50dvh] min-h-90 items-center justify-center overflow-hidden">
          <Image src={post.featuredImage.src} alt={post.featuredImage.alt} fill priority sizes="100vw" className="object-cover" />
          <h1 className="relative z-10 max-w-4xl px-6 text-center font-display text-4xl uppercase tracking-wide text-tan-light [text-shadow:0_4px_24px_rgb(0_0_0/45%)] md:text-6xl">
            {post.title}
          </h1>
        </section>

        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="flex flex-wrap items-center gap-3 font-sans text-sm text-black/60">
            {author ? (
              <Link href={`/blog/authors/${author.slug}`} className="font-medium text-black transition-colors hover:text-orange">
                {author.name}
              </Link>
            ) : null}
            <span aria-hidden="true">•</span>
            <span>{post.readTimeMinutes} min read</span>
          </div>

          <BlogContentRenderer blocks={post.content} />
        </div>
      </main>
      <Footer />
    </>
  );
}
