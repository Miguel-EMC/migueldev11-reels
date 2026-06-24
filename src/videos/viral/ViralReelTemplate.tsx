import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../themes/brand";
import { KineticBackground } from "../../components/KineticBackground";

export interface ViralStep {
  tag: string;
  title: string;
  highlightWord?: string;
  desc: string;
  codeSnippet?: {
    filename: string;
    command: string;
  };
}

interface ViralReelTemplateProps {
  hookTitle: string;
  hookSubtitle: string;
  accentColor: string;
  glowColor: string;
  steps: ViralStep[];
  ctaTitle: string;
  ctaText: string;
}

// Neon glowing text helper
const GlowingText: React.FC<{
  color: string;
  glowColor: string;
  fontSize: number;
  fontWeight?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ color, glowColor, fontSize, fontWeight = 900, children, style }) => {
  return (
    <span
      style={{
        fontFamily: brand.fontMono,
        fontSize,
        fontWeight,
        color,
        textShadow: `0 0 12px ${glowColor}, 0 0 30px ${glowColor}55`,
        ...style,
      }}
    >
      {children}
    </span>
  );
};

// Portada / Hook Slide Component
const HookSlide: React.FC<{
  title: string;
  subtitle: string;
  accentColor: string;
  glowColor: string;
  entrance: number;
}> = ({ title, subtitle, accentColor, glowColor, entrance }) => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 60px",
        textAlign: "center",
        transform: `scale(${entrance})`,
      }}
    >
      {/* Category Tag */}
      <div
        style={{
          border: `2px solid ${accentColor}`,
          borderRadius: 50,
          padding: "8px 24px",
          backgroundColor: `${accentColor}15`,
          fontFamily: brand.fontMono,
          fontSize: 22,
          fontWeight: 800,
          color: accentColor,
          letterSpacing: 4,
          textTransform: "uppercase",
          marginBottom: 30,
          boxShadow: `0 0 15px ${accentColor}33`,
        }}
      >
        [ DEVOPS & CODE ]
      </div>

      {/* Main Hook Title */}
      <h1
        style={{
          fontFamily: brand.fontSans,
          fontSize: 76,
          fontWeight: 950,
          color: brand.cream,
          lineHeight: 1.15,
          letterSpacing: "-2.5px",
          margin: "0 0 35px 0",
        }}
      >
        {title.split(" ").map((word, idx) => {
          // If word is in uppercase or contains numbers, highlight it
          const isHighlight = word === word.toUpperCase() && word.length > 2;
          if (isHighlight) {
            return (
              <React.Fragment key={idx}>
                <GlowingText color={accentColor} glowColor={glowColor} fontSize={78}>
                  {word}
                </GlowingText>{" "}
              </React.Fragment>
            );
          }
          return <span key={idx}>{word} </span>;
        })}
      </h1>

      {/* Hook Subtitle */}
      <p
        style={{
          fontFamily: brand.fontMono,
          fontSize: 28,
          fontWeight: 500,
          color: brand.textDim,
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        {subtitle}
      </p>

      {/* Animated Arrow */}
      <div
        style={{
          marginTop: 60,
          fontFamily: brand.fontMono,
          fontSize: 24,
          fontWeight: 700,
          color: accentColor,
          letterSpacing: 2,
          animation: "float 2s infinite ease-in-out",
        }}
      >
        desliza →
      </div>
    </AbsoluteFill>
  );
};

