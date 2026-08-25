import type { Metadata } from "next";

import { CompressHero } from "@/components/compress/CompressHero";
import { CompressTool } from "@/components/compress/CompressTool";
import { CompressUseCases } from "@/components/compress/CompressUseCases";
import { CompressHowItWorks } from "@/components/compress/CompressHowItWorks";
import { CompressBenefits } from "@/components/compress/CompressBenefits";
import { CompressFAQ } from "@/components/compress/CompressFAQ";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Compress Image Online Free – Reduce Image Size | Let&apos;s Resize It",
  description:
    "Compress JPG, PNG, and WebP images online for free. Reduce image file size, target 100KB, 200KB, 500KB or a custom size while keeping your image dimensions and quality where possible.",
  keywords: [
    "compress image",
    "compress image online",
    "compress image online free",
    "reduce image size",
    "reduce image file size",
    "image compressor",
    "image compression",
    "compress jpg",
    "compress png",
    "compress webp",
    "compress image to 100kb",
    "compress image to 200kb",
    "compress image to 500kb",
    "reduce jpg size",
    "reduce png size",
    "reduce webp size",
  ],
  alternates: {
    canonical: "/compress-image",
  },
  openGraph: {
    title: "Compress Image Online Free – Reduce Image Size",
    description:
      "Reduce JPG, PNG, and WebP image file sizes online. Set a target size and download your optimized image instantly.",
    url: "/compress-image",
    siteName: "Let&apos;s Resize It",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress Image Online Free – Reduce Image Size",
    description:
      "Compress JPG, PNG, and WebP images online. Reduce image size and download the optimized result.",
  },
};

const faqItems = [
  {
    question: "How do I compress an image?",
    answer:
      "Upload your image to the compressor, choose the compression or file-size requirements you need, and start the optimization. Once processing is complete, you can preview and download the compressed image.",
  },
  {
    question: "Can I compress JPG images?",
    answer:
      "Yes. JPG and JPEG images are supported. You can reduce their file size and optionally choose another supported output format.",
  },
  {
    question: "Can I compress PNG images?",
    answer:
      "Yes. PNG images can be compressed and optimized according to your requirements.",
  },
  {
    question: "Can I compress WebP images?",
    answer:
      "Yes. WebP images are supported and can be optimized to reduce their file size.",
  },
  {
    question: "Can I compress an image to a specific size?",
    answer:
      "Yes. You can specify a maximum file size such as 50 KB, 100 KB, 500 KB, or enter a custom size when the tool supports that requirement.",
  },
  {
    question: "Can I compress an image without changing its dimensions?",
    answer:
      "Yes. If you only need a smaller file size, you can keep the original dimensions while optimizing the image.",
  },
  {
    question: "Is the image compressor free?",
    answer:
      "Yes. You can use the browser-based image compression tool without installing additional software.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "The compression workflow is designed to process images directly in your browser, so your image can be optimized locally on your device.",
  },
];

export default function CompressImagePage() {
  return (
    <main className="min-h-screen bg-white">

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(structuredData),
  }}
/>
      <Header />
      <CompressHero />

      <CompressTool />

      <CompressUseCases />

      <CompressHowItWorks />

      <CompressBenefits />

      <CompressFAQ />

      {/* SEO-friendly supporting content */}
      <section
        aria-labelledby="compress-image-guide-heading"
        className="border-t border-slate-100 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto w-full max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <h2
              id="compress-image-guide-heading"
              className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
            >
              Compress images online without installing software
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Large image files can make websites slower, increase
              upload times, and make it harder to meet file-size
              restrictions on online forms and applications. Compressing
              an image reduces its file size so it is easier to upload,
              share, store, and use online.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Let&apos;s Resize It supports common image formats including
              JPG, PNG, and WebP. Depending on your requirements, you
              can reduce the image file size, select an output format,
              and work toward a specific maximum file size.
            </p>

            <h3 className="mt-10 text-xl font-bold text-slate-950">
              Why reduce image file size?
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Reducing image file size is useful when uploading images
              to websites, submitting online forms, attaching images to
              emails, publishing content, or optimizing images for web
              pages. Smaller files generally require less storage and
              less data to transfer.
            </p>

            <h3 className="mt-10 text-xl font-bold text-slate-950">
              Compress JPG, PNG, and WebP images
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Different image formats have different characteristics.
              JPG is commonly used for photographs, PNG is useful when
              transparency or lossless image data is important, and WebP
              is widely used for modern websites. Choosing an appropriate
              format can help reduce unnecessary file size.
            </p>

            <h3 className="mt-10 text-xl font-bold text-slate-950">
              Compress images to a target file size
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Some websites and applications impose maximum upload
              limits. If you need an image below a specific threshold,
              such as 100 KB, 200 KB, or 500 KB, targeting a maximum
              file size can make the image easier to submit while still
              preserving useful visual quality.
            </p>

            <h3 className="mt-10 text-xl font-bold text-slate-950">
              Image compression directly in your browser
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The image compression workflow is designed to run directly
              in your browser. This means you can optimize an image
              without needing to install desktop image-editing software
              or rely on a traditional server-based image compressor.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
    
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Let&apos;s Resize It Image Compressor",
      url: "/compress-image",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      description:
        "Free online image compressor for reducing JPG, PNG, and WebP image file sizes.",
    },
    {
      "@type": "HowTo",
      name: "How to compress an image online",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Upload an image",
          text: "Choose an image from your device.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Choose your requirements",
          text: "Choose the desired compression and file-size requirements.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Download the result",
          text: "Download your optimized image.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

