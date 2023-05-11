import { EMAIL_REGEX } from '@/config/global'

export const emailValidator = (email: string): string => {
  if (!email) return 'Please input your email.'

  if (!new RegExp(EMAIL_REGEX).test(email)) return 'Email is invalid.'

  return ''
}
