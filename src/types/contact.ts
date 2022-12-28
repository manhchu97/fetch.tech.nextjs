export interface Answer {
  id: string
  title: string
  description?: string | null
  image?: string | null
  question_id: string
  next_question_id: string | null
  priority: number
  created_timestamp: string
  updated_timestamp: string
}

export interface QuestionAnswers {
  id: string
  title: string
  slug: string
  type: string
  priority: number
  created_timestamp: string
  updated_timestamp: string
  answers: Answer[] | []
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
