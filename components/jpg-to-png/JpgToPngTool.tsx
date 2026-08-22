"use client";

import {
  ChangeEvent,
  DragEvent,
  useEffect,
  useRef,
  useState,
} from "react";

interface ImageInfo {
  name: string;
  size: number;
  width: number;
  height: number;
  type: string;
}

interface ConvertedImage {
  blob: Blob;
  width: number;
  height: number;
  url: string;
  size: number;
}

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/jpg",
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

function loadImage(
  file: File
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(image);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(
        new Error("Unable to read this image.")
      );
    };

    image.src = objectUrl;
  });
}

async function convertJpgToPng(
  file: File
): Promise<ConvertedImage> {
  const image = await loadImage(file);

  const canvas = document.createElement("canvas");

  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;

  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error(
      "Your browser does not support image conversion."
    );
  }

  /*
   * PNG does not need a quality parameter.
   * Drawing the JPG onto the canvas and exporting
   * as image/png performs the actual conversion.
   */
  context.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight
  );

  const blob = await new Promise<Blob>(
    (resolve, reject) => {
      canvas.toBlob(
        (result) => {
          if (!result) {
            reject(
              new Error(
                "Unable to create the PNG image."
              )
            );
            return;
          }

          resolve(result);
        },
        "image/png"
      );
    }
  );

  return {
    blob,
    width: image.naturalWidth,
    height: image.naturalHeight,
    url: URL.createObjectURL(blob),
    size: blob.size,
  };
}

