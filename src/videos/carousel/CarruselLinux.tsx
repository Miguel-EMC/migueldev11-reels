import React from "react";
import { AbsoluteFill, useCurrentFrame, staticFile } from "remotion";
import { brand } from "../../themes/brand";

// -------------------------------------------------------------------------
// 1. HELPERS & SUB-COMPONENTS
// -------------------------------------------------------------------------

// Neon Glowing Text Helper (configured with JetBrains Mono and Green Glow)
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

// Reusable Carousel Background (Navy + Vignette + Perspective Grid + Glow + Stars + Separator)
interface BackgroundProps {
  accentColor?: string;
  glowPosition?: "center" | "top" | "bottom";
}

export const CarouselBackground: React.FC<BackgroundProps> = ({
  accentColor = brand.green,
  glowPosition = "center",
}) => {
  // Static stars coordinates for a high-quality starry sky effect
  const stars = [
    { cx: 100, cy: 120, r: 2 }, { cx: 250, cy: 220, r: 1.5 }, { cx: 400, cy: 80, r: 2.5 },
    { cx: 850, cy: 150, r: 1.5 }, { cx: 980, cy: 280, r: 2 }, { cx: 150, cy: 600, r: 1 },
    { cx: 900, cy: 650, r: 2.5 }, { cx: 70, cy: 900, r: 2 }, { cx: 1010, cy: 880, r: 1.5 },
    { cx: 300, cy: 1100, r: 2 }, { cx: 780, cy: 1050, r: 2.5 }, { cx: 920, cy: 1200, r: 1.5 }
  ];

  const glowTop = glowPosition === "top" ? "20%" : glowPosition === "bottom" ? "80%" : "50%";

  return (
    <AbsoluteFill style={{ 
      background: "linear-gradient(to bottom, #0A0E1A 0%, #11172A 100%)", 
      overflow: "hidden" 
    }}>
      {/* 3D Perspective Grid at the bottom */}
      <div
        style={{
          position: "absolute",
          inset: -200,
          backgroundImage: `
            linear-gradient(to right, ${accentColor}12 1px, transparent 1px),
            linear-gradient(to bottom, ${accentColor}12 1px, transparent 1px)
          `,
          backgroundSize: "75px 75px",
          transform: "perspective(1000px) rotateX(75deg)",
          transformOrigin: "center bottom",
          maskImage: "linear-gradient(to bottom, transparent 30%, black 70%, black 100%)",
          opacity: 0.8,
        }}
      />

      {/* Glow Vignette */}
      <div
        style={{
          position: "absolute",
          top: glowTop,
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          background: `radial-gradient(circle, ${accentColor}1c 0%, transparent 70%)`,
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* Vignette border */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle, transparent 40%, #0A0E1Aee 95%)`,
          pointerEvents: "none",
        }}
      />

      {/* SVG Stars */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.45 }}>
        {stars.map((star, i) => (
          <circle key={i} cx={star.cx} cy={star.cy} r={star.r} fill={brand.cream} />
        ))}
      </svg>

      {/* Subtle top horizontal separator */}
      <div
        style={{
          position: "absolute",
          top: 130,
          left: 60,
          right: 60,
          height: 1,
          background: `linear-gradient(to right, transparent, rgba(0, 255, 65, 0.2) 20%, rgba(0, 255, 65, 0.2) 80%, transparent)`,
        }}
      />
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------------------
// 2. SLIDE DESIGNS
// -------------------------------------------------------------------------

// Slide 1: Portada
const PortadaSlide: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", padding: "160px 80px 140px 80px" }}>
      {/* Brand logo image at the top */}
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
        [ TERMINAL ]
      </div>

      {/* Titular */}
      <h1
        style={{
          fontFamily: brand.fontMono,
          fontSize: 74,
          fontWeight: 800,
          color: brand.cream,
          textAlign: "center",
          lineHeight: 1.25,
          letterSpacing: "-2px",
          marginBottom: 40,
        }}
      >
        Comandos de
        <br />
        Linux que uso
        <br />
        <GlowText fontSize={76}>TODOS los días</GlowText>
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
        Herramientas indispensables para resolver problemas reales en el desarrollo diario.
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

// Slides 2-6: Contenido
interface ContentSlideProps {
  num: string;
  tag: string;
  cmd: string;
  title: string;
  desc: string;
}

const ContentSlide: React.FC<ContentSlideProps> = ({ num, tag, cmd, title, desc }) => {
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
          color: `${brand.green}0c`, // Translúcido
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {num}
      </div>

      {/* Command terminal pill */}
      <div
        style={{
          alignSelf: "flex-start",
          border: `2px solid ${brand.green}`,
          borderRadius: 16,
          padding: "12px 28px",
          backgroundColor: "#11172A",
          fontFamily: brand.fontMono,
          fontSize: 30,
          fontWeight: 700,
          color: brand.cyan,
          letterSpacing: "0.5px",
          marginBottom: 45,
          boxShadow: `0 8px 24px rgba(0, 255, 65, 0.12)`,
        }}
      >
        $ {cmd}
      </div>

      {/* Title / Action */}
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
        Paso {num} / 05
      </div>
    </AbsoluteFill>
  );
};

