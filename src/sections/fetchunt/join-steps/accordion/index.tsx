import React, { useState } from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import styles from './JoinStepsAccordion.module.scss'

interface JoinStepsAccordionProps {
  title: React.ReactNode
  content: React.ReactNode
  icon: string
  step: number
}

const JoinStepsAccordion = ({
  icon = '',
  title = '',
  content = '',
  step,
}: JoinStepsAccordionProps): React.ReactElement => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className={clsx(
          styles['accordion-container'],
          'd-flex align-items-center mb-4',
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className='step-image'>
          <Image src={icon} alt={step.toString()} width={60} height={60} />
        </div>

        <div className='accordion-header'>
          <div className='h6'>
            {title}
            <span className='show-detail-btn'>
              <Image
                src='/images/fetchunt/double_arrow_down.png'
                alt='show detail'
                width={14}
                height={14}
              />
            </span>
          </div>
        </div>
      </div>

      {open && (
        <div className={styles['accordion-content']}>
          <div className='h6'>{content}</div>
        </div>
      )}
    </>
  )
}

export default JoinStepsAccordion
