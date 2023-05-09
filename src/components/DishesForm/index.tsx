import './index.scss'
import { Form as FinalForm, Field, FormSpy } from 'react-final-form'
import { OnChange } from 'react-final-form-listeners'
import {
  required,
  requiredSelect,
  number,
  alphaNumeric,
  minValueName,
  minValue,
  maxValue,
} from './Validators'
import axios from 'axios'

import { useState } from 'react'

type FormFieldTypes = {
  name: string
  preparation_time: string
  type: 'pizza' | 'soup' | 'sandwich'
  no_of_slices?: number | undefined
  diameter?: number | undefined
  spiciness_scale?: number | undefined
  slices_of_bread?: number | undefined
}

const WhenFieldChanges = ({ field, becomes, set, to }: any) => (
  <Field name={set} subscription={{}}>
    {({ input: { onChange } }) => (
      <FormSpy subscription={{}}>
        {({ form }) => (
          <OnChange name={field}>
            {(value) => {
              if (value === becomes) {
                onChange(to)
              }
            }}
          </OnChange>
        )}
      </FormSpy>
    )}
  </Field>
)

const DishesForm = () => {
  const [successMessage, setSuccessMessage] = useState<{} | undefined>()
  const [errorMessage, setErrorMessage] = useState<{} | undefined>()

  const onSubmit = async (values: FormFieldTypes) => {
    try {
      const response = await axios.post(process.env.DISH_API ?? '', values)
      setSuccessMessage(response.status)
      setTimeout(() => {
        setSuccessMessage(undefined)
        setErrorMessage(undefined)
      }, 2000)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage({ status: error.response?.status, message: error.message })
        setTimeout(() => {
          setErrorMessage(undefined)
        }, 2000)
      }
    }
  }

  const composeValidators =
    (...validators: any[]) =>
    (value: string) =>
      validators.reduce((error, validator) => error || validator(value), undefined)

  if (successMessage === 200) return <p>Success! The dish was submitted.</p>

  return (
    <div className='formContainer'>
      <h1>Dish Form</h1>
      {errorMessage && <p>Error! Something go wrong.</p>}
      <FinalForm
        onSubmit={onSubmit}
        render={({ handleSubmit, values, invalid }) => (
          <form className='form' onSubmit={handleSubmit}>
            <WhenFieldChanges field='type' becomes={'pizza'} set='spiciness_scale' to={undefined} />
            <WhenFieldChanges field='type' becomes={'pizza'} set='slices_of_bread' to={undefined} />
            <WhenFieldChanges field='type' becomes={'soup'} set='no_of_slices' to={undefined} />
            <WhenFieldChanges field='type' becomes={'soup'} set='diameter' to={undefined} />
            <WhenFieldChanges field='type' becomes={'soup'} set='slices_of_bread' to={undefined} />
            <WhenFieldChanges field='type' becomes={'sandwich'} set='no_of_slices' to={undefined} />
            <WhenFieldChanges field='type' becomes={'sandwich'} set='diameter' to={undefined} />
            <WhenFieldChanges
              field='type'
              becomes={'sandwich'}
              set='spiciness_scale'
              to={undefined}
            />
            <Field
              name='name'
              validate={composeValidators(required, minValueName(2), alphaNumeric)}
            >
              {({ input, meta }) => (
                <div className='form__field'>
                  <label>Dish Name</label>
                  <input {...input} type='text' placeholder='Name...' />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='preparation_time' validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Preparation time</label>
                  <input {...input} type='time' step={1} required />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='type' validate={requiredSelect}>
              {({ input, meta }) => (
                <div>
                  <label>Dish type</label>
                  <select {...input} required>
                    <option />
                    <option value='pizza'>Pizza</option>
                    <option value='soup'>Soup</option>
                    <option value='sandwich'>Sandwich</option>
                  </select>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
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
                    <div>
                      <label>Number of slices</label>
                      <input
                        {...input}
                        type='number'
                        min={1}
                        max={12}
                        placeholder='Number of slices...'
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field
                  name='diameter'
                  validate={composeValidators(required, number, minValue(1), maxValue(60))}
                >
                  {({ input, meta }) => (
                    <div>
                      <label>Diameter</label>
                      <input {...input} type='number' min={1} max={60} placeholder='Diameter...' />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
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
                  <div>
                    <label>Spiciness scale (1-10)</label>
                    <input {...input} type='number' min={1} max={10} placeholder='Spiciness...' />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
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
                  <div>
                    <label>Slices of bread</label>
                    <input {...input} type='number' min={1} max={30} placeholder='Slices...' />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            )}
            <div className='buttons'>
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
