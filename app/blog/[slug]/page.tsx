import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getAllBlogSlugs,
  getBlogArticleBySlug,
  getRelatedBlogArticles,
  type BlogArticle,
  type BlogContentBlock,
} from "@/lib/blog";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/*
 * ============================================================
 * STATIC PARAMS
 * ============================================================
 *
 * Generate every blog article URL from lib/blog.ts.
 */
export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

/*
 * ============================================================
 * SEO METADATA
 * ============================================================
 *
 * Metadata is generated from the article data in blog.ts.
 */
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = getBlogArticleBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Let's Resize It",
      description: "The requested blog article could not be found.",
    };
  }

  return {
    title: post.seoTitle,
    description: post.description,

    alternates: {
      canonical: `/blog/${post.slug}`,
    },

    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.ogTitle,
      description: post.ogDescription,

      ...(post.publishedAt
        ? {
            publishedTime: post.publishedAt,
          }
        : {}),

      ...(post.updatedAt
        ? {
            modifiedTime: post.updatedAt,
          }
        : {}),

      ...(post.coverImage
        ? {
            images: [
              {
                url: post.coverImage,
                alt: post.coverImageAlt || post.title,
              },
            ],
          }
        : {}),
    },

    twitter: {
      card: "summary_large_image",
      title: post.ogTitle,
      description: post.ogDescription,

      ...(post.coverImage
        ? {
            images: [post.coverImage],
          }
        : {}),
    },
  };
}

/*
 * ============================================================
 * ARTICLE PAGE
 * ============================================================
 */
