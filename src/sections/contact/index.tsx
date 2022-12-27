import React from 'react'

import { useFormStepContext } from '@/context/FormStepContext'

import ClientInfo from '@/sections/contact/multi-step/client-info'
import HireInfo from '@/sections/contact/multi-step/hire-info'
import QuestionAnswer from '@/sections/contact/multi-step/question-answer'

import { ComponentList } from '@/types/contact'

interface ContactMultiStepProps {
  componentList: ComponentList[]
}

type sectionInstances =
  | typeof ClientInfo
  | typeof HireInfo
  | typeof QuestionAnswer

const sectionComponents = {
  ClientInfo,
  HireInfo,
  QuestionAnswer,
} as {
  [key: string]: sectionInstances
}

const ContactMultiStep = ({
  componentList,
}: ContactMultiStepProps): React.ReactElement => {
  const { step = 0 } = useFormStepContext()
  const { componentName, previous, next, inputData }: ComponentList =
    componentList[step]
  const Component = sectionComponents[componentName]

  if (!Component) {
    console.error(`invalid section: ${componentName}`)
    return <></>
  }

  return <Component previous={previous} next={next} inputData={inputData} />
}

export default ContactMultiStep
