export function JpgToPngBenefits() {
  const benefits = [
    {
      title: "Convert JPG to PNG online",
      description:
        "Turn JPG and JPEG images into PNG files directly in your browser without installing software or creating an account.",
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
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      ),
    },
    {
      title: "Keep your image quality",
      description:
        "PNG is a lossless image format, making it useful when you want to preserve image details during conversion.",
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
          <path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Transparent PNG support",
      description:
        "Create PNG files for workflows where transparency is important, including graphics, logos, icons, and design assets.",
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
          <path d="M3 12h18" />
          <path d="M5.5 5.5 18.5 18.5" />
          <path d="m18.5 5.5-13 13" />
        </svg>
      ),
    },
    {
      title: "Works in your browser",
      description:
        "The conversion happens locally in your browser, so you can convert your image without sending it to a remote server.",
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
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18" />
          <path d="M7 6.5h.01" />
          <path d="M10 6.5h.01" />
        </svg>
      ),
    },
    {
      title: "Fast and simple workflow",
      description:
        "Upload a JPG, convert it to PNG, and download the result in just a few steps with a clean and straightforward interface.",
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
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
        </svg>
      ),
    },
    {
      title: "No software required",
      description:
        "Use the JPG to PNG converter from a modern desktop or mobile browser without downloading an additional application.",
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
      id="benefits"
      aria-labelledby="jpg-to-png-benefits-heading"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Why use our converter?
          </span>

          <h2
            id="jpg-to-png-benefits-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl"
          >
            A simple way to convert JPG images to PNG
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Convert JPG and JPEG images to PNG format with a
            fast, browser-based workflow designed to make image
            conversion simple and accessible.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
                {benefit.icon}
              </div>

              <h3 className="mt-5 text-base font-bold text-slate-950 sm:text-lg">
                {benefit.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        {/* Supporting content */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
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
                <path d="M3 12h18" />
                <path d="M5.5 5.5 18.5 18.5" />
                <path d="m18.5 5.5-13 13" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-950">
                When should you convert JPG to PNG?
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Converting JPG to PNG can be useful when your
                workflow requires the PNG format, especially for
                graphics, screenshots, logos, illustrations,
                design assets, or applications that specifically
                accept PNG files. PNG uses lossless compression,
                which makes it well suited to images where
                preserving pixel-level detail is important.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#jpg-to-png-tool"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Convert JPG to PNG
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
      </div>
    </section>
  );
}