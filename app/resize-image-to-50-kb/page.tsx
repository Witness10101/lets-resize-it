import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ResizeImageTo50KbClient from "./ResizeImageTo50KbClient";

const SITE_URL = "https://letsresizeit.com";
const PAGE_URL = `${SITE_URL}/resize-image-to-50-kb`;

export const metadata: Metadata = {
  title: "Resize Image to 50 KB Online – Free Image Resizer",
  description:
    "Resize an image to 50 KB online for free. Reduce JPG, PNG and WebP images to around 50 KB while maintaining the best possible quality. No software or signup required.",
  keywords: [
    "resize image to 50 kb",
    "resize image to 50kb",
    "reduce image size to 50 kb",
    "compress image to 50 kb",
    "image resizer to 50 kb",
    "resize jpg to 50 kb",
    "resize png to 50 kb",
    "resize photo to 50 kb",
    "make image 50 kb",
    "reduce photo size to 50 kb",
    "image under 50 kb",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Resize Image to 50 KB Online – Free Image Resizer",
    description:
      "Resize and reduce images to around 50 KB online. Free, fast and easy to use.",
    url: PAGE_URL,
    siteName: "Let's Resize It",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resize Image to 50 KB Online",
    description:
      "Free online tool to resize images to around 50 KB while preserving the best possible quality.",
  },
};

const faqs = [
  {
    question: "How do I resize an image to 50 KB?",
    answer:
      "Upload your image using the 50 KB image resizer above. The tool analyzes the image and reduces its dimensions and/or image quality as needed to create a file around the 50 KB target. You can then download the resized image.",
  },
  {
    question: "Can I reduce a JPG image to 50 KB?",
    answer:
      "Yes. JPG images are well suited for reducing file size because JPEG compression can significantly reduce the size of photographs. Upload your JPG and use the 50 KB target.",
  },
  {
    question: "Can I resize a PNG image to 50 KB?",
    answer:
      "Yes. PNG images can be resized and optimized toward a 50 KB target. However, PNG files containing detailed graphics or transparency may require more aggressive resizing to reach a very small file size.",
  },
  {
    question: "Can I make a photo exactly 50 KB?",
    answer:
      "The goal of the tool is to get the resulting image as close as practical to the 50 KB target while maintaining useful visual quality. The exact file size can vary because image compression depends on dimensions, format and image content.",
  },
  {
    question: "Will reducing an image to 50 KB lower its quality?",
    answer:
      "Reducing an image to a very small file size can affect quality. The tool aims to balance file size and visual quality by adjusting the image appropriately rather than simply applying maximum compression.",
  },
  {
    question: "What image formats can I resize to 50 KB?",
    answer:
      "The tool is designed for common image formats such as JPG, JPEG, PNG and WebP. Your browser may have additional format-specific limitations.",
  },
  {
    question: "Why would I need a 50 KB image?",
    answer:
      "A 50 KB limit is common when websites, online applications, forms or portals restrict the maximum size of uploaded photographs or documents. Smaller images can also be useful for faster uploads and sharing.",
  },
  {
    question: "Is the 50 KB image resizer free?",
    answer:
      "Yes. Let's Resize It provides this online image resizing tool for free, without requiring you to install desktop software.",
  },
];

const relatedPages = [
  {
    href: "/resize-image",
    title: "Resize Image",
    description:
      "Resize an image to custom dimensions and control the output size.",
    primary: true,
  },
  {
    href: "/resize-image-to-100-kb",
    title: "Resize Image to 100 KB",
    description:
      "Reduce an image toward a 100 KB file-size target.",
  },
  {
    href: "/resize-image-to-200-kb",
    title: "Resize Image to 200 KB",
    description:
      "Resize an image toward a 200 KB target.",
  },
  {
    href: "/resize-image-to-500-kb",
    title: "Resize Image to 500 KB",
    description:
      "Reduce larger images toward a 500 KB target.",
  },
  {
    href: "/compress-image",
    title: "Compress Image",
    description:
      "Compress images to reduce file size while retaining useful quality.",
  },
  {
    href: "/resize-jpg",
    title: "Resize JPG",
    description:
      "Resize JPG and JPEG photos quickly online.",
  },
  {
    href: "/resize-png",
    title: "Resize PNG",
    description:
      "Resize PNG images while maintaining sharp graphics.",
  },
  {
    href: "/resize-webp",
    title: "Resize WebP",
    description:
      "Resize modern WebP images for websites and digital use.",
  },
];

