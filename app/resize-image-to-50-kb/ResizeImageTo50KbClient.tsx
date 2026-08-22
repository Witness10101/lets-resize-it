"use client";

import {
  ChangeEvent,
  DragEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type OutputFormat = "original" | "jpeg" | "webp" | "png";

type Result = {
  blob: Blob;
  url: string;
  size: number;
  width: number;
  height: number;
  format: string;
};

const TARGET_BYTES = 50 * 1024;
const MAX_FILE_SIZE = 25 * 1024 * 1024;

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function getExtension(format: OutputFormat, originalType: string) {
  if (format === "jpeg") return "jpg";
  if (format === "webp") return "webp";
  if (format === "png") return "png";

  if (originalType.includes("png")) return "png";
  if (originalType.includes("webp")) return "webp";

  return "jpg";
}

function getMimeType(format: OutputFormat, originalType: string) {
  if (format === "jpeg") return "image/jpeg";
  if (format === "webp") return "image/webp";
  if (format === "png") return "image/png";

  if (originalType === "image/png") return "image/png";
  if (originalType === "image/webp") return "image/webp";

  return "image/jpeg";
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Unable to read this image."));
    };

    image.src = url;
  });
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  type: string,
  quality?: number,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Unable to create the resized image."));
          return;
        }

        resolve(blob);
      },
      type,
      quality,
    );
  });
}

async function createCandidate(
  image: HTMLImageElement,
  width: number,
  height: number,
  type: string,
  quality?: number,
) {
  const canvas = document.createElement("canvas");

  canvas.width = Math.max(1, Math.round(width));
  canvas.height = Math.max(1, Math.round(height));

  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Your browser does not support image processing.");
  }

  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";

  context.drawImage(
    image,
    0,
    0,
    canvas.width,
    canvas.height,
  );

  return canvasToBlob(canvas, type, quality);
}

