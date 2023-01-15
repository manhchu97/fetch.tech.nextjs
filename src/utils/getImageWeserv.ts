import qs from 'query-string'

import { CDN_IMAGE_SERVER } from '@/config/global'

interface IOptionProps {
  w?: number
  h?: number
}

export const getImageWeserv = (url: string, options: IOptionProps): string => {
  if (!url) return ''

  if (!Object.keys(options).length)
    return `${CDN_IMAGE_SERVER}/${url}&output=webp`

  return `${CDN_IMAGE_SERVER}/${url}&${qs.stringify(options)}&output=webp`
}
