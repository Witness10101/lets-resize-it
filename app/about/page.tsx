import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Let's Resize It",
  description:
    "Learn about Let's Resize It, a simple online image toolkit for resizing, compressing, and converting images quickly and easily.",
  keywords: [
    "about Let's Resize It",
    "online image tools",
    "image resize tools",
    "image compression tools",
    "image conversion tools",
    "resize image online",
    "compress image online",
    "convert image online",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Let's Resize It",
    description:
      "Learn about Let's Resize It and our mission to make everyday image resizing, compression, and conversion simple.",
    url: "/about",
    siteName: "Let's Resize It",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About Us | Let's Resize It",
    description:
      "Learn about Let's Resize It and our mission to make everyday image tools simple and accessible.",
  },
};

const tools = [
  {
    title: "Resize Images",
    description:
      "Change image dimensions to the size you need for websites, applications, forms, social platforms, and everyday use.",
    href: "/resize-image",
  },
  {
    title: "Resize to a Target File Size",
    description:
      "Prepare images for situations where a specific file-size limit matters, such as uploads and online forms.",
    href: "/resize-image-to-100-kb",
  },
  {
    title: "Resize by Format",
    description:
      "Use dedicated resizing tools for common image formats such as JPG, PNG, and WebP.",
    href: "/resize-jpg",
  },
  {
    title: "Convert Images",
    description:
      "Convert supported image formats when you need a different file type for compatibility or workflow requirements.",
    href: "/convert-jpg-to-webp",
  },
];

const principles = [
  {
    number: "01",
    title: "Keep things simple",
    description:
      "Image editing should not require complicated software when all you need is a quick resize, compression, or format conversion.",
  },
  {
    number: "02",
    title: "Build useful tools",
    description:
      "We focus on practical image tasks that people regularly encounter when working with websites, applications, documents, forms, and digital content.",
  },
  {
    number: "03",
    title: "Respect your workflow",
    description:
      "Our tools are designed to get you from an original image to a usable result with as little friction as possible.",
  },
  {
    number: "04",
    title: "Keep improving",
    description:
      "Let's Resize It is built to grow based on real-world usage, useful feedback, and the image-processing needs people actually have.",
  },
];

export default function AboutPage() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://letsresizeit.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Let's Resize It",
    url: `${baseUrl}/about`,
    description:
      "Learn about Let's Resize It, an online image toolkit focused on making image resizing, compression, and conversion simple.",
    isPartOf: {
      "@type": "WebSite",
      name: "Let's Resize It",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Let's Resize It",
      url: baseUrl,
    },
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-slate-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white">
          {/* Background decoration */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-blue-600"
                  aria-hidden="true"
                />
                About Let&apos;s Resize It
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Simple image tools for{" "}
                <span className="text-blue-600">
                  everyday needs.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Let&apos;s Resize It is an online image toolkit
                built to make common image tasks easier. Resize,
                compress, and convert images without needing
                complicated editing software.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/resize-image"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-[0_5px_18px_rgba(37,99,235,0.22)] transition-all hover:bg-blue-700 hover:shadow-[0_8px_24px_rgba(37,99,235,0.28)] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Start resizing
                  <svg
                    className="h-4 w-4"
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

                <Link
                  href="/how-it-works"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                >
                  See how it works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}
        <section className="border-b border-slate-100 bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Why we built it
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Image editing doesn&apos;t always need to
                  be complicated.
                </h2>

                <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>
                    Working with images often involves simple
                    requirements: make an image smaller, change
                    its dimensions, reduce its file size, or
                    convert it into another format.
                  </p>

                  <p>
                    For those tasks, opening a full image-editing
                    application can feel like more work than
                    necessary. That is the problem Let&apos;s
                    Resize It is designed to solve.
                  </p>

                  <p>
                    We are building a focused collection of
                    straightforward online image tools that help
                    you complete common image-processing tasks
                    quickly and get back to what you were doing.
                  </p>
                </div>
              </div>

              {/* Visual card */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/5 blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
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
                        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                        <path d="M16 3h3a2 2 0 0 1 2 2v3" />
                        <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
                        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                        <path d="M8 8l4 4 4-4" />
                        <path d="M12 12v6" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-950">
                        Let&apos;s Resize It
                      </p>

                      <p className="text-xs text-slate-500">
                        Practical image tools
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 space-y-3">
                    {[
                      "Resize images",
                      "Reduce image file size",
                      "Convert image formats",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm font-medium text-slate-700">
                          {item}
                        </span>

                        <svg
                          className="ml-auto h-4 w-4 text-slate-300"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m7 4 6 6-6 6" />
                        </svg>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                    <p className="text-xs leading-5 text-blue-800">
                      Built around useful image tasks rather
                      than unnecessary complexity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT WE OFFER
        ====================================================== */}
        <section className="bg-slate-50/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our toolkit
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Tools built around real image tasks
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                Instead of trying to replace a complete image
                editor, Let&apos;s Resize It focuses on the
                everyday operations people need most often.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {tools.map((tool, index) => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_35px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-bold text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-base font-bold text-slate-950">
                        {tool.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {tool.description}
                      </p>

                      <span className="mt-4 inline-flex items-center text-xs font-semibold text-blue-600">
                        Use this tool
                        <svg
                          className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
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
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PRINCIPLES
        ====================================================== */}
        <section className="border-y border-slate-100 bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  What matters to us
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Simple by design.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                  Good online tools should feel straightforward.
                  You should be able to understand what a tool
                  does, use it without unnecessary steps, and
                  move on with your work.
                </p>
              </div>

              <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
                {principles.map((principle) => (
                  <div
                    key={principle.number}
                    className="grid gap-4 p-6 sm:grid-cols-[56px_1fr] sm:gap-6 sm:p-7"
                  >
                    <span className="text-sm font-bold text-blue-600">
                      {principle.number}
                    </span>

                    <div>
                      <h3 className="text-base font-bold text-slate-950">
                        {principle.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PRIVACY / TRUST
        ====================================================== */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
              <div>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-950/40">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                  Built with privacy in mind.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  We believe image tools should be straightforward
                  not only to use, but also to understand. Where
                  processing is performed locally in your browser,
                  your image can be handled without needing to
                  upload it to a remote server for that operation.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
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
                      <path d="M12 3v18" />
                      <path d="M3 12h18" />
                    </svg>
                  </span>

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Focused, transparent tools
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      We aim to clearly explain what each tool
                      does and keep the experience focused on the
                      task you came to complete.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-800 pt-6">
                  <Link
                    href="/privacy"
                    className="inline-flex items-center text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
                  >
                    Read our Privacy Policy
                    <svg
                      className="ml-1.5 h-4 w-4"
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
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-blue-50 px-6 py-12 text-center sm:px-10 lg:px-14">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative mx-auto max-w-2xl">
                <p className="text-sm font-semibold text-blue-600">
                  Ready to get started?
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Make your next image fit.
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                  Choose a tool, upload your image, and get the
                  result you need without unnecessary complexity.
                </p>

                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/resize-image"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                  >
                    Resize an Image
                  </Link>

                  <Link
                    href="/"
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                  >
                    Explore Let's Resize It
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