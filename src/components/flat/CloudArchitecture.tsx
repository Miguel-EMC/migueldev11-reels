import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { AnimatedFlow } from "./AnimatedFlow";
import {
  AwsLogo,
  LambdaIcon,
  ApiGatewayIcon,
  BedrockIcon,
  S3Icon,
  TerraformIcon,
  StepFunctionsIcon,
} from "./FlatIcons";

export interface CloudNode {
  id: string;
  label: string;
  sublabel: string;
  category: "storage" | "compute" | "api" | "ai" | "database" | "infra";
  x: number;
  y: number;
  iconType?: "lambda" | "apigw" | "bedrock" | "s3" | "terraform" | "stepfunctions" | "custom";
  iconText?: string;
  startFrame?: number;
}

export interface CloudEdge {
  from: string;
  to: string;
  d: string;
  startFrame?: number;
  color?: string;
}

interface Props {
  title?: string;
  nodes: CloudNode[];
  edges: CloudEdge[];
  width?: number;
  height?: number;
}

const CATEGORY_STYLES: Record<string, { border: string; tagBg: string; text: string }> = {
  storage: { border: "#FF7A1A", tagBg: "#7A3500", text: "#FFD0A8" },
  compute: { border: "#7CFC88", tagBg: "#0E240E", text: "#7CFC88" },
  api: { border: "#5BE06A", tagBg: "#0E240E", text: "#B6FFC0" },
  ai: { border: "#00FF41", tagBg: "#0E240E", text: "#E8F5EA" },
  database: { border: "#22D3EE", tagBg: "#083344", text: "#A5F3FC" },
  infra: { border: "#7CFC88", tagBg: "#0E240E", text: "#B6FFC0" },
};

const renderIcon = (type?: string, text?: string) => {
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
        <div className="w-12 h-12 bg-[#0A1A0A] border-2 border-[#7CFC88] flex items-center justify-center font-mono font-black text-[#7CFC88] text-lg">
          {text ?? "IO"}
        </div>
      );
  }
};

export const CloudArchitecture: React.FC<Props> = ({
  title,
  nodes,
  edges,
  width = 960,
  height = 420,
}) => {
  const frame = useCurrentFrame();

  return (
    <div className="w-full flex flex-col border-2 border-[#1A3A1A] bg-[#0A1A0A] p-6 rounded-none">
      {title && (
        <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-[#1A3A1A]">
          <div className="flex items-center gap-3">
            <span className="w-3.5 h-3.5 bg-[#7CFC88] rounded-none" />
            <h3 className="font-mono text-xl font-bold text-[#E8F5EA] uppercase tracking-wider">
              {title}
            </h3>
          </div>
          <span className="font-mono text-sm px-3 py-1 bg-[#0D160D] text-[#7CFC88] border border-[#2D5A2D] uppercase font-bold">
            CLOUD TOPOLOGY
          </span>
        </div>
      )}

      <div className="relative w-full overflow-hidden" style={{ height: `${height}px` }}>
        {/* SVG Flow Connections */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 0 ${width} ${height}`}
        >
          {edges.map((edge, idx) => (
            <AnimatedFlow
              key={`${edge.from}-${edge.to}-${idx}`}
              d={edge.d}
              startFrame={edge.startFrame ?? 10 + idx * 12}
              color={edge.color ?? "#7CFC88"}
              strokeWidth={5}
              showPacket={true}
              packetColor="#00FF41"
            />
          ))}
        </svg>

        {/* Flat Cloud Nodes */}
        {nodes.map((node) => {
          const appear = interpolate(
            frame - (node.startFrame ?? 0),
            [0, 12],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          const styleConfig = CATEGORY_STYLES[node.category] || CATEGORY_STYLES.api;

          return (
            <div
              key={node.id}
              className="absolute flex items-center gap-4 p-4 border-2 bg-[#0D160D] rounded-none transition-all"
              style={{
                left: `${node.x}px`,
                top: `${node.y}px`,
                transform: "translate(-50%, -50%)",
                borderColor: styleConfig.border,
                opacity: appear,
                minWidth: "220px",
              }}
            >
              {renderIcon(node.iconType, node.iconText)}
              <div className="flex flex-col text-left">
                <span className="font-sans font-black text-lg text-[#E8F5EA] leading-tight">
                  {node.label}
                </span>
                <span className="font-mono text-xs text-[#7E8C7E] mt-0.5 font-semibold">
                  {node.sublabel}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
