import { useState } from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import { Component } from "types/component";

type Props = ImageProps & { src: StaticImageData };

export const NextGenImage: Component<Props> = ({ src, ...props }) => {
  const [imgSrc, setImgSrc] = useState<StaticImageData | string>(src);
  const fallback = src.src.replace(/\.(webp)($|\?)/, '.png$2');

  return (
    <Image
      {...props}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallback);
      }}
    />
  );
}