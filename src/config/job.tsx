import { ISalary } from '@/types/job'

import { fNumberWithDot } from '@/utils/formatNumber'
import { replaceAll } from '@/utils/replace'

export enum SearchToolbarType {
  CHANGE = 'CHANGE',
}

export interface SearchToolbarAction {
  type: SearchToolbarType
  payload: SearchToolbarState
}

export interface SearchToolbarState {
  location: string
  skill: string
}

export enum FORM_FIELD_VALUES {
  NAME = 'name',
  EMAIL = 'email',
  PHONE = 'phone',
  MESSAGE = 'message',
  SKILL = 'skill',
  LINK_PORTFOLIO = 'linkPortfolio',
  CAPTCHA = 'captcha',
  FILE = 'file',
  NAME_FILE = 'nameFile',
  ID_JOB = 'idJob',
  CODE_BITLY = 'codeBitly',
}

export enum FORM_FIELD_JOB_TOOLBAR {
  LOCATION = 'location',
  SKILL = 'skill',
}

export enum JOB_STATUS {
  ACTIVE = 'Active',
  CLOSE = 'Close',
  PENDING = 'Pending',
  ARCHIVE = 'Archive',
}

export const fileMatch = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

export const fileAccept =
  'application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document'

export const formatSalary = (salary: ISalary | string): string => {
  if (typeof salary === 'string') return salary

  const { min: minSalary = 0, max: maxSalary = 0, currency = '' } = salary || {}

  const fmtMinSalary = Number.parseInt(
    replaceAll(String(minSalary), '.', ''),
    10,
  )
  const fmtMaxSalary = Number.parseInt(
    replaceAll(String(maxSalary), '.', ''),
    10,
  )

  if (!fmtMaxSalary || !currency) return 'NaN'

  if (fmtMinSalary === 0 && fmtMaxSalary > fmtMinSalary)
    return `Up to ${fNumberWithDot(fmtMaxSalary)} ${currency}`

  return `${fNumberWithDot(minSalary)} - ${fNumberWithDot(
    fmtMaxSalary,
  )} ${currency}`
}
