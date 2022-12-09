export const API_SUBCRIBER_BY_EMAIL = 'api/mail/build-team'
export const API_LIST_PUBLIC_BLOG = 'api/blog/public'
export const API_BLOG_RELATED = ({
  id,
  pageSize,
}: {
  id: string
  pageSize: number
}): string => `api/blog/${id}/related?pageSize=${pageSize}`
