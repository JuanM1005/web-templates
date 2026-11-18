import { useRef, useState, type ReactNode } from "react";
import type { Page, Theme } from "../types";

export const navigation = {
  resumen: "Resumen",
  actividad: "Actividad",
  notificaciones: "Notificaciones",
} satisfies Record<Page, string>;

interface ShellProps {
  page: Page;
  theme: Theme;
  unread: number;
  busy: boolean;
  onTheme: () => void;
  onReload: () => void;
  children: ReactNode;
}

function Sidebar({ page, unread, close }: Pick<ShellProps, "page" | "unread"> & { close: () => void }) {
  return (
    <nav aria-label="Navegación principal" onClick={close}>
      {Object.entries(navigation).map(([key, label]) => (
        <a key={key} href={`#${key}`} aria-current={page === key ? "page" : undefined}>
          <i aria-hidden="true" className={`nav-symbol ${key}`} />
          {label}
          {key === "notificaciones" && <span className="nav-count" aria-label={`${unread} sin leer`}>{unread}</span>}
        </a>
      ))}
    </nav>
  );
}

function Header({ theme, busy, onTheme, onReload }: Pick<ShellProps, "theme" | "busy" | "onTheme" | "onReload">) {
  return (
    <header className="topbar">
      <span className="environment"><i aria-hidden="true" />Datos de demostración</span>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={onTheme}>Tema {theme === "dark" ? "claro" : "oscuro"}</button>
        <button type="button" onClick={onReload} disabled={busy}>Actualizar</button>
      </div>
    </header>
  );
}

export function AppShell(props: ShellProps) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <div className="shell">
      <a className="skip-link" href="#contenido" onClick={(event) => {
        event.preventDefault();
        document.getElementById("contenido")?.focus();
      }}>Saltar al contenido</a>
      <aside className="sidebar" onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}>
        <div className="brand-row">
          <a className="brand" href="#resumen" onClick={() => setOpen(false)}>
            <span className="brand-icon" aria-hidden="true"><b /><b /><b /></span>Pulso
          </a>
          <button className="menu" type="button" aria-expanded={open} aria-controls="sidebar-nav" ref={toggle}
            onClick={() => setOpen(!open)}>Menú</button>
        </div>
        <div className="sidebar-body" data-open={open} id="sidebar-nav">
          <Sidebar page={props.page} unread={props.unread} close={() => {
            setOpen(false);
            document.getElementById("contenido")?.focus();
          }} />
        </div>
      </aside>
      <div className="workspace">
        <Header theme={props.theme} busy={props.busy} onTheme={props.onTheme} onReload={props.onReload} />
        <main id="contenido" tabIndex={-1}>{props.children}</main>
      </div>
    </div>
  );
}
