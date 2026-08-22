import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "WebP to JPG Converter Online – Free & Private | Let's Resize It",
  description:
    "Convert WebP images to JPG online for free. Fast, private WebP to JPEG conversion directly in your browser with no signup or software installation.",
  keywords: [
    "webp to jpg",
    "webp to jpg converter",
    "convert webp to jpg",
    "webp to jpeg",
    "webp converter",
    "webp image converter",
    "convert webp image to jpg",
    "webp to jpg online",
    "free webp to jpg converter",
    "online webp to jpg converter",
  ],
  alternates: {
    canonical: "/webp-to-jpg",
  },
  openGraph: {
    title: "WebP to JPG Converter Online – Free & Private",
    description:
      "Convert WebP images to JPG directly in your browser. Free, fast and private with no signup or software installation.",
    url: "/webp-to-jpg",
    siteName: "Let's Resize It",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebP to JPG Converter Online – Free & Private",
    description:
      "Convert WebP images to JPG directly in your browser. Fast, free and private.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "How do I convert WebP to JPG?",
    answer:
      "Choose or drag a WebP image into the converter above. The image is converted to JPG directly in your browser. You can adjust the JPG quality and then download the converted image.",
  },
  {
    question: "Is this WebP to JPG converter free?",
    answer:
      "Yes. Let's Resize It provides this WebP to JPG converter as a free online image conversion tool. No software installation is required.",
  },
  {
    question: "Are my WebP images uploaded to a server?",
    answer:
      "No. The conversion is performed locally in your browser using the browser's image and canvas capabilities. Your selected image does not need to be uploaded to a conversion server.",
  },
  {
    question: "What is the difference between WebP and JPG?",
    answer:
      "WebP is a modern image format designed to provide efficient compression, while JPG is a widely supported format commonly used for photographs, websites, email attachments and image uploads. Converting WebP to JPG can improve compatibility with software and services that do not accept WebP.",
  },
  {
    question: "Will converting WebP to JPG reduce image quality?",
    answer:
      "JPG uses lossy compression, so some image information can be removed during conversion. You can control the JPG quality in the converter to balance visual quality and file size.",
  },
  {
    question: "Can JPG files contain transparency?",
    answer:
      "No. JPG does not support transparency. If your WebP image contains transparent areas, those areas need to be converted to a solid background when creating a JPG. This converter uses a white background for transparent pixels.",
  },
  {
    question: "Can I convert WebP to JPG without installing software?",
    answer:
      "Yes. The converter works directly in a modern web browser, so you can convert WebP images without installing a desktop application.",
  },
];

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "WebP to JPG Converter",
  url: "https://letsresizeit.com/webp-to-jpg",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires a modern web browser with JavaScript enabled.",
  description:
    "Free online WebP to JPG converter that converts WebP images to JPG directly in the browser.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Convert WebP to JPG",
    "Adjust JPG quality",
    "Browser-based image conversion",
    "No software installation",
    "Private local processing",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://letsresizeit.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "WebP to JPG Converter",
      item: "https://letsresizeit.com/webp-to-jpg",
    },
  ],
};

