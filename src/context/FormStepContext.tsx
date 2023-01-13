import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  ANIMATED_COMPONENT,
  COMPONENT_TYPE,
  QUIZ_RESULT_KEY,
} from '@/config/contact'

import { API_SUBMIT_QUIZ } from '@/routes/api'

import {
  INextQuestionValue,
  ISkillResponse,
  IUpdateAnswerByQuestion,
  QuestionAnswers,
  ResultAnswer,
} from '@/types/contact'

import { _postApi } from '@/utils/axios'
import { getDataFromStorage, saveDataToStorage } from '@/utils/storage'

type FormStepContextType = {
  skills: ISkillResponse
  questions: QuestionAnswers[]
  clientId: string | number
  requirements: string[]
  responsibilities: string[]
  listResultAnswers: ResultAnswer[]
  componentType: string
  isAnimatedComponent: boolean
  animation: string
  handleNextStep: () => undefined
  updateAnswerByQuestion: ({
    currentStep,
    answer,
    answerRaw,
  }: IUpdateAnswerByQuestion) => void
  getNextQuestionValue: () => INextQuestionValue | null
  handlePreviousStep: () => void | undefined
  handleGetClientAnswers: (id: string | number, result?: ResultAnswer[]) => void
  saveAnswerByQuestion: () => void
  handlePreview: () => void
  handleBackFromPreview: () => void
  handleFinishStep: () => void
}

const FormStepContext = createContext<FormStepContextType | null>(null)

interface IFormStepProvider {
  children: React.ReactNode
  questions: QuestionAnswers[]
  skills: ISkillResponse
  requirements: string[]
  responsibilities: string[]
}

enum AnimatedActionType {
  PREVIOUS = 'Previous',
  NEXT = 'Next',
}

enum AnimationType {
  ZOOM_IN = 'animate__zoomIn',
  FADE_IN_LEFT = 'animate__fadeInLeft',
  FADE_IN_RIGHT = 'animate__fadeInRight',
}

const FormStepProvider = ({
  children,
  questions,
  skills,
  requirements,
  responsibilities,
}: IFormStepProvider) => {
  const [clientId, setClientId] = useState<string | number>('')
  const [currentPriority, setCurrentPriority] = useState<number>(0)
  const [listResultAnswers, setListResultAnswers] = useState<ResultAnswer[]>([])
  const [componentType, setComponentType] = useState<string>(
    COMPONENT_TYPE.INIT,
  )
  const [animatedActionType, setAnimatedActionType] =
    useState<AnimatedActionType>(AnimatedActionType.NEXT)
  const [animation, setAnimation] = useState<AnimationType>(
    AnimationType.FADE_IN_LEFT,
  )

  const isAnimatedComponent = ANIMATED_COMPONENT.includes(componentType)

  useEffect(() => {
    if (componentType === COMPONENT_TYPE.GRID) {
      setAnimation(AnimationType.ZOOM_IN)
      return
    }

    if (animatedActionType === AnimatedActionType.PREVIOUS) {
      setAnimation(AnimationType.FADE_IN_LEFT)
      return
    }

    setAnimation(AnimationType.FADE_IN_RIGHT)
  }, [animatedActionType, componentType])

  useEffect(() => {
    const { clientId, currentPriority, listResultAnswers, questionType } =
      getDataFromStorage(QUIZ_RESULT_KEY) || {}

    setClientId(clientId || '')
    setCurrentPriority(currentPriority || 0)
    setListResultAnswers(listResultAnswers || [])
    setComponentType(questionType || COMPONENT_TYPE.INIT)
  }, [])

  const getNextQuestionValue = useCallback((): INextQuestionValue | null => {
    const length = listResultAnswers.length

    if (!length) return null

    return {
      currentStep: length - 1,
      resultAnswer: listResultAnswers?.[length - 1],
    }
  }, [listResultAnswers])

  const updateAnswerByQuestion = useCallback(
    ({ currentStep, answer, answerRaw }: IUpdateAnswerByQuestion): void => {
      listResultAnswers[currentStep] = {
        ...listResultAnswers[currentStep],
        answer,
        answerRaw,
      }
      setListResultAnswers(listResultAnswers)
    },
    [listResultAnswers],
  )

  const saveAnswerByQuestion = useCallback(async () => {
    saveDataToStorage(QUIZ_RESULT_KEY, {
      currentPriority: currentPriority,
      clientId,
      questionType:
        listResultAnswers[listResultAnswers.length - 1].inputData.type,
      listResultAnswers,
    })

    const response = await _postApi(API_SUBMIT_QUIZ, {
      clientId,
      result: listResultAnswers,
    })

    if (!response?.data?.success) throw new Error(response?.data?.message)
  }, [clientId, listResultAnswers, currentPriority])

  const handlePreviousStep = useCallback((): void | undefined => {
    // Removes the last element from an array
    listResultAnswers.pop()

    const length = listResultAnswers.length

    if (!length) return

    const lastQuestion = listResultAnswers[length - 1]
    const { type = '', priority = 0 } = lastQuestion?.inputData || {}

    setComponentType(type)
    setCurrentPriority(priority)
    setListResultAnswers(listResultAnswers)
    setAnimatedActionType(AnimatedActionType.PREVIOUS)
  }, [listResultAnswers])

  const handleNextStep = useCallback((): undefined => {
    const length = listResultAnswers.length
    setAnimatedActionType(AnimatedActionType.NEXT)

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
      setListResultAnswers((prev) => [...prev, resultAnswer])

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
      setListResultAnswers((prev) => [...prev, resultAnswer])
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
    setListResultAnswers((prev) => [...prev, resultAnswer])
  }, [listResultAnswers, questions, currentPriority])

  const handleGetClientAnswers = useCallback(
    (id: string | number, answers?: ResultAnswer[]) => {
      setClientId(id)

      if (!answers) {
        handleNextStep()
        return
      }

      const { inputData } = answers[answers.length - 1]
      const { priority, type } = inputData

      setListResultAnswers(answers)
      setCurrentPriority(priority)
      setComponentType(type)

      saveDataToStorage(QUIZ_RESULT_KEY, {
        currentPriority: priority,
        clientId: id,
        questionType: type,
        listResultAnswers: answers,
      })
    },
    [handleNextStep],
  )

  const handlePreview = useCallback(() => {
    setComponentType(COMPONENT_TYPE.PREVIEW)
  }, [])

  const handleBackFromPreview = useCallback(() => {
    setAnimatedActionType(AnimatedActionType.PREVIOUS)
    setComponentType(COMPONENT_TYPE.CHECKBOX_REQUIREMENT)
  }, [])

  const handleFinishStep = useCallback(() => {
    setComponentType(COMPONENT_TYPE.FINISH)
  }, [])

  const ctx = useMemo(
    () => ({
      questions,
      skills,
      clientId,
      requirements,
      responsibilities,
      listResultAnswers,
      componentType,
      isAnimatedComponent,
      animation,
      handleNextStep,
      updateAnswerByQuestion,
      getNextQuestionValue,
      handlePreviousStep,
      handleGetClientAnswers,
      saveAnswerByQuestion,
      handlePreview,
      handleBackFromPreview,
      handleFinishStep,
    }),
    [
      questions,
      skills,
      clientId,
      requirements,
      responsibilities,
      listResultAnswers,
      componentType,
      isAnimatedComponent,
      animation,
      handleNextStep,
      updateAnswerByQuestion,
      getNextQuestionValue,
      handlePreviousStep,
      handleGetClientAnswers,
      saveAnswerByQuestion,
      handlePreview,
      handleBackFromPreview,
      handleFinishStep,
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
