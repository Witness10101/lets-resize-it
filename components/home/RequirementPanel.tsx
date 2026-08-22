"use client";

import { useState } from "react";

type SizeOption = "none" | "50" | "100" | "500" | "custom";
type DimensionMode = "original" | "custom";
type FormatOption = "original" | "jpeg" | "png" | "webp";

export interface ImageRequirements {
  sizeLimit: number | null;
  customSize: number | null;
  dimensionMode: DimensionMode;
  width: number | null;
  height: number | null;
  format: FormatOption;
}

interface RequirementPanelProps {
  onRequirementsChange?: (
    requirements: ImageRequirements
  ) => void;
  onOptimize?: (requirements: ImageRequirements) => void;
}

export function RequirementPanel({
  onRequirementsChange,
  onOptimize,
}: RequirementPanelProps) {
  const [sizeOption, setSizeOption] =
    useState<SizeOption>("none");

  const [customSize, setCustomSize] = useState("");

  const [dimensionMode, setDimensionMode] =
    useState<DimensionMode>("original");

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const [format, setFormat] =
    useState<FormatOption>("original");

  const getRequirements = (): ImageRequirements => {
    return {
      sizeLimit:
        sizeOption === "none"
          ? null
          : sizeOption === "custom"
            ? null
            : Number(sizeOption),

      customSize:
        sizeOption === "custom" && customSize
          ? Number(customSize)
          : null,

      dimensionMode,

      width:
        dimensionMode === "custom" && width
          ? Number(width)
          : null,

      height:
        dimensionMode === "custom" && height
          ? Number(height)
          : null,

      format,
    };
  };

  const updateRequirements = (
    nextRequirements?: ImageRequirements
  ) => {
    const requirements =
      nextRequirements ?? getRequirements();

    onRequirementsChange?.(requirements);
  };

  const handleSizeChange = (value: SizeOption) => {
    setSizeOption(value);

    const requirements = {
      ...getRequirements(),
      sizeLimit:
        value === "none" || value === "custom"
          ? null
          : Number(value),
      customSize:
        value === "custom" && customSize
          ? Number(customSize)
          : null,
    };

    updateRequirements(requirements);
  };

  const handleCustomSizeChange = (
    value: string
  ) => {
    setCustomSize(value);

    const requirements = {
      ...getRequirements(),
      sizeLimit: null,
      customSize: value ? Number(value) : null,
    };

    updateRequirements(requirements);
  };

  const handleDimensionModeChange = (
    value: DimensionMode
  ) => {
    setDimensionMode(value);

    const requirements = {
      ...getRequirements(),
      dimensionMode: value,
      width:
        value === "custom" && width
          ? Number(width)
          : null,
      height:
        value === "custom" && height
          ? Number(height)
          : null,
    };

    updateRequirements(requirements);
  };

  const handleWidthChange = (value: string) => {
    setWidth(value);

    updateRequirements({
      ...getRequirements(),
      width: value ? Number(value) : null,
    });
  };

  const handleHeightChange = (value: string) => {
    setHeight(value);

    updateRequirements({
      ...getRequirements(),
      height: value ? Number(value) : null,
    });
  };

  const handleFormatChange = (
    value: FormatOption
  ) => {
    setFormat(value);

    updateRequirements({
      ...getRequirements(),
      format: value,
    });
  };

  const handleOptimize = () => {
    onOptimize?.(getRequirements());
  };

  return (
    <section
      id="requirements"
      aria-labelledby="requirements-heading"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            Step 2
          </span>

          <h2
            id="requirements-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
          >
            What does your image need to fit?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Tell us the file size, dimensions, or format you
            need. We&apos;ll handle the optimization for you.
          </p>
        </div>

        <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {/* File size */}
          <div>
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-slate-950">
                Maximum file size
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Useful when a website or application has an
                upload limit.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
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
                      handleSizeChange(option.value)
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
                  htmlFor="custom-size"
                  className="mb-2 block text-xs font-medium text-slate-700"
                >
                  Custom maximum size in KB
                </label>

                <div className="relative">
                  <input
                    id="custom-size"
                    type="number"
                    min="1"
                    placeholder="e.g. 250"
                    value={customSize}
                    onChange={(event) =>
                      handleCustomSizeChange(
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

          <div className="h-px bg-slate-100" />

          {/* Dimensions */}
          <div>
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-slate-950">
                Dimensions
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Keep the original dimensions or specify the
                exact size.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() =>
                  handleDimensionModeChange("original")
                }
                className={`flex-1 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                  dimensionMode === "original"
                    ? "border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600"
                    : "border-slate-200 text-slate-700 hover:border-blue-300"
                }`}
              >
                <span className="block font-semibold">
                  Keep original
                </span>

                <span className="mt-1 block text-xs opacity-75">
                  Preserve the current dimensions
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleDimensionModeChange("custom")
                }
                className={`flex-1 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                  dimensionMode === "custom"
                    ? "border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600"
                    : "border-slate-200 text-slate-700 hover:border-blue-300"
                }`}
              >
                <span className="block font-semibold">
                  Custom dimensions
                </span>

                <span className="mt-1 block text-xs opacity-75">
                  Set an exact width and height
                </span>
              </button>
            </div>

            {dimensionMode === "custom" && (
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="image-width"
                    className="mb-2 block text-xs font-medium text-slate-700"
                  >
                    Width
                  </label>

                  <div className="relative">
                    <input
                      id="image-width"
                      type="number"
                      min="1"
                      placeholder="e.g. 600"
                      value={width}
                      onChange={(event) =>
                        handleWidthChange(
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
                    htmlFor="image-height"
                    className="mb-2 block text-xs font-medium text-slate-700"
                  >
                    Height
                  </label>

                  <div className="relative">
                    <input
                      id="image-height"
                      type="number"
                      min="1"
                      placeholder="e.g. 600"
                      value={height}
                      onChange={(event) =>
                        handleHeightChange(
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

          <div className="h-px bg-slate-100" />

          {/* Format */}
          <div>
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-slate-950">
                Output format
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Choose the format that works best for your
                destination.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                {
                  value: "original" as FormatOption,
                  label: "Keep original",
                },
                {
                  value: "jpeg" as FormatOption,
                  label: "JPG",
                },
                {
                  value: "png" as FormatOption,
                  label: "PNG",
                },
                {
                  value: "webp" as FormatOption,
                  label: "WebP",
                },
              ].map((option) => {
                const selected =
                  format === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      handleFormatChange(option.value)
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
          <div className="border-t border-slate-100 pt-6">
            <button
              type="button"
              onClick={handleOptimize}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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
    </section>
  );
}