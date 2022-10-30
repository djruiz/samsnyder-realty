import { Fullshot } from "./fullshot";
import { Col, Row } from "react-bootstrap";
import Placeholder from "assets/placeholder.webp";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export const Value = () => {
  return (
    <div className="pb-5 home-value-ff">
      <div className="esv-container">
        <Row className="mw-1100 m-auto">
          <Col sm={12} md={{ span: 6, order: 2 }} className="">
            <div className="my-4">
              <h1 id="address">
                <b>23100 Address Lane, Indiana City, Indiana</b>
              </h1>
              <h2 id="house-desc">Residential, Single Family Residence</h2>
            </div>
            <div className="esv-data rounded my-4">
              <h1 className="esv-value">Estimated Home Value</h1>
              <h2 className="pricing-status">$68,000 - $131,000</h2>
              <h3 className="sold-date">Sold: $78,769 • On 08/30/21</h3>
            </div>
          </Col>
          <Col sm={12} md={{ span: 6, order: 1 }}>
            <div className="home-pic rounded">
              <Image src={Placeholder} />
            </div>
            <div className="home-desc rounded">
              Completely updated home with 2 bedrooms up and 2 bedrooms down.
              Features new flooring, and windows. New updated kitchen with
              plenty of cabinetry, title back splash, and counter tops. Includes
              stainless steel gas stove and refriderator. Check out this
              beautiful, large bathroom. Several barn doors are installed in
              different rooms to save space and create some character. Full Dry
              basement. Laundry hook ups are upstairs. Large, back yard is fully
              fenced in with shed.
            </div>
          </Col>
        </Row>
      </div>
      <Row className="mw-1100 m-auto">
        <Col sm={12} md={6}>
          <Fullshot />
        </Col>
        <Col sm={12} md={6}>
          <div className="cta-copy my-4">
            <h1>Let’s take the next step together!</h1>
            <p>
              Whether you are ready to sell your home, or just want to ask a few
              questions, Sam Snyder is here to help. Schedule a time on my
              calendar and I will talk you through how we can turn your dream
              into a reality.
            </p>
            <button
              style={{ width: "100%" }}
              className="btn btn-primary btn-gradient-primary btn-lg px-5 shadow"
            >
              <FontAwesomeIcon
                className="pe-2"
                icon={faCalendarDays as IconProp}
              />
              Schedule A Chat
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
