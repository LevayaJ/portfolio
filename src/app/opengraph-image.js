import { ImageResponse } from "next/og";
import profile from "@/data/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0b 0%, #111827 55%, #1e293b 100%)",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#60a5fa",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, marginTop: 28, lineHeight: 1.1 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 38, color: "#60a5fa", marginTop: 16, fontWeight: 600 }}>
          {profile.title}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a3a3a7", marginTop: 28, maxWidth: 900 }}>
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
