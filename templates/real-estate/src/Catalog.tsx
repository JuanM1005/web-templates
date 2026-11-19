import { useState } from "react";
import { features, formatPrice, propertyTypes } from "./data";
import { defaultFilters, filterProperties, sortOptions, type Filters } from "./filtering";
import { PropertyCards, type Selection } from "./PropertyCards";

const budgets = [3_000_000, 4_000_000, 6_500_000, 8_000_000];

export function Catalog({ filters, onFiltersChange, selection }: {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  selection: Selection;
}) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const activeCount = [filters.location.trim(), filters.type, filters.maxPrice].filter(Boolean).length + filters.features.length;
  const results = filterProperties(filters);

  return (
    <section className="inner-page" aria-labelledby="catalog-title">
      <div className="page-heading">
        <p className="eyebrow">Propiedades en venta</p>
        <h1 id="catalog-title">Catálogo</h1>
        <p>Busca por ciudad o zona y acota la selección a lo que necesitas.</p>
      </div>
      <div className="catalog-layout">
        <section className="filter-panel" aria-labelledby="filters-title">
          <div className="filter-head">
            <h2 id="filters-title">
              <span className="desktop-filter-title">Filtros</span>
              <button className="filter-toggle" type="button" aria-expanded={filtersOpen} aria-controls="filter-fields"
                onClick={() => setFiltersOpen(!filtersOpen)}>Filtros{activeCount > 0 && ` (${activeCount})`}</button>
            </h2>
            <button className="text-action" type="button" onClick={() => onFiltersChange(defaultFilters)}>Limpiar</button>
          </div>
          <div className="filter-fields" id="filter-fields" data-open={filtersOpen}>
            <label>Ubicación
              <input type="search" value={filters.location} placeholder="Ciudad o zona"
                onChange={(event) => onFiltersChange({ ...filters, location: event.target.value })} />
            </label>
            <label>Tipo de propiedad
              <select value={filters.type} onChange={(event) => {
                const type = propertyTypes.find((item) => item === event.target.value) ?? "";
                onFiltersChange({ ...filters, type });
              }}>
                <option value="">Todos los tipos</option>
                {propertyTypes.map((type) => <option key={type}>{type}</option>)}
              </select>
            </label>
            <label>Precio máximo (MXN)
              <select value={filters.maxPrice} onChange={(event) => onFiltersChange({ ...filters, maxPrice: Number(event.target.value) })}>
                <option value={0}>Sin límite de precio</option>
                {budgets.map((budget) => <option value={budget} key={budget}>Hasta {formatPrice(budget)}</option>)}
              </select>
            </label>
            <fieldset>
              <legend>Características</legend>
              {features.map((feature) => (
                <label className="feature-option" key={feature}>
                  <input type="checkbox" checked={filters.features.includes(feature)} onChange={(event) => {
                    const selected = event.target.checked
                      ? [...filters.features, feature]
                      : filters.features.filter((item) => item !== feature);
                    onFiltersChange({ ...filters, features: selected });
                  }} />
                  {feature}
                </label>
              ))}
            </fieldset>
          </div>
        </section>

        <div className="catalog-results">
          <div className="results-toolbar">
            <p role="status">{results.length === 1 ? "1 propiedad" : `${results.length} propiedades`}</p>
            <label>Ordenar por
              <select value={filters.sort} onChange={(event) => {
                const sort = event.target.value as Filters["sort"];
                onFiltersChange({ ...filters, sort });
              }}>
                {Object.entries(sortOptions).map(([value, label]) => <option value={value} key={value}>{label}</option>)}
              </select>
            </label>
          </div>
          {results.length > 0 ? <PropertyCards items={results} selection={selection} /> : (
            <div className="empty">
              <h2>Sin propiedades para esta búsqueda</h2>
              <p>Prueba otra ubicación o ajusta los filtros.</p>
              <button className="button button-outline" type="button" onClick={() => onFiltersChange(defaultFilters)}>Restablecer filtros</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
