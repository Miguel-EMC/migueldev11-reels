import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../themes/brand";
import { Bg } from "../shared/Bg";
import { GridBackground } from "../components/GridBackground";

const STEPS = [
  { number: "01", title: "Python", desc: "La base de todo, no lo saltes 🐍" },
  { number: "02", title: "Backend + APIs", desc: "Domina FastAPI para conectar modelos ⚡" },
  { number: "03", title: "LLMs + Prompting", desc: "Aprende a hablar con los modelos de verdad 🧠" },
  { number: "04", title: "RAG", desc: "Conéctale TUS propios datos en tiempo real 📂" },
  { number: "05", title: "Agentes de IA", desc: "Crea sistemas autónomos que actúen con LangGraph 🤖" },
  { number: "06", title: "Deploy + Cloud", desc: "Docker, AWS y producción a escala ☁️" },
];

export const RoadmapSteps: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active step index (0 to 5) based on 120 frames (4s) per step
  const activeIndex = Math.min(5, Math.floor(frame / 120));

  // Horizontal progress bar spring animation
  const progressSpring = spring({
    frame: frame % 120,
    fps,
    config: { damping: 15, stiffness: 85 },
  });

  // Calculate animated progress bar width percentage
  const prevProgress = activeIndex / 6;
  const targetProgress = (activeIndex + 1) / 6;
  const animatedProgress = interpolate(progressSpring, [0, 1], [prevProgress, targetProgress]);

  // Card vertical height (150px) + spacing gap (35px) = 185px per step
  const cardHeight = 150;
  const cardGap = 35;
  const stepOffset = cardHeight + cardGap;

  // Smooth scroll position calculation
  // Transition between steps starts 10 frames before and ends 15 frames after the step boundary
  const getScrollPos = (f: number) => {
    let position = 0;
    for (let i = 1; i <= 5; i++) {
      const boundary = i * 120;
      if (f >= boundary - 10) {
        const progress = interpolate(f, [boundary - 10, boundary + 15], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        // smoothstep curve
        const smoothProgress = 3 * progress * progress - 2 * progress * progress * progress;
        position = -(i - 1) * stepOffset - smoothProgress * stepOffset;
      }
    }
    return position;
  };

  const scrollY = getScrollPos(frame);

  // Slow camera drift
  const cameraScale = interpolate(frame, [0, 720], [1.08, 1.15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cameraTranslateY = interpolate(frame, [0, 720], [-15, -30], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      {/* Background with drift */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${cameraScale}) translateY(${cameraTranslateY}px)`,
        }}
      >
        <Bg accent={brand.orange} />
        <GridBackground color={brand.orange} />
      </div>

      {/* Floating Orange Glow behind active item */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 550,
          height: 350,
          background: `radial-gradient(circle, ${brand.orange}18 0%, transparent 70%)`,
          filter: "blur(30px)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <AbsoluteFill style={{ zIndex: 10 }}>
        {/* Top Progress Section */}
        <div
          style={{
            position: "absolute",
            top: 180,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontFamily: brand.fontMono,
              fontSize: 30,
              fontWeight: 800,
              color: brand.orange,
              letterSpacing: "2px",
              marginBottom: 15,
              textShadow: brand.glowOrange,
            }}
          >
            [ PASO 0{activeIndex + 1} / 06 ]
          </div>

          {/* Progress Bar */}
          <div
            style={{
              width: 500,
              height: 10,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: 5,
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <div
              style={{
                width: `${animatedProgress * 100}%`,
                height: "100%",
                backgroundColor: brand.orange,
                boxShadow: brand.glowOrange,
                borderRadius: 5,
              }}
            />
          </div>
        </div>

        {/* Scrollable list container */}
        <div
          style={{
            position: "absolute",
            top: 960 - (cardHeight / 2), // Center the first card vertically
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: `translateY(${scrollY}px)`,
          }}
        >
          {STEPS.map((step, i) => {
            const isPast = i < activeIndex;
            const isActive = i === activeIndex;
            const isFuture = i > activeIndex;

            // Frame count relative to when this card became active
            const relativeFrame = frame - i * 120;
            
            // Entrance spring animation for the card
            const entrance = spring({
              frame: relativeFrame,
              fps,
              config: { damping: 12, stiffness: 90 },
            });

            // Pulse breathing effect for the active card
            const pulse = isActive ? 1 + Math.sin(relativeFrame / 8) * 0.02 : 1;

            // Render style calculations
            const opacity = isFuture
              ? 0
              : isActive
              ? entrance
              : 0.35; // Dim past cards

            const scale = isFuture
              ? 0.8
              : isActive
              ? 0.95 + entrance * 0.1 * pulse
              : 0.92; // Past cards are slightly smaller

            const border = isActive
              ? `3px solid ${brand.orange}`
              : `1px solid rgba(255, 255, 255, 0.15)`;

            const background = isActive
              ? "rgba(255, 122, 26, 0.12)"
              : "rgba(10, 14, 26, 0.5)";

            const shadow = isActive
              ? `0 10px 30px rgba(255, 122, 26, 0.15), ${brand.glowOrange}`
              : "none";

            const translateY = isFuture ? 60 : isActive ? (1 - entrance) * 50 : 0;

            return (
              <div
                key={i}
                style={{
                  width: "88%",
                  height: cardHeight,
                  background,
                  backdropFilter: "blur(12px)",
                  border,
                  borderRadius: 28,
                  padding: "0 35px",
                  marginBottom: cardGap,
                  boxShadow: shadow,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  opacity,
                  transform: `scale(${scale}) translateY(${translateY}px)`,
                  transition: "opacity 0.2s ease, border 0.2s ease, background 0.2s ease",
                  boxSizing: "border-box",
                }}
              >
                {/* Giant Orange Number Badge */}
                <div
                  style={{
                    fontFamily: brand.fontMono,
                    fontSize: 70,
                    fontWeight: 900,
                    color: brand.orange,
                    textShadow: isActive ? brand.glowOrange : "none",
                    marginRight: 35,
                    width: 100,
                    textAlign: "center",
                    opacity: isActive ? 1 : 0.6,
                  }}
                >
                  {step.number}
                </div>

                {/* Card Text Content */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      fontFamily: brand.fontSans,
                      fontSize: 44,
                      fontWeight: 800,
                      color: brand.cream,
                      lineHeight: 1.2,
                      marginBottom: 6,
                    }}
                  >
                    {step.title}
                  </div>
                  <div
                    style={{
                      fontFamily: brand.fontSans,
                      fontSize: 26,
                      fontWeight: 500,
                      color: isActive ? brand.cyan : brand.textDim,
                      textShadow: isActive ? brand.glowCyan : "none",
                      lineHeight: 1.3,
                    }}
                  >
                    {step.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
