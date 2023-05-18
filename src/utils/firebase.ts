declare global {
  interface Window {
    firebaseDidInit: boolean
  }
}

const INIT_GTM_DELAY = 2500
const EVENTS = ['scroll', 'mousemove', 'touchstart']

const firebaseConfigs = {
  common: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  },
  fetchunt: {
    apiKey: process.env.NEXT_PUBLIC_FETCHUNT_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FETCHUNT_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FETCHUNT_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FETCHUNT_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FETCHUNT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:
      process.env.NEXT_PUBLIC_FETCHUNT_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FETCHUNT_FIREBASE_APP_ID,
  },
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
    const app = !firebase.getApps().length
      ? firebase.initializeApp(firebaseConfigs.common)
      : firebase.getApp()

    // Initialize Analytics and get a reference to the service
    return analytics
      .isSupported()
      .then((yes) => (yes ? analytics.getAnalytics(app) : null))
  })

  removeFirebaseEventListener()
  return firebaseApp
}

const initFirebaseOnEvent = (event: Event) => {
  initializeFirebase()

  // remove the event listener that got triggered
  event?.currentTarget?.removeEventListener(event.type, initFirebaseOnEvent)
}

export const initFirebaseEventListener = (): void => {
  EVENTS.forEach((event) => {
    document.addEventListener(event, initFirebaseOnEvent)
  })
}

export const initFirebaseScriptWithDelay = () => {
  return setTimeout(() => {
    initializeFirebase()
    removeFirebaseEventListener()
  }, INIT_GTM_DELAY)
}

export const removeFirebaseEventListener = (): void => {
  EVENTS.forEach((event) => {
    document.removeEventListener(event, initFirebaseOnEvent)
  })
}

export const initializeFetchuntFirebase = async () => {
  if (window.firebaseDidInit) return false

  // flag to ensure script does not get added to DOM more than once.
  window.firebaseDidInit = true

  const firebaseApp = await Promise.all([
    import('firebase/app'),
    import('firebase/analytics'),
  ]).then(([firebase, analytics]) => {
    // Initialize Firebase
    const app = !firebase.getApps().length
      ? firebase.initializeApp(firebaseConfigs.fetchunt)
      : firebase.getApp()

    // Initialize Analytics and get a reference to the service
    return analytics
      .isSupported()
      .then((yes) => (yes ? analytics.getAnalytics(app) : null))
  })

  removeFetchuntFirebaseEventListener()
  return firebaseApp
}

export const initFetchuntFirebaseOnEvent = (event: Event) => {
  initializeFetchuntFirebase()

  // remove the event listener that got triggered
  event?.currentTarget?.removeEventListener(
    event.type,
    initFetchuntFirebaseOnEvent,
  )
}

export const initFetchuntFirebaseEventListener = (): void => {
  EVENTS.forEach((event) => {
    document.addEventListener(event, initFetchuntFirebaseOnEvent)
  })
}

export const removeFetchuntFirebaseEventListener = (): void => {
  EVENTS.forEach((event) => {
    document.removeEventListener(event, initFetchuntFirebaseOnEvent)
  })
}

export const initFetchuntFirebaseScriptWithDelay = () => {
  return setTimeout(() => {
    initializeFetchuntFirebase()
    removeFetchuntFirebaseEventListener()
  }, INIT_GTM_DELAY)
}
