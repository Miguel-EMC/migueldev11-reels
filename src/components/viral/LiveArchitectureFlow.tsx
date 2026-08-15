import React from "react";
import { getLength, getPointAtLength } from "@remotion/paths";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { emcodeTheme } from "../../themes/emcode";
import {
  AwsLogo,
  LambdaIcon,
  ApiGatewayIcon,
  BedrockIcon,
  S3Icon,
  TerraformIcon,
  StepFunctionsIcon,
} from "../flat/FlatIcons";

export interface ViralNode {
  id: string;
  label: string;
  sublabel: string;
  category: "storage" | "compute" | "api" | "ai" | "database" | "infra";
  x: number;
  y: number;
  iconType: "lambda" | "apigw" | "bedrock" | "s3" | "terraform" | "stepfunctions" | "custom";
  statusText?: string;
  startDelay?: number;
}

export interface ViralEdge {
  from: string;
  to: string;
  d: string;
  color?: string;
  flowSpeed?: number;
}

interface Props {
  title?: string;
  nodes: ViralNode[];
  edges: ViralEdge[];
  height?: number;
  width?: number;
}

const renderIcon = (type: string) => {
  switch (type) {
    case "lambda":
      return <LambdaIcon size={48} />;
    case "apigw":
      return <ApiGatewayIcon size={48} />;
    case "bedrock":
      return <BedrockIcon size={48} />;
    case "s3":
      return <S3Icon size={48} />;
    case "terraform":
      return <TerraformIcon size={48} />;
    case "stepfunctions":
      return <StepFunctionsIcon size={48} />;
    default:
      return (
        <div style={{
          width: 48,
          height: 48,
          backgroundColor: "rgba(0,0,0,0.6)",
          border: `2px solid ${emcodeTheme.green}`,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: emcodeTheme.fontMono,
          fontWeight: 900,
          color: emcodeTheme.green,
        }}>
          λ
        </div>
      );
  }
};

export const LiveArchitectureFlow: React.FC<Props> = ({
  title,
  nodes,
  edges,
  height = 160,
  width = 960,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background: "rgba(10, 15, 30, 0.85)",
        backdropFilter: "blur(16px)",
        border: `3px solid ${emcodeTheme.green}`,
        borderRadius: 26,
        padding: "20px 24px",
        boxShadow: `0 20px 50px rgba(0,0,0,0.7), ${emcodeTheme.glowGreen}33`,
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {title && (
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 12,
          marginBottom: 12,
          borderBottom: `2px solid ${emcodeTheme.borderDark}`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: emcodeTheme.green, boxShadow: emcodeTheme.glowGreen }} />
            <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 18, fontWeight: 800, color: emcodeTheme.cream, textTransform: "uppercase" }}>
              {title}
            </span>
          </div>
          <span style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 12,
            fontWeight: 900,
            color: emcodeTheme.green,
            background: "rgba(0, 255, 65, 0.12)",
            border: `1px solid ${emcodeTheme.green}66`,
            borderRadius: 8,
            padding: "4px 10px",
            textTransform: "uppercase",
          }}>
            ⚡ LIVE FLOW
          </span>
        </div>
      )}

      <div style={{ position: "relative", width: "100%", height: `${height}px`, overflow: "hidden" }}>
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          viewBox={`0 0 ${width} ${height}`}
        >
          {edges.map((edge, idx) => {
            const pathLength = getLength(edge.d);
            const speed = edge.flowSpeed ?? 24;
            const p1 = (frame / speed) % 1;
            const p2 = ((frame + speed * 0.5) / speed) % 1;

            const pt1 = getPointAtLength(edge.d, pathLength * p1);
            const pt2 = getPointAtLength(edge.d, pathLength * p2);

            return (
              <g key={`${edge.from}-${edge.to}-${idx}`}>
                <path
                  d={edge.d}
                  fill="none"
                  stroke="#1E293B"
                  strokeWidth={5}
                  strokeLinecap="round"
                />
                <path
                  d={edge.d}
                  fill="none"
                  stroke={edge.color ?? emcodeTheme.green}
                  strokeWidth={3}
                  strokeDasharray="10 10"
                  strokeLinecap="round"
                  opacity={0.8}
                />
                <circle
                  cx={pt1.x}
                  cy={pt1.y}
                  r={8}
                  fill={emcodeTheme.green}
                  style={{ filter: `drop-shadow(0 0 8px ${emcodeTheme.green})` }}
                />
                <circle
                  cx={pt2.x}
                  cy={pt2.y}
                  r={6}
                  fill={edge.color ?? emcodeTheme.cyan}
                  opacity={0.7}
                />
              </g>
            );
          })}
        </svg>

        {nodes.map((node, idx) => {
          const delay = node.startDelay ?? idx * 6;
          const nodeSpring = spring({
            frame: frame - delay,
            fps,
            config: { damping: 12, mass: 0.4, stiffness: 180 },
          });

          return (
            <div
              key={node.id}
              style={{
                position: "absolute",
                left: `${node.x}px`,
                top: `${node.y}px`,
                transform: `translate(-50%, -50%) scale(${Math.max(0, nodeSpring)})`,
                opacity: nodeSpring,
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "12px 18px",
                background: "rgba(15, 23, 42, 0.95)",
                border: `2px solid ${emcodeTheme.green}88`,
                borderRadius: 18,
                boxShadow: `0 10px 30px rgba(0,0,0,0.6), ${emcodeTheme.glowGreen}22`,
                minWidth: 230,
              }}
            >
              {renderIcon(node.iconType)}
              <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                <span style={{ fontFamily: emcodeTheme.fontSans, fontSize: 18, fontWeight: 900, color: emcodeTheme.cream, lineHeight: 1.2 }}>
                  {node.label}
                </span>
                <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 13, color: emcodeTheme.textDim, fontWeight: 600 }}>
                  {node.sublabel}
                </span>
                {node.statusText && (
                  <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 11, color: emcodeTheme.green, fontWeight: 800, textTransform: "uppercase", marginTop: 2 }}>
                    ● {node.statusText}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