export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const post = getBlogArticleBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogArticles(post);

  /*
   * ==========================================================
   * ARTICLE STRUCTURED DATA
   * ==========================================================
   */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: post.title,

    description: post.description,

    url: `/blog/${post.slug}`,

    ...(post.publishedAt
      ? {
          datePublished: post.publishedAt,
        }
      : {}),

    ...(post.updatedAt
      ? {
          dateModified: post.updatedAt,
        }
      : {}),

    ...(post.coverImage
      ? {
          image: [post.coverImage],
        }
      : {}),

    author: {
      "@type": "Organization",
      name: "Let's Resize It",
    },

    publisher: {
      "@type": "Organization",
      name: "Let's Resize It",
    },
  };

  /*
   * ==========================================================
   * FAQ STRUCTURED DATA
   * ==========================================================
   */
  const faqSchema =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  /*
   * ==========================================================
   * BREADCRUMB STRUCTURED DATA
   * ==========================================================
   */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `/blog/${post.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
        <Header />
      {/* =======================================================
          STRUCTURED DATA
      ======================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* =======================================================
          ARTICLE HEADER
      ======================================================== */}

      <article>
        <header className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            {/* Breadcrumb */}

            <nav
              aria-label="Breadcrumb"
              className="mb-8"
            >
              <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-blue-600"
                  >
                    Home
                  </Link>
                </li>

                <li aria-hidden="true">/</li>

                <li>
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-blue-600"
                  >
                    Blog
                  </Link>
                </li>

                <li aria-hidden="true">/</li>

                <li className="max-w-[280px] truncate text-slate-400">
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Primary keyword / article label */}

            <div className="mb-5">
              <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Image Guide
              </span>
            </div>

            {/* Title */}

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              {post.title}
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {post.description}
            </p>

            {/* Article metadata */}

            {(post.publishedAt || post.updatedAt) && (
              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                {post.publishedAt && (
                  <time dateTime={post.publishedAt}>
                    Published {formatDate(post.publishedAt)}
                  </time>
                )}

                {post.updatedAt && (
                  <>
                    <span
                      className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block"
                      aria-hidden="true"
                    />

                    <time dateTime={post.updatedAt}>
                      Updated {formatDate(post.updatedAt)}
                    </time>
                  </>
                )}
              </div>
            )}
          </div>
        </header>

        {/* =====================================================
            FEATURED IMAGE
        ====================================================== */}

        {post.coverImage && (
          <div className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
              <img
                src={post.coverImage}
                alt={post.coverImageAlt || post.title}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        )}

        {/* =====================================================
            ARTICLE CONTENT
        ====================================================== */}

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div
            className="
              prose
              prose-slate
              max-w-none

              prose-headings:font-bold
              prose-headings:tracking-tight
              prose-h2:mt-12
              prose-h2:text-2xl
              prose-h3:mt-10
              prose-h3:text-xl

              prose-p:leading-7

              prose-a:text-blue-600
              prose-a:no-underline
              hover:prose-a:underline

              prose-img:rounded-xl

              prose-table:my-8
            "
          >
            {renderContent(post.content)}
          </div>
        </div>
      </article>

      {/* =========================================================
          FAQ SECTION
      ========================================================== */}

      {post.faqs.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Frequently asked questions
            </h2>

            <div className="mt-8 space-y-6">
              {post.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {faq.question}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          RELATED ARTICLES
      ========================================================== */}

      {relatedPosts.length > 0 && (
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Related articles
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  More image guides you may find useful.
                </p>
              </div>

              <Link
                href="/blog"
                className="hidden text-sm font-semibold text-blue-600 hover:text-blue-700 sm:block"
              >
                View all articles →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold leading-6 text-slate-950 transition-colors group-hover:text-blue-600">
                    {relatedPost.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                    {relatedPost.excerpt}
                  </p>

                  <span className="mt-5 inline-flex text-sm font-semibold text-blue-600">
                    Read article →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          RELATED TOOLS
      ========================================================== */}

      {post.relatedTools.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Useful image tools
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Need to put this guide into practice? Try one of
                these free image tools.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {post.relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <h3 className="font-semibold text-slate-950 transition-colors group-hover:text-blue-600">
                    {tool.title}
                  </h3>

                  {tool.description && (
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {tool.description}
                    </p>
                  )}

                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-600">
                    Use tool →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          EXTERNAL REFERENCES
      ========================================================== */}

      {post.externalReferences &&
        post.externalReferences.length > 0 && (
          <section className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
              <h2 className="text-lg font-bold text-slate-950">
                References
              </h2>

              <div className="mt-5 space-y-4">
                {post.externalReferences.map((reference) => (
                  <div key={reference.name}>
                    {reference.url ? (
                      <a
                        href={reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        {reference.name}
                      </a>
                    ) : (
                      <span className="font-semibold text-slate-900">
                        {reference.name}
                      </span>
                    )}

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {reference.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* =========================================================
          TOOL CTA
      ========================================================== */}

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Need to resize an image?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Use Let&apos;s Resize It to resize your image directly
            in your browser.
          </p>

          <Link
            href="/resize-image"
            className="mt-7 inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Resize an image

            <svg
              className="ml-2 h-4 w-4"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 10h11" />
              <path d="m11 6 4 4-4 4" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/*
 * ============================================================
 * CONTENT RENDERER
 * ============================================================
 *
 * This renderer matches the exact BlogContentBlock union
 * defined in lib/blog.ts.
 */
function renderContent(content: BlogContentBlock[]) {
  return content.map((block, index) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={index}>
            {block.text}
          </p>
        );

      case "heading":
        if (block.level === 3) {
          return (
            <h3 key={index}>
              {block.text}
            </h3>
          );
        }

        return (
          <h2 key={index}>
            {block.text}
          </h2>
        );

      case "list":
        return (
          <ul key={index}>
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item}
              </li>
            ))}
          </ul>
        );

      case "steps":
        return (
          <ol key={index}>
            {block.items.map((step, stepIndex) => (
              <li key={stepIndex}>
                <strong>{step.title}</strong>

                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        );

      case "table":
        return (
          <div
            key={index}
            className="my-8 overflow-x-auto rounded-xl border border-slate-200"
          >
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  {block.headers.map((header, headerIndex) => (
                    <th
                      key={headerIndex}
                      className="px-4 py-3 text-left text-sm font-semibold text-slate-900"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-slate-100 last:border-0"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-4 py-3 text-sm leading-6 text-slate-600"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "callout":
        return (
          <aside
            key={index}
            className="my-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 not-prose"
          >
            <h3 className="text-base font-bold text-blue-950">
              {block.title}
            </h3>

            <p className="mt-2 text-sm leading-7 text-blue-900">
              {block.text}
            </p>
          </aside>
        );

      default:
        return null;
    }
  });
}

/*
 * ============================================================
 * DATE FORMATTER
 * ============================================================
 */
function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}