import { Icons } from "@/components/icons";
import { DATA } from "./resume";

const projectTranslations = {
  cheki: {
    description:
      "Demo de una app para una startup que facilita pagos online.",
  },
  "Heko pora": {
    description:
      "Desarrollé un sistema open source de citas médicas. Permite buscar médicos, filtrarlos por seguro médico y reservar turnos.",
  },
  "Vida Farma": {
    dates: "Jul 2025 - Sep 2025",
    description:
      "Demo de e-commerce para una farmacia. Muestra catálogo de productos y flujo de compra en una interfaz web clara.",
  },
  "Mariscal Estigarribia": {
    description:
      "Desarrollé el sitio web de una escuela nacional. Coordiné con los responsables y gestioné el dominio.",
  },
  "RAG ChatBot": {
    description:
      "Construí un sistema RAG para crear agentes, cargar documentos internos y consultarlos en lenguaje natural. Usé GCP Vertex AI, AI SDK y Langchain.",
  },
} as const;

// Spanish translations for the resume data
export const DATA_ES = {
  ...DATA,
  description:
  "Estudiante de Análisis de Sistemas con experiencia en desarrollo de software, infraestructura cloud y DevOps.",
  summary:
    "Soy energético, disciplinado y me gusta trabajar en equipos. Además de mi trabajo, me gusta correr, entrenar, jugar tenis y futbol, leer y viajar.", // TODO: add metric/result
  work: [
    {
      ...DATA.work[0],
      title: "Ingeniero de Software",
      description:
        "Construí y mantuve servicios en producción con Python y Node.js. Diseñé APIs y modelos de datos para aplicaciones internas y empresariales. Desplegué y operé servicios en Google Cloud con CI/CD y cargas contenerizadas.", // TODO: add metric/result
    },
    {
      ...DATA.work[1],
      title: "Técnico de IT",
      description:
        "Empecé como pasante y luego fui contratado como técnico de IT. Administré servidores, flujos de trabajo y bases de datos con DB2 y Postgres. Usé RHEL, Datadog, Bash e Instana.", // TODO: add metric/result
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
        "Certificación Google Educator Nivel 1. Valida el uso de Google Workspace para organizar clases, colaborar y mejorar procesos educativos.",
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
        "Voluntario en programas comunitarios como Apoyo Escolar. Apoyo a estudiantes y mentoreo a jóvenes interesados en programación y ciencias de la computación.", // TODO: add metric/result
    },
  ],
} as const;
