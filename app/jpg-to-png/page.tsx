import type { Metadata } from "next";

import { JpgToPngHero } from "@/components/jpg-to-png/JpgToPngHero";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JpgToPngTool } from "@/components/jpg-to-png/JpgToPngTool";
import { JpgToPngUseCases } from "@/components/jpg-to-png/JpgToPngUseCases";
import { JpgToPngHowItWorks } from "@/components/jpg-to-png/JpgToPngHowItWorks";
import { JpgToPngBenefits } from "@/components/jpg-to-png/JpgToPngBenefits";

export const metadata: Metadata = {
  title: "JPG to PNG Converter – Convert JPG to PNG Online Free",
  description:
    "Convert JPG and JPEG images to PNG online for free. Use our fast JPG to PNG converter to create PNG images directly in your browser with no software installation required.",
  alternates: {
    canonical: "/jpg-to-png",
  },
  openGraph: {
    title: "JPG to PNG Converter – Convert JPG to PNG Online Free",
    description:
      "Convert JPG and JPEG images to PNG online for free. Fast, simple, and browser-based.",
    url: "/jpg-to-png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to PNG Converter – Convert JPG to PNG Online Free",
    description:
      "Convert JPG and JPEG images to PNG online for free directly in your browser.",
  },
};

export default function JpgToPngPage() {
  return (
    <main>
     <Header />
      <JpgToPngHero />
      <JpgToPngTool />
      <JpgToPngUseCases />
      <JpgToPngHowItWorks />
      <JpgToPngBenefits />

      <Footer />
    </main>
  );
}