import HeroArticle from "./heroArticle";
import Article from "./article";
import DocumentProxyContext from "../context/documentProxy";

export default function Header() {
  return (
    <DocumentProxyContext.Consumer>
      {context => {
        setTimeout(() => console.log(context), 1000);
        return (
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
            <HeroArticle span="1 / 4" />
            <Article column={1} />
            <Article column={2} />
            <Article column={3} />
          </header>
        );
      }}
    </DocumentProxyContext.Consumer>
  );
}
