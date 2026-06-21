import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { claudeTheme } from "../../../themes/claude";
import { GridBackground } from "../../../components/GridBackground";
import { TechIcon } from "../../../components/TechIcon";

export const Scene2PorQuePasa: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // File scaling up to dominate the screen
  const fileScale = spring({ frame: frame - 20, fps, config: { damping: 14 } });
  
  // Token counter going crazy
  const tokens = Math.floor(interpolate(spring({ frame: frame - 40, fps, config: { damping: 18, stiffness: 40 } }), [0, 1], [0, 125400]));

  return (
    <AbsoluteFill style={{ backgroundColor: claudeTheme.bg }}>
      <GridBackground color={claudeTheme.claudeOrange} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", alignItems: "center", justifyContent: "center"
      }}>
        
        {/* Enormous Screen Title */}
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: claudeTheme.fontSans, fontSize: 80, fontWeight: 900, color: claudeTheme.cream, letterSpacing: "-2px" }}>
            ¿POR QUÉ PASA?
          </div>
        </div>

        {/* The Problem: Huge File */}
        <div style={{
          background: "rgba(30, 41, 59, 0.6)", border: `3px solid #EF4444`,
          borderRadius: 24, padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
          opacity: fileScale, transform: `scale(${interpolate(fileScale, [0, 1], [0.5, 1])})`,
          boxShadow: `0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(239, 68, 68, 0.4)`,
          width: "100%"
        }}>
          <TechIcon type="file" color="#EF4444" size={80} glow={true} />
          
          <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 36, fontWeight: 900, color: "#EF4444", letterSpacing: 2, textAlign: "center" }}>
            MANDAR EL ARCHIVO ENTERO
          </div>
          
          {/* Simulated Code Lines */}
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10, opacity: 0.5, marginTop: 10 }}>
            <div style={{ height: 8, background: claudeTheme.textDim, width: "80%", borderRadius: 4 }} />
            <div style={{ height: 8, background: claudeTheme.textDim, width: "60%", borderRadius: 4 }} />
            <div style={{ height: 8, background: claudeTheme.textDim, width: "90%", borderRadius: 4 }} />
            <div style={{ height: 8, background: claudeTheme.textDim, width: "40%", borderRadius: 4 }} />
            <div style={{ height: 8, background: claudeTheme.textDim, width: "100%", borderRadius: 4 }} />
            <div style={{ height: 8, background: claudeTheme.textDim, width: "70%", borderRadius: 4 }} />
          </div>

          <div style={{ fontFamily: claudeTheme.fontSans, fontSize: 40, fontWeight: 800, color: claudeTheme.cream, marginTop: 20 }}>
            <span style={{ color: claudeTheme.claudeOrange }}>❌</span> Error común
          </div>
        </div>

        {/* Crazy Token Counter */}
        <div style={{
          marginTop: 60, display: "flex", flexDirection: "column", alignItems: "center",
          opacity: spring({ frame: frame - 40, fps }), transform: `translateY(${Math.sin(frame / 5) * 5}px)`
        }}>
          <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 32, color: claudeTheme.claudeOrange, letterSpacing: 4, fontWeight: 800, marginBottom: 10 }}>
            TOKENS CONSUMIDOS
          </div>
          <div style={{
            fontFamily: claudeTheme.fontMono, fontSize: 90, fontWeight: 900, color: "#EF4444", textShadow: "0 0 30px rgba(239, 68, 68, 0.6)"
          }}>
            {tokens.toLocaleString()}
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
