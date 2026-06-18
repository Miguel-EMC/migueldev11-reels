import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const ComprehensiveYouTubeIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Animation Timing Triggers ---
  // 0 - 60: Stage 1 (User Query Input)
  // 60 - 120: Stage 2 (Embedding Conversion)
  // 120 - 180: Stage 3 (Vector DB Search)
  // 180 - 240: Stage 4 (LLM Augmentation & Output)
  // 240+: Grand Title Resolution
  
  const step1 = spring({ frame, fps, config: { damping: 12 } });
  const step2 = spring({ frame: frame - 60, fps, config: { damping: 12 } });
  const step3 = spring({ frame: frame - 120, fps, config: { damping: 12 } });
  const step4 = spring({ frame: frame - 180, fps, config: { damping: 12 } });
  const resolution = spring({ frame: frame - 240, fps, config: { damping: 15 } });

  // Continuous floating camera pan
  const camX = Math.sin(frame / 30) * 15;
  const camY = Math.cos(frame / 35) * 10;

  // Real world data constants for visualization
  const vectorValues = [0.15, -0.72, 0.44, 0.91, -0.33, 0.08, 0.65, -0.19];

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      <GridBackground color={brand.green} />
      <ParticleField />

      {/* Futuristic Ambient Glow Rings */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at center, transparent 15%, #060912 85%)",
        pointerEvents: "none", zIndex: 2
      }} />

      {/* DYNAMIC SUB-SCENE 1: ARCHITECTURE PIPELINE FLOW DIAGRAM (Visible up to resolution) */}
      {frame < 248 && (
        <AbsoluteFill style={{
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          padding: 60, zIndex: 10, transform: `translate(${camX}px, ${camY}px)`
        }}>
          
          {/* Top Stage Tracker Indicator Tag */}
          <div style={{
            fontFamily: brand.fontMono, fontSize: 24, fontWeight: 800, color: brand.green,
            letterSpacing: 4, background: "rgba(0, 255, 65, 0.1)", border: `2px solid ${brand.green}44`,
            padding: "10px 30px", borderRadius: 30, textShadow: brand.glowGreen, marginBottom: 50,
            opacity: interpolate(frame, [0, 10, 230, 240], [0, 1, 1, 0])
          }}>
            {frame < 60 && "STEP 01 // INGESTA DE PREGUNTA EN TIEMPO REAL"}
            {frame >= 60 && frame < 120 && "STEP 02 // GENERACIÓN DE EMBEDDINGS NUMÉRICOS"}
            {frame >= 120 && frame < 180 && "STEP 03 // BÚSQUEDA VECTORIAL EN BASE DE DATOS (MILIREGISTROS)"}
            {frame >= 180 && "STEP 04 // AUMENTACIÓN & GENERACIÓN FINAL DEL LLM"}
          </div>

          {/* MAIN PIPELINE HORIZONTAL BLOCK STREAM FLOW DIAGRAM */}
          <div style={{
            display: "flex", alignItems: "center", gap: 30, width: "95%", justifyContent: "space-between",
            position: "relative"
          }}>
            
            {/* STAGE A: User Input Card */}
            <div style={{
              width: 320, background: "rgba(15, 23, 42, 0.85)", backdropFilter: "blur(16px)",
              border: `3px solid ${frame < 60 ? brand.green : brand.cream + "22"}`, borderRadius: 20,
              padding: 25, boxShadow: frame < 60 ? `0 0 30px ${brand.green}33, ${brand.glowGreen}` : "none",
              transform: `scale(${interpolate(step1, [0, 1], [0.7, 1])})`, opacity: step1, transition: "all 0.3s"
            }}>
              <div style={{ fontFamily: brand.fontMono, fontSize: 18, color: brand.textDim, marginBottom: 8 }}>[ USER_QUERY ]</div>
              <div style={{ fontFamily: brand.fontSans, fontSize: 26, fontWeight: 800, color: brand.cream }}>
                "¿Cómo entrenar un cachorro?"
              </div>
              <div style={{ width: "100%", height: 4, backgroundColor: brand.green + "44", marginTop: 15, borderRadius: 2, overflow: "hidden" }}>
                <div style={{ width: (frame * 2.5) % 100 + "%", height: "100%", backgroundColor: brand.green, boxShadow: brand.glowGreen }} />
              </div>
            </div>

            {/* Link Arrow 1 */}
            <div style={{ fontSize: 40, color: frame >= 60 ? brand.green : brand.textDim, opacity: step2, textShadow: frame >= 60 ? brand.glowGreen : "none" }}>➡</div>

            {/* STAGE B: Embedding Transformer Node */}
            <div style={{
              width: 320, background: "rgba(15, 23, 42, 0.85)", backdropFilter: "blur(16px)",
              border: `3px solid ${frame >= 60 && frame < 120 ? brand.green : brand.cream + "22"}`, borderRadius: 20,
              padding: 25, boxShadow: frame >= 60 && frame < 120 ? `0 0 30px ${brand.green}33, ${brand.glowGreen}` : "none",
              transform: `scale(${interpolate(step2, [0, 1], [0.7, 1])})`, opacity: step2, transition: "all 0.3s"
            }}>
              <div style={{ fontFamily: brand.fontMono, fontSize: 18, color: brand.textDim, marginBottom: 8 }}>[ EMBEDDING_MODEL ]</div>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, marginTop: 10 }}>
                {vectorValues.map((v, i) => (
                  <div key={i} style={{
                    fontFamily: brand.fontMono, fontSize: 14, fontWeight: 700, padding: "6px 2px",
                    background: frame >= 60 ? `${brand.green}1F` : "transparent",
                    border: `1px solid ${frame >= 60 ? brand.green + "66" : brand.cream + "11"}`,
                    color: frame >= 60 ? brand.green : brand.textDim, borderRadius: 4, textAlign: "center"
                  }}>
                    {v > 0 ? `+${v}` : v}
                  </div>
                ))}
              </div>
            </div>

            {/* Link Arrow 2 */}
            <div style={{ fontSize: 40, color: frame >= 120 ? brand.green : brand.textDim, opacity: step3, textShadow: frame >= 120 ? brand.glowGreen : "none" }}>➡</div>

            {/* STAGE C: Vector DB Knowledge Base Retrieval */}
            <div style={{
              width: 320, background: "rgba(15, 23, 42, 0.85)", backdropFilter: "blur(16px)",
              border: `3px solid ${frame >= 120 && frame < 180 ? brand.green : brand.cream + "22"}`, borderRadius: 20,
              padding: 25, boxShadow: frame >= 120 && frame < 180 ? `0 0 30px ${brand.green}33, ${brand.glowGreen}` : "none",
              transform: `scale(${interpolate(step3, [0, 1], [0.7, 1])})`, opacity: step3, transition: "all 0.3s"
            }}>
              <div style={{ fontFamily: brand.fontMono, fontSize: 18, color: brand.textDim, marginBottom: 8 }}>[ VECTOR_DATABASE ]</div>
              <div style={{ fontFamily: brand.fontSans, fontSize: 22, fontWeight: 800, color: brand.cream }}>
                📂 Doc_#204: <span style={{ color: brand.green }}>"Guía de Canes"</span>
              </div>
              <div style={{ fontFamily: brand.fontSans, fontSize: 16, color: brand.textDim, marginTop: 5 }}>
                Similitud Coseno: 0.985
              </div>
            </div>

            {/* Link Arrow 3 */}
            <div style={{ fontSize: 40, color: frame >= 180 ? brand.green : brand.textDim, opacity: step4, textShadow: frame >= 180 ? brand.glowGreen : "none" }}>➡</div>

            {/* STAGE D: Augmented Context Generator Output */}
            <div style={{
              width: 320, background: "rgba(15, 23, 42, 0.85)", backdropFilter: "blur(16px)",
              border: `3px solid ${frame >= 180 ? brand.green : brand.cream + "22"}`, borderRadius: 20,
              padding: 25, boxShadow: frame >= 180 ? `0 0 30px ${brand.green}33, ${brand.glowGreen}` : "none",
              transform: `scale(${interpolate(step4, [0, 1], [0.7, 1])})`, opacity: step4, transition: "all 0.3s"
            }}>
              <div style={{ fontFamily: brand.fontMono, fontSize: 18, color: brand.textDim, marginBottom: 8 }}>[ LLM_AUGMENTED_RESP ]</div>
              <div style={{ fontFamily: brand.fontSans, fontSize: 20, fontWeight: 700, color: brand.green }}>
                ✓ Respuesta Precisa sin Alucinación.
              </div>
            </div>

          </div>

          {/* Bottom Live-Feed Code Console Terminal Mimic */}
          <div style={{
            width: "100%", background: "rgba(5, 8, 16, 0.9)", border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: 16, padding: 25, marginTop: 60, fontFamily: brand.fontMono, fontSize: 22,
            color: brand.green, boxShadow: "0 20px 40px rgba(0,0,0,0.8)", opacity: step1
          }}>
            <span style={{ color: brand.orange }}>migueldev11@rag-system:~$</span> pipeline --init --verbose<br/>
            {frame >= 30 && <span style={{ color: brand.cream }}>[INFO] Fetching prompt semantic context indexes successfully...</span>}<br/>
            {frame >= 90 && <span style={{ color: brand.green }}>[SUCCESS] Embedding generated target vectors layout resolved into 1536 dims.</span>}<br/>
            {frame >= 150 && <span style={{ color: brand.cyan }}>[DATABASE] Query match hit inside indices storage cluster. Returning matching context blocks...</span>}
          </div>

        </AbsoluteFill>
      )}

      {/* GRAND RESOLUTION CHAPTER PRE-SHOW TITLE CARD OVERLAY */}
      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        zIndex: 50, opacity: resolution, transform: `scale(${interpolate(resolution, [0, 1], [1.4, 1.0])})`,
        pointerEvents: resolution > 0.1 ? "auto" : "none",
        background: `radial-gradient(circle at center, ${brand.bg} 40%, transparent 100%)`
      }}>
        
        {/* Massive Corporate Premium Tech Branding Identity */}
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: brand.fontMono, fontSize: 36, color: brand.green, letterSpacing: 12,
            textTransform: "uppercase", marginBottom: 20, textShadow: brand.glowGreen, fontWeight: 400
          }}>
            SISTEMAS DE PRODUCCIÓN AVANZADOS
          </div>

          <h2 style={{
            fontFamily: brand.fontSans, fontSize: 150, fontWeight: 900, color: brand.cream,
            lineHeight: 0.9, letterSpacing: "-5px", margin: 0,
            textShadow: `0 0 40px ${brand.green}88, 0 0 100px ${brand.green}33`
          }}>
            RAG COMPLETO
          </h2>

          <div style={{
            fontFamily: brand.fontMono, fontSize: 44, fontWeight: 800, color: brand.orange,
            marginTop: 30, letterSpacing: 4, textShadow: brand.glowOrange
          }}>
            Embeddings · Vector DBs · LLM Context
          </div>

          {/* Progress bar anchor line */}
          <div style={{
            width: 700, height: 6, backgroundColor: "rgba(255,255,255,0.05)",
            margin: "50px auto 0 auto", borderRadius: 3, position: "relative", overflow: "hidden"
          }}>
            <div style={{
              position: "absolute", left: 0, top: 0, height: "100%", backgroundColor: brand.green,
              width: interpolate(frame - 240, [0, 60], [0, 100]) + "%", boxShadow: brand.glowGreen
            }} />
          </div>
        </div>

      </AbsoluteFill>

    </AbsoluteFill>
  );
};
