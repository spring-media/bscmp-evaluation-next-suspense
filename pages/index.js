import Header from "../components/header";
import Body from "../components/body";

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
      <Header />
      <Body />
    </section>
  );
}
