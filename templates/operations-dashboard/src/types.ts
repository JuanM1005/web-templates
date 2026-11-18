export const areas = ["Recepción", "Almacén", "Despacho"] as const;
export const statuses = ["Completada", "En curso", "Incidencia"] as const;
export type Area = typeof areas[number];
export type Status = typeof statuses[number];
export type Period = 7 | 30 | 90;
export type Theme = "light" | "dark";
export type Page = "resumen" | "actividad" | "notificaciones";

export interface Operation {
  id: string;
  task: string;
  date: string;
  area: Area;
  status: Status;
  units: number;
}
export interface Preferences {
  theme: Theme;
  period: Period;
}
