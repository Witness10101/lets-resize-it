import Link from "next/link";

export function ImageToJpgHero() {
  return (
    <section
      aria-labelledby="image-to-jpg-heading"
      className="relative overflow-hidden bg-white"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 sm:text-sm">
              <span
                className="h-2 w-2 rounded-full bg-blue-600"
                aria-hidden="true"
              />

              Free Image to JPG Converter
            </span>
          </div>

          {/* Main heading */}
          <h1
            id="image-to-jpg-heading"
            className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Convert Images to{" "}
            <span className="text-blue-600">JPG</span>
            <br className="hidden sm:block" />{" "}
            in Seconds
          </h1>

          {/* Supporting copy */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Convert PNG, WebP, GIF, BMP, and other image files
            to JPG online. Fast, simple, and free—without
            uploading your images to a server.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#image-to-jpg-tool"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto"
            >
              Convert Image to JPG

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
              className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-7 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto"
            >
              See how it works
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
                <path d="m5 12 4 4L19 6" />
              </svg>
              Free to use
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Private & browser-based
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
              No software required
            </span>
          </div>
        </div>

        {/* Supported formats */}
        <div className="mx-auto mt-12 max-w-3xl sm:mt-16">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Convert popular image formats to JPG
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {[
                  "PNG to JPG",
                  "WebP to JPG",
                  "GIF to JPG",
                  "BMP to JPG",
                  "JPEG to JPG",
                ].map((format) => (
                  <span
                    key={format}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm sm:text-sm"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom semantic content */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-sm leading-6 text-slate-500">
            Need a JPG image for a website, application,
            document, form, or social platform? Convert your
            image to JPG directly in your browser and download
            the result instantly.
          </p>
        </div>
      </div>
    </section>
  );
}