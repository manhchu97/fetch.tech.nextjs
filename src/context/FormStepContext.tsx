import React, { createContext, useCallback, useMemo, useState } from 'react'

import { COMPONENT_TYPE } from '@/config/contact'

import {
  INextQuestionValue,
  ISkillResponse,
  IUpdateAnswerByQuestion,
  QuestionAnswers,
  ResultAnswer,
} from '@/types/contact'

type FormStepContextType = {
  skills: ISkillResponse
  questions: QuestionAnswers[]
  listResultAnswers: ResultAnswer[]
  componentType: string
  handleNextStep: () => undefined
  updateAnswerByQuestion: ({
    currentStep,
    answer,
  }: IUpdateAnswerByQuestion) => void
  getNextQuestionValue: () => INextQuestionValue | null
  handlePreviousStep: () => void | undefined
}

const FormStepContext = createContext<FormStepContextType | null>(null)

interface IFormStepProvider {
  children: React.ReactNode
  questions: QuestionAnswers[]
  skills: ISkillResponse
}

const FormStepProvider = ({
  children,
  questions,
  skills,
}: IFormStepProvider) => {
  const [currentPriority, setCurrentPriority] = useState<number>(0)
  const [listResultAnswers, setListResultAnsers] = useState<ResultAnswer[]>([])
  const [componentType, setComponentType] = useState<string>(
    COMPONENT_TYPE.INIT,
  )

  const getNextQuestionValue = useCallback((): INextQuestionValue | null => {
    const length = listResultAnswers.length

    if (!length) return null

    return {
      currentStep: length - 1,
      resultAnswer: listResultAnswers?.[length - 1],
    }
  }, [listResultAnswers])

  const updateAnswerByQuestion = useCallback(
    ({ currentStep, answer }: IUpdateAnswerByQuestion): void => {
      listResultAnswers[currentStep] = {
        ...listResultAnswers[currentStep],
        answer,
      }
      setListResultAnsers(listResultAnswers)
    },
    [listResultAnswers],
  )

  const handlePreviousStep = useCallback((): void | undefined => {
    // Removes the last element from an array
    listResultAnswers.pop()

    const length = listResultAnswers.length

    if (!length) return

    const lastQuestion = listResultAnswers[length - 1]
    const { type = '', priority = 0 } = lastQuestion?.inputData || {}

    setComponentType(type)
    setCurrentPriority(priority)
    setListResultAnsers(listResultAnswers)
  }, [listResultAnswers])

  const handleNextStep = useCallback((): undefined => {
    const length = listResultAnswers.length

    // INITIAL
    if (!length) {
      const currentQuestion: QuestionAnswers = questions[0]

      if (!currentQuestion) return

      const { type = '', priority = 0, id: questionId = '' } = currentQuestion
      const resultAnswer: ResultAnswer = {
        questionId,
        inputData: currentQuestion,
      }

      setComponentType(type)
      setCurrentPriority(priority)
      setListResultAnsers((prev) => [...prev, resultAnswer])

      return
    }

    const currentQuestion: ResultAnswer = listResultAnswers[length - 1]

    if (!currentQuestion) return

    const { questionId = '', answer = '', inputData } = currentQuestion

    const { answers = [] } = inputData

    // answers = []
    if (!answers.length) {
      const nextQuestion = questions.find(
        ({ priority }) => priority === currentPriority + 1,
      )

      if (!nextQuestion) return

      const { type = '', priority = 0, id } = nextQuestion
      const resultAnswer: ResultAnswer = {
        questionId: id,
        inputData: nextQuestion,
      }

      setComponentType(type)
      setCurrentPriority(priority)
      setListResultAnsers((prev) => [...prev, resultAnswer])
      return
    }

    const selectedAnswer = answers.find(
      ({ questionId: question_id, id }) =>
        question_id === questionId && answer === id,
    )

    if (!selectedAnswer) return

    const { nextQuestionId } = selectedAnswer

    // next_question_id = NULL
    if (!nextQuestionId) {
      setComponentType(COMPONENT_TYPE.LABEL)
      setCurrentPriority((prev) => prev + 1)

      return
    }

    const nextQuestion = questions.find(({ id }) => nextQuestionId === id)

    if (!nextQuestion) return

    const { type = '', priority = 0, id } = nextQuestion
    const resultAnswer: ResultAnswer = {
      questionId: id,
      inputData: nextQuestion,
    }

    setComponentType(type)
    setCurrentPriority(priority)
    setListResultAnsers((prev) => [...prev, resultAnswer])
  }, [listResultAnswers, questions, currentPriority])

  const ctx = useMemo(
    () => ({
      questions,
      skills,
      listResultAnswers,
      componentType,
      handleNextStep,
      updateAnswerByQuestion,
      getNextQuestionValue,
      handlePreviousStep,
    }),
    [
      questions,
      skills,
      listResultAnswers,
      componentType,
      handleNextStep,
      updateAnswerByQuestion,
      getNextQuestionValue,
      handlePreviousStep,
    ],
  )

  return (
    <FormStepContext.Provider value={ctx}>{children}</FormStepContext.Provider>
  )
}

export default FormStepProvider

export const useFormStepContext = () => {
  const formStep = React.useContext(FormStepContext)

  if (!formStep) throw Error('FormStepProvider not found')

  return formStep
}
