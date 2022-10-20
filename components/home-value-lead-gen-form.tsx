import content from "assets/content.json"
import { Form, Button } from "react-bootstrap"
import { Component } from "types/component"
import { Address } from "./address"
import { ContactInfo } from "./contact-info"

export const HomeValueLeadGenForm: Component = () => {
  return (
    <div>
      <h1>{content.homeValueLeadGenForm.heading}</h1>
      <p>{content.homeValueLeadGenForm.subheading}</p>
      <Form>
        <ContactInfo />
        <Address />
        <Button className='btn btn-primary btn-gradient-primary btn-lg px-5 shadow'>
          {content.homeValueLeadGenForm.callToAction}
        </Button>
      </Form>
    </div>
  )
}