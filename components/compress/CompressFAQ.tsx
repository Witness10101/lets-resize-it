"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I compress an image?",
    answer:
      "Upload your image to the compressor, choose the compression or file-size requirements you need, and start the optimization. Once processing is complete, you can preview and download the compressed image.",
  },
  {
    question: "Can I compress JPG images?",
    answer:
      "Yes. You can use the image compressor to reduce the file size of JPG and JPEG images. The result can also be converted to another supported format when needed.",
  },
  {
    question: "Can I compress PNG images?",
    answer:
      "Yes. PNG images can be processed using the compressor. Depending on your requirements, you can reduce the file size while keeping the PNG format or choose another supported output format.",
  },
  {
    question: "Can I compress WebP images?",
    answer:
      "Yes. WebP images are supported. You can reduce their file size and use the optimized result for websites, applications, sharing, and other destinations.",
  },
  {
    question: "Can I reduce an image to a specific file size?",
    answer:
      "Yes. When a target file size is required, you can specify a maximum size such as 50 KB, 100 KB, 500 KB, or another custom limit. The compressor will attempt to optimize the image to meet that requirement.",
  },
  {
    question: "Will compressing an image reduce its quality?",
    answer:
      "Image compression can involve a trade-off between file size and image quality. The goal is to reduce unnecessary file weight while keeping the result visually useful. The amount of quality reduction depends on the original image, format, dimensions, and compression settings.",
  },
  {
    question: "Can I compress an image without changing its dimensions?",
    answer:
      "Yes. If you only need to reduce the file size, you can keep the original image dimensions while optimizing the image data and output format.",
  },
  {
    question: "Is this image compressor free?",
    answer:
      "Yes. You can use the browser-based image compression tool without installing image-editing software. Upload an image, select your requirements, and download the optimized result.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "The compression workflow is designed to process images directly in your browser. This means the image can be optimized locally on your device instead of requiring an upload to a remote image-processing server.",
  },
  {
    question: "Why should I compress images for a website?",
    answer:
      "Large image files can add unnecessary weight to web pages. Compressing images can reduce the amount of data that needs to be transferred and can help make pages more efficient, especially for visitors using slower connections or mobile devices.",
  },
];

export function CompressFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="compress-faq"
      aria-labelledby="compress-faq-heading"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-4xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Frequently asked questions
          </span>

          <h2
            id="compress-faq-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Image compression questions answered
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Learn how to compress images, reduce file sizes, choose
            formats, and prepare images for websites and applications.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={
                  index !== faqs.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`compress-faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-slate-50 sm:px-6 sm:py-6"
                >
                  <span className="text-sm font-semibold leading-6 text-slate-950 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                      isOpen
                        ? "border-blue-200 bg-blue-50 text-blue-600"
                        : "border-slate-200 bg-white text-slate-500"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`compress-faq-answer-${index}`}
                  hidden={!isOpen}
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-sm leading-7 text-slate-600 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center sm:mt-12">
          <p className="text-sm text-slate-600">
            Ready to reduce your image file size?
          </p>

          <a
            href="#compress"
            className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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