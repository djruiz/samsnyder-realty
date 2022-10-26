import { Component } from "types/component"
import { Row, Col, FormControl } from "react-bootstrap"

export const ContactInfo: Component = () => {
  return (
    <Row className={formGutterClasses}>
      <Col xs={6} md={4}>
        <FormControl type="text" placeholder="First Name" />
      </Col>
      <Col xs={6} md={4}>
        <FormControl type="text" placeholder="Last Name" />
      </Col>
      <Col xs={12} md={4}>
        <FormControl type="email" name="email" placeholder="Email" />
      </Col>
    </Row>
  )
}

const text = (title: string) => ({ placeholder: title, type: "text", className: "p-2" })
const formGutterClasses = ["gx-2", "gy-4", "gy-md-0"].join(" ")