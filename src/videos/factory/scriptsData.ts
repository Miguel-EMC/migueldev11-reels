export interface VideoStep {
  number: string;
  title: string;
  desc: string;
}

export interface VideoScript {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  accentColor: string;
  cta: string;
  steps: VideoStep[];
}

export const VIDEO_SCRIPTS: VideoScript[] = [
  {
    id: "bug-caro",
    title: "EL BUG MÁS CARO DE LA HISTORIA",
    subtitle: "Costó 370 millones de dólares 💸",
    category: "HISTORIAS DE SOFTWARE",
    accentColor: "#EF4444",
    cta: "¿Qué bug te costó más arreglar?",
    steps: [
      { number: "01", title: "Ariane 5 (1996)", desc: "El cohete explotó a los 37 segundos del lanzamiento 🚀" },
      { number: "02", title: "Overflow Fatal", desc: "Intentaron meter un float de 64 bits en un int de 16 bits 💥" },
      { number: "03", title: "Sin Capturar", desc: "El sistema de guía falló por no capturar la excepción 🛠️" }
    ]
  },
  {
    id: "centros-agua",
    title: "¿POR QUÉ LA IA CONSUME AGUA?",
    subtitle: "El secreto térmico de los data centers 💧",
    category: "INFRAESTRUCTURA",
    accentColor: "#22D3EE",
    cta: "¿Conocías este impacto de la IA?",
    steps: [
      { number: "01", title: "Calor Extremo", desc: "Millones de CPUs corriendo IA generan temperaturas brutales 🔥" },
      { number: "02", title: "Enfriamiento", desc: "Usan torres de evaporación para absorber calor con agua pura 🌊" },
      { number: "03", title: "Consumo Gigante", desc: "Una sola consulta a GPT puede consumir medio litro de agua 🧪" }
    ]
  },
  {
    id: "whatsapp-viaje",
    title: "EL VIAJE DE UN WHATSAPP",
    subtitle: "En menos de 1 segundo a tu pantalla ⚡",
    category: "REDES & PROTOCOLOS",
    accentColor: "#22C55E",
    cta: "¿Sabías cómo viajan tus mensajes?",
    steps: [
      { number: "01", title: "Cifrado Local", desc: "Tu móvil encripta el mensaje con la clave del receptor 🔐" },
      { number: "02", title: "Servidor Erlang", desc: "Un nodo ultra concurrente rutea la carga en milisegundos 📡" },
      { number: "03", title: "Push & Decrypt", desc: "Notificación push al móvil destino y descifrado en local 🔓" }
    ]
  },
  {
    id: "google-com",
    title: "ESCRIBIR GOOGLE.COM",
    subtitle: "Qué pasa exactamente detrás del navegador 🌐",
    category: "INTERNET INTERNO",
    accentColor: "#3B82F6",
    cta: "¿Quieres saber más de Web Dev?",
    steps: [
      { number: "01", title: "Consulta DNS", desc: "El navegador busca la IP asociada al dominio en milisegundos 🔎" },
      { number: "02", title: "Handshake TCP/TLS", desc: "Conexión segura establecida con la IP del servidor 🤝" },
      { number: "03", title: "HTTP Request & DOM", desc: "El servidor envía el HTML y tu navegador renderiza la web 💻" }
    ]
  },
  {
    id: "git-changes",
    title: "¿CÓMO SABE GIT QUÉ CAMBIÓ?",
    subtitle: "El cerebro detrás del control de versiones 🧠",
    category: "DEV HACKS",
    accentColor: "#F97316",
    cta: "¿Usas Git desde la terminal?",
    steps: [
      { number: "01", title: "Hasing SHA-1", desc: "Git convierte cada archivo en un identificador único SHA-1 📂" },
      { number: "02", title: "El Index", desc: "El área de staging guarda el estado preparado para el commit 📝" },
      { number: "03", title: "Snapshots", desc: "Git no guarda deltas, toma fotos completas de tu estructura 📸" }
    ]
  },
  {
    id: "ssd-vs-hdd",
    title: "SSD VS HDD",
    subtitle: "Por qué el almacenamiento cambió para siempre 💾",
    category: "HARDWARE",
    accentColor: "#EC4899",
    cta: "¿Aún usas HDD en tu setup?",
    steps: [
      { number: "01", title: "Sin Partes Móviles", desc: "Cero brazos mecánicos ni platos giratorios. Todo electrónico ⚡" },
      { number: "02", title: "Memoria NAND", desc: "Chips flash con transistores de puerta flotante ultrarrápidos 🔬" },
      { number: "03", title: "Multicanal", desc: "El controlador lee y escribe en paralelo en múltiples chips 🚀" }
    ]
  },
  {
    id: "youtube-recommend",
    title: "ALGORITMO DE YOUTUBE",
    subtitle: "Cómo decide qué vas a ver después 📺",
    category: "SISTEMAS DE IA",
    accentColor: "#EF4444",
    cta: "¿Te engancha el feed de YouTube?",
    steps: [
      { number: "01", title: "Filtrado Inicial", desc: "Reduce millones de videos a cientos según tu historial 🔍" },
      { number: "02", title: "Red de Ranking", desc: "Asigna puntuaciones basadas en retención y CTR esperados 📈" },
      { number: "03", title: "Feedback Loop", desc: "Si haces click y te quedas, el algoritmo te recomienda más 🔁" }
    ]
  },
  {
    id: "cpu-print",
    title: "DENTRO DE LA CPU",
    subtitle: "Al ejecutar print('Hola') en tu código 💻",
    category: "BAJO NIVEL",
    accentColor: "#A855F7",
    cta: "¿Te gusta la programación a bajo nivel?",
    steps: [
      { number: "01", title: "Syscall", desc: "El intérprete pide permiso al Sistema Operativo mediante syscall 📞" },
      { number: "02", title: "Modo Kernel", desc: "La CPU cambia a modo kernel para interactuar con la pantalla 🧠" },
      { number: "03", title: "TTY Buffer", desc: "Escribe los bytes de 'Hola' en la memoria del buffer gráfico 🖥️" }
    ]
  },
  {
    id: "https-work",
    title: "CÓMO FUNCIONA HTTPS",
    subtitle: "El escudo de seguridad de toda la web 🔒",
    category: "SEGURIDAD",
    accentColor: "#10B981",
    cta: "¿Usas siempre HTTPS?",
    steps: [
      { number: "01", title: "Handshake TLS", desc: "Cliente y servidor acuerdan qué algoritmos de cifrado usar 🤝" },
      { number: "02", title: "Diffie-Hellman", desc: "Intercambian claves sin que nadie pueda interceptarlas en ruta 🔑" },
      { number: "03", title: "Cifrado Simétrico", desc: "Toda la sesión se encripta con una clave temporal ultrarrápida 🛡️" }
    ]
  },
  {
    id: "cables-submarinos",
    title: "CABLES SUBMARINOS",
    subtitle: "Los verdaderos dueños del Internet mundial 🌊",
    category: "INFRAESTRUCTURA",
    accentColor: "#06B6D4",
    cta: "¿Sabías que internet viaja bajo el mar?",
    steps: [
      { number: "01", title: "99% del Tráfico", desc: "No son satélites. Cables del grosor de una manguera sostienen la web 🗺️" },
      { number: "02", title: "Fibra Óptica", desc: "Haces de luz láser transmiten petabytes por segundo ⚡" },
      { number: "03", title: "Blindaje Acero", desc: "Capas de cobre y acero marino los protegen de tiburones y barcos 🦈" }
    ]
  },
  {
    id: "gpu-ia",
    title: "CÓMO FUNCIONA UNA GPU",
    subtitle: "Y por qué es el motor de la IA moderna 🤖",
    category: "HARDWARE & IA",
    accentColor: "#84CC16",
    cta: "¿Qué GPU tienes en tu PC?",
    steps: [
      { number: "01", title: "Multiprocesamiento", desc: "En vez de 8 cores rápidos, una GPU tiene miles de cores simples ⚙️" },
      { number: "02", title: "Paralelismo SIMD", desc: "Ejecuta la misma instrucción en millones de datos a la vez 🏎️" },
      { number: "03", title: "Matrices de IA", desc: "Ideal para la multiplicación masiva de matrices de redes neuronales 📊" }
    ]
  },
  {
    id: "compilador",
    title: "QUÉ HACE UN COMPILADOR",
    subtitle: "De tu código a lenguaje de máquina 🛠️",
    category: "CIENCIA DE LA COMPU",
    accentColor: "#F59E0B",
    cta: "¿Programas en lenguajes compilados?",
    steps: [
      { number: "01", title: "Análisis Léxico", desc: "Convierte tu texto de código en tokens lógicos simples 📂" },
      { number: "02", title: "Generación AST", desc: "Crea un árbol sintáctico abstracto para verificar la lógica 🌲" },
      { number: "03", title: "Generación Código", desc: "Traduce y optimiza el árbol a binario ejecutable final 💻" }
    ]
  },
  {
    id: "dns-work",
    title: "CÓMO FUNCIONA EL DNS",
    subtitle: "El directorio telefónico de Internet 📞",
    category: "REDES",
    accentColor: "#3B82F6",
    cta: "¿Sabías cómo se resuelven las webs?",
    steps: [
      { number: "01", title: "Recursión", desc: "Tu router busca en el ISP la IP asociada al dominio 🔎" },
      { number: "02", title: "Root Servers", desc: "Servidores raíz guían la búsqueda hacia el TLD (.com, .org) 🗺️" },
      { number: "03", title: "Autoritativo", desc: "El Name Server final devuelve la dirección IP exacta 🎯" }
    ]
  },
  {
    id: "peor-apagon",
    title: "EL PEOR APAGÓN DE INTERNET",
    subtitle: "Cuando medio mundo se quedó sin conexión 💥",
    category: "HISTORIAS DE INTERNET",
    accentColor: "#EF4444",
    cta: "¿Recuerdas esa caída masiva?",
    steps: [
      { number: "01", title: "Protocolo BGP", desc: "Facebook retiró por error sus rutas BGP del mapa mundial 🗺️" },
      { number: "02", title: "Caída DNS", desc: "Los DNS no podían resolver cómo llegar a sus propios servidores 🌐" },
      { number: "03", title: "Acceso Físico", desc: "Ingenieros tuvieron que ir al data center a resetear los routers 🛠️" }
    ]
  },
  {
    id: "github-caida",
    title: "SI GITHUB CAE 24 HORAS",
    subtitle: "El día que el desarrollo de software se detuvo 🛑",
    category: "DEV TECHS",
    accentColor: "#6B7280",
    cta: "¿Qué harías si se cae GitHub hoy?",
    steps: [
      { number: "01", title: "CI/CD Bloqueado", desc: "Ningún despliegue automático a producción puede ejecutarse ⚙️" },
      { number: "02", title: "Git es Local", desc: "Los desarrolladores aún pueden hacer commits de forma local 💻" },
      { number: "03", title: "Pánico de Commits", desc: "Tus despliegues y PRs quedan congelados hasta el retorno del servidor ⏳" }
    ]
  },
  {
    id: "netflix-saturation",
    title: "CÓMO NETFLIX EVITA LA SATURACIÓN",
    subtitle: "El secreto del streaming masivo sin cortes 🍿",
    category: "ARQUITECTURA DE SISTEMAS",
    accentColor: "#EF4444",
    cta: "¿Tienes problemas de buffer con Netflix?",
    steps: [
      { number: "01", title: "Open Connect CDN", desc: "Instalan servidores locales con películas dentro del ISP vecino 📡" },
      { number: "02", title: "Encoding Adaptativo", desc: "Parten el video en bloques y ajustan calidad según tu conexión 📈" },
      { number: "03", title: "Precarga", desc: "Pre-cargan los siguientes segundos de video en tu dispositivo 📱" }
    ]
  },
  {
    id: "tiktok-algoritmo",
    title: "ALGORITMO DE TIKTOK",
    subtitle: "La ciencia detrás del scroll infinito 📱",
    category: "INTELIGENCIA ARTIFICIAL",
    accentColor: "#10B981",
    cta: "¿Cuánto tiempo pasas en TikTok?",
    steps: [
      { number: "01", title: "Retención Exacta", desc: "Mide el tiempo de retención en milisegundos para cada video ⏱️" },
      { number: "02", title: "Computer Vision", desc: "Analiza el audio, rostros y objetos del video automáticamente 👁️" },
      { number: "03", title: "Grafos de Interés", desc: "Te agrupa en nichos dinámicos en base a comportamientos afines 🔁" }
    ]
  },
  {
    id: "kernel-linux",
    title: "¿QUÉ ES UN KERNEL?",
    subtitle: "El corazón invisible del sistema operativo 🧠",
    category: "SISTEMAS OPERATIVOS",
    accentColor: "#708090",
    cta: "¿Usas Linux en tu día a día?",
    steps: [
      { number: "01", title: "El Puente", desc: "Intermediario directo entre el hardware y las aplicaciones 🔌" },
      { number: "02", title: "CPU Scheduler", desc: "Decide qué proceso tiene derecho a usar el procesador cada milisegundo ⚙️" },
      { number: "03", title: "Memory Manager", desc: "Asigna de forma segura bloques de RAM y evita colisiones de memoria 🛡️" }
    ]
  },
  {
    id: "ram-gaming",
    title: "CÓMO FUNCIONA LA RAM",
    subtitle: "La memoria ultrarrápida de tu computadora ⚡",
    category: "HARDWARE",
    accentColor: "#EC4899",
    cta: "¿Cuántos GB de RAM tiene tu PC?",
    steps: [
      { number: "01", title: "Volatilidad", desc: "Almacena datos usando millones de pequeños capacitores eléctricos 🔋" },
      { number: "02", title: "Acceso Directo", desc: "El procesador lee cualquier dirección de memoria al instante 🏎️" },
      { number: "03", title: "El Heap & Stack", desc: "Mantiene activas las variables del código de tus programas 📂" }
    ]
  },
  {
    id: "5-inventos-ia",
    title: "5 INVENTOS DE LA IA",
    subtitle: "Los hitos que crearon la inteligencia artificial moderna 🤖",
    category: "HISTORIA DE LA IA",
    accentColor: "#84CC16",
    cta: "¿Cuál de estos hitos te sorprende más?",
    steps: [
      { number: "01", title: "Backpropagation", desc: "El algoritmo básico que permite a las redes aprender de errores 📈" },
      { number: "02", title: "GPU Computing", desc: "Acelerar entrenamientos de meses a solo horas de cómputo 🏎️" },
      { number: "03", title: "Transformers", desc: "La arquitectura detrás de los LLMs modernos y ChatGPT 🧠" }
    ]
  }
];
