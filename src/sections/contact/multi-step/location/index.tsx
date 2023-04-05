import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import * as Yup from 'yup'

import ClientAction from '@/components/client-action'
import ClientMessage from '@/components/client-message'

import { useFormStepContext } from '@/context/FormStepContext'
import { useToastContext } from '@/context/ToastContext'

import { ILocationItem, INextQuestionValue } from '@/types/contact'

import styles from './Location.module.scss'

type LocationAnswerSubmitForm = {
  locations: (string | boolean)[]
}

const LocationInfoStep = (): React.ReactElement => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false)
  const { errorToast } = useToastContext()
  const {
    locations: locationsData,
    isAnimatedComponent,
    animation,
    handlePreviousStep,
    handleNextStep,
    getNextQuestionValue,
    updateAnswerByQuestion,
    saveAnswerByQuestion,
  } = useFormStepContext()

  const data: INextQuestionValue | null = getNextQuestionValue()
  const { currentStep = 0, resultAnswer } = data || {}
  const { inputData, answer = [] } = resultAnswer || {}
  const { title: questionTitle = '' } = inputData || {}

  const validationSchema = Yup.object().shape({
    locations: Yup.array().test(
      'validator-locations',
      (value, { createError }) => {
        const isValid = (value || []).filter(Boolean).length > 0

        if (!isValid)
          return createError({
            path: 'locations',
            message: 'Please select at least 1 location!',
          })

        return true
      },
    ),
  })

  const {
    register,
    clearErrors,
    handleSubmit,
    resetField,
    setValue,
    formState: { errors },
  } = useForm<LocationAnswerSubmitForm>({
    resolver: yupResolver(validationSchema),
  })

  const handlePreviousQuestion = useCallback(() => {
    setIsAnimated(false)
    clearErrors()
    handlePreviousStep()
  }, [clearErrors, handlePreviousStep])

  const handleSubmitLocation = useCallback(
    (data: LocationAnswerSubmitForm) => {
      const { locations = [] } = data || {}

      const answer = (locations || []).filter(Boolean) as string[]

      const locationsHtml = answer.map((item) => {
        const locationInfo = locationsData.find(
          (location) => location.id === item,
        )
        return `<li style="display: flex; margin-top: 0.5em; margin-bottom: 0.5em;"><span style="margin-right: 0.75em; flex-shrink: 0;">${locationInfo?.address}:</span> ${locationInfo?.descLocation}</li>`
      })

      updateAnswerByQuestion({
        currentStep,
        answer,
        answerRaw: locationsHtml,
      })

      try {
        saveAnswerByQuestion()

        setIsAnimated(false)
        handleNextStep()
        resetField('locations')
      } catch (error) {
        errorToast(
          (error as Error)?.message || 'Fail to submit quiz! Please try again',
        )
      }
    },
    [
      currentStep,
      errorToast,
      handleNextStep,
      locationsData,
      resetField,
      saveAnswerByQuestion,
      updateAnswerByQuestion,
    ],
  )

  useEffect(() => {
    if (!Array.isArray(answer) || !answer.length) {
      setValue('locations', [])
      return
    }

    setValue(
      'locations',
      locationsData.map(({ id: locationId }) =>
        answer.findIndex((value) => value === locationId) > -1
          ? locationId
          : false,
      ),
    )
  }, [answer, locationsData, setValue])

  useEffect(() => {
    setIsAnimated(isAnimatedComponent)
  }, [isAnimated, isAnimatedComponent])

  return (
    <div className={styles['location-step-container']}>
      <ClientMessage />

      <form
        className='location-form-container'
        onSubmit={handleSubmit(handleSubmitLocation)}
      >
        <div
          className={clsx({
            'location-container': true,
            animate__animated: isAnimated,
            [animation]: isAnimated,
          })}
        >
          {!!errors?.locations?.message && (
            <div className='alert alert-danger' role='alert'>
              {errors?.locations?.message}
            </div>
          )}

          <div className='h5 location-content'>{questionTitle}</div>

          <div className='location-list'>
            {(locationsData || []).map(({ name, id }: ILocationItem, index) => (
              <div className='location-item form-check' key={`${index}-${id}`}>
                <input
                  id={id}
                  type='checkbox'
                  {...register(`locations.${index}`)}
                  value={id}
                  className='form-check-input'
                />

                <label htmlFor={id} className='location-label form-check-label'>
                  {name}
                </label>
              </div>
            ))}
          </div>

          <hr />
        </div>

        <ClientAction onClickPreviousButton={handlePreviousQuestion} />
      </form>
    </div>
  )
}

export default LocationInfoStep
