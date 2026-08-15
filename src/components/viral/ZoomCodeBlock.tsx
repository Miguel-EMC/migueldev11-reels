import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { emcodeTheme } from "../../themes/emcode";

interface Props {
  code: string;
  language: "python" | "typescript" | "javascript" | "bash" | "json" | "hcl" | "dockerfile" | "sql" | "yaml";
  filename?: string;
  highlightLines?: number[];
  startFrame?: number;
  zoomOnHighlight?: boolean;
  typingSpeed?: number;
  fontSize?: number;
}

export const ZoomCodeBlock: React.FC<Props> = ({
  code,
  language,
  filename = "main.py",
  highlightLines = [],
  startFrame = 0,
  zoomOnHighlight = true,
  typingSpeed = 999,
  fontSize = 25,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = Math.max(0, frame - startFrame);

  const entrance = spring({
    frame: relFrame,
    fps,
    config: { damping: 14, mass: 0.5, stiffness: 140 },
  });

  const typedLength = Math.min(code.length, Math.floor(relFrame * typingSpeed));
  const displayedCode = code.slice(0, Math.max(1, typedLength));

  const zoomScale = zoomOnHighlight && highlightLines.length > 0 && relFrame > 15
    ? interpolate(relFrame, [15, 35], [1, 1.03], { extrapolateRight: "clamp" })
    : 1;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background: "rgba(10, 15, 30, 0.9)",
        backdropFilter: "blur(16px)",
        border: `3px solid ${emcodeTheme.green}`,
        borderRadius: 26,
        overflow: "hidden",
        boxShadow: `0 20px 50px rgba(0,0,0,0.7), ${emcodeTheme.glowGreen}44`,
        transform: `scale(${entrance * zoomScale})`,
        opacity: entrance,
        boxSizing: "border-box",
      }}
    >
      {/* Title Bar with macOS/Linux Dots */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        background: "rgba(15, 23, 42, 0.9)",
        borderBottom: `2px solid ${emcodeTheme.borderDark}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: emcodeTheme.red }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: emcodeTheme.orange }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: emcodeTheme.green }} />
          </div>
          <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 20, fontWeight: 700, color: emcodeTheme.cream }}>
            {filename}
          </span>
        </div>

        <div style={{
          fontFamily: emcodeTheme.fontMono,
          fontSize: 14,
          fontWeight: 800,
          color: emcodeTheme.green,
          background: "rgba(0, 255, 65, 0.12)",
          border: `1px solid ${emcodeTheme.green}66`,
          borderRadius: 8,
          padding: "4px 12px",
          textTransform: "uppercase",
        }}>
          {language}
        </div>
      </div>

      {/* Code Body */}
      <div style={{ padding: "24px 28px", fontFamily: emcodeTheme.fontMono, overflow: "hidden" }}>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers={true}
          wrapLines={true}
          lineProps={(lineNumber) => {
            const isHighlighted = highlightLines.includes(lineNumber);
            return {
              style: {
                display: "block",
                backgroundColor: isHighlighted ? "rgba(0, 255, 65, 0.18)" : "transparent",
                borderLeft: isHighlighted ? `5px solid ${emcodeTheme.green}` : "5px solid transparent",
                paddingLeft: "14px",
                lineHeight: "1.6",
                boxShadow: isHighlighted ? `inset 0 0 20px rgba(0,255,65,0.1)` : "none",
              },
            };
          }}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize: `${fontSize}px`,
            lineHeight: 1.6,
          }}
        >
          {displayedCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
