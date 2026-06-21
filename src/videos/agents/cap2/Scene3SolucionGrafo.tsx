import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { agentsTheme } from "../../../themes/agents";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";
import { TechIcon } from "../../../components/TechIcon";

export const Scene3SolucionGrafo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Staggered node maps triggers
  const stateSpring = spring({ frame: frame - 45, fps });
  
  // Floating data packet position "ESTADO" travelling over cycle loop arcs
  const statePacketX = interpolate(frame, [40, 90, 140, 180], [-180, 0, 180, -180], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const statePacketY = interpolate(frame, [40, 90, 140, 180], [0, -150, 0, 180], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: agentsTheme.bg }}>
      <GridBackground color={agentsTheme.orange} />
      <ParticleField />

      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at center, transparent 20%, ${agentsTheme.bg} 95%)`,
        pointerEvents: "none", zIndex: 2
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 40px", boxSizing: "border-box", alignItems: "center", zIndex: 10, justifyContent: "center"
      }}>
        
        {/* Massive Header Title Layout */}
        <div style={{ textAlign: "center", marginBottom: 50, opacity: entrance }}>
          <div style={{ fontFamily: agentsTheme.fontSans, fontSize: 90, fontWeight: 900, color: agentsTheme.orange, textShadow: agentsTheme.glowOrange, letterSpacing: "-2px" }}>
            SOLUCIÓN: GRAFO
          </div>
        </div>

        {/* Dynamic Connected Node Map Canvas Window box */}
        <div style={{ position: "relative", width: "100%", height: 550, background: "rgba(10, 15, 30, 0.7)", border: `2px solid ${agentsTheme.orange}44`, borderRadius: 24, overflow: "hidden" }}>
          
          {/* Loop paths linking architecture maps nodes */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 5 }}>
            <line x1="20%" y1="50%" x2="50%" y2="20%" stroke={agentsTheme.orange} strokeWidth="4" strokeDasharray="6 6" />
            <line x1="50%" y1="20%" x2="80%" y2="50%" stroke={agentsTheme.orange} strokeWidth="4" strokeDasharray="6 6" />
            
            {/* Cyclic Returning Arrow Back Arc */}
            <path d="M 82% 53% Q 50% 85% 22% 53%" fill="none" stroke={agentsTheme.purple} strokeWidth="5" style={{ filter: `drop-shadow(0 0 10px ${agentsTheme.purple})` }} />
          </svg>

          {/* TRAVELLING STATE DATA PACKET SPHERE BLOCK */}
          <div style={{
            position: "absolute", left: `calc(50% + ${statePacketX}px)`, top: `calc(50% + ${statePacketY}px)`,
            transform: "translate(-50%, -50%)", zIndex: 30, display: "flex", flexDirection: "column", alignItems: "center"
          }}>
            <div style={{ width: 35, height: 35, borderRadius: "50%", background: agentsTheme.purple, boxShadow: agentsTheme.glowPurple, border: "3px solid white" }} />
            <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 18, color: agentsTheme.cream, fontWeight: 900, background: "rgba(0,0,0,0.8)", padding: "4px 8px", borderRadius: 6, marginTop: 5 }}>
              {"{estado}"}
            </div>
          </div>

          {/* Node 1: Start */}
          <div style={{ position: "absolute", left: "20%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 10 }}>
            <div style={{ width: 45, height: 45, borderRadius: "50%", background: agentsTheme.bg, border: `4px solid ${agentsTheme.cream}` }} />
          </div>

          {/* Node 2: Brain decision router tool node */}
          <div style={{ position: "absolute", left: "50%", top: "20%", transform: "translate(-50%, -50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 50, height: 50, borderRadius: "50%", background: agentsTheme.bg, border: `4px solid ${agentsTheme.orange}`, boxShadow: agentsTheme.glowOrange, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <TechIcon type="cpu" size={24} color={agentsTheme.orange} glow={false} />
            </div>
            <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 20, fontWeight: 800, color: agentsTheme.cream, marginTop: 5 }}>Plan</div>
          </div>

          {/* Node 3: Action Execution error retry node */}
          <div style={{ position: "absolute", left: "80%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 50, height: 50, borderRadius: "50%", background: agentsTheme.bg, border: `4px solid ${agentsTheme.orange}`, boxShadow: agentsTheme.glowOrange, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <TechIcon type="code" size={24} color={agentsTheme.orange} glow={false} />
            </div>
            <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 20, fontWeight: 800, color: agentsTheme.cream, marginTop: 5 }}>Acción</div>
          </div>

        </div>

        {/* Massive Footer Description Callout Text block */}
        <div style={{
          fontFamily: agentsTheme.fontSans, fontSize: 52, fontWeight: 900, color: agentsTheme.cream,
          textAlign: "center", marginTop: 50, lineHeight: 1.2, letterSpacing: "-1px", opacity: stateSpring
        }}>
          PERMITE <span style={{ color: agentsTheme.purple, textShadow: agentsTheme.glowPurple }}>CICLOS Y MEMORIA</span><br/>
          <span style={{ color: agentsTheme.textDim, fontSize: 36, fontWeight: 500 }}>Si algo falla, el agente vuelve atrás y reintenta solo.</span>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
