import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { GridBackground } from "../../../components/GridBackground";
import { Cpu, Layers, Database, FileText, Globe, CheckCircle2 } from "lucide-react";

export const Scene3LaSolucion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Staggered transitions
  const step1 = spring({ frame: frame - 20, fps }); // AI Client
  const step2 = spring({ frame: frame - 55, fps }); // MCP Center Standard
  const step3 = spring({ frame: frame - 90, fps }); // Servers / Tools
  const lineProgress = spring({ frame: frame - 120, fps, config: { damping: 15 } });

  // Camera drift
  const cameraScale = interpolate(frame, [0, 300], [1.02, 1.09], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${cameraScale})` }}>
        <GridBackground color={brand.green} />
      </div>

      {/* Radial glow around the center (MCP Hub) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 450,
          height: 450,
          background: `radial-gradient(circle, ${brand.green}22 0%, transparent 70%)`,
          filter: "blur(30px)",
          opacity: 0.8 * step2,
          pointerEvents: "none",
        }}
      />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", justifyContent: "center", alignItems: "center"
      }}>
        
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: brand.fontSans, fontSize: 80, fontWeight: 900, color: brand.cream, letterSpacing: "-2px", lineHeight: 1.1 }}>
            LA <span style={{ color: brand.green, textShadow: brand.glowGreen }}>SOLUCIÓN</span> 🚀
          </div>
        </div>

        {/* Diagram Hub */}
        <div style={{ position: "relative", width: "100%", height: 550, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
          
          {/* AI Client (Left) */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 15,
            opacity: step1, transform: `translateX(${interpolate(step1, [0, 1], [-40, 0])}px)`
          }}>
            <div style={{
              background: "rgba(34, 211, 238, 0.15)", border: `3px solid ${brand.cyan}`,
              borderRadius: 24, padding: "30px", boxShadow: brand.glowCyan
            }}>
              <Cpu size={70} color={brand.cyan} />
            </div>
            <div style={{ fontFamily: brand.fontMono, fontSize: 26, color: brand.cyan, fontWeight: 800 }}>
              CLIENTE IA
            </div>
          </div>

          {/* MCP Hub (Center) */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 15,
            opacity: step2, transform: `scale(${step2})`
          }}>
            <div style={{
              background: "rgba(0, 255, 65, 0.15)", border: `4px solid ${brand.green}`,
              borderRadius: 30, padding: "35px", boxShadow: brand.glowGreen,
              position: "relative"
            }}>
              <Layers size={90} color={brand.green} style={{ filter: brand.glowGreen }} />
              
              <div style={{
                position: "absolute", top: -15, right: -15, background: brand.green, borderRadius: "50%",
                padding: 4, display: "flex", justifyContent: "center", alignItems: "center", boxShadow: brand.glowGreen
              }}>
                <CheckCircle2 size={30} color={brand.bg} />
              </div>
            </div>
            <div style={{ fontFamily: brand.fontMono, fontSize: 32, color: brand.green, fontWeight: 900, textShadow: brand.glowGreen }}>
              MCP
            </div>
          </div>

          {/* Servers / Targets (Right) */}
          <div style={{
            display: "flex", flexDirection: "column", gap: 30,
            opacity: step3, transform: `translateX(${interpolate(step3, [0, 1], [40, 0])}px)`
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 15, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 16, padding: "15px 25px" }}>
              <Database size={35} color={brand.cream} />
              <span style={{ fontFamily: brand.fontMono, fontSize: 22, color: brand.cream, fontWeight: 700 }}>Data Sources</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 15, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 16, padding: "15px 25px" }}>
              <FileText size={35} color={brand.cream} />
              <span style={{ fontFamily: brand.fontMono, fontSize: 22, color: brand.cream, fontWeight: 700 }}>Local Files</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 15, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 16, padding: "15px 25px" }}>
              <Globe size={35} color={brand.cream} />
              <span style={{ fontFamily: brand.fontMono, fontSize: 22, color: brand.cream, fontWeight: 700 }}>Web APIs</span>
            </div>
          </div>

          {/* Animated Connecting Lines */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
            {/* Left to Hub */}
            <line x1="200" y1="275" x2="390" y2="275" stroke={brand.cyan} strokeWidth="5" opacity={0.8 * lineProgress} strokeDasharray="10 5" />
            
            {/* Hub to Right sources */}
            <line x1="570" y1="275" x2="720" y2="185" stroke={brand.green} strokeWidth="5" opacity={0.8 * lineProgress} strokeDasharray="10 5" />
            <line x1="570" y1="275" x2="720" y2="275" stroke={brand.green} strokeWidth="5" opacity={0.8 * lineProgress} strokeDasharray="10 5" />
            <line x1="570" y1="275" x2="720" y2="365" stroke={brand.green} strokeWidth="5" opacity={0.8 * lineProgress} strokeDasharray="10 5" />
          </svg>

        </div>

        {/* Caption */}
        <div style={{
          fontFamily: brand.fontSans, fontSize: 34, fontWeight: 700, color: brand.cream,
          textAlign: "center", marginTop: 40, lineHeight: 1.3, opacity: step3
        }}>
          MCP es el <span style={{ color: brand.green, textShadow: brand.glowGreen }}>puerto USB universal</span>.<br />
          Escribe tu conector una vez, úsalo en cualquier IA.
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
