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
  locationId: string
  type: string
  salary: string
  slug: string
  description: string
  externalRecruiter: boolean
  Skills: ISkill[]
  Location: {
    office: string
  }
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
  address: string
  office: string
  descLocation: string
  linkMap: string
  createdAt: string
  updatedAt: string
}

interface IDetailClient {
  id: number
  name: string
  about: string
  background: string
  token: string
  createdAt: string
  updatedAt: string
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
  metaJob: string
  titlePage: string
  arr_skill_required: string[]
  arr_skill: string[]
  location: IDetailLocation
  client: IDetailClient
  description: string
  externalRecruiter: boolean
  tags: IDetailTagItem[]
}

export type IJobDetailResponse = {
  code: number
  data: IJobDetail
}