async function findBestResult(
  image: HTMLImageElement,
  originalType: string,
  outputFormat: OutputFormat,
): Promise<Result> {
  const type = getMimeType(outputFormat, originalType);

  /*
   * PNG does not provide a meaningful quality parameter through
   * canvas.toBlob(). For a strict 50 KB target, converting a PNG
   * photograph to JPEG/WebP is generally much more effective.
   */
  const effectiveType =
    type === "image/png" ? "image/png" : type;

  let baseWidth = image.naturalWidth;
  let baseHeight = image.naturalHeight;

  /*
   * Avoid unnecessarily huge canvas operations.
   * We retain the original aspect ratio.
   */
  const MAX_DIMENSION = 5000;

  if (Math.max(baseWidth, baseHeight) > MAX_DIMENSION) {
    const scale = MAX_DIMENSION / Math.max(baseWidth, baseHeight);

    baseWidth = Math.round(baseWidth * scale);
    baseHeight = Math.round(baseHeight * scale);
  }

  let bestBlob: Blob | null = null;
  let bestWidth = baseWidth;
  let bestHeight = baseHeight;

  /*
   * First attempt:
   * progressively reduce dimensions.
   *
   * This matters because simply crushing JPEG quality can produce
   * an ugly result. Reducing excessive dimensions often gives us
   * a much better quality/file-size balance.
   */
  const dimensionScales = [
    1,
    0.9,
    0.8,
    0.7,
    0.6,
    0.5,
    0.45,
    0.4,
    0.35,
    0.3,
    0.25,
    0.2,
  ];

  /*
   * For JPEG/WebP we can binary-search quality at each dimension.
   */
  if (effectiveType !== "image/png") {
    for (const scale of dimensionScales) {
      const width = Math.max(1, Math.round(baseWidth * scale));
      const height = Math.max(1, Math.round(baseHeight * scale));

      let low = 0.05;
      let high = 0.95;

      let smallestUnderTarget: Blob | null = null;
      let bestOverTarget: Blob | null = null;

      for (let iteration = 0; iteration < 8; iteration++) {
        const quality = (low + high) / 2;

        const blob = await createCandidate(
          image,
          width,
          height,
          effectiveType,
          quality,
        );

        if (blob.size <= TARGET_BYTES) {
          smallestUnderTarget = blob;
          low = quality;
        } else {
          bestOverTarget = blob;
          high = quality;
        }
      }

      if (smallestUnderTarget) {
        /*
         * Prefer the largest file that still fits under 50 KB.
         * This normally gives better visual quality.
         */
        if (
          !bestBlob ||
          smallestUnderTarget.size > bestBlob.size
        ) {
          bestBlob = smallestUnderTarget;
          bestWidth = width;
          bestHeight = height;
        }

        /*
         * We're already very close to the target.
         */
        if (
          TARGET_BYTES - smallestUnderTarget.size <
          TARGET_BYTES * 0.04
        ) {
          break;
        }
      }

      /*
       * If we haven't found an under-target result yet, continue
       * shrinking dimensions.
       */
      void bestOverTarget;
    }
  } else {
    /*
     * PNG path.
     *
     * PNG compression is lossless in canvas, so we progressively
     * reduce dimensions until we reach the target.
     */
    for (const scale of dimensionScales) {
      const width = Math.max(1, Math.round(baseWidth * scale));
      const height = Math.max(1, Math.round(baseHeight * scale));

      const blob = await createCandidate(
        image,
        width,
        height,
        effectiveType,
      );

      if (blob.size <= TARGET_BYTES) {
        bestBlob = blob;
        bestWidth = width;
        bestHeight = height;
        break;
      }

      /*
       * Keep the smallest PNG we have even if it is still above
       * the requested target.
       */
      if (!bestBlob || blob.size < bestBlob.size) {
        bestBlob = blob;
        bestWidth = width;
        bestHeight = height;
      }
    }
  }

  /*
   * If the selected format could not reach 50 KB, make a final
   * JPEG fallback. This is especially useful for large PNG
   * photographs.
   */
  if (!bestBlob || bestBlob.size > TARGET_BYTES) {
    const fallbackType = "image/jpeg";

    for (const scale of [
      0.5,
      0.4,
      0.35,
      0.3,
      0.25,
      0.2,
      0.15,
    ]) {
      const width = Math.max(1, Math.round(baseWidth * scale));
      const height = Math.max(1, Math.round(baseHeight * scale));

      let low = 0.05;
      let high = 0.92;
      let candidateUnder: Blob | null = null;

      for (let i = 0; i < 8; i++) {
        const quality = (low + high) / 2;

        const blob = await createCandidate(
          image,
          width,
          height,
          fallbackType,
          quality,
        );

        if (blob.size <= TARGET_BYTES) {
          candidateUnder = blob;
          low = quality;
        } else {
          high = quality;
        }
      }

      if (candidateUnder) {
        bestBlob = candidateUnder;
        bestWidth = width;
        bestHeight = height;
        break;
      }
    }
  }

  if (!bestBlob) {
    throw new Error(
      "This image could not be reduced enough to reach the 50 KB target.",
    );
  }

  const url = URL.createObjectURL(bestBlob);

  let format = "JPG";

  if (bestBlob.type === "image/png") {
    format = "PNG";
  } else if (bestBlob.type === "image/webp") {
    format = "WebP";
  }

  return {
    blob: bestBlob,
    url,
    size: bestBlob.size,
    width: bestWidth,
    height: bestHeight,
    format,
  };
}

