import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { emcodeTheme } from "../../themes/emcode";
import {
  EmcodeCarouselBackground,
  EmcodeCarouselFrame,
  EmcodeGlowText,
} from "./EmcodeCarouselLayout";
import {
  IamIdIcon,
  VpcShieldIcon,
  Ec2ChipIcon,
  S3BucketIcon,
  LambdaNeonIcon,
  DynamoDbCylinderIcon,
  ApiGatewayHexIcon,
  Terraform3DIcon,
  CicdPipelineIcon,
  BedrockBrainIcon,
  SageMakerNetworkIcon,
  GuardrailsShieldIcon,
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
          color: emcodeTheme.orange,
          letterSpacing: 4,
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: 20,
          textShadow: emcodeTheme.glowOrange,
        }}
      >
        [ ROADMAP CLOUD 2026 ]
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
        RUTA DEFINITIVA
        <br />
        <EmcodeGlowText fontSize={70} color={emcodeTheme.orange} glowColor={emcodeTheme.orange}>
          APRENDER AWS
        </EmcodeGlowText>
        <br />
        EN 2026 ☁️⚡
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
          backgroundColor: "rgba(26, 16, 10, 0.4)",
          borderRadius: 24,
          border: `1px solid ${emcodeTheme.orange}33`,
          boxShadow: "0 10px 30px rgba(255, 122, 26, 0.08)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <IamIdIcon size={64} />
          <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 13, color: "#FB7185", fontWeight: 700 }}>IAM</span>
        </div>
        <span style={{ fontSize: 20, color: emcodeTheme.orange }}>➔</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <LambdaNeonIcon size={64} />
          <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 13, color: emcodeTheme.green, fontWeight: 700 }}>LAMBDA</span>
        </div>
        <span style={{ fontSize: 20, color: emcodeTheme.orange }}>➔</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <Terraform3DIcon size={64} />
          <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 13, color: "#818CF8", fontWeight: 700 }}>IAC</span>
        </div>
        <span style={{ fontSize: 20, color: emcodeTheme.orange }}>➔</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <BedrockBrainIcon size={64} />
          <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 13, color: emcodeTheme.cyan, fontWeight: 700 }}>CLOUD AI</span>
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
        De Cero a Cloud & AI Solutions Architect. Deja de saltar entre tutoriales y sigue la ruta técnica paso a paso.
      </p>

      {/* Footer hint */}
      <div
        style={{
          marginTop: "auto",
          fontFamily: emcodeTheme.fontMono,
          fontSize: 24,
          fontWeight: 800,
          color: emcodeTheme.orange,
          letterSpacing: 3,
          textAlign: "center",
          textShadow: emcodeTheme.glowOrange,
        }}
      >
        DESLIZA PARA VER LAS 6 FASES →
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
  phase: string;
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
  phase,
  title,
  desc,
  MainIcon,
  cards,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "30px 60px" }}>
      {/* Top Bar: Tag + Phase Badge */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 25 }}>
        <div
          style={{
            border: `2px solid ${emcodeTheme.orange}`,
            borderRadius: 50,
            padding: "8px 24px",
            backgroundColor: `${emcodeTheme.orange}15`,
            fontFamily: emcodeTheme.fontMono,
            fontSize: 20,
            fontWeight: 900,
            color: emcodeTheme.orange,
            letterSpacing: 2,
            textTransform: "uppercase",
            boxShadow: emcodeTheme.glowOrange,
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
          {phase}
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
            <EmcodeGlowText fontSize={48} color={emcodeTheme.cream} glowColor={emcodeTheme.orange}>
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
                backgroundColor: "rgba(20, 14, 10, 0.8)",
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
        FASE {num} / 06
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
        ¿En qué fase de AWS te
        <br />
        <EmcodeGlowText fontSize={52} color={emcodeTheme.orange} glowColor={emcodeTheme.orange}>
          encuentras ahora mismo? 👇
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
          { Icon: IamIdIcon, label: "01. Redes & IAM" },
          { Icon: LambdaNeonIcon, label: "02. Serverless & Eventos" },
          { Icon: Terraform3DIcon, label: "03. IaC & Terraform" },
          { Icon: BedrockBrainIcon, label: "04. Cloud AI & Bedrock" },
          { Icon: GuardrailsShieldIcon, label: "05. FinOps & Monitoreo" },
          { Icon: Ec2ChipIcon, label: "06. Certificación SAA / AI" },
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
                backgroundColor: "rgba(20, 15, 10, 0.7)",
                padding: "12px 16px",
                borderRadius: 16,
                border: "1px solid rgba(255, 122, 26, 0.2)",
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
          border: `2px dashed ${emcodeTheme.orange}`,
          borderRadius: 24,
          padding: "30px 20px",
          backgroundColor: "rgba(26, 14, 10, 0.85)",
          backdropFilter: "blur(12px)",
          boxShadow: `0 15px 35px rgba(255, 122, 26, 0.18)`,
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
            color: emcodeTheme.orange,
            textShadow: emcodeTheme.glowOrange,
            letterSpacing: 4,
            marginBottom: 10,
          }}
        >
          "AWS2026"
        </div>
        <div
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 22,
            fontWeight: 800,
            color: emcodeTheme.cyan,
          }}
        >
          Sígueme @emcode para dominar Cloud & DevOps
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
    tag: "FASE 1",
    phase: "Fundamentos Indispensables",
    title: "Redes, IAM & Storage",
    desc: "Nunca toques servicios avanzados sin entender cómo funciona la red y los permisos. Esta base te evitará el 90% de fallos de configuración.",
    MainIcon: VpcShieldIcon,
    cards: [
      {
        Icon: VpcShieldIcon,
        title: "VPC, Subnets & Security Groups",
        desc: "Aislamiento de red, tablas de enrutamiento, NAT Gateways y reglas de firewall granular.",
        accent: "#A78BFA",
      },
      {
        Icon: IamIdIcon,
        title: "IAM Least Privilege & S3",
        desc: "Políticas JSON estrictas, Roles de asunción temporal y almacenamiento seguro en S3.",
        accent: "#FB7185",
      },
    ],
  },
  {
    type: "content",
    num: "02",
    tag: "FASE 2",
    phase: "Modern Backend",
    title: "Serverless & Event-Driven",
    desc: "El estándar para crear microservicios ultrarrápidos y de bajo costo. Aprende a diseñar flujos desacoplados y reactivos.",
    MainIcon: LambdaNeonIcon,
    cards: [
      {
        Icon: LambdaNeonIcon,
        title: "AWS Lambda & API Gateway",
        desc: "Cómputo efímero sin servidores que escala automáticamente por petición HTTP o WebSocket.",
        accent: emcodeTheme.green,
      },
      {
        Icon: DynamoDbCylinderIcon,
        title: "DynamoDB & EventBridge",
        desc: "Bases de datos NoSQL de sub-10ms y buses de eventos con colas SQS/SNS para tolerancia a fallos.",
        accent: "#60A5FA",
      },
    ],
  },
  {
    type: "content",
    num: "03",
    tag: "FASE 3",
    phase: "Automatización & DevOps",
    title: "Terraform & Contenedores",
    desc: "Prohibido crear recursos a mano desde la consola web. Todo el ciclo de vida debe ser reproducible y versionado en Git.",
    MainIcon: Terraform3DIcon,
    cards: [
      {
        Icon: Terraform3DIcon,
        title: "Terraform / AWS CDK",
        desc: "Infraestructura declarativa con estado remoto en S3 y bloqueo concurrente en DynamoDB.",
        accent: "#818CF8",
      },
      {
        Icon: CicdPipelineIcon,
        title: "Docker, ECR & ECS Fargate",
        desc: "Contenedores serverless sin gestionar instancias EC2. CI/CD con GitHub Actions + AWS OIDC.",
        accent: emcodeTheme.cyan,
      },
    ],
  },
  {
    type: "content",
    num: "04",
    tag: "FASE 4",
    phase: "Cloud AI 2026",
    title: "Amazon Bedrock & Data",
    desc: "En 2026 un Cloud Architect debe saber integrar modelos de Inteligencia Artificial en arquitecturas cloud productivas.",
    MainIcon: BedrockBrainIcon,
    cards: [
      {
        Icon: BedrockBrainIcon,
        title: "Amazon Bedrock & Knowledge Bases",
        desc: "Inferencia serverless de LLMs (Claude 3.5, Nova) y RAG empresarial conectado a S3 y OpenSearch.",
        accent: emcodeTheme.cyan,
      },
      {
        Icon: SageMakerNetworkIcon,
        title: "SageMaker & Data Pipelines",
        desc: "Despliegue de modelos custom y consultas SQL analíticas serverless con AWS Glue y Athena.",
        accent: "#2DD4BF",
      },
    ],
  },
  {
    type: "content",
    num: "05",
    tag: "FASE 5",
    phase: "Producción & FinOps",
    title: "Observabilidad & Costos",
    desc: "Construir es fácil; operar en producción a escala y dentro de presupuesto es lo que diferencia a un Senior.",
    MainIcon: GuardrailsShieldIcon,
    cards: [
      {
        Icon: CicdPipelineIcon,
        title: "CloudWatch & AWS X-Ray",
        desc: "Métricas de latencia p99, dashboards interactivos y tracing distribuido entre microservicios.",
        accent: emcodeTheme.cyan,
      },
      {
        Icon: GuardrailsShieldIcon,
        title: "FinOps: Budgets & Anomaly Alerts",
        desc: "Alertas automáticas de gasto, etiquetado de costes (Cost Allocation Tags) y Savings Plans.",
        accent: emcodeTheme.orange,
      },
    ],
  },
  {
    type: "content",
    num: "06",
    tag: "FASE 6",
    phase: "Certificaciones Clave",
    title: "Ruta de Certificación 2026",
    desc: "Valida tus conocimientos ante el mercado internacional con las credenciales oficiales más demandadas.",
    MainIcon: Ec2ChipIcon,
    cards: [
      {
        Icon: Ec2ChipIcon,
        title: "AWS Solutions Architect - Associate",
        desc: "El estándar de la industria (SAA-C03). Demuestra dominio en diseño de sistemas resilientes.",
        accent: emcodeTheme.orange,
      },
      {
        Icon: BedrockBrainIcon,
        title: "AWS GenAI Specialty / DevOps Pro",
        desc: "Especialízate en Inteligencia Artificial Generativa o da el salto al nivel Professional.",
        accent: emcodeTheme.green,
      },
    ],
  },
  { type: "cta" },
];

export const CarruselRutaAWS2026: React.FC = () => {
  const frame = useCurrentFrame();
  const totalSlides = CAROUSEL_SLIDES.length;

  const activeIndex = Math.min(totalSlides - 1, Math.max(0, frame));
  const activeSlide = CAROUSEL_SLIDES[activeIndex];

  return (
    <AbsoluteFill style={{ position: "relative" }}>
      {/* Master Background */}
      <EmcodeCarouselBackground
        accentColor={emcodeTheme.orange}
        glowPosition={activeSlide.type === "portada" ? "top" : activeSlide.type === "cta" ? "bottom" : "center"}
      />

      {/* Master Frame with @emcode Header & Footer */}
      <EmcodeCarouselFrame
        currentSlide={activeIndex + 1}
        totalSlides={totalSlides}
        accentColor={emcodeTheme.orange}
      >
        {activeSlide.type === "portada" && <PortadaSlide />}
        {activeSlide.type === "content" && (
          <ContentSlide
            num={activeSlide.num!}
            tag={activeSlide.tag!}
            phase={activeSlide.phase!}
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
