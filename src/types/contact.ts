export interface Answer {
  id: string
  title: string
  description?: string | null
  image?: string | null
  questionId: string
  nextQuestionId: string | null
  priority: number
  createdAt: string
  updatedAt: string
}

export interface QuestionAnswers {
  id: string
  title: string
  slug: string
  type: string
  priority: number
  createdAt: string
  updatedAt: string
  answers: Answer[] | []
}

interface IQuestionResponseData {
  list: QuestionAnswers[]
  success: boolean
}

export interface IListQuestionsResponse {
  code: number
  data?: IQuestionResponseData
}

export interface ResultAnswer {
  questionId: string
  answer?: string | null
  inputData: QuestionAnswers
}

export interface IUpdateAnswerByQuestion {
  currentStep: number
  answer: string | null
}

export interface INextQuestionValue {
  currentStep?: number
  resultAnswer?: ResultAnswer
}
