import { useEffect, useRef, useState } from "react";
import { Catalog } from "./Catalog";
import { Comparison } from "./Comparison";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { PropertyCards, type Selection } from "./PropertyCards";
import { PropertyDetail } from "./PropertyDetail";
import { properties, type Property } from "./data";
import { defaultFilters } from "./filtering";

const favoriteKey = "umbral:favorites";
const links = [
  { path: "", label: "Inicio" },
  { path: "catalogo", label: "Catálogo" },
  { path: "favoritos", label: "Favoritos" },
  { path: "comparar", label: "Comparar" },
  { path: "contacto", label: "Contacto" },
] as const;

function readFavorites(): string[] {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(favoriteKey) ?? "[]");
    if (Array.isArray(saved)) {
      return properties.filter(({ id }) => saved.includes(id)).map(({ id }) => id);
    }
  } catch {
    // Keep favorites usable during the visit if storage is unavailable.
  }
  return [];
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [hash, setHash] = useState(() => window.location.hash);
  const [filters, setFilters] = useState(defaultFilters);
  const [favorites, setFavorites] = useState(readFavorites);
  const [comparison, setComparison] = useState<string[]>([]);
  const [notice, setNotice] = useState({ text: "", limit: false });
  const main = useRef<HTMLElement>(null);
  const previousHash = useRef(hash);

  const [path, query] = hash.replace(/^#\/?/u, "").split("?", 2);
  const interest = new URLSearchParams(query).get("propiedad") ?? "";
  const property = path.startsWith("propiedad/")
    ? properties.find(({ id }) => id === path.slice("propiedad/".length))
    : undefined;
  const label = property?.name ?? links.find((link) => link.path === path)?.label ?? "Página no encontrada";

  useEffect(() => {
    function readHash() {
      setHash(window.location.hash);
      setMenuOpen(false);
      setNotice({ text: "", limit: false });
    }
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  useEffect(() => {
    document.title = path ? `${label} | Umbral` : "Umbral | Propiedades";
    if (previousHash.current !== hash) {
      previousHash.current = hash;
      const frame = requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        main.current?.focus({ preventScroll: true });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [hash, label, path]);

  useEffect(() => {
    try {
      localStorage.setItem(favoriteKey, JSON.stringify(favorites));
    } catch {
      // The current React state remains available.
    }
  }, [favorites]);

  function toggleFavorite(property: Property) {
    setFavorites((current) => current.includes(property.id)
      ? current.filter((id) => id !== property.id)
      : [...current, property.id]);
    if (path === "favoritos") main.current?.focus({ preventScroll: true });
  }

  function toggleComparison(property: Property) {
    if (comparison.includes(property.id)) {
      setComparison(comparison.filter((id) => id !== property.id));
      setNotice({ text: `${property.name} se quitó de la comparación.`, limit: false });
    } else if (comparison.length < 3) {
      setComparison([...comparison, property.id]);
      setNotice({ text: `${property.name} se añadió a la comparación.`, limit: false });
    } else {
      setNotice({ text: `Para comparar ${property.name}, quita una de las tres propiedades seleccionadas.`, limit: true });
    }
  }

  const selection: Selection = { favorites, comparison, toggleFavorite, toggleComparison };
  const compared = comparison.flatMap((id) => properties.filter((item) => item.id === id));
  const saved = properties.filter(({ id }) => favorites.includes(id));

  function startSearch(location: string) {
    setFilters({ ...defaultFilters, location });
    window.location.hash = "/catalogo";
  }

  return (
    <>
      <a href="#contenido" className="skip-link" onClick={(event) => {
        event.preventDefault();
        main.current?.focus();
      }}>Saltar al contenido</a>
      <header className="site-header" onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen && menuButton.current?.getClientRects().length) {
          setMenuOpen(false);
          menuButton.current.focus();
        }
      }}>
        <div className="wrap header-layout">
          <a className="brand" href="#/"><span className="brand-mark" aria-hidden="true" />Umbral</a>
          <button className="nav-toggle button button-outline" ref={menuButton} type="button"
            aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "Cerrar" : "Menú"}
          </button>
          <nav id="main-nav" aria-label="Navegación principal" data-open={menuOpen} onClick={() => {
            setMenuOpen(false);
            if (menuOpen) main.current?.focus({ preventScroll: true });
          }}>
            {links.map(({ path: target, label: text }) => (
              <a href={`#/${target}`} key={target} aria-current={path === target ? "page" : undefined}>
                {text}
                {target === "favoritos" && favorites.length > 0 && ` (${favorites.length})`}
                {target === "comparar" && comparison.length > 0 && ` (${comparison.length})`}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="wrap main" id="contenido" tabIndex={-1} ref={main}>
        {!path ? <Home selection={selection} onSearch={startSearch} /> :
          path === "catalogo" ? <Catalog filters={filters} onFiltersChange={setFilters} selection={selection} /> :
          property ? <PropertyDetail key={property.id} property={property} selection={selection} /> :
          path === "favoritos" ? (
            <section className="inner-page" aria-labelledby="favorites-title">
              <div className="page-heading"><h1 id="favorites-title">Favoritos</h1></div>
              {saved.length > 0 ? <PropertyCards items={saved} selection={selection} /> : (
                <div className="empty">
                  <h2>Aún no tienes propiedades guardadas</h2>
                  <p>Guarda las que te interesen para consultarlas aquí.</p>
                  <a className="button button-primary" href="#/catalogo">Explorar el catálogo</a>
                </div>
              )}
            </section>
          ) :
          path === "comparar" ? <Comparison items={compared} remove={toggleComparison} /> :
          path === "contacto" ? <Contact key={hash} interest={interest} /> : (
            <section className="inner-page" aria-labelledby="missing-title">
              <div className="page-heading"><h1 id="missing-title">Página no encontrada</h1></div>
              <a className="button button-primary" href="#/catalogo">Volver al catálogo</a>
            </section>
          )}
      </main>

      {comparison.length > 0 && path !== "comparar" && (
        <aside className="compare-rail" aria-label="Selección para comparar">
          <div className="wrap compare-rail-inner">
            <p>{comparison.length} de 3 para comparar</p>
            <a className="button button-primary" href="#/comparar">Ver comparación</a>
          </div>
          {notice.limit && <p className="wrap compare-feedback" aria-hidden="true">{notice.text}</p>}
        </aside>
      )}
      <p className="sr-only" role="status">{notice.text}</p>
      <footer className="site-footer">
        <div className="wrap footer-layout">
          <a className="brand" href="#/"><span className="brand-mark" aria-hidden="true" />Umbral</a>
          <p>Portal demostrativo. Inmuebles, ubicaciones y precios ficticios.</p>
          <a href="#/contacto">Contacto</a>
        </div>
      </footer>
    </>
  );
}
