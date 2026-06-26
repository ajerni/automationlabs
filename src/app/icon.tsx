import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2dd4bf 0%, #8b5cf6 100%)",
          borderRadius: 8,
          color: "#06080f",
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        AL
      </div>
    ),
    { ...size },
  );
}
