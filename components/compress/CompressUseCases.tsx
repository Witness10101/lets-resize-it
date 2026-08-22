export function CompressUseCases() {
  const useCases = [
    {
      number: "01",
      title: "Email attachments",
      description:
        "Reduce large images before attaching them to emails. Smaller files are easier to send, upload, and receive while keeping the image useful.",
      keywords: "Gmail, Outlook, email attachments",
    },
    {
      number: "02",
      title: "Website images",
      description:
        "Compress images before adding them to your website to reduce file sizes and help pages load faster without unnecessary image weight.",
      keywords: "website optimization, page speed, web images",
    },
    {
      number: "03",
      title: "Online forms",
      description:
        "Many applications and online forms limit the size of uploaded images. Compress your image to make it easier to meet those upload requirements.",
      keywords: "image upload, application forms, upload limits",
    },
    {
      number: "04",
      title: "Social media",
      description:
        "Create smaller image files for easier sharing and uploading to social platforms, messaging apps, and online communities.",
      keywords: "Instagram, Facebook, social media",
    },
    {
      number: "05",
      title: "Document uploads",
      description:
        "Reduce image file sizes before adding photos or scanned images to documents, portals, applications, and other digital workflows.",
      keywords: "documents, scanned images, digital applications",
    },
    {
      number: "06",
      title: "Storage & sharing",
      description:
        "Save storage space and make images easier to share by reducing unnecessary file size while keeping the image visually usable.",
      keywords: "cloud storage, file sharing, image storage",
    },
  ];

  return (
    <section
      id="compress-use-cases"
      aria-labelledby="compress-use-cases-heading"
      className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Built for everyday image compression
          </span>

          <h2
            id="compress-use-cases-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Compress images for any situation
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Whether you need to reduce an image for an email, website,
            application form, social media upload, or storage, our image
            compressor makes it easy to create a smaller file in seconds.
          </p>
        </div>

        {/* Use case grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article
              key={useCase.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-7"
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold tracking-[0.18em] text-blue-600">
                  {useCase.number}
                </span>

                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition-colors duration-200 group-hover:bg-blue-50 group-hover:text-blue-600"
                  aria-hidden="true"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v18" />
                    <path d="M3 12h18" />
                  </svg>
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-7 text-lg font-bold tracking-tight text-slate-950">
                {useCase.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {useCase.description}
              </p>

              {/* Supporting keywords/context */}
              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-xs font-medium text-slate-400">
                  Useful for
                </p>

                <p className="mt-1 text-xs font-medium text-slate-600">
                  {useCase.keywords}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom SEO/content block */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-slate-950">
                Need to make a large image smaller?
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                Compress your JPG, PNG, or WebP image directly in your
                browser. You can reduce image file size without uploading
                your image to a server, making the process quick and
                convenient for everyday use.
              </p>
            </div>

            <a
              href="#compress-tool"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Compress an image
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