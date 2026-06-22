import React from "react";
import { AbsoluteFill, useCurrentFrame, staticFile } from "remotion";
import { brand } from "../../themes/brand";
import { CarouselBackground } from "./Carrusel";

// Neon Glowing Text Helper (JetBrains Mono by default)
interface GlowTextProps {
  color?: string;
  glowColor?: string;
  fontSize: number;
  fontWeight?: number | string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const GlowText: React.FC<GlowTextProps> = ({
  color = brand.cream,
  glowColor = brand.green,
  fontSize,
  fontWeight = 800,
  style,
  children,
}) => {
  return (
    <span
      style={{
        fontFamily: brand.fontMono,
        fontSize,
        fontWeight,
        color,
        textShadow: `0 0 15px ${glowColor}, 0 0 35px ${glowColor}66`,
        ...style,
      }}
    >
      {children}
    </span>
  );
};

// Slide 1: Portada
const PortadaSlide: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", padding: "160px 80px 140px 80px" }}>
      {/* Logo */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 50 }}>
        <img
          src={staticFile("brand_image.png")}
          alt="migueldev11 Logo"
          style={{
            width: 170,
            height: 170,
            borderRadius: "50%",
            border: `3px solid ${brand.green}`,
            boxShadow: brand.glowGreen,
          }}
        />
      </div>

      {/* Kicker */}
      <div
        style={{
          fontFamily: brand.fontMono,
          fontSize: 32,
          fontWeight: 800,
          color: brand.green,
          letterSpacing: 4,
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: 35,
          textShadow: brand.glowGreen,
        }}
      >
        [ TERMINAL HACKS ]
      </div>

      {/* Titular */}
      <h1
        style={{
          fontFamily: brand.fontMono,
          fontSize: 66,
          fontWeight: 800,
          color: brand.cream,
          textAlign: "center",
          lineHeight: 1.3,
          letterSpacing: "-2px",
          marginBottom: 40,
        }}
      >
        Cómo dominar
        <br />
        <GlowText fontSize={68} color={brand.green}>CLAUDE CODE</GlowText>
        <br />
        sin que programe por ti 🤖
      </h1>

      {/* Subtítulo */}
      <p
        style={{
          fontFamily: brand.fontMono,
          fontSize: 30,
          fontWeight: 500,
          color: brand.textDim,
          textAlign: "center",
          lineHeight: 1.45,
          padding: "0 20px",
        }}
      >
        saca el máximo provecho al nuevo CLI de Anthropic
      </p>

      {/* Hint bottom */}
      <div
        style={{
          marginTop: "auto",
          fontFamily: brand.fontMono,
          fontSize: 26,
          fontWeight: 700,
          color: brand.green,
          letterSpacing: 2,
          textAlign: "center",
          textShadow: brand.glowGreen,
        }}
      >
        desliza →
      </div>
    </AbsoluteFill>
  );
};

// Slides 2-7: Contenido
interface ContentSlideProps {
  num: string;
  tag: string;
  title: string;
  desc: string;
}

const ContentSlide: React.FC<ContentSlideProps> = ({ num, tag, title, desc }) => {
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", padding: "200px 80px 140px 80px" }}>
      {/* Giant Phantom Number */}
      <div
        style={{
          position: "absolute",
          top: 150,
          right: 60,
          fontFamily: brand.fontMono,
          fontSize: 420,
          fontWeight: 900,
          color: `${brand.green}0c`,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {num}
      </div>

      {/* Pill Category */}
      <div
        style={{
          alignSelf: "flex-start",
          border: `2px solid ${brand.green}`,
          borderRadius: 50,
          padding: "10px 28px",
          backgroundColor: `${brand.green}10`,
          fontFamily: brand.fontMono,
          fontSize: 24,
          fontWeight: 800,
          color: brand.green,
          letterSpacing: 2,
          textTransform: "uppercase",
          marginBottom: 50,
          boxShadow: `0 0 10px ${brand.green}22`,
        }}
      >
        {tag}
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: brand.fontMono,
          fontSize: 60,
          fontWeight: 800,
          color: brand.cream,
          lineHeight: 1.25,
          letterSpacing: "-1px",
          marginBottom: 45,
        }}
      >
        <GlowText fontSize={60}>{title}</GlowText>
      </h2>

      {/* Description */}
      <p
        style={{
          fontFamily: brand.fontMono,
          fontSize: 32,
          fontWeight: 400,
          color: brand.cream,
          lineHeight: 1.55,
          opacity: 0.9,
          maxWidth: "95%",
        }}
      >
        {desc}
      </p>

      {/* Step Indicator */}
      <div
        style={{
          marginTop: "auto",
          fontFamily: brand.fontMono,
          fontSize: 26,
          fontWeight: 700,
          color: brand.textDim,
        }}
      >
        Paso {num} / 06
      </div>
    </AbsoluteFill>
  );
};

