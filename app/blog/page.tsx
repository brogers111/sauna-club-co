import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FitText } from "@/components/home/FitText";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSortedBlogPosts } from "@/lib/data/blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Sauna Insights",
  description: "Tips, guides, and stories about sauna, cold plunge, and contrast therapy from Sauna Club Co.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getSortedBlogPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <Header overlay />
      <main>
        <section className="h-[70dvh] min-h-90">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/blog-hero.webp"
              alt="Heated stones inside the sauna at Sauna Club Co"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="relative z-10 flex h-full items-center px-5">
              <div className="w-full md:mx-auto md:w-[48.4%]">
                <FitText
                  as="h1"
                  className="font-display uppercase text-tan-light [text-shadow:0_4px_24px_rgb(0_0_0/45%)] text-[clamp(3rem,13vw,17rem)]"
                >
                  Sauna Insights
                </FitText>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 py-16">
          {posts.length === 0 ? (
            <p className="py-10 text-center font-sans text-black/60">New posts are on the way — check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
