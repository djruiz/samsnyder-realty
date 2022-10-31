import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <script
          async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUkaMW__Jh-cNULHhsTQ3z9vcWbbGEkAs&libraries=places"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
