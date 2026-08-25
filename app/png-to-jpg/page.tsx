"use client";

import { ChangeEvent, DragEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

type ConversionResult = {
  blob: Blob;
  url: string;
  size: number;
};

function formatFileSize(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function getBaseName(fileName: string): string {
  return fileName.replace(/\.[^/.]+$/, "");
}

export default function PngToJpgPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [result, setResult] = useState<ConversionResult | null>(null);

  const [quality, setQuality] = useState(0.92);
  const [isDragging, setIsDragging] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /*
   * Page-level metadata.
   *
   * The main SEO metadata for the site should remain centralized
   * where possible, but these values ensure this client page also
   * communicates its search intent correctly.
   */
  useEffect(() => {
    document.title =
      "PNG to JPG Converter Online – Convert PNG to JPG Free | Let&apos;s Resize It";

    const description =
      "Convert PNG images to JPG online for free. Fast, secure PNG to JPEG conversion directly in your browser. No uploads, no registration and no software required.";

    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.content = description;
  }, []);

  /*
   * Clean up object URLs.
   */
  useEffect(() => {
    return () => {
      if (originalUrl) {
        URL.revokeObjectURL(originalUrl);
      }

      if (result?.url) {
        URL.revokeObjectURL(result.url);
      }
    };
  }, [originalUrl, result]);

  /*
   * Validate PNG files.
   */
  const validateFile = (selectedFile: File): boolean => {
    const isPng =
      selectedFile.type === "image/png" ||
      selectedFile.name.toLowerCase().endsWith(".png");

    if (!isPng) {
      setError("Please select a PNG image.");
      return false;
    }

    if (selectedFile.size === 0) {
      setError("The selected PNG file is empty.");
      return false;
    }

    setError(null);

    return true;
  };

  /*
   * Load a new PNG.
   */
  const handleFile = (selectedFile: File) => {
    if (!validateFile(selectedFile)) {
      return;
    }

    if (originalUrl) {
      URL.revokeObjectURL(originalUrl);
    }

    if (result?.url) {
      URL.revokeObjectURL(result.url);
    }

    const preview = URL.createObjectURL(selectedFile);

    setFile(selectedFile);
    setOriginalUrl(preview);
    setResult(null);
    setError(null);
  };

  /*
   * File input.
   */
  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    handleFile(selectedFile);

    /*
     * Allow selecting the same file again.
     */
    event.target.value = "";
  };

  /*
   * Drag & drop.
   */
  const handleDragOver = (
    event: DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (
    event: DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (
    event: DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files?.[0];

    if (!droppedFile) {
      return;
    }

    handleFile(droppedFile);
  };

  /*
   * PNG → JPG conversion.
   */
  const convertToJpg = async () => {
    if (!file) {
      setError("Please select a PNG image first.");
      return;
    }

    setIsConverting(true);
    setError(null);

    try {
      const imageUrl = URL.createObjectURL(file);

      const image = new Image();

      await new Promise<void>((resolve, reject) => {
        image.onload = () => resolve();
        image.onerror = () =>
          reject(
            new Error(
              "The PNG image could not be loaded."
            )
          );

        image.src = imageUrl;
      });

      URL.revokeObjectURL(imageUrl);

      const canvas = document.createElement("canvas");

      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error(
          "Your browser could not create the image canvas."
        );
      }

      /*
       * JPG does not support transparency.
       *
       * PNG transparency is therefore rendered against
       * a white background before JPEG encoding.
       */
      context.fillStyle = "#ffffff";

      context.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      context.drawImage(
        image,
        0,
        0,
        canvas.width,
        canvas.height
      );

      const blob = await new Promise<Blob | null>(
        (resolve) => {
          canvas.toBlob(
            resolve,
            "image/jpeg",
            quality
          );
        }
      );

      if (!blob) {
        throw new Error(
          "The browser could not create the JPG image."
        );
      }

      const url = URL.createObjectURL(blob);

      if (result?.url) {
        URL.revokeObjectURL(result.url);
      }

      setResult({
        blob,
        url,
        size: blob.size,
      });
    } catch (conversionError) {
      const message =
        conversionError instanceof Error
          ? conversionError.message
          : "We couldn&apos;t convert this PNG to JPG.";

      setError(message);
    } finally {
      setIsConverting(false);
    }
  };

  /*
   * Download converted JPG.
   */
  const handleDownload = () => {
    if (!result || !file) {
      return;
    }

    const anchor =
      document.createElement("a");

    anchor.href = result.url;

    anchor.download =
      `${getBaseName(file.name)}.jpg`;

    document.body.appendChild(anchor);

    anchor.click();

    anchor.remove();
  };

  /*
   * Start over.
   */
  const handleStartOver = () => {
    if (originalUrl) {
      URL.revokeObjectURL(originalUrl);
    }

    if (result?.url) {
      URL.revokeObjectURL(result.url);
    }

    setFile(null);
    setOriginalUrl(null);
    setResult(null);
    setError(null);
    setIsConverting(false);

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const sizeDifference =
    file && result
      ? ((file.size - result.size) /
          file.size) *
        100
      : 0;

  return (
    <>
      <Header />

      <main>
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-white">
          <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-50/70 to-transparent" />

          <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-blue-600"
                  aria-hidden="true"
                />

                Free PNG to JPG Converter
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Convert PNG to JPG Online
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Convert PNG images to JPG format quickly and
                securely. Change PNG to JPEG directly in your
                browser without uploading your images or
                installing software.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500 sm:text-sm">
                <span>✓ Free to use</span>
                <span>✓ No registration</span>
                <span>✓ Browser-based</span>
                <span>✓ No server uploads</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            TOOL
        ========================================================== */}
        <section
          id="png-to-jpg-tool"
          className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
          aria-labelledby="converter-heading"
        >
          <div className="mx-auto w-full max-w-5xl">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
              <div className="mb-7 text-center">
                <h2
                  id="converter-heading"
                  className="text-xl font-bold text-slate-950 sm:text-2xl"
                >
                  PNG to JPG Converter
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Select a PNG image to convert it to JPG.
                </p>
              </div>

              {!file ? (
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`rounded-2xl border-2 border-dashed p-8 text-center transition sm:p-12 ${
                    isDragging
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50/40"
                  }`}
                >
                  <input
                    ref={inputRef}
                    type="file"
                    accept="image/png,.png"
                    onChange={handleFileChange}
                    className="sr-only"
                    id="png-file-input"
                  />

                  <label
                    htmlFor="png-file-input"
                    className="cursor-pointer"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                      <svg
                        className="h-8 w-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 16V4" />
                        <path d="m7 9 5-5 5 5" />
                        <path d="M5 20h14" />
                      </svg>
                    </div>

                    <p className="mt-5 text-base font-semibold text-slate-950">
                      Drop your PNG image here
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      or click to browse your device
                    </p>

                    <span className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                      Choose PNG Image
                    </span>
                  </label>

                  <p className="mt-5 text-xs text-slate-500">
                    Your image stays in your browser.
                  </p>
                </div>
              ) : (
                <>
                  {/* File selected */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-700">
                          PNG
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-slate-950">
                            {file.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {formatFileSize(file.size)}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleStartOver}
                        className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                      >
                        Choose another
                      </button>
                    </div>
                  </div>

                  {/* Quality */}
                  <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-950">
                          JPG quality
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Higher quality produces a larger file.
                        </p>
                      </div>

                      <span className="rounded-lg bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">
                        {Math.round(quality * 100)}%
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0.5"
                      max="1"
                      step="0.01"
                      value={quality}
                      onChange={(event) =>
                        setQuality(
                          Number(event.target.value)
                        )
                      }
                      className="mt-5 w-full accent-blue-600"
                      aria-label="JPG quality"
                    />

                    <div className="mt-2 flex justify-between text-xs text-slate-400">
                      <span>Smaller file</span>
                      <span>Higher quality</span>
                    </div>
                  </div>

                  {/* Convert */}
                  {!result && (
                    <button
                      type="button"
                      onClick={convertToJpg}
                      disabled={isConverting}
                      className="mt-5 inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isConverting ? (
                        <>
                          <span
                            className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white"
                            aria-hidden="true"
                          />

                          Converting PNG to JPG...
                        </>
                      ) : (
                        <>
                          Convert PNG to JPG

                          <svg
                            className="h-5 w-5"
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
                        </>
                      )}
                    </button>
                  )}
                </>
              )}

              {/* Error */}
              {error && (
                <div
                  role="alert"
                  className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {error}
                </div>
              )}

              {/* =====================================================
                  RESULT
              ====================================================== */}
              {result && file && (
                <div className="mt-7">
                  <div className="mb-5 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                        aria-hidden="true"
                      />

                      Conversion complete
                    </span>

                    <h3 className="mt-3 text-xl font-bold text-slate-950">
                      Your JPG is ready
                    </h3>
                  </div>

                  <div className="grid gap-5 lg:grid-cols-2">
                    {/* Original */}
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                        <div>
                          <p className="text-sm font-semibold text-slate-950">
                            Original PNG
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {formatFileSize(file.size)}
                          </p>
                        </div>

                        <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700">
                          PNG
                        </span>
                      </div>

                      <div className="flex min-h-[260px] items-center justify-center bg-slate-100 p-5">
                        {originalUrl ? (
                          <img
                            id="png-original-preview"
                            src={originalUrl}
                            alt={`Original PNG image: ${file.name}`}
                            className="max-h-[320px] max-w-full rounded-lg object-contain shadow-sm"
                          />
                        ) : (
                          <div className="text-sm text-slate-400">
                            Preview unavailable
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Converted */}
                    <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-white">
                      <div className="flex items-center justify-between border-b border-emerald-100 px-4 py-3">
                        <div>
                          <p className="text-sm font-semibold text-slate-950">
                            Converted JPG
                          </p>

                          <p className="mt-1 text-xs text-emerald-600">
                            {formatFileSize(result.size)}
                          </p>
                        </div>

                        <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">
                          JPG
                        </span>
                      </div>

                      <div className="flex min-h-[260px] items-center justify-center bg-slate-100 p-5">
                        {result.url ? (
                          <img
                            id="png-output-preview"
                            src={result.url}
                            alt="Converted JPG image preview"
                            className="max-h-[320px] max-w-full rounded-lg object-contain shadow-sm"
                          />
                        ) : (
                          <div className="text-sm text-slate-400">
                            Preview unavailable
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-medium text-slate-500">
                        Original
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-950">
                        {formatFileSize(file.size)}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-medium text-slate-500">
                        New size
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-950">
                        {formatFileSize(result.size)}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-medium text-slate-500">
                        Format
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-950">
                        JPG
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-medium text-slate-500">
                        Size change
                      </p>

                      <p
                        className={`mt-1 text-sm font-bold ${
                          sizeDifference >= 0
                            ? "text-emerald-600"
                            : "text-orange-600"
                        }`}
                      >
                        {Math.abs(sizeDifference).toFixed(1)}%
                        {sizeDifference >= 0
                          ? " smaller"
                          : " larger"}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 3v12" />
                        <path d="m7 10 5 5 5-5" />
                        <path d="M5 21h14" />
                      </svg>

                      Download JPG
                    </button>

                    <button
                      type="button"
                      onClick={handleStartOver}
                      className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      Convert another PNG
                    </button>
                  </div>

                  <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-500 sm:text-sm">
                    <svg
                      className="h-4 w-4 shrink-0 text-emerald-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>

                    Your PNG was converted locally in your browser.
                    It was not uploaded to a server.
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================
            HOW IT WORKS
        ========================================================== */}
        <section
          id="how-it-works"
          className="bg-white px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold text-blue-600">
                How it works
              </span>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                Convert PNG to JPG in seconds
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                No complicated settings or software. Convert your
                PNG image to a widely supported JPG file directly
                from your browser.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Choose a PNG",
                  text: "Select or drag and drop the PNG image you want to convert.",
                },
                {
                  number: "02",
                  title: "Convert to JPG",
                  text: "Our browser-based converter processes your image instantly.",
                },
                {
                  number: "03",
                  title: "Download your JPG",
                  text: "Download the converted JPEG image and use it wherever you need.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-sm font-bold text-blue-600">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            BENEFITS
        ========================================================== */}
        <section
          id="features"
          className="border-y border-slate-100 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold text-blue-600">
                Why use our converter?
              </span>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                A simple PNG to JPEG converter
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "Fast conversion",
                  "Convert PNG images to JPG without waiting for a server.",
                ],
                [
                  "Private by design",
                  "Images are processed directly in your browser instead of being uploaded.",
                ],
                [
                  "Free to use",
                  "Convert PNG files without creating an account or paying for a subscription.",
                ],
                [
                  "Easy downloads",
                  "Get a ready-to-use JPG file with a single click.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-base font-bold text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            USE CASES
        ========================================================== */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-blue-600">
                Popular use cases
              </span>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                When should you convert PNG to JPG?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                JPG is widely supported and can be useful when you
                need a smaller, broadly compatible image format.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Website images",
                  text: "Convert PNG graphics and photographs into JPG files for websites and online publishing.",
                },
                {
                  title: "Email attachments",
                  text: "Create JPEG versions of images when you need a commonly supported format for sharing.",
                },
                {
                  title: "Social media",
                  text: "Convert images to JPG for platforms and workflows that prefer or require JPEG files.",
                },
                {
                  title: "Online forms",
                  text: "Prepare image files for websites and applications that accept JPG or JPEG uploads.",
                },
                {
                  title: "Digital photos",
                  text: "Create JPG copies of PNG photographs for easier storage and sharing.",
                },
                {
                  title: "File compatibility",
                  text: "Turn PNG images into a format supported by a wide range of devices and applications.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-base font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================== */}
        <section
          id="faq"
          className="border-t border-slate-100 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto w-full max-w-4xl">
            <div className="text-center">
              <span className="text-sm font-semibold text-blue-600">
                FAQ
              </span>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                PNG to JPG converter questions
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              <details className="group rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-950">
                  How do I convert PNG to JPG?
                </summary>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Select a PNG image using the converter above, choose
                  your preferred JPG quality, and click Convert PNG to
                  JPG. Once processing is complete, download the
                  converted JPG file.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-950">
                  Is this PNG to JPG converter free?
                </summary>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Yes. You can use the PNG to JPG converter for free
                  without creating an account.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-950">
                  Are my PNG images uploaded?
                </summary>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  No. The conversion is performed directly in your
                  browser. Your image does not need to be uploaded to
                  our server.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-950">
                  What happens to PNG transparency?
                </summary>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  JPG does not support transparent pixels. Transparent
                  areas in the original PNG are therefore rendered
                  against a white background during conversion.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-950">
                  Can I convert PNG to JPEG?
                </summary>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Yes. JPG and JPEG refer to the same image format.
                  Converting PNG to JPG produces a JPEG-compatible
                  image file.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-950">
                  Will converting PNG to JPG reduce quality?
                </summary>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  JPG uses lossy compression, so some image information
                  can be lost. You can adjust the quality setting above
                  to balance image quality and file size.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTERNAL LINKING
        ========================================================== */}
        <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-5xl rounded-3xl border border-blue-100 bg-blue-50/60 p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Need another image tool?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Let&apos;s Resize It provides simple browser-based tools for
              resizing, compressing and converting images.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/resize-image"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                Resize an Image
              </Link>

              <Link
                href="/compress-image"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                Compress an Image
              </Link>

              <Link
                href="/image-to-jpg"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                Image to JPG
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}