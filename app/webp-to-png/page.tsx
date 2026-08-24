import type { Metadata } from "next";
import Script from "next/script";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "WebP to PNG Converter Online Free | Convert WebP to PNG",
  description:
    "Convert WebP to PNG online for free. Preserve transparency and image quality with our fast browser-based WebP to PNG converter. No signup, no watermark, and your images stay on your device.",
  keywords: [
    "webp to png",
    "webp to png converter",
    "webp to png online",
    "convert webp to png",
    "convert webp to png online",
    "webp to png free",
    "free webp to png converter",
    "webp image to png",
    "change webp to png",
    "webp png converter",
    "webp to png without losing quality",
    "webp to png transparent",
  ],
  alternates: {
    canonical: "/webp-to-png",
  },
  openGraph: {
    title: "WebP to PNG Converter Online Free",
    description:
      "Convert WebP images to PNG instantly in your browser. Preserve transparency and image quality without uploading your files.",
    type: "website",
    url: "/webp-to-png",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebP to PNG Converter Online Free",
    description:
      "Free WebP to PNG converter with browser-based conversion, transparency preservation, and no signup.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "How do I convert WebP to PNG?",
    answer:
      "Choose or drag a WebP image into the converter above. Your browser reads the WebP file locally, converts it to PNG using the Canvas API, and lets you download the resulting PNG file. No server upload is required.",
  },
  {
    question: "Is this WebP to PNG converter free?",
    answer:
      "Yes. The WebP to PNG converter is free to use and does not require an account or subscription for the conversion experience.",
  },
  {
    question: "Does converting WebP to PNG reduce image quality?",
    answer:
      "PNG is a lossless image format. The conversion does not intentionally apply JPEG-style quality compression. The decoded WebP pixels are written into a PNG image.",
  },
  {
    question: "Will transparent WebP images remain transparent?",
    answer:
      "Yes. PNG supports transparency, so transparent areas in a WebP image can be preserved when the image is converted to PNG.",
  },
  {
    question: "Are my WebP images uploaded to a server?",
    answer:
      "No. This converter performs the conversion directly inside your browser. Your selected image is processed locally on your device.",
  },
  {
    question: "Can I convert WebP images on my phone?",
    answer:
      "Yes. The converter is designed to work in modern mobile browsers as well as desktop browsers. Select a WebP image from your device and download the resulting PNG.",
  },
  {
    question: "Why would I convert WebP to PNG?",
    answer:
      "PNG can be useful when you need a widely supported lossless format for image editing, design software, presentations, documents, graphics, or workflows that do not accept WebP files.",
  },
  {
    question: "Can I convert an animated WebP to PNG?",
    answer:
      "PNG is a static image format. If a WebP contains animation, this browser-based conversion uses the image frame that the browser decodes for the canvas rather than producing an animated PNG sequence.",
  },
];

