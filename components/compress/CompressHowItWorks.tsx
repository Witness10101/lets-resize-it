export function CompressHowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload your image",
      description:
        "Choose a JPG, PNG, or WebP image from your device. Your image stays in your browser during the process.",
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
      title: "Compress the image",
      description:
        "Choose your preferred compression level or target file size. We reduce unnecessary file weight while keeping the image looking good.",
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
          <path d="M8 3H5a2 2 0 0 0-2 2v3" />
          <path d="M16 3h3a2 2 0 0 1 2 2v3" />
          <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
          <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
          <path d="m8 12 3 3 5-6" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Download your compressed image",
      description:
        "Preview the optimized result, check the new file size, and download your compressed image instantly.",
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
      id="compress-how-it-works"
      aria-labelledby="compress-how-it-works-heading"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            How it works
          </span>

          <h2
            id="compress-how-it-works-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Compress images in three simple steps
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Reduce image file size without complicated software or
            technical settings. Upload your image, choose what you need,
            and download the optimized result.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-12 lg:mt-16">
          {/* Connecting line */}
          <div
            className="absolute left-[16.666%] right-[16.666%] top-12 hidden h-px bg-slate-200 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-8"
              >
                {/* Number + icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-slate-400">
                    STEP {step.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    {step.icon}
                  </div>
                </div>

                <h3 className="mt-7 text-xl font-bold tracking-tight text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Privacy / browser processing callout */}
        <div className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 sm:mt-12 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6-8 10-8 10Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            <div>
              <h3 className="text-sm font-bold text-emerald-900">
                Your images stay on your device
              </h3>

              <p className="mt-1 text-sm leading-6 text-emerald-800">
                Image processing happens directly in your browser. Your
                files do not need to be uploaded to a server just to
                compress them.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center sm:mt-12">
          <a
            href="#compress"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Compress an image
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