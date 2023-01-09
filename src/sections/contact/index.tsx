import React from 'react'

import dynamic from 'next/dynamic'

import { COMPONENT_TYPE } from '@/config/contact'

import { useFormStepContext } from '@/context/FormStepContext'

import ClientInfo from '@/sections/contact/multi-step/client-info'

const AboutClient = dynamic(
  () => import('@/sections/contact/multi-step/about-client'),
)
const CustomerSupport = dynamic(
  () => import('@/sections/contact/multi-step/customer-support'),
)
const HireInfo = dynamic(
  () => import('@/sections/contact/multi-step/hire-info'),
)
const QuestionAnswer = dynamic(
  () => import('@/sections/contact/multi-step/question-answer'),
)
const ResponsibiliteStep = dynamic(
  () => import('@/sections/contact/multi-step/responsibilite'),
)
const SkillRequire = dynamic(
  () => import('@/sections/contact/multi-step/skill-require'),
)

const RequirementStep = dynamic(
  () => import('@/sections/contact/multi-step/requirement'),
)

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
