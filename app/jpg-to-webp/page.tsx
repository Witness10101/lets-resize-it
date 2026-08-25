import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import JpgToWebpClient from "./JpgToWebpClient";

const SITE_URL = "https://letsresizeit.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "JPG to WebP Converter Online – Free JPEG to WebP | Let&apos;s Resize It",

  description:
    "Convert JPG and JPEG images to WebP online for free. Reduce image file size, optimize images for websites, and download high-quality WebP files instantly. Fast, secure, browser-based conversion.",

  keywords: [
    "jpg to webp",
    "jpg to webp converter",
    "jpg to webp converter online",
    "convert jpg to webp",
    "convert jpg to webp online",
    "jpeg to webp",
    "jpeg to webp converter",
    "jpeg to webp online",
    "jpg webp converter",
    "image to webp",
    "convert image to webp",
    "free jpg to webp converter",
    "online jpg to webp converter",
    "jpg to webp free",
    "jpg to webp online free",
    "convert jpeg to webp",
  ],

  alternates: {
    canonical: "/jpg-to-webp",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/jpg-to-webp`,
    title: "JPG to WebP Converter Online – Free JPEG to WebP",
    description:
      "Convert JPG and JPEG images to WebP online for free. Optimize image file size and create web-ready images instantly.",
    siteName: "Let&apos;s Resize It",
  },

  twitter: {
    card: "summary_large_image",
    title: "JPG to WebP Converter Online – Free JPEG to WebP",
    description:
      "Free online JPG to WebP converter. Convert JPEG images to WebP, reduce file size and optimize images for the web.",
  },

  category: "Image Tools",
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
      name: "JPG to WebP Converter",
      item: `${SITE_URL}/jpg-to-webp`,
    },
  ],
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "JPG to WebP Converter",
  url: `${SITE_URL}/jpg-to-webp`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript and a modern web browser",
  description:
    "Free online JPG and JPEG to WebP converter for converting images into the modern WebP format.",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Convert JPG to WebP",
    "Convert JPEG to WebP",
    "Convert multiple JPG images",
    "Adjust WebP quality",
    "Download WebP images",
    "Browser-based image conversion",
    "Free image conversion",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I convert JPG to WebP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your JPG or JPEG image to the JPG to WebP converter, choose your preferred quality, click the convert button, and download the resulting WebP image.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert JPG to WebP online for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Let&apos;s Resize It's JPG to WebP converter is free to use and does not require an account.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between JPG and WebP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JPG is a widely supported raster image format, while WebP is a modern web image format designed to provide efficient compression and smaller image files while maintaining good visual quality.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert JPEG to WebP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. JPEG and JPG files use the same underlying image format, so both JPG and JPEG images can be converted to WebP.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I convert JPG to WebP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WebP can provide efficient image compression and smaller files, which can be useful for websites, blogs, online stores and other web projects where image size affects page performance.",
      },
    },
    {
      "@type": "Question",
      name: "Does this JPG to WebP converter reduce image quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The output depends on the selected WebP quality setting. Higher quality generally preserves more visual detail, while lower quality can create smaller files.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert multiple JPG images to WebP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The converter supports selecting multiple JPG or JPEG images so you can convert several files in one session.",
      },
    },
    {
      "@type": "Question",
      name: "Are my images uploaded to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The conversion experience is designed to process images directly in your browser, so the image conversion does not require sending the image to a remote conversion server.",
      },
    },
  ],
};

const relatedTools = [
  {
    href: "/jpg-to-png",
    title: "JPG to PNG Converter",
    description:
      "Convert JPG and JPEG images to PNG when you need lossless image output.",
  },
  {
    href: "/png-to-webp",
    title: "PNG to WebP Converter",
    description:
      "Convert PNG images to WebP for more efficient web image delivery.",
  },
  {
    href: "/webp-to-jpg",
    title: "WebP to JPG Converter",
    description:
      "Convert WebP images back to JPG for compatibility with older workflows.",
  },
  {
    href: "/webp-to-png",
    title: "WebP to PNG Converter",
    description:
      "Turn WebP images into PNG files for editing, sharing and compatibility.",
  },
  {
    href: "/png-to-jpg",
    title: "PNG to JPG Converter",
    description:
      "Convert PNG images to JPG when you need smaller, widely supported files.",
  },
  {
    href: "/compress-image",
    title: "Compress Image Online",
    description:
      "Reduce image file size while maintaining a useful level of image quality.",
  },
  {
    href: "/resize-image",
    title: "Resize Image Online",
    description:
      "Resize images to custom dimensions for websites, social media and more.",
  },
];

const useCases = [
  {
    title: "Website images",
    text: "Convert JPG images into WebP files before adding them to your website to help keep image assets efficient.",
  },
  {
    title: "Blog and content images",
    text: "Create web-ready WebP versions of photographs and graphics used in articles, blogs and content pages.",
  },
  {
    title: "E-commerce product images",
    text: "Prepare product photography in a modern web image format for online stores and product pages.",
  },
  {
    title: "WordPress websites",
    text: "Convert JPG images into WebP versions for websites where reducing image weight is part of your optimization workflow.",
  },
  {
    title: "SEO and performance optimization",
    text: "Use appropriately compressed WebP images as part of a broader image optimization strategy for faster pages and better user experience.",
  },
  {
    title: "Design and development",
    text: "Quickly create WebP assets for websites, landing pages, prototypes and frontend development projects.",
  },
];

export default function JpgToWebpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Header />

      <main className="bg-white text-slate-950">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-blue-50 via-white to-white">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute left-[10%] top-10 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="absolute right-[8%] top-24 h-72 w-72 rounded-full bg-indigo-200/25 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 text-sm text-slate-500"
            >
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link
                    href="/"
                    className="transition hover:text-blue-600"
                  >
                    Home
                  </Link>
                </li>

                <li aria-hidden="true">/</li>

                <li className="font-medium text-slate-700">
                  JPG to WebP Converter
                </li>
              </ol>
            </nav>

            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold text-blue-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                Free JPG & JPEG to WebP converter
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                JPG to WebP Converter Online
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Convert JPG and JPEG images to WebP online for free. Create
                smaller, web-friendly image files while maintaining excellent
                visual quality. No registration required.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
                <span>✓ Free to use</span>
                <span>✓ JPG & JPEG supported</span>
                <span>✓ Multiple images</span>
                <span>✓ Quality control</span>
                <span>✓ Browser-based</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONVERTER
        ========================================================== */}
        <section
          id="jpg-to-webp-converter"
          aria-labelledby="converter-heading"
          className="scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 text-center">
              <h2
                id="converter-heading"
                className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
              >
                Convert JPG to WebP
              </h2>

              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Upload your JPG or JPEG images, choose your preferred quality
                and download WebP files instantly.
              </p>
            </div>

            <JpgToWebpClient />
          </div>
        </section>

        {/* =========================================================
            QUICK INTERNAL LINKS
        ========================================================== */}
        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
              <span className="font-bold text-slate-900">
                Popular image tools:
              </span>

              <Link
                href="/resize-image"
                className="font-semibold text-blue-600 hover:text-blue-800"
              >
                Resize Image
              </Link>

              <Link
                href="/compress-image"
                className="font-semibold text-blue-600 hover:text-blue-800"
              >
                Compress Image
              </Link>

              <Link
                href="/jpg-to-png"
                className="font-semibold text-blue-600 hover:text-blue-800"
              >
                JPG to PNG
              </Link>

              <Link
                href="/png-to-jpg"
                className="font-semibold text-blue-600 hover:text-blue-800"
              >
                PNG to JPG
              </Link>

              <Link
                href="/png-to-webp"
                className="font-semibold text-blue-600 hover:text-blue-800"
              >
                PNG to WebP
              </Link>

              <Link
                href="/webp-to-jpg"
                className="font-semibold text-blue-600 hover:text-blue-800"
              >
                WebP to JPG
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO / TOPICAL CONTENT
        ========================================================== */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
            <article>
              <p className="text-sm font-black uppercase tracking-[0.15em] text-blue-600">
                JPG to WebP online
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Convert JPG and JPEG images to WebP for the modern web
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600">
                <p>
                  JPG, also commonly written as JPEG, remains one of the most
                  widely used image formats. However, websites often benefit
                  from modern image formats that can deliver visually similar
                  images with more efficient file sizes. WebP is one such
                  format and is widely used in modern web development and
                  image optimization workflows.
                </p>

                <p>
                  With this{" "}
                  <strong className="font-semibold text-slate-900">
                    JPG to WebP converter
                  </strong>
                  , you can convert JPG or JPEG photographs into WebP files
                  without installing image editing software. Select your
                  images, choose the quality level and create WebP files ready
                  for your website, blog, online store or development project.
                </p>

                <p>
                  If your goal is to reduce the overall size of an image rather
                  than change its format, you can also use our{" "}
                  <Link
                    href="/compress-image"
                    className="font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-800"
                  >
                    image compression tool
                  </Link>
                  . If you need to change the dimensions of an image, use our{" "}
                  <Link
                    href="/resize-image"
                    className="font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-800"
                  >
                    online image resizer
                  </Link>
                  .
                </p>
              </div>
            </article>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-xl font-black text-slate-950">
                Why convert JPG to WebP?
              </h3>

              <ul className="mt-6 space-y-4">
                {[
                  "Create modern web-ready image files",
                  "Potentially reduce image file sizes",
                  "Choose your preferred output quality",
                  "Prepare images for websites and blogs",
                  "Convert JPG and JPEG images",
                  "No desktop software required",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-black text-blue-700">
                      ✓
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* =========================================================
            USE CASES
        ========================================================== */}
        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.15em] text-blue-600">
                Use cases
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Where a JPG to WebP converter can help
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Converting JPG images to WebP can be useful across website
                development, content publishing, e-commerce, design and
                image optimization workflows.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600">
                    ✓
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            JPG VS WEBP
        ========================================================== */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.15em] text-blue-600">
              JPG vs WebP
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              JPG and WebP serve different purposes
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              JPG remains an excellent general-purpose format, while WebP is
              particularly useful when preparing images for modern websites.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-slate-200 p-7 md:border-b-0 md:border-r">
                <div className="inline-flex rounded-lg bg-orange-50 px-3 py-1.5 text-xs font-black text-orange-700">
                  JPG / JPEG
                </div>

                <h3 className="mt-4 text-xl font-black text-slate-950">
                  Familiar and widely supported
                </h3>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                  <li>• Excellent compatibility</li>
                  <li>• Commonly used for photographs</li>
                  <li>• Supported by virtually every image workflow</li>
                  <li>• Useful for sharing and general-purpose storage</li>
                </ul>
              </div>

              <div className="p-7">
                <div className="inline-flex rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700">
                  WebP
                </div>

                <h3 className="mt-4 text-xl font-black text-slate-950">
                  Designed for modern web delivery
                </h3>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                  <li>• Efficient image compression</li>
                  <li>• Useful for website assets</li>
                  <li>• Supports lossy and lossless compression</li>
                  <li>• Designed for modern web workflows</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            HOW IT WORKS
        ========================================================== */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.15em] text-blue-400">
                How it works
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Convert JPG to WebP in three simple steps
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Upload JPG",
                  text: "Choose one or more JPG or JPEG images from your device.",
                },
                {
                  number: "02",
                  title: "Set quality",
                  text: "Choose the WebP quality level that fits your image optimization needs.",
                },
                {
                  number: "03",
                  title: "Download WebP",
                  text: "Convert the images and download the finished WebP files.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <span className="text-sm font-black text-blue-400">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            BENEFITS
        ========================================================== */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.15em] text-blue-600">
                Built for everyday image work
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                A simple JPG to WebP workflow without unnecessary software
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Whether you&apos;re optimizing a website, preparing blog images,
                working on an online store or building a frontend project,
                converting JPG images to WebP should not require a complicated
                desktop workflow.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Free", "No account or subscription required."],
                ["Fast", "Convert images directly from your browser."],
                ["Flexible", "Choose the quality that fits your workflow."],
                ["Private", "Browser-based processing keeps the workflow local."],
                ["Multi-image", "Work with multiple JPG images in one session."],
                ["Web-ready", "Create WebP assets for modern websites."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 p-5"
                >
                  <h3 className="font-bold text-slate-950">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            RELATED TOOLS / INTERNAL LINK CLUSTER
        ========================================================== */}
        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.15em] text-blue-600">
                  Image conversion tools
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                  More free image converters and optimization tools
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  Choose another image tool depending on whether you need to
                  change format, reduce file size or change image dimensions.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      →
                    </span>

                    <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-500">
                      →
                    </span>
                  </div>

                  <h3 className="mt-5 font-bold text-slate-950">
                    {tool.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {tool.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================== */}
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.15em] text-blue-600">
              Frequently asked questions
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              JPG to WebP converter FAQ
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Answers to common questions about converting JPG and JPEG images
              to WebP.
            </p>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
            {[
              {
                q: "How do I convert JPG to WebP?",
                a: "Upload your JPG or JPEG image, choose your preferred quality, start the conversion and download the resulting WebP file.",
              },
              {
                q: "Can I convert JPEG to WebP?",
                a: "Yes. JPG and JPEG refer to the same underlying image format, so JPEG files can also be converted to WebP.",
              },
              {
                q: "Is the JPG to WebP converter free?",
                a: "Yes. The converter is free to use and does not require registration.",
              },
              {
                q: "Why convert JPG to WebP for a website?",
                a: "WebP is designed for efficient web image delivery and can provide smaller image files at comparable visual quality depending on the image and selected compression settings.",
              },
              {
                q: "Will converting JPG to WebP make the image smaller?",
                a: "It can. The resulting file size depends on the original image, its content and the WebP quality setting. A suitable quality setting can often produce a smaller file.",
              },
              {
                q: "Can I choose WebP image quality?",
                a: "Yes. Use the quality control in the converter to balance visual quality and output file size.",
              },
              {
                q: "Can I convert multiple JPG images?",
                a: "Yes. Multiple JPG or JPEG files can be selected and converted in the same session.",
              },
              {
                q: "Are my images uploaded to the internet?",
                a: "The conversion is performed directly in the browser, so the image conversion itself does not require uploading the images to a remote conversion server.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group px-5 py-5 sm:px-7"
              >
                <summary className="cursor-pointer list-none pr-8 text-base font-bold text-slate-900">
                  <span className="relative block">
                    {faq.q}

                    <span className="absolute right-0 top-0 text-xl font-normal text-slate-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="border-t border-slate-100 bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Ready to convert your JPG images?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
              Convert JPG and JPEG images to WebP online, adjust the output
              quality and download your web-ready images in seconds.
            </p>

            <a
              href="#jpg-to-webp-converter"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-xl bg-white px-7 text-sm font-black text-blue-700 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Convert JPG to WebP
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
