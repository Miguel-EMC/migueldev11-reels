import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { claudeTheme } from "../../../themes/claude";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene4Cierre: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Before / After Token Counters
  const tokensBefore = Math.floor(interpolate(spring({ frame: frame - 15, fps, config: { damping: 18 } }), [0, 1], [0, 125400]));
  const tokensAfter = Math.floor(interpolate(spring({ frame: frame - 45, fps, config: { damping: 18 } }), [0, 1], [0, 12400]));

  const subEntrance = spring({ frame: frame - 80, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 15) * 0.08 + 1;

  return (
    <AbsoluteFill style={{ backgroundColor: claudeTheme.bg }}>
      <GridBackground color={claudeTheme.claudeOrange} />
      <ParticleField />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        <div style={{
          textAlign: "center", marginBottom: 60, opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [40, 0])}px)`
        }}>
          <div style={{
            fontFamily: claudeTheme.fontSans, fontSize: 50, fontWeight: 900, color: claudeTheme.cream, lineHeight: 1.2
          }}>
            Mismo trabajo.<br/>
            <span style={{ color: claudeTheme.green, textShadow: claudeTheme.glowGreen }}>Menos consumo.</span>
          </div>
        </div>

        {/* Before / After Blocks */}
        <div style={{ display: "flex", gap: 30, width: "100%", marginBottom: 80 }}>
          
          <div style={{
            flex: 1, background: "rgba(15, 23, 42, 0.8)", border: `2px solid #EF4444`,
            borderRadius: 20, padding: "25px 10px", textAlign: "center", opacity: entrance
          }}>
            <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 20, color: claudeTheme.textDim, marginBottom: 10 }}>ANTES</div>
            <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 40, fontWeight: 900, color: "#EF4444" }}>
              {tokensBefore.toLocaleString()}
            </div>
          </div>

          <div style={{
            flex: 1, background: "rgba(0, 255, 65, 0.1)", border: `3px solid ${claudeTheme.green}`,
            borderRadius: 20, padding: "25px 10px", textAlign: "center", opacity: spring({ frame: frame - 45, fps }),
            boxShadow: `0 0 30px ${claudeTheme.green}22`
          }}>
            <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 20, color: claudeTheme.textDim, marginBottom: 10 }}>AHORA</div>
            <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 48, fontWeight: 900, color: claudeTheme.green, textShadow: claudeTheme.glowGreen }}>
              {tokensAfter.toLocaleString()}
            </div>
          </div>

        </div>

        {/* Teaser Cap 3 */}
        <div style={{
          background: "rgba(34, 211, 238, 0.1)", backdropFilter: "blur(12px)",
          border: `3px solid ${claudeTheme.cyan}`, borderRadius: 24, padding: "25px 40px",
          textAlign: "center", marginBottom: 70, opacity: subEntrance,
          transform: `scale(${subEntrance})`, boxShadow: `0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(34, 211, 238, 0.3)`
        }}>
          <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 24, color: claudeTheme.cyan, letterSpacing: 4, marginBottom: 8, fontWeight: 800 }}>
            CAP 3 → GOD MODE
          </div>
          <div style={{ fontFamily: claudeTheme.fontSans, fontSize: 50, fontWeight: 900, color: claudeTheme.cream, letterSpacing: "-1px" }}>
            Tareas Completas Solas
          </div>
        </div>

        {/* Handle */}
        <div style={{
          opacity: subEntrance,
          transform: `scale(${subEntrance * pulse})`,
          textAlign: "center"
        }}>
          <div style={{
            fontFamily: claudeTheme.fontMono, fontSize: 80, fontWeight: 900,
            color: claudeTheme.claudeOrange, textShadow: claudeTheme.glowOrange
          }}>
            @migueldev11
          </div>
          <div style={{
            fontFamily: claudeTheme.fontSans, fontSize: 34, fontWeight: 400,
            color: claudeTheme.cream, opacity: 0.7, marginTop: 10, letterSpacing: 8, textTransform: "uppercase"
          }}>
            Sígueme
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
