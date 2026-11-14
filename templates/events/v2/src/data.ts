export type EventDay = "14 NOV" | "15 NOV";

export interface Session {
  id: string;
  day: EventDay;
  time: string;
  title: string;
  speaker: string;
  track: string;
}

export const sessions: Session[] = [
  { id: "s1", day: "14 NOV", time: "09:30", title: "Diseñar para futuros habitables", speaker: "Valeria Cruz", track: "Apertura" },
  { id: "s2", day: "14 NOV", time: "11:15", title: "Datos cívicos sin perder a las personas", speaker: "Tomás Ibarra", track: "Tecnología" },
  { id: "s3", day: "14 NOV", time: "16:00", title: "Laboratorios urbanos: aprender haciendo", speaker: "Mara Okafor", track: "Ciudades" },
  { id: "s4", day: "15 NOV", time: "10:00", title: "Materiales que regresan al ciclo", speaker: "León Duarte", track: "Diseño" },
  { id: "s5", day: "15 NOV", time: "12:30", title: "Comunidades que prototipan políticas", speaker: "Anaïs Ríos", track: "Sociedad" },
  { id: "s6", day: "15 NOV", time: "17:00", title: "Una agenda compartida para 2030", speaker: "Panel colectivo", track: "Cierre" },
];

export const speakers = [
  { name: "Valeria Cruz", role: "Diseñadora estratégica", initials: "VC", color: "#ff694d" },
  { name: "Tomás Ibarra", role: "Tecnólogo cívico", initials: "TI", color: "#5ee5c0" },
  { name: "Mara Okafor", role: "Investigadora urbana", initials: "MO", color: "#9a7cff" },
  { name: "León Duarte", role: "Diseñador de materiales", initials: "LD", color: "#f5ff61" },
];
