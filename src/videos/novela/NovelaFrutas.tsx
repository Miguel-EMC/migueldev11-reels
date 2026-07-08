import React, { useMemo, useRef } from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Canvas } from "@react-three/fiber";
import { brand } from "../../themes/brand";

export const NOVELA_TOTAL_FRAMES = 690; // Act 1 (180) + Act 2 (180) + Act 3 (180) + CTA (150)

// CSS styles for dramatic telenovela effects
const dramaStyles = `
@keyframes dramaHeart {
  0% { transform: translateY(0px) scale(0.8); opacity: 0; }
  50% { opacity: 0.9; }
  100% { transform: translateY(-120px) scale(1.2); opacity: 0; }
}
@keyframes flashAlert {
  0%, 100% { background-color: rgba(255, 0, 0, 0); }
  50% { background-color: rgba(255, 0, 0, 0.25); }
}
@keyframes shakeScreen {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  10% { transform: translate(-8px, -5px) rotate(-1deg); }
  30% { transform: translate(6px, 4px) rotate(1deg); }
  50% { transform: translate(-7px, 6px) rotate(-1.5deg); }
  70% { transform: translate(5px, -4px) rotate(1deg); }
  90% { transform: translate(-3px, 3px) rotate(-0.5deg); }
}
@keyframes popDrama {
  0% { transform: scale(0) rotate(-15deg); opacity: 0; }
  70% { transform: scale(1.15) rotate(5deg); opacity: 1; }
  100% { transform: scale(1) rotate(-5deg); opacity: 1; }
}
@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}
`;

// Helper for generating cute 3D eyes on fruits
const CuteEyes: React.FC<{
  position: [number, number, number];
  separation?: number;
  eyeSize?: number;
  pupilSize?: number;
  closed?: boolean;
  angry?: boolean;
}> = ({ position, separation = 0.25, eyeSize = 0.1, pupilSize = 0.05, closed = false, angry = false }) => {
  const [x, y, z] = position;
  return (
    <group>
      {/* Left Eye */}
      <group position={[x - separation / 2, y, z]}>
        {closed ? (
          // Closed eye line
          <mesh rotation={[0, 0, 0]}>
            <boxGeometry args={[eyeSize * 1.5, 0.02, 0.02]} />
            <meshBasicMaterial color="#000" />
          </mesh>
        ) : (
          <group>
            {/* Sclera (White part) */}
            <mesh>
              <sphereGeometry args={[eyeSize, 16, 16]} />
              <meshBasicMaterial color="#FFF" />
            </mesh>
            {/* Pupil */}
            <mesh position={[0, 0, eyeSize * 0.7]}>
              <sphereGeometry args={[pupilSize, 8, 8]} />
              <meshBasicMaterial color="#000" />
            </mesh>
            {/* Glint (Specularity) */}
            <mesh position={[pupilSize * 0.4, pupilSize * 0.4, eyeSize * 0.75]}>
              <sphereGeometry args={[pupilSize * 0.3, 8, 8]} />
              <meshBasicMaterial color="#FFF" />
            </mesh>
            {angry && (
              // Eyebrow
              <mesh position={[0, eyeSize * 1.2, eyeSize * 0.3]} rotation={[0, 0, -Math.PI / 8]}>
                <boxGeometry args={[eyeSize * 1.6, 0.025, 0.025]} />
                <meshBasicMaterial color="#000" />
              </mesh>
            )}
          </group>
        )}
      </group>

      {/* Right Eye */}
      <group position={[x + separation / 2, y, z]}>
        {closed ? (
          <mesh rotation={[0, 0, 0]}>
            <boxGeometry args={[eyeSize * 1.5, 0.02, 0.02]} />
            <meshBasicMaterial color="#000" />
          </mesh>
        ) : (
          <group>
            {/* Sclera */}
            <mesh>
              <sphereGeometry args={[eyeSize, 16, 16]} />
              <meshBasicMaterial color="#FFF" />
            </mesh>
            {/* Pupil */}
            <mesh position={[0, 0, eyeSize * 0.7]}>
              <sphereGeometry args={[pupilSize, 8, 8]} />
              <meshBasicMaterial color="#000" />
            </mesh>
            {/* Glint */}
            <mesh position={[pupilSize * 0.4, pupilSize * 0.4, eyeSize * 0.75]}>
              <sphereGeometry args={[pupilSize * 0.3, 8, 8]} />
              <meshBasicMaterial color="#FFF" />
            </mesh>
            {angry && (
              // Eyebrow
              <mesh position={[0, eyeSize * 1.2, eyeSize * 0.3]} rotation={[0, 0, Math.PI / 8]}>
                <boxGeometry args={[eyeSize * 1.6, 0.025, 0.025]} />
                <meshBasicMaterial color="#000" />
              </mesh>
            )}
          </group>
        )}
      </group>
    </group>
  );
};

