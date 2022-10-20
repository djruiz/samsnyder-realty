import { Component } from "types/component"
import { Row, Col, FormControl } from "react-bootstrap"

export const ContactInfo: Component = () => {
  return (
    <Row className={formGutterClasses}>
      <Col xs={6} md={4}>
        <FormControl {...text("First Name")} />
      </Col>
      <Col xs={6} md={4}>
        <FormControl {...text("Last Name")} />
      </Col>
      <Col xs={12} md={4}>
        <FormControl {...text("Email")} />
      </Col>
    </Row>
  )
}

const text = (title: string) => ({ placeholder: title, type: "text", className: "p-2" })
const formGutterClasses = ["gx-2", "gy-2", "gy-md-0"].join(" ")