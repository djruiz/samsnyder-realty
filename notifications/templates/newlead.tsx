import { Component } from "types/component";

interface Props {
  firstName: string,
  lastName: string,
  email: string,
  address: string
}

export const NewLeadTemplate: Component<Props> = (props) => {
  return (
    <div>
      <h1>You got a new lead!</h1>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Email: {props.email}</p>
      <p>Expressed intrest in selling property: {props.address}</p>
    </div>
  )
}