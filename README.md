# 🎬 EMCODE — Automated Viral Dev Reels Engine

<p align="center">
  <img src="https://img.shields.io/badge/Remotion-4.0-blue?style=for-the-badge&logo=react" alt="Remotion" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Brand-@emcode-00FF41?style=for-the-badge" alt="@emcode" />
  <img src="https://img.shields.io/badge/Format-1080x1920%20(9:16)-FF7A1A?style=for-the-badge" alt="Format" />
</p>

Motor programático de generación y renderizado de videos en formato vertical (**1080x1920 / 9:16**) para **TikTok, Instagram Reels y YouTube Shorts**, enfocado en contenido de alto valor técnico sobre **DevOps, Cloud Computing, Arquitectura Backend, Linux e Inteligencia Artificial**.

---

## ⚡ Características Principales

- 🟢 **Identidad Visual Matrix/Cyberpunk (`@emcode`):** Paleta de colores neon de alto contraste (`#00FF41` verde neón, `#22D3EE` cyan, `#FF7A1A` naranja y `#EF4444` rojo).
- 📐 **Distribución Vertical en 3 Zonas (Zero Espacio Muerto):**
  - **Zona Superior:** Gancho cinematográfico con tipografía kinetica de 70px+ y bordes luminosos.
  - **Zona Central:** Terminales interactivos con escritura en vivo, comparativas 3D o diagramas de topología cloud con flujo de datos SVG animados.
  - **Zona Inferior:** Conclusión técnica de alto impacto y llamado a la acción (CTA) para comentarios o guardados.
- 💻 **Syntax Highlighting & Mockups Nativos:** Bloques de código con zoom dinámico (`ZoomCodeBlock`), terminales Linux/macOS y mascotas vectoriales de Manjaro, Docker, AWS y Terraform.
- ⏱️ **Ritmo Cómodo de Lectura (~30s a 35s):** Cada escena cuenta con una duración pausada (7s a 10s) para garantizar la lectura de todo el código y explicaciones técnicas.

---

## 📦 Instalación y Requisitos

### Requisitos Previos
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **FFmpeg** (incluido automáticamente por Remotion)

### Instalación
```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd migueldev11-reels

# Instalar dependencias
npm install
```

---

## 🚀 Uso Rápido

### 1. Iniciar Remotion Studio (Vista Previa en Vivo)
Abre la interfaz visual interactiva en tu navegador para reproducir, pausar y ajustar cualquier escena en tiempo real:
```bash
npm run dev
# o
npm start
```
> Accede a `http://localhost:3000` en tu navegador.

### 2. Comprobar Tipos y Errores
```bash
npx tsc --noEmit
```

---

## 🎥 Lista de Reels Disponibles y Comandos de Renderizado

| Reel / Tema | ID Composición | Duración | Comando de Exportación |
| :--- | :--- | :--- | :--- |
| **¿Por qué dejé Windows para programar?** | `EmcodeWhyLeftWindows` | ~31.0s (930f) | `npm run render:emcode-windows` |
| **Matando el "En mi máquina sí funciona"** | `EmcodeKillingItWorks` | ~32.0s (960f) | `npm run render:emcode-killing-it-works` |
| **Prueba AWS sin tarjeta de crédito** | `EmcodeTestAwsNoCard` | ~32.0s (960f) | `npm run render:emcode-test-aws` |
| **Infraestructura AI-Ready con Terraform** | `EmcodeTerraformIaC` | ~32.0s (960f) | `npm run render:emcode-terraform` |
| **Arquitectura Serverless para Agente IA** | `EmcodeServerlessAgent` | ~31.6s (950f) | `npm run render:emcode-serverless` |

Los videos renderizados se exportarán automáticamente a la carpeta `out/` en formato `.mp4` optimizado para redes sociales.

---

## 📁 Estructura del Proyecto

