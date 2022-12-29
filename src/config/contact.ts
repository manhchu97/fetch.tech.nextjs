interface ObjProps {
  [key: string]: string
}

export const COMPONENT_TYPE: ObjProps = {
  INIT: 'init',
  GRID: 'grid',
  RADIO: 'radio',
  TREE: 'tree',
  TEXT: 'text',
  CHECKBOX_REPONSIBILITY: 'checkbox_responsibilities',
  CHECKBOX_REQUIREMENT: 'checkbox_requirements',
  LABEL: 'label',
}

export const QUESTION_COMPONENTS: ObjProps = {
  CLIENT_INFO: 'ClientInfo',
  HIRE_INFO: 'HireInfo',
  QUESTION_ANSWER: 'QuestionAnswer',
  SKILL_REQUIRE: 'SkillRequire',
  CUSTOMER_SUPPORT: 'CustomerSupport',
}

export const ADDITIONAL_COMPONENTS: ObjProps = {
  ABOUT_CLIENT: 'AboutClient',
  RESPONSIBILITY: 'Responsibilite',
  REQUIREMENT: 'Requirement',
  PREVIEW: 'Preview',
  THANKYOU_PAGE: 'ThankyouPage',
}

export const TOTAL_COLUMN_PER_ROW = 3
