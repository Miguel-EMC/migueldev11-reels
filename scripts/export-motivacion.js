const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "../out/motivacion");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log("=================================================");
console.log("🚀 Exportando 16 imágenes motivacionales @emcode (1080x1920)...");
console.log("=================================================\n");

// 16 quotes (frames 0 to 15)
for (let i = 0; i < 16; i++) {
  const frame = i;
  const num = String(i + 1).padStart(2, "0");
  const outputPath = path.join(outputDir, `motivacion-${num}.png`);
  
  console.log(`📸 Renderizando Imagen Motivacional ${num} (Frame ${frame})...`);
  
  const cmd = `npx remotion still src/index.ts MotivacionDev "${outputPath}" --frame=${frame} --overwrite`;
  
  try {
    execSync(cmd, { stdio: "inherit" });
  } catch (error) {
    console.error(`❌ Error renderizando frase ${num}:`, error.message);
    process.exit(1);
  }
}

console.log("\n=================================================");
console.log("✅ ¡16 imágenes motivacionales exportadas con éxito en out/motivacion/!");
console.log("=================================================\n");
