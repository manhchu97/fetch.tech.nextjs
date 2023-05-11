import { useCallback, useState } from 'react'

import { IError, ISubscribeForm, IValidateForm } from '@/types/subscribeForm'

import { emailValidator } from '@/utils/validators'

export const useSubscribeFormValidator = (form: ISubscribeForm) => {
  const [errors, setErrors] = useState<IError>({
    email: {
      dirty: false,
      error: false,
      message: '',
    },
  })

  const touchErrors = useCallback((errors: IError) => {
    return Object.entries(errors).reduce(
      (acc, [field, fieldError]) => ({
        ...acc,
        [field]: {
          ...fieldError,
          dirty: true,
        },
      }),
      {},
    )
  }, [])

  const validateForm = useCallback(
    ({ form, fieldName, errors, forceTouchErrors = false }: IValidateForm) => {
      let isValid = true

      // Create a deep copy of the errors
      let nextErrors = JSON.parse(JSON.stringify(errors))

      // Force validate all the fields
      if (forceTouchErrors) {
        nextErrors = touchErrors(errors)
      }

      const { email = '' } = form

      if (
        nextErrors.email.dirty &&
        (forceTouchErrors || fieldName === 'email')
      ) {
        const errorMessage = emailValidator(email)

        nextErrors.email.error = !!errorMessage
        nextErrors.email.message = errorMessage

        if (errorMessage) isValid = false
      }

      setErrors(nextErrors)

      return {
        isValid,
        errors: nextErrors,
      }
    },
    [touchErrors],
  )

  const onBlurField = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const fieldName = e.target.name
      const fieldError = errors[fieldName]

      if (fieldError?.dirty) return

      const updatedErrors = {
        ...errors,
        [fieldName]: {
          ...errors[fieldName],
          dirty: true,
        },
      }

      validateForm({ form, fieldName, errors: updatedErrors })
    },
    [errors, form, validateForm],
  )

  return {
    validateForm,
    onBlurField,
    errors,
  }
}
