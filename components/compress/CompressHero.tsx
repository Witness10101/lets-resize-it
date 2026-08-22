import Link from "next/link";

export function CompressHero() {
  return (
    <section
      aria-labelledby="compress-hero-heading"
      className="relative overflow-hidden bg-white"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-50/70 blur-3xl" />

        <div className="absolute -left-24 top-40 h-64 w-64 rounded-full bg-indigo-50/70 blur-3xl" />

        <div className="absolute -right-24 top-56 h-64 w-64 rounded-full bg-sky-50/70 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust badge */}
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700 sm:text-sm">
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white"
                aria-hidden="true"
              >
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
              </span>

              Free online image compressor
            </span>
          </div>

          {/* Main heading */}
          <h1
            id="compress-hero-heading"
            className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Compress images.
            <span className="block text-blue-600">
              Keep them looking great.
            </span>
          </h1>

          {/* Supporting copy */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Reduce image file size online without unnecessary quality
            loss. Compress JPG, PNG, and WebP images for websites,
            applications, email, forms, and social media.
          </p>

          {/* Primary actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#compress"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto"
            >
              Compress an Image

              <svg
                className="h-4 w-4"
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

            <Link
              href="#how-it-works"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto"
            >
              See how it works
            </Link>
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500 sm:text-sm">
            <div className="flex items-center gap-2">
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6-8 10-8 10Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>

              Processed in your browser
            </div>

            <span
              className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block"
              aria-hidden="true"
            />

            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v18" />
                <path d="M8 7h8" />
                <path d="M8 17h8" />
              </svg>

              JPG, PNG & WebP
            </div>

            <span
              className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block"
              aria-hidden="true"
            />

            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-indigo-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2v20" />
                <path d="m17 7-5-5-5 5" />
                <path d="m7 17 5 5 5-5" />
              </svg>

              Fast & lightweight
            </div>
          </div>
        </div>

        {/* Visual product preview */}
      </div>
    </section>
  );
}