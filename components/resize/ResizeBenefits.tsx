const benefits = [
  {
    title: "Resize to exact dimensions",
    description:
      "Set a specific width and height in pixels when you need an image to match exact dimensions for forms, websites, applications, profiles, thumbnails, or other requirements.",
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
        <path d="M4 4h6" />
        <path d="M4 4v6" />
        <path d="M20 4h-6" />
        <path d="M20 4v6" />
        <path d="M4 20h6" />
        <path d="M4 20v-6" />
        <path d="M20 20h-6" />
        <path d="M20 20v-6" />
        <path d="M8 8h8v8H8z" />
      </svg>
    ),
  },
  {
    title: "Reduce image file size",
    description:
      "Need an image under 50 KB, 100 KB, 500 KB, or another limit? Set your maximum file size and optimize the image to fit the requirement.",
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
        <path d="M4 7h16" />
        <path d="M7 4v3" />
        <path d="M17 4v3" />
        <path d="M6 11h4" />
        <path d="M14 11h4" />
        <path d="M6 15h4" />
        <path d="M14 15h4" />
        <path d="M6 19h4" />
        <path d="M14 19h4" />
      </svg>
    ),
  },
  {
    title: "Convert image formats",
    description:
      "Choose the output format that works for your needs. Convert images to JPG, PNG, or WebP while resizing or optimizing them.",
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
        <path d="M7 7h10" />
        <path d="m13 3 4 4-4 4" />
        <path d="M17 17H7" />
        <path d="m11 21-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Process images in your browser",
    description:
      "Your image can be processed directly in your browser instead of being uploaded to a remote server. This keeps the workflow simple and privacy-focused.",
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
        <rect
          x="3"
          y="4"
          width="18"
          height="14"
          rx="2"
        />
        <path d="M8 21h8" />
        <path d="M12 18v3" />
        <path d="m8 11 2.5 2.5L16 8" />
      </svg>
    ),
  },
  {
    title: "No complicated software",
    description:
      "Resize and optimize an image directly from your browser. There is no desktop application to install and no complicated editing workflow to learn.",
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
        <path d="M3 12h18" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    ),
  },
  {
    title: "Works for everyday image needs",
    description:
      "Prepare images for online forms, websites, social profiles, applications, documents, email attachments, marketplaces, and other digital destinations.",
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
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2"
        />
        <circle cx="8.5" cy="9" r="1.5" />
        <path d="m21 15-5-5L5 20" />
      </svg>
    ),
  },
];

export function ResizeBenefits() {
  return (
    <section
      id="benefits"
      aria-labelledby="resize-benefits-heading"
      className="border-t border-slate-100 bg-slate-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700">
            WHY USE OUR IMAGE RESIZER
          </span>

          <h2
            id="resize-benefits-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            A simple way to resize and optimize images
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Get your image to the size, dimensions, and format
            you need without opening complicated image editing
            software.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
                {benefit.icon}
              </div>

              <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-950">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        {/* Detailed value proposition */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-7 sm:p-9 lg:p-11">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Built for practical image requirements
              </span>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                More than just changing image dimensions
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Resizing an image is often only part of the
                problem. A website may require a maximum file
                size, a form may require exact dimensions, or an
                application may only accept a particular image
                format.
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                That is why this tool lets you combine image
                resizing, file-size optimization, and format
                conversion in one workflow.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Resize images",
                  "Compress images",
                  "Exact dimensions",
                  "Reduce KB",
                  "Convert JPG",
                  "Convert PNG",
                  "Convert WebP",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual feature panel */}
            <div className="border-t border-slate-200 bg-slate-50 p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-11">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Example workflow
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                    <span className="text-sm font-medium text-slate-700">
                      Original image
                    </span>

                    <span className="text-sm font-semibold text-slate-950">
                      2.4 MB
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-500"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14" />
                      <path d="m7 14 5 5 5-5" />
                    </svg>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-700">
                        Requirements
                      </span>

                      <span className="text-xs font-semibold text-blue-600">
                        Custom
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="rounded-lg bg-white px-3 py-2">
                        <p className="text-[11px] text-slate-500">
                          Dimensions
                        </p>

                        <p className="mt-0.5 text-sm font-semibold text-slate-950">
                          800 × 800 px
                        </p>
                      </div>

                      <div className="rounded-lg bg-white px-3 py-2">
                        <p className="text-[11px] text-slate-500">
                          Maximum size
                        </p>

                        <p className="mt-0.5 text-sm font-semibold text-slate-950">
                          100 KB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-500"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14" />
                      <path d="m7 14 5 5 5-5" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
                    <div>
                      <span className="text-sm font-semibold text-emerald-800">
                        Optimized image
                      </span>

                      <p className="mt-0.5 text-xs text-emerald-700">
                        Ready to download
                      </p>
                    </div>

                    <span className="text-sm font-bold text-emerald-700">
                      ≤ 100 KB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600">
            Ready to resize your image?
          </p>

          <a
            href="#resize-tool"
            className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Start resizing

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}