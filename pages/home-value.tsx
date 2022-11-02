import type { NextPage } from "next";
import { Page } from "components/page";
import { Home } from "components/home";
import { Head } from "next/document";

const HomeValue: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Home Value</title>
      </Head>
      <Home />
    </Page>
  );
};

export default HomeValue;