function StructuredData() {
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Resize Image to 50 KB",
    url: PAGE_URL,
    description:
      "Free online image resizer for reducing JPG, PNG and WebP images toward a 50 KB target.",
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "Image Resizer",
    operatingSystem: "Any",
    browserRequirements: "Requires a modern web browser",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "Let's Resize It",
      url: SITE_URL,
    },
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
        name: "Resize Image to 50 KB",
        item: PAGE_URL,
      },
    ],
  };

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

  return (
    <>
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
    </>
  );
}

export default function ResizeImageTo50KbPage() {
  return (
    <>
      <StructuredData />

      <Header />

      <main className="flex-1 bg-white">
        {/* ============================================================
            HERO
        ============================================================ */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-blue-50 via-white to-white">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan-200/25 blur-3xl" />
            <div className="absolute left-1/2 top-40 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-100/30 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-16">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mx-auto mb-7 flex max-w-5xl flex-wrap items-center justify-center gap-2 text-xs text-slate-500"
            >
              <Link
                href="/"
                className="transition-colors hover:text-blue-600"
              >
                Home
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href="/resize-image"
                className="transition-colors hover:text-blue-600"
              >
                Resize Image
              </Link>

              <span aria-hidden="true">/</span>

              <span className="font-semibold text-slate-700">
                Resize Image to 50 KB
              </span>
            </nav>

            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold text-blue-700 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Target File Size Resizer
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Resize Image to{" "}
                <span className="text-blue-600">50 KB</span>
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Reduce an image to around 50 KB online without complicated
                software. Upload your JPG, PNG or WebP image and let
                Let's Resize It find a practical balance between file size
                and image quality.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500 sm:text-sm">
                <span className="inline-flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  Free online tool
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  No signup
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  Browser-based
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  50 KB target
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ACTUAL TOOL
        ============================================================ */}
        <section className="relative -mt-2 pb-16 sm:pb-20">
          <ResizeImageTo50KbClient />
        </section>

        {/* ============================================================
            INTRODUCTION
        ============================================================ */}
        <section className="border-t border-slate-100 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
              50 KB Image Resizer
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Free online tool to reduce an image to 50 KB
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
              <p>
                When a website or online application asks you to upload an
                image under 50 KB, simply changing the image dimensions may not
                be enough. The final file size depends on several factors,
                including the image format, dimensions, visual detail and
                compression settings.
              </p>

              <p>
                Our{" "}
                <strong className="font-semibold text-slate-900">
                  resize image to 50 KB
                </strong>{" "}
                tool is designed around that specific requirement. Instead of
                making you guess which width, height or compression setting to
                use, the tool works toward a 50 KB target and gives you a
                downloadable result.
              </p>

              <p>
                This makes it useful when you need to{" "}
                <strong className="font-semibold text-slate-900">
                  reduce photo size to 50 KB
                </strong>
                , prepare an image for an online form, reduce an application
                photograph, or create a smaller image for faster uploading and
                sharing.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            WHY 50 KB
        ============================================================ */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                Why 50 KB?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                When would you need an image under 50 KB?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                A 50 KB image is small enough for situations where an upload
                system has a strict file-size restriction.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Online applications",
                  text: "Some application forms place strict limits on uploaded photographs and supporting images.",
                },
                {
                  number: "02",
                  title: "Government portals",
                  text: "Online portals can require photographs or scanned images to remain below a specified size.",
                },
                {
                  number: "03",
                  title: "Registration forms",
                  text: "Smaller images can make it easier to satisfy upload restrictions on registration systems.",
                },
                {
                  number: "04",
                  title: "Fast uploads",
                  text: "A smaller image generally requires less data to upload, download and share.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-xs font-black tracking-wider text-blue-600">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            HOW TO RESIZE TO 50 KB
        ============================================================ */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                How It Works
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                How to resize an image to 50 KB
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                You can reduce your image toward the 50 KB target in just a
                few steps.
              </p>
            </div>

            <div className="relative mt-12">
              <div
                className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-slate-200 lg:block"
                aria-hidden="true"
              />

              <div className="grid gap-8 lg:grid-cols-3">
                {[
                  {
                    step: "1",
                    title: "Upload your image",
                    text: "Choose the JPG, PNG or WebP image you want to reduce.",
                  },
                  {
                    step: "2",
                    title: "Set the 50 KB target",
                    text: "The tool works toward the target file size while considering the image dimensions and quality.",
                  },
                  {
                    step: "3",
                    title: "Download the result",
                    text: "Review the output and download your smaller image when you're ready.",
                  },
                ].map((item) => (
                  <article
                    key={item.step}
                    className="relative text-center"
                  >
                    <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white shadow-lg shadow-blue-600/20">
                      {item.step}
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            QUALITY EXPLANATION
        ============================================================ */}
        <section className="bg-slate-950 py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
                Size vs Quality
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Can you reduce an image to 50 KB without losing quality?
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
                <p>
                  There is no universal setting that can make every image
                  exactly 50 KB while keeping identical visual quality.
                  Photographs with lots of detail generally require more data
                  than simple graphics.
                </p>

                <p>
                  The best approach is to balance dimensions, image format and
                  compression. A very large photograph may need its dimensions
                  reduced before it can reach a 50 KB target without becoming
                  unnecessarily degraded.
                </p>

                <p>
                  For this reason, a good{" "}
                  <strong className="text-white">
                    50 KB image resizer
                  </strong>{" "}
                  should focus on the target file size while making sensible
                  adjustments rather than simply applying maximum compression.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
              <h3 className="text-xl font-bold">
                What affects final image size?
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  [
                    "Image dimensions",
                    "Larger width and height generally require more image data.",
                  ],
                  [
                    "Image format",
                    "JPG, PNG and WebP use different compression approaches.",
                  ],
                  [
                    "Image detail",
                    "Complex photographs typically contain more information than simple graphics.",
                  ],
                  [
                    "Compression",
                    "Higher compression can reduce file size but may affect visual quality.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            FORMAT SECTION
        ============================================================ */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                Image Formats
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Resize JPG, PNG and WebP images to 50 KB
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Different image formats behave differently when you try to
                reach a small file-size target. Choosing the right format can
                make a meaningful difference.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200">
              <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
                <article className="p-6 sm:p-8">
                  <div className="inline-flex rounded-lg bg-red-50 px-3 py-1 text-xs font-black text-red-600">
                    JPG / JPEG
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    Best for photographs
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    JPG is commonly used for photographs and can often reach
                    small file sizes efficiently.
                  </p>

                  <Link
                    href="/resize-jpg"
                    className="mt-5 inline-flex text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    Resize JPG →
                  </Link>
                </article>

                <article className="p-6 sm:p-8">
                  <div className="inline-flex rounded-lg bg-blue-50 px-3 py-1 text-xs font-black text-blue-600">
                    PNG
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    Best for graphics
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    PNG is useful for graphics, screenshots and images where
                    lossless quality and transparency matter.
                  </p>

                  <Link
                    href="/resize-png"
                    className="mt-5 inline-flex text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    Resize PNG →
                  </Link>
                </article>

                <article className="p-6 sm:p-8">
                  <div className="inline-flex rounded-lg bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-600">
                    WebP
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    Modern web format
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    WebP is designed for efficient web delivery and can be a
                    useful choice when optimizing images for websites.
                  </p>

                  <Link
                    href="/resize-webp"
                    className="mt-5 inline-flex text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    Resize WebP →
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            RELATED TARGETS
        ============================================================ */}
        <section className="bg-blue-50/60 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                More Target Sizes
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Need a different image file size?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Choose another target size or use our general image resizer
                when you need more control.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedPages.slice(0, 4).map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-slate-950 group-hover:text-blue-600">
                      {page.title}
                    </h3>

                    <span
                      className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-500"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {page.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            RELATED TOOLS
        ============================================================ */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                  Let's Resize It
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  More image tools
                </h2>
              </div>

              <Link
                href="/resize-image"
                className="text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                Open Image Resizer →
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedPages.slice(4).map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-slate-950 group-hover:text-blue-600">
                      {page.title}
                    </h3>

                    <span
                      className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-500"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {page.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            FAQ
        ============================================================ */}
        <section
          id="faq"
          className="border-t border-slate-100 bg-slate-50 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                FAQ
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Frequently asked questions about 50 KB images
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Everything you need to know about reducing an image to a 50 KB
                target.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>

                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-transform duration-200 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>

                  <p className="mt-4 pr-10 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            FINAL CTA
        ============================================================ */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 px-6 py-12 text-center text-white shadow-xl sm:px-10 sm:py-14">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-100">
                Ready to resize?
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Get your image close to 50 KB
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Upload your image and let Let's Resize It work toward the
                50 KB target.
              </p>

              <a
                href="#resize-image-to-50-kb"
                className="mt-7 inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-blue-700 shadow-sm transition-all hover:bg-blue-50 hover:shadow-md"
              >
                Resize Image to 50 KB
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}