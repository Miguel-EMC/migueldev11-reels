import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Sequence } from "remotion";
import { brand } from "../../themes/brand";

// ---------------------------------------------------------
// Keyframe Animations for Hacker/Cybersecurity effects
// ---------------------------------------------------------
const inlineStyles = `
@keyframes floatHacker {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}
@keyframes matrixRain {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}
@keyframes scanRadar {
  0% { transform: scale(0.3); opacity: 0.8; }
  100% { transform: scale(1.1); opacity: 0; }
}
@keyframes pulseRedAlert {
  0%, 100% { border-color: rgba(239, 68, 68, 0.4); box-shadow: 0 0 15px rgba(239, 68, 68, 0.2); }
  50% { border-color: rgba(239, 68, 68, 1); box-shadow: 0 0 25px rgba(239, 68, 68, 0.5); }
}
@keyframes pulseGreenAlert {
  0%, 100% { border-color: rgba(0, 255, 65, 0.4); box-shadow: 0 0 15px rgba(0, 255, 65, 0.2); }
  50% { border-color: rgba(0, 255, 65, 1); box-shadow: 0 0 25px rgba(0, 255, 65, 0.5); }
}
@keyframes blinkCursor {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}
@keyframes pulse {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}
@keyframes scanline {
  0% { top: 0%; }
  100% { top: 100%; }
}
`;

// Hacker Tux Penguin (Hoodie + Sunglasses)
export const HackerTux: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  return (
    <div
      style={{
        position: "relative",
        width: 160,
        height: 180,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 190,
          height: 190,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${brand.green}25 0%, transparent 70%)`,
        }}
      />
      <div
        style={{
          position: "relative",
          width: 120,
          height: 155,
          backgroundColor: "#030712",
          borderRadius: "50% 50% 35% 35%",
          border: `2.5px solid ${brand.green}`,
          overflow: "hidden",
          boxShadow: `0 8px 25px rgba(0, 255, 65, 0.2)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: 80,
            height: 90,
            backgroundColor: "#030712",
            border: `2px solid ${brand.green}88`,
            borderRadius: "50%",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -5,
            left: "50%",
            transform: "translateX(-50%)",
            width: 85,
            height: 115,
            backgroundColor: "#F9FAFB",
            borderRadius: "50% 50% 30% 30%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 38,
            left: "50%",
            transform: "translateX(-50%)",
            width: 74,
            height: 20,
            backgroundColor: "#000000",
            border: `2px solid ${brand.green}`,
            borderRadius: "4px",
            zIndex: 10,
            boxShadow: `0 0 10px ${brand.green}`,
            display: "flex",
            justifyContent: "space-between",
            padding: "0 10px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ width: 15, height: 2, backgroundColor: brand.green, marginTop: 4, opacity: 0.7 }} />
          <div style={{ width: 15, height: 2, backgroundColor: brand.green, marginTop: 4, opacity: 0.7 }} />
        </div>
        <div
          style={{
            position: "absolute",
            top: 55,
            left: "50%",
            transform: "translateX(-50%)",
            width: 20,
            height: 12,
            backgroundColor: "#F97316",
            borderRadius: "50%",
            zIndex: 5,
          }}
        />
      </div>
      <div style={{ position: "absolute", bottom: 18, left: 22, width: 34, height: 18, backgroundColor: "#F97316", borderRadius: "50%", transform: "rotate(-10deg)" }} />
      <div style={{ position: "absolute", bottom: 18, right: 22, width: 34, height: 18, backgroundColor: "#F97316", borderRadius: "50%", transform: "rotate(10deg)" }} />
    </div>
  );
};

