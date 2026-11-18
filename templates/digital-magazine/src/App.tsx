import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArticleList } from "./ArticleList";
import { ArticleView } from "./ArticleView";
import { articles, categories, categoryIds, searchArticles } from "./content";
import { Home } from "./Home";
import { categoryLink, getRoute } from "./navigation";
import { useFavorites } from "./useFavorites";

export function App() {
  const [hash, setHash] = useState(() => window.location.hash);
  const [query, setQuery] = useState("");
  const main = useRef<HTMLElement>(null);
  const previousHash = useRef(hash);
  const favoriteActions = useFavorites();
  const route = getRoute(hash);
  const article = route.page === "article" ? articles.find(({ slug }) => slug === route.slug) : undefined;
  const category = route.page === "category" ? categories[route.category] : undefined;
  const onHome = route.page === "home";
  const title = article?.title ?? category?.label ?? (
    route.page === "favorites" ? "Favoritos" :
    route.page === "search" ? "Buscar" : onHome ? "Revista digital" : "Página no encontrada"
  );

  useEffect(() => {
    function updateHash() {
      setHash(window.location.hash);
    }
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useLayoutEffect(() => {
    document.title = `${title} | Interlínea`;
    if (previousHash.current !== hash) {
      previousHash.current = hash;
      const frame = requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        main.current?.focus({ preventScroll: true });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [hash, title]);

  const searchResults = route.page === "search" ? searchArticles(query) : [];
  const savedArticles = articles.filter(({ slug }) => favoriteActions.favorites.includes(slug));

  return (
    <>
      <a className="skip-link" href="#contenido" onClick={(event) => {
        event.preventDefault();
        main.current?.focus();
      }}>Saltar al contenido</a>
      <header className={onHome ? "masthead" : "masthead masthead-compact"}>
        <div className="wrap">
          {onHome ? (
            <>
              <div className="edition-strip">
                <span>Revista digital independiente</span>
                <span>Edición 01 · Noviembre 2026</span>
              </div>
              <div className="masthead-title">
                <h1>Interlínea</h1>
                <p>Tecnología, diseño y cultura.</p>
              </div>
            </>
          ) : <a className="compact-wordmark" href="#/">Interlínea</a>}
          <div className="navigation">
            <nav aria-label="Secciones">
              <a href="#/" aria-current={onHome ? "page" : undefined}>Portada</a>
              {categoryIds.map((id) => (
                <a key={id} href={categoryLink(id)} aria-current={route.page === "category" && route.category === id ? "page" : undefined}>
                  {categories[id].label}
                </a>
              ))}
            </nav>
            <nav aria-label="Herramientas de lectura">
              <a href="#/buscar" aria-current={route.page === "search" ? "page" : undefined}>Buscar</a>
              <a href="#/favoritos" aria-current={route.page === "favorites" ? "page" : undefined}>
                Favoritos {favoriteActions.favorites.length > 0 && <span>({favoriteActions.favorites.length})</span>}
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="wrap main" id="contenido" tabIndex={-1} ref={main}>
        {onHome ? <Home {...favoriteActions} /> :
          article ? <ArticleView key={article.slug} article={article} {...favoriteActions} /> :
          <section className="index-page" aria-labelledby="page-title">
            <h1 id="page-title">{title}</h1>
            {route.page === "category" && (
              <>
                <p className="index-intro">{categories[route.category].description}</p>
                <ArticleList articles={articles.filter(({ category }) => category === route.category)} {...favoriteActions} />
              </>
            )}
            {route.page === "search" && (
              <>
                <div className="search-field" role="search" aria-label="Buscar publicaciones">
                  <label htmlFor="search">Palabras clave</label>
                  <input id="search" type="search" placeholder="Ej. márgenes o radio" value={query} onChange={(event) => setQuery(event.target.value)} />
                </div>
                <p className="results-count" role="status">
                  {searchResults.length === 1 ? "1 publicación" : `${searchResults.length} publicaciones`}
                </p>
                {searchResults.length > 0 ? <ArticleList articles={searchResults} {...favoriteActions} /> :
                  <p className="empty">Prueba con otras palabras, un autor o una categoría.</p>}
              </>
            )}
            {route.page === "favorites" && (
              savedArticles.length > 0 ? <ArticleList articles={savedArticles} {...favoriteActions} /> :
                <p className="empty">Guarda tus lecturas desde la <a href="#/">portada</a> para encontrarlas aquí.</p>
            )}
            {(route.page === "missing" || route.page === "article") && (
              <p className="empty">Esta página no está disponible. <a href="#/">Volver a la portada</a></p>
            )}
          </section>}
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <a href="#/" className="footer-wordmark">Interlínea</a>
          <p>Revista de demostración con artículos y autores ficticios.</p>
          <a href="#/buscar">Buscar publicaciones</a>
        </div>
      </footer>
    </>
  );
}
