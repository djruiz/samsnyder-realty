import content from "assets/content"
import { Formik, Form } from "formik"
import { Button } from "react-bootstrap"
import { Component } from "types/component"
import { Address } from "./address"
import { ContactInfo } from "./contact-info"
import { object, string } from "yup"
import { useRouter } from "next/router"

interface Schema {
  email: string,
  firstName: string,
  lastName: string,
  homeAddress: string
}

const validationSchema = object({
  firstName: string().label("First Name").required("Required"),
  lastName: string().label("Last Name").required("Required"),
  email: string().label("Email").email().required("Required"),
  homeAddress: string().label("Home Address").required("Required")
});

export const HomeValueLeadGenForm: Component = () => {
  const router = useRouter();

  function handleSubmit({ email, firstName, lastName, homeAddress }: Schema) {
    const url = `/home-value?email=${email}&firstName=${firstName}&lastName=${lastName}&propertyKey=${homeAddress}`;
    router.push(url);
  }

  return (
    <div>
      <h1 className="display-4">{content.homeValueLeadGenForm.heading}</h1>
      <p className="fs-5">{content.homeValueLeadGenForm.subheading}</p>
      <Formik validationSchema={validationSchema} initialValues={{ firstName: '', lastName: '', email: '', homeAddress: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="form">
            <div>
              <div className="mb-4">
                <ContactInfo />
                <Address />
              </div>
              <Button disabled={isSubmitting} type="submit" style={{ zIndex: 1 }} className='position-relative btn btn-primary btn-gradient-primary btn-lg px-5 shadow'>
                {content.homeValueLeadGenForm.callToAction}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}