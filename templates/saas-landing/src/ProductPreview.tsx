import { columns } from "./data";

export function ProductPreview() {
  const total = columns.reduce((sum, column) => sum + column.tasks.length, 0);
  const finished = columns.find((column) => column.title === "Listo")?.tasks.length ?? 0;

  return (
    <figure id="producto" className="preview" tabIndex={-1} aria-labelledby="preview-title">
      <figcaption className="preview-caption">
        <h2 id="preview-title">Un proyecto, una vista</h2>
        <span>Tablero de ejemplo</span>
      </figcaption>
      <div className="board">
        <div className="board-path"><span className="brand-mark" aria-hidden="true" /> Proyecto <span aria-hidden="true">/</span> Tablero</div>
        <div className="board-main">
          <div className="board-title"><h3>Lanzamiento web</h3><p>{total} tareas</p></div>
          <div className="board-columns">
            {columns.map(({ title, tasks }) => (
              <section className="board-column" key={title} aria-label={title}>
                <h4>{title} <span>{tasks.length}</span></h4>
                <ul>{tasks.map((task) => <li key={task}>{task}</li>)}</ul>
              </section>
            ))}
          </div>
          <div className="board-progress">
            <span>{finished} de {total} tareas listas</span>
            <progress value={finished} max={total} aria-label="Avance del proyecto" />
          </div>
        </div>
      </div>
    </figure>
  );
}
