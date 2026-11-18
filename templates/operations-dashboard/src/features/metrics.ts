import { dateBefore, reportingDate } from "../data/operations";
import { areas, type Operation, type Period } from "../types";

const dayFormat = new Intl.DateTimeFormat("es-MX", { day: "numeric", month: "short", timeZone: "UTC" });
export const formatDay = (date: string) => dayFormat.format(new Date(date));
export const formatNumber = new Intl.NumberFormat("es-MX").format;

export function periodRows(rows: Operation[], period: Period) {
  const start = dateBefore(period - 1);
  return rows.filter(({ date }) => date >= start && date <= reportingDate);
}

export function summarize(rows: Operation[]) {
  const completed = rows.filter((row) => row.status === "Completada");
  return {
    total: rows.length,
    units: completed.reduce((total, row) => total + row.units, 0),
    completed: completed.length,
    incidents: rows.filter((row) => row.status === "Incidencia").length,
  };
}

export function chartData(rows: Operation[], period: Period) {
  const bucket = period === 7 ? 1 : period / 6;
  const trend = Array.from({ length: period / bucket }, (_, i) => {
    const start = dateBefore(period - 1 - i * bucket);
    const end = dateBefore(period - (i + 1) * bucket);
    const count = rows.filter((row) => row.date >= start && row.date <= end).length;
    return { start, end, count };
  });
  const byArea = areas.map((area) => ({ area, count: rows.filter((row) => row.area === area).length }));
  return { trend, byArea };
}
