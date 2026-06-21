import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { claudeTheme } from "../../../themes/claude";
import { GridBackground } from "../../../components/GridBackground";
import { TechIcon } from "../../../components/TechIcon";

export const Scene3CuandoConfiar: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  const card1 = spring({ frame: frame - 20, fps });
  const card2 = spring({ frame: frame - 60, fps });

  return (
    <AbsoluteFill style={{ backgroundColor: claudeTheme.bg }}>
      <GridBackground color={claudeTheme.claudeOrange} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", justifyContent: "center"
      }}>
        
        {/* Massive Screen Title */}
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: claudeTheme.fontSans, fontSize: 80, fontWeight: 900, color: claudeTheme.cream, letterSpacing: "-2px" }}>
            ¿CUÁNDO CONFIAR?
          </div>
        </div>

        {/* 2 Column Comparison Setup */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40, width: "100%" }}>
          
          {/* Card 1: Safe Tasks */}
          <div style={{
            background: "rgba(0, 255, 65, 0.1)", border: `3px solid ${claudeTheme.green}`,
            borderRadius: 24, padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
            opacity: card1, transform: `translateX(${interpolate(card1, [0, 1], [-50, 0])}px)`,
            boxShadow: `0 20px 40px rgba(0,0,0,0.5), ${claudeTheme.glowGreen}22`
          }}>
            <TechIcon type="file" size={60} color={claudeTheme.green} />
            <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 32, fontWeight: 900, color: claudeTheme.green, textShadow: claudeTheme.glowGreen }}>
              DÉJALO SOLO ✅
            </div>
            <div style={{ fontFamily: claudeTheme.fontSans, fontSize: 36, fontWeight: 700, color: claudeTheme.cream, textAlign: "center", lineHeight: 1.2 }}>
              Tareas claras, repetitivas, endpoints estándar.
            </div>
          </div>

          {/* Card 2: Critical Logic */}
          <div style={{
            background: "rgba(225, 96, 54, 0.1)", border: `3px solid ${claudeTheme.claudeOrange}`,
            borderRadius: 24, padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
            opacity: card2, transform: `translateX(${interpolate(card2, [0, 1], [50, 0])}px)`,
            boxShadow: `0 20px 40px rgba(0,0,0,0.5), ${claudeTheme.glowOrange}22`
          }}>
            <TechIcon type="search" size={60} color={claudeTheme.claudeOrange} />
            <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 32, fontWeight: 900, color: claudeTheme.claudeOrange, textShadow: claudeTheme.glowOrange }}>
              REVISA DE CERCA 👀
            </div>
            <div style={{ fontFamily: claudeTheme.fontSans, fontSize: 36, fontWeight: 700, color: claudeTheme.cream, textAlign: "center", lineHeight: 1.2 }}>
              Lógica crítica de negocio, seguridad, pagos.
            </div>
          </div>

        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
