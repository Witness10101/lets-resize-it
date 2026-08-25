import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ResizeImageTo200KbClient from "./ResizeImageTo200KbClient";

export const metadata: Metadata = {
  title: "Resize Image to 200 KB Online Free | Reduce Image Size to 200KB",
  description:
    "Resize an image to 200 KB online for free. Reduce JPG, PNG and WebP photos to 200 KB or less while preserving the best possible quality. No signup required.",
  keywords: [
    "resize image to 200 kb",
    "resize image to 200kb",
    "reduce image size to 200 kb",
    "compress image to 200 kb",
    "image compressor 200 kb",
    "resize photo to 200 kb",
    "reduce photo size to 200 kb",
    "resize jpg to 200 kb",
    "resize png to 200 kb",
    "resize webp to 200 kb",
    "image size reducer 200 kb",
  ],
  alternates: {
    canonical: "/resize-image-to-200-kb",
  },
  openGraph: {
    title: "Resize Image to 200 KB Online Free",
    description:
      "Reduce JPG, PNG and WebP images to 200 KB or less online while keeping the best possible quality.",
    url: "/resize-image-to-200-kb",
    type: "website",
    siteName: "SnappyTools",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resize Image to 200 KB Online Free",
    description:
      "Resize JPG, PNG and WebP images to 200 KB online for free.",
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
    name: "Resize Image to 200 KB",
    href: "/resize-image-to-200-kb",
  },
];

const faqs = [
  {
    question: "How do I resize an image to 200 KB?",
    answer:
      "Upload your JPG, PNG or WebP image to the 200 KB image resizer above. The tool automatically adjusts image dimensions and compression to work toward a 200 KB target. When processing is complete, preview the result and download the optimized image.",
  },
  {
    question: "Can I reduce a JPG image to 200 KB?",
    answer:
      "Yes. JPG images are supported and can usually be reduced efficiently because JPEG compression is well suited to photographs. The tool works toward keeping the resulting image at or below the 200 KB target.",
  },
  {
    question: "Can I resize a PNG image to 200 KB?",
    answer:
      "Yes. PNG images can be processed toward a 200 KB target. Since PNG uses lossless compression, large or detailed PNG files may need their dimensions reduced more significantly than a JPG to reach the same file size.",
  },
  {
    question: "Can I reduce a photo to exactly 200 KB?",
    answer:
      "The tool is designed around a maximum target of 200 KB rather than forcing every image to exactly 200.00 KB. Staying below the requested limit helps satisfy upload restrictions without unnecessarily reducing image quality.",
  },
  {
    question: "Will reducing an image to 200 KB lower its quality?",
    answer:
      "Reducing file size can affect image quality, particularly when the original image is very large. The tool attempts to balance dimensions and compression so that the resulting image remains as useful and clear as possible while approaching the 200 KB target.",
  },
  {
    question: "Is this 200 KB image resizer free?",
    answer:
      "Yes. The tool is free to use and does not require an account for the basic image resizing workflow.",
  },
  {
    question: "Can I resize a photo from my phone to 200 KB?",
    answer:
      "Yes. The tool works in modern mobile browsers, so you can select a photo from your phone and reduce it toward a 200 KB target before uploading it to another website or application.",
  },
  {
    question: "What image formats can I resize to 200 KB?",
    answer:
      "The tool supports common image formats including JPG, JPEG, PNG and WebP. You can select an appropriate output format when processing the image.",
  },
  {
    question: "What is better for a 200 KB photo, JPG or PNG?",
    answer:
      "For most photographs, JPG can generally achieve a smaller file size than PNG at comparable visual quality. PNG is useful when lossless compression or transparency is important. WebP can also be an efficient choice for many web images.",
  },
];

