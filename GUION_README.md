# 📜 Manual y Plantilla Maestra de Guiones — EMCODE 🎬

Guía de producción, redacción y estructura estandarizada para todos los videos cortos (Reels, TikToks y YouTube Shorts) del canal **EMCODE** (`@migueldev11` / `@emcode`).

> 🎙️ **¿Solo quieres leer lo que vas a decir en cada video?** Ve directamente al teleprompter en [GUIONES_VOZ_EN_OFF.md](file:///home/miguel/Documents/Emcode/Videos/migueldev11-reels/GUIONES_VOZ_EN_OFF.md).

---

## ⚡ 1. Filosofía y Reglas de Oro de EMCODE

1. **Impacto en < 2 segundos:** Prohibido saludar con *"Hola a todos"* o *"Bienvenidos a mi canal"*. Se entra directo al dolor, error o revelación técnica.
2. **Estética Cyberpunk / Matrix de Alto Contraste:** 
   - Fondo oscuro: `#0A0E1A`
   - Verde Neón (Matrix/Éxito): `#00FF41`
   - Cyan (Cloud/Arquitectura): `#22D3EE`
   - Naranja (Kinetic/Alerta): `#FF7A1A`
   - Rojo (Error/Mito): `#EF4444`
3. **Zero Espacio Muerto (Formato Vertical 9:16 - 1080x1920):**
   - **Zona Superior:** Gancho / Título cinemático (70px+ con glow).
   - **Zona Central:** Código en vivo (`ZoomCodeBlock`), arquitectura animada (`LiveArchitectureFlow`) o comparativas 3D.
   - **Zona Inferior:** Conclusión, tip rápido o llamada a la acción.
4. **Ritmo de Lectura Cómodo (~30s a 35s | 900 a 1050 frames a 30 FPS):**
   - El espectador debe poder leer el código y comprender el diagrama sin pausar el video constantemente.

---

## ⏱️ 2. Estructura Universal en 4 Escenas

```
  [0s ──────────────── 7s ────────────── 15s ────────────── 25s ────────────── 32s]
   Escena 1: Gancho       Escena 2: Dolor    Escena 3: Solución   Escena 4: CTA
  (Mito / Controversia) (Error / Anti-patrón)  (Código / Cloud)   (Takeaway + Redes)
```

| Escena | Tiempo / Frames | Objetivo | Elemento Visual Remotion | Tono de Voz |
| :--- | :--- | :--- | :--- | :--- |
| **1. Hook Disruptivo** | `0.0s - 7.0s`<br>*(Frames 0 - 210)* | Detener el scroll con una afirmación polémica o dolor agudo. | `KineticHook` + Borde Neón Rojo/Naranja + Iconos en 3D. | Seguro, directo, intrigante. |
| **2. El Problema / Dolor** | `7.0s - 15.0s`<br>*(Frames 210 - 450)* | Mostrar por qué la forma tradicional falla y cuánto cuesta (tiempo, dinero, bugs). | Tarjeta de error / Comparativa Split-Screen / Logs fallidos. | Explicativo, empático con el dolor dev. |
| **3. La Solución Técnica** | `15.0s - 25.0s`<br>*(Frames 450 - 750)* | Mostrar la alternativa profesional con código o arquitectura real. | `ZoomCodeBlock` (Terminal) o `LiveArchitectureFlow` (SVG animado). | Técnico, preciso, revelador. |
| **4. Conclusión & CTA** | `25.0s - 32.0s`<br>*(Frames 750 - 960)* | Resumir el takeaway y pedir interacción (guardar o comentar). | `EmcodeGlassCard` con checklist + Badge `@emcode`. | Enérgico, motivador. |

---

## 📝 3. Plantilla Maestra de Guión (Template Oficial)

> Copia y pega este bloque para redactar cada nuevo video.

```markdown
# 🎬 GUION: [Nombre del Video / Tema]
- **ID Composición:** `Emcode[TemaEnCamelCase]` (ej: `EmcodeDockerMultiStage`)
- **Categoría:** [DEVOPS | CLOUD | LINUX | BACKEND | AI AGENTS]
- **Duración Estimada:** 32s (960 frames @ 30fps)
- **Paleta de Acento:** [Verde #00FF41 | Cyan #22D3EE | Naranja #FF7A1A | Rojo #EF4444]

---

### 🎣 Escena 1: El Gancho (0s - 7s | Frames 0-210)
- **Título en Pantalla:** 
  > "[TEXTO GRANDE 70PX CON NEÓN]"
- **Elementos Visuales:** [Ej: Icono Docker tachado + alerta roja parpadeante]
- **Voz en Off / Locución:**
  > "[Texto exacto a locutar en menos de 15 palabras sin saludos]"

---

### 💥 Escena 2: El Dolor / La Fricción (7s - 15s | Frames 210-450)
- **Visual en Pantalla:** [Ej: Terminal con imagen de 1.4 GB o error de despliegue]
- **Texto de Apoyo:** "[Subtítulo corto o métrica clave]"
- **Voz en Off / Locución:**
  > "[Explicación de por qué este error rompe producción o hace perder horas de debug]"

---

### ⚡ Escena 3: La Solución Técnica (15s - 25s | Frames 450-750)
- **Componente:** `ZoomCodeBlock` / `LiveArchitectureFlow`
- **Código o Diagrama:**
  \`\`\`dockerfile
  # Snippet corto de máximo 6-8 líneas limpias
  FROM node:20-alpine AS builder
  WORKDIR /app
  COPY . .
  RUN npm run build
  \`\`\`
- **Voz en Off / Locución:**
  > "[Explicación paso a paso de la solución técnica exacta]"

---

### 🚀 Escena 4: Conclusión & CTA (25s - 32s | Frames 750-960)
- **Visual en Pantalla:** `EmcodeGlassCard` con 3 bullets de resumen + Badge `@migueldev11`
- **Voz en Off / Locución:**
  > "[Resumen en 1 frase] ¿Tú qué método usas? Guarda este reel para tu próximo deploy y sígueme para más arquitectura real."

---

### 📱 Copy para Redes Sociales
**Caption:**
[Gancho en texto] 👇

[Explicación de 3 párrafos cortos con emojis técnicos]

✅ Tip 1: ...
✅ Tip 2: ...

💬 Comenta **"[PALABRA CLAVE]"** si quieres el código completo o template.
Guarda este video 🔖 para no olvidarlo.

#devops #cloudcomputing #docker #backend #softwareengineer #programming #linux #emcode
```

---

## 🧠 4. Fórmulas de Ganchos (Hooks) de Alta Retención

Usa una de estas fórmulas probadas para la **Escena 1**:

### 1. El Error Oculto (Anti-Patrón)
- *"Sigues haciendo tus imágenes de Docker como en 2018..."*
- *"El peor error que cometen 9 de cada 10 devs con Terraform..."*
- *"Por esto tu API en FastAPI se cae con 100 usuarios concurrentes."*

### 2. La Comparativa Polarizante
- *"¿Por qué dejé Windows y jamás volveré a desarrollar en él?"*
- *"Serverless vs Kubernetes: la verdad que las empresas no te dicen."*
- *"¿PostgreSQL o MongoDB para tu agente de IA?"*

### 3. La Herramienta Game-Changer
- *"Cómo probar AWS sin meter tu tarjeta de crédito ni gastar un centavo."*
- *"Deja de usar NPM: esta herramienta instala tus paquetes en 10 milisegundos."*
- *"Este comando secreto de Linux te ahorra 2 horas de troubleshooting."*

### 4. La Optimización Extrema
- *"De 1.8 Gigabytes a 45 Megabytes: reduciendo contenedores en producción."*
- *"Cómo pasé de 4 segundos a 80 milisegundos en mi base de datos."*

---

## 🛠️ 5. Mapeo de Componentes Remotion para el Guión

Al convertir tu guión a código en `src/videos/emcode/`:

| En el Guión | Componente React / Remotion | Ubicación en el Repo |
| :--- | :--- | :--- |
| **Escena Completa** | `<EmcodeSceneWrapper categoryTag="..." gridColor="...">` | `src/components/viral/EmcodeSceneWrapper.tsx` |
| **Título con Glow** | `<KineticHook text="..." accentColor="...">` | `src/components/viral/KineticHook.tsx` |
| **Terminal / Código** | `<ZoomCodeBlock code="..." language="..." filename="...">` | `src/components/viral/ZoomCodeBlock.tsx` |
| **Diagrama de Nube** | `<LiveArchitectureFlow nodes={[...]} />` | `src/components/viral/LiveArchitectureFlow.tsx` |
| **Tarjeta Resumen / CTA** | `<EmcodeGlassCard title="...">` | `src/components/viral/EmcodeGlassCard.tsx` |
| **Logos Vectoriales** | `<LinuxIcon />`, `<DockerIcon />`, `<AwsIcon />`, etc. | `src/components/flat/FlatIcons.tsx` |

---

## ✅ 6. Checklist Pre-Render

- [ ] **Líneas de código legibles:** Máximo 7 a 9 líneas en pantalla por bloque.
- [ ] **Fuente y Contraste:** Texto principal en `#F5F5F0` o `#00FF41` sobre fondo oscuro.
- [ ] **Sin solapamiento UI:** Nada importante en los 150px superiores (header de Instagram/TikTok) ni en los 250px inferiores (descripción y botones de la app).
- [ ] **Audio / Beats:** Sincronizado con `brand.beats` (112.5 BPM / cada 16 frames).
- [ ] **Comando de renderizado probado:** `npm run render:[nombre]` ejecutado con éxito.

---

> 💡 **Tip:** Puedes crear una carpeta `guiones/` en la raíz del proyecto para guardar cada archivo `.md` de tus videos antes de programarlos en Remotion.
