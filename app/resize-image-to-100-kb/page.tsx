import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ResizeImageTo100KbClient from "./ResizeImageTo100KbClient";

export const metadata: Metadata = {
  title: "Resize Image to 100 KB Online Free | Reduce Image Size to 100KB",
  description:
    "Resize and reduce an image to 100 KB online for free. Compress JPG, PNG and WebP images to under 100 KB while keeping the best possible image quality. No signup required.",
  keywords: [
    "resize image to 100 kb",
    "resize image to 100kb",
    "reduce image size to 100 kb",
    "compress image to 100 kb",
    "image compressor 100 kb",
    "resize jpg to 100 kb",
    "resize png to 100 kb",
    "resize photo to 100 kb",
    "reduce photo size to 100 kb",
    "image size reducer 100 kb",
  ],
  alternates: {
    canonical: "/resize-image-to-100-kb",
  },
  openGraph: {
    title: "Resize Image to 100 KB Online Free",
    description:
      "Reduce JPG, PNG and WebP images to 100 KB online while preserving the best possible quality.",
    url: "/resize-image-to-100-kb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resize Image to 100 KB Online Free",
    description:
      "Resize your image to 100 KB online for free. Fast, simple and browser-based.",
  },
};

const breadcrumbs = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Resize Image",
    href: "/resize-image",
  },
  {
    name: "Resize Image to 100 KB",
    href: "/resize-image-to-100-kb",
  },
];

const faqs = [
  {
    question: "How do I resize an image to 100 KB?",
    answer:
      "Upload your JPG, PNG or WebP image to the 100 KB image resizer above. The tool automatically adjusts image dimensions and compression to reduce the file toward a 100 KB target. Once processing is complete, you can preview and download the optimized image.",
  },
  {
    question: "Can I reduce a JPG image to 100 KB?",
    answer:
      "Yes. JPG images can be reduced to approximately 100 KB by balancing image dimensions and JPEG compression. The tool automatically works toward the 100 KB target while trying to preserve as much visual quality as possible.",
  },
  {
    question: "Can I resize a PNG image to 100 KB?",
    answer:
      "Yes. PNG images are supported. Because PNG is a lossless format, some images may need their dimensions reduced significantly to reach 100 KB. For photographic images, JPG or WebP can sometimes produce a smaller file at similar visual quality.",
  },
  {
    question: "Can I resize a photo to exactly 100 KB?",
    answer:
      "The goal is to get the image at or below the 100 KB target rather than forcing every image to exactly 100.00 KB. This approach helps avoid unnecessary quality loss while satisfying applications and websites that require a maximum file size.",
  },
  {
    question: "Will resizing an image to 100 KB reduce its quality?",
    answer:
      "Reducing file size can affect image quality, but the tool attempts to find a practical balance between dimensions, compression and file size. Images with large dimensions or complex detail may require more reduction than simple images.",
  },
  {
    question: "Is the 100 KB image resizer free?",
    answer:
      "Yes. You can use the 100 KB image resizing tool without creating an account. Upload your image, process it and download the result directly from the browser.",
  },
  {
    question: "Does the image get uploaded to a server?",
    answer:
      "The resizing experience is designed to process the image directly in your browser. This avoids requiring an image-processing upload service for the basic resizing operation.",
  },
  {
    question: "What image formats are supported?",
    answer:
      "The tool supports common image formats including JPG, JPEG, PNG and WebP. The available output format can be selected when processing the image.",
  },
];

const useCases = [
  {
    title: "Online applications",
    description:
      "Many application forms place limits on the size of uploaded photographs and documents. A 100 KB target can help when an upload field has a strict file-size requirement.",
  },
  {
    title: "Profile photos",
    description:
      "Reduce large profile pictures and photographs before uploading them to websites, portals and online platforms that restrict file size.",
  },
  {
    title: "Government forms",
    description:
      "Some online forms require photographs or scanned documents to remain below a specific file-size limit. A 100 KB target can make those uploads easier.",
  },
  {
    title: "Email attachments",
    description:
      "Smaller images are easier to attach and share by email, messaging platforms and other services where file size matters.",
  },
  {
    title: "Website uploads",
    description:
      "Prepare images for websites, CMS platforms and forms that enforce upload limits or benefit from smaller image files.",
  },
  {
    title: "Document submissions",
    description:
      "Reduce photographs and scanned images before submitting them through online portals with strict upload requirements.",
  },
];

