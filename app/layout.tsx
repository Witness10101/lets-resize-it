import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/*
 * Keep the production domain in one place.
 *
 * For local development:
 * http://localhost:3000
 *
 * For production:
 * https://letsresizeit.com
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://letsresizeit.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Let's Resize It — Free Image Resizer & Compressor Online",
    template: "%s | Let's Resize It",
  },

  description:
    "Resize, compress, and convert images online for free. Set custom dimensions, reduce image file size, and convert JPG, PNG, and WebP images directly in your browser.",

  applicationName: "Let's Resize It",

  generator: "Next.js",

  keywords: [
    "image resizer",
    "resize image",
    "resize image online",
    "free image resizer",
    "image compressor",
    "compress image",
    "compress image online",
    "reduce image size",
    "reduce image file size",
    "resize JPG",
    "resize PNG",
    "resize WebP",
    "convert image",
    "image size reducer",
  ],

  authors: [
    {
      name: "Let's Resize It",
    },
  ],

  creator: "Let's Resize It",

  publisher: "Let's Resize It",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",

    siteName: "Let's Resize It",

    title:
      "Let's Resize It — Free Image Resizer & Compressor Online",

    description:
      "Resize, compress, and convert images online for free. Set custom dimensions and file-size limits without uploading your images to a server.",

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt:
          "Let's Resize It — Free Image Resizer and Image Compressor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Let's Resize It — Free Image Resizer & Compressor",

    description:
      "Resize, compress, and convert images online for free. Process your images directly in your browser.",

    images: ["/twitter-image"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-slate-950">
        {children}
      </body>
    </html>
  );
}