// Simulated Matrix Falling Code block
export const MatrixRainEffect: React.FC = () => {
  const columns = Array.from({ length: 9 });
  const chars = ["0", "1", "X", "Y", "A", "B", "👽", "☠", "Ø"];
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        justifyContent: "space-between",
        opacity: 0.35,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 5,
      }}
    >
      {columns.map((_, i) => {
        const speed = 2 + Math.random() * 3;
        const delay = Math.random() * 2;
        return (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: brand.fontMono,
              fontSize: 18,
              color: brand.green,
              fontWeight: 800,
              textShadow: brand.glowGreen,
              animation: `matrixRain ${speed}s infinite linear`,
              animationDelay: `${delay}s`,
            }}
          >
            {Array.from({ length: 15 }).map((_, j) => (
              <span key={j} style={{ margin: "4px 0" }}>
                {chars[Math.floor(Math.random() * chars.length)]}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
};

// Cyber Grid background
export const CyberGrid: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#03050a", overflow: "hidden", zIndex: 1 }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "2px",
          background: `linear-gradient(to right, transparent, ${brand.green}, transparent)`,
          boxShadow: `0 0 15px ${brand.green}`,
          animation: "scanline 6s infinite linear",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 65, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 65, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          opacity: 0.9,
        }}
      />
    </AbsoluteFill>
  );
};

