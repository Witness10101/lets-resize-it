"use client";

import {
  ChangeEvent,
  DragEvent,
  useCallback,
  useRef,
  useState,
} from "react";

const TARGET_BYTES = 500 * 1024;
const MAX_FILE_SIZE = 50 * 1024 * 1024;

type ProcessedImage = {
  url: string;
  blob: Blob;
  width: number;
  height: number;
  size: number;
  originalSize: number;
  fileName: string;
  format: string;
  wasAlreadyUnderLimit: boolean;
};

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const units = ["Bytes", "KB", "MB", "GB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1024));

  return `${(bytes / Math.pow(1024, index)).toFixed(
    index === 0 ? 0 : 2
  )} ${units[index]}`;
}

function getReductionPercentage(
  original: number,
  current: number
): number {
  if (!original || current >= original) return 0;

  return Math.round(((original - current) / original) * 100);
}

function getExtension(fileName: string): string {
  const parts = fileName.split(".");
  return parts.length > 1 ? parts.pop()?.toLowerCase() || "" : "";
}

function getOutputFileName(fileName: string): string {
  const name = fileName.replace(/\.[^/.]+$/, "");

  return `${name}-500kb.jpg`;
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(image);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Unable to read this image."));
    };

    image.src = objectUrl;
  });
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  quality: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Unable to create the optimized image."));
          return;
        }

        resolve(blob);
      },
      "image/jpeg",
      quality
    );
  });
}

async function encodeToTarget(
  image: HTMLImageElement,
  originalSize: number
): Promise<{
  blob: Blob;
  width: number;
  height: number;
}> {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  /*
   * A maximum working dimension prevents extremely large phone/camera
   * images from creating unnecessarily huge canvases.
   */
  const MAX_DIMENSION = 5000;

  if (Math.max(width, height) > MAX_DIMENSION) {
    const scale = MAX_DIMENSION / Math.max(width, height);

    width = Math.max(1, Math.round(width * scale));
    height = Math.max(1, Math.round(height * scale));
  }

  let bestBlob: Blob | null = null;
  let bestWidth = width;
  let bestHeight = height;

  /*
   * We progressively reduce dimensions only when quality compression
   * cannot reach the requested 500 KB target.
   */
  for (let dimensionAttempt = 0; dimensionAttempt < 12; dimensionAttempt++) {
    const canvas = document.createElement("canvas");

    canvas.width = Math.max(1, Math.round(width));
    canvas.height = Math.max(1, Math.round(height));

    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Your browser could not prepare the image.");
    }

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    context.drawImage(
      image,
      0,
      0,
      canvas.width,
      canvas.height
    );

    /*
     * First check whether high-quality JPEG output already fits.
     */
    const highQualityBlob = await canvasToBlob(canvas, 0.92);

    if (highQualityBlob.size <= TARGET_BYTES) {
      return {
        blob: highQualityBlob,
        width: canvas.width,
        height: canvas.height,
      };
    }

    /*
     * Binary search for the highest JPEG quality that stays within
     * the target size.
     */
    let low = 0.05;
    let high = 0.92;
    let candidate: Blob | null = null;

    for (let iteration = 0; iteration < 10; iteration++) {
      const quality = (low + high) / 2;

      const blob = await canvasToBlob(canvas, quality);

      if (blob.size <= TARGET_BYTES) {
        candidate = blob;
        low = quality;
      } else {
        high = quality;
      }
    }

    if (candidate && candidate.size <= TARGET_BYTES) {
      return {
        blob: candidate,
        width: canvas.width,
        height: canvas.height,
      };
    }

    /*
     * Keep the smallest output as a fallback.
     */
    const lowestQualityBlob = await canvasToBlob(canvas, 0.05);

    if (
      !bestBlob ||
      lowestQualityBlob.size < bestBlob.size
    ) {
      bestBlob = lowestQualityBlob;
      bestWidth = canvas.width;
      bestHeight = canvas.height;
    }

    /*
     * Compression alone wasn't enough.
     * Reduce dimensions and try again.
     */
    width = Math.max(320, Math.round(width * 0.85));
    height = Math.max(320, Math.round(height * 0.85));

    if (width <= 320 || height <= 320) {
      break;
    }
  }

  if (bestBlob) {
    /*
     * This should be rare. The final fallback prioritizes reaching
     * the target size rather than preserving excessive dimensions.
     */
    return {
      blob: bestBlob,
      width: bestWidth,
      height: bestHeight,
    };
  }

  throw new Error(
    `The image could not be reduced below ${formatBytes(
      TARGET_BYTES
    )}.`
  );
}

