import React from 'react'

import ClientAction from '@/components/client-action'

import { useFormStepContext } from '@/context/FormStepContext'

import styles from './Requirement.module.scss'

const RequirementStep = (): React.ReactElement => {
  const { handleNextStep } = useFormStepContext()

  return (
    <div className={styles['requirement-step-container']}>
      <form onSubmit={handleNextStep}>
        Requirement
        <ClientAction />
      </form>
    </div>
  )
}

export default RequirementStep
