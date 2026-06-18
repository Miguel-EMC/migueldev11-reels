// Scene 3 — LA IDEA · frames 600-1140 (540 local frames)
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ragTheme } from "../../../themes/rag";
import { Bg } from "../../../shared/Bg";

const ACCENT = ragTheme.green;

const DocIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width="76" height="76" viewBox="0 0 80 80" fill="none"
    style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <rect x="10" y="6" width="44" height="56" rx="4" stroke={color} strokeWidth="2.5" fill={`${color}12`} />
    <path d="M54 6 L54 20 L68 20 L54 6Z" stroke={color} strokeWidth="2" fill={`${color}20`} />
    <line x1="20" y1="32" x2="60" y2="32" stroke={color} strokeWidth="2" opacity="0.7" />
    <line x1="20" y1="42" x2="60" y2="42" stroke={color} strokeWidth="2" opacity="0.7" />
    <line x1="20" y1="52" x2="46" y2="52" stroke={color} strokeWidth="2" opacity="0.5" />
    <rect x="10" y="6" width="44" height="56" rx="4" stroke={color} strokeWidth="1.5" fill="none"
      opacity="0.3" transform="translate(-4 4)" />
    <rect x="10" y="6" width="44" height="56" rx="4" stroke={color} strokeWidth="1" fill="none"
      opacity="0.17" transform="translate(-8 8)" />
  </svg>
);

const SearchIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width="76" height="76" viewBox="0 0 80 80" fill="none"
    style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <circle cx="34" cy="34" r="22" stroke={color} strokeWidth="3" fill={`${color}12`} />
    <line x1="50" y1="50" x2="68" y2="68" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <circle cx="34" cy="34" r="11" stroke={color} strokeWidth="1.5" fill="none" opacity="0.4" />
  </svg>
);

const BrainIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width="76" height="76" viewBox="0 0 100 100" fill="none"
    style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path
      d="M50 18 C34 18 24 29 24 41 C18 43 13 49 13 57 C13 67 21 73 30 73 C30 81 38 87 47 86 L50 86 L53 86 C62 87 70 81 70 73 C79 73 87 67 87 57 C87 49 82 43 76 41 C76 29 66 18 50 18Z"
      stroke={color} strokeWidth="2.5" fill={`${color}15`}
    />
    <path d="M50 18 L50 86" stroke={color} strokeWidth="1.5" opacity="0.35" />
    <path d="M24 44 Q37 50 50 50 Q63 50 76 44" stroke={color} strokeWidth="1.5" opacity="0.5" />
    <circle cx="37" cy="33" r="3" fill={color} opacity="0.7" />
    <circle cx="63" cy="33" r="3" fill={color} opacity="0.7" />
  </svg>
);

const Arrow: React.FC<{ color: string; opacity: number }> = ({ color, opacity }) => (
  <svg width="46" height="36" viewBox="0 0 46 36" fill="none" style={{ opacity, flexShrink: 0 }}>
    <path d="M4 18 L36 18 M28 10 L36 18 L28 26" stroke={color} strokeWidth="3"
      strokeLinecap="round" strokeLinejoin="round"
      style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
  </svg>
);

const STEPS = [
  { icon: DocIcon,    label: "Tus documentos", delay: 30  },
  { icon: SearchIcon, label: "Buscar",          delay: 145 },
  { icon: BrainIcon,  label: "Responder",       delay: 260 },
] as const;

export const Scene3LaIdea: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeOpacity = interpolate(
    frame, [0, 8, durationInFrames - 10, durationInFrames], [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const titleP  = spring({ frame,          fps, config: { damping: 14, stiffness: 90  }, durationInFrames: 22 });
  const taglineP = spring({ frame: frame - 350, fps, config: { damping: 16, stiffness: 100 }, durationInFrames: 20 });

  return (
    <AbsoluteFill style={{ opacity: fadeOpacity }}>
      <Bg accent={ACCENT} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 40,
      }}>
        <div style={{
          fontFamily: ragTheme.fontSans, fontSize: 46, fontWeight: 700,
          color: ACCENT, textShadow: `0 0 12px ${ACCENT}`,
          opacity: interpolate(titleP, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(titleP, [0, 1], [-18, 0])}px)`,
        }}>
          Cómo funciona RAG
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {STEPS.map(({ icon: Icon, label, delay }, i) => {
            const p = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 105 }, durationInFrames: 20 });
            const arrowP = i < STEPS.length - 1
              ? spring({ frame: frame - delay - 40, fps, config: { damping: 16, stiffness: 105 }, durationInFrames: 20 })
              : 1;
            return (
              <React.Fragment key={label}>
                <div style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 18,
                  opacity: interpolate(p, [0, 1], [0, 1]),
                  transform: `translateY(${interpolate(p, [0, 1], [28, 0])}px)`,
                }}>
                  <div style={{
                    background: `${ACCENT}10`, border: `2px solid ${ACCENT}44`,
                    borderRadius: 18, padding: "22px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon color={ACCENT} />
                  </div>
                  <span style={{
                    fontFamily: ragTheme.fontSans, fontSize: 28, fontWeight: 600,
                    color: ragTheme.text, textAlign: "center",
                  }}>
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <Arrow color={ACCENT} opacity={interpolate(arrowP, [0, 1], [0, 1])} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div style={{
          fontFamily: ragTheme.fontSans, fontSize: 32,
          color: ragTheme.textDim, textAlign: "center", lineHeight: 1.5,
          opacity: interpolate(taglineP, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(taglineP, [0, 1], [16, 0])}px)`,
        }}>
          busca → encuentra → lee →{" "}
          <span style={{ color: ACCENT, textShadow: `0 0 8px ${ACCENT}`, fontWeight: 700 }}>
            responde
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
