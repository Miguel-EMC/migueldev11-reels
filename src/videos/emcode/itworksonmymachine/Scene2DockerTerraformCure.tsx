import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";

export const Scene2DockerTerraformCure: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isPhase1 = frame < 165;
  const isPhase2 = frame >= 165 && frame < 300;
  const isPhase3 = frame >= 300;

  const currentFrame = isPhase1 ? frame : isPhase2 ? frame - 165 : frame - 300;
  const entrance = spring({ frame: currentFrame, fps, config: { damping: 12 } });

  const missingDepsCode = `# ❌ Dependencias Globales Fantasma:
npm list -g
├── global-package-secret@3.2.0 (Nunca agregado al package.json)
└── Build en servidor: Error: Cannot find module 'secret-lib'`;

  const runtimeMismatchCode = `# ❌ Mismatch de Versiones de Runtime:
LOCAL LAPTOP:  Node v22.4.0 (con ESM nativo)
SERVER PROD:   Node v18.12.0 LTS (Rompe con SyntaxError)
STATUS: Incompatibilidad de versión en tiempo de ejecución`;

  const envHardcodedCode = `# ❌ Variables de Entorno Quemadas:
const db = connect("postgres://localhost:5432/app_dev"); // HARDCODED!
// En producción falla al buscar 'localhost'
// Error: ECONNREFUSED 127.0.0.1:5432`;

  return (
    <EmcodeSceneWrapper categoryTag="ERRORES CLÁSICOS" gridColor={brand.red}>
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
            fontSize: 64,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          {isPhase1 && (
            <>
              Dependencias <span style={{ color: brand.red, textShadow: brand.glowRed }}>No Documentadas ⚠️</span>
            </>
          )}
          {isPhase2 && (
            <>
              Versiones Distintas de <span style={{ color: brand.orange, textShadow: brand.glowOrange }}>Node / Python 💥</span>
            </>
          )}
          {isPhase3 && (
            <>
              Variables <span style={{ color: brand.red, textShadow: brand.glowRed }}>Quemadas en Código 🛑</span>
            </>
          )}
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Responsive Code Blocks */}
      <div style={{ width: "100%", transform: `scale(${entrance})`, opacity: entrance }}>
        {isPhase1 && (
          <ZoomCodeBlock
            code={missingDepsCode}
            language="bash"
            filename="missing-dependencies.log"
            startFrame={0}
            typingSpeed={999}
            highlightLines={[2, 3]}
            fontSize={22}
          />
        )}
        {isPhase2 && (
          <ZoomCodeBlock
            code={runtimeMismatchCode}
            language="bash"
            filename="runtime-version-mismatch"
            startFrame={0}
            typingSpeed={999}
            highlightLines={[2, 3]}
            fontSize={22}
          />
        )}
        {isPhase3 && (
          <ZoomCodeBlock
            code={envHardcodedCode}
            language="typescript"
            filename="database.config.ts"
            startFrame={0}
            typingSpeed={999}
            highlightLines={[1, 3]}
            fontSize={22}
          />
        )}
      </div>

      {/* 3. BOTTOM ZONE: Takeaway Card */}
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
        <div style={{ fontFamily: brand.fontSans, fontSize: 30, fontWeight: 800, color: brand.cream, lineHeight: 1.35 }}>
          {isPhase1 && <>Librerías instaladas en tu laptop que nunca entraron al repositorio.</>}
          {isPhase2 && <>El motor de ejecución de tu computadora no es el de tus servidores.</>}
          {isPhase3 && <>Configuraciones locales quemadas que <span style={{ color: brand.red, fontWeight: 900 }}>rompen el deploy.</span></>}
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
