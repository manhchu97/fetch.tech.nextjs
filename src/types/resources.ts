export interface CaseStudiesTypeProps {
  [name: string]: string
}

export interface TabContentProps {
  bannerImage: string
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

export interface CSListData {
  image: string
  title: string
  slug: string
  imgWidth: number
  imgHeight: number
}

export interface ExchangeRateRequestApiResponse {
  results: string
}

export interface ExchangeRate {
  buy_cash: number
  buy_transfer: number
  currency: string
  sell: number
}

export interface ExchangeRateResponse {
  results: ExchangeRate[]
}
