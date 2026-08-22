export function JpgToPngUseCases() {
  const useCases = [
    {
      title: "Websites & Web Design",
      description:
        "Convert JPG images to PNG when you need transparent backgrounds, sharper graphics, or a format better suited for website assets.",
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
          <path d="M7 6.5h.01" />
          <path d="M10 6.5h.01" />
        </svg>
      ),
    },
    {
      title: "Logos & Brand Graphics",
      description:
        "Turn JPG logos and graphics into PNG files for presentations, websites, social media designs, and other brand assets.",
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
          <path d="M12 3 4 7v5c0 5 3.5 7.8 8 9 4.5-1.2 8-4 8-9V7l-8-4Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Presentations & Documents",
      description:
        "Convert JPG photos and graphics to PNG before adding them to PowerPoint presentations, documents, reports, or digital projects.",
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
          <path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
          <path d="M14 3v5h5" />
          <path d="M8 13h8" />
          <path d="M8 17h6" />
        </svg>
      ),
    },
    {
      title: "Social Media Graphics",
      description:
        "Prepare JPG images as PNG files for social posts, thumbnails, profile graphics, and other creative content.",
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
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <circle cx="12" cy="12" r="4" />
          <path d="M17.5 6.5h.01" />
        </svg>
      ),
    },
    {
      title: "Screenshots & Graphics",
      description:
        "Convert screenshots and JPG graphics to PNG when you want a lossless image format for further editing or sharing.",
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
      title: "Editing & Creative Work",
      description:
        "Convert JPG images to PNG before using them in graphic design, photo editing, illustration, or other creative workflows.",
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
          <path d="m4 16 4 4 12-12-4-4L4 16Z" />
          <path d="m13 7 4 4" />
          <path d="M4 20h16" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="use-cases"
      aria-labelledby="jpg-to-png-use-cases-heading"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Common use cases
          </span>

          <h2
            id="jpg-to-png-use-cases-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl"
          >
            When to convert JPG to PNG
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            A JPG to PNG converter is useful whenever you need
            a PNG version of an existing image for websites,
            design projects, documents, social media, or
            image editing.
          </p>
        </div>

        {/* Use cases */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article
              key={useCase.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
                {useCase.icon}
              </div>

              <h3 className="mt-5 text-base font-bold text-slate-950 sm:text-lg">
                {useCase.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {useCase.description}
              </p>
            </article>
          ))}
        </div>

        {/* Supporting SEO/content block */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="mx-auto max-w-4xl">
            <h3 className="text-lg font-bold tracking-tight text-slate-950 sm:text-xl">
              Why convert a JPG image to PNG?
            </h3>

            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
              <p>
                JPG is widely used for photographs and compressed
                images, while PNG is often preferred for graphics,
                screenshots, logos, and images that need lossless
                quality. Converting an existing JPG to PNG gives
                you a PNG copy that can be used in workflows where
                PNG is the required or preferred format.
              </p>

              <p>
                Converting an image does not recreate information
                that was already lost when the original JPG was
                compressed. However, saving the converted image as
                PNG can prevent additional JPEG compression from
                being applied when you continue editing or exporting
                the image.
              </p>

              <p>
                With our online JPG to PNG converter, you can
                convert your image directly in your browser without
                installing additional software. Select a JPG file,
                convert it to PNG, preview the result, and download
                the converted image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}