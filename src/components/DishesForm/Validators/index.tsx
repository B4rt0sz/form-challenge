export const required = (value: string) => (value ? undefined : 'This field is required')

export const requiredSelect = (value: string) => (!value ? 'Choose a type of dish' : undefined)

export const number = (value: string) =>
  value && isNaN(Number(value)) ? 'Value must be a number' : undefined

export const alphaNumeric = (value: string) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Value must contain alphanumeric characters only'
    : undefined

export const minValueName = (min: number) => (value: string) =>
  value && value.length < min ? `Value cannot be less than ${min}` : undefined

export const minValue = (min: number) => (value: string) =>
  value && Number(value) < min ? `Value cannot be less than ${min}` : undefined

export const maxValue = (max: number) => (value: string) =>
  value && Number(value) > max ? `Value cannot be greater than ${max}` : undefined
