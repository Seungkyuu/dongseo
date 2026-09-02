import { ImageResponse } from "next/og";

// 빌드 시점에 PNG로 미리 생성해 CDN 정적 자산으로 서빙한다. edge 런타임으로
// 두면 요청마다 즉석 렌더라 렌더 오류가 빌드에서 안 잡히고 요청 시점에만
// 터진다(스크래퍼는 이미지를 못 받아 조용히 옛 캐시를 노출한다).
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
