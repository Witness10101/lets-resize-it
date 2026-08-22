import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ResizeHero } from "@/components/resize/ResizeHero";
import { ResizeTool } from "@/components/resize/ResizeTool";
import { ResizeUseCases } from "@/components/resize/ResizeUseCases";
import { ResizeHowItWorks } from "@/components/resize/ResizeHowItWorks";
import { ResizeBenefits } from "@/components/resize/ResizeBenefits";
import { ResizeFAQ } from "@/components/resize/ResizeFAQ";

export const metadata: Metadata = {
  title: "Resize Image Online Free – Exact Dimensions & File Size",
  description:
    "Resize images online for free with exact width and height controls. Reduce image file size, convert to JPG, PNG or WebP, and optimize images directly in your browser.",
  keywords: [
    "resize image",
    "resize image online",
    "resize image online free",
    "image resizer",
    "free image resizer",
    "resize JPG",
    "resize PNG",
    "resize WebP",
    "resize image to specific size",
    "resize image to specific dimensions",
    "reduce image size",
    "image size reducer",
  ],
  alternates: {
    canonical: "/resize-image",
  },
  openGraph: {
    title: "Resize Image Online Free – Exact Dimensions & File Size",
    description:
      "Resize images to exact dimensions, reduce file size, and convert image formats directly in your browser.",
    url: "/resize-image",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resize Image Online Free",
    description:
      "Resize, compress and convert images with exact dimensions and file-size controls.",
  },
};

export default function ResizeImagePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}

        <ResizeHero />

        {/* Tool */}
        <ResizeTool />

        {/* SEO introduction */}
        <section
          aria-labelledby="resize-image-intro"
          className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto w-full max-w-4xl">
            <h2
              id="resize-image-intro"
              className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
            >
              Resize images online for any purpose
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                Need to resize an image for a website, application,
                social media platform, online form, or document?
                Let&apos;s Resize It makes it easy to change an
                image&apos;s dimensions without installing software.
              </p>

              <p>
                You can specify an exact width and height, reduce
                the image&apos;s file size, or convert it to a
                different format such as JPG, PNG, or WebP. The
                tool is designed to handle common image resizing
                requirements from one simple interface.
              </p>

              <p>
                Image processing happens directly in your browser,
                so you can resize your images without creating an
                account or uploading them to a remote server.
              </p>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <ResizeUseCases />

        {/* How to */}
        <ResizeHowItWorks />

        {/* Resize Benefits placeholder */}

        <ResizeBenefits />

        {/* FAQ placeholder */}
        <ResizeFAQ  />
      </main>

      <Footer />
    </>
  );
}