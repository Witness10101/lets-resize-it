"use client";

import {
  ChangeEvent,
  DragEvent,
  useRef,
  useState,
} from "react";

import {
  analyzeImage,
  ImageAnalysis,
} from "@/lib/image/analyze";

import {
  resizeImage,
  ResizeResult,
} from "@/lib/image/resize";

type SizeOption = "none" | "50" | "100" | "500" | "custom";

type DimensionMode = "original" | "custom";

type FormatOption =
  | "original"
  | "jpeg"
  | "png"
  | "webp";

interface ImageRequirements {
  sizeLimit: number | null;
  customSize: number | null;
  dimensionMode: DimensionMode;
  width: number | null;
  height: number | null;
  format: FormatOption;
}

const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const MAX_FILE_SIZE = 25 * 1024 * 1024;

function formatFileSize(sizeInBytes: number): string {
  if (sizeInBytes < 1024) {
    return `${sizeInBytes} B`;
  }

  if (sizeInBytes < 1024 * 1024) {
    return `${(sizeInBytes / 1024).toFixed(1)} KB`;
  }

  return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
}

function getFormatLabel(type: string): string {
  if (type === "image/jpeg") {
    return "JPG";
  }

  if (type === "image/png") {
    return "PNG";
  }

  if (type === "image/webp") {
    return "WebP";
  }

  return "IMAGE";
}

function getExtension(type: string): string {
  if (type === "image/jpeg") {
    return "jpg";
  }

  if (type === "image/png") {
    return "png";
  }

  if (type === "image/webp") {
    return "webp";
  }

  return "jpg";
}

function getBaseFileName(fileName: string): string {
  return fileName.replace(/\.[^/.]+$/, "");
}

