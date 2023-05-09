import './index.scss'

type ErrorMessageProps = {
  error: number | undefined
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className='formError'>
      <h2>Error {error}!</h2>
      {error === 404 ? (
        <h3>API error! Try submitting the form in a moment.</h3>
      ) : error === 400 ? (
        <h3>Form error! Check all fields are correctly filled.</h3>
      ) : (
        <h3>Unexpected error! Refresh and try again.</h3>
      )}
    </div>
  )
}

export default ErrorMessage
