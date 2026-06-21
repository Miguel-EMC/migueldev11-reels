import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { agentsTheme } from "../../../themes/agents";
import { GridBackground } from "../../../components/GridBackground";

export const Scene2ProblemaCadena: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Staggered sequence for linear chain pipeline nodes
  const node1 = spring({ frame: frame - 15, fps });
  const node2 = spring({ frame: frame - 35, fps });
  const node3 = spring({ frame: frame - 55, fps });
  
  // Error explosion trigger frame
  const errorTrigger = frame - 75;
  const errorSpring = spring({ frame: errorTrigger, fps, config: { damping: 10, stiffness: 120 } });

  return (
    <AbsoluteFill style={{ backgroundColor: agentsTheme.bg }}>
      <GridBackground color={agentsTheme.orange} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", justifyContent: "center"
      }}>
        
        {/* Massive Screen Header Section Title */}
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: agentsTheme.fontSans, fontSize: 85, fontWeight: 900, color: agentsTheme.cream, letterSpacing: "-2px" }}>
            EL PROBLEMA DE LA CADENA
          </div>
        </div>

        {/* Main Linear Chain Architecture layout box */}
        <div style={{
          background: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(16px)",
          border: `3px solid rgba(255,255,255,0.08)`, borderRadius: 28, padding: "50px 30px",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          boxShadow: "0 30px 60px rgba(0,0,0,0.5)", width: "100%", boxSizing: "border-box"
        }}>
          
          <div style={{
            fontFamily: agentsTheme.fontMono, fontSize: 32, fontWeight: 900, color: agentsTheme.textDim, marginBottom: 40, letterSpacing: 2
          }}>
            [ LINEAR_PIPELINE // LLM_CHAIN ]
          </div>

          {/* Horizontal Chain Flow Nodes and connectors */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, width: "100%", justifyContent: "center", position: "relative" }}>
            
            {/* Node A */}
            <div style={{
              width: 110, height: 110, borderRadius: 20, background: "rgba(255,255,255,0.03)",
              border: `3px solid ${agentsTheme.cream}44`, display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: agentsTheme.fontMono, fontSize: 40, fontWeight: 900, color: agentsTheme.cream,
              opacity: node1, transform: `scale(${node1})`
            }}>
              Paso A
            </div>

            <div style={{ fontSize: 36, color: agentsTheme.textDim, opacity: node2 }}>➡</div>

            {/* Node B (Fails) */}
            <div style={{
              width: 110, height: 110, borderRadius: 20, 
              background: errorTrigger > 0 ? "rgba(239, 68, 68, 0.1)" : "rgba(255,255,255,0.03)",
              border: `3px solid ${errorTrigger > 0 ? "#EF4444" : agentsTheme.cream + "44"}`, 
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: agentsTheme.fontMono, fontSize: 40, fontWeight: 900, 
              color: errorTrigger > 0 ? "#EF4444" : agentsTheme.cream,
              opacity: node2, transform: `scale(${node2})`, position: "relative", transition: "all 0.2s"
            }}>
              Paso B

              {/* Massive Red Cross Break Symbol Error Overlay */}
              {errorTrigger > 0 && (
                <div style={{
                  position: "absolute", fontSize: 130, color: "#EF4444", fontWeight: 900,
                  transform: `translate(-50%, -50%) scale(${errorSpring})`, left: "50%", top: "45%",
                  textShadow: "0 0 40px rgba(239, 68, 68, 0.6)", zIndex: 30
                }}>
                  ❌
                </div>
              )}
            </div>

            <div style={{ fontSize: 36, color: agentsTheme.textDim, opacity: errorTrigger > 0 ? 0.2 : node3 }}>➡</div>

            {/* Node C (Unreachable) */}
            <div style={{
              width: 110, height: 110, borderRadius: 20, background: "rgba(255,255,255,0.01)",
              border: `3px solid ${agentsTheme.cream}11`, display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: agentsTheme.fontMono, fontSize: 40, fontWeight: 900, color: agentsTheme.textDim,
              opacity: errorTrigger > 0 ? 0.15 : node3, transform: `scale(${node3})`
            }}>
              Paso C
            </div>

          </div>

        </div>

        {/* Big Scaled Impact Text Callout */}
        <div style={{
          fontFamily: agentsTheme.fontSans, fontSize: 52, fontWeight: 900, color: "#EF4444",
          textAlign: "center", marginTop: 50, lineHeight: 1.2, textShadow: "0 0 20px rgba(239,68,68,0.2)",
          opacity: errorSpring
        }}>
          ¡SE ROMPE EL PROCESO!<br/>
          <span style={{ color: agentsTheme.cream, fontSize: 36, fontWeight: 500, opacity: 0.8 }}>No puede regresar ni corregir errores.</span>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
