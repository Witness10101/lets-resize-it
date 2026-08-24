import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | Resize, Compress & Convert Images Online",
  description:
    "Learn how Let's Resize It works. Resize, compress, and convert JPG, PNG, and WebP images online with simple browser-based image tools.",
  keywords: [
    "how to resize an image",
    "how to resize images online",
    "how to compress an image",
    "how to convert JPG to WebP",
    "resize image online",
    "compress image online",
    "convert image online",
    "image resizing tool",
    "image compression tool",
    "image converter",
  ],
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How It Works | Let's Resize It",
    description:
      "See how Let's Resize It makes image resizing, compression, and conversion simple.",
    url: "/how-it-works",
    siteName: "Let's Resize It",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works | Let's Resize It",
    description:
      "Resize, compress, and convert images online in a few simple steps.",
  },
};

const steps = [
  {
    number: "01",
    title: "Choose your image",
    description:
      "Start by selecting the JPG, PNG, or WebP image you want to work with. You can use an image from your device and get started without complicated editing software.",
    icon: (
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
        <path d="M12 16V4" />
        <path d="m7 9 5-5 5 5" />
        <path d="M5 20h14" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Choose what you need",
    description:
      "Resize an image to specific dimensions or a target file size, compress an image, or convert it between supported formats such as JPG, PNG, and WebP.",
    icon: (
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
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
        <circle cx="9" cy="6" r="2" />
        <circle cx="15" cy="12" r="2" />
        <circle cx="11" cy="18" r="2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Download your result",
    description:
      "Once your image has been processed, download the result and use it wherever you need it — websites, forms, applications, social platforms, documents, and more.",
    icon: (
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
        <path d="M12 4v12" />
        <path d="m7 11 5 5 5-5" />
        <path d="M5 20h14" />
      </svg>
    ),
  },
];

const workflows = [
  {
    title: "Resize an image",
    description:
      "Change the dimensions of an image when you need a specific width and height. This is useful for profile pictures, websites, applications, forms, thumbnails, and other situations where exact image dimensions matter.",
    href: "/resize-image",
    label: "Resize an Image",
    icon: (
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
        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
        <path d="M16 3h3a2 2 0 0 1 2 2v3" />
        <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
        <path d="M8 8l4 4 4-4" />
        <path d="M12 12v6" />
      </svg>
    ),
  },
  {
    title: "Resize to a target file size",
    description:
      "Need an image below a specific file-size limit? Use one of the target-size tools to reduce an image toward a required KB limit for forms, applications, uploads, and other platforms.",
    href: "/resize-image-to-100-kb",
    label: "Resize to 100 KB",
    icon: (
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
        <path d="M12 3v18" />
        <path d="M5 8h14" />
        <path d="M5 16h14" />
      </svg>
    ),
  },
  {
    title: "Resize to exact dimensions",
    description:
      "For situations where dimensions matter more than file size, use dedicated dimension tools such as 200×200, 300×300, or 1080×1080 image resizing.",
    href: "/resize-image-to-1080x1080",
    label: "Resize to 1080×1080",
    icon: (
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
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8v8H8z" />
      </svg>
    ),
  },
  {
    title: "Convert image formats",
    description:
      "Convert images between commonly used formats when a website, application, workflow, or platform requires a different file type.",
    href: "/convert-jpg-to-webp",
    label: "JPG to WebP",
    icon: (
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
        <path d="M7 7h10l-3-3" />
        <path d="M17 17H7l3 3" />
        <path d="M17 7l3 3-3 3" />
        <path d="M7 17l-3-3 3-3" />
      </svg>
    ),
  },
];

const useCases = [
  "Website images",
  "Social media images",
  "Profile pictures",
  "Online forms",
  "Job applications",
  "Document uploads",
  "Product images",
  "Blog images",
  "Application uploads",
  "Email attachments",
  "Thumbnails",
  "General image optimization",
];

const faqs = [
  {
    question: "How does Let's Resize It work?",
    answer:
      "Let's Resize It provides simple browser-based image tools for resizing, compressing, and converting images. Choose a tool, upload your image, select the required settings, process it, and download the result.",
  },
  {
    question: "Can I resize an image online without installing software?",
    answer:
      "Yes. Let's Resize It is designed to provide image resizing tools directly in your browser, so you can resize images online without installing traditional image editing software.",
  },
  {
    question: "Can I resize an image to a specific file size?",
    answer:
      "Yes. Let's Resize It includes dedicated target-size tools for common file-size requirements such as 50 KB, 100 KB, 200 KB, and 500 KB.",
  },
  {
    question: "Can I resize an image to exact dimensions?",
    answer:
      "Yes. Dedicated tools are available for common dimensions including 200×200, 300×300, and 1080×1080 pixels.",
  },
  {
    question: "Can I convert JPG to WebP?",
    answer:
      "Yes. Let's Resize It includes a dedicated JPG to WebP conversion tool for converting JPG images into WebP format.",
  },
  {
    question: "What image formats are supported?",
    answer:
      "Let's Resize It provides tools for commonly used image formats including JPG, PNG, and WebP, with specific conversion tools available between these formats.",
  },
  {
    question: "Do I need Photoshop or another image editor?",
    answer:
      "No. The tools are designed for common image tasks such as resizing, reducing file size, and converting formats without requiring complicated image-editing software.",
  },
  {
    question: "What can I use resized images for?",
    answer:
      "Resized images can be useful for websites, social media, profile pictures, online forms, applications, document uploads, thumbnails, and other situations where a particular image size or format is required.",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M4 10h11" />
      <path d="m11 6 4 4-4 4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="m4 10 3.5 3.5L16 5" />
    </svg>
  );
}

export default function HowItWorksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to resize, compress, and convert images online",
    description:
      "Learn how to use Let's Resize It to resize, compress, and convert images online.",
    totalTime: "PT2M",
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.description,
    })),
  };

  const faqJsonLd = {
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
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      <main className="min-h-screen bg-white text-slate-950">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 top-[-180px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -right-32 top-32 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                Simple image tools, explained
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
                How to resize, compress, and
                <span className="block text-blue-600">
                  convert images online
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Let's Resize It makes everyday image tasks simple.
                Choose the tool you need, upload your image, select
                your required settings, and download the finished
                image — without complicated editing software.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/resize-image"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Resize an Image
                  <ArrowIcon />
                </Link>

                <Link
                  href="/convert-jpg-to-webp"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Explore a Tool
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="mx-auto mt-14 max-w-5xl sm:mt-16">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_25px_80px_rgba(15,23,42,0.10)] sm:p-5">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 sm:p-8">
                  <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex w-full items-center gap-4 sm:w-auto">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-7 w-7"
                          aria-hidden="true"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="16"
                            rx="2"
                          />
                          <circle cx="8.5" cy="9" r="1.5" />
                          <path d="m21 15-4.5-4.5L8 19" />
                        </svg>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-950">
                          Your image
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Select an image to get started
                        </p>
                      </div>
                    </div>

                    <div className="hidden h-px flex-1 bg-slate-200 sm:block" />

                    <div className="flex h-10 w-full items-center justify-center rounded-xl border border-blue-100 bg-blue-50 px-5 text-xs font-semibold text-blue-700 sm:w-auto">
                      Choose a tool
                    </div>

                    <div className="hidden h-px flex-1 bg-slate-200 sm:block" />

                    <div className="flex w-full items-center gap-4 sm:w-auto">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
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
                          <path d="M12 4v12" />
                          <path d="m7 11 5 5 5-5" />
                          <path d="M5 20h14" />
                        </svg>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-950">
                          Your result
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Download and use it anywhere
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            THREE STEPS
        ====================================================== */}
        <section className="border-b border-slate-100 bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                The simple workflow
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Get your image ready in three steps
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
                No complicated menus. No unnecessary editing
                controls. Just choose what you need and get the
                result.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      {step.icon}
                    </span>

                    <span className="text-4xl font-bold tracking-tight text-slate-100">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT CAN YOU DO
        ====================================================== */}
        <section className="bg-slate-50">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Choose the right tool
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  One place for everyday image tasks
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  Different platforms have different image
                  requirements. Sometimes you need exact dimensions.
                  Sometimes you need a smaller file. Other times you
                  simply need a different image format.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Instead of opening a full image editor for a small
                  task, choose the specific Let's Resize It tool that
                  matches what you need.
                </p>

                <div className="mt-7">
                  <Link
                    href="/resize-image"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
                  >
                    Start with image resizing
                    <ArrowIcon />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {workflows.map((workflow) => (
                  <Link
                    key={workflow.title}
                    href={workflow.href}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg sm:p-6"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      {workflow.icon}
                    </span>

                    <h3 className="mt-5 text-base font-bold text-slate-950">
                      {workflow.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {workflow.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                      {workflow.label}
                      <ArrowIcon />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PRIVACY / BROWSER PROCESSING
        ====================================================== */}
        <section className="bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-7 sm:p-10 lg:p-14">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Browser-based workflow
                  </span>

                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Simple tools without unnecessary complexity
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                    Let's Resize It is designed around the image tasks
                    people actually need. You do not need to learn a
                    full editing application just to change an image
                    size or format.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      "Quick image resizing",
                      "Target file-size tools",
                      "Exact dimension tools",
                      "Image format conversion",
                      "Simple browser workflow",
                      "No complicated editor interface",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-slate-300"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
                          <CheckIcon />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative border-t border-slate-800 bg-slate-900 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                  <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden="true"
                  >
                    <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
                  </div>

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-7 w-7"
                        aria-hidden="true"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-white">
                      Your image workflow stays simple
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Select a tool, provide your image, choose the
                      required output, and download the result. The
                      interface is built to keep the process focused
                      on the task.
                    </p>

                    <div className="mt-7 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Designed for
                      </p>

                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        Everyday image resizing, file-size reduction,
                        dimension changes, and format conversion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            USE CASES
        ====================================================== */}
        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Built for real-world needs
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Where resized and converted images are useful
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                Image requirements show up everywhere. Use the right
                tool when a platform or workflow requires a particular
                size, dimension, or format.
              </p>
            </div>

            <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
              {useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            TOOL DISCOVERY
        ====================================================== */}
        <section className="bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Explore the toolkit
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Choose a tool and get started
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                  Pick the tool that matches your image requirement.
                  Each tool is focused on a specific task.
                </p>
              </div>

              <Link
                href="/resize-image"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                View resize tools
                <ArrowIcon />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Resize Image",
                  description: "Change image dimensions.",
                  href: "/resize-image",
                },
                {
                  title: "Resize to 50 KB",
                  description: "Reduce an image to a target size.",
                  href: "/resize-image-to-50-kb",
                },
                {
                  title: "Resize to 100 KB",
                  description: "Prepare images under a common limit.",
                  href: "/resize-image-to-100-kb",
                },
                {
                  title: "Resize to 200 KB",
                  description: "Create a smaller image file.",
                  href: "/resize-image-to-200-kb",
                },
                {
                  title: "Resize to 500 KB",
                  description: "Reduce larger image files.",
                  href: "/resize-image-to-500-kb",
                },
                {
                  title: "200×200 Image",
                  description: "Resize to 200×200 pixels.",
                  href: "/resize-image-to-200x200",
                },
                {
                  title: "300×300 Image",
                  description: "Resize to 300×300 pixels.",
                  href: "/resize-image-to-300x300",
                },
                {
                  title: "1080×1080 Image",
                  description: "Create a square 1080×1080 image.",
                  href: "/resize-image-to-1080x1080",
                },
                {
                  title: "Resize JPG",
                  description: "Resize JPG images online.",
                  href: "/resize-jpg",
                },
                {
                  title: "Resize PNG",
                  description: "Resize PNG images online.",
                  href: "/resize-image",
                },
                {
                  title: "Resize WebP",
                  description: "Resize WebP images online.",
                  href: "/webp-to-png",
                },
                {
                  title: "Compress JPG",
                  description: "Reduce JPG file size.",
                  href: "/compress-image",
                },
                {
                  title: "Compress PNG",
                  description: "Reduce PNG file size.",
                  href: "/compress-image",
                },
                {
                  title: "JPG to WebP",
                  description: "Convert JPG images to WebP.",
                  href: "/convert-jpg-to-webp",
                },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_15px_35px_rgba(15,23,42,0.07)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <ArrowIcon />
                    </span>

                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-500"
                      aria-hidden="true"
                    >
                      <path d="m7 4 6 6-6 6" />
                    </svg>
                  </div>

                  <h3 className="mt-5 text-sm font-bold text-slate-950">
                    {tool.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    {tool.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div
            id="faq"
            className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
          >
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Frequently asked questions
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                How Let's Resize It works
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Answers to common questions about resizing,
                compressing, and converting images online.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-sm font-semibold text-slate-950 sm:px-6">
                    <span>{faq.question}</span>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform duration-200 group-open:rotate-45">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path d="M10 4v12" />
                        <path d="M4 10h12" />
                      </svg>
                    </span>
                  </summary>

                  <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6">
                    <p className="text-sm leading-7 text-slate-500">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-[0_25px_70px_rgba(37,99,235,0.20)] sm:px-10 sm:py-16">
              <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
              >
                <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-blue-950/20 blur-3xl" />
              </div>

              <div className="relative mx-auto max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
                  Ready when you are
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Make your next image fit.
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
                  Resize, reduce, or convert your image with a tool
                  built for the task.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/resize-image"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-blue-700 shadow-lg transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                  >
                    Resize an Image
                    <ArrowIcon />
                  </Link>

                  <Link
                    href="/convert-jpg-to-webp"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                  >
                    Convert JPG to WebP
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}