import { ImageResponse } from "next/og";

export const alt = "Raspagem e Aplicação de Sinteco WC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #102a43 0%, #1d4f73 55%, #b98742 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div style={{ fontSize: 36, letterSpacing: 8, opacity: 0.82 }}>
          RESTAURAÇÃO DE PISOS DE MADEIRA
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 28 }}>
          Raspagem e Aplicação de Sinteco WC
        </div>
        <div style={{ fontSize: 34, marginTop: 34, opacity: 0.9 }}>
          Raspagem • Sinteco • Calafetação
        </div>
      </div>
    ),
    size,
  );
}