```tree
migueldev11-reels/
├── src/
│   ├── Root.tsx                      # Registro central de todas las composiciones Remotion
│   ├── index.ts                      # Punto de entrada de Remotion
│   ├── themes/
│   │   ├── brand.ts                  # Tokens de diseño @emcode (colores, fuentes, sombras neón)
│   │   └── emcode.ts                 # Constantes de tema extendidas
│   ├── components/
│   │   ├── viral/
│   │   │   ├── EmcodeSceneWrapper.tsx   # Contenedor maestro 1080x1920 con fondo 3D y marcas de agua
│   │   │   ├── EmcodeGlassCard.tsx      # Tarjeta central con efecto glassmorphism y animación spring
│   │   │   ├── ZoomCodeBlock.tsx        # Terminal interactiva con resaltado de sintaxis y zoom
│   │   │   ├── LiveArchitectureFlow.tsx # Diagramas cloud con paquetes de datos SVG animados
│   │   │   └── KineticHook.tsx          # Banners de gancho de alto impacto
│   │   ├── flat/
│   │   │   ├── FlatIcons.tsx            # Iconos SVG vectoriales (Linux, Docker, AWS, LocalStack, etc.)
│   │   │   └── EmcodeLogo.tsx           # Logotipo y firmas de marca @emcode
│   │   ├── GridBackground.tsx           # Suelo con perspectiva 3D giratorio
│   │   └── ParticleField.tsx            # Partículas flotantes reactivas
│   └── videos/
│       └── emcode/                      # Videos de la serie EMCODE
│           ├── windows/                 # Escenas de "Por qué dejé Windows"
│           ├── itworksonmymachine/      # Escenas de "En mi máquina sí funciona"
│           ├── localstack/              # Escenas de "AWS con LocalStack"
│           ├── terraform/               # Escenas de "Terraform IaC"
│           └── serverless/              # Escenas de "Arquitectura Serverless IA"
├── remotion.config.ts                # Configuración de renderizado de Remotion
├── tsconfig.json                     # Configuración de TypeScript
└── package.json                      # Scripts y dependencias
```

---

## 🛠️ Cómo Crear un Nuevo Video (Paso a Paso)

### Paso 1: Crear las Escenas
Crea una carpeta en `src/videos/emcode/<mi-tema>/` con 4 escenas usando `EmcodeSceneWrapper`:

```tsx
// src/videos/emcode/mitema/Scene1Hook.tsx
import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <EmcodeSceneWrapper categoryTag="MI CATEGORÍA" gridColor={brand.green}>
      {/* 1. Zona Superior: Título */}
      <div style={{ /* estilos de banner */ }}>
        <h1>Tu Título <span style={{ color: brand.green }}>Impactante</span></h1>
      </div>

      {/* 2. Zona Central: Contenido / Código / Gráfico */}
      <div>...</div>

      {/* 3. Zona Inferior: Conclusión / CTA */}
      <div>...</div>
    </EmcodeSceneWrapper>
  );
};
```

### Paso 2: Crear el Archivo Maestro del Video
```tsx
// src/videos/emcode/MiVideoMaster.tsx
import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Hook } from "./mitema/Scene1Hook";
// ... importar escenas 2, 3 y 4

export const MI_VIDEO_TOTAL_FRAMES = 960; // 32s @ 30fps

export const MiVideoMaster: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={210}><Scene1Hook /></Sequence>
      <Sequence from={210} durationInFrames={270}><Scene2Concept /></Sequence>
      <Sequence from={480} durationInFrames={300}><Scene3Code /></Sequence>
      <Sequence from={780} durationInFrames={180}><Scene4CTA /></Sequence>
    </AbsoluteFill>
  );
};
```

### Paso 3: Registrar en `src/Root.tsx` y `package.json`
Agrega la composición en `src/Root.tsx`:
```tsx
<Composition
  id="EmcodeMiVideo"
  component={MiVideoMaster}
  durationInFrames={MI_VIDEO_TOTAL_FRAMES}
  fps={30}
  width={1080}
  height={1920}
/>
```
Y añade el script de renderizado en `package.json`:
```json
"render:emcode-mivideo": "remotion render src/index.ts EmcodeMiVideo out/mivideo.mp4"
```

---

## 🎨 Paleta de Colores & Diseño

| Token | Código Hex | Uso Principal |
| :--- | :--- | :--- |
| **`brand.bg`** | `#0A0E1A` | Fondo oscuro con gradiente radial |
| **`brand.green`** | `#00FF41` | Acento principal Matrix / Éxito / Terminal |
| **`brand.cyan`** | `#22D3EE` | Acento secundario Cloud / Docker / HCL |
| **`brand.orange`** | `#FF7A1A` | Alertas, costos, AWS y llamadas a la acción |
| **`brand.red`** | `#EF4444` | Errores en producción, Windows y antipatrones |
| **`brand.cream`** | `#F5F5F0` | Texto principal de lectura en títulos y párrafos |
| **`brand.textDim`**| `#94A3B8` | Subtítulos, comentarios de código y metadatos |

---

## 📄 Licencia

Desarrollado para la creación automatizada de contenido técnico de **@emcode**.
Todos los derechos reservados.
