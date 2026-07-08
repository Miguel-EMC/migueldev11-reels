import React, { useMemo, useRef } from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Canvas } from "@react-three/fiber";
import { brand } from "../../themes/brand";

// Timing: Hook (150) + 3 Steps (3 * 210) + CTA (180) = 960 frames total (32s @ 30fps)
export const ANIME_STYLE_TOTAL_FRAMES = 960;

const HOOK_END = 150;
const STEP1_END = 360;
const STEP2_END = 570;
const STEP3_END = 780;
const CTA_END = 960;

// Dynamic Anime CSS Effects
const animeStyles = `
@keyframes speedLines {
  0% { background-position: 0px 0px; }
  100% { background-position: 120px 120px; }
}
@keyframes halftoneMove {
  0% { background-position: 0px 0px; }
  100% { background-position: 60px 60px; }
}
@keyframes starFloat {
  0% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
  50% { transform: translateY(-20px) rotate(180deg); opacity: 0.9; }
  100% { transform: translateY(0px) rotate(360deg); opacity: 0.4; }
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 20px #FF007F55, inset 0 0 15px #FF007F22; border-color: #FF007F88; }
  50% { box-shadow: 0 0 45px #FF007FFF, inset 0 0 25px #FF007F55; border-color: #FF007FFF; }
}
@keyframes comicPop {
  0% { transform: scale(0.8) rotate(-5deg); }
  50% { transform: scale(1.1) rotate(5deg); }
  100% { transform: scale(1) rotate(-3deg); }
}
`;

// Space Invader 3D Pixel Alien Matrix (representing "Bugs / Coding")
const BUG_MATRIX = [
  [0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 1]
];

// Toon-shaded Pixel Invader alien
const PixelInvader: React.FC<{ frame: number; color: string }> = ({ frame, color }) => {
  const pixelSize = 0.15;
  const rotationY = frame * 0.025;
  const rotationX = Math.sin(frame * 0.04) * 0.2;
  const scale = 1 + Math.sin(frame * 0.07) * 0.05; // Pulse animation

  return (
    <group rotation={[rotationX, rotationY, 0]} scale={[scale, scale, scale]}>
      {BUG_MATRIX.map((row, rIdx) => 
        row.map((val, cIdx) => {
          if (val === 0) return null;
          // Center the invader around (0,0,0)
          const posX = (cIdx - 3.5) * pixelSize;
          const posY = (3.5 - rIdx) * pixelSize;
          return (
            <mesh key={`${rIdx}-${cIdx}`} position={[posX, posY, 0]}>
              <boxGeometry args={[pixelSize * 0.95, pixelSize * 0.95, pixelSize * 0.95]} />
              <meshToonMaterial color={color} />
            </mesh>
          );
        })
      )}
    </group>
  );
};

