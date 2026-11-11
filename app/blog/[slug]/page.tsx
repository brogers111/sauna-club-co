import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBanner } from "@/components/layout/AnnouncementBanner";
import { BlogByline } from "@/components/blog/BlogByline";
import { BlogContentRenderer } from "@/components/blog/BlogContentRenderer";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { RelatedPostsCarousel } from "@/components/blog/RelatedPostsCarousel";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { blogPosts, getBlogPostBySlug, getFaqItems } from "@/lib/data/blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_URL } from "@/lib/site-config";
import { articleSchema, breadcrumbListSchema, faqSchema } from "@/lib/seo/schema";

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

  const metadata = buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.socialImage.src,
  });
  const socialImage = {
    url: `${SITE_URL}${post.socialImage.src}`,
    width: post.socialImage.width,
    height: post.socialImage.height,
    alt: post.featuredImage.alt,
  };

  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: "article", publishedTime: post.publishedAt, images: [socialImage] },
    twitter: { ...metadata.twitter, images: [socialImage] },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.breadcrumbTitle, path: `/blog/${post.slug}` },
  ];
  const faqs = getFaqItems(post);
  // Every other post, newest first, so each post links to all the rest and
  // none end up orphaned.
  const relatedPosts = blogPosts
    .filter((other) => other.slug !== post.slug)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbListSchema(breadcrumbs),
          articleSchema({
            headline: post.headline,
            description: post.metaDescription,
            path: `/blog/${post.slug}`,
            datePublished: post.publishedAt,
            image: post.featuredImage.src,
          }),
          ...(faqs.length > 0 ? [faqSchema(faqs)] : []),
        ]}
      />
      <Header overlay />
      <main>
        <section className="relative h-[50dvh] min-h-90 overflow-hidden">
          <Image src={post.featuredImage.src} alt={post.featuredImage.alt} fill preload fetchPriority="high" sizes="100vw" className="object-cover" />
        </section>

        <AnnouncementBanner />

        <article className="mx-auto max-w-3xl px-6 pt-6 pb-12 md:pt-12">
          {/* Mobile: Back to Blogs above the breadcrumbs. Desktop: breadcrumbs
              left, button right. */}
          <div className="flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
            <Breadcrumbs items={breadcrumbs} />
            {/* Styled like the nav's Book Session button. Centered on mobile
                via the wrapper rather than the Button's own classes, which
                hardcode inline-flex (see Header). */}
            <div className="self-center md:self-auto">
              <Button href="/blog" className="gap-2 text-tan-light!">
                <ArrowIcon direction="left" className="h-4 w-4 shrink-0" />
                Back to Blogs
              </Button>
            </div>
          </div>

          <h1 className="mt-6 font-display md:mt-10 text-4xl uppercase tracking-wide text-cream md:text-6xl">{post.headline}</h1>
          <BlogByline post={post} className="mt-4" />

          {/* Each post has two CTA banners, so offset by two colors per post. */}
          <BlogContentRenderer blocks={post.content} ctaColorOffset={blogPosts.indexOf(post) * 2} />
        </article>

        {relatedPosts.length > 0 ? (
          <section aria-labelledby="related-articles" className="mx-auto max-w-6xl px-6 pt-12">
            <h2 id="related-articles" className="mb-10 text-center font-display text-5xl uppercase tracking-wide text-cream md:text-7xl">
              Related Articles
            </h2>
            <RelatedPostsCarousel>
              {relatedPosts.map((related) => (
                <BlogPostCard key={related.slug} post={related} headingLevel="h3" sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 85vw" />
              ))}
            </RelatedPostsCarousel>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
