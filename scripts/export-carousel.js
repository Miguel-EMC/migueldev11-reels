const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "../out/carousel");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log("🚀 Exportando slides del carrusel migueldev11...");

// Loop through the 7 slides (frames 0 to 6)
for (let i = 0; i < 7; i++) {
  const frame = i;
  const slideNum = String(i + 1).padStart(2, "0");
  const outputPath = path.join(outputDir, `slide-${slideNum}.png`);
  
  console.log(`📸 Renderizando Slide ${slideNum} (Frame ${frame})...`);
  
  // Call Remotion CLI 'still' command
  const cmd = `npx remotion still src/index.ts Carrusel "${outputPath}" --frame=${frame} --overwrite`;
  
  try {
    execSync(cmd, { stdio: "inherit" });
  } catch (error) {
    console.error(`❌ Error renderizando la slide ${slideNum}:`, error.message);
    process.exit(1);
  }
}

console.log("\n✅ ¡Carrusel exportado con éxito en out/carousel/!");
