import React from "react";
import { Sequence, interpolate, useCurrentFrame } from "remotion";
import { FlatReelLayout } from "../../components/flat/FlatReelLayout";
import { FlatCodeBlock } from "../../components/flat/FlatCodeBlock";
import { CloudArchitecture, CloudNode, CloudEdge } from "../../components/flat/CloudArchitecture";

const sampleFastApiCode = `from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
import httpx

app = FastAPI(title="EMCODE Data Pipeline")

class IngestPayload(BaseModel):
    document_id: str
    bucket: str
    key: str

@app.post("/api/v1/ingest")
async def trigger_rag_pipeline(
    payload: IngestPayload,
    tasks: BackgroundTasks
):
    tasks.add_task(process_embeddings, payload)
    return {"status": "queued", "doc": payload.document_id}`;

const sampleTerraformCode = `resource "aws_s3_bucket" "data_lake" {
  bucket = "emcode-documents-production"
  tags = {
    Environment = "production"
    ManagedBy   = "terraform"
  }
}

resource "aws_lambda_function" "ingest_worker" {
  function_name = "emcode-rag-ingestion"
  runtime       = "python3.11"
  handler       = "main.handler"
}`;

const archNodes: CloudNode[] = [
  { id: "s3", label: "S3 Bucket", sublabel: "PDF / Markdown", category: "storage", x: 180, y: 120, iconText: "S3", startFrame: 0 },
  { id: "lambda", label: "AWS Lambda", sublabel: "Event Ingest", category: "compute", x: 480, y: 120, iconText: "λ", startFrame: 15 },
  { id: "fastapi", label: "FastAPI Engine", sublabel: "Chunking & Schema", category: "api", x: 780, y: 120, iconText: "API", startFrame: 30 },
  { id: "langgraph", label: "LangGraph", sublabel: "Multi-Agent State", category: "ai", x: 480, y: 380, iconText: "AI", startFrame: 45 },
  { id: "qdrant", label: "Qdrant Vector DB", sublabel: "Cosine Embeddings", category: "database", x: 780, y: 380, iconText: "VEC", startFrame: 60 },
];

const archEdges: CloudEdge[] = [
  { from: "s3", to: "lambda", d: "M 270 120 L 390 120", startFrame: 20, color: "#F59E0B" },
  { from: "lambda", to: "fastapi", d: "M 570 120 L 690 120", startFrame: 35, color: "#3B82F6" },
  { from: "fastapi", to: "langgraph", d: "M 780 170 L 780 250 L 570 380", startFrame: 50, color: "#8B5CF6" },
  { from: "langgraph", to: "qdrant", d: "M 570 380 L 690 380", startFrame: 65, color: "#10B981" },
];

export const FASTAPI_ARCH_TOTAL_FRAMES = 360;

export const FastAPIArchitectureReel: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <FlatReelLayout
      category="Cloud Architecture"
      topic="FastAPI + LangGraph + S3"
      badgeText="PRODUCTION PIPELINE"
    >
      {/* Scene 1: Problem & Architecture (0 to 160 frames) */}
      <Sequence from={0} durationInFrames={160}>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-blue-400 font-semibold uppercase tracking-wider">
              ENTERPRISE PATTERN
            </span>
            <h1 className="text-4xl font-extrabold text-slate-100 leading-tight">
              Event-Driven RAG Ingestion Pipeline
            </h1>
            <p className="text-slate-400 text-lg">
              Conecta S3, FastAPI y LangGraph con tipos estrictos y cero cuellos de botella.
            </p>
          </div>

          <CloudArchitecture
            title="Data Flow Diagram"
            nodes={archNodes}
            edges={archEdges}
            width={960}
            height={500}
          />
        </div>
      </Sequence>

      {/* Scene 2: FastAPI Implementation (160 to 260 frames) */}
      <Sequence from={160} durationInFrames={100}>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-wider">
              FASTAPI IMPLEMENTATION
            </span>
            <h2 className="text-3xl font-bold text-slate-100">
              Async Background Task Ingestion
            </h2>
          </div>

          <FlatCodeBlock
            language="python"
            filename="app/api/ingest.py"
            code={sampleFastApiCode}
            themeType="nord"
            highlightLines={[12, 13, 14, 18]}
            startFrame={160}
            durationInFrames={30}
          />
        </div>
      </Sequence>

      {/* Scene 3: Terraform Infrastructure (260 to 360 frames) */}
      <Sequence from={260} durationInFrames={100}>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
              INFRASTRUCTURE AS CODE
            </span>
            <h2 className="text-3xl font-bold text-slate-100">
              Declarative AWS Provisioning
            </h2>
          </div>

          <FlatCodeBlock
            language="hcl"
            filename="infra/main.tf"
            code={sampleTerraformCode}
            themeType="oneDark"
            highlightLines={[1, 2, 9, 10]}
            startFrame={260}
            durationInFrames={30}
          />
        </div>
      </Sequence>
    </FlatReelLayout>
  );
};
