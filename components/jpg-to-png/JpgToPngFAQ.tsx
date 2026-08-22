"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I convert JPG to PNG?",
    answer:
      "Upload your JPG or JPEG image using the converter above. The image will be converted to PNG directly in your browser. Once the conversion is complete, you can preview the PNG file and download it to your device.",
  },
  {
    question: "Can I convert JPEG to PNG too?",
    answer:
      "Yes. JPG and JPEG are both supported. You can upload either a .jpg or .jpeg image and convert it to PNG using the same online JPG to PNG converter.",
  },
  {
    question: "Is this JPG to PNG converter free?",
    answer:
      "Yes. You can use the JPG to PNG converter without paying for the conversion. There is no need to install desktop software or create an account just to convert an image.",
  },
  {
    question: "Will converting JPG to PNG improve image quality?",
    answer:
      "Converting a JPG image to PNG does not restore image quality that was already lost through JPEG compression. PNG is a lossless format, so saving the converted image as PNG can help avoid additional lossy JPEG compression when the image is edited or saved again.",
  },
  {
    question: "Can I convert JPG to PNG without losing quality?",
    answer:
      "The conversion itself cannot recover details that were already lost in the original JPG. However, PNG uses lossless compression, so the converted PNG can preserve the pixels produced during conversion without applying additional JPEG-style lossy compression.",
  },
  {
    question: "Can I convert JPG to PNG with a transparent background?",
    answer:
      "Changing a JPG into PNG does not automatically create transparency. JPG images do not normally contain an alpha transparency channel. Converting the file to PNG creates a PNG image, but the existing background remains unless you use an image-editing or background-removal tool.",
  },
  {
    question: "Does the converter upload my images?",
    answer:
      "The conversion is designed to happen directly in your browser. Your image does not need to be uploaded to a remote conversion server, which helps keep the conversion process private and convenient.",
  },
  {
    question: "Can I convert JPG to PNG on my phone?",
    answer:
      "Yes. The converter works in modern mobile browsers, so you can select a JPG or JPEG image from your phone and convert it to PNG without installing a separate image conversion application.",
  },
  {
    question: "What is the difference between JPG and PNG?",
    answer:
      "JPG is a lossy image format that is commonly used for photographs because it can provide relatively small file sizes. PNG uses lossless compression and supports transparency, making it useful for graphics, logos, screenshots, illustrations, and other images where preserving detail or transparency is important.",
  },
  {
    question: "Why would I need to convert JPG to PNG?",
    answer:
      "You may need a PNG file when a website, application, design workflow, or other service specifically requires PNG format. PNG can also be useful for graphics and images where lossless compression or transparency is important.",
  },
];

export function JpgToPngFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      aria-labelledby="jpg-to-png-faq-heading"
      className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-4xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Frequently asked questions
          </span>

          <h2
            id="jpg-to-png-faq-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl"
          >
            JPG to PNG converter FAQ
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Find answers to common questions about converting
            JPG and JPEG images to PNG format.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all ${
                  isOpen
                    ? "border-blue-200 shadow-sm"
                    : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                  aria-controls={`jpg-to-png-faq-answer-${index}`}
                >
                  <span className="text-sm font-semibold leading-6 text-slate-950 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600"
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

                {isOpen && (
                  <div
                    id={`jpg-to-png-faq-answer-${index}`}
                    className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6"
                  >
                    <p className="text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm sm:p-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <svg
              className="h-6 w-6"
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
            Ready to convert your image?
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">
            Convert your JPG or JPEG image to PNG in a few
            simple steps.
          </p>

          <a
            href="#jpg-to-png-tool"
            className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Convert JPG to PNG
            <svg
              className="h-4 w-4"
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

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}