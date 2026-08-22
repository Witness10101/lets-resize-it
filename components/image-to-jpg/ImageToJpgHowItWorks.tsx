export function ImageToJpgHowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose your image",
      description:
        "Select the image you want to convert from your device. You can convert PNG, WebP, GIF, BMP, and other supported image formats.",
      icon: (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
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
      title: "Convert to JPG",
      description:
        "Our browser-based converter processes your image and creates a JPG version while keeping the workflow simple and fast.",
      icon: (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 12h16" />
          <path d="m14 6 6 6-6 6" />
          <path d="M4 6v12" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Download your JPG",
      description:
        "Preview the converted image and download your JPG file instantly. No account or additional software is required.",
      icon: (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
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
      aria-labelledby="image-to-jpg-how-it-works-heading"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Simple conversion
          </span>

          <h2
            id="image-to-jpg-how-it-works-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            How to convert an image to JPG
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Convert your image to JPG in three simple steps.
            There&apos;s no complicated software or technical
            setup required.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mx-auto mt-12 max-w-5xl">
          {/* Connecting line */}
          <div
            className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-10 hidden h-px bg-slate-200 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-8"
              >
                {/* Step icon */}
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                    {step.icon}
                  </div>

                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-sm">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting content */}
        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:mt-16 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6-8 10-8 10Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-950 sm:text-base">
                Convert images directly in your browser
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                The conversion workflow is designed to be
                straightforward. Choose your image, convert it
                to JPG, review the result, and download it when
                you&apos;re ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}