import { useState } from "react";
import { formatPrice, propertyLocation, type Property } from "./data";
import { PropertyActions, PropertyFacts, type Selection } from "./PropertyCards";

function Gallery({ photos }: Pick<Property, "photos">) {
  const [index, setIndex] = useState(0);
  const current = photos[index];

  function move(delta: number) {
    setIndex((value) => (value + delta + photos.length) % photos.length);
  }

  return (
    <section className="gallery" aria-label="Galería de la propiedad">
      <figure>
        <img src={current.src} alt={current.alt} width={1024} height={768} />
        <figcaption aria-live="polite">{current.caption} · {index + 1} de {photos.length}</figcaption>
      </figure>
      {photos.length > 1 && (
        <div className="gallery-controls">
          <button className="button button-outline" type="button" onClick={() => move(-1)}>Anterior</button>
          <div className="thumbnails" aria-label="Elegir fotografía" role="group">
            {photos.map((photo, position) => (
              <button type="button" key={photo.src} aria-label={`Mostrar ${photo.caption.toLowerCase()}`}
                aria-pressed={position === index} onClick={() => setIndex(position)}>
                <img src={photo.src} alt="" width={96} height={72} />
              </button>
            ))}
          </div>
          <button className="button button-outline" type="button" onClick={() => move(1)}>Siguiente</button>
        </div>
      )}
    </section>
  );
}

export function PropertyDetail({ property, selection }: { property: Property; selection: Selection }) {
  return (
    <section className="inner-page" aria-labelledby="property-title">
      <a className="back-link" href="#/catalogo">Volver al catálogo</a>
      <div className="page-heading">
        <p className="eyebrow">{property.type} en venta</p>
        <h1 id="property-title">{property.name}</h1>
        <p>{propertyLocation(property)}</p>
      </div>
      <div className="detail-layout">
        <Gallery photos={property.photos} />
        <div className="detail-copy">
          <p className="detail-price">{formatPrice(property.price)} <span>MXN</span></p>
          <PropertyFacts property={property} />
          <h2>Sobre la propiedad</h2>
          <p>{property.description}</p>
          <h2>Características</h2>
          <ul className="feature-tags" role="list">
            {property.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          <PropertyActions property={property} selection={selection} />
          <a className="button button-primary" href={`#/contacto?propiedad=${encodeURIComponent(property.id)}`}>Consultar esta propiedad</a>
        </div>
      </div>
    </section>
  );
}