export default function WebpToJpgPage() {
  return (
    <>
      <Header />

      <main>
        {/* Structured data */}
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden bg-white">
          <div
            className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.10),transparent_65%)]"
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pb-14 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-blue-600"
                  aria-hidden="true"
                />
                Free online image converter
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Convert WebP to JPG Online
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Convert WebP images to JPG quickly and easily. Adjust image
                quality and download your JPG directly from your browser
                without installing software.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-emerald-600">✓</span>
                  Browser-based
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <span className="text-emerald-600">✓</span>
                  No software required
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <span className="text-emerald-600">✓</span>
                  Private processing
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONVERTER
        ========================================================== */}
        <section
          id="converter"
          aria-labelledby="converter-heading"
          className="scroll-mt-24 bg-slate-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
        >
          <div className="mx-auto w-full max-w-5xl">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
              <div className="text-center">
                <h2
                  id="converter-heading"
                  className="text-xl font-bold text-slate-950 sm:text-2xl"
                >
                  WebP to JPG Converter
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Drop your WebP image below or choose a file from your
                  device.
                </p>
              </div>

              {/* Upload area */}
              <div
                id="webp-drop-zone"
                className="mt-7 cursor-pointer rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-12 text-center transition hover:border-blue-400 hover:bg-blue-50/40 sm:px-8"
              >
                <input
                  id="webp-file-input"
                  type="file"
                  accept="image/webp,.webp"
                  className="sr-only"
                />

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 16V4" />
                    <path d="m7 9 5-5 5 5" />
                    <path d="M5 20h14" />
                  </svg>
                </div>

                <p className="mt-5 text-sm font-semibold text-slate-950">
                  Drop a WebP image here
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  or click to choose a file
                </p>

                <span className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                  Choose WebP image
                </span>

                <p className="mt-4 text-xs text-slate-400">
                  WebP files only
                </p>
              </div>

              {/* Selected file */}
              <div
                id="webp-selected-file"
                className="mt-5 hidden rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                      <path d="M14 2v6h6" />
                      <path d="M8 13h8" />
                      <path d="M8 17h5" />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      id="webp-file-name"
                      className="truncate text-sm font-semibold text-slate-900"
                    />

                    <p
                      id="webp-file-size"
                      className="mt-0.5 text-xs text-slate-500"
                    />
                  </div>

                  <button
                    id="webp-remove-file"
                    type="button"
                    className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-white hover:text-slate-950"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Settings */}
              <div
                id="webp-settings"
                className="mt-6 hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-950">
                      JPG quality
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Higher quality usually creates a larger JPG file.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      id="webp-quality"
                      type="range"
                      min="50"
                      max="100"
                      step="1"
                      defaultValue="92"
                      className="w-48 accent-blue-600"
                    />

                    <span
                      id="webp-quality-value"
                      className="w-12 text-right text-sm font-bold text-slate-950"
                    >
                      92%
                    </span>
                  </div>
                </div>

                <button
                  id="webp-convert-button"
                  type="button"
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h6v6H4z" />
                    <path d="M14 14h6v6h-6z" />
                    <path d="M14 4h6v6h-6z" />
                    <path d="M4 14h6v6H4z" />
                  </svg>

                  Convert to JPG
                </button>
              </div>

              {/* Error */}
              <div
                id="webp-error"
                role="alert"
                className="mt-5 hidden rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              />

              {/* Result */}
              <div
                id="webp-result"
                className="mt-7 hidden"
                aria-live="polite"
              >
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 sm:p-5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <div>
                      <p className="text-sm font-bold text-emerald-900">
                        Your JPG is ready
                      </p>

                      <p
                        id="webp-result-info"
                        className="mt-0.5 text-xs text-emerald-700"
                      />
                    </div>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <div className="flex min-h-[260px] items-center justify-center p-5">
                      <img
                        id="webp-output-preview"
                        src="/placeholder.svg"
                        alt="Converted JPG preview"
                        className="max-h-[420px] max-w-full rounded-lg object-contain shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <a
                      id="webp-download"
                      href="#"
                      download
                      className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 3v12" />
                        <path d="m7 10 5 5 5-5" />
                        <path d="M5 21h14" />
                      </svg>

                      Download JPG
                    </a>

                    <button
                      id="webp-convert-another"
                      type="button"
                      className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      Convert another
                    </button>
                  </div>
                </div>
              </div>

              {/* Privacy */}
              <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
                <svg
                  className="h-4 w-4 shrink-0 text-emerald-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>

                Your image is processed locally in your browser.
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO / SEARCH CONTEXT
        ========================================================== */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Convert WebP images to JPG in seconds
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                WebP is widely used on modern websites because it can provide
                efficient image compression. However, some applications,
                upload forms, editing programs and older workflows still work
                better with JPG or JPEG files. Our{" "}
                <strong className="font-semibold text-slate-900">
                  WebP to JPG converter
                </strong>{" "}
                gives you a simple way to change a WebP image into a standard
                JPG without installing an image conversion program.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                The conversion happens directly in your browser. Select your
                WebP image, choose the JPG quality you want, convert it and
                download the resulting JPEG file.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            USE CASES
        ========================================================== */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold text-blue-600">
                Common uses
              </span>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Why convert WebP to JPG?
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                JPG remains a practical choice when compatibility and easy
                sharing matter more than using the newest image format.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Website downloads",
                  text: "Turn WebP images saved from websites into JPG files for use in other applications.",
                  icon: "↓",
                },
                {
                  title: "Upload compatibility",
                  text: "Convert an image when a website, form or service accepts JPG but does not accept WebP.",
                  icon: "↑",
                },
                {
                  title: "Photo editing",
                  text: "Create a JPG copy that can be opened in software or workflows that have limited WebP support.",
                  icon: "✦",
                },
                {
                  title: "Email & sharing",
                  text: "Use JPG when you need a familiar image format for sharing, attachments or everyday workflows.",
                  icon: "↗",
                },
                {
                  title: "Printing workflows",
                  text: "Convert WebP images into a widely recognized format before sending them to compatible print workflows.",
                  icon: "▣",
                },
                {
                  title: "Social media preparation",
                  text: "Create a JPG version when a platform or publishing workflow works better with JPEG images.",
                  icon: "◎",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-600">
                    {item.icon}
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
            HOW IT WORKS
        ========================================================== */}
        <section
          id="how-it-works"
          className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold text-blue-600">
                Simple process
              </span>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                How to convert WebP to JPG
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                Convert your image in three simple steps.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Choose your WebP image",
                  text: "Drag and drop a WebP file into the converter or select one from your device.",
                },
                {
                  number: "02",
                  title: "Choose JPG quality",
                  text: "Adjust the JPG quality to find the right balance between image quality and file size.",
                },
                {
                  number: "03",
                  title: "Download your JPG",
                  text: "Convert the image and download the resulting JPG file directly to your device.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="text-sm font-bold text-blue-600">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-base font-bold text-slate-950">
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
            BENEFITS
        ========================================================== */}
        <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold text-blue-300">
                Built for everyday conversion
              </span>

              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                A simpler way to convert WebP to JPG
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
                No complicated image editor. No conversion workflow to learn.
                Just choose your WebP image and create the JPG you need.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Easy to use",
                  text: "A straightforward converter designed for quick image conversion.",
                },
                {
                  title: "Browser-based",
                  text: "Convert images directly from a modern browser without installing software.",
                },
                {
                  title: "Quality control",
                  text: "Choose the JPG quality that best fits your needs.",
                },
                {
                  title: "Private by design",
                  text: "The conversion can happen locally in your browser instead of requiring a file upload.",
                },
              ].map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                    ✓
                  </div>

                  <h3 className="mt-5 text-base font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {benefit.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            WEBP VS JPG
        ========================================================== */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="text-sm font-semibold text-blue-600">
                Format guide
              </span>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                WebP vs JPG: which format should you use?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Both formats have useful applications. The right choice
                depends on compatibility, image quality and file-size
                requirements.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-sm font-semibold text-slate-900">
                <div className="p-4">Feature</div>
                <div className="border-l border-slate-200 p-4">WebP</div>
                <div className="border-l border-slate-200 p-4">JPG</div>
              </div>

              {[
                ["Modern web compression", "Excellent", "Good"],
                ["Compatibility", "Good", "Very broad"],
                ["Photographs", "Excellent", "Excellent"],
                ["Transparency", "Supported", "Not supported"],
                ["Lossy compression", "Supported", "Supported"],
              ].map(([feature, webp, jpg]) => (
                <div
                  key={feature}
                  className="grid grid-cols-3 border-b border-slate-100 text-sm last:border-b-0"
                >
                  <div className="p-4 font-medium text-slate-700">
                    {feature}
                  </div>

                  <div className="border-l border-slate-100 p-4 text-slate-600">
                    {webp}
                  </div>

                  <div className="border-l border-slate-100 p-4 text-slate-600">
                    {jpg}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================== */}
        <section
          id="faq"
          className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="text-sm font-semibold text-blue-600">
                Frequently asked questions
              </span>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                WebP to JPG Converter FAQ
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Answers to common questions about converting WebP images to
                JPG.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-950">
                    {faq.question}

                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>

                  <p className="mt-3 pr-10 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            RELATED TOOLS
        ========================================================== */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="text-sm font-semibold text-blue-600">
                More image tools
              </span>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                More ways to work with your images
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  href: "/png-to-jpg",
                  title: "PNG to JPG",
                  text: "Convert PNG images to JPG.",
                },
                {
                  href: "/jpg-to-png",
                  title: "JPG to PNG",
                  text: "Convert JPG images to PNG.",
                },
                {
                  href: "/image-to-jpg",
                  title: "Image to JPG",
                  text: "Convert common images to JPG.",
                },
                {
                  href: "/compress-image",
                  title: "Compress Image",
                  text: "Reduce image file size online.",
                },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-950 group-hover:text-blue-600">
                      {tool.title}
                    </h3>

                    <span className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-600">
                      →
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {tool.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="bg-blue-600 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Need to convert a WebP image?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
              Convert your WebP file to JPG directly in your browser and
              download the result when it is ready.
            </p>

            <a
              href="#converter"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-xl bg-white px-7 text-sm font-bold text-blue-700 shadow-sm transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Convert WebP to JPG
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* =========================================================
          CLIENT-SIDE CONVERTER
      ========================================================== */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  if (window.__webpToJpgInitialized) return;
  window.__webpToJpgInitialized = true;

  const input = document.getElementById("webp-file-input");
  const dropZone = document.getElementById("webp-drop-zone");
  const selectedFile = document.getElementById("webp-selected-file");
  const fileName = document.getElementById("webp-file-name");
  const fileSize = document.getElementById("webp-file-size");
  const removeButton = document.getElementById("webp-remove-file");
  const settings = document.getElementById("webp-settings");
  const quality = document.getElementById("webp-quality");
  const qualityValue = document.getElementById("webp-quality-value");
  const convertButton = document.getElementById("webp-convert-button");
  const errorBox = document.getElementById("webp-error");
  const result = document.getElementById("webp-result");
  const resultInfo = document.getElementById("webp-result-info");
  const preview = document.getElementById("webp-output-preview");
  const download = document.getElementById("webp-download");
  const convertAnother = document.getElementById("webp-convert-another");

  let selected = null;
  let originalUrl = null;
  let outputUrl = null;

  function formatBytes(bytes) {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) {
      return (bytes / 1024).toFixed(1) + " KB";
    }
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  }

  function showError(message) {
    errorBox.textContent = message;
    errorBox.classList.remove("hidden");
  }

  function clearError() {
    errorBox.textContent = "";
    errorBox.classList.add("hidden");
  }

  function reset() {
    selected = null;

    if (originalUrl) {
      URL.revokeObjectURL(originalUrl);
      originalUrl = null;
    }

    if (outputUrl) {
      URL.revokeObjectURL(outputUrl);
      outputUrl = null;
    }

    input.value = "";
    selectedFile.classList.add("hidden");
    settings.classList.add("hidden");
    result.classList.add("hidden");
    clearError();
  }

  function selectFile(file) {
    clearError();

    if (!file) return;

    const isWebp =
      file.type === "image/webp" ||
      file.name.toLowerCase().endsWith(".webp");

    if (!isWebp) {
      showError("Please choose a WebP image (.webp).");
      return;
    }

    if (file.size === 0) {
      showError("This file appears to be empty. Please choose another WebP image.");
      return;
    }

    selected = file;

    if (originalUrl) {
      URL.revokeObjectURL(originalUrl);
    }

    originalUrl = URL.createObjectURL(file);

    fileName.textContent = file.name;
    fileSize.textContent = formatBytes(file.size);

    selectedFile.classList.remove("hidden");
    settings.classList.remove("hidden");
    result.classList.add("hidden");
  }

  input.addEventListener("change", function () {
    selectFile(input.files && input.files[0]);
  });

  dropZone.addEventListener("click", function () {
    input.click();
  });

  dropZone.addEventListener("dragover", function (event) {
    event.preventDefault();
    dropZone.classList.add("border-blue-500", "bg-blue-50");
  });

  dropZone.addEventListener("dragleave", function () {
    dropZone.classList.remove("border-blue-500", "bg-blue-50");
  });

  dropZone.addEventListener("drop", function (event) {
    event.preventDefault();
    dropZone.classList.remove("border-blue-500", "bg-blue-50");

    const file =
      event.dataTransfer &&
      event.dataTransfer.files &&
      event.dataTransfer.files[0];

    selectFile(file);
  });

  removeButton.addEventListener("click", function (event) {
    event.stopPropagation();
    reset();
  });

  convertAnother.addEventListener("click", function () {
    reset();
    window.scrollTo({
      top: dropZone.getBoundingClientRect().top + window.scrollY - 120,
      behavior: "smooth"
    });
    setTimeout(function () {
      input.click();
    }, 350);
  });

  quality.addEventListener("input", function () {
    qualityValue.textContent = quality.value + "%";
  });

  convertButton.addEventListener("click", async function () {
    if (!selected) {
      showError("Choose a WebP image first.");
      return;
    }

    clearError();

    const originalText = convertButton.innerHTML;
    convertButton.disabled = true;
    convertButton.classList.add("opacity-70", "cursor-not-allowed");
    convertButton.innerHTML =
      '<span class="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span> Converting...';

    try {
      const image = new Image();

      image.decoding = "async";

      const imageLoaded = new Promise(function (resolve, reject) {
        image.onload = resolve;
        image.onerror = function () {
          reject(new Error("The WebP image could not be decoded by your browser."));
        };
      });

      image.src = originalUrl;

      await imageLoaded;

      if (!image.naturalWidth || !image.naturalHeight) {
        throw new Error("The selected WebP image has invalid dimensions.");
      }

      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error("Your browser could not create an image conversion canvas.");
      }

      /*
       * JPG does not support transparency.
       * Use white as the background before drawing
       * the WebP image.
       */
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.drawImage(image, 0, 0);

      const qualityNumber = Number(quality.value) / 100;

      const blob = await new Promise(function (resolve, reject) {
        canvas.toBlob(
          function (output) {
            if (output) {
              resolve(output);
            } else {
              reject(new Error("The browser could not create the JPG output."));
            }
          },
          "image/jpeg",
          qualityNumber
        );
      });

      if (!blob || blob.size === 0) {
        throw new Error("The converted JPG file is empty.");
      }

      if (outputUrl) {
        URL.revokeObjectURL(outputUrl);
      }

      outputUrl = URL.createObjectURL(blob);

      preview.src = outputUrl;

      const originalName =
        selected.name.replace(/\\.webp$/i, "").replace(/\\.[^/.]+$/, "");

      const outputName =
        (originalName || "converted-image") + ".jpg";

      download.href = outputUrl;
      download.download = outputName;

      resultInfo.textContent =
        canvas.width +
        " × " +
        canvas.height +
        " px • " +
        formatBytes(blob.size) +
        " • JPG quality " +
        quality.value +
        "%";

      result.classList.remove("hidden");

      result.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } catch (conversionError) {
      showError(
        conversionError instanceof Error
          ? conversionError.message
          : "We couldn't convert this WebP image. Please try another file."
      );
    } finally {
      convertButton.disabled = false;
      convertButton.classList.remove("opacity-70", "cursor-not-allowed");
      convertButton.innerHTML = originalText;
    }
  });
})();
`,
        }}
      />
    </>
  );
}