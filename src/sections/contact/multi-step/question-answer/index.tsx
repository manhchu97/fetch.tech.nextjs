import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import ClientAction from '@/components/client-action'
import ClientMessage from '@/components/client-message'

import { useFormStepContext } from '@/context/FormStepContext'

import { Answer, INextQuestionValue } from '@/types/contact'

import styles from './QuestionAnswer.module.scss'

type QuestionAnswerSubmitForm = {
  answer: string
}

const QuestionAnswerStep = (): React.ReactElement => {
  const {
    handleNextStep,
    updateAnswerByQuestion,
    getNextQuestionValue,
    handlePreviousStep,
  } = useFormStepContext()

  const data: INextQuestionValue | null = getNextQuestionValue()
  const { currentStep = 0, resultAnswer } = data || {}
  const { answer, inputData } = resultAnswer || {}
  const { title: questionTitle = '', answers: listAnswers = [] } =
    inputData || {}

  const { register, handleSubmit, resetField, setValue } =
    useForm<QuestionAnswerSubmitForm>()

  useEffect(() => {
    setValue('answer', answer || '')
  }, [answer, setValue])

  const handleSubmitQuestion = useCallback(
    (data: QuestionAnswerSubmitForm) => {
      const { answer: answerId = '' } = data

      updateAnswerByQuestion({
        currentStep,
        answer: answerId,
      })

      handleNextStep()
      resetField('answer')
    },
    [handleNextStep, updateAnswerByQuestion, currentStep, resetField],
  )

  const handlePreviousQuestion = useCallback(() => {
    handlePreviousStep()
  }, [handlePreviousStep])

  return (
    <div className={styles['question-answer-step-container']}>
      <ClientMessage />

      <form
        className='answers-form-container'
        onSubmit={handleSubmit(handleSubmitQuestion)}
      >
        <div className={'question-answers-container'}>
          <div className='h5 question-content'>{questionTitle}</div>

          <div className='answers-list'>
            {(listAnswers || []).map(
              ({ priority, title: answerTitle, id: answerId = '' }: Answer) => (
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
                    {answerTitle}
                  </label>
                </div>
              ),
            )}
          </div>

          <hr />

          <ClientAction onClickPreviousButton={handlePreviousQuestion} />
        </div>
      </form>
    </div>
  )
}

export default QuestionAnswerStep