const relatedTools = [
  {
    title: "Resize Image",
    description:
      "Resize images by width, height or percentage with more control.",
    href: "/resize-image",
  },
  {
    title: "Resize Image to 50 KB",
    description:
      "Need a smaller file? Reduce an image toward a 50 KB target.",
    href: "/resize-image-to-50-kb",
  },
  {
    title: "Resize Image to 200 KB",
    description:
      "Use a larger target when 100 KB is too restrictive.",
    href: "/resize-image-to-200-kb",
  },
  {
    title: "Resize Image to 500 KB",
    description:
      "Reduce large images toward a 500 KB maximum target.",
    href: "/resize-image-to-500-kb",
  },
  {
    title: "Resize JPG",
    description:
      "Resize JPG and JPEG images with a format-focused workflow.",
    href: "/resize-jpg",
  },
  {
    title: "Resize PNG",
    description:
      "Resize PNG images while maintaining the format.",
    href: "/resize-image",
  },
  {
    title: "Resize WebP",
    description:
      "Resize WebP images for websites and digital use.",
    href: "/webp-to-png",
  },
  {
    title: "Compress Image",
    description:
      "Compress images when your main goal is reducing file size.",
    href: "/compress-image",
  },
];

function JsonLd() {
  const graph = [
    {
      "@type": "WebSite",
      "@id": "https://www.reduceimages.com/#website",
      url: "https://www.reduceimages.com/",
      name: "SnappyTools",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.reduceimages.com/resize-image-to-100-kb#webpage",
      url: "https://www.reduceimages.com/resize-image-to-100-kb",
      name: "Resize Image to 100 KB Online Free",
      description:
        "Resize and reduce JPG, PNG and WebP images to approximately 100 KB online.",
      isPartOf: {
        "@id": "https://www.reduceimages.com/#website",
      },
      breadcrumb: {
        "@id":
          "https://www.reduceimages.com/resize-image-to-100-kb#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.reduceimages.com/resize-image-to-100-kb#breadcrumb",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `https://snappytools.in${item.href}`,
      })),
    },
    {
      "@type": "SoftwareApplication",
      name: "Resize Image to 100 KB",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      url: "https://www.reduceimages.com/resize-image-to-100-kb",
      description:
        "Free browser-based tool for reducing JPG, PNG and WebP images toward a 100 KB file-size target.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}

export default function ResizeImageTo100KbPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <JsonLd />

        {/* ============================================================
            BREADCRUMBS + HERO
        ============================================================ */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-blue-50/70 via-white to-white">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-14">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 overflow-x-auto"
            >
              <ol className="flex min-w-max items-center gap-2 text-sm">
                {breadcrumbs.map((item, index) => (
                  <li
                    key={item.href}
                    className="flex items-center gap-2"
                  >
                    {index > 0 && (
                      <span className="text-slate-300">
                        /
                      </span>
                    )}

                    {index === breadcrumbs.length - 1 ? (
                      <span
                        aria-current="page"
                        className="font-semibold text-slate-500"
                      >
                        {item.name}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="font-semibold text-slate-500 transition-colors hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-blue-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Free 100 KB Image Resizer
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Resize Image to{" "}
                <span className="text-blue-600">
                  100 KB
                </span>{" "}
                Online
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Reduce JPG, PNG and WebP images to a 100 KB target
                directly in your browser. Optimize large photos for
                applications, websites, forms and online uploads while
                keeping the best practical image quality.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-500">
                <span className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  JPG
                </span>

                <span className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  PNG
                </span>

                <span className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  WebP
                </span>

                <span className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  100 KB target
                </span>

                <span className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  No signup
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            TOOL
        ============================================================ */}
        <section className="relative -mt-2 pb-16 sm:pb-20">
          <ResizeImageTo100KbClient />
        </section>

        {/* ============================================================
            QUICK EXPLANATION
        ============================================================ */}
        <section className="border-y border-slate-100 bg-slate-50/60 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                Simple file-size optimization
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Reduce an image to 100 KB without the guesswork
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
                When a website or application says an image must be
                100 KB or smaller, manually changing image dimensions
                and JPEG quality can take several attempts. This tool
                handles that process automatically and works toward a
                100 KB target for you.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Upload",
                  text: "Choose the JPG, PNG or WebP image you need to reduce.",
                },
                {
                  number: "02",
                  title: "Optimize",
                  text: "The browser adjusts dimensions and compression to work toward 100 KB.",
                },
                {
                  number: "03",
                  title: "Download",
                  text: "Preview the result, check its size and download the optimized image.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-sm font-black text-blue-600">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            USE CASES
        ============================================================ */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                When 100 KB helps
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Common reasons to resize an image to 100 KB
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A 100 KB limit is common when an online service needs
                a reasonably small image but still allows more detail
                than very restrictive targets such as 50 KB.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((useCase) => (
                <article
                  key={useCase.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {useCase.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {useCase.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SEO CONTENT
        ============================================================ */}
        <section className="border-y border-slate-100 bg-slate-50/60 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <article className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Resize a photo to 100 KB online
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Large photos can create problems when an online form
                or website accepts images only up to a certain file
                size. If the required limit is 100 KB, you need to
                reduce the image file without making it unnecessarily
                small or difficult to read. Our{" "}
                <strong>
                  resize image to 100 KB
                </strong>{" "}
                tool is designed specifically for this situation.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Instead of repeatedly changing image dimensions,
                compression quality and export settings yourself, you
                can upload the image and let the browser work toward
                the requested target. The result can then be checked
                before downloading.
              </p>

              <h2 className="mt-12 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Why use a 100 KB image size?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A 100 KB image is substantially smaller than many
                original smartphone photographs while still providing
                room for useful visual detail. This makes the target
                practical for profile photographs, online forms,
                document submissions, website uploads and other
                situations where a file-size limit is enforced.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The right target depends on what you are uploading. If
                a service specifically asks for a maximum of 50 KB,
                use our{" "}
                <Link
                  href="/resize-image-to-50-kb"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  image resizer for 50 KB
                </Link>
                . If 100 KB is too restrictive for your image, you can
                instead use the{" "}
                <Link
                  href="/resize-image-to-200-kb"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  200 KB image resizer
                </Link>
                .
              </p>

              <h2 className="mt-12 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                100 KB image resizing vs. image compression
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Image resizing and image compression are related but
                they are not exactly the same. Resizing changes the
                pixel dimensions of an image, while compression changes
                how efficiently the image data is stored. When you
                need to reach a specific file-size target such as
                100 KB, both can be useful.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                If you simply want to make an image file smaller
                without targeting a particular maximum size, try our{" "}
                <Link
                  href="/compress-image"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  image compressor
                </Link>
                .
              </p>

              <h2 className="mt-12 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Choosing JPG, PNG or WebP
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The best image format depends on the type of image.
                JPG is commonly effective for photographs because it
                can provide relatively small files. PNG is useful when
                lossless quality or transparency is important. WebP
                can provide efficient compression for many modern web
                images.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                If you already know the format you need, you can use
                our dedicated{" "}
                <Link
                  href="/resize-jpg"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  JPG resizer
                </Link>
                ,{" "}
                <Link
                  href="/resize-image"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  PNG resizer
                </Link>{" "}
                or{" "}
                <Link
                  href="/webp-to-png"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  WebP resizer
                </Link>
                .
              </p>
            </article>
          </div>
        </section>

        {/* ============================================================
            RELATED TOOLS
        ============================================================ */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                More image tools
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Choose the image tool that fits your goal
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Whether you need a different file-size target, a
                format-specific resizer or general compression, you
                can continue directly to the appropriate tool.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-bold text-slate-950 group-hover:text-blue-600">
                      {tool.title}
                    </h3>

                    <span className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-500">
                      →
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {tool.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            FAQ
        ============================================================ */}
        <section className="border-t border-slate-100 bg-slate-50/60 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                Frequently asked questions
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Resize image to 100 KB — FAQ
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Answers to common questions about reducing images to
                a 100 KB target.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <summary className="cursor-pointer list-none pr-8 text-sm font-bold text-slate-950 marker:hidden">
                    <div className="flex items-center justify-between gap-4">
                      <span>{faq.question}</span>

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>

                  <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            FINAL CTA
        ============================================================ */}
        <section className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-400">
              Ready to optimize?
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Resize your image to 100 KB
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Upload your image above and let the tool work toward a
              100 KB target without complicated image-editing software.
            </p>

            <a
              href="#resize-image-to-100-kb"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-white px-7 text-sm font-black text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Start Resizing
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}