import type { Metadata } from "next";
import ConvertJpgToWebpClient from "./ConvertJpgToWebpClient";

export const metadata: Metadata = {
  title: "Convert JPG to WebP Online Free | JPG to WebP Converter",
  description:
    "Convert JPG and JPEG images to WebP online for free. Fast browser-based JPG to WebP converter with quality control, instant preview, and easy download.",
  keywords: [
    "convert jpg to webp",
    "jpg to webp",
    "jpeg to webp",
    "jpg to webp converter",
    "convert jpeg to webp",
    "jpg webp converter",
    "image to webp",
    "convert image to webp",
    "jpg to webp online",
    "free jpg to webp converter",
  ],
  alternates: {
    canonical: "https://letsresizeit.com/convert-jpg-to-webp",
  },
  openGraph: {
    title: "Convert JPG to WebP Online Free",
    description:
      "Convert JPG and JPEG images to WebP online for free with Lets Resize It.",
    url: "https://letsresizeit.com/convert-jpg-to-webp",
    siteName: "Lets Resize It",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert JPG to WebP Online Free",
    description:
      "Convert JPG and JPEG images to WebP directly in your browser.",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "JPG to WebP Converter",
      url: "https://letsresizeit.com/convert-jpg-to-webp",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      description:
        "Free online JPG and JPEG to WebP converter that works directly in the browser.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Convert JPG to WebP",
        "Convert JPEG to WebP",
        "Adjust image quality",
        "Preview converted images",
        "Download WebP images",
        "Browser-based image conversion",
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Convert JPG to WebP",
      description:
        "Convert a JPG or JPEG image to WebP online using Lets Resize It.",
      totalTime: "PT1M",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Upload a JPG image",
          text: "Upload or drag and drop your JPG or JPEG image into the converter.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Choose the quality",
          text: "Adjust the WebP output quality if required.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Convert to WebP",
          text: "Start the conversion to create a WebP version of your image.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Download the WebP image",
          text: "Download the converted WebP file to your device.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
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
          name: "Convert JPG to WebP",
          item: "https://letsresizeit.com/convert-jpg-to-webp",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I convert JPG to WebP?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Upload your JPG or JPEG image to the Lets Resize It JPG to WebP converter, adjust the quality if needed, convert the image, and download the WebP file.",
          },
        },
        {
          "@type": "Question",
          name: "Can I convert JPEG to WebP?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. JPG and JPEG images can be converted to WebP using the online converter.",
          },
        },
        {
          "@type": "Question",
          name: "Is the JPG to WebP converter free?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Lets Resize It provides this JPG to WebP conversion tool free online.",
          },
        },
        {
          "@type": "Question",
          name: "Does converting JPG to WebP resize the image?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The conversion changes the image format to WebP. The image dimensions are not intentionally changed by the conversion.",
          },
        },
        {
          "@type": "Question",
          name: "Can I reduce JPG file size by converting it to WebP?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "WebP can provide efficient image compression compared with traditional formats in many cases. The resulting file size depends on the original image and selected quality.",
          },
        },
      ],
    },
  ],
};

export default function ConvertJpgToWebpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <ConvertJpgToWebpClient />
    </>
  );
}