import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { conceptsTheme } from "../../../themes/concepts";
import { GridBackground } from "../../../components/GridBackground";

export const Scene2QueEs: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Word splitting animation
  const wordSpring = spring({ frame: frame - 20, fps });
  const splitSpring = spring({ frame: frame - 50, fps, config: { damping: 10 } });

  const word = "inteligencia artificial";
  // Simulated tokenization: ["in", "tel", "ig", "encia", " art", "ific", "ial"]
  const tokens = ["in", "tel", "ig", "encia", " art", "ific", "ial"];
  const colors = [conceptsTheme.pink, conceptsTheme.cyan, conceptsTheme.green, conceptsTheme.yellow, conceptsTheme.orange, conceptsTheme.pink, conceptsTheme.cyan];

  return (
    <AbsoluteFill style={{ backgroundColor: conceptsTheme.bg }}>
      <GridBackground color={conceptsTheme.pink} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", alignItems: "center", justifyContent: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: conceptsTheme.fontSans, fontSize: 80, fontWeight: 900, color: conceptsTheme.cream, letterSpacing: "-2px" }}>
            ¿QUÉ ES?
          </div>
        </div>

        {/* Word Tokenization Visual */}
        <div style={{
          background: "rgba(10, 15, 30, 0.8)", border: `3px solid ${conceptsTheme.textDim}44`,
          borderRadius: 32, padding: "50px 30px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center",
          opacity: wordSpring, transform: `scale(${wordSpring})`, boxShadow: `0 30px 60px rgba(0,0,0,0.5)`
        }}>
          
          <div style={{ fontFamily: conceptsTheme.fontMono, fontSize: 30, color: conceptsTheme.textDim, marginBottom: 40, fontWeight: 800 }}>
            CÓMO LEE LA IA:
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: splitSpring > 0.5 ? 10 : 0, transition: "gap 0.3s" }}>
            {tokens.map((token, i) => {
              const bgOpacity = interpolate(splitSpring, [0, 1], [0, 0.2]);
              const borderOpacity = interpolate(splitSpring, [0, 1], [0, 1]);
              
              return (
                <div key={i} style={{
                  fontFamily: conceptsTheme.fontMono, fontSize: 45, fontWeight: 900, color: conceptsTheme.cream,
                  background: `rgba(${colors[i] === conceptsTheme.pink ? '236, 72, 153' : colors[i] === conceptsTheme.cyan ? '34, 211, 238' : '0, 255, 65'}, ${bgOpacity})`,
                  border: `${borderOpacity > 0 ? 3 : 0}px solid ${colors[i]}`,
                  borderRadius: 12, padding: "10px", margin: splitSpring > 0.5 ? "0" : "0 -2px",
                  boxShadow: splitSpring > 0.5 ? `0 0 20px ${colors[i]}44` : "none",
                  whiteSpace: "pre"
                }}>
                  {token}
                </div>
              );
            })}
          </div>

          <div style={{
            fontFamily: conceptsTheme.fontSans, fontSize: 36, fontWeight: 800, color: conceptsTheme.pink,
            marginTop: 50, opacity: splitSpring, textShadow: conceptsTheme.glowPink
          }}>
            1 Palabra = {tokens.length} Tokens
          </div>

        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
