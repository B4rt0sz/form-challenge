export const required = (value: string) => (value ? undefined : 'This field is required')

export const requiredSelect = (value: string) => (!value ? 'Choose a type of dish' : undefined)

export const requiredNumber = (value: string) =>
  value && isNaN(Number(value)) ? 'Value must be a number' : undefined

export const requiredAlphaNumeric = (value: string) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Value must contain alphanumeric characters only'
    : undefined
export const requiredTime = (value: string) =>
  value && !/^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9]:?[0-5][0-9]+$))/.test(value)
    ? 'Value should contain hh:mm:ss'
    : undefined

export const requiredMinValueName = (min: number) => (value: string) =>
  value && value.length < min ? `Value cannot be less than ${min}` : undefined

export const requiredMinValue = (min: number) => (value: string) =>
  value && Number(value) < min ? `Value cannot be less than ${min}` : undefined

export const requiredMaxValue = (max: number) => (value: string) =>
  value && Number(value) > max ? `Value cannot be greater than ${max}` : undefined

export const composeValidators =
  (...validators: any[]) =>
  (value: string) =>
    validators.reduce((error, validator) => error || validator(value), undefined)
