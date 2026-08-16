import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { emcodeTheme } from "../../themes/emcode";
import {
  EmcodeCarouselBackground,
  EmcodeCarouselFrame,
  EmcodeGlowText,
} from "./EmcodeCarouselLayout";
import {
  FastApiCircleIcon,
  AsyncLightningIcon,
  PydanticShieldIcon,
  StructuredOutputIcon,
  FunctionCallingIcon,
  EmbeddingsVectorsIcon,
  PineconeClusterIcon,
  HybridSearchIcon,
  LangGraphIcon,
  AutoGenAgentIcon,
  McpProtocolIcon,
  GuardrailsShieldIcon,
  BedrockBrainIcon,
} from "../../components/flat/InfographicIcons";

// -------------------------------------------------------------------------
// SLIDE 1: PORTADA
// -------------------------------------------------------------------------
const PortadaSlide: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 60px" }}>
      {/* Kicker */}
      <div
        style={{
          fontFamily: emcodeTheme.fontMono,
          fontSize: 26,
          fontWeight: 800,
          color: emcodeTheme.cyan,
          letterSpacing: 4,
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: 20,
          textShadow: emcodeTheme.glowCyan,
        }}
      >
        [ AI ENGINEERING 2026 ]
      </div>

      {/* Main Title */}
      <h1
        style={{
          fontFamily: emcodeTheme.fontMono,
          fontSize: 64,
          fontWeight: 900,
          color: emcodeTheme.cream,
          textAlign: "center",
          lineHeight: 1.2,
          letterSpacing: "-1.5px",
          marginBottom: 30,
        }}
      >
        RUTA PARA SER
        <br />
        <EmcodeGlowText fontSize={70} color={emcodeTheme.cyan} glowColor={emcodeTheme.cyan}>
          AI ENGINEER
        </EmcodeGlowText>
        <br />
        EN 2026 🧠⚡
      </h1>

      {/* High-Tech Vector Icons Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          margin: "15px 0 35px 0",
          padding: "20px 25px",
          backgroundColor: "rgba(8, 37, 44, 0.4)",
          borderRadius: 24,
          border: `1px solid ${emcodeTheme.cyan}33`,
          boxShadow: "0 10px 30px rgba(34, 211, 238, 0.08)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <FastApiCircleIcon size={64} />
          <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 13, color: emcodeTheme.green, fontWeight: 700 }}>PYTHON</span>
        </div>
        <span style={{ fontSize: 20, color: emcodeTheme.cyan }}>➔</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <StructuredOutputIcon size={64} />
          <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 13, color: emcodeTheme.cyan, fontWeight: 700 }}>LLM APIS</span>
        </div>
        <span style={{ fontSize: 20, color: emcodeTheme.cyan }}>➔</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <EmbeddingsVectorsIcon size={64} />
          <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 13, color: "#34D399", fontWeight: 700 }}>RAG DB</span>
        </div>
        <span style={{ fontSize: 20, color: emcodeTheme.cyan }}>➔</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <LangGraphIcon size={64} />
          <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 13, color: emcodeTheme.green, fontWeight: 700 }}>AGENTS</span>
        </div>
      </div>

      {/* Subtitle description */}
      <p
        style={{
          fontFamily: emcodeTheme.fontMono,
          fontSize: 26,
          fontWeight: 500,
          color: emcodeTheme.textDim,
          textAlign: "center",
          lineHeight: 1.45,
          padding: "0 30px",
        }}
      >
        No necesitas un PhD en matemáticas. Necesitas saber conectar LLMs, bases vectoriales y agentes a software real en producción.
      </p>

      {/* Footer hint */}
      <div
        style={{
          marginTop: "auto",
          fontFamily: emcodeTheme.fontMono,
          fontSize: 24,
          fontWeight: 800,
          color: emcodeTheme.cyan,
          letterSpacing: 3,
          textAlign: "center",
          textShadow: emcodeTheme.glowCyan,
        }}
      >
        DESLIZA PARA VER LOS 6 NIVELES →
      </div>
    </div>
  );
};

// -------------------------------------------------------------------------
// SLIDES 2-7: CONTENIDO TÉCNICO CON ICONOS VECTORIALES
// -------------------------------------------------------------------------
interface ContentSlideProps {
  num: string;
  tag: string;
  level: string;
  title: string;
  desc: string;
  MainIcon: React.FC<{ size?: number }>;
  cards: Array<{
    Icon: React.FC<{ size?: number }>;
    title: string;
    desc: string;
    accent: string;
  }>;
}

