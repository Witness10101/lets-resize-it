import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Let&apos;s Resize It — Free Image Resizer and Image Compressor";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#ffffff",
          color: "#0f172a",
          padding: "60px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-3px",
              marginBottom: 20,
            }}
          >
            Let&apos;s Resize It
          </div>

          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "#475569",
              marginBottom: 32,
            }}
          >
            Free Image Resizer &amp; Compressor Online
          </div>

          <div
            style={{
              fontSize: 24,
              color: "#64748b",
            }}
          >
            Resize • Compress • Convert
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
