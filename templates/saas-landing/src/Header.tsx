import { useRef, useState } from "react";
import { navigation } from "./data";

export function Brand() {
  return <a className="brand" href="#inicio"><span className="brand-mark" aria-hidden="true" />Alinea</a>;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && menuOpen && toggle.current?.getClientRects().length) {
        setMenuOpen(false);
        toggle.current.focus();
      }
    }}>
      <div className="frame header-inner">
        <Brand />
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Cerrar" : "Menú"}
        </button>
        <nav id="main-nav" className="main-nav" aria-label="Navegación principal" data-open={menuOpen}>
          {navigation.map(({ label, href }) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="button button-primary" href="#contacto" onClick={() => setMenuOpen(false)}>Probar contacto</a>
        </nav>
      </div>
    </header>
  );
}
