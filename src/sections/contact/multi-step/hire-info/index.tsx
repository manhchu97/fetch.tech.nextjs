import React, { useCallback } from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import { TOTAL_COLUMN_PER_ROW } from '@/config/contact'

import ClientMessage from '@/components/client-message'

import { useFormStepContext } from '@/context/FormStepContext'

import { Answer, SectionComponentProps } from '@/types/contact'

import styles from './HireInfo.module.scss'

const HireInfoStep = ({
  next,
  inputData,
}: SectionComponentProps): React.ReactElement => {
  const { setStep } = useFormStepContext()
  const listQuestions: Answer[] = inputData?.Answers || []

  const handleNextStep = useCallback(() => {
    if (!next) return

    setStep(next())
  }, [next, setStep])

  return (
    <div className={styles['hire-info-container']}>
      <ClientMessage />

      <div className={clsx('ft-full-screen', 'hire-container')}>
        <div className='hire-container-question h4'>
          What role would you like to hire?
        </div>

        <div className='hire-list row'>
          {listQuestions.map(
            (
              { title = '', description = '', image = '' }: Answer,
              index: React.Key | null | undefined,
            ) => (
              <div
                className={clsx(
                  'hire-card',
                  `col-xxl-${
                    12 / TOTAL_COLUMN_PER_ROW
                  } col-lg-4 col-sm-6 col-xs-12`,
                )}
                key={index}
                onClick={handleNextStep}
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
