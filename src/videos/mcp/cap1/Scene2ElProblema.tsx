import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { GridBackground } from "../../../components/GridBackground";
import { Database, GitBranch, MessageSquare, AlertTriangle, Cpu } from "lucide-react";

export const Scene2ElProblema: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Staggered animations for the elements
  const llmSpring = spring({ frame: frame - 15, fps, config: { damping: 10 } });
  const toolSpring = spring({ frame: frame - 40, fps, config: { damping: 12 } });
  const lineSpring = spring({ frame: frame - 70, fps, config: { stiffness: 100 } });
  const errorSpring = spring({ frame: frame - 110, fps, config: { damping: 8, stiffness: 120 } });

  // Camera drift
  const cameraScale = interpolate(frame, [0, 240], [1.08, 1.02], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${cameraScale})` }}>
        <GridBackground color="#EF4444" />
      </div>

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", justifyContent: "center", alignItems: "center"
      }}>
        
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: brand.fontSans, fontSize: 80, fontWeight: 900, color: brand.cream, letterSpacing: "-2px", lineHeight: 1.1 }}>
            EL GRAN <span style={{ color: "#EF4444", textShadow: "0 0 15px rgba(239, 68, 68, 0.6)" }}>PROBLEMA</span> 🤯
          </div>
        </div>

        {/* Integration Diagram */}
        <div style={{ position: "relative", width: "100%", height: 500, margin: "20px 0" }}>
          
          {/* LLMs (Left column) */}
          <div style={{ position: "absolute", left: 40, top: 40, display: "flex", flexDirection: "column", gap: 60, opacity: llmSpring, transform: `translateX(${interpolate(llmSpring, [0, 1], [-50, 0])}px)` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 15, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "15px 25px" }}>
              <Cpu size={40} color={brand.cyan} />
              <span style={{ fontFamily: brand.fontMono, fontSize: 24, color: brand.cream, fontWeight: 700 }}>GPT-4</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 15, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "15px 25px" }}>
              <MessageSquare size={40} color={brand.orange} />
              <span style={{ fontFamily: brand.fontMono, fontSize: 24, color: brand.cream, fontWeight: 700 }}>Claude 3.5</span>
            </div>
          </div>

          {/* Tools / Data Sources (Right column) */}
          <div style={{ position: "absolute", right: 40, top: 20, display: "flex", flexDirection: "column", gap: 40, opacity: toolSpring, transform: `translateX(${interpolate(toolSpring, [0, 1], [50, 0])}px)` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 15, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "12px 20px" }}>
              <Database size={30} color={brand.cream} />
              <span style={{ fontFamily: brand.fontMono, fontSize: 22, color: brand.textDim }}>Bases de Datos</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 15, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "12px 20px" }}>
              <GitBranch size={30} color={brand.cream} />
              <span style={{ fontFamily: brand.fontMono, fontSize: 22, color: brand.textDim }}>GitHub API</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 15, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "12px 20px" }}>
              <MessageSquare size={30} color={brand.cream} />
              <span style={{ fontFamily: brand.fontMono, fontSize: 22, color: brand.textDim }}>Slack Workspace</span>
            </div>
          </div>

          {/* Spaghetti Connection Lines */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
            {/* GPT-4 to sources */}
            <line x1="220" y1="80" x2="680" y2="60" stroke="#EF4444" strokeWidth="4" opacity={0.6 * lineSpring} strokeDasharray="6 6" />
            <line x1="220" y1="80" x2="680" y2="140" stroke="#EF4444" strokeWidth="4" opacity={0.6 * lineSpring} strokeDasharray="6 6" />
            
            {/* Claude to sources */}
            <line x1="260" y1="180" x2="680" y2="140" stroke="#EF4444" strokeWidth="4" opacity={0.6 * lineSpring} strokeDasharray="6 6" />
            <line x1="260" y1="180" x2="680" y2="220" stroke="#EF4444" strokeWidth="4" opacity={0.6 * lineSpring} strokeDasharray="6 6" />
            <line x1="260" y1="180" x2="680" y2="60" stroke="#EF4444" strokeWidth="4" opacity={0.6 * lineSpring} strokeDasharray="6 6" />
          </svg>

          {/* Error warning badge in the center */}
          {frame > 100 && (
            <div style={{
              position: "absolute", left: "50%", top: "45%", transform: "translate(-50%, -50%)",
              background: "rgba(239, 68, 68, 0.95)", border: "3px solid #F5F5F0", borderRadius: 24, padding: "20px 30px",
              display: "flex", alignItems: "center", gap: 15, opacity: errorSpring, scale: `${errorSpring}`,
              boxShadow: "0 10px 30px rgba(239,68,68,0.5)"
            }}>
              <AlertTriangle size={36} color={brand.cream} />
              <div style={{ fontFamily: brand.fontMono, fontSize: 24, fontWeight: 900, color: brand.cream }}>
                INTEGRACIONES PROPIETARIAS
              </div>
            </div>
          )}

        </div>

        {/* Caption */}
        <div style={{
          fontFamily: brand.fontSans, fontSize: 34, fontWeight: 700, color: brand.cream,
          textAlign: "center", marginTop: 40, lineHeight: 1.3, opacity: errorSpring
        }}>
          Cada modelo necesita un código <span style={{ color: "#EF4444" }}>diferente</span><br />para conectarse a tus herramientas.
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
