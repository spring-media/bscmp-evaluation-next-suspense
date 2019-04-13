import Article, { ArticleAsClass } from "./article";
import useAsHydrationWrapper from "../packages/super-intendent/useAsHydrationWrapper";

const HydratedArticle = useAsHydrationWrapper(Article);
const HydratedArticleAsClass = useAsHydrationWrapper(ArticleAsClass);

export default function Header() {
  return (
    <main id="main-container">
      <style jsx>{`
        main {
          display: grid;
          grid-gap: 2%;
          grid-template-columns: 32% 32% 32%;
          color: #444;
          padding: 10px;
        }
      `}</style>

      {/* <div id="test">
        <Article column={1} />
      </div>

      <HydratedArticleAsClass column={1} />
      <HydratedArticle column={2} />
      <HydratedArticle column={3} /> */}

      <Article column={1} />
      <Article column={2} />
      <Article column={3} />

      <Article column={1} />
      <Article column={2} />
      <Article column={3} />

      <Article column={1} />
      <Article column={2} />
      <Article column={3} />

      <Article column={1} />
      <Article column={2} />
      <Article column={3} />

      <Article column={1} />
      <Article column={2} />
      <Article column={3} />

      <Article column={1} />
      <Article column={2} />
      <Article column={3} />

      <Article column={1} />
      <Article column={2} />
      <Article column={3} />
    </main>
  );
}
