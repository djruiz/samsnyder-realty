import { Component } from "types/component";

export const Overlay: Component = ({ children }) => {
  return (
    <div className='bg-white position-relative' style={{ zIndex: 1 }}>
      {children}
    </div>
  )
}