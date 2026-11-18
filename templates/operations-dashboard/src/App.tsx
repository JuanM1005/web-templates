import { useEffect, useState } from "react";
import { AppShell, navigation } from "./components/AppShell";
import { alerts, dateBefore, operations, reportingDate } from "./data/operations";
import { Activity } from "./features/Activity";
import { Overview } from "./features/Overview";
import { Notifications } from "./features/Notifications";
import { formatDay, periodRows } from "./features/metrics";
import { useDemoLoad } from "./hooks/useDemoLoad";
import { usePreferences } from "./hooks/usePreferences";
import type { Page, Period } from "./types";

function currentPage(): Page {
  const hash = location.hash.slice(1);
  return hash === "actividad" || hash === "notificaciones" ? hash : "resumen";
}

export function App() {
  const [page, setPage] = useState(currentPage);
  const [read, setRead] = useState<string[]>([]);
  const { preferences, setPreferences } = usePreferences();
  const { state, reload } = useDemoLoad();
  const { period, theme } = preferences;
  const rows = periodRows(operations, period);
  useEffect(() => {
    function navigate() {
      setPage(currentPage());
      window.scrollTo(0, 0);
      document.getElementById("contenido")?.focus({ preventScroll: true });
    }
    window.addEventListener("hashchange", navigate);
    return () => window.removeEventListener("hashchange", navigate);
  }, []);
  useEffect(() => { document.title = `${navigation[page]} | Pulso`; }, [page]);

  return (
    <AppShell page={page} theme={theme} busy={state === "loading"} unread={alerts.length - read.length}
      onTheme={() => setPreferences({ ...preferences, theme: theme === "dark" ? "light" : "dark" })} onReload={reload}>
      <div className="page-heading">
        <div><h1>{page === "resumen" ? "Resumen operativo" : navigation[page]}</h1>
          <p>{page === "notificaciones" ? "Últimas incidencias del conjunto de demostración" :
            `${formatDay(dateBefore(period - 1))} – ${formatDay(reportingDate)} de ${reportingDate.slice(0, 4)}`}</p></div>
        {page !== "notificaciones" && <label className="period">Periodo
          <select value={period} onChange={(event) => setPreferences({ ...preferences, period: Number(event.target.value) as Period })}>
            {[7, 30, 90].map((days) => <option key={days} value={days}>Últimos {days} días</option>)}
          </select>
        </label>}
      </div>
      {state === "loading" && <div className="panel feedback" role="status">Cargando operaciones…</div>}
      {state === "error" && <div className="panel feedback" role="alert">
        <p>La carga simulada falló.</p><button type="button" onClick={reload}>Reintentar</button></div>}
      {state === "ready" && <>
        {page === "resumen" && <><Overview rows={rows} period={period} /><Activity rows={rows} compact /></>}
        {page === "actividad" && <Activity key={period} rows={rows} />}
        {page === "notificaciones" && <Notifications read={read} mark={setRead} />}
      </>}
    </AppShell>
  );
}
