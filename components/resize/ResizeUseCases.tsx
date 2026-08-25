import Link from "next/link";

const useCases = [
  {
    number: "01",
    title: "Resize images for websites",
    description:
      "Make images fit website layouts, content management systems, landing pages, and online stores without manually editing every file.",
    examples: [
      "Website uploads",
      "Blog images",
      "Product photos",
      "Hero images",
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
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 4v5" />
        <path d="M16 4v5" />
        <path d="m7 16 2.5-2.5L12 16l2-2 3 3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Resize photos for social media",
    description:
      "Prepare photos for social platforms by setting the exact width and height you need before uploading or publishing them.",
    examples: [
      "Profile photos",
      "Post images",
      "Cover images",
      "Social graphics",
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
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Resize images to exact dimensions",
    description:
      "Need a specific image size such as 200 × 200 or 1200 × 800 pixels? Enter your target dimensions and create an image that fits them.",
    examples: [
      "200 × 200 pixels",
      "600 × 600 pixels",
      "1200 × 800 pixels",
      "Custom dimensions",
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
        <path d="M3 8V5a2 2 0 0 1 2-2h3" />
        <path d="M16 3h3a2 2 0 0 1 2 2v3" />
        <path d="M21 16v3a2 2 0 0 1-2 2h-3" />
        <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Resize images for forms and applications",
    description:
      "Meet image dimension and file-size requirements for online forms, registrations, applications, portals, and other document submissions.",
    examples: [
      "Online applications",
      "Registration forms",
      "Government portals",
      "Document uploads",
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
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h5" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Resize images for email",
    description:
      "Create smaller, more manageable images for email attachments, newsletters, signatures, and other situations where image dimensions matter.",
    examples: [
      "Email attachments",
      "Email signatures",
      "Newsletters",
      "Marketing emails",
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
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Resize and optimize images together",
    description:
      "When reducing an image is not enough, combine custom dimensions, file-size limits, and output format requirements to create a more suitable file.",
    examples: [
      "Maximum file size",
      "Custom dimensions",
      "JPG conversion",
      "PNG conversion",
      "WebP conversion",
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
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <path d="m5 5 14 14" />
        <path d="m19 5-14 14" />
      </svg>
    ),
  },
];

export function ResizeUseCases() {
  return (
    <section
      id="resize-use-cases"
      aria-labelledby="resize-use-cases-heading"
      className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
            Resize images for any need
          </span>

          <h2
            id="resize-use-cases-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Resize images for websites, forms,
            <br className="hidden sm:block" /> social media and more
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Whether you need a specific pixel size, a smaller image
            for an upload limit, or a different format, Let&apos;s Resize
            It gives you the tools to prepare your image for its
            destination.
          </p>
        </div>

        {/* Use case grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article
              key={useCase.number}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-7"
            >
              {/* Decorative number */}
              <span
                className="absolute right-5 top-5 text-xs font-bold tracking-widest text-slate-200 transition-colors duration-300 group-hover:text-blue-100"
                aria-hidden="true"
              >
                {useCase.number}
              </span>

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                {useCase.icon}
              </div>

              <h3 className="mt-6 pr-10 text-lg font-bold tracking-tight text-slate-950">
                {useCase.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {useCase.description}
              </p>

              {/* Examples */}
              <div className="mt-6 flex flex-wrap gap-2">
                {useCase.examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {example}
                  </span>
                ))}
              </div>

              {/* Bottom accent */}
              <div
                className="mt-auto pt-7"
                aria-hidden="true"
              >
                <div className="h-px w-full bg-slate-100 transition-colors duration-300 group-hover:bg-blue-100" />
              </div>
            </article>
          ))}
        </div>

        {/* Supporting SEO/content block */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-7 sm:p-9 lg:p-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                One tool, many requirements
              </span>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Get your image ready for wherever it needs to go
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Different websites and applications ask for
                different image requirements. One may require an
                exact 200 × 200 pixel image, while another may limit
                uploads to 100 KB. Instead of searching for a
                different tool for every requirement, you can use
                Let&apos;s Resize It to adjust the image to the
                specifications you need.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Set custom dimensions, choose an output format, and
                specify a maximum file size when required. The image
                processing happens directly in your browser, so you
                can prepare your image without sending the original
                file to a server.
              </p>

              <Link
                href="#resize-tool"
                className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Resize your image
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
              </Link>
            </div>

            {/* Requirement visual */}
            <div className="relative hidden min-h-[360px] overflow-hidden border-l border-slate-200 bg-white lg:block">
              <div
                className="absolute inset-0 opacity-40"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative flex h-full items-center justify-center p-10">
                <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Image requirements
                    </span>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                      READY
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                      <span className="text-xs font-medium text-slate-500">
                        Dimensions
                      </span>

                      <span className="text-sm font-bold text-slate-950">
                        200 × 200 px
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                      <span className="text-xs font-medium text-slate-500">
                        Maximum size
                      </span>

                      <span className="text-sm font-bold text-slate-950">
                        100 KB
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                      <span className="text-xs font-medium text-slate-500">
                        Format
                      </span>

                      <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700">
                        WEBP
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>

                    <span className="text-xs font-semibold text-emerald-700">
                      Requirements satisfied
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}