export interface CaseStudiesTypeProps {
  [name: string]: string
}

export interface CSTabHeaderProps {
  type: string
  title: string
}

export interface TabContentProps {
  customerInfo: CSTabContentCustomerInfo
  teamInfo: CSTabContentTeamInfo
  projectInfo: CSTabContentProjectInfo
}

export interface CSTabContentCustomerInfo {
  general: CSTabContentGeneral[]
  logoImg: string
}

export interface CSTabContentGeneral {
  key: string
  value: string
}

export interface CSTabContentTeamInfo {
  title: string
  subTitle?: string
  description: string[]
}

export interface CSTabContentProjectInfo {
  preriod: string
  mainInfo: CSTabContentMainInfo[]
}

export interface CSTabContentMainInfo {
  title: string
  description: string[]
}
