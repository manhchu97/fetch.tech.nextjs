import React from 'react'

import ClientAction from '@/components/client-action'

import { useFormStepContext } from '@/context/FormStepContext'

import styles from './AboutClient.module.scss'

const AboutClientStep = (): React.ReactElement => {
  const { handleNextStep } = useFormStepContext()
  return (
    <div className={styles['about-client-container']}>
      <form onSubmit={handleNextStep}>
        About Client
        <ClientAction />
      </form>
    </div>
  )
}

export default AboutClientStep
