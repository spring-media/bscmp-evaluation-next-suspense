import Header from "../components/header";
import Body from "../components/body";
import { Lead, HydrationData } from "../packages/super-intendent";

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
      <HydrationData />
    </section>
  );
}
