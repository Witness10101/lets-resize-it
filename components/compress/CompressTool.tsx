"use client";

import {
  ChangeEvent,
  DragEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type CompressionMode = "quality" | "size";

type OutputFormat = "original" | "jpeg" | "webp";

interface CompressionResult {
  blob: Blob;
  width: number;
  height: number;
  type: string;
}

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const MAX_FILE_SIZE = 25 * 1024 * 1024;

function formatFileSize(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function getFormatLabel(type: string): string {
  switch (type) {
    case "image/jpeg":
      return "JPG";

    case "image/png":
      return "PNG";

    case "image/webp":
      return "WEBP";

    default:
      return "IMAGE";
  }
}

function getExtension(type: string): string {
  switch (type) {
    case "image/jpeg":
      return "jpg";

    case "image/png":
      return "png";

    case "image/webp":
      return "webp";

    default:
      return "jpg";
  }
}

function getBaseName(fileName: string): string {
  return fileName.replace(/\.[^/.]+$/, "");
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();

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

async function canvasToBlob(
  canvas: HTMLCanvasElement,
  type: string,
  quality: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(
            new Error("Unable to create the compressed image.")
          );
          return;
        }

        resolve(blob);
      },
      type,
      quality
    );
  });
}

async function compressImage(
  file: File,
  format: OutputFormat,
  quality: number
): Promise<CompressionResult> {
  const image = await loadImage(file);

  const canvas = document.createElement("canvas");

  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;

  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error(
      "Your browser does not support image compression."
    );
  }

  /*
   * JPEG does not support transparency.
   * Paint a white background before converting.
   */
  const outputType =
    format === "jpeg"
      ? "image/jpeg"
      : format === "webp"
        ? "image/webp"
        : file.type;

  if (outputType === "image/jpeg") {
    context.fillStyle = "#ffffff";
    context.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );
  }

  context.drawImage(
    image,
    0,
    0,
    canvas.width,
    canvas.height
  );

  const blob = await canvasToBlob(
    canvas,
    outputType,
    quality
  );

  return {
    blob,
    width: canvas.width,
    height: canvas.height,
    type: blob.type,
  };
}

async function compressToTargetSize(
  file: File,
  format: OutputFormat,
  targetKB: number
): Promise<CompressionResult> {
  const image = await loadImage(file);

  const canvas = document.createElement("canvas");

  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;

  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error(
      "Your browser does not support image compression."
    );
  }

  const outputType =
    format === "jpeg"
      ? "image/jpeg"
      : format === "webp"
        ? "image/webp"
        : file.type;

  if (outputType === "image/jpeg") {
    context.fillStyle = "#ffffff";
    context.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );
  }

  context.drawImage(
    image,
    0,
    0,
    canvas.width,
    canvas.height
  );

  const targetBytes = targetKB * 1024;

  /*
   * Binary search for the highest quality
   * that fits the requested target size.
   */
  let low = 0.05;
  let high = 1;
  let bestBlob: Blob | null = null;

  for (let i = 0; i < 9; i++) {
    const quality = (low + high) / 2;

    const blob = await canvasToBlob(
      canvas,
      outputType,
      quality
    );

    if (blob.size <= targetBytes) {
      bestBlob = blob;
      low = quality;
    } else {
      high = quality;
    }
  }

  /*
   * If even very low quality cannot reach the
   * requested target, return the smallest result.
   */
  if (!bestBlob) {
    bestBlob = await canvasToBlob(
      canvas,
      outputType,
      0.05
    );
  }

  return {
    blob: bestBlob,
    width: canvas.width,
    height: canvas.height,
    type: bestBlob.type,
  };
}

