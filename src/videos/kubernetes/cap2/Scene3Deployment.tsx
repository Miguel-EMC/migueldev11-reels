import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { k8sTheme } from "../../../themes/kubernetes";
import { GridBackground } from "../../../components/GridBackground";
import { Box, RefreshCw, XCircle } from "lucide-react";

export const Scene3Deployment: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const pods = spring({ frame: frame-20, fps, config: {stiffness: 50}});
  const replica = spring({ frame: frame-50, fps, config: {stiffness: 40}});
  
  const dying = frame > 80 && frame % 120 < 40;
  const recovering = frame > 100 && frame % 120 < 20;

  return (
    <AbsoluteFill style={{ backgroundColor: k8sTheme.bg }}>
      <GridBackground color={k8sTheme.k8sBlue} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", alignItems: "center", justifyContent: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: k8sTheme.fontSans, fontSize: 80, fontWeight: 900, color: k8sTheme.cream, letterSpacing: "-2px" }}>
            DEPLOYMENT
          </div>
        </div>

        {/* Master Controller Box */}
        <div style={{
          background: "rgba(10, 20, 40, 0.8)", backdropFilter: "blur(20px)",
          border: `4px dashed ${k8sTheme.k8sBlue}`, borderRadius: 40, padding: "50px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 40,
          opacity: entrance, width: '100%', boxShadow: `0 30px 80px rgba(0,0,0,0.8), inset 0 0 40px ${k8sTheme.k8sBlue}22`
        }}>
          
          <div style={{ display: 'flex', gap: 30, justifyContent: "center", width: "100%", perspective: 800 }}>
            {[1, 2, 3].map(i => {
              const isDying = i === 2 && dying;
              return(
              <div key={i} style={{
                background: isDying ? "rgba(239, 68, 68, 0.1)" : "rgba(34, 211, 238, 0.1)",
                border: `3px solid ${isDying ? k8sTheme.red : k8sTheme.cyan}`,
                borderRadius: 24, padding: "30px 20px", width: "30%",
                opacity: pods, 
                transform: `rotateY(${isDying ? 20 : 0}deg) scale(${isDying ? 0.9 : 1})`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 15,
                boxShadow: isDying ? k8sTheme.glowRed : k8sTheme.glowCyan,
                transition: "all 0.3s ease"
              }}>
                {isDying ? <XCircle size={80} color={k8sTheme.red} /> : <Box size={80} color={k8sTheme.cyan} />}
                <div style={{fontFamily: k8sTheme.fontMono, color: isDying ? k8sTheme.red : k8sTheme.cream, fontSize: 26, fontWeight: 900}}>
                  POD {i}
                </div>
              </div>
            )})}
          </div>

          {/* Self-healing controller indicator */}
          <div style={{
            opacity: replica, transform: `scale(${replica})`, 
            display: 'flex', alignItems: 'center', gap: 20, 
            background: recovering ? "rgba(0, 255, 65, 0.2)" : "rgba(0, 255, 65, 0.05)", 
            padding: '20px 40px', borderRadius: 24, 
            border: `3px solid ${k8sTheme.green}`,
            boxShadow: recovering ? k8sTheme.glowGreen : "none",
            transition: "all 0.3s"
          }}>
            <RefreshCw size={40} color={k8sTheme.green} style={{ transform: `rotate(${frame * 4}deg)` }} />
            <div style={{fontFamily: k8sTheme.fontMono, color: k8sTheme.green, fontSize: 32, fontWeight: 900}}>
              {recovering ? "AUTO-REPARANDO..." : "MANTENIENDO 3 REPLICAS"}
            </div>
          </div>

        </div>

        <div style={{
          fontFamily: k8sTheme.fontSans, fontSize: 44, fontWeight: 700, color: k8sTheme.textDim,
          textAlign: "center", marginTop: 80, lineHeight: 1.3, opacity: entrance
        }}>
          Si un Pod muere,<br/>
          <span style={{ color: k8sTheme.green, fontWeight: 900, textShadow: k8sTheme.glowGreen }}>Se crea otro automáticamente.</span>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
