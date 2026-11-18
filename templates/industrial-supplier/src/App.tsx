import { FormEvent, useMemo, useState } from "react";
import { categories, process, products, services, type Product } from "./data";

const Arrow = () => <span aria-hidden="true">↗</span>;

function ProductVisual({ type }: { type: Product["visual"] }) {
  return (
    <div className={`product-visual product-visual--${type}`} aria-hidden="true">
      <span className="visual-grid" />
      <span className="visual-base" />
      <span className="visual-body" />
      <span className="visual-detail" />
    </div>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);
  const [quoteItems, setQuoteItems] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === "Todos" || product.family === category;
      const matchesQuery = !normalized || `${product.name} ${product.id} ${product.application}`.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const toggleQuote = (id: string) => {
    setQuoteItems((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <div className="demo-bar">PLANTILLA DEMOSTRATIVA · Productos, datos técnicos y solicitudes son ficticios.</div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Vectora Industrial, inicio">
          <span className="brand-mark">V</span>
          <span><strong>VECTOR<span>A</span></strong><small>SUMINISTRO INDUSTRIAL</small></span>
        </a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Abrir menú</span><span /><span />
        </button>
        <nav id="main-nav" className={menuOpen ? "nav nav--open" : "nav"} aria-label="Navegación principal">
          <a href="#catalogo" onClick={() => setMenuOpen(false)}>Catálogo</a>
          <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#metodo" onClick={() => setMenuOpen(false)}>Método</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>
        <a className="quote-pill" href="#contacto">Cotización <span>{quoteItems.length}</span></a>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span /> EQUIPOS · INTEGRACIÓN · SERVICIO</p>
            <h1>Decisiones técnicas que <em>mueven</em> la operación.</h1>
            <p className="hero-lead">Una base editorial para presentar equipos industriales, orientar una selección y convertir necesidades complejas en solicitudes claras.</p>
            <div className="hero-actions">
              <a className="button button--lime" href="#catalogo">Explorar equipos <Arrow /></a>
              <a className="button button--ghost" href="#servicios">Conocer capacidades</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Ilustración abstracta de un sistema industrial">
            <div className="blueprint-label">SISTEMA / 04–26</div>
            <div className="pipe pipe-a" /><div className="pipe pipe-b" />
            <div className="machine"><span /><span /><span /></div>
            <div className="status-card"><small>ESTADO DEL SISTEMA</small><strong><i /> LISTO PARA ESPECIFICAR</strong><span>Ficha preliminar · Rev. 01</span></div>
          </div>
          <div className="hero-stats">
            <div><strong>04</strong><span>familias de producto</span></div>
            <div><strong>06</strong><span>equipos de muestra</span></div>
            <div><strong>01</strong><span>solicitud unificada</span></div>
          </div>
        </section>

        <section className="catalog section" id="catalogo">
          <div className="section-heading">
            <div><p className="eyebrow">CATÁLOGO DEMOSTRATIVO</p><h2>Encuentre el punto de partida.</h2></div>
            <p>Filtre por familia o busque una aplicación. Cada ficha distingue lo disponible de lo que debe confirmarse en campo.</p>
          </div>
          <div className="catalog-tools">
            <label className="search"><span className="sr-only">Buscar equipo</span><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar modelo, equipo o aplicación" /></label>
            <div className="filters" aria-label="Filtrar por familia">
              {categories.map((item) => <button type="button" className={category === item ? "active" : ""} onClick={() => setCategory(item)} key={item}>{item}</button>)}
            </div>
          </div>
          <p className="results-count"><strong>{filteredProducts.length}</strong> equipos encontrados <span>· Datos de demostración</span></p>
          <div className="product-grid">
            {filteredProducts.map((product) => {
              const inQuote = quoteItems.includes(product.id);
              return <article className="product-card" key={product.id}>
                <div className="product-meta"><span>{product.family}</span><small>{product.id}</small></div>
                <ProductVisual type={product.visual} />
                <div className="product-body"><h3>{product.name}</h3><p>{product.summary}</p>
                  <dl>{product.specs.slice(0, 2).map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl>
                  <div className="tags">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="card-actions"><button type="button" onClick={() => setSelected(product)}>Ver ficha</button><button type="button" className={inQuote ? "added" : ""} onClick={() => toggleQuote(product.id)}>{inQuote ? "✓ Agregado" : "+ Cotizar"}</button></div>
                </div>
              </article>;
            })}
          </div>
          {filteredProducts.length === 0 && <div className="empty-state"><strong>No encontramos coincidencias.</strong><p>Pruebe otra palabra o restablezca los filtros.</p><button type="button" onClick={() => { setCategory("Todos"); setQuery(""); }}>Mostrar todo</button></div>}
        </section>

        <section className="services section" id="servicios">
          <div className="section-kicker"><span>SERVICIOS COMPLEMENTARIOS</span><small>DEL EQUIPO A LA OPERACIÓN</small></div>
          <div className="services-layout">
            <div className="services-intro"><h2>Una solución no termina en la entrega.</h2><p>La plantilla conecta catálogo y servicio para que el visitante entienda el acompañamiento disponible antes, durante y después de una compra.</p><a href="#contacto">Plantear un requerimiento <Arrow /></a></div>
            <div className="service-list">{services.map((service) => <article key={service.code}><span>{service.code}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><i aria-hidden="true">↗</i></article>)}</div>
          </div>
        </section>

        <section className="method section" id="metodo">
          <div className="method-copy"><p className="eyebrow">RUTA DE ATENCIÓN</p><h2>De una pregunta abierta a un alcance entendible.</h2><p>Una secuencia visible reduce fricción y ayuda a reunir la información correcta sin prometer resultados antes del diagnóstico.</p></div>
          <ol>{process.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
        </section>

        <section className="request section" id="contacto">
          <div className="request-aside"><p className="eyebrow">SOLICITUD DEMOSTRATIVA</p><h2>Prepare el siguiente paso.</h2><p>Describa la operación, el fluido o servicio y el objetivo. En una implementación real, este formulario debe conectarse a un destino autorizado.</p>
            <div className="request-summary"><small>EQUIPOS SELECCIONADOS</small><strong>{quoteItems.length.toString().padStart(2, "0")}</strong><span>{quoteItems.length ? quoteItems.join(" · ") : "Aún no ha agregado equipos"}</span></div>
          </div>
          <form onSubmit={submitRequest}>
            <div className="form-grid"><label>Nombre o empresa<input required placeholder="Ej. Taller del Centro" /></label><label>Correo de contacto<input required type="email" placeholder="nombre@empresa.com" /></label></div>
            <label>Tipo de necesidad<select defaultValue=""><option value="" disabled>Seleccione una opción</option><option>Selección de equipo</option><option>Mantenimiento o diagnóstico</option><option>Integración de sistema</option><option>Adecuación de infraestructura</option></select></label>
            <label>¿Qué necesita resolver?<textarea required rows={5} placeholder="Comparta el objetivo, condiciones conocidas y restricciones principales." /></label>
            <div className="form-footer"><p>Este formulario no envía ni almacena información.</p><button className="button button--lime" type="submit">Simular solicitud <Arrow /></button></div>
            {sent && <p className="form-success" role="status">Simulación completada. No se transmitieron datos.</p>}
          </form>
        </section>
      </main>

      <footer><a className="brand brand--footer" href="#inicio"><span className="brand-mark">V</span><span><strong>VECTOR<span>A</span></strong><small>SUMINISTRO INDUSTRIAL</small></span></a><p>Plantilla pública con identidad y contenido ficticios. Personalice antes de publicar.</p><div><a href="#catalogo">Catálogo</a><a href="#servicios">Servicios</a><a href="#contacto">Contacto</a></div><small>© 2026 Vectora Industrial · Caso demostrativo</small></footer>

      {selected && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setSelected(null); }}>
        <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button className="modal-close" type="button" onClick={() => setSelected(null)} aria-label="Cerrar ficha">×</button>
          <ProductVisual type={selected.visual} /><p className="eyebrow">{selected.family} · {selected.id}</p><h2 id="modal-title">{selected.name}</h2><p>{selected.summary}</p><h3>Aplicación de referencia</h3><p>{selected.application}</p><dl>{selected.specs.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl><small className="modal-note">Especificaciones demostrativas; deben validarse para cada proyecto.</small><button className="button button--dark" type="button" onClick={() => toggleQuote(selected.id)}>{quoteItems.includes(selected.id) ? "Quitar de cotización" : "Agregar a cotización"}</button>
        </section>
      </div>}
    </>
  );
}
