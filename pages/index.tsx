import type { NextPage } from 'next'
import { Headline } from 'components/headline';
import { Headshot, headshotColClasses } from 'components/headshot';
import { Col } from 'react-bootstrap';
import { Backdrop } from 'components/backdrop';
import { HomeValueLeadGenForm } from 'components/home-value-lead-gen-form';
import { Overlay } from 'components/overlay';
import { Page } from 'components/page';

const Home: NextPage = () => {
  return (
    <Page>
      <Headline>
        <Col xs={12} md={5} className={headshotColClasses}>
          <Headshot />
        </Col>
        <Col xs={12} md={7}>
          <Backdrop>
            <HomeValueLeadGenForm />
          </Backdrop>
        </Col>
      </Headline>
      <Overlay></Overlay>
    </Page>
  )
}

export default Home
