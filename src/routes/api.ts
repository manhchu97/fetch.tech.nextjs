export const API_SUBCRIBER_BY_EMAIL = 'api/mail/build-team'
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
