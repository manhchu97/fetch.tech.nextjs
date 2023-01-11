export const HOST_API = process.env.NEXT_PUBLIC_HOST_API
export const PORTAL_API = process.env.NEXT_PUBLIC_PORTAL_API
export const FACEBOOK_APP_ID = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ''
export const FACEBOOK_PAGE_ID = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || ''
export const CAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || ''
export const IMAGE_WESERV_URL = 'https://wsrv.nl'
export const CDN_IMAGE_SERVER = `${IMAGE_WESERV_URL}?url=${PORTAL_API}`

// PAGING
export const DEFAULT_PAGE_SIZE = 10
export const DEFAULT_PAGE_NUMBER = 1

// COLOR
export const PRIMARY_COLOR = '#ffbe16'