// 3D Coding Tag Arrow ("<" or ">") made of cylinders
const CodeBracket3D: React.FC<{ position: [number, number, number]; rotation: [number, number, number]; color: string }> = ({ position, rotation, color }) => {
  const thickness = 0.08;
  const length = 0.5;
  
  return (
    <group position={position} rotation={rotation}>
      {/* Top half of the arrow */}
      <mesh position={[0, 0.18, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[thickness, thickness, length, 8]} />
        <meshToonMaterial color={color} />
      </mesh>
      {/* Bottom half of the arrow */}
      <mesh position={[0, -0.18, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <cylinderGeometry args={[thickness, thickness, length, 8]} />
        <meshToonMaterial color={color} />
      </mesh>
    </group>
  );
};

interface SceneToon3DProps {
  frame: number;
  accentColor: string;
}

const SceneToon3D: React.FC<SceneToon3DProps> = ({ frame, accentColor }) => {
  // Orbiting elements details
  const orbitSpeed = 0.02;
  const radius = 2.4;

  const leftBracketAngle = frame * orbitSpeed;
  const rightBracketAngle = frame * orbitSpeed + Math.PI;

  const lx = Math.cos(leftBracketAngle) * radius;
  const lz = Math.sin(leftBracketAngle) * radius;

  const rx = Math.cos(rightBracketAngle) * radius;
  const rz = Math.sin(rightBracketAngle) * radius;

  return (
    <AbsoluteFill>
      <Canvas
        camera={{ position: [0, 0.1, 4.2], fov: 60 }}
        style={{
          position: "absolute",
          inset: 0,
          background: "transparent",
          pointerEvents: "none",
        }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[6, 10, 5]} intensity={1.6} />
        <pointLight position={[-6, -6, -6]} intensity={1.0} color={accentColor} />

        {/* Central 3D Anime Pixel Alien Monster */}
        <PixelInvader frame={frame} color={accentColor} />

        {/* Orbiting Coding Brackets ("<" and ">") */}
        <CodeBracket3D
          position={[lx, 0.3, lz]}
          rotation={[frame * 0.02, frame * 0.03, 0]}
          color="#FF007F"
        />
        <CodeBracket3D
          position={[rx, -0.3, rz]}
          rotation={[frame * 0.015, -frame * 0.02, Math.PI]}
          color={brand.green}
        />
      </Canvas>
    </AbsoluteFill>
  );
};

// --- Manga Comic Sky & Halftone Background ---

const AnimeMangaBackground: React.FC<{ frame: number; isTransitioning: boolean }> = ({ frame, isTransitioning }) => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #15082D 0%, #2E1552 60%, #4D1F6E 100%)",
        overflow: "hidden",
      }}
    >
      {/* Manga Halftone Dots pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255, 0, 127, 0.12) 22%, transparent 22%)",
          backgroundSize: "40px 40px",
          animation: "halftoneMove 8s infinite linear",
          opacity: 0.85,
        }}
      />

      {/* Floating Sparkles */}
      {Array.from({ length: 15 }).map((_, i) => {
        const x = (Math.sin(i * 47) * 0.5 + 0.5) * 100;
        const y = (Math.cos(i * 83) * 0.5 + 0.5) * 100;
        const size = (Math.sin(i * 15) * 0.5 + 0.5) * 8 + 4;
        const delay = (i % 4) * 0.9;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              width: size,
              height: size,
              backgroundColor: i % 2 === 0 ? brand.green : "#FF007F",
              borderRadius: "50%",
              boxShadow: i % 2 === 0 ? `0 0 12px ${brand.green}` : "0 0 12px #FF007F",
              animation: "starFloat 5s infinite ease-in-out",
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

      {/* Speed lines on transition */}
      {isTransitioning && (
        <AbsoluteFill
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 35px),
              repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 35px)
            `,
            backgroundSize: "180px 180px",
            animation: "speedLines 0.25s infinite linear",
            opacity: 0.7,
            zIndex: 2,
          }}
        />
      )}
    </AbsoluteFill>
  );
};

// Slanted header helper
const SlantedTitle: React.FC<{ color: string; children: React.ReactNode }> = ({ color, children }) => {
  return (
    <span
      style={{
        fontFamily: brand.fontMono,
        color: "#FFFFFF",
        backgroundColor: color,
        padding: "5px 22px",
        display: "inline-block",
        transform: "skewX(-10deg)",
        fontWeight: 950,
        boxShadow: `6px 6px 0px #000000`,
        margin: "5px 8px",
        textTransform: "uppercase",
        border: "3px solid #000000",
      }}
    >
      {children}
    </span>
  );
};

const HighlightText: React.FC<{ color: string; children: React.ReactNode }> = ({ color, children }) => {
  return (
    <span
      style={{
        fontFamily: brand.fontMono,
        color,
        fontWeight: 950,
        textShadow: `0 0 12px ${color}, 0 0 30px ${color}55`,
      }}
    >
      {children}
    </span>
  );
};

