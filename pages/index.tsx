import { Corners } from "components/corners";
import { SamSnyder } from "components/sam-snyder";
import type { NextPage } from "next";
import { Headline } from "components/headline";
import { Headshot, headshotColClasses } from "components/headshot";
import { Backdrop } from "components/backdrop";
import { HomeValueLeadGenForm } from "components/home-value-lead-gen-form";
import { Overlay } from "components/overlay";
import { Page } from "components/page";
import { Section } from "components/section";
import { About } from "components/about";
import Head from "next/head";
import { GoogleReviews } from "components/google-reviews";
import React from "react";

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Sam Snyder Realtor</title>
        <meta name="description" content="Sam Snyder is an expert realtor from Fort Wayne, IN. He's been through thousands of homes and hundreds of real estate transactions. He simplifies the home buying process and has systems that avoid aheadaches and get the client the best deal possible." />
        <meta name="keywords" content="Fort Wayne Realtor, Sam Snyder Realtor" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Headline>
        <Section def={[12, 12]} md={[5, 7]} classNames={[headshotColClasses]}>
          <Headshot />
          <Backdrop>
            <HomeValueLeadGenForm />
          </Backdrop>
        </Section>
      </Headline>
      <Overlay>
        <Corners>
          <Section def={[12, 12]} md={[6, 6]} className="py-5 mw-1100 m-auto">
            <SamSnyder />
            <GoogleReviews />
          </Section>
        </Corners>
      </Overlay>
      <About />
    </Page>
  );
};

export default Home;
