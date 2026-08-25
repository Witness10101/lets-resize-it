import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ImageToPngClient from "./ImageToPngClient";

const SITE_URL = "https://letsresizeit.com";
const PAGE_URL = `${SITE_URL}/image-to-png`;

export const metadata: Metadata = {
  title: "Image to PNG Converter – Convert Images to PNG Online Free",
  description:
    "Convert JPG, JPEG, WebP and other supported images to PNG online for free. Create high-quality PNG images directly in your browser with no installation or signup required.",
  keywords: [
    "image to png",
    "image to png converter",
    "convert image to png",
    "convert jpg to png",
    "convert jpeg to png",
    "convert webp to png",
    "image converter to png",
    "png converter",
    "jpg to png converter",
    "free image to png converter",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Image to PNG Converter – Convert Images to PNG Online Free",
    description:
      "Convert images to PNG quickly and securely in your browser. Free, simple and easy to use.",
    url: PAGE_URL,
    siteName: "Let&apos;s Resize It",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image to PNG Converter – Free Online",
    description:
      "Convert JPG, JPEG, WebP and other supported images to PNG online for free.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "How do I convert an image to PNG?",
    answer:
      "Upload your image using the Image to PNG converter above. The image is processed in your browser and converted into PNG format. Once the conversion is complete, download your PNG file to your device.",
  },
  {
    question: "Can I convert JPG to PNG?",
    answer:
      "Yes. You can use the Image to PNG converter to convert supported JPG and JPEG images into PNG format without installing desktop software.",
  },
  {
    question: "Can I convert WebP to PNG?",
    answer:
      "Yes, when the browser supports reading the selected WebP image. The converter can process supported image formats and create a PNG output.",
  },
  {
    question: "Is the Image to PNG converter free?",
    answer:
      "Yes. Let&apos;s Resize It provides the Image to PNG converter as a free online image conversion tool.",
  },
  {
    question: "Do I need to install software?",
    answer:
      "No. The converter works directly in a modern web browser, so you do not need to install a desktop application or browser extension.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "The conversion experience is designed to process images directly in your browser. This means the selected image can be converted locally without requiring a server upload.",
  },
  {
    question: "Why should I convert an image to PNG?",
    answer:
      "PNG is useful when you want lossless image compression, sharp graphics, screenshots, illustrations, logos or images where preserving visual detail is important.",
  },
  {
    question: "Does converting JPG to PNG improve image quality?",
    answer:
      "Converting a JPG to PNG does not restore image information that was already lost during JPEG compression. PNG can preserve the resulting image without adding another lossy compression step.",
  },
];

const relatedTools = [
  {
    href: "/image-to-jpg",
    title: "Image to JPG",
    description: "Convert supported images into JPG format.",
  },
  {
    href: "/jpg-to-png",
    title: "JPG to PNG",
    description: "Convert JPG and JPEG images into PNG.",
  },
  {
    href: "/png-to-jpg",
    title: "PNG to JPG",
    description: "Convert PNG images into JPG format.",
  },
  {
    href: "/webp-to-png",
    title: "WebP to PNG",
    description: "Convert WebP images into PNG files.",
  },
  {
    href: "/png-to-webp",
    title: "PNG to WebP",
    description: "Convert PNG images into modern WebP format.",
  },
  {
    href: "/compress-image",
    title: "Compress Image",
    description: "Reduce image file size for faster sharing and websites.",
  },
  {
    href: "/resize-image",
    title: "Resize Image",
    description: "Resize images to the dimensions you need.",
  },
];

