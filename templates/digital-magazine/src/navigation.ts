import { categoryIds, type CategoryId } from "./content";

export type Route =
  | { page: "home" | "search" | "favorites" | "missing" }
  | { page: "category"; category: CategoryId }
  | { page: "article"; slug: string };

export function getRoute(hash: string): Route {
  const [section, slug, extra] = hash.replace(/^#\/?/u, "").split("/");
  if (extra !== undefined) return { page: "missing" };
  if (!section && !slug) return { page: "home" };
  if (section === "buscar" && slug === undefined) return { page: "search" };
  if (section === "favoritos" && slug === undefined) return { page: "favorites" };
  if (section === "categoria") {
    const category = categoryIds.find((id) => id === slug);
    if (category) return { page: "category", category };
  }
  if (section === "articulo" && slug) return { page: "article", slug };
  return { page: "missing" };
}

export function categoryLink(category: CategoryId) {
  return `#/categoria/${category}`;
}

export function articleLink(slug: string) {
  return `#/articulo/${slug}`;
}