export function CompressTool() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);

  const [isDragging, setIsDragging] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  const [isCompressing, setIsCompressing] =
    useState(false);

  const [result, setResult] =
    useState<CompressionResult | null>(null);

  const [previewUrl, setPreviewUrl] =
    useState<string | null>(null);

  const [mode, setMode] =
    useState<CompressionMode>("quality");

  const [quality, setQuality] =
    useState(75);

  const [targetSize, setTargetSize] =
    useState("100");

  const [format, setFormat] =
    useState<OutputFormat>("original");

  const [originalPreviewUrl, setOriginalPreviewUrl] =
    useState<string | null>(null);

  /*
   * Cleanup generated preview.
   */
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
  }, [previewUrl, originalPreviewUrl]);

  const validateFile = (
    selectedFile: File
  ): boolean => {
    setError(null);

    if (
      !ACCEPTED_TYPES.includes(
        selectedFile.type
      )
    ) {
      setError(
        "Please choose a JPG, PNG, or WebP image."
      );

      return false;
    }

    if (
      selectedFile.size >
      MAX_FILE_SIZE
    ) {
      setError(
        "This image is larger than the 25 MB limit."
      );

      return false;
    }

    return true;
  };

  const selectFile = (
    selectedFile: File
  ) => {
    if (!validateFile(selectedFile)) {
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(
        previewUrl
      );
    }

    if (originalPreviewUrl) {
      URL.revokeObjectURL(
        originalPreviewUrl
      );
    }

    const originalUrl =
      URL.createObjectURL(
        selectedFile
      );

    setFile(selectedFile);
    setResult(null);
    setPreviewUrl(null);
    setOriginalPreviewUrl(
      originalUrl
    );
    setError(null);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile =
      event.target.files?.[0];

    if (selectedFile) {
      selectFile(selectedFile);
    }
  };

  const handleDrop = (
    event: DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();

    setIsDragging(false);

    const droppedFile =
      event.dataTransfer.files?.[0];

    if (droppedFile) {
      selectFile(droppedFile);
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

  const handleCompress = async () => {
    if (!file) {
      setError(
        "Please choose an image first."
      );

      return;
    }

    setIsCompressing(true);
    setError(null);
    setResult(null);

    try {
      let compressionResult: CompressionResult;

      if (
        mode === "size"
      ) {
        const parsedTarget =
          Number(targetSize);

        if (
          !Number.isFinite(
            parsedTarget
          ) ||
          parsedTarget <= 0
        ) {
          throw new Error(
            "Please enter a valid target file size."
          );
        }

        compressionResult =
          await compressToTargetSize(
            file,
            format,
            parsedTarget
          );
      } else {
        compressionResult =
          await compressImage(
            file,
            format,
            quality / 100
          );
      }

      setResult(
        compressionResult
      );

      const url =
        URL.createObjectURL(
          compressionResult.blob
        );

      setPreviewUrl(url);

      setTimeout(() => {
        document
          .getElementById(
            "compression-result"
          )
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);
    } catch (compressionError) {
      const message =
        compressionError instanceof
        Error
          ? compressionError.message
          : "We couldn&apos;t compress this image.";

      setError(message);
    } finally {
      setIsCompressing(false);
    }
  };

  const handleDownload = () => {
    if (!result || !file) {
      return;
    }

    const extension =
      getExtension(
        result.type
      );

    const baseName =
      getBaseName(
        file.name
      );

    const downloadName =
      `${baseName}-compressed.${extension}`;

    const url =
      URL.createObjectURL(
        result.blob
      );

    const anchor =
      document.createElement(
        "a"
      );

    anchor.href = url;
    anchor.download =
      downloadName;

    document.body.appendChild(
      anchor
    );

    anchor.click();

    anchor.remove();

    setTimeout(() => {
      URL.revokeObjectURL(
        url
      );
    }, 1000);
  };

  const reset = () => {
    if (previewUrl) {
      URL.revokeObjectURL(
        previewUrl
      );
    }

    if (originalPreviewUrl) {
      URL.revokeObjectURL(
        originalPreviewUrl
      );
    }

    setFile(null);
    setResult(null);
    setPreviewUrl(null);
    setOriginalPreviewUrl(null);
    setError(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const reduction =
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
      id="compress-tool"
      aria-labelledby="compress-tool-heading"
      className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-5xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            Free Image Compressor
          </span>

          <h2
            id="compress-tool-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
          >
            Compress your image
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Reduce image file size without unnecessary
            quality loss. Everything happens directly in
            your browser.
          </p>
        </div>

        {/* Upload */}
        {!file && (
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
            className={`group cursor-pointer rounded-2xl border-2 border-dashed bg-white p-8 text-center shadow-sm outline-none transition-all sm:p-12 ${
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
              aria-label="Choose an image to compress"
            />

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-105">
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
                <path d="M12 3v12" />
                <path d="m7 8 5-5 5 5" />
                <path d="M5 21h14" />
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

            <span className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
              Choose an image
            </span>
          </div>
        )}

        {/* Selected file + controls */}
        {file && !result && (
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">

            {/* File */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
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
                      x="3"
                      y="3"
                      width="18"
                      height="18"
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
                    {file.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {getFormatLabel(file.type)} ·{" "}
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={reset}
                className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Choose another
              </button>
            </div>

            <div className="my-6 h-px bg-slate-100" />

            {/* Compression mode */}
            <div>
              <h3 className="text-sm font-semibold text-slate-950">
                Compression settings
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Choose how you want to reduce the image size.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setMode("quality")
                  }
                  className={`rounded-xl border p-4 text-left transition ${
                    mode === "quality"
                      ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                      : "border-slate-200 hover:border-blue-300"
                  }`}
                >
                  <span className="block text-sm font-semibold text-slate-950">
                    Quality
                  </span>

                  <span className="mt-1 block text-xs text-slate-500">
                    Choose the compression level
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setMode("size")
                  }
                  className={`rounded-xl border p-4 text-left transition ${
                    mode === "size"
                      ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                      : "border-slate-200 hover:border-blue-300"
                  }`}
                >
                  <span className="block text-sm font-semibold text-slate-950">
                    Target size
                  </span>

                  <span className="mt-1 block text-xs text-slate-500">
                    Try to reach a specific file size
                  </span>
                </button>
              </div>
            </div>

            {/* Quality */}
            {mode === "quality" && (
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="compression-quality"
                    className="text-sm font-medium text-slate-700"
                  >
                    Compression quality
                  </label>

                  <span className="text-sm font-bold text-blue-600">
                    {quality}%
                  </span>
                </div>

                <input
                  id="compression-quality"
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={quality}
                  onChange={(event) =>
                    setQuality(
                      Number(
                        event.target.value
                      )
                    )
                  }
                  className="mt-4 w-full accent-blue-600"
                />

                <div className="mt-2 flex justify-between text-xs text-slate-400">
                  <span>Smaller file</span>
                  <span>Better quality</span>
                </div>
              </div>
            )}

            {/* Target size */}
            {mode === "size" && (
              <div className="mt-6">
                <label
                  htmlFor="target-size"
                  className="block text-sm font-medium text-slate-700"
                >
                  Target maximum size
                </label>

                <div className="relative mt-2 max-w-sm">
                  <input
                    id="target-size"
                    type="number"
                    min="1"
                    value={targetSize}
                    onChange={(event) =>
                      setTargetSize(
                        event.target.value
                      )
                    }
                    className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 pr-14 text-sm text-slate-950 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="100"
                  />

                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs font-medium text-slate-400">
                    KB
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  The compressor will try to keep the output
                  at or below this size.
                </p>
              </div>
            )}

            {/* Format */}
            <div className="mt-6">
              <label
                htmlFor="output-format"
                className="block text-sm font-medium text-slate-700"
              >
                Output format
              </label>

              <select
                id="output-format"
                value={format}
                onChange={(event) =>
                  setFormat(
                    event.target.value as OutputFormat
                  )
                }
                className="mt-2 h-11 w-full max-w-sm rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="original">
                  Keep original format
                </option>

                <option value="jpeg">
                  JPG
                </option>

                <option value="webp">
                  WebP
                </option>
              </select>
            </div>

            {/* Action */}
            <button
              type="button"
              onClick={handleCompress}
              disabled={isCompressing}
              className="mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isCompressing ? (
                <>
                  <span
                    className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                    aria-hidden="true"
                  />

                  Compressing...
                </>
              ) : (
                <>
                  Compress Image

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
                </>
              )}
            </button>

            {error && (
              <div
                role="alert"
                className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700"
              >
                {error}
              </div>
            )}

            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
              <svg
                className="h-4 w-4 text-emerald-600"
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

              Your image stays on your device.
            </p>
          </div>
        )}

        {/* Result */}
        {result &&
          previewUrl &&
          file && (
            <div
              id="compression-result"
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
            >
              <div className="mb-7 text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />

                  Compression complete
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  Your image is ready
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Your image was compressed directly in
                  your browser.
                </p>
              </div>

              {/* Comparison */}
              <div className="grid gap-5 lg:grid-cols-2">

                {/* Original */}
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        Original
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {getFormatLabel(file.type)}
                      </p>
                    </div>

                    <span className="text-sm font-semibold text-slate-700">
                      {formatFileSize(file.size)}
                    </span>
                  </div>

                  <div className="flex min-h-[280px] items-center justify-center bg-slate-100 p-5">
                    {originalPreviewUrl && (
                      <img
                        src={originalPreviewUrl}
                        alt={`Original ${file.name}`}
                        className="max-h-[340px] max-w-full rounded-lg object-contain shadow-sm"
                      />
                    )}
                  </div>
                </div>

                {/* Compressed */}
                <div className="overflow-hidden rounded-2xl border border-emerald-200">
                  <div className="flex items-center justify-between border-b border-emerald-100 px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        Compressed
                      </p>

                      <p className="mt-1 text-xs font-medium text-emerald-600">
                        {getFormatLabel(result.type)}
                      </p>
                    </div>

                    <span className="text-sm font-semibold text-emerald-600">
                      {formatFileSize(result.blob.size)}
                    </span>
                  </div>

                  <div className="flex min-h-[280px] items-center justify-center bg-slate-100 p-5">
                    <img
                      src={previewUrl}
                      alt="Compressed image preview"
                      className="max-h-[340px] max-w-full rounded-lg object-contain shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium text-slate-500">
                    Original size
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
                    {formatFileSize(result.blob.size)}
                  </p>
                </div>

                <div className="col-span-2 rounded-xl bg-emerald-50 p-4 sm:col-span-1">
                  <p className="text-xs font-medium text-emerald-700">
                    Size reduced
                  </p>

                  <p className="mt-1 text-sm font-bold text-emerald-700">
                    {reduction.toFixed(1)}%
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

                  Download compressed image
                </button>

                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Compress another
                </button>
              </div>

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

                Your image was compressed locally and was not
                uploaded to a server.
              </p>
            </div>
          )}
      </div>
    </section>
  );
}