// 3D Apple (Manzana María)
const AppleCharacter: React.FC<{
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speaking: boolean;
  crying?: boolean;
}> = ({ position, rotation, scale, speaking, crying = false }) => {
  const meshRef = useRef(null);

  // Dynamic speaking mouth scale
  const mouthScaleY = speaking ? 1.4 + Math.sin(Date.now() * 0.05) * 0.8 : 0.2;

  return (
    <group position={position} rotation={rotation} scale={[scale, scale, scale]}>
      {/* Red Body */}
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="#FF2B4C" roughness={0.15} metalness={0.1} />
      </mesh>

      {/* Stem */}
      <mesh position={[0, 0.75, 0]} rotation={[0, 0, -0.15]}>
        <cylinderGeometry args={[0.04, 0.05, 0.3, 8]} />
        <meshStandardMaterial color="#5C3A21" roughness={0.8} />
      </mesh>

      {/* Green Leaf */}
      <mesh position={[0.15, 0.85, 0]} rotation={[0.4, 0, -0.6]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color="#00FF41" roughness={0.5} />
      </mesh>

      {/* Cheeks (Blush) */}
      <mesh position={[-0.32, -0.05, 0.58]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="#FF7EA5" opacity={0.6} transparent />
      </mesh>
      <mesh position={[0.32, -0.05, 0.58]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="#FF7EA5" opacity={0.6} transparent />
      </mesh>

      {/* Eyes */}
      <CuteEyes position={[0, 0.12, 0.62]} eyeSize={0.095} pupilSize={0.05} />

      {/* Mouth */}
      <mesh position={[0, -0.12, 0.64]} scale={[1, mouthScaleY, 1]}>
        {speaking ? (
          <torusGeometry args={[0.07, 0.02, 8, 24]} />
        ) : (
          <boxGeometry args={[0.08, 0.015, 0.02]} />
        )}
        <meshBasicMaterial color="#000" />
      </mesh>

      {/* Tears if crying */}
      {crying && (
        <group>
          <mesh position={[-0.15, -0.1, 0.66]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color="#22D3EE" opacity={0.8} transparent />
          </mesh>
          <mesh position={[0.15, -0.1, 0.66]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color="#22D3EE" opacity={0.8} transparent />
          </mesh>
        </group>
      )}
    </group>
  );
};

// 3D Banana (Plátano Pedro)
const BananaCharacter: React.FC<{
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speaking: boolean;
}> = ({ position, rotation, scale, speaking }) => {
  // Banana built using a curved segment approach (low poly stylish)
  const mouthScaleY = speaking ? 1.4 + Math.sin(Date.now() * 0.04) * 0.8 : 0.2;

  return (
    <group position={position} rotation={rotation} scale={[scale, scale, scale]}>
      {/* Main curved yellow trunk */}
      {/* Lower segment */}
      <mesh position={[-0.15, -0.4, 0]} rotation={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.18, 0.1, 0.5, 8]} />
        <meshStandardMaterial color="#FFD11A" roughness={0.2} />
      </mesh>

      {/* Main mid body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.18, 0.6, 8]} />
        <meshStandardMaterial color="#FFD11A" roughness={0.2} />
      </mesh>

      {/* Upper segment */}
      <mesh position={[0.12, 0.4, 0]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.18, 0.2, 0.45, 8]} />
        <meshStandardMaterial color="#FFD11A" roughness={0.2} />
      </mesh>

      {/* Stem top */}
      <mesh position={[0.26, 0.7, 0]} rotation={[0, 0, 0.45]}>
        <cylinderGeometry args={[0.08, 0.12, 0.2, 8]} />
        <meshStandardMaterial color="#5C4D1A" roughness={0.9} />
      </mesh>

      {/* Stem base (bottom tip) */}
      <mesh position={[-0.24, -0.7, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.05, 0.08, 0.18, 8]} />
        <meshStandardMaterial color="#3D3008" roughness={0.95} />
      </mesh>

      {/* Eyes on middle segment */}
      <CuteEyes position={[0, 0.1, 0.18]} eyeSize={0.075} pupilSize={0.04} />

      {/* Mouth */}
      <mesh position={[0, -0.06, 0.19]} scale={[1, mouthScaleY, 1]}>
        {speaking ? (
          <torusGeometry args={[0.05, 0.015, 8, 24]} />
        ) : (
          <boxGeometry args={[0.06, 0.012, 0.02]} />
        )}
        <meshBasicMaterial color="#000" />
      </mesh>
    </group>
  );
};

// 3D Strawberry (Fresa Fernanda - The Villain)
const StrawberryCharacter: React.FC<{
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speaking: boolean;
}> = ({ position, rotation, scale, speaking }) => {
  const mouthScaleY = speaking ? 1.4 + Math.sin(Date.now() * 0.055) * 0.8 : 0.2;

  // Let's generate a list of seed offsets
  const seeds = useMemo(() => {
    const list: [number, number, number][] = [];
    // Distribute around cone
    for (let i = 0; i < 20; i++) {
      const theta = (i * 2.4) % (Math.PI * 2);
      const y = -0.4 + (i * 0.045);
      const radius = 0.38 * (1 - y); // smaller at bottom
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      list.push([x, y + 0.15, z]);
    }
    return list;
  }, []);

  return (
    <group position={position} rotation={rotation} scale={[scale, scale, scale]}>
      {/* Red Strawberry Body (Inverted cone) */}
      <mesh rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.5, 1.1, 16]} />
        <meshStandardMaterial color="#E11D48" roughness={0.3} />
      </mesh>

      {/* Green Leafs (Cap) */}
      <group position={[0, 0.55, 0]}>
        {Array.from({ length: 5 }).map((_, idx) => {
          const rotZ = (idx * Math.PI * 2) / 5;
          return (
            <mesh key={idx} rotation={[0.4, 0, rotZ]}>
              <coneGeometry args={[0.15, 0.3, 4]} />
              <meshStandardMaterial color="#16A34A" roughness={0.7} />
            </mesh>
          );
        })}
      </group>

      {/* Strawberry Seeds */}
      {seeds.map(([sx, sy, sz], idx) => (
        <mesh key={idx} position={[sx, sy, sz]}>
          <sphereGeometry args={[0.02, 6, 6]} />
          <meshBasicMaterial color="#FDE047" />
        </mesh>
      ))}

      {/* Villainous Angry Eyes */}
      <CuteEyes position={[0, 0.1, 0.42]} separation={0.2} eyeSize={0.08} pupilSize={0.045} angry={true} />

      {/* Smirk Mouth */}
      <group position={[0.04, -0.14, 0.42]} rotation={[0, 0, -0.15]} scale={[1, mouthScaleY, 1]}>
        {speaking ? (
          <torusGeometry args={[0.045, 0.015, 8, 24]} />
        ) : (
          <boxGeometry args={[0.07, 0.012, 0.02]} />
        )}
        <meshBasicMaterial color="#000" />
      </group>
    </group>
  );
};

// Blender Blade (Rotating Danger)
const BlenderBlade: React.FC<{ frame: number; active: boolean }> = ({ frame, active }) => {
  const rotY = active ? frame * 0.8 : 0;
  if (!active) return null;

  return (
    <group position={[0, 1.2, 0]} rotation={[0, rotY, 0]}>
      {/* Blade metal axis */}
      <mesh>
        <cylinderGeometry args={[0.08, 0.08, 0.15, 8]} />
        <meshStandardMaterial color="#94A3B8" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Dual Blades */}
      <mesh position={[0.5, 0, 0]}>
        <boxGeometry args={[1.0, 0.02, 0.15]} />
        <meshStandardMaterial color="#CBD5E1" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.5, 0, 0]}>
        <boxGeometry args={[1.0, 0.02, 0.15]} />
        <meshStandardMaterial color="#CBD5E1" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};