const useCases = [
  {
    title: "Online application forms",
    description:
      "Reduce large photographs before uploading them to applications and portals that impose a 200 KB maximum file-size requirement.",
  },
  {
    title: "Passport and profile photos",
    description:
      "Prepare photographs for websites that require smaller upload files while retaining enough resolution for the intended use.",
  },
  {
    title: "Document submissions",
    description:
      "Shrink scanned photographs, signatures and supporting images before submitting them through online forms.",
  },
  {
    title: "Website uploads",
    description:
      "Prepare images for websites and CMS platforms where smaller uploads help satisfy file-size limits.",
  },
  {
    title: "Email and messaging",
    description:
      "Make large photographs easier to share when you want a substantially smaller image without an unnecessarily tiny file.",
  },
  {
    title: "Job and education portals",
    description:
      "Reduce profile photographs and supporting images before uploading them to recruitment, education and application portals.",
  },
];

const relatedTools = [
  {
    title: "Resize Image",
    description:
      "Resize images by width, height or percentage when you need more control.",
    href: "/resize-image",
  },
  {
    title: "Resize Image to 50 KB",
    description:
      "Need a stricter file-size limit? Target approximately 50 KB.",
    href: "/resize-image-to-50-kb",
  },
  {
    title: "Resize Image to 100 KB",
    description:
      "Reduce your image toward a smaller 100 KB maximum.",
    href: "/resize-image-to-100-kb",
  },
  {
    title: "Resize Image to 500 KB",
    description:
      "Use a larger target when 200 KB is unnecessarily restrictive.",
    href: "/resize-image-to-500-kb",
  },
  {
    title: "Resize JPG",
    description:
      "Resize JPG and JPEG images with a dedicated format workflow.",
    href: "/resize-jpg",
  },
  {
    title: "Resize PNG",
    description:
      "Resize PNG images while keeping the PNG format.",
    href: "/resize-image",
  },
  {
    title: "Resize WebP",
    description:
      "Resize WebP images for modern websites and digital use.",
    href: "/webp-to-png",
  },
  {
    title: "Compress Image",
    description:
      "Compress an image when you want smaller files without a specific KB target.",
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
      "@id": "https://www.reduceimages.com/#webpage",
      url: "https://www.reduceimages.com/",
      name: "Resize Image to 200 KB Online Free",
      description:
        "Free online tool for reducing JPG, PNG and WebP images to a 200 KB target.",
      isPartOf: {
        "@id": "https://www.reduceimages.com/#website",
      },
      breadcrumb: {
        "@id":
          "https://www.reduceimages.com/#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.reduceimages.com/#breadcrumb",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `https://snappytools.in${item.href}`,
      })),
    },
    {
      "@type": "SoftwareApplication",
      name: "Resize Image to 200 KB",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      url: "https://www.reduceimages.com/",
      description:
        "Free browser-based image resizer for reducing JPG, PNG and WebP images toward a 200 KB target.",
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

export default function ResizeImageTo200KbPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <JsonLd />

        {/* ============================================================
            HERO
        ============================================================ */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-blue-50/70 via-white to-white">
          <div
            aria-hidden="true"
            className="absolute -left-32 top-12 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-14">
            <nav aria-label="Breadcrumb" className="mb-8 overflow-x-auto">
              <ol className="flex min-w-max items-center gap-2 text-sm">
                {breadcrumbs.map((item, index) => (
                  <li
                    key={item.href}
                    className="flex items-center gap-2"
                  >
                    {index > 0 && (
                      <span className="text-slate-300">/</span>
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
                Free 200 KB Image Resizer
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Resize Image to{" "}
                <span className="text-blue-600">200 KB</span>{" "}
                Online
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Reduce JPG, PNG and WebP images to a 200 KB target
                directly in your browser. Optimize photos for online
                forms, applications, websites and upload limits while
                keeping the best practical image quality.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-500">
                {[
                  "JPG",
                  "PNG",
                  "WebP",
                  "200 KB target",
                  "No signup",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            TOOL
        ============================================================ */}
        <section className="relative -mt-2 pb-16 sm:pb-20">
          <ResizeImageTo200KbClient />
        </section>

        {/* ============================================================
            EXPLANATION
        ============================================================ */}
        <section className="border-y border-slate-100 bg-slate-50/60 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                Simple image optimization
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Reduce your image to 200 KB in three steps
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
                Getting a photograph under a specific file-size
                limit should not require image-editing software. Upload
                your image, let the browser optimize it toward the
                target and download the result.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Upload your image",
                  text: "Choose a JPG, PNG or WebP image from your computer or phone.",
                },
                {
                  number: "02",
                  title: "Optimize to 200 KB",
                  text: "The tool balances dimensions and compression to work toward the 200 KB target.",
                },
                {
                  number: "03",
                  title: "Download",
                  text: "Check the resulting size and download your optimized image.",
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
                Common use cases
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Why resize an image to 200 KB?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A 200 KB target provides a useful middle ground:
                significantly smaller than many original camera
                photos while allowing more visual detail than stricter
                limits such as 50 KB or 100 KB.
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
            <article>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Resize a photo to 200 KB online
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Many online applications and websites place limits on
                the size of photographs and image uploads. If the
                requirement is 200 KB or less, reducing the original
                image manually can involve repeated changes to
                dimensions, quality and export settings.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Our{" "}
                <strong>resize image to 200 KB</strong> tool is built
                specifically for this type of requirement. Upload the
                image and the browser works toward a 200 KB target by
                balancing image dimensions and compression.
              </p>

              <h2 className="mt-12 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Is 200 KB a good image size?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A 200 KB image can be a practical size for many online
                uploads. It is small enough to reduce bandwidth and
                satisfy many file-size restrictions while allowing
                more detail than extremely small targets.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The ideal size depends on the purpose of the image. If
                your website or application specifies a maximum size,
                follow that requirement. If it asks for 100 KB, use
                our{" "}
                <Link
                  href="/resize-image-to-100-kb"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  resize image to 100 KB
                </Link>{" "}
                tool. For a stricter 50 KB requirement, use the{" "}
                <Link
                  href="/resize-image-to-50-kb"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  50 KB image resizer
                </Link>
                .
              </p>

              <h2 className="mt-12 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Resize vs. compress: what is the difference?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Resizing changes the pixel dimensions of an image,
                such as reducing a 4000 × 3000 photograph to a smaller
                resolution. Compression reduces the amount of data
                required to store the image. Both techniques can help
                reduce file size.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                When your requirement is a specific maximum such as
                200 KB, combining dimension reduction with appropriate
                compression can provide a better result than relying
                on either technique alone. If you simply need general
                image compression, visit our{" "}
                <Link
                  href="/compress-image"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  image compressor
                </Link>
                .
              </p>

              <h2 className="mt-12 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                JPG, PNG or WebP for a 200 KB image?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                For photographs, JPG is often a practical choice when
                the goal is a relatively small file. PNG is better
                suited to graphics, screenshots, transparency and
                situations where lossless image data matters. WebP
                can provide efficient compression and is widely useful
                for modern websites.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                If you already know which format you need, explore our{" "}
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

              <h2 className="mt-12 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Why use a browser-based 200 KB image resizer?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A browser-based tool makes the workflow quick because
                you do not need to install desktop image-editing
                software. You can use the same page from a computer,
                tablet or compatible mobile browser whenever you need
                to prepare an image for an upload.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                For recurring tasks, having dedicated targets such as
                50 KB, 100 KB, 200 KB and 500 KB also makes it easier
                to choose the right workflow without manually
                experimenting with compression settings.
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
                Explore more
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                More image resizing and compression tools
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Choose another file-size target, image format or
                compression workflow.
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
                Resize image to 200 KB — FAQ
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Common questions about reducing photos and images to
                a 200 KB target.
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
              Resize your image to 200 KB
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Upload your image above and reduce it toward a 200 KB
              target without complicated image-editing software.
            </p>

            <a
              href="#resize-image-to-200-kb"
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