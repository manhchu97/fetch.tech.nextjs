import React from 'react'

import ClientAction from '@/components/client-action'

import { useFormStepContext } from '@/context/FormStepContext'

import styles from './Responsibilite.module.scss'

const ResponsibiliteStep = (): React.ReactElement => {
  const { handleNextStep } = useFormStepContext()

  return (
    <div className={styles['responsibility-step-container']}>
      <form onSubmit={handleNextStep}>
        Responsibility
        <ClientAction />
      </form>
    </div>
  )
}

export default ResponsibiliteStep
