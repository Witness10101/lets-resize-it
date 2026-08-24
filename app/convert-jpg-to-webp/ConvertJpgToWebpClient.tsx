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

interface ResultData {
  blob: Blob;
  url: string;
  width: number;
  height: number;
  originalSize: number;
  outputSize: number;
  fileName: string;
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function getSavings(original: number, output: number) {
  if (original <= 0) return 0;

  return Math.max(0, Math.round(((original - output) / original) * 100));
}

export default function ConvertJpgToWebpClient() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<ResultData | null>(null);

  const [quality, setQuality] = useState(0.9);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
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

    const isJpg =
      selectedFile.type === "image/jpeg" ||
      /\.(jpe?g)$/i.test(selectedFile.name);

    if (!isJpg) {
      setFile(null);
      setPreviewUrl(null);

      setError(
        "Please choose a JPG or JPEG image. This converter is specifically designed for JPG to WebP conversion."
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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFile(event.target.files?.[0]);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    handleFile(event.dataTransfer.files?.[0]);
  };

  const processImage = async () => {
    if (!file) {
      setError("Please select a JPG image first.");
      return;
    }

    setIsProcessing(true);
    setError("");

    try {
      const output = await resizeImage(file, {
        width: undefined,
        height: undefined,
        quality,
        format: "image/webp",
      });

      const outputUrl = URL.createObjectURL(output.blob);

      const originalName = file.name.replace(/\.[^/.]+$/, "");

      setResult({
        blob: output.blob,
        url: outputUrl,
        width: output.width,
        height: output.height,
        originalSize: file.size,
        outputSize: output.blob.size,
        fileName: `${originalName}.webp`,
      });
    } catch (processingError) {
      console.error(processingError);

      setError(
        "We couldn't convert this image. Please try another JPG or JPEG file."
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

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-slate-900">
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

              <span className="font-medium text-slate-900">
                Convert JPG to WebP
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
                Free JPG to WebP Converter
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Convert JPG to{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
                  WebP
                </span>{" "}
                Online
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                Convert JPG and JPEG images to WebP directly in your browser.
                Adjust quality, preview the result, and download your WebP
                image in seconds.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">
                  ✓ JPG & JPEG supported
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">
                  ✓ Adjustable quality
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">
                  ✓ Free online converter
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">
                  ✓ WebP output
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Converter */}
        <section
          id="converter"
          className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16"
        >
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.10)]">
              <div className="border-b border-slate-100 bg-slate-50 px-6 py-5 sm:px-8">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <h2 className="text-xl font-bold text-slate-950">
                      JPG to WebP Converter
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Upload a JPG or JPEG image and convert it to WebP.
                    </p>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-slate-200">
                    <span className="text-orange-500">JPG</span>
                    <span className="text-slate-400">→</span>
                    <span className="text-indigo-600">WebP</span>
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
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    onClick={() => inputRef.current?.click()}
                    className={`group cursor-pointer rounded-3xl border-2 border-dashed p-10 text-center transition sm:p-14 ${
                      isDragging
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-slate-200 bg-slate-50/70 hover:border-indigo-300 hover:bg-indigo-50/40"
                    }`}
                  >
                    <input
                      ref={inputRef}
                      type="file"
                      accept=".jpg,.jpeg,image/jpeg"
                      onChange={handleInputChange}
                      className="hidden"
                    />

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm ring-1 ring-slate-200 transition group-hover:scale-105">
                      🖼️
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-950">
                      Drop your JPG here
                    </h3>

                    <p className="mt-2 text-slate-500">
                      or click to browse from your device
                    </p>

                    <div className="mt-5 flex justify-center gap-2 text-xs text-slate-400">
                      <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200">
                        JPG
                      </span>

                      <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200">
                        JPEG
                      </span>

                      <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200">
                        Output: WebP
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
                            JPG image · {formatBytes(file.size)}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-white p-5">
                        <h3 className="font-bold text-slate-950">
                          WebP output settings
                        </h3>

                        <div className="mt-5 rounded-2xl bg-indigo-50 p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                            Output format
                          </p>

                          <p className="mt-1 text-3xl font-black text-slate-950">
                            WebP
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            Image dimensions are preserved
                          </p>
                        </div>

                        <label className="mt-5 block text-sm font-semibold text-slate-700">
                          WebP quality
                        </label>

                        <div className="mt-2 flex items-center gap-3">
                          <input
                            type="range"
                            min="0.5"
                            max="1"
                            step="0.05"
                            value={quality}
                            onChange={(event) =>
                              setQuality(Number(event.target.value))
                            }
                            className="w-full accent-indigo-600"
                          />

                          <span className="w-12 text-right text-sm font-semibold text-slate-700">
                            {Math.round(quality * 100)}%
                          </span>
                        </div>

                        <p className="mt-2 text-xs leading-5 text-slate-500">
                          Higher quality generally preserves more visual
                          detail, while lower quality may produce a smaller
                          file.
                        </p>

                        <button
                          type="button"
                          onClick={processImage}
                          disabled={isProcessing}
                          className="mt-6 w-full rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isProcessing
                            ? "Converting to WebP..."
                            : "Convert to WebP"}
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
                        Your WebP image is ready
                      </h3>

                      <p className="mt-2 text-sm text-slate-600">
                        Your JPG image has been converted to WebP.
                      </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                      <div className="flex min-h-[340px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <img
                          src={result.url}
                          alt="Converted WebP image preview"
                          className="max-h-[300px] max-w-full rounded-xl object-contain shadow-md"
                        />
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-white p-6">
                        <h3 className="font-bold text-slate-950">
                          Conversion details
                        </h3>

                        <div className="mt-5 space-y-4">
                          <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                            <span className="text-sm text-slate-500">
                              Dimensions
                            </span>

                            <strong className="text-sm text-slate-900">
                              {result.width} × {result.height} px
                            </strong>
                          </div>

                          <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                            <span className="text-sm text-slate-500">
                              Original
                            </span>

                            <strong className="text-sm text-slate-900">
                              {formatBytes(result.originalSize)}
                            </strong>
                          </div>

                          <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                            <span className="text-sm text-slate-500">
                              WebP output
                            </span>

                            <strong className="text-sm text-slate-900">
                              {formatBytes(result.outputSize)}
                            </strong>
                          </div>

                          <div className="flex justify-between gap-4">
                            <span className="text-sm text-slate-500">
                              File type
                            </span>

                            <strong className="text-sm text-slate-900">
                              WebP
                            </strong>
                          </div>
                        </div>

                        {result.outputSize < result.originalSize && (
                          <div className="mt-5 rounded-xl bg-emerald-50 px-4 py-3">
                            <p className="text-sm font-bold text-emerald-700">
                              About{" "}
                              {getSavings(
                                result.originalSize,
                                result.outputSize
                              )}
                              % smaller
                            </p>

                            <p className="mt-1 text-xs text-emerald-600">
                              Actual savings depend on the image and selected
                              quality.
                            </p>
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={downloadResult}
                          className="mt-7 w-full rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-700"
                        >
                          Download WebP Image
                        </button>

                        <button
                          type="button"
                          onClick={startOver}
                          className="mt-3 w-full rounded-xl px-5 py-3 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                        >
                          Convert Another JPG
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

        {/* Why WebP */}
        <section className="border-y border-slate-100 bg-slate-50/60">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
                JPG to WebP
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                A modern image format for the web
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                WebP is designed for efficient image delivery on the web.
                Converting JPG images to WebP can be useful when optimizing
                images for websites and digital experiences.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Web-friendly output",
                  text: "Create WebP versions of existing JPG and JPEG images for modern web workflows.",
                  icon: "🌐",
                },
                {
                  title: "Quality control",
                  text: "Adjust the output quality to find a balance between visual quality and file size.",
                  icon: "⚙️",
                },
                {
                  title: "Simple conversion",
                  text: "Convert a JPG image directly in your browser without installing desktop software.",
                  icon: "⚡",
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
                Convert JPG to WebP in seconds
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                No complicated settings are required. Upload your JPG, choose
                the quality, and download the WebP version.
              </p>

              <Link
                href="#converter"
                className="mt-7 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-600"
              >
                Convert JPG to WebP
              </Link>
            </div>

            <div className="space-y-4">
              {[
                [
                  "01",
                  "Upload your JPG",
                  "Choose a JPG or JPEG image from your device.",
                ],
                [
                  "02",
                  "Choose WebP quality",
                  "Adjust the quality slider if you want to control the output.",
                ],
                [
                  "03",
                  "Convert the image",
                  "Lets Resize It creates a WebP version of your image.",
                ],
                [
                  "04",
                  "Download WebP",
                  "Download the converted WebP file to your device.",
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
                    <h3 className="font-bold text-slate-950">{title}</h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="border-y border-slate-100 bg-white">
          <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
            <article className="prose prose-slate max-w-none">
              <h2>How to convert JPG to WebP</h2>

              <p>
                Converting JPG to WebP changes an image from the traditional
                JPEG format into the WebP format. This can be useful when
                preparing images for websites, applications, blogs, online
                stores, and other digital platforms.
              </p>

              <p>
                With Lets Resize It, you can upload a JPG or JPEG image, choose
                the WebP quality, convert the image, preview the result, and
                download the finished WebP file.
              </p>

              <h3>What is WebP?</h3>

              <p>
                WebP is an image format developed for efficient delivery of
                images on the web. It supports both lossy and lossless
                compression and can also support transparency.
              </p>

              <h3>Why convert JPG to WebP?</h3>

              <p>
                JPG remains widely supported, but WebP is a modern format that
                can be useful for web image optimization. Depending on the
                image and compression settings, a WebP version may be smaller
                than the original JPG while maintaining suitable visual
                quality.
              </p>

              <p>
                The actual file size reduction varies from image to image.
                Photos, graphics, dimensions, compression settings, and the
                original JPG encoding can all affect the final result.
              </p>

              <h3>Does JPG to WebP conversion reduce image dimensions?</h3>

              <p>
                No. Converting the format does not intentionally resize the
                image. The resulting WebP keeps the original image dimensions.
              </p>

              <p>
                If you need to change the dimensions as well, use our{" "}
                <Link
                  href="/resize-image"
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  image resizer
                </Link>
                .
              </p>

              <h3>JPG vs WebP</h3>

              <div className="not-prose my-8 overflow-hidden rounded-2xl border border-slate-200">
                <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 px-5 py-4 text-sm font-bold">
                  <span>Feature</span>
                  <span>JPG</span>
                  <span>WebP</span>
                </div>

                {[
                  ["Common web use", "Yes", "Yes"],
                  ["Lossy compression", "Yes", "Yes"],
                  ["Lossless compression", "No", "Yes"],
                  ["Transparency", "No", "Yes"],
                  ["Modern web optimization", "Good", "Excellent"],
                ].map(([feature, jpg, webp]) => (
                  <div
                    key={feature}
                    className="grid grid-cols-3 border-b border-slate-100 px-5 py-4 text-sm last:border-0"
                  >
                    <span className="font-medium text-slate-700">
                      {feature}
                    </span>

                    <span className="text-slate-500">{jpg}</span>

                    <span className="font-medium text-slate-900">
                      {webp}
                    </span>
                  </div>
                ))}
              </div>

              <h3>Need another image conversion?</h3>

              <p>
                Lets Resize It includes additional image conversion tools for
                common formats and workflows.
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
                    Resize JPG images to your required dimensions.
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
                    Resize WebP images for web and digital use.
                  </p>
                </Link>

                <Link
                  href="/compress-image"
                  className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                    Compress
                  </span>

                  <h4 className="mt-2 font-bold text-slate-950">
                    Compress Image
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Reduce image file size for easier sharing and web use.
                  </p>
                </Link>
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
                JPG to WebP converter questions
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {[
                [
                  "How do I convert JPG to WebP?",
                  "Upload your JPG or JPEG image, choose the desired WebP quality, convert the image, and download the resulting WebP file.",
                ],
                [
                  "Can I convert JPEG to WebP?",
                  "Yes. JPG and JPEG are supported by this converter. Upload your JPEG image and convert it to WebP.",
                ],
                [
                  "Is the JPG to WebP converter free?",
                  "Yes. Lets Resize It provides this JPG to WebP converter free online.",
                ],
                [
                  "Does converting JPG to WebP resize the image?",
                  "No. The conversion changes the image format but does not intentionally change the original image dimensions.",
                ],
                [
                  "Can WebP be smaller than JPG?",
                  "It can be. The final file size depends on the original image, its encoding, and the WebP quality setting.",
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
              Resize, convert, and optimize images with Lets Resize It.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "/resize-jpg",
                "Resize JPG",
                "Resize JPG images",
              ],
              [
                "/resize-image",
                "Resize PNG",
                "Resize PNG images",
              ],
              [
                "/webp-to-png",
                "Resize WebP",
                "Resize WebP images",
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
                <h3 className="font-bold text-slate-950">{title}</h3>

                <p className="mt-2 text-sm text-slate-500">{text}</p>

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