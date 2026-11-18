import { useRef } from "react";
import { features, formatPrice, propertyLink, propertyLocation, type Property } from "./data";

const metrics: { label: string; value: (property: Property) => string }[] = [
  { label: "Precio (MXN)", value: (property) => formatPrice(property.price) },
  { label: "Ubicación", value: propertyLocation },
  { label: "Tipo", value: (property) => property.type },
  { label: "Superficie", value: (property) => `${property.area} m²` },
  { label: "Recámaras", value: (property) => String(property.bedrooms) },
  { label: "Baños", value: (property) => String(property.baths) },
  ...features.map((feature) => ({
    label: feature,
    value: (property: Property) => property.features.includes(feature) ? "Sí" : "No",
  })),
];

export function Comparison({ items, remove }: { items: Property[]; remove: (property: Property) => void }) {
  const heading = useRef<HTMLHeadingElement>(null);

  return (
    <section className="inner-page" aria-labelledby="comparison-title">
      <div className="page-heading">
        <h1 id="comparison-title" ref={heading} tabIndex={-1}>Comparar propiedades</h1>
        <p>{items.length} de 3 propiedades seleccionadas</p>
      </div>
      {items.length === 0 ? (
        <div className="empty">
          <h2>Aún no has seleccionado propiedades</h2>
          <p>Elige hasta tres desde el catálogo para ver sus diferencias.</p>
          <a className="button button-primary" href="#/catalogo">Ir al catálogo</a>
        </div>
      ) : (
        <>
          <p className="comparison-help">
            {items.length === 1 ? "Agrega otra propiedad para contrastar las características. " : ""}
            <a className="back-link" href="#/catalogo">Volver al catálogo</a>
          </p>
          <div className="table-scroll" role="region" aria-label="Tabla de comparación de propiedades" tabIndex={0}>
            <table className="comparison-table">
              <caption className="sr-only">Precio, ubicación y características de las propiedades seleccionadas</caption>
              <thead>
                <tr>
                  <th scope="col">Característica</th>
                  {items.map((property) => (
                    <th scope="col" key={property.id}>
                      <a href={propertyLink(property.id)}>{property.name}</a>
                      <button className="text-action" type="button" aria-label={`Quitar ${property.name} de la comparación`}
                        onClick={() => {
                          remove(property);
                          heading.current?.focus();
                        }}>Quitar</button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {metrics.map(({ label, value }) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    {items.map((property) => <td key={property.id}>{value(property)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}
