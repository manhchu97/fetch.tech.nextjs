import React from 'react'

import clsx from 'clsx'

import ClientMessage from '@/components/client-message'

import { Answer, SectionComponentProps } from '@/types/contact'

import styles from './QuestionAnswer.module.scss'

const QuestionAnswerStep = ({
  // next,
  inputData,
}: SectionComponentProps): React.ReactElement => {
  const { title: questionTitle, Answers = [] } = inputData || {}

  return (
    <div className={styles['question-answer-step-container']}>
      <ClientMessage />

      <div className={clsx('ft-full-screen', 'question-answers-container')}>
        <div className='h5 question-content'>{questionTitle}</div>
        <div className='answers-list'>
          {(Answers || []).map(({ priority, title: answerTitle }: Answer) => (
            <div className='answers-item' key={priority}>
              <input
                id={`answers.${priority}`}
                type='radio'
                name='answer'
                className='answers-radio'
              />

              <label htmlFor={`answers.${priority}`} className='answers-label'>
                {answerTitle}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuestionAnswerStep
