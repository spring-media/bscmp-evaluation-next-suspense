import React, { Component } from "react";
import Article, { ArticleAsClass } from "./article";
import Hydrate from "../packages/super-intendent/hydrate";

function useAsHydrationWrapper(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <Hydrate>
          <WrappedComponent {...this.props} />
        </Hydrate>
      );
    }
  };
}

const HydratedArticle = useAsHydrationWrapper(Article);
const HydratedArticleAsClass = useAsHydrationWrapper(ArticleAsClass);

export default function Header() {
  return (
    <main>
      <style jsx>{`
        main {
          display: grid;
          grid-gap: 2%;
          grid-template-columns: 32% 32% 32%;
          color: #444;
          padding: 10px;
        }
      `}</style>

      <HydratedArticleAsClass column={1} />
      <HydratedArticle column={2} />
      <HydratedArticle column={3} />

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
