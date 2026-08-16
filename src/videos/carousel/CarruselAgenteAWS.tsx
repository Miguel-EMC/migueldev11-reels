import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { emcodeTheme } from "../../themes/emcode";
import {
  EmcodeCarouselBackground,
  EmcodeCarouselFrame,
  EmcodeGlowText,
} from "./EmcodeCarouselLayout";
import {
  BedrockBrainIcon,
  LambdaNeonIcon,
  OpenSearchVectorIcon,
  S3BucketIcon,
  UserAvatarIcon,
  GuardrailsShieldIcon,
  StepFunctionsIcon,
  FunctionCallingIcon,
  EmbeddingsVectorsIcon,
  AutoGenAgentIcon,
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
          color: emcodeTheme.green,
          letterSpacing: 4,
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: 20,
          textShadow: emcodeTheme.glowGreen,
        }}
      >
        [ ARQUITECTURA CLOUD 2026 ]
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
        CÓMO CREAR TU
        <br />
        <EmcodeGlowText fontSize={70} color={emcodeTheme.green}>AGENTE DE IA</EmcodeGlowText>
        <br />
        EN AWS 🤖☁️
      </h1>

      {/* High-Tech Vector Icons Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
          margin: "15px 0 35px 0",
          padding: "20px 30px",
          backgroundColor: "rgba(10, 26, 16, 0.4)",
          borderRadius: 24,
          border: `1px solid ${emcodeTheme.green}33`,
          boxShadow: "0 10px 30px rgba(0, 255, 65, 0.08)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <BedrockBrainIcon size={70} />
          <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 14, color: emcodeTheme.cyan, fontWeight: 700 }}>BEDROCK</span>
        </div>
        <span style={{ fontSize: 24, color: emcodeTheme.green }}>➔</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <LambdaNeonIcon size={70} />
          <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 14, color: emcodeTheme.green, fontWeight: 700 }}>LAMBDA</span>
        </div>
        <span style={{ fontSize: 24, color: emcodeTheme.green }}>➔</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <OpenSearchVectorIcon size={70} />
          <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 14, color: "#C084FC", fontWeight: 700 }}>VECTOR DB</span>
        </div>
        <span style={{ fontSize: 24, color: emcodeTheme.green }}>➔</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <S3BucketIcon size={70} />
          <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 14, color: "#34D399", fontWeight: 700 }}>S3 DATA</span>
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
        De un LLM aislado a un agente autónomo empresarial con memoria vectorial, ejecución de herramientas y guardrails.
      </p>

      {/* Footer hint */}
      <div
        style={{
          marginTop: "auto",
          fontFamily: emcodeTheme.fontMono,
          fontSize: 24,
          fontWeight: 800,
          color: emcodeTheme.green,
          letterSpacing: 3,
          textAlign: "center",
          textShadow: emcodeTheme.glowGreen,
        }}
      >
        DESLIZA PARA VER LA ARQUITECTURA →
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
  service: string;
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
  service,
  title,
  desc,
  MainIcon,
  cards,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "30px 60px" }}>
      {/* Top Bar: Tag + Service Badge */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 25 }}>
        <div
          style={{
            border: `2px solid ${emcodeTheme.green}`,
            borderRadius: 50,
            padding: "8px 24px",
            backgroundColor: `${emcodeTheme.green}15`,
            fontFamily: emcodeTheme.fontMono,
            fontSize: 20,
            fontWeight: 900,
            color: emcodeTheme.green,
            letterSpacing: 2,
            textTransform: "uppercase",
            boxShadow: emcodeTheme.glowGreen,
          }}
        >
          {tag}
        </div>

        <div
          style={{
            border: `1px solid ${emcodeTheme.cyan}55`,
            borderRadius: 50,
            padding: "8px 22px",
            backgroundColor: `${emcodeTheme.cyan}10`,
            fontFamily: emcodeTheme.fontMono,
            fontSize: 18,
            fontWeight: 800,
            color: emcodeTheme.cyan,
            letterSpacing: 1,
          }}
        >
          AWS: {service}
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
            <EmcodeGlowText fontSize={48}>{title}</EmcodeGlowText>
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
                backgroundColor: "rgba(10, 18, 30, 0.8)",
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
        COMPONENTE {num} / 06
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
        ¿Quieres el template de Terraform
        <br />
        <EmcodeGlowText fontSize={52} color={emcodeTheme.green}>para desplegar este agente? 👇</EmcodeGlowText>
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
          { Icon: BedrockBrainIcon, label: "Amazon Bedrock (LLM)" },
          { Icon: OpenSearchVectorIcon, label: "OpenSearch (RAG)" },
          { Icon: LambdaNeonIcon, label: "AWS Lambda (Tools)" },
          { Icon: GuardrailsShieldIcon, label: "Bedrock Guardrails" },
          { Icon: StepFunctionsIcon, label: "Step Functions (Flows)" },
          { Icon: S3BucketIcon, label: "S3 Storage Knowledge" },
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
                backgroundColor: "rgba(10, 20, 30, 0.7)",
                padding: "12px 16px",
                borderRadius: 16,
                border: "1px solid rgba(0, 255, 65, 0.2)",
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
          border: `2px dashed ${emcodeTheme.green}`,
          borderRadius: 24,
          padding: "30px 20px",
          backgroundColor: "rgba(10, 26, 16, 0.85)",
          backdropFilter: "blur(12px)",
          boxShadow: `0 15px 35px rgba(0, 255, 65, 0.15)`,
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
          GUARDA ESTE POST Y COMENTA:
        </div>
        <div
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 42,
            fontWeight: 900,
            color: emcodeTheme.green,
            textShadow: emcodeTheme.glowGreen,
            letterSpacing: 4,
            marginBottom: 10,
          }}
        >
          "AGENTE"
        </div>
        <div
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 22,
            fontWeight: 800,
            color: emcodeTheme.cyan,
          }}
        >
          Sígueme @emcode para más arquitectura cloud
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
    tag: "EL CEREBRO",
    service: "Amazon Bedrock",
    title: "Orquestación & ReAct",
    desc: "El agente utiliza un Foundation Model (Claude 3.5 Sonnet o Amazon Nova) para razonar en bucles ReAct (Reasoning + Acting) y planificar qué acciones tomar.",
    MainIcon: BedrockBrainIcon,
    cards: [
      {
        Icon: BedrockBrainIcon,
        title: "Modelos Foundation (FM)",
        desc: "Inferencia serverless de Claude 3.5 Sonnet, Llama 3.3 y Amazon Nova sin gestionar clústeres de GPUs.",
        accent: emcodeTheme.cyan,
      },
      {
        Icon: AutoGenAgentIcon,
        title: "Agents for Bedrock",
        desc: "Gestiona automáticamente el prompt de sistema, descompone metas y mantiene el hilo de conversación.",
        accent: emcodeTheme.green,
      },
    ],
  },
  {
    type: "content",
    num: "02",
    tag: "LA MEMORIA",
    service: "Knowledge Bases",
    title: "RAG con OpenSearch",
    desc: "Conecta tu agente a la base de conocimiento privada de tu empresa. Ingesta documentos de S3, genera embeddings y hace búsqueda semántica híbrida.",
    MainIcon: OpenSearchVectorIcon,
    cards: [
      {
        Icon: S3BucketIcon,
        title: "Amazon S3 + Embeddings",
        desc: "Carga automática de PDFs, Markdown y JSONs con chunking semántico y embeddings Titan v2.",
        accent: "#34D399",
      },
      {
        Icon: EmbeddingsVectorsIcon,
        title: "OpenSearch Serverless / pgvector",
        desc: "Búsqueda híbrida (vectorial densa + BM25) para recuperar contexto exacto sin alucinaciones.",
        accent: "#C084FC",
      },
    ],
  },
  {
    type: "content",
    num: "03",
    tag: "LAS MANOS",
    service: "Action Groups + Lambda",
    title: "Tool Calling con OpenAPI",
    desc: "Un agente sin herramientas es solo un chatbot. Los Action Groups le permiten ejecutar código real en AWS mediante contratos de esquemas OpenAPI 3.0.",
    MainIcon: LambdaNeonIcon,
    cards: [
      {
        Icon: LambdaNeonIcon,
        title: "AWS Lambda Functions",
        desc: "Ejecución serverless de lógica: consultas a DynamoDB/RDS, llamadas a APIs externas o envíos con SES.",
        accent: emcodeTheme.green,
      },
      {
        Icon: FunctionCallingIcon,
        title: "Contratos OpenAPI 3.0",
        desc: "El LLM lee el esquema de la API y genera los argumentos tipados necesarios para la ejecución.",
        accent: emcodeTheme.cyan,
      },
    ],
  },
  {
    type: "content",
    num: "04",
    tag: "EL ESCUDO",
    service: "Bedrock Guardrails",
    title: "Seguridad & Gobernanza",
    desc: "Protege tu agente contra vulnerabilidades y ataques adversarios a nivel de plataforma con reglas de filtrado empresarial.",
    MainIcon: GuardrailsShieldIcon,
    cards: [
      {
        Icon: GuardrailsShieldIcon,
        title: "Filtros PII & Prompt Injection",
        desc: "Enmascara datos sensibles (DNI, tarjetas, emails) y neutraliza intentos de jailbreak o hijacking.",
        accent: "#FB7185",
      },
      {
        Icon: UserAvatarIcon,
        title: "IAM Least Privilege + KMS",
        desc: "Permisos granulares por rol sin llaves de acceso estáticas y encripción total en tránsito y reposo.",
        accent: emcodeTheme.cyan,
      },
    ],
  },
  {
    type: "content",
    num: "05",
    tag: "MULTI-AGENTE",
    service: "Step Functions",
    title: "Orquestación Avanzada",
    desc: "Para flujos de alta complejidad, un agente supervisor coordina sub-agentes especializados con manejo de fallos y reintentos automáticos.",
    MainIcon: StepFunctionsIcon,
    cards: [
      {
        Icon: StepFunctionsIcon,
        title: "AWS Step Functions",
        desc: "Máquinas de estado visuales para coordinar flujos asíncronos y aprobaciones humanas (human-in-the-loop).",
        accent: emcodeTheme.cyan,
      },
      {
        Icon: AutoGenAgentIcon,
        title: "Colaboración Multi-Agente",
        desc: "Especialización de roles: Agente SQL, Agente Reportes y Agente Notificaciones coordinados.",
        accent: emcodeTheme.green,
      },
    ],
  },
  {
    type: "content",
    num: "06",
    tag: "TOPOLOGÍA",
    service: "Arquitectura Serverless",
    title: "Flujo Completo en Producción",
    desc: "Toda la solución se despliega 100% serverless: escala a cero cuando no se usa y soporta miles de consultas concurrentes.",
    MainIcon: BedrockBrainIcon,
    cards: [
      {
        Icon: UserAvatarIcon,
        title: "Ingress: API Gateway + Cognito",
        desc: "Autenticación segura de usuarios y rate limiting antes de llegar al agente de IA.",
        accent: emcodeTheme.cyan,
      },
      {
        Icon: S3BucketIcon,
        title: "Persistencia: DynamoDB & S3",
        desc: "Guardado del historial de sesiones y estado del agente con latencias de un solo dígito de milisegundo.",
        accent: emcodeTheme.green,
      },
    ],
  },
  { type: "cta" },
];

export const CarruselAgenteAWS: React.FC = () => {
  const frame = useCurrentFrame();
  const totalSlides = CAROUSEL_SLIDES.length;

  const activeIndex = Math.min(totalSlides - 1, Math.max(0, frame));
  const activeSlide = CAROUSEL_SLIDES[activeIndex];

  return (
    <AbsoluteFill style={{ position: "relative" }}>
      {/* Master Background */}
      <EmcodeCarouselBackground
        accentColor={emcodeTheme.green}
        glowPosition={activeSlide.type === "portada" ? "top" : activeSlide.type === "cta" ? "bottom" : "center"}
      />

      {/* Master Frame with @emcode Header & Footer */}
      <EmcodeCarouselFrame
        currentSlide={activeIndex + 1}
        totalSlides={totalSlides}
        accentColor={emcodeTheme.green}
      >
        {activeSlide.type === "portada" && <PortadaSlide />}
        {activeSlide.type === "content" && (
          <ContentSlide
            num={activeSlide.num!}
            tag={activeSlide.tag!}
            service={activeSlide.service!}
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
