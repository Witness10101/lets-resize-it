const steps = [
  {
    number: "01",
    title: "Upload your image",
    description:
      "Choose a JPG, PNG, or WebP image from your device. You can also drag and drop it into the tool.",
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
    title: "Set your requirements",
    description:
      "Choose the file size, dimensions, and output format you need. Set exact requirements when you need them.",
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
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
        <circle cx="8" cy="6" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="15" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="10" cy="18" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Download your image",
    description:
      "We process your image in your browser and give you a ready-to-use file that matches your requirements.",
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

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            How it works
          </span>

          <h2
            id="how-it-works-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl"
          >
            Resize images without the guesswork
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Tell us what your image needs to fit, and Let&apos;s
            Resize It handles the resizing, compression, and
            format conversion for you.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-12 lg:mt-16">
          {/* Connecting line */}
          <div
            className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-slate-200 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative text-center"
              >
                {/* Step icon */}
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    {step.icon}
                  </div>

                  <span className="absolute -right-2 -top-2 flex h-7 min-w-7 items-center justify-center rounded-full border-2 border-white bg-blue-600 px-1.5 text-[10px] font-bold text-white shadow-sm">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-950">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom reassurance */}
        <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center sm:mt-16 sm:flex-row sm:text-left">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
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
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Your images stay on your device
            </p>

            <p className="mt-0.5 text-xs leading-5 text-slate-500">
              Processing happens directly in your browser. Your
              image doesn&apos;t need to be uploaded to a server.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}