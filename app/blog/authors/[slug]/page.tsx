import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { authors, getAuthorBySlug } from "@/lib/data/authors";
import { blogPosts } from "@/lib/data/blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema, personSchema } from "@/lib/seo/schema";

type AuthorPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};

  return buildMetadata({
    title: author.name,
    description: author.bio,
    path: `/blog/authors/${author.slug}`,
  });
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const posts = blogPosts.filter((post) => post.authorSlug === author.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: author.name, path: `/blog/authors/${author.slug}` },
          ]),
          personSchema({ name: author.name, path: `/blog/authors/${author.slug}` }),
        ]}
      />
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:text-left">
          {author.photo ? (
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full">
              <Image src={author.photo.src} alt={author.photo.alt} fill sizes="7rem" className="object-cover" />
            </div>
          ) : null}
          <div>
            <h1 className="font-display text-5xl uppercase tracking-wide text-black md:text-6xl">{author.name}</h1>
            <p className="mt-3 font-sans text-black/80">{author.bio}</p>
          </div>
        </div>

        {posts.length > 0 ? (
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
