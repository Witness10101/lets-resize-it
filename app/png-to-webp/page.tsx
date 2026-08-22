import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PNG to WebP Converter Online – Free PNG to WebP | Let's Resize It",
  description:
    "Convert PNG images to WebP online for free. Reduce image file sizes while keeping excellent quality and transparency. Fast, private, and easy to use with no upload required.",
  keywords: [
    "png to webp",
    "png to webp converter",
    "convert png to webp",
    "png to webp online",
    "png to webp converter online",
    "free png to webp converter",
    "convert png image to webp",
    "png image converter",
    "webp converter",
    "image to webp",
  ],
  alternates: {
    canonical: "/png-to-webp",
  },
  openGraph: {
    title: "PNG to WebP Converter Online – Free & Fast",
    description:
      "Convert PNG images to WebP online for free. Optimize image sizes while preserving quality and transparency.",
    url: "/png-to-webp",
    siteName: "Let's Resize It",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PNG to WebP Converter Online",
    description:
      "Convert PNG images to WebP for free. Fast, private and easy to use.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "How do I convert PNG to WebP?",
    answer:
      "Upload your PNG image using the converter above. Let's Resize It processes the image directly in your browser and creates a WebP version that you can download immediately.",
  },
  {
    question: "Is the PNG to WebP converter free?",
    answer:
      "Yes. You can use the PNG to WebP converter for free without creating an account or installing software.",
  },
  {
    question: "Will converting PNG to WebP reduce the file size?",
    answer:
      "WebP can provide significantly smaller image files than PNG in many situations while maintaining good visual quality. The actual reduction depends on the image and its content.",
  },
  {
    question: "Does WebP support transparent backgrounds?",
    answer:
      "Yes. WebP supports transparency, making it suitable for many PNG images that contain transparent backgrounds, logos, icons, graphics and UI assets.",
  },
  {
    question: "Will my PNG image lose quality?",
    answer:
      "The result depends on the conversion settings and the image itself. The converter is designed to provide a useful balance between image quality and file size.",
  },
  {
    question: "Are my PNG images uploaded to a server?",
    answer:
      "No. The conversion is performed locally in your browser. Your image does not need to be uploaded to a server for the conversion process.",
  },
  {
    question: "Can I convert PNG to WebP on my phone?",
    answer:
      "Yes. The converter works in modern mobile browsers, so you can convert PNG images from a smartphone or tablet without installing an additional application.",
  },
  {
    question: "Why should I convert PNG to WebP?",
    answer:
      "WebP is designed for efficient web delivery and can often produce smaller files than PNG. Smaller images can help reduce page weight and improve website loading performance.",
  },
];

function UploadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path d="M12 16V4" />
      <path d="m7 9 5-5 5 5" />
      <path d="M5 20h14" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function PngToWebpPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "PNG to WebP Converter",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        description:
          "Free online PNG to WebP converter that processes images directly in the browser.",
        url: "/png-to-webp",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "Convert PNG to WebP",
          "Browser-based image conversion",
          "Transparent image support",
          "No account required",
          "Free image conversion",
        ],
      },
      {
        "@type": "HowTo",
        name: "How to Convert PNG to WebP",
        description:
          "Convert a PNG image to WebP online using Let's Resize It.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Upload your PNG",
            text: "Select or drag and drop your PNG image into the converter.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Convert to WebP",
            text: "The image is processed directly in your browser and converted to WebP.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Download the WebP",
            text: "Download the converted WebP image to your device.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Header />

      <main className="min-h-screen bg-white">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />
            <div className="absolute -left-24 top-48 h-64 w-64 rounded-full bg-cyan-100/50 blur-3xl" />
            <div className="absolute -right-24 top-40 h-64 w-64 rounded-full bg-indigo-100/40 blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                Free PNG to WebP Converter
              </div>

              <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Convert PNG to WebP
                <span className="block text-blue-600">
                  Online for Free
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Convert PNG images to WebP in seconds. Create smaller,
                web-friendly image files while maintaining excellent visual
                quality and support for transparent backgrounds.
              </p>
            </div>

            {/* Converter */}
            <div
              id="converter"
              className="mx-auto mt-10 max-w-3xl scroll-mt-24"
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
                <div className="border-b border-slate-100 px-5 py-4 sm:px-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        PNG → WebP
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Convert your image directly in your browser
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Free
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-8">
                  <label
                    htmlFor="png-to-webp-upload"
                    className="group flex min-h-[270px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 text-center transition-all hover:border-blue-300 hover:bg-blue-50/40 sm:min-h-[310px]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-200 transition-transform duration-200 group-hover:-translate-y-1">
                      <UploadIcon />
                    </div>

                    <p className="mt-6 text-base font-semibold text-slate-950">
                      Drop your PNG image here
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      or click to choose a file from your device
                    </p>

                    <span className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors group-hover:bg-blue-700">
                      Choose PNG Image
                    </span>

                    <p className="mt-4 text-xs text-slate-400">
                      PNG files • Processed locally • No account required
                    </p>

                    <input
                      id="png-to-webp-upload"
                      type="file"
                      accept="image/png,.png"
                      className="sr-only"
                    />
                  </label>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                      "Fast browser processing",
                      "Supports transparency",
                      "No server upload",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-3 text-xs font-medium text-slate-600"
                      >
                        <span className="text-emerald-600">
                          <CheckIcon />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-500 sm:text-sm">
              <span>✓ Free to use</span>
              <span>✓ No registration</span>
              <span>✓ Works on mobile</span>
              <span>✓ Privacy focused</span>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO
        ========================================================== */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              PNG to WebP online
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A simple way to convert PNG images for the web
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600">
              PNG is an excellent format for graphics, logos, screenshots and
              images that need transparency. However, PNG files can be larger
              than modern web image formats. Converting PNG to WebP can help
              create more efficient image assets for websites, applications,
              online stores and digital projects.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
              With Let's Resize It, you can convert PNG to WebP online without
              installing desktop software. Select your image, let the browser
              process it, and download the resulting WebP file.
            </p>
          </div>
        </section>

        {/* =========================================================
            BENEFITS
        ========================================================== */}
        <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Why convert PNG to WebP?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Better image delivery without complicated software
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                WebP is designed for efficient image delivery on the modern
                web. Converting suitable PNG assets can help you create leaner
                image files for websites and digital products.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Smaller files",
                  text: "WebP can often produce a smaller file than PNG, helping reduce image weight.",
                },
                {
                  title: "Web-friendly",
                  text: "WebP is widely used for modern websites and digital applications.",
                },
                {
                  title: "Transparency",
                  text: "WebP supports transparent backgrounds, making it useful for many PNG assets.",
                },
                {
                  title: "Fast workflow",
                  text: "Convert your image directly in the browser without installing software.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <CheckIcon />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-slate-950">
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

        {/* =========================================================
            USE CASES
        ========================================================== */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Common use cases
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Where PNG to WebP conversion is useful
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Convert PNG assets when you need a more efficient image format
                for websites, apps, stores and everyday digital workflows.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Website images",
                  text: "Prepare images for websites where reducing page weight and improving delivery matters.",
                },
                {
                  title: "E-commerce stores",
                  text: "Create WebP versions of product graphics, category images and promotional assets.",
                },
                {
                  title: "Logos & graphics",
                  text: "Convert suitable transparent PNG logos and graphics into WebP.",
                },
                {
                  title: "Blog images",
                  text: "Create web-friendly versions of PNG illustrations and visual content.",
                },
                {
                  title: "UI assets",
                  text: "Convert icons, interface graphics and design assets for modern web applications.",
                },
                {
                  title: "Performance optimization",
                  text: "Use efficient image formats as part of a broader website performance strategy.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <h3 className="text-base font-bold text-slate-950">
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

        {/* =========================================================
            HOW IT WORKS
        ========================================================== */}
        <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                How it works
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Convert PNG to WebP in three simple steps
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Choose your PNG",
                  text: "Select a PNG image from your computer, phone or tablet.",
                },
                {
                  number: "02",
                  title: "Convert it to WebP",
                  text: "Your image is processed directly in your browser.",
                },
                {
                  number: "03",
                  title: "Download your WebP",
                  text: "Download the converted WebP image and use it wherever you need it.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <span className="text-sm font-bold text-blue-600">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            PRIVACY / TRUST
        ========================================================== */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50/60 p-7 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-950">
                    Your images stay in your browser
                  </h2>

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                    The PNG to WebP conversion is designed to happen locally
                    in your browser. Your image does not need to be uploaded
                    to a remote server just to convert it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            RELATED TOOLS
        ========================================================== */}
        <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  More image tools
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  Need a different image conversion?
                </h2>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Explore all tools
                <ArrowIcon />
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  href: "/image-to-jpg",
                  title: "Image to JPG",
                  description: "Convert images to JPG.",
                },
                {
                  href: "/jpg-to-png",
                  title: "JPG to PNG",
                  description: "Convert JPG images to PNG.",
                },
                {
                  href: "/png-to-jpg",
                  title: "PNG to JPG",
                  description: "Convert PNG images to JPG.",
                },
                {
                  href: "/webp-to-png",
                  title: "WebP to PNG",
                  description: "Convert WebP images to PNG.",
                },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-950 group-hover:text-blue-600">
                      {tool.title}
                    </h3>

                    <ArrowIcon />
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
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
        <section
          id="faq"
          className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Frequently asked questions
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                PNG to WebP converter FAQ
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Everything you need to know about converting PNG images to
                WebP online.
              </p>
            </div>

            <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group px-5 py-5 sm:px-7"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform group-open:rotate-45">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-3 max-w-3xl pr-10 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="border-t border-slate-200 bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-blue-400">
              PNG → WebP
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to convert your PNG?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Convert your PNG image to WebP quickly and download the result
              directly from your browser.
            </p>

            <Link
              href="#converter"
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition-colors hover:bg-blue-500"
            >
              Convert PNG to WebP
              <ArrowIcon />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}