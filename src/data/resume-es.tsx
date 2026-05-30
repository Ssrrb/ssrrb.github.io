import { Icons } from "@/components/icons";
import { DATA } from "./resume";

const projectTranslations = {
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
    "Estudiante de Análisis de Sistemas enfocado en solution engineering, integraciones API, despliegues cloud e implementación técnica.",
  summary:
    "Software engineer con experiencia práctica construyendo APIs, desplegando servicios cloud, documentando soluciones técnicas y trabajando con stakeholders desde requerimientos hasta entrega. Me interesa traducir necesidades de negocio en implementaciones técnicas claras y ayudar a equipos a adoptar sistemas confiables.",
  work: [
    {
      ...DATA.work[0],
      title: "Ingeniero de Software",
      description:
        "Construí y mantuve servicios en producción con Python y Node.js para casos de uso internos y empresariales. Relevé requerimientos, diseñé APIs y modelos de datos, documenté detalles de implementación y desplegué servicios contenerizados en Google Cloud con CI/CD.",
    },
    {
      ...DATA.work[1],
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
