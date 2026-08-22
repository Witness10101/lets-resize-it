import Link from "next/link";

export function ResizeHero() {
  return (
    <section
      aria-labelledby="resize-image-hero-title"
      className="relative overflow-hidden border-b border-slate-200 bg-white"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-50/70 blur-3xl" />

        <div className="absolute -left-32 top-32 h-64 w-64 rounded-full bg-sky-50 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-indigo-50 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
            <span
              className="h-1.5 w-1.5 rounded-full bg-blue-600"
              aria-hidden="true"
            />

            Free online image resizer
          </div>

          {/* Main heading */}
          <h1
            id="resize-image-hero-title"
            className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Resize Image Online
            <span className="mt-2 block text-blue-600">
              To Any Size You Need
            </span>
          </h1>

          {/* Supporting copy */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Resize JPG, PNG, and WebP images to exact dimensions,
            reduce file size, or convert formats. Everything happens
            directly in your browser.
          </p>

          {/* Primary actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#resize-tool"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto"
            >
              Resize an Image

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
              href="#how-to-resize"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto"
            >
              How It Works
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500 sm:text-sm">
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
                <path d="m5 12 4 4L19 6" />
              </svg>
              Free to use
            </span>

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
                <path d="m5 12 4 4L19 6" />
              </svg>
              No registration
            </span>

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
                <path d="m5 12 4 4L19 6" />
              </svg>
              Browser-based
            </span>

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
                <path d="m5 12 4 4L19 6" />
              </svg>
              JPG, PNG & WebP
            </span>
          </div>
        </div>

        {/* Visual capability strip */}
        <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-3">
            {/* Dimensions */}
            <div className="flex items-center gap-4 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r sm:p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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
                  <path d="M4 9V5a1 1 0 0 1 1-1h4" />
                  <path d="M20 9V5a1 1 0 0 0-1-1h-4" />
                  <path d="M4 15v4a1 1 0 0 0 1 1h4" />
                  <path d="M20 15v4a1 1 0 0 1-1 1h-4" />
                  <path d="M8 8h8v8H8z" />
                </svg>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Exact dimensions
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Set your required width and height.
                </p>
              </div>
            </div>

            {/* File size */}
            <div className="flex items-center gap-4 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r sm:p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
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
                  <path d="M6 3h9l3 3v15H6z" />
                  <path d="M14 3v4h4" />
                  <path d="M9 13h6" />
                  <path d="M9 17h4" />
                </svg>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-950">
                  File size control
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Target a maximum file size when needed.
                </p>
              </div>
            </div>

            {/* Formats */}
            <div className="flex items-center gap-4 p-5 sm:p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
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
                  <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-950">
                  JPG, PNG & WebP
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Resize and convert common image formats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}