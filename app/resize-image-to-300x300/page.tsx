import type { Metadata } from "next";
import Link from "next/link";
import ResizeImageTo300x300Client from "./ResizeImageTo300x300Client";

const SITE_URL = "https://letsresizeit.com";
const PAGE_URL = `${SITE_URL}/resize-image-to-300x300`;

export const metadata: Metadata = {
  title: "Resize Image to 300x300 Online Free | Lets Resize It",
  description:
    "Resize any JPG, PNG, or WebP image to exactly 300x300 pixels online. Free, fast, and easy. Create square images for profiles, thumbnails, products, and more.",
  keywords: [
    "resize image to 300x300",
    "resize image to 300 x 300",
    "300x300 image resizer",
    "resize photo to 300x300",
    "resize picture to 300x300",
    "make image 300x300",
    "convert image to 300x300",
    "300x300 photo",
    "300x300 image",
    "square image resizer",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Resize Image to 300x300 Online Free",
    description:
      "Resize JPG, PNG, or WebP images to exactly 300x300 pixels online. Create square images quickly with Lets Resize It.",
    siteName: "Lets Resize It",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resize Image to 300x300 Online Free",
    description:
      "Resize any image to exactly 300x300 pixels online. Fast, simple, and free.",
  },
};

const faqs = [
  {
    question: "How do I resize an image to 300x300 pixels?",
    answer:
      "Upload your image to the Lets Resize It 300x300 image resizer. The tool sets the target dimensions to 300 pixels wide by 300 pixels high. Resize the image, preview the result, and download your 300x300 image.",
  },
  {
    question: "Can I resize JPG, PNG, and WebP images to 300x300?",
    answer:
      "Yes. You can use the 300x300 image resizer for common image formats such as JPG, PNG, and WebP.",
  },
  {
    question: "What does 300x300 mean for an image?",
    answer:
      "300x300 means the image is exactly 300 pixels wide and 300 pixels tall. Because both dimensions are equal, the result is a square image with a 1:1 aspect ratio.",
  },
  {
    question: "Will resizing an image to 300x300 make it square?",
    answer:
      "Yes. A 300x300 image has equal width and height, so its dimensions are square. If the original image has a different aspect ratio, fitting it into an exact 300x300 canvas may require cropping or changing the proportions depending on the resizing method.",
  },
  {
    question: "Is 300x300 a good image size for a profile picture?",
    answer:
      "A 300x300 square image can work well for profile pictures, avatars, thumbnails, and other small square image placements. The exact recommended size depends on the platform or application using the image.",
  },
  {
    question: "Does resizing an image to 300x300 reduce the file size?",
    answer:
      "It often reduces file size because the resulting image contains fewer pixels than a larger original. However, pixel dimensions and file size are different things. If you need a specific KB limit, use a target-size image resizer or compression tool instead.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Resize Image",
      item: `${SITE_URL}/resize-image`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Resize Image to 300x300",
      item: PAGE_URL,
    },
  ],
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Lets Resize It — Resize Image to 300x300",
  url: PAGE_URL,
  description:
    "Online image resizer for creating images with exact 300x300 pixel dimensions.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires a modern web browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function ResizeImageTo300x300Page() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="min-h-screen bg-white text-slate-900">
        {/* Breadcrumbs */}
        <div className="border-b border-slate-100 bg-slate-50/70">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
            >
              <Link
                href="/"
                className="transition-colors hover:text-slate-900"
              >
                Home
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href="/resize-image"
                className="transition-colors hover:text-slate-900"
              >
                Resize Image
              </Link>

              <span aria-hidden="true">/</span>

              <span className="font-medium text-slate-900">
                Resize to 300x300
              </span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-100">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
            <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />
            <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-violet-100/40 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Exact 300 × 300 pixel resizing
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Resize Image to{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                  300x300
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Resize any JPG, PNG, or WebP image to exactly{" "}
                <strong className="font-semibold text-slate-900">
                  300 × 300 pixels
                </strong>
                . Create a clean square image for profiles, thumbnails,
                products, forms, and other digital uses.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-1.5">
                  300 × 300 px
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5">
                  1:1 square
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5">
                  JPG
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5">
                  PNG
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5">
                  WebP
                </span>
              </div>
            </div>

            {/* Tool */}
            <div className="mx-auto mt-10 max-w-5xl">
              <ResizeImageTo300x300Client />
            </div>
          </div>
        </section>

        {/* Quick Answer / SEO intro */}
        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg shadow-blue-600/20">
                300
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  Need an image that is exactly 300x300?
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  A 300x300 image is exactly 300 pixels wide and 300 pixels
                  tall. That gives it a{" "}
                  <strong className="text-slate-900">1:1 aspect ratio</strong>,
                  making it a practical square format for profile images,
                  avatars, thumbnails, product images, directories, and other
                  layouts that require equal width and height.
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Upload your image above, resize it to the target dimensions,
                  check the result, and download the finished image.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why 300x300 */}
        <section className="border-y border-slate-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Exact dimensions
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Why resize an image to 300x300?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Exact pixel dimensions make it easier to create consistent
                square images across a website, application, directory, or
                digital project.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "◎",
                  title: "Profile images",
                  text: "Create square profile photos, avatars, and account images.",
                },
                {
                  icon: "▦",
                  title: "Thumbnails",
                  text: "Prepare consistent square thumbnails for cards and galleries.",
                },
                {
                  icon: "◇",
                  title: "Product images",
                  text: "Create uniform product visuals for catalogs and listings.",
                },
                {
                  icon: "✓",
                  title: "Fixed-size forms",
                  text: "Prepare images when a form or application requests 300x300 pixels.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-lg font-bold text-blue-600">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dimensions explanation */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                300 × 300 explained
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                What does 300x300 pixels mean?
              </h2>

              <div className="mt-6 space-y-4 text-slate-600">
                <p className="leading-7">
                  The first number represents the{" "}
                  <strong className="text-slate-900">width</strong> and the
                  second represents the{" "}
                  <strong className="text-slate-900">height</strong>.
                </p>

                <p className="leading-7">
                  So an image that is 300x300 contains a 300-pixel width and a
                  300-pixel height. Because both measurements are identical,
                  the resulting image is square.
                </p>

                <p className="leading-7">
                  This is different from resizing an image to a particular
                  file size such as 100 KB. Pixel dimensions describe the
                  physical image grid, while KB describes how much storage the
                  image file uses.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/resize-image"
                  className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Use the full image resizer
                </Link>

                <Link
                  href="/blog/how-to-resize-an-image"
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Learn how image resizing works
                </Link>
              </div>
            </div>

            {/* Visual dimension card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-violet-600/20" />

              <div className="relative flex min-h-[330px] items-center justify-center">
                <div className="relative aspect-square w-56 max-w-full rounded-2xl border-2 border-dashed border-blue-300/70 bg-gradient-to-br from-blue-500/20 to-violet-500/20 shadow-[0_0_80px_rgba(59,130,246,0.18)]">
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-blue-300">
                    300 px
                  </span>

                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-blue-300">
                    300 px
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-black">300</div>
                      <div className="mt-1 text-sm font-medium text-slate-300">
                        ×
                      </div>
                      <div className="text-4xl font-black">300</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative text-center">
                <p className="text-sm font-semibold text-slate-300">
                  Exact square dimensions
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Aspect ratio: 1:1
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to */}
        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Simple workflow
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                How to resize an image to 300x300
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
                You can create a 300x300 image in a few straightforward steps.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Upload",
                  text: "Choose the JPG, PNG, or WebP image you want to resize.",
                },
                {
                  number: "02",
                  title: "Set dimensions",
                  text: "Use the 300x300 target dimensions provided by this tool.",
                },
                {
                  number: "03",
                  title: "Resize",
                  text: "Process the image and review the resulting square image.",
                },
                {
                  number: "04",
                  title: "Download",
                  text: "Download your resized 300x300 image when it looks right.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-sm font-black text-blue-600">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="#resizer"
                className="inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Resize an image to 300x300
              </Link>
            </div>
          </div>
        </section>

        {/* Important distinction */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-7 sm:p-9">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-xl">
                !
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950">
                  300x300 pixels is not the same as 300 KB
                </h2>

                <p className="mt-3 leading-7 text-slate-700">
                  This distinction matters.{" "}
                  <strong>300x300</strong> describes an image&apos;s pixel
                  dimensions. <strong>300 KB</strong> describes the file size.
                  An image can be exactly 300x300 pixels and still have a file
                  size that varies depending on its format, image content, and
                  compression.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/resize-image-to-50-kb"
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-amber-200 transition hover:bg-amber-100"
                  >
                    Resize to 50 KB
                  </Link>

                  <Link
                    href="/resize-image-to-100-kb"
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-amber-200 transition hover:bg-amber-100"
                  >
                    Resize to 100 KB
                  </Link>

                  <Link
                    href="/resize-image-to-200-kb"
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-amber-200 transition hover:bg-amber-100"
                  >
                    Resize to 200 KB
                  </Link>

                  <Link
                    href="/resize-image-to-500-kb"
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-amber-200 transition hover:bg-amber-100"
                  >
                    Resize to 500 KB
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related tools */}
        <section className="border-y border-slate-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  More resizing tools
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                  Choose another image size
                </h2>

                <p className="mt-3 max-w-2xl text-slate-600">
                  Need a different exact dimension? Try another Lets Resize It
                  tool.
                </p>
              </div>

              <Link
                href="/resize-image"
                className="text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                View full image resizer →
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  href: "/resize-image-to-200x200",
                  size: "200 × 200",
                  title: "Resize Image to 200x200",
                  description:
                    "Create a smaller square image with exact 200x200 pixel dimensions.",
                },
                {
                  href: "/resize-image-to-300x300",
                  size: "300 × 300",
                  title: "Resize Image to 300x300",
                  description:
                    "Create an exact 300x300 square image for profiles, thumbnails, and more.",
                  active: true,
                },
                {
                  href: "/resize-image-to-1080x1080",
                  size: "1080 × 1080",
                  title: "Resize Image to 1080x1080",
                  description:
                    "Create a larger square image when your project needs 1080x1080 pixels.",
                },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className={`group rounded-3xl border p-6 transition-all hover:-translate-y-1 hover:shadow-xl ${
                    tool.active
                      ? "border-blue-200 bg-blue-50/50 shadow-sm"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-xl bg-slate-950 px-3 py-2 text-xs font-black text-white">
                      {tool.size}
                    </span>

                    <span className="text-slate-400 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {tool.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {tool.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Guides / topical authority */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Learn more
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Image resizing guides
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Learn how image dimensions, file size, compression, and image
                quality work together before choosing the right tool.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <Link
                href="/blog/how-to-resize-an-image"
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <h3 className="font-bold">How to Resize an Image</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Understand pixel dimensions, aspect ratios, and the basic
                  resizing process.
                </p>
                <span className="mt-5 inline-block text-sm font-bold text-blue-400">
                  Read guide →
                </span>
              </Link>

              <Link
                href="/blog/blog/how-to-resize-an-image-without-losing-quality"
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <h3 className="font-bold">
                  Resize Without Losing Quality
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Learn what actually causes blur, distortion, and unnecessary
                  quality loss.
                </p>
                <span className="mt-5 inline-block text-sm font-bold text-blue-400">
                  Read guide →
                </span>
              </Link>

              <Link
                href="/blog/what-image-size-should-i-use-for-a-website"
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <h3 className="font-bold">
                  What Image Size Should I Use?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Explore practical image dimensions for websites and digital
                  layouts.
                </p>
                <span className="mt-5 inline-block text-sm font-bold text-blue-400">
                  Read guide →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Resize image to 300x300 questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none pr-8 font-bold text-slate-950 marker:hidden">
                  <span className="relative block">
                    {faq.question}
                    <span className="absolute right-0 top-0 text-xl text-slate-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-cyan-600 to-violet-700 p-8 text-white shadow-2xl sm:p-12">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/75">
                  Ready to resize?
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Create your 300x300 image now.
                </h2>

                <p className="mt-4 leading-7 text-white/80">
                  Upload your image and resize it to the exact square
                  dimensions you need.
                </p>
              </div>

              <Link
                href="#resizer"
                className="shrink-0 rounded-full bg-white px-7 py-3.5 text-sm font-black text-blue-700 shadow-xl transition hover:bg-slate-50"
              >
                Resize to 300x300
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}