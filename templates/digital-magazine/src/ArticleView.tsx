import { useEffect, useRef, useState } from "react";
import { relatedArticles, type Article } from "./content";
import { ArticleList, ArticleMeta, CategoryLink, SaveButton, type FavoriteActions } from "./ArticleList";

export function ArticleView({ article, ...favorites }: { article: Article } & FavoriteActions) {
  const story = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = story.current;
    if (!element) return;

    function updateProgress() {
      if (!element) return;
      const bounds = element.getBoundingClientRect();
      const distance = Math.max(1, bounds.height - window.innerHeight);
      const progress = bounds.bottom <= window.innerHeight ? 1 : Math.max(0, -bounds.top / distance);
      setProgress(Math.min(100, Math.round(progress * 100)));
    }

    updateProgress();
    const observer = new ResizeObserver(updateProgress);
    observer.observe(element);
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <>
      <progress className="reading-progress" max={100} value={progress} aria-label="Progreso de lectura" />
      <article className="full-article" ref={story}>
        <header className="article-heading reading-column mx-auto">
          <CategoryLink article={article} />
          <h1>{article.title}</h1>
          <p>{article.summary}</p>
          <div className="story-byline">
            <ArticleMeta article={article} showDate />
            <SaveButton article={article} {...favorites} />
          </div>
        </header>
        {article.image && <img className="story-image" src={article.image.src} alt={article.image.alt} width={1536} height={1024} />}
        <div className="reading-column article-body mx-auto">
          {article.sections.map(({ heading, paragraphs }) => (
            <section key={heading}>
              <h2>{heading}</h2>
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </article>
      <section className="issue-section" aria-labelledby="related-title">
        <div className="section-heading"><h2 id="related-title">Artículos relacionados</h2></div>
        <ArticleList articles={relatedArticles(article)} heading="h3" {...favorites} />
      </section>
    </>
  );
}
