import content from "assets/content.json"
import { Form, Button } from "react-bootstrap"
import { Component } from "types/component"
import { Address } from "./address"
import { ContactInfo } from "./contact-info"

export const HomeValueLeadGenForm: Component = () => {
  return (
    <div>
      <h1 style={{ fontSize: 52 }}>{content.homeValueLeadGenForm.heading}</h1>
      <p style={{ fontSize: 18 }}>{content.homeValueLeadGenForm.subheading}</p>
      <Form>
        <div className="mb-4">
          <ContactInfo />
          <Address />
        </div>
        <Button style={{ zIndex: 1 }} className='position-relative btn btn-primary btn-gradient-primary btn-lg px-5 shadow'>
          {content.homeValueLeadGenForm.callToAction}
        </Button>
      </Form>
    </div>
  )
}