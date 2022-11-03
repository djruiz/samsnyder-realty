import { StaticImageData } from "next/image";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import { Component } from "types/component";
import { FiveStars } from "./five-stars";

interface Props {
  profilePic: StaticImageData;
  name: string;
  review: string;
  date: string;
}

export const GoogleReview: Component<Props> = ({
  date,
  profilePic,
  name,
  review,
}) => {
  return (
    <div className="m-auto" style={{ maxWidth: "500px" }}>
      <Row>
        <Col sm={2}>
          <Image src={profilePic} alt="review-user-profile-picture" />
        </Col>
        <Col sm={10} className="align-self-center">
          <p>{name}</p>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="">
          <FiveStars />
        </Col>
        <Col className="" style={{ transform: "translateX(-25px)" }}>
          <p>{date}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{review}</p>
        </Col>
      </Row>
    </div>
  );
};
