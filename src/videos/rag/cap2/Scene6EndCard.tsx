import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { Bg } from "../../../shared/Bg";

export const Scene6EndCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 15) * 0.1 + 1;

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      <Bg accent={brand.orange} />

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
            color: brand.orange,
            letterSpacing: "4px",
            marginBottom: 20,
          }}>
            PRÓXIMAMENTE
          </div>
          <div style={{
            fontFamily: brand.fontSans,
            fontSize: 72,
            fontWeight: 900,
            color: brand.cream,
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}>
            Cap 3 <span style={{ color: brand.orange }}>→</span> Embeddings
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
            color: brand.orange,
            textShadow: brand.glowOrange,
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

        {/* Social Icons Placeholder / Style */}
        <div style={{
          marginTop: 100,
          display: "flex",
          gap: 40,
          opacity: spring({ frame: frame - 60, fps }),
        }}>
          {["TikTok", "YouTube", "Instagram"].map(social => (
            <div key={social} style={{
              width: 80, height: 80,
              borderRadius: "50%",
              background: `rgba(255, 122, 26, 0.1)`,
              border: `2px solid ${brand.orange}44`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, color: brand.orange, fontFamily: brand.fontMono
            }}>
              {social[0]}
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
