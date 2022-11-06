import { Component } from "types/component";
import FortWayneImage from "assets/fort-wayne.webp";
import { NextGenImage } from "./next-gen-image";

export const Headline: Component = ({ children }) => {
  return (
    <div className='w-100' style={{ background: 'linear-gradient(90deg, #0024A150, #00000000, #FFA48750)', backgroundSize: "cover", boxShadow: "inset 0 0 15px 5px #00000050" }}>
      <NextGenImage width="100vw" style={{ position: "relative", zIndex: -1 }} layout="fill" objectPosition="cover" src={FortWayneImage} />
      <div className='container mw-1100'>
        {children}
      </div>
    </div>
  )
}