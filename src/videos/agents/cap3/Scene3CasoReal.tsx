import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { agentsTheme } from "../../../themes/agents";
import { GridBackground } from "../../../components/GridBackground";
import { TechIcon } from "../../../components/TechIcon";
import { CharacterFace } from "../../../components/CharacterFace";

export const Scene3CasoReal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  const queryStart = 20;
  const sqlStart = 60;
  const resultStart = 110;

  const querySpring = spring({ frame: frame - queryStart, fps });
  const sqlSpring = spring({ frame: frame - sqlStart, fps });
  const resultSpring = spring({ frame: frame - resultStart, fps });

  return (
    <AbsoluteFill style={{ backgroundColor: agentsTheme.bg }}>
      <GridBackground color={agentsTheme.green} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "80px 40px", boxSizing: "border-box", alignItems: "center"
      }}>
        
        {/* Massive Screen Title Header */}
        <div style={{ textAlign: "center", marginBottom: 50, opacity: entrance }}>
          <div style={{ fontFamily: agentsTheme.fontSans, fontSize: 80, fontWeight: 900, color: agentsTheme.cream, letterSpacing: "-2px" }}>
            TEXT-TO-SQL
          </div>
        </div>

        {/* 1. User Prompt (Spanish) */}
        <div style={{
          width: "100%", background: "rgba(34, 211, 238, 0.1)", border: `3px solid ${agentsTheme.cyan}66`,
          borderRadius: 24, padding: "30px 25px", marginBottom: 30, opacity: querySpring,
          transform: `scale(${querySpring})`, boxSizing: "border-box", display: "flex", alignItems: "center", gap: 20
        }}>
          <CharacterFace type="user" size={60} />
          <div style={{ fontFamily: agentsTheme.fontSans, fontSize: 36, fontWeight: 700, color: agentsTheme.cream }}>
            "¿Cuánto vendí este mes?"
          </div>
        </div>

        {/* 2. SQL Generated (Live Execution look) */}
        <div style={{
          width: "100%", background: "rgba(5, 8, 16, 0.9)", border: `3px solid ${agentsTheme.purple}AA`,
          borderRadius: 20, padding: 30, marginBottom: 30, opacity: sqlSpring,
          transform: `translateY(${interpolate(sqlSpring, [0, 1], [40, 0])}px)`, boxSizing: "border-box"
        }}>
          <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 24, color: agentsTheme.purple, marginBottom: 15, fontWeight: 800 }}>[ TOOL: SQL_GENERATOR ]</div>
          <code style={{ fontFamily: agentsTheme.fontMono, fontSize: 32, color: agentsTheme.green, lineHeight: 1.4 }}>
            <span style={{ color: agentsTheme.purple }}>SELECT</span> SUM(total)<br/>
            <span style={{ color: agentsTheme.purple }}>FROM</span> sales<br/>
            <span style={{ color: agentsTheme.purple }}>WHERE</span> date = <span style={{ color: agentsTheme.cyan }}>'2026-06'</span>;
          </code>
        </div>

        {/* 3. Final Table Result */}
        <div style={{
          width: "100%", background: "rgba(0, 255, 65, 0.05)", border: `4px solid ${agentsTheme.green}`,
          borderRadius: 24, padding: 35, opacity: resultSpring,
          transform: `scale(${resultSpring})`, boxSizing: "border-box", textAlign: "center",
          boxShadow: `0 20px 50px ${agentsTheme.green}22`
        }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20, marginBottom: 15 }}>
            <TechIcon type="database" color={agentsTheme.green} size={40} />
            <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 24, fontWeight: 800, color: agentsTheme.green }}>RESULTADO_DB</div>
          </div>
          <div style={{ fontFamily: agentsTheme.fontSans, fontSize: 75, fontWeight: 900, color: agentsTheme.cream, textShadow: agentsTheme.glowGreen }}>
            $ 45,280.00
          </div>
          <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 24, color: agentsTheme.green, marginTop: 10 }}>✓ Consulta exitosa</div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
