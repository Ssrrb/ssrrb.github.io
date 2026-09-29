import { Icons } from "@/components/icons";
import { DATA } from "./resume";

const projectTranslations = {
  "Bootcamp for schools — Team Arai": {
    description:
      "Diseñé y dicté un bootcamp de emprendimiento en vivo para ~400 estudiantes paraguayos de 14 a 17 años, ejecutado como competencia en tiempo real en lugar de una clase: los equipos definieron un producto, eligieron su público, construyeron una identidad de marca y publicaron un sitio web en unos 20 a 25 minutos mientras el auditorio votaba por código QR. Todo el formato se ensayó primero sobre una marca ficticia de pelotitas antiestrés: el juego en pixel art que abrió la sesión y atendió ~200 jugadores concurrentes, y la tienda 3D de abajo se construyeron para ella, junto con las guías de los laboratorios y las campañas digitales. Cubierto por 5Días.",
  },
  "guayaba-ai": {
    description:
      "Harness engineering en curso sobre Guayaba, un harness de agentes construido sobre la arquitectura open source DeepSeek dsh. Enfocado en la capa de runtime: internacionalización del cliente (un locale en español completo con sus tests) y observabilidad del agente (reportes de fallos en CI, tracking con Sentry), más la marca Guayaba en la web y en la documentación.",
  },
  "go-futbol": {
    description:
      "Rankings de jugadores en tiempo real de la Primera División paraguaya, construidos a partir del feed de datos oficial de la APF.",
  },
  "flash-attention-from-scratch": {
    description:
      "Mi hobby para aprender IA desde los principios: reconstruir FlashAttention-2 en Triton directamente desde el paper, trabajando la teoría con notas sobre atención multi-cabeza, softmax online, layouts de tensores, software pipelining y el modelo de GPU/CUDA que hay debajo.",
  },
  cheki: {
    description:
      "Demo de una aplicación de pagos para una startup. Convertí requerimientos de producto en un flujo web funcional y lo desplegué en Google Cloud para revisión con stakeholders.",
  },
  "Heko pora": {
    description:
      "Desarrollé un sistema open source de citas médicas con reserva de turnos, búsqueda de doctores, filtros por seguro médico e integración con base de datos. Diseñé el flujo del servicio y desplegué la aplicación en Google Cloud.",
  },
  "Vida Farma": {
    dates: "Jul 2025 - Sep 2025",
    description:
      "Demo de e-commerce para una farmacia con catálogo de productos, flujo de compra y modelo de datos en PostgreSQL. Llevé la implementación desde requerimientos hasta una demo desplegada en la nube.",
  },
  "Mariscal Estigarribia": {
    description:
      "Desarrollé y entregué el sitio web de una escuela nacional. Coordiné requerimientos con los responsables, gestioné la configuración del dominio y realicé el lanzamiento a producción.",
  },
  "RAG ChatBot": {
    description:
      "Construí un sistema RAG que permite crear agentes, cargar documentos internos y consultarlos en lenguaje natural. Integré GCP Vertex AI, AI SDK, Langchain, PostgreSQL y Milvus, con documentación de configuración y uso.",
  },
} as const;

// Spanish translations for the resume data
export const DATA_ES = {
  ...DATA,
  description:
    "Tech Lead y único ingeniero de Arai, la primera marca de Chromebook paraguaya. Estudiante de Análisis de Sistemas enfocado en cloud, integración de IA y producto.",
  summary:
    "Tech Lead y único ingeniero del equipo detrás de Arai, una marca de tecnología de SoftShop y la primera marca de Chromebook paraguaya. Construyo y mantengo la tienda, el tooling para desarrolladores y el material de enablement, y soy responsable del roadmap técnico de punta a punta: desde el trabajo con ChromeOS y la conectividad LTE hasta cómo se usan las funciones de IA en el dispositivo. Además diseño programas prácticos que ponen herramientas reales en manos de gente que nunca las usó; el más reciente llevó a ~400 estudiantes paraguayos de 14 a 17 años a una competencia de emprendimiento en vivo, cubierta por 5Días. Antes de Arai construí servicios en producción y sistemas RAG en SoftShop.",
  work: [
    {
      ...DATA.work[0],
      title: "Tech Lead",
      description:
        "Lidero la tecnología de Arai, una marca de tecnología de SoftShop y la primera marca de Chromebook paraguaya, siendo el único ingeniero del equipo. Construyo y mantengo la tienda arai.la en sus distintos idiomas, y soy responsable del roadmap de la línea de dispositivos: conectividad LTE y aprovisionamiento de operador, y llevar funcionalidades de IA en la nube a los Chromebooks. También lidero el programa práctico de la marca para colegios y laboratorios, del que viene el trabajo del bootcamp.",
    },
    {
      ...DATA.work[1],
      title: "Ingeniero de Software",
      description:
        "Construí y mantuve servicios en producción con Python y Node.js para casos de uso internos y empresariales. Relevé requerimientos, diseñé APIs y modelos de datos, documenté detalles de implementación y desplegué servicios contenerizados en Google Cloud con CI/CD. Di soporte técnico en preventa para productos de Google (GCP, Workspace, Ads), IBM y Arai.",
    },
    {
      ...DATA.work[2],
      title: "Técnico de IT",
      description:
        "Empecé como pasante y luego fui contratado como técnico de IT. Apoyé operaciones de servidores, workflows, monitoreo y administración de bases de datos con DB2 y Postgres. Usé RHEL, Datadog, Bash e Instana para diagnosticar problemas y mantener sistemas confiables.",
    },
  ],
  education: [
    {
      ...DATA.education[0],
      degree: "Análisis de Sistemas Informáticos",
    },
    {
      ...DATA.education[1],
      degree: "Bachiller Técnico con Énfasis en Marketing",
    },
    {
      ...DATA.education[2],
      degree: "Arquitecto Profesional en la Nube",
    },
    {
      ...DATA.education[3],
      degree: "Ciencia de Datos y Estadística",
    },
  ],
  projects: [
    ...DATA.projects.map((project) => ({
      ...project,
      ...projectTranslations[project.title as keyof typeof projectTranslations],
    })),
  ],
  highlights: [
    {
      ...DATA.highlights[0],
      title: "Newsletter de Arai",
      description:
        "Creé y hoy escribo el newsletter de Arai, el canal hacia el público de una marca de Chromebook donde la mayoría del contenido técnico solo llegaría a revendedores y administradores.",
    },
  ],
  moreInProgress: [
    {
      ...DATA.moreInProgress[0],
      description:
        "Certificación Google Educator Nivel 1. Valida el uso de Google Workspace para organizar sesiones, colaborar y mejorar procesos de enablement.",
    },
    {
      ...DATA.moreInProgress[1],
      description:
        "Desarrollo un robot autónomo con Nvidia Jetson Nano para visión por computadora y detección de objetos en tiempo real. El proyecto usa modelos de aprendizaje profundo para navegación y percepción del entorno.",
    },
    {
      ...DATA.moreInProgress[2],
      description:
        "Asistí a IBM TechXchange 2025 en Orlando, con foco en IA, cloud y soluciones empresariales.",
    },
    {
      ...DATA.moreInProgress[3],
      description:
        "Voluntario en programas comunitarios como Apoyo Escolar. Apoyo a estudiantes y mentoreo a jóvenes interesados en programación y ciencias de la computación mediante orientación práctica y sesiones de aprendizaje.",
    },
  ],
} as const;
