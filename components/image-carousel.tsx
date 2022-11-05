import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { Component } from "types/component"
import Spinner from 'react-bootstrap/Spinner';

interface Props {
  images: string[]
}

export const ImageCarousel: Component<Props> = ({ images }) => {
  const [displayImageIndex, setDisplayImageIndex] = React.useState(0);

  function getPreviousImageIndex(behind: number): number {
    if (displayImageIndex < 1) {
      return images.length - behind == displayImageIndex ? 9999 : images.length - behind
    } else {
      return displayImageIndex - behind
    }
  }

  function getFollowingImageIndex(ahead: number): number {
    if (displayImageIndex > images.length - 2) {
      return 0 + ahead
    } else {
      return displayImageIndex + ahead
    }
  }

  const prev2 = images[getPreviousImageIndex(2)];
  const prev1 = images[getPreviousImageIndex(1)];
  const current = images[displayImageIndex];
  const foll1 = images[getFollowingImageIndex(1)];
  const foll2 = images[getFollowingImageIndex(2)];

  const imagePreviews = [prev2, prev1, current, foll1, foll2];

  function incrementImageIndex() {
    if (!prev1) return;

    const i = getFollowingImageIndex(1);
    setDisplayImageIndex(i);
  }

  function decrementImageIndex() {
    if (!foll1) return;

    const i = getPreviousImageIndex(1);
    setDisplayImageIndex(i);
  }

  return (
    <div className="rounded shadow position-relative d-flex align-items-center justify-content-center" style={{ height: 400, overflow: "hidden", backgroundColor: "#ccc" }}>
      <div onClick={() => decrementImageIndex()} className="position-absolute text-primary shadow d-flex align-items-center justify-content-center pointer" style={{ width: 50, height: "100%", backgroundColor: "#FFFFFF60", zIndex: 2, left: 0 }}>
        <FontAwesomeIcon className="drop-shadow" size="5x" icon={faCaretLeft} />
      </div>
      <div onClick={() => incrementImageIndex()} className="position-absolute text-primary shadow d-flex align-items-center justify-content-center pointer" style={{ width: 50, height: "100%", backgroundColor: "#FFFFFF60", zIndex: 2, right: 0 }}>
        <FontAwesomeIcon className="drop-shadow" size="5x" icon={faCaretRight} />
      </div>
      <div>
        <Spinner variant="primary" animation="border" />
      </div>
      <Image layout="fill" objectFit="cover" src={current} alt="Current Home Image" />
      <div style={{ bottom: 25 }} className="d-flex position-absolute">
        {imagePreviews.map((src, i) => (
          src == undefined ? <span></span> : <div
            key={src}
            style={{ width: 50, height: 50, backgroundColor: "#ccc" }}
            className={"rounded shadow overflow-hidden mx-1 position-relative " + (i == 2 ? "border border-primary" : " border border-secondary")}>
            <div className="position-absolute" style={{ transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}>
              <Spinner size="sm" variant="primary" animation="border" />
            </div>
            <Image alt="Preview Image" className="position-absolute" width={50} height={50} objectFit="cover" src={src} />
          </div>
        ))}
      </div>
    </div>
  )
}