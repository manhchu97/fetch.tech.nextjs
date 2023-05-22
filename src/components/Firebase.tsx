import { useEffect } from 'react'

import { SCREEN } from '@/config/global'

const FirebaseComp = ({ pageName }: { pageName: string }) => {
  if (
    [
      SCREEN.FETCHUNT_PAGE,
      SCREEN.PRIVACY_POLICY_PAGE,
      SCREEN.SERVICE_AGREEMENT_PAGE,
    ].includes(pageName)
  )
    return <FetchuntFirebase />

  return <CommonFirebase />
}

const FetchuntFirebase = () => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') return

    let timer: ReturnType<typeof setTimeout> = setTimeout(() => {})
    let cleanupFn: () => void

    const loadFirebaseScript = async () => {
      const {
        initFirebaseScriptWithDelay,
        initFirebaseEventListener,
        removeFirebaseEventListener,
      } = await import('@/utils/firebase')

      timer = initFirebaseScriptWithDelay()
      cleanupFn = removeFirebaseEventListener
      initFirebaseEventListener()
    }

    loadFirebaseScript()

    return () => {
      clearTimeout(timer)
      cleanupFn?.()
    }
  }, [])

  return null
}

const CommonFirebase = () => {
  useEffect(() => {
    let unmounted = false
    if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') return

    const loadFirebaseScript = async () => {
      const { initializeCommonFirebase } = await import('@/utils/firebase')
      if (unmounted) return

      initializeCommonFirebase()
    }

    loadFirebaseScript()

    return () => {
      unmounted = true
    }
  }, [])

  return null
}

export default FirebaseComp
