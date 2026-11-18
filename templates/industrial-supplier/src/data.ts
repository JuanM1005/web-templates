export type Product = {
  id: string;
  family: string;
  name: string;
  summary: string;
  application: string;
  specs: Array<[string, string]>;
  tags: string[];
  visual: "pump" | "control" | "motor" | "valve";
};

export const categories = ["Todos", "Bombeo", "Control", "Motores", "Accesorios"];

export const products: Product[] = [
  {
    id: "VX-CM40",
    family: "Bombeo",
    name: "Centrífuga modular CM40",
    summary: "Equipo compacto para recirculación, transferencia y servicios auxiliares de proceso.",
    application: "Agua de proceso y circuitos de enfriamiento",
    specs: [["Caudal", "Hasta 40 m³/h"], ["Carga", "Hasta 52 m"], ["Conexión", "Bridada"]],
    tags: ["Modular", "Servicio continuo"],
    visual: "pump",
  },
  {
    id: "VX-VF80",
    family: "Bombeo",
    name: "Sistema vertical VF80",
    summary: "Arquitectura multietapa para espacios reducidos y redes que requieren presión estable.",
    application: "Presurización y alimentación de servicios",
    specs: [["Etapas", "Configurable"], ["Control", "Variable"], ["Montaje", "Vertical"]],
    tags: ["Alta presión", "Bajo espacio"],
    visual: "pump",
  },
  {
    id: "VX-DRIVE S2",
    family: "Control",
    name: "Tablero inteligente Drive S2",
    summary: "Control coordinado, protecciones y monitoreo básico para dos equipos en alternancia.",
    application: "Cuartos de máquinas y automatización ligera",
    specs: [["Gabinete", "NEMA 12"], ["Interfaz", "HMI 7”"], ["Señales", "16 I/O"]],
    tags: ["Telemetría", "Alternancia"],
    visual: "control",
  },
  {
    id: "VX-MX15",
    family: "Motores",
    name: "Motor eficiencia MX15",
    summary: "Motor trifásico de propósito industrial preparado para operación con variador.",
    application: "Accionamiento de bombas, ventilación y transporte",
    specs: [["Potencia", "15 HP"], ["Eficiencia", "Premium"], ["Protección", "IP55"]],
    tags: ["Trifásico", "Uso industrial"],
    visual: "motor",
  },
  {
    id: "VX-FLOW D4",
    family: "Accesorios",
    name: "Válvula de control Flow D4",
    summary: "Elemento de regulación para estabilizar presión y proteger la red hidráulica.",
    application: "Líneas de distribución y sistemas de llenado",
    specs: [["Diámetro", "2 a 6 pulg"], ["Actuación", "Opcional"], ["Cuerpo", "Hierro dúctil"]],
    tags: ["Regulación", "Mantenimiento simple"],
    visual: "valve",
  },
  {
    id: "VX-SENSE 3",
    family: "Control",
    name: "Kit de monitoreo Sense 3",
    summary: "Conjunto de sensores para visualizar presión, temperatura y estado operativo.",
    application: "Diagnóstico y seguimiento de activos críticos",
    specs: [["Variables", "3 canales"], ["Salida", "4–20 mA"], ["Registro", "Local"]],
    tags: ["Diagnóstico", "Retrofit"],
    visual: "control",
  },
];

export const services = [
  { code: "01", title: "Selección y especificación", text: "Traducimos las condiciones de operación en una propuesta técnica comparable y documentada." },
  { code: "02", title: "Integración y puesta en marcha", text: "Coordinamos montaje, pruebas funcionales y entrega ordenada para iniciar operación con claridad." },
  { code: "03", title: "Mantenimiento y diagnóstico", text: "Revisiones programadas, análisis de condición y recomendaciones priorizadas por criticidad." },
  { code: "04", title: "Adecuaciones de infraestructura", text: "Intervenciones complementarias para preparar espacios, servicios y redes de soporte." },
];

export const process = [
  ["01", "Levantamiento", "Objetivo, condiciones y restricciones del sitio."],
  ["02", "Propuesta", "Alternativas, alcance y datos por confirmar."],
  ["03", "Ejecución", "Coordinación técnica y evidencia de avance."],
  ["04", "Entrega", "Pruebas, documentación y próximos cuidados."],
];
