export function JpgToPngHowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose your JPG image",
      description:
        "Select a JPG or JPEG image from your device, or drag and drop it into the converter.",
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
      title: "Convert JPG to PNG",
      description:
        "Our converter processes your image in your browser and creates a PNG version without requiring software installation.",
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
      number: "03",
      title: "Preview your PNG",
      description:
        "Review the converted image and check the resulting file before saving it to your device.",
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
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Download your PNG",
      description:
        "Download the converted PNG image directly to your device and use it wherever you need it.",
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
      aria-labelledby="jpg-to-png-how-it-works-heading"
      className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Simple conversion
          </span>

          <h2
            id="jpg-to-png-how-it-works-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl"
          >
            How to convert JPG to PNG
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Convert a JPG or JPEG image to PNG in just a few
            simple steps. No complicated settings or software
            installation required.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14">
          {/* Connector line - desktop */}
          <div
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-slate-200 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative text-center"
              >
                {/* Step icon */}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-600 shadow-sm">
                  {step.icon}

                  <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-slate-50 bg-blue-600 px-1.5 text-[10px] font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold text-slate-950 sm:text-lg">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Supporting content */}
        <div className="mt-14 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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
                <path d="M12 3a9 9 0 1 0 9 9" />
                <path d="M12 7v5l3 2" />
                <path d="M17 3h4v4" />
                <path d="m21 3-5 5" />
              </svg>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-950 sm:text-lg">
                Fast, simple, and browser-based
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                The JPG to PNG conversion happens directly in
                your web browser. Your image does not need to
                be uploaded to a remote conversion server, so
                you can convert an image and download the PNG
                without leaving the page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}