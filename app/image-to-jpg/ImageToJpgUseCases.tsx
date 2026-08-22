export function ImageToJpgUseCases() {
  const useCases = [
    {
      title: "Convert PNG images to JPG",
      description:
        "Turn PNG images into JPG files when you need smaller file sizes, broader compatibility, or a more suitable format for uploading and sharing.",
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
      title: "Convert WebP to JPG",
      description:
        "Convert WebP images into JPG format for websites, applications, documents, marketplaces, and other platforms that require JPEG or JPG files.",
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
      title: "Convert images for websites",
      description:
        "Create JPG versions of images for websites and online platforms where JPEG is preferred for compatibility, performance, or image uploads.",
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
      title: "Prepare images for uploads",
      description:
        "Convert images to JPG before uploading them to forms, portals, marketplaces, applications, and services that accept JPG or JPEG files.",
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
          <rect x="4" y="3" width="16" height="18" rx="2" />
        </svg>
      ),
    },
    {
      title: "Convert images for documents",
      description:
        "Create JPG images that are easy to insert into documents, presentations, forms, reports, and other everyday files.",
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
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6" />
          <path d="M8 13h8" />
          <path d="M8 17h6" />
        </svg>
      ),
    },
    {
      title: "Convert photos to JPG",
      description:
        "Convert supported image files into the widely used JPG format for easier sharing, storage, editing, and compatibility across devices and platforms.",
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
          <path d="m21 15-5-5L5 20" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="use-cases"
      aria-labelledby="image-to-jpg-use-cases-heading"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            JPG Conversion Made Simple
          </span>

          <h2
            id="image-to-jpg-use-cases-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl"
          >
            Convert images to JPG for almost any use
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Whether you need to convert PNG to JPG, WebP to JPG,
            or another supported image format, use our online
            image to JPG converter to quickly create a JPG file
            that is ready to download and use.
          </p>
        </div>

        {/* Use cases */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article
              key={useCase.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-100 transition-colors duration-200 group-hover:bg-blue-50 group-hover:ring-blue-100">
                {useCase.icon}
              </div>

              <h3 className="mt-5 text-base font-semibold text-slate-950 sm:text-lg">
                {useCase.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {useCase.description}
              </p>
            </article>
          ))}
        </div>

        {/* Supporting content */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-950">
                Why convert an image to JPG?
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                JPG is one of the most widely supported image
                formats on the web. Converting an image to JPG
                can make it easier to upload, share, edit, and
                use across different websites, applications,
                operating systems, and devices.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-950">
                  Widely supported
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  JPG works across most browsers, devices,
                  applications, and online platforms.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-950">
                  Easy to use
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Convert your image online and download the
                  resulting JPG without installing software.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-950">
                  Browser based
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Image conversion happens directly in your
                  browser for a simple workflow.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-950">
                  No software required
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Use the converter from a modern desktop,
                  tablet, or mobile browser.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Internal conversion CTA */}
        <div className="mt-10 text-center">
          <a
            href="#image-to-jpg-tool"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Convert an image to JPG

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