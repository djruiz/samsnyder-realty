import content from "assets/content"
import { Formik, Form } from "formik"
import { Button } from "react-bootstrap"
import { Component } from "types/component"
import { Address } from "./address"
import { ContactInfo } from "./contact-info"
import { object, string } from "yup"
import { useRouter } from "next/router"
import { useCookies } from "react-cookie"
import { sendAdminMail } from "notifications/mailproxy"
import { NewLeadTemplate } from "notifications/templates/newlead";

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

type LeadCache = string[];

export const HomeValueLeadGenForm: Component = () => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["__leads"]);

  async function handleNewLead(firstName: string, lastName: string, email: string, propertyKey: string) {
    console.log("Creating new lead!", firstName, lastName, email, propertyKey);
    sendAdminMail("New Lead", <NewLeadTemplate firstName={firstName} lastName={lastName} email={email} address={propertyKey} />)
  }

  function handleSubmit({ email, firstName, lastName, homeAddress }: Schema) {
    const leads: LeadCache = cookies.__leads || [];

    if (!leads.includes(email)) {
      leads.push(email)
      handleNewLead(firstName, lastName, email, homeAddress);
    }

    setCookie("__leads", leads, { path: "/" });

    const url = `/home-value?email=${email}&firstName=${firstName}&lastName=${lastName}&propertyKey=${homeAddress}`;
    router.push(url);
  }

  return (
    <div>
      <h1 className="display-5">{content.homeValueLeadGenForm.heading}</h1>
      <p className="fs-5 mb-3">{content.homeValueLeadGenForm.subheading}</p>
      <Formik validationSchema={validationSchema} initialValues={{ firstName: '', lastName: '', email: '', homeAddress: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="form">
            <div>
              <div className="mb-4">
                <ContactInfo />
                <Address />
              </div>
              <div className="mx-md-5 mb-3">
                <Button disabled={isSubmitting} type="submit" style={{ zIndex: 1 }} className='font-monospace position-relative btn btn-primary btn-gradient-primary btn-lg w-100 shadow'>
                  {content.homeValueLeadGenForm.callToAction}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}