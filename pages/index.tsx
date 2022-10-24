import type { NextPage } from "next";
import { Headline } from "components/headline";
import { Headshot, headshotColClasses } from "components/headshot";
import { Col } from "react-bootstrap";
import { Backdrop } from "components/backdrop";
import { HomeValueLeadGenForm } from "components/home-value-lead-gen-form";
import { About } from "components/about";

const Home: NextPage = () => {
  return (
    <div>
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
      <div
        className="bg-white position-relative"
        style={{ minHeight: "100px", zIndex: 1 }}
      ></div>
      <About />
    </div>
  );
};

export default Home;
