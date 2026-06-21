import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { agentsTheme } from "../../../themes/agents";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";
import { TechIcon } from "../../../components/TechIcon";

export const Scene3Ejemplo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  const emailProgress = spring({ frame: frame - 25, fps });
  const calendarProgress = spring({ frame: frame - 80, fps });

  return (
    <AbsoluteFill style={{ backgroundColor: agentsTheme.bg }}>
      <GridBackground color={agentsTheme.purple} />
      <ParticleField />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", alignItems: "center", justifyContent: "center"
      }}>
        
        {/* Massive Badges */}
        <div style={{
          fontFamily: agentsTheme.fontMono, fontSize: 32, color: agentsTheme.purple,
          border: `3px solid ${agentsTheme.purple}66`, background: "rgba(167, 139, 250, 0.1)",
          padding: "12px 35px", borderRadius: 40, letterSpacing: 4, fontWeight: 900, marginBottom: 60, opacity: entrance
        }}>
          CASO REAL DE USO
        </div>

        {/* Card 1: Inbox with massive typography */}
        <div style={{
          width: "100%", background: "rgba(15, 23, 42, 0.9)", backdropFilter: "blur(16px)",
          border: `3px solid ${agentsTheme.purple}66`, borderRadius: 24, padding: 35,
          opacity: emailProgress, transform: `scale(${interpolate(emailProgress, [0, 1], [0.85, 1])})`,
          boxSizing: "border-box", marginBottom: 60, boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
            <TechIcon type="file" color={agentsTheme.purple} size={45} />
            <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 26, color: agentsTheme.textDim, fontWeight: 800 }}>[ CORREOS_ENTRANTES ]</div>
          </div>
          <div style={{
            fontFamily: agentsTheme.fontSans, fontSize: 38, fontWeight: 800, color: agentsTheme.cream,
            background: "rgba(0,0,0,0.4)", padding: "25px 25px", borderRadius: 16, borderLeft: `6px solid ${agentsTheme.purple}`,
            lineHeight: 1.3
          }}>
            "Miguel, ¿nos reunimos mañana para cerrar el contrato?"
          </div>
        </div>

        {/* Huge workflow laser arrow connection indicator */}
        <div style={{
          fontSize: 65, color: agentsTheme.purple, textShadow: agentsTheme.glowPurple,
          marginBottom: 60, opacity: emailProgress, transform: `translateY(${Math.sin(frame / 5) * 8}px)`
        }}>
          ⬇
        </div>

        {/* Card 2: Automatic Action Output with Gigantic Success Text */}
        <div style={{
          width: "100%", background: "rgba(10, 20, 35, 0.95)", backdropFilter: "blur(16px)",
          border: `4px solid ${calendarProgress > 0.5 ? agentsTheme.green : agentsTheme.purple + "44"}`, 
          borderRadius: 24, padding: 35, opacity: calendarProgress,
          transform: `scale(${interpolate(calendarProgress, [0, 1], [0.85, 1])})`,
          boxSizing: "border-box", boxShadow: calendarProgress > 0.5 ? `0 0 40px ${agentsTheme.green}33` : "none"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
            <TechIcon type="search" color={calendarProgress > 0.5 ? agentsTheme.green : agentsTheme.purple} size={45} />
            <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 26, color: agentsTheme.textDim, fontWeight: 800 }}>[ ACCIÓN_AGENTE ]</div>
          </div>
          
          <div style={{
            fontFamily: agentsTheme.fontSans, fontSize: 44, fontWeight: 900,
            color: calendarProgress > 0.5 ? agentsTheme.green : agentsTheme.cream,
            textAlign: "center", background: "rgba(0,0,0,0.6)", padding: "30px 20px", borderRadius: 16,
            textShadow: calendarProgress > 0.5 ? agentsTheme.glowGreen : "none", 
            border: `2px solid ${calendarProgress > 0.5 ? agentsTheme.green + "44" : "transparent"}`,
            lineHeight: 1.2
          }}>
            {calendarProgress > 0.5 ? "📅 CALENDARIO PROGRAMADO AUTOMÁTICAMENTE ✓" : "Leyendo, evaluando disponibilidad..."}
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
