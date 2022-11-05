import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <div id="root"></div>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
