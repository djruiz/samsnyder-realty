import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href={process.env.NEXT_PUBLIC_BASE_PATH + "/favicon.png"} />
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
