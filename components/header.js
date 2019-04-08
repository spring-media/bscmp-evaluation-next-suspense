import HeroArticle from "./heroArticle";
import Article from "./article";
import DocumentProxyContext from "../context/documentProxy";
import loadRuntime from "../packages/super-intendent/loadRuntime";

export default function Header({ heroSpan = "1 / 4" }) {
  loadRuntime();
  return (
    <DocumentProxyContext.Consumer>
      {context => (
        <header>
          <style jsx>{`
            header {
              display: grid;
              grid-gap: 2%;
              grid-template-columns: 32% 32% 32%;
              background-color: #edece8;
              color: #444;
              padding: 10px;
            }
          `}</style>
          <HeroArticle span={heroSpan} />
          <Article column={1} />
          <Article column={2} />
          <Article column={3} />
        </header>
      )}
    </DocumentProxyContext.Consumer>
  );
}
