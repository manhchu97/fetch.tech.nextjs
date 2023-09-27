import { ISalary } from './job'

export interface ISkill {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface ITag {
  id: number
  title: string
  background: string
  createdAt: string
  updatedAt: string
}

export interface IJobItem {
  id: string
  title: string
  content: string
  type: string
  salary: string
  salaryJob: ISalary
  slug: string
  description: string
  externalRecruiter: boolean
  Skills: ISkill[]
  locations: {
    office: string
  }[]
  Tags: ITag[]
  time?: string
  totalBonus?: number
}

interface IData {
  list: IJobItem[]
  success: boolean
}

export interface IListJobResponse {
  code: number
  data?: IData
}
