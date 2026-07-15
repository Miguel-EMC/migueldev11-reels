import React from "react";
import { AbsoluteFill, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../themes/brand";
import { Bg } from "../../shared/Bg";
import { GridBackground } from "../../components/GridBackground";
import { ParticleField } from "../../components/ParticleField";
import { ReelLayout } from "../../layouts/ReelLayout";
import { VIDEO_SCRIPTS, VideoScript } from "./scriptsData";

// Helper components inside the file to keep imports clean
const FactoryGancho: React.FC<{ script: VideoScript }> = ({ script }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12, stiffness: 90 } });
  const badgeEntrance = spring({ frame: frame - 20, fps, config: { damping: 11 } });

  const cameraScale = interpolate(frame, [0, 90], [1.02, 1.08], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp"
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${cameraScale})` }}>
        <Bg accent={script.accentColor} />
        <GridBackground color={script.accentColor} />
        <ParticleField />
      </div>

      <div style={{
        position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
        width: 600, height: 600,
        background: `radial-gradient(circle, ${script.accentColor}22 0%, transparent 70%)`,
        filter: "blur(40px)", opacity: 0.6 + Math.sin(frame / 10) * 0.15, pointerEvents: "none"
      }} />

      <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 60px", zIndex: 10 }}>
        {/* Badge */}
        <div style={{
          fontFamily: brand.fontMono, fontSize: 34, fontWeight: 800, color: script.accentColor,
          letterSpacing: 4, textTransform: "uppercase", marginBottom: 45, opacity: badgeEntrance,
          transform: `scale(${badgeEntrance})`, textShadow: `0 0 10px ${script.accentColor}`
        }}>
          [ {script.category} ]
        </div>

        {/* Hook Card */}
        <div style={{
          background: "rgba(10, 14, 26, 0.8)", backdropFilter: "blur(20px)",
          border: `3px solid ${script.accentColor}`, borderRadius: 36, padding: "60px 45px", width: "95%", textAlign: "center",
          opacity: entrance, transform: `scale(${entrance}) translateY(${interpolate(entrance, [0, 1], [40, 0])}px)`,
          boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${script.accentColor}44`
        }}>
          <div style={{
            fontFamily: brand.fontSans, fontSize: 80, fontWeight: 900, color: brand.cream, lineHeight: 1.15, letterSpacing: "-2px"
          }}>
            {script.title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <span style={{
              fontSize: 34, color: script.accentColor, textShadow: `0 0 12px ${script.accentColor}66`,
              display: "inline-block", marginTop: 25, fontWeight: 800, fontFamily: brand.fontMono, letterSpacing: "1px"
            }}>
              {script.subtitle}
            </span>
          </div>
        </div>

        {/* Action Tip */}
        <div style={{
          marginTop: 70, fontFamily: brand.fontMono, fontSize: 28, fontWeight: 600, color: brand.textDim,
          opacity: interpolate(frame, [15, 30], [0, 0.8], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          transform: `translateY(${Math.sin(frame / 8) * 6}px)`
        }}>
          Guarda la lista 💾
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const FactorySteps: React.FC<{ script: VideoScript }> = ({ script }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const activeIndex = Math.min(2, Math.floor(frame / 150));

  const progressSpring = spring({
    frame: frame % 150, fps, config: { damping: 16, stiffness: 80 }
  });

  const prevProgress = activeIndex / 3;
  const targetProgress = (activeIndex + 1) / 3;
  const animatedProgress = interpolate(progressSpring, [0, 1], [prevProgress, targetProgress]);

  const cardHeight = 160;
  const cardGap = 40;
  const stepOffset = cardHeight + cardGap;

  const getScrollPos = (f: number) => {
    let position = 0;
    for (let i = 1; i <= 2; i++) {
      const boundary = i * 150;
      if (f >= boundary - 10) {
        const progress = interpolate(f, [boundary - 10, boundary + 15], [0, 1], {
          extrapolateLeft: "clamp", extrapolateRight: "clamp"
        });
        const smoothProgress = 3 * progress * progress - 2 * progress * progress * progress;
        position = -(i - 1) * stepOffset - smoothProgress * stepOffset;
      }
    }
    return position;
  };

  const scrollY = getScrollPos(frame);

  const cameraScale = interpolate(frame, [0, 450], [1.08, 1.15], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp"
  });
  const cameraTranslateY = interpolate(frame, [0, 450], [-15, -30], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp"
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${cameraScale}) translateY(${cameraTranslateY}px)` }}>
        <Bg accent={script.accentColor} />
        <GridBackground color={script.accentColor} />
      </div>

      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: 550, height: 350,
        background: `radial-gradient(circle, ${script.accentColor}18 0%, transparent 70%)`,
        filter: "blur(30px)", pointerEvents: "none", zIndex: 2
      }} />

      <AbsoluteFill style={{ zIndex: 10 }}>
        {/* Progress bar */}
        <div style={{ position: "absolute", top: 180, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{
            fontFamily: brand.fontMono, fontSize: 30, fontWeight: 800, color: script.accentColor,
            letterSpacing: "2px", marginBottom: 15, textShadow: `0 0 10px ${script.accentColor}`
          }}>
            [ PASO 0{activeIndex + 1} / 03 ]
          </div>
          <div style={{
            width: 500, height: 10, backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: 5, overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.05)"
          }}>
            <div style={{
              width: `${animatedProgress * 100}%`, height: "100%", backgroundColor: script.accentColor,
              boxShadow: `0 0 12px ${script.accentColor}`, borderRadius: 5
            }} />
          </div>
        </div>

        {/* Cards scroll */}
        <div style={{
          position: "absolute", top: 960 - (cardHeight / 2), left: 0, right: 0,
          display: "flex", flexDirection: "column", alignItems: "center", transform: `translateY(${scrollY}px)`
        }}>
          {script.steps.map((step, i) => {
            const isActive = i === activeIndex;
            const isFuture = i > activeIndex;
            const relativeFrame = frame - i * 150;

            const entrance = spring({
              frame: relativeFrame, fps, config: { damping: 12, stiffness: 90 }
            });

            const pulse = isActive ? 1 + Math.sin(relativeFrame / 8) * 0.02 : 1;
            const opacity = isFuture ? 0 : isActive ? entrance : 0.35;
            const scale = isFuture ? 0.8 : isActive ? 0.95 + entrance * 0.1 * pulse : 0.92;

            return (
              <div key={i} style={{
                width: "88%", height: cardHeight,
                background: isActive ? `rgba(${i === 0 ? "255, 100, 100" : "100, 200, 255"}, 0.12)` : "rgba(10, 14, 26, 0.5)",
                backdropFilter: "blur(12px)", border: isActive ? `3px solid ${script.accentColor}` : `1px solid rgba(255, 255, 255, 0.15)`,
                borderRadius: 28, padding: "0 35px", marginBottom: cardGap,
                boxShadow: isActive ? `0 10px 30px rgba(0,0,0,0.3), 0 0 20px ${script.accentColor}44` : "none",
                display: "flex", flexDirection: "row", alignItems: "center", opacity,
                transform: `scale(${scale})`, transition: "opacity 0.2s ease, border 0.2s ease, background 0.2s ease",
                boxSizing: "border-box"
              }}>
                <div style={{
                  fontFamily: brand.fontMono, fontSize: 70, fontWeight: 900, color: script.accentColor,
                  textShadow: isActive ? `0 0 10px ${script.accentColor}` : "none", marginRight: 35, width: 100, textAlign: "center"
                }}>
                  {step.number}
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
                  <div style={{ fontFamily: brand.fontSans, fontSize: 42, fontWeight: 800, color: brand.cream, marginBottom: 6 }}>
                    {step.title}
                  </div>
                  <div style={{ fontFamily: brand.fontSans, fontSize: 24, fontWeight: 500, color: isActive ? brand.cyan : brand.textDim, lineHeight: 1.3 }}>
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

const FactoryCierre: React.FC<{ script: VideoScript }> = ({ script }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isCtaPhase = frame < 110;
  const isEndCardPhase = frame >= 110;

  const ctaEntrance = spring({ frame, fps, config: { damping: 11, stiffness: 80 } });
  const endCardEntrance = spring({ frame: frame - 110, fps, config: { damping: 12, stiffness: 85 } });

  const ctaOpacity = interpolate(frame, [100, 110], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const endCardOpacity = interpolate(frame, [180, 210], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const cameraScale = interpolate(frame, [0, 110, 180, 210], [1.15, 1.18, 1.05, 1.02], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cameraTranslateY = interpolate(frame, [0, 110, 180, 210], [-30, -38, -5, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${cameraScale}) translateY(${cameraTranslateY}px)` }}>
        <Bg accent={script.accentColor} />
        <GridBackground color={script.accentColor} />
      </div>

      <div style={{
        position: "absolute", top: "45%", left: "50%", transform: "translate(-50%, -50%)",
        width: 600, height: 600,
        background: `radial-gradient(circle, ${script.accentColor}20 0%, transparent 70%)`,
        filter: "blur(40px)", opacity: 0.7 + Math.sin(frame / 12) * 0.1, pointerEvents: "none"
      }} />

      {/* CTA PHASE */}
      {isCtaPhase && (
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 60px", opacity: ctaOpacity, zIndex: 10 }}>
          <div style={{
            background: "rgba(10, 14, 26, 0.8)", backdropFilter: "blur(20px)",
            border: `3px solid ${script.accentColor}`, borderRadius: 36, padding: "60px 40px", width: "95%", textAlign: "center",
            opacity: ctaEntrance, transform: `scale(${ctaEntrance}) translateY(${interpolate(ctaEntrance, [0, 1], [40, 0])}px)`,
            boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 20px ${script.accentColor}44`
          }}>
            <div style={{ fontFamily: brand.fontSans, fontSize: 66, fontWeight: 900, color: brand.cream, lineHeight: 1.25, marginBottom: 35 }}>
              Guarda esto para después 💾
            </div>
            <div style={{ width: "80%", height: 2, background: "rgba(255, 255, 255, 0.15)", margin: "0 auto 35px auto" }} />
            <div style={{ fontFamily: brand.fontSans, fontSize: 54, fontWeight: 800, color: brand.cyan, textShadow: brand.glowCyan, lineHeight: 1.2 }}>
              {script.cta} 👇
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* END CARD PHASE */}
      {isEndCardPhase && (
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 60px", opacity: endCardOpacity, zIndex: 10 }}>
          <div style={{
            background: "rgba(10, 14, 26, 0.8)", backdropFilter: "blur(20px)",
            border: `3px solid ${script.accentColor}`, borderRadius: 36, padding: "70px 50px", width: "90%", textAlign: "center",
            opacity: endCardEntrance, transform: `scale(${endCardEntrance}) translateY(${interpolate(endCardEntrance, [0, 1], [30, 0])}px)`,
            boxShadow: `0 25px 50px rgba(0,0,0,0.5), 0 0 30px ${script.accentColor}44`
          }}>
            <div style={{
              fontFamily: brand.fontMono, fontSize: 26, fontWeight: 700, color: brand.cyan,
              letterSpacing: 4, textTransform: "uppercase", marginBottom: 25, textShadow: brand.glowCyan
            }}>
              [ DEV TECHS ]
            </div>
            <div style={{
              fontFamily: brand.fontMono, fontSize: 76, fontWeight: 900, color: script.accentColor,
              textShadow: `0 0 10px ${script.accentColor}`, marginBottom: 40, letterSpacing: "-1px"
            }}>
              {brand.handle}
            </div>
            <div style={{ width: "60%", height: 2, background: "rgba(255, 255, 255, 0.15)", margin: "0 auto 40px auto" }} />
            <div style={{
              fontFamily: brand.fontSans, fontSize: 60, fontWeight: 900, color: brand.cream,
              letterSpacing: "1px", transform: `scale(${1 + Math.sin(frame / 6) * 0.03})`
            }}>
              ¡Sígueme para más! 🚀
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

export const FACTORY_TOTAL_FRAMES = 750;

interface Props {
  scriptId?: string;
}

export const FactoryVideo: React.FC<Props> = ({ scriptId = "bug-caro" }) => {
  const script = VIDEO_SCRIPTS.find(s => s.id === scriptId);

  if (!script) {
    throw new Error(`Video Script con id "${scriptId}" no fue encontrado en scriptsData.`);
  }

  return (
    <ReelLayout>
      {/* 1. Hook (0 to 90 — 3s) */}
      <Sequence from={0} durationInFrames={90}>
        <FactoryGancho script={script} />
      </Sequence>

      {/* 2. Steps (90 to 540 — 15s) */}
      <Sequence from={90} durationInFrames={450}>
        <FactorySteps script={script} />
      </Sequence>

      {/* 3. Cierre (540 to 750 — 7s) */}
      <Sequence from={540} durationInFrames={210}>
        <FactoryCierre script={script} />
      </Sequence>
    </ReelLayout>
  );
};
