import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Image Resizing & Compression",
  description:
    "Find answers to common questions about resizing images, reducing image size in KB, compressing JPG and PNG files, converting images to WebP, image dimensions, quality, privacy, and using Let's Resize It.",
  keywords: [
    "image resize FAQ",
    "image resizer FAQ",
    "how to resize an image",
    "how to reduce image size",
    "how to reduce image size in KB",
    "resize image to 100 KB",
    "resize image to 200 KB",
    "compress JPG",
    "compress PNG",
    "convert JPG to WebP",
    "resize JPG",
    "resize PNG",
    "resize WebP",
    "resize image without losing quality",
    "image dimensions",
    "image compression FAQ",
    "online image tools FAQ",
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Let's Resize It",
    description:
      "Answers to common questions about image resizing, compression, file sizes, dimensions, JPG, PNG, WebP, privacy, and online image tools.",
    url: "/faq",
    siteName: "Let's Resize It",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Frequently Asked Questions | Let's Resize It",
    description:
      "Learn how to resize, compress, and convert images with answers to common image-processing questions.",
  },
};

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const faqCategories: {
  id: string;
  label: string;
  description: string;
  faqs: FAQ[];
}[] = [
  {
    id: "general",
    label: "General",
    description:
      "Understand what Let's Resize It does and how the image tools work.",
    faqs: [
      {
        question: "What is Let's Resize It?",
        answer: (
          <>
            <p>
              Let&apos;s Resize It is an online image toolkit for
              common image-processing tasks such as resizing
              images, reducing file size, compressing images, and
              converting supported image formats.
            </p>

            <p>
              The goal is to make everyday image tasks easier
              without requiring complicated desktop image-editing
              software.
            </p>

            <p>
              You can start with the{" "}
              <Link
                href="/resize-image"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Resize Image tool
              </Link>{" "}
              or explore our dedicated image-size and format
              tools.
            </p>
          </>
        ),
      },
      {
        question: "Is Let's Resize It free to use?",
        answer: (
          <>
            <p>
              The image tools available on Let&apos;s Resize It
              are designed to be simple online utilities without
              requiring traditional image-editing software.
            </p>

            <p>
              Individual tools may have their own supported file
              types, limits, and processing behavior. Check the
              specific tool page for its current capabilities.
            </p>
          </>
        ),
      },
      {
        question: "Do I need to install software?",
        answer: (
          <>
            <p>
              No. Let&apos;s Resize It is designed to work
              directly in a modern web browser.
            </p>

            <p>
              That means you can use the tools from a computer,
              tablet, or compatible mobile device without
              installing a traditional image-editing application.
            </p>
          </>
        ),
      },
      {
        question: "Can I use Let's Resize It on my phone?",
        answer: (
          <>
            <p>
              Yes. The website is designed with responsive
              layouts so the tools can be used on supported
              smartphones and tablets as well as desktop
              computers.
            </p>

            <p>
              For example, you can use the{" "}
              <Link
                href="/resize-image"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                online image resizer
              </Link>{" "}
              when you need to change an image&apos;s dimensions
              directly from a mobile browser.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "resize",
    label: "Resize Images",
    description:
      "Questions about image dimensions, aspect ratios, pixels, and resizing.",
    faqs: [
      {
        question: "How do I resize an image online?",
        answer: (
          <>
            <p>
              Start by opening the{" "}
              <Link
                href="/resize-image"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Resize Image
              </Link>{" "}
              tool. Select your image, choose the dimensions or
              resizing option you need, and process the image.
            </p>

            <p>
              If you already know the exact dimensions you need,
              dedicated tools such as{" "}
              <Link
                href="/resize-image-to-200x200"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                200 × 200
              </Link>{" "}
              or{" "}
              <Link
                href="/resize-image-to-300x300"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                300 × 300
              </Link>{" "}
              can be useful for common square image requirements.
            </p>
          </>
        ),
      },
      {
        question: "What does image width and height mean?",
        answer: (
          <>
            <p>
              Image width and height are measured in pixels. For
              example, an image that is 1080 × 1080 pixels is
              1080 pixels wide and 1080 pixels tall.
            </p>

            <p>
              Changing these values changes the image&apos;s
              pixel dimensions. It does not necessarily mean that
              the resulting file will have a particular size in
              KB or MB.
            </p>
          </>
        ),
      },
      {
        question: "What is the difference between image dimensions and file size?",
        answer: (
          <>
            <p>
              Image dimensions describe the number of pixels in
              an image, while file size describes how much storage
              space the encoded image occupies.
            </p>

            <p>
              For example, two images can both be 1080 × 1080
              pixels while having very different file sizes.
              Format, image content, compression settings, and
              encoding all affect the final file size.
            </p>

            <p>
              This distinction is especially important when a
              website or application asks for both a specific
              dimension and a maximum file size.
            </p>
          </>
        ),
      },
      {
        question: "Can I resize an image to an exact pixel size?",
        answer: (
          <>
            <p>
              Yes, when the tool you are using supports the
              dimensions you need. Exact dimensions mean setting
              the image&apos;s width and height to specific pixel
              values.
            </p>

            <p>
              For common square requirements, you can use tools
              such as{" "}
              <Link
                href="/resize-image-to-1080x1080"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                resize image to 1080 × 1080
              </Link>
              .
            </p>
          </>
        ),
      },
      {
        question: "Will resizing an image stretch or distort it?",
        answer: (
          <>
            <p>
              It depends on how the width and height are changed.
              If both dimensions are changed independently to
              different proportions, the image can become
              distorted.
            </p>

            <p>
              When preserving the original aspect ratio is
              important, resize the image proportionally rather
              than forcing unrelated width and height values.
            </p>
          </>
        ),
      },
      {
        question: "What is aspect ratio?",
        answer: (
          <>
            <p>
              Aspect ratio describes the relationship between an
              image&apos;s width and height. A 1:1 image is square,
              while a 16:9 image is wider than it is tall.
            </p>

            <p>
              Preserving aspect ratio during resizing helps prevent
              people and objects in photographs from appearing
              stretched or compressed.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "file-size",
    label: "KB & File Size",
    description:
      "Answers about reducing images to specific file-size limits.",
    faqs: [
      {
        question: "How do I reduce an image size in KB?",
        answer: (
          <>
            <p>
              Reducing an image&apos;s file size can involve
              lowering its pixel dimensions, changing the
              compression level, changing the image format, or
              using a combination of these techniques.
            </p>

            <p>
              If you have a specific upload limit, use a
              target-size tool such as{" "}
              <Link
                href="/resize-image-to-100-kb"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                resize image to 100 KB
              </Link>{" "}
              or{" "}
              <Link
                href="/resize-image-to-200-kb"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                resize image to 200 KB
              </Link>
              .
            </p>
          </>
        ),
      },
      {
        question: "How do I resize an image to 50 KB?",
        answer: (
          <>
            <p>
              Use the{" "}
              <Link
                href="/resize-image-to-50-kb"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Resize Image to 50 KB
              </Link>{" "}
              tool when your upload requirement is a maximum
              file size around 50 KB.
            </p>

            <p>
              Keep in mind that reaching a small file-size target
              is a balance between dimensions, image format,
              compression, and visual quality.
            </p>
          </>
        ),
      },
      {
        question: "How do I resize an image to 100 KB?",
        answer: (
          <>
            <p>
              Open the{" "}
              <Link
                href="/resize-image-to-100-kb"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Resize Image to 100 KB
              </Link>{" "}
              page and use the tool to work toward the required
              file-size limit.
            </p>

            <p>
              A 100 KB requirement is a file-size constraint, not
              a pixel-dimension requirement. The resulting image
              may therefore have different dimensions from the
              original.
            </p>
          </>
        ),
      },
      {
        question: "How do I resize an image to 200 KB?",
        answer: (
          <>
            <p>
              Use our dedicated{" "}
              <Link
                href="/resize-image-to-200-kb"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Resize Image to 200 KB
              </Link>{" "}
              tool.
            </p>

            <p>
              This is useful when an application, form, website,
              or upload system specifies a maximum image size of
              200 KB.
            </p>
          </>
        ),
      },
      {
        question: "How do I resize an image to 500 KB?",
        answer: (
          <>
            <p>
              If your upload requirement is 500 KB, use the{" "}
              <Link
                href="/resize-image-to-500-kb"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Resize Image to 500 KB
              </Link>{" "}
              tool.
            </p>

            <p>
              A larger file-size allowance generally gives an
              image more room to retain detail, although the best
              result depends on the original image and its format.
            </p>
          </>
        ),
      },
      {
        question: "Can I make an image smaller without changing its dimensions?",
        answer: (
          <>
            <p>
              Often, yes. File size can be reduced through
              compression or by changing the image format while
              keeping the same pixel dimensions.
            </p>

            <p>
              However, there is no universal amount of compression
              that works for every image. Photographs, screenshots,
              graphics, and images containing text can respond
              differently to compression.
            </p>
          </>
        ),
      },
      {
        question: "Why can't every image be reduced to the exact same KB size?",
        answer: (
          <>
            <p>
              Image file size depends on more than width and
              height. The image&apos;s visual complexity, format,
              encoding settings, compression level, and pixel
              dimensions all affect the resulting file size.
            </p>

            <p>
              A photograph with lots of texture can compress
              differently from a simple graphic containing large
              areas of the same color.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "compression",
    label: "Compression",
    description:
      "Learn how image compression affects file size and quality.",
    faqs: [
      {
        question: "What is image compression?",
        answer: (
          <>
            <p>
              Image compression reduces the amount of data needed
              to store an image. The goal is to make the image
              file smaller while keeping an acceptable level of
              visual quality.
            </p>

            <p>
              Some compression methods are lossless, meaning the
              original image information can be preserved. Other
              methods are lossy and remove some information to
              achieve smaller files.
            </p>
          </>
        ),
      },
      {
        question: "Does compressing an image reduce quality?",
        answer: (
          <>
            <p>
              It can. Lossy compression can introduce visual
              changes, particularly when compression is aggressive.
            </p>

            <p>
              The practical goal is usually not to eliminate every
              possible difference, but to find a useful balance
              between file size and visual quality.
            </p>
          </>
        ),
      },
      {
        question: "How can I compress an image without losing quality?",
        answer: (
          <>
            <p>
              Completely avoiding quality changes while
              substantially reducing file size is not always
              possible, especially with lossy formats. However,
              you can often reduce file size while keeping the
              result visually very close to the original.
            </p>

            <p>
              Choosing an appropriate format and avoiding
              unnecessary pixel dimensions are two important parts
              of image optimization.
            </p>

            <p>
              For technical guidance on choosing between common
              image formats, see the{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                MDN image format guide
              </a>
              .
            </p>
          </>
        ),
      },
      {
        question: "What is the difference between resizing and compressing an image?",
        answer: (
          <>
            <p>
              Resizing changes the image&apos;s pixel dimensions.
              Compression changes how the image data is encoded
              and stored.
            </p>

            <p>
              They can be used separately or together. For
              example, reducing a very large photograph from
              4000 pixels wide to a smaller useful dimension and
              then compressing it can produce a much smaller file.
            </p>
          </>
        ),
      },
      {
        question: "Which is better for reducing file size: resizing or compression?",
        answer: (
          <>
            <p>
              Neither is universally better. The right choice
              depends on the problem you are trying to solve.
            </p>

            <p>
              If the image has far more pixels than you need,
              resizing can remove unnecessary data. If the
              dimensions are already appropriate, compression or
              a more efficient format may be the better approach.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "formats",
    label: "JPG, PNG & WebP",
    description:
      "Understand the differences between common image formats.",
    faqs: [
      {
        question: "What is the difference between JPG and PNG?",
        answer: (
          <>
            <p>
              JPG (JPEG) is a lossy image format commonly used for
              photographs. PNG uses lossless compression and is
              particularly useful when precise reproduction or
              transparency is important.
            </p>

            <p>
              For photographic images where a smaller file is
              important, JPG is often a practical choice. For
              screenshots, graphics, or images requiring
              transparency, PNG can be more appropriate.
            </p>

            <p>
              See the{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                MDN image format guide
              </a>{" "}
              for a detailed technical comparison.
            </p>
          </>
        ),
      },
      {
        question: "What is WebP?",
        answer: (
          <>
            <p>
              WebP is a modern image format designed to provide
              efficient image compression while supporting both
              lossy and lossless compression.
            </p>

            <p>
              WebP is widely supported by modern browsers and can
              often produce smaller files than comparable JPEG or
              PNG images.
            </p>

            <p>
              If you want to convert a JPG specifically to WebP,
              use our{" "}
              <Link
                href="/convert-jpg-to-webp"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                JPG to WebP converter
              </Link>
              .
            </p>
          </>
        ),
      },
      {
        question: "Is WebP smaller than JPG?",
        answer: (
          <>
            <p>
              WebP can often produce smaller files than JPEG at
              comparable visual quality, although the exact result
              depends on the image and encoding settings.
            </p>

            <p>
  MDN notes that lossy WebP images are typically
  smaller than JPEG images at visually similar
  compression levels.
</p>
          </>
        ),
      },
      {
        question: "Should I use JPG or WebP for a website?",
        answer: (
          <>
            <p>
              WebP is a strong choice for many modern websites
              because it can provide efficient compression with
              broad modern browser support.
            </p>

            <p>
              JPG remains useful when compatibility with systems
              that specifically expect JPEG is more important.
              The right format depends on your website, users,
              content, and compatibility requirements.
            </p>
          </>
        ),
      },
      {
        question: "Should I convert PNG to JPG?",
        answer: (
          <>
            <p>
              It depends on the image. JPG can be useful for
              photographs where a smaller file size is important.
              PNG is often preferable for screenshots, graphics,
              and images that require transparency or lossless
              reproduction.
            </p>

            <p>
              Converting a transparent PNG to JPG can remove its
              transparency because JPEG does not support an alpha
              channel.
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "privacy",
    label: "Privacy & Security",
    description:
      "Questions about image handling, privacy, and browser-based processing.",
    faqs: [
      {
        question: "Are my images uploaded to a server?",
        answer: (
          <>
            <p>
              Tools that process images locally in your browser do
              not need to send the image to a remote image-processing
              server for that operation.
            </p>

            <p>
              The exact processing behavior can vary by tool, so
              always check the individual tool&apos;s information
              and our{" "}
              <Link
                href="/privacy"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Privacy Policy
              </Link>{" "}
              for the current details.
            </p>
          </>
        ),
      },
      {
        question: "Can I use an online image resizer for private photos?",
        answer: (
          <>
            <p>
              Privacy depends on how the particular service
              processes uploaded images. Browser-based processing
              can be advantageous because the image can be
              processed on your device rather than being sent to a
              remote processing server.
            </p>

            <p>
              For sensitive images, review the tool&apos;s privacy
              information before processing them and avoid
              uploading material to services you do not trust.
            </p>
          </>
        ),
      },
      {
        question: "Does Let's Resize It store my images?",
        answer: (
          <>
            <p>
              Our tools are designed around browser-based image
              processing where supported. We do not want users to
              have to upload an image to a server simply to perform
              a basic local image operation.
            </p>

            <p>
              For the authoritative details about data handling,
              please read the{" "}
              <Link
                href="/privacy"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Let's Resize It Privacy Policy
              </Link>
              .
            </p>
          </>
        ),
      },
    ],
  },

  {
    id: "troubleshooting",
    label: "Troubleshooting",
    description:
      "Solutions for common image resizing and conversion problems.",
    faqs: [
      {
        question: "Why is my resized image blurry?",
        answer: (
          <>
            <p>
              An image can appear blurry when it is reduced
              significantly, enlarged beyond its original detail,
              or compressed too aggressively.
            </p>

            <p>
              If visual quality is important, avoid unnecessarily
              large reductions in dimensions and avoid excessive
              lossy compression.
            </p>
          </>
        ),
      },
      {
        question: "Why did my image become pixelated after resizing?",
        answer: (
          <>
            <p>
              Pixelation usually becomes noticeable when an image
              is enlarged beyond the amount of detail available in
              the original pixels.
            </p>

            <p>
              Starting with a higher-resolution source generally
              provides more flexibility when you need a larger
              output image.
            </p>
          </>
        ),
      },
      {
        question: "Why is my converted image larger than the original?",
        answer: (
          <>
            <p>
              Conversion does not automatically guarantee a
              smaller file. Different formats use different
              compression methods, and the output encoding
              settings can produce a larger or smaller file.
            </p>

            <p>
              If reducing file size is the primary goal, consider
              both the output format and the compression settings
              rather than assuming that changing the extension
              will make the file smaller.
            </p>
          </>
        ),
      },
      {
        question: "Why can't I upload my image?",
        answer: (
          <>
            <p>
              Check that the image format is supported by the
              particular tool and that the file is within its
              current size or dimension limits.
            </p>

            <p>
              If the problem continues, try opening the image
              locally first to confirm that the source file itself
              is valid, or save/export it again from your device
              before trying the tool.
            </p>
          </>
        ),
      },
      {
        question: "Why does my image look different after converting it?",
        answer: (
          <>
            <p>
              Different image formats use different encoding and
              compression methods. Converting between formats,
              particularly when using lossy compression, can
              introduce visible differences.
            </p>

            <p>
              For photographs, moderate lossy compression may be
              difficult to notice, while screenshots, text-heavy
              graphics, and sharp illustrations can reveal
              compression artifacts more easily.
            </p>
          </>
        ),
      },
    ],
  },
];

const quickLinks = [
  {
    title: "Resize Image",
    description: "Change image dimensions online.",
    href: "/resize-image",
  },
  {
    title: "Resize to 100 KB",
    description: "Reduce an image toward a 100 KB target.",
    href: "/resize-image-to-100-kb",
  },
  {
    title: "Resize to 200 KB",
    description: "Prepare an image for a 200 KB limit.",
    href: "/resize-image-to-200-kb",
  },
  {
    title: "Resize to 1080 × 1080",
    description: "Create a square 1080 pixel image.",
    href: "/resize-image-to-1080x1080",
  },
  {
    title: "Resize JPG",
    description: "Resize JPG images quickly.",
    href: "/resize-jpg",
  },
  {
    title: "Convert JPG to WebP",
    description: "Convert JPG images to WebP.",
    href: "/convert-jpg-to-webp",
  },
];

export default function FAQPage() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://letsresizeit.com";

  const allFAQs = faqCategories.flatMap(
    (category) => category.faqs
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/faq#webpage`,
        url: `${baseUrl}/faq`,
        name: "Frequently Asked Questions | Let's Resize It",
        description:
          "Answers to common questions about image resizing, compression, file sizes, dimensions, JPG, PNG, WebP, privacy, and online image tools.",
        isPartOf: {
          "@type": "WebSite",
          name: "Let's Resize It",
          url: baseUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Frequently Asked Questions",
            item: `${baseUrl}/faq`,
          },
        ],
      },
      {
        "@type": "Organization",
        name: "Let's Resize It",
        url: baseUrl,
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-slate-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-blue-600"
                  aria-hidden="true"
                />
                Help Center
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Frequently Asked{" "}
                <span className="text-blue-600">
                  Questions
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Everything you need to know about resizing,
                compressing, and converting images online —
                including image dimensions, KB limits, JPG, PNG,
                WebP, quality, privacy, and common troubleshooting
                questions.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/resize-image"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-[0_5px_18px_rgba(37,99,235,0.22)] transition-all hover:bg-blue-700 hover:shadow-[0_8px_24px_rgba(37,99,235,0.28)] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Resize an Image
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 10h11" />
                    <path d="m11 6 4 4-4 4" />
                  </svg>
                </Link>

                <a
                  href="#faq"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-950"
                >
                  Browse FAQs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK ANSWERS / NAV
        ====================================================== */}
        <section className="border-b border-slate-100 bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {faqCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_10px_30px_rgba(15,23,42,0.07)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-950">
                      {category.label}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition group-hover:bg-blue-50 group-hover:text-blue-600">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m5 8 5 5 5-5" />
                      </svg>
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {category.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ CONTENT
        ====================================================== */}
        <section
          id="faq"
          className="bg-slate-50/60"
        >
          <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="space-y-16">
              {faqCategories.map((category) => (
                <section
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-28"
                >
                  <div className="mb-7">
                    <div className="flex items-center gap-3">
                      <span className="h-8 w-1 rounded-full bg-blue-600" />

                      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                        {category.label}
                      </h2>
                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {category.faqs.map((faq) => (
                      <details
                        key={faq.question}
                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all open:border-blue-100 open:shadow-[0_10px_35px_rgba(15,23,42,0.06)]"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-left sm:px-6">
                          <span className="text-sm font-semibold leading-6 text-slate-950 sm:text-base">
                            {faq.question}
                          </span>

                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-all group-open:bg-blue-50 group-open:text-blue-600">
                            <svg
                              className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="m5 7.5 5 5 5-5" />
                            </svg>
                          </span>
                        </summary>

                        <div className="border-t border-slate-100 px-5 pb-6 pt-5 text-sm leading-7 text-slate-600 sm:px-6">
                          <div className="space-y-4">
                            {faq.answer}
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            POPULAR TOOLS
        ====================================================== */}
        <section className="border-t border-slate-100 bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Need a tool?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Go straight to the tool you need
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                Skip the searching. Choose a dedicated image tool
                for your specific requirement.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {quickLinks.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_35px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-bold text-slate-950">
                        {tool.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {tool.description}
                      </p>
                    </div>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 10h11" />
                        <path d="m11 6 4 4-4 4" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            KNOWLEDGE / EXTERNAL REFERENCES
        ====================================================== */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Learn more
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Understand image formats and optimization
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  Image resizing and compression are closely tied
                  to the format you choose, the number of pixels
                  you deliver, and the amount of compression
                  applied. These external technical references are
                  useful when you want to understand the underlying
                  concepts in more depth.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 10v6" />
                      <path d="M12 7h.01" />
                    </svg>
                  </span>

                  <span>
                    <span className="block text-sm font-bold text-slate-950">
                      MDN — Image file type and format guide
                    </span>

                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                      A technical reference covering JPEG, PNG,
                      WebP, AVIF, browser support, compression,
                      transparency, and choosing image formats.
                    </span>
                  </span>

                  <svg
                    className="ml-auto mt-1 h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-blue-600"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 4h9v9" />
                    <path d="m16 4-9 9" />
                  </svg>
                </a>

                <a
                  href="https://developers.google.com/search/docs/appearance/structured-data"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
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
                      <circle cx="12" cy="12" r="9" />
                      <path d="M9 9h6v6H9z" />
                    </svg>
                  </span>

                  <span>
                    <span className="block text-sm font-bold text-slate-950">
                      Google Search Central — Structured Data
                    </span>

                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                      Official documentation explaining how
                      structured data helps search engines
                      understand webpage content.
                    </span>
                  </span>

                  <svg
                    className="ml-auto mt-1 h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-blue-600"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 4h9v9" />
                    <path d="m16 4-9 9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-blue-50 px-6 py-12 text-center sm:px-10 lg:px-14">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative mx-auto max-w-2xl">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
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
                    <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                    <path d="M16 3h3a2 2 0 0 1 2 2v3" />
                    <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
                    <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                    <path d="M8 8l4 4 4-4" />
                    <path d="M12 12v6" />
                  </svg>
                </span>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Still need to resize an image?
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                  Choose the image tool that matches your
                  requirement and get started.
                </p>

                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/resize-image"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                  >
                    Resize an Image
                  </Link>

                  <Link
                    href="/"
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                  >
                    Explore Image Tools
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}