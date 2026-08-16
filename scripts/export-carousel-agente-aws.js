const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "../out/carousel-agente-aws");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log("🚀 Exportando slides del carrusel: Cómo armar tu propio Agente de AI en AWS...");

// Loop through the 8 slides (frames 0 to 7)
for (let i = 0; i < 8; i++) {
  const frame = i;
  const slideNum = String(i + 1).padStart(2, "0");
  const outputPath = path.join(outputDir, `slide-${slideNum}.png`);
  
  console.log(`📸 Renderizando Slide ${slideNum} (Frame ${frame})...`);
  
  const cmd = `npx remotion still src/index.ts CarruselAgenteAWS "${outputPath}" --frame=${frame} --overwrite`;
  
  try {
    execSync(cmd, { stdio: "inherit" });
  } catch (error) {
    console.error(`❌ Error renderizando la slide ${slideNum}:`, error.message);
    process.exit(1);
  }
}

console.log("\n✅ ¡Carrusel 'Agente de AI en AWS' exportado con éxito en out/carousel-agente-aws/!");
