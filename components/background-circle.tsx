export const BackgroundCircle = () => {
  return (
    <div className='position-absolute bg-primary rounded-circle' style={{
      background: "linear-gradient(-45deg, #0024A1 0% 30%, #FFA487 70% 100%)", width: 275, height: 275, marginTop: 25, left: '50%', transform: 'translate(-50%, 0)'
    }}></div>
  )
}