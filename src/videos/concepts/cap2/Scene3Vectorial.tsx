import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { conceptsTheme } from "../../../themes/concepts";
import { GridBackground } from "../../../components/GridBackground";
import { Search, BrainCircuit, CheckCircle } from "lucide-react";

export const Scene3Vectorial: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  const searchSpring = spring({ frame: frame - 20, fps });
  const nodesSpring = spring({ frame: frame - 50, fps, config: { damping: 14 } });

  const nodes = [
    { label: '"perro"', x: -100, y: -20 },
    { label: '"gato"', x: 100, y: -20 },
    { label: '"cachorro"', x: 0, y: 80 }
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: conceptsTheme.bg }}>
      <GridBackground color={conceptsTheme.cyan} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", justifyContent: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: conceptsTheme.fontSans, fontSize: 80, fontWeight: 900, color: conceptsTheme.cyan, textShadow: conceptsTheme.glowCyan, letterSpacing: "-2px" }}>
            BASE VECTORIAL
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 30, width: "100%" }}>
          
          {/* Search Box */}
          <div style={{
            background: "rgba(34, 211, 238, 0.1)", border: `3px solid ${conceptsTheme.cyan}`,
            borderRadius: 24, padding: "30px", display: "flex", alignItems: "center", gap: 20,
            opacity: searchSpring, transform: `translateY(${interpolate(searchSpring, [0, 1], [-50, 0])}px)`,
            boxShadow: conceptsTheme.glowCyan
          }}>
            <Search size={50} color={conceptsTheme.cyan} />
            <div style={{ fontFamily: conceptsTheme.fontMono, fontSize: 40, fontWeight: 800, color: conceptsTheme.cream }}>
              "mascota"
            </div>
          </div>

          <div style={{ fontSize: 60, color: conceptsTheme.cyan, alignSelf: "center", opacity: searchSpring, textShadow: conceptsTheme.glowCyan }}>⬇</div>

          {/* Neural Vector Result (Success) */}
          <div style={{
            position: "relative", height: 350,
            background: "rgba(0, 255, 65, 0.1)", border: `4px solid ${conceptsTheme.green}`,
            borderRadius: 32, display: "flex", alignItems: "center", justifyContent: "center",
            opacity: nodesSpring, transform: `scale(${nodesSpring})`, boxShadow: conceptsTheme.glowGreen
          }}>
            
            <BrainCircuit size={100} color={conceptsTheme.green} style={{ filter: conceptsTheme.glowGreen, position: "absolute", opacity: 0.3 }} />

            {/* Neural Links */}
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              <line x1="50%" y1="50%" x2="calc(50% - 100px)" y2="calc(50% - 20px)" stroke={conceptsTheme.green} strokeWidth="4" opacity="0.6" strokeDasharray="5 5" />
              <line x1="50%" y1="50%" x2="calc(50% + 100px)" y2="calc(50% - 20px)" stroke={conceptsTheme.green} strokeWidth="4" opacity="0.6" strokeDasharray="5 5" />
              <line x1="50%" y1="50%" x2="50%" y2="calc(50% + 80px)" stroke={conceptsTheme.green} strokeWidth="4" opacity="0.6" strokeDasharray="5 5" />
            </svg>

            {nodes.map((n, i) => (
              <div key={i} style={{
                position: "absolute", left: `calc(50% + ${n.x}px)`, top: `calc(50% + ${n.y}px)`, transform: "translate(-50%, -50%)",
                background: conceptsTheme.bg, border: `3px solid ${conceptsTheme.green}`, borderRadius: 16, padding: "10px 20px",
                display: "flex", alignItems: "center", gap: 10, boxShadow: conceptsTheme.glowGreen
              }}>
                <CheckCircle size={24} color={conceptsTheme.green} />
                <div style={{ fontFamily: conceptsTheme.fontMono, fontSize: 24, fontWeight: 900, color: conceptsTheme.cream }}>{n.label}</div>
              </div>
            ))}

          </div>

          <div style={{
            fontFamily: conceptsTheme.fontSans, fontSize: 36, fontWeight: 700, color: conceptsTheme.cream,
            textAlign: "center", marginTop: 40, lineHeight: 1.2, opacity: nodesSpring
          }}>
            Busca por <span style={{ color: conceptsTheme.green, textShadow: conceptsTheme.glowGreen }}>PARECIDO</span>,<br/>no por coincidencia.
          </div>

        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
