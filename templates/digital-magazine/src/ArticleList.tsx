import { authorName, categories, publishedDate, readingMinutes, type Article } from "./content";
import { articleLink, categoryLink } from "./navigation";

export interface FavoriteActions {
  favorites: string[];
  toggleFavorite: (slug: string) => void;
}

export function SaveButton({ article, favorites, toggleFavorite }: { article: Article } & FavoriteActions) {
  const saved = favorites.includes(article.slug);
  return (
    <button
      type="button"
      className="save-button"
      aria-label={`Guardar «${article.title}» en favoritos`}
      aria-pressed={saved}
      onClick={() => toggleFavorite(article.slug)}
    >
      <span aria-hidden="true" className="bookmark" />
      {saved ? "Guardado" : "Guardar"}
    </button>
  );
}

export function ArticleMeta({ article, showDate = false }: { article: Article; showDate?: boolean }) {
  return (
    <div className="article-meta">
      <span>{authorName(article)}</span>
      {showDate && <time dateTime={article.published}>{publishedDate(article)}</time>}
      <span>{readingMinutes(article)} min de lectura</span>
    </div>
  );
}

export function CategoryLink({ article }: { article: Article }) {
  return <a className="category-label" href={categoryLink(article.category)}>{categories[article.category].label}</a>;
}

export function ArticleList({
  articles, heading: Heading = "h2", ...favorites
}: { articles: Article[]; heading?: "h2" | "h3" } & FavoriteActions) {
  return (
    <ul className="publication-list">
      {articles.map((article) => (
        <li key={article.slug}>
          <article className="publication" data-image={Boolean(article.image)}>
            {article.image && <img src={article.image.src} alt={article.image.alt} loading="lazy" width={1536} height={1024} />}
            <div className="publication-copy">
              <CategoryLink article={article} />
              <Heading className="publication-title"><a href={articleLink(article.slug)}>{article.title}</a></Heading>
              <p>{article.summary}</p>
              <ArticleMeta article={article} />
            </div>
            <SaveButton article={article} {...favorites} />
          </article>
        </li>
      ))}
    </ul>
  );
}
