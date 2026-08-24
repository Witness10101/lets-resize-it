import Link from "next/link";

const popularTasks = [
  {
    title: "Resize Image Online",
    description:
      "Change the width and height of JPG, PNG, or WebP images to the exact dimensions you need.",
    href: "/resize-image",
  },
  {
    title: "Compress Image",
    description:
      "Reduce image file size while keeping the dimensions you need for websites, email, forms, and sharing.",
    href: "/compress-image",
  },
  {
    title: "Resize Image to 100 KB",
    description:
      "Reduce an image to a maximum 100 KB file size for websites, applications, forms, and uploads.",
    href: "/resize-image-to-100-kb",
  },
  {
    title: "Resize Image to 50 KB",
    description:
      "Create a smaller image that fits a 50 KB upload requirement while preserving as much quality as possible.",
    href: "/resize-image-to-50-kb",
  },
  {
    title: "Resize JPG",
    description:
      "Resize JPG and JPEG images by pixels, file size, or output format directly in your browser.",
    href: "/resize-jpg",
  },
  {
    title: "Resize PNG",
    description:
      "Resize PNG images to exact dimensions or optimize their file size without uploading them to a server.",
    href: "/resize-image",
  },
  {
    title: "Resize WebP",
    description:
      "Resize WebP images for websites, thumbnails, social media, and other digital uses.",
    href: "/webp-to-png",
  },
  {
    title: "Convert Image to WebP",
    description:
      "Convert compatible images to WebP while resizing and optimizing them for modern websites.",
    href: "/convert-jpg-to-webp",
  },
];

const useCases = [
  {
    title: "Website images",
    text: "Resize large photos and graphics before adding them to your website to make them easier to manage and faster to load.",
  },
  {
    title: "Online forms",
    text: "Meet upload requirements when a website asks for an image below a specific file-size limit such as 50 KB or 100 KB.",
  },
  {
    title: "Social media",
    text: "Create images with dimensions suitable for profiles, posts, thumbnails, banners, and other social platforms.",
  },
  {
    title: "Email attachments",
    text: "Reduce large image files before attaching them to emails or sending them through messaging applications.",
  },
  {
    title: "Job applications",
    text: "Resize profile photographs and documents when an application portal requires specific dimensions or file sizes.",
  },
  {
    title: "E-commerce",
    text: "Prepare product images with consistent dimensions and lighter file sizes for online stores and product listings.",
  },
];

const faqItems = [
  {
    question: "What is an image resizer?",
    answer:
      "An image resizer is an online tool that changes an image's pixel dimensions or file size. It can be used to make an image smaller, fit a specific width and height, meet an upload limit, or prepare an image for a website or social platform.",
  },
  {
    question: "Can I resize an image to a specific KB size?",
    answer:
      "Yes. Let's Resize It can optimize an image toward a maximum file-size requirement such as 50 KB, 100 KB, 200 KB, or a custom target. The final result depends on the image content, dimensions, and selected output format.",
  },
  {
    question: "Can I resize an image to exact dimensions?",
    answer:
      "Yes. You can specify a custom width and height in pixels. When both dimensions are provided, the tool can fit the image within those dimensions while preserving the image's aspect ratio.",
  },
  {
    question: "Can I resize JPG, PNG and WebP images?",
    answer:
      "Yes. Let's Resize It supports common image formats including JPG, PNG, and WebP, with options to choose an output format when supported by the browser.",
  },
  {
    question: "Does Let's Resize It upload my images?",
    answer:
      "No. Image processing is designed to happen directly inside your browser. Your selected image is processed locally instead of being uploaded to a remote image-processing server.",
  },
  {
    question: "Is the image resizer free?",
    answer:
      "Yes. The core image resizing and optimization workflow is available without requiring an account or subscription.",
  },
  {
    question: "Can I reduce image size without changing dimensions?",
    answer:
      "Yes. You can keep the original dimensions and choose an output format or file-size requirement to reduce the resulting file size.",
  },
  {
    question: "What image formats can I export?",
    answer:
      "Depending on browser support and the selected settings, you can export images as JPG, PNG, or WebP.",
  },
];

export function SEOContent() {
  return (
    <section
      id="seo-content"
      aria-labelledby="seo-content-heading"
      className="border-t border-slate-200 bg-white"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        {/* Main SEO introduction */}
        <div className="max-w-4xl">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Free online image tools
          </span>

          <h2
            id="seo-content-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Free Image Resizer Online
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Let's Resize It is a free online image resizer that helps you
            resize, compress, and optimize images without complicated software.
            Set the dimensions you need, choose a maximum file size, select an
            output format, and download the result directly from your browser.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Whether you need to resize an image to 100 KB, create an exact
            200 × 200 pixel image, reduce a large JPG, optimize a PNG, or
            convert an image to WebP, the tool is designed around the most
            common image upload and optimization requirements.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            There is no need to install desktop software or create an account.
            Image processing happens locally in your browser, so your images
            don't need to be sent to a remote server for the resizing process.
          </p>
        </div>

        {/* Popular tasks */}
        <div className="mt-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Popular Image Resizing Tasks
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Different websites, applications, and platforms have different
              image requirements. These tools are designed around common
              resizing and compression tasks.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularTasks.map((task) => (
              <Link
                key={task.href}
                href={task.href}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-sm font-bold text-slate-950 group-hover:text-blue-700">
                    {task.title}
                  </h3>

                  <span
                    aria-hidden="true"
                    className="text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600"
                  >
                    →
                  </span>
                </div>

                <p className="mt-3 text-xs leading-6 text-slate-600">
                  {task.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* How to choose */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
              Understand the settings
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Resize by pixels, file size, or format
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The right image setting depends on what you are trying to
              accomplish. Pixel dimensions control the physical size of the
              image, while file size controls how much storage the resulting
              file uses.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-950">
                Resize by dimensions
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use width and height when a website or platform requires an
                exact pixel size such as 200 × 200, 800 × 600, or another
                specific dimension.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-950">
                Resize by file size
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use a KB limit when an upload form says that your image must
                stay below a maximum size such as 50 KB or 100 KB.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-950">
                Choose an output format
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                JPG, PNG, and WebP have different characteristics. Choosing
                the right format can make it easier to balance image quality,
                transparency, compatibility, and file size.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-950">
                Keep the original dimensions
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                If the dimensions already work, you can focus on reducing the
                file size or changing the output format instead of resizing
                the image itself.
              </p>
            </article>
          </div>
        </div>

        {/* Use cases */}
        <div className="mt-20">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
              Built for real-world uploads
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Why people resize images
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Image resizing is useful whenever the original file is too large,
              has the wrong dimensions, or does not match the format required
              by the destination.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-base font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Privacy */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-blue-100 bg-blue-50">
          <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
              <svg
                className="h-7 w-7"
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
              <h2 className="text-xl font-bold text-slate-950">
                Your images stay in your browser
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                Let's Resize It is designed around browser-side image
                processing. Your selected image does not need to be uploaded
                to a server just to resize or optimize it. That makes the tool
                convenient for personal photos, documents, screenshots, and
                other files you may prefer to keep on your device.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ SEO block */}
        <div className="mt-20">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
              Image Resizer FAQ
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Frequently asked questions about resizing images
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-bold text-slate-950">
                  {item.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-slate-950 px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Need to resize an image right now?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Set your target dimensions, file size, or format and create an
            optimized image directly in your browser.
          </p>

          <Link
            href="#resize"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Resize an Image
          </Link>
        </div>
      </div>
    </section>
  );
}