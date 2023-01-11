import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import * as Yup from 'yup'

import ClientAction from '@/components/client-action'
import ClientMessage from '@/components/client-message'

import { useFormStepContext } from '@/context/FormStepContext'
import { useToastContext } from '@/context/ToastContext'

import { Answer, INextQuestionValue } from '@/types/contact'

import styles from './QuestionAnswer.module.scss'

type QuestionAnswerSubmitForm = {
  answer: string
}

const QuestionAnswerStep = (): React.ReactElement => {
  const { errorToast } = useToastContext()
  const {
    listResultAnswers,
    saveAnswerByQuestion,
    handleNextStep,
    updateAnswerByQuestion,
    getNextQuestionValue,
    handlePreviousStep,
    isAnimatedComponent,
    animation,
  } = useFormStepContext()
  const [isAnimated, setIsAnimated] = useState<boolean>(false)

  const data: INextQuestionValue | null = getNextQuestionValue()
  const { currentStep = 0, resultAnswer } = data || {}
  const { answer, inputData } = resultAnswer || {}
  const {
    title: questionTitle = '',
    answers: listAnswers = [],
    flexLabel,
  } = inputData || {}

  const gridQuestionResult = listResultAnswers[0]

  const gridAnswerResult = useMemo(
    () =>
      gridQuestionResult.inputData.answers.find(
        (answer) => answer.id === gridQuestionResult.answer,
      ),
    [gridQuestionResult],
  )

  const validationSchema = Yup.object().shape({
    answer: Yup.string().nullable().required('Please select your answer!'),
  })

  const {
    register,
    clearErrors,
    handleSubmit,
    resetField,
    setValue,
    formState: { errors },
  } = useForm<QuestionAnswerSubmitForm>({
    resolver: yupResolver(validationSchema),
  })

  useEffect(() => {
    if (!answer) return

    setValue('answer', (answer as string) || '')
  }, [answer, setValue])

  const handleSubmitQuestion = useCallback(
    (data: QuestionAnswerSubmitForm) => {
      const { answer: answerId = '' } = data

      updateAnswerByQuestion({
        currentStep,
        answer: answerId,
        answerRaw: [answerId],
      })

      try {
        saveAnswerByQuestion()

        setIsAnimated(false)
        handleNextStep()
        resetField('answer')
      } catch (error) {
        errorToast(
          (error as Error)?.message || 'Fail to submit quiz! Please try again',
        )
      }
    },
    [
      handleNextStep,
      updateAnswerByQuestion,
      currentStep,
      resetField,
      saveAnswerByQuestion,
      errorToast,
    ],
  )

  const handlePreviousQuestion = useCallback(() => {
    setIsAnimated(false)
    clearErrors()
    handlePreviousStep()
  }, [clearErrors, handlePreviousStep])

  useEffect(() => {
    setIsAnimated(isAnimatedComponent)
  }, [isAnimated, isAnimatedComponent])

  return (
    <div className={styles['question-answer-step-container']}>
      <ClientMessage />

      <form
        className='answers-form-container'
        onSubmit={handleSubmit(handleSubmitQuestion)}
      >
        <div
          className={clsx({
            'question-answers-container': true,
            animate__animated: isAnimated,
            [`${animation}`]: isAnimated,
          })}
        >
          {!!errors?.answer?.message && (
            <div className='alert alert-danger' role='alert'>
              {errors?.answer?.message}
            </div>
          )}

          <div className='h5 question-content'>
            {questionTitle}
            {flexLabel && (
              <span className='question-flex-content'>
                {`${gridAnswerResult?.title.toLocaleLowerCase()}?`}
              </span>
            )}
          </div>

          <div className='answers-list'>
            {(listAnswers || []).map(
              ({
                priority,
                title: answerTitle,
                description,
                id: answerId = '',
              }: Answer) => (
                <div className='answers-item' key={priority}>
                  <input
                    id={`answers.${priority}`}
                    type='radio'
                    {...register('answer')}
                    value={answerId}
                    className='answers-radio'
                  />

                  <label
                    htmlFor={`answers.${priority}`}
                    className='answers-label'
                  >
                    {`${answerTitle} ${description ? `(${description})` : ''}`}
                  </label>
                </div>
              ),
            )}
          </div>

          <hr />
        </div>

        <ClientAction onClickPreviousButton={handlePreviousQuestion} />
      </form>
    </div>
  )
}

export default QuestionAnswerStep
