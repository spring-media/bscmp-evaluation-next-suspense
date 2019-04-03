import Article from "./article";

export default function Header() {
  return (
    <header>
      <style jsx>{`
        header {
          display: grid;
          grid-gap: 2%;
          grid-template-columns: 32% 32% 32%;
          color: #444;
          padding: 10px;
        }
      `}</style>
      <Article column="1 / 1" />
      <Article column="2 / 2" />
      <Article column="3 / 3" />

      <Article column="1 / 1" />
      <Article column="2 / 2" />
      <Article column="3 / 3" />

      <Article column="1 / 1" />
      <Article column="2 / 2" />
      <Article column="3 / 3" />

      <Article column="1 / 1" />
      <Article column="2 / 2" />
      <Article column="3 / 3" />

      <Article column="1 / 1" />
      <Article column="2 / 2" />
      <Article column="3 / 3" />

      <Article column="1 / 1" />
      <Article column="2 / 2" />
      <Article column="3 / 3" />

      <Article column="1 / 1" />
      <Article column="2 / 2" />
      <Article column="3 / 3" />

      <Article column="1 / 1" />
      <Article column="2 / 2" />
      <Article column="3 / 3" />

      <Article column="1 / 1" />
      <Article column="2 / 2" />
      <Article column="3 / 3" />

      <Article column="1 / 1" />
      <Article column="2 / 2" />
      <Article column="3 / 3" />
    </header>
  );
}