// Content Step Slide Component
const StepSlide: React.FC<{
  step: ViralStep;
  index: number;
  totalSteps: number;
  accentColor: string;
  glowColor: string;
  entrance: number;
}> = ({ step, index, totalSteps, accentColor, glowColor, entrance }) => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0 70px",
        transform: `scale(${entrance})`,
      }}
    >
      {/* Step Indicator */}
      <div
        style={{
          fontFamily: brand.fontMono,
          fontSize: 130,
          fontWeight: 900,
          color: `${accentColor}11`,
          lineHeight: 0.8,
          position: "absolute",
          top: 180,
          right: 60,
          userSelect: "none",
        }}
      >
        0{index + 1}
      </div>

      {/* Pill */}
      <div
        style={{
          border: `2px solid ${accentColor}`,
          borderRadius: 50,
          padding: "6px 20px",
          backgroundColor: `${accentColor}10`,
          fontFamily: brand.fontMono,
          fontSize: 20,
          fontWeight: 800,
          color: accentColor,
          letterSpacing: 2,
          textTransform: "uppercase",
          marginBottom: 35,
        }}
      >
        {step.tag}
      </div>

      {/* Step Title */}
      <h2
        style={{
          fontFamily: brand.fontSans,
          fontSize: 54,
          fontWeight: 900,
          color: brand.cream,
          lineHeight: 1.25,
          letterSpacing: "-1px",
          margin: "0 0 35px 0",
        }}
      >
        {step.title}{" "}
        {step.highlightWord && (
          <GlowingText color={accentColor} glowColor={glowColor} fontSize={56}>
            {step.highlightWord}
          </GlowingText>
        )}
      </h2>

      {/* Step Description */}
      <p
        style={{
          fontFamily: brand.fontMono,
          fontSize: 28,
          fontWeight: 400,
          color: brand.cream,
          lineHeight: 1.55,
          margin: "0 0 40px 0",
          opacity: 0.95,
        }}
      >
        {step.desc}
      </p>

      {/* Optional Command Shell Mockup */}
      {step.codeSnippet && (
        <div
          style={{
            width: "100%",
            background: "#080C14",
            border: `2px solid ${accentColor}33`,
            borderRadius: 20,
            padding: "20px 24px",
            boxSizing: "border-box",
            boxShadow: `0 8px 30px rgba(0,0,0,0.5)`,
          }}
        >
          <div
            style={{
              fontFamily: brand.fontMono,
              color: brand.textDim,
              fontSize: 18,
              marginBottom: 10,
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              paddingBottom: 8,
            }}
          >
            <span>💻 {step.codeSnippet.filename}</span>
            <span style={{ color: accentColor }}>● ● ●</span>
          </div>
          <div
            style={{
              fontFamily: brand.fontMono,
              color: brand.cream,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            <span style={{ color: accentColor, marginRight: 12 }}>$</span>
            {step.codeSnippet.command}
          </div>
        </div>
      )}

      {/* Slide Counter Footer */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 70,
          fontFamily: brand.fontMono,
          fontSize: 24,
          fontWeight: 700,
          color: brand.textDim,
        }}
      >
        Paso {index + 1} de {totalSteps}
      </div>
    </AbsoluteFill>
  );
};

