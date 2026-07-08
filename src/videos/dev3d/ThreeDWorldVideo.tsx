import React, { useMemo, useRef } from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Canvas } from "@react-three/fiber";
import { brand } from "../../themes/brand";

// Timing: Hook (150) + 3 Steps (3 * 210) + CTA (180) = 960 frames total (32s @ 30fps)
export const THREED_WORLD_TOTAL_FRAMES = 960; 

const HOOK_END = 150;
const KISS_END = 360;
const DRY_END = 570;
const YAGNI_END = 780;
const CTA_END = 960;

// --- 3D Scene Components ---

interface OrbitingCubeProps {
  frame: number;
  index: number;
  color: string;
}

const OrbitingCube: React.FC<OrbitingCubeProps> = ({ frame, index, color }) => {
  const seed = index * 45;
  const radius = useMemo(() => 2.4 + (Math.sin(seed) * 0.4), [seed]);
  const speed = useMemo(() => 0.015 + (Math.cos(seed) * 0.008), [seed]);
  const size = useMemo(() => 0.28 + (Math.abs(Math.sin(seed)) * 0.12), [seed]);

  const angle = frame * speed + seed;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle * 1.5) * 0.6;
  const z = Math.sin(angle) * radius;

  return (
    <mesh position={[x, y, z]} rotation={[frame * 0.018 + seed, frame * 0.008, 0]}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.2}
      />
    </mesh>
  );
};

interface SpinningCoreProps {
  frame: number;
  accentColor: string;
}

const SpinningCore: React.FC<SpinningCoreProps> = ({ frame, accentColor }) => {
  const rotationY = frame * 0.012;
  const rotationX = frame * 0.008;
  const scale = 1.05 + Math.sin(frame * 0.04) * 0.04;

  return (
    <mesh rotation={[rotationX, rotationY, 0]} scale={[scale, scale, scale]}>
      <torusKnotGeometry args={[0.95, 0.28, 120, 16, 2, 3]} />
      <meshStandardMaterial
        color={accentColor}
        emissive={accentColor}
        emissiveIntensity={0.7}
        roughness={0.25}
        metalness={0.7}
      />
    </mesh>
  );
};

interface Scene3DProps {
  frame: number;
  accentColor: string;
}

const Scene3D: React.FC<Scene3DProps> = ({ frame, accentColor }) => {
  const cubes = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      color: i % 2 === 0 ? brand.green : brand.orange,
    }));
  }, []);

  return (
    <AbsoluteFill>
      <Canvas
        camera={{ position: [0, 0.4, 4.8], fov: 55 }}
        style={{
          position: "absolute",
          inset: 0,
          background: "transparent",
          pointerEvents: "none",
        }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color={brand.cream} />
        <pointLight position={[-10, -10, -10]} intensity={1.0} color={accentColor} />
        
        {/* Core Torus Knot */}
        <SpinningCore frame={frame} accentColor={accentColor} />

        {/* Orbiting cubes */}
        {cubes.map((cube, idx) => (
          <OrbitingCube
            key={idx}
            frame={frame}
            index={idx}
            color={cube.color}
          />
        ))}
      </Canvas>
    </AbsoluteFill>
  );
};

// --- Typographic Overlays ---

const HighlightText: React.FC<{ color: string; children: React.ReactNode }> = ({ color, children }) => {
  return (
    <span
      style={{
        fontFamily: brand.fontMono,
        color,
        fontWeight: 950,
        textShadow: `0 0 15px ${color}, 0 0 35px ${color}66`,
      }}
    >
      {children}
    </span>
  );
};

