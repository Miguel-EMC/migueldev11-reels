import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";
import { TerraformIcon } from "../../../components/flat/FlatIcons";

export const Scene3TerraformApply: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isApplyPhase = frame >= 240;
  const currentFrame = isApplyPhase ? frame - 240 : frame;
  const entrance = spring({ frame: currentFrame, fps, config: { damping: 12 } });

  const terraformDeclarativeCode = `# main.tf - Declarative Infrastructure
resource "aws_db_instance" "postgres" {
  allocated_storage = 50
  engine            = "postgres"
  instance_class    = "db.t4g.medium"
  multi_az          = true
  skip_final_snapshot = false
}`;

  const terraformApplyCode = `$ terraform apply -auto-approve
Plan: 8 to add, 0 to change, 0 to destroy.

aws_vpc.production: Creating... [0.8s]
aws_db_instance.postgres: Creating... [4.2s]
aws_ecs_cluster.main: Creating... [1.1s]

Apply complete! Resources: 8 added. [Total: 6.1s] ⚡`;

  return (
    <EmcodeSceneWrapper categoryTag="INFRAESTRUCTURA COMO CÓDIGO" gridColor={brand.green}>
      {/* 1. TOP ZONE: Massive Title Banner */}
      <div
        style={{
          background: "rgba(0, 255, 65, 0.12)",
          backdropFilter: "blur(14px)",
          border: `4px solid ${brand.green}`,
          borderRadius: 32,
          padding: "36px 30px",
          width: "100%",
          textAlign: "center",
          boxShadow: `0 20px 60px rgba(0,0,0,0.7), ${brand.glowGreen}`,
          transform: `scale(${entrance})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: brand.fontSans,
            fontSize: 64,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          {!isApplyPhase ? (
            <>
              Archivos <span style={{ color: brand.cyan, textShadow: brand.glowCyan }}>Declarativos `.tf` 📝</span>
            </>
          ) : (
            <>
              `terraform apply` <span style={{ color: brand.green, textShadow: brand.glowGreen }}>en Segundos ⚡</span>
            </>
          )}
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Terraform Tool + Code */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 16, transform: `scale(${entrance})`, opacity: entrance }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(10, 20, 40, 0.9)",
            border: `2.5px solid ${!isApplyPhase ? brand.cyan : brand.green}88`,
            borderRadius: 24,
            padding: "16px 24px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <TerraformIcon size={60} />
            <div>
              <div style={{ fontFamily: brand.fontMono, fontSize: 14, fontWeight: 800, color: !isApplyPhase ? brand.cyan : brand.green, letterSpacing: 2 }}>
                {!isApplyPhase ? "AUDITABLE & VERSION CONTROLLED" : "100% REPLICABLE ARCHITECTURE"}
              </div>
              <div style={{ fontFamily: brand.fontSans, fontSize: 26, fontWeight: 900, color: brand.cream }}>
                {!isApplyPhase ? "HashiCorp Terraform IaC" : "Despliegue Cloud Automatizado"}
              </div>
            </div>
          </div>
        </div>

        <ZoomCodeBlock
          code={!isApplyPhase ? terraformDeclarativeCode : terraformApplyCode}
          language={!isApplyPhase ? "hcl" : "bash"}
          filename={!isApplyPhase ? "infra/database.tf" : "terminal-apply.sh"}
          startFrame={0}
          typingSpeed={999}
          highlightLines={!isApplyPhase ? [2, 5] : [1, 8]}
          fontSize={21}
        />
      </div>

      {/* 3. BOTTOM ZONE: Takeaway Card */}
      <div
        style={{
          background: "rgba(10, 20, 40, 0.8)",
          border: `2px solid ${brand.green}66`,
          borderRadius: 24,
          padding: "22px 35px",
          width: "100%",
          textAlign: "center",
          boxSizing: "border-box",
          transform: `scale(${entrance})`,
          opacity: entrance,
        }}
      >
        <div style={{ fontFamily: brand.fontSans, fontSize: 30, fontWeight: 800, color: brand.cream, lineHeight: 1.35 }}>
          Arquitectura <span style={{ color: brand.green, fontWeight: 900 }}>replicable, auditable y automatizada</span> con un solo comando.
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
