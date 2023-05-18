import { useEffect } from 'react'

import type { AppProps } from 'next/app'

import 'animate.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { SCREEN } from '@/config/global'

import ToastProvider from '@/context/ToastContext'

import '@/styles/fonts.scss'
import '@/styles/globals.scss'
import '@/styles/modal.scss'
// overrides CSS
import '@/styles/overrides/typography.scss'
import '@/styles/toast.scss'

interface CustomPageProps {
  pageName?: string
}

const MyApp = ({ Component, pageProps }: AppProps<CustomPageProps>) => {
  const { pageName = '' } = pageProps

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> = setTimeout(() => {})
    let cleanupFn: () => void

    const loadGTMScript = async () => {
      const gtmModule = await import('@/utils/gtm')

      // Destructure the functions from the imported module
      const {
        initGTMScriptWithDelay,
        initGTMEventListener,
        removeGTMEventListener,
      } = gtmModule

      cleanupFn = removeGTMEventListener
      timer = initGTMScriptWithDelay()
      initGTMEventListener()
    }

    loadGTMScript()

    return () => {
      clearTimeout(timer)
      cleanupFn?.()
    }
  }, [])

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_NODE_ENV)
    if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') return

    let timer: ReturnType<typeof setTimeout> = setTimeout(() => {})
    let cleanupFn: () => void

    const loadFirebaseScript = async () => {
      const firebaseModule = await import('@/utils/firebase')

      // Destructure the functions from the imported module
      const {
        initFirebaseScriptWithDelay,
        initFetchuntFirebaseScriptWithDelay,
        initFirebaseEventListener,
        initFetchuntFirebaseEventListener,
        removeFirebaseEventListener,
        removeFetchuntFirebaseEventListener,
      } = firebaseModule

      if (SCREEN.FETCHUNT_PAGE === pageName) {
        timer = initFetchuntFirebaseScriptWithDelay()
        cleanupFn = removeFetchuntFirebaseEventListener
        initFetchuntFirebaseEventListener()
      } else {
        timer = initFirebaseScriptWithDelay()
        cleanupFn = removeFirebaseEventListener
        initFirebaseEventListener()
      }
    }

    loadFirebaseScript()

    return () => {
      clearTimeout(timer)
      cleanupFn?.()
    }
  }, [pageName])

  return (
    <>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </>
  )
}

export default MyApp
