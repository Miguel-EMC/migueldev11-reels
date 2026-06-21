import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { tfTheme } from "../../../themes/terraform";
import { GridBackground } from "../../../components/GridBackground";
import { FileEdit, Users, ShieldAlert, ShieldCheck } from "lucide-react";

export const Scene3Reglas: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  const rule1 = spring({ frame: frame - 20, fps });
  const rule2 = spring({ frame: frame - 60, fps });

  return (
    <AbsoluteFill style={{ backgroundColor: tfTheme.bg }}>
      <GridBackground color={tfTheme.tfPurple} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", justifyContent: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: tfTheme.fontSans, fontSize: 80, fontWeight: 900, color: tfTheme.cream, letterSpacing: "-2px" }}>
            2 REGLAS DE ORO
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 40, width: "100%" }}>
          
          {/* Rule 1: Never edit by hand */}
          <div style={{
            background: "rgba(239, 68, 68, 0.1)", border: `3px solid ${tfTheme.red}`,
            borderRadius: 24, padding: "40px", display: "flex", alignItems: "center", gap: 30,
            opacity: rule1, transform: `translateX(${interpolate(rule1, [0, 1], [-50, 0])}px)`,
            boxShadow: tfTheme.glowRed
          }}>
            <div style={{ position: "relative" }}>
              <FileEdit size={80} color={tfTheme.textDim} />
              <ShieldAlert size={50} color={tfTheme.red} style={{ position: "absolute", bottom: -10, right: -10 }} />
            </div>
            <div>
              <div style={{ fontFamily: tfTheme.fontMono, fontSize: 32, fontWeight: 900, color: tfTheme.red, marginBottom: 5 }}>NUNCA LO EDITES A MANO</div>
              <div style={{ fontFamily: tfTheme.fontSans, fontSize: 28, color: tfTheme.cream, lineHeight: 1.2 }}>
                Romperás el código y Terraform perderá el rastro.
              </div>
            </div>
          </div>

          {/* Rule 2: Keep it remote */}
          <div style={{
            background: "rgba(0, 255, 65, 0.1)", border: `3px solid ${tfTheme.green}`,
            borderRadius: 24, padding: "40px", display: "flex", alignItems: "center", gap: 30,
            opacity: rule2, transform: `translateX(${interpolate(rule2, [0, 1], [50, 0])}px)`,
            boxShadow: tfTheme.glowGreen
          }}>
            <div style={{ position: "relative" }}>
              <Users size={80} color={tfTheme.cream} />
              <ShieldCheck size={50} color={tfTheme.green} style={{ position: "absolute", bottom: -10, right: -10 }} />
            </div>
            <div>
              <div style={{ fontFamily: tfTheme.fontMono, fontSize: 32, fontWeight: 900, color: tfTheme.green, marginBottom: 5 }}>GUÁRDALO REMOTO</div>
              <div style={{ fontFamily: tfTheme.fontSans, fontSize: 28, color: tfTheme.cream, lineHeight: 1.2 }}>
                Usa S3 o Terraform Cloud para que todo el equipo vea lo mismo.
              </div>
            </div>
          </div>

        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
