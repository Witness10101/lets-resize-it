import type { Metadata } from "next";
import ResizeImageTo1080x1080Client from "./ResizeImageTo1080x1080Client";

const pageUrl = "https://letsresizeit.com/resize-image-to-1080x1080";

export const metadata: Metadata = {
  title: "Resize Image to 1080x1080 Online Free | Lets Resize It",
  description:
    "Resize an image to exactly 1080x1080 pixels online for free. Create square JPG, PNG, or WebP images for Instagram, social media, websites, profiles, and more.",
  keywords: [
    "resize image to 1080x1080",
    "resize image to 1080 x 1080",
    "1080x1080 image resizer",
    "1080x1080 photo resizer",
    "resize photo to 1080x1080",
    "make image 1080x1080",
    "make photo 1080x1080",
    "image resizer 1080x1080",
    "resize JPG to 1080x1080",
    "resize PNG to 1080x1080",
    "resize WebP to 1080x1080",
    "1080x1080 pixel image",
    "square image resizer",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Resize Image to 1080x1080 Online Free",
    description:
      "Resize any supported image to exactly 1080x1080 pixels. Free, fast, and easy to use.",
    url: pageUrl,
    siteName: "Lets Resize It",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resize Image to 1080x1080 Online Free",
    description:
      "Create an exact 1080x1080 pixel image online with Lets Resize It.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${pageUrl}#webapp`,
      name: "Resize Image to 1080x1080",
      url: pageUrl,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript",
      description:
        "Free online image resizer for creating exactly 1080x1080 pixel images.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Resize images to exactly 1080x1080 pixels",
        "JPG image resizing",
        "PNG image resizing",
        "WebP image resizing",
        "Square 1:1 image creation",
        "Free online image resizing",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Resize Image to 1080x1080 Online Free",
      description:
        "Resize images to exactly 1080x1080 pixels online for free.",
      isPartOf: {
        "@type": "WebSite",
        name: "Lets Resize It",
        url: "https://letsresizeit.com/",
      },
      about: {
        "@type": "Thing",
        name: "1080x1080 image resizing",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://letsresizeit.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Resize Image",
          item: "https://letsresizeit.com/resize-image",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Resize Image to 1080x1080",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I resize an image to 1080x1080?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Upload your image to Lets Resize It, process it using the 1080x1080 image resizer, and download the resulting image with exact 1080x1080 pixel dimensions.",
          },
        },
        {
          "@type": "Question",
          name: "Can I resize a JPG to 1080x1080?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. You can upload a JPG image and resize it to exactly 1080x1080 pixels.",
          },
        },
        {
          "@type": "Question",
          name: "Can I resize a PNG to 1080x1080?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. PNG images can be resized to exactly 1080x1080 pixels.",
          },
        },
        {
          "@type": "Question",
          name: "Can I resize a WebP image to 1080x1080?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. WebP images can be resized to exactly 1080x1080 pixels.",
          },
        },
        {
          "@type": "Question",
          name: "Is 1080x1080 a square image?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. A 1080x1080 image has equal width and height, giving it a 1:1 square aspect ratio.",
          },
        },
        {
          "@type": "Question",
          name: "Is the 1080x1080 image resizer free?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Lets Resize It provides the 1080x1080 image resizing tool free online.",
          },
        },
      ],
    },
  ],
};

export default function ResizeImageTo1080x1080Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <ResizeImageTo1080x1080Client />
    </>
  );
}