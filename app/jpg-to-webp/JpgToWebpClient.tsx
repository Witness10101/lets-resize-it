"use client";

import {
  ChangeEvent,
  DragEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type ConversionStatus = "idle" | "ready" | "converting" | "converted" | "error";

interface ImageFile {
  file: File;
  previewUrl: string;
  width: number;
  height: number;
}

interface ConvertedImage {
  blob: Blob;
  url: string;
  size: number;
  width: number;
  height: number;
  filename: string;
}

const MAX_FILE_SIZE = 25 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/jpeg", "image/jpg"];

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function getCompressionPercentage(original: number, converted: number): number {
  if (!original || converted >= original) return 0;

  return Math.round(((original - converted) / original) * 100);
}

function createOutputFilename(filename: string): string {
  const withoutExtension = filename.replace(/\.[^/.]+$/, "");

  return `${withoutExtension}.webp`;
}

export default function JpgToWebpClient() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [image, setImage] = useState<ImageFile | null>(null);
  const [converted, setConverted] = useState<ConvertedImage | null>(null);

  const [quality, setQuality] = useState(85);
  const [status, setStatus] = useState<ConversionStatus>("idle");
  const [error, setError] = useState("");

  const [isDragging, setIsDragging] = useState(false);

  /*
   * Clean up object URLs when the component unmounts.
   */
  useEffect(() => {
    return () => {
      if (image?.previewUrl) {
        URL.revokeObjectURL(image.previewUrl);
      }

      if (converted?.url) {
        URL.revokeObjectURL(converted.url);
      }
    };
  }, [image, converted]);

  /*
   * Open the native file picker.
   */
  const openFilePicker = () => {
    inputRef.current?.click();
  };

  /*
   * Load an image and retrieve its natural dimensions.
   */
  const loadImageDimensions = (
    file: File,
    previewUrl: string
  ): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };

      img.onerror = () => {
        reject(new Error("The selected JPG image could not be read."));
      };

      img.src = previewUrl;
    });
  };

  /*
   * Validate and prepare a selected JPG file.
   */
  const processFile = useCallback(async (file: File) => {
    setError("");
    setConverted(null);

    if (!ACCEPTED_TYPES.includes(file.type.toLowerCase())) {
      setImage(null);
      setStatus("error");
      setError(
        "Please select a JPG or JPEG image. Other image formats are not supported by this converter."
      );
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setImage(null);
      setStatus("error");
      setError(
        "This image is larger than 25 MB. Please choose a smaller JPG file."
      );
      return;
    }

    if (file.size === 0) {
      setImage(null);
      setStatus("error");
      setError("The selected file appears to be empty. Please choose another JPG image.");
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    try {
      const dimensions = await loadImageDimensions(file, previewUrl);

      setImage({
        file,
        previewUrl,
        width: dimensions.width,
        height: dimensions.height,
      });

      setStatus("ready");
    } catch {
      URL.revokeObjectURL(previewUrl);

      setImage(null);
      setStatus("error");
      setError(
        "We couldn&apos;t read this image. Please try another JPG or JPEG file."
      );
    }
  }, []);

  /*
   * Handle file input changes.
   */
  const handleFileChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    await processFile(file);

    /*
     * Reset the input so selecting the same file again
     * still triggers onChange.
     */
    event.target.value = "";
  };

  /*
   * Drag events.
   */
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(false);
  };

  const handleDrop = async (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];

    if (!file) return;

    await processFile(file);
  };

  /*
   * Convert the JPG into WebP using the browser's Canvas API.
   */
  const convertToWebp = async () => {
    if (!image) return;

    setError("");
    setStatus("converting");

    /*
     * Give React/browser a moment to render the converting state
     * before starting canvas work.
     */
    await new Promise((resolve) => setTimeout(resolve, 50));

    try {
      const source = new Image();

      source.decoding = "async";

      const loaded = new Promise<void>((resolve, reject) => {
        source.onload = () => resolve();
        source.onerror = () =>
          reject(new Error("The JPG image could not be loaded."));
      });

      source.src = image.previewUrl;

      await loaded;

      const canvas = document.createElement("canvas");

      canvas.width = source.naturalWidth;
      canvas.height = source.naturalHeight;

      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error(
          "Your browser does not support the image conversion process."
        );
      }

      /*
       * Draw the original JPG onto the canvas.
       */
      context.drawImage(
        source,
        0,
        0,
        source.naturalWidth,
        source.naturalHeight
      );

      /*
       * Convert the canvas to WebP.
       */
      const outputQuality = Math.min(
        1,
        Math.max(0.01, quality / 100)
      );

      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob(
          (result) => resolve(result),
          "image/webp",
          outputQuality
        );
      });

      if (!blob) {
        throw new Error(
          "The browser could not create the WebP image. Please try again."
        );
      }

      const outputUrl = URL.createObjectURL(blob);

      const output: ConvertedImage = {
        blob,
        url: outputUrl,
        size: blob.size,
        width: source.naturalWidth,
        height: source.naturalHeight,
        filename: createOutputFilename(image.file.name),
      };

      setConverted(output);
      setStatus("converted");
    } catch (conversionError) {
      console.error("JPG to WebP conversion failed:", conversionError);

      setConverted(null);
      setStatus("error");

      setError(
        conversionError instanceof Error
          ? conversionError.message
          : "Something went wrong while converting the image. Please try again."
      );
    }
  };

  /*
   * Download the converted WebP file.
   */
  const downloadWebp = () => {
    if (!converted) return;

    const link = document.createElement("a");

    link.href = converted.url;
    link.download = converted.filename;

    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  /*
   * Reset the converter.
   */
  const resetConverter = () => {
    setImage(null);
    setConverted(null);
    setStatus("idle");
    setError("");
    setIsDragging(false);
    setQuality(85);
  };

  const savings =
    image && converted
      ? getCompressionPercentage(image.file.size, converted.size)
      : 0;

  return (
    <section
      id="jpg-to-webp-converter"
      aria-label="JPG to WebP image converter"
      className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.28)]">
        {/* =========================================================
            TOP BAR
        ========================================================== */}
        <div className="flex flex-col gap-4 border-b border-slate-100 bg-slate-50/70 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M4 7V5a1 1 0 0 1 1-1h2" />
                  <path d="M17 4h2a1 1 0 0 1 1 1v2" />
                  <path d="M20 17v2a1 1 0 0 1-1 1h-2" />
                  <path d="M7 20H5a1 1 0 0 1-1-1v-2" />
                  <path d="m8 8 8 8" />
                  <path d="m16 8-8 8" />
                </svg>
              </span>

              <div>
                <p className="text-sm font-semibold text-slate-950">
                  JPG to WebP Converter
                </p>

                <p className="text-xs text-slate-500">
                  Convert images directly in your browser
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Browser-based
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
              🔒 Private
            </span>
          </div>
        </div>

        {/* =========================================================
            MAIN CONVERTER
        ========================================================== */}
        <div className="p-4 sm:p-6 lg:p-8">
          {!image && status !== "error" && (
            <div
              role="button"
              tabIndex={0}
              onClick={openFilePicker}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openFilePicker();
                }
              }}
              onDragOver={handleDragOver}
              onDragEnter={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`group relative flex min-h-[330px] cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border-2 border-dashed px-6 py-12 text-center transition-all duration-200 ${
                isDragging
                  ? "border-blue-500 bg-blue-50/70"
                  : "border-slate-200 bg-slate-50/60 hover:border-blue-400 hover:bg-blue-50/30"
              }`}
            >
              <div
                className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl shadow-sm transition-transform duration-200 ${
                  isDragging
                    ? "scale-110 bg-blue-600 text-white"
                    : "bg-white text-blue-600 group-hover:scale-105"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-9 w-9"
                  aria-hidden="true"
                >
                  <path d="M12 16V4" />
                  <path d="m7 9 5-5 5 5" />
                  <path d="M5 20h14" />
                </svg>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                Drop your JPG image here
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                Or choose a JPG or JPEG file from your device. Your image is
                processed locally in your browser.
              </p>

              <span className="mt-7 inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md">
                Choose JPG Image
              </span>

              <p className="mt-4 text-xs text-slate-400">
                JPG / JPEG · Maximum 25 MB
              </p>
            </div>
          )}

          {status === "error" && !image && (
            <div className="rounded-[1.5rem] border border-red-200 bg-red-50 p-6 sm:p-8">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-red-600 shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-950">
                  We couldn&apos;t use that image
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={openFilePicker}
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Choose Another JPG
                </button>
              </div>
            </div>
          )}

          {image && (
            <>
              {/* =====================================================
                  IMAGE WORKSPACE
              ====================================================== */}
              <div className="grid gap-5 lg:grid-cols-2">
                {/* ORIGINAL */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        Original JPG
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        {formatFileSize(image.file.size)} · {image.width} ×{" "}
                        {image.height}px
                      </p>
                    </div>

                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                      JPG
                    </span>
                  </div>

                  <div className="flex min-h-[280px] items-center justify-center bg-[linear-gradient(45deg,#f1f5f9_25%,transparent_25%),linear-gradient(-45deg,#f1f5f9_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f1f5f9_75%),linear-gradient(-45deg,transparent_75%,#f1f5f9_75%)] bg-[length:24px_24px] bg-[position:0_0,0_12px,12px_-12px,-12px_0px] p-5">
                    <img
                      src={image.previewUrl}
                      alt={`Original JPG image preview of ${image.file.name}`}
                      className="max-h-[360px] max-w-full rounded-xl object-contain shadow-lg"
                    />
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        WebP Output
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        {converted
                          ? `${formatFileSize(converted.size)} · ${converted.width} × ${converted.height}px`
                          : "Your converted image will appear here"}
                      </p>
                    </div>

                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                      WEBP
                    </span>
                  </div>

                  <div className="flex min-h-[280px] items-center justify-center bg-[linear-gradient(45deg,#f1f5f9_25%,transparent_25%),linear-gradient(-45deg,#f1f5f9_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f1f5f9_75%),linear-gradient(-45deg,transparent_75%,#f1f5f9_75%)] bg-[length:24px_24px] bg-[position:0_0,0_12px,12px_-12px,-12px_0px] p-5">
                    {converted ? (
                      <img
                        src={converted.url}
                        alt={`Converted WebP image preview of ${converted.filename}`}
                        className="max-h-[360px] max-w-full rounded-xl object-contain shadow-lg"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center px-6 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-slate-300 shadow-sm">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            className="h-8 w-8"
                            aria-hidden="true"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="16"
                              rx="2"
                            />
                            <circle cx="8.5" cy="9" r="1.5" />
                            <path d="m21 15-4.5-4.5L8 19" />
                          </svg>
                        </div>

                        <p className="mt-4 text-sm font-medium text-slate-500">
                          Ready to convert
                        </p>

                        <p className="mt-1 max-w-xs text-xs leading-5 text-slate-400">
                          Your WebP preview will appear here after conversion.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* =====================================================
                  CONTROLS
              ====================================================== */}
              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="w-full lg:max-w-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <label
                          htmlFor="jpg-webp-quality"
                          className="text-sm font-semibold text-slate-950"
                        >
                          WebP quality
                        </label>

                        <p className="mt-1 text-xs text-slate-500">
                          Higher quality preserves more detail but may create a
                          larger file.
                        </p>
                      </div>

                      <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-700">
                        {quality}%
                      </span>
                    </div>

                    <input
                      id="jpg-webp-quality"
                      type="range"
                      min="40"
                      max="100"
                      step="1"
                      value={quality}
                      onChange={(event) =>
                        setQuality(Number(event.target.value))
                      }
                      disabled={status === "converting"}
                      className="mt-5 h-2 w-full cursor-pointer accent-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
                      aria-label={`WebP quality ${quality}%`}
                    />

                    <div className="mt-2 flex justify-between text-[11px] text-slate-400">
                      <span>Smaller file</span>
                      <span>Balanced</span>
                      <span>Maximum quality</span>
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
                    <button
                      type="button"
                      onClick={convertToWebp}
                      disabled={status === "converting"}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "converting" ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              stroke="currentColor"
                              strokeWidth="3"
                              className="opacity-30"
                            />
                            <path
                              d="M21 12a9 9 0 0 0-9-9"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                          </svg>
                          Converting...
                        </>
                      ) : converted ? (
                        "Convert Again"
                      ) : (
                        <>
                          Convert to WebP
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14" />
                            <path d="m13 6 6 6-6 6" />
                          </svg>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={resetConverter}
                      disabled={status === "converting"}
                      className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Start Over
                    </button>
                  </div>
                </div>
              </div>

              {/* =====================================================
                  CONVERSION RESULT
              ====================================================== */}
              {converted && (
                <div className="mt-5 overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50/60">
                  <div className="flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-6 w-6"
                          aria-hidden="true"
                        >
                          <path d="m5 12 4 4L19 6" />
                        </svg>
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-950">
                          Your WebP image is ready
                        </h3>

                        <p className="mt-1 text-sm text-slate-600">
                          {converted.filename}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                            JPG: {formatFileSize(image.file.size)}
                          </span>

                          <span className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                            WebP: {formatFileSize(converted.size)}
                          </span>

                          {savings > 0 && (
                            <span className="rounded-lg bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-700">
                              {savings}% smaller
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={downloadWebp}
                      className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M12 3v12" />
                        <path d="m7 10 5 5 5-5" />
                        <path d="M5 21h14" />
                      </svg>
                      Download WebP
                    </button>
                  </div>
                </div>
              )}

              {/* =====================================================
                  ERROR
              ====================================================== */}
              {error && image && (
                <div
                  role="alert"
                  className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  <div className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mt-0.5 h-5 w-5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 8v4" />
                      <path d="M12 16h.01" />
                    </svg>

                    <span>{error}</span>
                  </div>
                </div>
              )}
            </>
          )}

          {/* =========================================================
              PRIVACY / TRUST STRIP
          ========================================================== */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M12 3 5 6v5c0 4.5 2.9 8.3 7 10 4.1-1.7 7-5.5 7-10V6l-7-3Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Private
                  </p>
                  <p className="text-xs text-slate-500">
                    Files stay on your device
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
                  </svg>
                </span>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Fast
                  </p>
                  <p className="text-xs text-slate-500">
                    Conversion happens locally
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    No installation
                  </p>
                  <p className="text-xs text-slate-500">
                    Works directly in your browser
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            FOOTER NOTE
        ========================================================== */}
        <div className="border-t border-slate-100 bg-slate-50/60 px-5 py-4 text-center sm:px-7">
          <p className="text-xs leading-5 text-slate-500">
            JPG to WebP conversion is performed locally in your browser.
            Your original image does not need to be uploaded to a server.
          </p>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/jpg,.jpg,.jpeg"
        onChange={handleFileChange}
        className="sr-only"
        aria-label="Choose a JPG image"
      />
    </section>
  );
}
