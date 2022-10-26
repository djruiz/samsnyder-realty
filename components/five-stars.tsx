import Image from "next/image";
import FiveStarsImage from "assets/five-stars.png";

export const FiveStars = () => {
  return (
    <div>
      <Image width={120} height={31} src={FiveStarsImage} />
    </div>
  )
}