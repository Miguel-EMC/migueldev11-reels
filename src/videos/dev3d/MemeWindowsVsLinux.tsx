import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Sequence } from "remotion";
import { brand } from "../../themes/brand";

// ---------------------------------------------------------
// Elegant & Smooth CSS Keyframes (No violent shaking, only premium fluid motions)
// ---------------------------------------------------------
const inlineStyles = `
@keyframes smoothFloat {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}
@keyframes smoothFloatReverse {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(8px) rotate(-1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}
@keyframes pulseNeon {
  0%, 100% { box-shadow: 0 0 15px rgba(34, 211, 238, 0.2), inset 0 0 10px rgba(34, 211, 238, 0.1); }
  50% { box-shadow: 0 0 25px rgba(34, 211, 238, 0.45), inset 0 0 15px rgba(34, 211, 238, 0.2); }
}
@keyframes pulseNeonRed {
  0%, 100% { box-shadow: 0 0 15px rgba(239, 68, 68, 0.2), inset 0 0 10px rgba(239, 68, 68, 0.1); }
  50% { box-shadow: 0 0 25px rgba(239, 68, 68, 0.45), inset 0 0 15px rgba(239, 68, 68, 0.2); }
}
@keyframes pulseNeonGreen {
  0%, 100% { box-shadow: 0 0 15px rgba(0, 255, 65, 0.2), inset 0 0 10px rgba(0, 255, 65, 0.1); }
  50% { box-shadow: 0 0 25px rgba(0, 255, 65, 0.45), inset 0 0 15px rgba(0, 255, 65, 0.2); }
}
@keyframes matrixScroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(-80px); }
}
@keyframes radialBreath {
  0%, 100% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.15; }
  50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.35; }
}
`;

// Tux Penguin (CSS)
export const TuxPenguin: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
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
          backgroundColor: "#0B0F19",
          borderRadius: "50% 50% 42% 42%",
          border: `2.5px solid ${brand.green}`,
          overflow: "hidden",
          boxShadow: `0 8px 20px rgba(0, 255, 65, 0.1)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -5,
            left: "50%",
            transform: "translateX(-50%)",
            width: 85,
            height: 105,
            backgroundColor: "#F8FAFC",
            borderRadius: "50% 50% 35% 35%",
          }}
        />
        <div style={{ position: "absolute", top: 32, left: 30, width: 20, height: 26, backgroundColor: "#ffffff", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 8, height: 8, backgroundColor: "#000", borderRadius: "50%" }} />
        </div>
        <div style={{ position: "absolute", top: 32, right: 30, width: 20, height: 26, backgroundColor: "#ffffff", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 8, height: 8, backgroundColor: "#000", borderRadius: "50%" }} />
        </div>
        <div
          style={{
            position: "absolute",
            top: 48,
            left: "50%",
            transform: "translateX(-50%)",
            width: 26,
            height: 16,
            backgroundColor: "#F97316",
            borderRadius: "50%",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: 10,
          top: 60,
          width: 25,
          height: 80,
          backgroundColor: "#0B0F19",
          borderRadius: "50% 10% 10% 50%",
          transform: "rotate(20deg)",
          borderLeft: `2px solid ${brand.green}`,
          borderBottom: `1.5px solid ${brand.green}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 10,
          top: 60,
          width: 25,
          height: 80,
          backgroundColor: "#0B0F19",
          borderRadius: "10% 50% 50% 10%",
          transform: "rotate(-20deg)",
          borderRight: `2px solid ${brand.green}`,
          borderBottom: `1.5px solid ${brand.green}`,
        }}
      />
      <div style={{ position: "absolute", bottom: 18, left: 20, width: 38, height: 20, backgroundColor: "#F97316", borderRadius: "50%", transform: "rotate(-10deg)" }} />
      <div style={{ position: "absolute", bottom: 18, right: 20, width: 38, height: 20, backgroundColor: "#F97316", borderRadius: "50%", transform: "rotate(10deg)" }} />
    </div>
  );
};

