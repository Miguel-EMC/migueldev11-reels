const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const carousels = [
  { id: "CarruselJuniorSenior", folder: "carousel-junior-senior", name: "Junior to Senior" },
  { id: "CarruselInglesDevs", folder: "carousel-ingles-devs", name: "Inglés para Devs" },
  { id: "CarruselRutaFastAPI", folder: "carousel-ruta-fastapi", name: "Ruta FastAPI" },
  { id: "CarruselGitSalvavidas", folder: "carousel-git-salvavidas", name: "Git Salvavidas" },
  { id: "CarruselMonolitoMicro", folder: "carousel-monolito-micro", name: "Monolito vs Microservicios" }
];

console.log("🚀 Iniciando exportación de los 5 carruseles de marketing...");

for (const carousel of carousels) {
  const outputDir = path.join(__dirname, "../out", carousel.folder);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`\n📂 Exportando carrusel: ${carousel.name} (${carousel.id}) -> out/${carousel.folder}/`);

  for (let i = 0; i < 8; i++) {
    const frame = i;
    const slideNum = String(i + 1).padStart(2, "0");
    const outputPath = path.join(outputDir, `slide-${slideNum}.png`);
    
    console.log(`  📸 Renderizando Slide ${slideNum} (Frame ${frame})...`);
    const cmd = `npx remotion still src/index.ts ${carousel.id} "${outputPath}" --frame=${frame} --overwrite`;
    
    try {
      execSync(cmd, { stdio: "inherit" });
    } catch (error) {
      console.error(`  ❌ Error renderizando la slide ${slideNum} de ${carousel.name}:`, error.message);
      process.exit(1);
    }
  }
}

console.log("\n✅ ¡Todos los 5 carruseles de marketing exportados con éxito!");
