import React, { useCallback } from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import { TOTAL_COLUMN_PER_ROW } from '@/config/contact'

import ClientMessage from '@/components/client-message'

import { useFormStepContext } from '@/context/FormStepContext'

import { Answer, INextQuestionValue } from '@/types/contact'

import styles from './HireInfo.module.scss'

const HireInfoStep = (): React.ReactElement => {
  const { handleNextStep, updateAnswerByQuestion, getNextQuestionValue } =
    useFormStepContext()

  const data: INextQuestionValue | null = getNextQuestionValue()
  const { currentStep = 0, resultAnswer } = data || {}
  const { answer, inputData } = resultAnswer || {}
  const { title: questionTitle = '', answers: listAnswers = [] } =
    inputData || {}

  const handleSubmit = useCallback(
    (answerId: string) => () => {
      updateAnswerByQuestion({
        currentStep,
        answer: answerId,
      })

      handleNextStep()
    },
    [handleNextStep, updateAnswerByQuestion, currentStep],
  )

  return (
    <div className={styles['hire-info-container']}>
      <ClientMessage />

      <div className={clsx('ft-full-screen', 'hire-container')}>
        <div className='hire-container-question h4'>{questionTitle}</div>

        <div className='hire-list row'>
          {listAnswers.map(
            (
              {
                title = '',
                description = '',
                image = '',
                id: answerId = '',
              }: Answer,
              index: React.Key | null | undefined,
            ) => (
              <div
                className={clsx(
                  'hire-card',
                  answerId === answer && 'active',
                  `col-xxl-${
                    12 / TOTAL_COLUMN_PER_ROW
                  } col-lg-4 col-sm-6 col-xs-12`,
                )}
                key={index}
                onClick={handleSubmit(answerId)}
              >
                <div className='hire-card-banner'>
                  <div className='hire-card-title'>{title}</div>
                  <div className='hire-card-image'>
                    <Image
                      src={image || ''}
                      alt={title}
                      width={60}
                      height={60}
                    />
                  </div>
                </div>

                <p className='hire-card-desc'>{description}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default HireInfoStep
