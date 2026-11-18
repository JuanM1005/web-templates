import { columns } from "./data";

export function ProductPreview() {
  return (
    <section id="producto" className="preview" aria-labelledby="preview-title">
      <figure className="frame">
        <figcaption className="preview-caption">
          <h2 id="preview-title">Un proyecto, una vista</h2>
          <span>Tablero de ejemplo</span>
        </figcaption>
        <div className="board">
          <div className="board-sidebar">
            <p className="sidebar-label">Proyecto</p>
            <p className="sidebar-project">Lanzamiento web</p>
            <p className="sidebar-selection">Tablero</p>
          </div>
          <div className="board-main">
            <div className="board-title">
              <h3>Lanzamiento web</h3>
              <p>{columns.reduce((total, column) => total + column.tasks.length, 0)} tareas</p>
            </div>
            <div className="board-columns">
              {columns.map(({ title, tasks }) => (
                <section className="board-column" key={title} aria-label={title}>
                  <h4>{title} <span aria-hidden="true">{tasks.length}</span></h4>
                  <ul>
                    {tasks.map((task) => <li key={task}>{task}</li>)}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
}
