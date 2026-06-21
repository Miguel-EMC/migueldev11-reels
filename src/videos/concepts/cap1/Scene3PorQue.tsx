import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { conceptsTheme } from "../../../themes/concepts";
import { GridBackground } from "../../../components/GridBackground";
import { Coins } from "lucide-react";

export const Scene3PorQue: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Simulated cost comparison
  const text1 = spring({ frame: frame - 20, fps });
  const text2 = spring({ frame: frame - 60, fps });
  
  const tokens1 = Math.floor(interpolate(text1, [0, 1], [0, 8500]));
  const tokens2 = Math.floor(interpolate(text2, [0, 1], [0, 120]));

  return (
    <AbsoluteFill style={{ backgroundColor: conceptsTheme.bg }}>
      <GridBackground color={conceptsTheme.pink} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", justifyContent: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: conceptsTheme.fontSans, fontSize: 80, fontWeight: 900, color: conceptsTheme.cream, letterSpacing: "-2px" }}>
            ¿POR QUÉ IMPORTA?
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 30, width: "100%" }}>
          
          {/* Long Text Cost */}
          <div style={{
            background: "rgba(239, 68, 68, 0.1)", border: `3px solid ${conceptsTheme.red}`,
            borderRadius: 24, padding: "30px", display: "flex", flexDirection: "column", gap: 15,
            opacity: text1, transform: `translateX(${interpolate(text1, [0, 1], [-50, 0])}px)`,
            boxShadow: conceptsTheme.glowRed
          }}>
            <div style={{ fontFamily: conceptsTheme.fontMono, fontSize: 28, fontWeight: 900, color: conceptsTheme.red }}>TEXTO LARGO / INÚTIL</div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontFamily: conceptsTheme.fontSans, fontSize: 32, color: conceptsTheme.cream, opacity: 0.6 }}>
                "Hola IA, por favor podrías..."
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: conceptsTheme.red, fontFamily: conceptsTheme.fontMono, fontSize: 40, fontWeight: 900 }}>
                <Coins size={40} /> {tokens1}
              </div>
            </div>
          </div>

          <div style={{ fontSize: 50, color: conceptsTheme.pink, alignSelf: "center", opacity: text2 }}>VS</div>

          {/* Short Text Cost */}
          <div style={{
            background: "rgba(0, 255, 65, 0.1)", border: `3px solid ${conceptsTheme.green}`,
            borderRadius: 24, padding: "30px", display: "flex", flexDirection: "column", gap: 15,
            opacity: text2, transform: `translateX(${interpolate(text2, [0, 1], [50, 0])}px)`,
            boxShadow: conceptsTheme.glowGreen
          }}>
            <div style={{ fontFamily: conceptsTheme.fontMono, fontSize: 28, fontWeight: 900, color: conceptsTheme.green }}>PROMPT CONCISO</div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontFamily: conceptsTheme.fontSans, fontSize: 32, color: conceptsTheme.cream }}>
                "Resume en 2 líneas:"
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: conceptsTheme.green, fontFamily: conceptsTheme.fontMono, fontSize: 40, fontWeight: 900 }}>
                <Coins size={40} /> {tokens2}
              </div>
            </div>
          </div>

        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
