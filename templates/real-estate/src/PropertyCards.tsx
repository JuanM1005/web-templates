import { formatPrice, propertyLink, propertyLocation, type Property } from "./data";

export interface Selection {
  favorites: string[];
  comparison: string[];
  toggleFavorite: (property: Property) => void;
  toggleComparison: (property: Property) => void;
}

export function PropertyActions({ property, selection }: { property: Property; selection: Selection }) {
  return (
    <div className="property-actions">
      <button type="button" aria-pressed={selection.favorites.includes(property.id)}
        aria-label={`Guardar como favorita: ${property.name}`} onClick={() => selection.toggleFavorite(property)}>
        Guardar
      </button>
      <button type="button" aria-pressed={selection.comparison.includes(property.id)}
        aria-label={`Comparar: ${property.name}`} onClick={() => selection.toggleComparison(property)}>
        Comparar
      </button>
    </div>
  );
}

export function PropertyFacts({ property }: { property: Property }) {
  return (
    <dl className="property-facts">
      <div><dt>Superficie</dt><dd>{property.area} m²</dd></div>
      <div><dt>Recámaras</dt><dd>{property.bedrooms}</dd></div>
      <div><dt>Baños</dt><dd>{property.baths}</dd></div>
    </dl>
  );
}

export function PropertyCards({
  items, selection, heading: Heading = "h2",
}: { items: Property[]; selection: Selection; heading?: "h2" | "h3" }) {
  return (
    <ul className="property-list" role="list">
      {items.map((property) => (
        <li key={property.id}>
          <article className="property-card">
            <img src={property.photos[0].src} alt={property.photos[0].alt} loading="lazy" width={1024} height={768} />
            <div className="property-card-copy">
              <p className="property-type">{property.type}</p>
              <Heading className="card-title"><a href={propertyLink(property.id)}>{property.name}</a></Heading>
              <p className="muted">{propertyLocation(property)}</p>
              <p className="card-price">{formatPrice(property.price)} <span>MXN</span></p>
              <PropertyFacts property={property} />
              <PropertyActions property={property} selection={selection} />
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
