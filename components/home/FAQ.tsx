"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is an image resizer?",
    answer:
      "An image resizer changes the dimensions of an image, such as its width and height. Let&apos;s Resize It lets you set exact dimensions or keep the original proportions while creating a new optimized image.",
  },
  {
    question: "Can I resize an image to an exact width and height?",
    answer:
      "Yes. You can enter a custom width and height in pixels. Let&apos;s Resize It will create an output image using the dimensions you specify.",
  },
  {
    question: "Can I reduce an image to a specific file size, such as 100 KB?",
    answer:
      "Yes. You can choose a file-size limit such as 50 KB, 100 KB, or 500 KB, or enter your own custom limit. The optimizer adjusts the image to try to meet the requested size while maintaining as much quality as possible.",
  },
  {
    question: "Can I convert JPG, PNG, and WebP images?",
    answer:
      "Yes. You can choose JPG, PNG, or WebP as your output format. This makes it easy to prepare an image for websites, applications, forms, and other platforms that require a particular format.",
  },
  {
    question: "Does resizing an image reduce its quality?",
    answer:
      "Resizing and compression can affect image quality, especially when an image is made significantly smaller or when a very small file-size limit is required. Let&apos;s Resize It is designed to balance file size and visual quality based on the requirements you provide.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "No. Image processing is designed to happen directly in your browser on your device. Your image does not need to be uploaded to a server for the resizing and optimization process.",
  },
  {
    question: "What image formats are supported?",
    answer:
      "The tool currently supports JPG, PNG, and WebP images. You can also select one of these formats as your desired output format.",
  },
  {
    question: "Do I need to install any software?",
    answer:
      "No. Let&apos;s Resize It is a browser-based image tool. You can use it directly from a modern web browser without installing desktop software or browser extensions.",
  },
  {
    question: "Is Let&apos;s Resize It free to use?",
    answer:
      "The core image resizing and optimization workflow is designed to be simple and accessible without requiring an account. You can upload an image, specify your requirements, process it, and download the result directly from your browser.",
  },
  {
    question: "Can I use Let&apos;s Resize It on my phone?",
    answer:
      "Yes. The website is designed to work across modern desktop and mobile browsers. You can upload images from your phone, set your requirements, and download the optimized result.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-4xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Frequently asked questions
          </span>

          <h2
            id="faq-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl"
          >
            Questions about resizing and optimizing images?
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Here are answers to some of the most common questions
            about resizing, compression, file sizes, formats, and
            privacy.
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
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-slate-50 focus:outline-none focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 sm:px-6 sm:py-6"
                >
                  <span className="text-sm font-semibold leading-6 text-slate-950 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                      isOpen
                        ? "border-blue-200 bg-blue-50 text-blue-600"
                        : "border-slate-200 bg-white text-slate-500"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={!isOpen}
                  className="px-5 pb-5 sm:px-6 sm:pb-6"
                >
                  <p className="max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center sm:mt-12">
          <p className="text-sm text-slate-600">
            Ready to resize your image?
          </p>

          <a
            href="#resize"
            className="mt-4 inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Start resizing
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
    </section>
  );
}