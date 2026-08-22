import Link from "next/link";

export function JpgToPngHero() {
  return (
    <section
      aria-labelledby="jpg-to-png-heading"
      className="relative overflow-hidden bg-white px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[420px] overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-blue-50/70 blur-3xl" />

        <div className="absolute left-[8%] top-24 h-24 w-24 rounded-full bg-sky-50 blur-2xl" />

        <div className="absolute right-[8%] top-32 h-32 w-32 rounded-full bg-indigo-50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
            <span
              className="h-1.5 w-1.5 rounded-full bg-blue-600"
              aria-hidden="true"
            />

            Free JPG to PNG Converter
          </div>

          {/* H1 */}
          <h1
            id="jpg-to-png-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Convert JPG to PNG
            <span className="block text-blue-600">
              Online for Free
            </span>
          </h1>

          {/* Supporting copy */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Convert JPG and JPEG images to high-quality PNG files
            directly in your browser. No software installation,
            no complicated settings, and no account required.
          </p>

          {/* Search-intent supporting text */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">
            Use our JPG to PNG converter to create PNG images for
            transparent graphics, editing workflows, websites,
            documents, and other applications that support PNG.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#jpg-to-png-tool"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto"
            >
              Convert JPG to PNG

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
              className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto"
            >
              How it works
            </Link>
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500 sm:text-sm">
            <span className="inline-flex items-center gap-2">
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
              Browser-based conversion
            </span>

            <span className="hidden h-4 w-px bg-slate-200 sm:block" />

            <span className="inline-flex items-center gap-2">
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
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              Download instantly
            </span>

            <span className="hidden h-4 w-px bg-slate-200 sm:block" />

            <span className="inline-flex items-center gap-2">
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
                <path d="M20 7 9 18l-5-5" />
              </svg>
              No installation required
            </span>
          </div>
        </div>

        {/* Format visual */}
        <div className="mx-auto mt-12 max-w-3xl sm:mt-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/50 sm:p-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:p-8">
              <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
                {/* JPG */}
                <div className="flex w-full max-w-[220px] flex-1 flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                    <span className="text-sm font-black">
                      JPG
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-bold text-slate-950">
                    JPG / JPEG
                  </p>

                  <p className="mt-1 text-center text-xs leading-5 text-slate-500">
                    Your original image
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600"
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5 rotate-90 sm:rotate-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </div>

                {/* PNG */}
                <div className="flex w-full max-w-[220px] flex-1 flex-col items-center rounded-2xl border border-blue-200 bg-blue-50/50 p-5 shadow-sm">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
                    <span className="text-sm font-black">
                      PNG
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-bold text-slate-950">
                    PNG
                  </p>

                  <p className="mt-1 text-center text-xs leading-5 text-slate-500">
                    Your converted image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom reassurance */}
        <p className="mx-auto mt-6 max-w-xl text-center text-xs leading-5 text-slate-500 sm:text-sm">
          Convert JPG to PNG without leaving this page. Your
          conversion experience is designed to be fast, simple,
          and easy to use on desktop and mobile devices.
        </p>
      </div>
    </section>
  );
}