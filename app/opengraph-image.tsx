import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "서동 — 자동차 장기렌트·리스·법인 리스 비교";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#4a3626",
          color: "#f7f2ea",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              border: "3px solid #f7f2ea",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            서
          </div>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>
            <span>서</span>
            <span style={{ color: "#e0693f" }}>동</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 800, marginTop: 48, lineHeight: 1.4 }}>
          자동차 장기렌트·리스·법인 리스
        </div>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 800, lineHeight: 1.4 }}>
          여러 금융사 견적을 한 번에 비교
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#e0a578", marginTop: 24 }}>
          서동 — 함께 걷는 동행자
        </div>
      </div>
    ),
    { ...size },
  );
}
