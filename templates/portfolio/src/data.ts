export interface PortfolioProject {
  id: string;
  title: string;
  area: "Frontend" | "Sistemas de Diseño" | "Herramientas";
  year: string;
  summary: string;
  stack: string[];
  outcome: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export const profileData = {
  name: "Marco Valdés",
  role: "Ingeniero de Software Frontend & Especialista en Accesibilidad",
  location: "Guadalajara, México · Disponible para proyectos remotos",
  bio: "Construyo interfaces web rápidas, accesibles y fáciles de mantener utilizando arquitecturas modulares con React y TypeScript.",
  skillGroups: [
    {
      category: "Interfaces y Lenguajes",
      items: [
        "React 19",
        "TypeScript",
        "HTML5 Semántico",
        "CSS Moderno / Tailwind CSS",
      ],
    },
    {
      category: "Calidad y Arquitectura",
      items: [
        "Accesibilidad WCAG AA",
        "Tokens de Diseño",
        "Monorepositorios con Bun",
        "Pruebas de Integración",
      ],
    },
    {
      category: "Colaboración",
      items: [
        "Git / Flujos de Revisión",
        "Documentación Técnica",
        "Figma a Código",
        "Optimización Web",
      ],
    },
  ],
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "proj-atlas",
    title: "Atlas UI · Biblioteca de Tokens y Componentes",
    area: "Sistemas de Diseño",
    year: "2026",
    summary:
      "Sistema de diseño multi-marca con soporte completo de navegación por teclado y alto contraste.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    outcome:
      "Redujo el tiempo de creación de nuevas vistas en un 35% entre 4 equipos.",
  },
  {
    id: "proj-tablero",
    title: "Monitor de Telemetría Energética",
    area: "Frontend",
    year: "2025",
    summary:
      "Panel web ligero para visualizar consumos eléctricos e indicadores operativos sin dependencias pesadas.",
    stack: ["TypeScript", "React", "SVG Nativo"],
    outcome:
      "Carga inicial menor a 120 KB y puntuación de 99 en auditorías de accesibilidad.",
  },
  {
    id: "proj-validador",
    title: "CLI de Auditoría Semántica para Repositorios",
    area: "Herramientas",
    year: "2025",
    summary:
      "Utilidad ejecutada en Bun para verificar estructura de encabezados, etiquetas de formularios y textos alternativos.",
    stack: ["Bun", "TypeScript", "HTML Parser"],
    outcome:
      "Automatizó las revisiones preventivas antes de cada Pull Request.",
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Desarrollador Frontend Senior",
    company: "Laboratorio Digital Pacífico",
    period: "2024 – Presente",
    achievements: [
      "Estandarización de plantillas base y criterios de calidad en proyectos institucionales.",
      "Implementación de revisiones cruzadas de código y guías de accesibilidad por teclado.",
    ],
  },
  {
    id: "exp-2",
    role: "Ingeniero de Interfaces Web",
    company: "Colectivo Brújula Web",
    period: "2022 – 2024",
    achievements: [
      "Migración de portales heredados a TypeScript estricto con reducción del 40% en errores de cliente.",
      "Diseño y documentación de componentes reutilizables para catálogos y portales de eventos.",
    ],
  },
];
