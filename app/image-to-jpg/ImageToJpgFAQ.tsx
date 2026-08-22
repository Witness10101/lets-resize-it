"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I convert an image to JPG?",
    answer:
      "Upload your image using the Image to JPG converter, choose your conversion settings if available, and start the conversion. Your converted JPG image can then be downloaded directly to your device.",
  },
  {
    question: "Can I convert PNG to JPG?",
    answer:
      "Yes. You can convert PNG images to JPG directly in your browser. Upload your PNG file, convert it to JPG, and download the resulting JPEG image.",
  },
  {
    question: "Can I convert WebP to JPG?",
    answer:
      "Yes. WebP images can be converted to JPG using this tool. This can be useful when a website, application, document, or other service requires a JPEG or JPG file instead of WebP.",
  },
  {
    question: "Is JPG the same as JPEG?",
    answer:
      "JPG and JPEG refer to the same image format. The difference is mainly the file extension: older systems commonly used .jpg because of historical filename extension limitations, while .jpeg is also a valid extension for the same format.",
  },
  {
    question: "Will converting an image to JPG reduce the file size?",
    answer:
      "It can. JPG uses lossy compression, which can produce significantly smaller files than some other image formats. The final file size depends on the original image, its dimensions, image content, and the compression quality used during conversion.",
  },
  {
    question: "Will my image quality change after converting to JPG?",
    answer:
      "JPG uses lossy compression, so some image information may be removed during conversion. For many photographs and web images, the visual difference can be very small when an appropriate quality level is used.",
  },
  {
    question: "Can I convert an image to JPG without installing software?",
    answer:
      "Yes. You can use the converter directly from a modern web browser without installing a desktop image conversion application. Select your image, convert it, and download the JPG file.",
  },
  {
    question: "Is the image uploaded to a server?",
    answer:
      "The Image to JPG conversion is designed to run directly in your browser. This means the conversion can be performed locally on your device instead of requiring your image to be uploaded to a server.",
  },
  {
    question: "Can I convert images on my phone?",
    answer:
      "Yes. The converter is designed to work in modern mobile browsers as well as desktop browsers. You can select an image from your phone, convert it to JPG, and save the converted file.",
  },
];

export function ImageToJpgFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      aria-labelledby="image-to-jpg-faq-heading"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-4xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            Image to JPG FAQ
          </span>

          <h2
            id="image-to-jpg-faq-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl"
          >
            Frequently asked questions about converting images to JPG
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            Everything you need to know about converting PNG, WebP,
            and other image files to JPG.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
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
                  aria-controls={`image-to-jpg-faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-slate-50 sm:px-6"
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
                  id={`image-to-jpg-faq-answer-${index}`}
                  hidden={!isOpen}
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50/60 p-6 text-center sm:p-8">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
          </div>

          <h3 className="mt-4 text-lg font-bold text-slate-950 sm:text-xl">
            Ready to convert your image to JPG?
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">
            Convert your image to JPG directly in your browser and
            download the result in just a few steps.
          </p>

          <a
            href="#image-to-jpg-tool"
            className="mt-5 inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Convert to JPG
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