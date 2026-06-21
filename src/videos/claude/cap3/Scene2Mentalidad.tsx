import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { claudeTheme } from "../../../themes/claude";
import { GridBackground } from "../../../components/GridBackground";
import { TechIcon } from "../../../components/TechIcon";

export const Scene2Mentalidad: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Staggered node animation for the continuous cycle
  const s1 = spring({ frame: frame - 20, fps });
  const s2 = spring({ frame: frame - 40, fps });
  const s3 = spring({ frame: frame - 60, fps });
  const s4 = spring({ frame: frame - 80, fps });
  const s5 = spring({ frame: frame - 100, fps });

  return (
    <AbsoluteFill style={{ backgroundColor: claudeTheme.bg }}>
      <GridBackground color={claudeTheme.claudeOrange} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", justifyContent: "center", alignItems: "center"
      }}>
        
        {/* Enormous Screen Title */}
        <div style={{ textAlign: "center", marginBottom: 70, opacity: entrance }}>
          <div style={{ fontFamily: claudeTheme.fontSans, fontSize: 80, fontWeight: 900, color: claudeTheme.cream, letterSpacing: "-2px", lineHeight: 1.1 }}>
            EL CAMBIO DE<br/>
            <span style={{ color: claudeTheme.claudeOrange, textShadow: claudeTheme.glowOrange }}>MENTALIDAD</span>
          </div>
        </div>

        {/* Central Cycle Flow Network Layout */}
        <div style={{
          width: "100%", background: "rgba(10, 15, 30, 0.8)", border: `3px solid ${claudeTheme.claudeOrange}44`,
          borderRadius: 32, padding: "50px 30px", display: "flex", flexDirection: "column", alignItems: "center",
          boxShadow: `0 30px 60px rgba(0,0,0,0.5), inset 0 0 40px ${claudeTheme.claudeOrange}11`
        }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30, width: "100%", marginBottom: 30 }}>
            {/* Step 1: Plan */}
            <div style={{
              background: "rgba(225, 96, 54, 0.1)", border: `2px solid ${claudeTheme.claudeOrange}88`,
              borderRadius: 20, padding: 25, display: "flex", flexDirection: "column", alignItems: "center",
              opacity: s1, transform: `scale(${s1})`
            }}>
              <TechIcon type="network" size={50} color={claudeTheme.claudeOrange} glow={false} />
              <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 24, fontWeight: 900, color: claudeTheme.cream, marginTop: 10 }}>1. Planificar</div>
            </div>

            {/* Step 2: Write */}
            <div style={{
              background: "rgba(34, 211, 238, 0.1)", border: `2px solid ${claudeTheme.cyan}88`,
              borderRadius: 20, padding: 25, display: "flex", flexDirection: "column", alignItems: "center",
              opacity: s2, transform: `scale(${s2})`
            }}>
              <TechIcon type="code" size={50} color={claudeTheme.cyan} glow={false} />
              <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 24, fontWeight: 900, color: claudeTheme.cream, marginTop: 10 }}>2. Escribir</div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30, width: "100%", marginBottom: 30 }}>
            {/* Step 3: Test */}
            <div style={{
              background: "rgba(167, 139, 250, 0.1)", border: `2px solid #A78BFA88`, // Using purple implicitly
              borderRadius: 20, padding: 25, display: "flex", flexDirection: "column", alignItems: "center",
              opacity: s3, transform: `scale(${s3})`
            }}>
              <TechIcon type="cpu" size={50} color="#A78BFA" glow={false} />
              <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 24, fontWeight: 900, color: claudeTheme.cream, marginTop: 10 }}>3. Probar</div>
            </div>

            {/* Step 4: Fix */}
            <div style={{
              background: "rgba(239, 68, 68, 0.1)", border: `2px solid #EF444488`,
              borderRadius: 20, padding: 25, display: "flex", flexDirection: "column", alignItems: "center",
              opacity: s4, transform: `scale(${s4})`
            }}>
              <TechIcon type="search" size={50} color="#EF4444" glow={false} />
              <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 24, fontWeight: 900, color: claudeTheme.cream, marginTop: 10 }}>4. Corregir</div>
            </div>
          </div>

          {/* Step 5: Success */}
          <div style={{
            background: "rgba(0, 255, 65, 0.1)", border: `4px solid ${claudeTheme.green}`,
            borderRadius: 20, padding: "20px 40px", display: "flex", alignItems: "center", gap: 20,
            opacity: s5, transform: `scale(${s5}) translateY(${interpolate(s5, [0, 1], [20, 0])}px)`,
            boxShadow: `0 0 30px ${claudeTheme.green}44`
          }}>
            <TechIcon type="database" size={40} color={claudeTheme.green} glow={true} />
            <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 32, fontWeight: 900, color: claudeTheme.green, textShadow: claudeTheme.glowGreen }}>
              ✅ ÉXITO TOTAL
            </div>
          </div>

        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
