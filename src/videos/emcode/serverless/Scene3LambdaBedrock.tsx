import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";
import { LambdaIcon, ApiGatewayIcon } from "../../../components/flat/FlatIcons";

export const Scene3LambdaBedrock: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  const serverlessCode = `# AWS Lambda + Bedrock (Python 3.11)
import boto3, json

bedrock = boto3.client("bedrock-runtime", region_name="us-east-1")
dynamo  = boto3.resource("dynamodb").Table("agent_state")

def lambda_handler(event, context):
    prompt = json.loads(event["body"])["prompt"]
    # Invocación directa a Claude 3.5 Sonnet Serverless
    response = bedrock.invoke_model(modelId="anthropic.claude-3-sonnet", body=...)
    dynamo.put_item(Item={"session_id": "123", "state": response})
    return {"statusCode": 200, "body": response}`;

  return (
    <EmcodeSceneWrapper categoryTag="ARQUITECTURA SERVERLESS" gridColor={brand.cyan}>
      {/* 1. TOP ZONE: Massive Title Banner */}
      <div
        style={{
          background: "rgba(34, 211, 238, 0.12)",
          backdropFilter: "blur(14px)",
          border: `4px solid ${brand.cyan}`,
          borderRadius: 32,
          padding: "36px 30px",
          width: "100%",
          textAlign: "center",
          boxShadow: `0 20px 60px rgba(0,0,0,0.7), ${brand.glowCyan}`,
          transform: `scale(${entrance})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: brand.fontSans,
            fontSize: 62,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          API Gateway + <span style={{ color: brand.cyan, textShadow: brand.glowCyan }}>Lambda & Bedrock ⚡</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Dual Tools + Python Code */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 16, transform: `scale(${entrance})`, opacity: entrance }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(10, 20, 40, 0.9)",
            border: `2.5px solid ${brand.cyan}88`,
            borderRadius: 24,
            padding: "16px 24px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <ApiGatewayIcon size={48} />
            <LambdaIcon size={48} />
            <div>
              <div style={{ fontFamily: brand.fontMono, fontSize: 14, fontWeight: 800, color: brand.cyan, letterSpacing: 2 }}>
                PAY-PER-EXECUTION ARCHITECTURE
              </div>
              <div style={{ fontFamily: brand.fontSans, fontSize: 24, fontWeight: 900, color: brand.cream }}>
                Lambda + Bedrock + DynamoDB
              </div>
            </div>
          </div>
        </div>

        <ZoomCodeBlock
          code={serverlessCode}
          language="python"
          filename="agent_worker.py"
          startFrame={0}
          typingSpeed={999}
          highlightLines={[7, 8, 9]}
          fontSize={20}
        />
      </div>

      {/* 3. BOTTOM ZONE: Takeaway Card */}
      <div
        style={{
          background: "rgba(10, 20, 40, 0.8)",
          border: `2px solid ${brand.cyan}66`,
          borderRadius: 24,
          padding: "22px 35px",
          width: "100%",
          textAlign: "center",
          boxSizing: "border-box",
          transform: `scale(${entrance})`,
          opacity: entrance,
        }}
      >
        <div style={{ fontFamily: brand.fontSans, fontSize: 28, fontWeight: 800, color: brand.cream, lineHeight: 1.35 }}>
          Estado en DynamoDB y <span style={{ color: brand.cyan, fontWeight: 900 }}>solo pagas por milisegundos de ejecución.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
