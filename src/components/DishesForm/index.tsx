import './index.scss'
import { useState } from 'react'
import { Form as FinalForm, Field } from 'react-final-form'
import { MonitorSelectFieldChanges } from './MonitorFieldChange'
import axios from 'axios'
import SubmitMessage from './SubmitMessage'
import {
  required,
  requiredSelect,
  number,
  alphaNumeric,
  minValueName,
  minValue,
  maxValue,
  composeValidators,
} from './Validators'

type FormFieldTypes = {
  name: string
  preparation_time: string
  type: 'pizza' | 'soup' | 'sandwich'
  no_of_slices?: number | undefined
  diameter?: number | undefined
  spiciness_scale?: number | undefined
  slices_of_bread?: number | undefined
}

const DishesForm = () => {
  const [successSubmit, setSuccessSubmit] = useState<number | undefined>()
  const [errorSubmit, setErrorSubmit] = useState<{} | undefined>()

  const onSubmit = async (values: FormFieldTypes) => {
    try {
      const response = await axios.post(process.env.DISH_API ?? '', values)
      setSuccessSubmit(response.status)
      setTimeout(() => {
        setSuccessSubmit(undefined)
        setErrorSubmit(undefined)
      }, 2000)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorSubmit({ status: error.response?.status, message: error.message })
        setTimeout(() => {
          setErrorSubmit(undefined)
        }, 2000)
      }
    }
  }

  if (successSubmit === 200) return <SubmitMessage success={successSubmit} />

  return (
    <div className='formContainer'>
      <h1 className='title'>Dish Form</h1>
      {errorSubmit && <SubmitMessage success={successSubmit} />}
      <FinalForm
        onSubmit={onSubmit}
        render={({ handleSubmit, values, invalid }) => (
          <form className='form' onSubmit={handleSubmit}>
            <MonitorSelectFieldChanges />
            <Field
              name='name'
              validate={composeValidators(required, minValueName(2), alphaNumeric)}
            >
              {({ input, meta }) => (
                <div className='form__field'>
                  <label>Dish Name</label>
                  <input {...input} type='text' placeholder='Name...' required />
                  {meta.error && meta.touched && (
                    <div className='form__field-error'>{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            <Field name='preparation_time' validate={required}>
              {({ input, meta }) => (
                <div className='form__field'>
                  <label>Preparation time</label>
                  <input {...input} type='time' step={1} required />
                  {meta.error && meta.touched && (
                    <div className='form__field-error'>{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            <Field name='type' validate={requiredSelect}>
              {({ input, meta }) => (
                <div className='form__field'>
                  <label>Dish type</label>
                  <select {...input} required>
                    <option />
                    <option value='pizza'>Pizza</option>
                    <option value='soup'>Soup</option>
                    <option value='sandwich'>Sandwich</option>
                  </select>
                  {meta.error && meta.touched && (
                    <div className='form__field-error'>{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            {values.type === 'pizza' && (
              <>
                <Field
                  name='no_of_slices'
                  validate={composeValidators(required, number, minValue(1), maxValue(12))}
                >
                  {({ input, meta }) => (
                    <div className='form__field'>
                      <label>Number of slices</label>
                      <input
                        {...input}
                        type='number'
                        min={1}
                        max={12}
                        placeholder='Number of slices...'
                        required
                      />
                      {meta.error && meta.touched && (
                        <div className='form__field-error'>{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Field
                  name='diameter'
                  validate={composeValidators(required, number, minValue(1), maxValue(60))}
                >
                  {({ input, meta }) => (
                    <div className='form__field'>
                      <label>Diameter</label>
                      <input
                        {...input}
                        type='number'
                        min={1}
                        max={60}
                        placeholder='Diameter...'
                        required
                      />
                      {meta.error && meta.touched && (
                        <div className='form__field-error'>{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </>
            )}
            {values.type === 'soup' && (
              <Field
                name='spiciness_scale'
                validate={composeValidators(required, number, minValue(1), maxValue(10))}
              >
                {({ input, meta }) => (
                  <div className='form__field'>
                    <label>Spiciness scale (1-10)</label>
                    <input
                      {...input}
                      type='number'
                      min={1}
                      max={10}
                      placeholder='Spiciness...'
                      required
                    />
                    {meta.error && meta.touched && (
                      <div className='form__field-error'>{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
            )}
            {values.type === 'sandwich' && (
              <Field
                name='slices_of_bread'
                validate={composeValidators(required, number, minValue(1), maxValue(30))}
              >
                {({ input, meta }) => (
                  <div className='form__field'>
                    <label>Slices of bread</label>
                    <input
                      {...input}
                      type='number'
                      min={1}
                      max={30}
                      placeholder='Slices...'
                      required
                    />
                    {meta.error && meta.touched && (
                      <div className='form__field-error'>{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
            )}
            <div className='form__button'>
              <button type='submit' disabled={invalid}>
                Submit
              </button>
            </div>
          </form>
        )}
      />
    </div>
  )
}

export default DishesForm
