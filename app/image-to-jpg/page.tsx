import type { Metadata } from "next";

import { ImageToJpgHero } from "@/components/image-to-jpg/ImageToJpgHero";
import { Header } from "@/components/layout/Header";
import { ImageToJpgHowItWorks } from "@/components/image-to-jpg/ImageToJpgHowItWorks";
import { ImageToJpgTool } from "./ImageToJpgTool";
import { ImageToJpgUseCases } from "./ImageToJpgUseCases";
import { ImageToJpgBenefits } from "./build ImageToJpgBenefits";
import { ImageToJpgFAQ } from "./ImageToJpgFAQ";
import { Footer } from "@/components/layout/Footer";
// import { ImageToJpgTool } from "@/components/image-to-jpg/ImageToJpgTool";
// import { ImageToJpgUseCases } from "@/components/image-to-jpg/ImageToJpgUseCases";
// import { ImageToJpgHowItWorks } from "@/components/image-to-jpg/ImageToJpgHowItWorks";
// import { ImageToJpgBenefits } from "@/components/image-to-jpg/ImageToJpgBenefits";
// import { ImageToJpgFAQ } from "@/components/image-to-jpg/ImageToJpgFAQ";

export const metadata: Metadata = {
  title: "Image to JPG Converter – Convert PNG, WebP & More to JPG",
  description:
    "Convert PNG, WebP, GIF, BMP, and other images to JPG online for free. Fast, simple, and private image conversion directly in your browser.",
  keywords: [
    "image to jpg",
    "image to jpg converter",
    "convert image to jpg",
    "png to jpg",
    "webp to jpg",
    "gif to jpg",
    "bmp to jpg",
    "jpeg converter",
    "jpg converter",
    "online image converter",
  ],
  alternates: {
    canonical: "/image-to-jpg",
  },
  openGraph: {
    title: "Image to JPG Converter – Convert Images to JPG",
    description:
      "Convert PNG, WebP, GIF, BMP, and other images to JPG online for free. Process images directly in your browser.",
    type: "website",
    url: "/image-to-jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image to JPG Converter",
    description:
      "Convert PNG, WebP, GIF, BMP, and other images to JPG online for free.",
  },
};

export default function ImageToJpgPage() {
  return (
    
    <main>
        <Header />
      <ImageToJpgHero />

      {/* ImageToJpgTool will go here */}
      <ImageToJpgTool />

      {/* ImageToJpgUseCases will go here */}
      <ImageToJpgUseCases />

      {/* ImageToJpgHowItWorks will go here */}

      <ImageToJpgHowItWorks />

      {/* ImageToJpgBenefits will go here */}
      <ImageToJpgBenefits />

      {/* ImageToJpgFAQ will go here */}
      <ImageToJpgFAQ />

     <Footer /> 

    </main>
  );
}