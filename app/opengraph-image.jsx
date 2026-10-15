import { ImageResponse } from "next/og";
export const alt = "James Hartley — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#0c0c0f",
        color: "#eeeef0",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "72px 80px",
        fontFamily: "sans-serif",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 25,
        }}
      >
        <span>James Hartley</span>
        <span style={{ color: "#aaaab4", display: "flex", gap: 12 }}>
          C# Developer <span style={{ color: "#ff741f" }}>↗</span>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 99,
          letterSpacing: "-5px",
          lineHeight: 1.05,
        }}
      >
        <span>James</span>
        <span style={{ color: "#aaaab4" }}>Hartley</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#a5a5ad",
          fontSize: 22,
        }}
      >
        <span>C# · React · TypeScript · SQLite</span>
        <span>jameshartley.dev</span>
      </div>
    </div>,
    size,
  );
}
