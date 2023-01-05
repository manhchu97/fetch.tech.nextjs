import { REGEX_SPECIAL_CHARS, REGEX_WHOLE_MATCH } from '@/config/global'

// https://stackoverflow.com/questions/1144783/how-do-i-replace-all-occurrences-of-a-string-in-javascript
const escapeRegExp = (str: string) =>
  str.replace(REGEX_SPECIAL_CHARS, REGEX_WHOLE_MATCH)

export const replaceAll = (str: string, find: string, replace: string) =>
  str.replace(new RegExp(escapeRegExp(find), 'g'), replace)
