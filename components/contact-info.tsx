import { Component } from "types/component"
import { Row, Col } from "react-bootstrap"
import { ErrorMessage, Field } from "formik"

export const ContactInfo: Component = () => {
  return (
    <Row className={formGutterClasses}>
      <Col xs={6} md={4}>
        <Field className="form-control" type="text" name="firstName" placeholder="First Name" />
        <ErrorMessage className="text-danger text-start" name="firstName" component="small" />
      </Col>
      <Col xs={6} md={4}>
        <Field className="form-control" type="text" name="lastName" placeholder="Last Name" />
        <ErrorMessage className="text-danger text-start" name="lastName" component="small" />
      </Col>
      <Col xs={12} md={4}>
        <Field className="form-control" type="email" name="email" placeholder="Email" />
        <ErrorMessage className="text-danger text-start" name="email" component="small" />
      </Col>
    </Row>
  )
}

const formGutterClasses = ["gx-2", "gy-2", "gy-md-0"].join(" ")