import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../themes/brand";
import { Bg } from "../shared/Bg";
import { GridBackground } from "../components/GridBackground";

const TOOLS = [
  { number: "01", title: "Claude Code", desc: "Tu terminal con superpoderes 💻" },
  { number: "02", title: "Cursor", desc: "El editor definitivo con IA integrada 🚀" },
  { number: "03", title: "Mintlify", desc: "Genera documentación al instante 📂" },
  { number: "04", title: "CodiumAI", desc: "Pruebas y tests automáticos rápidos 🧪" },
  { number: "05", title: "PR-Agent", desc: "Revisiones de pull requests autónomas 🔍" },
];

export const ToolsSteps: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active tool index (0 to 4) based on 150 frames (5s) per tool
  const activeIndex = Math.min(4, Math.floor(frame / 150));

  // Horizontal progress bar spring animation
  const progressSpring = spring({
    frame: frame % 150,
    fps,
    config: { damping: 16, stiffness: 80 },
  });

  // Calculate animated progress bar width percentage
  const prevProgress = activeIndex / 5;
  const targetProgress = (activeIndex + 1) / 5;
  const animatedProgress = interpolate(progressSpring, [0, 1], [prevProgress, targetProgress]);

  // Card height (150px) + spacing gap (35px) = 185px per step
  const cardHeight = 150;
  const cardGap = 35;
  const stepOffset = cardHeight + cardGap;

  // Camera scroll calculations
  // Transition between steps starts 10 frames before and ends 15 frames after the step boundary
  const getScrollPos = (f: number) => {
    let position = 0;
    for (let i = 1; i <= 4; i++) {
      const boundary = i * 150;
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
  const cameraScale = interpolate(frame, [0, 750], [1.08, 1.15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cameraTranslateY = interpolate(frame, [0, 750], [-15, -30], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      {/* Background drift */}
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

      {/* Floating radial glow behind active tool */}
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
        {/* Top Progress bar & counter */}
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
            [ HERRAMIENTA 0{activeIndex + 1} / 05 ]
          </div>

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
            top: 960 - (cardHeight / 2), // Vertically centers active card
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: `translateY(${scrollY}px)`,
          }}
        >
          {TOOLS.map((tool, i) => {
            const isPast = i < activeIndex;
            const isActive = i === activeIndex;
            const isFuture = i > activeIndex;

            // relative frame since this tool became active
            const relativeFrame = frame - i * 150;
            
            // entrance spring for this card
            const entrance = spring({
              frame: relativeFrame,
              fps,
              config: { damping: 12, stiffness: 90 },
            });

            // breathing scale effect
            const pulse = isActive ? 1 + Math.sin(relativeFrame / 8) * 0.02 : 1;

            // styles based on card state
            const opacity = isFuture
              ? 0
              : isActive
              ? entrance
              : 0.35;

            const scale = isFuture
              ? 0.8
              : isActive
              ? 0.95 + entrance * 0.1 * pulse
              : 0.92;

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
                {/* Giant Orange Badge */}
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
                  {tool.number}
                </div>

                {/* Card Texts */}
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
                    {tool.title}
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
                    {tool.desc}
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
