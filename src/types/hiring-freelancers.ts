export interface IJobSkill {
  id: string
  jobId: string
  skillId: string
  isRequired: boolean
  createdAt: string
  updatedAt: string
}

export interface ISkillData {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  JobSkills: IJobSkill[]
}

export interface ISkillResponseData {
  success: boolean
  skills: ISkillData[]
}

export interface ISkillResponse {
  code: number
  data?: ISkillResponseData
}