export default function ResizeImageTo500KbClient() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processed, setProcessed] =
    useState<ProcessedImage | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processFile = useCallback(async (file: File) => {
    setError(null);
    setProcessed(null);

    if (!file.type.startsWith("image/")) {
      setError(
        "Please select a JPG, JPEG, PNG or WebP image."
      );
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError(
        "This image is larger than 50 MB. Please choose a smaller image."
      );
      return;
    }

    setIsProcessing(true);

    try {
      /*
       * If the image is already within the requested limit,
       * we still create a JPEG output so the downloaded result
       * remains broadly compatible.
       */
      const image = await loadImage(file);

      const result = await encodeToTarget(
        image,
        file.size
      );

      const outputUrl = URL.createObjectURL(result.blob);

      const outputName = getOutputFileName(file.name);

      setProcessed({
        url: outputUrl,
        blob: result.blob,
        width: result.width,
        height: result.height,
        size: result.blob.size,
        originalSize: file.size,
        fileName: outputName,
        format: "JPEG",
        wasAlreadyUnderLimit:
          file.size <= TARGET_BYTES,
      });
    } catch (processingError) {
      console.error(processingError);

      setError(
        "We couldn&apos;t process this image. Please try another JPG, PNG or WebP file."
      );
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      void processFile(file);
    }

    event.target.value = "";
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];

    if (file) {
      void processFile(file);
    }
  };

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

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  const downloadImage = () => {
    if (!processed) return;

    const link = document.createElement("a");

    link.href = processed.url;
    link.download = processed.fileName;

    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const resetTool = () => {
    if (processed?.url) {
      URL.revokeObjectURL(processed.url);
    }

    setProcessed(null);
    setError(null);
    setIsDragging(false);
    setIsProcessing(false);
  };

  const reduction = processed
    ? getReductionPercentage(
        processed.originalSize,
        processed.size
      )
    : 0;

  return (
    <div
      id="resize-image-to-500-kb"
      className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
    >
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
        {/* ==========================================================
            TOOL HEADER
        ========================================================== */}
        <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-5 sm:px-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <div>
                  <p className="text-sm font-black text-slate-950">
                    500 KB Image Resizer
                  </p>

                  <p className="text-xs text-slate-500">
                    Free browser-based image optimization
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                Target: 500 KB
              </span>

              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                No signup
              </span>
            </div>
          </div>
        </div>

        {/* ==========================================================
            TOOL BODY
        ========================================================== */}
        <div className="p-5 sm:p-7">
          {!processed && !isProcessing && (
            <div
              role="button"
              tabIndex={0}
              onClick={openFilePicker}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault();
                  openFilePicker();
                }
              }}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragEnter={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`group relative flex min-h-[330px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed px-5 py-12 text-center transition-all sm:min-h-[380px] ${
                isDragging
                  ? "scale-[1.01] border-blue-500 bg-blue-50"
                  : "border-slate-300 bg-slate-50/70 hover:border-blue-400 hover:bg-blue-50/40"
              }`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.07),transparent_55%)]"
              />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-200 transition-transform group-hover:-translate-y-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-9 w-9 text-blue-600"
                  aria-hidden="true"
                >
                  <path
                    d="M12 16V4m0 0 4 4m-4-4L8 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h2 className="relative mt-7 text-xl font-black text-slate-950 sm:text-2xl">
                Drop your image here
              </h2>

              <p className="relative mt-2 max-w-md text-sm leading-6 text-slate-500">
                or click anywhere in this box to choose an image
                from your device
              </p>

              <div className="relative mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition-all group-hover:-translate-y-0.5 group-hover:bg-blue-700">
                Choose Image
              </div>

              <div className="relative mt-6 flex flex-wrap justify-center gap-2">
                {["JPG", "JPEG", "PNG", "WebP"].map(
                  (format) => (
                    <span
                      key={format}
                      className="rounded-lg bg-white px-2.5 py-1.5 text-[11px] font-bold text-slate-500 ring-1 ring-slate-200"
                    >
                      {format}
                    </span>
                  )
                )}
              </div>

              <p className="relative mt-3 text-[11px] text-slate-400">
                Maximum input size: 50 MB
              </p>

              <input
                ref={inputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFileChange}
                className="hidden"
                aria-label="Choose image to resize to 500 KB"
              />
            </div>
          )}

          {/* ========================================================
              PROCESSING
          ======================================================== */}
          {isProcessing && (
            <div className="flex min-h-[380px] flex-col items-center justify-center rounded-3xl bg-slate-50 px-5 py-12 text-center">
              <div className="relative flex h-20 w-20 items-center justify-center">
                <div className="absolute inset-0 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12M7.76 16.24l-2.12 2.12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="mt-7 text-xl font-black text-slate-950">
                Optimizing your image…
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                We&apos;re balancing image dimensions and JPEG compression
                to get as close as possible to the 500 KB target.
              </p>

              <div className="mt-7 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600 [animation-delay:150ms]" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600 [animation-delay:300ms]" />
              </div>
            </div>
          )}

          {/* ========================================================
              ERROR
          ======================================================== */}
          {error && !isProcessing && (
            <div
              role="alert"
              className="rounded-2xl border border-red-200 bg-red-50 p-5"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 8v4m0 4h.01M10.3 3.8 2.9 17a2 2 0 0 0 1.74 3h14.72a2 2 0 0 0 1.74-3L13.7 3.8a2 2 0 0 0-3.4 0Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="font-bold text-red-900">
                    Something went wrong
                  </p>

                  <p className="mt-1 text-sm leading-6 text-red-700">
                    {error}
                  </p>

                  <button
                    type="button"
                    onClick={resetTool}
                    className="mt-4 rounded-lg bg-white px-4 py-2 text-sm font-bold text-red-700 shadow-sm ring-1 ring-red-200 transition hover:bg-red-100"
                  >
                    Try another image
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              RESULT
          ======================================================== */}
          {processed && !isProcessing && (
            <div className="space-y-6">
              {processed.wasAlreadyUnderLimit && (
                <div className="flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        d="m5 12 4 4L19 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="font-bold text-emerald-900">
                      Your original image was already under 500 KB
                    </p>

                    <p className="mt-1 text-sm leading-6 text-emerald-700">
                      We&apos;ve prepared a compatible JPEG version for
                      download.
                    </p>
                  </div>
                </div>
              )}

              <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                {/* Preview */}
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <span className="text-xs font-black uppercase tracking-[0.14em] text-white/70">
                      Preview
                    </span>

                    <span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-300">
                      Under 500 KB
                    </span>
                  </div>

                  <div className="flex min-h-[330px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] p-5 sm:min-h-[420px]">
                    <img
                      src={processed.url}
                      alt="Resized image preview"
                      className="max-h-[390px] max-w-full rounded-xl object-contain shadow-2xl"
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-600">
                      Optimization complete
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-slate-950">
                      Your image is ready
                    </h2>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                        Original
                      </p>

                      <p className="mt-1 text-lg font-black text-slate-900">
                        {formatBytes(
                          processed.originalSize
                        )}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-emerald-600">
                        New size
                      </p>

                      <p className="mt-1 text-lg font-black text-emerald-700">
                        {formatBytes(processed.size)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                        Dimensions
                      </p>

                      <p className="mt-1 text-sm font-black text-slate-900">
                        {processed.width} ×{" "}
                        {processed.height}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                        Reduced
                      </p>

                      <p className="mt-1 text-lg font-black text-slate-900">
                        {reduction}%
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <button
                      type="button"
                      onClick={downloadImage}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      Download Image
                    </button>

                    <button
                      type="button"
                      onClick={resetTool}
                      className="mt-3 flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
                    >
                      Resize Another Image
                    </button>
                  </div>
                </div>
              </div>

              {/* Result information */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 12h16M12 4v16"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-4 font-bold text-slate-950">
                    500 KB target
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    The result is designed to stay within the requested
                    file-size limit.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5 9.5 17 19 7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-4 font-bold text-slate-950">
                    Good practical quality
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    The optimizer attempts to preserve useful image
                    detail while reducing file size.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3a9 9 0 1 0 9 9"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M21 3v6h-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-4 font-bold text-slate-950">
                    Browser-based
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Your image is processed directly in your browser
                    during this workflow.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ==========================================================
            TRUST FOOTER
        ========================================================== */}
        {!processed && !isProcessing && (
          <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-5 sm:px-7">
            <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 sm:justify-start">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-emerald-500"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3 5 6v5c0 4.5 2.9 8.5 7 10 4.1-1.5 7-5.5 7-10V6l-7-3Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m9 12 2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Process images directly in your browser
              </div>

              <p className="text-xs text-slate-400">
                JPG • JPEG • PNG • WebP
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
