export interface IJobQuerySearch {
  page?: string
  location?: string
  skills?: string
}
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
  slug: string
  description: string
  externalRecruiter: boolean
  Skills: ISkill[]
  locations: {
    office: string
  }[]
  Tags: ITag[]
}

interface IData {
  list: IJobItem[]
  success: boolean
}

export interface IListJobResponse {
  code: number
  data?: IData
}

export interface ILocationItem {
  id: string
  address: string
  name: string
  descLocation: string
  label: string
  office: string
  priority: number
  createdAt: string
  updatedAt: string
  linkMap?: string
}

interface IJobSkillItem {
  id: number
  isRequired: boolean
  jobId: string
  skillId: string
  createdAt: string
  updatedAt: string
}

export interface ISkillItem {
  id: string
  name: string
  JobSkills: IJobSkillItem[]
  createdAt: string
  updatedAt: string
}

export interface ILocationOption {
  value: string
  label: string
}

export interface ISkillOption {
  value: string
  label: string
}

export type JobToolbarFormValue = {
  location: string
  skill: ISkillOption[]
}

export type JobApplyFormValue = {
  name: string
  phone: string
  email: string
  message: string
  skill: ISkillOption[]
  nameFile: string
  idJob: string
  linkPortfolio: string
  captcha: string
  file: FileList
}

interface IDetailLocation {
  id: string
  name: string
  label: string
  address: string
  office: string
  descLocation: string
  linkMap: string
  priority: number
  createdAt: string
  updatedAt: string
}

interface IDetailClient {
  about: string
}

export interface IDetailTagItem {
  id: number
  title: string
  background: string
  createdAt: string
  updatedAt: string
}

export interface IJobDetail {
  id: string
  title: string
  type: string
  salary: string
  jobStatus: string
  aboutFetch: string
  niceToHave: string
  responsibilities: string
  requirement: string
  benefit: string
  time: string
  timeLocation: string
  metaJob: string
  titlePage: string
  arr_skill_required: string[]
  arr_skill: string[]
  locations: IDetailLocation[]
  client: IDetailClient
  description: string
  externalRecruiter: boolean
  tags: IDetailTagItem[]
}

export type IJobDetailResponse = {
  code: number
  data: IJobDetail
}
