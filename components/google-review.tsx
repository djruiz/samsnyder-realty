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
    <div className="px-2 mb-4" style={{}}>
      <div className="d-flex align-items-center">
        <Image
          height={35}
          width={35}
          src={profilePic}
          alt="review-user-profile-picture"
        />
        <b>
          <p className="ms-2 my-0">{name}</p>
        </b>
      </div>
      <div className="d-flex align-items-center">
        <FiveStars />
        <p className="mb-2 text-muted">{date}</p>
      </div>
      <p>{review}</p>
    </div>
  );
};
