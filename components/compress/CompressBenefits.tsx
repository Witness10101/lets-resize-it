export function CompressBenefits() {
  const benefits = [
    {
      title: "Reduce image file size",
      description:
        "Make large JPG, PNG, and WebP images smaller so they are easier to upload, store, share, and use online.",
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
          <path d="m7 8 5-5 5 5" />
          <path d="M5 21h14" />
        </svg>
      ),
    },
    {
      title: "Keep images looking good",
      description:
        "Compress your images while maintaining a practical balance between file size and visual quality.",
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
          <rect
            width="18"
            height="18"
            x="3"
            y="3"
            rx="2"
          />
          <circle
            cx="8.5"
            cy="8.5"
            r="1.5"
          />
          <path d="m21 15-5-5L5 21" />
        </svg>
      ),
    },
    {
      title: "Improve website performance",
      description:
        "Smaller images can require less data to transfer, helping reduce unnecessary page weight and improve loading efficiency.",
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
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
        </svg>
      ),
    },
    {
      title: "Meet upload limits",
      description:
        "Need an image below a specific file-size limit? Set your target and optimize the image accordingly.",
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
      title: "Works directly in your browser",
      description:
        "Compress images without installing desktop software or browser extensions. Everything happens directly in your browser.",
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
          <rect
            width="18"
            height="14"
            x="3"
            y="4"
            rx="2"
          />
          <path d="M8 20h8" />
          <path d="M12 18v2" />
          <path d="M7 8h.01" />
          <path d="M11 8h6" />
        </svg>
      ),
    },
    {
      title: "Free and easy to use",
      description:
        "No complicated settings or technical knowledge required. Upload an image, choose your requirements, and download the result.",
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
          <path d="M20 7h-9" />
          <path d="M14 17H5" />
          <path d="M20 12H4" />
          <path d="m16 4 4 3-4 3" />
          <path d="m8 14-4 3 4 3" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="compress-benefits"
      aria-labelledby="compress-benefits-heading"
      className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Why compress images?
          </span>

          <h2
            id="compress-benefits-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Compress images without the hassle
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Reduce image file sizes for websites, applications,
            forms, email, social media, and everyday file sharing.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                {benefit.icon}
              </div>

              <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-950">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:mt-12 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6-8 10-8 10Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-950">
                Private by design
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Your image can be processed locally in your browser,
                helping you compress images without sending the original
                file to a remote server.
              </p>
            </div>
          </div>
        </div>

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