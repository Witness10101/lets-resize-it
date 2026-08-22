const features = [
  {
    title: "Hit the exact dimensions",
    description:
      "Set a specific width and height when you need an image to fit an exact size, without complicated editing software.",
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
        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
        <path d="M16 3h3a2 2 0 0 1 2 2v3" />
        <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
        <path d="M8 8h8v8H8z" />
      </svg>
    ),
  },
  {
    title: "Meet file-size limits",
    description:
      "Need an image under 50 KB, 100 KB, 500 KB, or another limit? Set your target and optimize the image accordingly.",
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
        <path d="M12 3v18" />
        <path d="M17 7.5c0-1.5-2.2-2.5-5-2.5s-5 1-5 2.5 2.2 2.5 5 2.5 5 1 5 2.5-2.2 2.5-5 2.5-5-1-5-2.5" />
        <path d="M7 16.5c0 1.5 2.2 2.5 5 2.5s5-1 5-2.5" />
      </svg>
    ),
  },
  {
    title: "Convert image formats",
    description:
      "Switch between JPG, PNG, and WebP when a website, app, or workflow requires a particular format.",
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
        <path d="M7 7h10" />
        <path d="m14 4 3 3-3 3" />
        <path d="M17 17H7" />
        <path d="m10 14-3 3 3 3" />
      </svg>
    ),
  },
  {
    title: "Smart image compression",
    description:
      "Reduce unnecessary file size while keeping your image looking sharp and usable for its intended purpose.",
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
        <path d="M4 7h16" />
        <path d="M4 12h11" />
        <path d="M4 17h7" />
        <path d="m17 10 3 2-3 2" />
      </svg>
    ),
  },
  {
    title: "Works in your browser",
    description:
      "Image processing happens directly on your device, so you can resize and optimize without sending your image to a server.",
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
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2"
        />
        <path d="M3 9h18" />
        <path d="M7 6.5h.01" />
        <path d="M10 6.5h.01" />
      </svg>
    ),
  },
  {
    title: "No account required",
    description:
      "Open the tool, upload your image, set your requirements, and download the result. No registration or complicated setup.",
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
        <circle
          cx="12"
          cy="8"
          r="3"
        />
        <path d="M5 20c.8-3.3 3.2-5 7-5s6.2 1.7 7 5" />
        <path d="m17 18 2 2 3-3" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Built for real requirements
          </span>

          <h2
            id="features-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl"
          >
            More than just an image resizer
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7"
          >
            Whether you need a smaller file, exact dimensions,
            or a different format, Let&apos;s Resize It gives you
            the controls to get the result you actually need.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-7"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="mt-5 text-base font-semibold tracking-tight text-slate-950 sm:text-lg">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom product statement */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
          <div className="flex flex-col gap-5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
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
                    <path d="M12 3v18" />
                    <path d="M3 12h18" />
                  </svg>
                </span>

                <span className="text-sm font-semibold text-slate-950">
                  One simple workflow
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Resize, compress, and convert your image in one
                place instead of jumping between different
                online tools.
              </p>
            </div>

            <a
              href="#resize"
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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
    </section>
  );
}