export const HOST_API = process.env.NEXT_PUBLIC_HOST_API
export const FACEBOOK_APP_ID = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ''
export const FACEBOOK_PAGE_ID = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || ''
export const CAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || ''
export const GOOGLE_TAG_MANAGER_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_KEY || ''
export const IMAGE_WESERV_URL = 'https://wsrv.nl'
export const CDN_IMAGE_SERVER = `${IMAGE_WESERV_URL}?url=${HOST_API}`

// PAGING
export const DEFAULT_PAGE_SIZE = 10
export const DEFAULT_PAGE_NUMBER = 1
export const DOTS = '...'

// COLOR
export const PRIMARY_COLOR = '#ffbe16'

export const REGEX_REMOVE_HTML = /(<([^>]+)>)/gi

export const EMAIL_REGEX =
  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i

export const SCREEN = {
  HOME_PAGE: 'HOME_PAGE',
  EMPLOYEE_PAGE: 'EMPLOYEE_PAGE',
  CONTACT_PAGE: 'CONTACT_PAGE',
  COMPANY_PAGE: 'COMPANY_PAGE',
  SERVICE_PAGE: 'SERVICE_PAGE',
  CALCULATOR_PAGE: 'CALCULATOR_PAGE',
  OURSTORY_PAGE: 'OURSTORY_PAGE',
  CASE_STUDIES_PAGE: 'CASE_STUDIES_PAGE',
  CASE_STUDIES_DETAIL_PAGE: 'CASE_STUDIES_DETAIL_PAGE',
  FAQ_PAGE: 'FAQ_PAGE',
  CAREERS_PAGE: 'CAREERS_PAGE',
  CAREERS_DETAIL_PAGE: 'CAREERS_DETAIL_PAGE',
  BLOG_PAGE: 'BLOG_PAGE',
  BLOG_DETAIL_PAGE: 'BLOG_DETAIL_PAGE',
  FETCHUNT_PAGE: 'FETCHUNT_PAGE',
  PRIVACY_POLICY_PAGE: 'PRIVACY_POLICY_PAGE',
  SERVICE_AGREEMENT_PAGE: 'SERVICE_AGREEMENT_PAGE',
  FREQUENTLY_QUESTIONS_PAGE: 'FREQUENTLY_QUESTIONS_PAGE',
}

export const FIREBASE_COMMON_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

export const FIREBASE_FETCHUNT_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FETCHUNT_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FETCHUNT_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FETCHUNT_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FETCHUNT_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FETCHUNT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.NEXT_PUBLIC_FETCHUNT_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FETCHUNT_FIREBASE_APP_ID,
}
