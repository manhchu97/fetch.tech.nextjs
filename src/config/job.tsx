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
}

export enum FORM_FIELD_JOB_TOOLBAR {
  LOCATION = 'location',
  SKILL = 'skill',
}

export const fileMatch = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

export const fileAccept =
  'application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document'