function JsonLd() {
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Image to PNG Converter",
    url: PAGE_URL,
    description:
      "Free online image to PNG converter for converting supported image files into PNG format.",
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "Image Converter",
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
      name: "Let&apos;s Resize It",
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
        name: "Image to PNG",
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

export default function ImageToPngPage() {
  return (
    <>
      <JsonLd />

      <Header />

      <main className="flex-1 bg-white">
        {/* ============================================================
            HERO
        ============================================================ */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-blue-50/70 via-white to-white">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[500px] opacity-70"
            aria-hidden="true"
          >
            <div className="absolute left-[8%] top-20 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="absolute right-[8%] top-10 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mx-auto mb-7 flex max-w-4xl items-center justify-center gap-2 text-xs text-slate-500"
            >
              <Link
                href="/"
                className="transition-colors hover:text-blue-600"
              >
                Home
              </Link>

              <span aria-hidden="true">/</span>

              <span className="font-medium text-slate-700">
                Image to PNG
              </span>
            </nav>

            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Free Online Image Converter
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Convert Images to{" "}
                <span className="text-blue-600">PNG Online</span>
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Convert JPG, JPEG, WebP and other supported image files to
                high-quality PNG images directly in your browser. No
                installation, no signup and no complicated software.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500 sm:text-sm">
                <span className="inline-flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  Free to use
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  Browser-based
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  No installation
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  Simple PNG conversion
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            CONVERTER
        ============================================================ */}
        <section className="-mt-2 pb-16 sm:pb-20">
          <ImageToPngClient />
        </section>

        {/* ============================================================
            INTRODUCTION / SEARCH INTENT
        ============================================================ */}
        <section className="border-t border-slate-100 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Free Image to PNG Converter
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                PNG is one of the most widely used image formats for websites,
                digital graphics, screenshots, logos, illustrations and
                images that need sharp, consistent detail. If you have an
                image in JPG, JPEG, WebP or another supported format, an image
                to PNG converter makes it easy to create a PNG version without
                opening professional image-editing software.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Let&apos;s Resize It gives you a simple way to{" "}
                <strong className="font-semibold text-slate-900">
                  convert images to PNG online
                </strong>
                . Select your image, let the browser process it and download
                the resulting PNG file. The interface is designed for quick
                conversions while keeping the process straightforward for
                beginners and experienced users.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Whether you searched for{" "}
                <strong className="font-semibold text-slate-900">
                  image to PNG
                </strong>
                ,{" "}
                <strong className="font-semibold text-slate-900">
                  JPG to PNG
                </strong>
                ,{" "}
                <strong className="font-semibold text-slate-900">
                  JPEG to PNG
                </strong>
                , or{" "}
                <strong className="font-semibold text-slate-900">
                  WebP to PNG
                </strong>
                , this page provides a single convenient place to convert your
                supported image files.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            WHY PNG
        ============================================================ */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                Why PNG?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                When converting an image to PNG makes sense
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                PNG is particularly useful when image detail, clean graphics
                and lossless storage are more important than having the
                smallest possible file.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Lossless format",
                  text: "PNG uses lossless compression, making it useful when preserving image data matters.",
                  icon: "◈",
                },
                {
                  title: "Sharp graphics",
                  text: "PNG works especially well for logos, screenshots, icons and digital illustrations.",
                  icon: "✦",
                },
                {
                  title: "Clear text",
                  text: "Screenshots and graphics containing text can benefit from PNG's crisp output.",
                  icon: "T",
                },
                {
                  title: "Easy to share",
                  text: "Create a standard PNG file that can be opened by most modern devices and applications.",
                  icon: "↗",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-600">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
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
            USE CASES
        ============================================================ */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                Use Cases
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                What can you use an image to PNG converter for?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Converting an image to PNG can be useful for everyday
                documents, websites, design work and digital content.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Website graphics",
                  text: "Prepare logos, icons, illustrations and other graphics for websites and digital projects.",
                },
                {
                  title: "Screenshots",
                  text: "Save screenshots and interface captures as PNG when crisp text and graphics are important.",
                },
                {
                  title: "Design projects",
                  text: "Create PNG versions of images for presentations, mockups, social graphics and design workflows.",
                },
                {
                  title: "Logos and branding",
                  text: "PNG is a common format for logos, brand assets and digital graphics.",
                },
                {
                  title: "Documents",
                  text: "Convert supported images into PNG when a document or application requires the format.",
                },
                {
                  title: "Social media content",
                  text: "Create PNG copies of graphics and visual assets for different publishing workflows.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <h3 className="text-lg font-bold text-slate-950">
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
            HOW IT WORKS
        ============================================================ */}
        <section className="bg-slate-950 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
                How It Works
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Convert an image to PNG in three simple steps
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-300">
                You don&apos;t need Photoshop or complicated image-editing
                software. The converter keeps the process simple.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Choose your image",
                  text: "Upload a supported image file using the converter above.",
                },
                {
                  number: "02",
                  title: "Convert to PNG",
                  text: "The image is processed and converted into PNG format directly in your browser.",
                },
                {
                  number: "03",
                  title: "Download your PNG",
                  text: "Download the resulting PNG image and use it wherever you need it.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-6"
                >
                  <span className="text-sm font-bold text-blue-300">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            JPG TO PNG EXPLANATION
        ============================================================ */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                JPG to PNG
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Convert JPG and JPEG images to PNG
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                JPG is a popular lossy image format designed to keep file
                sizes relatively small. PNG uses lossless compression and is
                often preferred for graphics, screenshots and images where
                preserving the converted image without another lossy encoding
                step is useful.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                If you specifically need to{" "}
                <Link
                  href="/jpg-to-png"
                  className="font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  convert JPG to PNG
                </Link>
                , you can also use our dedicated JPG to PNG converter.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-950">
                JPG vs PNG at a glance
              </h3>

              <div className="mt-6 divide-y divide-slate-200">
                {[
                  ["Compression", "Lossy", "Lossless"],
                  ["Typical use", "Photos", "Graphics & screenshots"],
                  ["Transparency", "Not supported", "Supported"],
                  ["File size", "Usually smaller", "Often larger"],
                ].map(([feature, jpg, png]) => (
                  <div
                    key={feature}
                    className="grid grid-cols-3 gap-3 py-4 text-sm"
                  >
                    <span className="font-semibold text-slate-900">
                      {feature}
                    </span>

                    <span className="text-slate-600">{jpg}</span>

                    <span className="font-medium text-blue-700">
                      {png}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            PRIVACY / BENEFITS
        ============================================================ */}
        <section className="bg-blue-50/50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                Built for simplicity
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A simple way to convert images to PNG
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "No software",
                  text: "Use the converter directly from your web browser.",
                },
                {
                  title: "Fast workflow",
                  text: "Upload, convert and download without unnecessary steps.",
                },
                {
                  title: "Browser-based",
                  text: "The conversion experience is designed to work locally in your browser.",
                },
                {
                  title: "Free access",
                  text: "Convert supported images without requiring a paid subscription.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-slate-950">
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
            RELATED TOOLS / INTERNAL LINKING
        ============================================================ */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                  More Image Tools
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  More free image conversion tools
                </h2>

                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                  Need a different image format or want to optimize your
                  image? Explore our related tools.
                </p>
              </div>

              <Link
                href="/"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Explore all tools →
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-slate-950 group-hover:text-blue-600">
                      {tool.title}
                    </h3>

                    <span
                      className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-500"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {tool.description}
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
                Frequently asked questions about converting images to PNG
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Answers to common questions about image to PNG conversion,
                supported formats and how the tool works.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>

                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-transform duration-200 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>

                  <p className="mt-4 pr-12 text-sm leading-7 text-slate-600">
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
                Ready to convert?
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Convert your image to PNG now
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Turn a supported image into PNG in just a few clicks using our
                free online converter.
              </p>

              <a
                href="#jpg-to-png-converter"
                className="mt-7 inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-blue-700 shadow-sm transition-all hover:bg-blue-50 hover:shadow-md"
              >
                Convert Image to PNG
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

