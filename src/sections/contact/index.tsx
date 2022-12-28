import React from 'react'

import { COMPONENT_TYPE } from '@/config/contact'

import { useFormStepContext } from '@/context/FormStepContext'

import ClientInfo from '@/sections/contact/multi-step/client-info'
import HireInfo from '@/sections/contact/multi-step/hire-info'
import QuestionAnswer from '@/sections/contact/multi-step/question-answer'

type sectionInstances =
  | typeof ClientInfo
  | typeof HireInfo
  | typeof QuestionAnswer

const sectionComponents = {
  [COMPONENT_TYPE.INIT]: ClientInfo,
  [COMPONENT_TYPE.GRID]: HireInfo,
  [COMPONENT_TYPE.RADIO]: QuestionAnswer,
} as {
  [key: string]: sectionInstances
}

const ContactMultiStep = (): React.ReactElement => {
  const { componentType = '' } = useFormStepContext()
  const Component = sectionComponents[componentType]

  if (!Component) {
    console.error(`invalid section: ${Component}`)
    return <></>
  }

  return <Component />
}

export default ContactMultiStep