// Central 3D Canvas Scene
interface SceneNovela3DProps {
  frame: number;
  slideIndex: number;
  relativeFrame: number;
}

const SceneNovela3D: React.FC<SceneNovela3DProps> = ({ frame, slideIndex, relativeFrame }) => {
  const { fps } = useVideoConfig();

  // Blender activation in Act 3
  const isBlenderActive = slideIndex === 2;

  // Crying status for Apple in Act 3 and 4
  const isAppleCrying = slideIndex >= 2;

  // Cameras path & Shake calculation
  let cameraPos: [number, number, number] = [0, 0.3, 4.3];
  let cameraLookAt: [number, number, number] = [0, 0, 0];

  // Act-specific camera zooms and movements
  if (slideIndex === 0) {
    // Act 1: Apple & Banana. Slow camera pan from left to right.
    const progress = relativeFrame / 180;
    cameraPos = [-0.4 + progress * 0.8, 0.2, 3.8];
  } else if (slideIndex === 1) {
    // Act 2: Strawberry enters. Camera zooms back to fit the three.
    cameraPos = [0, 0.3, 4.4];
  } else if (slideIndex === 2) {
    // Act 3: Blender threat. Close-up in horror. Shaking.
    const shakeFreq = relativeFrame * 1.5;
    const sx = Math.sin(shakeFreq) * 0.08;
    const sy = Math.cos(shakeFreq * 1.2) * 0.08;
    const sz = Math.sin(shakeFreq * 0.7) * 0.08;
    cameraPos = [sx, 0.4 + sy, 3.3 + sz]; // Zoomed in closer and shaking!
  } else {
    // CTA: Static zoom out wide view.
    cameraPos = [0, 0.2, 4.8];
  }

  // Fruit Positioning and Scale animations
  const appleScale = spring({
    frame: frame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  // Bobbing animations
  const mariaBob = Math.sin(frame * 0.08) * 0.04;
  const pedroBob = Math.cos(frame * 0.08) * 0.04;
  const fernandaBob = Math.sin(frame * 0.12) * 0.05;

  // Speaking state flags
  const isMariaSpeaking =
    (slideIndex === 0 && relativeFrame >= 30 && relativeFrame < 100) ||
    (slideIndex === 1 && relativeFrame >= 270) ||
    (slideIndex === 2 && relativeFrame >= 90);

  const isPedroSpeaking =
    (slideIndex === 0 && relativeFrame >= 100) ||
    (slideIndex === 2 && relativeFrame < 90);

  const isFernandaSpeaking =
    slideIndex === 1 && relativeFrame >= 60 && relativeFrame < 270;

  // Strawberry entrance animation in Act 2
  // Enters sliding from the bottom/front
  const fernandaEntrance = spring({
    frame: slideIndex === 1 ? relativeFrame : slideIndex > 1 ? 180 : 0,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const fernandaY = interpolate(fernandaEntrance, [0, 1], [-3.0, -0.4]);
  const fernandaZ = interpolate(fernandaEntrance, [0, 1], [3.0, 1.2]);
  const fernandaScale = interpolate(fernandaEntrance, [0, 1], [0.0, 1.05]);

  return (
    <AbsoluteFill>
      <Canvas
        camera={{ position: cameraPos, fov: 50 }}
        style={{
          position: "absolute",
          inset: 0,
          background: "transparent",
          pointerEvents: "none",
        }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.65} />
        <pointLight position={[10, 8, 10]} intensity={1.5} color={brand.cream} />
        {/* Spot light directly on characters */}
        <spotLight position={[0, 6, 2]} intensity={2.0} angle={0.6} penumbra={0.5} />
        {/* Villain lighting (magenta) */}
        {slideIndex === 1 && (
          <pointLight position={[0, 0, 2]} intensity={1.5} color="#FF007F" />
        )}
        {/* Emergency/Blender flashing red light */}
        {isBlenderActive && (
          <pointLight
            position={[0, 2, 2]}
            intensity={2.5 + Math.sin(frame * 0.4) * 2.0}
            color="#FF0000"
          />
        )}

        {/* Counter Table */}
        <mesh position={[0, -1.8, 0]} rotation={[0.0, 0, 0]}>
          <boxGeometry args={[12, 1.0, 8]} />
          <meshStandardMaterial color="#1E293B" roughness={0.75} metalness={0.1} />
        </mesh>

        {/* Apple (María) */}
        <AppleCharacter
          position={[-1.2, -0.6 + mariaBob, 0]}
          rotation={[0.05, 0.4, 0]}
          scale={0.9 * appleScale}
          speaking={isMariaSpeaking}
          crying={isAppleCrying}
        />

        {/* Banana (Pedro) */}
        <BananaCharacter
          position={[1.2, -0.5 + pedroBob, 0]}
          rotation={[0.05, -0.4, -0.1]}
          scale={0.88 * appleScale}
          speaking={isPedroSpeaking}
        />

        {/* Strawberry (Fernanda) - slides in during Act 2 */}
        {slideIndex >= 1 && (
          <StrawberryCharacter
            position={[0, fernandaY + fernandaBob, fernandaZ]}
            rotation={[-0.1, 0, 0]}
            scale={fernandaScale}
            speaking={isFernandaSpeaking}
          />
        )}

        {/* Giant Blender threatening blade descending in Act 3 */}
        <BlenderBlade frame={frame} active={isBlenderActive} />
      </Canvas>
    </AbsoluteFill>
  );
};

// Main Visual Component
export const NovelaFrutas: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Split into 4 Acts / Scenes
  const ACT_DURATION = 180;

  let slideIndex = 0;
  let startFrame = 0;
  let duration = ACT_DURATION;

  if (frame < ACT_DURATION) {
    slideIndex = 0;
    startFrame = 0;
    duration = ACT_DURATION;
  } else if (frame < ACT_DURATION * 2) {
    slideIndex = 1;
    startFrame = ACT_DURATION;
    duration = ACT_DURATION;
  } else if (frame < ACT_DURATION * 3) {
    slideIndex = 2;
    startFrame = ACT_DURATION * 2;
    duration = ACT_DURATION;
  } else {
    slideIndex = 3;
    startFrame = ACT_DURATION * 3;
    duration = NOVELA_TOTAL_FRAMES - ACT_DURATION * 3;
  }

  const relativeFrame = frame - startFrame;

  // Scene exit fade
  const isExiting = relativeFrame >= duration - 12;
  const exitProgress = isExiting ? (relativeFrame - (duration - 12)) / 12 : 0;
  const opacity = interpolate(exitProgress, [0, 0.8], [1, 0]);
  const scale = interpolate(exitProgress, [0, 1], [1, 0.94]);

  // Spring entrance for Text overlays
  const textEntrance = spring({
    frame: relativeFrame,
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  // Subtitle definitions
  const subtitles = useMemo(() => {
    return [
      // ACT 1: El Secreto
      {
        start: 0,
        end: 30,
        speaker: "",
        text: "FRUTAS DE PASIÓN — CAPÍTULO 1",
      },
      {
        start: 30,
        end: 110,
        speaker: "MANZANA MARÍA",
        text: "¡Pedro... mi código genético ha sido editado con Inteligencia Artificial!",
      },
      {
        start: 110,
        end: 180,
        speaker: "PLÁTANO PEDRO",
        text: "¡¿QUÉ?! ¡¿Eres transgénica e inteligente?! ¡Dime que no es verdad!",
      },
      // ACT 2: La Traición
      {
        start: 180,
        end: 220,
        speaker: "FRESA FERNANDA",
        text: "¡JAJAJA! ¡Qué patético bowl de frutas!",
      },
      {
        start: 220,
        end: 290,
        speaker: "FRESA FERNANDA",
        text: "¡Pedro, ella no te ama! ¡Usa un algoritmo de Redes Neuronales para predecir tus abrazos!",
      },
      {
        start: 290,
        end: 360,
        speaker: "MANZANA MARÍA",
        text: "¡Mientes! ¡Mi amor por ti es orgánico, 100% libre de pesticidas y TensorFlow!",
      },
      // ACT 3: El Destino
      {
        start: 360,
        end: 440,
        speaker: "PLÁTANO PEDRO",
        text: "¡Oh no! ¡El humano ha encendido el script de la licuadora! ¡Nos triturará!",
      },
      {
        start: 440,
        end: 540,
        speaker: "MANZANA MARÍA",
        text: "¡Pedro, abrázame! ¡Fusionemos nuestros datos en el dataset eterno del cosmos!",
      },
    ];
  }, []);

  // Determine active subtitle
  const activeSubtitle = subtitles.find(
    (sub) => frame >= sub.start && frame < sub.end
  );

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle, #0F172A 0%, #020617 100%)",
        overflow: "hidden",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: dramaStyles }} />

      {/* Cyber grid floor */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: "perspective(500px) rotateX(60deg) translateY(-100px)",
          opacity: 0.7,
          zIndex: 1,
        }}
      />

      {/* CRT Scanline Overlay */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "4px",
          backgroundColor: "rgba(34, 211, 238, 0.15)",
          boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)",
          top: 0,
          animation: "scanline 6s infinite linear",
          zIndex: 15,
        }}
      />

      {/* Drama Telenovela Banners */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: brand.fontMono,
            color: "#FF2B4C",
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: 6,
            textTransform: "uppercase",
            textShadow: "0 0 12px #FF2B4Caa",
            border: "2px solid #FF2B4C",
            padding: "8px 24px",
            backgroundColor: "rgba(255, 43, 76, 0.08)",
            borderRadius: 50,
          }}
        >
          {slideIndex === 2 ? "⚠️ ¡ALERTA LICUADORA! ⚠️" : "📺 TELENOVELA DE FRUTAS 📺"}
        </div>
      </div>

      {/* Floating Hearts in Act 1 */}
      {slideIndex === 0 &&
        Array.from({ length: 8 }).map((_, i) => {
          const delay = i * 1.2;
          const left = 35 + (i * 8);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${left}%`,
                bottom: "35%",
                fontSize: 36,
                color: "#FF2B4C",
                textShadow: "0 0 10px #FF2B4C",
                animation: "dramaHeart 4s infinite linear",
                animationDelay: `${delay}s`,
                zIndex: 4,
                pointerEvents: "none",
              }}
            >
              ❤️
            </div>
          );
        })}

      {/* Emergency flashing overlay in Act 3 */}
      {slideIndex === 2 && (
        <AbsoluteFill
          style={{
            animation: "flashAlert 1.2s infinite ease-in-out",
            zIndex: 3,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Main 3D Scene */}
      <AbsoluteFill
        style={{
          opacity,
          transform: `scale(${scale})`,
          zIndex: 2,
        }}
      >
        <SceneNovela3D
          frame={frame}
          slideIndex={slideIndex}
          relativeFrame={relativeFrame}
        />
      </AbsoluteFill>

      {/* Floating Sparkles for cyber look */}
      {Array.from({ length: 15 }).map((_, i) => {
        const x = (Math.sin(i * 37) * 0.5 + 0.5) * 100;
        const y = (Math.cos(i * 61) * 0.5 + 0.5) * 100;
        const size = (Math.sin(i * 7) * 0.5 + 0.5) * 6 + 2;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              width: size,
              height: size,
              backgroundColor: i % 2 === 0 ? brand.green : brand.cyan,
              borderRadius: "50%",
              boxShadow: i % 2 === 0 ? `0 0 8px ${brand.green}` : `0 0 8px ${brand.cyan}`,
              opacity: 0.35,
              zIndex: 3,
            }}
          />
        );
      })}

      {/* Interactive Subtitles / Dialouge overlay */}
      {slideIndex < 3 && activeSubtitle && (
        <div
          style={{
            position: "absolute",
            bottom: 120,
            left: "5%",
            right: "5%",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {activeSubtitle.speaker && (
            <span
              style={{
                fontFamily: brand.fontMono,
                color: activeSubtitle.speaker.includes("MARÍA")
                  ? "#FF2B4C"
                  : activeSubtitle.speaker.includes("PEDRO")
                  ? "#FFD11A"
                  : "#E11D48",
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: 2,
                marginBottom: 10,
                textShadow: "0 0 8px rgba(0,0,0,0.6)",
              }}
            >
              {activeSubtitle.speaker}
            </span>
          )}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.88)",
              border: `2px solid ${
                activeSubtitle.speaker.includes("MARÍA")
                  ? "#FF2B4C"
                  : activeSubtitle.speaker.includes("PEDRO")
                  ? "#FFD11A"
                  : "#E11D48"
              }`,
              borderRadius: 20,
              padding: "24px 30px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(8px)",
              textAlign: "center",
              transform: `scale(${textEntrance})`,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                fontFamily: brand.fontSans,
                color: brand.cream,
                fontSize: 26,
                fontWeight: 700,
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              {activeSubtitle.text}
            </p>
          </div>
        </div>
      )}

      {/* Outro / Call To Action Vote (Slide 3) */}
      {slideIndex === 3 && (
        <AbsoluteFill
          style={{
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 70px",
            textAlign: "center",
            background: "rgba(2, 6, 23, 0.85)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ transform: `scale(${textEntrance})`, width: "100%" }}>
            <span
              style={{
                fontFamily: brand.fontMono,
                color: brand.green,
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: 4,
                textShadow: brand.glowGreen,
                display: "block",
                marginBottom: 10,
              }}
            >
              EL DESTINO DE LAS FRUTAS
            </span>
            <h2
              style={{
                fontFamily: brand.fontSans,
                fontSize: 54,
                fontWeight: 950,
                color: brand.cream,
                lineHeight: 1.15,
                letterSpacing: "-1.5px",
                margin: "0 0 35px 0",
              }}
            >
              ¿Cómo debería María salvar su amor?
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                width: "100%",
                maxWidth: 900,
                margin: "0 auto 35px auto",
              }}
            >
              {/* Option A */}
              <div
                style={{
                  border: "2px solid #22D3EE",
                  borderRadius: 24,
                  padding: "24px 30px",
                  background: "rgba(34, 211, 238, 0.05)",
                  textAlign: "left",
                  boxShadow: "0 4px 15px rgba(34, 211, 238, 0.15)",
                }}
              >
                <div
                  style={{
                    fontFamily: brand.fontMono,
                    color: "#22D3EE",
                    fontSize: 20,
                    fontWeight: 900,
                    marginBottom: 6,
                  }}
                >
                  OPCIÓN A
                </div>
                <div
                  style={{
                    fontFamily: brand.fontSans,
                    color: brand.cream,
                    fontSize: 24,
                    fontWeight: 700,
                  }}
                >
                  Usar IA para hackear el motor de la licuadora y apagarla.
                </div>
              </div>

              {/* Option B */}
              <div
                style={{
                  border: "2px solid #FF2B4C",
                  borderRadius: 24,
                  padding: "24px 30px",
                  background: "rgba(255, 43, 76, 0.05)",
                  textAlign: "left",
                  boxShadow: "0 4px 15px rgba(255, 43, 76, 0.15)",
                }}
              >
                <div
                  style={{
                    fontFamily: brand.fontMono,
                    color: "#FF2B4C",
                    fontSize: 20,
                    fontWeight: 900,
                    marginBottom: 6,
                  }}
                >
                  OPCIÓN B
                </div>
                <div
                  style={{
                    fontFamily: brand.fontSans,
                    color: brand.cream,
                    fontSize: 24,
                    fontWeight: 700,
                  }}
                >
                  Aceptar su destino orgánico y licuarse en un smoothie eterno.
                </div>
              </div>
            </div>

            <div
              style={{
                fontFamily: brand.fontMono,
                color: brand.green,
                fontSize: 24,
                fontWeight: 900,
                textShadow: brand.glowGreen,
                animation: "pulse 1.8s infinite ease-in-out",
              }}
            >
              💬 VOTA EN LOS COMENTARIOS ABAJO 💬
            </div>
            <div
              style={{
                fontFamily: brand.fontMono,
                color: brand.textDim,
                fontSize: 20,
                marginTop: 15,
              }}
            >
              {brand.handle}
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
