const { execSync } = require("child_process");
const path = require("path");

console.log("=================================================");
console.log("⚡ RENDERIZANDO TODOS LOS NUEVOS CARRUSELES EN SUS FOLDERS");
console.log("=================================================\n");

const scripts = [
  { name: "1. Agente de AI con AWS", file: "export-carousel-agente-aws.js" },
  { name: "2. Ruta para aprender AWS en 2026", file: "export-carousel-ruta-aws-2026.js" },
  { name: "3. Ruta para ser AI Engineer en 2026", file: "export-carousel-ruta-ai-engineer.js" },
];

for (const s of scripts) {
  console.log(`\n▶️ INICIANDO: ${s.name}...`);
  try {
    execSync(`node "${path.join(__dirname, s.file)}"`, { stdio: "inherit" });
  } catch (err) {
    console.error(`❌ Error ejecutando ${s.file}:`, err.message);
    process.exit(1);
  }
}

console.log("\n=================================================");
console.log("🎉 ¡TODOS LOS CARRUSELES FUERON GENERADOS CON ÉXITO!");
console.log("📁 Carpetas generadas en out/:");
console.log("   - out/carousel-agente-aws/ (8 imágenes)");
console.log("   - out/carousel-ruta-aws-2026/ (8 imágenes)");
console.log("   - out/carousel-ruta-ai-engineer/ (8 imágenes)");
console.log("=================================================\n");