export default function ResizeImageTo50KbClient() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const [outputFormat, setOutputFormat] =
    useState<OutputFormat>("original");

  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const [showAdvanced, setShowAdvanced] = useState(false);

  const clearResult = useCallback(() => {
    setResult((previous) => {
      if (previous?.url) {
        URL.revokeObjectURL(previous.url);
      }

      return null;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

      if (result?.url) {
        URL.revokeObjectURL(result.url);
      }
    };
  }, [previewUrl, result?.url]);

  const processFile = useCallback(
    async (selectedFile: File) => {
      setError(null);
      clearResult();

      if (!selectedFile.type.startsWith("image/")) {
        setError("Please choose a JPG, PNG or WebP image.");
        return;
      }

      if (selectedFile.size > MAX_FILE_SIZE) {
        setError("Please choose an image smaller than 25 MB.");
        return;
      }

      setFile(selectedFile);

      const objectUrl = URL.createObjectURL(selectedFile);

      setPreviewUrl((previous) => {
        if (previous) {
          URL.revokeObjectURL(previous);
        }

        return objectUrl;
      });

      setIsProcessing(true);
      setProgress(5);

      try {
        const image = await loadImage(selectedFile);

        setProgress(20);

        /*
         * Small delay lets the progress UI visibly update while
         * keeping the browser responsive.
         */
        await new Promise((resolve) => setTimeout(resolve, 40));

        setProgress(35);

        const processed = await findBestResult(
          image,
          selectedFile.type,
          outputFormat,
        );

        setProgress(92);

        await new Promise((resolve) => setTimeout(resolve, 80));

        setResult(processed);
        setProgress(100);
      } catch (processingError) {
        console.error(processingError);

        setError(
          "We couldn't process this image. Please try another image or a different output format.",
        );
      } finally {
        setIsProcessing(false);
      }
    },
    [clearResult, outputFormat],
  );

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      void processFile(selectedFile);
    }

    event.target.value = "";
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files?.[0];

    if (droppedFile) {
      void processFile(droppedFile);
    }
  };

  const handleReset = () => {
    clearResult();

    setFile(null);

    setPreviewUrl((previous) => {
      if (previous) {
        URL.revokeObjectURL(previous);
      }

      return null;
    });

    setError(null);
    setProgress(0);
    setOutputFormat("original");
  };

  const handleDownload = () => {
    if (!result || !file) return;

    const extension = getExtension(
      outputFormat,
      file.type,
    );

    const baseName = file.name
      .replace(/\.[^/.]+$/, "")
      .replace(/[^a-zA-Z0-9-_]/g, "-");

    const anchor = document.createElement("a");

    anchor.href = result.url;
    anchor.download = `${baseName}-50kb.${extension}`;

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };

  const reduction =
    file && result
      ? Math.max(
          0,
          Math.round(
            ((file.size - result.size) / file.size) * 100,
          ),
        )
      : 0;

  const targetReached =
    result !== null && result.size <= TARGET_BYTES;

  return (
    <div
      id="resize-image-to-50-kb"
      className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
        {/* ============================================================
            TOOL HEADER
        ============================================================ */}
        <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-black text-white">
                  50
                </span>

                <div>
                  <p className="text-sm font-bold text-slate-950">
                    50 KB Image Resizer
                  </p>

                  <p className="text-xs text-slate-500">
                    Resize toward a 50 KB target
                  </p>
                </div>
              </div>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Free to use
            </div>
          </div>
        </div>

        {/* ============================================================
            TOOL BODY
        ============================================================ */}
        <div className="p-5 sm:p-8">
          {!file ? (
            <div
              onDragOver={(event) => {
                event.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={[
                "relative overflow-hidden rounded-3xl border-2 border-dashed px-5 py-12 text-center transition-all sm:px-10 sm:py-16",
                isDragging
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-200 bg-slate-50/70 hover:border-blue-300 hover:bg-blue-50/40",
              ].join(" ")}
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100 text-blue-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-9 w-9"
                  aria-hidden="true"
                >
                  <path
                    d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M5 14v3.5A2.5 2.5 0 007.5 20h9a2.5 2.5 0 002.5-2.5V14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-950">
                Upload an image to resize to 50 KB
              </h2>

              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
                Drag and drop your image here, or choose a file from your
                device. JPG, PNG and WebP are supported.
              </p>

              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="mt-7 inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-7 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                Choose Image
              </button>

              <p className="mt-4 text-xs text-slate-400">
                Maximum file size: 25 MB
              </p>

              <input
                ref={inputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/jpg"
                onChange={handleInputChange}
                className="hidden"
                aria-label="Choose image"
              />
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
              {/* ========================================================
                  PREVIEW
              ======================================================== */}
              <div className="min-w-0">
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
                    <div>
                      <p className="text-sm font-bold text-slate-950">
                        {file.name}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Original: {formatBytes(file.size)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-lg px-3 py-2 text-xs font-bold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="relative flex min-h-[320px] items-center justify-center p-5 sm:min-h-[420px] sm:p-8">
                    {previewUrl && (
                      <img
                        src={previewUrl}
                        alt="Original image preview"
                        className="max-h-[430px] max-w-full rounded-2xl object-contain shadow-lg"
                      />
                    )}

                    {isProcessing && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/75 p-6 backdrop-blur-sm">
                        <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xl">
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-4 border-blue-100 border-t-blue-600">
                            <span className="sr-only">
                              Processing
                            </span>
                          </div>

                          <p className="mt-4 text-sm font-bold text-slate-950">
                            Optimizing your image…
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            Finding the best balance between size and quality.
                          </p>

                          <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className="h-full rounded-full bg-blue-600 transition-all duration-300"
                              style={{
                                width: `${progress}%`,
                              }}
                            />
                          </div>

                          <p className="mt-2 text-xs font-semibold text-slate-400">
                            {progress}%
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Result */}
                {result && !isProcessing && (
                  <div className="mt-5 rounded-3xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-950">
                            Resized image ready
                          </h3>

                          <span
                            className={[
                              "rounded-full px-2.5 py-1 text-[11px] font-black",
                              targetReached
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-amber-100 text-amber-700",
                            ].join(" ")}
                          >
                            {targetReached
                              ? "UNDER 50 KB"
                              : "CLOSEST RESULT"}
                          </span>
                        </div>

                        <p className="mt-1 text-sm text-slate-600">
                          {formatBytes(result.size)} · {result.width} ×{" "}
                          {result.height} · {result.format}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleDownload}
                        className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-800"
                      >
                        Download Image
                      </button>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <div className="rounded-xl bg-white p-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          Original
                        </p>

                        <p className="mt-1 font-bold text-slate-950">
                          {formatBytes(file.size)}
                        </p>
                      </div>

                      <div className="rounded-xl bg-white p-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          Result
                        </p>

                        <p className="mt-1 font-bold text-emerald-600">
                          {formatBytes(result.size)}
                        </p>
                      </div>

                      <div className="rounded-xl bg-white p-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          Target
                        </p>

                        <p className="mt-1 font-bold text-blue-600">
                          50 KB
                        </p>
                      </div>

                      <div className="rounded-xl bg-white p-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          Reduced
                        </p>

                        <p className="mt-1 font-bold text-slate-950">
                          {reduction}%
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ========================================================
                  SETTINGS
              ======================================================== */}
              <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-600">
                    Target
                  </p>

                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-5xl font-black tracking-tight text-slate-950">
                      50
                    </span>

                    <span className="pb-1 text-lg font-bold text-slate-500">
                      KB
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    The tool automatically works toward this maximum file
                    size.
                  </p>
                </div>

                <div className="my-6 h-px bg-slate-200" />

                <div>
                  <label
                    htmlFor="output-format"
                    className="text-sm font-bold text-slate-950"
                  >
                    Output format
                  </label>

                  <select
                    id="output-format"
                    value={outputFormat}
                    onChange={(event) => {
                      setOutputFormat(
                        event.target.value as OutputFormat,
                      );
                    }}
                    className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  >
                    <option value="original">
                      Best matching format
                    </option>
                    <option value="jpeg">
                      JPG / JPEG
                    </option>
                    <option value="webp">
                      WebP
                    </option>
                    <option value="png">
                      PNG
                    </option>
                  </select>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    JPG and WebP can often achieve much smaller file sizes
                    than PNG for photographs.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setShowAdvanced((previous) => !previous)
                  }
                  className="mt-6 flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-bold text-slate-700"
                >
                  <span>Advanced options</span>

                  <span
                    className={[
                      "transition-transform",
                      showAdvanced ? "rotate-180" : "",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </button>

                {showAdvanced && (
                  <div className="mt-3 rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-xs leading-5 text-slate-500">
                      The 50 KB tool automatically determines appropriate
                      dimensions and compression. Advanced manual quality
                      controls are intentionally limited so the tool can
                      prioritize the requested file-size target.
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => void processFile(file)}
                  disabled={isProcessing}
                  className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isProcessing
                    ? "Processing…"
                    : "Resize Again"}
                </button>

                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  Choose Different Image
                </button>

                <input
                  ref={inputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/jpg"
                  onChange={handleInputChange}
                  className="hidden"
                  aria-label="Choose a different image"
                />

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-emerald-600">
                      ✓
                    </span>

                    <p className="text-xs leading-5 text-slate-500">
                      Works directly in your browser
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-emerald-600">
                      ✓
                    </span>

                    <p className="text-xs leading-5 text-slate-500">
                      No account required
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-emerald-600">
                      ✓
                    </span>

                    <p className="text-xs leading-5 text-slate-500">
                      Targeted around 50 KB
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          )}

          {/* ============================================================
              ERROR
          ============================================================ */}
          {error && (
            <div
              role="alert"
              className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700"
            >
              <div className="flex items-start gap-3">
                <span className="font-black">!</span>

                <div>
                  <p className="font-bold">
                    We couldn't process that image.
                  </p>

                  <p className="mt-1 leading-6">
                    {error}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ============================================================
            TRUST FOOTER
        ============================================================ */}
        <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500">
            <span>JPG</span>
            <span>PNG</span>
            <span>WebP</span>
            <span>50 KB target</span>
            <span>Browser-based</span>
          </div>
        </div>
      </div>
    </div>
  );
}