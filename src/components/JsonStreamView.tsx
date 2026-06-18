import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../themes/brand";

interface JsonStreamViewProps {
  title?: string;
  width?: number | string;
}

export const JsonStreamView: React.FC<JsonStreamViewProps> = ({ 
  title = "DATA_STREAM.json",
  width = "100%" 
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Pulse effect simulating asynchronous streaming writes
  const cursorPulse = Math.sin(frame / 6) > 0;
  
  // Matrix lines trigger staggered sequences
  const line1 = spring({ frame, fps });
  const line2 = spring({ frame: frame - 15, fps });
  const line3 = spring({ frame: frame - 30, fps });
  const line4 = spring({ frame: frame - 45, fps });
  const line5 = spring({ frame: frame - 60, fps });

  return (
    <div style={{
      width,
      background: "rgba(6, 11, 25, 0.85)",
      backdropFilter: "blur(16px)",
      border: `2px solid ${brand.green}33`,
      borderRadius: 20,
      padding: 30,
      fontFamily: brand.fontMono,
      fontSize: 26,
      boxShadow: `0 25px 50px rgba(0,0,0,0.6), inset 0 0 20px ${brand.green}0A`,
      color: brand.cream,
      boxSizing: "border-box"
    }}>
      {/* Code Header Bar */}
      <div style={{
        display: "flex", justifyContent: "between", alignItems: "center",
        borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 15, marginBottom: 20
      }}>
        <div style={{ color: brand.textDim, fontSize: 20 }}>{title}</div>
        <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#EF4444" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#F59E0B" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: brand.green }} />
        </div>
      </div>

      {/* Code Rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, lineHeight: 1.4 }}>
        <div style={{ opacity: line1, transform: `translateX(${interpolate(line1, [0, 1], [-20, 0])}px)` }}>
          <span style={{ color: brand.orange }}>{"{"}</span>
        </div>
        
        <div style={{ opacity: line2, transform: `translateX(${interpolate(line2, [0, 1], [-20, 0])}px)`, paddingLeft: 30 }}>
          <span style={{ color: brand.green }}>"id"</span>: <span style={{ color: brand.cyan }}>"chunk_042"</span>,
        </div>

        <div style={{ opacity: line3, transform: `translateX(${interpolate(line3, [0, 1], [-20, 0])}px)`, paddingLeft: 30 }}>
          <span style={{ color: brand.green }}>"similarity"</span>: <span style={{ color: brand.cyan }}>0.9842</span>,
        </div>

        <div style={{ opacity: line4, transform: `translateX(${interpolate(line4, [0, 1], [-20, 0])}px)`, paddingLeft: 30 }}>
          <span style={{ color: brand.green }}>"metadata"</span>: <span style={{ color: brand.orange }}>{"{"}</span>
          <span style={{ color: brand.cream, fontSize: 22, opacity: 0.6, marginLeft: 10 }}>// context matched</span>
        </div>

        <div style={{ opacity: line5, transform: `translateX(${interpolate(line5, [0, 1], [-20, 0])}px)`, paddingLeft: 60 }}>
          <span style={{ color: brand.green }}>"source"</span>: <span style={{ color: brand.cream }}>"documento_canino.pdf"</span>
        </div>

        <div style={{ opacity: line4, paddingLeft: 30 }}>
          <span style={{ color: brand.orange }}>{"}"}</span>
        </div>

        <div style={{ opacity: line1 }}>
          <span style={{ color: brand.orange }}>{"}"}</span>
          {cursorPulse && <span style={{ color: brand.green, marginLeft: 5, fontWeight: 900 }}>_</span>}
        </div>
      </div>
    </div>
  );
};
