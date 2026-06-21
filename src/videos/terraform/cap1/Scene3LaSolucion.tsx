import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { tfTheme } from "../../../themes/terraform";
import { GridBackground } from "../../../components/GridBackground";
import { Terminal, CloudCog } from "lucide-react";
import { TerraformLogo } from "../../../components/TerraformLogo";

export const Scene3LaSolucion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const codeGen = spring({ frame: frame - 20, fps });
  const deployAction = spring({ frame: frame - 50, fps });
  const cloudGlow = spring({ frame: frame - 70, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ backgroundColor: tfTheme.bg }}>
      <GridBackground color={tfTheme.tfPurple} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "80px 40px", boxSizing: "border-box", alignItems: "center", justifyContent: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 50, opacity: entrance }}>
          <div style={{ fontFamily: tfTheme.fontSans, fontSize: 80, fontWeight: 900, color: tfTheme.cream, letterSpacing: "-2px" }}>
            INFRA COMO CÓDIGO
          </div>
        </div>

        {/* 1. Code Editor View */}
        <div style={{
          width: "100%", background: "rgba(10, 15, 30, 0.9)", border: `3px solid ${tfTheme.textDim}66`,
          borderRadius: 24, padding: "30px", marginBottom: 30, opacity: codeGen,
          transform: `scale(${codeGen}) translateY(${interpolate(deployAction, [0, 1], [0, -20])}px)`
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 15, marginBottom: 20 }}>
            <Terminal size={30} color={tfTheme.textDim} />
            <div style={{ fontFamily: tfTheme.fontMono, fontSize: 24, color: tfTheme.textDim }}>main.tf</div>
          </div>
          <code style={{ fontFamily: tfTheme.fontMono, fontSize: 28, color: tfTheme.cyan, lineHeight: 1.4 }}>
            <span style={{ color: tfTheme.tfPurple }}>resource</span> "aws_instance" "web" {"{"}<br/>
            &nbsp;&nbsp;ami = "ami-0c55b159"<br/>
            &nbsp;&nbsp;instance_type = "t2.micro"<br/>
            {"}"}
          </code>
        </div>

        {/* 2. Terraform Execution Engine */}
        <div style={{
          background: "rgba(132, 79, 186, 0.15)", border: `3px solid ${tfTheme.tfPurple}`, borderRadius: 40,
          padding: "15px 40px", display: "flex", alignItems: "center", gap: 20, marginBottom: 30,
          opacity: deployAction, transform: `scale(${deployAction})`, boxShadow: tfTheme.glowPurple
        }}>
          <TerraformLogo size={40} glow={false} />
          <div style={{ fontFamily: tfTheme.fontMono, fontSize: 32, fontWeight: 900, color: tfTheme.cream }}>
            terraform apply
          </div>
        </div>

        {/* 3. Cloud Reality output */}
        <div style={{
          width: "100%", background: cloudGlow > 0.5 ? "rgba(0, 255, 65, 0.1)" : "rgba(34, 211, 238, 0.05)",
          border: `4px solid ${cloudGlow > 0.5 ? tfTheme.green : tfTheme.cyan}`,
          borderRadius: 32, padding: "40px", display: "flex", alignItems: "center", justifyContent: "center", gap: 30,
          opacity: cloudGlow, transform: `scale(${cloudGlow})`,
          boxShadow: cloudGlow > 0.5 ? tfTheme.glowGreen : tfTheme.glowCyan, transition: "all 0.4s"
        }}>
          <CloudCog size={80} color={cloudGlow > 0.5 ? tfTheme.green : tfTheme.cyan} style={{ filter: cloudGlow > 0.5 ? tfTheme.glowGreen : "none" }} />
          <div>
            <div style={{ fontFamily: tfTheme.fontMono, fontSize: 24, fontWeight: 800, color: tfTheme.textDim }}>CLOUD_PROVIDER</div>
            <div style={{ fontFamily: tfTheme.fontSans, fontSize: 44, fontWeight: 900, color: tfTheme.cream }}>
              Servidor Creado ✅
            </div>
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
