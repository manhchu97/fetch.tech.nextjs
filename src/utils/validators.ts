import { EMAIL_REGEX } from '@/config/global'

export const emailValidator = (email: string): string => {
  if (!email) return 'required'

  if (!new RegExp(EMAIL_REGEX).test(email)) return 'email'

  return ''
}
