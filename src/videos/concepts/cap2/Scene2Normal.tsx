import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { conceptsTheme } from "../../../themes/concepts";
import { GridBackground } from "../../../components/GridBackground";
import { Search, Database, XCircle } from "lucide-react";

export const Scene2Normal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  const searchSpring = spring({ frame: frame - 20, fps });
  const resultSpring = spring({ frame: frame - 50, fps, config: { damping: 10, stiffness: 120 } });

  return (
    <AbsoluteFill style={{ backgroundColor: conceptsTheme.bg }}>
      <GridBackground color={conceptsTheme.cyan} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", justifyContent: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: conceptsTheme.fontSans, fontSize: 80, fontWeight: 900, color: conceptsTheme.cream, letterSpacing: "-2px" }}>
            BASE NORMAL
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 30, width: "100%" }}>
          
          {/* Search Box */}
          <div style={{
            background: "rgba(10, 15, 30, 0.8)", border: `3px solid ${conceptsTheme.textDim}66`,
            borderRadius: 24, padding: "30px", display: "flex", alignItems: "center", gap: 20,
            opacity: searchSpring, transform: `translateY(${interpolate(searchSpring, [0, 1], [-50, 0])}px)`
          }}>
            <Search size={50} color={conceptsTheme.textDim} />
            <div style={{ fontFamily: conceptsTheme.fontMono, fontSize: 40, fontWeight: 800, color: conceptsTheme.cream }}>
              "mascota"
            </div>
          </div>

          <div style={{ fontSize: 60, color: conceptsTheme.textDim, alignSelf: "center", opacity: searchSpring }}>⬇</div>

          {/* Database Result (Fails) */}
          <div style={{
            background: "rgba(239, 68, 68, 0.1)", border: `4px solid ${conceptsTheme.red}`,
            borderRadius: 24, padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
            opacity: resultSpring, transform: `scale(${resultSpring})`, boxShadow: conceptsTheme.glowRed
          }}>
            <div style={{ display: "flex", gap: 20 }}>
              <Database size={60} color={conceptsTheme.red} />
              <XCircle size={60} color={conceptsTheme.red} />
            </div>
            
            <div style={{ fontFamily: conceptsTheme.fontMono, fontSize: 32, fontWeight: 900, color: conceptsTheme.red }}>
              0 RESULTADOS
            </div>

            <div style={{
              background: "rgba(0,0,0,0.5)", border: `2px solid ${conceptsTheme.red}44`,
              borderRadius: 16, padding: "20px", width: "100%", textAlign: "center"
            }}>
               <div style={{ fontFamily: conceptsTheme.fontMono, fontSize: 24, color: conceptsTheme.textDim, textDecoration: "line-through" }}>ID: 1 | Texto: "perro"</div>
            </div>

          </div>

          <div style={{
            fontFamily: conceptsTheme.fontSans, fontSize: 36, fontWeight: 700, color: conceptsTheme.cream,
            textAlign: "center", marginTop: 40, lineHeight: 1.2, opacity: resultSpring
          }}>
            Busca letras exactas,<br/><span style={{ color: conceptsTheme.red }}>no ideas.</span>
          </div>

        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
