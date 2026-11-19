import { useState } from "react";
import { areas, statuses, type Operation } from "../types";
import { formatDay } from "./metrics";

type Sort = "newest" | "oldest" | "units";

function searchable(value: string) {
  return value.normalize("NFD").replace(/\p{M}/gu, "").toLocaleLowerCase("es-MX");
}

export function Activity({ rows, compact = false }: { rows: Operation[]; compact?: boolean }) {
  const [search, setSearch] = useState("");
  const [area, setArea] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState<Sort>("newest");
  const [page, setPage] = useState(0);
  const terms = searchable(search.trim()).split(/\s+/);
  const matches = rows.filter((row) => {
    const text = searchable([row.id, row.task, row.area, row.status].join(" "));
    return (!area || row.area === area) && (!status || row.status === status) && terms.every((term) => text.includes(term));
  }).sort((a, b) => {
    const newest = b.date.localeCompare(a.date) || b.id.localeCompare(a.id);
    if (sort === "oldest") return -newest;
    return sort === "units" ? b.units - a.units || newest : newest;
  });
  const size = compact ? 4 : 8;
  const start = page * size;
  function clear() {
    setArea(""); setStatus(""); setSearch(""); setSort("newest"); setPage(0);
  }

  return (
    <section className="panel activity" aria-label="Registros operativos">
      <div className="panel-title">
        <h2>{compact ? "Actividad reciente" : "Registros operativos"}</h2>
        {compact && <a href="#actividad">Ver actividad completa</a>}
      </div>
      {!compact && (
        <div className="filters">
          <label>Buscar<input type="search" placeholder="ID, tarea o área" value={search}
            onChange={(event) => { setSearch(event.target.value); setPage(0); }} /></label>
          <label>Área<select value={area} onChange={(event) => { setArea(event.target.value); setPage(0); }}>
            <option value="">Todas</option>{areas.map((item) => <option key={item}>{item}</option>)}
          </select></label>
          <label>Estado<select value={status} onChange={(event) => { setStatus(event.target.value); setPage(0); }}>
            <option value="">Todos</option>{statuses.map((item) => <option key={item}>{item}</option>)}
          </select></label>
          <label>Orden<select value={sort} onChange={(event) => { setSort(event.target.value as Sort); setPage(0); }}>
            <option value="newest">Más recientes</option><option value="oldest">Más antiguas</option><option value="units">Más unidades</option>
          </select></label>
        </div>
      )}
      {matches.length > 0 ? (
        <div className="table-scroll" tabIndex={0} role="region" aria-label="Tabla de actividades">
          <table>
            <caption className="sr-only">Actividades operativas del periodo seleccionado</caption>
            <thead><tr>{["Actividad", "Estado", "Área", "Fecha", "Unidades"].map((label) => <th scope="col" key={label}>{label}</th>)}</tr></thead>
            <tbody>{matches.slice(start, start + size).map((row) => (
              <tr key={row.id}>
                <th scope="row">{row.task}<small>{row.id}</small></th>
                <td><span className="status" data-status={row.status}>{row.status}</span></td>
                <td>{row.area}</td><td><time dateTime={row.date}>{formatDay(row.date)}</time></td><td>{row.units}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      ) : <div className="empty"><p>Ningún registro coincide con la búsqueda.</p><button type="button" onClick={clear}>Limpiar filtros</button></div>}
      {!compact && <div className="pagination">
        <p role="status">{matches.length ? `${start + 1}–${Math.min(start + size, matches.length)} de ${matches.length}` : "0 registros"}</p>
        <div className="flex gap-2">
          <button type="button" disabled={!page} onClick={() => setPage(page - 1)}>Anterior</button>
          <button type="button" disabled={start + size >= matches.length} onClick={() => setPage(page + 1)}>Siguiente</button>
        </div>
      </div>}
    </section>
  );
}
