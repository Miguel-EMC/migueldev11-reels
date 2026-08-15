# 🎙️ GUIONES DE VOZ EN OFF — EMCODE (`@migueldev11`)
### *Guía de Teleprompter / Locución Palabra por Palabra para Todos los Videos*

> Este documento contiene **únicamente lo que vas a decir frente a la cámara o en el micrófono** en cada video, con las marcas de tiempo y el énfasis adecuado para mantener una retención alta (~30 a 35 segundos por reel).

---

## 📑 Índice Rápido de Videos

1. [Reel 1: ¿Por qué dejé Windows para programar?](#1-por-qué-dejé-windows-para-programar)
2. [Reel 2: Matando el "En mi máquina sí funciona" (Docker + ECS)](#2-matando-el-en-mi-máquina-sí-funciona)
3. [Reel 3: Prueba AWS sin Tarjeta de Crédito (LocalStack)](#3-prueba-aws-sin-tarjeta-de-crédito)
4. [Reel 4: Infraestructura con Terraform (IaC vs Consola)](#4-infraestructura-con-terraform)
5. [Reel 5: Arquitectura Serverless para Agentes de IA](#5-arquitectura-serverless-para-agentes-de-ia)
6. [Reel 6: Pipeline de Ingestión RAG con FastAPI](#6-pipeline-de-ingestión-rag-con-fastapi)
7. [Serie Docker Cap 1: Multi-stage Builds (De 1.4GB a 45MB)](#7-docker-cap-1-multi-stage-builds)
8. [Serie Kubernetes Cap 1: De Docker a Kubernetes en 30s](#8-kubernetes-cap-1-de-docker-a-k8s)
9. [Serie IA & RAG Cap 1: Por qué tu LLM alucina sin RAG](#9-ia--rag-cap-1-por-qué-tu-llm-alucina)
10. [Serie Claude & MCP: Conecta tu IA a tu Base de Datos Real](#10-claude--mcp-conecta-tu-ia-a-tu-base-de-datos)
11. [Historias Dev: El Bug más caro de la historia (Ariane 5)](#11-historias-dev-el-bug-más-caro-de-la-historia)
12. [Dev Hacks: ¿Cómo sabe Git qué archivos cambiaste?](#12-dev-hacks-cómo-sabe-git-qué-archivos-cambiaste)

---

## 1. ¿Por qué dejé Windows para programar?
- **ID Composición:** `EmcodeWhyLeftWindows` | **Duración:** ~31s

### 🎙️ Lo que vas a decir:

> **[0s - 7s | Gancho - Tono directo / provocador]**  
> *"¿Desarrollar en Windows? 💀 Déjame decirte por qué cambiar a Linux fue la mejor decisión técnica de mi carrera."*

> **[7s - 15s | El Problema - Tono de frustración compartida]**  
> *"En Windows vivía peleando con Docker Desktop comiéndose 12 gigas de RAM, rutas con barras invertidas que rompían scripts de Node, y un kernel que no se parece en nada a los servidores donde corre tu código en producción."*

> **[15s - 25s | La Solución - Tono técnico y seguro]**  
> *"En Linux, Docker corre de forma nativa sin capas de virtualización pesadas, la terminal de Bash vuela y todo lo que pruebas en local se comporta exactamente igual en tu cluster de AWS."*

> **[25s - 31s | CTA / Cierre - Tono enérgico]**  
> *"¿Y tú, sigues programando en Windows o ya diste el salto a Linux? Déjamelo en los comentarios y sígueme para más contenido dev."*

---

## 2. Matando el "En mi máquina sí funciona"
- **ID Composición:** `EmcodeKillingItWorks` | **Duración:** ~32s

### 🎙️ Lo que vas a decir:

> **[0s - 7s | Gancho - Tono desafiante]**  
> *"¿En tu máquina sí funciona pero en producción se cae? 🤡 Esa frase ya no es una excusa en 2026."*

> **[7s - 15s | El Problema - Tono analítico]**  
> *"El clásico error es tener dependencias instaladas en tu laptop que nunca documentaste, versiones distintas de Node o Python, y variables de entorno quemadas en el código que rompen el despliegue."*

> **[15s - 25s | La Solución - Tono didáctico y fluido]**  
> *"La solución profesional es empaquetar tu servicio en un contenedor Docker con imagen inmutable y desplegar la definición de tareas con Terraform directo a ECS o Kubernetes. Si corre en el contenedor, corre idéntico en la nube."*

> **[25s - 32s | CTA / Cierre]**  
> *"Mata esa frase para siempre. Comenta la palabra **DEPLOY** si quieres la plantilla de Docker y Terraform lista para producción."*

---

## 3. Prueba AWS sin Tarjeta de Crédito
- **ID Composición:** `EmcodeTestAwsNoCard` | **Duración:** ~32s

### 🎙️ Lo que vas a decir:

> **[0s - 7s | Gancho - Tono revelador / entusiasta]**  
> *"¿Quieres aprender Cloud y AWS pero tienes miedo de que te llegue una factura de mil dólares a tu tarjeta? 💳🔥"*

> **[7s - 15s | El Problema]**  
> *"A todos nos ha pasado dejar una instancia EC2 o una base de datos encendida por accidente durante el fin de semana y pagar las consecuencias."*

> **[15s - 25s | La Solución]**  
> *"Por eso debes usar **LocalStack**. Es un emulador completo de AWS que corre dentro de un simple contenedor de Docker en tu computadora. Puedes crear buckets S3, funciones Lambda, tablas de DynamoDB y colas SQS totalmente gratis y offline."*

> **[25s - 32s | CTA / Cierre]**  
> *"Guarda este reel para tu próxima práctica en la nube y comenta **LOCALSTACK** para enviarte el `docker-compose` de configuración."*

---

## 4. Infraestructura con Terraform
- **ID Composición:** `EmcodeTerraformIaC` | **Duración:** ~32s

### 🎙️ Lo que vas a decir:

> **[0s - 7s | Gancho - Tono de advertencia profesional]**  
> *"Si sigues creando tus bases de datos y servidores haciendo clic en la consola de AWS... estás jugando a la ruleta rusa en producción 🛑"*

> **[7s - 15s | El Problema]**  
> *"Configurar infraestructura a mano no tiene historial de versiones, nadie sabe quién cambió qué, y si un servidor se cae, tardarás horas en volverlo a levantar exactamente igual."*

> **[15s - 25s | La Solución]**  
> *"Con **Terraform e Infraestructura como Código**, describes tus recursos en archivos declarativos `.tf`. Ejecutas un `terraform apply` y levantas toda tu arquitectura replicable, auditable y automatizada en segundos."*

> **[25s - 32s | CTA / Cierre]**  
> *"¿En tu empresa usan Infraestructura como Código o siguen haciendo clics manuales? Cuéntamelo abajo y sígueme para dominar DevOps."*

---

## 5. Arquitectura Serverless para Agentes de IA
- **ID Composición:** `EmcodeServerlessAgent` | **Duración:** ~32s

### 🎙️ Lo que vas a decir:

> **[0s - 7s | Gancho - Tono innovador / vanguardista]**  
> *"Así es como construyo un Agente de Inteligencia Artificial que escala a millones de usuarios pagando cero dólares en servidores inactivos 🤖⚡"*

> **[7s - 15s | El Problema / Contexto]**  
> *"Mantener servidores dedicados 24/7 para modelos de IA que solo reciben tráfico esporádico quema el presupuesto de cualquier proyecto."*

> **[15s - 25s | La Solución]**  
> *"Conectamos una API Gateway a funciones AWS Lambda en Python. La Lambda orquesta el prompt hacia Amazon Bedrock o Claude, y el estado de la conversación se guarda en DynamoDB en milisegundos. Solo pagas por cada milisegundo exacto de ejecución."*

> **[25s - 32s | CTA / Cierre]**  
> *"Comenta **AGENTE** si quieres el diagrama de arquitectura y el código de Terraform en tu bandeja de entrada."*

---

## 6. Pipeline de Ingestión RAG con FastAPI
- **ID Composición:** `EmcodeFastApiPipeline` | **Duración:** ~30s

### 🎙️ Lo que vas a decir:

> **[0s - 7s | Gancho]**  
> *"¿Tu backend se bloquea cuando procesas documentos pesados para tu Inteligencia Artificial? 📄⏳"*

> **[7s - 15s | El Problema]**  
> *"Hacer el chunking, generar los embeddings y guardarlos en la base de datos vectorial dentro del mismo request HTTP hace que tu API responda con timeout."*

> **[15s - 25s | La Solución]**  
> *"Usa los `BackgroundTasks` nativos de FastAPI o colas asíncronas con Celery. Recibes el archivo en S3, retornas un status `queued` en 5 milisegundos al cliente, y procesas los embeddings hacia tu Vector DB en segundo plano sin congelar la API."*

> **[25s - 30s | CTA / Cierre]**  
> *"Guarda este video y sígueme para aprender a construir sistemas de IA listos para producción."*

---

## 7. Docker Cap 1: Multi-stage Builds
- **Tema:** Optimización extrema de contenedores | **Duración:** ~30s

### 🎙️ Lo que vas a decir:

> **[0s - 7s | Gancho]**  
> *"¿Tu imagen de Docker pesa 1.4 Gigas? 💀 Deja de enviar basura a producción."*

> **[7s - 15s | El Problema]**  
> *"El 80% de ese peso son compiladores, SDKs y dependencias de desarrollo que solo necesitabas para compilar tu código."*

> **[15s - 25s | La Solución]**  
> *"Implementa **Multi-stage Builds**. Creas una primera etapa llamada `builder` para compilar, y una etapa final con Alpine Linux donde únicamente copias el bundle compilado. Tu imagen pasa de 1.4 Gigabytes a solo 45 Megas."*

> **[25s - 30s | CTA / Cierre]**  
> *"Deploys más rápidos y máxima seguridad. Comenta **DOCKER** y te paso los templates para Node, Python y Go."*

---

## 8. Kubernetes Cap 1: De Docker a K8s
- **Tema:** Orquestación y alta disponibilidad | **Duración:** ~30s

### 🎙️ Lo que vas a decir:

> **[0s - 7s | Gancho]**  
> *"¿Ya sabes usar Docker pero no entiendes para qué necesitas Kubernetes? Te lo explico en 20 segundos ☸️"*

> **[7s - 15s | El Problema]**  
> *"Docker corre tus contenedores en un solo servidor. Pero si ese servidor se apaga a las 3 de la mañana... tu aplicación muere por completo."*

> **[15s - 25s | La Solución]**  
> *"Kubernetes gestiona un cluster de múltiples máquinas. Si un contenedor falla, levanta otro de inmediato. Si entra mucho tráfico, escala réplicas automáticamente. Y reparte la carga entre servidores sin que tú muevas un dedo."*

> **[25s - 30s | CTA / Cierre]**  
> *"¿Estás usando Docker Compose o ya migraste a Kubernetes? Déjamelo en los comentarios."*

---

## 9. IA & RAG Cap 1: Por qué tu LLM alucina
- **Tema:** Retrieval-Augmented Generation | **Duración:** ~32s

### 🎙️ Lo que vas a decir:

> **[0s - 7s | Gancho]**  
> *"¿Le preguntas a ChatGPT sobre los datos privados de tu empresa y te inventa cualquier respuesta? 🤖❌"*

> **[7s - 15s | El Problema]**  
> *"Los modelos de lenguaje no tienen acceso a tus bases de datos ni a tus PDFs internos, y hacer fine-tuning es lento, costoso y se desactualiza al día siguiente."*

> **[15s - 25s | La Solución]**  
> *"La solución es **RAG (Generación Aumentada por Recuperación)**. Cuando el usuario pregunta, primero buscamos los fragmentos más relevantes en una base de datos vectorial como Qdrant o Pinecone, y se los inyectamos en el prompt como contexto exacto. Cero alucinaciones y datos 100% reales."*

> **[25s - 32s | CTA / Cierre]**  
> *"Sígueme para ver el tutorial paso a paso donde conectamos RAG con Python y LangChain."*

---

## 10. Claude & MCP: Conecta tu IA a tu Base de Datos
- **Tema:** Model Context Protocol | **Duración:** ~31s

### 🎙️ Lo que vas a decir:

> **[0s - 7s | Gancho]**  
> *"Esto cambia para siempre cómo programamos con Inteligencia Artificial: te presento **MCP** 🔌"*

> **[7s - 15s | El Problema]**  
> *"Hasta ahora tenías que copiar y pegar schemas, tablas y errores de tu terminal a la ventana del chat de IA una y otra vez."*

> **[15s - 25s | La Solución]**  
> *"Con el **Model Context Protocol de Anthropic**, Claude se conecta directamente a tu base de datos Postgres, a tu repositorio de GitHub y a tus logs de AWS. Puede consultar esquemas, ejecutar tests y corregir bugs en tu código en tiempo real con permisos seguros."*

> **[25s - 31s | CTA / Cierre]**  
> *"¿Ya probaste Claude Code o sigues usando asistentes tradicionales? Cuéntame abajo."*

---

## 11. Historias Dev: El Bug más caro de la historia
- **Tema:** Caso Ariane 5 | **Duración:** ~32s

### 🎙️ Lo que vas a decir:

> **[0s - 7s | Gancho]**  
> *"Este error de código costó **370 millones de dólares** y destruyó un cohete espacial en 37 segundos 🚀💥"*

> **[7s - 15s | El Problema / La Historia]**  
> *"En 1996, el cohete Ariane 5 despegó de la Tierra. A los 37 segundos de vuelo, su software de navegación intentó convertir un número decimal de 64 bits en un entero de 16 bits."*

> **[15s - 25s | El Desenlace Técnico]**  
> *"El valor de velocidad era tan alto que causó un **Integer Overflow**. El código no tenía un bloque de captura de excepción, el procesador se bloqueó, el sistema de navegación envió señales erráticas a los motores y el cohete se autodestruyó en el aire."*

> **[25s - 32s | CTA / Cierre]**  
> *"Manejar excepciones no es opcional. ¿Cuál ha sido el bug más doloroso que has tenido en producción? Te leo en los comentarios."*

---

## 12. Dev Hacks: ¿Cómo sabe Git qué archivos cambiaste?
- **Tema:** Funcionamiento interno de Git | **Duración:** ~30s

### 🎙️ Lo que vas a decir:

> **[0s - 7s | Gancho]**  
> *"¿Alguna vez te has preguntado cómo hace Git para saber exactamente qué línea modificaste en un proyecto de miles de archivos? 🧠📂"*

> **[7s - 15s | El Secreto Interno]**  
> *"Git no guarda diferencias o listas de cambios. Cada vez que modificas un archivo, Git calcula su hash criptográfico SHA-1 y crea un objeto llamado **Blob**."*

> **[15s - 25s | La Explicación]**  
> *"Cuando haces un commit, Git toma una foto completa de tu árbol de directorios con esos hashes. Si el hash del archivo no cambió, solo reutiliza el puntero anterior. Por eso Git es ultrarrápido y ocupa tan poco espacio en disco."*

> **[25s - 30s | CTA / Cierre]**  
> *"Si quieres dominar Git y DevOps a bajo nivel, guarda este video y sígueme."*

---

## 💡 Consejos para la Grabación:
1. **Pausas de 0.5s** entre cada sección para que el corte de edición sea limpio.
2. **Modular el tono:** Escena 1 enérgica y rápida, Escena 2 más empática, Escena 3 pausada y didáctica, Escena 4 directa al CTA.
3. Puedes leer directamente este archivo en tu celular o teleprompter mientras grabas tu micrófono de solapa o condensador.
