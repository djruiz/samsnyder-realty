import { Row, Col } from "react-bootstrap";
import { Component } from "types/component";
import content from "assets/content";
import quote from "assets/quote.webp";
import { PopupButton } from "react-calendly";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { NextGenImage } from "./next-gen-image";
const InstagramEmbed = dynamic(import('react-social-media-embed').then(mod => mod.InstagramEmbed), { ssr: false })

export const About: Component = () => {
  const instaEmbedRef = useRef<HTMLDivElement>(null);
  const [root, setRoot] = useState<HTMLDivElement>();

  function tryAddIframeTitle(i = 0) {
    const iframe = instaEmbedRef.current?.querySelector("iframe");
    if (iframe) {
      iframe.setAttribute("title", "Instagram embed")
    } else {
      if (i == 10) {
        return;
      }
      setTimeout(() => tryAddIframeTitle(i + 1), 500)
    }
  }

  useEffect(() => {
    const root = document.getElementById("root") as HTMLDivElement;
    setRoot(root)
    tryAddIframeTitle()
  }, [])

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, #011A41, #5A77DE)",
      }}
    >
      <div className="m-auto py-3 py-md-5 px-2 px-md-5" style={{ maxWidth: "1300px" }}>
        <Row className="flex-row-reverse m-0">
          <Col className="p-0" sm={12} md={{ span: 7, order: 2 }}>
            <div
              className="p-4 mb-3 me-md-5 rounded shadow"
              style={{
                color: "#fff",
                backgroundImage:
                  "linear-gradient(305deg, #D88C74 -100% 0%, #D88C7400 120% 100%)",
                border: "2px solid #FFA487",
              }}
            >
              <h1>About Sam</h1>
              <hr />
              <div className="d-flex">
                <div className="me-4">
                  <NextGenImage src={quote} alt="Quote mark" height={44} width={65} />
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
            <div ref={instaEmbedRef} className="mx-0 mx-md-5">
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
