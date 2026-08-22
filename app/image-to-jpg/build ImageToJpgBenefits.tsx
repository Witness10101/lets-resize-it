export function ImageToJpgBenefits() {
  const benefits = [
    {
      title: "Fast image conversion",
      description:
        "Convert supported images to JPG in just a few steps. Upload your image, convert it, and download the finished JPG without a complicated workflow.",
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
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
        </svg>
      ),
    },
    {
      title: "Works directly in your browser",
      description:
        "There is no software to install and no desktop application to configure. Use the image to JPG converter directly from a modern web browser.",
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
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9" />
          <path d="M12 3c-2.5 2.5-3.5 5.5-3.5 9s1 6.5 3.5 9" />
        </svg>
      ),
    },
    {
      title: "JPG format compatibility",
      description:
        "JPG is widely supported across websites, browsers, operating systems, image editors, forms, applications, and other digital platforms.",
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
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      ),
    },
    {
      title: "Simple download workflow",
      description:
        "Once your image has been converted, download the JPG file immediately and use it wherever you need it.",
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
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
      ),
    },
    {
      title: "Useful for everyday uploads",
      description:
        "Create JPG files for forms, applications, websites, marketplaces, documents, social platforms, and other services that accept JPEG images.",
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
          <path d="M4 4h16v16H4z" />
          <path d="M8 12h8" />
          <path d="M8 8h5" />
          <path d="M8 16h6" />
        </svg>
      ),
    },
    {
      title: "Works across devices",
      description:
        "Convert images from a desktop, laptop, tablet, or mobile device using a compatible modern browser.",
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
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M9 18h6" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="benefits"
      aria-labelledby="image-to-jpg-benefits-heading"
      className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            Why Use Our Converter
          </span>

          <h2
            id="image-to-jpg-benefits-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl"
          >
            A simple way to convert images to JPG
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Convert images to the widely supported JPG format
            without a complicated editing workflow. Our online
            converter is designed to make image conversion
            straightforward from upload to download.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white">
                {benefit.icon}
              </div>

              <h3 className="mt-5 text-base font-semibold text-slate-950 sm:text-lg">
                {benefit.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Built for everyday image conversion
              </span>

              <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                From PNG or WebP to JPG in a few clicks
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Different websites and applications support
                different image formats. When you need a JPG
                file, you should not have to install an image
                editor just to convert one image.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Upload a supported image, convert it to JPG,
                preview the result, and download the converted
                file. The workflow stays focused on one thing:
                getting you the JPG image you need.
              </p>

              <a
                href="#image-to-jpg-tool"
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Convert to JPG

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
              </a>
            </div>

            <div className="flex items-center border-t border-slate-100 bg-slate-50 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="w-full space-y-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        Input
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-950">
                        PNG / WebP / Image
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
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
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                        />
                        <circle
                          cx="8.5"
                          cy="8.5"
                          r="1.5"
                        />
                        <path d="m21 15-5-5L5 21" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-1">
                  <svg
                    className="h-5 w-5 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                </div>

                <div className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-blue-600">
                        Output
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-950">
                        JPG image
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
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
                        <path d="M12 3v12" />
                        <path d="m7 10 5 5 5-5" />
                        <path d="M5 21h14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust points */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-500 sm:text-sm">
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
            Simple browser workflow
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
              <path d="m5 12 4 4L19 6" />
            </svg>
            No software installation
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
              <path d="m5 12 4 4L19 6" />
            </svg>
            JPG ready to download
          </span>
        </div>
      </div>
    </section>
  );
}