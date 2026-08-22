export interface ResizeOptions {
  width?: number;
  height?: number;

  maxWidth?: number;
  maxHeight?: number;

  /**
   * Maximum output file size in KB.
   */
  maxFileSizeKB?: number;

  /**
   * Image quality from 0.01 to 1.
   */
  quality?: number;

  format?: "image/jpeg" | "image/png" | "image/webp";

  /**
   * When both width and height are provided:
   *
   * true  = exact dimensions
   * false = preserve aspect ratio
   */
  exactDimensions?: boolean;
}

export interface ResizeResult {
  blob: Blob;
  width: number;
  height: number;
  type: string;
}

interface Dimensions {
  width: number;
  height: number;
}

/* --------------------------------------------------
   DIMENSION CALCULATION
-------------------------------------------------- */

function calculateDimensions(
  originalWidth: number,
  originalHeight: number,
  options: ResizeOptions
): Dimensions {
  const aspectRatio =
    originalWidth / originalHeight;

  // Exact width + height
  if (options.width && options.height) {
    if (options.exactDimensions !== false) {
      return {
        width: options.width,
        height: options.height,
      };
    }

    const widthRatio =
      options.width / originalWidth;

    const heightRatio =
      options.height / originalHeight;

    const scale = Math.min(
      widthRatio,
      heightRatio
    );

    return {
      width: Math.max(
        1,
        Math.round(originalWidth * scale)
      ),
      height: Math.max(
        1,
        Math.round(originalHeight * scale)
      ),
    };
  }

  // Width only
  if (options.width) {
    return {
      width: options.width,
      height: Math.max(
        1,
        Math.round(
          options.width / aspectRatio
        )
      ),
    };
  }

  // Height only
  if (options.height) {
    return {
      width: Math.max(
        1,
        Math.round(
          options.height * aspectRatio
        )
      ),
      height: options.height,
    };
  }

  // Maximum dimensions
  if (
    options.maxWidth ||
    options.maxHeight
  ) {
    const widthLimit =
      options.maxWidth ?? originalWidth;

    const heightLimit =
      options.maxHeight ?? originalHeight;

    const widthRatio =
      widthLimit / originalWidth;

    const heightRatio =
      heightLimit / originalHeight;

    const scale = Math.min(
      widthRatio,
      heightRatio,
      1
    );

    return {
      width: Math.max(
        1,
        Math.round(
          originalWidth * scale
        )
      ),
      height: Math.max(
        1,
        Math.round(
          originalHeight * scale
        )
      ),
    };
  }

  return {
    width: originalWidth,
    height: originalHeight,
  };
}

/* --------------------------------------------------
   IMAGE LOADING
-------------------------------------------------- */

function loadImage(
  file: File
): Promise<HTMLImageElement> {
  return new Promise(
    (resolve, reject) => {
      const objectUrl =
        URL.createObjectURL(file);

      const image = new Image();

      image.onload = () => {
        URL.revokeObjectURL(
          objectUrl
        );

        resolve(image);
      };

      image.onerror = () => {
        URL.revokeObjectURL(
          objectUrl
        );

        reject(
          new Error(
            "Unable to load the image."
          )
        );
      };

      image.src = objectUrl;
    }
  );
}

/* --------------------------------------------------
   CANVAS
-------------------------------------------------- */

function createCanvas(
  image: HTMLImageElement,
  dimensions: Dimensions
): HTMLCanvasElement {
  const canvas =
    document.createElement(
      "canvas"
    );

  canvas.width =
    dimensions.width;

  canvas.height =
    dimensions.height;

  const context =
    canvas.getContext("2d");

  if (!context) {
    throw new Error(
      "Your browser does not support image processing."
    );
  }

  context.imageSmoothingEnabled =
    true;

  context.imageSmoothingQuality =
    "high";

  context.drawImage(
    image,
    0,
    0,
    dimensions.width,
    dimensions.height
  );

  return canvas;
}

/* --------------------------------------------------
   CANVAS → BLOB
-------------------------------------------------- */

function canvasToBlob(
  canvas: HTMLCanvasElement,
  type: string,
  quality: number
): Promise<Blob> {
  return new Promise(
    (resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(
              new Error(
                "Unable to create the output image."
              )
            );

            return;
          }

          resolve(blob);
        },
        type,
        quality
      );
    }
  );
}

/* --------------------------------------------------
   SIZE OPTIMIZATION
-------------------------------------------------- */