export default function WebpToPngPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-slate-950">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50 via-white to-white">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[420px] opacity-70"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 top-[-180px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" />
            <div className="absolute right-[-100px] top-[100px] h-[240px] w-[240px] rounded-full bg-cyan-100 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-18 lg:px-8 lg:pb-24 lg:pt-20">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
                <span
                  className="h-2 w-2 rounded-full bg-blue-500"
                  aria-hidden="true"
                />
                Free WebP to PNG Converter
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Convert WebP to PNG
                <span className="block text-blue-600">
                  Online, Fast &amp; Free
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Turn WebP images into high-quality PNG files directly in your
                browser. Preserve transparency, keep your image dimensions,
                and download your PNG without uploading your image to a
                server.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500 sm:text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-emerald-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                  No signup
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-emerald-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 3v18" />
                    <path d="M3 12h18" />
                  </svg>
                  PNG output
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-emerald-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  </svg>
                  Browser-based
                </span>
              </div>
            </div>

            {/* =====================================================
                TOOL
            ====================================================== */}
            <div
              id="converter"
              className="mx-auto mt-12 max-w-4xl scroll-mt-24"
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_70px_-30px_rgba(15,23,42,0.25)]">
                {/* Tool header */}
                <div className="flex flex-col gap-4 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      WebP → PNG Converter
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Convert your image directly in this browser.
                    </p>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                    <span
                      className="h-2 w-2 rounded-full bg-emerald-500"
                      aria-hidden="true"
                    />
                    Private conversion
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  {/* Dropzone */}
                  <label
                    id="webp-dropzone"
                    htmlFor="webp-file-input"
                    className="group relative flex min-h-[310px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center transition-all duration-200 hover:border-blue-400 hover:bg-blue-50/40"
                  >
                    <input
                      id="webp-file-input"
                      type="file"
                      accept="image/webp,.webp"
                      className="sr-only"
                    />

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-200 transition-transform duration-200 group-hover:-translate-y-1">
                      <svg
                        className="h-8 w-8"
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

                    <h2 className="mt-6 text-lg font-bold text-slate-950">
                      Drop your WebP image here
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      or click to choose a WebP file
                    </p>

                    <span className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                      Choose WebP image
                    </span>

                    <p className="mt-4 text-xs text-slate-400">
                      WebP files • Processed locally • No server upload
                    </p>
                  </label>

                  {/* Processing */}
                  <div
                    id="webp-processing"
                    className="hidden rounded-2xl border border-blue-100 bg-blue-50 p-6"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"
                        aria-hidden="true"
                      />

                      <div>
                        <p className="text-sm font-bold text-slate-950">
                          Converting WebP to PNG...
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Processing your image locally in the browser.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Error */}
                  <div
                    id="webp-error"
                    className="hidden rounded-2xl border border-red-200 bg-red-50 p-5"
                    role="alert"
                  >
                    <div className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 8v4" />
                          <path d="M12 16h.01" />
                        </svg>
                      </div>

                      <div>
                        <p className="text-sm font-bold text-red-900">
                          Conversion failed
                        </p>
                        <p
                          id="webp-error-message"
                          className="mt-1 text-xs leading-5 text-red-700"
                        >
                          Please choose a valid WebP image and try again.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Result */}
                  <div id="webp-result" className="hidden">
                    <div className="grid gap-5 lg:grid-cols-2">
                      {/* Original */}
                      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                          <div>
                            <p className="text-sm font-bold text-slate-950">
                              Original WebP
                            </p>
                            <p
                              id="webp-original-name"
                              className="mt-1 max-w-[220px] truncate text-xs text-slate-500"
                            />
                          </div>

                          <span
                            id="webp-original-size"
                            className="text-xs font-semibold text-slate-600"
                          />
                        </div>

                        <div className="flex min-h-[270px] items-center justify-center bg-slate-100 p-5">
                          <img
                            id="webp-original-preview"
                            alt="Original WebP preview"
                            className="max-h-[320px] max-w-full rounded-xl object-contain shadow-sm"
                          />
                        </div>
                      </div>

                      {/* PNG */}
                      <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-white">
                        <div className="flex items-center justify-between border-b border-emerald-100 px-5 py-4">
                          <div>
                            <p className="text-sm font-bold text-slate-950">
                              Converted PNG
                            </p>
                            <p className="mt-1 text-xs font-semibold text-emerald-600">
                              PNG • Lossless
                            </p>
                          </div>

                          <span
                            id="webp-output-size"
                            className="text-xs font-bold text-emerald-600"
                          />
                        </div>

                        <div className="flex min-h-[270px] items-center justify-center bg-[linear-gradient(45deg,#f1f5f9_25%,transparent_25%),linear-gradient(-45deg,#f1f5f9_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f1f5f9_75%),linear-gradient(-45deg,transparent_75%,#f1f5f9_75%)] bg-[length:24px_24px] bg-[position:0_0,0_12px,12px_-12px,-12px_0] p-5">
                          <img
                            id="webp-output-preview"
                            alt="Converted PNG preview"
                            className="max-h-[320px] max-w-full rounded-xl object-contain shadow-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Result information */}
                    <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        <div className="rounded-xl bg-white p-4">
                          <p className="text-xs font-medium text-slate-500">
                            Output
                          </p>
                          <p className="mt-1 text-sm font-bold text-slate-950">
                            PNG
                          </p>
                        </div>

                        <div className="rounded-xl bg-white p-4">
                          <p className="text-xs font-medium text-slate-500">
                            Dimensions
                          </p>
                          <p
                            id="webp-dimensions"
                            className="mt-1 text-sm font-bold text-slate-950"
                          />
                        </div>

                        <div className="rounded-xl bg-white p-4">
                          <p className="text-xs font-medium text-slate-500">
                            Transparency
                          </p>
                          <p className="mt-1 text-sm font-bold text-emerald-600">
                            Supported
                          </p>
                        </div>

                        <div className="rounded-xl bg-white p-4">
                          <p className="text-xs font-medium text-slate-500">
                            Processing
                          </p>
                          <p className="mt-1 text-sm font-bold text-slate-950">
                            Local
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                        <button
                          id="webp-download"
                          type="button"
                          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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
                          Download PNG
                        </button>

                        <button
                          id="webp-reset"
                          type="button"
                          className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-bold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                        >
                          Convert another
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Privacy strip */}
                <div className="border-t border-slate-100 bg-slate-50 px-5 py-4 sm:px-7">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
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

                    <div>
                      <p className="text-xs font-bold text-slate-800">
                        Your image stays on your device
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        WebP to PNG conversion happens inside your browser.
                        Your image does not need to be uploaded to a remote
                        server.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            QUICK ANSWER
        ========================================================== */}
        <section className="border-b border-slate-100 bg-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
            <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                WebP to PNG — Quick Answer
              </p>

              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                What happens when you convert WebP to PNG?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                A WebP image is decoded into pixels and those pixels are
                written into a PNG image. PNG uses lossless compression, making
                it useful when you need a widely supported image format,
                editing compatibility, or transparency. The conversion on
                this page takes place directly in your browser.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHY CONVERT
        ========================================================== */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-bold text-blue-600">
                Why convert WebP to PNG?
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                PNG is still useful when compatibility and transparency matter
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                WebP is excellent for modern websites because it can deliver
                smaller image files. But you may need PNG when an image needs
                to move into an editing workflow, presentation, document,
                design application, or platform that does not accept WebP.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Design & Editing",
                  text: "Use PNG when moving WebP assets into image editors and design workflows.",
                  icon: (
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="m14 4 6 6" />
                      <path d="m16 2 6 6" />
                      <path d="m3 21 6-1 11-11-5-5L4 15l-1 6Z" />
                    </svg>
                  ),
                },
                {
                  number: "02",
                  title: "Transparent Graphics",
                  text: "PNG supports alpha transparency for logos, icons, cutouts, and overlays.",
                  icon: (
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <circle cx="8" cy="8" r="3" />
                      <circle cx="16" cy="16" r="3" />
                      <path d="M5 19 19 5" />
                    </svg>
                  ),
                },
                {
                  number: "03",
                  title: "Software Compatibility",
                  text: "PNG is supported by a broad range of image, document, and creative applications.",
                  icon: (
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M8 9h8" />
                      <path d="M8 13h5" />
                    </svg>
                  ),
                },
                {
                  number: "04",
                  title: "Lossless Output",
                  text: "PNG is lossless, making it a practical choice when preserving pixel information matters.",
                  icon: (
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z" />
                      <path d="m8 12 2.5 2.5L16 9" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      {item.icon}
                    </div>

                    <span className="text-xs font-black text-slate-300">
                      {item.number}
                    </span>
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
        <section className="border-y border-slate-100 bg-slate-50 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-bold text-blue-600">
                How it works
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Convert WebP to PNG in three simple steps
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                No software installation or complicated settings. Select your
                WebP image, let your browser convert it, and download the PNG.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Choose your WebP",
                  text: "Drag and drop a WebP image into the converter or select one from your device.",
                },
                {
                  step: "2",
                  title: "Convert locally",
                  text: "Your browser decodes the WebP image and creates a PNG without sending the file to a server.",
                },
                {
                  step: "3",
                  title: "Download PNG",
                  text: "Preview the converted image and download your PNG file immediately.",
                },
              ].map((item) => (
                <article
                  key={item.step}
                  className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                    {item.step}
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

        {/* =========================================================
            BENEFITS
        ========================================================== */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <span className="text-sm font-bold text-blue-600">
                Built for everyday image conversion
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                A WebP to PNG converter without the unnecessary friction
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                You should not need to install desktop software, create an
                account, or upload a private image simply to change its file
                format.
              </p>

              <a
                href="#converter"
                className="mt-7 inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
              >
                Convert WebP to PNG
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Browser-based",
                  "The conversion runs directly in your browser.",
                ],
                [
                  "Transparency friendly",
                  "PNG output supports transparent image regions.",
                ],
                [
                  "No registration",
                  "Start converting without creating an account.",
                ],
                [
                  "No watermark",
                  "Your converted PNG is produced without a watermark.",
                ],
                [
                  "Original dimensions",
                  "The conversion keeps the source image dimensions.",
                ],
                [
                  "Fast workflow",
                  "Choose, convert, preview, and download in one place.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <svg
                        className="h-3 w-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        aria-hidden="true"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <div>
                      <h3 className="text-sm font-bold text-slate-950">
                        {title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SEO CONTENT
        ========================================================== */}
        <section className="border-y border-slate-100 bg-slate-50 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">
              <span className="text-sm font-bold text-blue-600">
                WebP to PNG guide
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Convert WebP to PNG online without losing transparency
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                WebP and PNG are both popular image formats, but they are
                designed with different priorities. WebP is optimized for
                efficient image delivery on the web, while PNG is a
                long-established lossless format that is widely supported by
                browsers, operating systems, image editors, design tools, and
                document applications.
              </p>

              <p className="mt-5 text-base leading-7 text-slate-600">
                If you downloaded an image from a website and received a
                <strong className="font-semibold text-slate-800">
                  {" "}
                  .webp
                </strong>{" "}
                file when you actually need a
                <strong className="font-semibold text-slate-800">
                  {" "}
                  .png
                </strong>{" "}
                file, this converter provides a direct way to make that
                change. The conversion keeps the original image dimensions and
                creates a PNG output suitable for workflows that require PNG.
              </p>

              <h3 className="mt-10 text-xl font-black text-slate-950">
                Why use PNG instead of WebP?
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                PNG is often preferred when lossless image storage,
                transparency, editing compatibility, or predictable support
                across software matters more than minimizing file size. This
                can be particularly useful for logos, screenshots, interface
                graphics, illustrations, icons, and images that will be
                edited or composited.
              </p>

              <h3 className="mt-10 text-xl font-black text-slate-950">
                Does WebP to PNG conversion make the file larger?
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                It can. WebP was designed to provide efficient compression,
                while PNG uses lossless compression. As a result, a PNG file
                can be significantly larger than the original WebP. That is
                normal and is one of the trade-offs of choosing PNG.
              </p>

              <h3 className="mt-10 text-xl font-black text-slate-950">
                WebP to PNG for transparent images
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Transparency is one of the reasons PNG remains useful. When
                the source WebP contains transparent regions, PNG can represent
                those alpha values rather than forcing the image onto a solid
                background. This makes PNG particularly useful for logos,
                stickers, overlays, product graphics, and other assets where
                the background needs to remain transparent.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================== */}
        <section
          id="faq"
          className="bg-white py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-bold text-blue-600">
                Frequently asked questions
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                WebP to PNG converter FAQ
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Everything you need to know about converting WebP images to
                PNG files.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold text-slate-950 [&::-webkit-details-marker]:hidden">
                    {faq.question}

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-45">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
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
        <section className="border-t border-slate-100 bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-bold text-blue-400">
              Ready to convert?
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Turn your WebP into PNG in seconds.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Free WebP to PNG conversion with a simple browser-based
              workflow.
            </p>

            <a
              href="#converter"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-7 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500"
            >
              Convert WebP to PNG
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* =========================================================
          STRUCTURED DATA
      ========================================================== */}
      <Script
        id="webp-to-png-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                name: "WebP to PNG Converter",
                applicationCategory: "MultimediaApplication",
                operatingSystem: "Any",
                description:
                  "Free online WebP to PNG converter that processes images directly in the browser.",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
                featureList: [
                  "Convert WebP to PNG",
                  "Browser-based conversion",
                  "Transparency support",
                  "Lossless PNG output",
                  "No signup",
                ],
              },
              {
                "@type": "HowTo",
                name: "How to convert WebP to PNG",
                step: [
                  {
                    "@type": "HowToStep",
                    position: 1,
                    name: "Choose a WebP image",
                    text: "Select or drag a WebP image into the converter.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 2,
                    name: "Convert the image",
                    text: "The browser converts the WebP image into PNG locally.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 3,
                    name: "Download the PNG",
                    text: "Download the converted PNG image.",
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
          }),
        }}
      />

      {/* =========================================================
          CONVERTER ENGINE
      ========================================================== */}
      <Script
        id="webp-to-png-engine"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  "use strict";

  var input = document.getElementById("webp-file-input");
  var dropzone = document.getElementById("webp-dropzone");
  var processing = document.getElementById("webp-processing");
  var errorBox = document.getElementById("webp-error");
  var errorMessage = document.getElementById("webp-error-message");
  var result = document.getElementById("webp-result");

  var originalPreview = document.getElementById("webp-original-preview");
  var outputPreview = document.getElementById("webp-output-preview");

  var originalName = document.getElementById("webp-original-name");
  var originalSize = document.getElementById("webp-original-size");
  var outputSize = document.getElementById("webp-output-size");
  var dimensions = document.getElementById("webp-dimensions");

  var downloadButton = document.getElementById("webp-download");
  var resetButton = document.getElementById("webp-reset");

  var currentOutputUrl = null;
  var currentOriginalUrl = null;
  var currentBlob = null;
  var currentFileName = "image.webp";

  function formatSize(bytes) {
    if (bytes < 1024) {
      return bytes + " B";
    }

    if (bytes < 1024 * 1024) {
      return (bytes / 1024).toFixed(1) + " KB";
    }

    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  }

  function show(element) {
    if (element) {
      element.classList.remove("hidden");
    }
  }

  function hide(element) {
    if (element) {
      element.classList.add("hidden");
    }
  }

  function cleanupUrls() {
    if (currentOutputUrl) {
      URL.revokeObjectURL(currentOutputUrl);
      currentOutputUrl = null;
    }

    if (currentOriginalUrl) {
      URL.revokeObjectURL(currentOriginalUrl);
      currentOriginalUrl = null;
    }
  }

  function showError(message) {
    hide(processing);
    hide(result);

    if (errorMessage) {
      errorMessage.textContent = message;
    }

    show(errorBox);
  }

  function processFile(file) {
    if (!file) {
      return;
    }

    hide(errorBox);
    hide(result);
    show(processing);

    if (file.type !== "image/webp" && !/\\.webp$/i.test(file.name)) {
      showError("Please choose a WebP image. This tool accepts .webp files.");
      return;
    }

    currentFileName = file.name;

    cleanupUrls();

    currentOriginalUrl = URL.createObjectURL(file);

    if (originalPreview) {
      originalPreview.removeAttribute("src");
      originalPreview.src = currentOriginalUrl;
    }

    if (originalName) {
      originalName.textContent = file.name;
      originalName.title = file.name;
    }

    if (originalSize) {
      originalSize.textContent = formatSize(file.size);
    }

    var reader = new FileReader();

    reader.onload = function () {
      var img = new Image();

      img.onload = function () {
        try {
          var canvas = document.createElement("canvas");

          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;

          var context = canvas.getContext("2d", {
            alpha: true
          });

          if (!context) {
            throw new Error("Your browser could not create an image canvas.");
          }

          context.clearRect(0, 0, canvas.width, canvas.height);

          context.drawImage(
            img,
            0,
            0,
            canvas.width,
            canvas.height
          );

          canvas.toBlob(
            function (blob) {
              if (!blob) {
                showError("The browser could not create the PNG output.");
                return;
              }

              currentBlob = blob;
              currentOutputUrl = URL.createObjectURL(blob);

              if (outputPreview) {
                outputPreview.removeAttribute("src");
                outputPreview.src = currentOutputUrl;
              }

              if (outputSize) {
                outputSize.textContent = formatSize(blob.size);
              }

              if (dimensions) {
                dimensions.textContent =
                  canvas.width + " × " + canvas.height;
              }

              hide(processing);
              hide(errorBox);
              show(result);
            },
            "image/png"
          );
        } catch (conversionError) {
          showError(
            conversionError instanceof Error
              ? conversionError.message
              : "Something went wrong while converting the image."
          );
        }
      };

      img.onerror = function () {
        showError(
          "The selected WebP image could not be decoded by your browser."
        );
      };

      img.src = reader.result;
    };

    reader.onerror = function () {
      showError("The selected file could not be read.");
    };

    reader.readAsDataURL(file);
  }

  if (input) {
    input.addEventListener("change", function () {
      var file = input.files && input.files[0];

      if (file) {
        processFile(file);
      }
    });
  }

  if (dropzone) {
    ["dragenter", "dragover"].forEach(function (eventName) {
      dropzone.addEventListener(eventName, function (event) {
        event.preventDefault();
        event.stopPropagation();

        dropzone.classList.add(
          "border-blue-500",
          "bg-blue-50"
        );
      });
    });

    ["dragleave", "drop"].forEach(function (eventName) {
      dropzone.addEventListener(eventName, function (event) {
        event.preventDefault();
        event.stopPropagation();

        dropzone.classList.remove(
          "border-blue-500",
          "bg-blue-50"
        );
      });
    });

    dropzone.addEventListener("drop", function (event) {
      var files = event.dataTransfer && event.dataTransfer.files;

      if (files && files.length > 0) {
        processFile(files[0]);
      }
    });
  }

  if (downloadButton) {
    downloadButton.addEventListener("click", function () {
      if (!currentBlob) {
        return;
      }

      var baseName = currentFileName.replace(/\\.[^/.]+$/, "");

      var url = URL.createObjectURL(currentBlob);
      var anchor = document.createElement("a");

      anchor.href = url;
      anchor.download = baseName + ".png";

      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();

      setTimeout(function () {
        URL.revokeObjectURL(url);
      }, 1000);
    });
  }

  if (resetButton) {
    resetButton.addEventListener("click", function () {
      cleanupUrls();

      currentBlob = null;

      hide(processing);
      hide(errorBox);
      hide(result);

      if (input) {
        input.value = "";
      }

      if (originalPreview) {
        originalPreview.removeAttribute("src");
      }

      if (outputPreview) {
        outputPreview.removeAttribute("src");
      }

      if (originalName) {
        originalName.textContent = "";
      }

      if (originalSize) {
        originalSize.textContent = "";
      }

      if (outputSize) {
        outputSize.textContent = "";
      }

      if (dimensions) {
        dimensions.textContent = "";
      }

      window.location.hash = "converter";
    });
  }

  window.addEventListener("beforeunload", cleanupUrls);
})();
`,
        }}
      />
    </>
  );
}