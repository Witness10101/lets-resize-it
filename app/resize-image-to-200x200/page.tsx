"use client";

import {
  ChangeEvent,
  DragEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { resizeImage } from "@/lib/image/resize";

type OutputFormat = "original" | "jpeg" | "png" | "webp";

type SupportedMimeType =
  | "image/jpeg"
  | "image/png"
  | "image/webp";

interface ResultData {
  blob: Blob;
  url: string;
  width: number;
  height: number;
  originalSize: number;
  outputSize: number;
  format: string;
  fileName: string;
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function getExtension(
  format: OutputFormat,
  originalType: string
) {
  if (format === "jpeg") return "jpg";
  if (format === "png") return "png";
  if (format === "webp") return "webp";

  if (originalType === "image/png") return "png";
  if (originalType === "image/webp") return "webp";

  return "jpg";
}

function getMimeType(
  format: OutputFormat,
  originalType: string
): SupportedMimeType | undefined {
  if (format === "jpeg") return "image/jpeg";
  if (format === "png") return "image/png";
  if (format === "webp") return "image/webp";

  if (
    originalType === "image/jpeg" ||
    originalType === "image/png" ||
    originalType === "image/webp"
  ) {
    return originalType;
  }

  return "image/jpeg";
}

export default function ResizeImageTo200x200Client() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<ResultData | null>(null);

  const [format, setFormat] =
    useState<OutputFormat>("original");

  const [quality, setQuality] = useState(0.9);

  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title =
      "Resize Image to 200x200 Online Free | Lets Resize It";

    const description =
      "Resize an image to exactly 200x200 pixels online for free. Create 200x200 JPG, PNG, or WebP images while keeping your files private and easy to download.";

    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href =
      "https://letsresizeit.com/resize-image-to-200x200";

    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

      if (result?.url) {
        URL.revokeObjectURL(result.url);
      }
    };
  }, [previewUrl, result?.url]);

  const handleFile = (selectedFile: File | undefined) => {
    if (!selectedFile) return;

    setError("");
    setResult(null);

    if (!selectedFile.type.startsWith("image/")) {
      setFile(null);

      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

      setPreviewUrl(null);

      setError(
        "Please choose a JPG, PNG, WebP, or another supported image file."
      );

      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const url = URL.createObjectURL(selectedFile);

    setFile(selectedFile);
    setPreviewUrl(url);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    handleFile(event.target.files?.[0]);
  };

  const handleDrop = (
    event: DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    setIsDragging(false);

    handleFile(event.dataTransfer.files?.[0]);
  };

  const processImage = async () => {
    if (!file) {
      setError("Please select an image first.");
      return;
    }

    setIsProcessing(true);
    setError("");

    try {
      const outputFormat: SupportedMimeType | undefined =
        format === "original"
          ? getMimeType("original", file.type)
          : getMimeType(format, file.type);

      const output = await resizeImage(file, {
        width: 200,
        height: 200,
        exactDimensions: true,
        quality,
        format: outputFormat,
      });

      const outputUrl = URL.createObjectURL(output.blob);

      const extension = getExtension(
        format,
        file.type
      );

      const originalName = file.name.replace(
        /\.[^/.]+$/,
        ""
      );

      setResult({
        blob: output.blob,
        url: outputUrl,
        width: 200,
        height: 200,
        originalSize: file.size,
        outputSize: output.blob.size,
        format:
          output.blob.type === "image/jpeg"
            ? "JPG"
            : output.blob.type === "image/png"
              ? "PNG"
              : output.blob.type === "image/webp"
                ? "WebP"
                : "Image",
        fileName: `${originalName}-200x200.${extension}`,
      });
    } catch (processingError) {
      console.error(processingError);

      setError(
        "We couldn&apos;t resize this image. Please try another image file."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadResult = () => {
    if (!result) return;

    const link = document.createElement("a");

    link.href = result.url;
    link.download = result.fileName;

    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const startOver = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (result?.url) {
      URL.revokeObjectURL(result.url);
    }

    setFile(null);
    setPreviewUrl(null);
    setResult(null);
    setError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Lets Resize It — Resize Image to 200x200",
        url: "https://letsresizeit.com/resize-image-to-200x200",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        description:
          "Free online tool to resize images to exactly 200x200 pixels.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Article",
        headline:
          "How to Resize an Image to 200x200 Pixels",
        description:
          "Learn how to resize an image to exactly 200x200 pixels and when this square image dimension is useful.",
        mainEntityOfPage:
          "https://letsresizeit.com/resize-image-to-200x200",
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
            name: "Resize Image",
            item: "https://letsresizeit.com/resize-image",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Resize Image to 200x200",
            item: "https://letsresizeit.com/resize-image-to-200x200",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name:
              "How do I resize an image to 200x200?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Upload your image to Lets Resize It, use the 200x200 resize tool, process the image, and download the resulting square image.",
            },
          },
          {
            "@type": "Question",
            name:
              "Can I resize JPG to 200x200?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. JPG images can be resized to exactly 200x200 pixels and downloaded as JPG, PNG, or WebP.",
            },
          },
          {
            "@type": "Question",
            name:
              "Can I resize PNG to 200x200?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. PNG images can be resized to 200x200 pixels while retaining PNG output when the original format is preserved.",
            },
          },
          {
            "@type": "Question",
            name:
              "Does resizing an image to 200x200 make it square?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. A 200x200 image has a 1:1 aspect ratio, making the output a square image.",
            },
          },
          {
            "@type": "Question",
            name:
              "Is the 200x200 image converter free?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. Lets Resize It provides this 200x200 image resizing tool free online.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />

        {/* Breadcrumb */}
        <div className="border-b border-slate-100 bg-slate-50/70">
          <div className="mx-auto max-w-7xl px-5 py-3 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
            >
              <Link
                href="/"
                className="transition hover:text-slate-900"
              >
                Home
              </Link>

              <span>/</span>

              <Link
                href="/resize-image"
                className="transition hover:text-slate-900"
              >
                Resize Image
              </Link>

              <span>/</span>

              <span className="font-medium text-slate-900">
                Resize to 200x200
              </span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.10),transparent_30%)]" />

          <div className="mx-auto max-w-7xl px-5 pb-12 pt-14 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Free 200 × 200 Image Resizer
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Resize Image to{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
                  200x200
                </span>{" "}
                Pixels
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                Resize JPG, PNG, WebP, and other image files to exactly{" "}
                <strong className="font-semibold text-slate-900">
                  200 × 200 pixels
                </strong>
                . Create a clean square image online, free, without
                installing software.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">
                  ✓ Exact 200×200 dimensions
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">
                  ✓ JPG, PNG & WebP
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">
                  ✓ Free online tool
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Tool */}
        <section
          id="resize-tool"
          className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16"
        >
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.10)]">
              <div className="border-b border-slate-100 bg-slate-50 px-6 py-5 sm:px-8">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <h2 className="text-xl font-bold text-slate-950">
                      200 × 200 Image Resizer
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Upload an image and create an exact 200×200 pixel copy.
                    </p>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
                    <span className="text-indigo-600">
                      200
                    </span>
                    <span>×</span>
                    <span className="text-indigo-600">
                      200
                    </span>
                    <span className="font-normal text-slate-400">
                      px
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                {!file && !result && (
                  <div
                    onDragOver={(event) => {
                      event.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() =>
                      setIsDragging(false)
                    }
                    onDrop={handleDrop}
                    onClick={() =>
                      inputRef.current?.click()
                    }
                    className={`group cursor-pointer rounded-3xl border-2 border-dashed p-10 text-center transition sm:p-14 ${
                      isDragging
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-slate-200 bg-slate-50/70 hover:border-indigo-300 hover:bg-indigo-50/40"
                    }`}
                  >
                    <input
                      ref={inputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleInputChange}
                      className="hidden"
                    />

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm ring-1 ring-slate-200 transition group-hover:scale-105">
                      🖼️
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-950">
                      Drop your image here
                    </h3>

                    <p className="mt-2 text-slate-500">
                      or click to browse from your device
                    </p>

                    <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs text-slate-400">
                      <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200">
                        JPG
                      </span>

                      <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200">
                        PNG
                      </span>

                      <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200">
                        WebP
                      </span>
                    </div>
                  </div>
                )}

                {file && !result && (
                  <div className="space-y-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
                      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                        <div className="flex min-h-[320px] items-center justify-center p-6">
                          {previewUrl && (
                            <img
                              src={previewUrl}
                              alt={`Preview of ${file.name}`}
                              className="max-h-[320px] max-w-full rounded-xl object-contain shadow-sm"
                            />
                          )}
                        </div>

                        <div className="border-t border-slate-200 bg-white px-5 py-4">
                          <p className="truncate text-sm font-semibold text-slate-800">
                            {file.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            Original size:{" "}
                            {formatBytes(file.size)}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-white p-5">
                        <h3 className="font-bold text-slate-950">
                          Output settings
                        </h3>

                        <div className="mt-5 rounded-2xl bg-indigo-50 p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                            Fixed dimensions
                          </p>

                          <p className="mt-1 text-3xl font-black text-slate-950">
                            200 × 200
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            Exact square output
                          </p>
                        </div>

                        <label className="mt-5 block text-sm font-semibold text-slate-700">
                          Output format
                        </label>

                        <select
                          value={format}
                          onChange={(event) =>
                            setFormat(
                              event.target.value as OutputFormat
                            )
                          }
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                        >
                          <option value="original">
                            Keep original format
                          </option>

                          <option value="jpeg">
                            JPG / JPEG
                          </option>

                          <option value="png">
                            PNG
                          </option>

                          <option value="webp">
                            WebP
                          </option>
                        </select>

                        <label className="mt-5 block text-sm font-semibold text-slate-700">
                          Image quality
                        </label>

                        <div className="mt-2 flex items-center gap-3">
                          <input
                            type="range"
                            min="0.5"
                            max="1"
                            step="0.05"
                            value={quality}
                            onChange={(event) =>
                              setQuality(
                                Number(event.target.value)
                              )
                            }
                            className="w-full accent-indigo-600"
                          />

                          <span className="w-12 text-right text-sm font-semibold text-slate-700">
                            {Math.round(quality * 100)}%
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={processImage}
                          disabled={isProcessing}
                          className="mt-6 w-full rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isProcessing
                            ? "Resizing image..."
                            : "Resize to 200×200"}
                        </button>

                        <button
                          type="button"
                          onClick={startOver}
                          className="mt-3 w-full rounded-xl px-5 py-3 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                        >
                          Choose another image
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {result && (
                  <div className="space-y-6">
                    <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white">
                        ✓
                      </div>

                      <h3 className="mt-4 text-2xl font-black text-slate-950">
                        Your 200×200 image is ready
                      </h3>

                      <p className="mt-2 text-sm text-slate-600">
                        The image has been resized to exactly
                        200×200 pixels.
                      </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                      <div className="flex min-h-[340px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <img
                          src={result.url}
                          alt="Resized 200x200 image preview"
                          className="max-h-[300px] max-w-full rounded-xl object-contain shadow-md"
                        />
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-white p-6">
                        <h3 className="font-bold text-slate-950">
                          Output details
                        </h3>

                        <div className="mt-5 space-y-4">
                          <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                            <span className="text-sm text-slate-500">
                              Dimensions
                            </span>

                            <strong className="text-sm text-slate-900">
                              200 × 200 px
                            </strong>
                          </div>

                          <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                            <span className="text-sm text-slate-500">
                              Format
                            </span>

                            <strong className="text-sm text-slate-900">
                              {result.format}
                            </strong>
                          </div>

                          <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                            <span className="text-sm text-slate-500">
                              Original
                            </span>

                            <strong className="text-sm text-slate-900">
                              {formatBytes(
                                result.originalSize
                              )}
                            </strong>
                          </div>

                          <div className="flex justify-between gap-4">
                            <span className="text-sm text-slate-500">
                              Output
                            </span>

                            <strong className="text-sm text-slate-900">
                              {formatBytes(
                                result.outputSize
                              )}
                            </strong>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={downloadResult}
                          className="mt-7 w-full rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-700"
                        >
                          Download 200×200 Image
                        </button>

                        <button
                          type="button"
                          onClick={startOver}
                          className="mt-3 w-full rounded-xl px-5 py-3 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                        >
                          Resize Another Image
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
                    {error}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why 200x200 */}
        <section className="border-y border-slate-100 bg-slate-50/60">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
                Why 200 × 200?
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                A simple square image size for many digital uses
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                A 200×200 image has a 1:1 aspect ratio, making it
                useful whenever a compact square image is required.
                The right dimensions depend on the platform or
                application you&apos;re uploading to, so always check its
                specific requirements.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Profile images",
                  text: "Create a consistent square image for profiles, avatars, and compact user-image areas.",
                  icon: "👤",
                },
                {
                  title: "Thumbnails",
                  text: "Prepare smaller square images for cards, lists, dashboards, catalogs, and previews.",
                  icon: "▦",
                },
                {
                  title: "Forms & portals",
                  text: "Useful when a website or application specifically asks for a 200×200 pixel image.",
                  icon: "✓",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
                How it works
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Resize your image to 200×200 in three steps
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                You don&apos;t need Photoshop or desktop software for a
                simple fixed-dimension resize.
              </p>

              <Link
                href="#resize-tool"
                className="mt-7 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-600"
              >
                Resize an image now
              </Link>
            </div>

            <div className="space-y-4">
              {[
                [
                  "01",
                  "Upload your image",
                  "Choose the JPG, PNG, WebP, or supported image you want to resize.",
                ],
                [
                  "02",
                  "Set the 200×200 target",
                  "This page is already configured for an exact 200×200 pixel output.",
                ],
                [
                  "03",
                  "Download your result",
                  "Process the image and download the finished square image.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-sm font-black text-white">
                    {number}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO content */}
        <section className="border-y border-slate-100 bg-white">
          <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
            <article className="prose prose-slate max-w-none">
              <h2>
                How to resize an image to 200x200 pixels
              </h2>

              <p>
                Resizing an image to 200x200 pixels means creating
                an image that is exactly 200 pixels wide and 200
                pixels high. Because both dimensions are the same,
                the resulting image has a square 1:1 aspect ratio.
              </p>

              <p>
                With Lets Resize It, you can upload an image and
                create a 200x200 version directly in your browser.
                The tool is useful when a website, form, application,
                profile system, or other digital service asks for a
                specific 200x200 pixel image.
              </p>

              <h3>
                What does 200x200 pixels mean?
              </h3>

              <p>
                The first number represents the image width and the
                second represents its height. Therefore, a 200x200
                image contains 200 horizontal pixels and 200 vertical
                pixels.
              </p>

              <p>
                Since the width and height are equal, the output is
                square. This can be useful for profile pictures,
                thumbnails, icons, cards, and other interfaces
                designed around square images.
              </p>

              <h3>
                Can you resize any image to 200x200?
              </h3>

              <p>
                Most common raster images can be resized to 200x200.
                However, converting an image to a fixed square
                dimension can change its original proportions if the
                source image is not already square.
              </p>

              <p>
                If preserving the original aspect ratio is more
                important than creating an exact square, use our{" "}
                <Link
                  href="/resize-image"
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  general image resizer
                </Link>{" "}
                instead.
              </p>

              <h3>
                JPG, PNG or WebP for a 200x200 image?
              </h3>

              <p>
                The best output format depends on what the image
                contains and where you plan to use it. JPG is commonly
                used for photographs, PNG can be useful when
                transparency or lossless graphics are important, and
                WebP can provide efficient modern web delivery.
              </p>

              <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
                <Link
                  href="/resize-jpg"
                  className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                    JPG
                  </span>

                  <h4 className="mt-2 font-bold text-slate-950">
                    Resize JPG
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Resize JPG images for your specific use case.
                  </p>
                </Link>

                <Link
                  href="/resize-image"
                  className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                    PNG
                  </span>

                  <h4 className="mt-2 font-bold text-slate-950">
                    Resize PNG
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Resize PNG images while working with their
                    original format.
                  </p>
                </Link>

                <Link
                  href="/webp-to-png"
                  className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                    WebP
                  </span>

                  <h4 className="mt-2 font-bold text-slate-950">
                    Resize WebP
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Resize modern WebP images for web use.
                  </p>
                </Link>
              </div>

              <h3>
                Need a different image size?
              </h3>

              <p>
                Not every platform requires 200x200 pixels. If your
                target dimensions are different, use one of our other
                fixed-size tools:
              </p>

              <ul>
                <li>
                  <Link
                    href="/resize-image-to-300x300"
                    className="font-semibold text-indigo-600"
                  >
                    Resize image to 300x300
                  </Link>
                </li>

                <li>
                  <Link
                    href="/resize-image-to-1080x1080"
                    className="font-semibold text-indigo-600"
                  >
                    Resize image to 1080x1080
                  </Link>
                </li>

                <li>
                  <Link
                    href="/resize-image"
                    className="font-semibold text-indigo-600"
                  >
                    Resize image to custom dimensions
                  </Link>
                </li>
              </ul>

              <div className="not-prose my-10 rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-300">
                  Need a specific file size?
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  Dimensions and file size are different
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  A 200x200 image describes its pixel dimensions. It
                  does not guarantee a particular file size in KB. If
                  a website asks for both dimensions and a maximum file
                  size, you may need to resize and optimize the image
                  separately.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/resize-image-to-100-kb"
                    className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-indigo-50"
                  >
                    Resize to 100 KB
                  </Link>

                  <Link
                    href="/compress-image"
                    className="rounded-xl border border-slate-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    Compress Image
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
                FAQ
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Resize image to 200x200 questions
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {[
                [
                  "How do I resize an image to 200x200?",
                  "Upload your image using the tool above. The page is configured for an exact 200×200 pixel output, so you can process and download your square image directly.",
                ],
                [
                  "Can I resize JPG to 200x200?",
                  "Yes. Upload a JPG and create an exact 200×200 version. You can keep JPG or choose another supported output format.",
                ],
                [
                  "Can I resize PNG to 200x200?",
                  "Yes. PNG images can be resized to exactly 200×200 pixels. You can preserve PNG output or choose another supported format.",
                ],
                [
                  "Does resizing to 200x200 make the image square?",
                  "Yes. Because the width and height are both 200 pixels, the resulting image has a 1:1 square aspect ratio.",
                ],
                [
                  "Is this 200x200 image resizer free?",
                  "Yes. Lets Resize It provides this online 200×200 image resizing tool for free.",
                ],
              ].map(([question, answer]) => (
                <details
                  key={question}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none pr-6 font-bold text-slate-950 marker:hidden">
                    <div className="flex items-center justify-between gap-4">
                      <span>{question}</span>

                      <span className="text-xl text-slate-400 transition group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>

                  <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related tools */}
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">
              More image tools
            </h2>

            <p className="mt-4 text-slate-600">
              Choose another Lets Resize It tool for a different
              dimension, format, or file-size requirement.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "/resize-image",
                "Resize Image",
                "Custom image dimensions",
              ],
              [
                "/resize-image-to-300x300",
                "Resize to 300x300",
                "Create another square size",
              ],
              [
                "/resize-image-to-1080x1080",
                "Resize to 1080x1080",
                "Large square images",
              ],
              [
                "/compress-image",
                "Compress Image",
                "Reduce image file size",
              ],
            ].map(([href, title, text]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
              >
                <h3 className="font-bold text-slate-950">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {text}
                </p>

                <span className="mt-4 inline-block text-sm font-bold text-indigo-600">
                  Open tool →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}