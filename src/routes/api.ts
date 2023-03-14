export const API_SUBCRIBER_BY_EMAIL = 'api/slack/notification-team'
export const API_LIST_QUESTIONS = 'api/questions'
export const API_LIST_PUBLIC_BLOG = 'api/blog/public'
export const API_BLOG_RELATED = ({
  id,
  pageSize,
}: {
  id: string
  pageSize: number
}): string => `api/blog/${id}/related?pageSize=${pageSize}`
export const API_LIST_JOB = 'api/jobs'
export const API_JOB_DETAIL = 'api/detail/jobs'
export const API_LIST_SKILL = 'api/all/skill'
export const API_LIST_LOCATION = 'api/locations'
export const API_APPLY_JOB = 'api/candidates'
export const API_CHECK_CANDIDATE = 'api/v1/check/candidate'
export const API_UPLOAD_PORTFOLIO = 'api/cards/upload/cv'
export const API_TECH = 'api/tech'
export const API_SUBMIT_CLIENT_INFO = 'api/clients/info'
export const API_SUBMIT_QUIZ = 'api/client_survey_result/submit-quiz'
export const API_LIST_JOB_DESC_ATTRIBUTES = 'api/jobs/job-desc-attribute'
export const API_FINISH_SURVEY = 'api/client_survey_result/finish-survey'
