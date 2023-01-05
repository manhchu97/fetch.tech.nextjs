import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import styles from './ClientAction.module.scss'

interface IClientAction {
  action?: React.ReactNode
  previousButtonText?: string
  nextButtonText?: string
  onClickPreviousButton?: () => void
}

const ClientAction = ({
  action,
  previousButtonText = 'Back',
  nextButtonText = 'Next',
  onClickPreviousButton = () => {},
}: IClientAction): React.ReactElement => {
  return (
    <div className={clsx('ft-full-screen', styles['client-action-container'])}>
      <div className='action-button-container'>
        {action || (
          <>
            <button
              type='button'
              className='action-btn action-btn-outlined'
              onClick={onClickPreviousButton}
            >
              <div className='action-icon'>
                <Image
                  src={'/images/IconArrowBack.svg'}
                  alt='Icon back question'
                  width={12}
                  height={12}
                />
              </div>

              <div className='action-label'>{previousButtonText}</div>
            </button>

            <button className='action-btn action-btn-contained' type='submit'>
              <div className='action-icon'>
                <Image
                  src={'/images/IconArrowNext.svg'}
                  alt='Icon next question'
                  width={12}
                  height={12}
                />
              </div>

              <div className='action-label'>{nextButtonText}</div>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ClientAction
