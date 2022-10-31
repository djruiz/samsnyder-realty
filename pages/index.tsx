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

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Sam Snyder Realtor</title>
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
          <Section className="pt-5 mw-1100 m-auto">
            <SamSnyder />
            <div></div>
          </Section>
        </Corners>
      </Overlay>
      <About />
    </Page>
  );
};

export default Home;
