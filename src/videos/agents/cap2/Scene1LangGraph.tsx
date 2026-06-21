import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { agentsTheme } from "../../../themes/agents";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";
import { TechIcon } from "../../../components/TechIcon";

export const Scene1LangGraph: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Staggered triggers for node connections
  const nodeA = spring({ frame: frame - 20, fps });
  const nodeB = spring({ frame: frame - 50, fps });
  const nodeC = spring({ frame: frame - 80, fps });

  return (
    <AbsoluteFill style={{ backgroundColor: agentsTheme.bg }}>
      <GridBackground color={agentsTheme.orange} />
      <ParticleField />

      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at center, transparent 20%, ${agentsTheme.bg} 95%)`,
        pointerEvents: "none", zIndex: 2
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "90px 40px", boxSizing: "border-box", alignItems: "center", zIndex: 10
      }}>
        
        {/* Main Series Tracker Badge Header */}
        <div style={{
          fontFamily: agentsTheme.fontMono, fontSize: 26, color: agentsTheme.orange,
          border: `2px solid ${agentsTheme.orange}66`, background: "rgba(255, 122, 26, 0.1)",
          padding: "10px 30px", borderRadius: 30, letterSpacing: 4, fontWeight: 900, marginBottom: 50, opacity: entrance
        }}>
          BLOQUE A2 // LANGGRAPH CORE
        </div>

        {/* Big Pro Headline Statement */}
        <h1 style={{
          fontFamily: agentsTheme.fontSans, fontSize: 75, fontWeight: 900, color: agentsTheme.cream,
          textAlign: "center", margin: "0 0 60px 0", lineHeight: 1.1, letterSpacing: "-2px", opacity: entrance
        }}>
          Control Total en<br/>
          <span style={{ color: agentsTheme.orange, textShadow: agentsTheme.glowOrange }}>Ciclos del Agente</span>
        </h1>

        {/* GRAPH NETWORK INTERACTIVE VISUALIZATION MOCKUP MAP */}
        <div style={{ position: "relative", width: "100%", flex: 1, marginTop: 20 }}>
          
          {/* Laser connection lines linking agent state graphs nodes */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 5 }}>
            <line x1="20%" y1="40%" x2="50%" y2="15%" stroke={agentsTheme.orange} strokeWidth={nodeA > 0.5 ? "6" : "2"} opacity={nodeA * 0.6} strokeDasharray="8 6" />
            <line x1="50%" y1="15%" x2="80%" y2="40%" stroke={agentsTheme.orange} strokeWidth={nodeB > 0.5 ? "6" : "2"} opacity={nodeB * 0.6} strokeDasharray="8 6" />
            <line x1="80%" y1="40%" x2="50%" y2="70%" stroke={agentsTheme.orange} strokeWidth={nodeC > 0.5 ? "6" : "2"} opacity={nodeC * 0.6} strokeDasharray="8 6" />
            <line x1="50%" y1="70%" x2="20%" y2="40%" stroke={agentsTheme.purple} strokeWidth="4" opacity={nodeC * 0.8} />
          </svg>

          {/* Node A: State Input Entry Router */}
          <div style={{
            position: "absolute", left: "20%", top: "40%", transform: "translate(-50%, -50%)",
            opacity: entrance, display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10
          }}>
            <div style={{ width: 45, height: 45, borderRadius: "50%", background: agentsTheme.bg, border: `4px solid ${agentsTheme.cream}`, boxShadow: "0 0 20px white" }} />
            <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 24, fontWeight: 800, color: agentsTheme.cream, marginTop: 10 }}>START</div>
          </div>

          {/* Node B: Agent Planner Brain Decision Node */}
          <div style={{
            position: "absolute", left: "50%", top: "15%", transform: "translate(-50%, -50%)",
            opacity: nodeA, display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10
          }}>
            <div style={{
              width: 55, height: 55, borderRadius: "50%", background: agentsTheme.bg, 
              border: `5px solid ${agentsTheme.orange}`, boxShadow: agentsTheme.glowOrange,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <TechIcon type="cpu" size={25} color={agentsTheme.orange} glow={false} />
            </div>
            <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 26, fontWeight: 900, color: agentsTheme.orange, marginTop: 10, textShadow: agentsTheme.glowOrange }}>PLAN_BRAIN</div>
          </div>

          {/* Node C: Tool Executive Action Runner Node */}
          <div style={{
            position: "absolute", left: "80%", top: "40%", transform: "translate(-50%, -50%)",
            opacity: nodeB, display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10
          }}>
            <div style={{
              width: 55, height: 55, borderRadius: "50%", background: agentsTheme.bg, 
              border: `5px solid ${agentsTheme.orange}`, boxShadow: agentsTheme.glowOrange,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <TechIcon type="code" size={25} color={agentsTheme.orange} glow={false} />
            </div>
            <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 26, fontWeight: 900, color: agentsTheme.orange, marginTop: 10 }}>TOOL_EXEC</div>
          </div>

          {/* Node D: Evaluation Checker Routing Switch Node */}
          <div style={{
            position: "absolute", left: "50%", top: "70%", transform: "translate(-50%, -50%)",
            opacity: nodeC, display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10
          }}>
            <div style={{
              width: 60, height: 60, borderRadius: "50%", background: agentsTheme.bg, 
              border: `5px solid ${nodeC > 0.5 ? agentsTheme.green : agentsTheme.orange}`, 
              boxShadow: nodeC > 0.5 ? agentsTheme.glowGreen : agentsTheme.glowOrange,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <TechIcon type="search" size={25} color={nodeC > 0.5 ? agentsTheme.green : agentsTheme.orange} glow={false} />
            </div>
            <div style={{ 
              fontFamily: agentsTheme.fontMono, fontSize: 26, fontWeight: 900, 
              color: nodeC > 0.5 ? agentsTheme.green : agentsTheme.orange, marginTop: 10 
            }}>
              {nodeC > 0.5 ? "REVISIÓN_OK ✓" : "CHECK_STATE"}
            </div>
          </div>

        </div>

        {/* Bottom Educational Subtitles Footer callout */}
        <div style={{
          fontFamily: agentsTheme.fontSans, fontSize: 34, fontWeight: 500, color: agentsTheme.textDim,
          textAlign: "center", opacity: nodeC, marginTop: 40, lineHeight: 1.4
        }}>
          LangGraph convierte ciclos caóticos en un<br/>
          <span style={{ color: agentsTheme.orange, fontWeight: 800 }}>Grafo de Estado Determínistico</span> seguro.
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
