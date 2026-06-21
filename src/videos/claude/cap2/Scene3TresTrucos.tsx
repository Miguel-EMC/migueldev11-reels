import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { claudeTheme } from "../../../themes/claude";
import { GridBackground } from "../../../components/GridBackground";

export const Scene3TresTrucos: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  const card1 = spring({ frame: frame - 20, fps });
  const card2 = spring({ frame: frame - 80, fps });
  const card3 = spring({ frame: frame - 140, fps });

  return (
    <AbsoluteFill style={{ backgroundColor: claudeTheme.bg }}>
      <GridBackground color={claudeTheme.claudeOrange} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", justifyContent: "center"
      }}>
        
        {/* Enormous Screen Title */}
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: claudeTheme.fontSans, fontSize: 80, fontWeight: 900, color: claudeTheme.cream, letterSpacing: "-2px" }}>
            LOS 3 TRUCOS
          </div>
        </div>

        {/* 3 Tricks Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40, width: "100%" }}>
          
          {/* Card 1 */}
          <div style={{
            background: "rgba(34, 211, 238, 0.1)", border: `3px solid ${claudeTheme.cyan}`,
            borderRadius: 24, padding: "30px 40px", display: "flex", alignItems: "center", gap: 30,
            opacity: card1, transform: `translateX(${interpolate(card1, [0, 1], [-50, 0])}px)`,
            boxShadow: `0 20px 40px rgba(0,0,0,0.5), ${claudeTheme.cyan}22`
          }}>
            <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 80, fontWeight: 900, color: claudeTheme.cyan, textShadow: "0 0 20px rgba(34, 211, 238, 0.5)" }}>1</div>
            <div>
              <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 24, fontWeight: 800, color: claudeTheme.textDim, marginBottom: 5 }}>CONTENIDO</div>
              <div style={{ fontFamily: claudeTheme.fontSans, fontSize: 36, fontWeight: 700, color: claudeTheme.cream, lineHeight: 1.2 }}>
                Manda solo lo necesario, <span style={{ color: claudeTheme.cyan }}>no todo el cuerpo</span>.
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div style={{
            background: "rgba(0, 255, 65, 0.1)", border: `3px solid ${claudeTheme.green}`,
            borderRadius: 24, padding: "30px 40px", display: "flex", alignItems: "center", gap: 30,
            opacity: card2, transform: `translateX(${interpolate(card2, [0, 1], [-50, 0])}px)`,
            boxShadow: `0 20px 40px rgba(0,0,0,0.5), ${claudeTheme.glowGreen}22`
          }}>
            <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 80, fontWeight: 900, color: claudeTheme.green, textShadow: claudeTheme.glowGreen }}>2</div>
            <div>
              <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 24, fontWeight: 800, color: claudeTheme.textDim, marginBottom: 5 }}>COMANDO CLAVE</div>
              <div style={{ fontFamily: claudeTheme.fontSans, fontSize: 36, fontWeight: 700, color: claudeTheme.cream, lineHeight: 1.2 }}>
                Usa <span style={{ fontFamily: claudeTheme.fontMono, color: claudeTheme.green, background: "rgba(0,0,0,0.5)", padding: "5px 10px", borderRadius: 8 }}>/compact</span> en chats largos.
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div style={{
            background: "rgba(225, 96, 54, 0.1)", border: `3px solid ${claudeTheme.claudeOrange}`,
            borderRadius: 24, padding: "30px 40px", display: "flex", alignItems: "center", gap: 30,
            opacity: card3, transform: `translateX(${interpolate(card3, [0, 1], [-50, 0])}px)`,
            boxShadow: `0 20px 40px rgba(0,0,0,0.5), ${claudeTheme.glowOrange}22`
          }}>
            <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 80, fontWeight: 900, color: claudeTheme.claudeOrange, textShadow: claudeTheme.glowOrange }}>3</div>
            <div>
              <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 24, fontWeight: 800, color: claudeTheme.textDim, marginBottom: 5 }}>PROMPT</div>
              <div style={{ fontFamily: claudeTheme.fontSans, fontSize: 36, fontWeight: 700, color: claudeTheme.cream, lineHeight: 1.2 }}>
                Sé <span style={{ color: claudeTheme.claudeOrange }}>concreto</span>. Menos vueltas = menos tokens.
              </div>
            </div>
          </div>

        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
