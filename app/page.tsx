"use client";

import { useState } from "react";
import { SEOContent } from "@/components/home/SEOContent";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { UploadSection } from "@/components/home/UploadSection";
import {
  ImageRequirements,
  RequirementPanel,
} from "@/components/home/RequirementPanel";
import { ResultSection } from "@/components/home/ResultSection";

import { ImageAnalysis } from "@/lib/image/analyze";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [analysis, setAnalysis] =
    useState<ImageAnalysis | null>(null);

  const [requirements, setRequirements] =
    useState<ImageRequirements | null>(null);

  const [showResult, setShowResult] =
    useState(false);

  const handleFileSelected = (
    file: File,
    imageAnalysis: ImageAnalysis
  ) => {
    setSelectedFile(file);
    setAnalysis(imageAnalysis);
    setRequirements(null);
    setShowResult(false);
  };

  const handleRequirementsChange = (
    nextRequirements: ImageRequirements
  ) => {
    setRequirements(nextRequirements);
  };

  const handleOptimize = (
    nextRequirements: ImageRequirements
  ) => {
    setRequirements(nextRequirements);
    setShowResult(true);

    setTimeout(() => {
      document
        .getElementById("result")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  const handleStartOver = () => {
    setSelectedFile(null);
    setAnalysis(null);
    setRequirements(null);
    setShowResult(false);

    setTimeout(() => {
      document
        .getElementById("resize")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://letsresizeit.com/#website",
        url: "https://letsresizeit.com/",
        name: "Let's Resize It",
        description:
          "Free online image resizer for changing image dimensions, reducing file size, compressing images and converting JPG, PNG and WebP files.",
      },
      {
        "@type": "Organization",
        "@id": "https://letsresizeit.com/#organization",
        name: "Let's Resize It",
        url: "https://letsresizeit.com/",
      },
      {
        "@type": "SoftwareApplication",
        "@id":
          "https://letsresizeit.com/#application",
        name: "Let's Resize It",
        applicationCategory:
          "MultimediaApplication",
        operatingSystem: "Web",
        url: "https://letsresizeit.com/",
        description:
          "A free browser-based image resizer that lets you resize images by dimensions, reduce image file size to a target KB limit, compress images and convert image formats.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "Resize images online",
          "Resize images by width and height",
          "Reduce image size to KB",
          "Compress JPG images",
          "Compress PNG images",
          "Convert images to WebP",
          "Resize images without uploading them",
        ],
      },
    ],
  };

  return (
    <>
      <Header />

      <main id="main-content">
        {/* =====================================================
            PRIMARY PRODUCT EXPERIENCE
        ====================================================== */}

        <Hero />

        <UploadSection
          onFileSelected={handleFileSelected}
        />

        {selectedFile &&
          analysis &&
          !showResult && (
            <RequirementPanel
              onRequirementsChange={
                handleRequirementsChange
              }
              onOptimize={handleOptimize}
            />
          )}

        {selectedFile &&
          requirements &&
          showResult && (
            <ResultSection
              file={selectedFile}
              requirements={requirements}
              onStartOver={handleStartOver}
            />
          )}

        {/* =====================================================
            SEO INTRODUCTION
        ====================================================== */}

        <section
          id="image-resizer"
          aria-labelledby="image-resizer-heading"
          className="border-t border-slate-100 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Free Online Image Resizer
              </p>

              <h2
                id="image-resizer-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
              >
                Resize images online without
                complicated software
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Let's Resize It is a free online image
                  resizer that helps you change image
                  dimensions, reduce image file size,
                  compress photos and convert images
                  between popular formats.
                </p>

                <p>
                  Whether you need to resize a photo for a
                  website, reduce an image below an upload
                  limit, create a specific pixel size or
                  convert an image to WebP, you can do it
                  directly in your browser.
                </p>

                <p>
                  The tool supports common image formats
                  including JPG, PNG and WebP. You can
                  choose an exact width and height, set a
                  maximum file size such as 50 KB or 100
                  KB, or select an output format that works
                  for your destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SEARCH INTENT GRID
        ====================================================== */}

        <section
          id="popular-tasks"
          aria-labelledby="popular-tasks-heading"
          className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                What can you resize?
              </p>

              <h2
                id="popular-tasks-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
              >
                Resize, compress and convert
                images in one place
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Choose the type of image task you need.
                Let's Resize It is designed for common
                website, application, social media and
                document upload requirements.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                    <path d="M16 3h3a2 2 0 0 1 2 2v3" />
                    <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
                    <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  Resize Images by Dimensions
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Set a custom width and height in pixels
                  when you need an image to fit an exact
                  space or upload requirement.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 3v18" />
                    <path d="M5 8h14" />
                    <path d="M5 16h14" />
                  </svg>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  Reduce Image Size to KB
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Need an image below a file-size limit?
                  Set a maximum size such as 50 KB, 100 KB,
                  200 KB or another custom value.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </svg>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  Compress Images
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Reduce the amount of storage an image
                  needs while creating a smaller file that
                  is easier to upload, store and share.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <span className="text-sm font-bold">
                    JPG
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  Resize JPG Images
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Resize JPEG and JPG photographs for
                  websites, forms, applications, social
                  media and everyday sharing.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <span className="text-sm font-bold">
                    PNG
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  Resize PNG Images
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Resize PNG graphics, screenshots,
                  illustrations and transparent images to
                  the dimensions you need.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <span className="text-sm font-bold">
                    WEBP
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  Convert Images to WebP
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Choose WebP as the output format when
                  you want a modern web-friendly image
                  format alongside resizing.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            KB SEO SECTION
        ====================================================== */}

        <section
          id="resize-to-kb"
          aria-labelledby="resize-to-kb-heading"
          className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                  File Size Resizing
                </p>

                <h2
                  id="resize-to-kb-heading"
                  className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
                >
                  Resize an image to a specific
                  KB size
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Many websites and online applications
                    place limits on the size of an uploaded
                    image. A form might accept only 50 KB,
                    100 KB, 200 KB or another maximum file
                    size.
                  </p>

                  <p>
                    Instead of repeatedly guessing which
                    compression setting will work, use the
                    maximum file size option in Let's Resize
                    It. Enter the limit you need and the
                    browser-based image processor works
                    toward producing an image that fits
                    within that limit.
                  </p>

                  <p>
                    You can also combine a file-size limit
                    with custom dimensions and an output
                    format. For example, you can resize an
                    image to 200 × 200 pixels and choose
                    WebP while also applying a maximum file
                    size.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
                <p className="text-sm font-semibold text-blue-700">
                  Common file-size targets
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    "20 KB",
                    "50 KB",
                    "75 KB",
                    "100 KB",
                    "150 KB",
                    "200 KB",
                    "300 KB",
                    "500 KB",
                  ].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() =>
                        document
                          .getElementById("resize")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          })
                      }
                      className="rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-400 hover:text-blue-700"
                    >
                      Resize to {size}
                    </button>
                  ))}
                </div>

                <p className="mt-5 text-xs leading-5 text-blue-700">
                  Select your target size in the image
                  resizer above.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DIMENSION SEO SECTION
        ====================================================== */}

        <section
          id="resize-by-dimensions"
          aria-labelledby="resize-by-dimensions-heading"
          className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Pixel Dimensions
              </p>

              <h2
                id="resize-by-dimensions-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
              >
                Resize an image to exact
                dimensions
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Sometimes the problem is not the file
                  size — it is the image dimensions. A
                  website, profile form, document system or
                  social platform may require a particular
                  width and height.
                </p>

                <p>
                  Let's Resize It lets you enter custom
                  dimensions in pixels. When both width and
                  height are supplied, the tool can work
                  within the requested dimensions while
                  producing the output image directly in
                  your browser.
                </p>

                <p>
                  Common requirements include square
                  images, profile photos, thumbnails,
                  website graphics, product images and
                  social media assets.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {[
                "200 × 200",
                "300 × 300",
                "400 × 400",
                "600 × 600",
                "1080 × 1080",
                "1920 × 1080",
              ].map((dimension) => (
                <button
                  key={dimension}
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("resize")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                  }
                  className="rounded-xl border border-slate-200 bg-white px-3 py-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-400 hover:text-blue-700"
                >
                  {dimension}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FORMAT SEO SECTION
        ====================================================== */}

        <section
          id="image-formats"
          aria-labelledby="image-formats-heading"
          className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Image Formats
              </p>

              <h2
                id="image-formats-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
              >
                Resize JPG, PNG and WebP images
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Choose the output format that fits your
                project. Resize your image and change its
                format in the same workflow.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-bold text-slate-950">
                  JPG / JPEG
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  JPG is widely used for photographs and
                  everyday images. It can provide relatively
                  small files when image compression is
                  appropriate.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-bold text-slate-950">
                  PNG
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  PNG is commonly used for graphics,
                  screenshots and images where transparency
                  or lossless image characteristics are
                  important.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-bold text-slate-950">
                  WebP
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  WebP is a modern image format designed
                  for efficient delivery on the web and is
                  supported by modern browsers.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY SECTION
        ====================================================== */}

        <section
          id="why-lets-resize-it"
          aria-labelledby="why-heading"
          className="bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                Built for the Web
              </p>

              <h2
                id="why-heading"
                className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                A simpler way to resize and
                optimize images
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Image resizing should not require a desktop
                graphics application or a complicated workflow.
                Let's Resize It focuses on the tasks people
                actually need when preparing images for the
                web and online forms.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Free to use",
                  text: "Resize images without needing a paid image-editing application.",
                },
                {
                  title: "Browser based",
                  text: "The image-processing workflow runs directly in your browser.",
                },
                {
                  title: "Flexible controls",
                  text: "Choose file size, dimensions and output format based on your needs.",
                },
                {
                  title: "No complicated workflow",
                  text: "Upload an image, choose your requirements and download the result.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            IMAGE RESIZING GUIDE
        ====================================================== */}

        <section
          id="image-resizing-guide"
          aria-labelledby="guide-heading"
          className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Image Resizing Guide
            </p>

            <h2
              id="guide-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
            >
              What happens when you resize an
              image?
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Image dimensions and file size are
                  different
                </h3>

                <p className="mt-3 text-base leading-8 text-slate-600">
                  Image dimensions describe the number of
                  pixels in an image, such as 1920 × 1080.
                  File size describes how much storage the
                  resulting file uses, such as 2 MB or 100
                  KB. Changing dimensions can affect file
                  size, but the two measurements are not the
                  same.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Why does a smaller image usually have a
                  smaller file size?
                </h3>

                <p className="mt-3 text-base leading-8 text-slate-600">
                  A smaller image contains fewer pixels that
                  need to be stored and encoded. Depending on
                  the output format and compression settings,
                  reducing dimensions can therefore
                  significantly reduce the resulting file
                  size.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Should you resize or compress an image?
                </h3>

                <p className="mt-3 text-base leading-8 text-slate-600">
                  It depends on the requirement. If a website
                  requires a specific width and height, resize
                  the dimensions. If the dimensions are
                  already appropriate but the file is too
                  large, reducing file size or changing the
                  output format may be more appropriate. In
                  some cases, combining both produces the best
                  result.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  When should you use WebP?
                </h3>

                <p className="mt-3 text-base leading-8 text-slate-600">
                  WebP can be a useful choice for websites
                  and modern web applications because it is
                  designed for efficient image delivery.
                  However, the best format depends on how and
                  where the image will be used.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SEOContent />
      </main>

      {/* =======================================================
          STRUCTURED DATA
      ======================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData
          ),
        }}
      />

    <Footer />  
    </>
  );
}