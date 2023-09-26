import qs from 'query-string'

import {
  CDN_IMAGE_SERVER,
  IMAGE_WESERV_URL,
  REGEX_S3_DIGITAL_OCEAN,
} from '@/config/global'

interface IOptionProps {
  w?: number
  h?: number
}

export const getImageWeserv = (url: string, options: IOptionProps): string => {
  if (!url) return ''

  const isS3DigitalLink = REGEX_S3_DIGITAL_OCEAN.test(url)

  if (isS3DigitalLink) {
    if (!Object.keys(options).length)
      return `${IMAGE_WESERV_URL}?url=${url}&output=webp`

    return `${IMAGE_WESERV_URL}?url=${url}&${qs.stringify(options)}&output=webp`
  }

  if (!Object.keys(options).length)
    return `${CDN_IMAGE_SERVER}/${url}&output=webp`

  return `${CDN_IMAGE_SERVER}/${url}&${qs.stringify(options)}&output=webp`
}