// Onomatopoeia Comic bubble for manga vibe
const OnomatopoeiaBubble: React.FC<{ text: string; color: string; position: { top?: number; bottom?: number; left?: number; right?: number } }> = ({ text, color, position }) => {
  return (
    <div
      style={{
        position: "absolute",
        ...position,
        backgroundColor: color,
        border: "3px solid #000000",
        padding: "8px 20px",
        fontFamily: brand.fontMono,
        fontSize: 22,
        fontWeight: 900,
        color: "#FFFFFF",
        boxShadow: "5px 5px 0px #000000",
        transform: "rotate(-8deg) skewX(-5deg)",
        zIndex: 50,
        animation: "comicPop 1.5s infinite ease-in-out",
      }}
    >
      {text}
    </div>
  );
};

export const AnimeStyleVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Timing breakdown
  let slideIndex = 0;
  let startFrame = 0;
  let duration = 150;

  if (frame < HOOK_END) {
    slideIndex = 0;
    startFrame = 0;
    duration = HOOK_END;
  } else if (frame < STEP1_END) {
    slideIndex = 1;
    startFrame = HOOK_END;
    duration = STEP1_END - HOOK_END;
  } else if (frame < STEP2_END) {
    slideIndex = 2;
    startFrame = STEP1_END;
    duration = STEP2_END - STEP1_END;
  } else if (frame < STEP3_END) {
    slideIndex = 3;
    startFrame = STEP2_END;
    duration = STEP3_END - STEP2_END;
  } else {
    slideIndex = 4;
    startFrame = STEP3_END;
    duration = CTA_END - STEP3_END;
  }

  const relativeFrame = frame - startFrame;

  // Spring entrance for manga boards
  const cardEntrance = spring({
    frame: relativeFrame,
    fps,
    config: { damping: 9, stiffness: 105 }, // Very snappy manga pop
  });

  const isTransitioning = relativeFrame >= duration - 15;
  const exitProgress = isTransitioning ? (relativeFrame - (duration - 15)) / 15 : 0;
  const contentOpacity = interpolate(exitProgress, [0, 0.8], [1, 0]);
  const contentScale = interpolate(exitProgress, [0, 1], [1, 1.12]);

  // Accent colors
  const accentColor = useMemo(() => {
    switch (slideIndex) {
      case 0: return "#FF007F";
      case 1: return brand.green;
      case 2: return brand.cyan;
      case 3: return "#FF007F";
      default: return brand.green;
    }
  }, [slideIndex]);

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <style dangerouslySetInnerHTML={{ __html: animeStyles }} />

      {/* Manga Halftone & Speed Lines Background */}
      <AnimeMangaBackground frame={frame} isTransitioning={isTransitioning} />

      {/* 3D WebGL Anime Invader & Coding Tags Layer */}
      <SceneToon3D frame={frame} accentColor={accentColor} />

      {/* Comic Book Thick Outer Border */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "22px solid #080314",
          pointerEvents: "none",
          zIndex: 8,
          boxShadow: "inset 0 0 50px rgba(0,0,0,0.9)",
        }}
      />

      {/* Comic Onomatopoeias popping up on beats */}
      {slideIndex === 0 && frame >= 40 && (
        <OnomatopoeiaBubble text="CODE!" color="#FF007F" position={{ top: 220, left: 80 }} />
      )}
      {slideIndex === 1 && relativeFrame >= 30 && (
        <OnomatopoeiaBubble text="SHIELD!" color={brand.green} position={{ top: 200, right: 90 }} />
      )}
      {slideIndex === 2 && relativeFrame >= 30 && (
        <OnomatopoeiaBubble text="SLASH!" color={brand.cyan} position={{ bottom: 260, left: 80 }} />
      )}
      {slideIndex === 3 && relativeFrame >= 30 && (
        <OnomatopoeiaBubble text="RELOAD!" color="#FF007F" position={{ top: 180, left: 100 }} />
      )}

      {/* Typography Overlay Card */}
      <AbsoluteFill
        style={{
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 75px",
          textAlign: "center",
          opacity: contentOpacity,
          transform: `scale(${contentScale})`,
        }}
      >
        <div style={{ transform: `scale(${cardEntrance})`, width: "100%" }}>
          {slideIndex === 0 && (
            <div
              style={{
                background: "rgba(8, 3, 20, 0.88)",
                border: "5px solid #000000",
                borderRadius: 28,
                padding: "65px 35px",
                boxShadow: "12px 12px 0px #000000",
                animation: "pulseGlow 3s infinite ease-in-out",
                maxWidth: 900,
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  fontFamily: brand.fontMono,
                  fontSize: 24,
                  fontWeight: 900,
                  color: "#FF007F",
                  letterSpacing: 6,
                  marginBottom: 30,
                  textTransform: "uppercase",
                  textShadow: "0 0 10px #FF007F",
                }}
              >
                [ DEV INSTINCT ]
              </div>
              <h1
                style={{
                  fontFamily: brand.fontSans,
                  fontSize: 70,
                  fontWeight: 950,
                  color: brand.cream,
                  lineHeight: 1.25,
                  letterSpacing: "-1.5px",
                  margin: 0,
                }}
              >
                Programar en modo <SlantedTitle color="#FF007F">ULTRA INSTINTO</SlantedTitle> ⚡️🔥
              </h1>
              <div
                style={{
                  marginTop: 45,
                  fontFamily: brand.fontMono,
                  fontSize: 24,
                  fontWeight: 800,
                  color: brand.cream,
                }}
              >
                ¿Estás listo? Desliza →
              </div>
            </div>
          )}

          {slideIndex === 1 && (
            <div
              style={{
                background: "rgba(8, 3, 20, 0.88)",
                border: "5px solid #000000",
                borderRadius: 28,
                padding: "60px 45px",
                boxShadow: `12px 12px 0px ${brand.green}`,
                textAlign: "left",
                maxWidth: 900,
                margin: "0 auto",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: 30 }}>
                <span
                  style={{
                    fontFamily: brand.fontMono,
                    fontSize: 22,
                    fontWeight: 900,
                    color: "#000000",
                    backgroundColor: brand.green,
                    padding: "6px 16px",
                    borderRadius: 8,
                    marginRight: 20,
                    border: "2px solid #000000",
                  }}
                >
                  FASE 01
                </span>
                <span style={{ fontFamily: brand.fontMono, fontSize: 24, color: brand.green, fontWeight: 700 }}>FOCUS SHIELD</span>
              </div>
              <h2
                style={{
                  fontFamily: brand.fontSans,
                  fontSize: 56,
                  fontWeight: 900,
                  color: brand.cream,
                  margin: "0 0 25px 0",
                  lineHeight: 1.2,
                }}
              >
                Cero Distracciones
              </h2>
              <p
                style={{
                  fontFamily: brand.fontMono,
                  fontSize: 28,
                  color: brand.cream,
                  lineHeight: 1.55,
                  margin: 0,
                  opacity: 0.95,
                }}
              >
                Cierra redes sociales, apaga notificaciones y activa música lofi. Tu cerebro entra en estado de flujo completo, acelerando tu lógica al <HighlightText color={brand.green}>200% de capacidad</HighlightText>.
              </p>
            </div>
          )}

          {slideIndex === 2 && (
            <div
              style={{
                background: "rgba(8, 3, 20, 0.88)",
                border: "5px solid #000000",
                borderRadius: 28,
                padding: "60px 45px",
                boxShadow: `12px 12px 0px ${brand.cyan}`,
                textAlign: "left",
                maxWidth: 900,
                margin: "0 auto",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: 30 }}>
                <span
                  style={{
                    fontFamily: brand.fontMono,
                    fontSize: 22,
                    fontWeight: 900,
                    color: "#000000",
                    backgroundColor: brand.cyan,
                    padding: "6px 16px",
                    borderRadius: 8,
                    marginRight: 20,
                    border: "2px solid #000000",
                  }}
                >
                  FASE 02
                </span>
                <span style={{ fontFamily: brand.fontMono, fontSize: 24, color: brand.cyan, fontWeight: 700 }}>DIVIDE & CONQUER</span>
              </div>
              <h2
                style={{
                  fontFamily: brand.fontSans,
                  fontSize: 56,
                  fontWeight: 900,
                  color: brand.cream,
                  margin: "0 0 25px 0",
                  lineHeight: 1.2,
                }}
              >
                Divide el Monstruo
              </h2>
              <p
                style={{
                  fontFamily: brand.fontMono,
                  fontSize: 28,
                  color: brand.cream,
                  lineHeight: 1.55,
                  margin: 0,
                  opacity: 0.95,
                }}
              >
                No intentes resolver un bug gigante de un golpe. <HighlightText color={brand.cyan}>Pártelo en pequeños bloques aislados</HighlightText> y pruébalos uno a uno. Así atacan los verdaderos héroes del código.
              </p>
            </div>
          )}

          {slideIndex === 3 && (
            <div
              style={{
                background: "rgba(8, 3, 20, 0.88)",
                border: "5px solid #000000",
                borderRadius: 28,
                padding: "60px 45px",
                boxShadow: "12px 12px 0px #FF007F",
                textAlign: "left",
                maxWidth: 900,
                margin: "0 auto",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: 30 }}>
                <span
                  style={{
                    fontFamily: brand.fontMono,
                    fontSize: 22,
                    fontWeight: 900,
                    color: "#FFFFFF",
                    backgroundColor: "#FF007F",
                    padding: "6px 16px",
                    borderRadius: 8,
                    marginRight: 20,
                    border: "2px solid #000000",
                  }}
                >
                  FASE 03
                </span>
                <span style={{ fontFamily: brand.fontMono, fontSize: 24, color: "#FF007F", fontWeight: 700 }}>RECOVERY STATE</span>
              </div>
              <h2
                style={{
                  fontFamily: brand.fontSans,
                  fontSize: 56,
                  fontWeight: 900,
                  color: brand.cream,
                  margin: "0 0 25px 0",
                  lineHeight: 1.2,
                }}
              >
                Descanso Táctico
              </h2>
              <p
                style={{
                  fontFamily: brand.fontMono,
                  fontSize: 28,
                  color: brand.cream,
                  lineHeight: 1.55,
                  margin: 0,
                  opacity: 0.95,
                }}
              >
                Incluso Goku necesita descansar. Levántate de la silla cada hora. Tus <HighlightText color="#FF007F">mejores ideas e integraciones</HighlightText> surgirán cuando estés lejos de la pantalla.
              </p>
            </div>
          )}

          {slideIndex === 4 && (
            <div
              style={{
                background: "rgba(8, 3, 20, 0.9)",
                border: "5px solid #000000",
                borderRadius: 28,
                padding: "50px 35px",
                boxShadow: "12px 12px 0px #000000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: 900,
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  fontFamily: brand.fontMono,
                  fontSize: 24,
                  fontWeight: 900,
                  color: brand.green,
                  letterSpacing: 4,
                  marginBottom: 20,
                  textShadow: "0 0 8px rgba(0, 255, 65, 0.4)",
                }}
              >
                {brand.handle}
              </div>
              <h2
                style={{
                  fontFamily: brand.fontSans,
                  fontSize: 56,
                  fontWeight: 950,
                  color: brand.cream,
                  margin: "0 0 35px 0",
                  lineHeight: 1.25,
                }}
              >
                ¿Cuál es tu nivel de Ki programando hoy? 🔋⚡️
              </h2>
              <p
                style={{
                  fontFamily: brand.fontMono,
                  fontSize: 26,
                  fontWeight: 800,
                  color: "#FF007F",
                  textShadow: "0 0 10px #FF007F",
                  margin: 0,
                }}
              >
                👇 COMENTA TU NIVEL ABAJO 👇
              </p>
            </div>
          )}
        </div>
      </AbsoluteFill>

      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          bottom: 35,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          fontFamily: brand.fontMono,
          fontSize: 26,
          fontWeight: 800,
          color: brand.cream,
          opacity: 0.8,
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        {brand.handle}
      </div>
    </AbsoluteFill>
  );
};
