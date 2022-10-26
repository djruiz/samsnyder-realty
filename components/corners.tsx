import { Component } from 'types/component';
import { CSSProperties } from 'react';

export const Corners: Component = ({ children }) => {
  const cornerStyles = (color: string, deg: number): CSSProperties => {
    return {
      width: 100,
      height: 100,
      background: `linear-gradient(${deg}deg,${color}50 50%,#00000000 0)`
    }
  }

  return (
    <div className='position-relative'>
      <div className='position-absolute top-0 start-0' style={cornerStyles("#0024A1", 135)}></div>
      <div className='position-absolute top-0 end-0' style={cornerStyles("#FFA487", -135)}></div>
      <div className='position-absolute bottom-0 start-0' style={cornerStyles("#0024A1", 45)}></div>
      <div className='position-absolute bottom-0 end-0' style={cornerStyles("#FFA487", -45)}></div>
      {children}
    </div>
  )
}