import type { NextPage } from "next";
import { Page } from "components/page";
import { Value } from "components/value";
import Head from "next/head";

const HomeValue: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Home Value</title>
      </Head>
      <Value />
    </Page>
  );
};

export default HomeValue;
