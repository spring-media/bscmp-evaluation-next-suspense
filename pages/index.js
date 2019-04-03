import Header from "../components/header";

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
    </section>
  );
}
