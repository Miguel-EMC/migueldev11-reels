import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { tfTheme } from "../../../themes/terraform";
import { GridBackground } from "../../../components/GridBackground";
import { GitBranch } from "lucide-react";

export const Scene4Cierre: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const subEntrance = spring({ frame: frame - 40, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 15) * 0.08 + 1;

  return (
    <AbsoluteFill style={{ backgroundColor: tfTheme.bg }}>
      <GridBackground color={tfTheme.tfPurple} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        {/* Value Proposition */}
        <div style={{
          textAlign: "center", marginBottom: 60, opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [40, 0])}px)`
        }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <GitBranch size={80} color={tfTheme.cyan} style={{ filter: tfTheme.glowCyan }} />
          </div>
          <div style={{
            fontFamily: tfTheme.fontSans, fontSize: 50, fontWeight: 900, color: tfTheme.cream, lineHeight: 1.2
          }}>
            Al ser código, lo guardas en <span style={{ color: tfTheme.cyan, textShadow: tfTheme.glowCyan }}>Git</span><br/>con su historial completo.
          </div>
        </div>

        {/* Coming Next Teaser Badge */}
        <div style={{
          background: "rgba(132, 79, 186, 0.1)", backdropFilter: "blur(12px)",
          border: `3px solid ${tfTheme.tfPurple}`, borderRadius: 24, padding: "30px 40px",
          textAlign: "center", marginBottom: 80, opacity: subEntrance,
          transform: `scale(${subEntrance})`, boxShadow: `0 20px 40px rgba(0,0,0,0.5), ${tfTheme.glowPurple}33`
        }}>
          <div style={{ fontFamily: tfTheme.fontMono, fontSize: 28, color: tfTheme.tfPurple, letterSpacing: 4, marginBottom: 8, fontWeight: 900 }}>
            PRÓXIMO VIDEO
          </div>
          <div style={{ fontFamily: tfTheme.fontSans, fontSize: 65, fontWeight: 900, color: tfTheme.cream, letterSpacing: "-2px" }}>
            EL "STATE"
          </div>
        </div>

        {/* Handle */}
        <div style={{
          opacity: subEntrance,
          transform: `scale(${subEntrance * pulse})`,
          textAlign: "center"
        }}>
          <div style={{
            fontFamily: tfTheme.fontMono, fontSize: 80, fontWeight: 900,
            color: tfTheme.tfPurple, textShadow: tfTheme.glowPurple
          }}>
            @migueldev11
          </div>
          <div style={{
            fontFamily: tfTheme.fontSans, fontSize: 34, fontWeight: 400,
            color: tfTheme.cream, opacity: 0.7, marginTop: 10, letterSpacing: 8, textTransform: "uppercase"
          }}>
            Sígueme
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
