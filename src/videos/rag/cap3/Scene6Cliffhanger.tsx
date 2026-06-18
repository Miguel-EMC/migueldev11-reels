import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { Bg } from "../../../shared/Bg";

export const Scene6Cliffhanger: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 15) * 0.1 + 1;

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      <Bg accent={brand.green} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: 60,
      }}>
        {/* Next Chapter Tease */}
        <div style={{
          opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [40, 0])}px)`,
          textAlign: "center",
          marginBottom: 120,
        }}>
          <div style={{
            fontFamily: brand.fontMono,
            fontSize: 32,
            color: brand.green,
            letterSpacing: "4px",
            marginBottom: 20,
          }}>
            EL FINAL
          </div>
          <div style={{
            fontFamily: brand.fontSans,
            fontSize: 80,
            fontWeight: 900,
            color: brand.cream,
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}>
            Cap 4 <span style={{ color: brand.green }}>→</span> RAG en VIVO
          </div>
        </div>

        {/* Brand Handle */}
        <div style={{
          opacity: spring({ frame: frame - 40, fps }),
          transform: `scale(${spring({ frame: frame - 40, fps }) * pulse})`,
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: brand.fontMono,
            fontSize: 100,
            fontWeight: 800,
            color: brand.green,
            textShadow: brand.glowGreen,
          }}>
            {brand.handle}
          </div>
          <div style={{
            fontFamily: brand.fontSans,
            fontSize: 48,
            fontWeight: 400,
            color: brand.cream,
            opacity: 0.8,
            marginTop: 20,
            letterSpacing: "10px",
            textTransform: "uppercase",
          }}>
            Sígueme
          </div>
        </div>

        {/* Social Pulse */}
        <div style={{
          marginTop: 100,
          display: "flex",
          gap: 40,
          opacity: spring({ frame: frame - 60, fps }),
        }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{
              width: 12, height: 12,
              borderRadius: "50%",
              backgroundColor: brand.green,
              opacity: interpolate(Math.sin((frame - i * 10) / 10), [-1, 1], [0.2, 1]),
              boxShadow: brand.glowGreen,
            }} />
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
