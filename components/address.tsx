import { Component } from "types/component"

export const Address: Component = () => {
  return (
    <div className='row'>
      <div className='col'>
        <div className='form-group d-flex bg-white rounded border mt-2 mb-4'>
          <input placeholder='Address' type="text" className='form-control border-0 p-2' />
          <input placeholder='City' type="text" className='form-control border-0 p-2' />
          <input placeholder='Zip' type="text" className='form-control border-0 p-2' />
          <input placeholder='State' type="text" className='form-control border-0 p-2' />
        </div>
      </div>
    </div>
  )
}