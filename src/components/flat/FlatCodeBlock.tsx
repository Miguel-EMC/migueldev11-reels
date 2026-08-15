import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord, oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { interpolate, useCurrentFrame } from "remotion";

interface Props {
  code: string;
  language: "python" | "typescript" | "javascript" | "bash" | "json" | "hcl" | "dockerfile" | "sql";
  filename?: string;
  themeType?: "nord" | "oneDark";
  highlightLines?: number[];
  startFrame?: number;
  durationInFrames?: number;
  typingAnimation?: boolean;
  fontSize?: number;
}

export const FlatCodeBlock: React.FC<Props> = ({
  code,
  language,
  filename = "main.py",
  themeType = "oneDark",
  highlightLines = [],
  startFrame = 0,
  durationInFrames = 30,
  typingAnimation = false,
  fontSize = 26,
}) => {
  const frame = useCurrentFrame();
  const currentProgress = interpolate(
    frame - startFrame,
    [0, durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const displayedCode = typingAnimation
    ? code.slice(0, Math.max(1, Math.floor(code.length * currentProgress)))
    : code;

  const activeTheme = themeType === "nord" ? nord : oneDark;

  return (
    <div className="w-full flex flex-col border-2 border-[#1A3A1A] bg-[#0A1A0A] overflow-hidden rounded-none shadow-none">
      {/* Flat Window Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#0D160D] border-b-2 border-[#1A3A1A]">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-none bg-[#1A3A1A]" />
            <div className="w-4 h-4 rounded-none bg-[#2D5A2D]" />
            <div className="w-4 h-4 rounded-none bg-[#3D7A45]" />
          </div>
          <span className="font-mono text-xl font-bold text-[#E8F5EA] tracking-wider">
            {filename}
          </span>
        </div>
        <span className="text-base uppercase font-mono font-bold px-3 py-1 bg-[#0E240E] text-[#7CFC88] border border-[#2D5A2D]">
          {language}
        </span>
      </div>

      {/* Code Editor Body */}
      <div className="p-6 font-mono overflow-hidden">
        <SyntaxHighlighter
          language={language}
          style={activeTheme}
          showLineNumbers={true}
          wrapLines={true}
          lineProps={(lineNumber) => {
            const isHighlighted = highlightLines.includes(lineNumber);
            return {
              style: {
                display: "block",
                backgroundColor: isHighlighted ? "rgba(124, 252, 136, 0.15)" : "transparent",
                borderLeft: isHighlighted ? "4px solid #7CFC88" : "4px solid transparent",
                paddingLeft: isHighlighted ? "12px" : "12px",
                lineHeight: "1.65",
              },
            };
          }}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize: `${fontSize}px`,
            lineHeight: 1.65,
          }}
        >
          {displayedCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
