import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ResizeImageTo500KbClient from "./ResizeImageTo500KbClient";

export const metadata: Metadata = {
  title: "Resize Image to 500 KB Online Free | Reduce Image Size to 500KB",
  description:
    "Resize an image to 500 KB online for free. Reduce JPG, PNG and WebP photos to 500 KB or less while keeping the best possible quality. No signup required.",
  keywords: [
    "resize image to 500 kb",
    "resize image to 500kb",
    "reduce image size to 500 kb",
    "reduce image to 500 kb",
    "compress image to 500 kb",
    "compress image to 500kb",
    "resize photo to 500 kb",
    "reduce photo size to 500 kb",
    "resize jpg to 500 kb",
    "resize png to 500 kb",
    "resize webp to 500 kb",
    "image compressor 500 kb",
    "image size reducer 500 kb",
    "make image 500 kb",
  ],
  alternates: {
    canonical: "/resize-image-to-500-kb",
  },
  openGraph: {
    title: "Resize Image to 500 KB Online Free",
    description:
      "Reduce JPG, PNG and WebP images to 500 KB or less online while preserving the best possible quality.",
    url: "/resize-image-to-500-kb",
    type: "website",
    siteName: "SnappyTools",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resize Image to 500 KB Online Free",
    description:
      "Resize JPG, PNG and WebP images to 500 KB online for free.",
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
    name: "Resize Image to 500 KB",
    href: "/resize-image-to-500-kb",
  },
];

const faqs = [
  {
    question: "How do I resize an image to 500 KB?",
    answer:
      "Upload your JPG, PNG or WebP image to the 500 KB image resizer above. The tool automatically adjusts image dimensions and compression to work toward a 500 KB target. Once processing is complete, you can preview the result and download the optimized image.",
  },
  {
    question: "Can I reduce a JPG image to 500 KB?",
    answer:
      "Yes. JPG and JPEG images are supported. Because JPEG compression is particularly effective for photographs, many large photos can be reduced significantly while maintaining good visual quality.",
  },
  {
    question: "Can I resize a PNG image to 500 KB?",
    answer:
      "Yes. PNG images can be processed toward a 500 KB target. Because PNG uses lossless compression, highly detailed images may require a larger reduction in pixel dimensions to reach the requested file size.",
  },
  {
    question: "Can I resize a WebP image to 500 KB?",
    answer:
      "Yes. WebP images are supported and can be optimized toward a 500 KB target. WebP can provide efficient compression for many web images while retaining good visual quality.",
  },
  {
    question: "Will my image be exactly 500 KB?",
    answer:
      "The tool is designed around a maximum target of 500 KB rather than unnecessarily forcing every file to exactly 500.00 KB. The goal is to produce the largest practical image that stays within the requested limit whenever possible.",
  },
  {
    question: "Will reducing an image to 500 KB reduce its quality?",
    answer:
      "Any reduction in file size can affect image quality, especially when the original file is very large. A 500 KB target is relatively generous compared with smaller limits, which can make it easier to retain useful resolution and visual detail.",
  },
  {
    question: "Is the 500 KB image resizer free?",
    answer:
      "Yes. The tool is free to use and does not require an account for the standard image resizing workflow.",
  },
  {
    question: "Can I resize an image to 500 KB on my phone?",
    answer:
      "Yes. The tool works in modern mobile browsers, allowing you to select a photo from your phone and reduce it toward a 500 KB target before uploading it elsewhere.",
  },
  {
    question: "What is better for a 500 KB photo, JPG or PNG?",
    answer:
      "For most photographs, JPG is generally more suitable when the goal is a smaller file size. PNG is better for graphics, screenshots, transparency and lossless image requirements. WebP is another efficient option for many web images.",
  },
];

