import { Component } from "types/component";
import Image from "next/image";
import HeadshotImage from "assets/headshot.webp";

export const Headshot: Component = () => {
  return (
    <div className='drop-shadow position-relative' style={{ bottom: "-10px", zIndex: 0 }}>
      <Image alt="Sam Snyder Headshot" width={722} height={706} src={HeadshotImage} />
    </div>
  )
}

// Use this when using the headshot in a column (positions headshot at the end of the column vertically)
export const headshotColClasses = ["d-none", "d-md-flex", "align-items-end"].join(" ")
