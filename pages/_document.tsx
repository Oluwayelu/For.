import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://www.dfonts.org/fonts/apparel-font-family/"
            rel="stylesheet"
          />
          <link
            href="https://www.dafontfree.io/gilroy-font-family/"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-primary-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
