import React, { Component } from "react";

export default function Article({ column = "1" }) {
  return (
    <article onClick={() => console.log("clickedOnArticle")}>
      <style jsx>{`
        article {
          grid-column: ${column} / ${column};
        }
      `}</style>
      <h1>Fermentum Amet Aenean</h1>
      <p onClick={() => console.log("clickedOnP", column)}>
        Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
    </article>
  );
}

export class ArticleAsClass extends Component {
  componentDidMount() {
    console.log("ArticleAsClass did mount");
  }

  render() {
    return Article(this.props);
  }
}
