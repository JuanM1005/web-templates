import { areas, type Operation, type Status } from "../types";

export const reportingDate = "2026-11-18";
const dayMs = 86_400_000;

export function dateBefore(days: number): string {
  return new Date(Date.parse(reportingDate) - days * dayMs).toISOString().slice(0, 10);
}

const tasks = [
  ["Recepción de material", "Validación de lote", "Inspección de entrada"],
  ["Conteo de existencias", "Reposición de módulo", "Traslado interno"],
  ["Preparación de pedido", "Salida de mercancía", "Verificación de entrega"],
];

const activityPattern = [5, 8, 4, 9, 6, 3, 7, 5, 4, 6, 8];
const areaPattern = [0, 1, 1, 2, 1, 0, 2, 0, 1, 2, 1];
const statusPattern: Status[] = ["Completada", "En curso", "Completada", "Incidencia", "Completada", "Completada", "En curso"];
export const operations: Operation[] = [];

for (let day = 89; day >= 0; day--) {
  const count = activityPattern[day % activityPattern.length];
  for (let index = 0; index < count; index++) {
    const sequence = operations.length + 1;
    const areaIndex = areaPattern[(day + sequence) % areaPattern.length];
    operations.push({
      id: `OP-${String(sequence).padStart(4, "0")}`,
      task: tasks[areaIndex][Math.floor(sequence / 5) % 3],
      date: dateBefore(day),
      area: areas[areaIndex],
      status: statusPattern[(day * 3 + index) % statusPattern.length],
      units: 4 + (sequence * 17) % 64,
    });
  }
}

export const alerts = operations.filter((row) => row.status === "Incidencia").slice(-4).reverse();
