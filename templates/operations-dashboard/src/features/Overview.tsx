import { chartData, formatDay, formatNumber, summarize } from "./metrics";
import type { Operation, Period } from "../types";

function Indicators({ rows }: { rows: Operation[] }) {
  const summary = summarize(rows);
  const rate = summary.total ? Math.round(100 * summary.completed / summary.total) : 0;
  const cards = [
    ["Operaciones", formatNumber(summary.total), "Registros del periodo"],
    ["Unidades completadas", formatNumber(summary.units), "En operaciones finalizadas"],
    ["Finalización", `${rate}%`, `${summary.completed} completadas de ${summary.total}`],
    ["Incidencias", formatNumber(summary.incidents), "Requieren seguimiento"],
  ];
  return (
    <dl className="indicators" aria-label="Indicadores generales">
      {cards.map(([label, value, note]) => (
        <div key={label}><dt>{label}</dt><dd><strong>{value}</strong><small>{note}</small></dd></div>
      ))}
    </dl>
  );
}

export function Overview({ rows, period }: { rows: Operation[]; period: Period }) {
  const { trend, byArea } = chartData(rows, period);
  const peak = Math.max(1, ...trend.map((bucket) => bucket.count));
  return (
    <>
      <Indicators rows={rows} />
      <section aria-label="Gráficas operativas" className="charts">
        <figure className="panel chart">
          <figcaption><h2>Volumen operativo</h2><p>{period === 7 ? "Operaciones por día" : `Operaciones por bloque de ${period / 6} días`}</p></figcaption>
          <ol className="columns" aria-label="Volumen por intervalo">
            {trend.map(({ start, end, count }) => (
              <li key={start}>
                <div className="bar-track" aria-hidden="true"><div style={{ height: `${count / peak * 100}%` }}><b>{count}</b></div></div>
                <span aria-hidden="true">{formatDay(start)}</span>
                <span className="sr-only">{formatDay(start)} a {formatDay(end)}, {count} operaciones</span>
              </li>
            ))}
          </ol>
        </figure>
        <figure className="panel chart">
          <figcaption><h2>Distribución por área</h2><p>Participación en el periodo</p></figcaption>
          <ul className="distribution">
            {byArea.map(({ area, count }) => {
              const percent = rows.length ? Math.round(count / rows.length * 100) : 0;
              return <li key={area}>
                <div><span>{area}</span><b>{count} <small>({percent}%)</small></b></div>
                <div className="meter" aria-hidden="true"><i style={{ width: `${percent}%` }} /></div>
              </li>;
            })}
          </ul>
        </figure>
      </section>
    </>
  );
}
