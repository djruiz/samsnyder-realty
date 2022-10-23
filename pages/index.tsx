import type { NextPage } from 'next'
import { Headline } from 'components/headline';
import { Headshot, headshotColClasses } from 'components/headshot';
import { Backdrop } from 'components/backdrop';
import { HomeValueLeadGenForm } from 'components/home-value-lead-gen-form';
import { Overlay } from 'components/overlay';
import { Page } from 'components/page';
import { Section } from 'components/section';

const Home: NextPage = () => {
  return (
    <Page>
      <Headline>
        <Section def={[12, 12]} md={[6, 6]} classNames={[headshotColClasses]}>
          <Headshot />
          <Backdrop>
            <HomeValueLeadGenForm />
          </Backdrop>
        </Section>
      </Headline>
      <Overlay>

      </Overlay>
    </Page>
  )
}

export default Home
