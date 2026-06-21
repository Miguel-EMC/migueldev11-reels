import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { claudeTheme } from "../../../themes/claude";
import { GridBackground } from "../../../components/GridBackground";
import { TechIcon } from "../../../components/TechIcon";

export const Scene2QueEs: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Staggered typing animation for the terminal
  const typeChar1 = interpolate(frame, [20, 30], [0, 6], { extrapolateRight: "clamp" });
  const typeChar2 = interpolate(frame, [40, 50], [0, 4], { extrapolateRight: "clamp" });
  
  // Terminal log lines popping up
  const log1 = spring({ frame: frame - 60, fps });
  const log2 = spring({ frame: frame - 75, fps });
  const log3 = spring({ frame: frame - 90, fps });
  
  const terminalScale = spring({ frame: frame - 10, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ backgroundColor: claudeTheme.bg }}>
      <GridBackground color={claudeTheme.claudeOrange} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "90px 40px", boxSizing: "border-box", alignItems: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 50, opacity: entrance }}>
          <div style={{ fontFamily: claudeTheme.fontSans, fontSize: 80, fontWeight: 900, color: claudeTheme.cream, letterSpacing: "-2px", lineHeight: 1.1 }}>
            NO ES UN CHAT.<br/>
            VIVE EN TU <span style={{ color: claudeTheme.claudeOrange, textShadow: claudeTheme.glowOrange }}>TERMINAL</span>.
          </div>
        </div>

        {/* Fake Mac/Linux Terminal Window */}
        <div style={{
          width: "100%", background: "rgba(5, 8, 16, 0.95)", border: `2px solid rgba(255,255,255,0.1)`,
          borderRadius: 20, overflow: "hidden", opacity: terminalScale,
          transform: `scale(${interpolate(terminalScale, [0, 1], [0.9, 1])})`,
          boxShadow: `0 30px 60px rgba(0,0,0,0.8), 0 0 30px ${claudeTheme.claudeOrange}22`
        }}>
          {/* Mac-like Header */}
          <div style={{ display: "flex", alignItems: "center", padding: "15px 25px", background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#EF4444" }} />
              <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#F59E0B" }} />
              <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#10B981" }} />
            </div>
            <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 20, color: claudeTheme.textDim, margin: "0 auto" }}>migueldev11 — zsh</div>
          </div>

          {/* Terminal Body */}
          <div style={{ padding: "30px", fontFamily: claudeTheme.fontMono, fontSize: 32, color: claudeTheme.cream, lineHeight: 1.5 }}>
            <div>
              <span style={{ color: claudeTheme.green }}>~</span> $ "claude".slice(0, typeChar1)
              {frame > 30 && frame <= 40 && <span style={{ opacity: Math.sin(frame) > 0 ? 1 : 0 }}>_</span>}
            </div>
            {frame > 30 && (
              <div style={{ marginTop: 20, color: claudeTheme.claudeOrange, fontWeight: 800 }}>
                ╭ 🤖 Claude Code v0.2.2
                <br/>│
              </div>
            )}
            
            {/* Logs simulating project context scanning */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 15, paddingLeft: 30 }}>
              {frame > 60 && (
                <div style={{ opacity: log1 }}>
                  <span style={{ color: claudeTheme.textDim }}>[+] Indexando</span> <span style={{ color: claudeTheme.cyan }}>./src</span> ... <span style={{ color: claudeTheme.green }}>142 archivos</span>
                </div>
              )}
              {frame > 75 && (
                <div style={{ opacity: log2 }}>
                  <span style={{ color: claudeTheme.textDim }}>[+] Analizando dependencias:</span> package.json
                </div>
              )}
              {frame > 90 && (
                <div style={{ opacity: log3, color: claudeTheme.green, fontWeight: 900, textShadow: claudeTheme.glowGreen, marginTop: 10 }}>
                  ✓ Contexto completo cargado. ¿En qué te ayudo?
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feature Tags */}
        <div style={{ display: "flex", gap: 30, marginTop: 60, opacity: log3, flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 15, background: "rgba(255,255,255,0.05)", padding: "15px 25px", borderRadius: 16 }}>
            <TechIcon type="file" color={claudeTheme.cyan} size={35} />
            <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 24, fontWeight: 800, color: claudeTheme.cream }}>Lee tus archivos</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 15, background: "rgba(255,255,255,0.05)", padding: "15px 25px", borderRadius: 16 }}>
            <TechIcon type="network" color={claudeTheme.claudeOrange} size={35} />
            <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 24, fontWeight: 800, color: claudeTheme.cream }}>Entiende el Proyecto</div>
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
