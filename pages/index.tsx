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
import { GoogleReviews } from 'components/google-reviews';

const Home: NextPage = () => {
  return (
    <Page>
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
          <Section def={[12, 12]} md={[6, 6]} className="pt-5 mw-1100 m-auto">
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
