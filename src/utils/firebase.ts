import { getApp, getApps, initializeApp } from 'firebase/app'

import { getAnalytics, isSupported } from 'firebase/analytics'

import { SCREEN } from '@/config/global'

const firebaseConfig = {
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

export const initializeFirebase = () => {
  // Initialize Firebase
  const app = !getApps().length
    ? initializeApp(firebaseConfig.common)
    : getApp()

  // Initialize Analytics and get a reference to the service
  return isSupported().then((yes) => (yes ? getAnalytics(app) : null))
}

export const initializeFetchuntFirebase = () => {
  // Initialize Firebase
  const app = !getApps().length
    ? initializeApp(firebaseConfig.fetchunt)
    : getApp()

  // Initialize Analytics and get a reference to the service
  return isSupported().then((yes) => (yes ? getAnalytics(app) : null))
}

export const loadFirebase = (pageName: string): void => {
  if (SCREEN.FETCHUNT_PAGE === pageName) {
    initializeFetchuntFirebase()
    return
  }

  initializeFirebase()
}
