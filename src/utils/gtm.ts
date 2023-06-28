/**
 * https://unstoppabledomains.com/blog/categories/engineering/article/about-google-pagespeed-insights
 * https://constantsolutions.dk/2020/06/delay-loading-of-google-analytics-google-tag-manager-script-for-better-pagespeed-score-and-initial-load/
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FETCHUNT_GOOGLE_TAG_MANAGER_KEY } from '@/config/global'

declare global {
  interface Window {
    dataLayer?: any[]
    gtmDidInit: boolean
  }
}

const INIT_GTM_DELAY = 2500
const EVENTS = ['scroll', 'mousemove', 'touchstart']

export const loadGtm = (gtmId: string): number => {
  function gtag(...args: any[]): number {
    const w: Window = window
    w.dataLayer = w.dataLayer || []
    return w.dataLayer.push(args)
  }

  gtag('js', new Date())
  return gtag('config', gtmId, {
    page_path: window.location.pathname,
  })
}

export const initGTM = (): boolean | undefined => {
  if (window.gtmDidInit) return false

  // flag to ensure script does not get added to DOM more than once.
  window.gtmDidInit = true

  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.id = 'gtm-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${FETCHUNT_GOOGLE_TAG_MANAGER_KEY}`

  // ensure PageViews is always tracked (on script load)
  script.onload = () => {
    loadGtm(FETCHUNT_GOOGLE_TAG_MANAGER_KEY)
  }

  document.head.appendChild(script)

  return true
}

export const initGTMOnEvent = (event: Event): void => {
  initGTM()

  // remove the event listener that got triggered
  event?.currentTarget?.removeEventListener(event.type, initGTMOnEvent)
}

export const initGTMEventListener = (): void => {
  EVENTS.forEach((event) => {
    document.addEventListener(event, initGTMOnEvent, { passive: true })
  })
}

export const removeGTMEventListener = (): void => {
  EVENTS.forEach((event) => {
    document.removeEventListener(event, initGTMOnEvent)
  })
}

export const initGTMScriptWithDelay = (): NodeJS.Timeout => {
  return setTimeout(() => {
    initGTM()
    removeGTMEventListener()
  }, INIT_GTM_DELAY)
}
