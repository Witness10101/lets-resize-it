import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getAllBlogArticles } from "@/lib/blog";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Image Guides, Tutorials & Tips | Let&apos;s Resize It",
  description:
    "Practical image guides covering resizing, compression, file sizes, image formats, website images, and image optimization.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Image Guides, Tutorials & Tips | Let&apos;s Resize It",
    description:
      "Practical guides for resizing, compressing, converting, and optimizing images.",
    url: "/blog",
    type: "website",
  },
};

function formatDate(date?: string) {
  if (!date) return null;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function getCategory(keyword: string) {
  const value = keyword.toLowerCase();

  if (value.includes("compress")) {
    return "Image Compression";
  }

  if (value.includes("format") || value.includes("jpg") || value.includes("png")) {
    return "Image Formats";
  }

  if (value.includes("website")) {
    return "Web Images";
  }

  if (value.includes("kb") || value.includes("file size")) {
    return "Image File Size";
  }

  return "Image Resizing";
}

function getThumbnailStyle(slug: string) {
  const styles: Record<
    string,
    {
      eyebrow: string;
      title: string;
      icon: string;
    }
  > = {
    "how-to-resize-an-image": {
      eyebrow: "IMAGE RESIZING",
      title: "Resize Images",
      icon: "↔",
    },
    "how-to-resize-an-image-to-100-kb": {
      eyebrow: "FILE SIZE",
      title: "100 KB Images",
      icon: "100",
    },
    "how-to-reduce-image-size": {
      eyebrow: "OPTIMIZATION",
      title: "Reduce Image Size",
      icon: "↓",
    },
    "how-to-compress-an-image": {
      eyebrow: "COMPRESSION",
      title: "Compress Images",
      icon: "◉",
    },
    "jpg-vs-png-vs-webp": {
      eyebrow: "IMAGE FORMATS",
      title: "JPG vs PNG vs WebP",
      icon: "◎",
    },
    "how-to-resize-an-image-without-losing-quality": {
      eyebrow: "IMAGE QUALITY",
      title: "Resize Without Losing Quality",
      icon: "◆",
    },
    "what-image-size-should-i-use-for-a-website": {
      eyebrow: "WEB IMAGES",
      title: "Website Image Sizes",
      icon: "▣",
    },
  };

  return (
    styles[slug] ?? {
      eyebrow: "Let&apos;s Resize It",
      title: "Image Guide",
      icon: "↗",
    }
  );
}

export default function BlogPage() {
  const articles = [...getAllBlogArticles()].sort((a, b) => {
    const aDate = a.publishedAt
      ? new Date(a.publishedAt).getTime()
      : 0;

    const bDate = b.publishedAt
      ? new Date(b.publishedAt).getTime()
      : 0;

    return bDate - aDate;
  });

  return (
    <main className="min-h-screen bg-white">

        <Header />
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
              Let&apos;s Resize It Guides
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Image resizing, compression &amp; optimization guides
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Clear, practical guides to help you resize images, reduce file
              size, choose the right image format, and prepare images for
              websites, forms, applications, and everyday use.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ARTICLES
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              IMAGE KNOWLEDGE
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Latest guides
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Practical answers to common image resizing, compression, and
              optimization questions.
            </p>
          </div>

          <div className="text-sm text-slate-400">
            {articles.length} guides
          </div>
        </div>

        {articles.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-12 text-center">
            <h2 className="text-xl font-semibold text-slate-950">
              Guides are coming soon
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              We&apos;re preparing practical image optimization resources.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
              const thumbnail = getThumbnailStyle(article.slug);
              const category = getCategory(article.primaryKeyword);

              return (
                <article
                  key={article.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                >
                  {/* Thumbnail */}
                  <Link
                    href={`/blog/${article.slug}`}
                    className="relative block aspect-[16/9] overflow-hidden"
                    aria-label={`Read ${article.title}`}
                  >
                    {article.coverImage ? (
                      <Image
                        src={article.coverImage}
                        alt={
                          article.coverImageAlt ??
                          article.title
                        }
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="relative h-full overflow-hidden bg-slate-950">
                        <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />

                        <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_45%)]" />

                        <div className="relative flex h-full flex-col justify-between p-7">
                          <div className="flex items-start justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
                              {thumbnail.eyebrow}
                            </span>

                            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-white">
                              {thumbnail.icon}
                            </span>
                          </div>

                          <div>
                            <p className="max-w-xs text-xl font-bold tracking-tight text-white sm:text-2xl">
                              {thumbnail.title}
                            </p>

                            <div className="mt-4 h-px w-16 bg-blue-400/70" />

                            <p className="mt-3 text-xs text-slate-400">
                              Let&apos;s Resize It
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </Link>

                  {/* Card content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
                        {category}
                      </span>

                      {article.recommendedWordCount > 0 && (
                        <>
                          <span
                            className="h-1 w-1 rounded-full bg-slate-300"
                            aria-hidden="true"
                          />

                          <span className="text-xs text-slate-400">
                            {Math.round(
                              article.recommendedWordCount / 250
                            )}{" "}
                            min read
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="mt-4 text-xl font-bold leading-7 tracking-tight text-slate-950 transition-colors group-hover:text-blue-600">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                      {article.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-7">
                      {article.publishedAt ? (
                        <time
                          dateTime={article.publishedAt}
                          className="text-xs text-slate-400"
                        >
                          {formatDate(article.publishedAt)}
                        </time>
                      ) : (
                        <span className="text-xs text-slate-400">
                          Image guide
                        </span>
                      )}

                      <span className="inline-flex items-center text-sm font-semibold text-blue-600">
                        Read guide
                        <span
                          className="ml-1.5 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* =========================================================
          TOPICS
      ========================================================== */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-600">
              EXPLORE BY TOPIC
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Learn how to work with images
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Explore practical information about resizing, compression,
              image formats, file sizes, and web image optimization.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Resize Images",
                text: "Change image dimensions without unnecessary distortion.",
              },
              {
                title: "Reduce File Size",
                text: "Learn when resizing or compression is the better choice.",
              },
              {
                title: "Image Formats",
                text: "Understand JPG, PNG, WebP and when to use each.",
              },
              {
                title: "Web Image Optimization",
                text: "Choose practical dimensions and file sizes for websites.",
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-semibold text-slate-950">
                  {topic.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {topic.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TOOL CTA
      ========================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-600">
            Ready to try it?
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Resize your image in seconds
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Use Let&apos;s Resize It to resize images directly in your
            browser without complicated software.
          </p>

          <Link
            href="/resize-image"
            className="mt-7 inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Resize an image
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}