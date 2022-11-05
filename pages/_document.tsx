import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Sam Snyder Realtor</title>
        <script
          src="//code.tidio.co/hdwlba6dcvr0ynexid5neye6ltmsqp6c.js"
          async
        ></script>
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
