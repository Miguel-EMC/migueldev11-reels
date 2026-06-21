import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { claudeTheme } from "../../../themes/claude";
import { GridBackground } from "../../../components/GridBackground";
import { TechIcon } from "../../../components/TechIcon";

export const Scene3NivelBase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Fast generation cascade
  const cmdGen = spring({ frame: frame - 20, fps });
  const folder1 = spring({ frame: frame - 40, fps });
  const file1 = spring({ frame: frame - 50, fps });
  const file2 = spring({ frame: frame - 60, fps });
  const folder2 = spring({ frame: frame - 75, fps });
  const file3 = spring({ frame: frame - 85, fps });

  return (
    <AbsoluteFill style={{ backgroundColor: claudeTheme.bg }}>
      <GridBackground color={claudeTheme.claudeOrange} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", alignItems: "center"
      }}>
        
        {/* Massive Screen Title Header */}
        <div style={{ textAlign: "center", marginBottom: 50, opacity: entrance }}>
          <div style={{ fontFamily: claudeTheme.fontSans, fontSize: 80, fontWeight: 900, color: claudeTheme.cream, letterSpacing: "-2px" }}>
            CREACIÓN AUTOMÁTICA
          </div>
        </div>

        {/* User Command Card */}
        <div style={{
          width: "100%", background: "rgba(34, 211, 238, 0.1)", border: `3px solid ${claudeTheme.cyan}66`,
          borderRadius: 24, padding: "25px 30px", marginBottom: 40, opacity: cmdGen,
          transform: `scale(${cmdGen})`, boxSizing: "border-box", display: "flex", flexDirection: "column"
        }}>
          <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 24, color: claudeTheme.cyan, marginBottom: 10, fontWeight: 800 }}>[ USER_PROMPT ]</div>
          <div style={{ fontFamily: claudeTheme.fontSans, fontSize: 36, fontWeight: 700, color: claudeTheme.cream }}>
            "Crea un proyecto React con Tailwind y la estructura base"
          </div>
        </div>

        {/* Flow Arrow */}
        <div style={{
          fontSize: 60, color: claudeTheme.claudeOrange, textShadow: claudeTheme.glowOrange,
          marginBottom: 40, opacity: cmdGen, transform: `translateY(${Math.sin(frame / 5) * 8}px)`
        }}>
          ⬇
        </div>

        {/* Generated File Tree Structure */}
        <div style={{
          width: "100%", background: "rgba(10, 14, 26, 0.9)", border: `4px solid ${folder2 > 0.5 ? claudeTheme.green : claudeTheme.claudeOrange}`,
          borderRadius: 24, padding: 40, boxSizing: "border-box",
          boxShadow: folder2 > 0.5 ? `0 0 40px ${claudeTheme.green}33` : "none"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 15, marginBottom: 30 }}>
            <TechIcon type="code" color={claudeTheme.claudeOrange} size={40} />
            <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 28, color: claudeTheme.claudeOrange, fontWeight: 900, textShadow: claudeTheme.glowOrange }}>GENERANDO ARCHIVOS...</div>
          </div>

          <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 32, display: "flex", flexDirection: "column", gap: 15, paddingLeft: 10 }}>
            {/* Src Folder */}
            <div style={{ display: "flex", alignItems: "center", gap: 15, opacity: folder1, transform: `translateX(${interpolate(folder1, [0, 1], [-20, 0])}px)` }}>
              <span style={{ color: claudeTheme.claudeOrange }}>📁</span> <span style={{ color: claudeTheme.cream, fontWeight: 800 }}>src/</span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: 15, paddingLeft: 40, opacity: file1, transform: `translateX(${interpolate(file1, [0, 1], [-20, 0])}px)` }}>
              <span style={{ color: claudeTheme.cyan }}>📄</span> <span style={{ color: claudeTheme.textDim }}>App.tsx</span> <span style={{ color: claudeTheme.green, fontSize: 24, marginLeft: "auto" }}>[CREADO]</span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: 15, paddingLeft: 40, opacity: file2, transform: `translateX(${interpolate(file2, [0, 1], [-20, 0])}px)` }}>
              <span style={{ color: claudeTheme.cyan }}>📄</span> <span style={{ color: claudeTheme.textDim }}>index.css</span> <span style={{ color: claudeTheme.green, fontSize: 24, marginLeft: "auto" }}>[CREADO]</span>
            </div>

            {/* Config files */}
            <div style={{ display: "flex", alignItems: "center", gap: 15, marginTop: 10, opacity: folder2, transform: `translateX(${interpolate(folder2, [0, 1], [-20, 0])}px)` }}>
              <span style={{ color: claudeTheme.claudeOrange }}>⚙️</span> <span style={{ color: claudeTheme.cream, fontWeight: 800 }}>package.json</span> <span style={{ color: claudeTheme.green, fontSize: 24, marginLeft: "auto" }}>[INSTALANDO]</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 15, opacity: file3, transform: `translateX(${interpolate(file3, [0, 1], [-20, 0])}px)` }}>
              <span style={{ color: claudeTheme.claudeOrange }}>⚙️</span> <span style={{ color: claudeTheme.cream, fontWeight: 800 }}>tailwind.config.js</span> <span style={{ color: claudeTheme.green, fontSize: 24, marginLeft: "auto" }}>[CONFIGURADO]</span>
            </div>
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
