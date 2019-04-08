import { Lead } from "../packages/super-intendent";
import Header from "../components/header";
import Body from "../components/body";
import loadRuntime from "../packages/super-intendent/loadRuntime";

export default function Home() {
  return (
    <section>
      <style jsx>{`
        section {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
      <Lead>
        <Header heroSpan="1 / 4" />
      </Lead>
      <Body />
    </section>
  );
}

Home.getInitialProps = async function() {
  await loadRuntime();
  const asd = "asd";
  return { asd };
};