export function ResizeTool() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);

  const [analysis, setAnalysis] =
    useState<ImageAnalysis | null>(null);

  const [isDragging, setIsDragging] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  const [isAnalyzing, setIsAnalyzing] =
    useState(false);

  const [isProcessing, setIsProcessing] =
    useState(false);

  const [result, setResult] =
    useState<ResizeResult | null>(null);

  const [previewUrl, setPreviewUrl] =
    useState<string | null>(null);

  const [originalPreviewUrl, setOriginalPreviewUrl] =
    useState<string | null>(null);

  /*
   * Requirements
   */
  const [sizeOption, setSizeOption] =
    useState<SizeOption>("none");

  const [customSize, setCustomSize] =
    useState("");

  const [dimensionMode, setDimensionMode] =
    useState<DimensionMode>("original");

  const [width, setWidth] =
    useState("");

  const [height, setHeight] =
    useState("");

  const [format, setFormat] =
    useState<FormatOption>("original");

  /*
   * Open file picker
   */
  const openFilePicker = () => {
    inputRef.current?.click();
  };

  /*
   * Handle selected file
   */
  const handleFile = async (selectedFile: File) => {
    setError(null);
    setResult(null);

    if (!ACCEPTED_FILE_TYPES.includes(selectedFile.type)) {
      setError(
        "Please choose a JPG, PNG, or WebP image."
      );
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setError(
        "This image is larger than the 25 MB limit."
      );
      return;
    }

    try {
      setIsAnalyzing(true);

      const imageAnalysis =
        await analyzeImage(selectedFile);

      const originalUrl =
        URL.createObjectURL(selectedFile);

      setFile(selectedFile);
      setAnalysis(imageAnalysis);
      setOriginalPreviewUrl(originalUrl);
      setPreviewUrl(null);
    } catch {
      setError(
        "We couldn't read this image. Please try another image."
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  /*
   * File picker change
   */
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile =
      event.target.files?.[0];

    if (selectedFile) {
      void handleFile(selectedFile);
    }
  };

  /*
   * Drag & drop
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

    const droppedFile =
      event.dataTransfer.files?.[0];

    if (droppedFile) {
      void handleFile(droppedFile);
    }
  };

  /*
   * Reset everything
   */
  const resetTool = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (originalPreviewUrl) {
      URL.revokeObjectURL(originalPreviewUrl);
    }

    setFile(null);
    setAnalysis(null);
    setResult(null);
    setPreviewUrl(null);
    setOriginalPreviewUrl(null);
    setError(null);
    setIsProcessing(false);

    setSizeOption("none");
    setCustomSize("");
    setDimensionMode("original");
    setWidth("");
    setHeight("");
    setFormat("original");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  /*
   * Process image
   */
  const handleOptimize = async () => {
    if (!file) {
      return;
    }

    setError(null);
    setResult(null);

    setIsProcessing(true);

    try {
      const requestedFormat =
        format === "jpeg"
          ? "image/jpeg"
          : format === "png"
            ? "image/png"
            : format === "webp"
              ? "image/webp"
              : undefined;

      const maxFileSizeKB =
        sizeOption === "custom"
          ? customSize
            ? Number(customSize)
            : undefined
          : sizeOption === "none"
            ? undefined
            : Number(sizeOption);

      const output =
        await resizeImage(file, {
          width:
            dimensionMode === "custom" &&
            width
              ? Number(width)
              : undefined,

          height:
            dimensionMode === "custom" &&
            height
              ? Number(height)
              : undefined,

          format: requestedFormat,

          maxFileSizeKB,

          exactDimensions: true,

          quality: 1,
        });

      const url =
        URL.createObjectURL(output.blob);

      setResult(output);
      setPreviewUrl(url);
    } catch (processingError) {
      const message =
        processingError instanceof Error
          ? processingError.message
          : "We couldn't optimize this image.";

      setError(message);
    } finally {
      setIsProcessing(false);
    }
  };

  /*
   * Download
   */
  const handleDownload = () => {
    if (!result || !file) {
      return;
    }

    const extension =
      getExtension(result.type);

    const baseName =
      getBaseFileName(file.name);

    const downloadName =
      `${baseName}-resized.${extension}`;

    const url =
      URL.createObjectURL(result.blob);

    const anchor =
      document.createElement("a");

    anchor.href = url;
    anchor.download = downloadName;

    document.body.appendChild(anchor);

    anchor.click();

    anchor.remove();

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
  };

  /*
   * Size limit status
   */
  const requestedLimit =
    sizeOption === "custom"
      ? customSize
        ? Number(customSize)
        : null
      : sizeOption === "none"
        ? null
        : Number(sizeOption);

  const isWithinLimit =
    result && requestedLimit
      ? result.blob.size <=
        requestedLimit * 1024
      : true;

  /*
   * Size reduction
   */
  const sizeReduction =
    file && result
      ? Math.max(
          0,
          ((file.size - result.blob.size) /
            file.size) *
            100
        )
      : 0;

  return (
    <section
      id="resize-tool"
      aria-labelledby="resize-tool-title"
      className="scroll-mt-20 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Free image resizing tool
          </span>

          <h2
            id="resize-tool-title"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
          >
            Resize your image
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Set exact dimensions, control the maximum file
            size, and choose your preferred image format.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div
            role="alert"
            className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700"
          >
            {error}
          </div>
        )}

        {/* Upload */}
        {!file && !isAnalyzing && (
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
            onDragOver={handleDragOver}
            onDragEnter={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`group cursor-pointer rounded-2xl border-2 border-dashed bg-white p-8 text-center shadow-sm transition-all duration-200 sm:p-12 ${
              isDragging
                ? "border-blue-500 bg-blue-50/60 shadow-md"
                : "border-slate-300 hover:border-blue-400 hover:bg-blue-50/20"
            }`}
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleInputChange}
              className="sr-only"
              aria-label="Choose an image"
            />

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-transform duration-200 group-hover:scale-105">
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

            <h3 className="mt-5 text-lg font-semibold text-slate-950">
              {isDragging
                ? "Drop your image here"
                : "Drop an image here or choose a file"}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              JPG, PNG, or WebP · Maximum 25 MB
            </p>

            <span className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors group-hover:bg-blue-700">
              Choose an image
            </span>

            <p className="mt-5 text-xs text-slate-400">
              Your image is processed locally in your browser.
            </p>
          </div>
        )}

        {/* Analyzing */}
        {isAnalyzing && (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div
              className="mx-auto h-9 w-9 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"
              aria-hidden="true"
            />

            <p className="mt-4 text-sm font-semibold text-slate-900">
              Reading your image...
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Checking dimensions and file information.
            </p>
          </div>
        )}

        {/* Configuration */}
        {file && analysis && !isProcessing && !result && (
          <div className="space-y-6">
            {/* Selected file */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect
                        width="18"
                        height="18"
                        x="3"
                        y="3"
                        rx="2"
                      />
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="1.5"
                      />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-950">
                      {analysis.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {analysis.format} ·{" "}
                      {formatFileSize(analysis.size)} ·{" "}
                      {analysis.width} × {analysis.height}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={resetTool}
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Choose another
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              {/* File size */}
              <div>
                <h3 className="text-sm font-semibold text-slate-950">
                  Maximum file size
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Set a maximum output size when a website or
                  application has an upload limit.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {[
                    {
                      value: "none" as SizeOption,
                      label: "No limit",
                    },
                    {
                      value: "50" as SizeOption,
                      label: "50 KB",
                    },
                    {
                      value: "100" as SizeOption,
                      label: "100 KB",
                    },
                    {
                      value: "500" as SizeOption,
                      label: "500 KB",
                    },
                    {
                      value: "custom" as SizeOption,
                      label: "Custom",
                    },
                  ].map((option) => {
                    const selected =
                      sizeOption === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setSizeOption(
                            option.value
                          )
                        }
                        className={`rounded-xl border px-3 py-3 text-sm font-medium transition-all ${
                          selected
                            ? "border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600"
                            : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>

                {sizeOption === "custom" && (
                  <div className="mt-4 max-w-xs">
                    <label
                      htmlFor="resize-custom-size"
                      className="mb-2 block text-xs font-medium text-slate-700"
                    >
                      Maximum size in KB
                    </label>

                    <div className="relative">
                      <input
                        id="resize-custom-size"
                        type="number"
                        min="1"
                        placeholder="e.g. 250"
                        value={customSize}
                        onChange={(event) =>
                          setCustomSize(
                            event.target.value
                          )
                        }
                        className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 pr-12 text-sm text-slate-950 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />

                      <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs font-medium text-slate-400">
                        KB
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="my-7 h-px bg-slate-100" />

              {/* Dimensions */}
              <div>
                <h3 className="text-sm font-semibold text-slate-950">
                  Dimensions
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Preserve the original dimensions or specify an
                  exact width and height.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() =>
                      setDimensionMode(
                        "original"
                      )
                    }
                    className={`rounded-xl border px-4 py-3 text-left transition-all ${
                      dimensionMode ===
                      "original"
                        ? "border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600"
                        : "border-slate-200 text-slate-700 hover:border-blue-300"
                    }`}
                  >
                    <span className="block text-sm font-semibold">
                      Keep original
                    </span>

                    <span className="mt-1 block text-xs opacity-75">
                      Preserve current dimensions
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setDimensionMode(
                        "custom"
                      )
                    }
                    className={`rounded-xl border px-4 py-3 text-left transition-all ${
                      dimensionMode ===
                      "custom"
                        ? "border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600"
                        : "border-slate-200 text-slate-700 hover:border-blue-300"
                    }`}
                  >
                    <span className="block text-sm font-semibold">
                      Custom dimensions
                    </span>

                    <span className="mt-1 block text-xs opacity-75">
                      Set exact dimensions
                    </span>
                  </button>
                </div>

                {dimensionMode ===
                  "custom" && (
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="resize-width"
                        className="mb-2 block text-xs font-medium text-slate-700"
                      >
                        Width
                      </label>

                      <div className="relative">
                        <input
                          id="resize-width"
                          type="number"
                          min="1"
                          placeholder="e.g. 600"
                          value={width}
                          onChange={(event) =>
                            setWidth(
                              event.target.value
                            )
                          }
                          className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 pr-12 text-sm text-slate-950 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs font-medium text-slate-400">
                          px
                        </span>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="resize-height"
                        className="mb-2 block text-xs font-medium text-slate-700"
                      >
                        Height
                      </label>

                      <div className="relative">
                        <input
                          id="resize-height"
                          type="number"
                          min="1"
                          placeholder="e.g. 600"
                          value={height}
                          onChange={(event) =>
                            setHeight(
                              event.target.value
                            )
                          }
                          className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 pr-12 text-sm text-slate-950 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs font-medium text-slate-400">
                          px
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="my-7 h-px bg-slate-100" />

              {/* Format */}
              <div>
                <h3 className="text-sm font-semibold text-slate-950">
                  Output format
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Choose the format you want for the resized image.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    {
                      value:
                        "original" as FormatOption,
                      label: "Keep original",
                    },
                    {
                      value:
                        "jpeg" as FormatOption,
                      label: "JPG",
                    },
                    {
                      value:
                        "png" as FormatOption,
                      label: "PNG",
                    },
                    {
                      value:
                        "webp" as FormatOption,
                      label: "WebP",
                    },
                  ].map((option) => {
                    const selected =
                      format ===
                      option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setFormat(
                            option.value
                          )
                        }
                        className={`rounded-xl border px-3 py-3 text-sm font-medium transition-all ${
                          selected
                            ? "border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600"
                            : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action */}
              <div className="mt-7 border-t border-slate-100 pt-6">
                <button
                  type="button"
                  onClick={() =>
                    void handleOptimize()
                  }
                  disabled={
                    dimensionMode ===
                      "custom" &&
                    (!width ||
                      !height)
                  }
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Resize & Optimize

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
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </button>

                <p className="mt-3 text-center text-xs text-slate-500">
                  Processing happens directly in your browser.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Processing */}
        {isProcessing && (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div
              className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"
              aria-hidden="true"
            />

            <p className="mt-5 text-sm font-semibold text-slate-900">
              Optimizing your image...
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Applying your dimensions, format, and file-size
              requirements.
            </p>
          </div>
        )}

        {/* Result */}
        {result &&
          previewUrl &&
          file && (
            <div className="space-y-5">
              <div className="grid gap-5 lg:grid-cols-2">
                {/* Original */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        Original
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {analysis?.width} ×{" "}
                        {analysis?.height}
                      </p>
                    </div>

                    <span className="text-sm font-medium text-slate-600">
                      {formatFileSize(
                        file.size
                      )}
                    </span>
                  </div>

                  <div className="flex min-h-[280px] items-center justify-center bg-slate-100 p-5">
                    {originalPreviewUrl && (
                      <img
                        src={
                          originalPreviewUrl
                        }
                        alt={`Original ${file.name}`}
                        className="max-h-[340px] max-w-full rounded-lg object-contain shadow-sm"
                      />
                    )}
                  </div>
                </div>

                {/* Result */}
                <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-emerald-100 px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        Resized image
                      </p>

                      <p className="mt-1 text-xs font-medium text-emerald-600">
                        {getFormatLabel(
                          result.type
                        )}
                      </p>
                    </div>

                    <span className="text-sm font-semibold text-emerald-600">
                      {formatFileSize(
                        result.blob.size
                      )}
                    </span>
                  </div>

                  <div className="flex min-h-[280px] items-center justify-center bg-slate-100 p-5">
                    <img
                      src={previewUrl}
                      alt="Resized image preview"
                      className="max-h-[340px] max-w-full rounded-lg object-contain shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-500">
                      File size
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-950">
                      {formatFileSize(
                        result.blob.size
                      )}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-500">
                      Dimensions
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-950">
                      {result.width} ×{" "}
                      {result.height}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-500">
                      Format
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-950">
                      {getFormatLabel(
                        result.type
                      )}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-500">
                      Size change
                    </p>

                    <p className="mt-1 text-sm font-bold text-emerald-600">
                      {sizeReduction.toFixed(
                        1
                      )}
                      % smaller
                    </p>
                  </div>
                </div>

                {/* Size requirement */}
                {requestedLimit && (
                  <div
                    className={`mt-4 rounded-xl border px-4 py-3 ${
                      isWithinLimit
                        ? "border-emerald-100 bg-emerald-50"
                        : "border-red-100 bg-red-50"
                    }`}
                  >
                    <p
                      className={`text-sm font-semibold ${
                        isWithinLimit
                          ? "text-emerald-800"
                          : "text-red-800"
                      }`}
                    >
                      {isWithinLimit
                        ? `Within your ${requestedLimit} KB limit`
                        : `Above your ${requestedLimit} KB limit`}
                    </p>

                    <p
                      className={`mt-1 text-xs ${
                        isWithinLimit
                          ? "text-emerald-700"
                          : "text-red-700"
                      }`}
                    >
                      {isWithinLimit
                        ? "The output meets your requested file-size requirement."
                        : "The output could not meet the requested file-size requirement."}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
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
                    onClick={() =>
                      setResult(null)
                    }
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Adjust settings
                  </button>

                  <button
                    type="button"
                    onClick={resetTool}
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
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

                  Your image is processed locally in your browser.
                  It is not uploaded to our server.
                </div>
              </div>
            </div>
          )}

        {/* Bottom trust line */}
        {!file && !isAnalyzing && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
            <span>JPG supported</span>
            <span>PNG supported</span>
            <span>WebP supported</span>
            <span>Up to 25 MB</span>
          </div>
        )}
      </div>
    </section>
  );
}