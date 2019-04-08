import Article from "./article";
import { Hydrate } from "../packages/super-intendent";

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
      <Hydrate>
        <Article column={1} />
        <Article column={2} />
        <Article column={3} />
      </Hydrate>

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

      <Article column={1} />
      <Article column={2} />
      <Article column={3} />

      <Article column={1} />
      <Article column={2} />
      <Article column={3} />
    </main>
  );
}
