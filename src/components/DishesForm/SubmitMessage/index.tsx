type SubmitMessageProps = {
  success: number | undefined
}

const SubmitMessage = ({ success }: SubmitMessageProps) => {
  return <>{success === 200 ? <div>Success Message</div> : <div>Error Message</div>}</>
}

export default SubmitMessage
