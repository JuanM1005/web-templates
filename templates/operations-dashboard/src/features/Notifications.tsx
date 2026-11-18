import { alerts } from "../data/operations";
import { formatDay } from "./metrics";

export function Notifications({ read, mark }: { read: string[]; mark: (ids: string[]) => void }) {
  return (
    <section className="panel notifications" aria-label="Bandeja de notificaciones simuladas">
      <div className="panel-title"><h2>Avisos de incidencias</h2>
        <button type="button" disabled={alerts.every(({ id }) => read.includes(id))}
          onClick={() => mark(alerts.map(({ id }) => id))}>Marcar todas como leídas</button>
      </div>
      <ul>{alerts.map((row) => (
        <li key={row.id}>
          <div><small>{formatDay(row.date)} · {row.area}</small><h3>{row.task}</h3>
            <p>El registro {row.id} requiere revisión.</p></div>
          {read.includes(row.id) ? <span className="read-label">Leída</span> :
            <button type="button" aria-label={`Marcar como leída la notificación ${row.id}`}
              onClick={() => mark([...read, row.id])}>Marcar como leída</button>}
        </li>
      ))}</ul>
      <p role="status" className="sr-only">{alerts.filter(({ id }) => !read.includes(id)).length} avisos sin leer</p>
    </section>
  );
}