// Laptop screen (CSS)
export const WindowsMascot: React.FC<{ style?: React.CSSProperties; errorMode?: boolean }> = ({ style, errorMode = false }) => {
  return (
    <div
      style={{
        position: "relative",
        width: 200,
        height: 160,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 220,
          height: 180,
          borderRadius: "20%",
          background: `radial-gradient(circle, ${errorMode ? "#EF4444" : brand.cyan}20 0%, transparent 70%)`,
        }}
      />
      <div
        style={{
          width: 170,
          height: 105,
          backgroundColor: errorMode ? "#0078d7" : "#0F172A",
          border: `5px solid #475569`,
          borderRadius: "10px 10px 0 0",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          boxShadow: `0 8px 20px rgba(0,0,0,0.5)`,
          borderBottom: "none",
        }}
      >
        {errorMode ? (
          <div
            style={{
              padding: 8,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              fontFamily: brand.fontMono,
              color: "#ffffff",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: 24, fontWeight: "bold", marginBottom: 3 }}>:(</div>
            <div style={{ fontSize: 8, lineHeight: 1.25, opacity: 0.95 }}>
              Your PC ran into a problem.
              <br />
              DOCKER_OUT_OF_RAM
              <br />
              <span style={{ color: "#38bdf8", fontWeight: "bold" }}>99% complete</span>
            </div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, width: 44, height: 44 }}>
            <div style={{ width: 19, height: 19, backgroundColor: "#F25022" }} />
            <div style={{ width: 19, height: 19, backgroundColor: "#7FBA00" }} />
            <div style={{ width: 19, height: 19, backgroundColor: "#00A4EF" }} />
            <div style={{ width: 19, height: 19, backgroundColor: "#FFB900" }} />
          </div>
        )}
      </div>
      <div
        style={{
          width: 196,
          height: 10,
          backgroundColor: "#64748b",
          borderRadius: "0 0 6px 6px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          position: "relative",
          borderTop: "1px solid #94a3b8",
        }}
      >
        <div style={{ width: 34, height: 3, backgroundColor: "#334155", margin: "0 auto", borderRadius: "0 0 1px 1px" }} />
      </div>
    </div>
  );
};

// Cyber Grid background
export const CyberGrid: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#04060b", overflow: "hidden", zIndex: 1 }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 700,
          height: 700,
          background: `radial-gradient(circle, ${brand.cyan}0f 0%, transparent 60%)`,
          animation: "radialBreath 5s infinite ease-in-out",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "55%",
          width: 600,
          height: 600,
          background: `radial-gradient(circle, ${brand.green}08 0%, transparent 60%)`,
          animation: "radialBreath 7s infinite ease-in-out",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(34, 211, 238, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 211, 238, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          opacity: 0.8,
        }}
      />
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }} viewBox="0 0 1080 1920">
        <g stroke={brand.cyan} strokeWidth="1.5" fill="none">
          <path d="M100 200 L980 1080 M980 840 L100 1720" strokeDasharray="6 12" />
        </g>
      </svg>
    </AbsoluteFill>
  );
};

