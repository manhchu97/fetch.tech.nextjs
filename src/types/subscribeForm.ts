/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ISubscribeForm {
  [key: string]: string
}

export interface IError {
  [key: string]: any
}

export interface IValidateForm {
  form: ISubscribeForm
  fieldName?: string
  errors: IError
  forceTouchErrors?: boolean
}

export interface IValidator {
  [key: string]: any
}
