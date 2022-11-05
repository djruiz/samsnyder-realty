import { Row, Col } from "react-bootstrap";
import { Component } from "types/component";
import { InstagramEmbed } from "react-social-media-embed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import content from "assets/content";
import quote from "assets/quote.png";
import Image from "next/image";
import Link from "next/link";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

export const About: Component = () => {
  const [root, setRoot] = useState<HTMLDivElement>();

  useEffect(() => {
    const root = document.getElementById("root") as HTMLDivElement;
    setRoot(root)
  }, [])

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, #011A41, #5A77DE)",
      }}
    >
      <div className="m-auto py-5 px-2 px-md-5" style={{ maxWidth: "1300px" }}>
        <Row className="flex-row-reverse m-0">
          <Col className="p-0" sm={12} md={{ span: 7, order: 2 }}>
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
              <div className="d-flex">
                <div className="me-4">
                  <Image src={quote} alt="Quote mark" height={44} width={65} />
                </div>
                <h2>{content.about.heading}</h2>
              </div>

              <div style={{ fontSize: 18 }}>{content.about.body}</div>
              <div>
                {root && <PopupButton
                  url="https://calendly.com/swilliamsnyder/letschat"
                  rootElement={root}
                  text="Schedule a Chat"
                  className="btn btn-primary font-monospace shadow px-3 py-2 rounded"
                />}
              </div>
            </div>
          </Col>
          <Col
            className="p-0"
            sm={12}
            md={{ span: 5, order: 1 }}
            style={{ alignSelf: "center" }}
          >
            <div className="mx-0 mx-md-5">
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
