import React from "react";
import { AbsoluteFill, useCurrentFrame, staticFile } from "remotion";
import { emcodeTheme } from "../../themes/emcode";

export interface MotivationQuote {
  id: number;
  originalNum: number;
  highlightText: string;
  mainText: string;
  kicker: string;
  accentColor: string;
  bgImage: string;
}

export const MOTIVATION_QUOTES: MotivationQuote[] = [
  {
    id: 1,
    originalNum: 1,
    kicker: "[ MENTALIDAD DEV ]",
    highlightText: "Un senior no es alguien que nunca falla.",
    mainText: "Es alguien que ya arregló ese mismo error 100 veces.",
    accentColor: emcodeTheme.green,
    bgImage: "backgrounds/bg_matrix.jpg",
  },
  {
    id: 2,
    originalNum: 2,
    kicker: "[ DEBUGGING ]",
    highlightText: "No le temas a una pantalla roja.",
    mainText: "Cada stack trace es el mapa exacto hacia tu maestría técnica.",
    accentColor: "#EF4444",
    bgImage: "backgrounds/bg_hacker.jpg",
  },
  {
    id: 3,
    originalNum: 3,
    kicker: "[ APRENDIZAJE REAL ]",
    highlightText: "El tutorial te da la ilusión de entender.",
    mainText: "Romper cosas en la consola te da el conocimiento real.",
    accentColor: emcodeTheme.cyan,
    bgImage: "backgrounds/bg_cyan.jpg",
  },
  {
    id: 4,
    originalNum: 4,
    kicker: "[ REALIDAD DEV ]",
    highlightText: "Si tu código funcionó a la primera, desconfía.",
    mainText: "Si falló, felicidades: estás a punto de aprender algo nuevo.",
    accentColor: emcodeTheme.orange,
    bgImage: "backgrounds/bg_amber.jpg",
  },
  {
    id: 5,
    originalNum: 5,
    kicker: "[ RESILIENCIA ]",
    highlightText: "La diferencia entre un dev promedio y un crack",
    mainText: "no es la inteligencia: es cuánto tiempo aguanta buscando el bug.",
    accentColor: emcodeTheme.green,
    bgImage: "backgrounds/bg_matrix.jpg",
  },
  {
    id: 6,
    originalNum: 7,
    kicker: "[ CONSTANCIA ]",
    highlightText: "Un commit al día parece poco.",
    mainText: "En 365 días es una carrera profesional construida.",
    accentColor: emcodeTheme.green,
    bgImage: "backgrounds/bg_hacker.jpg",
  },
  {
    id: 7,
    originalNum: 8,
    kicker: "[ DISCIPLINA ]",
    highlightText: "No necesitas ser un genio de Silicon Valley.",
    mainText: "Solo necesitas sentarte a programar cuando no tengas ganas.",
    accentColor: emcodeTheme.cyan,
    bgImage: "backgrounds/bg_cyan.jpg",
  },
  {
    id: 8,
    originalNum: 9,
    kicker: "[ EL COMIENZO ]",
    highlightText: "Nadie nace sabiendo arquitectura cloud.",
    mainText: "Todos empezamos buscando cómo centrar un div en CSS.",
    accentColor: emcodeTheme.orange,
    bgImage: "backgrounds/bg_amber.jpg",
  },
  {
    id: 9,
    originalNum: 10,
    kicker: "[ ENFOQUE ]",
    highlightText: "Tu competencia no es el dev con 10 años de experiencia.",
    mainText: "Tu única competencia es tu versión de ayer que se rindió.",
    accentColor: emcodeTheme.cyan,
    bgImage: "backgrounds/bg_cyan.jpg",
  },
  {
    id: 10,
    originalNum: 11,
    kicker: "[ MODO FOCUS ]",
    highlightText: "Las mejores líneas de código se escriben",
    mainText: "cuando el resto del mundo está durmiendo.",
    accentColor: emcodeTheme.green,
    bgImage: "backgrounds/bg_matrix.jpg",
  },
  {
    id: 11,
    originalNum: 13,
    kicker: "[ ERA DE LA IA ]",
    highlightText: "Mientras otros dudan si la IA los va a reemplazar,",
    mainText: "tú estás aprendiendo a dominarla y construir sobre ella.",
    accentColor: emcodeTheme.cyan,
    bgImage: "backgrounds/bg_hacker.jpg",
  },
  {
    id: 12,
    originalNum: 16,
    kicker: "[ VERDAD PURA ]",
    highlightText: "El código no miente, no tiene favoritos",
    mainText: "y premia únicamente a quien no se rinde.",
    accentColor: emcodeTheme.green,
    bgImage: "backgrounds/bg_matrix.jpg",
  },
  {
    id: 13,
    originalNum: 17,
    kicker: "[ REGLA DE ORO ]",
    highlightText: "Primero haz que funcione. Luego hazlo rápido.",
    mainText: "Pero sobre todo: nunca te detengas.",
    accentColor: emcodeTheme.orange,
    bgImage: "backgrounds/bg_amber.jpg",
  },
  {
    id: 14,
    originalNum: 18,
    kicker: "[ HÁBITO DEV ]",
    highlightText: "El talento te puede abrir una puerta.",
    mainText: "La disciplina constante en Git la mantiene abierta.",
    accentColor: emcodeTheme.green,
    bgImage: "backgrounds/bg_cyan.jpg",
  },
  {
    id: 15,
    originalNum: 19,
    kicker: "[ OBJETIVO ]",
    highlightText: "No estudies solo para pasar una entrevista técnica.",
    mainText: "Estudia para ser el mejor en lo que construyes.",
    accentColor: emcodeTheme.cyan,
    bgImage: "backgrounds/bg_hacker.jpg",
  },
  {
    id: 16,
    originalNum: 20,
    kicker: "[ ACCIÓN ]",
    highlightText: "Menos tutoriales infinitos.",
    mainText: "Más proyectos reales en producción.",
    accentColor: emcodeTheme.green,
    bgImage: "backgrounds/bg_matrix.jpg",
  },
];