// End Card / Call To Action Slide Component
const CtaSlide: React.FC<{
  title: string;
  text: string;
  accentColor: string;
  glowColor: string;
  entrance: number;
}> = ({ title, text, accentColor, glowColor, entrance }) => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 60px",
        textAlign: "center",
        transform: `scale(${entrance})`,
      }}
    >
      {/* Brand Watermark / Handle top */}
      <div
        style={{
          fontFamily: brand.fontMono,
          fontSize: 28,
          fontWeight: 800,
          color: accentColor,
          textShadow: `0 0 10px ${accentColor}88`,
          marginBottom: 40,
        }}
      >
        {brand.handle}
      </div>

      {/* Main Title */}
      <h2
        style={{
          fontFamily: brand.fontSans,
          fontSize: 64,
          fontWeight: 900,
          color: brand.cream,
          lineHeight: 1.2,
          letterSpacing: "-1.5px",
          margin: "0 0 40px 0",
        }}
      >
        {title}
      </h2>

      {/* CTA Box */}
      <div
        style={{
          border: `3px dashed ${accentColor}`,
          borderRadius: 30,
          padding: "45px 30px",
          backgroundColor: "rgba(10, 14, 26, 0.75)",
          backdropFilter: "blur(12px)",
          boxShadow: `0 15px 40px ${accentColor}22`,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            fontFamily: brand.fontMono,
            fontSize: 28,
            fontWeight: 700,
            color: brand.cream,
            lineHeight: 1.5,
            margin: "0 0 25px 0",
          }}
        >
          {text}
        </p>

        <div
          style={{
            fontFamily: brand.fontMono,
            fontSize: 32,
            fontWeight: 900,
            color: accentColor,
            textShadow: `0 0 10px ${accentColor}aa`,
            animation: "pulse 1.8s infinite ease-in-out",
          }}
        >
          👇 COMENTA ABAJO 👇
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const ViralReelTemplate: React.FC<ViralReelTemplateProps> = ({
  hookTitle,
  hookSubtitle,
  accentColor,
  glowColor,
  steps,
  ctaTitle,
  ctaText,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Timing: 90 frames for hook, 120 frames per step, 120 frames for CTA
  const HOOK_DURATION = 90;
  const STEP_DURATION = 120;
  const CTA_DURATION = 120;

  const totalSteps = steps.length;
  
  // Calculate active scene
  let activeIndex = 0; // 0 = hook, 1..totalSteps = step 1..n, totalSteps+1 = cta
  let relativeFrame = frame;

  if (frame < HOOK_DURATION) {
    activeIndex = 0;
    relativeFrame = frame;
  } else if (frame < HOOK_DURATION + totalSteps * STEP_DURATION) {
    const stepIndex = Math.floor((frame - HOOK_DURATION) / STEP_DURATION);
    activeIndex = stepIndex + 1;
    relativeFrame = (frame - HOOK_DURATION) % STEP_DURATION;
  } else {
    activeIndex = totalSteps + 1;
    relativeFrame = frame - (HOOK_DURATION + totalSteps * STEP_DURATION);
  }

  // Entrance spring animation for the active scene card
  const entrance = spring({
    frame: relativeFrame,
    fps,
    config: { damping: 13, stiffness: 95 },
  });

  // Calculate exit fade-out progress on the last 12 frames of each section
  let isExiting = false;
  let exitProgress = 0;
  
  if (activeIndex === 0 && relativeFrame >= HOOK_DURATION - 12) {
    isExiting = true;
    exitProgress = (relativeFrame - (HOOK_DURATION - 12)) / 12;
  } else if (activeIndex > 0 && activeIndex <= totalSteps && relativeFrame >= STEP_DURATION - 12) {
    isExiting = true;
    exitProgress = (relativeFrame - (STEP_DURATION - 12)) / 12;
  }

  const slideScale = interpolate(exitProgress, [0, 1], [1, 0.92]);
  const slideOpacity = interpolate(exitProgress, [0, 0.8], [1, 0]);

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* Interactive Background */}
      <KineticBackground accentColor={accentColor} beatSynced={true} />

      {/* Safe Branding Top Watermark */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          fontFamily: brand.fontMono,
          fontSize: 24,
          fontWeight: 900,
          color: accentColor,
          letterSpacing: 5,
          textShadow: `0 0 10px ${accentColor}66`,
          zIndex: 100,
        }}
      >
        [ MIGUELDEV11 HACKS ]
      </div>

      {/* Render active slide */}
      <AbsoluteFill
        style={{
          opacity: slideOpacity,
          transform: `scale(${slideScale})`,
          zIndex: 10,
        }}
      >
        {activeIndex === 0 && (
          <HookSlide
            title={hookTitle}
            subtitle={hookSubtitle}
            accentColor={accentColor}
            glowColor={glowColor}
            entrance={entrance}
          />
        )}

        {activeIndex > 0 && activeIndex <= totalSteps && (
          <StepSlide
            step={steps[activeIndex - 1]}
            index={activeIndex - 1}
            totalSteps={totalSteps}
            accentColor={accentColor}
            glowColor={glowColor}
            entrance={entrance}
          />
        )}

        {activeIndex === totalSteps + 1 && (
          <CtaSlide
            title={ctaTitle}
            text={ctaText}
            accentColor={accentColor}
            glowColor={glowColor}
            entrance={entrance}
          />
        )}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
