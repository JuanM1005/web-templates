import { useEffect, useState } from "react";
import { articles } from "./content";

const storageKey = "interlinea:favorites";

function readFavorites(): string[] {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    if (Array.isArray(saved)) {
      return articles.filter(({ slug }) => saved.includes(slug)).map(({ slug }) => slug);
    }
  } catch {
    // The magazine still works if local storage is unavailable.
  }
  return [];
}

export function useFavorites() {
  const [favorites, setFavorites] = useState(readFavorites);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(favorites));
    } catch {
      // Favorites remain available for the current visit.
    }
  }, [favorites]);

  function toggleFavorite(slug: string) {
    setFavorites((current) => current.includes(slug)
      ? current.filter((favorite) => favorite !== slug)
      : [...current, slug]);
  }

  return { favorites, toggleFavorite };
}
