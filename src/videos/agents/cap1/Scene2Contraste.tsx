import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { agentsTheme } from "../../../themes/agents";
import { GridBackground } from "../../../components/GridBackground";
import { TechIcon } from "../../../components/TechIcon";

export const Scene2Contraste: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const agentWorkflow = spring({ frame: frame - 45, fps, config: { damping: 15 } });

  return (
    <AbsoluteFill style={{ backgroundColor: agentsTheme.bg }}>
      <GridBackground color={agentsTheme.purple} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", justifyContent: "center"
      }}>
        
        {/* Enormous Screen Title */}
        <div style={{ textAlign: "center", marginBottom: 70, opacity: entrance }}>
          <div style={{ fontFamily: agentsTheme.fontSans, fontSize: 100, fontWeight: 900, color: agentsTheme.cream, letterSpacing: "-3px" }}>
            ¿CÓMO TRABAJAN?
          </div>
        </div>

        {/* Scaled Contrast Containers Stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: 50, width: "100%" }}>
          
          {/* Top Block: Traditional Chatbot (Massive Text) */}
          <div style={{
            background: "rgba(30, 41, 59, 0.5)", border: `3px solid ${agentsTheme.textDim}44`,
            borderRadius: 24, padding: 40, display: "flex", alignItems: "center", gap: 30,
            opacity: entrance, transform: `translateX(${interpolate(entrance, [0, 1], [-50, 0])}px)`
          }}>
            <TechIcon type="file" color={agentsTheme.textDim} size={60} glow={false} />
            <div>
              <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 32, fontWeight: 900, color: agentsTheme.textDim, marginBottom: 10, letterSpacing: 2 }}>
                CHATBOT TRADICIONAL
              </div>
              <div style={{ fontFamily: agentsTheme.fontSans, fontSize: 48, fontWeight: 800, color: agentsTheme.cream, letterSpacing: "-1px" }}>
                Pregunta <span style={{ color: agentsTheme.purple }}>→</span> Respuesta.<br/>Ahí muere.
              </div>
            </div>
          </div>

          {/* Bottom Block: Intelligent Autonomous AI Agent (Massive Text & Workflow) */}
          <div style={{
            background: "rgba(167, 139, 250, 0.08)", backdropFilter: "blur(16px)",
            border: `4px solid ${agentsTheme.purple}`, borderRadius: 28, padding: 45,
            boxShadow: `0 30px 60px rgba(0,0,0,0.6), ${agentsTheme.glowPurple}22`,
            opacity: agentWorkflow, transform: `translateX(${interpolate(agentWorkflow, [0, 1], [50, 0])}px)`,
            display: "flex", flexDirection: "column", gap: 30
          }}>
            
            <div style={{ display: "flex", alignItems: "center", gap: 25 }}>
              <TechIcon type="cpu" color={agentsTheme.purple} size={70} />
              <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 36, fontWeight: 900, color: agentsTheme.purple, textShadow: agentsTheme.glowPurple, letterSpacing: 2 }}>
                AGENTE DE IA
              </div>
            </div>

            <div style={{
              fontFamily: agentsTheme.fontSans, fontSize: 62, fontWeight: 900, color: agentsTheme.cream,
              letterSpacing: "-2px", lineHeight: 1.15
            }}>
              Recibe un <span style={{ color: agentsTheme.purple, textShadow: agentsTheme.glowPurple }}>OBJETIVO</span> global y resuelve solo.
            </div>

            {/* Expanded Loop Steps View */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20, fontFamily: agentsTheme.fontMono, fontSize: 28, fontWeight: 900
            }}>
              {["Planifica", "Usa Herramientas", "Revisa", "Itera en Ciclo"].map((step, idx) => {
                const s = spring({ frame: frame - 80 - idx * 10, fps });
                return (
                  <div key={step} style={{
                    background: "rgba(5, 8, 16, 0.8)", border: `2px solid ${agentsTheme.purple}AA`,
                    padding: "20px 15px", borderRadius: 16, color: agentsTheme.cream, textAlign: "center",
                    opacity: s, transform: `scale(${s})`, boxShadow: agentsTheme.glowPurple + "22"
                  }}>
                    {idx + 1}. {step}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