const useCases = [
  {
    title: "Online applications",
    description:
      "Reduce large photographs before uploading them to websites that specify a 500 KB maximum image size.",
  },
  {
    title: "Website uploads",
    description:
      "Prepare images for websites and CMS platforms where keeping individual uploads below a reasonable file-size limit matters.",
  },
  {
    title: "Profile photographs",
    description:
      "Reduce high-resolution profile photos while keeping enough detail for professional and personal profiles.",
  },
  {
    title: "Online forms",
    description:
      "Make photographs, signatures and supporting images easier to submit through file-size restricted forms.",
  },
  {
    title: "Email attachments",
    description:
      "Shrink large photographs before attaching them to emails or sharing them through services with upload restrictions.",
  },
  {
    title: "Social and digital content",
    description:
      "Create smaller image files that are easier to upload, transfer and store without unnecessarily sacrificing resolution.",
  },
];

const relatedTools = [
  {
    title: "Resize Image",
    description:
      "Resize images by dimensions or percentage when you need more control.",
    href: "/resize-image",
  },
  {
    title: "Resize Image to 50 KB",
    description:
      "Use a stricter target when an upload requires a very small file.",
    href: "/resize-image-to-50-kb",
  },
  {
    title: "Resize Image to 100 KB",
    description:
      "Reduce an image toward a 100 KB maximum.",
    href: "/resize-image-to-100-kb",
  },
  {
    title: "Resize Image to 200 KB",
    description:
      "Use a smaller target for more restrictive upload limits.",
    href: "/resize-image-to-200-kb",
  },
  {
    title: "Resize JPG",
    description:
      "Resize JPG and JPEG images using a dedicated format workflow.",
    href: "/resize-jpg",
  },
  {
    title: "Resize PNG",
    description:
      "Resize PNG images while keeping the PNG format.",
    href: "/resize-png",
  },
  {
    title: "Resize WebP",
    description:
      "Resize WebP images for modern websites and digital use.",
    href: "/resize-webp",
  },
  {
    title: "Compress Image",
    description:
      "Compress images when you want a smaller file without a specific KB target.",
    href: "/compress-image",
  },
];