export const ThreeDWorldVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Compute slide indexes based on customized durations
  let slideIndex = 0;
  let startFrame = 0;
  let duration = 150;

  if (frame < HOOK_END) {
    slideIndex = 0;
    startFrame = 0;
    duration = HOOK_END;
  } else if (frame < KISS_END) {
    slideIndex = 1;
    startFrame = HOOK_END;
    duration = KISS_END - HOOK_END;
  } else if (frame < DRY_END) {
    slideIndex = 2;
    startFrame = KISS_END;
    duration = DRY_END - KISS_END;
  } else if (frame < YAGNI_END) {
    slideIndex = 3;
    startFrame = DRY_END;
    duration = YAGNI_END - DRY_END;
  } else {
    slideIndex = 4;
    startFrame = YAGNI_END;
    duration = CTA_END - YAGNI_END;
  }

  const relativeFrame = frame - startFrame;

  // Entrance bounce animation
  const textEntrance = spring({
    frame: relativeFrame,
    fps,
    config: { damping: 13, stiffness: 90 },
  });

  // Slide fade out transition (last 15 frames of each slide)
  const isExiting = relativeFrame >= duration - 15;
  const exitProgress = isExiting ? (relativeFrame - (duration - 15)) / 15 : 0;
  const contentOpacity = interpolate(exitProgress, [0, 0.8], [1, 0]);
  const contentScale = interpolate(exitProgress, [0, 1], [1, 0.94]);

  // Determine core color based on active slide
  const accentColor = useMemo(() => {
    switch (slideIndex) {
      case 0: return brand.green;
      case 1: return brand.cyan;
      case 2: return brand.orange;
      case 3: return brand.green;
      default: return brand.cyan;
    }
  }, [slideIndex]);

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        background: "radial-gradient(circle at center, #0F1A30 0%, #03060F 100%)",
      }}
    >
      {/* 3D WebGL Canvas Layer (Floating on top of CSS background) */}
      <Scene3D frame={frame} accentColor={accentColor} />

      {/* Smooth Dark Vignette for cinematic focus */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 35%, rgba(3, 6, 15, 0.8) 95%)",
          pointerEvents: "none",
          zIndex: 6,
        }}
      />

      {/* TYPOGRAPHY LAYOUT CARDS */}
      <AbsoluteFill
        style={{
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 60px",
          textAlign: "center",
          opacity: contentOpacity,
          transform: `scale(${contentScale})`,
        }}
      >
        <div style={{ transform: `scale(${textEntrance})`, width: "100%" }}>
          {slideIndex === 0 && (
            <div
              style={{
                background: "rgba(10, 14, 26, 0.8)",
                backdropFilter: "blur(15px)",
                border: `2.5px solid ${brand.green}`,
                boxShadow: `0 20px 45px rgba(0, 255, 65, 0.12)`,
                borderRadius: 40,
                padding: "65px 40px",
                margin: "0 auto",
                maxWidth: 900,
              }}
            >
              <div
                style={{
                  fontFamily: brand.fontMono,
                  fontSize: 22,
                  fontWeight: 800,
                  color: brand.green,
                  letterSpacing: 4,
                  marginBottom: 25,
                }}
              >
                [ CONCEPTOS CLAVE ]
              </div>
              <h1
                style={{
                  fontFamily: brand.fontSans,
                  fontSize: 72,
                  fontWeight: 950,
                  color: brand.cream,
                  lineHeight: 1.2,
                  letterSpacing: "-2px",
                  margin: 0,
                }}
              >
                3 LEYES del código que te harán <HighlightText color={brand.green}>SENIOR</HighlightText> 🚀
              </h1>
              <div style={{ marginTop: 45, fontFamily: brand.fontMono, fontSize: 24, color: brand.textDim }}>
                desliza para ver la primera →
              </div>
            </div>
          )}

          {slideIndex === 1 && (
            <div
              style={{
                background: "rgba(10, 14, 26, 0.8)",
                backdropFilter: "blur(15px)",
                border: `2.5px solid ${brand.cyan}`,
                boxShadow: `0 20px 45px rgba(34, 211, 238, 0.12)`,
                borderRadius: 40,
                padding: "60px 50px",
                textAlign: "left",
                margin: "0 auto",
                maxWidth: 900,
              }}
            >
              <div
                style={{
                  fontFamily: brand.fontMono,
                  fontSize: 20,
                  fontWeight: 800,
                  color: brand.cyan,
                  border: `1.5px solid ${brand.cyan}`,
                  borderRadius: 20,
                  padding: "4px 16px",
                  display: "inline-block",
                  marginBottom: 30,
                }}
              >
                LEY 01
              </div>
              <h2
                style={{
                  fontFamily: brand.fontSans,
                  fontSize: 62,
                  fontWeight: 900,
                  color: brand.cream,
                  lineHeight: 1.2,
                  margin: "0 0 25px 0",
                }}
              >
                K.I.S.S.
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
                <HighlightText color={brand.cyan}>Keep It Simple, Stupid.</HighlightText> No compliques tu código con patrones de diseño avanzados antes de que sea estrictamente necesario. Simple es más mantenible.
              </p>
            </div>
          )}

          {slideIndex === 2 && (
            <div
              style={{
                background: "rgba(10, 14, 26, 0.8)",
                backdropFilter: "blur(15px)",
                border: `2.5px solid ${brand.orange}`,
                boxShadow: `0 20px 45px rgba(255, 122, 26, 0.12)`,
                borderRadius: 40,
                padding: "60px 50px",
                textAlign: "left",
                margin: "0 auto",
                maxWidth: 900,
              }}
            >
              <div
                style={{
                  fontFamily: brand.fontMono,
                  fontSize: 20,
                  fontWeight: 800,
                  color: brand.orange,
                  border: `1.5px solid ${brand.orange}`,
                  borderRadius: 20,
                  padding: "4px 16px",
                  display: "inline-block",
                  marginBottom: 30,
                }}
              >
                LEY 02
              </div>
              <h2
                style={{
                  fontFamily: brand.fontSans,
                  fontSize: 62,
                  fontWeight: 900,
                  color: brand.cream,
                  lineHeight: 1.2,
                  margin: "0 0 25px 0",
                }}
              >
                D.R.Y.
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
                <HighlightText color={brand.orange}>Don't Repeat Yourself.</HighlightText> Cada porción de lógica de negocio debe residir en un único lugar. Evita duplicados para prevenir bugs futuros al actualizar tu código.
              </p>
            </div>
          )}

          {slideIndex === 3 && (
            <div
              style={{
                background: "rgba(10, 14, 26, 0.8)",
                backdropFilter: "blur(15px)",
                border: `2.5px solid ${brand.green}`,
                boxShadow: `0 20px 45px rgba(0, 255, 65, 0.12)`,
                borderRadius: 40,
                padding: "60px 50px",
                textAlign: "left",
                margin: "0 auto",
                maxWidth: 900,
              }}
            >
              <div
                style={{
                  fontFamily: brand.fontMono,
                  fontSize: 20,
                  fontWeight: 800,
                  color: brand.green,
                  border: `1.5px solid ${brand.green}`,
                  borderRadius: 20,
                  padding: "4px 16px",
                  display: "inline-block",
                  marginBottom: 30,
                }}
              >
                LEY 03
              </div>
              <h2
                style={{
                  fontFamily: brand.fontSans,
                  fontSize: 62,
                  fontWeight: 900,
                  color: brand.cream,
                  lineHeight: 1.2,
                  margin: "0 0 25px 0",
                }}
              >
                Y.A.G.N.I.
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
                <HighlightText color={brand.green}>You Aren't Gonna Need It.</HighlightText> No construyas features o integraciones basadas en suposiciones futuras. Ahorra tiempo escribiendo solo lo que tu aplicación requiere hoy.
              </p>
            </div>
          )}

          {slideIndex === 4 && (
            <div
              style={{
                background: "rgba(10, 14, 26, 0.85)",
                backdropFilter: "blur(15px)",
                border: `3px solid ${brand.cyan}`,
                boxShadow: `0 20px 50px rgba(34, 211, 238, 0.22)`,
                borderRadius: 40,
                padding: "55px 35px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 auto",
                maxWidth: 900,
              }}
            >
              <div
                style={{
                  fontFamily: brand.fontMono,
                  fontSize: 24,
                  fontWeight: 900,
                  color: brand.cyan,
                  letterSpacing: 4,
                  marginBottom: 20,
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
                ¿Cuál ley se viola más en tus proyectos? 💬
              </h2>
              <p
                style={{
                  fontFamily: brand.fontMono,
                  fontSize: 26,
                  fontWeight: 800,
                  color: brand.orange,
                  textShadow: brand.glowOrange,
                  margin: 0,
                }}
              >
                👇 COMENTA TU RESPUESTA ABAJO 👇
              </p>
            </div>
          )}
        </div>
      </AbsoluteFill>

      {/* Safe bottom watermark */}
      <div
        style={{
          position: "absolute",
          bottom: 70,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          fontFamily: brand.fontMono,
          fontSize: 26,
          fontWeight: 700,
          color: brand.cream,
          opacity: 0.6,
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        {brand.handle}
      </div>
    </AbsoluteFill>
  );
};
