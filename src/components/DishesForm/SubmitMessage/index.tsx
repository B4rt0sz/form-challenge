import SuccessMessage from './components/SuccessMessage'
import ErrorMessage from './components/ErrorMessage'

type SubmitMessageProps = {
  success: number | undefined
  error?: number | undefined
}

const SubmitMessage = ({ success, error }: SubmitMessageProps) => {
  return <>{success === 200 ? <SuccessMessage /> : <ErrorMessage error={error} />}</>
}

export default SubmitMessage
