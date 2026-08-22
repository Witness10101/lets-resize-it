export interface ImageAnalysis {
  file: File;
  name: string;
  type: string;
  format: "JPEG" | "PNG" | "WebP" | "Unknown";
  size: number;
  sizeInKB: number;
  sizeInMB: number;
  width: number;
  height: number;
  aspectRatio: number;
}

function getImageFormat(type: string): ImageAnalysis["format"] {
  switch (type) {
    case "image/jpeg":
      return "JPEG";

    case "image/png":
      return "PNG";

    case "image/webp":
      return "WebP";

    default:
      return "Unknown";
  }
}

function loadImageDimensions(file: File): Promise<{
  width: number;
  height: number;
}> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      const dimensions = {
        width: image.naturalWidth,
        height: image.naturalHeight,
      };

      URL.revokeObjectURL(objectUrl);
      resolve(dimensions);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Unable to read this image."));
    };

    image.src = objectUrl;
  });
}

export async function analyzeImage(file: File): Promise<ImageAnalysis> {
  if (!file.type.startsWith("image/")) {
    throw new Error("The selected file is not an image.");
  }

  const { width, height } = await loadImageDimensions(file);

  const sizeInKB = file.size / 1024;
  const sizeInMB = file.size / (1024 * 1024);

  return {
    file,
    name: file.name,
    type: file.type,
    format: getImageFormat(file.type),
    size: file.size,
    sizeInKB,
    sizeInMB,
    width,
    height,
    aspectRatio: width / height,
  };
}