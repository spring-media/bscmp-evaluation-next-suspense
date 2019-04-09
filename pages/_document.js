import Document, { Html, Main, NextScript } from "next/document";
import PerformanceScript from "../packages/super-performace";

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
          <NextScript />
          <PerformanceScript />
          {/*  */}
        </body>
      </Html>
    );
  }
}
