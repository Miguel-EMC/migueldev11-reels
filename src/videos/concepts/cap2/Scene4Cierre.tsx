import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { conceptsTheme } from "../../../themes/concepts";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";
import { BrainCircuit } from "lucide-react";

export const Scene4Cierre: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 15) * 0.08 + 1;

  return (
    <AbsoluteFill style={{ backgroundColor: conceptsTheme.bg }}>
      <GridBackground color={conceptsTheme.cyan} />
      <ParticleField />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        <div style={{
          textAlign: "center", marginBottom: 70, opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [40, 0])}px)`
        }}>
          <div style={{
            fontFamily: conceptsTheme.fontSans, fontSize: 60, fontWeight: 900, color: conceptsTheme.cream, lineHeight: 1.2
          }}>
            La magia que<br/>
            hace posible el <span style={{ color: conceptsTheme.green, textShadow: conceptsTheme.glowGreen }}>RAG.</span>
          </div>
        </div>

        <div style={{
          background: "rgba(34, 211, 238, 0.1)", backdropFilter: "blur(12px)",
          border: `3px solid ${conceptsTheme.cyan}`, borderRadius: 24, padding: "30px 40px",
          textAlign: "center", marginBottom: 90, opacity: entrance,
          boxShadow: `0 20px 40px rgba(0,0,0,0.5), ${conceptsTheme.glowCyan}33`,
          display: "flex", flexDirection: "column", alignItems: "center"
        }}>
           <BrainCircuit size={60} color={conceptsTheme.cyan} style={{ marginBottom: 15 }} />
          <div style={{ fontFamily: conceptsTheme.fontMono, fontSize: 24, color: conceptsTheme.cyan, letterSpacing: 4, fontWeight: 800 }}>
            VER: EMBEDDINGS
          </div>
        </div>

        {/* Handle */}
        <div style={{
          opacity: entrance,
          transform: `scale(${entrance * pulse})`,
          textAlign: "center"
        }}>
          <div style={{
            fontFamily: conceptsTheme.fontMono, fontSize: 80, fontWeight: 900,
            color: conceptsTheme.cyan, textShadow: conceptsTheme.glowCyan
          }}>
            @migueldev11
          </div>
          <div style={{
            fontFamily: conceptsTheme.fontSans, fontSize: 34, fontWeight: 400,
            color: conceptsTheme.cream, opacity: 0.7, marginTop: 10, letterSpacing: 8, textTransform: "uppercase"
          }}>
            Sígueme
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
