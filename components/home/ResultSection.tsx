"use client";

import { useEffect, useMemo, useState } from "react";

import {
  resizeImage,
  ResizeOptions,
  ResizeResult,
} from "@/lib/image/resize";

import { ImageRequirements } from "@/components/home/RequirementPanel";

interface ResultSectionProps {
  file: File;
  requirements: ImageRequirements;
  onStartOver: () => void;
}

function formatFileSize(sizeInBytes: number): string {
  if (sizeInBytes < 1024) return `${sizeInBytes} B`;
  if (sizeInBytes < 1024 * 1024) {
    return `${(sizeInBytes / 1024).toFixed(1)} KB`;
  }
  return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
}

function getFormatLabel(type: string): string {
  if (type === "image/jpeg") return "JPG";
  if (type === "image/png") return "PNG";
  if (type === "image/webp") return "WEBP";
  return type.split("/").pop()?.toUpperCase() ?? "IMAGE";
}

function getExtension(type: string): string {
  if (type === "image/jpeg") return "jpg";
  if (type === "image/png") return "png";
  if (type === "image/webp") return "webp";
  return "jpg";
}

function getBaseFileName(fileName: string): string {
  return fileName.replace(/\.[^/.]+$/, "");
}

export function ResultSection({
  file,
  requirements,
  onStartOver,
}: ResultSectionProps) {
  const [result, setResult] = useState<ResizeResult | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [originalPreviewUrl, setOriginalPreviewUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /*
   * Convert RequirementPanel state into the exact options expected
   * by the resize engine.
   *
   * The explicit ResizeOptions["format"] type is important here.
   * Without it TypeScript can widen the ternary result to `string`,
   * which causes the TS2345 error seen in VS Code.
   */
  const resizeOptions = useMemo<ResizeOptions>(() => {
    let requestedFormat: ResizeOptions["format"];

    switch (requirements.format) {
      case "jpeg":
        requestedFormat = "image/jpeg";
        break;
      case "png":
        requestedFormat = "image/png";
        break;
      case "webp":
        requestedFormat = "image/webp";
        break;
      default:
        requestedFormat = undefined;
    }

    const requestedSizeKB =
      requirements.sizeLimit ?? requirements.customSize ?? undefined;

    const width =
      requirements.dimensionMode === "custom"
        ? requirements.width ?? undefined
        : undefined;

    const height =
      requirements.dimensionMode === "custom"
        ? requirements.height ?? undefined
        : undefined;

    return {
      width,
      height,
      maxFileSizeKB: requestedSizeKB,
      format: requestedFormat,
      exactDimensions: requirements.dimensionMode === "custom",
      quality: 1,
    };
  }, [requirements]);

  /* Original preview */
  useEffect(() => {
    const url = URL.createObjectURL(file);
    setOriginalPreviewUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  /* Process image */
  useEffect(() => {
    let cancelled = false;

    const processImage = async () => {
      setIsProcessing(true);
      setError(null);
      setResult(null);

      try {
        const output = await resizeImage(file, resizeOptions);

        if (cancelled) return;

        const url = URL.createObjectURL(output.blob);
        setResult(output);
        setPreviewUrl(url);
      } catch (processingError) {
        if (cancelled) return;

        setError(
          processingError instanceof Error
            ? processingError.message
            : "We couldn't optimize this image."
        );
      } finally {
        if (!cancelled) setIsProcessing(false);
      }
    };

    void processImage();

    return () => {
      cancelled = true;
    };
  }, [file, resizeOptions]);

  /* Cleanup optimized preview */
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleDownload = () => {
    if (!result) return;

    const extension = getExtension(result.type);
    const baseName = getBaseFileName(file.name);
    const downloadName = `${baseName}-optimized.${extension}`;

    const url = URL.createObjectURL(result.blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = downloadName;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const sizeReduction = result
    ? Math.max(0, ((file.size - result.blob.size) / file.size) * 100)
    : 0;

  const requestedLimit =
    requirements.sizeLimit ?? requirements.customSize ?? null;

  const isWithinLimit = requestedLimit
    ? Boolean(result && result.blob.size <= requestedLimit * 1024)
    : true;

  if (isProcessing) {
    return (
      <section
        id="result"
        aria-labelledby="result-heading"
        className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto w-full max-w-5xl">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              Step 3
            </span>
            <h2
              id="result-heading"
              className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
            >
              Optimizing your image
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              We&apos;re applying your requirements directly in your browser.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div
              className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"
              aria-hidden="true"
            />
            <p className="mt-5 text-sm font-semibold text-slate-900">
              Optimizing image...
            </p>
            <p className="mt-2 text-xs text-slate-500">
              This usually takes only a few seconds.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="result"
        aria-labelledby="result-error-heading"
        className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto w-full max-w-3xl">
          <div className="rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-600">
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
            </div>

            <h2
              id="result-error-heading"
              className="mt-5 text-xl font-bold text-slate-950"
            >
              We couldn&apos;t optimize this image
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
              {error}
            </p>
            <button
              type="button"
              onClick={onStartOver}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Try another image
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!result || !previewUrl) return null;

  return (
    <section
      id="result"
      aria-labelledby="result-heading"
      className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            Ready
          </span>

          <h2
            id="result-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
          >
            Your image is ready
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Review the result and download your optimized image.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Original */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-950">Original</p>
                <p className="mt-1 truncate text-xs text-slate-500">
                  {file.name}
                </p>
              </div>

              <span className="ml-4 shrink-0 text-sm font-medium text-slate-600">
                {formatFileSize(file.size)}
              </span>
            </div>

            <div className="flex min-h-[280px] items-center justify-center bg-slate-100 p-5 sm:min-h-[340px]">
              {originalPreviewUrl && (
                <img
                  src={originalPreviewUrl}
                  alt={`Original ${file.name}`}
                  className="max-h-[340px] max-w-full rounded-lg object-contain shadow-sm"
                />
              )}
            </div>
          </div>

          {/* Optimized */}
          <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-emerald-100 px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-slate-950">Optimized</p>
                <p className="mt-1 text-xs font-medium text-emerald-600">
                  {getFormatLabel(result.type)}
                </p>
              </div>

              <span className="text-sm font-semibold text-emerald-600">
                {formatFileSize(result.blob.size)}
              </span>
            </div>

            <div className="flex min-h-[280px] items-center justify-center bg-slate-100 p-5 sm:min-h-[340px]">
              <img
                src={previewUrl}
                alt="Optimized image preview"
                className="max-h-[340px] max-w-full rounded-lg object-contain shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">Optimized size</p>
              <p className="mt-1 text-sm font-bold text-slate-950">
                {formatFileSize(result.blob.size)}
              </p>
              {requestedLimit && (
                <p className="mt-1 text-xs text-slate-500">
                  Limit: {requestedLimit} KB
                </p>
              )}
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">Dimensions</p>
              <p className="mt-1 text-sm font-bold text-slate-950">
                {result.width} × {result.height}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">Format</p>
              <p className="mt-1 text-sm font-bold text-slate-950">
                {getFormatLabel(result.type)}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">Size change</p>
              <p className="mt-1 text-sm font-bold text-emerald-600">
                {sizeReduction.toFixed(1)}% smaller
              </p>
            </div>
          </div>

          {requestedLimit && (
            <div
              className={`mt-4 flex items-center gap-3 rounded-xl border px-4 py-3 ${
                isWithinLimit
                  ? "border-emerald-100 bg-emerald-50"
                  : "border-red-100 bg-red-50"
              }`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  isWithinLimit
                    ? "bg-emerald-100 text-emerald-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {isWithinLimit ? (
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                ) : (
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                )}
              </div>

              <div>
                <p
                  className={`text-sm font-semibold ${
                    isWithinLimit ? "text-emerald-800" : "text-red-800"
                  }`}
                >
                  {isWithinLimit
                    ? `Within your ${requestedLimit} KB size limit`
                    : `Above your ${requestedLimit} KB size limit`}
                </p>

                <p
                  className={`mt-0.5 text-xs ${
                    isWithinLimit ? "text-emerald-700" : "text-red-700"
                  }`}
                >
                  {isWithinLimit
                    ? "Your image meets the requested file-size requirement."
                    : "The output could not meet the requested file-size requirement with the current image settings."}
                </p>
              </div>
            </div>
          )}

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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
              Download image
            </button>

            <button
              type="button"
              onClick={onStartOver}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Resize another
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
            Your image was processed locally in your browser. It was not
            uploaded to a server.
          </div>
        </div>
      </div>
    </section>
  );
}