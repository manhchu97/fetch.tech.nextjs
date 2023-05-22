/**
 * https://unstoppabledomains.com/blog/categories/engineering/article/about-google-pagespeed-insights
 * https://constantsolutions.dk/2020/06/delay-loading-of-google-analytics-google-tag-manager-script-for-better-pagespeed-score-and-initial-load/
 */
import {
  FIREBASE_COMMON_CONFIG,
  FIREBASE_FETCHUNT_CONFIG,
} from '@/config/global'

declare global {
  interface Window {
    firebaseDidInit: boolean
  }
}

const INIT_GTM_DELAY = 2500
const EVENTS = ['scroll', 'mousemove', 'touchstart']

export const initializeCommonFirebase = async () => {
  const firebaseApp = await Promise.all([
    import('firebase/app'),
    import('firebase/analytics'),
  ]).then(([firebase, analytics]) => {
    // Initialize Firebase
    let app = firebase.getApps().find((app) => app.name === 'common')

    if (!app) {
      app = firebase.initializeApp(FIREBASE_COMMON_CONFIG, 'common')
    }

    // Initialize Analytics and get a reference to the service
    return analytics
      .isSupported()
      .then((yes) => (yes ? analytics.getAnalytics(app) : null))
  })

  return firebaseApp
}

export const initializeFirebase = async () => {
  if (window.firebaseDidInit) return false

  // flag to ensure script does not get added to DOM more than once.
  window.firebaseDidInit = true

  const firebaseApp = await Promise.all([
    import('firebase/app'),
    import('firebase/analytics'),
  ]).then(([firebase, analytics]) => {
    // Initialize Firebase
    let app = firebase.getApps().find((app) => app.name === 'fetchunt')

    if (!app) {
      app = firebase.initializeApp(FIREBASE_FETCHUNT_CONFIG, 'fetchunt')
    }

    // Initialize Analytics and get a reference to the service
    return analytics
      .isSupported()
      .then((yes) => (yes ? analytics.getAnalytics(app) : null))
  })

  removeFirebaseEventListener()
  return firebaseApp
}

export const initFirebaseOnEvent = (event: Event) => {
  initializeFirebase()

  // remove the event listener that got triggered
  event?.currentTarget?.removeEventListener(event.type, initFirebaseOnEvent)
}

export const initFirebaseEventListener = (): void => {
  EVENTS.forEach((event) => {
    document.addEventListener(event, initFirebaseOnEvent)
  })
}

export const removeFirebaseEventListener = (): void => {
  EVENTS.forEach((event) => {
    document.removeEventListener(event, initFirebaseOnEvent)
  })
}

export const initFirebaseScriptWithDelay = () => {
  return setTimeout(() => {
    initializeFirebase()
    removeFirebaseEventListener()
  }, INIT_GTM_DELAY)
}
