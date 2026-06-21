import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { tfTheme } from "../../../themes/terraform";
import { GridBackground } from "../../../components/GridBackground";
import { MousePointerClick, Database, Server, Frown } from "lucide-react";

export const Scene2ElProblema: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Staggered chaos
  const c1 = spring({ frame: frame - 20, fps });
  const c2 = spring({ frame: frame - 40, fps });
  const c3 = spring({ frame: frame - 60, fps });
  const chaos = frame > 80 ? Math.sin(frame) * 5 : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: tfTheme.bg }}>
      <GridBackground color={tfTheme.tfPurple} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", alignItems: "center", justifyContent: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: tfTheme.fontSans, fontSize: 80, fontWeight: 900, color: tfTheme.cream, letterSpacing: "-2px" }}>
            EL PROBLEMA
          </div>
        </div>

        {/* Console Chaos Layout */}
        <div style={{
          position: "relative", width: "100%", height: 500,
          background: "rgba(239, 68, 68, 0.05)", border: `4px dashed ${tfTheme.red}`,
          borderRadius: 32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: entrance, transform: `translateX(${chaos}px)`
        }}>
          
          <div style={{ position: "absolute", top: 30, right: 40, opacity: c1 }}>
            <Server size={100} color={tfTheme.textDim} />
            <MousePointerClick size={60} color={tfTheme.red} style={{ position: "absolute", bottom: -20, right: -20 }} />
          </div>

          <div style={{ position: "absolute", bottom: 40, left: 40, opacity: c2 }}>
            <Database size={100} color={tfTheme.textDim} />
            <MousePointerClick size={60} color={tfTheme.red} style={{ position: "absolute", top: -20, left: -20 }} />
          </div>

          <div style={{
            background: "rgba(239, 68, 68, 0.2)", backdropFilter: "blur(10px)",
            border: `3px solid ${tfTheme.red}`, borderRadius: "50%", padding: "40px",
            opacity: c3, boxShadow: tfTheme.glowRed, zIndex: 10
          }}>
            <Frown size={100} color={tfTheme.red} />
          </div>

          {/* Random floating clicks */}
          {frame > 60 && (
            <MousePointerClick size={50} color={tfTheme.red} style={{ position: "absolute", top: "50%", left: "70%", opacity: 0.5 }} />
          )}

        </div>

        <div style={{
          fontFamily: tfTheme.fontSans, fontSize: 40, fontWeight: 700, color: tfTheme.textDim,
          textAlign: "center", marginTop: 80, lineHeight: 1.3, opacity: entrance
        }}>
          Lento, irrepetible, irrastreable.<br/>
          <span style={{ color: tfTheme.red, fontWeight: 900, textShadow: tfTheme.glowRed }}>UN CAOS MANUAL.</span>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
