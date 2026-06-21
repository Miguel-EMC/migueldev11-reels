import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { tfTheme } from "../../../themes/terraform";
import { GridBackground } from "../../../components/GridBackground";
import { Camera, Server, Database, BrainCircuit } from "lucide-react";

export const Scene2QueEs: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const snap = spring({ frame: frame - 40, fps, config: { stiffness: 100 } });
  const fileAppears = spring({ frame: frame - 60, fps });

  return (
    <AbsoluteFill style={{ backgroundColor: tfTheme.bg }}>
      <GridBackground color={tfTheme.tfPurple} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", alignItems: "center", justifyContent: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 50, opacity: entrance }}>
          <div style={{ fontFamily: tfTheme.fontSans, fontSize: 80, fontWeight: 900, color: tfTheme.cream, letterSpacing: "-2px" }}>
            ¿QUÉ ES?
          </div>
        </div>

        {/* The Brain/Memory concept */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 50, opacity: entrance }}>
          <BrainCircuit size={60} color={tfTheme.cyan} style={{ filter: tfTheme.glowCyan }} />
          <div style={{ fontFamily: tfTheme.fontMono, fontSize: 32, fontWeight: 800, color: tfTheme.cyan }}>LA MEMORIA DE TERRAFORM</div>
        </div>

        <div style={{
          position: "relative", width: "100%", height: 400,
          background: "rgba(10, 15, 30, 0.8)", border: `3px solid ${tfTheme.textDim}66`,
          borderRadius: 32, display: "flex", alignItems: "center", justifyContent: "space-around",
          padding: "40px", boxSizing: "border-box", opacity: entrance
        }}>
          
          {/* Cloud Infra Visual */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <div style={{ display: "flex", gap: 15 }}>
              <Server size={70} color={tfTheme.green} style={{ filter: tfTheme.glowGreen }} />
              <Database size={70} color={tfTheme.green} style={{ filter: tfTheme.glowGreen }} />
            </div>
            <div style={{ fontFamily: tfTheme.fontMono, fontSize: 24, fontWeight: 800, color: tfTheme.cream }}>NUBE REAL</div>
          </div>

          {/* Camera Snapshot Animation */}
          <div style={{
            position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
            opacity: snap, display: "flex", flexDirection: "column", alignItems: "center"
          }}>
            <div style={{
              position: "absolute", inset: -50, background: "white", borderRadius: "50%",
              opacity: interpolate(snap, [0, 0.5, 1], [0, 1, 0]), filter: "blur(20px)", pointerEvents: "none"
            }} />
            <Camera size={80} color={tfTheme.cream} />
          </div>

          {/* Resulting State File */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
            opacity: fileAppears, transform: `scale(${fileAppears})`
          }}>
            <div style={{
              background: "rgba(132, 79, 186, 0.2)", border: `3px solid ${tfTheme.tfPurple}`, borderRadius: 16, padding: "20px 30px",
              boxShadow: tfTheme.glowPurple, display: "flex", flexDirection: "column", alignItems: "center"
            }}>
              <div style={{ fontFamily: tfTheme.fontMono, fontSize: 28, fontWeight: 900, color: tfTheme.tfPurple }}>terraform.tfstate</div>
            </div>
            <div style={{ fontFamily: tfTheme.fontMono, fontSize: 24, fontWeight: 800, color: tfTheme.cream }}>FOTOGRAFÍA</div>
          </div>

        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
