import { Icons } from "@/components/icons";
import { DATA } from "./resume";

const projectTranslations = {
  "Live entrepreneurship bootcamp — Team Arai": {
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
  "RAG ChatBot": {
    description:
      "Construí un sistema RAG que permite crear agentes, cargar documentos internos y consultarlos en lenguaje natural. Integré GCP Vertex AI, AI SDK, Langchain, PostgreSQL y Milvus, con documentación de configuración y uso.",
  },
} as const;

// Spanish translations for the resume data
export const DATA_ES = {
  ...DATA,
  description:
    "Ingeniero de Software e IA especializado en TI y productos de hardware, software y nube. Actualmente liderando la parte de TI en Arai, primera marca de Chromebook paraguaya. Certificado Google Cloud Professional Architect. Especializado en desarrollo de software y trabajos de IA con agentes y inferencia local.",
  summary:
    "Ingeniero de software especializado en TI y productos de hardware, software y nube. Actualmente liderando la parte de TI en Arai, una marca de tecnología de SoftShop y la primera marca de Chromebook paraguaya. Certificado Google Cloud Professional Architect. Especializado en desarrollo de software y trabajos de IA con agentes y inferencia local. Desarrollé y mantengo la tienda en arai.la como desarrollador único del proyecto, desde cero. Lidero el desarrollo de la línea de dispositivos: integración de IA en la nube y conectividad LTE. Diseño programas prácticos que ponen herramientas reales en manos de gente que nunca las usó; el más reciente llevó a ~400 estudiantes paraguayos de 14 a 17 años a una competencia de emprendimiento en vivo, cubierta por 5Días. Antes de Arai construí servicios en producción y sistemas de IA en SoftShop.",
  work: [
    {
      ...DATA.work[0],
      title: "Líder Técnico de Producto",
      description:
        "Marca de tecnología de SoftShop y primera marca de Chromebook paraguaya. Producto early-stage con foco en el segmento educativo (ed-tech). Desarrollé y mantengo la tienda en arai.la —catálogo, configuración de productos, carrito y checkout— como desarrollador full-stack del proyecto, desde cero. Lidero el desarrollo y tickets de la línea de dispositivos Arai: integración de IA en la nube dentro de los Chromebooks y conectividad LTE con aprovisionamiento de operador. Implemento restricciones de red, modo kiosk y virtualización de aplicaciones para entornos educativos, garantizando uso controlado y seguro de los dispositivos. Resuelvo problemas técnicos y busco alternativas de software optimizadas para hardware de bajo costo, maximizando la propuesta de valor en el segmento ed-tech.",
    },
    {
      ...DATA.work[1],
      title: "Ingeniero de Software — Departamento de IA",
      description:
        "Desarrollo de servicios en producción con Python y Node.js para casos de uso internos y empresariales, sobre Google Cloud. Aceleró el ciclo de entrenamiento —armar estructura, probar, detectar errores y reentrenar— de 5 días a 1 día usando una estación local con 128 GB de RAM y RTX 5080. Desarrollo de microservicio para GTH (aplicación de SoftShop) en GCP creando un pipeline de clasificación de CVs y documentos con LLMs, ayudando a los reclutadores a filtrar candidatos y documentos de manera automatizada. Trabajo en sistemas de búsqueda agentica con skills y flujos repetitivos para herramienta interna de gestión de reportes para licitaciones asistiendo al equipo comercial en la identificación y análisis. Preventa y postventa técnica para productos de Google (GCP, Workspace, Enterprise), IBM y Arai, asistiendo en reuniones y conferencias.",
    },
    {
      ...DATA.work[2],
      title: "Soporte Técnico",
      description:
        "Gestión de bases de datos para clientes usando DB2, reduciendo el downtime de 8 horas a 3 horas una vez a la semana mediante estrategias Incremental y Delta. Instalación y mantenimiento de ambientes RHEL. Para datacenter interno con scripts para gestión de usuarios y servicios de red en VMs y contenedores. Monitorea y da soporte en la instalación de Virtual Machines para datacenter interno utilizando Instana y Datadog.",
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