const ContentSlide: React.FC<ContentSlideProps> = ({
  num,
  tag,
  level,
  title,
  desc,
  MainIcon,
  cards,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "30px 60px" }}>
      {/* Top Bar: Tag + Level Badge */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 25 }}>
        <div
          style={{
            border: `2px solid ${emcodeTheme.cyan}`,
            borderRadius: 50,
            padding: "8px 24px",
            backgroundColor: `${emcodeTheme.cyan}15`,
            fontFamily: emcodeTheme.fontMono,
            fontSize: 20,
            fontWeight: 900,
            color: emcodeTheme.cyan,
            letterSpacing: 2,
            textTransform: "uppercase",
            boxShadow: emcodeTheme.glowCyan,
          }}
        >
          {tag}
        </div>

        <div
          style={{
            border: `1px solid ${emcodeTheme.green}55`,
            borderRadius: 50,
            padding: "8px 22px",
            backgroundColor: `${emcodeTheme.green}10`,
            fontFamily: emcodeTheme.fontMono,
            fontSize: 18,
            fontWeight: 800,
            color: emcodeTheme.green,
            letterSpacing: 1,
          }}
        >
          {level}
        </div>
      </div>

      {/* Main Title with Giant Leading Vector Icon */}
      <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 20 }}>
        <MainIcon size={78} />
        <div>
          <h2
            style={{
              fontFamily: emcodeTheme.fontMono,
              fontSize: 48,
              fontWeight: 900,
              color: emcodeTheme.cream,
              lineHeight: 1.15,
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            <EmcodeGlowText fontSize={48} color={emcodeTheme.cream} glowColor={emcodeTheme.cyan}>
              {title}
            </EmcodeGlowText>
          </h2>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: emcodeTheme.fontMono,
          fontSize: 26,
          fontWeight: 400,
          color: emcodeTheme.cream,
          lineHeight: 1.45,
          opacity: 0.95,
          marginBottom: 30,
        }}
      >
        {desc}
      </p>

      {/* 2 High-Tech Glassmorphism Cards with Vector Icons */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 20 }}>
        {cards.map((c, i) => {
          const CardIcon = c.Icon;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 20,
                padding: "20px 24px",
                borderRadius: 20,
                backgroundColor: "rgba(8, 24, 32, 0.8)",
                border: `1.5px solid ${c.accent}55`,
                boxShadow: `0 10px 25px rgba(0,0,0,0.5)`,
              }}
            >
              <CardIcon size={56} />
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: emcodeTheme.fontMono,
                    fontSize: 22,
                    fontWeight: 800,
                    color: c.accent,
                    marginBottom: 6,
                    letterSpacing: 0.5,
                  }}
                >
                  {c.title}
                </div>
                <div
                  style={{
                    fontFamily: emcodeTheme.fontMono,
                    fontSize: 20,
                    fontWeight: 400,
                    color: emcodeTheme.textDim,
                    lineHeight: 1.4,
                  }}
                >
                  {c.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Step Indicator */}
      <div
        style={{
          marginTop: "auto",
          fontFamily: emcodeTheme.fontMono,
          fontSize: 22,
          fontWeight: 800,
          color: emcodeTheme.textDim,
          letterSpacing: 2,
        }}
      >
        NIVEL {num} / 06
      </div>
    </div>
  );
};

