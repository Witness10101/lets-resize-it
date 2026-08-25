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
  originalWidth: number;
  originalHeight: number;
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

export default function ResizeJpgClient() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<ResultData | null>(null);

  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(800);
  const [quality, setQuality] = useState(0.9);

  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [lockRatio, setLockRatio] = useState(true);

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

  const readImageDimensions = (selectedFile: File) => {
    return new Promise<{ width: number; height: number }>(
      (resolve, reject) => {
        const url = URL.createObjectURL(selectedFile);
        const image = new Image();

        image.onload = () => {
          const dimensions = {
            width: image.naturalWidth,
            height: image.naturalHeight,
          };

          URL.revokeObjectURL(url);
          resolve(dimensions);
        };

        image.onerror = () => {
          URL.revokeObjectURL(url);
          reject(new Error("Unable to read image dimensions."));
        };

        image.src = url;
      }
    );
  };

  const handleFile = async (selectedFile: File | undefined) => {
    if (!selectedFile) return;

    setError("");
    setResult(null);

    const isJpg =
      selectedFile.type === "image/jpeg" ||
      selectedFile.name.toLowerCase().endsWith(".jpg") ||
      selectedFile.name.toLowerCase().endsWith(".jpeg");

    if (!isJpg) {
      setFile(null);
      setPreviewUrl(null);

      setError(
        "Please choose a JPG or JPEG image. This tool is specifically designed for JPG files."
      );

      return;
    }

    try {
      const dimensions = await readImageDimensions(selectedFile);

      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

      const url = URL.createObjectURL(selectedFile);

      setFile(selectedFile);
      setPreviewUrl(url);

      setWidth(dimensions.width);
      setHeight(dimensions.height);

      setAspectRatio(dimensions.width / dimensions.height);
    } catch (processingError) {
      console.error(processingError);

      setFile(null);
      setPreviewUrl(null);

      setError(
        "We couldn&apos;t read this JPG image. Please try another image."
      );
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFile(event.target.files?.[0]);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    handleFile(event.dataTransfer.files?.[0]);
  };

  const handleWidthChange = (value: number) => {
    setWidth(value);

    if (lockRatio && aspectRatio && value > 0) {
      setHeight(Math.max(1, Math.round(value / aspectRatio)));
    }
  };

  const handleHeightChange = (value: number) => {
    setHeight(value);

    if (lockRatio && aspectRatio && value > 0) {
      setWidth(Math.max(1, Math.round(value * aspectRatio)));
    }
  };

  const processImage = async () => {
    if (!file) {
      setError("Please select a JPG image first.");
      return;
    }

    if (!width || width < 1 || !height || height < 1) {
      setError("Please enter valid image dimensions.");
      return;
    }

    if (width > 10000 || height > 10000) {
      setError("Please choose dimensions up to 10,000 × 10,000 pixels.");
      return;
    }

    setIsProcessing(true);
    setError("");

    try {
      const output = await resizeImage(file, {
        width,
        height,
        exactDimensions: true,
        quality,
        format: "image/jpeg",
      });

      const outputUrl = URL.createObjectURL(output.blob);

      const originalName = file.name.replace(/\.[^/.]+$/, "");

      setResult({
        blob: output.blob,
        url: outputUrl,
        width,
        height,
        originalWidth: width,
        originalHeight: height,
        originalSize: file.size,
        outputSize: output.blob.size,
        fileName: `${originalName}-resized-${width}x${height}.jpg`,
      });
    } catch (processingError) {
      console.error(processingError);

      setError(
        "We couldn&apos;t resize this JPG image. Please try another image or smaller dimensions."
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

    setWidth(1200);
    setHeight(800);
    setQuality(0.9);
    setAspectRatio(null);
    setLockRatio(true);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const reduction =
    result && result.originalSize > 0
      ? Math.round(
          ((result.originalSize - result.outputSize) /
            result.originalSize) *
            100
        )
      : 0;

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

              <Link
                href="/resize-image"
                className="transition hover:text-slate-900"
              >
                Resize Image
              </Link>

              <span>/</span>

              <span className="font-medium text-slate-900">
                Resize JPG
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
                Free Online JPG Resizer
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Resize JPG Images{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
                  Online
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                Resize JPG and JPEG images to any width and height online.
                Adjust the dimensions, control image quality, and download
                your resized JPG for free.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">
                  ✓ Custom dimensions
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">
                  ✓ JPG & JPEG supported
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">
                  ✓ Adjustable quality
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
                <div>
                  <h2 className="text-xl font-bold text-slate-950">
                    JPG Image Resizer
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Upload a JPG, choose your dimensions, and download the
                    resized image.
                  </p>
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
                      accept="image/jpeg,.jpg,.jpeg"
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
                    </div>
                  </div>
                )}

                {file && !result && (
                  <div className="space-y-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
                      {/* Preview */}
                      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                        <div className="flex min-h-[360px] items-center justify-center p-6">
                          {previewUrl && (
                            <img
                              src={previewUrl}
                              alt={`Preview of ${file.name}`}
                              className="max-h-[360px] max-w-full rounded-xl object-contain shadow-sm"
                            />
                          )}
                        </div>

                        <div className="border-t border-slate-200 bg-white px-5 py-4">
                          <p className="truncate text-sm font-semibold text-slate-800">
                            {file.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            Original JPG: {formatBytes(file.size)}
                          </p>
                        </div>
                      </div>

                      {/* Settings */}
                      <div className="rounded-2xl border border-slate-200 bg-white p-5">
                        <h3 className="font-bold text-slate-950">
                          Resize settings
                        </h3>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                              Width
                            </label>

                            <div className="relative mt-2">
                              <input
                                type="number"
                                min="1"
                                max="10000"
                                value={width}
                                onChange={(event) =>
                                  handleWidthChange(
                                    Number(event.target.value)
                                  )
                                }
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-12 text-sm font-semibold outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                              />

                              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400">
                                px
                              </span>
                            </div>
                          </div>

                          <div>
                            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                              Height
                            </label>

                            <div className="relative mt-2">
                              <input
                                type="number"
                                min="1"
                                max="10000"
                                value={height}
                                onChange={(event) =>
                                  handleHeightChange(
                                    Number(event.target.value)
                                  )
                                }
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-12 text-sm font-semibold outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                              />

                              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400">
                                px
                              </span>
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setLockRatio((value) => !value)}
                          className={`mt-4 flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                            lockRatio
                              ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                              : "border-slate-200 bg-slate-50 text-slate-600"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span>{lockRatio ? "🔒" : "🔓"}</span>
                            Lock aspect ratio
                          </span>

                          <span className="text-xs">
                            {lockRatio ? "ON" : "OFF"}
                          </span>
                        </button>

                        <div className="mt-5 rounded-2xl bg-indigo-50 p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                            Output dimensions
                          </p>

                          <p className="mt-1 text-2xl font-black text-slate-950">
                            {width || 0} × {height || 0}
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            JPG image
                          </p>
                        </div>

                        <label className="mt-5 block text-sm font-semibold text-slate-700">
                          JPG quality
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

                        <button
                          type="button"
                          onClick={processImage}
                          disabled={isProcessing}
                          className="mt-6 w-full rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isProcessing
                            ? "Resizing JPG..."
                            : "Resize JPG"}
                        </button>

                        <button
                          type="button"
                          onClick={startOver}
                          className="mt-3 w-full rounded-xl px-5 py-3 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                        >
                          Choose another JPG
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
                        Your resized JPG is ready
                      </h3>

                      <p className="mt-2 text-sm text-slate-600">
                        Your image has been resized to{" "}
                        <strong>
                          {result.width} × {result.height} pixels
                        </strong>
                        .
                      </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                      <div className="flex min-h-[360px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <img
                          src={result.url}
                          alt={`Resized JPG image ${result.width}x${result.height}`}
                          className="max-h-[330px] max-w-full rounded-xl object-contain shadow-md"
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
                              {result.width} × {result.height} px
                            </strong>
                          </div>

                          <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                            <span className="text-sm text-slate-500">
                              Format
                            </span>

                            <strong className="text-sm text-slate-900">
                              JPG
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

                          <div className="flex justify-between gap-4">
                            <span className="text-sm text-slate-500">
                              Output
                            </span>

                            <strong className="text-sm text-slate-900">
                              {formatBytes(result.outputSize)}
                            </strong>
                          </div>
                        </div>

                        {reduction > 0 && (
                          <div className="mt-5 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                            File size reduced by approximately {reduction}%
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={downloadResult}
                          className="mt-7 w-full rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-700"
                        >
                          Download Resized JPG
                        </button>

                        <button
                          type="button"
                          onClick={startOver}
                          className="mt-3 w-full rounded-xl px-5 py-3 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                        >
                          Resize Another JPG
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

        {/* JPG resizing information */}
        <section className="border-y border-slate-100 bg-slate-50/60">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
                Resize JPG Online
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Resize JPG images without complicated software
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Lets Resize It gives you a simple way to change the pixel
                dimensions of JPG and JPEG images directly in your browser.
                Choose the dimensions you need, adjust quality, and download
                the resized JPG.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Custom dimensions",
                  text: "Enter the exact width and height you need for your JPG image.",
                  icon: "↔",
                },
                {
                  title: "Keep proportions",
                  text: "Lock the aspect ratio to resize your image while keeping its original proportions.",
                  icon: "🔒",
                },
                {
                  title: "Control JPG quality",
                  text: "Adjust JPG quality to balance visual quality and output file size.",
                  icon: "⚙",
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
                Resize a JPG in three simple steps
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                No Photoshop or image editing software is required for a
                simple JPG resize.
              </p>

              <Link
                href="#resize-tool"
                className="mt-7 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-600"
              >
                Resize JPG now
              </Link>
            </div>

            <div className="space-y-4">
              {[
                [
                  "01",
                  "Upload your JPG",
                  "Choose a JPG or JPEG image from your computer or drag it into the upload area.",
                ],
                [
                  "02",
                  "Choose dimensions",
                  "Enter the width and height you need. Lock the aspect ratio if you want to preserve the original proportions.",
                ],
                [
                  "03",
                  "Download your JPG",
                  "Process the image and download your resized JPG instantly.",
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

        {/* SEO Content */}
        <section className="border-y border-slate-100 bg-white">
          <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
            <article className="prose prose-slate max-w-none">
              <h2>How to resize a JPG image online</h2>

              <p>
                Resizing a JPG image changes the image&apos;s pixel dimensions,
                such as reducing a large photograph to 1200×800 pixels or
                creating a smaller image for a website, application, form,
                profile, or document.
              </p>

              <p>
                With Lets Resize It, you can resize JPG and JPEG images
                directly in your browser. Upload your image, enter the target
                dimensions, choose whether to preserve the aspect ratio, and
                download the resulting JPG.
              </p>

              <h3>What is JPG resizing?</h3>

              <p>
                JPG resizing changes the width and height of an image in
                pixels. For example, an original image measuring 3000×2000
                pixels can be resized to 1500×1000 pixels while maintaining
                the same 3:2 aspect ratio.
              </p>

              <p>
                Resizing is different from simply cropping an image. A resize
                changes the dimensions of the complete image, while cropping
                removes part of the image.
              </p>

              <h3>Can I resize a JPG to a specific size?</h3>

              <p>
                Yes. You can enter the exact width and height required for
                your image. If you know the dimensions required by a website
                or application, enter those pixel values in the resize tool
                above.
              </p>

              <h3>How do I resize JPG without losing quality?</h3>

              <p>
                Image resizing can affect visual quality, particularly when a
                very large image is reduced substantially or a small image is
                enlarged. Using an appropriate output size and JPG quality
                setting can help maintain a good balance between appearance
                and file size.
              </p>

              <p>
                When reducing an image, avoiding unnecessarily aggressive
                compression can help preserve details. For web use, however,
                a smaller JPG can often provide faster loading while still
                looking good.
              </p>

              <h3>Resize JPG while keeping the aspect ratio</h3>

              <p>
                The aspect ratio describes the relationship between an image&apos;s
                width and height. Locking the aspect ratio helps prevent the
                image from becoming stretched or squashed when you change one
                dimension.
              </p>

              <p>
                If you need a specific square output such as 200×200 or
                300×300, use one of our fixed-dimension image resizing tools.
              </p>

              <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
                <Link
                  href="/resize-image-to-200x200"
                  className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                    200×200
                  </span>

                  <h4 className="mt-2 font-bold text-slate-950">
                    Resize to 200×200
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Create an exact 200×200 square image.
                  </p>
                </Link>

                <Link
                  href="/resize-image-to-300x300"
                  className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                    300×300
                  </span>

                  <h4 className="mt-2 font-bold text-slate-950">
                    Resize to 300×300
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Create an exact 300×300 square image.
                  </p>
                </Link>

                <Link
                  href="/resize-image-to-1080x1080"
                  className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                    1080×1080
                  </span>

                  <h4 className="mt-2 font-bold text-slate-950">
                    Resize to 1080×1080
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Create a large square image.
                  </p>
                </Link>
              </div>

              <h3>JPG resizing vs JPG compression</h3>

              <p>
                Resizing and compression solve different problems. Resizing
                changes the pixel dimensions of an image. Compression reduces
                the amount of data required to store the image and can reduce
                its file size.
              </p>

              <p>
                If your requirement is specifically a maximum file size such
                as 50 KB, 100 KB, 200 KB, or 500 KB, use one of our
                file-size-focused tools instead.
              </p>

              <div className="not-prose my-10 rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-300">
                  Need a smaller JPG?
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  Resize or compress your image
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  Choose the tool that matches your actual requirement.
                  Pixel dimensions and file size are separate properties of
                  an image.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/compress-image"
                    className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-indigo-50"
                  >
                    Compress JPG
                  </Link>

                  <Link
                    href="/resize-image-to-100-kb"
                    className="rounded-xl border border-slate-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    Resize to 100 KB
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
                JPG resizing questions
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {[
                [
                  "How do I resize a JPG image?",
                  "Upload your JPG image, enter the desired width and height, choose your quality setting, and process the image. You can then download the resized JPG.",
                ],
                [
                  "Can I resize JPG to a specific pixel size?",
                  "Yes. Enter the exact width and height you need in pixels. You can also lock the aspect ratio to maintain the original proportions.",
                ],
                [
                  "Can I resize a JPEG image?",
                  "Yes. JPG and JPEG are both supported by this tool.",
                ],
                [
                  "Will resizing a JPG reduce its file size?",
                  "It can. Reducing the pixel dimensions and choosing an appropriate JPG quality can result in a smaller output file, although the final file size depends on the image.",
                ],
                [
                  "Can I resize JPG without stretching it?",
                  "Yes. Enable the Lock aspect ratio option before changing the dimensions. This helps maintain the original width-to-height relationship.",
                ],
                [
                  "Is the JPG resizer free?",
                  "Yes. Lets Resize It provides this JPG resizing tool online for free.",
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
              Resize, compress, or convert your images with Lets Resize It.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "/resize-image",
                "Resize Image",
                "Resize images to custom dimensions",
              ],
              [
                "/resize-image",
                "Resize PNG",
                "Resize PNG images online",
              ],
              [
                "/webp-to-png",
                "Resize WebP",
                "Resize WebP images online",
              ],
              [
                "/convert-jpg-to-webp",
                "JPG to WebP",
                "Convert JPG images to WebP",
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

