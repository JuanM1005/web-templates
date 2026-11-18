import { type FormEvent } from "react";
import { properties, propertyLink, type Property } from "./data";
import { PropertyCards, type Selection } from "./PropertyCards";

export function Home({ selection, onSearch }: {
  selection: Selection;
  onSearch: (location: string) => void;
}) {
  const featured = properties.filter((property) => property.featured);
  const hero: Property | undefined = featured[0];

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    onSearch(String(values.get("location") ?? "").trim());
  }

  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">Portal inmobiliario de demostración</p>
          <h1 id="home-title">Espacios para <em>vivir bien.</em></h1>
          <p className="hero-intro">Explora casas, departamentos y lofts de arquitectura contemporánea. Encuentra un espacio que se adapte a tu forma de vivir.</p>
          <form className="hero-search" role="search" aria-label="Buscar propiedades por ubicación" onSubmit={search}>
            <label htmlFor="hero-location">Ciudad o zona</label>
            <div>
              <input type="search" name="location" id="hero-location" placeholder="Ej. Valle de Bruma" />
              <button className="button button-primary" type="submit">Buscar</button>
            </div>
          </form>
        </div>
        {hero && (
          <figure className="hero-figure">
            <img src={hero.photos[0].src} alt={hero.photos[0].alt} width={1024} height={768} fetchPriority="high" />
            <figcaption><a href={propertyLink(hero.id)}>{hero.name}</a><span>{hero.city}</span></figcaption>
          </figure>
        )}
      </section>

      <section className="featured" aria-labelledby="featured-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selección de Umbral</p>
            <h2 id="featured-title">Propiedades destacadas</h2>
          </div>
          <a className="button button-outline" href="#/catalogo">Ver catálogo completo</a>
        </div>
        <PropertyCards items={featured} selection={selection} heading="h3" />
      </section>
    </>
  );
}
