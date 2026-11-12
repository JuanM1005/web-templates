export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  spec: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Automatización" | "Energía" | "Infraestructura";
  location: string;
  year: string;
  summary: string;
  imageAlt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
}

export const companyData = {
  name: "Vértice Industrial",
  tagline:
    "Ingeniería de precisión e infraestructura para operaciones críticas",
  description:
    "Diseñamos, fabricamos y modernizamos plantas industriales con estándares internacionales de seguridad, eficiencia energética y continuidad operativa.",
  stats: [
    { label: "Años de experiencia", value: "25+" },
    { label: "Plantas optimizadas", value: "140" },
    { label: "Disponibilidad operativa", value: "99.4%" },
    { label: "Certificaciones ISO", value: "3" },
  ],
};

export const services: ServiceItem[] = [
  {
    id: "automatizacion",
    title: "Automatización y Control PLC",
    description:
      "Integración de líneas robotizadas, sensores industriales y monitoreo SCADA en tiempo real.",
    spec: "Normativa IEC 61131-3",
  },
  {
    id: "estructuras",
    title: "Estructuras Metálicas y Montaje",
    description:
      "Diseño estructural, soldadura certificada y montaje de naves industriales de gran claro.",
    spec: "Acero estructural ASTM A992",
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento Predictivo",
    description:
      "Análisis de vibraciones, termografía infrarroja y planes preventivos sin paro de planta.",
    spec: "Cobertura técnica 24/7",
  },
  {
    id: "eficiencia",
    title: "Subestaciones y Eficiencia Energética",
    description:
      "Instalación de subestaciones de media tensión, bancos de capacitores y cogeneración.",
    spec: "Reducción de consumo hasta 18%",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "planta-automotriz",
    title: "Línea de Ensamble Automatizada Bajío",
    category: "Automatización",
    location: "Querétaro, MX",
    year: "2025",
    summary:
      "Modernización de 12 celdas robóticas con reducción del 22% en tiempos de ciclo.",
    imageAlt: "Brazo robótico industrial en línea de ensamble automotriz",
  },
  {
    id: "subestacion-norte",
    title: "Subestación Eléctrica Parque Logístico",
    category: "Energía",
    location: "Monterrey, MX",
    year: "2025",
    summary:
      "Capacidad instalada de 15 MVA con sistema automatizado de respaldo y monitoreo.",
    imageAlt:
      "Transformadores de media tensión en subestación eléctrica industrial",
  },
  {
    id: "nave-acero",
    title: "Centro de Distribución y Silos Metálicos",
    category: "Infraestructura",
    location: "San Luis Potosí, MX",
    year: "2024",
    summary:
      "Fabricación y montaje de 18,000 m² de cubierta industrial libre de columnas intermedias.",
    imageAlt: "Estructura metálica de nave industrial en proceso de montaje",
  },
];

export const team: TeamMember[] = [
  {
    id: "dir-operaciones",
    name: "Ing. Elena Morales",
    role: "Directora de Operaciones",
    specialty:
      "Especialista en manufactura esbelta y plantas de proceso continuo.",
  },
  {
    id: "dir-automatizacion",
    name: "Mtro. Roberto Salazar",
    role: "Líder de Automatización",
    specialty:
      "Arquitecto de sistemas SCADA, redes industriales e instrumentación.",
  },
  {
    id: "dir-calidad",
    name: "Ing. Sofía Méndez",
    role: "Gerente de Seguridad y Calidad",
    specialty:
      "Auditora certificada en normas ISO 9001, ISO 14001 e ISO 45001.",
  },
];
