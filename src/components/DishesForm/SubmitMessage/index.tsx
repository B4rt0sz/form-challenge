import SuccessMessage from './components/SuccessMessage'

type SubmitMessageProps = {
  success: number | undefined
}

const SubmitMessage = ({ success }: SubmitMessageProps) => {
  return <>{success === 200 ? <SuccessMessage /> : <div>Error Message</div>}</>
}

export default SubmitMessage
