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

const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const MAX_FILE_SIZE = 25 * 1024 * 1024;

interface UploadSectionProps {
  onFileSelected?: (file: File, analysis: ImageAnalysis) => void;
}

function formatFileSize(sizeInBytes: number): string {
  if (sizeInBytes < 1024) {
    return `${sizeInBytes} B`;
  }

  if (sizeInBytes < 1024 * 1024) {
    return `${(sizeInBytes / 1024).toFixed(1)} KB`;
  }

  return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function UploadSection({
  onFileSelected,
}: UploadSectionProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] =
    useState<ImageAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFile = async (file: File) => {
    setError(null);
    setAnalysis(null);

    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      setError("Please choose a JPG, PNG, or WebP image.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("This image is larger than the 25 MB limit.");
      return;
    }

    try {
      setIsAnalyzing(true);

      const result = await analyzeImage(file);

      setAnalysis(result);

      onFileSelected?.(file, result);
    } catch {
      setError(
        "We couldn&apos;t read this image. Please try another image."
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      void handleFile(file);
    }
  };

  const handleDrop = (
    event: DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];

    if (file) {
      void handleFile(file);
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

  const resetUpload = () => {
    setAnalysis(null);
    setError(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <section
      id="resize"
      aria-labelledby="upload-heading"
      className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-8 text-center">
          <h2
            id="upload-heading"
            className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
          >
            Upload your image
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Choose an image and we&apos;ll help you make it fit
            your requirements.
          </p>
        </div>

        {!analysis && !isAnalyzing && (
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
            className={`group cursor-pointer rounded-2xl border-2 border-dashed bg-white p-8 text-center shadow-sm outline-none transition-all duration-200 sm:p-12 ${
              isDragging
                ? "border-blue-500 bg-blue-50/60 shadow-md"
                : "border-slate-300 hover:border-blue-400 hover:bg-blue-50/20"
            } focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2`}
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleInputChange}
              className="sr-only"
              aria-label="Choose an image"
            />

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-transform duration-200 group-hover:scale-105">
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
                <path d="M12 16V4" />
                <path d="m7 9 5-5 5 5" />
                <path d="M5 20h14" />
              </svg>
            </div>

            <h3 className="mt-5 text-base font-semibold text-slate-950 sm:text-lg">
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
          </div>
        )}

        {isAnalyzing && (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div
              className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"
              aria-hidden="true"
            />

            <p className="mt-4 text-sm font-medium text-slate-700">
              Analyzing your image...
            </p>
          </div>
        )}

        {analysis && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
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
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold text-slate-950">
                    {analysis.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {analysis.format} ·{" "}
                    {formatFileSize(analysis.size)}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={resetUpload}
                className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Choose another
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-medium text-slate-500">
                  File size
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-950">
                  {formatFileSize(analysis.size)}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-medium text-slate-500">
                  Dimensions
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-950">
                  {analysis.width} × {analysis.height}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-medium text-slate-500">
                  Format
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-950">
                  {analysis.format}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-medium text-slate-500">
                  Aspect ratio
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-950">
                  {analysis.aspectRatio.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div
            role="alert"
            className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700"
          >
            {error}
          </div>
        )}

        <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-500 sm:text-sm">
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
          Your image stays on your device during processing.
        </p>
      </div>
    </section>
  );
}