function JsonLd() {
  const graph = [
    {
      "@type": "WebSite",
      "@id": "https://snappytools.in/#website",
      url: "https://snappytools.in/",
      name: "SnappyTools",
    },
    {
      "@type": "WebPage",
      "@id": "https://snappytools.in/resize-image-to-500-kb#webpage",
      url: "https://snappytools.in/resize-image-to-500-kb",
      name: "Resize Image to 500 KB Online Free",
      description:
        "Free online tool for reducing JPG, PNG and WebP images to a 500 KB target.",
      isPartOf: {
        "@id": "https://snappytools.in/#website",
      },
      breadcrumb: {
        "@id":
          "https://snappytools.in/resize-image-to-500-kb#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://snappytools.in/resize-image-to-500-kb#breadcrumb",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `https://snappytools.in${item.href}`,
      })),
    },
    {
      "@type": "SoftwareApplication",
      name: "Resize Image to 500 KB",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      url: "https://snappytools.in/resize-image-to-500-kb",
      description:
        "Free browser-based image resizer for reducing JPG, PNG and WebP images toward a 500 KB target.",
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

export default function ResizeImageTo500KbPage() {
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
            className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl"
          />

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
                Free 500 KB Image Resizer
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Resize Image to{" "}
                <span className="text-blue-600">
                  500 KB
                </span>{" "}
                Online
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Reduce JPG, PNG and WebP images to a 500 KB target
                directly in your browser. Optimize photos for online
                forms, websites, applications, email attachments and
                upload limits while keeping the best practical quality.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-500">
                {[
                  "JPG",
                  "PNG",
                  "WebP",
                  "500 KB target",
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
          <ResizeImageTo500KbClient />
        </section>

        {/* ============================================================
            HOW IT WORKS
        ============================================================ */}
        <section className="border-y border-slate-100 bg-slate-50/60 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                How it works
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Resize an image to 500 KB in three steps
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
                You don't need desktop editing software or complicated
                export settings. Upload the image, let the tool optimize
                it toward the target and download the result.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Upload your image",
                  text: "Select a JPG, PNG or WebP image from your computer, tablet or phone.",
                },
                {
                  number: "02",
                  title: "Optimize toward 500 KB",
                  text: "The tool balances image dimensions and compression to work toward the 500 KB target.",
                },
                {
                  number: "03",
                  title: "Download the result",
                  text: "Preview the resulting file size and download your optimized image.",
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
                Why resize an image to 500 KB?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A 500 KB target gives you more room for image detail
                than stricter limits such as 50 KB, 100 KB or 200 KB.
                It can be useful when a website has a moderate upload
                limit but you still want to preserve a larger image
                resolution.
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
                Resize a photo to 500 KB online
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Large photos from modern phones and cameras can easily
                be several megabytes in size. That can become a problem
                when an online application, website or upload form
                limits image files to 500 KB.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Our{" "}
                <strong>resize image to 500 KB</strong> tool is designed
                for this exact situation. Upload your image and the
                browser works toward a 500 KB target by balancing
                dimensions and compression.
              </p>

              <h2 className="mt-12 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Is 500 KB a good image size?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                For many online uses, 500 KB is a reasonable compromise
                between file size and image detail. A 500 KB image can
                retain substantially more information than an extremely
                compressed 50 KB or 100 KB image, while still being much
                smaller than an original high-resolution photograph.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The correct target ultimately depends on the website or
                application you are using. If it specifies a smaller
                limit, use our{" "}
                <Link
                  href="/resize-image-to-200-kb"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  200 KB image resizer
                </Link>
                ,{" "}
                <Link
                  href="/resize-image-to-100-kb"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  100 KB image resizer
                </Link>
                {" "}or{" "}
                <Link
                  href="/resize-image-to-50-kb"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  50 KB image resizer
                </Link>
                .
              </p>

              <h2 className="mt-12 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Resize vs. compress an image
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Resizing changes the dimensions of an image, while
                compression reduces the amount of data needed to store
                it. Both approaches can reduce file size, and combining
                them can be especially useful when you have a specific
                maximum such as 500 KB.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                If your goal is simply to make an image file smaller
                without choosing a specific target, you can use our{" "}
                <Link
                  href="/compress-image"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  free image compressor
                </Link>
                .
              </p>

              <h2 className="mt-12 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                JPG, PNG or WebP for a 500 KB image?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The best format depends on the type of image. JPG is
                commonly effective for photographs because it provides
                strong compression. PNG is useful for graphics,
                screenshots and images that need transparency or
                lossless compression. WebP can be an efficient format
                for many modern websites.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                If you want to work specifically with one format, you
                can use our{" "}
                <Link
                  href="/resize-jpg"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  JPG resizer
                </Link>
                ,{" "}
                <Link
                  href="/resize-png"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  PNG resizer
                </Link>{" "}
                or{" "}
                <Link
                  href="/resize-webp"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  WebP resizer
                </Link>
                .
              </p>

              <h2 className="mt-12 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Why use a 500 KB image resizer?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Manually reducing an image to a particular file size
                often involves repeatedly exporting the image, checking
                its size and changing quality settings. A dedicated
                500 KB image resizer makes that workflow much simpler.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Instead of guessing which compression setting will work,
                you can start with the file-size requirement itself.
                The tool then works toward the target while attempting
                to preserve as much useful image quality as possible.
              </p>

              <h2 className="mt-12 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                500 KB image size for websites
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Smaller images can be easier to upload, transfer and
                store. However, 500 KB should not automatically be
                treated as the ideal size for every website. The right
                image size depends on its display dimensions, format,
                visual complexity and the performance requirements of
                the page.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                If your goal is website performance rather than meeting
                a specific upload limit, consider our{" "}
                <Link
                  href="/compress-image"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
                >
                  image compression tool
                </Link>{" "}
                instead.
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
                Resize image to 500 KB — FAQ
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Common questions about reducing photos and images to a
                500 KB target.
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
              Resize your image to 500 KB
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Upload your image above and reduce it toward a 500 KB
              target without complicated image-editing software.
            </p>

            <a
              href="#resize-image-to-500-kb"
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