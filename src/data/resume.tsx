import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sebastián Rojas",
  initials: "SR",
  url: "https://sebastianrojas.lat",
  location: "Asunción, PY",
  locationLink: "https://www.google.com/maps/place/asunci%C3%B3n,+paraguay/",
  description:
    "Systems Analysis student with experience in software development, cloud infrastructure, and DevOps.",
  summary:
    "I am energetic, disciplined, and enjoy working in teams. Outside of work, I like running, training, playing tennis and soccer, reading, and traveling.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Python",
    "Node.js",
    "Go",
    "PostgreSQL",
    "Google Cloud Platform",
    "Docker",
    "CI/CD",
    "React / Next.js",
    "TypeScript",
    "RAG",
    "Vertex AI",
    "Huggingface"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sirsebastianrojas@gmail.com",
    tel: "982403532",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ssrrb",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sebastian-rojas-swe",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/basestian",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SoftShop",
      href: "https://softshop.com.py",
      badges: [],
      location: "Asunción, Paraguay",
      title: "Software Engineer",
      logoUrl: "/softshop.png",
      start: "Aug 2024",
      end: "Current",
      description:
        "Built and maintained production services with Python and Node.js. Designed APIs and data models for internal and enterprise applications. Deployed and operated services on Google Cloud with CI/CD and containerized workloads.",
    },
    {
      company: "Softshop",
      badges: [],
      href: "https://softshop.com.py",
      location: "Asunción, Paraguay",
      title: "IT Technician",
      logoUrl: "/softshop.png",
      start: "Dec 2023",
      end: "May 2024",
      description:
        "Started as an intern and was later hired as an IT technician. Managed servers, workflows, and databases with DB2 and Postgres. Used RHEL, Datadog, Bash, and Instana.",
    },
  ],
  education: [
    {
      school: "Universidad Católica Nuestra Señora de la Asunción",
      href: "https://universidadcatolica.edu.py/producto/analisis-de-sistemas-asuncion/",
      degree: "Information Systems Analysis",
      logoUrl: "/logo-UC-PNG.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Colegio Internacional de Asunción",
      href: "https://inter.edu.py",
      degree: "High School Diploma with an Emphasis in Marketing",
      logoUrl: "/inter-logo.png",
      start: "2011",
      end: "2022",
    },
    {
      school: "Google Cloud Platform",
      href: "https://www.credly.com/badges/481045c7-3588-4e12-906f-e24610f71981/public_url",
      degree: "Professional Cloud Architect",
      logoUrl: "/gcp.png",
      start: "2024",
      end: "2026",
    },
      {
      school: "Massachusetts Institute of Technology (MITx)",
      href: "https://idss.mit.edu/academics/micromasters-program-in-statistics-and-data-science-sds/",
      degree: "Data Science and Statistics",
      logoUrl: "/mit.png",
      start: "2026",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "cheki",
      href: "https://cerramos-web-622748835636.us-central1.run.app/es",
      dates: "May 2026",
      active: true,
      description:
        "Demo of an app for a startup that makes online payments easier.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "GCP",
      ],
      links: [
        {
          type: "Website",
          href: "https://cerramos-web-622748835636.us-central1.run.app/es",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cheki-app.png",
      video: "",
    },
    {
      title: "Heko pora",
      href: "https://heko-pora-823216545609.us-central1.run.app",
      dates: "In progress",
      active: true,
      description:
        "Developed an open-source medical appointment system. It lets users search for doctors, filter them by health insurance, and book appointments.",
      technologies: [
        "Node.js",
        "Express.js",
        "Sybase SQL",
        "Bootstrap",
        "Docker",
        "GCP",
        "HTMX"
      ],
      links: [
        {
          type: "Webapp",
          href: "https://heko-pora-823216545609.us-central1.run.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ssrrb/heko-pora",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/heko-pora.png",
      video: "",
    },
    {
      title: "Vida Farma",
      href: "https://vida-farma-823216545609.us-central1.run.app",
      dates: "Jul 2025 - Sep 2025",
      active: true,
      description:
        "E-commerce demo for a pharmacy. It shows a product catalog and purchase flow in a clear web interface.",
      technologies: [
        "Typescript",
        "TailwindCSS",
        "PostgreSQL",
        "GCP",
      ],
      links: [
        {
          type: "Website",
          href: "https://vida-farma-823216545609.us-central1.run.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/vida-farm.png",
      video: "",
    },
    {
      title: "Mariscal Estigarribia",
      href: "https://mcalestigarribia.edu.py",
      dates: "July 2025 -  September 2025",
      active: true,
      description:
        "Developed the website for a national school. Coordinated with the school administrators and managed the domain.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://mcalestigarribiacarapegua.edu.py",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ssrrb/mcal-estigarribia",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mcal.png",
      video:
        "",
    },
    {
      title: "RAG ChatBot",
      href: "https://chat.softshop.com.py",
      dates: "Dec 2024 - Feb 2025",
      active: true,
      description:
        "Built a RAG system to create agents, upload internal documents, and query them in natural language. Used GCP Vertex AI, AI SDK, and Langchain.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "GCP",
        "Milvus",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ssrrb/ai-custom",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rag-chatbot.png",
      video:
        "",
    },
  ],
  moreInProgress: [
    {
      title: "Google Certified Educator Level 1",
      dates: "2024",
      location: "Online",
      description:
        "Google Educator Level 1 certification. Validates the use of Google Workspace to organize classes, collaborate, and improve educational processes.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
      links: [
        {
          type: "Certificate",
          href: "https://edu.google.accredible.com/ed423a89-589e-415f-a26a-9ca8151185f5?key=d41d52dcbaa2bd5376b5a01ea8bd0cec5d7fd63ac6a345ef27c748fb351d7aac#acc.4Svyzi7r",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Autonomous Robot with Nvidia Jetson Nano",
      dates: "2024 - Present",
      location: "Asunción, Paraguay",
      description:
        "Developing an autonomous robot powered by Nvidia Jetson Nano for computer vision and real-time object detection. The project focuses on implementing deep learning models for navigation and environmental awareness.",
      image:
        "https://developer.nvidia.com/sites/default/files/akamai/embedded/images/jetsonNano/gettingStarted/jetson-nano-dev-kit.png",
      links: [],
    },
    {
      title: "IBM TechXchange Conference",
      dates: "October 2025",
      location: "Florida, Orlando",
      description:
        "Attended IBM TechXchange 2025 in Orlando, focused on AI, cloud, and enterprise solutions.",
      image:
        "/ibm.jpg",
      links: [],
    },
    {
      title: "Community Volunteering",
      dates: "2020 - Present",
      location: "Asunción, Paraguay",
      description:
        "Volunteer in community programs such as Apoyo Escolar. I support students and mentor young people interested in programming and computer science.",
      image:
        "https://cdn-icons-png.flaticon.com/512/2917/2917995.png",
      links: [],
    },
  ],
} as const;
