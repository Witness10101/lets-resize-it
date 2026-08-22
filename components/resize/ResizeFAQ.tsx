"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How can I resize an image online?",
    answer:
      "Upload your JPG, PNG, or WebP image to the resize tool, choose the dimensions or file size you need, select an output format if required, and click the resize button. The optimized image is then prepared for download directly in your browser.",
  },
  {
    question: "Can I resize an image to a specific width and height?",
    answer:
      "Yes. You can enter custom width and height values in pixels. For example, you can resize an image to 200 × 200 pixels, 600 × 400 pixels, or another specific dimension depending on your requirement.",
  },
  {
    question: "Can I reduce an image to a specific file size such as 100 KB?",
    answer:
      "Yes. You can set a maximum file-size requirement such as 50 KB, 100 KB, 500 KB, or enter a custom limit. The image optimizer will adjust the image until it meets the requested file-size target whenever the target is technically achievable.",
  },
  {
    question: "Can I resize an image without changing its format?",
    answer:
      "Yes. You can keep the original image format when resizing. The tool also gives you the option to convert the result to JPG, PNG, or WebP if you need a different format.",
  },
  {
    question: "Can I convert JPG to WebP while resizing?",
    answer:
      "Yes. Select WebP as the output format and set your desired dimensions or file-size requirement. The resulting image will be generated as a WebP file.",
  },
  {
    question: "Can I resize PNG images?",
    answer:
      "Yes. PNG images are supported. You can change their dimensions, optimize their file size, or choose another supported output format.",
  },
  {
    question: "Can I resize WebP images?",
    answer:
      "Yes. WebP images are supported as input. You can resize them and choose whether to keep WebP or convert the result to another supported image format.",
  },
  {
    question: "Will resizing an image reduce its quality?",
    answer:
      "Changing image dimensions or reducing file size can affect image quality depending on the original image and the requested output. The tool attempts to balance image quality and file size while meeting your selected requirements.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "The image processing workflow is designed to run directly in your browser. Your selected image does not need to be uploaded to a remote server for the resizing operation.",
  },
  {
    question: "What image formats are supported?",
    answer:
      "The resize tool supports JPG, PNG, and WebP images. You can also choose JPG, PNG, or WebP as the output format.",
  },
  {
    question: "Is there a maximum image size I can upload?",
    answer:
      "The current image upload tool accepts images up to 25 MB. JPG, PNG, and WebP files are supported.",
  },
  {
    question: "Can I resize an image for an online form or application?",
    answer:
      "Yes. You can use custom dimensions and file-size limits to prepare images for websites, online forms, applications, profile pictures, document uploads, and other platforms that specify image requirements.",
  },
];

export function ResizeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      aria-labelledby="resize-faq-heading"
      className="border-t border-slate-100 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-4xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2
            id="resize-faq-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Image resizing questions answered
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Find answers about resizing images, reducing file
            size, changing dimensions, converting formats, and
            processing images online.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-blue-200 bg-blue-50/40"
                    : "border-slate-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`resize-faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset sm:px-6"
                >
                  <span
  id={`resize-faq-question-${index}`}
  className={`text-sm font-semibold leading-6 sm:text-base ${
    isOpen
      ? "text-blue-700"
      : "text-slate-950"
  }`}
>
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                      isOpen
                        ? "border-blue-200 bg-blue-100 text-blue-600"
                        : "border-slate-200 bg-slate-50 text-slate-500"
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
                  id={`resize-faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`resize-faq-question-${index}`}
                  className={`grid transition-[grid-template-rows] duration-200 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                      <div className="h-px bg-blue-100" />

                      <p className="pt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional search-intent block */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                />
                <path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-.9.8-1.7 1.2-1.7 2.7" />
                <path d="M12 17h.01" />
              </svg>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-950 sm:text-lg">
                Need a different image requirement?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Image requirements can vary between websites,
                applications, forms, and platforms. You can
                combine custom dimensions, a maximum file size,
                and an output format to create an image that fits
                your specific requirement.
              </p>

              <a
                href="#resize-tool"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Resize your image

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
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
            Ready to resize your image?
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Set your requirements and get your optimized image
            in just a few steps.
          </p>

          <a
            href="#resize-tool"
            className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Resize an image

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