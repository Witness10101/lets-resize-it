"use client";

import {
  ChangeEvent,
  DragEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type ConversionStatus = "idle" | "ready" | "converting" | "complete" | "error";

interface ImageInfo {
  name: string;
  size: number;
  type: string;
  width: number;
  height: number;
}

const MAX_FILE_SIZE = 25 * 1024 * 1024;

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/webp",
  "image/gif",
  "image/bmp",
];

const ACCEPTED_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".bmp",
];

function formatFileSize(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function getFileExtension(filename: string): string {
  const extension = filename.split(".").pop();

  return extension ? extension.toUpperCase() : "IMAGE";
}

function getOutputName(filename: string): string {
  const withoutExtension = filename.replace(/\.[^/.]+$/, "");

  return `${withoutExtension || "converted-image"}.png`;
}

function isAcceptedFile(file: File): boolean {
  const extension = `.${file.name.split(".").pop()?.toLowerCase()}`;

  return (
    ACCEPTED_TYPES.includes(file.type.toLowerCase()) ||
    ACCEPTED_EXTENSIONS.includes(extension)
  );
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
      reject(new Error("The selected image could not be read."));
    };

    image.src = objectUrl;
  });
}

function convertToPng(
  image: HTMLImageElement,
  sourceType: string
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");

    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    const context = canvas.getContext("2d");

    if (!context) {
      reject(new Error("Your browser could not create the conversion canvas."));
      return;
    }

    /*
     * PNG supports transparency. We deliberately do not paint a white
     * background here so transparent source images can retain transparency
     * when the browser provides it.
     *
     * JPEG sources naturally have an opaque background.
     */
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(image, 0, 0);

    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("PNG conversion failed. Please try another image."));
          return;
        }

        resolve(blob);
      },
      "image/png"
    );
  });
}

