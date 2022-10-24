import React from "react";
import { Col, Row } from "react-bootstrap";
import { Component } from "types/component";

interface Props {
  def?: number[],
  sm?: number[],
  md?: number[],
  lg?: number[],
  classNames?: string[],
}

export const Section: Component<Props> = ({ children, def, sm, md, lg, classNames }) => {
  const columns = children || [];

  const layout = {
    xs: def || [],
    sm: sm || [],
    md: md || [],
    lg: lg || []
  };

  const getLayout = (i: number) => ({
    xs: layout.xs[i],
    sm: layout.sm[i],
    md: layout.md[i],
    lg: layout.lg[i],
    className: classNames?.[i]
  });

  return <Row>{React.Children.map(columns, (col, i) => <Col {...getLayout(i)}>{col}</Col>)}</Row>
}