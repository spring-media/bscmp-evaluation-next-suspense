import Document, {
  Html,
  Head,
  Main,
  NextScript as OriginalNextScript
} from "next/document";
import CustomNextScript from "../components/customNextScript";
import NextScript from "../packages/super-performace";

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
          {/* <OriginalNextScript /> */}
        </body>
      </Html>
    );
  }
}
