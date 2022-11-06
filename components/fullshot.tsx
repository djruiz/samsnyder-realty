import { Component } from "types/component";
import FullshotImage from "assets/fullshot.webp";
import { BackgroundCircle } from "./background-circle";
import { NextGenImage } from "./next-gen-image";

export const Fullshot: Component = () => {
  return (
    <div className='drop-shadow mx-4 position-relative'>
      <BackgroundCircle />
      <div style={{ maxWidth: 400, margin: "auto" }}>
        <NextGenImage sizes="(max-width: 768px) 400px" alt="Sam Snyder Standing" width={782} height={956} src={FullshotImage} />
      </div>
    </div>
  )
}