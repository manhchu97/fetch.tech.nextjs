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
