import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { dockerTheme } from "../../../themes/docker";
import { GridBackground } from "../../../components/GridBackground";
import { Package, FileCode, Settings } from "lucide-react";
import { DockerLogo } from "../../../components/DockerLogo";

export const Scene3LaSolucion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  const appIn = spring({ frame: frame - 20, fps });
  const libsIn = spring({ frame: frame - 40, fps });
  const confIn = spring({ frame: frame - 60, fps });
  
  const boxGlow = spring({ frame: frame - 80, fps, config: { damping: 15 } });

  return (
    <AbsoluteFill style={{ backgroundColor: dockerTheme.bg }}>
      <GridBackground color={dockerTheme.dockerBlue} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "80px 40px", boxSizing: "border-box", alignItems: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 40, opacity: entrance }}>
          <div style={{ fontFamily: dockerTheme.fontSans, fontSize: 80, fontWeight: 900, color: dockerTheme.cream, letterSpacing: "-2px" }}>
            EL CONTENEDOR
          </div>
        </div>

        <div style={{
          position: "relative", width: "100%", height: 500,
          border: `4px solid ${boxGlow > 0.5 ? dockerTheme.dockerBlue : dockerTheme.textDim + "66"}`,
          borderRadius: 32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          transition: "all 0.5s ease"
        }}>
          
          {/* Animated Docker Logo as the container box */}
          <div style={{
            opacity: interpolate(boxGlow, [0, 1], [0.1, 0.4]),
            transform: `scale(${interpolate(boxGlow, [0, 1], [1, 2])})`,
            position: "absolute",
          }}>
            <DockerLogo size={400} color={dockerTheme.dockerBlue} />
          </div>
          
          <div style={{ display: "flex", gap: 30, flexWrap: "wrap", justifyContent: "center", padding: 30, zIndex: 10 }}>
            {/* App Item */}
            <div style={{
              background: "rgba(34, 211, 238, 0.1)", border: `2px solid ${dockerTheme.cyan}`, borderRadius: 16, padding: 20,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
              opacity: appIn, transform: `translateY(${interpolate(appIn, [0, 1], [-100, 0])}px)`, boxShadow: dockerTheme.glowCyan + "22"
            }}>
              <FileCode size={40} color={dockerTheme.cyan} />
              <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 24, fontWeight: 800, color: dockerTheme.cream }}>TU APP</div>
            </div>

            {/* Libs Item */}
            <div style={{
              background: "rgba(0, 255, 65, 0.1)", border: `2px solid ${dockerTheme.green}`, borderRadius: 16, padding: 20,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
              opacity: libsIn, transform: `translateY(${interpolate(libsIn, [0, 1], [-100, 0])}px)`, boxShadow: dockerTheme.glowGreen + "22"
            }}>
              <Package size={40} color={dockerTheme.green} />
              <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 24, fontWeight: 800, color: dockerTheme.cream }}>LIBRERÍAS</div>
            </div>

            {/* Config Item */}
            <div style={{
              background: "rgba(239, 68, 68, 0.1)", border: `2px solid ${dockerTheme.red}`, borderRadius: 16, padding: 20,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
              opacity: confIn, transform: `translateY(${interpolate(confIn, [0, 1], [-100, 0])}px)`, boxShadow: dockerTheme.glowRed + "22"
            }}>
              <Settings size={40} color={dockerTheme.red} />
              <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 24, fontWeight: 800, color: dockerTheme.cream }}>CONFIG.</div>
            </div>
          </div>

        </div>

        <div style={{
          fontFamily: dockerTheme.fontSans, fontSize: 48, fontWeight: 900, color: dockerTheme.cream,
          textAlign: "center", marginTop: 60, lineHeight: 1.2, opacity: boxGlow, transform: `scale(${boxGlow})`
        }}>
          Lo empacas una vez,<br/>
          <span style={{ color: dockerTheme.dockerBlue, textShadow: dockerTheme.glowBlue }}>corre IGUAL en todos lados.</span>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
