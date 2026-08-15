# 🎬 GUION: Optimización de Docker con Multi-stage Builds
- **ID Composición:** `EmcodeDockerMultiStage`
- **Categoría:** `DEVOPS`
- **Duración Estimada:** 32s (960 frames @ 30fps)
- **Paleta de Acento:** Naranja `#FF7A1A` y Verde Neón `#00FF41`

---

### 🎣 Escena 1: El Gancho (0s - 7s | Frames 0-210)
- **Título en Pantalla:**
  > "¿Tu imagen de Docker pesa **1.4 GIGAS**? 💀"
- **Elementos Visuales:** Icono Docker con borde de advertencia en rojo/naranja, animación de balanza o peso pesado.
- **Voz en Off / Locución:**
  > "Si tus imágenes de Docker pesan más de un giga, estás regalando tiempo de deploy y memoria en tu servidor."

---

### 💥 Escena 2: El Dolor / La Fricción (7s - 15s | Frames 210-450)
- **Visual en Pantalla:** Terminal mostrando `docker images` con `app:latest 1.42GB` resaltado en rojo neón.
- **Texto de Apoyo:** "El error: Incluir compiladores y dependencias de desarrollo en producción."
- **Voz en Off / Locución:**
  > "El problema es que estás enviando a producción todo el SDK, herramientas de compilación y librerías que solo necesitabas para compilar."

---

### ⚡ Escena 3: La Solución Técnica (15s - 25s | Frames 450-750)
- **Componente:** `ZoomCodeBlock` con sintaxis Dockerfile limpia y zoom dinámico.
- **Código en Pantalla:**
  ```dockerfile
  # Etapa 1: Build
  FROM node:20-alpine AS builder
  WORKDIR /app
  COPY . .
  RUN npm run build

  # Etapa 2: Runner Limpio (Solo 45MB)
  FROM node:20-alpine AS runner
  WORKDIR /app
  COPY --from=builder /app/dist ./dist
  CMD ["node", "dist/index.js"]
  ```
- **Voz en Off / Locución:**
  > "La solución son los Multi-stage builds. Compilas en una etapa y en la etapa final solo copias el bundle compilado. Tu imagen pasa a pesar 45 megabytes."

---

### 🚀 Escena 4: Conclusión & CTA (25s - 32s | Frames 750-960)
- **Visual en Pantalla:** `EmcodeGlassCard` con comparativa `1.4 GB ❌ -> 45 MB ✅` + Badge `@migueldev11`.
- **Voz en Off / Locución:**
  > "Deploys 10 veces más rápidos y menor superficie de ataque. Comenta 'DOCKER' para pasarte la plantilla de optimización y sígueme para más arquitectura real."

---

### 📱 Copy para Redes Sociales
**Caption:**
¿Tus imágenes de Docker pesan más de 1 GB? 🚨👇

El 80% de ese peso son librerías de desarrollo, caches y compilers que jamás deberían llegar a producción.

💡 **Con Multi-stage Builds:**
1. Compilas en una etapa temporal (`AS builder`).
2. Copias únicamente el artefacto final a una imagen limpia (`--from=builder`).
3. Reduces de +1.4GB a menos de 50MB en segundos.

💬 Comenta **DOCKER** y te comparto el repositorio con los templates para Node, Go y Python.
🔖 Guarda este video para optimizar tu próximo despliegue.

#devops #docker #cloud #backend #softwareengineer #programming #linux #emcode
