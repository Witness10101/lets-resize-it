export function ResizeHowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload your image",
      description:
        "Choose a JPG, PNG, or WebP image from your device. You can also drag and drop your image directly into the resize tool.",
      keywords: ["JPG", "PNG", "WebP", "Drag & drop"],
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
          <path d="M12 16V4" />
          <path d="m7 9 5-5 5 5" />
          <path d="M5 20h14" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Set your requirements",
      description:
        "Choose the exact image dimensions, maximum file size, or output format you need. Resize an image to specific pixel dimensions or compress it to meet a file-size limit.",
      keywords: [
        "Exact dimensions",
        "File size",
        "Output format",
      ],
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
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
          <circle cx="8" cy="6" r="1.5" />
          <circle cx="15" cy="12" r="1.5" />
          <circle cx="11" cy="18" r="1.5" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Download your optimized image",
      description:
        "Our browser-based image processor resizes and optimizes your image according to your requirements. Preview the result and download it instantly.",
      keywords: [
        "Resize",
        "Optimize",
        "Download",
      ],
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
  ];

  return (
    <section
      id="how-it-works"
      aria-labelledby="resize-how-it-works-heading"
      className="border-t border-slate-100 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700">
            HOW IT WORKS
          </span>

          <h2
            id="resize-how-it-works-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            How to resize an image online
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Resize, compress, and convert your images in three
            simple steps. Set the requirements you need and let
            our browser-based image tool handle the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14">
          {/* Connector line - desktop */}
          <div
            className="absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-slate-200 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-8"
              >
                {/* Number + icon */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-slate-300">
                    {step.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    {step.icon}
                  </div>
                </div>

                <h3 className="mt-7 text-xl font-bold tracking-tight text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>

                {/* Supporting keywords */}
                <ul className="mt-6 flex flex-wrap gap-2">
                  {step.keywords.map((keyword) => (
                    <li
                      key={keyword}
                      className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {keyword}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* SEO-rich supporting content */}
        <div className="mt-16 rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
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
                <path d="M12 3v18" />
                <path d="M3 12h18" />
                <path d="m5 5 14 14" />
                <path d="m19 5-14 14" />
              </svg>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-950 sm:text-lg">
                Resize images for any requirement
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Whether you need to resize a photo to 200 × 200
                pixels, reduce an image below 100 KB, convert
                JPG to WebP, or prepare an image for a website,
                application, form, or social platform, you can
                define your requirements before processing.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#resize-tool"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Resize an image now

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