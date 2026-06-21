import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { agentsTheme } from "../../../themes/agents";
import { GridBackground } from "../../../components/GridBackground";
import { TechIcon } from "../../../components/TechIcon";
import { CharacterFace } from "../../../components/CharacterFace";

export const Scene2QueEsTool: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Staggered tool animations
  const tool1 = spring({ frame: frame - 40, fps });
  const tool2 = spring({ frame: frame - 55, fps });
  const tool3 = spring({ frame: frame - 70, fps });

  const agentThinking = Math.sin(frame / 15) * 10 - 5;

  const tools = [
    { icon: "search", label: "INTERNET", color: agentsTheme.cyan, s: tool1 },
    { icon: "database", label: "DATABASE", color: agentsTheme.green, s: tool2 },
    { icon: "file", label: "EMAIL", color: agentsTheme.purple, s: tool3 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: agentsTheme.bg }}>
      <GridBackground color={agentsTheme.green} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", alignItems: "center"
      }}>
        
        {/* Agent Thinking Character */}
        <div style={{
          marginBottom: 60, transform: `translateY(${agentThinking}px) scale(${entrance})`, opacity: entrance,
          display: "flex", flexDirection: "column", alignItems: "center"
        }}>
          <CharacterFace type="agent" size={180} />
          <div style={{
            fontFamily: agentsTheme.fontMono, fontSize: 32, fontWeight: 900, color: agentsTheme.green,
            textShadow: agentsTheme.glowGreen, marginTop: 20
          }}>
            ¿Cuál necesito?
          </div>
        </div>

        {/* Scaled Multi-Tool Selection Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30, width: "100%" }}>
          {tools.map((t, i) => (
            <div key={i} style={{
              background: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(16px)",
              border: `3px solid ${t.color}${t.s > 0.5 ? "" : "33"}`, borderRadius: 24, padding: "30px 40px",
              display: "flex", alignItems: "center", gap: 30, opacity: t.s,
              transform: `scale(${t.s}) translateX(${interpolate(t.s, [0, 1], [-50, 0])}px)`,
              boxShadow: t.s > 0.5 ? `0 15px 35px ${t.color}22` : "none",
              transition: "border 0.2s"
            }}>
              <TechIcon type={t.icon as any} color={t.color} size={60} />
              <div style={{ fontFamily: agentsTheme.fontSans, fontSize: 50, fontWeight: 900, color: agentsTheme.cream }}>
                {t.label}
              </div>
              {t.s > 0.8 && i === 1 && (
                <div style={{ marginLeft: "auto", color: agentsTheme.green, fontSize: 40, fontWeight: 900 }}>✓</div>
              )}
            </div>
          ))}
        </div>

        {/* Callout Text */}
        <div style={{
          marginTop: 60, fontFamily: agentsTheme.fontSans, fontSize: 48, fontWeight: 800,
          color: agentsTheme.cream, textAlign: "center", opacity: tool3, lineHeight: 1.2
        }}>
          Él razona y <span style={{ color: agentsTheme.green, textShadow: agentsTheme.glowGreen }}>ELIGE SOLO</span>.
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
