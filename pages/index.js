import { Lead } from "../packages/super-intendent";
import Header from "../components/header";
import dynamic from "next/dynamic";
import Body from "../components/body";
const LoadHydrationRuntime = dynamic(() =>
  import("../packages/super-intendent/loadRuntime")
);

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
      <LoadHydrationRuntime />
    </section>
  );
}
