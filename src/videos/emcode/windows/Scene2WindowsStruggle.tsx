import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";

export const Scene2WindowsStruggle: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 3 Internal Phases matching audio:
  // Phase 1: 0 - 180 (Docker RAM 12GB)
  // Phase 2: 180 - 360 (Backslash path errors in Node)
  // Phase 3: 360 - 550 (Kernel NT vs Prod Linux)
  const isPhase1 = frame < 180;
  const isPhase2 = frame >= 180 && frame < 360;
  const isPhase3 = frame >= 360;

  const currentPhaseFrame = isPhase1 ? frame : isPhase2 ? frame - 180 : frame - 360;
  const entrance = spring({ frame: currentPhaseFrame, fps, config: { damping: 12 } });

  const nodeErrorCode = `# Error al ejecutar script en Windows:
TypeError [ERR_INVALID_ARG_VALUE]:
Path must be a string. Received "C:\\Users\\dev\\app\\node_modules\\"
> SyntaxError: Invalid escape character in path
> Build failed: posix path expected, got win32`;

  const kernelCode = `# Arquitectura de Sistemas
HOST:   Windows NT Kernel (WSL2 Hyper-V Bridge) ⚠️
PROD:   Linux 6.8 Native Kernel (AWS ECS / Kubernetes) 🚀
STATUS: Parity Mismatch -> "En mi máquina sí funcionaba"`;

  return (
    <EmcodeSceneWrapper categoryTag="EL DOLOR EN WINDOWS" gridColor={brand.red}>
      {/* 1. TOP ZONE: Dynamic Title Banner */}
      <div
        style={{
          background: "rgba(239, 68, 68, 0.12)",
          backdropFilter: "blur(14px)",
          border: `4px solid ${brand.red}`,
          borderRadius: 32,
          padding: "36px 30px",
          width: "100%",
          textAlign: "center",
          boxShadow: `0 20px 60px rgba(0,0,0,0.7), ${brand.glowRed}`,
          transform: `scale(${entrance})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: brand.fontSans,
            fontSize: 66,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          {isPhase1 && (
            <>
              Docker Desktop <span style={{ color: brand.red, textShadow: brand.glowRed }}>12 GB RAM 💀</span>
            </>
          )}
          {isPhase2 && (
            <>
              Barras Invertidas <span style={{ color: brand.orange, textShadow: brand.glowOrange }}>`\` vs `/` 💥</span>
            </>
          )}
          {isPhase3 && (
            <>
              Kernel Distinto a <span style={{ color: brand.red, textShadow: brand.glowRed }}>Producción 🛑</span>
            </>
          )}
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Responsive Visual for each phase */}
      <div style={{ width: "100%", transform: `scale(${entrance})`, opacity: entrance }}>
        {isPhase1 && (
          <div
            style={{
              background: "rgba(15, 23, 42, 0.95)",
              border: `3px solid ${brand.red}`,
              borderRadius: 28,
              padding: "40px 30px",
              display: "flex",
              flexDirection: "column",
              gap: 24,
              boxShadow: `0 20px 50px rgba(0,0,0,0.8), ${brand.glowRed}33`,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: brand.fontMono, fontSize: 24, color: brand.cream, fontWeight: 800 }}>
                vmmemWSL (Docker Engine)
              </span>
              <span style={{ fontFamily: brand.fontMono, fontSize: 36, color: brand.red, fontWeight: 900 }}>
                12.4 GB / 16 GB
              </span>
            </div>

            {/* RAM Progress Bar */}
            <div style={{ width: "100%", height: 32, background: "rgba(255,255,255,0.1)", borderRadius: 16, overflow: "hidden", border: `2px solid ${brand.red}` }}>
              <div
                style={{
                  width: `${interpolate(currentPhaseFrame, [0, 60], [40, 88], { extrapolateRight: "clamp" })}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, ${brand.orange}, ${brand.red})`,
                  boxShadow: brand.glowRed,
                }}
              />
            </div>

            <div style={{ fontFamily: brand.fontSans, fontSize: 24, color: brand.textDim, textAlign: "center" }}>
              Máquina congelada, ventiladores al 100% y lag en VS Code ⏳
            </div>
          </div>
        )}

        {isPhase2 && (
          <ZoomCodeBlock
            code={nodeErrorCode}
            language="bash"
            filename="powershell-error.log"
            startFrame={0}
            typingSpeed={999}
            highlightLines={[3, 4, 5]}
            fontSize={22}
          />
        )}

        {isPhase3 && (
          <ZoomCodeBlock
            code={kernelCode}
            language="bash"
            filename="kernel-architecture-audit"
            startFrame={0}
            typingSpeed={999}
            highlightLines={[2, 3, 4]}
            fontSize={22}
          />
        )}
      </div>

      {/* 3. BOTTOM ZONE: Large Punchy Takeaway */}
      <div
        style={{
          background: "rgba(10, 20, 40, 0.8)",
          border: `2px solid ${brand.red}66`,
          borderRadius: 24,
          padding: "24px 35px",
          width: "100%",
          textAlign: "center",
          boxSizing: "border-box",
          transform: `scale(${entrance})`,
          opacity: entrance,
        }}
      >
        <div style={{ fontFamily: brand.fontSans, fontSize: 32, fontWeight: 800, color: brand.cream, lineHeight: 1.35 }}>
          {isPhase1 && (
            <>Peleando con la memoria de tu laptop en lugar de programar.</>
          )}
          {isPhase2 && (
            <>Scripts de Node y paths de Linux que fallan misteriosamente en Windows.</>
          )}
          {isPhase3 && (
            <>Un kernel que <span style={{ color: brand.red, fontWeight: 900 }}>no tiene paridad real</span> con tus servidores cloud.</>
          )}
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
