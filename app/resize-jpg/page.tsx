import type { Metadata } from "next";
import Link from "next/link";

import ResizeJpgClient from "./ResizeJpgClient";

const SITE_URL = "https://letsresizeit.com";
const PAGE_URL = `${SITE_URL}/resize-jpg`;

export const metadata: Metadata = {
  title: "Resize JPG Image Online Free | JPG Resizer | Lets Resize It",
  description:
    "Resize JPG images online for free. Change JPG dimensions, create smaller JPG images, and download your resized image instantly. Fast, private, and easy to use.",
  keywords: [
    "resize jpg",
    "resize jpg image",
    "jpg resizer",
    "resize jpeg",
    "resize jpg online",
    "resize jpg online free",
    "change jpg dimensions",
    "reduce jpg dimensions",
    "jpg image resizer",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Resize JPG Image Online Free | JPG Resizer",
    description:
      "Free online JPG resizer for changing image dimensions quickly and easily.",
    url: PAGE_URL,
    siteName: "Lets Resize It",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Resize JPG Image Online Free | Lets Resize It",
    description:
      "Resize JPG images online for free. Change dimensions and download your resized JPG.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqItems = [
  {
    question: "How do I resize a JPG image online?",
    answer:
      "Upload your JPG image to the Lets Resize It JPG resizer, choose the dimensions you need, process the image, and download the resized JPG. The tool works directly in your browser.",
  },
  {
    question: "Can I resize a JPG image without installing software?",
    answer:
      "Yes. Lets Resize It is an online JPG resizer that works directly in your web browser, so you do not need to install Photoshop or another image-editing application.",
  },
  {
    question: "Can I resize JPG images for free?",
    answer:
      "Yes. You can use the Lets Resize It JPG resizer online for free to change the dimensions of your JPG images.",
  },
  {
    question: "Can I resize a JPG to a specific width and height?",
    answer:
      "Yes. You can use the image resizing controls to create a JPG with the dimensions required for your website, form, profile image, thumbnail, document, or other use case.",
  },
  {
    question: "Does resizing a JPG reduce image quality?",
    answer:
      "Resizing changes the number of pixels in an image and can affect visual quality. Using suitable dimensions and image quality settings can help maintain a good balance between image quality and file size.",
  },
  {
    question: "Is my JPG uploaded to a server?",
    answer:
      "Lets Resize It is designed around browser-based image processing. Your image can be processed locally in your browser rather than requiring a server upload for the resize operation.",
  },
];

export default function ResizeJpgPage() {
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Lets Resize It — JPG Resizer",
    url: PAGE_URL,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    description:
      "Free online JPG image resizer for changing image dimensions and creating resized JPG images.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
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
        name: "Resize JPG",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
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

      <main className="min-h-screen bg-white text-slate-900">
        {/* Breadcrumb */}
        <div className="border-b border-slate-100 bg-slate-50/70">
          <div className="mx-auto max-w-7xl px-5 py-3 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
            >
              <Link
                href="/"
                className="transition hover:text-slate-950"
              >
                Home
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href="/resize-image"
                className="transition hover:text-slate-950"
              >
                Resize Image
              </Link>

              <span aria-hidden="true">/</span>

              <span className="font-medium text-slate-900">
                Resize JPG
              </span>
            </nav>
          </div>
        </div>

        {/* Hero / SEO introduction */}
        <section className="relative overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.13),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.10),transparent_30%)]" />

          <div className="mx-auto max-w-7xl px-5 pb-12 pt-14 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Free Online JPG Resizer
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Resize JPG Image{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
                  Online
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                Resize JPG and JPEG images to the exact dimensions you need.
                Change image width and height, create smaller versions, and
                download your resized JPG quickly and easily.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">
                  ✓ Free JPG resizer
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">
                  ✓ Custom dimensions
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">
                  ✓ Browser-based processing
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">
                  ✓ No software installation
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Actual tool */}
        <ResizeJpgClient />

        {/* Why resize JPG */}
        <section className="border-y border-slate-100 bg-slate-50/60">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
                JPG Image Resizing
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Resize JPG images for any dimension you need
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                JPG is one of the most widely used image formats for
                photographs, websites, forms, social media, documents, and
                digital platforms. Resizing a JPG can help you meet specific
                pixel-dimension requirements or create a more suitable image
                for your intended use.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: "📐",
                  title: "Change image dimensions",
                  text:
                    "Create a JPG with the width and height required by a website, application, form, or other platform.",
                },
                {
                  icon: "⚡",
                  title: "Create smaller images",
                  text:
                    "Reduce the pixel dimensions of large JPG images when you need a more compact version for digital use.",
                },
                {
                  icon: "🖼️",
                  title: "Prepare images for websites",
                  text:
                    "Resize photographs and graphics before adding them to websites, pages, cards, profiles, and other online content.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl">
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

        {/* How to resize JPG */}
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
                How it works
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                How to resize a JPG image
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Resize your JPG in a few simple steps without needing a
                desktop image editor.
              </p>

              <a
                href="#resize-jpg-tool"
                className="mt-7 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-600"
              >
                Resize JPG now
              </a>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Upload your JPG",
                  text:
                    "Choose the JPG or JPEG image you want to resize from your device.",
                },
                {
                  number: "02",
                  title: "Choose your dimensions",
                  text:
                    "Enter the width and height you need for the resized image.",
                },
                {
                  number: "03",
                  title: "Resize and download",
                  text:
                    "Process your image and download the resized JPG when it is ready.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-sm font-black text-white">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO content */}
        <section className="border-y border-slate-100 bg-white">
          <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
            <article className="prose prose-slate max-w-none">
              <h2>Resize JPG images online</h2>

              <p>
                When you need to change the dimensions of a JPG image, an
                online JPG resizer can be a convenient alternative to
                installing desktop image-editing software. Lets Resize It
                provides a simple way to resize JPG and JPEG images directly
                from your browser.
              </p>

              <p>
                You can use the tool when a website, application, form,
                profile system, document, or other service requires an image
                with specific pixel dimensions. Instead of opening a large
                image editor, upload your JPG, select the dimensions you need,
                and create a resized version.
              </p>

              <h3>What does resizing a JPG mean?</h3>

              <p>
                Image dimensions describe the number of pixels across the
                width and height of an image. For example, a 1200 × 800 JPG
                contains 1200 pixels across and 800 pixels vertically.
                Resizing it changes those pixel dimensions.
              </p>

              <p>
                Resizing is different from simply changing the file name or
                changing the file format. The actual image dimensions are
                changed so the resulting image has a different pixel size.
              </p>

              <h3>Why would you resize a JPG?</h3>

              <p>
                There are many situations where a JPG needs to be resized.
                Websites may recommend specific image dimensions, online forms
                may have image requirements, profile systems may require
                square images, and large photographs may need smaller
                dimensions before being used online.
              </p>

              <p>
                Resizing can also be useful when preparing images for
                thumbnails, product listings, blog posts, presentations,
                social profiles, documents, and other digital content.
              </p>

              <h3>Resize JPG without installing software</h3>

              <p>
                Lets Resize It is designed to make common image tasks simple.
                You can resize a JPG directly from a modern web browser without
                installing a dedicated image editor.
              </p>

              <p>
                If you need a fixed square dimension rather than a custom
                resize, you can also use our dedicated fixed-size tools.
              </p>

              <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
                <Link
                  href="/resize-image-to-200x200"
                  className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                    200 × 200
                  </span>

                  <h4 className="mt-2 font-bold text-slate-950">
                    Resize to 200x200
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Create an exact 200×200 square image.
                  </p>
                </Link>

                <Link
                  href="/resize-image-to-300x300"
                  className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                    300 × 300
                  </span>

                  <h4 className="mt-2 font-bold text-slate-950">
                    Resize to 300x300
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Create an exact 300×300 square image.
                  </p>
                </Link>

                <Link
                  href="/resize-image-to-1080x1080"
                  className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                    1080 × 1080
                  </span>

                  <h4 className="mt-2 font-bold text-slate-950">
                    Resize to 1080x1080
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Create a larger square JPG image.
                  </p>
                </Link>
              </div>

              <h3>Need to reduce JPG file size?</h3>

              <p>
                Pixel dimensions and file size are related but they are not the
                same thing. A JPG can have smaller dimensions while still
                having a file size that is larger than a website or upload
                limit allows.
              </p>

              <p>
                If your requirement is specifically a maximum file size in
                kilobytes, use one of our size-targeted image tools instead.
              </p>

              <div className="not-prose my-10 rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-300">
                  Need a specific file size?
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  Resize JPG to a target KB size
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  If a website asks you to upload a JPG under a particular
                  file-size limit, dimensions alone may not be enough. Use a
                  target-size tool when your requirement is expressed in KB.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/resize-image-to-50-kb"
                    className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-indigo-50"
                  >
                    Resize to 50 KB
                  </Link>

                  <Link
                    href="/resize-image-to-100-kb"
                    className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-indigo-50"
                  >
                    Resize to 100 KB
                  </Link>

                  <Link
                    href="/resize-image-to-200-kb"
                    className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-indigo-50"
                  >
                    Resize to 200 KB
                  </Link>

                  <Link
                    href="/resize-image-to-500-kb"
                    className="rounded-xl border border-slate-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    Resize to 500 KB
                  </Link>
                </div>
              </div>

              <h3>JPG vs JPEG</h3>

              <p>
                JPG and JPEG refer to the same image format. The difference is
                primarily historical naming: the JPG extension became common
                because older systems used shorter file extensions. A JPG and
                JPEG image can both be resized using this tool.
              </p>

              <h3>JPG, PNG, or WebP?</h3>

              <p>
                JPG is commonly suited to photographs and images with many
                colors. PNG can be preferable when lossless image data or
                transparency is important, while WebP is a modern web-oriented
                format that can provide efficient image delivery.
              </p>

              <p>
                If you specifically need to resize another image format, you
                can explore the dedicated tools below.
              </p>

              <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
                <Link
                  href="/resize-image"
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                    PNG
                  </span>

                  <h4 className="mt-2 font-bold text-slate-950">
                    Resize PNG
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Resize PNG images online.
                  </p>
                </Link>

                <Link
                  href="/webp-to-png"
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                    WebP
                  </span>

                  <h4 className="mt-2 font-bold text-slate-950">
                    Resize WebP
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Resize WebP images online.
                  </p>
                </Link>

                <Link
                  href="/resize-image"
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                    Custom
                  </span>

                  <h4 className="mt-2 font-bold text-slate-950">
                    Resize Image
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Resize an image to custom dimensions.
                  </p>
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
                Frequently Asked Questions
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                JPG resizer questions
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Answers to common questions about resizing JPG and JPEG
                images online.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none pr-6 font-bold text-slate-950 marker:hidden">
                    <div className="flex items-center justify-between gap-4">
                      <span>{item.question}</span>

                      <span className="text-xl text-slate-400 transition group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>

                  <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Phase 2 tools */}
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
              More image tools
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              More tools from Lets Resize It
            </h2>

            <p className="mt-4 text-slate-600">
              Resize, compress, and convert images for different file-size,
              dimension, and format requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/resize-image",
                title: "Resize PNG",
                text: "Resize PNG images online.",
              },
              {
                href: "/webp-to-png",
                title: "Resize WebP",
                text: "Resize WebP images online.",
              },
              {
                href: "/compress-image",
                title: "Compress JPG",
                text: "Reduce JPG file size.",
              },
              {
                href: "/convert-jpg-to-webp",
                title: "JPG to WebP",
                text: "Convert JPG images to WebP.",
              },
              {
                href: "/resize-image-to-200x200",
                title: "Resize to 200x200",
                text: "Create an exact square image.",
              },
              {
                href: "/resize-image-to-300x300",
                title: "Resize to 300x300",
                text: "Create a 300×300 image.",
              },
              {
                href: "/resize-image-to-1080x1080",
                title: "Resize to 1080x1080",
                text: "Create a large square image.",
              },
              {
                href: "/resize-image",
                title: "Resize Image",
                text: "Resize an image to custom dimensions.",
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
              >
                <h3 className="font-bold text-slate-950">
                  {tool.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {tool.text}
                </p>

                <span className="mt-4 inline-block text-sm font-bold text-indigo-600 transition group-hover:translate-x-1">
                  Open tool →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}