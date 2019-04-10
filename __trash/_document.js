import Document, { Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <body>
          <Main />
          <HydrationData />
          <NextScript />
        </body>
      </Html>
    );
  }
}