export default function ImageToPngClient() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const previewUrlRef = useRef<string | null>(null);
  const downloadUrlRef = useRef<string | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [imageInfo, setImageInfo] = useState<ImageInfo | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [outputName, setOutputName] = useState<string>("converted-image.png");
  const [outputSize, setOutputSize] = useState<number | null>(null);
  const [status, setStatus] = useState<ConversionStatus>("idle");
  const [error, setError] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);

  const clearPreviewUrl = useCallback(() => {
    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current);
      previewUrlRef.current = null;
    }
  }, []);

  const clearDownloadUrl = useCallback(() => {
    if (downloadUrlRef.current) {
      URL.revokeObjectURL(downloadUrlRef.current);
      downloadUrlRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      clearPreviewUrl();
      clearDownloadUrl();
    };
  }, [clearPreviewUrl, clearDownloadUrl]);

  const resetTool = useCallback(() => {
    clearPreviewUrl();
    clearDownloadUrl();

    setFile(null);
    setImageInfo(null);
    setPreviewUrl(null);
    setDownloadUrl(null);
    setOutputName("converted-image.png");
    setOutputSize(null);
    setStatus("idle");
    setError("");
    setIsDragging(false);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [clearPreviewUrl, clearDownloadUrl]);

  const prepareFile = useCallback(
    async (selectedFile: File) => {
      setError("");
      setStatus("idle");

      if (!isAcceptedFile(selectedFile)) {
        setStatus("error");
        setError(
          "Please choose a JPG, JPEG, WebP, GIF or BMP image."
        );
        return;
      }

      if (selectedFile.size > MAX_FILE_SIZE) {
        setStatus("error");
        setError("This file is larger than the 25 MB limit.");
        return;
      }

      if (selectedFile.size === 0) {
        setStatus("error");
        setError("The selected file is empty. Please choose another image.");
        return;
      }

      try {
        const image = await loadImage(selectedFile);

        if (!image.naturalWidth || !image.naturalHeight) {
          throw new Error("The selected image has invalid dimensions.");
        }

        clearPreviewUrl();
        clearDownloadUrl();

        const newPreviewUrl = URL.createObjectURL(selectedFile);
        previewUrlRef.current = newPreviewUrl;

        setFile(selectedFile);
        setPreviewUrl(newPreviewUrl);
        setOutputName(getOutputName(selectedFile.name));
        setOutputSize(null);
        setDownloadUrl(null);

        setImageInfo({
          name: selectedFile.name,
          size: selectedFile.size,
          type: selectedFile.type || "image/*",
          width: image.naturalWidth,
          height: image.naturalHeight,
        });

        setStatus("ready");
      } catch {
        clearPreviewUrl();
        clearDownloadUrl();

        setFile(null);
        setImageInfo(null);
        setPreviewUrl(null);
        setDownloadUrl(null);
        setStatus("error");
        setError(
          "We couldn&apos;t read this image. Please try a valid JPG, JPEG, WebP, GIF or BMP file."
        );
      }
    },
    [clearPreviewUrl, clearDownloadUrl]
  );

  const handleFileChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    await prepareFile(selectedFile);
  };

  const handleDrop = async (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(false);

    const droppedFile = event.dataTransfer.files?.[0];

    if (!droppedFile) {
      return;
    }

    await prepareFile(droppedFile);
  };

  const handleConvert = async () => {
    if (!file || !imageInfo) {
      return;
    }

    setError("");
    setStatus("converting");

    try {
      const image = await loadImage(file);
      const pngBlob = await convertToPng(image, file.type);

      clearDownloadUrl();

      const newDownloadUrl = URL.createObjectURL(pngBlob);
      downloadUrlRef.current = newDownloadUrl;

      setDownloadUrl(newDownloadUrl);
      setOutputSize(pngBlob.size);
      setOutputName(getOutputName(file.name));
      setStatus("complete");
    } catch (conversionError) {
      console.error(conversionError);

      clearDownloadUrl();

      setDownloadUrl(null);
      setOutputSize(null);
      setStatus("error");
      setError(
        "Something went wrong while converting the image. Please try again."
      );
    }
  };

  const handleDownload = () => {
    if (!downloadUrl) {
      return;
    }

    const link = document.createElement("a");

    link.href = downloadUrl;
    link.download = outputName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  const compressionDifference =
    imageInfo && outputSize
      ? ((1 - outputSize / imageInfo.size) * 100).toFixed(1)
      : null;

  return (
    <section
      id="image-to-png-converter"
      aria-labelledby="image-to-png-tool-heading"
      className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_-30px_rgba(15,23,42,0.25)]">
        {/* Decorative background */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative p-5 sm:p-8 lg:p-10">
          {/* Tool heading */}
          <div className="mb-7 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M12 3v12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m7 10 5 5 5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 21h14"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h2
              id="image-to-png-tool-heading"
              className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
            >
              Image to PNG Converter
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Drop an image below to convert it into a PNG file.
            </p>
          </div>

          {/* Hidden input */}
          <input
            ref={inputRef}
            type="file"
            accept={ACCEPTED_EXTENSIONS.join(",")}
            onChange={handleFileChange}
            className="sr-only"
            aria-label="Choose an image to convert to PNG"
          />

          {/* Empty state / Drop zone */}
          {!file && (
            <div
              onDragEnter={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setIsDragging(true);
              }}
              onDragOver={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setIsDragging(true);
              }}
              onDragLeave={(event) => {
                event.preventDefault();
                event.stopPropagation();

                /*
                 * Prevent the parent drop zone from flickering when moving
                 * between children.
                 */
                if (event.currentTarget === event.target) {
                  setIsDragging(false);
                }
              }}
              onDrop={handleDrop}
              onClick={openFilePicker}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openFilePicker();
                }
              }}
              className={[
                "group relative flex min-h-[330px] cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border-2 border-dashed px-5 py-10 text-center transition-all duration-200 sm:min-h-[360px]",
                isDragging
                  ? "border-blue-500 bg-blue-50/80 scale-[1.01]"
                  : "border-slate-300 bg-slate-50/70 hover:border-blue-400 hover:bg-blue-50/40",
              ].join(" ")}
            >
              <div
                className={[
                  "flex h-20 w-20 items-center justify-center rounded-3xl transition-all duration-200",
                  isDragging
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200 group-hover:bg-blue-600 group-hover:text-white",
                ].join(" ")}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-9 w-9"
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

              <h3 className="mt-7 text-xl font-bold text-slate-950 sm:text-2xl">
                {isDragging
                  ? "Drop your image here"
                  : "Drop an image here"}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                or click to browse from your device
              </p>

              <span className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md">
                Choose Image
              </span>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-400">
                <span>JPG</span>
                <span aria-hidden="true">•</span>
                <span>JPEG</span>
                <span aria-hidden="true">•</span>
                <span>WebP</span>
                <span aria-hidden="true">•</span>
                <span>GIF</span>
                <span aria-hidden="true">•</span>
                <span>BMP</span>
                <span aria-hidden="true">•</span>
                <span>Up to 25 MB</span>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div
              role="alert"
              className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700"
            >
              <div
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600"
                aria-hidden="true"
              >
                !
              </div>

              <div className="flex-1">
                <p className="font-semibold">Conversion issue</p>
                <p className="mt-1 leading-6">{error}</p>
              </div>
            </div>
          )}

          {/* File workspace */}
          {file && imageInfo && (
            <div className="space-y-5">
              {/* Preview card */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 py-3 sm:px-5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">
                      {imageInfo.name}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {getFileExtension(imageInfo.name)} •{" "}
                      {formatFileSize(imageInfo.size)} •{" "}
                      {imageInfo.width} × {imageInfo.height}px
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={resetTool}
                    className="inline-flex h-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                  >
                    Change
                  </button>
                </div>

                <div className="flex min-h-[280px] items-center justify-center bg-[linear-gradient(45deg,#f1f5f9_25%,transparent_25%),linear-gradient(-45deg,#f1f5f9_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f1f5f9_75%),linear-gradient(-45deg,transparent_75%,#f1f5f9_75%)] bg-[length:24px_24px] bg-[position:0_0,0_12px,12px_-12px,-12px_0px] p-5 sm:min-h-[360px] sm:p-8">
                  {previewUrl && (
                    <img
                      src={previewUrl}
                      alt={`Preview of ${imageInfo.name} before PNG conversion`}
                      className="max-h-[330px] max-w-full rounded-xl object-contain shadow-xl"
                    />
                  )}
                </div>
              </div>

              {/* File information */}
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-medium text-slate-400">
                    Original format
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    {getFileExtension(imageInfo.name)}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-medium text-slate-400">
                    Dimensions
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    {imageInfo.width} × {imageInfo.height}px
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-medium text-slate-400">
                    File size
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    {formatFileSize(imageInfo.size)}
                  </p>
                </div>
              </div>

              {/* Conversion status */}
              {status === "converting" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="h-6 w-6 animate-spin rounded-full border-2 border-blue-200 border-t-blue-600"
                      aria-hidden="true"
                    />

                    <div>
                      <p className="text-sm font-bold text-blue-900">
                        Converting image to PNG…
                      </p>

                      <p className="mt-1 text-xs text-blue-700">
                        Your image is being processed in your browser.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Completed result */}
              {status === "complete" && downloadUrl && outputSize !== null && (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-6 w-6"
                        >
                          <path
                            d="m5 12 4 4L19 6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-bold text-emerald-900">
                          PNG conversion complete
                        </p>

                        <p className="mt-1 truncate text-xs text-emerald-700">
                          {outputName} • {formatFileSize(outputSize)}
                        </p>

                        {compressionDifference !== null && (
                          <p className="mt-1 text-xs text-emerald-700">
                            {Number(compressionDifference) >= 0
                              ? `${compressionDifference}% smaller than the original`
                              : `${Math.abs(
                                  Number(compressionDifference)
                                )}% larger than the original`}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleDownload}
                      className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 3v12"
                          strokeLinecap="round"
                        />
                        <path
                          d="m7 10 5 5 5-5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 21h14"
                          strokeLinecap="round"
                        />
                      </svg>
                      Download PNG
                    </button>
                  </div>
                </div>
              )}

              {/* Main action */}
              {status !== "complete" && (
                <button
                  type="button"
                  onClick={handleConvert}
                  disabled={status === "converting"}
                  className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "converting" ? (
                    <>
                      <span
                        className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"
                        aria-hidden="true"
                      />
                      Converting…
                    </>
                  ) : (
                    <>
                      Convert to PNG
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 12h14"
                          strokeLinecap="round"
                        />
                        <path
                          d="m13 6 6 6-6 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </button>
              )}

              {/* After conversion actions */}
              {status === "complete" && (
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
                  >
                    Download PNG
                  </button>

                  <button
                    type="button"
                    onClick={resetTool}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    Convert Another Image
                  </button>
                </div>
              )}

              {/* Privacy / processing note */}
              <div className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="mt-0.5 h-5 w-5 shrink-0 text-slate-500"
                  aria-hidden="true"
                >
                  <rect
                    x="5"
                    y="10"
                    width="14"
                    height="10"
                    rx="2"
                  />
                  <path
                    d="M8 10V7a4 4 0 0 1 8 0v3"
                    strokeLinecap="round"
                  />
                </svg>

                <p className="text-xs leading-5 text-slate-500">
                  Your image is processed directly in your browser during the
                  conversion. No account or software installation is required.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Supported formats / trust strip */}
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
            PNG
          </span>

          <div>
            <p className="text-xs font-bold text-slate-900">
              PNG output
            </p>
            <p className="text-[11px] text-slate-500">
              High-quality lossless format
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            ✓
          </span>

          <div>
            <p className="text-xs font-bold text-slate-900">
              Browser-based
            </p>
            <p className="text-[11px] text-slate-500">
              No desktop software required
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
            25
          </span>

          <div>
            <p className="text-xs font-bold text-slate-900">
              Up to 25 MB
            </p>
            <p className="text-[11px] text-slate-500">
              Per image conversion limit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}