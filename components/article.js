export default function Article({ column = "1 / 1" }) {
  return (
    <article onClick={() => console.log(column)}>
      <style jsx>{`
        article {
          grid-column: ${column};
        }
      `}</style>
      <h1>Fermentum Amet Aenean</h1>
      <p>
        Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
    </article>
  );
}