// Slide 8: Slide Final (CTA)
const CtaSlide: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", padding: "180px 80px 140px 80px" }}>
      {/* Title question */}
      <h2
        style={{
          fontFamily: brand.fontMono,
          fontSize: 62,
          fontWeight: 800,
          color: brand.cream,
          textAlign: "center",
          lineHeight: 1.3,
          letterSpacing: "-1px",
          marginBottom: 50,
        }}
      >
        ¿Ya probaste Claude Code en terminal?
        <br />
        <GlowText fontSize={64}>Cuéntame tu experiencia 👇</GlowText>
      </h2>

      {/* Recap Grid (2 columns for 6 items) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "25px 30px",
          marginBottom: 60,
          width: "100%",
          padding: "0 20px",
        }}
      >
        {[
          { num: "01", label: "delegar, no dictar" },
          { num: "02", label: "crear CLAUDE.md" },
          { num: "03", label: "autodebug con tests" },
          { num: "04", label: "conectar gh y lsp" },
          { num: "05", label: "usar /ultrathink" },
          { num: "06", label: "revisar como un PR" },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontFamily: brand.fontMono,
              fontSize: 24,
              fontWeight: 600,
              color: brand.textDim,
            }}
          >
            <span style={{ color: brand.cyan, fontWeight: 900, marginRight: 15 }}>{item.num}.</span>
            <span style={{ color: brand.cream }}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div
        style={{
          marginTop: "auto",
          border: `3px dashed ${brand.green}`,
          borderRadius: 28,
          padding: "45px 30px",
          backgroundColor: "rgba(10, 14, 26, 0.65)",
          backdropFilter: "blur(10px)",
          boxShadow: `0 15px 35px rgba(0, 255, 65, 0.1)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: brand.fontMono,
            fontSize: 32,
            fontWeight: 800,
            color: brand.cream,
            letterSpacing: 2,
            marginBottom: 20,
          }}
        >
          GUARDA ESTE POST
        </div>
        <div
          style={{
            fontFamily: brand.fontMono,
            fontSize: 28,
            fontWeight: 800,
            color: brand.green,
            textShadow: brand.glowGreen,
          }}
        >
          Sígueme @migueldev11
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Main Carousel Data
const CAROUSEL_SLIDES = [
  { type: "portada" },
  {
    type: "content",
    num: "01",
    tag: "ESTRATEGIA",
    title: "Delegar, no dictar",
    desc: "No le indiques paso a paso cómo escribir el código. Describe el objetivo final esperado, la arquitectura técnica y tus restricciones. Deja que proponga soluciones y revísalas.",
  },
  {
    type: "content",
    num: "02",
    tag: "CONTEXTO",
    title: "Crea tu CLAUDE.md",
    desc: "Añade un archivo 'CLAUDE.md' en la raíz de tu proyecto. Describe los comandos de compilación, de tests y las guías de estilo. Claude Code lo leerá al iniciar y evitará errores.",
  },
  {
    type: "content",
    num: "03",
    tag: "AUTOMATIZACIÓN",
    title: "Corre tus tests",
    desc: "En lugar de validar cambios a ojo, ordénale: 'ejecuta la suite de tests'. Si fallan, Claude Code leerá el log de error de consola y se auto-corregirá.",
  },
  {
    type: "content",
    num: "04",
    tag: "HERRAMIENTAS",
    title: "Integra gh y LSPs",
    desc: "Permite a Claude Code usar plugins de LSP y herramientas CLI como GitHub CLI (gh). Así podrá crear ramas, abrir PRs y corregir warnings del compilador automáticamente.",
  },
  {
    type: "content",
    num: "05",
    tag: "CRISIS DEBUG",
    title: "Usa /ultrathink",
    desc: "Cuando te enfrentes a refactorizaciones complejas o bugs rebeldes de arquitectura, activa '/ultrathink'. Esto obligará a la IA a razonar intensamente antes de modificar código.",
  },
  {
    type: "content",
    num: "06",
    tag: "CONTROL",
    title: "Revisa como un PR",
    desc: "No comitees a ciegas. Trata los cambios de Claude Code como la propuesta de un compañero junior: revisa los diffs de git, valida la lógica y mantén la autoría de tu arquitectura.",
  },
  { type: "cta" },
];

export const CarruselClaudeCode: React.FC = () => {
  const frame = useCurrentFrame();
  const totalSlides = CAROUSEL_SLIDES.length;

  const activeIndex = Math.min(totalSlides - 1, Math.max(0, frame));
  const activeSlide = CAROUSEL_SLIDES[activeIndex];

  return (
    <AbsoluteFill style={{ position: "relative" }}>
      {/* Background */}
      <CarouselBackground 
        accentColor={brand.green}
        glowPosition={activeSlide.type === "portada" ? "top" : activeSlide.type === "cta" ? "bottom" : "center"}
      />

      {/* Slide Content */}
      <AbsoluteFill>
        {activeSlide.type === "portada" && <PortadaSlide />}
        {activeSlide.type === "content" && (
          <ContentSlide
            num={activeSlide.num!}
            tag={activeSlide.tag!}
            title={activeSlide.title!}
            desc={activeSlide.desc!}
          />
        )}
        {activeSlide.type === "cta" && <CtaSlide />}
      </AbsoluteFill>

      {/* HEADER */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 60,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          zIndex: 50,
        }}
      >
        <img
          src={staticFile("brand_image.png")}
          alt=""
          style={{ width: 44, height: 44, borderRadius: "50%", marginRight: 15, border: `1px solid ${brand.green}` }}
        />
        <span
          style={{
            fontFamily: brand.fontMono,
            fontSize: 22,
            fontWeight: 800,
            color: brand.cream,
            letterSpacing: 1,
          }}
        >
          migueldev11
        </span>
      </div>

      {/* FOOTER */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 60,
          right: 60,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 50,
        }}
      >
        {/* Watermark (bottom-left) */}
        <div
          style={{
            fontFamily: brand.fontMono,
            fontSize: 26,
            fontWeight: 800,
            color: brand.green,
            textShadow: brand.glowGreen,
          }}
        >
          {brand.handle}
        </div>

        {/* Counter (bottom-right) */}
        <div
          style={{
            fontFamily: brand.fontMono,
            fontSize: 26,
            fontWeight: 800,
            color: brand.cyan,
            textShadow: brand.glowCyan,
          }}
        >
          {activeIndex + 1} / {totalSlides}
        </div>
      </div>
    </AbsoluteFill>
  );
};
