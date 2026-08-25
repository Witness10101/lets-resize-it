import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Let&apos;s Resize It",
  description:
    "The page you&apos;re looking for could not be found. Explore Let&apos;s Resize It's free image resizing, compression, and conversion tools.",
  robots: {
    index: false,
    follow: true,
  },
};

function ResizeIcon() {
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
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v3" />
      <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
      <path d="M8 8l4 4 4-4" />
      <path d="M12 12v6" />
    </svg>
  );
}

function CompressIcon() {
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
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v3" />
      <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
      <path d="M8 8l4 4 4-4" />
      <path d="M8 16l4-4 4 4" />
    </svg>
  );
}

function ConvertIcon() {
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
      <path d="M7 7h10l-3-3" />
      <path d="M17 17H7l3 3" />
      <path d="M17 7l3 3-3 3" />
      <path d="M7 17l-3-3 3-3" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path d="M4 10h11" />
      <path d="m11 6 4 4-4 4" />
    </svg>
  );
}

const popularTools = [
  {
    title: "Resize an Image",
    description: "Change image dimensions to the exact size you need.",
    href: "/resize-image",
    icon: <ResizeIcon />,
  },
  {
    title: "Compress an Image",
    description: "Reduce image file size while keeping quality in check.",
    href: "/compress-image",
    icon: <CompressIcon />,
  },
  {
    title: "Convert JPG to WebP",
    description: "Convert JPG images to the modern WebP format.",
    href: "/convert-jpg-to-webp",
    icon: <ConvertIcon />,
  },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-950">
      <Header />

      <main className="relative flex-1 overflow-hidden">
        {/* =====================================================
            BACKGROUND
        ====================================================== */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-3xl" />

          <div className="absolute -left-32 top-1/2 h-72 w-72 rounded-full bg-indigo-500/[0.05] blur-3xl" />

          <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-blue-500/[0.05] blur-3xl" />
        </div>

        {/* =====================================================
            404 HERO
        ====================================================== */}
        <section className="relative border-b border-slate-100">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-16 pt-20 text-center sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700">
              <span
                className="h-1.5 w-1.5 rounded-full bg-blue-600"
                aria-hidden="true"
              />
              Error 404 · Page not found
            </div>

            {/* Large 404 */}
            <div className="mt-7 select-none text-[clamp(7rem,22vw,15rem)] font-black leading-[0.8] tracking-[-0.08em] text-slate-100">
              404
            </div>

            <h1 className="relative mt-8 max-w-3xl text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
              Looks like this image{" "}
              <span className="text-blue-600">went missing.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              The page you&apos;re looking for doesn&apos;t exist, may have
              moved, or the URL may have been entered incorrectly. No
              worries — you can get back to resizing, compressing, and
              converting images in just a few clicks.
            </p>

            {/* Primary actions */}
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-[0_5px_18px_rgba(37,99,235,0.2)] transition-all duration-200 hover:bg-blue-700 hover:shadow-[0_8px_24px_rgba(37,99,235,0.25)] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto"
              >
                Back to homepage
              </Link>

              <Link
                href="/resize-image"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto"
              >
                Resize an image
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            POPULAR TOOLS
        ====================================================== */}
        <section className="relative bg-slate-50/70">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                Try one of our tools
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                What would you like to do with your image?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                Choose a tool below and get straight back to work.
                Everything is designed to be simple and browser-based.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {popularTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_10px_30px_rgba(15,23,42,0.07)] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      {tool.icon}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 transition-colors group-hover:text-blue-600">
                      <ArrowRight />
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-slate-950">
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

        {/* =====================================================
            DISCOVERY / INTERNAL LINKS
        ====================================================== */}
        <section className="relative">
          <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_40px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                    ?
                  </span>

                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950">
                    Need help finding the right tool?
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                    Explore our image tools, learn how image resizing and
                    compression work, or find answers to common questions
                    about preparing images for websites, forms, social
                    media, and other everyday needs.
                  </p>
                </div>

                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                  <Link
                    href="/faq"
                    className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Frequently Asked Questions
                    <ArrowRight />
                  </Link>

                  <Link
                    href="/how-it-works"
                    className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700"
                  >
                    How It Works
                    <ArrowRight />
                  </Link>

                  <Link
                    href="/about"
                    className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700"
                  >
                    About Let&apos;s Resize It
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}