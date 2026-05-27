import { Icons } from "@/components/icons";
import { DATA } from "./resume";

const projectTranslations = {
  cheki: {
    description:
      "Demo de una app startup de facilitamiento de pagos online.",
  },
  "Heko pora": {
    description:
      "Desarrollé un sistema de código abierto para citas médicas donde los usuarios pueden seleccionar y filtrar médicos según su seguro médico.",
  },
  "Vida Farma": {
    dates: "Jul 2025 - Sep 2025",
    description:
      "Demo para una Farmacia enfocadome en presentar una experiencia web moderna con e-commerce, mostrando un cataálogo de productos y listo para producción.",
  },
  "Mariscal Estigarribia": {
    description:
      "Desarrollé un sitio web para una escuela nacional, contacté a los responsables y gestioné el dominio.",
  },
  "RAG ChatBot": {
    description:
      "Construí un sistema para permitir a los usuarios crear agentes y actualizar su base de conocimientos con documentos de la empresa, e interactuar con ellos usando lenguaje natural. Utilicé GCP Vertex AI, AI SDK y Langchain.",
  },
} as const;

// Spanish translations for the resume data
export const DATA_ES = {
  ...DATA,
  description:
  "Estudiante de Análisis de Sistemas con experiencia en desarrollo de software, infraestructura cloud y devops.",
  summary:
    "Soy una persona curiosa me gusta ayudar, programar, ser activo, leer, trabajar en equipos, hacer deportes y los proyectos ambiciosos.",
  work: [
    {
      ...DATA.work[0],
      title: "Ingeniero de Software",
      description:
        "Construí y mantuve servicios con Python y Node.js en entornos de producción. Diseñé APIs y modelos de datos para aplicaciones internas y empresariales. Desplegué y operé servicios en Google Cloud (CI/CD, cargas contenerizadas).",
    },
    {
      ...DATA.work[1],
      title: "Técnico de IT",
      description:
        "Comencé como pasante y luego fui contratado como técnico de TI, administrando y manteniendo servidores, workflows y bases de datos con DB2 y Postgres. Usé RHEL, Datadog, Bash e Instana",
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
        "Educador Certificado de Google Nivel 1, demostrando competencia en la integración de herramientas de Google Workspace en entornos educativos y profesionales para mejorar la productividad y la colaboración.",
    },
    {
      ...DATA.moreInProgress[1],
      description:
        "Desarrollando un robot autónomo impulsado por Nvidia Jetson Nano para visión por computadora y detección de objetos en tiempo real. El proyecto se enfoca en implementar modelos de aprendizaje profundo para navegación y conciencia ambiental.",
    },
    {
      ...DATA.moreInProgress[2],
      description:
        "Asistí a la Conferencia IBM TechXchange 2025 en Orlando, un evento que reúne a líderes tecnológicos, desarrolladores e innovadores para explorar los últimos avances en IA, computación en la nube y soluciones empresariales.",
    },
    {
      ...DATA.moreInProgress[3],
      description:
        "Voluntario activo en programas comunitarios como Apoyo Escolar, apoyando la educación y mentoreando a jóvenes interesados en programación y ciencias de la computación.",
    },
  ],
} as const;
