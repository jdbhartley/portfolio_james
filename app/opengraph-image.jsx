import { ImageResponse } from "next/og";
export const alt = "James Hartley — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#151815",
        color: "#edf0e8",
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
        <span style={{ color: "#c4e88a" }}>Software Engineer ↗</span>
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
        <span style={{ color: "#c4e88a" }}>Hartley</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#a5afa0",
          fontSize: 22,
        }}
      >
        <span>C# · .NET · TypeScript · React</span>
        <span>jameshartley.dev</span>
      </div>
    </div>,
    size,
  );
}
