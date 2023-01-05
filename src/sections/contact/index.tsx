import React from 'react'

import { COMPONENT_TYPE } from '@/config/contact'

import { useFormStepContext } from '@/context/FormStepContext'

import AboutClient from '@/sections/contact/multi-step/about-client'
import ClientInfo from '@/sections/contact/multi-step/client-info'
import CustomerSupport from '@/sections/contact/multi-step/customer-support'
import HireInfo from '@/sections/contact/multi-step/hire-info'
import QuestionAnswer from '@/sections/contact/multi-step/question-answer'
import RequirementStep from '@/sections/contact/multi-step/requirement'
import ResponsibiliteStep from '@/sections/contact/multi-step/responsibilite'
import SkillRequire from '@/sections/contact/multi-step/skill-require'

type sectionInstances =
  | typeof ClientInfo
  | typeof HireInfo
  | typeof QuestionAnswer
  | typeof CustomerSupport
  | typeof SkillRequire
  | typeof AboutClient

const sectionComponents = {
  [COMPONENT_TYPE.INIT]: ClientInfo,
  [COMPONENT_TYPE.GRID]: HireInfo,
  [COMPONENT_TYPE.RADIO]: QuestionAnswer,
  [COMPONENT_TYPE.RADIO_FLEX_LABEL]: QuestionAnswer,
  [COMPONENT_TYPE.LABEL]: CustomerSupport,
  [COMPONENT_TYPE.TREE]: SkillRequire,
  [COMPONENT_TYPE.TEXT]: AboutClient,
  [COMPONENT_TYPE.CHECKBOX_REPONSIBILITY]: ResponsibiliteStep,
  [COMPONENT_TYPE.CHECKBOX_REQUIREMENT]: RequirementStep,
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
