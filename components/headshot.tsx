import { Component } from "types/component";
import HeadshotImage from "assets/headshot.webp";
import { NextGenImage } from "./next-gen-image";

export const Headshot: Component = () => {
  return (
    <div className='drop-shadow position-relative' style={{ bottom: "-10px", zIndex: 0 }}>
      <NextGenImage alt="Sam Snyder Headshot" width={722} height={706} src={HeadshotImage} />
    </div>
  )
}

// Use this when using the headshot in a column (positions headshot at the end of the column vertically)
export const headshotColClasses = ["d-none", "d-md-flex", "align-items-end"].join(" ")
