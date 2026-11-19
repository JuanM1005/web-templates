import { articles, coverArticleSlug } from "./content";
import { ArticleList, ArticleMeta, CategoryLink, SaveButton, type FavoriteActions } from "./ArticleList";
import { articleLink } from "./navigation";

export function Home(favorites: FavoriteActions) {
  const cover = articles.find(({ slug }) => slug === coverArticleSlug) ?? articles[0];
  const latest = articles.filter(({ slug }) => slug !== cover.slug);

  return (
    <>
      <section className="cover" aria-labelledby="cover-title">
        {cover.image && (
          <div className="cover-figure">
            <img src={cover.image.src} alt={cover.image.alt} width={1536} height={1024} fetchPriority="high" />
          </div>
        )}
        <div className="cover-copy">
          <div className="cover-desk"><span>En portada</span><CategoryLink article={cover} /></div>
          <h2 id="cover-title"><a href={articleLink(cover.slug)}>{cover.title}</a></h2>
          <p>{cover.summary}</p>
          <ArticleMeta article={cover} showDate />
          <div className="cover-actions">
            <a className="read-link" href={articleLink(cover.slug)} aria-label={`Leer artículo: ${cover.title}`}>Leer artículo</a>
            <SaveButton article={cover} {...favorites} />
          </div>
        </div>
      </section>
      <section className="issue-section" aria-labelledby="latest-title">
        <div className="section-heading">
          <h2 id="latest-title">Últimas publicaciones</h2>
          <span className="edition">Noviembre 2026</span>
        </div>
        <ArticleList articles={latest} heading="h3" {...favorites} />
      </section>
    </>
  );
}