export function JpgToPngTool() {
  const inputRef =
    useRef<HTMLInputElement>(null);

  const [file, setFile] =
    useState<File | null>(null);

  const [imageInfo, setImageInfo] =
    useState<ImageInfo | null>(null);

  const [converted, setConverted] =
    useState<ConvertedImage | null>(null);

  const [originalPreviewUrl, setOriginalPreviewUrl] =
    useState<string | null>(null);

  const [isDragging, setIsDragging] =
    useState(false);

  const [isConverting, setIsConverting] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  const [conversionStarted, setConversionStarted] =
    useState(false);

  /*
   * Cleanup converted image URL.
   */
  useEffect(() => {
    return () => {
      if (converted?.url) {
        URL.revokeObjectURL(converted.url);
      }
    };
  }, [converted]);

  /*
   * Cleanup original preview URL.
   */
  useEffect(() => {
    return () => {
      if (originalPreviewUrl) {
        URL.revokeObjectURL(
          originalPreviewUrl
        );
      }
    };
  }, [originalPreviewUrl]);

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
        "Please choose a JPG or JPEG image."
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

  const handleFile = (
    selectedFile: File
  ) => {
    if (!validateFile(selectedFile)) {
      return;
    }

    /*
     * Clear previous conversion.
     */
    if (converted?.url) {
      URL.revokeObjectURL(
        converted.url
      );
    }

    if (originalPreviewUrl) {
      URL.revokeObjectURL(
        originalPreviewUrl
      );
    }

    const previewUrl =
      URL.createObjectURL(
        selectedFile
      );

    setFile(selectedFile);
    setOriginalPreviewUrl(
      previewUrl
    );

    setConverted(null);
    setConversionStarted(false);
    setError(null);

    /*
     * Read dimensions without
     * uploading the image.
     */
    const image =
      new Image();

    image.onload = () => {
      setImageInfo({
        name: selectedFile.name,
        size: selectedFile.size,
        width:
          image.naturalWidth,
        height:
          image.naturalHeight,
        type: selectedFile.type,
      });
    };

    image.onerror = () => {
      setError(
        "We couldn't read this image. Please try another JPG file."
      );
    };

    image.src = previewUrl;
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

  const openPicker = () => {
    inputRef.current?.click();
  };

  const handleConvert = async () => {
    if (!file) {
      return;
    }

    setIsConverting(true);
    setConversionStarted(true);
    setError(null);

    try {
      const result =
        await convertJpgToPng(
          file
        );

      setConverted(result);
    } catch (conversionError) {
      const message =
        conversionError instanceof
        Error
          ? conversionError.message
          : "We couldn't convert this image.";

      setError(message);
      setConverted(null);
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (!converted || !file) {
      return;
    }

    const baseName =
      file.name.replace(
        /\.[^/.]+$/,
        ""
      );

    const downloadName =
      `${baseName}.png`;

    const anchor =
      document.createElement(
        "a"
      );

    anchor.href =
      converted.url;

    anchor.download =
      downloadName;

    document.body.appendChild(
      anchor
    );

    anchor.click();

    anchor.remove();
  };

  const handleReset = () => {
    if (converted?.url) {
      URL.revokeObjectURL(
        converted.url
      );
    }

    if (originalPreviewUrl) {
      URL.revokeObjectURL(
        originalPreviewUrl
      );
    }

    setFile(null);
    setImageInfo(null);
    setConverted(null);
    setOriginalPreviewUrl(null);
    setError(null);
    setConversionStarted(false);
    setIsConverting(false);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const sizeChange =
    file && converted
      ? ((converted.size -
          file.size) /
          file.size) *
        100
      : null;

  return (
    <section
      id="jpg-to-png-tool"
      aria-labelledby="jpg-to-png-tool-heading"
      className="scroll-mt-24 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            JPG to PNG Converter
          </span>

          <h2
            id="jpg-to-png-tool-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
          >
            Convert JPG to PNG online
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Upload a JPG or JPEG image and convert it
            to PNG directly in your browser.
          </p>
        </div>

        {/* Upload state */}
        {!file && (
          <div className="mt-8">
            <div
              role="button"
              tabIndex={0}
              onClick={openPicker}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault();
                  openPicker();
                }
              }}
              onDragOver={handleDragOver}
              onDragEnter={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`group cursor-pointer rounded-3xl border-2 border-dashed bg-white p-8 text-center shadow-sm outline-none transition-all duration-200 sm:p-14 ${
                isDragging
                  ? "border-blue-500 bg-blue-50/50 shadow-md"
                  : "border-slate-300 hover:border-blue-400 hover:bg-blue-50/20"
              } focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2`}
            >
              <input
                ref={inputRef}
                type="file"
                accept="image/jpeg,image/jpg"
                onChange={
                  handleInputChange
                }
                className="sr-only"
                aria-label="Choose a JPG image"
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

              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {isDragging
                  ? "Drop your JPG here"
                  : "Drop a JPG image here"}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                or click to choose a JPG or JPEG file
              </p>

              <span className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                Choose JPG image
              </span>

              <p className="mt-4 text-xs text-slate-400">
                Maximum file size: 25 MB
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                JPG and JPEG supported
              </span>

              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Works in your browser
              </span>

              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                No installation required
              </span>
            </div>
          </div>
        )}

        {/* Selected image */}
        {file && imageInfo && (
          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Header */}
            <div className="flex flex-col gap-4 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <span className="text-xs font-black">
                    JPG
                  </span>
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-950">
                    {imageInfo.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {formatFileSize(
                      imageInfo.size
                    )}{" "}
                    ·{" "}
                    {imageInfo.width} ×{" "}
                    {imageInfo.height}px
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex h-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Choose another
              </button>
            </div>

            {/* Preview */}
            <div className="bg-slate-100 p-5 sm:p-8">
              <div className="flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:min-h-[360px]">
                {originalPreviewUrl && (
                  <img
                    src={originalPreviewUrl}
                    alt={`JPG image ${imageInfo.name}`}
                    className="max-h-[360px] max-w-full rounded-xl object-contain shadow-sm"
                  />
                )}
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-3 border-t border-slate-100 p-5 sm:grid-cols-4 sm:p-6">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-medium text-slate-500">
                  File size
                </p>

                <p className="mt-1 text-sm font-bold text-slate-950">
                  {formatFileSize(
                    imageInfo.size
                  )}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-medium text-slate-500">
                  Dimensions
                </p>

                <p className="mt-1 text-sm font-bold text-slate-950">
                  {imageInfo.width} ×{" "}
                  {imageInfo.height}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-medium text-slate-500">
                  Input
                </p>

                <p className="mt-1 text-sm font-bold text-slate-950">
                  JPG
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-xs font-medium text-blue-600">
                  Output
                </p>

                <p className="mt-1 text-sm font-bold text-blue-700">
                  PNG
                </p>
              </div>
            </div>

            {/* Convert */}
            {!converted && (
              <div className="border-t border-slate-100 p-5 sm:p-6">
                <button
                  type="button"
                  onClick={handleConvert}
                  disabled={isConverting}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  {isConverting ? (
                    <>
                      <span
                        className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                        aria-hidden="true"
                      />

                      Converting to PNG...
                    </>
                  ) : (
                    <>
                      Convert JPG to PNG

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

                <p className="mt-3 text-center text-xs text-slate-500">
                  Conversion happens directly in your browser.
                </p>
              </div>
            )}

            {/* Conversion result */}
            {converted && (
              <div className="border-t border-slate-100">
                <div className="flex items-center justify-between px-5 py-4 sm:px-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      PNG conversion complete
                    </p>

                    <p className="mt-1 text-xs text-emerald-600">
                      Your PNG image is ready.
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Ready
                  </span>
                </div>

                {/* Result preview */}
                <div className="bg-slate-100 p-5 sm:p-8">
                  <div className="flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:min-h-[360px]">
                    <img
                      src={converted.url}
                      alt="Converted PNG preview"
                      className="max-h-[360px] max-w-full rounded-xl object-contain shadow-sm"
                    />
                  </div>
                </div>

                {/* Result details */}
                <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-4 sm:p-6">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-500">
                      Output size
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-950">
                      {formatFileSize(
                        converted.size
                      )}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-500">
                      Dimensions
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-950">
                      {converted.width} ×{" "}
                      {converted.height}
                    </p>
                  </div>

                  <div className="rounded-xl bg-blue-50 p-4">
                    <p className="text-xs font-medium text-blue-600">
                      Format
                    </p>

                    <p className="mt-1 text-sm font-bold text-blue-700">
                      PNG
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-500">
                      Size change
                    </p>

                    <p
                      className={`mt-1 text-sm font-bold ${
                        sizeChange !== null &&
                        sizeChange <= 0
                          ? "text-emerald-600"
                          : "text-slate-950"
                      }`}
                    >
                      {sizeChange !== null
                        ? `${Math.abs(
                            sizeChange
                          ).toFixed(1)}% ${
                            sizeChange <= 0
                              ? "smaller"
                              : "larger"
                          }`
                        : "—"}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 border-t border-slate-100 p-5 sm:flex-row sm:p-6">
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

                    Download PNG
                  </button>

                  <button
                    type="button"
                    onClick={
                      handleReset
                    }
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  >
                    Convert another
                  </button>
                </div>
              </div>
            )}

            {/* Error */}
            {error && (
              <div
                role="alert"
                className="border-t border-red-100 bg-red-50 px-5 py-4 text-sm font-medium text-red-700 sm:px-6"
              >
                {error}
              </div>
            )}
          </div>
        )}

        {/* Privacy reassurance */}
        <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-500 sm:text-sm">
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

          Your image is processed locally in your browser and
          is not uploaded to our servers.
        </div>
      </div>
    </section>
  );
}