// -------------------------------------------------------------------------
// SLIDE 8: CTA FINAL CON RECAP VECTORIAL
// -------------------------------------------------------------------------
const CtaSlide: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "30px 60px" }}>
      {/* Title question */}
      <h2
        style={{
          fontFamily: emcodeTheme.fontMono,
          fontSize: 48,
          fontWeight: 900,
          color: emcodeTheme.cream,
          textAlign: "center",
          lineHeight: 1.25,
          letterSpacing: "-1px",
          marginBottom: 30,
        }}
      >
        El rol de AI Engineer es el
        <br />
        <EmcodeGlowText fontSize={52} color={emcodeTheme.cyan} glowColor={emcodeTheme.cyan}>
          más cotizado en el mercado 👇
        </EmcodeGlowText>
      </h2>

      {/* Recap Grid (2 columns with Vector Icons) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "18px 20px",
          marginBottom: 35,
          width: "100%",
        }}
      >
        {[
          { Icon: FastApiCircleIcon, label: "01. Python & FastAPI" },
          { Icon: StructuredOutputIcon, label: "02. Structured Outputs" },
          { Icon: EmbeddingsVectorsIcon, label: "03. RAG & Vector DBs" },
          { Icon: LangGraphIcon, label: "04. LangGraph & MCP" },
          { Icon: GuardrailsShieldIcon, label: "05. LLMOps & Guardrails" },
          { Icon: BedrockBrainIcon, label: "06. Serving & Deployment" },
        ].map((item, idx) => {
          const ItemIcon = item.Icon;
          return (
            <div
              key={idx}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 14,
                fontFamily: emcodeTheme.fontMono,
                fontSize: 20,
                fontWeight: 700,
                color: emcodeTheme.cream,
                backgroundColor: "rgba(8, 28, 36, 0.7)",
                padding: "12px 16px",
                borderRadius: 16,
                border: "1px solid rgba(34, 211, 238, 0.2)",
              }}
            >
              <ItemIcon size={40} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* CTA Box */}
      <div
        style={{
          marginTop: "auto",
          border: `2px dashed ${emcodeTheme.cyan}`,
          borderRadius: 24,
          padding: "30px 20px",
          backgroundColor: "rgba(6, 26, 32, 0.85)",
          backdropFilter: "blur(12px)",
          boxShadow: `0 15px 35px rgba(34, 211, 238, 0.18)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 24,
            fontWeight: 800,
            color: emcodeTheme.cream,
            letterSpacing: 2,
            marginBottom: 10,
          }}
        >
          GUARDA ESTA RUTA Y COMENTA:
        </div>
        <div
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 42,
            fontWeight: 900,
            color: emcodeTheme.cyan,
            textShadow: emcodeTheme.glowCyan,
            letterSpacing: 4,
            marginBottom: 10,
          }}
        >
          "AI2026"
        </div>
        <div
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 22,
            fontWeight: 800,
            color: emcodeTheme.green,
          }}
        >
          Sígueme @emcode para dominar AI Engineering
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------------------
// DATA CONFIGURATION
// -------------------------------------------------------------------------
const CAROUSEL_SLIDES = [
  { type: "portada" },
  {
    type: "content",
    num: "01",
    tag: "NIVEL 1",
    level: "Core Backend Stack",
    title: "Python, Async & FastAPI",
    desc: "La base técnica indispensable. Necesitas dominar concurrencia real con AsyncIO, validación de tipos estricta y APIs de streaming de tokens.",
    MainIcon: FastApiCircleIcon,
    cards: [
      {
        Icon: AsyncLightningIcon,
        title: "AsyncIO & Pydantic v2",
        desc: "Domina corrutinas, async/await y modelos Pydantic con validación en Rust para parsing de alta velocidad.",
        accent: emcodeTheme.green,
      },
      {
        Icon: FastApiCircleIcon,
        title: "FastAPI + SSE Streaming",
        desc: "Endpoints HTTP con Server-Sent Events para emitir tokens en tiempo real a interfaces conversacionales.",
        accent: emcodeTheme.cyan,
      },
    ],
  },
  {
    type: "content",
    num: "02",
    tag: "NIVEL 2",
    level: "Structured LLMs",
    title: "JSON Schemas & Tools",
    desc: "Olvida los prompts libres no tipados. Los sistemas en producción requieren outputs estructurados garantizados por contrato de código.",
    MainIcon: StructuredOutputIcon,
    cards: [
      {
        Icon: StructuredOutputIcon,
        title: "Instructor & PydanticAI",
        desc: "Librerías que fuerzan a los LLMs a responder exactamente con esquemas tipados y reintentos automáticos.",
        accent: emcodeTheme.cyan,
      },
      {
        Icon: FunctionCallingIcon,
        title: "Tool Calling Nativo",
        desc: "Consumo de APIs de OpenAI y Anthropic pasando esquemas JSON Schema para ejecución de funciones.",
        accent: emcodeTheme.green,
      },
    ],
  },
  {
    type: "content",
    num: "03",
    tag: "NIVEL 3",
    level: "Context Engineering",
    title: "RAG & Vector Databases",
    desc: "El RAG básico falla en producción. Necesitas arquitecturas de recuperación híbrida con reordenamiento semántico de alta precisión.",
    MainIcon: EmbeddingsVectorsIcon,
    cards: [
      {
        Icon: PineconeClusterIcon,
        title: "Qdrant, pgvector & Pinecone",
        desc: "Indexación HNSW, filtrado por metadatos (payloads) y almacenamiento de embeddings densos.",
        accent: "#34D399",
      },
      {
        Icon: HybridSearchIcon,
        title: "Hybrid Search + Cohere Rerank",
        desc: "Combina búsqueda vectorial + léxica (BM25) y pasa los top-K resultados por un modelo de Reranking.",
        accent: emcodeTheme.cyan,
      },
    ],
  },
  {
    type: "content",
    num: "04",
    tag: "NIVEL 4",
    level: "Autonomous Systems",
    title: "LangGraph & Protocolo MCP",
    desc: "Crea agentes con loops de razonamiento cíclicos, persistencia de estado y herramientas desacopladas estándar.",
    MainIcon: LangGraphIcon,
    cards: [
      {
        Icon: LangGraphIcon,
        title: "LangGraph (State Graphs)",
        desc: "Orquestación de agentes mediante grafos de nodos y bordes condicionales con soporte 'human-in-the-loop'.",
        accent: emcodeTheme.green,
      },
      {
        Icon: McpProtocolIcon,
        title: "Model Context Protocol (MCP)",
        desc: "El estándar abierto de Anthropic para conectar modelos a bases de datos, APIs y herramientas locales.",
        accent: emcodeTheme.cyan,
      },
    ],
  },
  {
    type: "content",
    num: "05",
    tag: "NIVEL 5",
    level: "LLMOps & Evaluación",
    title: "Langfuse & Guardrails",
    desc: "Lo que no se mide no se puede optimizar. Monitorea latencias, costos por token y alucinaciones en tiempo real.",
    MainIcon: GuardrailsShieldIcon,
    cards: [
      {
        Icon: AutoGenAgentIcon,
        title: "Langfuse / Phoenix Tracing",
        desc: "Trazabilidad completa de cada llamada a LLM, visualización de árboles de agentes y cálculo de costos.",
        accent: emcodeTheme.cyan,
      },
      {
        Icon: GuardrailsShieldIcon,
        title: "Métricas Ragas & NeMo Guardrails",
        desc: "Evaluación continua de fidelidad (Faithfulness), relevancia del contexto y bloqueo de Prompt Injections.",
        accent: "#FB7185",
      },
    ],
  },
  {
    type: "content",
    num: "06",
    tag: "NIVEL 6",
    level: "Serving & Deployment",
    title: "vLLM, Ollama & Cloud AI",
    desc: "Despliega modelos tanto en servidores locales como en nubes elásticas para alta disponibilidad y baja latencia.",
    MainIcon: BedrockBrainIcon,
    cards: [
      {
        Icon: FastApiCircleIcon,
        title: "vLLM & Ollama (Self-Hosted)",
        desc: "Inferencia optimizada con PagedAttention para servir modelos open-source (Llama 3, DeepSeek, Qwen).",
        accent: emcodeTheme.green,
      },
      {
        Icon: BedrockBrainIcon,
        title: "AWS Bedrock & Groq Cloud",
        desc: "APIs serverless de ultra alta velocidad con SLAs de producción y escalabilidad sin gestionar clústeres GPU.",
        accent: emcodeTheme.cyan,
      },
    ],
  },
  { type: "cta" },
];

export const CarruselRutaAIEngineer: React.FC = () => {
  const frame = useCurrentFrame();
  const totalSlides = CAROUSEL_SLIDES.length;

  const activeIndex = Math.min(totalSlides - 1, Math.max(0, frame));
  const activeSlide = CAROUSEL_SLIDES[activeIndex];

  return (
    <AbsoluteFill style={{ position: "relative" }}>
      {/* Master Background */}
      <EmcodeCarouselBackground
        accentColor={emcodeTheme.cyan}
        glowPosition={activeSlide.type === "portada" ? "top" : activeSlide.type === "cta" ? "bottom" : "center"}
      />

      {/* Master Frame with @emcode Header & Footer */}
      <EmcodeCarouselFrame
        currentSlide={activeIndex + 1}
        totalSlides={totalSlides}
        accentColor={emcodeTheme.cyan}
      >
        {activeSlide.type === "portada" && <PortadaSlide />}
        {activeSlide.type === "content" && (
          <ContentSlide
            num={activeSlide.num!}
            tag={activeSlide.tag!}
            level={activeSlide.level!}
            title={activeSlide.title!}
            desc={activeSlide.desc!}
            MainIcon={activeSlide.MainIcon!}
            cards={activeSlide.cards!}
          />
        )}
        {activeSlide.type === "cta" && <CtaSlide />}
      </EmcodeCarouselFrame>
    </AbsoluteFill>
  );
};
