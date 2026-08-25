"use client";

import React, {
  ChangeEvent,
  DragEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type OutputFormat = "image/jpeg" | "image/png" | "image/webp";
type FitMode = "crop" | "contain" | "stretch";

interface ImageInfo {
  name: string;
  type: string;
  width: number;
  height: number;
  size: number;
}

const TARGET_WIDTH = 300;
const TARGET_HEIGHT = 300;

const formatLabels: Record<OutputFormat, string> = {
  "image/jpeg": "JPG",
  "image/png": "PNG",
  "image/webp": "WebP",
};

function formatBytes(bytes: number): string {
  if (!bytes) return "0 Bytes";

  const units = ["Bytes", "KB", "MB", "GB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1024));

  return `${(bytes / Math.pow(1024, index)).toFixed(
    index === 0 ? 0 : 2
  )} ${units[index]}`;
}

function getExtension(type: string): string {
  if (type === "image/png") return "png";
  if (type === "image/webp") return "webp";
  return "jpg";
}

function sanitizeFilename(name: string): string {
  const withoutExtension = name.replace(/\.[^/.]+$/, "");
  return withoutExtension.replace(/[^a-zA-Z0-9-_]/g, "-");
}

export default function ResizeImageTo300x300Client() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const originalObjectUrlRef = useRef<string | null>(null);
  const outputObjectUrlRef = useRef<string | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [imageInfo, setImageInfo] = useState<ImageInfo | null>(null);

  const [originalPreview, setOriginalPreview] = useState<string>("");
  const [outputPreview, setOutputPreview] = useState<string>("");

  const [outputBlob, setOutputBlob] = useState<Blob | null>(null);

  const [outputFormat, setOutputFormat] =
    useState<OutputFormat>("image/jpeg");

  const [quality, setQuality] = useState<number>(90);
  const [fitMode, setFitMode] = useState<FitMode>("crop");

  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const [hasProcessed, setHasProcessed] = useState(false);

  const revokeUrl = (url: string | null) => {
    if (url) {
      URL.revokeObjectURL(url);
    }
  };

  const resetOutput = useCallback(() => {
    revokeUrl(outputObjectUrlRef.current);
    outputObjectUrlRef.current = null;

    setOutputPreview("");
    setOutputBlob(null);
    setHasProcessed(false);
  }, []);

  const resetTool = useCallback(() => {
    revokeUrl(originalObjectUrlRef.current);
    revokeUrl(outputObjectUrlRef.current);

    originalObjectUrlRef.current = null;
    outputObjectUrlRef.current = null;

    setFile(null);
    setImageInfo(null);
    setOriginalPreview("");
    setOutputPreview("");
    setOutputBlob(null);
    setError("");
    setHasProcessed(false);
    setIsProcessing(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  useEffect(() => {
    return () => {
      revokeUrl(originalObjectUrlRef.current);
      revokeUrl(outputObjectUrlRef.current);
    };
  }, []);

  const processFile = useCallback(
    (selectedFile: File) => {
      setError("");
      resetOutput();

      if (!selectedFile.type.startsWith("image/")) {
        setError("Please select a valid image file.");
        return;
      }

      const maxSize = 25 * 1024 * 1024;

      if (selectedFile.size > maxSize) {
        setError("Please choose an image smaller than 25 MB.");
        return;
      }

      const objectUrl = URL.createObjectURL(selectedFile);

      revokeUrl(originalObjectUrlRef.current);
      originalObjectUrlRef.current = objectUrl;

      const img = new Image();

      img.onload = () => {
        setFile(selectedFile);

        setImageInfo({
          name: selectedFile.name,
          type: selectedFile.type,
          width: img.naturalWidth,
          height: img.naturalHeight,
          size: selectedFile.size,
        });

        setOriginalPreview(objectUrl);
      };

      img.onerror = () => {
        revokeUrl(objectUrl);
        originalObjectUrlRef.current = null;

        setError(
          "We couldn&apos;t read this image. Please try another JPG, PNG, or WebP file."
        );
      };

      img.src = objectUrl;
    },
    [resetOutput]
  );

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      processFile(selectedFile);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files?.[0];

    if (droppedFile) {
      processFile(droppedFile);
    }
  };

  const drawImage = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement
  ) => {
    const targetWidth = TARGET_WIDTH;
    const targetHeight = TARGET_HEIGHT;

    ctx.clearRect(0, 0, targetWidth, targetHeight);

    if (outputFormat === "image/jpeg") {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, targetWidth, targetHeight);
    }

    if (fitMode === "stretch") {
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
      return;
    }

    const sourceRatio = img.naturalWidth / img.naturalHeight;
    const targetRatio = targetWidth / targetHeight;

    let sourceWidth = img.naturalWidth;
    let sourceHeight = img.naturalHeight;
    let sourceX = 0;
    let sourceY = 0;

    if (fitMode === "crop") {
      if (sourceRatio > targetRatio) {
        sourceWidth = img.naturalHeight * targetRatio;
        sourceX = (img.naturalWidth - sourceWidth) / 2;
      } else {
        sourceHeight = img.naturalWidth / targetRatio;
        sourceY = (img.naturalHeight - sourceHeight) / 2;
      }

      ctx.drawImage(
        img,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        0,
        0,
        targetWidth,
        targetHeight
      );

      return;
    }

    if (fitMode === "contain") {
      const scale = Math.min(
        targetWidth / img.naturalWidth,
        targetHeight / img.naturalHeight
      );

      const drawWidth = img.naturalWidth * scale;
      const drawHeight = img.naturalHeight * scale;

      const offsetX = (targetWidth - drawWidth) / 2;
      const offsetY = (targetHeight - drawHeight) / 2;

      if (outputFormat !== "image/jpeg") {
        ctx.clearRect(0, 0, targetWidth, targetHeight);
      } else {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, targetWidth, targetHeight);
      }

      ctx.drawImage(
        img,
        offsetX,
        offsetY,
        drawWidth,
        drawHeight
      );
    }
  };

  const resizeImage = useCallback(async () => {
    if (!file || !originalPreview) {
      setError("Please upload an image first.");
      return;
    }

    setError("");
    setIsProcessing(true);

    try {
      const img = new Image();

      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () =>
          reject(new Error("Unable to load the selected image."));
        img.src = originalPreview;
      });

      const canvas = canvasRef.current;

      if (!canvas) {
        throw new Error("Canvas is not available.");
      }

      canvas.width = TARGET_WIDTH;
      canvas.height = TARGET_HEIGHT;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        throw new Error("Your browser does not support canvas processing.");
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      drawImage(ctx, img);

      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob(
          (result) => resolve(result),
          outputFormat,
          outputFormat === "image/png" ? undefined : quality / 100
        );
      });

      if (!blob) {
        throw new Error("The image could not be generated.");
      }

      revokeUrl(outputObjectUrlRef.current);

      const outputUrl = URL.createObjectURL(blob);
      outputObjectUrlRef.current = outputUrl;

      setOutputBlob(blob);
      setOutputPreview(outputUrl);
      setHasProcessed(true);
    } catch (processingError) {
      console.error(processingError);

      setError(
        "Something went wrong while resizing the image. Please try again."
      );
    } finally {
      setIsProcessing(false);
    }
  }, [
    file,
    originalPreview,
    outputFormat,
    quality,
    fitMode,
  ]);

  const downloadImage = () => {
    if (!outputBlob || !outputPreview || !file) {
      return;
    }

    const extension = getExtension(outputFormat);
    const baseName = sanitizeFilename(file.name);

    const link = document.createElement("a");

    link.href = outputPreview;
    link.download = `${baseName}-300x300.${extension}`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFormatChange = (format: OutputFormat) => {
    setOutputFormat(format);

    if (hasProcessed) {
      setTimeout(() => {
        resizeImage();
      }, 0);
    }
  };

  const handleQualityChange = (value: number) => {
    setQuality(value);

    if (hasProcessed && outputFormat !== "image/png") {
      setTimeout(() => {
        resizeImage();
      }, 0);
    }
  };

  const handleFitModeChange = (mode: FitMode) => {
    setFitMode(mode);

    if (hasProcessed) {
      setTimeout(() => {
        resizeImage();
      }, 0);
    }
  };

  const compressionDifference =
    imageInfo && outputBlob
      ? Math.round(
          ((imageInfo.size - outputBlob.size) / imageInfo.size) * 100
        )
      : null;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -left-32 top-[520px] h-64 w-64 rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute -right-32 top-[700px] h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* Tool heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Free browser-based image resizer
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Resize Image to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              300 × 300
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Quickly resize your image to an exact 300 × 300 pixel square.
            Upload, adjust the fit, choose your format, and download your
            resized image instantly.
          </p>
        </div>

        {/* Main tool card */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_80px_-35px_rgba(15,23,42,0.35)]">
          {/* Upload area */}
          {!file && (
            <div className="p-4 sm:p-8">
              <div
                onDragEnter={(event) => {
                  event.preventDefault();
                  setIsDragging(true);
                }}
                onDragOver={(event) => {
                  event.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={(event) => {
                  event.preventDefault();
                  setIsDragging(false);
                }}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`group cursor-pointer rounded-2xl border-2 border-dashed p-8 text-center transition-all sm:p-14 ${
                  isDragging
                    ? "border-blue-500 bg-blue-50"
                    : "border-slate-300 bg-slate-50/70 hover:border-blue-400 hover:bg-blue-50/50"
                }`}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-105">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 16V4" />
                    <path d="m7 9 5-5 5 5" />
                    <path d="M5 20h14" />
                  </svg>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Drop your image here
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  or click to browse from your device
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {["JPG", "PNG", "WebP", "GIF", "BMP"].map((type) => (
                    <span
                      key={type}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500"
                    >
                      {type}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-xs text-slate-400">
                  Maximum file size: 25 MB
                </p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          )}

          {/* Editor */}
          {file && imageInfo && (
            <div className="p-4 sm:p-6 lg:p-8">
              {/* File header */}
              <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-900">
                      {imageInfo.name}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {imageInfo.width} × {imageInfo.height} px ·{" "}
                      {formatBytes(imageInfo.size)}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={resetTool}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  Choose another
                </button>
              </div>

              {/* Preview columns */}
              <div className="grid gap-5 lg:grid-cols-2">
                {/* Original */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Original
                      </p>
                      <p className="text-xs text-slate-500">
                        {imageInfo.width} × {imageInfo.height}px
                      </p>
                    </div>

                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                      Source
                    </span>
                  </div>

                  <div className="flex min-h-[300px] items-center justify-center bg-[linear-gradient(45deg,#f1f5f9_25%,transparent_25%),linear-gradient(-45deg,#f1f5f9_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f1f5f9_75%),linear-gradient(-45deg,transparent_75%,#f1f5f9_75%)] bg-[length:24px_24px] bg-[position:0_0,0_12px,12px_-12px,-12px_0px] p-4">
                    <img
                      src={originalPreview}
                      alt={`Original ${imageInfo.name}`}
                      className="max-h-[360px] max-w-full rounded-xl object-contain shadow-md"
                    />
                  </div>
                </div>

                {/* Output */}
                <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white">
                  <div className="flex items-center justify-between border-b border-blue-100 px-4 py-3">
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        300 × 300 Output
                      </p>
                      <p className="text-xs text-slate-500">
                        Exact square dimensions
                      </p>
                    </div>

                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                      Result
                    </span>
                  </div>

                  <div className="flex min-h-[300px] items-center justify-center bg-[linear-gradient(45deg,#f1f5f9_25%,transparent_25%),linear-gradient(-45deg,#f1f5f9_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f1f5f9_75%),linear-gradient(-45deg,transparent_75%,#f1f5f9_75%)] bg-[length:24px_24px] bg-[position:0_0,0_12px,12px_-12px,-12px_0px] p-4">
                    {outputPreview ? (
                      <img
                        src={outputPreview}
                        alt="Resized 300 x 300 image preview"
                        className="h-[300px] w-[300px] max-w-full rounded-xl object-contain shadow-lg"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path d="M12 3v12" />
                            <path d="m7 10 5 5 5-5" />
                            <path d="M5 21h14" />
                          </svg>
                        </div>

                        <p className="mt-4 text-sm font-semibold text-slate-700">
                          Your 300 × 300 image will appear here
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Settings */}
              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                {/* Fit */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <label className="text-sm font-bold text-slate-900">
                    Image fitting
                  </label>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Choose how your original image fits inside the square.
                  </p>

                  <div className="mt-3 grid gap-2">
                    {[
                      {
                        value: "crop" as FitMode,
                        title: "Crop to square",
                        description: "Fills 300 × 300",
                      },
                      {
                        value: "contain" as FitMode,
                        title: "Fit inside",
                        description: "Preserves the full image",
                      },
                      {
                        value: "stretch" as FitMode,
                        title: "Stretch",
                        description: "Fills exact dimensions",
                      },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleFitModeChange(option.value)}
                        className={`rounded-xl border p-3 text-left transition ${
                          fitMode === option.value
                            ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500"
                            : "border-slate-200 bg-white hover:border-blue-300"
                        }`}
                      >
                        <p className="text-xs font-bold text-slate-900">
                          {option.title}
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-500">
                          {option.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Format */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <label className="text-sm font-bold text-slate-900">
                    Output format
                  </label>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Select the format for your resized image.
                  </p>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {(
                      Object.keys(formatLabels) as OutputFormat[]
                    ).map((format) => (
                      <button
                        key={format}
                        type="button"
                        onClick={() => handleFormatChange(format)}
                        className={`rounded-xl border px-3 py-3 text-xs font-bold transition ${
                          outputFormat === format
                            ? "border-blue-500 bg-blue-600 text-white"
                            : "border-slate-200 bg-white text-slate-600 hover:border-blue-300"
                        }`}
                      >
                        {formatLabels[format]}
                      </button>
                    ))}
                  </div>

                  {outputFormat !== "image/png" && (
                    <div className="mt-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-600">
                          Quality
                        </span>

                        <span className="text-xs font-bold text-blue-700">
                          {quality}%
                        </span>
                      </div>

                      <input
                        type="range"
                        min={40}
                        max={100}
                        step={1}
                        value={quality}
                        onChange={(event) =>
                          handleQualityChange(Number(event.target.value))
                        }
                        className="w-full accent-blue-600"
                      />
                    </div>
                  )}
                </div>

                {/* Output details */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <label className="text-sm font-bold text-slate-900">
                    Output details
                  </label>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5">
                      <span className="text-xs text-slate-500">
                        Dimensions
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        300 × 300 px
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5">
                      <span className="text-xs text-slate-500">
                        Format
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        {formatLabels[outputFormat]}
                      </span>
                    </div>

                    {outputBlob && (
                      <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5">
                        <span className="text-xs text-slate-500">
                          File size
                        </span>
                        <span className="text-xs font-bold text-slate-900">
                          {formatBytes(outputBlob.size)}
                        </span>
                      </div>
                    )}

                    {compressionDifference !== null && (
                      <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-3 py-2.5">
                        <span className="text-xs text-emerald-700">
                          Size change
                        </span>
                        <span className="text-xs font-bold text-emerald-700">
                          {compressionDifference >= 0 ? "-" : "+"}
                          {Math.abs(compressionDifference)}%
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div
                  role="alert"
                  className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mt-0.5 shrink-0"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>

                  <p>{error}</p>
                </div>
              )}

              {/* Action buttons */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={resizeImage}
                  disabled={isProcessing}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isProcessing ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Resizing image...
                    </>
                  ) : (
                    <>
                      Resize to 300 × 300
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </>
                  )}
                </button>

                {outputPreview && (
                  <button
                    type="button"
                    onClick={downloadImage}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 3v12" />
                      <path d="m7 10 5 5 5-5" />
                      <path d="M5 21h14" />
                    </svg>
                    Download 300 × 300
                  </button>
                )}
              </div>

              {/* Privacy note */}
              <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>

                Your image is processed locally in your browser. No upload is
                required.
              </div>
            </div>
          )}
        </div>

        {/* Trust/features row */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 3v18" />
                <path d="M3 12h18" />
              </svg>
            </div>
            <p className="mt-3 text-sm font-bold text-slate-900">
              Exact 300 × 300
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Get a precise square image every time.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <p className="mt-3 text-sm font-bold text-slate-900">
              Private by design
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Images are processed directly in your browser.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
              </svg>
            </div>
            <p className="mt-3 text-sm font-bold text-slate-900">
              Fast processing
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Resize images without waiting for uploads.
            </p>
          </div>
        </div>

        {/* Hidden canvas */}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </section>
  );
}