// Meme Windows vs Linux Video Component
export const MemeWindowsVsLinux: React.FC = () => {
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
          color: brand.cyan,
          letterSpacing: 6,
          textTransform: "uppercase",
          textShadow: brand.glowCyan,
          zIndex: 200,
        }}
      >
        [ MIGUELDEV11 DEVOPS ]
      </div>

      {/* SCENE 1: HOOK */}
      <Sequence from={0} durationInFrames={90}>
        <AbsoluteFill style={{ zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px" }}>
          <div
            style={{
              width: "100%",
              background: "rgba(10, 14, 26, 0.65)",
              backdropFilter: "blur(20px)",
              border: `2px solid rgba(255, 255, 255, 0.08)`,
              borderRadius: 36,
              padding: "50px 30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: `scale(${slide1})`,
              animation: "pulseNeon 3s infinite ease-in-out",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: "100%", marginBottom: 50 }}>
              <div style={{ animation: "smoothFloat 3s infinite ease-in-out", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <WindowsMascot errorMode={false} />
                <span style={{ fontFamily: brand.fontMono, fontSize: 22, color: brand.cyan, marginTop: 10, fontWeight: "bold" }}>Windows</span>
              </div>
              <div style={{ fontFamily: brand.fontMono, fontSize: 36, fontWeight: 900, color: brand.textDim }}>VS</div>
              <div style={{ animation: "smoothFloatReverse 3s infinite ease-in-out", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <TuxPenguin />
                <span style={{ fontFamily: brand.fontMono, fontSize: 22, color: brand.green, marginTop: 10, fontWeight: "bold" }}>Linux</span>
              </div>
            </div>
            <h1 style={{ fontFamily: brand.fontSans, fontSize: 60, fontWeight: 900, color: brand.cream, margin: 0, lineHeight: 1.25, textAlign: "center", letterSpacing: "-1.5px" }}>
              Windows vs Linux:<br />¿Cuál es <span style={{ color: brand.green, textShadow: brand.glowGreen }}>MEJOR</span> para Devs? 🤔
            </h1>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 2: WINDOWS FAILURE */}
      <Sequence from={90} durationInFrames={120}>
        <AbsoluteFill style={{ zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px" }}>
          <div
            style={{
              width: "100%",
              background: "rgba(10, 14, 26, 0.7)",
              backdropFilter: "blur(20px)",
              border: `2.5px solid ${frame >= 120 ? "#EF444488" : "rgba(255, 255, 255, 0.08)"}`,
              borderRadius: 36,
              padding: "45px 30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: `scale(${slide2})`,
              animation: frame >= 120 ? "pulseNeonRed 2.5s infinite ease-in-out" : "pulseNeon 3s infinite",
            }}
          >
            <div style={{ marginBottom: 35, animation: frame >= 120 ? "none" : "smoothFloat 3s infinite ease-in-out", transform: frame >= 120 ? "scale(1.08)" : "scale(1)", transition: "transform 0.4s ease" }}>
              <WindowsMascot errorMode={frame >= 120} />
            </div>
            <div style={{ textAlign: "center", width: "100%" }}>
              <div style={{ fontFamily: brand.fontMono, color: frame >= 120 ? "#EF4444" : brand.orange, fontSize: 22, fontWeight: 800, letterSpacing: 2, marginBottom: 15 }}>
                [ WINDOWS DEV ENVIRONMENT ]
              </div>
              <h2 style={{ fontFamily: brand.fontSans, fontSize: 48, fontWeight: 900, color: brand.cream, margin: 0, lineHeight: 1.3, letterSpacing: "-0.5px" }}>
                {frame >= 120 ? (
                  <span>Corriendo Docker con <span style={{ color: "#EF4444", textShadow: "0 0 10px rgba(239,68,68,0.4)" }}>8GB de RAM</span>... ¡BOOM! 🫠</span>
                ) : (
                  <span>Levantando WSL2 y cruzando los dedos... ⏳</span>
                )}
              </h2>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 3: LINUX OPTIMIZATION */}
      <Sequence from={210} durationInFrames={120}>
        <AbsoluteFill style={{ zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px" }}>
          <div
            style={{
              width: "100%",
              background: "rgba(10, 14, 26, 0.7)",
              backdropFilter: "blur(20px)",
              border: `2.5px solid ${brand.green}66`,
              borderRadius: 36,
              padding: "45px 30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: `scale(${slide3})`,
              animation: "pulseNeonGreen 2.5s infinite ease-in-out",
            }}
          >
            <div style={{ animation: "smoothFloatReverse 3s infinite ease-in-out", marginBottom: 30 }}>
              <TuxPenguin />
            </div>
            <div style={{ background: "#080C14", border: `1.5px solid ${brand.green}44`, borderRadius: 20, padding: "20px 24px", width: "90%", overflow: "hidden", height: 120, position: "relative", marginBottom: 35 }}>
              <div style={{ fontFamily: brand.fontMono, color: brand.green, fontSize: 16, marginBottom: 8, display: "flex", justifyContent: "space-between" }}>
                <span>$ user@linux: ~</span>
                <span style={{ opacity: 0.5 }}>htop</span>
              </div>
              <div style={{ fontFamily: brand.fontMono, fontSize: 16, color: "#16a34a", lineHeight: 1.45, textAlign: "left", animation: "matrixScroll 5s infinite linear" }}>
                <div>✔ Host: Ubuntu LTS 2026</div>
                <div>✔ RAM Usage: 160MB / 16GB (1.0%)</div>
                <div>✔ CPU Load: [|               ] 0.5%</div>
                <div>✔ Processes running: Chilled</div>
                <div>✔ Uptime: 452 days without lag</div>
                <div>✔ Development status: Maximum speed</div>
              </div>
            </div>
            <h2 style={{ fontFamily: brand.fontSans, fontSize: 46, fontWeight: 900, color: brand.cream, margin: 0, lineHeight: 1.3, textAlign: "center", letterSpacing: "-0.5px" }}>
              Linux corre con <span style={{ color: brand.green, textShadow: brand.glowGreen }}>160MB de RAM</span> y jamás se congela 😎🚀
            </h2>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 4: CTA */}
      <Sequence from={330} durationInFrames={120}>
        <AbsoluteFill style={{ zIndex: 100, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", background: "rgba(4, 6, 11, 0.75)", backdropFilter: "blur(15px)" }}>
          <div
            style={{
              background: "rgba(10, 14, 26, 0.85)",
              border: `3px solid ${brand.green}`,
              borderRadius: 40,
              padding: "55px 35px",
              width: "100%",
              textAlign: "center",
              transform: `scale(${slide4})`,
              boxShadow: `0 20px 60px rgba(0, 255, 65, 0.2), ${brand.glowGreen}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ fontFamily: brand.fontMono, fontSize: 28, fontWeight: 900, color: brand.green, letterSpacing: 4, marginBottom: 20 }}>¿Y TÚ, QUÉ OPERAS?</div>
            <h2 style={{ fontFamily: brand.fontSans, fontSize: 60, fontWeight: 900, color: brand.cream, margin: "0 0 45px 0", lineHeight: 1.25, letterSpacing: "-1.5px" }}>
              ¿Eres del team <span style={{ color: brand.green, textShadow: brand.glowGreen }}>Linux</span> 🐧 o te quedas en <span style={{ color: brand.cyan, textShadow: brand.glowCyan }}>Windows</span>?
            </h2>
            <div style={{ fontFamily: brand.fontMono, fontSize: 32, fontWeight: 800, color: brand.orange, textShadow: brand.glowOrange, animation: "pulse 2s infinite ease-in-out" }}>
              💬 ¡Vota en comentarios! 💾
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
