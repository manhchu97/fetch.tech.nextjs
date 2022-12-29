import React from 'react'

import ClientAction from '@/components/client-action'

import { useFormStepContext } from '@/context/FormStepContext'

import styles from './SkillRequire.module.scss'

const SkillRequireStep = (): React.ReactElement => {
  const { handleNextStep } = useFormStepContext()

  return (
    <div className={styles['skill-require-step-container']}>
      <form onSubmit={handleNextStep}>
        Skill require
        <ClientAction />
      </form>
    </div>
  )
}

export default SkillRequireStep
