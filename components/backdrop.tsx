import { Component } from "types/component"

export const Backdrop: Component = ({ children }) => {
  return <div className='bg-dark-transparent p-4 p-md-5 me-2 me-md-5 my-5 ms-2 ms-md-0 text-white rounded shadow-lg text-center'>{children}</div>
}