// HackerLinuxVideo Component
export const HackerLinuxVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slide1 = spring({ frame, fps, config: { damping: 14, stiffness: 80 } });
  const slide2 = spring({ frame: frame - 90, fps, config: { damping: 14 } });
  const slide3 = spring({ frame: frame - 210, fps, config: { damping: 14 } });
  const slide4 = spring({ frame: frame - 330, fps, config: { damping: 15 } });

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <style dangerouslySetInnerHTML={{ __html: inlineStyles }} />
      <CyberGrid />

      <div
        style={{
          position: "absolute",
          top: 80,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          fontFamily: brand.fontMono,
          fontSize: 26,
          fontWeight: 900,
          color: brand.green,
          letterSpacing: 6,
          textTransform: "uppercase",
          textShadow: brand.glowGreen,
          zIndex: 200,
        }}
      >
        [ SECURE-TERM v2026 ]
      </div>

      {/* SCENE 1: HOOK */}
      <Sequence from={0} durationInFrames={90}>
        <AbsoluteFill style={{ zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyOrigin: "center", justifyContent: "center", padding: "0 50px" }}>
          <div
            style={{
              width: "100%",
              background: "rgba(6, 10, 18, 0.75)",
              backdropFilter: "blur(20px)",
              border: `2.5px solid ${brand.green}`,
              borderRadius: 36,
              padding: "50px 30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: `scale(${slide1})`,
              animation: "pulseGreenAlert 2.5s infinite ease-in-out",
            }}
          >
            <div style={{ animation: "floatHacker 3s infinite ease-in-out", marginBottom: 35 }}>
              <HackerTux />
            </div>
            <h1 style={{ fontFamily: brand.fontSans, fontSize: 60, fontWeight: 900, color: brand.cream, margin: 0, lineHeight: 1.25, textAlign: "center", letterSpacing: "-1.5px" }}>
              3 Comandos Linux<br />que parecen <span style={{ color: brand.green, textShadow: brand.glowGreen }}>HACKING</span> 🥷💻
            </h1>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 2: CMATRIX */}
      <Sequence from={90} durationInFrames={120}>
        <AbsoluteFill style={{ zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px" }}>
          <div
            style={{
              width: "100%",
              background: "rgba(6, 10, 18, 0.75)",
              backdropFilter: "blur(20px)",
              border: "2px solid rgba(0, 255, 65, 0.2)",
              borderRadius: 36,
              padding: "40px 30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: `scale(${slide2})`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ width: "90%", height: 150, backgroundColor: "#020408", border: `1.5px solid ${brand.green}`, borderRadius: 20, position: "relative", overflow: "hidden", marginBottom: 35, padding: "20px 24px", boxSizing: "border-box" }}>
              <div style={{ fontFamily: brand.fontMono, color: brand.green, fontSize: 16, marginBottom: 10, textAlign: "left" }}>
                $ cmatrix <span style={{ animation: "blinkCursor 1s infinite", color: brand.green }}>_</span>
              </div>
              <MatrixRainEffect />
            </div>
            <div style={{ textAlign: "center", width: "100%" }}>
              <div style={{ fontFamily: brand.fontMono, color: brand.green, fontSize: 22, fontWeight: 800, letterSpacing: 2, marginBottom: 15, textShadow: brand.glowGreen }}>
                01. CMATRIX
              </div>
              <h2 style={{ fontFamily: brand.fontSans, fontSize: 48, fontWeight: 900, color: brand.cream, margin: 0, lineHeight: 1.3 }}>
                Llena tu terminal con la famosa lluvia digital de código. ¡Ideal para pantallas de fondo! ☕
              </h2>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 3: NMAP */}
      <Sequence from={210} durationInFrames={120}>
        <AbsoluteFill style={{ zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px" }}>
          <div
            style={{
              width: "100%",
              background: "rgba(6, 10, 18, 0.75)",
              backdropFilter: "blur(20px)",
              border: `2.5px solid ${brand.cyan}88`,
              borderRadius: 36,
              padding: "40px 30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: `scale(${slide3})`,
            }}
          >
            <div style={{ width: "90%", height: 150, backgroundColor: "#020408", border: `1.5px solid ${brand.cyan}`, borderRadius: 20, padding: "20px 24px", boxSizing: "border-box", overflow: "hidden", position: "relative", marginBottom: 35 }}>
              <div style={{ position: "absolute", top: "20%", right: "10%", width: 60, height: 60, border: `2px solid ${brand.cyan}`, borderRadius: "50%", animation: "scanRadar 2s infinite linear" }} />
              <div style={{ fontFamily: brand.fontMono, color: brand.cyan, fontSize: 16, marginBottom: 8, textAlign: "left" }}>
                $ sudo nmap -sn 192.168.1.0/24
              </div>
              <div style={{ fontFamily: brand.fontMono, fontSize: 16, color: brand.cyan, lineHeight: 1.45, textAlign: "left" }}>
                <div>[+] Scanning subnet devices...</div>
                <div>✔ Device found: Router (192.168.1.1)</div>
                <div>✔ Device found: Mi-iPhone (192.168.1.12)</div>
                <div style={{ color: "#EF4444", fontWeight: "bold" }}>⚠ UNKNOWN DEVICE (192.168.1.15)</div>
              </div>
            </div>
            <div style={{ textAlign: "center", width: "100%" }}>
              <div style={{ fontFamily: brand.fontMono, color: brand.cyan, fontSize: 22, fontWeight: 800, letterSpacing: 2, marginBottom: 15, textShadow: brand.glowCyan }}>
                02. WiFi INTRUDER SCAN
              </div>
              <h2 style={{ fontFamily: brand.fontSans, fontSize: 48, fontWeight: 900, color: brand.cream, margin: 0, lineHeight: 1.3 }}>
                Escanea tu WiFi y detecta intrusos (dispositivos desconocidos) conectados en segundos. 🔍
              </h2>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 4: CTA */}
      <Sequence from={330} durationInFrames={120}>
        <AbsoluteFill style={{ zIndex: 100, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", background: "rgba(3, 5, 10, 0.75)", backdropFilter: "blur(15px)" }}>
          <div
            style={{
              background: "rgba(6, 10, 18, 0.85)",
              border: `3px solid ${brand.green}`,
              borderRadius: 40,
              padding: "55px 35px",
              width: "100%",
              textAlign: "center",
              transform: `scale(${slide4})`,
              boxShadow: `0 20px 60px rgba(0, 255, 65, 0.25), ${brand.glowGreen}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ fontFamily: brand.fontMono, fontSize: 28, fontWeight: 900, color: brand.green, letterSpacing: 4, marginBottom: 20 }}>¿QUIERES APRENDER MÁS?</div>
            <h2 style={{ fontFamily: brand.fontSans, fontSize: 60, fontWeight: 900, color: brand.cream, margin: "0 0 45px 0", lineHeight: 1.25, letterSpacing: "-1.5px" }}>
              Sígueme para dominar <span style={{ color: brand.green, textShadow: brand.glowGreen }}>Linux</span>, herramientas hacker y <span style={{ color: brand.cyan, textShadow: brand.glowCyan }}>Ciberseguridad</span>!
            </h2>
            <div style={{ fontFamily: brand.fontMono, fontSize: 32, fontWeight: 800, color: brand.orange, textShadow: brand.glowOrange, animation: "pulse 2s infinite ease-in-out" }}>
              💾 ¡Guarda y comparte este video! 🥷
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      <div style={{ position: "absolute", bottom: 70, left: 0, right: 0, display: "flex", justifyContent: "center", fontFamily: brand.fontMono, fontSize: 26, fontWeight: 700, color: brand.cream, opacity: 0.8, zIndex: 200 }}>
        {brand.handle}
      </div>
    </AbsoluteFill>
  );
};
