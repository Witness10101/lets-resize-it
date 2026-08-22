"use client";

import {
  ChangeEvent,
  DragEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  resizeImage,
  ResizeResult,
} from "@/lib/image/resize";

const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/bmp",
];

const ACCEPTED_FILE_LABEL =
  "JPG, PNG, WebP, GIF, or BMP";

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
    return "WEBP";
  }

  if (type === "image/gif") {
    return "GIF";
  }

  if (type === "image/bmp") {
    return "BMP";
  }

  return (
    type.split("/").pop()?.toUpperCase() ?? "IMAGE"
  );
}

function getBaseFileName(fileName: string): string {
  return fileName.replace(/\.[^/.]+$/, "");
}

function getFileExtension(type: string): string {
  if (type === "image/jpeg") {
    return "jpg";
  }

  return "jpg";
}

export function ImageToJpgTool() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<ResizeResult | null>(
    null
  );

  const [previewUrl, setPreviewUrl] =
    useState<string | null>(null);

  const [originalPreviewUrl, setOriginalPreviewUrl] =
    useState<string | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isConverting, setIsConverting] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  const [quality, setQuality] = useState(0.92);

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  const reset = () => {
    setFile(null);
    setResult(null);
    setError(null);
    setIsConverting(false);
    setPreviewUrl(null);
    setOriginalPreviewUrl(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const validateFile = (selectedFile: File) => {
    if (
      !ACCEPTED_FILE_TYPES.includes(
        selectedFile.type
      )
    ) {
      return `Please choose a ${ACCEPTED_FILE_LABEL} image.`;
    }

    return null;
  };

  const convertToJpg = async (
    selectedFile: File,
    selectedQuality = quality
  ) => {
    setError(null);
    setResult(null);
    setPreviewUrl(null);

    const validationError =
      validateFile(selectedFile);

    if (validationError) {
      setError(validationError);
      return;
    }

    setFile(selectedFile);
    setIsConverting(true);

    try {
      const output = await resizeImage(
        selectedFile,
        {
          format: "image/jpeg",
          quality: selectedQuality,
        }
      );

      const outputUrl =
        URL.createObjectURL(output.blob);

      const originalUrl =
        URL.createObjectURL(selectedFile);

      setResult(output);
      setPreviewUrl(outputUrl);
      setOriginalPreviewUrl(originalUrl);
    } catch (conversionError) {
      const message =
        conversionError instanceof Error
          ? conversionError.message
          : "We couldn't convert this image to JPG.";

      setError(message);
    } finally {
      setIsConverting(false);
    }
  };

  const handleFile = (selectedFile: File) => {
    void convertToJpg(selectedFile);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile =
      event.target.files?.[0];

    if (selectedFile) {
      handleFile(selectedFile);
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

  const handleDrop = (
    event: DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile =
      event.dataTransfer.files?.[0];

    if (droppedFile) {
      handleFile(droppedFile);
    }
  };

  const handleQualityChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const nextQuality =
      Number(event.target.value);

    setQuality(nextQuality);

    if (file) {
      void convertToJpg(
        file,
        nextQuality
      );
    }
  };

  const handleDownload = () => {
    if (!result) {
      return;
    }

    const url =
      URL.createObjectURL(result.blob);

    const extension =
      getFileExtension(result.type);

    const baseName =
      file
        ? getBaseFileName(file.name)
        : "converted-image";

    const downloadName =
      `${baseName}-converted.${extension}`;

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

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

      if (originalPreviewUrl) {
        URL.revokeObjectURL(
          originalPreviewUrl
        );
      }
    };
  }, [
    previewUrl,
    originalPreviewUrl,
  ]);

  const sizeReduction =
    file && result
      ? Math.max(
          0,
          ((file.size -
            result.blob.size) /
            file.size) *
            100
        )
      : 0;

  return (
    <section
      id="image-to-jpg-tool"
      aria-labelledby="image-to-jpg-tool-heading"
      className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Tool heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Online JPG Converter
          </span>

          <h2
            id="image-to-jpg-tool-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
          >
            Convert your image to JPG
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Upload an image to convert it to JPG directly
            in your browser. No account or software
            installation required.
          </p>
        </div>

        {/* Upload state */}
        {!file && !isConverting && (
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
            className={`group mx-auto mt-8 cursor-pointer rounded-2xl border-2 border-dashed bg-white p-8 text-center shadow-sm outline-none transition-all duration-200 sm:p-12 ${
              isDragging
                ? "border-blue-500 bg-blue-50/60 shadow-md"
                : "border-slate-300 hover:border-blue-400 hover:bg-blue-50/20"
            } focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2`}
          >
            <input
              ref={inputRef}
              type="file"
              accept={ACCEPTED_FILE_TYPES.join(",")}
              onChange={handleInputChange}
              className="sr-only"
              aria-label="Choose an image to convert to JPG"
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

            <h3 className="mt-5 text-base font-semibold text-slate-950 sm:text-lg">
              {isDragging
                ? "Drop your image here"
                : "Drop an image here or choose a file"}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {ACCEPTED_FILE_LABEL} supported
            </p>

            <span className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors group-hover:bg-blue-700">
              Choose an image
            </span>

            <p className="mt-4 text-xs text-slate-400">
              Your image is processed locally in your browser.
            </p>
          </div>
        )}

        {/* Converting */}
        {isConverting && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div
              className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"
              aria-hidden="true"
            />

            <h3 className="mt-5 text-base font-semibold text-slate-950">
              Converting image to JPG...
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Your image is being processed directly in
              your browser.
            </p>
          </div>
        )}

        {/* Error */}
        {error && !isConverting && (
          <div
            role="alert"
            className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700"
          >
            {error}
          </div>
        )}

        {/* Result */}
        {result &&
          previewUrl &&
          !isConverting && (
            <div className="mt-8">
              {/* Result header */}
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                      aria-hidden="true"
                    />
                    JPG ready
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-slate-950">
                    Your image has been converted to JPG
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Review your converted image below.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Convert another
                </button>
              </div>

              {/* Comparison */}
              <div className="grid gap-5 lg:grid-cols-2">
                {/* Original */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        Original image
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {file?.name}
                      </p>
                    </div>

                    <span className="text-sm font-medium text-slate-600">
                      {file
                        ? formatFileSize(
                            file.size
                          )
                        : ""}
                    </span>
                  </div>

                  <div className="flex min-h-[280px] items-center justify-center bg-slate-100 p-5">
                    {originalPreviewUrl && (
                      <img
                        src={
                          originalPreviewUrl
                        }
                        alt={`Original ${file?.name ?? "uploaded image"}`}
                        className="max-h-[340px] max-w-full rounded-lg object-contain shadow-sm"
                      />
                    )}
                  </div>
                </div>

                {/* Converted */}
                <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-emerald-100 px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        Converted JPG
                      </p>

                      <p className="mt-1 text-xs font-medium text-emerald-600">
                        JPG / JPEG
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
                      alt="Converted JPG image preview"
                      className="max-h-[340px] max-w-full rounded-lg object-contain shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Conversion details */}
              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-500">
                      Output format
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-950">
                      JPG
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
                      JPG size
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-950">
                      {formatFileSize(
                        result.blob.size
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
                      %
                    </p>
                  </div>
                </div>

                {/* Quality */}
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <label
                        htmlFor="jpg-quality"
                        className="text-sm font-semibold text-slate-950"
                      >
                        JPG quality
                      </label>

                      <p className="mt-1 text-xs text-slate-500">
                        Higher quality produces a larger file.
                      </p>
                    </div>

                    <span className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {Math.round(
                        quality * 100
                      )}
                      %
                    </span>
                  </div>

                  <input
                    id="jpg-quality"
                    type="range"
                    min="0.5"
                    max="1"
                    step="0.01"
                    value={quality}
                    onChange={
                      handleQualityChange
                    }
                    className="mt-4 w-full accent-blue-600"
                  />

                  <div className="mt-2 flex justify-between text-[11px] text-slate-400">
                    <span>Smaller file</span>
                    <span>Higher quality</span>
                  </div>
                </div>

                {/* Download */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={
                      handleDownload
                    }
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

                    Download JPG
                  </button>

                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Convert another image
                  </button>
                </div>

                {/* Privacy */}
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

                  Your image is converted locally in
                  your browser and is not uploaded to
                  our server.
                </div>
              </div>
            </div>
          )}
      </div>
    </section>
  );
}