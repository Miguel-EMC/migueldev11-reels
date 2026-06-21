import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { dockerTheme } from "../../../themes/docker";
import { GridBackground } from "../../../components/GridBackground";
import { TechIcon } from "../../../components/TechIcon";

export const Scene2PorQue: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  const boxScale = spring({ frame: frame - 20, fps });

  return (
    <AbsoluteFill style={{ backgroundColor: dockerTheme.bg }}>
      <GridBackground color={dockerTheme.dockerBlue} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", alignItems: "center", justifyContent: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: dockerTheme.fontSans, fontSize: 80, fontWeight: 900, color: dockerTheme.cream, letterSpacing: "-2px", lineHeight: 1.1 }}>
            ¿POR QUÉ PESA<br/>TANTO?
          </div>
        </div>

        {/* Giant Heavy Box with unnecessary tools */}
        <div style={{
          background: "rgba(239, 68, 68, 0.15)", border: `4px solid ${dockerTheme.red}`,
          borderRadius: 32, padding: "50px", display: "flex", flexDirection: "column", alignItems: "center", gap: 30,
          opacity: boxScale, transform: `scale(${interpolate(boxScale, [0, 1], [0.8, 1])})`,
          boxShadow: `0 30px 60px rgba(0,0,0,0.8), ${dockerTheme.glowRed}33`, width: "100%"
        }}>
          
          <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 36, fontWeight: 900, color: dockerTheme.red, textShadow: dockerTheme.glowRed, letterSpacing: 2 }}>
            IMAGEN FINAL EN PROD
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, width: "100%" }}>
            <div style={{ background: "rgba(0,0,0,0.5)", padding: 20, borderRadius: 16, display: "flex", alignItems: "center", gap: 15, border: "2px solid rgba(239,68,68,0.4)" }}>
              <TechIcon type="cpu" size={40} color={dockerTheme.red} glow={false} />
              <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 24, color: dockerTheme.cream }}>Compilador C++</div>
            </div>
            <div style={{ background: "rgba(0,0,0,0.5)", padding: 20, borderRadius: 16, display: "flex", alignItems: "center", gap: 15, border: "2px solid rgba(239,68,68,0.4)" }}>
              <TechIcon type="network" size={40} color={dockerTheme.red} glow={false} />
              <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 24, color: dockerTheme.cream }}>node_modules (dev)</div>
            </div>
            <div style={{ background: "rgba(0,0,0,0.5)", padding: 20, borderRadius: 16, display: "flex", alignItems: "center", gap: 15, border: "2px solid rgba(239,68,68,0.4)" }}>
              <TechIcon type="search" size={40} color={dockerTheme.red} glow={false} />
              <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 24, color: dockerTheme.cream }}>Tests Tools</div>
            </div>
            <div style={{ background: "rgba(0,0,0,0.5)", padding: 20, borderRadius: 16, display: "flex", alignItems: "center", gap: 15, border: "2px solid rgba(0,255,65,0.6)" }}>
              <TechIcon type="code" size={40} color={dockerTheme.green} glow={true} />
              <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 24, color: dockerTheme.green, fontWeight: 900 }}>App Real</div>
            </div>
          </div>

        </div>

        <div style={{
          fontFamily: dockerTheme.fontSans, fontSize: 40, fontWeight: 700, color: dockerTheme.cream,
          textAlign: "center", marginTop: 60, lineHeight: 1.3, opacity: boxScale
        }}>
          La mayoría se lleva a producción<br/>
          <span style={{ color: dockerTheme.red, fontWeight: 900, textShadow: dockerTheme.glowRed }}>TODO sin querer.</span>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
