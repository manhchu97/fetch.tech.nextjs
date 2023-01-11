interface ObjProps {
  [key: string]: string
}

export const COMPONENT_TYPE: ObjProps = {
  INIT: 'init',
  GRID: 'grid',
  RADIO: 'radio',
  RADIO_FLEX_LABEL: 'radio_flex_label',
  TREE: 'tree',
  TEXT: 'text',
  CHECKBOX_REPONSIBILITY: 'checkbox_responsibilities',
  CHECKBOX_REQUIREMENT: 'checkbox_requirements',
  LABEL: 'label',
  PREVIEW: 'preview',
  FINISH: 'finish',
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

export enum TYPE_SUBMIT_FINISH {
  ADD_JOB = 'addJob',
  SEND_INFO = 'sendInfo',
}

export const TOTAL_COLUMN_PER_ROW = 3

export const QUIZ_RESULT_KEY = 'QUIZ_RESULT'

export const aboutFetch = `<h3><span style="color: #FFBE16;font-size: 20px"><strong>1. INTRODUCTION</strong></span></h3><h4 style="margin: 0.5em 0; font-size: 16px;"><br/><strong>a. About Fetch:</strong></h4>
    <p>Fetch Technology Vietnam is a comprehensive global provider of HR and Talent Acquisition Services, focusing primarily in the technology fields. Founded in 2016, Fetch Technology Vietnam helps foreign companies of all types and sizes reach their potential by providing the talent and support to efficiently build and scale a high-performing, distributed workforce in Vietnam.</p>
    <p>Our mission is to offer Vietnam's most talented technologists a platform to connect with some of the world's leading tech companies and build their expertise on a global scale. Over 4 years, Fetch has built a good reputation and is trusted by many Vietnamese and foreign companies; And Fetch will continue its good work to bridge the divide between the World and the Vietnam Tech sector.</p>`

export const getAboutClient = (content: string) =>
  `<h4 style="margin: 0.5em 0; font-size: 16px;"><br/><strong>b. About Client:</strong></h4>${content}`

export const getSkillRequired = (content: string) => {
  return `<h3><span style="color: #FFBE16;font-size: 20px"><strong>Skill Expected</strong></span></h3><div className="skill-tag-list">${content}</div>`
}

export const getResponsibilities = (content: string) => {
  return `<h3><span style="color: #FFBE16;font-size: 20px"><strong>2. RESPONSIBILITES</strong></span></h3><ul style="margin-top: 0.75em; margin-bottom: 0.75em; margin-left: 2em;">${content}</ul>`
}

export const getRequirement = (content: string) => {
  return `<h3><span style="color: #FFBE16;font-size: 20px"><strong>3. REQUIREMENT</strong></span></h3><ul style="margin-top: 0.75em; margin-bottom: 0.75em; margin-left: 2em;">${content}</ul>`
}

export const getNiceToHave = (content: string) => {
  return content
    ? `<h4><span style="font-size: 16px"><strong>*** Nice to have</strong></span></h4><ul style="margin-top: 0.75em; margin-bottom: 0.75em; margin-left: 2em;">${content}</ul>`
    : ''
}
