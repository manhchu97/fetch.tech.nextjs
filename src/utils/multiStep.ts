import cloneDeep from 'lodash.clonedeep'

import { ADDITIONAL_COMPONENTS, QUESTION_COMPONENTS } from '@/config/contact'

import { ComponentList, QuestionAnswers } from '@/types/contact'

export const buildMultiStep = (
  questions: QuestionAnswers[],
): ComponentList[] => {
  let currentStep = 0
  let index = 0

  const componentList: ComponentList[] = [
    // PAGE_0
    {
      currentStep: 0,
      previous: null,
      next: () => 1,
      componentName: QUESTION_COMPONENTS.CLIENT_INFO,
      inputData: null,
    },
  ]

  const cloneQuestions: QuestionAnswers[] = cloneDeep(questions)

  while (cloneQuestions.length) {
    const value = cloneQuestions.shift()
    const { Answers = [], slug = '' } = value || {}
    const listNextQuestionIds = [
      ...new Set(
        (Answers || []).map(({ next_question_id }) => next_question_id),
      ),
    ]

    currentStep += 1
    index += 1

    if (!listNextQuestionIds.length) {
      if (slug === 'what-skills-would-you-like-to-see-in-your-new-hire') {
        componentList.push({
          currentStep,
          previous: () => index - 1,
          next: () => index + 1,
          componentName: QUESTION_COMPONENTS.SKILL_REQUIRE,
          inputData: value,
        })
      }
    } else if (listNextQuestionIds.length < 2) {
      if (slug === 'what-role-would-you-like-to-hire') {
        componentList.push({
          currentStep,
          previous: () => currentStep - 1,
          next: () => currentStep + 1,
          componentName: QUESTION_COMPONENTS.HIRE_INFO,
          inputData: value,
        })
      } else if (slug === 'how-long-have-you-need-the-new-hire') {
        componentList.push({
          currentStep,
          previous: (data?: string): number => {
            if (data === 'New idea or project') return index - 1

            return index - 2
          },
          next: () => index + 1,
          componentName: QUESTION_COMPONENTS.QUESTION_ANSWER,
          inputData: value,
        })
      } else if (
        slug ===
        'what-level-of-time-commitment-will-you-require-from-the-new-hire'
      ) {
        componentList.push({
          currentStep,
          previous: () => index - 1,
          next: () => index + 1,
          componentName: QUESTION_COMPONENTS.QUESTION_ANSWER,
          inputData: value,
        })
      }
    } else {
      componentList.push({
        currentStep,
        previous: () => currentStep - 1,
        next: null,
        componentName: QUESTION_COMPONENTS.QUESTION_ANSWER,
        inputData: value,
      })

      if (slug === 'how-many-people-are-employed-at-your-company') {
        if (!listNextQuestionIds[1]) {
          index += 1
          componentList.push({
            currentStep,
            previous: null,
            next: null,
            componentName: QUESTION_COMPONENTS.CUSTOMER_SUPPORT,
            inputData: null,
          })
        }

        componentList[currentStep] = {
          ...componentList[currentStep],
          next: (data?: string): number => {
            if (['500 - 1000', 'More than 1000'].includes(data as string))
              return index

            return index + 1
          },
        }
      } else if (slug === 'what-type-of-project-are-you-hiring-for') {
        const additionalData = cloneQuestions.pop()

        index += 1
        componentList.push({
          currentStep,
          previous: () => index - 1,
          next: () => index + 1,
          componentName: QUESTION_COMPONENTS.QUESTION_ANSWER,
          inputData: additionalData,
        })

        componentList[index] = {
          ...componentList[index],
          next: (data?: string): number => {
            if (data === 'New idea or project') return index

            return index + 1
          },
        }
      }
    }
  }

  const length = Object.keys(ADDITIONAL_COMPONENTS).length

  Object.keys(ADDITIONAL_COMPONENTS).forEach((value: string, index) => {
    const componentName = ADDITIONAL_COMPONENTS[value] || ''
    const isLastElement = index === length - 1

    currentStep += 1
    index += 1

    if (isLastElement) {
      componentList.push({
        currentStep: currentStep,
        previous: null,
        next: null,
        componentName,
        inputData: null,
      })
    } else {
      componentList.push({
        currentStep,
        previous: () => index - 1,
        next: () => index + 1,
        componentName,
        inputData: null,
      })
    }
  })

  return componentList
}
