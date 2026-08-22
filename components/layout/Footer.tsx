const popularTools = [
  {
    label: "Resize Image",
    href: "/resize-image",
  },
  {
    label: "Compress Image",
    href: "/compress-image",
  },
  {
    label: "Resize to 100 KB",
    href: "/resize-image-to-100kb",
  },
  {
    label: "Resize to 200 KB",
    href: "/resize-image-to-200kb",
  },
  {
    label: "Image to WebP",
    href: "/image-to-webp",
  },
  {
    label: "Image to JPG",
    href: "/image-to-jpg",
  },
];

const conversionTools = [
  {
    label: "JPG to WebP",
    href: "/jpg-to-webp",
  },
  {
    label: "PNG to WebP",
    href: "/png-to-webp",
  },
  {
    label: "WebP to JPG",
    href: "/webp-to-jpg",
  },
  {
    label: "WebP to PNG",
    href: "/webp-to-png",
  },
  {
    label: "JPG to PNG",
    href: "/jpg-to-png",
  },
  {
    label: "PNG to JPG",
    href: "/png-to-jpg",
  },
];

const resourceLinks = [
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Frequently Asked Questions",
    href: "#faq",
  },
  {
    label: "About Us",
    href: "/about",
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms of Use",
    href: "/terms",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            CTA
        ========================================================= */}

        <div className="border-b border-slate-800 py-12 sm:py-16 lg:py-20">
          <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/80 px-6 py-10 shadow-2xl sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            {/* CTA glow */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Simple. Private. Browser-based.
                </span>

                <h2 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Make every image fit.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                  Resize, compress, and convert your images to the
                  exact size, dimensions, and format you need —
                  without complicated software.
                </p>
              </div>

              <a
                href="#resize"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition-all hover:bg-blue-500 hover:shadow-blue-900/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Resize an image

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
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            BRAND + TRUST
        ========================================================= */}

        <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_2.6fr] lg:gap-20 lg:py-16">
          {/* Brand */}
          <div>
            <a
              href="#top"
              aria-label="Let's Resize It home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold tracking-tight text-white shadow-lg shadow-blue-950/30">
                LR
              </span>

              <span className="text-xl font-bold tracking-tight text-white">
                Let&apos;s Resize It
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              A simple online image toolkit for resizing,
              compressing, and converting images without the
              complexity of traditional editing software.
            </p>

            {/* Trust cards */}
            <div className="mt-7 grid max-w-sm grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>

                  <span className="text-xs font-semibold text-slate-200">
                    Private
                  </span>
                </div>

                <p className="mt-2 text-[11px] leading-5 text-slate-500">
                  Processing happens in your browser.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <svg
                      className="h-4 w-4"
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

                  <span className="text-xs font-semibold text-slate-200">
                    Simple
                  </span>
                </div>

                <p className="mt-2 text-[11px] leading-5 text-slate-500">
                  No complicated editing software.
                </p>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {/* Popular */}
            <div>
              <h3 className="text-sm font-semibold text-white">
                Popular tools
              </h3>

              <ul className="mt-5 space-y-3">
                {popularTools.map((tool) => (
                  <li key={tool.href}>
                    <a
                      href={tool.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {tool.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conversion */}
            <div>
              <h3 className="text-sm font-semibold text-white">
                Convert images
              </h3>

              <ul className="mt-5 space-y-3">
                {conversionTools.map((tool) => (
                  <li key={tool.href}>
                    <a
                      href={tool.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {tool.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-white">
                Resources
              </h3>

              <ul className="mt-5 space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* =========================================================
            TOOL DIRECTORY
        ========================================================= */}

        <div className="border-t border-slate-800 py-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white">
                Image tools for every need
              </h3>

              <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-500">
                Quickly resize images, reduce file sizes, change
                formats, and prepare images for websites,
                applications, forms, and more.
              </p>
            </div>

            <a
              href="#resize"
              className="inline-flex shrink-0 items-center text-xs font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              Explore the tools

              <svg
                className="ml-1.5 h-3.5 w-3.5"
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
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {[
              "Resize images",
              "Compress images",
              "Reduce image size",
              "Resize to KB",
              "Convert image format",
              "JPG tools",
              "PNG tools",
              "WebP tools",
            ].map((label) => (
              <a
                key={label}
                href="#resize"
                className="text-xs text-slate-500 transition-colors hover:text-slate-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}

        <div className="flex flex-col gap-5 border-t border-slate-800 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Let&apos;s Resize It.
              All rights reserved.
            </p>

            <p className="text-[11px] text-slate-600">
              Built to make image optimization simple.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-slate-500 transition-colors hover:text-slate-300"
              >
                {link.label}
              </a>
            ))}

            <span
              className="hidden h-4 w-px bg-slate-800 sm:block"
              aria-hidden="true"
            />

            <a
              href="#top"
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 transition-colors hover:text-white"
            >
              Back to top

              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}