import { Component } from "types/component";
import { Section } from "./section";
import Image from "next/image";
import FiveStarsImage from "assets/five-stars.png";

interface Props {
  name: string,
  keywords: string[],
  content: string,
  id: string
}

export const Review: Component<Props> = ({ name, keywords }) => {
  return (
    <Section def={[12, 12]}>
      <Image src={FiveStarsImage} />
      <div>
        <h5><b>{name}</b></h5>
        <a href=""></a>
        <p className="text-dark"><b>Positive:{" "}</b>{keywords.join(", ")}</p>
      </div>
    </Section>
  )
}