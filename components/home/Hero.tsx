import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background decoration */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-72 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-16 pt-20 text-center sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-sm font-medium text-blue-700">
          <span
            className="h-1.5 w-1.5 rounded-full bg-blue-600"
            aria-hidden="true"
          />
          Free image resizing & optimization
        </div>

        {/* Main heading */}
        <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Make any image{" "}
          <span className="text-blue-600">fit.</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Resize, compress, convert, and optimize your images to meet any file
          size, dimension, format, or upload requirement.
        </p>

        {/* Primary CTA */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="#resize"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Resize an Image
            <svg
              className="ml-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <svg
              className="h-4 w-4 text-emerald-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            No signup
          </span>

          <span
            className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block"
            aria-hidden="true"
          />

          <span className="inline-flex items-center gap-1.5">
            <svg
              className="h-4 w-4 text-emerald-600"
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
            Browser-based processing
          </span>

          <span
            className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block"
            aria-hidden="true"
          />

          <span className="inline-flex items-center gap-1.5">
            <svg
              className="h-4 w-4 text-emerald-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 12h18" />
              <path d="M12 3v18" />
              <path d="m19 5-3 3" />
              <path d="m5 5 3 3" />
              <path d="m19 19-3-3" />
              <path d="m5 19 3-3" />
            </svg>
            Works worldwide
          </span>
        </div>
      </div>
    </section>
  );
}