import './index.scss'
import ConfettiExplosion from 'confetti-explosion-react'

const SuccessMessage = () => {
  return (
    <div className='formSuccess'>
      <ConfettiExplosion
        force={0.6}
        particleCount={200}
        duration={2500}
        particleSize={6}
        width={600}
      />
      <div className='formSuccess__container'>
        <h2>Succes!</h2>
        <h3>Your dish has been submitted!</h3>
      </div>
    </div>
  )
}

export default SuccessMessage
