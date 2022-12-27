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
  Answers: Answer[] | []
}

export interface ComponentList {
  currentStep: number
  previous: ((data?: string) => number) | null
  next: ((data?: string) => number) | null
  componentName: string
  inputData?: QuestionAnswers | null
}

export interface SectionComponentProps {
  previous?: ((data?: string) => number) | null
  next?: ((data?: string) => number) | null
  inputData?: QuestionAnswers | null
}