export const MotivacionDev: React.FC = () => {
  const frame = useCurrentFrame();
  const activeIndex = Math.min(MOTIVATION_QUOTES.length - 1, Math.max(0, frame));
  const quote = MOTIVATION_QUOTES[activeIndex];

  return (
    <AbsoluteFill style={{ backgroundColor: "#060A12", overflow: "hidden" }}>
      {/* High-Resolution Clean Background Photo */}
      <img
        src={staticFile(quote.bgImage)}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.38) contrast(1.1)",
        }}
      />

      {/* Cinematic Dark Vignette Overlay for maximum text readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at center, rgba(6, 10, 18, 0.4) 0%, rgba(6, 10, 18, 0.85) 60%, rgba(6, 10, 18, 0.96) 100%)`,
        }}
      />

      {/* Subtle Color Glow Accent */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 750,
          height: 750,
          background: `radial-gradient(circle, ${quote.accentColor}20 0%, transparent 65%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* TOP HEADER: @emcode BRAND */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 14,
          zIndex: 30,
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 12,
            backgroundColor: "#0A1A0A",
            border: `2px solid ${emcodeTheme.green}`,
            boxShadow: emcodeTheme.glowGreen,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: emcodeTheme.fontMono,
            fontSize: 22,
            fontWeight: 900,
            color: emcodeTheme.green,
          }}
        >
          {"<e/>"}
        </div>
        <span
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 28,
            fontWeight: 900,
            color: emcodeTheme.cream,
            letterSpacing: 3,
          }}
        >
          EM<span style={{ color: emcodeTheme.green }}>CODE</span>
        </span>
      </div>

      {/* Main Motivational Typography in Center */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 80px",
          textAlign: "center",
          zIndex: 20,
        }}
      >
        {/* Kicker Badge */}
        <div
          style={{
            border: `2px solid ${quote.accentColor}`,
            borderRadius: 50,
            padding: "10px 30px",
            backgroundColor: `${quote.accentColor}1c`,
            fontFamily: emcodeTheme.fontMono,
            fontSize: 22,
            fontWeight: 900,
            color: quote.accentColor,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 45,
            boxShadow: `0 0 20px ${quote.accentColor}33`,
            backdropFilter: "blur(8px)",
          }}
        >
          {quote.kicker}
        </div>

        {/* Highlight Bold Phrase */}
        <h1
          style={{
            fontFamily: emcodeTheme.fontSans,
            fontSize: 68,
            fontWeight: 950,
            color: emcodeTheme.cream,
            lineHeight: 1.25,
            letterSpacing: "-2px",
            marginBottom: 35,
            textShadow: "0 6px 30px rgba(0,0,0,0.95), 0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          {quote.highlightText}
        </h1>

        {/* Main Glowing Body Phrase */}
        <p
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 44,
            fontWeight: 800,
            color: quote.accentColor,
            lineHeight: 1.4,
            letterSpacing: "-0.5px",
            maxWidth: "92%",
            textShadow: `0 0 20px ${quote.accentColor}, 0 0 45px ${quote.accentColor}66, 0 4px 20px rgba(0,0,0,0.9)`,
          }}
        >
          {quote.mainText}
        </p>
      </AbsoluteFill>

      {/* BOTTOM FOOTER: Watermark */}
      <div
        style={{
          position: "absolute",
          bottom: 85,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 30,
        }}
      >
        <div
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 30,
            fontWeight: 900,
            color: emcodeTheme.green,
            textShadow: emcodeTheme.glowGreen,
            letterSpacing: 2,
            padding: "8px 24px",
            borderRadius: 16,
            backgroundColor: "rgba(10, 26, 16, 0.75)",
            border: `1px solid ${emcodeTheme.green}44`,
            backdropFilter: "blur(8px)",
          }}
        >
          @emcode
        </div>
      </div>
    </AbsoluteFill>
  );
};
