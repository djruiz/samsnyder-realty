import { Component } from "types/component"

interface Props {
  quotes: string[]
}

export const Quotes: Component<Props> = ({ quotes }) => {
  return (
    <h2 className="text-primary m-0" style={{ fontSize: 18 }}>
      {quotes.map(quote => `"${quote}"`).join(", ")}
    </h2>
  )
}