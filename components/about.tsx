import { Row, Col } from "react-bootstrap";
import { Component } from "types/component";
import { InstagramEmbed } from "react-social-media-embed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import content from "assets/content";

export const About: Component = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, #011A41, #5A77DE)",
      }}
    >
      <div className="m-auto" style={{ maxWidth: "1300px" }}>
        <Row>
          <Col sm={12} md={{ span: 6, order: 2 }}>
            <div
              className="p-4 m-4 rounded shadow"
              style={{
                color: "#fff",
                backgroundImage:
                  "linear-gradient(305deg, #D88C74 -100% 0%, #D88C7400 120% 100%)",
                border: "2px solid #FFA487",
              }}
            >
              <h1>About Sam</h1>
              <h2>
                <span style={{ fontSize: "50px" }}>"</span>
                {content.about.heading}
              </h2>
              <div>{content.about.body}</div>
              <a>
                <button
                  className="p-2 rounded"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5%",
                    color: "#D88C74",
                    border: "none",
                  }}
                >
                  <FontAwesomeIcon className="pe-2" icon={faCalendarDays as IconProp} /> Schedule
                  a Chat
                </button>
              </a>
            </div>
          </Col>
          <Col
            sm={12}
            md={{ span: 6, order: 1 }}
            style={{ alignSelf: "center" }}
          >
            <div className="p-4" style={{}}>
              <InstagramEmbed
                url={"https://www.instagram.com/yourlocalexpertsam/"}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
