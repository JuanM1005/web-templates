export type ProjectCategory = "Manufactura" | "Energía" | "Infraestructura";

export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  location: string;
  description: string;
  tag: string;
}

export const siteConfig = {
  brand: "NORTE",
  descriptor: "INGENIERÍA",
  initial: "N",
  disclaimer:
    "PLANTILLA DEMOSTRATIVA · Norte Ingeniería es una empresa ficticia; los proyectos y el contacto son simulados.",
  eyebrow: "INGENIERÍA QUE AVANZA",
  hero: "Convertimos desafíos operativos en sistemas que responden.",
  summary:
    "Diseño, automatización y ejecución para operaciones industriales que necesitan avanzar con método.",
  methodTitle: "Rigor técnico, comunicación directa.",
  methodDescription:
    "Esta plantilla presenta una firma industrial que privilegia decisiones claras, coordinación entre especialidades y entregables que se puedan consultar en sitio.",
  contactTitle: "Hagamos que el siguiente paso sea claro.",
  contactDescription:
    "Cuéntenos el objetivo de su operación. Esta sección conserva el flujo de un formulario sin enviar datos fuera de su navegador.",
};

export const metrics = [
  ["12+", "años de experiencia"],
  ["48", "proyectos integrados"],
  ["06", "sectores atendidos"],
  ["24 h", "respuesta inicial"],
] as const;

export const services = [
  {
    number: "01",
    title: "Ingeniería de proceso",
    description:
      "Diagnóstico, diseño de flujos y documentación técnica para operar con mayor claridad y control.",
  },
  {
    number: "02",
    title: "Automatización industrial",
    description:
      "Integración de instrumentación, tableros y supervisión para procesos repetibles y trazables.",
  },
  {
    number: "03",
    title: "Montaje y puesta en marcha",
    description:
      "Coordinación en sitio, protocolos de seguridad y acompañamiento hasta la entrega operativa.",
  },
];

export const projects: Project[] = [
  {
    id: "planta-norte",
    category: "Manufactura",
    title: "Modernización de línea de ensamble",
    location: "Monterrey, N.L.",
    description:
      "Rediseño conceptual de estaciones, resguardo de maquinaria y visualización operativa para una planta de componentes.",
    tag: "Caso demostrativo · 2026",
  },
  {
    id: "subestacion",
    category: "Energía",
    title: "Centro de monitoreo energético",
    location: "Ramos Arizpe, Coah.",
    description:
      "Propuesta de tableros, instrumentación y una secuencia de puesta en servicio para activos críticos.",
    tag: "Caso demostrativo · 2025",
  },
  {
    id: "logistica",
    category: "Infraestructura",
    title: "Nodo logístico de alta capacidad",
    location: "Silao, Gto.",
    description:
      "Planeación conceptual para circulación de materiales, zonas de carga y seguridad de recorridos.",
    tag: "Caso demostrativo · 2025",
  },
];

export const capabilities = [
  "Levantamiento y diagnóstico en sitio",
  "Planos y memorias técnicas",
  "Gestión de proveedores especializados",
  "Protocolos de seguridad y calidad",
];

export const solutionFamilies = [
  {
    code: "SF-01",
    title: "Sistemas de flujo",
    description:
      "Selección conceptual de equipos, accesorios e instrumentación para trasladar y controlar fluidos de proceso.",
    scope: ["Evaluación de condiciones", "Configuración técnica", "Integración en sitio"],
  },
  {
    code: "AT-02",
    title: "Automatización y control",
    description:
      "Arquitecturas de supervisión, tableros e integración de señales para operaciones visibles y repetibles.",
    scope: ["Instrumentación", "Tableros", "Monitoreo operativo"],
  },
  {
    code: "MT-03",
    title: "Mantenimiento técnico",
    description:
      "Planes preventivos, diagnóstico y acompañamiento para conservar activos industriales en condiciones de operación.",
    scope: ["Inspección", "Diagnóstico", "Puesta en servicio"],
  },
  {
    code: "OI-04",
    title: "Obra e instalaciones",
    description:
      "Coordinación de adecuaciones, instalaciones y especialidades necesarias alrededor de un proyecto industrial.",
    scope: ["Planeación", "Ejecución coordinada", "Cierre documental"],
  },
];

export const fictionalPartners = ["AXION", "FLUVA", "KERN", "NOVATEK", "ORBITA"];

export const faqs = [
  {
    question: "¿La plantilla incluye un catálogo transaccional?",
    answer:
      "No. Presenta familias de soluciones y rutas de contacto; cualquier cotización, inventario o pago requiere una integración posterior.",
  },
  {
    question: "¿Puede conectarse con un formulario real?",
    answer:
      "Sí, pero el destino, el aviso de privacidad y la protección contra abuso deben definirse en el proyecto privado.",
  },
  {
    question: "¿Es posible agregar más servicios o sectores?",
    answer:
      "Sí. El contenido está separado en datos configurables para ampliar categorías sin reconstruir la interfaz.",
  },
];
