import { properties, propertyLocation, type Feature, type PropertyType } from "./data";

export const sortOptions = {
  recommended: "Orden editorial",
  lowest: "Menor precio",
  highest: "Mayor precio",
  largest: "Mayor superficie",
} as const;

type SortOrder = keyof typeof sortOptions;

export interface Filters {
  location: string;
  type: PropertyType | "";
  maxPrice: number;
  features: Feature[];
  sort: SortOrder;
}

export const defaultFilters: Filters = {
  location: "",
  type: "",
  maxPrice: 0,
  features: [],
  sort: "recommended",
};

function normalize(text: string) {
  return text.toLocaleLowerCase("es-MX").normalize("NFD").replace(/\p{M}/gu, "");
}

export function filterProperties(filters: Filters) {
  const words = normalize(filters.location).trim().split(/\s+/u);
  const results = properties.filter((property) => {
    const location = normalize(propertyLocation(property));
    return words.every((word) => location.includes(word))
      && (!filters.type || filters.type === property.type)
      && (!filters.maxPrice || property.price <= filters.maxPrice)
      && filters.features.every((item) => property.features.includes(item));
  });

  switch (filters.sort) {
    case "lowest": return results.sort((a, b) => a.price - b.price);
    case "highest": return results.sort((a, b) => b.price - a.price);
    case "largest": return results.sort((a, b) => b.area - a.area);
    default: return results;
  }
}
