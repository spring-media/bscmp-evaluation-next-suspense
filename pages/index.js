import { asLead } from "../packages/super-intendent";
import Header from "../components/header";
import Body from "../components/body";

const Lead = asLead(Header);

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
      <Lead heroSpan="1 / 4" />
      <Body />
    </section>
  );
}
