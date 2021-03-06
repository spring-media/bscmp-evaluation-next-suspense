import HeroArticle from "./heroArticle";
import Article from "./article";

export default function Header({ heroSpan = "1 / 4" }) {
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
      <HeroArticle span={heroSpan} />
      <Article column={1} />
      <Article column={2} />
      <Article column={3} />
    </header>
  );
}