/**
 * Find the highest possible quality that
 * stays UNDER the requested file-size limit.
 *
 * Example:
 *
 * Target = 100 KB
 *
 * 150 KB → too large
 * 120 KB → too large
 * 98 KB  → valid
 *
 * Final result must NEVER exceed target.
 */
async function optimizeToFileSize(
  canvas: HTMLCanvasElement,
  format: string,
  targetKB: number,
  initialQuality: number
): Promise<Blob> {
  const targetBytes =
    targetKB * 1024;

  /*
   * PNG does not support lossy quality
   * compression through canvas.toBlob().
   */
  if (format === "image/png") {
    const pngBlob =
      await canvasToBlob(
        canvas,
        format,
        1
      );

    if (
      pngBlob.size <=
      targetBytes
    ) {
      return pngBlob;
    }

    throw new Error(
      `PNG cannot be compressed below ${targetKB} KB while preserving the requested dimensions. Try WebP or JPG.`
    );
  }

  /*
   * First check maximum quality.
   */
  const maximumQuality =
    Math.min(
      1,
      Math.max(
        0.01,
        initialQuality
      )
    );

  const maximumBlob =
    await canvasToBlob(
      canvas,
      format,
      maximumQuality
    );

  /*
   * Already under the requested limit.
   */
  if (
    maximumBlob.size <=
    targetBytes
  ) {
    return maximumBlob;
  }

  /*
   * Start binary search.
   */
  let low = 0.01;
  let high = maximumQuality;

  let bestBlob: Blob | null =
    null;

  /*
   * 14 iterations gives us very
   * accurate quality selection.
   */
  for (
    let attempt = 0;
    attempt < 14;
    attempt++
  ) {
    const quality =
      (low + high) / 2;

    const blob =
      await canvasToBlob(
        canvas,
        format,
        quality
      );

    if (
      blob.size <=
      targetBytes
    ) {
      /*
       * Valid result.
       *
       * Save it and try a higher
       * quality.
       */
      bestBlob = blob;

      low = quality;
    } else {
      /*
       * Too large.
       *
       * Reduce quality.
       */
      high = quality;
    }
  }

  /*
   * We found a valid result.
   */
  if (bestBlob) {
    /*
     * Safety check.
     */
    if (
      bestBlob.size <=
      targetBytes
    ) {
      return bestBlob;
    }
  }

  /*
   * Final emergency attempt at
   * minimum quality.
   */
  const minimumBlob =
    await canvasToBlob(
      canvas,
      format,
      0.01
    );

  if (
    minimumBlob.size <=
    targetBytes
  ) {
    return minimumBlob;
  }

  /*
   * NEVER return an image larger
   * than the requested maximum.
   *
   * This is extremely important.
   */
  throw new Error(
    `Unable to reduce the image below ${targetKB} KB while preserving the requested dimensions.`
  );
}

/* --------------------------------------------------
   MAIN RESIZE FUNCTION
-------------------------------------------------- */

export async function resizeImage(
  file: File,
  options: ResizeOptions
): Promise<ResizeResult> {
  const image =
    await loadImage(file);

  const dimensions =
    calculateDimensions(
      image.naturalWidth,
      image.naturalHeight,
      options
    );

  const canvas =
    createCanvas(
      image,
      dimensions
    );

  const requestedFormat =
    options.format ??
    file.type;

  const supportedFormats = [
    "image/jpeg",
    "image/png",
    "image/webp",
  ];

  const outputFormat =
    supportedFormats.includes(
      requestedFormat
    )
      ? requestedFormat
      : "image/webp";

  const quality =
    options.quality ?? 1;

  let blob: Blob;

  /*
   * No file-size limit.
   */
  if (
    !options.maxFileSizeKB ||
    options.maxFileSizeKB <= 0
  ) {
    blob =
      await canvasToBlob(
        canvas,
        outputFormat,
        quality
      );
  } else {
    /*
     * File-size limit requested.
     *
     * This function GUARANTEES
     * that the returned Blob is
     * <= target size.
     */
    blob =
      await optimizeToFileSize(
        canvas,
        outputFormat,
        options.maxFileSizeKB,
        quality
      );
  }

  /*
   * Final safety validation.
   */
  if (
    options.maxFileSizeKB &&
    blob.size >
      options.maxFileSizeKB * 1024
  ) {
    throw new Error(
      `The optimized image is ${(
        blob.size / 1024
      ).toFixed(
        1
      )} KB, which exceeds the requested maximum of ${options.maxFileSizeKB} KB.`
    );
  }

  return {
    blob,
    width: dimensions.width,
    height: dimensions.height,
    type:
      blob.type ||
      outputFormat,
  };
}