// Slide 7: Slide Final (CTA)
const CtaSlide: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", padding: "180px 80px 140px 80px" }}>
      {/* Title question */}
      <h2
        style={{
          fontFamily: brand.fontMono,
          fontSize: 66,
          fontWeight: 800,
          color: brand.cream,
          textAlign: "center",
          lineHeight: 1.3,
          letterSpacing: "-1px",
          marginBottom: 50,
        }}
      >
        ¿Cuál de estos usas
        <br />
        <GlowText fontSize={68}>más seguido? 👇</GlowText>
      </h2>

      {/* Chevron list recap */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 25,
          marginBottom: 70,
          width: "100%",
          padding: "0 20px",
        }}
      >
        {[
          "01. lsof -i :3000 para liberar puertos",
          "02. chmod +x para permisos de scripts",
          "03. tail -f para monitoreo de logs en vivo",
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              fontFamily: brand.fontMono,
              fontSize: 28,
              fontWeight: 600,
              color: brand.textDim,
              lineHeight: 1.3,
            }}
          >
            <span style={{ color: brand.cyan, fontWeight: 900, marginRight: 15 }}>›</span>
            <span>{item}</span>
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
            letterSpacing: 1,
            marginBottom: 20,
          }}
        >
          GUARDA ESTO · COMPÁRTELO
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
          Sígueme → {brand.handle}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Main Carousel Data (100% Real daily dev command list)
const CAROUSEL_SLIDES = [
  { type: "portada" },
  {
    type: "content",
    num: "01",
    tag: "Procesos",
    cmd: "lsof -i :3000",
    title: "Liberar puertos",
    desc: "Encuentra al instante el identificador de proceso (PID) que está bloqueando tu puerto de desarrollo local (ej. 3000) para poder matarlo y levantar tu servidor.",
  },
  {
    type: "content",
    num: "02",
    tag: "Permisos",
    cmd: "chmod +x script.sh",
    title: "Archivos ejecutables",
    desc: "Resuelve el clásico error de la terminal 'Permission Denied' otorgándole permisos de ejecución directa a tus scripts locales y herramientas de automatización.",
  },
  {
    type: "content",
    num: "03",
    tag: "Logs",
    cmd: "tail -f server.log",
    title: "Monitorear logs en vivo",
    desc: "Visualiza de manera interactiva la salida de tus archivos de registros o eventos del servidor en tiempo real a medida que van ocurriendo en el sistema.",
  },
  {
    type: "content",
    num: "04",
    tag: "Red",
    cmd: "curl -I https://api.dev",
    title: "Inspeccionar headers HTTP",
    desc: "Realiza llamadas web rápidas para verificar los códigos de estado, redirecciones activas y cabeceras de respuesta del servidor directamente en tu terminal.",
  },
  {
    type: "content",
    num: "05",
    tag: "Búsqueda",
    cmd: "grep -rn \"patrón\" .",
    title: "Búsqueda de código",
    desc: "Busca recursivamente cualquier término, función o cadena de texto en todo tu directorio de proyecto, indicando el archivo y número exacto de línea.",
  },
  { type: "cta" },
];

export const CarruselLinux: React.FC = () => {
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
            cmd={activeSlide.cmd!}
            title={activeSlide.title!}
            desc={activeSlide.desc!}
          />
        )}
        {activeSlide.type === "cta" && <CtaSlide />}
      </AbsoluteFill>

      {/* HEADER: Small brand name next to watermark logo at the top */}
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

      {/* FOOTER: Fixed Watermark (bottom-left) & Slide Counter (bottom-right) */}
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
        {/* Watermark handle (bottom-left) */}
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
