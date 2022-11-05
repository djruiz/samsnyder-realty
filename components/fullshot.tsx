import { Component } from "types/component";
import FullshotImage from "assets/fullshot.webp";
import Image from "next/image";
import { BackgroundCircle } from "./background-circle";

export const Fullshot: Component = () => {
  return (
    <div className='drop-shadow mx-4 position-relative'>
      <BackgroundCircle />
      <div style={{ maxWidth: 400, margin: "auto" }}>
        <Image alt="Sam Snyder Standing" width={782} height={956} src={FullshotImage} />
      </div>
    </div>
  )
}