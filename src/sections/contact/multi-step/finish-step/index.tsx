import React from 'react'

import Link from 'next/link'

import clsx from 'clsx'

import ClientLabel from '@/components/client-label'

import { useFormStepContext } from '@/context/FormStepContext'

import { PATH_CONFIG } from '@/routes/paths'

import styles from './Finish.module.scss'

const FinishStep = (): React.ReactElement => {
  const { isAnimatedComponent, animation } = useFormStepContext()

  return (
    <div
      className={clsx({
        [styles['finish-step-container']]: true,
        animate__animated: isAnimatedComponent,
        [`${animation}`]: isAnimatedComponent,
      })}
    >
      <ClientLabel
        action={
          <div className='action-container'>
            <Link href={PATH_CONFIG.root}>
              <a className='action-btn-home text-center'>Home</a>
            </Link>
          </div>
        }
      >
        {`Thank you for choosing Fetch for your project. A Fetch specialist will
      call you to discuss the scope of your project, talent preferences (e.g.
        required skills, rate, time zone), and determine your job specifications.
        Then we'll find and send you the best matches for your job from our
        expert-vetted talent network as quickly as possible.`}
      </ClientLabel>
    </div>
  )
}

export default FinishStep
