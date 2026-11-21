export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  topic: string;
}

export interface SessionItem {
  id: string;
  day: "Día 1 · 14 Nov" | "Día 2 · 15 Nov";
  time: string;
  title: string;
  speaker: string;
  stage: string;
  track: "Arquitectura" | "Accesibilidad" | "Inteligencia Artificial";
}

export const eventInfo = {
  name: "NexoTech 2026",
  subtitle:
    "Conferencia Latinoamericana de Ingeniería Web y Sistemas de Diseño",
  dates: "14 y 15 de noviembre de 2026",
  venue: "Centro de Convenciones Metropolitano · Ciudad de México + Streaming",
  highlights: [
    { label: "Ponentes", value: "18" },
    { label: "Talleres prácticos", value: "6" },
    { label: "Asistentes esperados", value: "800+" },
    { label: "Días de actividades", value: "2" },
  ],
};

export const speakers: Speaker[] = [
  {
    id: "sp-1",
    name: "Dra. Valeria Ríos",
    role: "Principal Web Architect",
    organization: "NubeAbierta Lab",
    topic: "Arquitecturas modulares sin sobrecarga de dependencias",
  },
  {
    id: "sp-2",
    name: "Mateo Cárdenas",
    role: "Design Systems Lead",
    organization: "Estudio Polar",
    topic: "Tokens de diseño y accesibilidad WCAG AA desde el día cero",
  },
  {
    id: "sp-3",
    name: "Camila Solís",
    role: "Staff Frontend Engineer",
    organization: "DevLatam",
    topic: "Rendimiento real en aplicaciones React modernas",
  },
];

export const agenda: SessionItem[] = [
  {
    id: "ses-1",
    day: "Día 1 · 14 Nov",
    time: "09:30 - 10:30",
    title: "Keynote: El futuro de la web ligera y mantenible",
    speaker: "Dra. Valeria Ríos",
    stage: "Auditorio Principal",
    track: "Arquitectura",
  },
  {
    id: "ses-2",
    day: "Día 1 · 14 Nov",
    time: "11:00 - 12:15",
    title:
      "Auditoría práctica de navegación por teclado y lectores de pantalla",
    speaker: "Mateo Cárdenas",
    stage: "Sala B",
    track: "Accesibilidad",
  },
  {
    id: "ses-3",
    day: "Día 2 · 15 Nov",
    time: "10:00 - 11:15",
    title:
      "Optimización de tiempos de carga y empaquetado con herramientas nativas",
    speaker: "Camila Solís",
    stage: "Auditorio Principal",
    track: "Arquitectura",
  },
  {
    id: "ses-4",
    day: "Día 2 · 15 Nov",
    time: "12:00 - 13:30",
    title: "Asistentes locales para pruebas automatizadas de interfaz",
    speaker: "Panel de invitados",
    stage: "Sala A",
    track: "Inteligencia Artificial",
  },
];
