import { StaticImageData } from "next/image";
import Image from "next/image";
import { Component } from "types/component";
import { FiveStars } from "./five-stars";

interface Props {
  name: string;
  review: string;
  date: string;
  color: string;
}

export const GoogleReview: Component<Props> = ({
  date,
  name,
  review,
  color
}) => {
  return (
    <div className="px-2 mb-4" style={{}}>
      <div className="d-flex align-items-center">
        <div style={{ height: 35, width: 35, backgroundColor: color }} className="rounded-circle d-flex justify-content-center align-items-center shadow-sm">
          <p className="m-0 p-0 fs-4 text-white">{name[0]}</p>
        </div>
        <b>
          <p className="ms-2 my-0">{name}</p>
        </b>
      </div>
      <div className="d-flex align-items-center mt-2">
        <FiveStars />
        <p className="m-0 ms-2 text-muted">{date}</p>
      </div>
      <p>{review}</p>
    </div>
  );
};
